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
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading;

namespace TouchSocket.Core.AspNetCore
{
    /// <summary>
    /// AspNetCoreContainer
    /// </summary>
    public class AspNetCoreContainer : IContainer
    {
        private readonly IServiceCollection m_services;
        private readonly Timer m_timer;
        private int m_count;
        private IServiceProvider m_serviceProvider;

        /// <summary>
        /// 初始化一个IServiceCollection的容器。
        /// </summary>
        /// <param name="services"></param>
        public AspNetCoreContainer(IServiceCollection services)
        {
            services.AddSingleton<IContainer>(this);
            this.m_services = services;
            this.m_serviceProvider = this.m_services.BuildServiceProvider();
            this.m_timer = new Timer(state =>
            {
                if (this.m_services.Count != this.m_count)
                {
                    this.m_serviceProvider = this.m_services.BuildServiceProvider();
                    this.m_count = this.m_services.Count;
                }
            }, null, 1000, 1000);
        }

        /// <summary>
        /// 析构函数
        /// </summary>
        ~AspNetCoreContainer()
        {
            this.m_timer.Dispose();
        }

        /// <summary>
        /// 返回迭代器
        /// </summary>
        /// <returns></returns>
        public IEnumerator<DependencyDescriptor> GetEnumerator()
        {
            return this.m_services.Select(s =>
              {
                  var descriptor = new DependencyDescriptor(s.ServiceType, s.ImplementationType, (Lifetime)((int)s.Lifetime))
                  {
                      ToInstance = s.ImplementationInstance
                  };
                  return descriptor;
              }).GetEnumerator();
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return this.GetEnumerator();
        }

        /// <summary>
        /// <inheritdoc/>
        /// </summary>
        /// <param name="fromType"></param>
        /// <param name="key"></param>
        /// <returns></returns>
        public bool IsRegistered(Type fromType, string key = "")
        {
            if (fromType.IsGenericType)
            {
                fromType = fromType.GetGenericTypeDefinition();
            }
            var array = this.m_services.ToArray();
            foreach (var item in array)
            {
                if (item.ServiceType == fromType)
                {
                    return true;
                }
            }
            return false;
        }

        /// <summary>
        /// <inheritdoc/>
        /// </summary>
        /// <param name="descriptor"></param>
        /// <param name="key"></param>
        public void Register(DependencyDescriptor descriptor, string key = "")
        {
            if (!key.IsNullOrEmpty())
            {
                throw new NotSupportedException($"{this.GetType().Name}不支持包含Key的多实现注入");
            }
            switch (descriptor.Lifetime)
            {
                case Lifetime.Singleton:
                    if (descriptor.ToInstance != null)
                    {
                        this.m_services.AddSingleton(descriptor.FromType, descriptor.ToInstance);
                    }
                    else
                    {
                        this.m_services.AddSingleton(descriptor.FromType, descriptor.ToType);
                    }
                    break;

                case Lifetime.Transient:
                default:
                    this.m_services.AddTransient(descriptor.FromType, descriptor.ToType);
                    break;
            }
            this.m_serviceProvider = this.m_services.BuildServiceProvider();
            this.m_count = this.m_services.Count;
        }

        /// <inheritdoc/>
        public object Resolve(Type fromType, object[] ps = null, string key = "")
        {
            if (ps != null)
            {
                throw new InvalidOperationException("当前容器不支持参数构建");
            }
            if (key.HasValue())
            {
                throw new InvalidOperationException("当前容器不支持Key构建");
            }
            return this.m_serviceProvider.GetService(fromType);
        }

        /// <summary>
        /// <inheritdoc/>
        /// </summary>
        /// <param name="descriptor"></param>
        /// <param name="key"></param>
        public void Unregister(DependencyDescriptor descriptor, string key = "")
        {
            var array = this.m_services.ToArray();
            foreach (var item in array)
            {
                if (item.ServiceType == descriptor.FromType)
                {
                    this.m_services.Remove(item);
                    return;
                }
            }
        }
    }
}