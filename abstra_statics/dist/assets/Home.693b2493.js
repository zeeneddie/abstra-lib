import{d as g,eI as b,r as y,I as v,b as h,eu as k,f as m,u as t,v as w}from"./outputWidgets.c199cd65.js";import{g as I}from"./api.55cc6467.js";import{a as p}from"./asyncComputed.e8505f10.js";import{P as H}from"./PlayerNavbar.7d48330c.js";import{H as D}from"./HomeContent.56ae7cc2.js";import{u as s}from"./index.ad5ce512.js";import"./runnerData.2958fc11.js";import"./url.266b7147.js";import"./PhKanban.vue.9f2d7f7b.js";import"./PhSignOut.vue.fde161f8.js";import"./Text.47bac3a4.js";import"./index.869e7552.js";import"./Link.dcc50f83.js";import"./Paragraph.72c12540.js";import"./Title.2a2cadae.js";import"./index.b163fa6b.js";import"./PhArrowSquareOut.vue.820d343d.js";import"./index.d4431cf0.js";import"./Card.b21ac257.js";import"./index.f8d3c2d8.js";import"./TabPane.af37a735.js";import"./hasIn.7b6e24c6.js";import"./index.464c5f1b.js";import"./pubsub.6235e50c.js";import"./fetch.2b5e9b72.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="9d9c07da-5f73-46ee-a7f8-c27cb2390a06",o._sentryDebugIdIdentifier="sentry-dbid-9d9c07da-5f73-46ee-a7f8-c27cb2390a06")}catch{}})();const x={class:"page"},C=g({__name:"Home",setup(o){const e=b(),r=y(s.getUser()),{result:c,refetch:u}=p(async()=>(await s.allow("kanban")).status==="ALLOWED");v(r,()=>u());const l=({path:a})=>{e.push({name:"form",params:{path:a.split("/")}})},{result:n,loading:d}=p(I),f=a=>{e.push({path:`/${a}`})},_=()=>{s.removeUser(),e.push({name:"playerHome"})};return(a,L)=>{var i;return h(),k("div",x,[m(H,{"runner-data":t(n),"is-kanban-visible":t(c)||!1,"user-email":(i=r.value)==null?void 0:i.claims.email,onNavigate:l,onLogout:_},null,8,["runner-data","is-kanban-visible","user-email"]),m(D,{workspace:t(n),loading:t(d),onFormClick:f},null,8,["workspace","loading"])])}}});const ee=w(C,[["__scopeId","data-v-f12c98c4"]]);export{ee as default};
//# sourceMappingURL=Home.693b2493.js.map
