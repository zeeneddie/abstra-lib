import{d as x,ex as F,ey as R,E as B,r as I,F as E,b as i,c as d,bu as e,u as q,e as c,er as D,t as C}from"./registerWidgets.cd0230b6.js";import{L}from"./CircularLoading.a808730a.js";import{E as N}from"./Error.aea6c557.js";import{F as M,R as V}from"./broker.c30746cb.js";import{B as W}from"./BackButton.b2b4c809.js";import{a as _}from"./asyncComputed.d5643777.js";import{F as H}from"./forms.a885ac9c.js";import{W as S}from"./workspaces.d5bff92f.js";import{r as U}from"./index.880d8f1c.js";import"./lottie.3848dff9.js";import"./passwordlessManager.e49dd838.js";import"./pubsub.acd37fe2.js";import"./storage.c08be30c.js";import"./Passwordless.58d1a869.js";import"./icons.79c2c142.js";import"./executeJs.5ef355c0.js";import"./PlayerNavbar.a452f381.js";import"./Steps.beece2f3.js";import"./Modal.bb8ad073.js";import"./WidgetsFrame.a8029dab.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.8b0b4212.js";import"./activeRecord.87f5172c.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="eac5ecd9-deae-4db0-abc4-ccd554aa47a6",a._sentryDebugIdIdentifier="sentry-dbid-eac5ecd9-deae-4db0-abc4-ccd554aa47a6")}catch{}})();const $={class:"page"},j={key:1,class:"error"},z={key:2,style:{width:"100%",height:"100%",display:"flex"}},A={style:{width:"100%",height:"100%",display:"flex"}},G=x({__name:"FormPreview",setup(a){const t=F(),o=R(),s=B({started:!1});function y(r,n){U("preview",t,r,n)}const m=I(null),{loading:h,result:u,error:p,refetch:f}=_(()=>H.get(o.params.formPath)),{result:l}=_(()=>S.get()),v=E(()=>V.create({formPath:o.params.formPath})),g=async()=>{var r;if(!s.started){(r=m.value)==null||r.run();return}s.started=!1},w=({path:r,type:n})=>{n==="dash"?t.push({name:"dashPreview",params:{dashPath:r},query:o.query}):(t.push({name:"formPreview",params:{formPath:r},query:o.query}),f())},b=()=>{t.push(`/_editor/form/${encodeURIComponent(o.params.formPath)}`)},k=()=>{s.started=!0},P=()=>{s.started=!1};return(r,n)=>(i(),d("div",$,[e(h)||!e(u)||!e(l)?(i(),q(L,{key:0})):e(p)?(i(),d("div",j,[c(N,{error:e(p),onReload:e(f)},null,8,["error","onReload"])])):(i(),d("main",z,[D("div",A,[c(M,{ref_key:"runner",ref:m,form:e(u).makeRunnerData(e(l)),params:e(o).query,"is-preview":!0,"enable-auto-focus":!0,broker:v.value,style:{height:"unset",flex:1,overflow:"hidden"},onNavigate:w,onLogout:g,onExit:P,onStart:k,onRedirect:y},null,8,["form","params","broker"]),c(W,{onExitFullscreenPreview:b})])]))]))}});const le=C(G,[["__scopeId","data-v-fa4f1951"]]);export{le as default};
//# sourceMappingURL=FormPreview.6f1a46bb.js.map