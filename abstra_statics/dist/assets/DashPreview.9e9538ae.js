import{d as _,eA as w,ez as g,J as D,b as n,et as b,u,c as p,ew as l,bq as k,x as P}from"./outputWidgets.b56466d5.js";import{D as I,m as x}from"./DashPlayer.34558c99.js";import{L as q}from"./CircularLoading.7e815af5.js";import{r as B}from"./index.a3b69644.js";import{B as R}from"./BackButton.2a6f69cc.js";import{a as d}from"./asyncComputed.57054d06.js";import{D as C}from"./dashes.363075e8.js";import{W as E}from"./workspaces.fc22fb79.js";import"./executeJs.ef22b96d.js";import"./icons.471883fc.js";import"./index.5248b04a.js";import"./pubsub.14ec67af.js";import"./PlayerNavbar.b0d3110a.js";import"./Steps.3046f774.js";import"./Modal.14d90c8b.js";import"./geometryUtils.bea247fe.js";import"./WidgetsFrame.2d096182.js";import"./activeRecord.32bffbb4.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="ace467fe-c096-4940-b781-8b55123e9465",t._sentryDebugIdIdentifier="sentry-dbid-ace467fe-c096-4940-b781-8b55123e9465")}catch{}})();const F=_({__name:"DashPreview",setup(t){const r=w(),s=g(),m=({id:e,type:o})=>{o==="dash"?(s.push({name:"dashPreview",params:{dashId:e},query:r.query}),h()):s.push({name:"formPreview",params:{formId:e},query:r.query})},f=()=>{var e;!((e=a.value)!=null&&e.path)||s.push(`/_editor/dash/${encodeURIComponent(a.value.path)}`)},{loading:v,result:a,refetch:h}=d(()=>C.get(r.params.dashPath)),{result:i}=d(()=>E.get()),c=D(()=>{if(!a.value||!i.value||!a.value.makeRunnerData(i.value))return null;const e=x(a.value.makeRunnerData(i.value));return e.onRedirect(({url:o,queryParams:y})=>B("preview",s,o,y)),e});return(e,o)=>(n(),b(k,null,[u(v)||!u(a)?(n(),p(q,{key:0,class:"loading",justify:"center"})):l("",!0),c.value?(n(),p(I,{key:1,class:"player",dash:c.value.runnerData,"widgets-with-errors":[],"is-preview":!0,params:u(r).query,"dash-player-service":c.value,onNavigate:m},null,8,["dash","params","dash-player-service"])):l("",!0),u(a)?(n(),p(R,{key:2,onExitFullscreenPreview:f})):l("",!0)],64))}});const X=P(F,[["__scopeId","data-v-1172cf43"]]);export{X as default};
//# sourceMappingURL=DashPreview.9e9538ae.js.map
