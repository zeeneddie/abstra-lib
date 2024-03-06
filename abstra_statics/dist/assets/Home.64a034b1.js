import{u as I}from"./index.23bde526.js";import{f as d,eG as D,d as w,b as o,c as l,w as c,ar as m,u as n,bG as P,v as x,eA as R,H as B,ev as b,ex as g,e as K,ew as S,bg as T,aD as V,eC as N,eD as j,I as $}from"./outputWidgets.7dcb9763.js";import{g as H}from"./api.837c8082.js";import{a as y}from"./asyncComputed.1391bc4e.js";import{P as z}from"./PlayerNavbar.7da49bc6.js";import{P as E}from"./repository.80a13ba7.js";import{e as F}from"./icons.28fdd925.js";import{A as G}from"./ArrowRightOutlined.08fa31dd.js";import"./index.260ca1ed.js";import"./index.406136e6.js";import{A as v}from"./index.5807d2be.js";import{T as h}from"./Typography.890fd94a.js";import{C as L}from"./Card.56a65394.js";import"./pubsub.a9318333.js";import"./runnerData.67433442.js";import"./url.1d026e93.js";import"./Base.959092ed.js";import"./Link.ac3cf668.js";import"./Paragraph.546e285b.js";import"./Text.c3748e80.js";import"./Title.a796f87f.js";import"./TabPane.2fe1c0ea.js";import"./hasIn.a0faa635.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="fd8ddeca-f64e-404c-a633-f325dc315ed3",a._sentryDebugIdIdentifier="sentry-dbid-fd8ddeca-f64e-404c-a633-f325dc315ed3")}catch{}})();function k(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),r.forEach(function(s){M(a,s,t[s])})}return a}function M(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}var _=function(e,t){var r=k({},e,t.attrs);return d(D,k({},r,{icon:G}),null)};_.displayName="ArrowRightOutlined";_.inheritAttrs=!1;const W=_,q=w({__name:"KanbanButton",emits:["go-to-kanban"],setup(a,{emit:e}){return(t,r)=>(o(),l(n(P),{class:"kanban-btn",onClick:r[0]||(r[0]=s=>e("go-to-kanban"))},{default:c(()=>[m(" Kanban "),d(n(W))]),_:1}))}});const J=x(q,[["__scopeId","data-v-73dd2178"]]),Q={class:"page"},U=w({__name:"Home",setup(a){const e=R(),{result:t,loading:r}=y(H),s=B(()=>{var i,p;return(p=(i=t.value)==null?void 0:i.sidebar.filter(u=>u.visible))!=null?p:[]}),O=i=>{e.push({path:`/${i}`})},A=()=>{e.push({name:"playerKanban"})},C=y(async()=>{try{return await new E(I).getData({selection:[]}),!0}catch{return!1}});return(i,p)=>{var u;return o(),b("div",Q,[n(t)?(o(),l(z,{key:0,"runner-data":n(t),"hide-sidebar":""},null,8,["runner-data"])):g("",!0),K("div",{class:"container",style:S({backgroundColor:(u=n(t))==null?void 0:u.theme})},[n(r)?(o(),l(n(T),{key:0})):s.value.length===0?(o(),l(n(h),{key:1,type:"secondary",style:{"font-size":"18px"}},{default:c(()=>[m(" There are no public forms available ")]),_:1})):(o(),l(n(v),{key:2,vertical:"",gap:"large",style:{padding:"120px 0"}},{default:c(()=>[(o(!0),b(V,null,N(s.value,f=>(o(),l(n(L),{key:f.id,class:"form-card",onClick:Y=>O(f.path)},{default:c(()=>[d(n(v),{gap:"large",align:"center",justify:"space-between"},{default:c(()=>[d(n(h),{style:{"font-size":"18px","font-weight":"500"}},{default:c(()=>[m(j(f.name),1)]),_:2},1024),d($,{path:n(F),fill:"#000",width:"20"},null,8,["path"])]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})),n(C)?(o(),l(J,{key:3,onGoToKanban:A})):g("",!0)],4)])}}});const we=x(U,[["__scopeId","data-v-68d92933"]]);export{we as default};
//# sourceMappingURL=Home.64a034b1.js.map