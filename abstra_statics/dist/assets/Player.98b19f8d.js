import{r as b,g as x}from"./executeJs.0542559e.js";import{d as B,ez as F,ey as K,F as N,H as m,G as f,u as c,b as s,et as n,f as C,c as k,eC as E,eD as L,e as i,t as T}from"./outputWidgets.24bc53e6.js";import{u as w}from"./uuid.2f7a2235.js";import{F as V,R as z}from"./FormRunner.c08af26d.js";import{D as A,m as G}from"./index.8663f796.js";import{a as H}from"./asyncComputed.e4b96939.js";import{L as O}from"./CircularLoading.0071e96c.js";import"./runnerData.3021bf76.js";import"./url.12ca99c5.js";import"./icons.346b8028.js";import"./index.0389f257.js";import"./pubsub.6b8c4d65.js";import"./PlayerNavbar.46e6d61e.js";import"./Steps.4f8080d9.js";import"./WidgetsFrame.d0ec067c.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.dfb97d9e.js";import"./geometryUtils.0837d493.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="062fa192-738b-4087-afbc-636265684383",o._sentryDebugIdIdentifier="sentry-dbid-062fa192-738b-4087-afbc-636265684383")}catch{}})();const d=o=>(E("data-v-b3aa3ca3"),o=o(),L(),o),j={key:0,class:"loading"},J={key:1,class:"error"},M=d(()=>i("h1",null,"Oops! Something went wrong",-1)),Q=d(()=>i("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),U=[M,Q],W={key:2,class:"form"},X={key:3,class:"dash-wrapper"},Y={key:4,class:"error not-found"},Z=d(()=>i("h1",null,"Page not found",-1)),$=d(()=>i("p",null,"The page you requested could not be found.",-1)),ee=[Z,$],ae=B({__name:"Player",setup(o){const a=F(),l=K(),p=N({playerKey:w()});m(a,()=>R());function I(e,t){b("player",l,e,t)}const y=({path:e})=>{l.push({name:"player",query:a.query,params:{path:e.split("/")}})},_=async()=>{p.playerKey=w()};m([()=>a.path,()=>a.query],()=>_());const{loading:P,result:r,error:D,refetch:R}=H(()=>{var e;return x((e=a.path.slice(1))!=null?e:"")}),h=f(()=>u.value?z.create({formPath:u.value.path}):null),u=f(()=>{var e,t;return(t=(e=r.value)==null?void 0:e.form)!=null?t:null}),v=f(()=>{var t,g;if(!((t=r.value)!=null&&t.dash))return null;const e=G((g=r.value)==null?void 0:g.dash);return e.onRedirect(({url:q,queryParams:S})=>b("player",l,q,S)),e});return m(r,()=>{var e;!r.value||(r.value.form?document.title=(e=r.value.form.welcomeTitle)!=null?e:r.value.form.title:r.value.dash&&(document.title=r.value.dash.title))}),(e,t)=>c(P)?(s(),n("div",j,[C(O)])):c(D)?(s(),n("div",J,U)):u.value&&h.value?(s(),n("div",W,[(s(),k(V,{key:p.playerKey,class:"player",form:u.value,"is-preview":!1,params:c(a).query,broker:h.value,"enable-auto-focus":!0,onNavigate:y,onLogout:_,onRedirect:I},null,8,["form","params","broker"]))])):v.value?(s(),n("div",X,[(s(),k(A,{key:p.playerKey,class:"player","is-preview":!1,params:c(a).query,"dash-player-service":v.value,onNavigate:y},null,8,["params","dash-player-service"]))])):(s(),n("div",Y,ee))}});const ge=T(ae,[["__scopeId","data-v-b3aa3ca3"]]);export{ge as default};
//# sourceMappingURL=Player.98b19f8d.js.map
