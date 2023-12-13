import{F as I,r as R,g as P,R as q}from"./FormRunner.7b51fc6c.js";import{d as x,eA as B,ez as D,F as E,H as d,G as y,u as p,b as s,eu as c,f as F,c as S,eD as K,eE as L,e as u,t as N}from"./outputWidgets.6d6b4a37.js";import{u as h}from"./uuid.7843f981.js";import{a as A}from"./asyncComputed.17a6198d.js";import{L as C}from"./CircularLoading.a69637ff.js";import"./url.b5fbb423.js";import"./index.ec217461.js";import"./pubsub.7d377b25.js";import"./icons.28d0d847.js";import"./PlayerNavbar.a442f839.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.ad5557a9.js";import"./WidgetsFrame.fc26c5ed.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="54f040ea-95cf-436c-91bc-6479b1f13dbf",o._sentryDebugIdIdentifier="sentry-dbid-54f040ea-95cf-436c-91bc-6479b1f13dbf")}catch{}})();const l=o=>(K("data-v-1e2a2c24"),o=o(),L(),o),T={key:0,class:"loading"},V={key:1,class:"error"},z=l(()=>u("h1",null,"Oops! Something went wrong",-1)),G=l(()=>u("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),H=[z,G],O={key:2,class:"form"},j={key:3,class:"error not-found"},J=l(()=>u("h1",null,"Page not found",-1)),M=l(()=>u("p",null,"The page you requested could not be found.",-1)),Q=[J,M],U=x({__name:"Player",setup(o){const t=B(),i=D(),f=E({playerKey:h()});d(t,()=>w());function v(e,a){R("player",i,e,a)}const g=({path:e})=>{i.push({name:"player",query:t.query,params:{path:e.split("/")}})},_=async()=>{f.playerKey=h()};d([()=>t.path,()=>t.query],()=>_());const{loading:b,result:r,error:k,refetch:w}=A(()=>{var e;return P((e=t.path.slice(1))!=null?e:"")}),m=y(()=>n.value?q.create(n.value.id):null),n=y(()=>{var e,a;return(a=(e=r.value)==null?void 0:e.form)!=null?a:null});return d(r,()=>{var e;!r.value||r.value.form&&(document.title=(e=r.value.form.welcomeTitle)!=null?e:r.value.form.title)}),(e,a)=>p(b)?(s(),c("div",T,[F(C)])):p(k)?(s(),c("div",V,H)):n.value&&m.value?(s(),c("div",O,[(s(),S(I,{key:f.playerKey,class:"player",form:n.value,"is-preview":!1,params:p(t).query,broker:m.value,"enable-auto-focus":!0,onNavigate:g,onLogout:_,onRedirect:v},null,8,["form","params","broker"]))])):(s(),c("div",j,Q))}});const ce=N(U,[["__scopeId","data-v-1e2a2c24"]]);export{ce as default};
//# sourceMappingURL=Player.5ef80f04.js.map