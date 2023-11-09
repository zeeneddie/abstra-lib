import{d as g,ez as k,ey as h,b as m,c as i,w as n,aA as x,u as e,bZ as B,r as y,H as C,eE as P,f as s,ev as c}from"./outputWidgets.9d44d9f3.js";import{_ as R,a as I}from"./FormTester.vue_vue_type_script_setup_true_lang.f5c8d4bc.js";import{S as T,L as S}from"./SmartConsole.7401f904.js";import{a as A}from"./asyncComputed.99132b68.js";import{F as D}from"./forms.7a720e82.js";import{W as N}from"./workspaces.8c072334.js";import{_ as E}from"./SaveButton.vue_vue_type_script_setup_true_lang.f108f6bc.js";import{_ as F}from"./DocsButton.vue_vue_type_script_setup_true_lang.415d9b4a.js";import{_ as L}from"./LaunchButton.vue_vue_type_script_setup_true_lang.90791266.js";import{B as V}from"./BaseLayout.d36a8dac.js";import{r as q}from"./executeJs.d848b39e.js";import{_ as H}from"./Debugger.vue_vue_type_script_setup_true_lang.9ad3992c.js";import{A as b,T as M}from"./TabPane.4f8de0bb.js";import"./index.1c9fafa9.js";import{c as U}from"./index.6923ee77.js";import"./Title.2f009ad9.js";import"./transButton.41dbfda3.js";import"./Form.97529076.js";import"./FormRunner.4008b9c4.js";import"./index.ef1211b3.js";import"./pubsub.36fbfdaf.js";import"./CircularLoading.24757374.js";import"./WidgetsFrame.b9249d7c.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.08f4f90e.js";import"./icons.6774e95a.js";import"./StageRunSelector.vue_vue_type_script_setup_true_lang.8f283723.js";import"./index.3d1069e6.js";import"./CollapsePanel.cd7d5b81.js";import"./index.eaa93dcb.js";import"./index.a18b3bba.js";import"./index.0eda3d6a.js";import"./dashes.d39ec2ad.js";import"./activeRecord.cde63aa9.js";import"./runnerData.6febcd00.js";import"./hooks.057fb77d.js";import"./jobs.2ec0756b.js";import"./index.6cc0b47a.js";import"./uuid.eb5852c8.js";import"./url.2bddec37.js";import"./ant-design.c83e5e33.js";import"./PlayerNavbar.39e14c47.js";import"./Steps.df014620.js";import"./Text.0ad03b29.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="12485b90-8fee-4e4a-aee9-2c72676b78a1",a._sentryDebugIdIdentifier="sentry-dbid-12485b90-8fee-4e4a-aee9-2c72676b78a1")}catch{}})();const W=g({__name:"PreviewButton",props:{model:{}},setup(a){const o=a,f=k(),u=h(),r=()=>{const l=f.query;u.push({path:`/_editor/${o.model.routeName}/${encodeURIComponent(o.model.path)}/preview`,query:l})};return(l,t)=>(m(),i(e(B),{class:"preview-button",onClick:r},{default:n(()=>[x(" Preview ")]),_:1}))}}),De=g({__name:"FormEditor",setup(a){const o=h(),f=k(),u=y(null),r=y("test");function l(){o.push({name:"forms"})}const{result:t,refetch:w}=A(()=>Promise.all([N.get(),D.get(f.params.formPath)]).then(([d,p])=>P({workspace:d,form:p}))),v=S.create();function $(d,p){q("editor",o,d,p)}return C(()=>f.params.formPath,()=>{w()}),(d,p)=>(m(),i(V,null,{navbar:n(()=>[e(t)?(m(),i(e(U),{key:0,title:e(t).form.title,style:{padding:"5px 10px"},onBack:l},{footer:n(()=>[s(e(M),{"active-key":r.value,"onUpdate:activeKey":p[0]||(p[0]=_=>r.value=_)},{default:n(()=>[s(e(b),{key:"test",tab:"Test"}),s(e(b),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:n(()=>[s(H),s(L,{path:e(t).form.path},null,8,["path"]),s(F,{path:"forms/overview"}),s(W,{model:e(t).form},null,8,["model"]),r.value==="settings"?(m(),i(E,{key:0,model:e(t).form},null,8,["model"])):c("",!0)]),_:1},8,["title"])):c("",!0)]),content:n(()=>[e(t)&&r.value==="test"?(m(),i(R,{key:0,ref_key:"tester",ref:u,form:e(t).form,"log-service":e(v),onRedirect:$},null,8,["form","log-service"])):c("",!0),e(t)&&r.value==="settings"?(m(),i(I,{key:1,form:e(t).form},null,8,["form"])):c("",!0)]),footer:n(()=>{var _;return[e(t)&&r.value==="test"?(m(),i(T,{key:0,runtime:"forms","log-service":e(v),onRestart:(_=u.value)==null?void 0:_.restart},null,8,["log-service","onRestart"])):c("",!0)]}),_:1}))}});export{De as default};
//# sourceMappingURL=FormEditor.ef311751.js.map