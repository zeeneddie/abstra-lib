import{d as _,K as b,b as i,c as g,z as t,t as d,D as c,F as w,J as D,H as k,q as I}from"./registerWidgets.c5dd482d.js";import{D as P,m as q}from"./DashPlayer.8655e0d9.js";import{L as x}from"./CircularLoading.46106805.js";import{r as B}from"./index.756eaf41.js";import{B as R}from"./BackButton.288356aa.js";import{a as m}from"./asyncComputed.ae36df0d.js";import{D as C}from"./dashes.3508aa35.js";import{W as F}from"./workspaces.2a647ddf.js";import"./runnerData.dbeb802a.js";import"./executeJs.f7c6d11e.js";import"./PlayerNavbar.f836d652.js";import"./icons.7e192558.js";import"./WidgetsFrame.6bd33770.js";import"./colors.ea8dacf6.js";import"./Modal.8cf158fb.js";import"./passwordlessManager.52cc41e1.js";import"./pubsub.c4034e7f.js";import"./Passwordless.3b840492.js";import"./lottie.7deefc1c.js";import"./activeRecord.28e1a66e.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[r]="8e1e8107-ebcb-4f85-b191-5a0326b1fe5b",s._sentryDebugIdIdentifier="sentry-dbid-8e1e8107-ebcb-4f85-b191-5a0326b1fe5b")}catch{}})();const E=_({__name:"DashPreview",setup(s){const r=D(),o=k(),l=({id:e,type:n})=>{n==="dash"?(o.push({name:"dashPreview",params:{dashId:e},query:r.query}),y()):o.push({name:"form-preview",params:{formId:e},query:r.query})},f=()=>{var e;!((e=a.value)!=null&&e.path)||o.push(`/_editor/dash/${encodeURIComponent(a.value.path)}`)},{loading:h,result:a,refetch:y}=m(()=>C.get(r.params.dashPath)),{result:u}=m(()=>F.get()),p=b(()=>{if(!a.value||!u.value||!a.value.makeRunnerData(u.value))return null;const e=q(a.value.makeRunnerData(u.value));return e.onRedirect(({url:n,queryParams:v})=>B(o,n,v)),e});return(e,n)=>(i(),g(w,null,[t(h)||!t(a)?(i(),d(x,{key:0,class:"loading",justify:"center"})):c("",!0),t(p)?(i(),d(P,{key:1,class:"player",dash:t(p).runnerData,"widgets-with-errors":[],"is-preview":!0,params:t(r).query,"dash-player-service":t(p),onNavigate:l},null,8,["dash","params","dash-player-service"])):c("",!0),t(a)?(i(),d(R,{key:2,onExitFullscreenPreview:f})):c("",!0)],64))}});const Z=I(E,[["__scopeId","data-v-7fc555dd"]]);export{Z as default};
//# sourceMappingURL=DashPreview.de6fcc09.js.map
