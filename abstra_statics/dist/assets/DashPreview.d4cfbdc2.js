import{d as _,ez as w,ey as g,H as D,b as n,et as k,u,c as p,ev as d,bf as P,v as I}from"./outputWidgets.a4629ff8.js";import{D as b,m as x}from"./index.97c2f464.js";import{L as B}from"./CircularLoading.79e4a789.js";import"./index.339c7421.js";import{r as R}from"./executeJs.559e86f5.js";import{B as q}from"./BackButton.c75d8af0.js";import{a as l}from"./asyncComputed.fb8b9ba6.js";import{D as C}from"./dashes.cd571f84.js";import{W as E}from"./workspaces.6fdb4cab.js";import"./WidgetsFrame.893465cb.js";import"./icons.73bff2ab.js";import"./geometryUtils.6cff4208.js";import"./runnerData.83399038.js";import"./index.cecf191d.js";import"./pubsub.25dc8c41.js";import"./url.d6a620b9.js";import"./PlayerNavbar.403ee6e8.js";import"./Steps.dce825a5.js";import"./activeRecord.a2b7d343.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="5f71297a-ade0-4c48-9567-ca63101380aa",t._sentryDebugIdIdentifier="sentry-dbid-5f71297a-ade0-4c48-9567-ca63101380aa")}catch{}})();const F=_({__name:"DashPreview",setup(t){const a=w(),s=g(),m=({id:e,type:o})=>{o==="dash"?(s.push({name:"dashPreview",params:{dashId:e},query:a.query}),y()):s.push({name:"formPreview",params:{formId:e},query:a.query})},f=()=>{var e;!((e=r.value)!=null&&e.path)||s.push(`/_editor/dash/${encodeURIComponent(r.value.path)}`)},{loading:v,result:r,refetch:y}=l(()=>C.get(a.params.dashPath)),{result:i}=l(()=>E.get()),c=D(()=>{if(!r.value||!i.value||!r.value.makeRunnerData(i.value))return null;const e=x(r.value.makeRunnerData(i.value));return e.onRedirect(({url:o,queryParams:h})=>R("preview",s,o,h)),e});return(e,o)=>(n(),k(P,null,[u(v)||!u(r)?(n(),p(B,{key:0,class:"loading",justify:"center"})):d("",!0),c.value?(n(),p(b,{key:1,class:"player",dash:c.value.runnerData,"widgets-with-errors":[],"is-preview":!0,params:u(a).query,"dash-player-service":c.value,onNavigate:m},null,8,["dash","params","dash-player-service"])):d("",!0),u(r)?(n(),p(q,{key:2,onExitFullscreenPreview:f})):d("",!0)],64))}});const Y=I(F,[["__scopeId","data-v-1172cf43"]]);export{Y as default};
//# sourceMappingURL=DashPreview.d4cfbdc2.js.map
