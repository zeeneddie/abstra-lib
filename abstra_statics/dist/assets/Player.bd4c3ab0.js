import{r as q}from"./index.a0dcefc8.js";import{u as w}from"./uuid.dbda6006.js";import{F as x,R as S}from"./broker.352d6f95.js";import{d as B,J as K,H as E,v as N,a1 as m,K as f,z as c,b as o,c as l,e as O,t as b,O as T,Q as F,x as d,q as L}from"./registerWidgets.cecc7add.js";import{D as C,m as V}from"./DashPlayer.a348af79.js";import{a as j}from"./asyncComputed.08fdcc30.js";import{r as z,l as A}from"./runnerData.fab8bd8b.js";import{L as H}from"./CircularLoading.45f7b299.js";import"./passwordlessManager.8b0c672e.js";import"./pubsub.a43e35aa.js";import"./Passwordless.0943eeec.js";import"./icons.a47594f6.js";import"./executeJs.5aff51e5.js";import"./PlayerNavbar.208ad882.js";import"./Steps.5d7ea3ec.js";import"./Modal.4485a18b.js";import"./WidgetsFrame.bbded71d.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.bfc19705.js";import"./lottie.79ce2fdf.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="28d573d6-3f14-4c13-8e1f-285da7feb994",t._sentryDebugIdIdentifier="sentry-dbid-28d573d6-3f14-4c13-8e1f-285da7feb994")}catch{}})();async function J(t){const e=await fetch(`/_api/${t}`);if(e.status==404)return null;if(!e.ok)throw new Error(await e.text());const{form:s,dash:n}=await e.json();return{form:s&&z(s),dash:n&&A(n)}}const p=t=>(T("data-v-2840ab73"),t=t(),F(),t),Q={key:0,class:"loading"},$={key:1,class:"error"},G=p(()=>d("h1",null,"Oops! Something went wrong",-1)),M=p(()=>d("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),U=[G,M],W={key:2,class:"form"},X={key:3,class:"dash-wrapper"},Y={key:4,class:"error not-found"},Z=p(()=>d("h1",null,"Page not found",-1)),ee=p(()=>d("p",null,"The page you requested could not be found.",-1)),re=[Z,ee],te=B({__name:"Player",setup(t){const e=K(),s=E(),n=N({playerKey:w()});m(e,()=>I());const _=({path:r})=>{s.push({name:"player",query:e.query,params:{path:r.split("/")}})},y=async()=>{n.playerKey=w()};m([()=>e.path,()=>e.query],()=>y());const{loading:k,result:a,error:D,refetch:I}=j(()=>{var r;return J((r=e.path.slice(1))!=null?r:"")}),h=f(()=>i.value?S.create({formPath:i.value.path}):null),i=f(()=>{var r,u;return(u=(r=a.value)==null?void 0:r.form)!=null?u:null}),v=f(()=>{var u,g;if(!((u=a.value)!=null&&u.dash))return null;const r=V((g=a.value)==null?void 0:g.dash);return r.onRedirect(({url:P,queryParams:R})=>q(s,P,R)),r});return m(a,()=>{var r;!a.value||(a.value.form?document.title=(r=a.value.form.welcomeTitle)!=null?r:a.value.form.title:a.value.dash&&(document.title=a.value.dash.title))}),(r,u)=>c(k)?(o(),l("div",Q,[O(H)])):c(D)?(o(),l("div",$,U)):i.value&&h.value?(o(),l("div",W,[(o(),b(x,{key:n.playerKey,class:"player",form:i.value,"is-preview":!1,params:c(e).query,broker:h.value,"enable-auto-focus":!0,onNavigate:_,onLogout:y},null,8,["form","params","broker"]))])):v.value?(o(),l("div",X,[(o(),b(C,{key:n.playerKey,class:"player","is-preview":!1,params:c(e).query,"dash-player-service":v.value,onNavigate:_},null,8,["params","dash-player-service"]))])):(o(),l("div",Y,re))}});const ke=L(te,[["__scopeId","data-v-2840ab73"]]);export{ke as default};
//# sourceMappingURL=Player.bd4c3ab0.js.map