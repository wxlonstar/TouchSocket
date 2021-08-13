//------------------------------------------------------------------------------
//  此代码版权（除特别声明或在RRQMCore.XREF命名空间的代码）归作者本人若汝棋茗所有
//  源代码使用协议遵循本仓库的开源协议及附加协议，若本仓库没有设置，则按MIT开源协议授权
//  CSDN博客：https://blog.csdn.net/qq_40374647
//  哔哩哔哩视频：https://space.bilibili.com/94253567
//  Gitee源代码仓库：https://gitee.com/RRQM_Home
//  Github源代码仓库：https://github.com/RRQM
//  交流QQ群：234762506
//  感谢您的下载和使用
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
using RRQMCore.XREF.Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RRQMSocket.RPC.RRQMRPC
{
    /// <summary>
    /// Json序列化转化器
    /// </summary>
    public class JsonSerializeConverter : RRQMSocket.RPC.RRQMRPC.SerializeConverter
    {
        /// <summary>
        /// 反序列化
        /// </summary>
        /// <param name="parameterBytes"></param>
        /// <param name="parameterType"></param>
        /// <returns></returns>
        public override object DeserializeParameter(byte[] parameterBytes, Type parameterType)
        {
            if (parameterBytes == null)
            {
                return null;
            }
            return JsonConvert.DeserializeObject(Encoding.UTF8.GetString(parameterBytes), parameterType);
        }

        /// <summary>
        /// 序列化
        /// </summary>
        /// <param name="parameter"></param>
        /// <returns></returns>
        public override byte[] SerializeParameter(object parameter)
        {
            if (parameter == null)
            {
                return null;
            }
            return Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(parameter));
        }
    }
}
