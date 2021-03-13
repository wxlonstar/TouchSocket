//------------------------------------------------------------------------------
//  此代码版权归作者本人若汝棋茗所有
//  源代码使用协议遵循本仓库的开源协议，若本仓库没有设置，则按MIT开源协议授权
//  CSDN博客：https://blog.csdn.net/qq_40374647
//  哔哩哔哩视频：https://space.bilibili.com/94253567
//  源代码仓库：https://gitee.com/RRQM_Home
//  交流QQ群：234762506
//  感谢您的下载和使用
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
using RRQMCore.Log;
using System;
using System.Net.Sockets;

namespace RRQMSocket
{
    /// <summary>
    /// 通讯基类
    /// </summary>

    public abstract class BaseSocket : ISocket, IDisposable
    {
        /// <summary>
        ///构造函数
        /// </summary>
        public BaseSocket()
        {
            this.Logger = new Log();
        }

        /// <summary>
        /// 心跳检测包
        /// </summary>
        protected static readonly byte[] heartPackage = new byte[0];

        /// <summary>
        /// 锁
        /// </summary>
        protected object locker = new object();

        /// <summary>
        /// 判断是否已释放资源
        /// </summary>
        protected bool disposable = false;

        private Socket mainSocket;

        /// <summary>
        /// 主通信器
        /// </summary>
        internal Socket MainSocket
        {
            get { return mainSocket; }
            set
            {
                if (value == null)
                {
                    this.Name = null;
                    this.IP = null;
                    this.Port = -1;
                    return;
                }

                mainSocket = value;
                if (mainSocket.IsBound && mainSocket.LocalEndPoint != null)
                {
                    this.Name = mainSocket.LocalEndPoint.ToString();
                }
                else if (mainSocket.Connected && mainSocket.RemoteEndPoint != null)
                {
                    this.Name = mainSocket.RemoteEndPoint.ToString();
                }
                else
                {
                    return;
                }

                int r = this.Name.IndexOf(":");
                this.IP = this.Name.Substring(0, r);
                this.Port = Convert.ToInt32(this.Name.Substring(r + 1, this.Name.Length - (r + 1)));
            }
        }

        /// <summary>
        /// 远程连接地址名
        /// </summary>
        public string Name { get; protected set; }

        /// <summary>
        /// IPv4地址
        /// </summary>
        public string IP { get; protected set; }

        /// <summary>
        /// 端口号
        /// </summary>
        public int Port { get; protected set; }

        private int bufferLength = 1024;

        /// <summary>
        /// 数据交互缓存池限制，Min:1k Byte，Max:10Mb Byte
        /// </summary>
        public int BufferLength
        {
            get { return bufferLength; }
            set
            {
                bufferLength = value < 1024 ? 1024 : (value > 1024 * 1024 * 10 ? 1024 * 1024 * 10 : value);
                this.OnBufferLengthChanged();
            }
        }

        /// <summary>
        /// 日志记录器
        /// </summary>
        public ILog Logger { get; protected set; }

        /// <summary>
        /// 当BufferLength改变值的时候
        /// </summary>
        protected virtual void OnBufferLengthChanged()
        {
        }

        /// <summary>
        /// 释放资源
        /// </summary>
        public virtual void Dispose()
        {
            this.disposable = true;
            if (mainSocket != null)
            {
                mainSocket.Close();
                mainSocket.Dispose();
            }
        }
    }
}