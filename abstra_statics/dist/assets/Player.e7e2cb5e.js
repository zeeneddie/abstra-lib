import{r as k,m as S}from"./index.42b92ee8.js";import{u as b}from"./uuid.3c022812.js";import{F as B,R as K}from"./broker.f7aea10a.js";import{d as E,eA as N,ez as F,H as L,K as f,J as m,u,b as s,et as n,f as A,c as w,eD as C,eE as T,e as i,x as V}from"./outputWidgets.b43a489b.js";import{D as z,m as H}from"./DashPlayer.dc7c2426.js";import{a as J}from"./asyncComputed.a42e75bb.js";import{L as O}from"./CircularLoading.251f1c45.js";import"./index.4994c8b7.js";import"./pubsub.6fd47a9d.js";import"./executeJs.3803a920.js";import"./icons.de9af46a.js";import"./PlayerNavbar.368249cf.js";import"./Steps.6f5751ad.js";import"./Modal.ec042a35.js";import"./WidgetsFrame.4933b50d.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.cbb6820e.js";import"./geometryUtils.1ad6b31a.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="6548eaff-55f4-49f6-9dca-ce192f147e3c",o._sentryDebugIdIdentifier="sentry-dbid-6548eaff-55f4-49f6-9dca-ce192f147e3c")}catch{}})();const d=o=>(C("data-v-b3aa3ca3"),o=o(),T(),o),j={key:0,class:"loading"},G={key:1,class:"error"},M=d(()=>i("h1",null,"Oops! Something went wrong",-1)),Q=d(()=>i("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),U=[M,Q],W={key:2,class:"form"},X={key:3,class:"dash-wrapper"},Y={key:4,class:"error not-found"},Z=d(()=>i("h1",null,"Page not found",-1)),$=d(()=>i("p",null,"The page you requested could not be found.",-1)),ee=[Z,$],ae=E({__name:"Player",setup(o){const a=N(),c=F(),p=L({playerKey:b()});f(a,()=>R());function I(e,t){k("player",c,e,t)}const y=({path:e})=>{c.push({name:"player",query:a.query,params:{path:e.split("/")}})},_=async()=>{p.playerKey=b()};f([()=>a.path,()=>a.query],()=>_());const{loading:P,result:r,error:D,refetch:R}=J(()=>{var e;return S((e=a.path.slice(1))!=null?e:"")}),h=m(()=>l.value?K.create({formPath:l.value.path}):null),l=m(()=>{var e,t;return(t=(e=r.value)==null?void 0:e.form)!=null?t:null}),v=m(()=>{var t,g;if(!((t=r.value)!=null&&t.dash))return null;const e=H((g=r.value)==null?void 0:g.dash);return e.onRedirect(({url:q,queryParams:x})=>k("player",c,q,x)),e});return f(r,()=>{var e;!r.value||(r.value.form?document.title=(e=r.value.form.welcomeTitle)!=null?e:r.value.form.title:r.value.dash&&(document.title=r.value.dash.title))}),(e,t)=>u(P)?(s(),n("div",j,[A(O)])):u(D)?(s(),n("div",G,U)):l.value&&h.value?(s(),n("div",W,[(s(),w(B,{key:p.playerKey,class:"player",form:l.value,"is-preview":!1,params:u(a).query,broker:h.value,"enable-auto-focus":!0,onNavigate:y,onLogout:_,onRedirect:I},null,8,["form","params","broker"]))])):v.value?(s(),n("div",X,[(s(),w(z,{key:p.playerKey,class:"player","is-preview":!1,params:u(a).query,"dash-player-service":v.value,onNavigate:y},null,8,["params","dash-player-service"]))])):(s(),n("div",Y,ee))}});const ge=V(ae,[["__scopeId","data-v-b3aa3ca3"]]);export{ge as default};
//# sourceMappingURL=Player.e7e2cb5e.js.map
