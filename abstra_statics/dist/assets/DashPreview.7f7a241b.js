import{d as v,K as b,b as u,c as D,z as t,t as d,D as l,F as g,J as w,H as k,q as I}from"./registerWidgets.553de467.js";import{D as P,n as q}from"./DashPlayer.98e9a361.js";import{L as x}from"./CircularLoading.01ebf7ca.js";import{r as B}from"./index.1c59a5f6.js";import{B as R}from"./BackButton.230539cd.js";import{a as m}from"./asyncComputed.2769eba5.js";import{D as C}from"./dashes.563f0649.js";import{W as F}from"./workspaces.4c56f4e3.js";import"./passwordlessManager.b79493a6.js";import"./runnerData.9bff4dbf.js";import"./executeJs.0d5b0965.js";import"./PlayerNavbar.1351341e.js";import"./icons.012820f9.js";import"./WidgetsFrame.f5cb9e50.js";import"./colors.ec843c1d.js";import"./Modal.3622aa4e.js";import"./log.85118ab9.js";import"./Passwordless.84c9704e.js";import"./lottie.433e3d0f.js";import"./activeRecord.5283a3fc.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[a]="c089e1e8-2a25-4bfa-998f-b328b79ba921",s._sentryDebugIdIdentifier="sentry-dbid-c089e1e8-2a25-4bfa-998f-b328b79ba921")}catch{}})();const E=v({__name:"DashPreview",setup(s){const a=w(),o=k(),c=({id:e,type:n})=>{n==="dash"?(o.push({name:"dashPreview",params:{dashId:e},query:a.query}),h()):o.push({name:"form-preview",params:{formId:e},query:a.query})},f=()=>{var e;!((e=r.value)!=null&&e.path)||o.push(`/_editor/dash/${encodeURIComponent(r.value.path)}`)},{loading:y,result:r,refetch:h}=m(()=>C.get(a.params.dashPath)),{result:i}=m(()=>F.get()),p=b(()=>{if(!r.value||!i.value||!r.value.makeRunnerData(i.value))return null;const e=q.create(r.value.makeRunnerData(i.value),!1);return e.onRedirect(({url:n,queryParams:_})=>B(o,n,_)),e});return(e,n)=>(u(),D(g,null,[t(y)||!t(r)?(u(),d(x,{key:0,class:"loading",justify:"center"})):l("",!0),t(p)?(u(),d(P,{key:1,class:"player",dash:t(p).runnerData,"is-preview":!0,params:t(a).query,"dash-player-state":t(p),onNavigate:c},null,8,["dash","params","dash-player-state"])):l("",!0),t(r)?(u(),d(R,{key:2,onExitFullscreenPreview:f})):l("",!0)],64))}});const Z=I(E,[["__scopeId","data-v-dde58483"]]);export{Z as default};
//# sourceMappingURL=DashPreview.7f7a241b.js.map