import{d as b,J as w,b as c,et as i,e as s,eC as p,eD as q,eE as D,x as k,ez as $,eA as C,H as S,r as L,u as t,c as M,f as m}from"./outputWidgets.75a5b0b9.js";import{L as N}from"./CircularLoading.1b6701b1.js";import{F as A,R as H}from"./broker.6112f7bc.js";import{B as O}from"./BackButton.05afbac7.js";import{a as g}from"./asyncComputed.c701d7b0.js";import{F as V}from"./forms.d6fd4b56.js";import{W}from"./workspaces.f47922e6.js";import{r as j}from"./index.a1ee75ca.js";import"./index.7a91ca2c.js";import"./pubsub.3fa240d3.js";import"./executeJs.fb1c318e.js";import"./icons.c04528be.js";import"./PlayerNavbar.04a45a2a.js";import"./Steps.abab7b0a.js";import"./Modal.21246413.js";import"./WidgetsFrame.fd4386d8.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.acb7988b.js";import"./activeRecord.115270b9.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="85887b11-cda1-4ab8-94ae-c52c7884c7ac",e._sentryDebugIdIdentifier="sentry-dbid-85887b11-cda1-4ab8-94ae-c52c7884c7ac")}catch{}})();const x=e=>(q("data-v-d3846761"),e=e(),D(),e),z={class:"error"},J=x(()=>s("h1",{class:"error-header"},"Error",-1)),T={class:"error-body"},U={class:"error-message"},G={class:"error-details"},K=x(()=>s("span",null,"Reload",-1)),Q=[K],X=b({__name:"Error",props:{error:{type:Object,required:!0},repeated:{type:Boolean,required:!1}},emits:["reload"],setup(e,{emit:r}){const o=e,n=w(()=>o.repeated?"Ooops. The same error occured, please try again later.":"An error occurred while loading.");function l(){r("reload")}return(u,_)=>(c(),i("div",z,[J,s("div",T,[s("div",U,[s("p",null,p(n.value),1),s("p",G,p(e.error.name)+": "+p(e.error.message),1)]),s("div",{class:"error-actions"},[s("button",{class:"btn btn-primary",onClick:l},Q)])])]))}});const Y=k(X,[["__scopeId","data-v-d3846761"]]),Z={class:"page"},ee={key:1,class:"error"},re={key:2,style:{width:"100%",height:"100%",display:"flex"}},oe={style:{width:"100%",height:"100%",display:"flex"}},te=b({__name:"FormPreview",setup(e){const r=$(),o=C(),n=S({started:!1});function l(a,d){j("preview",r,a,d)}const u=L(null),{loading:_,result:f,error:h,refetch:y}=g(()=>V.get(o.params.formPath)),{result:v}=g(()=>W.get()),P=w(()=>H.create({formPath:o.params.formPath})),I=async()=>{var a;if(!n.started){(a=u.value)==null||a.run();return}n.started=!1},R=({path:a,type:d})=>{d==="dash"?r.push({name:"dashPreview",params:{dashPath:a},query:o.query}):(r.push({name:"formPreview",params:{formPath:a},query:o.query}),y())},E=()=>{r.push(`/_editor/form/${encodeURIComponent(o.params.formPath)}`)},B=()=>{n.started=!0},F=()=>{n.started=!1};return(a,d)=>(c(),i("div",Z,[t(_)||!t(f)||!t(v)?(c(),M(N,{key:0})):t(h)?(c(),i("div",ee,[m(Y,{error:t(h),onReload:t(y)},null,8,["error","onReload"])])):(c(),i("main",re,[s("div",oe,[m(A,{ref_key:"runner",ref:u,form:t(f).makeRunnerData(t(v)),params:t(o).query,"is-preview":!0,"enable-auto-focus":!0,broker:P.value,style:{height:"unset",flex:1,overflow:"hidden"},onNavigate:R,onLogout:I,onExit:F,onStart:B,onRedirect:l},null,8,["form","params","broker"]),m(O,{onExitFullscreenPreview:E})])]))]))}});const ke=k(te,[["__scopeId","data-v-fa4f1951"]]);export{ke as default};
//# sourceMappingURL=FormPreview.b1081dcd.js.map