import{d as b,eA as g,eB as v,r as _,b as r,c as s,w as a,u as e,f as n,ew as m}from"./outputWidgets.c855fc19.js";import{S as h,L as w}from"./SmartConsole.c95dd37f.js";import{a as x}from"./asyncComputed.c6ddf838.js";import{H as B}from"./hooks.169083c9.js";import{_ as C}from"./SaveButton.vue_vue_type_script_setup_true_lang.96421841.js";import{_ as H}from"./DocsButton.vue_vue_type_script_setup_true_lang.aca9c2cf.js";import{B as I}from"./BaseLayout.116a9203.js";import{_ as S,a as T}from"./HookSettings.vue_vue_type_script_setup_true_lang.42ab6120.js";import{_ as $}from"./Debugger.vue_vue_type_script_setup_true_lang.e02c6cee.js";import{c as A}from"./index.ca301f71.js";import{A as k,T as D}from"./TabPane.43dcd4c4.js";import"./forms.03cec43c.js";import"./activeRecord.15e51427.js";import"./pubsub.8b090702.js";import"./dashes.5e0a2bec.js";import"./runnerData.b3093804.js";import"./jobs.a5ebbb05.js";import"./workspaces.2386e169.js";import"./url.f2daa6d3.js";import"./icons.db98240b.js";import"./FormItem.5f048147.js";import"./index.0fddcc92.js";import"./uuid.858d0d73.js";import"./ant-design.9b735306.js";import"./transButton.fb3a2378.js";import"./StageRunSelector.vue_vue_type_script_setup_true_lang.da1b18db.js";import"./RunButton.vue_vue_type_script_setup_true_lang.147262b8.js";import"./index.ad987072.js";import"./CollapsePanel.3cb2fd75.js";import"./index.d2a30c55.js";import"./index.76ead672.js";import"./Text.e5cdb9e1.js";import"./Base.ed4dd497.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p=new Error().stack;p&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[p]="438a8b12-881f-465b-8c95-ec315e657700",i._sentryDebugIdIdentifier="sentry-dbid-438a8b12-881f-465b-8c95-ec315e657700")}catch{}})();const fe=b({__name:"HookEditor",setup(i){const p=g(),l=v(),c=_(null),o=_("test");function y(){p.push({name:"hooks"})}const{result:t}=x(()=>B.get(l.params.hookPath)),f=w.create();return(R,d)=>(r(),s(I,null,{navbar:a(()=>[e(t)?(r(),s(e(A),{key:0,title:e(t).title,style:{padding:"5px 10px"},onBack:y},{footer:a(()=>[n(e(D),{"active-key":o.value,"onUpdate:activeKey":d[0]||(d[0]=u=>o.value=u)},{default:a(()=>[n(e(k),{key:"test",tab:"Test"}),n(e(k),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:a(()=>[n($),n(H,{path:"hooks"}),o.value==="settings"?(r(),s(C,{key:0,model:e(t)},null,8,["model"])):m("",!0)]),_:1},8,["title"])):m("",!0)]),content:a(()=>[e(t)&&o.value==="test"?(r(),s(S,{key:0,ref_key:"tester",ref:c,hook:e(t),"log-service":e(f)},null,8,["hook","log-service"])):m("",!0),e(t)&&o.value==="settings"?(r(),s(T,{key:1,hook:e(t)},null,8,["hook"])):m("",!0)]),footer:a(()=>{var u;return[e(t)&&o.value==="test"?(r(),s(h,{key:0,runtime:"forms","log-service":e(f),onRestart:(u=c.value)==null?void 0:u.runHook},null,8,["log-service","onRestart"])):m("",!0)]}),_:1}))}});export{fe as default};
//# sourceMappingURL=HookEditor.d908ea36.js.map
