import{d as v,K as D,b as u,c as g,z as t,t as d,D as c,F as w,J as k,H as I,q as P}from"./registerWidgets.eddc32f4.js";import{D as b,n as q}from"./DashPlayer.b5377295.js";import{L as x}from"./CircularLoading.c96bd1c9.js";import{r as B}from"./index.611a11f3.js";import{B as R}from"./BackButton.cc75430c.js";import{a as l}from"./asyncComputed.562c187e.js";import{D as C}from"./dashes.82e3b02c.js";import{W as F}from"./workspaces.afa6238e.js";import"./passwordlessManager.8b97cbcd.js";import"./runnerData.cdcfd570.js";import"./executeJs.808febb8.js";import"./PlayerNavbar.051aa9d4.js";import"./icons.54ab2234.js";import"./WidgetsFrame.b21a0c80.js";import"./colors.bcdf4144.js";import"./Modal.bb1eb9c5.js";import"./log.3b9a52f8.js";import"./Passwordless.a3421c62.js";import"./lottie.6d443700.js";import"./activeRecord.ed4e0294.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[a]="f71661e1-6fa0-4760-89ca-0a02ec227247",s._sentryDebugIdIdentifier="sentry-dbid-f71661e1-6fa0-4760-89ca-0a02ec227247")}catch{}})();const E=v({__name:"DashPreview",setup(s){const a=k(),o=I(),m=({id:e,type:n})=>{n==="dash"?(o.push({name:"dashPreview",params:{dashId:e},query:a.query}),h()):o.push({name:"form-preview",params:{formId:e},query:a.query})},f=()=>{var e;!((e=r.value)!=null&&e.path)||o.push(`/_editor/dash/${encodeURIComponent(r.value.path)}`)},{loading:y,result:r,refetch:h}=l(()=>C.get(a.params.dashPath)),{result:i}=l(()=>F.get()),p=D(()=>{if(!r.value||!i.value||!r.value.makeRunnerData(i.value))return null;const e=q.create(r.value.makeRunnerData(i.value),!1);return e.onRedirect(({url:n,queryParams:_})=>B(o,n,_)),e});return(e,n)=>(u(),g(w,null,[t(y)||!t(r)?(u(),d(x,{key:0,class:"loading",justify:"center"})):c("",!0),t(p)?(u(),d(b,{key:1,class:"player",dash:t(p).runnerData,"is-preview":!0,params:t(a).query,"dash-player-state":t(p),onNavigate:m},null,8,["dash","params","dash-player-state"])):c("",!0),t(r)?(u(),d(R,{key:2,onExitFullscreenPreview:f})):c("",!0)],64))}});const Z=P(E,[["__scopeId","data-v-dde58483"]]);export{Z as default};
//# sourceMappingURL=DashPreview.7914ff71.js.map