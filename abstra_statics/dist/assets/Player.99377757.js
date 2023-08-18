import{r as q}from"./index.de3793a6.js";import{u as g}from"./uuid.efada092.js";import{F as x,R as S}from"./broker.9f43de88.js";import{d as B,v as K,a2 as m,K as f,z as a,b as s,c,e as E,t as k,J as N,H as O,O as T,Q as F,x as d,q as L}from"./registerWidgets.08459ba9.js";import{D as C,m as V}from"./DashPlayer.7c6dea10.js";import{a as j}from"./asyncComputed.0e1908a0.js";import{r as z,n as A}from"./runnerData.b77a9dcd.js";import{L as H}from"./CircularLoading.ac78692b.js";import"./passwordlessManager.e2efa62f.js";import"./pubsub.f8482951.js";import"./icons.bc25a773.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.5de0a5b9.js";import"./Passwordless.ec1ca364.js";import"./executeJs.79ccdeff.js";import"./PlayerNavbar.fcf9c538.js";import"./WidgetsFrame.b673acda.js";import"./colors.9ed08400.js";import"./Modal.182aaae6.js";import"./lottie.eec78ff0.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="0062451a-0b47-4ba3-bf46-507dc55faeb6",r._sentryDebugIdIdentifier="sentry-dbid-0062451a-0b47-4ba3-bf46-507dc55faeb6")}catch{}})();async function J(r){const e=await fetch(`/_api/${r}`);if(e.status==404)return null;if(!e.ok)throw new Error(await e.text());const{form:n,dash:i}=await e.json();return{form:n&&z(n),dash:i&&A(i)}}const p=r=>(T("data-v-5d17475b"),r=r(),F(),r),Q={key:0,class:"loading"},$={key:1,class:"error"},G=p(()=>d("h1",null,"Oops! Something went wrong",-1)),M=p(()=>d("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),U=[G,M],W={key:2,class:"form"},X={key:3,class:"dash-wrapper"},Y={key:4,class:"error not-found"},Z=p(()=>d("h1",null,"Page not found",-1)),ee=p(()=>d("p",null,"The page you requested could not be found.",-1)),te=[Z,ee],re=B({__name:"Player",setup(r){const e=N(),n=O(),i=K({playerKey:g()});m(e,()=>I());const _=({path:t})=>{n.push({name:"player",query:e.query,params:{path:t.split("/")}})},y=async()=>{i.playerKey=g()};m([()=>e.path,()=>e.query],()=>y());const{loading:w,result:o,error:D,refetch:I}=j(()=>{var t;return J((t=e.path.slice(1))!=null?t:"")}),h=f(()=>l.value?S.create({formPath:l.value.path}):null),l=f(()=>{var t,u;return(u=(t=o.value)==null?void 0:t.form)!=null?u:null}),v=f(()=>{var u,b;if(!((u=o.value)!=null&&u.dash))return null;const t=V((b=o.value)==null?void 0:b.dash);return t.onRedirect(({url:P,queryParams:R})=>q(n,P,R)),t});return m(o,()=>{var t;!o.value||(o.value.form?document.title=(t=o.value.form.welcomeTitle)!=null?t:o.value.form.title:o.value.dash&&(document.title=o.value.dash.title))}),(t,u)=>a(w)?(s(),c("div",Q,[E(H)])):a(D)?(s(),c("div",$,U)):a(l)&&a(h)?(s(),c("div",W,[(s(),k(x,{key:i.playerKey,class:"player",form:a(l),params:a(e).query,broker:a(h),"enable-auto-focus":!0,onNavigate:_,onLogout:y},null,8,["form","params","broker"]))])):a(v)?(s(),c("div",X,[(s(),k(C,{key:i.playerKey,class:"player","is-preview":!1,params:a(e).query,"dash-player-service":a(v),onNavigate:_},null,8,["params","dash-player-service"]))])):(s(),c("div",Y,te))}});const we=L(re,[["__scopeId","data-v-5d17475b"]]);export{we as default};
//# sourceMappingURL=Player.99377757.js.map
