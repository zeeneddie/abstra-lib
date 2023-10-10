import{d as b,eA as k,ez as w,b as s,c as m,w as i,aJ as h,u as e,c4 as x,r as y,f as n,ew as p,eF as $}from"./outputWidgets.b8e3fbc0.js";import{_ as B,a as C}from"./FormTester.vue_vue_type_script_setup_true_lang.db0f1064.js";import{S as I,L as P}from"./SmartConsole.46f2fdc5.js";import{a as R}from"./asyncComputed.977b7d3a.js";import{F as T}from"./forms.b47e0232.js";import{W as S}from"./workspaces.1cd723ed.js";import{_ as A}from"./SaveButton.vue_vue_type_script_setup_true_lang.04452329.js";import{_ as D}from"./DocsButton.vue_vue_type_script_setup_true_lang.7f06376e.js";import{_ as F}from"./LaunchButton.vue_vue_type_script_setup_true_lang.ef8aec51.js";import{B as N}from"./BaseLayout.8874d2af.js";import{A as g,T as L}from"./TabPane.5ecaf5db.js";import"./index.781d66a0.js";import{c as V}from"./index.35048621.js";import"./Title.b922ff42.js";import"./Form.a05787d5.js";import"./broker.fd44c58b.js";import"./index.0d31accf.js";import"./pubsub.dbd75de9.js";import"./executeJs.3f7163cd.js";import"./icons.4de3900f.js";import"./CircularLoading.79b7441a.js";import"./PlayerNavbar.c216bf5e.js";import"./index.b9764f4b.js";import"./Steps.4744ef98.js";import"./WidgetsFrame.f34d49dd.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.d9c4f82e.js";import"./StageRunSelector.vue_vue_type_script_setup_true_lang.62e584c1.js";import"./index.9272f39c.js";import"./CollapsePanel.a6ca3e46.js";import"./index.b5eadad2.js";import"./index.2ea342e8.js";import"./index.5ca55868.js";import"./dashes.f399352b.js";import"./activeRecord.407da188.js";import"./hooks.c0f7a94d.js";import"./jobs.cfb40b83.js";import"./index.4cd7b067.js";import"./uuid.686be72f.js";import"./url.e34f8e7c.js";import"./ant-design.589d9b06.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="b81a0cd0-c9f9-42a9-a64a-fa5aa9c75c37",r._sentryDebugIdIdentifier="sentry-dbid-b81a0cd0-c9f9-42a9-a64a-fa5aa9c75c37")}catch{}})();const q=b({__name:"PreviewButton",props:{model:{}},setup(r){const a=r,c=k(),u=w(),o=()=>{const f=c.query;u.push({path:`/_editor/${a.model.routeName}/${encodeURIComponent(a.model.path)}/preview`,query:f})};return(f,t)=>(s(),m(e(x),{class:"preview-button",onClick:o},{default:i(()=>[h(" Preview ")]),_:1}))}}),Be=b({__name:"FormEditor",setup(r){const a=w(),c=k(),u=y(null),o=y("test");function f(){a.push({name:"forms"})}const{result:t}=R(()=>Promise.all([S.get(),T.get(c.params.formPath)]).then(([v,l])=>$({workspace:v,form:l}))),_=P.create();return(v,l)=>(s(),m(N,null,{navbar:i(()=>[e(t)?(s(),m(e(V),{key:0,title:e(t).form.title,style:{padding:"5px 10px"},onBack:f},{footer:i(()=>[n(e(L),{"active-key":o.value,"onUpdate:activeKey":l[0]||(l[0]=d=>o.value=d)},{default:i(()=>[n(e(g),{key:"test",tab:"Test"}),n(e(g),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:i(()=>[n(F,{path:e(t).form.path},null,8,["path"]),n(D,{path:"forms/overview"}),n(q,{model:e(t).form},null,8,["model"]),o.value==="settings"?(s(),m(A,{key:0,model:e(t).form},null,8,["model"])):p("",!0)]),_:1},8,["title"])):p("",!0)]),content:i(()=>[e(t)&&o.value==="test"?(s(),m(B,{key:0,ref_key:"tester",ref:u,form:e(t).form,"log-service":e(_)},null,8,["form","log-service"])):p("",!0),e(t)&&o.value==="settings"?(s(),m(C,{key:1,form:e(t).form},null,8,["form"])):p("",!0)]),footer:i(()=>{var d;return[e(t)&&o.value==="test"?(s(),m(I,{key:0,runtime:"forms","log-service":e(_),onRestart:(d=u.value)==null?void 0:d.restart},null,8,["log-service","onRestart"])):p("",!0)]}),_:1}))}});export{Be as default};
//# sourceMappingURL=FormEditor.d37e2194.js.map
