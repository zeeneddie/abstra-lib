import{d as g,v as x,r as F,K as R,b as a,c as n,z as e,t as B,e as i,x as b,H as q,J as E,q as L}from"./registerWidgets.ba12cd54.js";import{L as C}from"./CircularLoading.79e96d11.js";import{E as I}from"./Error.8bdf5cf7.js";import{F as N,R as H}from"./broker.8a22d701.js";import{B as M}from"./BackButton.b1ae22c8.js";import{a as f}from"./asyncComputed.3e2c3bcb.js";import{F as V}from"./forms.a8d20ba7.js";import{W}from"./workspaces.32af92db.js";import"./passwordlessManager.a5941d42.js";import"./icons.ea1ef9e9.js";import"./Passwordless.ada2efe6.js";import"./WidgetsFrame.6a2a8a84.js";import"./index.a464e9f0.js";import"./Modal.9cffe8c6.js";import"./log.b865b541.js";import"./utils.f91c500c.js";import"./pubsub.a0411919.js";const z={class:"page"},D={key:1,class:"error"},J={key:2,style:{width:"100%",height:"100%",display:"flex"}},K={style:{width:"100%",height:"100%",display:"flex"}},S=g({__name:"FormPreview",setup(U){const s=q(),r=E(),o=x({started:!1}),m=F(null),{loading:_,result:c,error:u,refetch:p}=f(()=>V.get(r.params.formPath)),{result:d}=f(()=>W.get()),h=R(()=>H.create({isLocal:!1,formPath:r.params.formPath,isPreview:!0})),v=async()=>{var t;if(!o.started){(t=m.value)==null||t.run();return}o.started=!1},y=({path:t,type:l})=>{l==="dash"?s.push({name:"dashPreview",params:{dashPath:t},query:r.query}):(s.push({name:"form-preview",params:{formPath:t},query:r.query}),p())},k=()=>{s.push(`/_editor/form/${encodeURIComponent(r.params.formPath)}`)},w=()=>{o.started=!0},P=()=>{o.started=!1};return(t,l)=>(a(),n("div",z,[e(_)||!e(c)||!e(d)?(a(),B(C,{key:0})):e(u)?(a(),n("div",D,[i(I,{error:e(u),onReload:e(p)},null,8,["error","onReload"])])):(a(),n("main",J,[b("div",K,[i(N,{ref_key:"runner",ref:m,form:e(c).makeRunnerData(e(d)),params:e(r).query,"is-preview":!0,"enable-auto-focus":!0,broker:e(h),style:{height:"unset",flex:1,overflow:"hidden"},onNavigate:y,onLogout:v,onExit:P,onStart:w},null,8,["form","params","broker"]),i(M,{onExitFullscreenPreview:k})])]))]))}});const ie=L(S,[["__scopeId","data-v-f7c2ba13"]]);export{ie as default};
//# sourceMappingURL=FormPreview.e4db9f33.js.map
