import{d as _,ey as w,ex as g,F as D,b as n,c as k,bu as u,u as p,eu as d,bw as b,t as P}from"./registerWidgets.2d3a9fa1.js";import{D as I,m as x}from"./DashPlayer.2612053a.js";import{L as B}from"./CircularLoading.7f8cdc69.js";import{r as R}from"./index.1a3a4850.js";import{B as q}from"./BackButton.9f23fa5d.js";import{a as l}from"./asyncComputed.da67dddd.js";import{D as C}from"./dashes.405c95fd.js";import{W as F}from"./workspaces.98c3e654.js";import"./executeJs.76e35dd0.js";import"./PlayerNavbar.fdd6bac1.js";import"./icons.ef35efa7.js";import"./Steps.27fe6056.js";import"./Modal.0a34e3f8.js";import"./passwordlessManager.7fdb47fd.js";import"./pubsub.f5cc447b.js";import"./storage.2f9edc3d.js";import"./Passwordless.f47b04f0.js";import"./WidgetsFrame.c6f4d7d9.js";import"./lottie.8f8e4fb5.js";import"./activeRecord.85525a95.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="23a42c7e-d673-4224-9734-f7ef08f8b14c",t._sentryDebugIdIdentifier="sentry-dbid-23a42c7e-d673-4224-9734-f7ef08f8b14c")}catch{}})();const E=_({__name:"DashPreview",setup(t){const r=w(),s=g(),m=({id:e,type:o})=>{o==="dash"?(s.push({name:"dashPreview",params:{dashId:e},query:r.query}),y()):s.push({name:"formPreview",params:{formId:e},query:r.query})},f=()=>{var e;!((e=a.value)!=null&&e.path)||s.push(`/_editor/dash/${encodeURIComponent(a.value.path)}`)},{loading:v,result:a,refetch:y}=l(()=>C.get(r.params.dashPath)),{result:i}=l(()=>F.get()),c=D(()=>{if(!a.value||!i.value||!a.value.makeRunnerData(i.value))return null;const e=x(a.value.makeRunnerData(i.value));return e.onRedirect(({url:o,queryParams:h})=>R("preview",s,o,h)),e});return(e,o)=>(n(),k(b,null,[u(v)||!u(a)?(n(),p(B,{key:0,class:"loading",justify:"center"})):d("",!0),c.value?(n(),p(I,{key:1,class:"player",dash:c.value.runnerData,"widgets-with-errors":[],"is-preview":!0,params:u(r).query,"dash-player-service":c.value,onNavigate:m},null,8,["dash","params","dash-player-service"])):d("",!0),u(a)?(n(),p(q,{key:2,onExitFullscreenPreview:f})):d("",!0)],64))}});const Z=P(E,[["__scopeId","data-v-1172cf43"]]);export{Z as default};
//# sourceMappingURL=DashPreview.2f67b849.js.map
