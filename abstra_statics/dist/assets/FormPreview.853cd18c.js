import{d as g,u as x,r as F,J as R,b as a,c as n,y as e,q as B,e as i,v as b,G as q,H as E,p as L}from"./registerWidgets.990552e9.js";import{L as C}from"./CircularLoading.b7a09562.js";import{E as I}from"./Error.ecbd86d2.js";import{F as N,R as H}from"./broker.1fe1c683.js";import{B as M}from"./BackButton.929bf132.js";import{a as f}from"./asyncComputed.5a7faf96.js";import{F as V}from"./forms.7fa52191.js";import{W}from"./workspaces.741b6616.js";import"./passwordlessManager.43e7eeb6.js";import"./icons.d4e872e2.js";import"./Passwordless.62d0ea6a.js";import"./WidgetsFrame.b07f4485.js";import"./colors.d7a0ca86.js";import"./index.c13cb307.js";import"./Modal.180a3c02.js";import"./log.90d86245.js";import"./activeRecord.57c6bf02.js";const D={class:"page"},G={key:1,class:"error"},J={key:2,style:{width:"100%",height:"100%",display:"flex"}},S={style:{width:"100%",height:"100%",display:"flex"}},U=g({__name:"FormPreview",setup($){const s=q(),r=E(),t=x({started:!1}),m=F(null),{loading:_,result:c,error:u,refetch:p}=f(()=>V.get(r.params.formPath)),{result:d}=f(()=>W.get()),h=R(()=>H.create({isLocal:!1,formPath:r.params.formPath,isPreview:!0})),v=async()=>{var o;if(!t.started){(o=m.value)==null||o.run();return}t.started=!1},y=({path:o,type:l})=>{l==="dash"?s.push({name:"dashPreview",params:{dashPath:o},query:r.query}):(s.push({name:"form-preview",params:{formPath:o},query:r.query}),p())},k=()=>{s.push(`/_editor/form/${encodeURIComponent(r.params.formPath)}`)},w=()=>{t.started=!0},P=()=>{t.started=!1};return(o,l)=>(a(),n("div",D,[e(_)||!e(c)||!e(d)?(a(),B(C,{key:0})):e(u)?(a(),n("div",G,[i(I,{error:e(u),onReload:e(p)},null,8,["error","onReload"])])):(a(),n("main",J,[b("div",S,[i(N,{ref_key:"runner",ref:m,form:e(c).makeRunnerData(e(d)),params:e(r).query,"is-preview":!0,"enable-auto-focus":!0,broker:e(h),style:{height:"unset",flex:1,overflow:"hidden"},onNavigate:y,onLogout:v,onExit:P,onStart:w},null,8,["form","params","broker"]),i(M,{onExitFullscreenPreview:k})])]))]))}});const ie=L(U,[["__scopeId","data-v-f7c2ba13"]]);export{ie as default};
//# sourceMappingURL=FormPreview.853cd18c.js.map