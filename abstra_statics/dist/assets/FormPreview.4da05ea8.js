import{d as P,v as x,r as F,K as R,b as n,c as i,z as e,t as B,e as c,x as I,H as q,J as E,q as D}from"./registerWidgets.29e41a54.js";import{L}from"./CircularLoading.0d1cd4f5.js";import{E as C}from"./Error.77558e1e.js";import{F as N,R as H}from"./broker.1aa2622a.js";import{B as M}from"./BackButton.cbcf7cc6.js";import{a as _}from"./asyncComputed.0126d7e4.js";import{F as V}from"./forms.fa397afd.js";import{W}from"./workspaces.316f0568.js";import"./passwordlessManager.88f105f1.js";import"./icons.b931f659.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.c98c9ec2.js";import"./Passwordless.6b642399.js";import"./executeJs.7cf3dd48.js";import"./PlayerNavbar.23812b1d.js";import"./index.27b8c9c1.js";import"./WidgetsFrame.a0cdacc5.js";import"./colors.a128ac65.js";import"./Modal.7746640d.js";import"./log.3f963c6d.js";import"./activeRecord.d63d0be1.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="c6071d68-5301-44e6-98f6-35fedbeacc54",s._sentryDebugIdIdentifier="sentry-dbid-c6071d68-5301-44e6-98f6-35fedbeacc54")}catch{}})();const z={class:"page"},J={key:1,class:"error"},K={key:2,style:{width:"100%",height:"100%",display:"flex"}},S={style:{width:"100%",height:"100%",display:"flex"}},U=P({__name:"FormPreview",setup(s){const t=q(),r=E(),a=x({started:!1}),d=F(null),{loading:h,result:m,error:u,refetch:f}=_(()=>V.get(r.params.formPath)),{result:p}=_(()=>W.get()),y=R(()=>H.create({isLocal:!1,formPath:r.params.formPath,isPreview:!0})),v=async()=>{var o;if(!a.started){(o=d.value)==null||o.run();return}a.started=!1},g=({path:o,type:l})=>{l==="dash"?t.push({name:"dashPreview",params:{dashPath:o},query:r.query}):(t.push({name:"form-preview",params:{formPath:o},query:r.query}),f())},w=()=>{t.push(`/_editor/form/${encodeURIComponent(r.params.formPath)}`)},b=()=>{a.started=!0},k=()=>{a.started=!1};return(o,l)=>(n(),i("div",z,[e(h)||!e(m)||!e(p)?(n(),B(L,{key:0})):e(u)?(n(),i("div",J,[c(C,{error:e(u),onReload:e(f)},null,8,["error","onReload"])])):(n(),i("main",K,[I("div",S,[c(N,{ref_key:"runner",ref:d,form:e(m).makeRunnerData(e(p)),params:e(r).query,"is-preview":!0,"enable-auto-focus":!0,broker:e(y),style:{height:"unset",flex:1,overflow:"hidden"},onNavigate:g,onLogout:v,onExit:k,onStart:b},null,8,["form","params","broker"]),c(M,{onExitFullscreenPreview:w})])]))]))}});const me=D(U,[["__scopeId","data-v-f7c2ba13"]]);export{me as default};
//# sourceMappingURL=FormPreview.4da05ea8.js.map