import{u as I}from"./index.e92c5cf0.js";import{f as u,eG as D,d as w,b as o,c,w as l,ar as f,u as n,bG as P,v as x,eA as R,H as B,ev as _,ex as g,e as K,ew as S,bg as T,aD as V,eC as N,eD as j,I as $}from"./outputWidgets.599b9112.js";import{g as H}from"./api.3c82141e.js";import{a as y}from"./asyncComputed.78829a67.js";import{P as z}from"./PlayerNavbar.4fcaf0df.js";import{P as E}from"./repository.bd0812ce.js";import{e as F}from"./icons.7563f867.js";import{A as G}from"./ArrowRightOutlined.08fa31dd.js";import"./index.d8534685.js";import"./index.c551a802.js";import{A as v}from"./index.da8527b2.js";import{T as h}from"./Typography.b444065a.js";import{C as L}from"./Card.80b905bf.js";import"./pubsub.08234d46.js";import"./runnerData.32453a66.js";import"./url.07299da5.js";import"./Base.7b28ff94.js";import"./Link.ef954c34.js";import"./Paragraph.03bfa3d0.js";import"./Text.86ba57b0.js";import"./Title.6a66852e.js";import"./TabPane.eda3a741.js";import"./hasIn.5af3d6c5.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="6e8423f4-c9c0-4df3-a375-a33bcb0ccc41",a._sentryDebugIdIdentifier="sentry-dbid-6e8423f4-c9c0-4df3-a375-a33bcb0ccc41")}catch{}})();function k(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),r.forEach(function(s){M(a,s,t[s])})}return a}function M(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}var b=function(e,t){var r=k({},e,t.attrs);return u(D,k({},r,{icon:G}),null)};b.displayName="ArrowRightOutlined";b.inheritAttrs=!1;const W=b,q=w({__name:"KanbanButton",emits:["go-to-kanban"],setup(a,{emit:e}){return(t,r)=>(o(),c(n(P),{class:"kanban-btn",onClick:r[0]||(r[0]=s=>e("go-to-kanban"))},{default:l(()=>[f(" Kanban "),u(n(W))]),_:1}))}});const J=x(q,[["__scopeId","data-v-73dd2178"]]),Q={class:"page"},U=w({__name:"Home",setup(a){const e=R(),{result:t,loading:r}=y(H),s=B(()=>{var i,d;return(d=(i=t.value)==null?void 0:i.sidebar.filter(p=>p.visible))!=null?d:[]}),O=i=>{e.push({path:`/${i}`})},A=()=>{e.push({name:"playerKanban"})},C=y(async()=>{try{return await new E(I).getData({selection:[]}),!0}catch{return!1}});return(i,d)=>{var p;return o(),_("div",Q,[n(t)?(o(),c(z,{key:0,"runner-data":n(t),"hide-sidebar":""},null,8,["runner-data"])):g("",!0),K("div",{class:"container",style:S({backgroundColor:(p=n(t))==null?void 0:p.theme})},[n(r)?(o(),c(n(T),{key:0})):s.value.length===0?(o(),c(n(h),{key:1,type:"secondary",style:{"font-size":"18px"}},{default:l(()=>[f(" There are no public forms available ")]),_:1})):(o(),c(n(v),{key:2,vertical:"",gap:"large",style:{padding:"120px 0"}},{default:l(()=>[(o(!0),_(V,null,N(s.value,m=>(o(),c(n(L),{key:m.id,class:"form-card",onClick:Y=>O(m.path)},{default:l(()=>[u(n(v),{gap:"large",align:"center",justify:"space-between"},{default:l(()=>[u(n(h),{style:{"font-size":"18px","font-weight":"500"}},{default:l(()=>[f(j(m.name),1)]),_:2},1024),u($,{path:n(F),fill:"#000",width:"20"},null,8,["path"])]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})),n(C)?(o(),c(J,{key:3,onGoToKanban:A})):g("",!0)],4)])}}});const we=x(U,[["__scopeId","data-v-68d92933"]]);export{we as default};
//# sourceMappingURL=Home.1d31b64b.js.map
