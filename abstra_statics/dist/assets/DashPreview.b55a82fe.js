import{d as _,eA as w,ez as g,J as b,b as n,et as D,u,c as p,ew as d,bw as k,x as P}from"./outputWidgets.a732e2ee.js";import{D as I,m as x}from"./DashPlayer.7320bafb.js";import{L as B}from"./CircularLoading.9b2c3e03.js";import{r as R}from"./index.503b52e5.js";import{B as q}from"./BackButton.bd8dfba5.js";import{a as l}from"./asyncComputed.8c09123d.js";import{D as C}from"./dashes.191275a7.js";import{W as E}from"./workspaces.31b8078e.js";import"./executeJs.7bfc83f1.js";import"./icons.2907d45a.js";import"./index.d0c0a13e.js";import"./pubsub.e674f7d3.js";import"./PlayerNavbar.eba9278d.js";import"./Steps.eb15cf63.js";import"./Modal.04fc136f.js";import"./geometryUtils.f09d3e0e.js";import"./WidgetsFrame.f1fa64ea.js";import"./activeRecord.30e3101b.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="804915ea-cd1c-416f-b51f-0b400511659b",t._sentryDebugIdIdentifier="sentry-dbid-804915ea-cd1c-416f-b51f-0b400511659b")}catch{}})();const F=_({__name:"DashPreview",setup(t){const r=w(),s=g(),m=({id:e,type:o})=>{o==="dash"?(s.push({name:"dashPreview",params:{dashId:e},query:r.query}),h()):s.push({name:"formPreview",params:{formId:e},query:r.query})},f=()=>{var e;!((e=a.value)!=null&&e.path)||s.push(`/_editor/dash/${encodeURIComponent(a.value.path)}`)},{loading:v,result:a,refetch:h}=l(()=>C.get(r.params.dashPath)),{result:i}=l(()=>E.get()),c=b(()=>{if(!a.value||!i.value||!a.value.makeRunnerData(i.value))return null;const e=x(a.value.makeRunnerData(i.value));return e.onRedirect(({url:o,queryParams:y})=>R("preview",s,o,y)),e});return(e,o)=>(n(),D(k,null,[u(v)||!u(a)?(n(),p(B,{key:0,class:"loading",justify:"center"})):d("",!0),c.value?(n(),p(I,{key:1,class:"player",dash:c.value.runnerData,"widgets-with-errors":[],"is-preview":!0,params:u(r).query,"dash-player-service":c.value,onNavigate:m},null,8,["dash","params","dash-player-service"])):d("",!0),u(a)?(n(),p(q,{key:2,onExitFullscreenPreview:f})):d("",!0)],64))}});const X=P(F,[["__scopeId","data-v-1172cf43"]]);export{X as default};
//# sourceMappingURL=DashPreview.b55a82fe.js.map