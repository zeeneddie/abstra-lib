import{u as E}from"./index.73546cae.js";import{d as U,eB as F,eA as I,G as A,r as g,J as L,aw as R,o as C,L as B,u as n,b as d,ev as c,f as W,c as q,eE as V,eF as x,e as p,v as M}from"./outputWidgets.a9a26b52.js";import{b as P,r as K,c as N,d as T}from"./FormRunner.24ec5c31.js";import{a as G}from"./asyncComputed.4aade27b.js";import{u as w}from"./uuid.71d250e8.js";import{L as J}from"./CircularLoading.d9b2fa79.js";import{f as O}from"./api.c635753d.js";import"./pubsub.c4f2ad57.js";import"./url.374c8097.js";import"./Passwordless.999e2725.js";import"./index.8268e019.js";import"./icons.497d8b8f.js";import"./PlayerNavbar.42cccd72.js";import"./WidgetsFrame.ac77bccc.js";import"./Steps.26e05fb1.js";import"./Card.f083d5e5.js";import"./TabPane.3cc103de.js";import"./hasIn.f6010454.js";import"./Typography.5a96ab9c.js";import"./runnerData.2db5faf2.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[l]="79aa37c1-adf5-407d-afc7-e98515357210",r._sentryDebugIdIdentifier="sentry-dbid-79aa37c1-adf5-407d-afc7-e98515357210")}catch{}})();const m=r=>(V("data-v-f61ea327"),r=r(),x(),r),j={key:0,class:"loading"},z={key:1,class:"error"},H=m(()=>p("h1",null,"Oops! Something went wrong",-1)),Q=m(()=>p("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),X=[H,Q],Y={key:2,class:"form"},Z={key:3,class:"error not-found",style:{height:"100vh"}},$=m(()=>p("h1",null,"Page not found",-1)),ee=m(()=>p("p",null,"The page you requested could not be found.",-1)),te=[$,ee],oe=U({__name:"Form",setup(r){const l=F(),f=I(),h=A({playerKey:w()}),i=g(null),_=g(null);L(l,()=>b());const{loading:k,result:t,error:D,refetch:b}=G(async()=>{h.playerKey=w();const o=l.path.slice(1),e=await O(o);if(!e)return null;const a=new N({formRunnerData:e,queryParams:l.query,userManager:E,logService:null,connectionManager:new T(e.id),onRedirect:v,onFormStart:()=>{},onFormEnd:()=>{},onAuthUpdate:u=>_.value=u,onStackTraceUpdate:null,onStateUpdate:u=>i.value=u}),s=a.getState();return _.value=s.passwordlessUser,i.value=s.formState,{runnerData:e,controller:a}});R(()=>{var o,e,a,s,u;!((o=t.value)!=null&&o.runnerData)||(e=t.value)!=null&&e.runnerData&&(document.title=(u=(a=t.value)==null?void 0:a.runnerData.welcomeTitle)!=null?u:(s=t.value)==null?void 0:s.runnerData.title)});function v(o,e){K("player",f,o,e)}const S=({path:o})=>{f.push({name:"form",query:l.query,params:{path:o.split("/")}})};C(async()=>{var e;!((e=window.should_ask_before_leave)==null||e)||window.addEventListener("beforeunload",y)}),B(()=>{window.removeEventListener("beforeunload",y)});const y=o=>{var e;if((e=t.value)!=null&&e.controller.handleCloseAttempt())return o.preventDefault(),""};return(o,e)=>{var a,s;return n(k)?(d(),c("div",j,[W(J)])):n(D)||n(t)===null||i.value===null?(d(),c("div",z,X)):(a=n(t))!=null&&a.runnerData?(d(),c("div",Y,[(d(),q(P,{key:h.playerKey,"form-runner-data":n(t).runnerData,"form-state":i.value,"is-preview":!1,"user-email":(s=_.value)==null?void 0:s.claims.email,class:"player",onNavigate:S,onRedirect:v,onActionClicked:n(t).controller.handleActionClick,onUpdateWidgetErrors:n(t).controller.updateWidgetFrontendErrors,onUpdateWidgetValue:n(t).controller.updateWidgetValue,onLogout:n(t).controller.logout},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue","onLogout"]))])):(d(),c("div",Z,te))}}});const be=M(oe,[["__scopeId","data-v-f61ea327"]]);export{be as default};
//# sourceMappingURL=Form.fa5558d7.js.map
