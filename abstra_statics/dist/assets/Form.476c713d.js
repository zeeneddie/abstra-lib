import{u as I}from"./index.7f38f098.js";import{d as U,eB as E,eA as F,G as A,r as g,I as R,av as C,o as L,K as B,u as n,b as i,eu as c,f as W,c as q,eF as V,eG as x,e as p,v as K}from"./outputWidgets.f017b1ba.js";import{b as M,r as P,c as N,d as T}from"./FormRunner.c5da96f2.js";import{a as G}from"./asyncComputed.9ec0ae7d.js";import{u as w}from"./uuid.d903a693.js";import{L as O}from"./CircularLoading.f397eb8b.js";import{f as j}from"./api.646486da.js";import"./pubsub.4d72db7b.js";import"./url.42b30a4e.js";import"./Passwordless.e85302fa.js";import"./index.4a35214d.js";import"./PhArrowClockwise.vue.2fdd521a.js";import"./PlayerNavbar.b323f789.js";import"./repository.875b9f0a.js";import"./ArrowRightOutlined.08fa31dd.js";import"./WidgetsFrame.ba21a3b2.js";import"./Steps.ce2711d2.js";import"./Card.9bd70da8.js";import"./TabPane.3d7693e6.js";import"./hasIn.a2b4c2f9.js";import"./Typography.5dfc411f.js";import"./runnerData.69ad746c.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[l]="b5dff477-6658-4bb3-8f90-267006e52966",r._sentryDebugIdIdentifier="sentry-dbid-b5dff477-6658-4bb3-8f90-267006e52966")}catch{}})();const m=r=>(V("data-v-f61ea327"),r=r(),x(),r),z={key:0,class:"loading"},H={key:1,class:"error"},J=m(()=>p("h1",null,"Oops! Something went wrong",-1)),Q=m(()=>p("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),X=[J,Q],Y={key:2,class:"form"},Z={key:3,class:"error not-found",style:{height:"100vh"}},$=m(()=>p("h1",null,"Page not found",-1)),ee=m(()=>p("p",null,"The page you requested could not be found.",-1)),te=[$,ee],oe=U({__name:"Form",setup(r){const l=E(),f=F(),h=A({playerKey:w()}),d=g(null),_=g(null);R(l,()=>D());const{loading:b,result:t,error:k,refetch:D}=G(async()=>{h.playerKey=w();const o=l.path.slice(1),e=await j(o);if(!e)return null;const a=new N({formRunnerData:e,queryParams:l.query,userManager:I,logService:null,connectionManager:new T(e.id),onRedirect:v,onFormStart:()=>{},onFormEnd:()=>{},onAuthUpdate:u=>_.value=u,onStackTraceUpdate:null,onStateUpdate:u=>d.value=u}),s=a.getState();return _.value=s.passwordlessUser,d.value=s.formState,{runnerData:e,controller:a}});C(()=>{var o,e,a,s,u;!((o=t.value)!=null&&o.runnerData)||(e=t.value)!=null&&e.runnerData&&(document.title=(u=(a=t.value)==null?void 0:a.runnerData.welcomeTitle)!=null?u:(s=t.value)==null?void 0:s.runnerData.title)});function v(o,e){P("player",f,o,e)}const S=({path:o})=>{f.push({name:"form",query:l.query,params:{path:o.split("/")}})};L(async()=>{var e;!((e=window.should_ask_before_leave)==null||e)||window.addEventListener("beforeunload",y)}),B(()=>{window.removeEventListener("beforeunload",y)});const y=o=>{var e;if((e=t.value)!=null&&e.controller.handleCloseAttempt())return o.preventDefault(),""};return(o,e)=>{var a,s;return n(b)?(i(),c("div",z,[W(O)])):n(k)||n(t)===null||d.value===null?(i(),c("div",H,X)):(a=n(t))!=null&&a.runnerData?(i(),c("div",Y,[(i(),q(M,{key:h.playerKey,"form-runner-data":n(t).runnerData,"form-state":d.value,"is-preview":!1,"user-email":(s=_.value)==null?void 0:s.claims.email,class:"player",onNavigate:S,onRedirect:v,onActionClicked:n(t).controller.handleActionClick,onUpdateWidgetErrors:n(t).controller.updateWidgetFrontendErrors,onUpdateWidgetValue:n(t).controller.updateWidgetValue,onLogout:n(t).controller.logout},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue","onLogout"]))])):(i(),c("div",Z,te))}}});const Ie=K(oe,[["__scopeId","data-v-f61ea327"]]);export{Ie as default};
//# sourceMappingURL=Form.476c713d.js.map