"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[9706],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=o,b=u["".concat(s,".").concat(c)]||u[c]||m[c]||a;return n?r.createElement(b,i(i({ref:t},d),{},{components:n})):r.createElement(b,i({ref:t},d))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),o=n(6010);const a="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(7462),o=n(7294),a=n(6010),i=n(2389),l=n(7392),s=n(7094),p=n(2466);const d="tabList__CuJ",m="tabItem_LNqP";function u(e){var t;const{lazy:n,block:i,defaultValue:u,values:c,groupId:b,className:k}=e,N=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),C=c??N.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,l.l)(C,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===u?u:u??(null==(t=N.find((e=>e.props.default)))?void 0:t.props.value)??N[0].props.value;if(null!==y&&!C.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${C.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:g}=(0,s.U)(),[S,D]=(0,o.useState)(y),f=[],{blockElementScrollPositionUntilNextRender:q}=(0,p.o5)();if(null!=b){const e=h[b];null!=e&&e!==S&&C.some((t=>t.value===e))&&D(e)}const P=e=>{const t=e.currentTarget,n=f.indexOf(t),r=C[n].value;r!==S&&(q(t),D(r),null!=b&&g(b,String(r)))},w=e=>{var t;let n=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const t=f.indexOf(e.currentTarget)+1;n=f[t]??f[0];break}case"ArrowLeft":{const t=f.indexOf(e.currentTarget)-1;n=f[t]??f[f.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":i},k)},C.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:e=>f.push(e),onKeyDown:w,onClick:P},i,{className:(0,a.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":S===t})}),n??t)}))),n?(0,o.cloneElement)(N.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==S})))))}function c(e){const t=(0,i.Z)();return o.createElement(u,(0,r.Z)({key:String(t)},e))}},7963:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));n(4996),n(5488),n(5162);const a={id:"dbcontext-multi-database",title:"9.18 \u591a\u79cd\u6570\u636e\u5e93\u64cd\u4f5c",sidebar_label:"9.18 \u591a\u79cd\u6570\u636e\u5e93\u64cd\u4f5c \u2728"},i=void 0,l={unversionedId:"dbcontext-multi-database",id:"dbcontext-multi-database",title:"9.18 \u591a\u79cd\u6570\u636e\u5e93\u64cd\u4f5c",description:"\u5982\u679c\u8fde\u63a5\u5b57\u7b26\u4e32\u662f\u914d\u7f6e\u5728\u81ea\u5b9a\u4e49\u7684 .json \u6587\u4ef6\u4e2d\uff0c\u90a3\u4e48\u5fc5\u987b\u5728 Visual Studio \u4e2d\u914d\u7f6e .json \u53f3\u952e\u5c5e\u6027\uff0c\u8bbe\u7f6e \u590d\u5236 \u8f93\u51fa\u76ee\u5f55\u4e3a \u5982\u679c\u8f83\u65b0\u5219\u590d\u5236\uff0c\u751f\u6210\u64cd\u4f5c\u4e3a \u5185\u5bb9\u3002",source:"@site/docs/dbcontext-multi-database.mdx",sourceDirName:".",slug:"/dbcontext-multi-database",permalink:"/touchsocket/docs/dbcontext-multi-database",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/dbcontext-multi-database.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1673249119,formattedLastUpdatedAt:"Jan 9, 2023",frontMatter:{id:"dbcontext-multi-database",title:"9.18 \u591a\u79cd\u6570\u636e\u5e93\u64cd\u4f5c",sidebar_label:"9.18 \u591a\u79cd\u6570\u636e\u5e93\u64cd\u4f5c \u2728"},sidebar:"docs",previous:{title:"9.17 Sql \u9ad8\u7ea7\u4ee3\u7406",permalink:"/touchsocket/docs/dbcontext-sql-proxy"},next:{title:"9.19 \u6570\u636e\u5e93\u751f\u6210\u6a21\u578b (Db First)",permalink:"/touchsocket/docs/dbcontext-db-first"}},s={},p=[{value:"9.18.1 <code>Furion</code> \u652f\u6301\u6570\u636e\u5e93\u63d0\u4f9b\u5668",id:"9181-furion-\u652f\u6301\u6570\u636e\u5e93\u63d0\u4f9b\u5668",level:2},{value:"9.18.1.1 \u6570\u636e\u5e93\u63d0\u4f9b\u5668\u5bf9\u5e94\u5305",id:"91811-\u6570\u636e\u5e93\u63d0\u4f9b\u5668\u5bf9\u5e94\u5305",level:3},{value:"9.18.2 \u591a\u6570\u636e\u5e93\u670d\u52a1\u6ce8\u518c",id:"9182-\u591a\u6570\u636e\u5e93\u670d\u52a1\u6ce8\u518c",level:2},{value:"9.18.3 \u5404\u7c7b\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32\u914d\u7f6e\u793a\u4f8b",id:"9183-\u5404\u7c7b\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32\u914d\u7f6e\u793a\u4f8b",level:2},{value:"9.18.4 \u591a\u6570\u636e\u5e93\u4f7f\u7528\u65b9\u5f0f",id:"9184-\u591a\u6570\u636e\u5e93\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"9.18.4.1 \u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f",id:"91841-\u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f",level:3},{value:"9.18.4.2 \u975e\u6cdb\u578b\u4ed3\u50a8\u65b9\u5f0f",id:"91842-\u975e\u6cdb\u578b\u4ed3\u50a8\u65b9\u5f0f",level:3},{value:"9.18.4.3 <code>Sql</code> \u4ed3\u50a8\u65b9\u5f0f",id:"91843-sql-\u4ed3\u50a8\u65b9\u5f0f",level:3},{value:"9.18.4.4 \u5b9e\u4f53\u5b9a\u4e49\u65b9\u5f0f",id:"91844-\u5b9e\u4f53\u5b9a\u4e49\u65b9\u5f0f",level:3},{value:"9.18.4.5 Linq \u51fd\u6570\u65b9\u5f0f",id:"91845-linq-\u51fd\u6570\u65b9\u5f0f",level:3},{value:"9.18.5 <code>SqlServer</code> \u4f4e\u7248\u672c\u652f\u6301\u52a8\u6001\u914d\u7f6e",id:"9185-sqlserver-\u4f4e\u7248\u672c\u652f\u6301\u52a8\u6001\u914d\u7f6e",level:2},{value:"9.18.6 <code>MySql</code> \u65f6\u533a\u95ee\u9898/\u5c11 8 \u5c0f\u65f6\u95ee\u9898",id:"9186-mysql-\u65f6\u533a\u95ee\u9898\u5c11-8-\u5c0f\u65f6\u95ee\u9898",level:2},{value:"9.18.7 <code>snake_case</code> \u98ce\u683c\u8868\u540d\u548c\u5b57\u6bb5",id:"9187-snake_case-\u98ce\u683c\u8868\u540d\u548c\u5b57\u6bb5",level:2},{value:"9.18.8 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9188-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"\u8fde\u63a5\u5b57\u7b26\u4e32\u914d\u7f6e\u6ce8\u610f\u4e8b\u9879",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u8fde\u63a5\u5b57\u7b26\u4e32\u662f\u914d\u7f6e\u5728\u81ea\u5b9a\u4e49\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},".json")," \u6587\u4ef6\u4e2d\uff0c\u90a3\u4e48\u5fc5\u987b\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Visual Studio")," \u4e2d\u914d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},".json")," \u53f3\u952e\u5c5e\u6027\uff0c\u8bbe\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"\u590d\u5236")," \u8f93\u51fa\u76ee\u5f55\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"\u5982\u679c\u8f83\u65b0\u5219\u590d\u5236"),"\uff0c\u751f\u6210\u64cd\u4f5c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"\u5185\u5bb9"),"\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u5426\u5219\u5c31\u4f1a\u63d0\u793a\u627e\u4e0d\u5230\u914d\u7f6e\u6216\u8fde\u63a5\u5b57\u7b26\u4e32\u7684\u9519\u8bef\u3002")),(0,o.kt)("h2",{id:"9181-furion-\u652f\u6301\u6570\u636e\u5e93\u63d0\u4f9b\u5668"},"9.18.1 ",(0,o.kt)("inlineCode",{parentName:"h2"},"Furion")," \u652f\u6301\u6570\u636e\u5e93\u63d0\u4f9b\u5668"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"SqlServer"),(0,o.kt)("th",{parentName:"tr",align:null},"Sqlite"),(0,o.kt)("th",{parentName:"tr",align:null},"Cosmos"),(0,o.kt)("th",{parentName:"tr",align:null},"InMemoryDatabase"),(0,o.kt)("th",{parentName:"tr",align:null},"MySql"),(0,o.kt)("th",{parentName:"tr",align:null},"PostgreSQL"),(0,o.kt)("th",{parentName:"tr",align:null},"Oracle"),(0,o.kt)("th",{parentName:"tr",align:null},"Firebird"),(0,o.kt)("th",{parentName:"tr",align:null},"Dm"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714")))),(0,o.kt)("h3",{id:"91811-\u6570\u636e\u5e93\u63d0\u4f9b\u5668\u5bf9\u5e94\u5305"},"9.18.1.1 \u6570\u636e\u5e93\u63d0\u4f9b\u5668\u5bf9\u5e94\u5305"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SqlServer"),"\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"Microsoft.EntityFrameworkCore.SqlServer")," (\u652f\u6301 SqlServer 2005 +)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Sqlite"),"\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"Microsoft.EntityFrameworkCore.Sqlite")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Cosmos"),"\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"Microsoft.EntityFrameworkCore.Cosmos")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"InMemoryDatabase"),"\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"Microsoft.EntityFrameworkCore.InMemory")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MySql"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Pomelo.EntityFrameworkCore.MySql"),"\uff1a(\u652f\u6301 MySql 5.x +)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MySql.EntityFrameworkCore"),"\uff1a\u652f\u6301 (MySql 8.x +)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PostgreSQL"),"\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"Npgsql.EntityFrameworkCore.PostgreSQL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Oracle"),"\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"Oracle.EntityFrameworkCore")," \uff08\u652f\u6301 Oracle 10 +\uff09"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Firebird"),"\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"FirebirdSql.EntityFrameworkCore.Firebird")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Dm"),"\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"Microsoft.EntityFrameworkCore.Dm"))),(0,o.kt)("admonition",{title:"\u5c0f\u77e5\u8bc6",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u8fd9\u4e9b\u6570\u636e\u5e93\u5305\u5e94\u8be5\u5b89\u88c5\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Furion.EntityFramework.Core")," \u5c42\u3002\u7279\u6b8a\u60c5\u51b5\u9700\u5b89\u88c5\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Furion.Core")," \u5c42\u4e2d\uff0c\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"Mysql")," ",(0,o.kt)("inlineCode",{parentName:"p"},"HasCharset()")," \u914d\u7f6e\u3002")),(0,o.kt)("h2",{id:"9182-\u591a\u6570\u636e\u5e93\u670d\u52a1\u6ce8\u518c"},"9.18.2 \u591a\u6570\u636e\u5e93\u670d\u52a1\u6ce8\u518c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'// \u6ce8\u518c SqlServer\noptions.AddDbPool<FurionDbContext>(DbProvider.SqlServer);\noptions.AddDbPool<FurionDbContext>($"{DbProvider.SqlServer}@2005"); // \u652f\u6301 2005 \u6570\u636e\u5e93\noptions.AddDbPool<FurionDbContext>($"{DbProvider.SqlServer}@2008"); // \u652f\u6301 2008 \u6570\u636e\u5e93\n\n// \u6ce8\u518c Sqlite\noptions.AddDbPool<FurionDbContext>(DbProvider.Sqlite);\n\n// \u6ce8\u518c Cosmos\noptions.AddDbPool<FurionDbContext>(DbProvider.Cosmos);\n\n// \u6ce8\u518c InMemoryDatabase\noptions.AddDbPool<FurionDbContext>(DbProvider.InMemoryDatabase);\n\n// \u6ce8\u518c MySql\noptions.AddDbPool<FurionDbContext>(DbProvider.MySql);\noptions.AddDbPool<FurionDbContext>($"{DbProvider.MySql}@8.0.22");  // \u53ef\u4ee5\u6307\u5b9a\u7248\u672c\u53f7\noptions.AddDbPool<FurionDbContext>(DbProvider.MySqlOfficial);   // \u4f7f\u7528 MySql \u5b98\u65b9\u5305\uff08MySql.EntityFrameworkCore\uff09\n\n// \u6ce8\u518c PostgreSQL\noptions.AddDbPool<FurionDbContext>(DbProvider.Npgsql);\n\n// \u6ce8\u518c Oracle\noptions.AddDbPool<FurionDbContext>(DbProvider.Oracle);\noptions.AddDbPool<FurionDbContext>($"{DbProvider.Oracle}@11");  // \u652f\u6301 Oracle 11 \u7248\u672c\n\n// \u6ce8\u518c Firebird\noptions.AddDbPool<FurionDbContext>(DbProvider.Firebird);\n\n// \u6ce8\u518c Dm\noptions.AddDbPool<FurionDbContext>(DbProvider.Dm);\n')),(0,o.kt)("admonition",{title:"\u65b0\u7248 SqlServer/MySQL/Oracle \u6ce8\u610f",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"SqlServer")," \u517c\u5bb9 ",(0,o.kt)("inlineCode",{parentName:"p"},"2005-2008")," \u5199\u6cd5\uff1a"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'services.AddDatabaseAccessor(options =>\n{\n    options.AddDbPool<FurionDbContext>($"{DbProvider.SqlServer}@2005"); // \u652f\u6301 2005 \u6570\u636e\u5e93\n    options.AddDbPool<FurionDbContext>($"{DbProvider.SqlServer}@2008"); // \u652f\u6301 2008 \u6570\u636e\u5e93\n});\n')),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"MySQL")," \u517c\u5bb9\u65e7\u7248\u672c\uff08\u5e26\u7248\u672c\u53f7\uff09\u5199\u6cd5\uff1a"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'services.AddDatabaseAccessor(options =>\n{\n    options.AddDbPool<FurionDbContext>($"{DbProvider.MySql}@8.0.22");\n});\n')),(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f7f\u7528\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"MySql.EntityFrameworkCore")," \u5305\uff0c\u5219\u9700\u6539\u4e3a\u4ee5\u4e0b\u6ce8\u518c\uff1a"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"services.AddDatabaseAccessor(options =>\n{\n    options.AddDbPool<FurionDbContext>(DbProvider.MySqlOfficial);\n});\n")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"Oracle")," \u517c\u5bb9 ",(0,o.kt)("inlineCode",{parentName:"p"},"11")," \u7248\u672c"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {3-4,6-10}",showLineNumbers:!0,"{3-4,6-10}":!0},'services.AddDatabaseAccessor(options =>\n{\n    // \u6b63\u5e38\u8fd9\u6837\u914d\u7f6e\u5373\u53ef\n    options.AddDbPool<FurionDbContext>($"{DbProvider.Oracle}@11");\n\n    // \u5982\u679c\u4f9d\u7136\u51fa\u73b0 ORA-00933: SQL \u9519\u8bef\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u4ee5\u4e0b\u914d\u7f6e\uff1a\n    options.AddDbPool<FurionDbContext>($"{DbProvider.Oracle}@11", optionBuilder: (ses, opt) =>\n    {\n        opt.UseOracle(b => b.UseOracleSQLCompatibility("11"));\n    });\n});\n'))),(0,o.kt)("h2",{id:"9183-\u5404\u7c7b\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32\u914d\u7f6e\u793a\u4f8b"},"9.18.3 \u5404\u7c7b\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32\u914d\u7f6e\u793a\u4f8b"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Sqlite"),"\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"Data Source=./Furion.db")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MySql"),"\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"Data Source=localhost;Database=Furion;User ID=root;Password=000000;pooling=true;port=3306;sslmode=none;CharSet=utf8;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SqlServer"),"\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"Server=localhost;Database=Furion;User=sa;Password=000000;MultipleActiveResultSets=True;Encrypt=True;TrustServerCertificate=True;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Oracle"),"\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"User Id=orcl;Password=orcl;Data Source=(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=127.0.0.1)(PORT=1521)))(CONNECT_DATA=(SERVICE_NAME=orcl)))")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PostgreSQL"),"\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"PORT=5432;DATABASE=postgres;HOST=127.0.0.1;PASSWORD=postgres;USER ID=postgres;"))),(0,o.kt)("h2",{id:"9184-\u591a\u6570\u636e\u5e93\u4f7f\u7528\u65b9\u5f0f"},"9.18.4 \u591a\u6570\u636e\u5e93\u4f7f\u7528\u65b9\u5f0f"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u901a\u8fc7\u72ec\u521b\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668")," \u5b9e\u73b0\u591a\u6570\u636e\u5e93\u7075\u6d3b\u64cd\u4f5c\u5207\u6362\u3002\u53ea\u9700\u8981\u4e3a\u6bcf\u4e00\u79cd\u6570\u636e\u5e93\u7ed1\u5b9a\u552f\u4e00\u7684\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668\u5373\u53ef\u3002"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u652f\u6301\u591a\u6570\u636e\u5e93\u64cd\u4f5c\u7684\u5b9e\u4f8b\uff1a"),(0,o.kt)("h3",{id:"91841-\u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f"},"9.18.4.1 \u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// \u5207\u6362\u5230 MSSQL \u64cd\u4f5c Person\u8868\nvar mssqlRepository = personRepository.Change<Person, MsSqlDbContextLocator>();\n\n// \u5207\u6362\u5230 MySql \u64cd\u4f5c Person\u8868\nvar mysqlRepository = personRepository.Change<Person, MySqlDbContextLocator>();\n\n// \u5207\u6362\u5230 Sqlite \u64cd\u4f5c Person\u8868\nvar sqliteRepository = personRepository.Change<Person, SqliteDbContextLocator>();\n\n")),(0,o.kt)("h3",{id:"91842-\u975e\u6cdb\u578b\u4ed3\u50a8\u65b9\u5f0f"},"9.18.4.2 \u975e\u6cdb\u578b\u4ed3\u50a8\u65b9\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// \u5207\u6362\u5230 MSSQL \u64cd\u4f5c Person\u8868\nvar mssqlRepository = repository.Change<Person, MsSqlDbContextLocator>();\n\n// \u5207\u6362\u5230 MySql \u64cd\u4f5c Person\u8868\nvar mysqlRepository = repository.Change<Person, MySqlDbContextLocator>();\n\n// \u5207\u6362\u5230 Sqlite \u64cd\u4f5c Person\u8868\nvar sqliteRepository = repository.Change<Person, SqliteDbContextLocator>();\n")),(0,o.kt)("h3",{id:"91843-sql-\u4ed3\u50a8\u65b9\u5f0f"},"9.18.4.3 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Sql")," \u4ed3\u50a8\u65b9\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// \u5207\u6362\u5230 MSSQL \u64cd\u4f5c Person\u8868\nvar mssqlRepository = sqlRepository.Change<MsSqlDbContextLocator>();\n\n// \u5207\u6362\u5230 MySql \u64cd\u4f5c Person\u8868\nvar mysqlRepository = sqlRepository.Change<MySqlDbContextLocator>();\n\n// \u5207\u6362\u5230 Sqlite \u64cd\u4f5c Person\u8868\nvar sqliteRepository = sqlRepository.Change<SqliteDbContextLocator>();\n")),(0,o.kt)("h3",{id:"91844-\u5b9e\u4f53\u5b9a\u4e49\u65b9\u5f0f"},"9.18.4.4 \u5b9e\u4f53\u5b9a\u4e49\u65b9\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"\n// \u652f\u6301\u4e00\u4e2a\u6570\u636e\u5e93\npublic class Person: IEntity<MySqlDbContextLocator>\n{\n    // ....\n}\n\n// \u652f\u6301\u591a\u4e2a\u6570\u636e\u5e93\npublic class Person: IEntity<MySqlDbContextLocator, SqliteDbContextLocator>\n{\n    // ....\n}\n")),(0,o.kt)("admonition",{title:"\u5c0f\u77e5\u8bc6",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u6240\u6709\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u5b9e\u4f53\u4f9d\u8d56\u63a5\u53e3\u6216\u62bd\u8c61\u7c7b")," \u90fd\u652f\u6301\u6cdb\u578b\u65b9\u5f0f \u6307\u5b9a \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668\uff0c\u6700\u591a\u652f\u6301 ",(0,o.kt)("inlineCode",{parentName:"p"},"8")," \u4e2a\u3002")),(0,o.kt)("h3",{id:"91845-linq-\u51fd\u6570\u65b9\u5f0f"},"9.18.4.5 Linq \u51fd\u6570\u65b9\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'public static class QueryFunctions\n{\n    [QueryableFunction("FN_GetId", "dbo", typeof(MySqlDbContextLocator), typeof(SqliteDbContextLocator))]\n    public static int GetId(int id) => throw new NotSupportedException();\n}\n')),(0,o.kt)("h2",{id:"9185-sqlserver-\u4f4e\u7248\u672c\u652f\u6301\u52a8\u6001\u914d\u7f6e"},"9.18.5 ",(0,o.kt)("inlineCode",{parentName:"h2"},"SqlServer")," \u4f4e\u7248\u672c\u652f\u6301\u52a8\u6001\u914d\u7f6e"),(0,o.kt)("p",null,"\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c\u53ea\u9700\u8981\u5728\u6ce8\u518c\u7684\u65f6\u5019\u6307\u5b9a ",(0,o.kt)("inlineCode",{parentName:"p"},"@2008")," \u6570\u636e\u5e93\u5373\u53ef\uff0c\u6709\u4e9b\u65f6\u5019\u6211\u4eec\u53ef\u80fd\u9700\u8981\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"DbContext")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"OnConfigure")," \u4e2d\u914d\u7f6e\uff0c\u8fd9\u4e2a\u65f6\u5019\u5c31\u9700\u8981\u6dfb\u52a0\u4ee5\u4e0b\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {4}",showLineNumbers:!0,"":!0,"{4}":!0},"protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)\n{\n    optionsBuilder.UseSqlServer(DbProvider.GetConnectionString<TDbContext>())\n                  .ReplaceService<IQueryTranslationPostprocessorFactory, SqlServer2008QueryTranslationPostprocessorFactory>();\n    base.OnConfiguring(optionsBuilder);\n}\n")),(0,o.kt)("admonition",{title:"\u5c0f\u77e5\u8bc6",type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"DbProvider.GetConnectionString<TDbContext>()")," \u662f\u83b7\u53d6\u5bf9\u5e94\u4e0a\u4e0b\u6587\u914d\u7f6e\u7684\u6570\u636e\u5e93\u94fe\u63a5\u5b57\u7b26\u4e32\u3002")),(0,o.kt)("h2",{id:"9186-mysql-\u65f6\u533a\u95ee\u9898\u5c11-8-\u5c0f\u65f6\u95ee\u9898"},"9.18.6 ",(0,o.kt)("inlineCode",{parentName:"h2"},"MySql")," \u65f6\u533a\u95ee\u9898/\u5c11 8 \u5c0f\u65f6\u95ee\u9898"),(0,o.kt)("p",null,"\u53ef\u67e5\u9605\u76f8\u5173 ",(0,o.kt)("inlineCode",{parentName:"p"},"Issue"),"\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/I3RSCO"},"https://gitee.com/dotnetchina/Furion/issues/I3RSCO")),(0,o.kt)("h2",{id:"9187-snake_case-\u98ce\u683c\u8868\u540d\u548c\u5b57\u6bb5"},"9.18.7 ",(0,o.kt)("inlineCode",{parentName:"h2"},"snake_case")," \u98ce\u683c\u8868\u540d\u548c\u5b57\u6bb5"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b ",(0,o.kt)("inlineCode",{parentName:"p"},"EFCore")," \u5c06\u4f7f\u7528\u548c\u6a21\u578b\u5b9a\u4e49\u4e00\u81f4\u7684\u65b9\u5f0f\u5b9a\u4e49\u8868\u548c\u5b57\u6bb5\uff0c\u4f46\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/efcore/EFCore.NamingConventions"},"https://github.com/efcore/EFCore.NamingConventions")," \u62d3\u5c55\u63d2\u4ef6\u6539\u53d8\u6b64\u884c\u4e3a\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {2}",showLineNumbers:!0,"{2}":!0}," builder.UseNpgsql()\n        .UseLowerCaseNamingConvention();\n")),(0,o.kt)("p",null,"\u5176\u4ed6\u8d44\u6599\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://www.npgsql.org/efcore/modeling/table-column-naming.html"},"https://www.npgsql.org/efcore/modeling/table-column-naming.html")),(0,o.kt)("h2",{id:"9188-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.18.8 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,o.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u7ed9 Furion \u63d0 ",(0,o.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002")))}m.isMDXComponent=!0}}]);