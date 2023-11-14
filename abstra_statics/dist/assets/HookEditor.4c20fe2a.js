import{d as b,eA as g,eB as v,r as _,b as r,c as s,w as a,u as e,f as n,ew as m}from"./outputWidgets.89c081d6.js";import{S as h,L as w}from"./SmartConsole.b62e1a21.js";import{a as x}from"./asyncComputed.c992043d.js";import{H as B}from"./hooks.017383ef.js";import{_ as C}from"./SaveButton.vue_vue_type_script_setup_true_lang.8a7d4956.js";import{_ as H}from"./DocsButton.vue_vue_type_script_setup_true_lang.46109fda.js";import{B as I}from"./BaseLayout.141f6a3f.js";import{_ as S,a as T}from"./HookSettings.vue_vue_type_script_setup_true_lang.ce970c89.js";import{_ as $}from"./Debugger.vue_vue_type_script_setup_true_lang.0e3a1267.js";import{c as A}from"./index.9f5353e1.js";import{A as k,T as D}from"./TabPane.967df44f.js";import"./forms.b35cefe3.js";import"./activeRecord.43132be4.js";import"./pubsub.fe0d8321.js";import"./dashes.b762cb46.js";import"./runnerData.f02c8762.js";import"./jobs.eb172be8.js";import"./workspaces.9db37c13.js";import"./url.d5ac8fae.js";import"./icons.dfde2472.js";import"./Title.61dedb2a.js";import"./transButton.24d66b27.js";import"./index.fa36e8c7.js";import"./uuid.7abc1d5f.js";import"./ant-design.0e417dea.js";import"./StageRunSelector.vue_vue_type_script_setup_true_lang.024a303d.js";import"./RunButton.vue_vue_type_script_setup_true_lang.eeba0082.js";import"./index.260750b6.js";import"./index.a03a0ef2.js";import"./CollapsePanel.ccb1a232.js";import"./index.cef045c6.js";import"./index.97b6a429.js";import"./Form.094bba7e.js";import"./Text.474082f1.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p=new Error().stack;p&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[p]="c5378d8a-fdd7-4883-9e5b-d3a068fe5bc8",i._sentryDebugIdIdentifier="sentry-dbid-c5378d8a-fdd7-4883-9e5b-d3a068fe5bc8")}catch{}})();const de=b({__name:"HookEditor",setup(i){const p=g(),l=v(),c=_(null),o=_("test");function y(){p.push({name:"hooks"})}const{result:t}=x(()=>B.get(l.params.hookPath)),f=w.create();return(R,d)=>(r(),s(I,null,{navbar:a(()=>[e(t)?(r(),s(e(A),{key:0,title:e(t).title,style:{padding:"5px 10px"},onBack:y},{footer:a(()=>[n(e(D),{"active-key":o.value,"onUpdate:activeKey":d[0]||(d[0]=u=>o.value=u)},{default:a(()=>[n(e(k),{key:"test",tab:"Test"}),n(e(k),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:a(()=>[n($),n(H,{path:"hooks"}),o.value==="settings"?(r(),s(C,{key:0,model:e(t)},null,8,["model"])):m("",!0)]),_:1},8,["title"])):m("",!0)]),content:a(()=>[e(t)&&o.value==="test"?(r(),s(S,{key:0,ref_key:"tester",ref:c,hook:e(t),"log-service":e(f)},null,8,["hook","log-service"])):m("",!0),e(t)&&o.value==="settings"?(r(),s(T,{key:1,hook:e(t)},null,8,["hook"])):m("",!0)]),footer:a(()=>{var u;return[e(t)&&o.value==="test"?(r(),s(h,{key:0,runtime:"forms","log-service":e(f),onRestart:(u=c.value)==null?void 0:u.runHook},null,8,["log-service","onRestart"])):m("",!0)]}),_:1}))}});export{de as default};
//# sourceMappingURL=HookEditor.4c20fe2a.js.map
