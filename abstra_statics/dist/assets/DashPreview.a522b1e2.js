import{d as _,eA as w,ez as g,J as D,b as n,eu as b,u,c as p,ew as d,bg as k,x as P}from"./outputWidgets.65926c1d.js";import{D as I,m as x}from"./DashPlayer.4eeffbf0.js";import{L as B}from"./CircularLoading.ae94822e.js";import{r as R}from"./index.553ada1f.js";import{B as q}from"./BackButton.3d19a95b.js";import{a as l}from"./asyncComputed.4723d9b8.js";import{D as C}from"./dashes.5b745c3f.js";import{W as E}from"./workspaces.d75870ed.js";import"./executeJs.2fa51613.js";import"./icons.da7d27cd.js";import"./index.f2493334.js";import"./pubsub.dc5bec39.js";import"./PlayerNavbar.946bd0d9.js";import"./Steps.e21bff84.js";import"./geometryUtils.0facfb30.js";import"./WidgetsFrame.f8a89a70.js";import"./activeRecord.994400e6.js";import"./url.bc2b44ba.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="b1705eac-1e92-4585-ac6c-91238d60bc65",t._sentryDebugIdIdentifier="sentry-dbid-b1705eac-1e92-4585-ac6c-91238d60bc65")}catch{}})();const F=_({__name:"DashPreview",setup(t){const r=w(),s=g(),m=({id:e,type:o})=>{o==="dash"?(s.push({name:"dashPreview",params:{dashId:e},query:r.query}),h()):s.push({name:"formPreview",params:{formId:e},query:r.query})},f=()=>{var e;!((e=a.value)!=null&&e.path)||s.push(`/_editor/dash/${encodeURIComponent(a.value.path)}`)},{loading:v,result:a,refetch:h}=l(()=>C.get(r.params.dashPath)),{result:i}=l(()=>E.get()),c=D(()=>{if(!a.value||!i.value||!a.value.makeRunnerData(i.value))return null;const e=x(a.value.makeRunnerData(i.value));return e.onRedirect(({url:o,queryParams:y})=>R("preview",s,o,y)),e});return(e,o)=>(n(),b(k,null,[u(v)||!u(a)?(n(),p(B,{key:0,class:"loading",justify:"center"})):d("",!0),c.value?(n(),p(I,{key:1,class:"player",dash:c.value.runnerData,"widgets-with-errors":[],"is-preview":!0,params:u(r).query,"dash-player-service":c.value,onNavigate:m},null,8,["dash","params","dash-player-service"])):d("",!0),u(a)?(n(),p(q,{key:2,onExitFullscreenPreview:f})):d("",!0)],64))}});const X=P(F,[["__scopeId","data-v-1172cf43"]]);export{X as default};
//# sourceMappingURL=DashPreview.a522b1e2.js.map
