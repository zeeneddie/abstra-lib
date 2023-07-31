import{r as R}from"./index.1c59a5f6.js";import{u as g}from"./log.85118ab9.js";import{F as q,R as x}from"./broker.c01819c2.js";import{d as S,v as B,R as b,K as f,z as o,b as s,c as i,e as K,t as w,J as E,H as L,O as N,Q as O,x as d,q as T}from"./registerWidgets.553de467.js";import{D as F,n as C}from"./DashPlayer.98e9a361.js";import{a as V}from"./asyncComputed.2769eba5.js";import{r as j,n as z}from"./runnerData.9bff4dbf.js";import{L as A}from"./CircularLoading.01ebf7ca.js";import"./passwordlessManager.b79493a6.js";import"./icons.012820f9.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.e758ad17.js";import"./Passwordless.84c9704e.js";import"./executeJs.0d5b0965.js";import"./PlayerNavbar.1351341e.js";import"./WidgetsFrame.f5cb9e50.js";import"./colors.ec843c1d.js";import"./Modal.3622aa4e.js";import"./lottie.433e3d0f.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="34de9e99-3306-480d-b4d5-fb6b412fe888",a._sentryDebugIdIdentifier="sentry-dbid-34de9e99-3306-480d-b4d5-fb6b412fe888")}catch{}})();async function H(a){const e=await fetch(`/_api/${a}`);if(e.status==404)return null;if(!e.ok)throw new Error(await e.text());const{form:n,dash:l}=await e.json();return{form:n&&j(n),dash:l&&z(l)}}const p=a=>(N("data-v-7a49cef6"),a=a(),O(),a),J={key:0,class:"loading"},Q={key:1,class:"error"},$=p(()=>d("h1",null,"Oops! Something went wrong",-1)),G=p(()=>d("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),M=[$,G],U={key:2,class:"form"},W={key:3,class:"dash-wrapper"},X={key:4,class:"error not-found"},Y=p(()=>d("h1",null,"Page not found",-1)),Z=p(()=>d("p",null,"The page you requested could not be found.",-1)),ee=[Y,Z],te=S({__name:"Player",setup(a){const e=E(),n=L(),l=B({playerKey:g()}),m=({path:t})=>{n.push({name:"player",query:e.query,params:{path:t.split("/")}})},_=async()=>{l.playerKey=g()};b([()=>e.path,()=>e.query],()=>_());const{loading:k,result:r,error:D}=V(()=>{var t;return H((t=e.path.slice(1))!=null?t:"")}),y=f(()=>c.value?x.create({isLocal:!1,isPreview:!1,formPath:c.value.path}):null),c=f(()=>{var t,u;return(u=(t=r.value)==null?void 0:t.form)!=null?u:null}),h=f(()=>{var u,v;if(!((u=r.value)!=null&&u.dash))return null;const t=C.create((v=r.value)==null?void 0:v.dash,!1);return t.onRedirect(({url:P,queryParams:I})=>R(n,P,I)),t});return b(r,()=>{var t;!r.value||(r.value.form?document.title=(t=r.value.form.welcomeTitle)!=null?t:r.value.form.title:r.value.dash&&(document.title=r.value.dash.title))}),(t,u)=>o(k)?(s(),i("div",J,[K(A)])):o(D)?(s(),i("div",Q,M)):o(c)&&o(y)?(s(),i("div",U,[(s(),w(q,{key:l.playerKey,class:"player",form:o(c),params:o(e).query,broker:o(y),"enable-auto-focus":!0,onNavigate:m,onLogout:_},null,8,["form","params","broker"]))])):o(h)?(s(),i("div",W,[(s(),w(F,{key:l.playerKey,class:"player","is-preview":!1,params:o(e).query,"dash-player-state":o(h),onNavigate:m},null,8,["params","dash-player-state"]))])):(s(),i("div",X,ee))}});const be=T(te,[["__scopeId","data-v-7a49cef6"]]);export{be as default};
//# sourceMappingURL=Player.77412bbe.js.map
