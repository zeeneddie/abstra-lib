import{d as _,ey as w,ex as b,F as g,b as n,c as D,bu as u,u as c,eu as p,bw as k,t as P}from"./registerWidgets.8646b881.js";import{D as I,m as x}from"./DashPlayer.52d6bfce.js";import{L as B}from"./CircularLoading.9f38dddc.js";import{r as R}from"./index.1ff49521.js";import{B as q}from"./BackButton.28c6142d.js";import{a as l}from"./asyncComputed.3dfb0850.js";import{D as C}from"./dashes.3aac8dc3.js";import{W as F}from"./workspaces.b1bd0acf.js";import"./executeJs.ca51907d.js";import"./PlayerNavbar.c0656036.js";import"./icons.4cf5ca87.js";import"./Steps.6993c718.js";import"./Modal.c5521390.js";import"./passwordlessManager.a2c74fb7.js";import"./pubsub.8879f604.js";import"./storage.323ac0b4.js";import"./Passwordless.5a65b274.js";import"./WidgetsFrame.73414bb8.js";import"./lottie.e3748251.js";import"./activeRecord.d82f5265.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="4bdb1d38-268a-4c25-975b-d0caffdceaf1",t._sentryDebugIdIdentifier="sentry-dbid-4bdb1d38-268a-4c25-975b-d0caffdceaf1")}catch{}})();const E=_({__name:"DashPreview",setup(t){const r=w(),s=b(),m=({id:e,type:o})=>{o==="dash"?(s.push({name:"dashPreview",params:{dashId:e},query:r.query}),y()):s.push({name:"formPreview",params:{formId:e},query:r.query})},f=()=>{var e;!((e=a.value)!=null&&e.path)||s.push(`/_editor/dash/${encodeURIComponent(a.value.path)}`)},{loading:v,result:a,refetch:y}=l(()=>C.get(r.params.dashPath)),{result:i}=l(()=>F.get()),d=g(()=>{if(!a.value||!i.value||!a.value.makeRunnerData(i.value))return null;const e=x(a.value.makeRunnerData(i.value));return e.onRedirect(({url:o,queryParams:h})=>R("preview",s,o,h)),e});return(e,o)=>(n(),D(k,null,[u(v)||!u(a)?(n(),c(B,{key:0,class:"loading",justify:"center"})):p("",!0),d.value?(n(),c(I,{key:1,class:"player",dash:d.value.runnerData,"widgets-with-errors":[],"is-preview":!0,params:u(r).query,"dash-player-service":d.value,onNavigate:m},null,8,["dash","params","dash-player-service"])):p("",!0),u(a)?(n(),c(q,{key:2,onExitFullscreenPreview:f})):p("",!0)],64))}});const Z=P(E,[["__scopeId","data-v-1172cf43"]]);export{Z as default};
//# sourceMappingURL=DashPreview.a6afaad8.js.map
