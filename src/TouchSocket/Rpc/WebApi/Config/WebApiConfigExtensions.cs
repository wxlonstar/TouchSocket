//------------------------------------------------------------------------------
//  此代码版权（除特别声明或在XREF结尾的命名空间的代码）归作者本人若汝棋茗所有
//  源代码使用协议遵循本仓库的开源协议及附加协议，若本仓库没有设置，则按MIT开源协议授权
//  CSDN博客：https://blog.csdn.net/qq_40374647
//  哔哩哔哩视频：https://space.bilibili.com/94253567
//  Gitee源代码仓库：https://gitee.com/RRQM_Home
//  Github源代码仓库：https://github.com/RRQM
//  API首页：https://www.yuque.com/rrqm/touchsocket/index
//  交流QQ群：234762506
//  感谢您的下载和使用
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

/* 项目“TouchSocketPro (net5)”的未合并的更改
在此之前:
using TouchSocket.Rpc.WebApi;
using System;
在此之后:
using System;
*/

/* 项目“TouchSocketPro (netcoreapp3.1)”的未合并的更改
在此之前:
using TouchSocket.Rpc.WebApi;
using System;
在此之后:
using System;
*/

/* 项目“TouchSocketPro (netstandard2.0)”的未合并的更改
在此之前:
using TouchSocket.Rpc.WebApi;
using System;
在此之后:
using System;
*/
using TouchSocket.Core.Config;
using TouchSocket.Core.Dependency;
using TouchSocket.Rpc.WebApi;

namespace TouchSocket.Sockets
{
    /// <summary>
    /// WebApiConfigExtensions
    /// </summary>
    public static class WebApiConfigExtensions
    {
        /// <summary>
        /// 构建WebApiClient类客户端，并连接
        /// </summary>
        /// <typeparam name="TClient"></typeparam>
        /// <param name="config"></param>
        /// <returns></returns>
        public static TClient BuildWithWebApiClient<TClient>(this TouchSocketConfig config) where TClient : IWebApiClient
        {
            TClient client = config.Container.Resolve<TClient>();
            client.Setup(config);
            client.Connect();
            return client;
        }

        /// <summary>
        ///  构建WebApiClient类客户端，并连接
        /// </summary>
        /// <param name="config"></param>
        /// <returns></returns>
        public static WebApiClient BuildWithWebApiClient(this TouchSocketConfig config)
        {
            return BuildWithWebApiClient<WebApiClient>(config);
        }
    }
}