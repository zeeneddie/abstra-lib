import{d as _,ez as b,ey as w,H as g,b as n,et as D,u,c as p,ev as c,bf as k,v as P}from"./outputWidgets.045188bd.js";import{D as I,m as x}from"./DashPlayer.339cca2c.js";import{L as B}from"./CircularLoading.a6e7292e.js";import"./index.1da31a2f.js";import{r as R}from"./executeJs.c91974cd.js";import{B as q}from"./BackButton.5147ed81.js";import{a as l}from"./asyncComputed.06133f02.js";import{D as C}from"./dashes.2219b4f6.js";import{W as E}from"./workspaces.4a7fbc34.js";import"./geometryUtils.e27d0dd5.js";import"./runnerData.0191b589.js";import"./index.86c1596a.js";import"./pubsub.a5d83d03.js";import"./WidgetsFrame.9710b204.js";import"./icons.5c1b068e.js";import"./url.8edd0b7b.js";import"./PlayerNavbar.8ee93a77.js";import"./Steps.e1890b8d.js";import"./activeRecord.0c38eaa0.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="d99b199d-bc5b-46b1-903d-8ebf47f71bd4",t._sentryDebugIdIdentifier="sentry-dbid-d99b199d-bc5b-46b1-903d-8ebf47f71bd4")}catch{}})();const F=_({__name:"DashPreview",setup(t){const r=b(),s=w(),m=({id:e,type:o})=>{o==="dash"?(s.push({name:"dashPreview",params:{dashId:e},query:r.query}),y()):s.push({name:"formPreview",params:{formId:e},query:r.query})},f=()=>{var e;!((e=a.value)!=null&&e.path)||s.push(`/_editor/dash/${encodeURIComponent(a.value.path)}`)},{loading:v,result:a,refetch:y}=l(()=>C.get(r.params.dashPath)),{result:i}=l(()=>E.get()),d=g(()=>{if(!a.value||!i.value||!a.value.makeRunnerData(i.value))return null;const e=x(a.value.makeRunnerData(i.value));return e.onRedirect(({url:o,queryParams:h})=>R("preview",s,o,h)),e});return(e,o)=>(n(),D(k,null,[u(v)||!u(a)?(n(),p(B,{key:0,class:"loading",justify:"center"})):c("",!0),d.value?(n(),p(I,{key:1,class:"player",dash:d.value.runnerData,"widgets-with-errors":[],"is-preview":!0,params:u(r).query,"dash-player-service":d.value,onNavigate:m},null,8,["dash","params","dash-player-service"])):c("",!0),u(a)?(n(),p(q,{key:2,onExitFullscreenPreview:f})):c("",!0)],64))}});const Y=P(F,[["__scopeId","data-v-1172cf43"]]);export{Y as default};
//# sourceMappingURL=DashPreview.94fba8ed.js.map
