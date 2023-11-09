import{d as x,ez as B,ey as K,G as N,J as m,H as y,u as c,b as s,et as n,f as C,c as k,eC as E,eD as F,e as i,v as L}from"./outputWidgets.46ba2efb.js";import"./index.564994de.js";import{r as b,g as T}from"./executeJs.de022c31.js";import{u as w}from"./uuid.de4a9a46.js";import{F as V,R as z}from"./FormRunner.3796b12c.js";import{D as A,m as G}from"./index.b07a2717.js";import{a as H}from"./asyncComputed.57c65b67.js";import{L as J}from"./CircularLoading.80ee7c44.js";import"./runnerData.af1b31e2.js";import"./url.bfb405d5.js";import"./icons.2b0d9965.js";import"./index.4bfea2bc.js";import"./pubsub.c955c307.js";import"./PlayerNavbar.6f81c1ca.js";import"./Steps.3ea1f59f.js";import"./WidgetsFrame.bcb2830d.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.2d1ccafe.js";import"./geometryUtils.57af6654.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="0ea2a83c-3f04-4545-8240-d1674613e5e9",o._sentryDebugIdIdentifier="sentry-dbid-0ea2a83c-3f04-4545-8240-d1674613e5e9")}catch{}})();const d=o=>(E("data-v-b3aa3ca3"),o=o(),F(),o),O={key:0,class:"loading"},j={key:1,class:"error"},M=d(()=>i("h1",null,"Oops! Something went wrong",-1)),Q=d(()=>i("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),U=[M,Q],W={key:2,class:"form"},X={key:3,class:"dash-wrapper"},Y={key:4,class:"error not-found"},Z=d(()=>i("h1",null,"Page not found",-1)),$=d(()=>i("p",null,"The page you requested could not be found.",-1)),ee=[Z,$],ae=x({__name:"Player",setup(o){const a=B(),l=K(),p=N({playerKey:w()});m(a,()=>R());function I(e,t){b("player",l,e,t)}const _=({path:e})=>{l.push({name:"player",query:a.query,params:{path:e.split("/")}})},f=async()=>{p.playerKey=w()};m([()=>a.path,()=>a.query],()=>f());const{loading:P,result:r,error:D,refetch:R}=H(()=>{var e;return T((e=a.path.slice(1))!=null?e:"")}),h=y(()=>u.value?z.create({formPath:u.value.path}):null),u=y(()=>{var e,t;return(t=(e=r.value)==null?void 0:e.form)!=null?t:null}),v=y(()=>{var t,g;if(!((t=r.value)!=null&&t.dash))return null;const e=G((g=r.value)==null?void 0:g.dash);return e.onRedirect(({url:q,queryParams:S})=>b("player",l,q,S)),e});return m(r,()=>{var e;!r.value||(r.value.form?document.title=(e=r.value.form.welcomeTitle)!=null?e:r.value.form.title:r.value.dash&&(document.title=r.value.dash.title))}),(e,t)=>c(P)?(s(),n("div",O,[C(J)])):c(D)?(s(),n("div",j,U)):u.value&&h.value?(s(),n("div",W,[(s(),k(V,{key:p.playerKey,class:"player",form:u.value,"is-preview":!1,params:c(a).query,broker:h.value,"enable-auto-focus":!0,onNavigate:_,onLogout:f,onRedirect:I},null,8,["form","params","broker"]))])):v.value?(s(),n("div",X,[(s(),k(A,{key:p.playerKey,class:"player","is-preview":!1,params:c(a).query,"dash-player-service":v.value,onNavigate:_},null,8,["params","dash-player-service"]))])):(s(),n("div",Y,ee))}});const ke=L(ae,[["__scopeId","data-v-b3aa3ca3"]]);export{ke as default};
//# sourceMappingURL=Player.39cd1c41.js.map
