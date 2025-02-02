//------------------------------------------------------------------------------
//  此代码版权（除特别声明或在XREF结尾的命名空间的代码）归作者本人若汝棋茗所有
//  源代码使用协议遵循本仓库的开源协议及附加协议，若本仓库没有设置，则按MIT开源协议授权
//  CSDN博客：https://blog.csdn.net/qq_40374647
//  哔哩哔哩视频：https://space.bilibili.com/94253567
//  Gitee源代码仓库：https://gitee.com/RRQM_Home
//  Github源代码仓库：https://github.com/RRQM
//  API首页：http://rrqm_home.gitee.io/touchsocket/
//  交流QQ群：234762506
//  感谢您的下载和使用
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
using System;
using System.Threading;
using System.Threading.Tasks;
using TouchSocket.Core;
using TouchSocket.Sockets;

namespace TouchSocket.Http.WebSockets
{
    /// <summary>
    /// WebSocketClient用户终端简单实现。
    /// </summary>
    public class WebSocketClient : WebSocketClientBase
    {
        /// <summary>
        /// 收到WebSocket数据
        /// </summary>
        public WSDataFrameEventHandler<WebSocketClient> Received { get; set; }

        /// <summary>
        /// <inheritdoc/>
        /// </summary>
        /// <param name="dataFrame"></param>
        protected override void OnHandleWSDataFrame(WSDataFrame dataFrame)
        {
            this.Received?.Invoke(this, dataFrame);
            base.OnHandleWSDataFrame(dataFrame);
        }
    }

    /// <summary>
    /// WebSocket用户终端。
    /// </summary>
    public class WebSocketClientBase : HttpClientBase, IWebSocketClient
    {
        /// <summary>
        /// 请求连接到WebSocket。
        /// </summary>
        /// <returns></returns>
        public override ITcpClient Connect(int timeout = 5000)
        {
            return this.Connect(default, timeout);
        }

        /// <summary>
        /// <inheritdoc/>
        /// </summary>
        /// <param name="timeout"></param>
        /// <param name="token"></param>
        /// <returns></returns>
        public virtual ITcpClient Connect(CancellationToken token, int timeout = 5000)
        {
            lock (this.SyncRoot)
            {
                if (!this.CanSend)
                {
                    base.Connect(timeout);
                }

                var iPHost = this.Config.GetValue(TouchSocketConfigExtension.RemoteIPHostProperty);
                var url = iPHost.PathAndQuery;
                var request = WSTools.GetWSRequest(this.RemoteIPHost.Host, url, this.GetWebSocketVersion(), out var base64Key);
                this.OnHandshaking(new HttpContextEventArgs(new HttpContext(request)));

                var response = this.Request(request, timeout: timeout, token: token);
                if (response.StatusCode != 101)
                {
                    throw new WebSocketConnectException($"协议升级失败，信息：{response.StatusMessage}，更多信息请捕获WebSocketConnectException异常，获得HttpContext得知。", new HttpContext(request, response));
                }
                var accept = response.Headers.Get("sec-websocket-accept").Trim();
                if (accept.IsNullOrEmpty() || !accept.Equals(WSTools.CalculateBase64Key(base64Key).Trim(), StringComparison.OrdinalIgnoreCase))
                {
                    this.MainSocket.SafeDispose();
                    throw new WebSocketConnectException($"WS服务器返回的应答码不正确，更多信息请捕获WebSocketConnectException异常，获得HttpContext得知。", new HttpContext(request, response));
                }

                this.SetAdapter(new WebSocketDataHandlingAdapter());
                this.SetValue(WebSocketFeature.HandshakedProperty, true);
                response.Flag = true;
                this.OnHandshaked(new HttpContextEventArgs(new HttpContext(request, response)));
                return this;
            }
        }

        /// <summary>
        /// <inheritdoc/>
        /// </summary>
        /// <param name="token"></param>
        /// <param name="timeout"></param>
        /// <returns></returns>
        public Task<ITcpClient> ConnectAsync(CancellationToken token, int timeout = 5000)
        {
            return Task.Run(() =>
            {
                return this.Connect(token, timeout);
            });
        }

        #region 事件

        /// <summary>
        /// 表示完成握手后。
        /// </summary>
        public HttpContextEventHandler<WebSocketClientBase> Handshaked { get; set; }

        /// <summary>
        /// 表示在即将握手连接时。
        /// </summary>
        public HttpContextEventHandler<WebSocketClientBase> Handshaking { get; set; }

        /// <summary>
        /// 表示完成握手后。
        /// </summary>
        /// <param name="e"></param>
        protected virtual void OnHandshaked(HttpContextEventArgs e)
        {
            this.Handshaked?.Invoke(this, e);

            if (this.PluginsManager.Raise(nameof(IWebSocketHandshakedPlugin.OnWebSocketHandshaked), this, e))
            {
                return;
            }
        }

        /// <summary>
        /// 表示在即将握手连接时。
        /// </summary>
        /// <param name="e"></param>
        protected virtual void OnHandshaking(HttpContextEventArgs e)
        {
            this.Handshaking?.Invoke(this, e);
            if (e.Handled)
            {
                return;
            }
            if (this.PluginsManager.Raise(nameof(IWebSocketHandshakingPlugin.OnWebSocketHandshaking), this, e))
            {
                return;
            }
        }

        #endregion 事件

        /// <inheritdoc/>
        protected override bool HandleReceivedData(ByteBlock byteBlock, IRequestInfo requestInfo)
        {
            if (this.GetHandshaked())
            {
                var dataFrame = (WSDataFrame)requestInfo;
                this.OnHandleWSDataFrame(dataFrame);
            }
            else
            {
                if (requestInfo is HttpResponse response)
                {
                    response.Flag = false;
                    base.HandleReceivedData(byteBlock, requestInfo);
                    SpinWait.SpinUntil(() =>
                    {
                        return (bool)response.Flag;
                    }, 3000);
                }
            }

            return false;
        }

        /// <summary>
        /// <inheritdoc/>
        /// </summary>
        /// <param name="e"></param>
        protected override void OnDisconnected(DisconnectEventArgs e)
        {
            this.SetValue(WebSocketFeature.HandshakedProperty, false);
            base.OnDisconnected(e);
        }

        /// <summary>
        /// 当收到WS数据时。
        /// </summary>
        /// <param name="dataFrame"></param>
        protected virtual void OnHandleWSDataFrame(WSDataFrame dataFrame)
        {
            if (this.PluginsManager.Enable)
            {
                this.PluginsManager.Raise(nameof(IWebSocketReceivedPlugin.OnWebSocketReceived), this, new WSDataFrameEventArgs(dataFrame));
            }
        }
    }
}