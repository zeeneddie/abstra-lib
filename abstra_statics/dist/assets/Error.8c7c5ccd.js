import{P as b}from"./PlayerNavbar.76d4efa6.js";import{g as h}from"./api.28f31b4c.js";import{a as d}from"./asyncComputed.ecb54415.js";import{W as v}from"./WidgetsFrame.59398e3e.js";import{d as w,r as k,I,eI as D,eA as x,b as p,eu as C,e as o,f as E,u as t,c as N,w as P,ew as V,eD as f,v as A}from"./outputWidgets.6d35c6b1.js";import{u as n}from"./index.bf165d7f.js";import"./PhKanban.vue.a381f965.js";import"./PhSignOut.vue.1ae5e582.js";import"./Text.3b2ffaec.js";import"./index.fa46d640.js";import"./Link.6a962cb3.js";import"./Paragraph.a1d4de5f.js";import"./Title.c1aa2d66.js";import"./index.4c691da6.js";import"./runnerData.820ed550.js";import"./url.f81eaded.js";import"./pubsub.cebd46a9.js";import"./fetch.d55331d2.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new q().stack;r&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[r]="42e8827b-3375-45b4-a058-df412a20ae32",a._sentryDebugIdIdentifier="sentry-dbid-42e8827b-3375-45b4-a058-df412a20ae32")}catch{}})();const B={class:"error"},L={class:"inner-content"},W=w({__name:"Error",setup(a){const r=k(n.getUser()),{result:i,refetch:_}=d(async()=>(await n.allow("kanban")).status==="ALLOWED");I(r,()=>_());const u=D(),g=({path:e})=>{u.push({name:"form",query:c.query,params:{path:e.split("/")}})},c=x(),{result:s}=d(h),y=()=>{n.removeUser(),u.push({name:"playerHome"})},m=()=>{const{status:e}=c.params;switch(e){case"404":return{status:e,message:"Page not found."};case"403":return{status:e,message:"Access denied. Please contact your administrator."};default:return{status:"500",message:"An unknown error ocurred. Please try again or contact support."}}};return(e,F)=>{var l;return p(),C("div",null,[o("div",B,[E(b,{"user-email":(l=r.value)==null?void 0:l.claims.email,"is-kanban-visible":t(i)||!1,"runner-data":t(s),onNavigate:g,onLogout:y},null,8,["user-email","is-kanban-visible","runner-data"]),t(s)?(p(),N(v,{key:0,"main-color":t(s).mainColor,theme:t(s).theme,"font-family":t(s).fontFamily,style:{height:"100vh",width:"100%"}},{default:P(()=>[o("div",L,[o("h1",null,f(m().status),1),o("p",null,f(m().message),1)])]),_:1},8,["main-color","theme","font-family"])):V("",!0)])])}}});const q=A(W,[["__scopeId","data-v-98d8191f"]]);export{q as default};
//# sourceMappingURL=Error.8c7c5ccd.js.map
