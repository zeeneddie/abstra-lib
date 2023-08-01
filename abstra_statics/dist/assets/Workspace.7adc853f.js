import{d as g,H as S,J as B,r as x,K as j,b as o,c as t,F as y,L as v,x as c,N as k,G as w,e as r,I,D as f,t as A,w as T,z as _,q as h,O as L,Q as D,a as N}from"./registerWidgets.5bbfbb1a.js";import{d as O,s as W,w as E,a as F,b as R,c as K,m as P,e as V}from"./icons.96408396.js";import{T as z}from"./Tooltip.ab24cfae.js";import{_ as G}from"./logo.084e5d7c.js";import{a as H}from"./asyncComputed.0fa43cb9.js";import{W as J}from"./workspaces.b6d72d50.js";import{L as $}from"./login.67741a94.js";import{D as M}from"./DocsButton.4422b9fc.js";import"./activeRecord.0bf8afc8.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="1f3f483b-3a39-4bd7-a681-0e756dba077b",e._sentryDebugIdIdentifier="sentry-dbid-1f3f483b-3a39-4bd7-a681-0e756dba077b")}catch{}})();const q={class:"sidebar"},Q={class:"section-name"},U=["onClick"],X={class:"item-name"},Y={key:0,class:"tag soon"},Z={key:1,class:"tag beta"},ee={key:2,class:"tag cloud"},oe=g({__name:"Sidebar",setup(e){var p;const n=S(),i=B(),a=x((p=i.name)!=null?p:"forms"),u=j(()=>[{name:"Runtime",items:[{name:"Forms",icon:O,path:"forms"},{name:"Jobs",icon:W,path:"jobs",cloud:!0},{name:"Hooks",icon:E,path:"hooks"},{name:"Dashes",icon:F,path:"dashes",beta:!0}]},{name:"Resources",items:[{name:"Tables",icon:R,path:"tables",beta:!0}]},{name:"Settings",items:[{name:"Style",icon:K,path:"style"},{name:"Sidebar",icon:P,path:"sidebar"}]}]),m=l=>{l.unavailable||(n.push(l.path),a.value=l.path)};return(l,b)=>(o(),t("div",q,[(o(!0),t(y,null,v(_(u),d=>(o(),t("div",{key:d.name,class:"section"},[c("span",Q,k(d.name),1),(o(!0),t(y,null,v(d.items,s=>(o(),t("div",{key:s.name,role:"button",class:w(["item",{active:a.value===s.path,disabled:s.unavailable||d.cloud}]),tabindex:"0",onClick:ke=>m(s)},[r(I,{class:w(["icon",{disabled:s.unavailable,active:a.value===s.path}]),path:s.icon,width:"20",height:"20"},null,8,["class","path"]),c("span",X,k(s.name),1),s.unavailable?(o(),t("span",Y,"SOON")):f("",!0),s.beta?(o(),t("span",Z,"BETA")):f("",!0),s.cloud?(o(),t("span",ee,"CLOUD")):f("",!0),s.warning?(o(),A(z,{key:3,class:"warning",text:s.warning,fixed:!0,top:18,left:18},{default:T(()=>[r(I,{path:_(V),fill:"#D35249",width:"20",height:"20"},null,8,["path"])]),_:2},1032,["text"])):f("",!0)],10,U))),128))]))),128))]))}});const te=h(oe,[["__scopeId","data-v-320e9ff3"]]);const se={},C=e=>(L("data-v-ccfb70ef"),e=e(),D(),e),ae={class:"logo"},ne=C(()=>c("img",{src:G,alt:"Abstra cloud logo"},null,-1)),ce=C(()=>c("span",null," Abstra ",-1)),re=[ne,ce];function le(e,n){return o(),t("div",ae,re)}const ie=h(se,[["render",le],["__scopeId","data-v-ccfb70ef"]]),de={key:0,class:"login-block"},_e={key:1,class:"login-block"},ue=["href"],pe={key:1,class:"button"},be={key:2,class:"login-block"},fe=g({__name:"LoginBlock",setup(e){const n=x(!1),{loading:i,result:a,refetch:u}=H(()=>$.get());async function m(){const b=prompt(`Login to our console at https://cloud.abstra.io and get an API Key to deploy your Projects.

Enter your API Key here:`);!b||(await $.create(b),u())}async function p(){!a.value||(await a.value.delete(),u())}async function l(){!a.value||(n.value=!0,confirm("Are you sure you want to deploy this project to Abstra Cloud?")&&(await J.deploy(),window.open(`https://cloud.abstra.io/projects/${a.value.projectId}/builds`,"_blank")),n.value=!1)}return(b,d)=>_(i)?(o(),t("div",de,"loading...")):_(a)?(o(),t("div",_e,[c("a",{class:"button",href:`https://cloud.abstra.io/projects/${_(a).projectId}`,target:"_blank"},"Go to console ",8,ue),n.value?(o(),t("button",pe,"Deploying...")):(o(),t("button",{key:0,class:"button",onClick:l},"Deploy")),c("button",{class:"button",onClick:p},"Logout")])):(o(),t("div",be,[c("button",{class:"button",onClick:m},"Login to deploy")]))}});const he=h(fe,[["__scopeId","data-v-d5de8b44"]]),me=e=>(L("data-v-77e07499"),e=e(),D(),e),ye=me(()=>c("div",{class:"grow"},null,-1)),ge={class:"workspace"},ve=g({__name:"Workspace",setup(e){return(n,i)=>{const a=N("router-view");return o(),t(y,null,[c("nav",null,[r(ie),ye,r(M),r(he)]),c("div",ge,[r(te,{class:"sidebar"}),r(a)])],64)}}});const je=h(ve,[["__scopeId","data-v-77e07499"]]);export{je as default};
//# sourceMappingURL=Workspace.7adc853f.js.map
