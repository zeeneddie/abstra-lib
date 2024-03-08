import{u as I}from"./index.8ad251d2.js";import{f as u,eG as D,d as w,b as o,c,w as l,ar as m,u as n,bG as P,v as x,eA as R,H as B,ev as b,ex as g,e as K,ew as S,bg as T,aD as V,eC as N,eD as j,I as $}from"./outputWidgets.120abcec.js";import{g as H}from"./api.72f9abe0.js";import{a as y}from"./asyncComputed.e26882e4.js";import{P as z}from"./PlayerNavbar.1cb62301.js";import{P as E}from"./repository.116f70d3.js";import{e as F}from"./icons.81fa3ed8.js";import{A as G}from"./ArrowRightOutlined.08fa31dd.js";import"./index.b2dfdc46.js";import"./index.9d31d416.js";import{A as v}from"./index.983b1ccc.js";import{T as h}from"./Typography.e89833d8.js";import{C as L}from"./Card.3f5ccb0b.js";import"./pubsub.a3533115.js";import"./runnerData.0b2ffd49.js";import"./url.a71238d7.js";import"./Base.0deedccd.js";import"./Link.6da17aa3.js";import"./Paragraph.200bbb6d.js";import"./Text.04b2aa2d.js";import"./Title.2384966a.js";import"./TabPane.a2fe5be5.js";import"./hasIn.07231e5c.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="cca17935-9ee6-491b-9f02-57fac9f7cacf",a._sentryDebugIdIdentifier="sentry-dbid-cca17935-9ee6-491b-9f02-57fac9f7cacf")}catch{}})();function k(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),r.forEach(function(s){M(a,s,t[s])})}return a}function M(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}var _=function(e,t){var r=k({},e,t.attrs);return u(D,k({},r,{icon:G}),null)};_.displayName="ArrowRightOutlined";_.inheritAttrs=!1;const W=_,q=w({__name:"KanbanButton",emits:["go-to-kanban"],setup(a,{emit:e}){return(t,r)=>(o(),c(n(P),{class:"kanban-btn",onClick:r[0]||(r[0]=s=>e("go-to-kanban"))},{default:l(()=>[m(" Kanban "),u(n(W))]),_:1}))}});const J=x(q,[["__scopeId","data-v-73dd2178"]]),Q={class:"page"},U=w({__name:"Home",setup(a){const e=R(),{result:t,loading:r}=y(H),s=B(()=>{var i,d;return(d=(i=t.value)==null?void 0:i.sidebar.filter(p=>p.visible))!=null?d:[]}),O=i=>{e.push({path:`/${i}`})},A=()=>{e.push({name:"playerKanban"})},C=y(async()=>{try{return await new E(I).getData({selection:[]}),!0}catch{return!1}});return(i,d)=>{var p;return o(),b("div",Q,[n(t)?(o(),c(z,{key:0,"runner-data":n(t),"hide-sidebar":""},null,8,["runner-data"])):g("",!0),K("div",{class:"container",style:S({backgroundColor:(p=n(t))==null?void 0:p.theme})},[n(r)?(o(),c(n(T),{key:0})):s.value.length===0?(o(),c(n(h),{key:1,type:"secondary",style:{"font-size":"18px"}},{default:l(()=>[m(" There are no public forms available ")]),_:1})):(o(),c(n(v),{key:2,vertical:"",gap:"large",style:{padding:"120px 0"}},{default:l(()=>[(o(!0),b(V,null,N(s.value,f=>(o(),c(n(L),{key:f.id,class:"form-card",onClick:Y=>O(f.path)},{default:l(()=>[u(n(v),{gap:"large",align:"center",justify:"space-between"},{default:l(()=>[u(n(h),{style:{"font-size":"18px","font-weight":"500"}},{default:l(()=>[m(j(f.name),1)]),_:2},1024),u($,{path:n(F),fill:"#000",width:"20"},null,8,["path"])]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})),n(C)?(o(),c(J,{key:3,onGoToKanban:A})):g("",!0)],4)])}}});const we=x(U,[["__scopeId","data-v-68d92933"]]);export{we as default};
//# sourceMappingURL=Home.9cb9dda1.js.map
