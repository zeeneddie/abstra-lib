import{d as v,K as D,b as u,c as g,z as t,t as d,D as c,F as w,J as k,H as I,q as P}from"./registerWidgets.6f0bbac2.js";import{D as b,n as q}from"./DashPlayer.b15f40cf.js";import{L as x}from"./CircularLoading.64e0c9cf.js";import{r as B}from"./index.c2ce3dd4.js";import{B as R}from"./BackButton.831b73cf.js";import{a as l}from"./asyncComputed.e83909df.js";import{D as C}from"./dashes.bdb53fcf.js";import{W as F}from"./workspaces.64e25f3a.js";import"./passwordlessManager.643e43e8.js";import"./runnerData.48e4b7b9.js";import"./executeJs.5ccd414f.js";import"./PlayerNavbar.e622520f.js";import"./icons.33d01da0.js";import"./WidgetsFrame.da1e36e0.js";import"./colors.44698f96.js";import"./Modal.4278a303.js";import"./log.e20e536c.js";import"./Passwordless.8d7065c4.js";import"./lottie.68b1efe0.js";import"./activeRecord.9b68dfe2.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[a]="62276a82-842c-4f1a-91c4-63267026640c",s._sentryDebugIdIdentifier="sentry-dbid-62276a82-842c-4f1a-91c4-63267026640c")}catch{}})();const E=v({__name:"DashPreview",setup(s){const a=k(),o=I(),m=({id:e,type:n})=>{n==="dash"?(o.push({name:"dashPreview",params:{dashId:e},query:a.query}),h()):o.push({name:"form-preview",params:{formId:e},query:a.query})},f=()=>{var e;!((e=r.value)!=null&&e.path)||o.push(`/_editor/dash/${encodeURIComponent(r.value.path)}`)},{loading:y,result:r,refetch:h}=l(()=>C.get(a.params.dashPath)),{result:i}=l(()=>F.get()),p=D(()=>{if(!r.value||!i.value||!r.value.makeRunnerData(i.value))return null;const e=q.create(r.value.makeRunnerData(i.value),!1);return e.onRedirect(({url:n,queryParams:_})=>B(o,n,_)),e});return(e,n)=>(u(),g(w,null,[t(y)||!t(r)?(u(),d(x,{key:0,class:"loading",justify:"center"})):c("",!0),t(p)?(u(),d(b,{key:1,class:"player",dash:t(p).runnerData,"is-preview":!0,params:t(a).query,"dash-player-state":t(p),onNavigate:m},null,8,["dash","params","dash-player-state"])):c("",!0),t(r)?(u(),d(R,{key:2,onExitFullscreenPreview:f})):c("",!0)],64))}});const Z=P(E,[["__scopeId","data-v-dde58483"]]);export{Z as default};
//# sourceMappingURL=DashPreview.23f11566.js.map