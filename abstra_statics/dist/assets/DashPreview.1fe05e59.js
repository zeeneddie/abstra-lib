import{d as _,eB as w,eA as g,G as D,b as n,eu as k,u,c,ew as p,b8 as P,t as I}from"./outputWidgets.c855fc19.js";import{D as b,m as B}from"./index.5ceb2809.js";import{L as x}from"./CircularLoading.0a185a3c.js";import{r as R}from"./executeJs.a6d23654.js";import{B as q}from"./BackButton.721ebc77.js";import{a as l}from"./asyncComputed.c6ddf838.js";import{D as C}from"./dashes.5e0a2bec.js";import{W as E}from"./workspaces.2386e169.js";import"./WidgetsFrame.5a12feff.js";import"./icons.db98240b.js";import"./geometryUtils.e136aecc.js";import"./runnerData.b3093804.js";import"./index.2f6f7ff3.js";import"./pubsub.8b090702.js";import"./url.f2daa6d3.js";import"./PlayerNavbar.909db3fa.js";import"./Steps.55d5e558.js";import"./activeRecord.15e51427.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="0f0106d1-7add-4d38-8df9-7c4a669adc99",t._sentryDebugIdIdentifier="sentry-dbid-0f0106d1-7add-4d38-8df9-7c4a669adc99")}catch{}})();const F=_({__name:"DashPreview",setup(t){const r=w(),s=g(),m=({id:e,type:o})=>{o==="dash"?(s.push({name:"dashPreview",params:{dashId:e},query:r.query}),h()):s.push({name:"formPreview",params:{formId:e},query:r.query})},f=()=>{var e;!((e=a.value)!=null&&e.path)||s.push(`/_editor/dash/${encodeURIComponent(a.value.path)}`)},{loading:v,result:a,refetch:h}=l(()=>C.get(r.params.dashPath)),{result:d}=l(()=>E.get()),i=D(()=>{if(!a.value||!d.value||!a.value.makeRunnerData(d.value))return null;const e=B(a.value.makeRunnerData(d.value));return e.onRedirect(({url:o,queryParams:y})=>R("preview",s,o,y)),e});return(e,o)=>(n(),k(P,null,[u(v)||!u(a)?(n(),c(x,{key:0,class:"loading",justify:"center"})):p("",!0),i.value?(n(),c(b,{key:1,class:"player",dash:i.value.runnerData,"widgets-with-errors":[],"is-preview":!0,params:u(r).query,"dash-player-service":i.value,onNavigate:m},null,8,["dash","params","dash-player-service"])):p("",!0),u(a)?(n(),c(q,{key:2,onExitFullscreenPreview:f})):p("",!0)],64))}});const X=I(F,[["__scopeId","data-v-1172cf43"]]);export{X as default};
//# sourceMappingURL=DashPreview.1fe05e59.js.map
