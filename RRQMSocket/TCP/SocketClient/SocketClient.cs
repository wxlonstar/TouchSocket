//------------------------------------------------------------------------------
//  此代码版权归作者本人若汝棋茗所有
//  源代码使用协议遵循本仓库的开源协议及附加协议，若本仓库没有设置，则按MIT开源协议授权
//  CSDN博客：https://blog.csdn.net/qq_40374647
//  哔哩哔哩视频：https://space.bilibili.com/94253567
//  Gitee源代码仓库：https://gitee.com/RRQM_Home
//  Github源代码仓库：https://github.com/RRQM
//  交流QQ群：234762506
//  感谢您的下载和使用
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
using RRQMCore.ByteManager;
using RRQMCore.Exceptions;
using RRQMCore.Log;
using RRQMCore.Pool;
using System;
using System.Net.Sockets;

namespace RRQMSocket
{
    /// <summary>
    /// 服务器辅助类
    /// </summary>

    public abstract class SocketClient : BaseSocket, ISocketClient, IHandleBuffer, IPoolObject
    {
        /// <summary>
        /// 构造函数
        /// </summary>
        public SocketClient()
        {
            this.receiveEventArgs = new SocketAsyncEventArgs();
            this.receiveEventArgs.Completed += this.EventArgs_Completed;
        }

        internal bool breakOut;
        internal BufferQueueGroup queueGroup;
        private bool isBeginReceive;
        private SocketAsyncEventArgs receiveEventArgs; 

        /// <summary>
        /// 包含此辅助类的主服务器类
        /// </summary>
        public IService Service { get; internal set; }

        /// <summary>
        /// 用于索引的ID
        /// </summary>
        public string ID { get; internal set; }

        /// <summary>
        /// 判断该实例是否还在线
        /// </summary>
        public bool Online { get { return !this.breakOut; } }

        private DataHandlingAdapter dataHandlingAdapter;

        /// <summary>
        /// 数据处理适配器
        /// </summary>
        public DataHandlingAdapter DataHandlingAdapter
        {
            get { return dataHandlingAdapter; }
            set
            {
                dataHandlingAdapter = value;
                if (dataHandlingAdapter != null)
                {
                    dataHandlingAdapter.BytePool = this.BytePool;
                    dataHandlingAdapter.Logger = this.Logger;
                    dataHandlingAdapter.ReceivedCallBack = this.HandleReceivedData;
                    dataHandlingAdapter.SendCallBack = this.Sent;
                }
            }
        }

        /// <summary>
        /// 是否为新建对象
        /// </summary>
        public bool NewCreate { get; set; }

        /// <summary>
        /// 标记
        /// </summary>
        public object Flag { get; set; }

        /// <summary>
        /// 获取内存池实例
        /// </summary>
        public BytePool BytePool { get { return this.queueGroup.bytePool; } }

        /// <summary>
        /// 处理已接收到的数据
        /// </summary>
        /// <param name="byteBlock"></param>
        /// <param name="obj"></param>
        protected abstract void HandleReceivedData(ByteBlock byteBlock, object obj);

        /// <summary>
        /// 发送字节流
        /// </summary>
        /// <param name="buffer"></param>
        /// <exception cref="RRQMNotConnectedException"></exception>
        /// <exception cref="RRQMOverlengthException"></exception>
        /// <exception cref="RRQMException"></exception>
        public virtual void Send(byte[] buffer)
        {
            this.Send(buffer, 0, buffer.Length);
        }

        /// <summary>
        /// 发送字节流
        /// </summary>
        /// <param name="buffer"></param>
        /// <param name="offset"></param>
        /// <param name="length"></param>
        /// <exception cref="RRQMNotConnectedException"></exception>
        /// <exception cref="RRQMOverlengthException"></exception>
        /// <exception cref="RRQMException"></exception>
        public virtual void Send(byte[] buffer, int offset, int length)
        {
            this.dataHandlingAdapter.Send(buffer, offset, length,false);
        }

