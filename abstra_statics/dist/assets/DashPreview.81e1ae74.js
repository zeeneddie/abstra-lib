import{d as _,K as g,b as i,c as w,z as t,t as p,D as m,F as D,J as b,H as k,q as I}from"./registerWidgets.240bf3ff.js";import{D as P,m as q}from"./DashPlayer.bd227bb0.js";import{L as x}from"./CircularLoading.846828c4.js";import{r as B}from"./index.b8bf5795.js";import{B as R}from"./BackButton.6d21a528.js";import{a as c}from"./asyncComputed.e710533c.js";import{D as C}from"./dashes.91ab254f.js";import{W as F}from"./workspaces.1aaecf60.js";import"./runnerData.d42efcd0.js";import"./executeJs.7c542955.js";import"./PlayerNavbar.bb822c94.js";import"./icons.8dbdad3c.js";import"./WidgetsFrame.a2454146.js";import"./colors.9e0ee383.js";import"./Modal.ba42d121.js";import"./passwordlessManager.0554ad1a.js";import"./pubsub.83908d54.js";import"./Passwordless.fa44d239.js";import"./lottie.b1d7a5e6.js";import"./activeRecord.d21ad35a.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[r]="fd26450b-4ee2-43dd-9658-11e87bda3b2e",s._sentryDebugIdIdentifier="sentry-dbid-fd26450b-4ee2-43dd-9658-11e87bda3b2e")}catch{}})();const E=_({__name:"DashPreview",setup(s){const r=b(),o=k(),l=({id:e,type:n})=>{n==="dash"?(o.push({name:"dashPreview",params:{dashId:e},query:r.query}),y()):o.push({name:"form-preview",params:{formId:e},query:r.query})},f=()=>{var e;!((e=a.value)!=null&&e.path)||o.push(`/_editor/dash/${encodeURIComponent(a.value.path)}`)},{loading:h,result:a,refetch:y}=c(()=>C.get(r.params.dashPath)),{result:d}=c(()=>F.get()),u=g(()=>{if(!a.value||!d.value||!a.value.makeRunnerData(d.value))return null;const e=q(a.value.makeRunnerData(d.value));return e.onRedirect(({url:n,queryParams:v})=>B(o,n,v)),e});return(e,n)=>(i(),w(D,null,[t(h)||!t(a)?(i(),p(x,{key:0,class:"loading",justify:"center"})):m("",!0),t(u)?(i(),p(P,{key:1,class:"player",dash:t(u).runnerData,"widgets-with-errors":[],"is-preview":!0,params:t(r).query,"dash-player-service":t(u),onNavigate:l},null,8,["dash","params","dash-player-service"])):m("",!0),t(a)?(i(),p(R,{key:2,onExitFullscreenPreview:f})):m("",!0)],64))}});const Z=I(E,[["__scopeId","data-v-7fc555dd"]]);export{Z as default};
//# sourceMappingURL=DashPreview.81e1ae74.js.map
