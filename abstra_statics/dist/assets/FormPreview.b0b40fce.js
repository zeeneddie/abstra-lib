import{d as g,u as x,r as F,G as B,b as a,c as n,y as e,t as R,e as i,v as q,K as b,L as E,q as L}from"./registerWidgets.fff064a1.js";import{a as f,L as N}from"./CircularLoading.59d7fd3d.js";import{E as C}from"./Error.de2ae46c.js";import{F as I,R as M}from"./broker.64603716.js";import{B as V}from"./BackButton.c350c17f.js";import{F as W}from"./forms.7bc6baea.js";import{W as D}from"./workspaces.32af92db.js";import"./WidgetsFrame.cebd6d3d.js";import"./icons.907f45d7.js";import"./index.314cf40a.js";import"./Modal.2ceba592.js";import"./utils.3371dfe5.js";const G={class:"page"},H={key:1,class:"error"},K={key:2,style:{width:"100%",height:"100%",display:"flex"}},S={style:{width:"100%",height:"100%",display:"flex"}},$=g({__name:"FormPreview",setup(j){const s=b(),r=E(),o=x({started:!1}),m=F(null),{loading:_,result:c,error:u,refetch:l}=f(()=>W.get(r.params.formPath)),{result:d}=f(()=>D.get()),h=B(()=>M.create({isLocal:!1,formPath:r.params.formPath,isPreview:!0})),v=async()=>{var t;if(!o.started){(t=m.value)==null||t.run();return}o.started=!1},y=({path:t,type:p})=>{p==="dash"?s.push({name:"dashPreview",params:{dashPath:t},query:r.query}):(s.push({name:"form-preview",params:{formPath:t},query:r.query}),l())},k=()=>{s.push(`/_editor/form/${r.params.formPath}`)},w=()=>{o.started=!0},P=()=>{o.started=!1};return(t,p)=>(a(),n("div",G,[e(_)||!e(c)||!e(d)?(a(),R(N,{key:0})):e(u)?(a(),n("div",H,[i(C,{error:e(u),onReload:e(l)},null,8,["error","onReload"])])):(a(),n("main",K,[q("div",S,[i(I,{ref_key:"runner",ref:m,form:e(c).makeRunnerData(e(d)),params:e(r).query,"is-preview":!0,"enable-auto-focus":!0,broker:e(h),style:{height:"unset",flex:1,overflow:"hidden"},onNavigate:y,onLogout:v,onExit:P,onStart:w},null,8,["form","params","broker"]),i(V,{onExitFullscreenPreview:k})])]))]))}});const te=L($,[["__scopeId","data-v-0a04a406"]]);export{te as default};
//# sourceMappingURL=FormPreview.b0b40fce.js.map