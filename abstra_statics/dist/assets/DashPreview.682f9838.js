import{d as _,K as g,b as i,c as w,z as t,t as p,D as d,F as D,J as b,H as k,q as I}from"./registerWidgets.bac2b379.js";import{D as P,m as q}from"./DashPlayer.cd1441b6.js";import{L as x}from"./CircularLoading.74f072be.js";import{r as B}from"./index.bd2837df.js";import{B as R}from"./BackButton.63a0fe3e.js";import{a as m}from"./asyncComputed.83599e4d.js";import{D as C}from"./dashes.6eb19f10.js";import{W as F}from"./workspaces.593dd5bd.js";import"./runnerData.6ce58983.js";import"./executeJs.72112c3c.js";import"./PlayerNavbar.54a21d92.js";import"./icons.abc13ad2.js";import"./WidgetsFrame.9d591ca3.js";import"./colors.43e92ef3.js";import"./Modal.de61d72b.js";import"./passwordlessManager.5719ed30.js";import"./pubsub.bffb362a.js";import"./Passwordless.38154f47.js";import"./lottie.ba581d78.js";import"./activeRecord.6456961c.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[r]="aa109f2f-b8ce-4481-9f06-a66e54b64b6c",s._sentryDebugIdIdentifier="sentry-dbid-aa109f2f-b8ce-4481-9f06-a66e54b64b6c")}catch{}})();const E=_({__name:"DashPreview",setup(s){const r=b(),o=k(),l=({id:e,type:n})=>{n==="dash"?(o.push({name:"dashPreview",params:{dashId:e},query:r.query}),y()):o.push({name:"form-preview",params:{formId:e},query:r.query})},f=()=>{var e;!((e=a.value)!=null&&e.path)||o.push(`/_editor/dash/${encodeURIComponent(a.value.path)}`)},{loading:h,result:a,refetch:y}=m(()=>C.get(r.params.dashPath)),{result:u}=m(()=>F.get()),c=g(()=>{if(!a.value||!u.value||!a.value.makeRunnerData(u.value))return null;const e=q(a.value.makeRunnerData(u.value));return e.onRedirect(({url:n,queryParams:v})=>B(o,n,v)),e});return(e,n)=>(i(),w(D,null,[t(h)||!t(a)?(i(),p(x,{key:0,class:"loading",justify:"center"})):d("",!0),t(c)?(i(),p(P,{key:1,class:"player",dash:t(c).runnerData,"widgets-with-errors":[],"is-preview":!0,params:t(r).query,"dash-player-service":t(c),onNavigate:l},null,8,["dash","params","dash-player-service"])):d("",!0),t(a)?(i(),p(R,{key:2,onExitFullscreenPreview:f})):d("",!0)],64))}});const Z=I(E,[["__scopeId","data-v-7fc555dd"]]);export{Z as default};
//# sourceMappingURL=DashPreview.682f9838.js.map
