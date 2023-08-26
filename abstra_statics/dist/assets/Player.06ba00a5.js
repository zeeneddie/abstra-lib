import{r as q}from"./index.cb27b144.js";import{u as k}from"./uuid.560d2bd1.js";import{F as x,R as S}from"./broker.ab8ad6dc.js";import{d as B,v as K,a2 as m,K as f,z as a,b as s,c,e as E,t as w,J as N,H as O,O as T,Q as F,x as d,q as L}from"./registerWidgets.4d894c88.js";import{D as C,m as V}from"./DashPlayer.fd5ced10.js";import{a as j}from"./asyncComputed.f06ba433.js";import{r as z,l as A}from"./runnerData.daab175d.js";import{L as H}from"./CircularLoading.00c740ee.js";import"./passwordlessManager.3d3954ba.js";import"./pubsub.4864d8e8.js";import"./icons.d073d483.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.da9df857.js";import"./Passwordless.fdf4f66c.js";import"./executeJs.d4452806.js";import"./PlayerNavbar.0d55ee0a.js";import"./WidgetsFrame.3839bd9d.js";import"./colors.ed624897.js";import"./Modal.e78ee0d6.js";import"./lottie.759f75ba.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="d50a2583-3833-42a6-8e93-d5435178c574",r._sentryDebugIdIdentifier="sentry-dbid-d50a2583-3833-42a6-8e93-d5435178c574")}catch{}})();async function J(r){const e=await fetch(`/_api/${r}`);if(e.status==404)return null;if(!e.ok)throw new Error(await e.text());const{form:n,dash:i}=await e.json();return{form:n&&z(n),dash:i&&A(i)}}const p=r=>(T("data-v-5d17475b"),r=r(),F(),r),Q={key:0,class:"loading"},$={key:1,class:"error"},G=p(()=>d("h1",null,"Oops! Something went wrong",-1)),M=p(()=>d("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),U=[G,M],W={key:2,class:"form"},X={key:3,class:"dash-wrapper"},Y={key:4,class:"error not-found"},Z=p(()=>d("h1",null,"Page not found",-1)),ee=p(()=>d("p",null,"The page you requested could not be found.",-1)),te=[Z,ee],re=B({__name:"Player",setup(r){const e=N(),n=O(),i=K({playerKey:k()});m(e,()=>I());const _=({path:t})=>{n.push({name:"player",query:e.query,params:{path:t.split("/")}})},y=async()=>{i.playerKey=k()};m([()=>e.path,()=>e.query],()=>y());const{loading:b,result:o,error:D,refetch:I}=j(()=>{var t;return J((t=e.path.slice(1))!=null?t:"")}),h=f(()=>l.value?S.create({formPath:l.value.path}):null),l=f(()=>{var t,u;return(u=(t=o.value)==null?void 0:t.form)!=null?u:null}),v=f(()=>{var u,g;if(!((u=o.value)!=null&&u.dash))return null;const t=V((g=o.value)==null?void 0:g.dash);return t.onRedirect(({url:P,queryParams:R})=>q(n,P,R)),t});return m(o,()=>{var t;!o.value||(o.value.form?document.title=(t=o.value.form.welcomeTitle)!=null?t:o.value.form.title:o.value.dash&&(document.title=o.value.dash.title))}),(t,u)=>a(b)?(s(),c("div",Q,[E(H)])):a(D)?(s(),c("div",$,U)):a(l)&&a(h)?(s(),c("div",W,[(s(),w(x,{key:i.playerKey,class:"player",form:a(l),params:a(e).query,broker:a(h),"enable-auto-focus":!0,onNavigate:_,onLogout:y},null,8,["form","params","broker"]))])):a(v)?(s(),c("div",X,[(s(),w(C,{key:i.playerKey,class:"player","is-preview":!1,params:a(e).query,"dash-player-service":a(v),onNavigate:_},null,8,["params","dash-player-service"]))])):(s(),c("div",Y,te))}});const be=L(re,[["__scopeId","data-v-5d17475b"]]);export{be as default};
//# sourceMappingURL=Player.06ba00a5.js.map
