import{r as k,m as S}from"./index.31be9da9.js";import{u as b}from"./uuid.5cd70888.js";import{F as B,R as K}from"./broker.f34c2e88.js";import{d as E,eA as N,ez as F,H as L,K as m,J as y,u as c,b as s,eu as n,f as A,c as w,eD as C,eE as T,e as i,x as V}from"./outputWidgets.9b7c29ed.js";import{D as z,m as H}from"./DashPlayer.cdafd13d.js";import{a as J}from"./asyncComputed.6a414bed.js";import{L as O}from"./CircularLoading.91e9cb43.js";import"./index.4bc6a49a.js";import"./pubsub.f1df5000.js";import"./executeJs.676c9df6.js";import"./icons.7c250a15.js";import"./PlayerNavbar.3e459895.js";import"./Steps.1245809b.js";import"./WidgetsFrame.cd5e6124.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.0d59629c.js";import"./geometryUtils.ac11fc17.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="9338518d-d8a4-4628-84a8-e3de2d88fa8c",o._sentryDebugIdIdentifier="sentry-dbid-9338518d-d8a4-4628-84a8-e3de2d88fa8c")}catch{}})();const d=o=>(C("data-v-b3aa3ca3"),o=o(),T(),o),j={key:0,class:"loading"},G={key:1,class:"error"},M=d(()=>i("h1",null,"Oops! Something went wrong",-1)),Q=d(()=>i("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),U=[M,Q],W={key:2,class:"form"},X={key:3,class:"dash-wrapper"},Y={key:4,class:"error not-found"},Z=d(()=>i("h1",null,"Page not found",-1)),$=d(()=>i("p",null,"The page you requested could not be found.",-1)),ee=[Z,$],ae=E({__name:"Player",setup(o){const a=N(),l=F(),p=L({playerKey:b()});m(a,()=>R());function I(e,t){k("player",l,e,t)}const _=({path:e})=>{l.push({name:"player",query:a.query,params:{path:e.split("/")}})},f=async()=>{p.playerKey=b()};m([()=>a.path,()=>a.query],()=>f());const{loading:P,result:r,error:D,refetch:R}=J(()=>{var e;return S((e=a.path.slice(1))!=null?e:"")}),h=y(()=>u.value?K.create({formPath:u.value.path}):null),u=y(()=>{var e,t;return(t=(e=r.value)==null?void 0:e.form)!=null?t:null}),v=y(()=>{var t,g;if(!((t=r.value)!=null&&t.dash))return null;const e=H((g=r.value)==null?void 0:g.dash);return e.onRedirect(({url:q,queryParams:x})=>k("player",l,q,x)),e});return m(r,()=>{var e;!r.value||(r.value.form?document.title=(e=r.value.form.welcomeTitle)!=null?e:r.value.form.title:r.value.dash&&(document.title=r.value.dash.title))}),(e,t)=>c(P)?(s(),n("div",j,[A(O)])):c(D)?(s(),n("div",G,U)):u.value&&h.value?(s(),n("div",W,[(s(),w(B,{key:p.playerKey,class:"player",form:u.value,"is-preview":!1,params:c(a).query,broker:h.value,"enable-auto-focus":!0,onNavigate:_,onLogout:f,onRedirect:I},null,8,["form","params","broker"]))])):v.value?(s(),n("div",X,[(s(),w(z,{key:p.playerKey,class:"player","is-preview":!1,params:c(a).query,"dash-player-service":v.value,onNavigate:_},null,8,["params","dash-player-service"]))])):(s(),n("div",Y,ee))}});const ve=V(ae,[["__scopeId","data-v-b3aa3ca3"]]);export{ve as default};
//# sourceMappingURL=Player.afcf2c27.js.map
