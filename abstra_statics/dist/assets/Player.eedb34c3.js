import{r as R}from"./index.b85de9d3.js";import{u as b}from"./uuid.ed082f56.js";import{F as q,R as x}from"./broker.7dd7c6d6.js";import{d as S,v as B,a2 as g,K as m,z as a,b as s,c as u,e as K,t as k,J as E,H as N,O,Q as T,x as d,q as F}from"./registerWidgets.b581b882.js";import{D as L,m as C}from"./DashPlayer.fed03862.js";import{a as V}from"./asyncComputed.d5ac46d6.js";import{r as j,n as z}from"./runnerData.9dae2b60.js";import{L as A}from"./CircularLoading.187bc0bb.js";import"./passwordlessManager.202da07d.js";import"./pubsub.e8d7f2be.js";import"./icons.5e5a9af6.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.31abc16f.js";import"./Passwordless.d73d43e7.js";import"./executeJs.4676d347.js";import"./PlayerNavbar.d65f9d76.js";import"./WidgetsFrame.c7d52d0d.js";import"./colors.9b427580.js";import"./Modal.b2162631.js";import"./lottie.11a8eda8.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="978e4ce1-1b63-48d0-9797-4c41c9b07790",r._sentryDebugIdIdentifier="sentry-dbid-978e4ce1-1b63-48d0-9797-4c41c9b07790")}catch{}})();async function H(r){const e=await fetch(`/_api/${r}`);if(e.status==404)return null;if(!e.ok)throw new Error(await e.text());const{form:n,dash:c}=await e.json();return{form:n&&j(n),dash:c&&z(c)}}const p=r=>(O("data-v-ee57bae4"),r=r(),T(),r),J={key:0,class:"loading"},Q={key:1,class:"error"},$=p(()=>d("h1",null,"Oops! Something went wrong",-1)),G=p(()=>d("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),M=[$,G],U={key:2,class:"form"},W={key:3,class:"dash-wrapper"},X={key:4,class:"error not-found"},Y=p(()=>d("h1",null,"Page not found",-1)),Z=p(()=>d("p",null,"The page you requested could not be found.",-1)),ee=[Y,Z],te=S({__name:"Player",setup(r){const e=E(),n=N(),c=B({playerKey:b()}),_=({path:t})=>{n.push({name:"player",query:e.query,params:{path:t.split("/")}})},f=async()=>{c.playerKey=b()};g([()=>e.path,()=>e.query],()=>f());const{loading:w,result:o,error:D}=V(()=>{var t;return H((t=e.path.slice(1))!=null?t:"")}),y=m(()=>l.value?x.create({formPath:l.value.path}):null),l=m(()=>{var t,i;return(i=(t=o.value)==null?void 0:t.form)!=null?i:null}),h=m(()=>{var i,v;if(!((i=o.value)!=null&&i.dash))return null;const t=C((v=o.value)==null?void 0:v.dash);return t.onRedirect(({url:I,queryParams:P})=>R(n,I,P)),t});return g(o,()=>{var t;!o.value||(o.value.form?document.title=(t=o.value.form.welcomeTitle)!=null?t:o.value.form.title:o.value.dash&&(document.title=o.value.dash.title))}),(t,i)=>a(w)?(s(),u("div",J,[K(A)])):a(D)?(s(),u("div",Q,M)):a(l)&&a(y)?(s(),u("div",U,[(s(),k(q,{key:c.playerKey,class:"player",form:a(l),params:a(e).query,broker:a(y),"enable-auto-focus":!0,onNavigate:_,onLogout:f},null,8,["form","params","broker"]))])):a(h)?(s(),u("div",W,[(s(),k(L,{key:c.playerKey,class:"player","is-preview":!1,params:a(e).query,"dash-player-service":a(h),onNavigate:_},null,8,["params","dash-player-service"]))])):(s(),u("div",X,ee))}});const ke=F(te,[["__scopeId","data-v-ee57bae4"]]);export{ke as default};
//# sourceMappingURL=Player.eedb34c3.js.map