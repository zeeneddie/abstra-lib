import{F as I,r as R,g as B,R as P}from"./FormRunner.52161c01.js";import{d as q,eB as x,eA as F,F as D,H as p,G as y,u as d,b as s,ev as u,f as E,c as S,eE as K,eF as L,e as c,v as N}from"./outputWidgets.8e162a96.js";import{u as h}from"./uuid.2b5f202f.js";import{a as A}from"./asyncComputed.b10aedd9.js";import{L as C}from"./CircularLoading.37b4392d.js";import"./url.b01aa2db.js";import"./index.67795376.js";import"./pubsub.57c31b6e.js";import"./icons.46734057.js";import"./PlayerNavbar.b3b2cc28.js";import"./ActionButton.0a208bb9.js";import"./WidgetsFrame.3972c291.js";import"./index.aa2718e1.js";import"./Card.738c740b.js";import"./TabPane.4d0dd923.js";import"./hasIn.d8d88a85.js";import"./index.5d33fe1e.js";import"./Text.43df0b64.js";import"./Link.d6d99214.js";import"./Title.f6ca55d2.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="4bea27fc-b033-4769-88c3-6e2b18aab558",o._sentryDebugIdIdentifier="sentry-dbid-4bea27fc-b033-4769-88c3-6e2b18aab558")}catch{}})();const i=o=>(K("data-v-485e3719"),o=o(),L(),o),T={key:0,class:"loading"},V={key:1,class:"error"},G=i(()=>c("h1",null,"Oops! Something went wrong",-1)),H=i(()=>c("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),O=[G,H],j={key:2,class:"form"},z={key:3,class:"error not-found",style:{height:"100vh"}},J=i(()=>c("h1",null,"Page not found",-1)),M=i(()=>c("p",null,"The page you requested could not be found.",-1)),Q=[J,M],U=q({__name:"Player",setup(o){const t=x(),l=F(),m=D({playerKey:h()});p(t,()=>w());function v(e,a){R("player",l,e,a)}const b=({path:e})=>{l.push({name:"player",query:t.query,params:{path:e.split("/")}})},_=async()=>{m.playerKey=h()};p([()=>t.path,()=>t.query],()=>_());const{loading:g,result:r,error:k,refetch:w}=A(()=>{var e;return B((e=t.path.slice(1))!=null?e:"")}),f=y(()=>n.value?P.create(n.value.id):null),n=y(()=>{var e,a;return(a=(e=r.value)==null?void 0:e.form)!=null?a:null});return p(r,()=>{var e;!r.value||r.value.form&&(document.title=(e=r.value.form.welcomeTitle)!=null?e:r.value.form.title)}),(e,a)=>d(g)?(s(),u("div",T,[E(C)])):d(k)?(s(),u("div",V,O)):n.value&&f.value?(s(),u("div",j,[(s(),S(I,{key:m.playerKey,class:"player",form:n.value,"is-preview":!1,params:d(t).query,broker:f.value,"enable-auto-focus":!0,onNavigate:b,onLogout:_,onRedirect:v},null,8,["form","params","broker"]))])):(s(),u("div",z,Q))}});const fe=N(U,[["__scopeId","data-v-485e3719"]]);export{fe as default};
//# sourceMappingURL=Player.c2603d6b.js.map