        /// <summary>
        /// 发送流中的有效数据
        /// </summary>
        /// <param name="byteBlock"></param>
        /// <exception cref="RRQMNotConnectedException"></exception>
        /// <exception cref="RRQMOverlengthException"></exception>
        /// <exception cref="RRQMException"></exception>
        public virtual void Send(ByteBlock byteBlock)
        {
            this.Send(byteBlock.Buffer, 0, (int)byteBlock.Length);
        }

        /// <summary>
        /// IOCP发送
        /// </summary>
        /// <param name="buffer"></param>
        /// <param name="offset"></param>
        /// <param name="length"></param>
        /// <exception cref="RRQMNotConnectedException"></exception>
        /// <exception cref="RRQMOverlengthException"></exception>
        /// <exception cref="RRQMException"></exception>
        public virtual void SendAsync(byte[] buffer, int offset, int length)
        {
            this.dataHandlingAdapter.Send(buffer, offset, length, true);
        }

        /// <summary>
        /// IOCP发送
        /// </summary>
        /// <param name="buffer"></param>
        /// <exception cref="RRQMNotConnectedException"></exception>
        /// <exception cref="RRQMOverlengthException"></exception>
        /// <exception cref="RRQMException"></exception>
        public virtual void SendAsync(byte[] buffer)
        {
            this.SendAsync(buffer, 0, buffer.Length);
        }

        /// <summary>
        /// IOCP发送流中的有效数据
        /// </summary>
        /// <param name="byteBlock"></param>
        /// <exception cref="RRQMNotConnectedException"></exception>
        /// <exception cref="RRQMOverlengthException"></exception>
        /// <exception cref="RRQMException"></exception>
        public virtual void SendAsync(ByteBlock byteBlock)
        {
            this.SendAsync(byteBlock.Buffer, 0, (int)byteBlock.Length);
        }

        private void Sent(byte[] buffer, int offset, int length, bool isAsync)
        {
            if (!this.Online)
            {
                throw new RRQMNotConnectedException("该实例已断开");
            }
            try
            {
                if (isAsync)
                {
                    SocketAsyncEventArgs sendEventArgs = new SocketAsyncEventArgs();
                    sendEventArgs.Completed += EventArgs_Completed;
                    sendEventArgs.SetBuffer(buffer, offset, length);
                    sendEventArgs.RemoteEndPoint = this.MainSocket.RemoteEndPoint;
                    if (!this.MainSocket.SendAsync(sendEventArgs))
                    {
                        // 同步发送时处理发送完成事件
                        this.ProcessSend(sendEventArgs);
                    }
                }
                else
                {
                    int r = 0;
                    while (length > 0)
                    {
                        r = MainSocket.Send(buffer, offset, length, SocketFlags.None);
                        if (r == 0 && length > 0)
                        {
                            throw new RRQMException("发送数据不完全");
                        }
                        offset += r;
                        length -= r;
                    }
                }
            }
            catch (Exception e)
            {
                throw new RRQMException(e.Message);
            }
        }

        /// <summary>
        /// 启动消息接收
        /// </summary>
        internal void BeginReceive()
        {
            if (!this.isBeginReceive)
            {
                try
                {
                    ByteBlock byteBlock = this.BytePool.GetByteBlock(this.BufferLength);
                    this.receiveEventArgs.UserToken = byteBlock;
                    this.receiveEventArgs.SetBuffer(byteBlock.Buffer, 0, byteBlock.Buffer.Length);
                    if (!MainSocket.ReceiveAsync(this.receiveEventArgs))
                    {
                        ProcessReceived(this.receiveEventArgs);
                    }
                }
                catch
                {
                    this.breakOut = true;
                }
                this.isBeginReceive = true;
            }
        }

