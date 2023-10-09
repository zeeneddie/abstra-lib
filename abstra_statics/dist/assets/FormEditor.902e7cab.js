import{d as b,eA as k,ez as w,b as s,c as m,w as i,aJ as h,u as e,c4 as x,r as y,f as n,ew as p,eF as $}from"./outputWidgets.6f061a1b.js";import{_ as B,a as C}from"./FormTester.vue_vue_type_script_setup_true_lang.dcc38bd3.js";import{S as I,L as P}from"./SmartConsole.47a5293b.js";import{a as R}from"./asyncComputed.2773f568.js";import{F as T}from"./forms.4e62c828.js";import{W as S}from"./workspaces.995b93d3.js";import{_ as A}from"./SaveButton.vue_vue_type_script_setup_true_lang.1717ebad.js";import{_ as D}from"./DocsButton.vue_vue_type_script_setup_true_lang.51d3585b.js";import{_ as F}from"./LaunchButton.vue_vue_type_script_setup_true_lang.1ce4b7d6.js";import{B as N}from"./BaseLayout.18e1b00d.js";import{A as g,T as L}from"./TabPane.da67a1ff.js";import"./index.30871e59.js";import{c as V}from"./index.5290153e.js";import"./Title.7c0d9d7d.js";import"./Form.05e047f5.js";import"./broker.5e5a90a6.js";import"./index.4eb8faff.js";import"./pubsub.932fd4f4.js";import"./executeJs.504d6fdd.js";import"./icons.8e3c1aee.js";import"./CircularLoading.3b84729e.js";import"./PlayerNavbar.5fcb2592.js";import"./index.e175414d.js";import"./Steps.aa0d5ab4.js";import"./Modal.0657adcd.js";import"./WidgetsFrame.c85fda38.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.7bb8743a.js";import"./StageRunSelector.vue_vue_type_script_setup_true_lang.df8eebca.js";import"./index.6fc89849.js";import"./CollapsePanel.4ebfbd3b.js";import"./index.c39e86fc.js";import"./index.9a029dac.js";import"./index.f509d6e1.js";import"./dashes.2728aa47.js";import"./activeRecord.9149f449.js";import"./hooks.9d5397a6.js";import"./jobs.9deff6ae.js";import"./index.9eb77f7a.js";import"./uuid.dc273a30.js";import"./url.c2a645fe.js";import"./ant-design.e1534972.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="f59e0c85-3fa5-40e9-9322-e6954bf2a069",r._sentryDebugIdIdentifier="sentry-dbid-f59e0c85-3fa5-40e9-9322-e6954bf2a069")}catch{}})();const q=b({__name:"PreviewButton",props:{model:{}},setup(r){const a=r,f=k(),u=w(),o=()=>{const l=f.query;u.push({path:`/_editor/${a.model.routeName}/${encodeURIComponent(a.model.path)}/preview`,query:l})};return(l,t)=>(s(),m(e(x),{class:"preview-button",onClick:o},{default:i(()=>[h(" Preview ")]),_:1}))}}),Ce=b({__name:"FormEditor",setup(r){const a=w(),f=k(),u=y(null),o=y("test");function l(){a.push({name:"forms"})}const{result:t}=R(()=>Promise.all([S.get(),T.get(f.params.formPath)]).then(([v,c])=>$({workspace:v,form:c}))),_=P.create();return(v,c)=>(s(),m(N,null,{navbar:i(()=>[e(t)?(s(),m(e(V),{key:0,title:e(t).form.title,style:{padding:"5px 10px"},onBack:l},{footer:i(()=>[n(e(L),{"active-key":o.value,"onUpdate:activeKey":c[0]||(c[0]=d=>o.value=d)},{default:i(()=>[n(e(g),{key:"test",tab:"Test"}),n(e(g),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:i(()=>[n(F,{path:e(t).form.path},null,8,["path"]),n(D,{path:"forms/overview"}),n(q,{model:e(t).form},null,8,["model"]),o.value==="settings"?(s(),m(A,{key:0,model:e(t).form},null,8,["model"])):p("",!0)]),_:1},8,["title"])):p("",!0)]),content:i(()=>[e(t)&&o.value==="test"?(s(),m(B,{key:0,ref_key:"tester",ref:u,form:e(t).form,"log-service":e(_)},null,8,["form","log-service"])):p("",!0),e(t)&&o.value==="settings"?(s(),m(C,{key:1,form:e(t).form},null,8,["form"])):p("",!0)]),footer:i(()=>{var d;return[e(t)&&o.value==="test"?(s(),m(I,{key:0,runtime:"forms","log-service":e(_),onRestart:(d=u.value)==null?void 0:d.restart},null,8,["log-service","onRestart"])):p("",!0)]}),_:1}))}});export{Ce as default};
//# sourceMappingURL=FormEditor.902e7cab.js.map