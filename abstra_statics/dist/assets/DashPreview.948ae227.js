import{d as _,ez as b,ey as w,H as g,b as n,et as D,u,c as d,ev as p,bf as k,v as P}from"./outputWidgets.4420c31f.js";import{D as I,m as x}from"./DashPlayer.9884dce2.js";import{L as B}from"./CircularLoading.736211a4.js";import"./index.1ba1c343.js";import{r as R}from"./executeJs.9c0a2edd.js";import{B as q}from"./BackButton.b68fcb86.js";import{a as l}from"./asyncComputed.937eb3b8.js";import{D as C}from"./dashes.26916b4c.js";import{W as E}from"./workspaces.4657072e.js";import"./geometryUtils.f9d4f29d.js";import"./runnerData.22e78d3e.js";import"./index.fed8f141.js";import"./pubsub.1ac087cf.js";import"./WidgetsFrame.806347e9.js";import"./icons.2ee60219.js";import"./url.14f2bdd6.js";import"./PlayerNavbar.76b70cf2.js";import"./Steps.1be5864d.js";import"./activeRecord.a89b1253.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="b9b2b899-f11c-4bb8-ad67-cee80a6aed44",t._sentryDebugIdIdentifier="sentry-dbid-b9b2b899-f11c-4bb8-ad67-cee80a6aed44")}catch{}})();const F=_({__name:"DashPreview",setup(t){const r=b(),s=w(),m=({id:e,type:o})=>{o==="dash"?(s.push({name:"dashPreview",params:{dashId:e},query:r.query}),y()):s.push({name:"formPreview",params:{formId:e},query:r.query})},f=()=>{var e;!((e=a.value)!=null&&e.path)||s.push(`/_editor/dash/${encodeURIComponent(a.value.path)}`)},{loading:v,result:a,refetch:y}=l(()=>C.get(r.params.dashPath)),{result:i}=l(()=>E.get()),c=g(()=>{if(!a.value||!i.value||!a.value.makeRunnerData(i.value))return null;const e=x(a.value.makeRunnerData(i.value));return e.onRedirect(({url:o,queryParams:h})=>R("preview",s,o,h)),e});return(e,o)=>(n(),D(k,null,[u(v)||!u(a)?(n(),d(B,{key:0,class:"loading",justify:"center"})):p("",!0),c.value?(n(),d(I,{key:1,class:"player",dash:c.value.runnerData,"widgets-with-errors":[],"is-preview":!0,params:u(r).query,"dash-player-service":c.value,onNavigate:m},null,8,["dash","params","dash-player-service"])):p("",!0),u(a)?(n(),d(q,{key:2,onExitFullscreenPreview:f})):p("",!0)],64))}});const Y=P(F,[["__scopeId","data-v-1172cf43"]]);export{Y as default};
//# sourceMappingURL=DashPreview.948ae227.js.map
