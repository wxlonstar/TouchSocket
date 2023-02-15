"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[9954],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={id:"httpfiletransfer",title:"\u6587\u4ef6\u4f20\u8f93"},l=void 0,a={unversionedId:"httpfiletransfer",id:"httpfiletransfer",title:"\u6587\u4ef6\u4f20\u8f93",description:"\u4e00\u3001\u8bf4\u660e",source:"@site/docs/httpfiletransfer.mdx",sourceDirName:".",slug:"/httpfiletransfer",permalink:"/touchsocket/docs/httpfiletransfer",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/httpfiletransfer.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1675770803,formattedLastUpdatedAt:"Feb 7, 2023",frontMatter:{id:"httpfiletransfer",title:"\u6587\u4ef6\u4f20\u8f93"},sidebar:"docs",previous:{title:"\u9759\u6001\u9875\u9762\u63d2\u4ef6",permalink:"/touchsocket/docs/httpstaticpageplugin"},next:{title:"\u4ea7\u54c1\u53ca\u67b6\u6784\u4ecb\u7ecd",permalink:"/touchsocket/docs/websocketdescription"}},c={},s=[{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u670d\u52a1\u5668\u54cd\u5e94\u6587\u4ef6",id:"\u4e8c\u670d\u52a1\u5668\u54cd\u5e94\u6587\u4ef6",level:2},{value:"\u4e09\u3001\u670d\u52a1\u5668\u63a5\u6536\u4e0a\u4f20\u6587\u4ef6",id:"\u4e09\u670d\u52a1\u5668\u63a5\u6536\u4e0a\u4f20\u6587\u4ef6",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,o.kt)("p",null,"\u8be5Http\u670d\u52a1\u5668\u53ca\u5ba2\u6237\u7aef\uff0c\u4ec5\u4ec5\u662f\u8f7b\u91cf\u7ea7\u7684Http\u5de5\u5177\uff0c\u4e0d\u5177\u5907\u5e7f\u6cdb\u7684\u517c\u5bb9\u6027\uff0c\u6240\u4ee5\u8bf7\u614e\u91cd\u4f7f\u7528\u3002"),(0,o.kt)("h2",{id:"\u4e8c\u670d\u52a1\u5668\u54cd\u5e94\u6587\u4ef6"},"\u4e8c\u3001\u670d\u52a1\u5668\u54cd\u5e94\u6587\u4ef6"),(0,o.kt)("p",null,"\u8be5\u64cd\u4f5c\u652f\u6301\u5927\u578b\u6587\u4ef6\uff0c\u4e5f\u652f\u6301\u65ad\u70b9\u7eed\u4f20\u3001\u652f\u6301\u8fc5\u96f7\u52a0\u901f\u7b49\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'internal class MyHttpPlug : HttpPluginBase\n{\n    protected override void OnGet(ITcpClientBase client, HttpContextEventArgs e)\n    {\n        if (e.Context.Request.UrlEquals("/file"))\n        {\n            e.Context.Response\n                .SetStatus()//\u5fc5\u987b\u8981\u6709\u72b6\u6001\n                .FromFile(@"D:\\System\\Windows.iso", e.Context.Request);//\u76f4\u63a5\u56de\u5e94\u6587\u4ef6\u3002\n        }\n        base.OnGet(client, e);\n    }\n}\n\n')),(0,o.kt)("h2",{id:"\u4e09\u670d\u52a1\u5668\u63a5\u6536\u4e0a\u4f20\u6587\u4ef6"},"\u4e09\u3001\u670d\u52a1\u5668\u63a5\u6536\u4e0a\u4f20\u6587\u4ef6"),(0,o.kt)("p",null,"\u8be5\u64cd\u4f5c\u76ee\u524d\u4ec5\u652f\u6301\u5c0f\u6587\u4ef6\u4e0a\u4f20\uff0c\u5b9e\u6d4b100Mb\u6ca1\u95ee\u9898\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'internal class MyHttpPlug : HttpPluginBase\n{\n    protected override void OnPost(ITcpClientBase client, HttpContextEventArgs e)\n    {\n        if (e.Context.Request.UrlEquals("/uploadfile"))\n        {\n            try\n            {\n                if (e.Context.Request.ContentLen>1024*1024*100)//\u5168\u90e8\u6570\u636e\u4f53\u8d85\u8fc7100Mb\u5219\u76f4\u63a5\u62d2\u7edd\u63a5\u6536\u3002\n                {\n                    e.Context.Response\n                        .SetStatus("403", "\u6570\u636e\u8fc7\u5927")\n                        .Answer();\n                    return;\n                }\n                //\u6b64\u64cd\u4f5c\u4f1a\u5148\u63a5\u6536\u5168\u90e8\u6570\u636e\uff0c\u7136\u540e\u518d\u5206\u5272\u6570\u636e\u3002\n                //\u6240\u4ee5\u4e0a\u4f20\u6587\u4ef6\u4e0d\u5b9c\u8fc7\u5927\uff0c\u4e0d\u7136\u4f1a\u5185\u5b58\u6ea2\u51fa\u3002\n                var multifileCollection = e.Context.Request.GetMultifileCollection();\n\n                foreach (var item in multifileCollection)\n                {\n                    StringBuilder stringBuilder = new StringBuilder();\n                    stringBuilder.Append($"\u6587\u4ef6\u540d={item.FileName}\\t");\n                    stringBuilder.Append($"\u6570\u636e\u957f\u5ea6={item.Length}");\n                    client.Logger.Info(stringBuilder.ToString());\n                }\n\n                e.Context.Response\n                        .SetStatus()\n                        .FromText("Ok")\n                        .Answer();\n            }\n            catch (Exception ex)\n            {\n                client.Logger.Exception(ex);\n            }\n        }\n        base.OnPost(client, e);\n    }\n}\n\n')))}u.isMDXComponent=!0}}]);