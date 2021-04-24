//------------------------------------------------------------------------------
//  此代码版权归作者本人若汝棋茗所有
//  源代码使用协议遵循本仓库的开源协议及附加协议，若本仓库没有设置，则按MIT开源协议授权
//  CSDN博客：https://blog.csdn.net/qq_40374647
//  哔哩哔哩视频：https://space.bilibili.com/94253567
//  源代码仓库：https://gitee.com/RRQM_Home
//  交流QQ群：234762506
//  感谢您的下载和使用
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
namespace RRQMSocket.FileTransfer
{
    /// <summary>
    /// 传输类型
    /// </summary>
    public enum TransferStatus
    {
        /// <summary>
        /// 无下载
        /// </summary>
        None,

        /// <summary>
        /// 上传
        /// </summary>
        Upload,

        /// <summary>
        /// 下载
        /// </summary>
        Download,

        /// <summary>
        /// 暂停下载状态
        /// </summary>
        PauseDownload,

        /// <summary>
        /// 暂停上传状态
        /// </summary>
        PauseUpload
    }
}