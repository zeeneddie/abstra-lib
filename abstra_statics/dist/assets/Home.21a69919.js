import{u as I}from"./index.5ed874f5.js";import{f as u,eG as P,d as w,b as o,c as l,w as c,ar as f,u as n,bV as R,v as x,eA as B,H as D,ev as b,ex as y,e as V,ew as K,bv as S,a$ as T,eC as N,eD as $,I as j}from"./outputWidgets.ef7f3407.js";import{g as H}from"./api.e8cea29c.js";import{a as g}from"./asyncComputed.352c228a.js";import{P as z}from"./PlayerNavbar.e5d51f34.js";import{P as E}from"./repository.517e59cf.js";import{e as F}from"./icons.c4e300ba.js";import{A as G}from"./ArrowRightOutlined.08fa31dd.js";import"./index.3db3a5f6.js";import"./index.aa449934.js";import{A as v}from"./index.030a4369.js";import{T as h}from"./Typography.56b07efe.js";import{C as L}from"./Card.60565ea4.js";import"./pubsub.b4b207c2.js";import"./runnerData.7142dc1d.js";import"./url.d258a57b.js";import"./Base.00784e3c.js";import"./Link.574ee8b3.js";import"./Paragraph.7f2d959b.js";import"./Text.361a5f7a.js";import"./Title.1adff754.js";import"./TabPane.7712efbf.js";import"./hasIn.2b606bf1.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="abc993c7-81c1-4643-a005-e6a28d926665",a._sentryDebugIdIdentifier="sentry-dbid-abc993c7-81c1-4643-a005-e6a28d926665")}catch{}})();function k(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),r.forEach(function(s){M(a,s,t[s])})}return a}function M(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}var _=function(e,t){var r=k({},e,t.attrs);return u(P,k({},r,{icon:G}),null)};_.displayName="ArrowRightOutlined";_.inheritAttrs=!1;const W=_,q=w({__name:"KanbanButton",emits:["go-to-kanban"],setup(a,{emit:e}){return(t,r)=>(o(),l(n(R),{class:"kanban-btn",onClick:r[0]||(r[0]=s=>e("go-to-kanban"))},{default:c(()=>[f(" Kanban "),u(n(W))]),_:1}))}});const J=x(q,[["__scopeId","data-v-73dd2178"]]),Q={class:"page"},U=w({__name:"Home",setup(a){const e=B(),{result:t,loading:r}=g(H),s=D(()=>{var i,d;return(d=(i=t.value)==null?void 0:i.sidebar.filter(p=>p.visible))!=null?d:[]}),O=i=>{e.push({path:`/${i}`})},A=()=>{e.push({name:"playerKanban"})},C=g(async()=>{try{return await new E(I).getData({selection:[]}),!0}catch{return!1}});return(i,d)=>{var p;return o(),b("div",Q,[n(t)?(o(),l(z,{key:0,"runner-data":n(t),"hide-sidebar":""},null,8,["runner-data"])):y("",!0),V("div",{class:"container",style:K({backgroundColor:(p=n(t))==null?void 0:p.theme})},[n(r)?(o(),l(n(S),{key:0})):s.value.length===0?(o(),l(n(h),{key:1,type:"secondary",style:{"font-size":"18px"}},{default:c(()=>[f(" There are no public forms available ")]),_:1})):(o(),l(n(v),{key:2,vertical:"",gap:"large",style:{padding:"120px 0"}},{default:c(()=>[(o(!0),b(T,null,N(s.value,m=>(o(),l(n(L),{key:m.id,class:"form-card",onClick:Y=>O(m.path)},{default:c(()=>[u(n(v),{gap:"large",align:"center",justify:"space-between"},{default:c(()=>[u(n(h),{style:{"font-size":"18px","font-weight":"500"}},{default:c(()=>[f($(m.name),1)]),_:2},1024),u(j,{path:n(F),fill:"#000",width:"20"},null,8,["path"])]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})),n(C)?(o(),l(J,{key:3,onGoToKanban:A})):y("",!0)],4)])}}});const we=x(U,[["__scopeId","data-v-68d92933"]]);export{we as default};
//# sourceMappingURL=Home.21a69919.js.map
