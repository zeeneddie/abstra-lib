import{d as x,H as P,J as F,v as R,r as B,K as I,b as n,c as i,z as e,t as q,e as d,x as E,q as D}from"./registerWidgets.f519f117.js";import{L as C}from"./CircularLoading.87f0c18e.js";import{E as L}from"./Error.5a61b9b1.js";import{F as N,R as H}from"./broker.2e938ec2.js";import{B as M}from"./BackButton.5ed0229f.js";import{a as _}from"./asyncComputed.6507680c.js";import{F as V}from"./forms.5eaa05c8.js";import{W}from"./workspaces.d7c3d66c.js";import"./lottie.e76b6916.js";import"./passwordlessManager.f1e6220e.js";import"./pubsub.6c98d249.js";import"./Passwordless.81ef7509.js";import"./icons.b79e444a.js";import"./executeJs.06927bac.js";import"./PlayerNavbar.b46a648a.js";import"./index.0e9d49f3.js";import"./Steps.f7de1d8e.js";import"./Modal.a7daa1d6.js";import"./WidgetsFrame.682ffaa9.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.10e49e78.js";import"./activeRecord.680d32f2.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="84cb6461-2208-4a01-8e24-6c6afbd2fbc4",a._sentryDebugIdIdentifier="sentry-dbid-84cb6461-2208-4a01-8e24-6c6afbd2fbc4")}catch{}})();const z={class:"page"},J={key:1,class:"error"},K={key:2,style:{width:"100%",height:"100%",display:"flex"}},S={style:{width:"100%",height:"100%",display:"flex"}},U=x({__name:"FormPreview",setup(a){const t=P(),r=F(),s=R({started:!1}),m=B(null),{loading:h,result:c,error:u,refetch:p}=_(()=>V.get(r.params.formPath)),{result:f}=_(()=>W.get()),y=I(()=>H.create({formPath:r.params.formPath})),v=async()=>{var o;if(!s.started){(o=m.value)==null||o.run();return}s.started=!1},b=({path:o,type:l})=>{l==="dash"?t.push({name:"dashPreview",params:{dashPath:o},query:r.query}):(t.push({name:"form-preview",params:{formPath:o},query:r.query}),p())},g=()=>{t.push(`/_editor/form/${encodeURIComponent(r.params.formPath)}`)},w=()=>{s.started=!0},k=()=>{s.started=!1};return(o,l)=>(n(),i("div",z,[e(h)||!e(c)||!e(f)?(n(),q(C,{key:0})):e(u)?(n(),i("div",J,[d(L,{error:e(u),onReload:e(p)},null,8,["error","onReload"])])):(n(),i("main",K,[E("div",S,[d(N,{ref_key:"runner",ref:m,form:e(c).makeRunnerData(e(f)),params:e(r).query,"is-preview":!0,"enable-auto-focus":!0,broker:y.value,style:{height:"unset",flex:1,overflow:"hidden"},onNavigate:b,onLogout:v,onExit:k,onStart:w},null,8,["form","params","broker"]),d(M,{onExitFullscreenPreview:g})])]))]))}});const ue=D(U,[["__scopeId","data-v-2cdbdd7a"]]);export{ue as default};
//# sourceMappingURL=FormPreview.0bdb365e.js.map