        private void EventArgs_Completed(object sender, SocketAsyncEventArgs e)
        {
            try
            {
                if (e.LastOperation == SocketAsyncOperation.Receive)
                {
                    ProcessReceived(e);
                }
                else if (e.LastOperation == SocketAsyncOperation.Send)
                {
                    ProcessSend(e);
                }
                else
                {
                    this.breakOut = true;
                }
            }
            catch
            {
                this.breakOut = true;
            }
        }

        private void ProcessReceived(SocketAsyncEventArgs e)
        {
            if (!this.disposable)
            {
                if (e.SocketError == SocketError.Success && e.BytesTransferred > 0)
                {
                    ByteBlock byteBlock = (ByteBlock)e.UserToken;
                    byteBlock.Position = e.BytesTransferred;
                    byteBlock.SetLength(e.BytesTransferred);
                    ClientBuffer clientBuffer = this.queueGroup.clientBufferPool.GetObject();
                    clientBuffer.client = this;
                    clientBuffer.byteBlock = byteBlock;
                    queueGroup.bufferAndClient.Enqueue(clientBuffer);

                    if (queueGroup.isWait)
                    {
                        queueGroup.waitHandleBuffer.Set();
                    }
                    try
                    {
                        WaitReceive();
                    }
                    catch (Exception ex)
                    {
                        this.Logger.Debug(RRQMCore.Log.LogType.Error, this, ex.Message);
                    }

                    ByteBlock newByteBlock = this.BytePool.GetByteBlock(this.BufferLength);
                    e.UserToken = newByteBlock;
                    e.SetBuffer(newByteBlock.Buffer, 0, newByteBlock.Buffer.Length);

                    if (!MainSocket.ReceiveAsync(e))
                    {
                        ProcessReceived(e);
                    }
                }
                else
                {
                    this.breakOut = true;
                }
            }
        }

        /// <summary>
        /// 发送完成时处理函数
        /// </summary>
        /// <param name="e">与发送完成操作相关联的SocketAsyncEventArg对象</param>
        private void ProcessSend(SocketAsyncEventArgs e)
        {
            if (e.SocketError == SocketError.Success)
            {
                e.Dispose();
            }
            else
            {
                this.Logger.Debug(LogType.Error, this, "异步发送错误。");
            }
        }

        /// <summary>
        /// 测试是否在线
        /// </summary>
        internal void SendOnline()
        {
            try
            {
                MainSocket.Send(heartPackage, SocketFlags.None);
            }
            catch
            {
                this.breakOut = true;
            }
        }

        /// <summary>
        /// 等待接收
        /// </summary>
        protected virtual void WaitReceive()
        {
        }

        /// <summary>
        /// 重新获取,父类方法不可覆盖
        /// </summary>
        public virtual void Recreate()
        {
            this.breakOut = false;
            this.disposable = false;
            this.isBeginReceive = false;
        }

        /// <summary>
        /// 在断开连接时销毁对象，父类方法不可覆盖
        /// </summary>
        public virtual void Destroy()
        {
            this.MainSocket = null;
        }

        /// <summary>
        /// 初次创建对象，效应相当于构造函数，父类方法可覆盖
        /// </summary>
        public virtual void Create()
        {
            if (this.dataHandlingAdapter == null)
            {
                this.DataHandlingAdapter = new NormalDataHandlingAdapter();
            }
        }

        void IHandleBuffer.HandleBuffer(ClientBuffer clientBuffer)
        {
            if (this.dataHandlingAdapter == null)
            {
                throw new RRQMException("数据处理适配器为空");
            }
            this.dataHandlingAdapter.Received(clientBuffer.byteBlock);
        }

        /// <summary>
        /// 完全释放资源
        /// </summary>
        public override void Dispose()
        {
            this.breakOut = true;
            base.Dispose();
        }

        /// <summary>
        /// 禁用发送或接收
        /// </summary>
        /// <param name="how"></param>
        public void Shutdown(SocketShutdown how)
        {
            this.breakOut = true;
            if (this.MainSocket != null)
            {
                MainSocket.Shutdown(how);
            }
        }
    }
}