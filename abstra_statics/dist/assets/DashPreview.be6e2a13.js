import{d as _,J as g,H as w,K as D,b as n,c as k,z as u,t as c,D as p,F as b,q as I}from"./registerWidgets.7afd6438.js";import{D as P,m as q}from"./DashPlayer.00071d09.js";import{L as x}from"./CircularLoading.283e573b.js";import{r as B}from"./index.60b26bb0.js";import{B as R}from"./BackButton.258f879d.js";import{a as l}from"./asyncComputed.b60ddd9a.js";import{D as C}from"./dashes.e2e2b65e.js";import{W as F}from"./workspaces.ddbd5106.js";import"./executeJs.ad83f949.js";import"./PlayerNavbar.c33c7896.js";import"./icons.0ae396f2.js";import"./Steps.224fdd6f.js";import"./Modal.94284cfc.js";import"./runnerData.7369dff0.js";import"./passwordlessManager.7da7ab9e.js";import"./pubsub.9805d82b.js";import"./Passwordless.2c1a2517.js";import"./WidgetsFrame.0c0e8621.js";import"./lottie.36f8e1f2.js";import"./activeRecord.e140ff8e.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="e014014d-befd-47ca-a88d-4fc444853435",t._sentryDebugIdIdentifier="sentry-dbid-e014014d-befd-47ca-a88d-4fc444853435")}catch{}})();const E=_({__name:"DashPreview",setup(t){const r=g(),s=w(),m=({id:e,type:o})=>{o==="dash"?(s.push({name:"dashPreview",params:{dashId:e},query:r.query}),h()):s.push({name:"form-preview",params:{formId:e},query:r.query})},f=()=>{var e;!((e=a.value)!=null&&e.path)||s.push(`/_editor/dash/${encodeURIComponent(a.value.path)}`)},{loading:v,result:a,refetch:h}=l(()=>C.get(r.params.dashPath)),{result:i}=l(()=>F.get()),d=D(()=>{if(!a.value||!i.value||!a.value.makeRunnerData(i.value))return null;const e=q(a.value.makeRunnerData(i.value));return e.onRedirect(({url:o,queryParams:y})=>B(s,o,y)),e});return(e,o)=>(n(),k(b,null,[u(v)||!u(a)?(n(),c(x,{key:0,class:"loading",justify:"center"})):p("",!0),d.value?(n(),c(P,{key:1,class:"player",dash:d.value.runnerData,"widgets-with-errors":[],"is-preview":!0,params:u(r).query,"dash-player-service":d.value,onNavigate:m},null,8,["dash","params","dash-player-service"])):p("",!0),u(a)?(n(),c(R,{key:2,onExitFullscreenPreview:f})):p("",!0)],64))}});const Z=I(E,[["__scopeId","data-v-7fc555dd"]]);export{Z as default};
//# sourceMappingURL=DashPreview.be6e2a13.js.map
