import{d as _,K as w,J as g,L as D,b as n,c as b,A as u,u as d,E as p,F as k,t as P}from"./registerWidgets.f2346c28.js";import{D as I,m as x}from"./DashPlayer.2b0b6ba7.js";import{L as B}from"./CircularLoading.f28717a9.js";import{r as R}from"./index.1bd51938.js";import{B as q}from"./BackButton.ec77a0c5.js";import{a as l}from"./asyncComputed.359496c4.js";import{D as C}from"./dashes.2ce2d327.js";import{W as E}from"./workspaces.98edc29a.js";import"./executeJs.4562af1a.js";import"./PlayerNavbar.42426187.js";import"./icons.97ac1ffb.js";import"./Steps.98337324.js";import"./Modal.c8190c49.js";import"./passwordlessManager.d65765fb.js";import"./pubsub.db6cb532.js";import"./Passwordless.1426ffa0.js";import"./WidgetsFrame.ef023396.js";import"./lottie.016d1ff3.js";import"./activeRecord.58d61804.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="25d5a7d1-225b-405a-b52e-8c203bc00a19",t._sentryDebugIdIdentifier="sentry-dbid-25d5a7d1-225b-405a-b52e-8c203bc00a19")}catch{}})();const F=_({__name:"DashPreview",setup(t){const r=w(),s=g(),m=({id:e,type:o})=>{o==="dash"?(s.push({name:"dashPreview",params:{dashId:e},query:r.query}),h()):s.push({name:"formPreview",params:{formId:e},query:r.query})},f=()=>{var e;!((e=a.value)!=null&&e.path)||s.push(`/_editor/dash/${encodeURIComponent(a.value.path)}`)},{loading:v,result:a,refetch:h}=l(()=>C.get(r.params.dashPath)),{result:i}=l(()=>E.get()),c=D(()=>{if(!a.value||!i.value||!a.value.makeRunnerData(i.value))return null;const e=x(a.value.makeRunnerData(i.value));return e.onRedirect(({url:o,queryParams:y})=>R("preview",s,o,y)),e});return(e,o)=>(n(),b(k,null,[u(v)||!u(a)?(n(),d(B,{key:0,class:"loading",justify:"center"})):p("",!0),c.value?(n(),d(I,{key:1,class:"player",dash:c.value.runnerData,"widgets-with-errors":[],"is-preview":!0,params:u(r).query,"dash-player-service":c.value,onNavigate:m},null,8,["dash","params","dash-player-service"])):p("",!0),u(a)?(n(),d(q,{key:2,onExitFullscreenPreview:f})):p("",!0)],64))}});const Y=P(F,[["__scopeId","data-v-1172cf43"]]);export{Y as default};
//# sourceMappingURL=DashPreview.6690998d.js.map
