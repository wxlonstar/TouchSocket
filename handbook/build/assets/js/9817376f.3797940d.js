"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[4869],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),c=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(k,o(o({ref:e},s),{},{components:n})):r.createElement(k,o({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=d;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:a,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},985:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={id:"createhttpservice",sidebar_position:2,title:"\u521b\u5efaHttpService",sidebar_label:"9.2 \u521b\u5efaHttpService"},o=void 0,p={unversionedId:"09\u3001HTTP\u7ec4\u4ef6/createhttpservice",id:"09\u3001HTTP\u7ec4\u4ef6/createhttpservice",title:"\u521b\u5efaHttpService",description:"\u8bf4\u660e",source:"@site/docs/09\u3001HTTP\u7ec4\u4ef6/9.2 \u521b\u5efaHttpService.mdx",sourceDirName:"09\u3001HTTP\u7ec4\u4ef6",slug:"/09\u3001HTTP\u7ec4\u4ef6/createhttpservice",permalink:"/touchsocket/docs/09\u3001HTTP\u7ec4\u4ef6/createhttpservice",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/09\u3001HTTP\u7ec4\u4ef6/9.2 \u521b\u5efaHttpService.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1675088302,formattedLastUpdatedAt:"Jan 30, 2023",sidebarPosition:2,frontMatter:{id:"createhttpservice",sidebar_position:2,title:"\u521b\u5efaHttpService",sidebar_label:"9.2 \u521b\u5efaHttpService"},sidebar:"tutorialSidebar",previous:{title:"9.1 \u4ea7\u54c1\u53ca\u67b6\u6784\u4ecb\u7ecd",permalink:"/touchsocket/docs/09\u3001HTTP\u7ec4\u4ef6/httpdescription"},next:{title:"9.3 \u521b\u5efaHttpClient",permalink:"/touchsocket/docs/09\u3001HTTP\u7ec4\u4ef6/createhttpclient"}},i={},c=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"\u53ef\u914d\u7f6e\u9879",id:"\u53ef\u914d\u7f6e\u9879",level:2},{value:"\u652f\u6301\u63d2\u4ef6\u63a5\u53e3",id:"\u652f\u6301\u63d2\u4ef6\u63a5\u53e3",level:2},{value:"IHttpPlugin",id:"ihttpplugin",level:3},{value:"\u521b\u5efaHttpService",id:"\u521b\u5efahttpservice",level:2},{value:"\u521b\u5efaHttpsService",id:"\u521b\u5efahttpsservice",level:2}],s={toc:c};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"HttpService"),"\u662fHttp\u7cfb\u670d\u52a1\u5668\u57fa\u7c7b\uff0c\u4f46\u662f\u4e0d\u53c2\u4e0e\u5b9e\u9645\u7684\u6570\u636e\u4ea4\u4e92\uff0c\u5b9e\u9645\u7684\u6570\u636e\u4ea4\u4e92\u7531",(0,a.kt)("strong",{parentName:"p"},"HttpSocketClient"),"\u5b8c\u6210\uff0c\u6240\u4ee5HttpService\u7684\u529f\u80fd\u53ea\u662f\u914d\u7f6e\u3001\u6fc0\u6d3b\u3001\u7ba1\u7406\u3001\u6ce8\u9500\u3001\u91cd\u5efaHttpSocketClient\u7c7b\u5b9e\u4f8b\u3002"),(0,a.kt)("h2",{id:"\u53ef\u914d\u7f6e\u9879"},"\u53ef\u914d\u7f6e\u9879"),(0,a.kt)("p",null,"\u7ee7\u627fTcpService\u3002"),(0,a.kt)("h2",{id:"\u652f\u6301\u63d2\u4ef6\u63a5\u53e3"},"\u652f\u6301\u63d2\u4ef6\u63a5\u53e3"),(0,a.kt)("p",null,"\u58f0\u660e\u81ea\u5b9a\u4e49\u5b9e\u4f8b\u7c7b\uff0c\u7136\u540e\u5b9e\u73b0",(0,a.kt)("strong",{parentName:"p"},"IHttpPlugin"),"\u63a5\u53e3\uff0c\u5373\u53ef\u5b9e\u73b0\u4e0b\u5217\u4e8b\u52a1\u7684\u89e6\u53d1\u3002\n\u6216\u8005\u7ee7\u627f\u81ea",(0,a.kt)("strong",{parentName:"p"},"HttpPluginBase"),"\u7c7b\uff0c\u91cd\u5199\u76f8\u5e94\u65b9\u6cd5\u5373\u53ef\u3002"),(0,a.kt)("h3",{id:"ihttpplugin"},"IHttpPlugin"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OnDelete"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u6536\u5230Delete\u8bf7\u6c42\u65f6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OnGet"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u6536\u5230OnGet\u8bf7\u6c42\u65f6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OnPost"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u6536\u5230OnPost\u8bf7\u6c42\u65f6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OnPut"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u6536\u5230OnPut\u8bf7\u6c42\u65f6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OnReceivedOtherHttpRequest"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u6536\u5230OnReceivedOtherHttpRequest\u8bf7\u6c42\u65f6")))),(0,a.kt)("a",{name:"LAsiE"}),(0,a.kt)("h2",{id:"\u521b\u5efahttpservice"},"\u521b\u5efaHttpService"),(0,a.kt)("p",null,"HttpService\u7684\u521b\u5efa\uff0c\u57fa\u672c\u548cTcpService\u4e00\u81f4\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u7ee7\u627f\u5b9e\u73b0\uff0c\u4e0b\u5217\u4ec5\u6f14\u793a\u6700\u7b80\u5355\u5b9e\u73b0\u3002"),(0,a.kt)("p",null,"HttpService\u7684\u76f8\u5173\u4e8b\u52a1\uff0c\u4f1a\u901a\u8fc7",(0,a.kt)("strong",{parentName:"p"},"\u63d2\u4ef6"),"\u89e6\u53d1\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'var service = new HttpService();\n\nvar config = new TouchSocketConfig();\nconfig.UsePlugin()\n    .SetListenIPHosts(new IPHost[] { new IPHost(7789) })\n    .ConfigureContainer(a=> \n    {\n        a.SetSingletonLogger<ConsoleLogger>();\n    });\n\nservice.Setup(config).Start();\n\nservice.AddPlugin<MyHttpPlug>();\n\nConsole.WriteLine("Http\u670d\u52a1\u5668\u5df2\u542f\u52a8");\n')),(0,a.kt)("p",null,"\u5728\u63d2\u4ef6\u4e2d\uff0c\u901a\u8fc7",(0,a.kt)("strong",{parentName:"p"},"\u91cd\u5199"),"\uff08\u6216\u5b9e\u73b0\uff09\u7684\u65b9\u5f0f\uff0c\u8fdb\u5165",(0,a.kt)("strong",{parentName:"p"},"OnGet"),"\u3001",(0,a.kt)("strong",{parentName:"p"},"OnPost"),"\u3001",(0,a.kt)("strong",{parentName:"p"},"OnDelete"),"\u3001",(0,a.kt)("strong",{parentName:"p"},"OnPut"),"\u7b49\u51fd\u6570\uff0c\u5373\u53ef\u5904\u7406\u5bf9\u5e94\u8bf7\u6c42\u3002"),(0,a.kt)("p",null,"\u5176\u4e2d\uff0c\u901a\u8fc7e\u53c2\u6570\u83b7\u5f97\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"e.Context.Request\uff1a"),"Http\u8bf7\u6c42\uff0c\u53ef\u4ee5\u83b7\u5f97\u4e00\u4e9b\u8bf7\u6c42\u4fe1\u606f\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"e.Context.Response"),"\uff1aHttp\u54cd\u5e94\uff0c\u9ed8\u8ba4\u662fnull\uff0c\u5982\u679c\u9700\u8981\u54cd\u5e94\uff0c\u76f4\u63a5\u6784\u9020HttpResponse\uff0c\u7136\u540e\u8d4b\u503c\u5373\u53ef\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'/// <summary>\n/// \u652f\u6301GET\u3001Post\u3001Put\uff0cDelete\uff0c\u6216\u8005\u5176\u4ed6\n/// </summary>\nclass MyHttpPlug : HttpPluginBase\n{\n    protected override void OnGet(ITcpClientBase client, HttpContextEventArgs e)\n    {\n        Console.WriteLine(e.Context.Request.ToString());\n\n        ////\u5bf9\u5f53\u524d\u8bf7\u6c42\u4f5c\u51fa\u54cd\u5e94\uff0c\u5728\u8be5\u4e8b\u4ef6\u7ed3\u675f\u540e\u56de\u5e94\u3002\n        //e.Context.Response.FromText("TouchSocket");\n\n        ////\u6216\u8005\u76f4\u63a5\u6784\u5efa\u54cd\u5e94\uff0c\u7136\u540e\u53d1\u9001\u3002\n        //e.Context.Response.FromText("TouchSoclet").Answer();\n      \n        base.OnGet(client, e);\n    }\n}\n')),(0,a.kt)("a",{name:"toLVc"}),(0,a.kt)("h2",{id:"\u521b\u5efahttpsservice"},"\u521b\u5efaHttpsService"),(0,a.kt)("p",null,"Https\u670d\u52a1\u5668\uff0c\u548chttp\u670d\u52a1\u5668\u51e0\u4e4e\u4e00\u6837\uff0c\u53ea\u4e0d\u8fc7\u589e\u52a0\u4e86\u4e00\u4e2aSsl\u7684\u914d\u7f6e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'.SetServiceSslOption(new ServiceSslOption() \n{ \n    Certificate = new X509Certificate2("RRQMSocket.pfx", "RRQMSocket"), \n    SslProtocols = SslProtocols.Tls12 \n}))\n')))}u.isMDXComponent=!0}}]);