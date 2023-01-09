"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[5713],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),s=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,k=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return t?i.createElement(k,p(p({ref:n},u),{},{components:t})):i.createElement(k,p({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,p=new Array(a);p[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var s=2;s<a;s++)p[s]=t[s];return i.createElement.apply(null,p)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9642:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var i=t(7462),r=(t(7294),t(3905));const a={id:"appstartup",title:"3.1 AppStartup \u542f\u52a8",sidebar_label:"3.1 AppStartup \u542f\u52a8"},p=void 0,o={unversionedId:"appstartup",id:"appstartup",title:"3.1 AppStartup \u542f\u52a8",description:"3.1.1 Startup \u7c7b",source:"@site/docs/appstartup.mdx",sourceDirName:".",slug:"/appstartup",permalink:"/touchsocket/docs/appstartup",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/appstartup.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1673249119,formattedLastUpdatedAt:"Jan 9, 2023",frontMatter:{id:"appstartup",title:"3.1 AppStartup \u542f\u52a8",sidebar_label:"3.1 AppStartup \u542f\u52a8"},sidebar:"docs",previous:{title:"2.9 Nuget \u672c\u5730\u8c03\u8bd5\u5305",permalink:"/touchsocket/docs/nuget-local"},next:{title:"3.2 \u7ec4\u4ef6\u5316\u542f\u52a8 \u2728",permalink:"/touchsocket/docs/component"}},l={},s=[{value:"3.1.1 <code>Startup</code> \u7c7b",id:"311-startup-\u7c7b",level:2},{value:"3.1.1.1 <code>Startup</code> \u4e24\u4e2a\u91cd\u8981\u65b9\u6cd5",id:"3111-startup-\u4e24\u4e2a\u91cd\u8981\u65b9\u6cd5",level:3},{value:"3.1.2 <code>AppStartup</code>",id:"312-appstartup",level:2},{value:"3.1.2.1 \u5982\u4f55\u914d\u7f6e <code>AppStartup</code>",id:"3121-\u5982\u4f55\u914d\u7f6e-appstartup",level:3},{value:"3.1.2.2 <code>AppStartup</code> \u7ea6\u5b9a",id:"3122-appstartup-\u7ea6\u5b9a",level:3},{value:"3.1.2.3 <code>AppStartup</code> \u914d\u7f6e\u987a\u5e8f",id:"3123-appstartup-\u914d\u7f6e\u987a\u5e8f",level:3},{value:"3.1.2.4 <code>AppStartup</code> \u65b9\u6cd5\u8c03\u7528\u987a\u5e8f",id:"3124-appstartup-\u65b9\u6cd5\u8c03\u7528\u987a\u5e8f",level:3},{value:"3.1.3 <code>Startup</code> \u914d\u7f6e\u6700\u4f73\u5b9e\u8df5",id:"313-startup-\u914d\u7f6e\u6700\u4f73\u5b9e\u8df5",level:2},{value:"3.1.4 \u6784\u9020\u51fd\u6570\u6ce8\u5165\u8bf4\u660e",id:"314-\u6784\u9020\u51fd\u6570\u6ce8\u5165\u8bf4\u660e",level:2},{value:"3.1.5 \u5173\u4e8e <code>appsettings.json</code>",id:"315-\u5173\u4e8e-appsettingsjson",level:2},{value:"3.1.6 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"316-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],u={toc:s};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"311-startup-\u7c7b"},"3.1.1 ",(0,r.kt)("inlineCode",{parentName:"h2"},"Startup")," \u7c7b"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Startup")," \u7c7b\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"ASP.NET Core")," \u5e94\u7528\u7a0b\u5e8f\u542f\u52a8\u9ed8\u8ba4\u8c03\u7528\u7684\u7c7b\uff0c\u8be5\u7c7b\u662f\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs")," \u4e2d\u914d\u7f6e\uff1a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".NET5")," \u65b9\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:'showLineNumbers  {18} title="Furion.Web.Entry\\Program.cs"',showLineNumbers:!0,"":!0,"{18}":!0,title:'"Furion.Web.Entry\\Program.cs"'},"using Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Hosting;\n\nnamespace Furion.Web.Entry\n{\n    public class Program\n    {\n        public static void Main(string[] args)\n        {\n            CreateHostBuilder(args).Build().Run();\n        }\n\n        public static IHostBuilder CreateHostBuilder(string[] args)\n        {\n            return Host.CreateDefaultBuilder(args)\n                .ConfigureWebHostDefaults(webBuilder =>\n                {\n                    webBuilder.UseStartup<Startup>();\n                });\n        }\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".NET6 \u65b9\u5f0f")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},".NET6")," \u4e2d\u5fae\u8f6f\u5df2\u4e0d\u518d\u63a8\u8350 ",(0,r.kt)("inlineCode",{parentName:"p"},"UseStartup<TStarup>()")," \u65b9\u5f0f\u3002"),(0,r.kt)("h3",{id:"3111-startup-\u4e24\u4e2a\u91cd\u8981\u65b9\u6cd5"},"3.1.1.1 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Startup")," \u4e24\u4e2a\u91cd\u8981\u65b9\u6cd5"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Startup")," \u9ed8\u8ba4\u6709\u4e24\u4e2a\u91cd\u8981\u7684\u65b9\u6cd5:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ConfigureServices"),"\uff1a\u914d\u7f6e\u5e94\u7528\u6240\u9700\u670d\u52a1\uff0c\u5728\u8be5\u65b9\u6cd5\u4e2d\u53ef\u4ee5\u6dfb\u52a0\u5e94\u7528\u6240\u9700\u8981\u7684\u529f\u80fd\u6216\u670d\u52a1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Configure"),"\uff1a\u914d\u7f6e\u5e94\u7528\u8bf7\u6c42\u5904\u7406\u7ba1\u9053")),(0,r.kt)("p",null,"\u9ed8\u8ba4\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:'showLineNumbers  {9,13} title="Furion.Web.Entry\\Startup.cs"',showLineNumbers:!0,"":!0,"{9,13}":!0,title:'"Furion.Web.Entry\\Startup.cs"'},"using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.DependencyInjection;\n\nnamespace Furion.Web.Entry\n{\n    public class Startup\n    {\n        public void ConfigureServices(IServiceCollection services)\n        {\n        }\n\n        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n        {\n        }\n    }\n}\n")),(0,r.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u4e0d\u6253\u7b97\u8be6\u7ec6\u8bb2 ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup")," \u7c7b\u7684\u5177\u4f53\u529f\u80fd\u548c\u4f5c\u7528\u3002"),(0,r.kt)("admonition",{title:"\u4e86\u89e3\u66f4\u591a",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u60f3\u4e86\u89e3\u66f4\u591a ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup")," \u77e5\u8bc6\u53ef\u67e5\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/aspnet/core/fundamentals/startup?view=aspnetcore-3.1"},"ASP.NET Core - Startup \u7c7b")," \u7ae0\u8282\u3002")),(0,r.kt)("h2",{id:"312-appstartup"},"3.1.2 ",(0,r.kt)("inlineCode",{parentName:"h2"},"AppStartup")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u63d0\u4f9b\u4e86\u66f4\u4e3a\u7075\u6d3b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup")," \u7c7b\u914d\u7f6e\u65b9\u5f0f\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u65e0\u9700\u5728 ",(0,r.kt)("inlineCode",{parentName:"strong"},"Web \u542f\u7528\u5c42")," \u4e2d\u914d\u7f6e\uff0c\u53ef\u5c06\u914d\u7f6e\u653e\u5230\u4efb\u4f55\u9879\u76ee\u5c42\u3002")),(0,r.kt)("p",null,"\u53ef\u80fd\u4f1a\u6709\u8bfb\u8005\u6709\u7591\u95ee\uff0c\u4e3a\u4ec0\u4e48\u8981\u591a\u6b64\u4e00\u4e3e\u5462\uff1f\u539f\u56e0\u6709\u51e0\u70b9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Startup")," \u7c7b\u9ed8\u8ba4\u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"Web \u5e94\u7528\u5c42")," \u7ed1\u5b9a\u5728\u4e00\u8d77\uff0c\u8fd9\u6837\u5c31\u4f1a\u5bfc\u81f4\u5982\u679c\u6211\u521b\u5efa\u4e86\u65b0\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Web \u5e94\u7528\u5c42"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"Startup")," \u53c8\u8981\u91cd\u65b0\u914d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"\u968f\u7740\u4e1a\u52a1\u7684\u589e\u957f\uff0c\u9700\u8981\u96c6\u6210\u8d8a\u6765\u8d8a\u591a\u7684\u7b2c\u4e09\u65b9\u670d\u52a1\uff0c\u8fd9\u65f6\u5019 ",(0,r.kt)("inlineCode",{parentName:"li"},"Startup")," \u7c7b\u5c31\u4f1a\u53d8\u5f97\u8d8a\u6765\u8d8a\u81c3\u80bf\uff0c\u96be\u4ee5\u7ef4\u62a4"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Startup")," \u7c7b\u65e0\u6cd5\u4e0e\u5176\u4ed6\u9879\u76ee\u7c7b\u578b\u8fdb\u884c\u5171\u7528")),(0,r.kt)("p",null,"\u6240\u4ee5\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u63d0\u4f9b\u4e86\u66f4\u52a0\u7075\u6d3b\u7684\u914d\u7f6e\u65b9\u5f0f\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"AppStartup"),"\u3002"),(0,r.kt)("admonition",{title:"\u6ce8\u610f\u4e8b\u9879",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"AppStartup")," \u7684\u6d3e\u751f\u7c7b\u6240\u5728\u7684\u9879\u76ee\u5c42\u6ca1\u6709\u88ab\u542f\u52a8\u5c42\u76f4\u63a5\u6216\u95f4\u63a5\u6dfb\u52a0\u5f15\u7528\uff0c\u90a3\u4e48\u8fd9\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.cs")," \u5c31\u4f1a\u88ab\u5ffd\u7565\uff0c\u4e5f\u5c31\u662f\u4e0d\u4f1a\u81ea\u52a8\u8f7d\u5165\u6ce8\u518c\u3002")),(0,r.kt)("h3",{id:"3121-\u5982\u4f55\u914d\u7f6e-appstartup"},"3.1.2.1 \u5982\u4f55\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"h3"},"AppStartup")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AppStartup")," \u662f\u4e00\u4e2a\u62bd\u8c61\u7684\u7a7a\u7c7b\uff0c\u6ca1\u6709\u4efb\u4f55\u5b9a\u4e49\u6210\u5458\u3002\u6b63\u662f\u56e0\u4e3a\u8fd9\u6837\uff0c\u624d\u63d0\u4f9b\u66f4\u52a0\u7075\u6d3b\u7684\u914d\u7f6e\u65b9\u5f0f\u3002"),(0,r.kt)("h3",{id:"3122-appstartup-\u7ea6\u5b9a"},"3.1.2.2 ",(0,r.kt)("inlineCode",{parentName:"h3"},"AppStartup")," \u7ea6\u5b9a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AppStartup")," \u6d3e\u751f\u7c7b\u53ea\u6709\u4e24\u4e2a\u5c0f\u7ea6\u5b9a\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4efb\u4f55\u516c\u5f00\u3001\u975e\u9759\u6001\u3001\u8fd4\u56de\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"void")," \u4e14\u65b9\u6cd5\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"IServiceCollection")," \u7c7b\u578b\uff0c\u90a3\u4e48\u4ed6\u5c31\u662f\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"ConfigureServices")," \u65b9\u6cd5"),(0,r.kt)("li",{parentName:"ul"},"\u4efb\u4f55\u516c\u5f00\u3001\u975e\u9759\u6001\u3001\u8fd4\u56de\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"void")," \u4e14\u65b9\u6cd5\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"IApplicationBuilder")," \u7c7b\u578b\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"IWebHostEnvironment")," \u7c7b\u578b\uff0c\u90a3\u4e48\u4ed6\u5c31\u662f\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"Configure")," \u65b9\u6cd5")),(0,r.kt)("p",null,"\u6240\u4ee5\uff0c\u6211\u4eec\u53ef\u4ee5\u81ea\u7531\u7684\u7f16\u5199\u65b9\u6cd5\uff0c\u53ea\u8981\u9075\u5faa\u7ea6\u5b9a\u5373\u53ef\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {5,7,12,18,23}",showLineNumbers:!0,"":!0,"{5,7,12,18,23}":!0},"using Microsoft.Extensions.DependencyInjection;\n\nnamespace Furion.EntityFramework.Core\n{\n    public class MyStartup : AppStartup\n    {\n        public void ConfigureServices(IServiceCollection services)\n        {\n            services.AddDataValidation();\n        }\n\n        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n        {\n            app.UseSwagger();\n        }\n\n        // \u53ef\u4ee5\u968f\u610f\u5b9a\u4e49\u540d\u5b57\u548c\u65b9\u6cd5\n        public void XXXXName(IServiceCollection services)\n        {\n        }\n\n        // \u53ef\u4ee5\u968f\u610f\u5b9a\u4e49\u540d\u5b57\u548c\u65b9\u6cd5\n        public void ZZZName(IApplicationBuilder app, IWebHostEnvironment env)\n        {\n        }\n    }\n}\n")),(0,r.kt)("h3",{id:"3123-appstartup-\u914d\u7f6e\u987a\u5e8f"},"3.1.2.3 ",(0,r.kt)("inlineCode",{parentName:"h3"},"AppStartup")," \u914d\u7f6e\u987a\u5e8f"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"AppStartup")," \u914d\u7f6e\u987a\u5e8f\u7531\u6240\u5728\u7a0b\u5e8f\u96c6\u7684\u540d\u79f0\u8fdb\u884c\u6b63\u5e8f\u8c03\u7528\uff0c\u5982\u679c\u6211\u4eec\u9700\u8981\u914d\u7f6e\u6267\u884c\u987a\u5e8f\uff0c\u53ea\u9700\u8981\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"AppStartup")," \u6d3e\u751f\u7c7b\u4e2d\u8d34 ",(0,r.kt)("inlineCode",{parentName:"p"},"[AppStartup(order)]")," \u7279\u6027\u5373\u53ef\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"order")," \u6570\u503c\u8d8a\u5927\uff0c\u8d8a\u5728\u524d\u9762\u8c03\u7528\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {5}",showLineNumbers:!0,"":!0,"{5}":!0},"using Microsoft.Extensions.DependencyInjection;\n\nnamespace Furion.EntityFramework.Core\n{\n    [AppStartup(10)]\n    public class FirstStartup : AppStartup\n    {\n        public void ConfigureServices(IServiceCollection services)\n        {\n        }\n\n        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n        {\n        }\n    }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {5}",showLineNumbers:!0,"":!0,"{5}":!0},"using Microsoft.Extensions.DependencyInjection;\n\nnamespace Furion.EntityFramework.Core\n{\n    [AppStartup(9)]\n    public class SecondStartup : AppStartup\n    {\n        public void ConfigureServices(IServiceCollection services)\n        {\n        }\n\n        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n        {\n        }\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"FirstStartup")," \u4f1a\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"SecondStartup")," \u4e4b\u524d\u8c03\u7528\u3002"),(0,r.kt)("h3",{id:"3124-appstartup-\u65b9\u6cd5\u8c03\u7528\u987a\u5e8f"},"3.1.2.4 ",(0,r.kt)("inlineCode",{parentName:"h3"},"AppStartup")," \u65b9\u6cd5\u8c03\u7528\u987a\u5e8f"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AppStartup")," \u65b9\u6cd5\u8c03\u7528\u987a\u5e8f\u548c\u65b9\u6cd5\u7684\u4e66\u5199\u5148\u540e\u6709\u5173\uff0c\u8d8a\u5728\u524d\u9762\u7684\u65b9\u6cd5\u8d8a\u5148\u8c03\u7528\u3002"),(0,r.kt)("h2",{id:"313-startup-\u914d\u7f6e\u6700\u4f73\u5b9e\u8df5"},"3.1.3 ",(0,r.kt)("inlineCode",{parentName:"h2"},"Startup")," \u914d\u7f6e\u6700\u4f73\u5b9e\u8df5"),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"v3.6.3+")," \u8bf4\u660e"),(0,r.kt)("p",{parentName:"admonition"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Furion v3.6.3+")," \u7248\u672c\u4e4b\u540e\u65e0\u9700\u521b\u5efa\u7a7a ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.cs")," \u7c7b\uff0c\u5185\u90e8\u5df2\u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"FakeStartup")," \u6a21\u5f0f\u3002")),(0,r.kt)("p",null,"\u5efa\u8bae ",(0,r.kt)("inlineCode",{parentName:"p"},"Web")," \u542f\u52a8\u5c42\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.cs")," \u4fdd\u6301\u4e3a\u7a7a\u65b9\u6cd5\u4f53\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:'showLineNumbers {9-11,13-15} title="Furion.Web.Entry\\Startup.cs"',showLineNumbers:!0,"{9-11,13-15}":!0,title:'"Furion.Web.Entry\\Startup.cs"'},"using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.DependencyInjection;\n\nnamespace Furion.Web.Entry\n{\n    public class Startup\n    {\n        public void ConfigureServices(IServiceCollection services)\n        {\n        }\n\n        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n        {\n        }\n    }\n}\n")),(0,r.kt)("p",null,"\u5c06\u6240\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"Web \u5e94\u7528\u5c42")," \u914d\u7f6e\u8fc1\u79fb\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"Furion.Web.Core.Startup.cs")," \u4e2d\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:'showLineNumbers  title="Furion.Web.Core\\Startup.cs"',showLineNumbers:!0,"":!0,title:'"Furion.Web.Core\\Startup.cs"'},"using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\nnamespace Furion.Web.Core\n{\n    public sealed class FurWebCoreStartup : AppStartup\n    {\n        public void ConfigureServices(IServiceCollection services)\n        {\n            services.AddCorsAccessor();\n\n            services.AddControllers().AddInject();\n        }\n\n        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n        {\n            if (env.IsDevelopment())\n            {\n                app.UseDeveloperExceptionPage();\n            }\n\n            app.UseHttpsRedirection();\n\n            app.UseRouting();\n\n            app.UseCorsAccessor();\n\n            app.UseAuthentication();\n            app.UseAuthorization();\n\n            app.UseInject();\n\n            app.UseEndpoints(endpoints =>\n            {\n                endpoints.MapControllers();\n            });\n        }\n    }\n}\n")),(0,r.kt)("p",null,"\u8fd9\u6837\uff0c\u540e\u7eed\u66f4\u6362 ",(0,r.kt)("inlineCode",{parentName:"p"},"Web \u5e94\u7528\u5c42")," \u4e5f\u65e0\u9700\u91cd\u65b0\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.cs")),(0,r.kt)("h2",{id:"314-\u6784\u9020\u51fd\u6570\u6ce8\u5165\u8bf4\u660e"},"3.1.4 \u6784\u9020\u51fd\u6570\u6ce8\u5165\u8bf4\u660e"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"AppStartup")," \u7684\u6d3e\u751f\u7c7b\u5e76\u672a\u63d0\u4f9b\u4f9d\u8d56\u6ce8\u5165\u7684\u529f\u80fd\uff0c\u4e5f\u5373\u662f\u65e0\u6cd5\u901a\u8fc7\u6784\u9020\u51fd\u6570\u8fdb\u884c\u6ce8\u5165\u670d\u52a1"),"\u3002\u539f\u56e0\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"AppStartup")," \u662f\u4e2a\u7a7a\u7c7b\uff0c\u76ee\u7684\u662f\u7528\u6765\u67e5\u627e ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup")," \u7684\u3002"),(0,r.kt)("p",null,"\u90a3\u5982\u4f55\u50cf ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.cs")," \u4e00\u6837\u4f7f\u7528\u670d\u52a1\u5462\uff1f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},"IConfiguration")," \u5b9e\u4f8b\uff1a\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"App.Configuration")),(0,r.kt)("li",{parentName:"ul"},"\u89e3\u6790\u670d\u52a1\uff1a\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"App.GetService<TService>()")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"app.ApplicationServices.GetService<TService>()"))),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"\u5173\u4e8e ",(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"Configure")," \u65b9\u6cd5\u6ce8\u5165"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"AppStartup")," \u9488\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"Configure")," \u65b9\u6cd5\u63d0\u4f9b\u4e86\u53c2\u6570\u89e3\u6790\u6ce8\u5165\u529f\u80fd\uff0c\u4e5f\u5c31\u662f\u53ea\u8981\u5728\u65b9\u6cd5\u4e2d\u58f0\u660e\u63a5\u53e3\u53c2\u6570\u5373\u53ef\u81ea\u52a8\u6ce8\u5165\uff0c\u5982\uff1a"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {1,2}",showLineNumbers:!0,"":!0,"{1,2}":!0},"// app \u548c env \u4f1a\u81ea\u52a8\u6ce8\u5165\npublic void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n{\n}\n"))),(0,r.kt)("h2",{id:"315-\u5173\u4e8e-appsettingsjson"},"3.1.5 \u5173\u4e8e ",(0,r.kt)("inlineCode",{parentName:"h2"},"appsettings.json")),(0,r.kt)("p",null,"\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"ASP.NET Core")," \u914d\u7f6e\u653e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"appsettings.json")," \u4e2d\u914d\u7f6e\uff0c\u4f46\u662f\u8fd9\u6837\u7684\u65b9\u5f0f\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.cs")," \u914d\u7f6e\u4e00\u6837\u7684\u9053\u7406\uff0c\u4e00\u65e6\u6211\u4eec\u66f4\u6362\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"Web \u5e94\u7528\u5c42"),"\uff0c\u90a3\u4e48 ",(0,r.kt)("inlineCode",{parentName:"p"},"appsettings.json")," \u53c8\u8981\u91cd\u65b0\u914d\u7f6e\u4e00\u6b21\u3002"),(0,r.kt)("p",null,"\u6240\u4ee5\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u63d0\u4f9b\u4e86\u66f4\u52a0\u7075\u6d3b\u7684\u65b9\u5f0f\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"appsettings.json"),"\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u53ea\u9700\u8981\u5728\u4efb\u4f55\u9879\u76ee\u5c42\u6839\u76ee\u5f55\u4e0b\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"strong"},".json")," \u6587\u4ef6\u5373\u53ef\u3002",(0,r.kt)("inlineCode",{parentName:"strong"},"Furion")," \u6846\u67b6\u6700\u540e\u4f1a\u81ea\u52a8\u5408\u5e76\u6240\u6709\u5206\u6563\u7684\u914d\u7f6e\u6587\u4ef6\u3002")),(0,r.kt)("p",null,"\u5982\u6211\u4eec\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Furion.EntityFramework.Core")," \u5c42\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"dbsettings.json")," \u914d\u7f6e\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'showLineNumbers  title="Furion.EntityFramework.Core\\dbsettings.json"',showLineNumbers:!0,"":!0,title:'"Furion.EntityFramework.Core\\dbsettings.json"'},'{\n  "ConnectionStrings": {\n    "DbConnectionString": "Server=localhost;Database=Furion;User=sa;Password=000000;MultipleActiveResultSets=True;",\n    "Sqlite3ConnectionString": "Data Source=./Furion.db"\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u65e0\u9700\u5728 ",(0,r.kt)("inlineCode",{parentName:"strong"},"appsettings.json")," \u4e2d\u914d\u7f6e"),"\uff0c\u4e0b\u9762\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"appsettings.json")," \u9ed8\u8ba4\u4ee3\u7801:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0},'{\n  "Logging": {\n    "LogLevel": {\n      "Default": "Information",\n      "Microsoft": "Warning",\n      "Microsoft.Hosting.Lifetime": "Information",\n      "Microsoft.EntityFrameworkCore": "Information"\n    }\n  },\n  "AllowedHosts": "*"\n}\n')),(0,r.kt)("p",null,"\u8fd9\u6837\u6211\u4eec\u628a\u914d\u7f6e\u6587\u4ef6\u5206\u6563\u5728\u4e0d\u540c\u9879\u76ee\u5c42\u4e4b\u540e\uff0c\u5c31\u53ef\u4ee5\u5b9e\u73b0\u5171\u7528\u548c\u5171\u4eab\u4e86\u3002"),(0,r.kt)("admonition",{title:"\u7279\u522b\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5176\u4ed6\u5c42\u7684\u914d\u7f6e\u6587\u4ef6\u4e0d\u80fd\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"appsettings.json")," \u547d\u540d\uff0c\u4f1a\u5bfc\u81f4\u8986\u76d6\u542f\u52a8\u5c42\u7684\u914d\u7f6e\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u53e6\u5916\uff0c\u5728\u5176\u4ed6\u5c42\u521b\u5efa\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"*.json")," \u6587\u4ef6\u5fc5\u987b\u8bbe\u7f6e\u6587\u4ef6\u5c5e\u6027\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"\u59cb\u7ec8\u590d\u5236\u6216\u8f83\u65b0\u590d\u5236"),"\u3002")),(0,r.kt)("h2",{id:"316-\u53cd\u9988\u4e0e\u5efa\u8bae"},"3.1.6 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,r.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u7ed9 Furion \u63d0 ",(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002")))}c.isMDXComponent=!0}}]);