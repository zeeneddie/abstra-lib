import{d as v,K as y,b as n,c as D,z as r,t as m,D as i,F as k,J as P,H as g,q as w}from"./registerWidgets.69eb7b40.js";import{D as q,n as x}from"./DashPlayer.f3ca917b.js";import{L as B}from"./CircularLoading.3c5929bd.js";import{r as R}from"./index.48b4dec0.js";import{B as I}from"./BackButton.1453295a.js";import{a as l}from"./asyncComputed.5c8fd07f.js";import{D as C}from"./dashes.73a0358c.js";import{W as F}from"./workspaces.9076bb64.js";import"./passwordlessManager.3c745f80.js";import"./runnerData.30c17be6.js";import"./WidgetsFrame.f99c2fa1.js";import"./icons.ea1ef9e9.js";import"./Modal.bf2e2708.js";import"./log.73292939.js";import"./Passwordless.ad2f56fc.js";import"./utils.f91c500c.js";import"./pubsub.a0411919.js";const E=v({__name:"DashPreview",setup(L){const t=P(),s=g(),c=({id:e,type:o})=>{o==="dash"?(s.push({name:"dashPreview",params:{dashId:e},query:t.query}),f()):s.push({name:"form-preview",params:{formId:e},query:t.query})},d=()=>{var e;!((e=a.value)!=null&&e.path)||s.push(`/_editor/dash/${encodeURIComponent(a.value.path)}`)},{loading:h,result:a,refetch:f}=l(()=>C.get(t.params.dashPath)),{result:u}=l(()=>F.get()),p=y(()=>{if(!a.value||!u.value||!a.value.makeRunnerData(u.value))return null;const e=x.create(a.value.makeRunnerData(u.value),!1);return e.onRedirect(({url:o,queryParams:_})=>R(s,o,_)),e});return(e,o)=>(n(),D(k,null,[r(h)||!r(a)?(n(),m(B,{key:0,class:"loading",justify:"center"})):i("",!0),r(p)?(n(),m(q,{key:1,class:"player",dash:r(p).runnerData,"is-preview":!0,params:r(t).query,"dash-player-state":r(p),onNavigate:c},null,8,["dash","params","dash-player-state"])):i("",!0),r(a)?(n(),m(I,{key:2,onExitFullscreenPreview:d})):i("",!0)],64))}});const T=w(E,[["__scopeId","data-v-dde58483"]]);export{T as default};
//# sourceMappingURL=DashPreview.d5ea4969.js.map
