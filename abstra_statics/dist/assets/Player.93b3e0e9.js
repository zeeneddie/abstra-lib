import{r as g,m as S}from"./index.a3b69644.js";import{u as k}from"./uuid.465ddae8.js";import{F as B,R as K}from"./broker.f51b5baf.js";import{d as E,eA as N,ez as F,H as L,K as m,J as f,u as c,b as s,et as n,f as A,c as w,eD as C,eE as T,e as i,x as V}from"./outputWidgets.b56466d5.js";import{D as z,m as H}from"./DashPlayer.34558c99.js";import{a as J}from"./asyncComputed.57054d06.js";import{L as O}from"./CircularLoading.7e815af5.js";import"./index.5248b04a.js";import"./pubsub.14ec67af.js";import"./executeJs.ef22b96d.js";import"./icons.471883fc.js";import"./PlayerNavbar.b0d3110a.js";import"./Steps.3046f774.js";import"./Modal.14d90c8b.js";import"./WidgetsFrame.2d096182.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.267482a3.js";import"./geometryUtils.bea247fe.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="d2575fbd-c132-4a16-b922-218630895f46",o._sentryDebugIdIdentifier="sentry-dbid-d2575fbd-c132-4a16-b922-218630895f46")}catch{}})();const d=o=>(C("data-v-b3aa3ca3"),o=o(),T(),o),j={key:0,class:"loading"},G={key:1,class:"error"},M=d(()=>i("h1",null,"Oops! Something went wrong",-1)),Q=d(()=>i("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),U=[M,Q],W={key:2,class:"form"},X={key:3,class:"dash-wrapper"},Y={key:4,class:"error not-found"},Z=d(()=>i("h1",null,"Page not found",-1)),$=d(()=>i("p",null,"The page you requested could not be found.",-1)),ee=[Z,$],ae=E({__name:"Player",setup(o){const a=N(),l=F(),p=L({playerKey:k()});m(a,()=>R());function I(e,t){g("player",l,e,t)}const y=({path:e})=>{l.push({name:"player",query:a.query,params:{path:e.split("/")}})},_=async()=>{p.playerKey=k()};m([()=>a.path,()=>a.query],()=>_());const{loading:P,result:r,error:D,refetch:R}=J(()=>{var e;return S((e=a.path.slice(1))!=null?e:"")}),h=f(()=>u.value?K.create({formPath:u.value.path}):null),u=f(()=>{var e,t;return(t=(e=r.value)==null?void 0:e.form)!=null?t:null}),v=f(()=>{var t,b;if(!((t=r.value)!=null&&t.dash))return null;const e=H((b=r.value)==null?void 0:b.dash);return e.onRedirect(({url:q,queryParams:x})=>g("player",l,q,x)),e});return m(r,()=>{var e;!r.value||(r.value.form?document.title=(e=r.value.form.welcomeTitle)!=null?e:r.value.form.title:r.value.dash&&(document.title=r.value.dash.title))}),(e,t)=>c(P)?(s(),n("div",j,[A(O)])):c(D)?(s(),n("div",G,U)):u.value&&h.value?(s(),n("div",W,[(s(),w(B,{key:p.playerKey,class:"player",form:u.value,"is-preview":!1,params:c(a).query,broker:h.value,"enable-auto-focus":!0,onNavigate:y,onLogout:_,onRedirect:I},null,8,["form","params","broker"]))])):v.value?(s(),n("div",X,[(s(),w(z,{key:p.playerKey,class:"player","is-preview":!1,params:c(a).query,"dash-player-service":v.value,onNavigate:y},null,8,["params","dash-player-service"]))])):(s(),n("div",Y,ee))}});const be=V(ae,[["__scopeId","data-v-b3aa3ca3"]]);export{be as default};
//# sourceMappingURL=Player.93b3e0e9.js.map
