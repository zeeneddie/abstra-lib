import{d as v,J as y,b as n,c as k,y as r,q as m,B as i,F as D,H as P,G as g,p as w}from"./registerWidgets.4cc86716.js";import{D as B,n as q}from"./DashPlayer.41f73c81.js";import{L as x}from"./CircularLoading.249aa989.js";import{r as R}from"./index.a6f97cb6.js";import{B as I}from"./BackButton.6841f96b.js";import{a as l}from"./asyncComputed.f9d446a7.js";import{D as C}from"./dashes.c5752781.js";import{W as F}from"./workspaces.741b6616.js";import"./passwordlessManager.d432fb48.js";import"./runnerData.65fd37db.js";import"./executeJs.725cb8c2.js";import"./PlayerNavbar.62e8a14d.js";import"./icons.d4e872e2.js";import"./WidgetsFrame.8a984b59.js";import"./colors.267ec6f7.js";import"./Modal.7d907bdb.js";import"./log.30671484.js";import"./Passwordless.42b443a5.js";import"./activeRecord.57c6bf02.js";const E=v({__name:"DashPreview",setup(L){const t=P(),s=g(),c=({id:e,type:o})=>{o==="dash"?(s.push({name:"dashPreview",params:{dashId:e},query:t.query}),f()):s.push({name:"form-preview",params:{formId:e},query:t.query})},d=()=>{var e;!((e=a.value)!=null&&e.path)||s.push(`/_editor/dash/${encodeURIComponent(a.value.path)}`)},{loading:h,result:a,refetch:f}=l(()=>C.get(t.params.dashPath)),{result:u}=l(()=>F.get()),p=y(()=>{if(!a.value||!u.value||!a.value.makeRunnerData(u.value))return null;const e=q.create(a.value.makeRunnerData(u.value),!1);return e.onRedirect(({url:o,queryParams:_})=>R(s,o,_)),e});return(e,o)=>(n(),k(D,null,[r(h)||!r(a)?(n(),m(x,{key:0,class:"loading",justify:"center"})):i("",!0),r(p)?(n(),m(B,{key:1,class:"player",dash:r(p).runnerData,"is-preview":!0,params:r(t).query,"dash-player-state":r(p),onNavigate:c},null,8,["dash","params","dash-player-state"])):i("",!0),r(a)?(n(),m(I,{key:2,onExitFullscreenPreview:d})):i("",!0)],64))}});const Y=w(E,[["__scopeId","data-v-dde58483"]]);export{Y as default};
//# sourceMappingURL=DashPreview.c04384f4.js.map
