import{d as _,ez as b,ey as w,G as g,b as n,et as D,u,c as d,ev as l,b8 as k,t as P}from"./outputWidgets.24bc53e6.js";import{D as I,m as x}from"./index.8663f796.js";import{L as B}from"./CircularLoading.0071e96c.js";import{r as R}from"./executeJs.0542559e.js";import{B as q}from"./BackButton.40c73615.js";import{a as c}from"./asyncComputed.e4b96939.js";import{D as C}from"./dashes.4af1e6b4.js";import{W as E}from"./workspaces.81cdf281.js";import"./WidgetsFrame.d0ec067c.js";import"./icons.346b8028.js";import"./geometryUtils.0837d493.js";import"./runnerData.3021bf76.js";import"./index.0389f257.js";import"./pubsub.6b8c4d65.js";import"./url.12ca99c5.js";import"./PlayerNavbar.46e6d61e.js";import"./Steps.4f8080d9.js";import"./activeRecord.7f48ce0d.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="f3999a20-6f2f-431b-bd99-bf24b8e97b7b",t._sentryDebugIdIdentifier="sentry-dbid-f3999a20-6f2f-431b-bd99-bf24b8e97b7b")}catch{}})();const F=_({__name:"DashPreview",setup(t){const r=b(),s=w(),m=({id:e,type:o})=>{o==="dash"?(s.push({name:"dashPreview",params:{dashId:e},query:r.query}),y()):s.push({name:"formPreview",params:{formId:e},query:r.query})},f=()=>{var e;!((e=a.value)!=null&&e.path)||s.push(`/_editor/dash/${encodeURIComponent(a.value.path)}`)},{loading:v,result:a,refetch:y}=c(()=>C.get(r.params.dashPath)),{result:i}=c(()=>E.get()),p=g(()=>{if(!a.value||!i.value||!a.value.makeRunnerData(i.value))return null;const e=x(a.value.makeRunnerData(i.value));return e.onRedirect(({url:o,queryParams:h})=>R("preview",s,o,h)),e});return(e,o)=>(n(),D(k,null,[u(v)||!u(a)?(n(),d(B,{key:0,class:"loading",justify:"center"})):l("",!0),p.value?(n(),d(I,{key:1,class:"player",dash:p.value.runnerData,"widgets-with-errors":[],"is-preview":!0,params:u(r).query,"dash-player-service":p.value,onNavigate:m},null,8,["dash","params","dash-player-service"])):l("",!0),u(a)?(n(),d(q,{key:2,onExitFullscreenPreview:f})):l("",!0)],64))}});const X=P(F,[["__scopeId","data-v-1172cf43"]]);export{X as default};
//# sourceMappingURL=DashPreview.11ab46dc.js.map
