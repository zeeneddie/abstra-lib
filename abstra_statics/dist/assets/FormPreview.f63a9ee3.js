import{d as x,ex as F,ey as R,E as B,r as I,F as E,b as i,c as d,bu as e,u as q,e as m,er as D,t as C}from"./registerWidgets.d68712f0.js";import{L}from"./CircularLoading.3dc537f5.js";import{E as N}from"./Error.0039a9f1.js";import{F as M,R as V}from"./broker.b05c3be4.js";import{B as W}from"./BackButton.2f4b66ab.js";import{a as _}from"./asyncComputed.f9ea598c.js";import{F as H}from"./forms.23376eb8.js";import{W as S}from"./workspaces.8b868ba2.js";import{r as U}from"./index.ba76e763.js";import"./lottie.2b6a117e.js";import"./passwordlessManager.36ac2e38.js";import"./pubsub.5d7eaeae.js";import"./Passwordless.4c10fad4.js";import"./icons.24d45fbf.js";import"./executeJs.d912d6e8.js";import"./PlayerNavbar.b92fdfe8.js";import"./Steps.c8a993da.js";import"./Modal.b6d9a624.js";import"./WidgetsFrame.0ac81da1.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.2d629984.js";import"./activeRecord.b8754928.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="baa2952d-b4ac-441d-ba8e-a99fe4457349",a._sentryDebugIdIdentifier="sentry-dbid-baa2952d-b4ac-441d-ba8e-a99fe4457349")}catch{}})();const $={class:"page"},j={key:1,class:"error"},z={key:2,style:{width:"100%",height:"100%",display:"flex"}},A={style:{width:"100%",height:"100%",display:"flex"}},G=x({__name:"FormPreview",setup(a){const t=F(),o=R(),s=B({started:!1});function y(r,n){U("preview",t,r,n)}const c=I(null),{loading:h,result:u,error:f,refetch:p}=_(()=>H.get(o.params.formPath)),{result:l}=_(()=>S.get()),v=E(()=>V.create({formPath:o.params.formPath})),b=async()=>{var r;if(!s.started){(r=c.value)==null||r.run();return}s.started=!1},g=({path:r,type:n})=>{n==="dash"?t.push({name:"dashPreview",params:{dashPath:r},query:o.query}):(t.push({name:"formPreview",params:{formPath:r},query:o.query}),p())},w=()=>{t.push(`/_editor/form/${encodeURIComponent(o.params.formPath)}`)},k=()=>{s.started=!0},P=()=>{s.started=!1};return(r,n)=>(i(),d("div",$,[e(h)||!e(u)||!e(l)?(i(),q(L,{key:0})):e(f)?(i(),d("div",j,[m(N,{error:e(f),onReload:e(p)},null,8,["error","onReload"])])):(i(),d("main",z,[D("div",A,[m(M,{ref_key:"runner",ref:c,form:e(u).makeRunnerData(e(l)),params:e(o).query,"is-preview":!0,"enable-auto-focus":!0,broker:v.value,style:{height:"unset",flex:1,overflow:"hidden"},onNavigate:g,onLogout:b,onExit:P,onStart:k,onRedirect:y},null,8,["form","params","broker"]),m(W,{onExitFullscreenPreview:w})])]))]))}});const pe=C(G,[["__scopeId","data-v-fa4f1951"]]);export{pe as default};
//# sourceMappingURL=FormPreview.f63a9ee3.js.map
