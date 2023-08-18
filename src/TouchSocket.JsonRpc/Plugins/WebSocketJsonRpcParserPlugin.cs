﻿using System;
using System.Threading.Tasks;
using TouchSocket.Core;
using TouchSocket.Http;
using TouchSocket.Http.WebSockets;
using TouchSocket.Sockets;

namespace TouchSocket.JsonRpc
{
    /// <summary>
    /// WebSocketJsonRpcParserPlugin
    /// </summary>
    [PluginOption(Singleton = true, NotRegister = false)]
    public sealed class WebSocketJsonRpcParserPlugin : JsonRpcParserPluginBase, IWebSocketReceivedPlugin<IHttpSocketClient>, IWebSocketHandshakedPlugin<IHttpSocketClient>
    {
        /// <summary>
        /// WebSocketJsonRpcParserPlugin
        /// </summary>
        /// <param name="container"></param>
        public WebSocketJsonRpcParserPlugin(IContainer container) : base(container)
        {
        }

        /// <summary>
        /// 经过判断是否标识当前的客户端为JsonRpc
        /// </summary>
        public Func<IHttpSocketClient, HttpContext, Task<bool>> AllowJsonRpc { get; set; }

        async Task IWebSocketHandshakedPlugin<IHttpSocketClient>.OnWebSocketHandshaked(IHttpSocketClient client, HttpContextEventArgs e)
        {
            if (this.AllowJsonRpc != null)
            {
                if (await this.AllowJsonRpc.Invoke(client, e.Context))
                {
                    client.SetJsonRpc();
                }
            }
        }

        async Task IWebSocketReceivedPlugin<IHttpSocketClient>.OnWebSocketReceived(IHttpSocketClient client, WSDataFrameEventArgs e)
        {
            if (e.DataFrame.Opcode == WSDataType.Text && client.GetJsonRpc())
            {
                var jsonRpcStr = e.DataFrame.ToText();
                e.Handled = true;
                this.ThisInvoke(new WebSocketJsonRpcCallContext(client, jsonRpcStr));
            }
            else
            {
                await e.InvokeNext();
            }
        }

        /// <summary>
        /// 经过判断是否标识当前的客户端为JsonRpc
        /// </summary>
        /// <param name="allowJsonRpc"></param>
        /// <returns></returns>
        public WebSocketJsonRpcParserPlugin SetAllowSwitchProtocol(Func<IHttpSocketClient, HttpContext, Task<bool>> allowJsonRpc)
        {
            this.AllowJsonRpc = allowJsonRpc;
            return this;
        }

        /// <inheritdoc/>
        protected override sealed void Response(JsonRpcCallContextBase callContext, object result, JsonRpcError error)
        {
            try
            {
                using (var responseByteBlock = new ByteBlock())
                {
                    object jobject;
                    if (error == null)
                    {
                        jobject = new JsonRpcSuccessResponse
                        {
                            result = result,
                            id = callContext.JsonRpcContext.Id
                        };
                    }
                    else
                    {
                        jobject = new JsonRpcErrorResponse
                        {
                            error = error,
                            id = callContext.JsonRpcContext.Id
                        };
                    }

                    ((IHttpSocketClient)callContext.Caller).SendWithWS(jobject.ToJson());
                }
            }
            catch
            {
            }
        }
    }
}