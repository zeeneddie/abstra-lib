import{d as _,ey as w,ex as g,H as D,b as n,er as b,u,c,eu as d,bu as k,v as P}from"./registerWidgets.aa38e167.js";import{D as I,m as x}from"./DashPlayer.09294a11.js";import{L as B}from"./CircularLoading.8d6cef6a.js";import{r as R}from"./index.17a2e400.js";import{B as q}from"./BackButton.357c78ee.js";import{a as l}from"./asyncComputed.736869e1.js";import{D as C}from"./dashes.203f0ee2.js";import{W as E}from"./workspaces.b9caef0a.js";import"./executeJs.95ec3d46.js";import"./PlayerNavbar.855c39dd.js";import"./icons.be7a4c47.js";import"./Steps.120e992c.js";import"./Modal.b17add05.js";import"./geometryUtils.bf9cbd0d.js";import"./passwordlessManager.2ca0076a.js";import"./pubsub.b2fc7874.js";import"./storage.6ff6e0f2.js";import"./Passwordless.e011c48c.js";import"./WidgetsFrame.e37076bb.js";import"./activeRecord.81e7fe44.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="820a5eb3-de25-4961-9570-abf8a5c89885",t._sentryDebugIdIdentifier="sentry-dbid-820a5eb3-de25-4961-9570-abf8a5c89885")}catch{}})();const F=_({__name:"DashPreview",setup(t){const r=w(),s=g(),m=({id:e,type:o})=>{o==="dash"?(s.push({name:"dashPreview",params:{dashId:e},query:r.query}),y()):s.push({name:"formPreview",params:{formId:e},query:r.query})},f=()=>{var e;!((e=a.value)!=null&&e.path)||s.push(`/_editor/dash/${encodeURIComponent(a.value.path)}`)},{loading:v,result:a,refetch:y}=l(()=>C.get(r.params.dashPath)),{result:i}=l(()=>E.get()),p=D(()=>{if(!a.value||!i.value||!a.value.makeRunnerData(i.value))return null;const e=x(a.value.makeRunnerData(i.value));return e.onRedirect(({url:o,queryParams:h})=>R("preview",s,o,h)),e});return(e,o)=>(n(),b(k,null,[u(v)||!u(a)?(n(),c(B,{key:0,class:"loading",justify:"center"})):d("",!0),p.value?(n(),c(I,{key:1,class:"player",dash:p.value.runnerData,"widgets-with-errors":[],"is-preview":!0,params:u(r).query,"dash-player-service":p.value,onNavigate:m},null,8,["dash","params","dash-player-service"])):d("",!0),u(a)?(n(),c(q,{key:2,onExitFullscreenPreview:f})):d("",!0)],64))}});const Z=P(F,[["__scopeId","data-v-1172cf43"]]);export{Z as default};
//# sourceMappingURL=DashPreview.dc8226e0.js.map
