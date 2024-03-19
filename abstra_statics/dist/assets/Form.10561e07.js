import{u as E}from"./index.482f546d.js";import{d as U,eB as F,eA as I,G as A,r as g,J as L,aw as R,o as C,L as B,u as n,b as u,ev as c,f as W,c as q,eE as V,eF as x,e as p,v as M}from"./outputWidgets.6b7b2109.js";import{b as P,r as K,c as N,d as T}from"./FormRunner.62ed561e.js";import{a as G}from"./asyncComputed.737c3e82.js";import{u as b}from"./uuid.6195f537.js";import{L as J}from"./CircularLoading.cfe2ec50.js";import{f as O}from"./api.9b588b58.js";import"./pubsub.ae834c9f.js";import"./url.a82b6fe6.js";import"./Passwordless.f8e8e689.js";import"./index.38406151.js";import"./icons.cb098b8a.js";import"./PlayerNavbar.302159e4.js";import"./WidgetsFrame.024baa38.js";import"./Steps.f607e1f9.js";import"./Card.d0e487ff.js";import"./TabPane.2b319c60.js";import"./hasIn.2705c14d.js";import"./Typography.20e705fd.js";import"./runnerData.d6014acb.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[l]="0512b7a0-b45e-46bb-bde5-558b3bc4cddd",r._sentryDebugIdIdentifier="sentry-dbid-0512b7a0-b45e-46bb-bde5-558b3bc4cddd")}catch{}})();const m=r=>(V("data-v-f61ea327"),r=r(),x(),r),j={key:0,class:"loading"},z={key:1,class:"error"},H=m(()=>p("h1",null,"Oops! Something went wrong",-1)),Q=m(()=>p("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),X=[H,Q],Y={key:2,class:"form"},Z={key:3,class:"error not-found",style:{height:"100vh"}},$=m(()=>p("h1",null,"Page not found",-1)),ee=m(()=>p("p",null,"The page you requested could not be found.",-1)),te=[$,ee],oe=U({__name:"Form",setup(r){const l=F(),f=I(),h=A({playerKey:b()}),i=g(null),_=g(null);L(l,()=>D());const{loading:w,result:t,error:k,refetch:D}=G(async()=>{h.playerKey=b();const o=l.path.slice(1),e=await O(o);if(!e)return null;const a=new N({formRunnerData:e,queryParams:l.query,userManager:E,logService:null,connectionManager:new T(e.id),onRedirect:v,onFormStart:()=>{},onFormEnd:()=>{},onAuthUpdate:d=>_.value=d,onStackTraceUpdate:null,onStateUpdate:d=>i.value=d}),s=a.getState();return _.value=s.passwordlessUser,i.value=s.formState,{runnerData:e,controller:a}});R(()=>{var o,e,a,s,d;!((o=t.value)!=null&&o.runnerData)||(e=t.value)!=null&&e.runnerData&&(document.title=(d=(a=t.value)==null?void 0:a.runnerData.welcomeTitle)!=null?d:(s=t.value)==null?void 0:s.runnerData.title)});function v(o,e){K("player",f,o,e)}const S=({path:o})=>{f.push({name:"form",query:l.query,params:{path:o.split("/")}})};C(async()=>{var e;!((e=window.should_ask_before_leave)==null||e)||window.addEventListener("beforeunload",y)}),B(()=>{window.removeEventListener("beforeunload",y)});const y=o=>{var e;if((e=t.value)!=null&&e.controller.handleCloseAttempt())return o.preventDefault(),""};return(o,e)=>{var a,s;return n(w)?(u(),c("div",j,[W(J)])):n(k)||n(t)===null||i.value===null?(u(),c("div",z,X)):(a=n(t))!=null&&a.runnerData?(u(),c("div",Y,[(u(),q(P,{key:h.playerKey,"form-runner-data":n(t).runnerData,"form-state":i.value,"is-preview":!1,"user-email":(s=_.value)==null?void 0:s.claims.email,class:"player",onNavigate:S,onRedirect:v,onActionClicked:n(t).controller.handleActionClick,onUpdateWidgetErrors:n(t).controller.updateWidgetFrontendErrors,onUpdateWidgetValue:n(t).controller.updateWidgetValue,onLogout:n(t).controller.logout},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue","onLogout"]))])):(u(),c("div",Z,te))}}});const De=M(oe,[["__scopeId","data-v-f61ea327"]]);export{De as default};
//# sourceMappingURL=Form.10561e07.js.map
