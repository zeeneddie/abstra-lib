import{d as w,J as b,b as d,et as c,e as s,eC as p,eD as q,eE as D,x as k,ez as $,eA as C,H as S,r as L,u as t,c as M,f as m}from"./outputWidgets.6f061a1b.js";import{L as N}from"./CircularLoading.3b84729e.js";import{F as A,R as H}from"./broker.5e5a90a6.js";import{B as O}from"./BackButton.96f218f1.js";import{a as g}from"./asyncComputed.2773f568.js";import{F as V}from"./forms.4e62c828.js";import{W}from"./workspaces.995b93d3.js";import{r as j}from"./index.e175414d.js";import"./index.4eb8faff.js";import"./pubsub.932fd4f4.js";import"./executeJs.504d6fdd.js";import"./icons.8e3c1aee.js";import"./PlayerNavbar.5fcb2592.js";import"./Steps.aa0d5ab4.js";import"./Modal.0657adcd.js";import"./WidgetsFrame.c85fda38.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.7bb8743a.js";import"./activeRecord.9149f449.js";import"./url.c2a645fe.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="6f19aa91-ac63-4a55-8b52-544dad9af763",e._sentryDebugIdIdentifier="sentry-dbid-6f19aa91-ac63-4a55-8b52-544dad9af763")}catch{}})();const x=e=>(q("data-v-d3846761"),e=e(),D(),e),z={class:"error"},J=x(()=>s("h1",{class:"error-header"},"Error",-1)),T={class:"error-body"},U={class:"error-message"},G={class:"error-details"},K=x(()=>s("span",null,"Reload",-1)),Q=[K],X=w({__name:"Error",props:{error:{type:Object,required:!0},repeated:{type:Boolean,required:!1}},emits:["reload"],setup(e,{emit:r}){const o=e,n=b(()=>o.repeated?"Ooops. The same error occured, please try again later.":"An error occurred while loading.");function l(){r("reload")}return(u,_)=>(d(),c("div",z,[J,s("div",T,[s("div",U,[s("p",null,p(n.value),1),s("p",G,p(e.error.name)+": "+p(e.error.message),1)]),s("div",{class:"error-actions"},[s("button",{class:"btn btn-primary",onClick:l},Q)])])]))}});const Y=k(X,[["__scopeId","data-v-d3846761"]]),Z={class:"page"},ee={key:1,class:"error"},re={key:2,style:{width:"100%",height:"100%",display:"flex"}},oe={style:{width:"100%",height:"100%",display:"flex"}},te=w({__name:"FormPreview",setup(e){const r=$(),o=C(),n=S({started:!1});function l(a,i){j("preview",r,a,i)}const u=L(null),{loading:_,result:f,error:h,refetch:y}=g(()=>V.get(o.params.formPath)),{result:v}=g(()=>W.get()),P=b(()=>H.create({formPath:o.params.formPath})),I=async()=>{var a;if(!n.started){(a=u.value)==null||a.run();return}n.started=!1},R=({path:a,type:i})=>{i==="dash"?r.push({name:"dashPreview",params:{dashPath:a},query:o.query}):(r.push({name:"formPreview",params:{formPath:a},query:o.query}),y())},E=()=>{r.push(`/_editor/form/${encodeURIComponent(o.params.formPath)}`)},B=()=>{n.started=!0},F=()=>{n.started=!1};return(a,i)=>(d(),c("div",Z,[t(_)||!t(f)||!t(v)?(d(),M(N,{key:0})):t(h)?(d(),c("div",ee,[m(Y,{error:t(h),onReload:t(y)},null,8,["error","onReload"])])):(d(),c("main",re,[s("div",oe,[m(A,{ref_key:"runner",ref:u,form:t(f).makeRunnerData(t(v)),params:t(o).query,"is-preview":!0,"enable-auto-focus":!0,broker:P.value,style:{height:"unset",flex:1,overflow:"hidden"},onNavigate:R,onLogout:I,onExit:F,onStart:B,onRedirect:l},null,8,["form","params","broker"]),m(O,{onExitFullscreenPreview:E})])]))]))}});const xe=k(te,[["__scopeId","data-v-fa4f1951"]]);export{xe as default};
//# sourceMappingURL=FormPreview.a295cb8e.js.map