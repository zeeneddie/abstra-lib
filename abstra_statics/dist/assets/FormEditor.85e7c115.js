import{d as g,ez as k,ey as h,b as m,c as i,w as n,aB as x,u as e,b_ as B,r as y,J as C,eE as P,f as s,ev as c}from"./outputWidgets.46ba2efb.js";import{_ as R,a as I}from"./FormTester.vue_vue_type_script_setup_true_lang.45060443.js";import{S as T,L as S}from"./SmartConsole.de70a6a1.js";import{a as D}from"./asyncComputed.57c65b67.js";import{F as N}from"./forms.54a7e765.js";import{W as A}from"./workspaces.5fb6d9a3.js";import{_ as E}from"./SaveButton.vue_vue_type_script_setup_true_lang.307a155a.js";import{_ as F}from"./DocsButton.vue_vue_type_script_setup_true_lang.10e00df8.js";import{_ as L}from"./LaunchButton.vue_vue_type_script_setup_true_lang.ed33be76.js";import{B as V}from"./BaseLayout.13af3b63.js";import"./index.564994de.js";import{r as q}from"./executeJs.de022c31.js";import{_ as M}from"./Debugger.vue_vue_type_script_setup_true_lang.7a1e6009.js";import{A as b,T as U}from"./TabPane.4a46f9a4.js";import"./index.5e5d2b81.js";import{c as W}from"./index.455e587b.js";import"./Title.bdba5bb9.js";import"./transButton.2cce5150.js";import"./Form.6a909b48.js";import"./FormRunner.3796b12c.js";import"./index.4bfea2bc.js";import"./pubsub.c955c307.js";import"./CircularLoading.80ee7c44.js";import"./WidgetsFrame.bcb2830d.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.2d1ccafe.js";import"./icons.2b0d9965.js";import"./StageRunSelector.vue_vue_type_script_setup_true_lang.376de68e.js";import"./index.8fb56cb7.js";import"./CollapsePanel.2fb9bbc2.js";import"./index.c5a21398.js";import"./index.f740f6cd.js";import"./index.84469a00.js";import"./dashes.0057c8c6.js";import"./activeRecord.e90d1fd3.js";import"./runnerData.af1b31e2.js";import"./hooks.1bf1eb30.js";import"./jobs.bc83ec86.js";import"./index.c47cf724.js";import"./uuid.de4a9a46.js";import"./url.bfb405d5.js";import"./ant-design.44571376.js";import"./PlayerNavbar.6f81c1ca.js";import"./Steps.3ea1f59f.js";import"./Text.1ef25f97.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="335b57f4-cb4e-4834-b0de-900d7767a85d",a._sentryDebugIdIdentifier="sentry-dbid-335b57f4-cb4e-4834-b0de-900d7767a85d")}catch{}})();const z=g({__name:"PreviewButton",props:{model:{}},setup(a){const o=a,f=k(),u=h(),r=()=>{const l=f.query;u.push({path:`/_editor/${o.model.routeName}/${encodeURIComponent(o.model.path)}/preview`,query:l})};return(l,t)=>(m(),i(e(B),{class:"preview-button",onClick:r},{default:n(()=>[x(" Preview ")]),_:1}))}}),Ae=g({__name:"FormEditor",setup(a){const o=h(),f=k(),u=y(null),r=y("test");function l(){o.push({name:"forms"})}const{result:t,refetch:w}=D(()=>Promise.all([A.get(),N.get(f.params.formPath)]).then(([d,p])=>P({workspace:d,form:p}))),v=S.create();function $(d,p){q("editor",o,d,p)}return C(()=>f.params.formPath,()=>{w()}),(d,p)=>(m(),i(V,null,{navbar:n(()=>[e(t)?(m(),i(e(W),{key:0,title:e(t).form.title,style:{padding:"5px 10px"},onBack:l},{footer:n(()=>[s(e(U),{"active-key":r.value,"onUpdate:activeKey":p[0]||(p[0]=_=>r.value=_)},{default:n(()=>[s(e(b),{key:"test",tab:"Test"}),s(e(b),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:n(()=>[s(M),s(L,{path:e(t).form.path},null,8,["path"]),s(F,{path:"forms/overview"}),s(z,{model:e(t).form},null,8,["model"]),r.value==="settings"?(m(),i(E,{key:0,model:e(t).form},null,8,["model"])):c("",!0)]),_:1},8,["title"])):c("",!0)]),content:n(()=>[e(t)&&r.value==="test"?(m(),i(R,{key:0,ref_key:"tester",ref:u,form:e(t).form,"log-service":e(v),onRedirect:$},null,8,["form","log-service"])):c("",!0),e(t)&&r.value==="settings"?(m(),i(I,{key:1,form:e(t).form},null,8,["form"])):c("",!0)]),footer:n(()=>{var _;return[e(t)&&r.value==="test"?(m(),i(T,{key:0,runtime:"forms","log-service":e(v),onRestart:(_=u.value)==null?void 0:_.restart},null,8,["log-service","onRestart"])):c("",!0)]}),_:1}))}});export{Ae as default};
//# sourceMappingURL=FormEditor.85e7c115.js.map
