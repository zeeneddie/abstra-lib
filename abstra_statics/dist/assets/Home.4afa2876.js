import{u as I}from"./index.2c4f6cb8.js";import{f as u,eG as D,d as w,b as o,c as l,w as c,ar as m,u as n,bG as P,v as x,eA as R,H as B,ev as b,ex as g,e as K,ew as S,bg as T,aD as V,eC as N,eD as j,I as $}from"./outputWidgets.005a49a1.js";import{g as H}from"./api.29936e7e.js";import{a as y}from"./asyncComputed.51614009.js";import{P as z}from"./PlayerNavbar.d32555bf.js";import{P as E}from"./repository.07ab611f.js";import{e as F}from"./icons.37abdd15.js";import{A as G}from"./ArrowRightOutlined.08fa31dd.js";import"./index.5997dda5.js";import"./index.0600b22e.js";import{A as v}from"./index.01dc8a70.js";import{T as h}from"./Typography.8a556c4b.js";import{C as L}from"./Card.947e162a.js";import"./pubsub.46648e88.js";import"./runnerData.6c3ca258.js";import"./url.2c99d303.js";import"./Base.b9e1eb2d.js";import"./Link.23a33e8f.js";import"./Paragraph.7da115aa.js";import"./Text.7e4b9927.js";import"./Title.16535362.js";import"./TabPane.83346231.js";import"./hasIn.7afb4985.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="d1d2e095-f60c-4c27-944f-d3039dfb3e52",a._sentryDebugIdIdentifier="sentry-dbid-d1d2e095-f60c-4c27-944f-d3039dfb3e52")}catch{}})();function k(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),r.forEach(function(s){M(a,s,t[s])})}return a}function M(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}var _=function(e,t){var r=k({},e,t.attrs);return u(D,k({},r,{icon:G}),null)};_.displayName="ArrowRightOutlined";_.inheritAttrs=!1;const W=_,q=w({__name:"KanbanButton",emits:["go-to-kanban"],setup(a,{emit:e}){return(t,r)=>(o(),l(n(P),{class:"kanban-btn",onClick:r[0]||(r[0]=s=>e("go-to-kanban"))},{default:c(()=>[m(" Kanban "),u(n(W))]),_:1}))}});const J=x(q,[["__scopeId","data-v-73dd2178"]]),Q={class:"page"},U=w({__name:"Home",setup(a){const e=R(),{result:t,loading:r}=y(H),s=B(()=>{var i,p;return(p=(i=t.value)==null?void 0:i.sidebar.filter(d=>d.visible))!=null?p:[]}),O=i=>{e.push({path:`/${i}`})},A=()=>{e.push({name:"playerKanban"})},C=y(async()=>{try{return await new E(I).getData({selection:[]}),!0}catch{return!1}});return(i,p)=>{var d;return o(),b("div",Q,[n(t)?(o(),l(z,{key:0,"runner-data":n(t),"hide-sidebar":""},null,8,["runner-data"])):g("",!0),K("div",{class:"container",style:S({backgroundColor:(d=n(t))==null?void 0:d.theme})},[n(r)?(o(),l(n(T),{key:0})):s.value.length===0?(o(),l(n(h),{key:1,type:"secondary",style:{"font-size":"18px"}},{default:c(()=>[m(" There are no public forms available ")]),_:1})):(o(),l(n(v),{key:2,vertical:"",gap:"large",style:{padding:"120px 0"}},{default:c(()=>[(o(!0),b(V,null,N(s.value,f=>(o(),l(n(L),{key:f.id,class:"form-card",onClick:Y=>O(f.path)},{default:c(()=>[u(n(v),{gap:"large",align:"center",justify:"space-between"},{default:c(()=>[u(n(h),{style:{"font-size":"18px","font-weight":"500"}},{default:c(()=>[m(j(f.name),1)]),_:2},1024),u($,{path:n(F),fill:"#000",width:"20"},null,8,["path"])]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})),n(C)?(o(),l(J,{key:3,onGoToKanban:A})):g("",!0)],4)])}}});const we=x(U,[["__scopeId","data-v-68d92933"]]);export{we as default};
//# sourceMappingURL=Home.4afa2876.js.map
