import{d as y,eA as g,eB as v,r as _,b as r,c as s,w as a,u as e,f as n,ew as m}from"./outputWidgets.1fa697ec.js";import{S as h,L as w}from"./SmartConsole.22ec629d.js";import{a as x}from"./asyncComputed.75e390ac.js";import{H as B}from"./hooks.d2407963.js";import{_ as C}from"./SaveButton.vue_vue_type_script_setup_true_lang.18c79d71.js";import{_ as H}from"./DocsButton.vue_vue_type_script_setup_true_lang.ba539395.js";import{B as I}from"./BaseLayout.a00ee9ac.js";import{_ as S,a as T}from"./HookSettings.vue_vue_type_script_setup_true_lang.eace2308.js";import{_ as $}from"./Debugger.vue_vue_type_script_setup_true_lang.a62f5147.js";import{c as A}from"./index.f946ffca.js";import{A as k,T as D}from"./TabPane.a202ac84.js";import"./forms.7287ac2d.js";import"./activeRecord.b14dfa18.js";import"./pubsub.332a43e4.js";import"./dashes.14aec186.js";import"./runnerData.df3cf053.js";import"./jobs.7f411901.js";import"./workspaces.a4b16b35.js";import"./url.194890be.js";import"./icons.50cbdedb.js";import"./Title.f5b94017.js";import"./transButton.d868181c.js";import"./index.b7d2a635.js";import"./uuid.0a87a319.js";import"./ant-design.f20957bb.js";import"./StageRunSelector.vue_vue_type_script_setup_true_lang.8e943653.js";import"./RunButton.vue_vue_type_script_setup_true_lang.ac358202.js";import"./index.54108a8b.js";import"./index.3c19856d.js";import"./CollapsePanel.6a6da7a4.js";import"./index.04a45e82.js";import"./index.183bb41f.js";import"./Form.4333e43d.js";import"./Text.75188cac.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p=new Error().stack;p&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[p]="46123813-69bf-4cf5-b67b-b12d0a0e5a9b",i._sentryDebugIdIdentifier="sentry-dbid-46123813-69bf-4cf5-b67b-b12d0a0e5a9b")}catch{}})();const de=y({__name:"HookEditor",setup(i){const p=g(),l=v(),f=_(null),o=_("test");function b(){p.push({name:"hooks"})}const{result:t}=x(()=>B.get(l.params.hookPath)),c=w.create();return(R,d)=>(r(),s(I,null,{navbar:a(()=>[e(t)?(r(),s(e(A),{key:0,title:e(t).title,style:{padding:"5px 10px"},onBack:b},{footer:a(()=>[n(e(D),{"active-key":o.value,"onUpdate:activeKey":d[0]||(d[0]=u=>o.value=u)},{default:a(()=>[n(e(k),{key:"test",tab:"Test"}),n(e(k),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:a(()=>[n($),n(H,{path:"hooks"}),o.value==="settings"?(r(),s(C,{key:0,model:e(t)},null,8,["model"])):m("",!0)]),_:1},8,["title"])):m("",!0)]),content:a(()=>[e(t)&&o.value==="test"?(r(),s(S,{key:0,ref_key:"tester",ref:f,hook:e(t),"log-service":e(c)},null,8,["hook","log-service"])):m("",!0),e(t)&&o.value==="settings"?(r(),s(T,{key:1,hook:e(t)},null,8,["hook"])):m("",!0)]),footer:a(()=>{var u;return[e(t)&&o.value==="test"?(r(),s(h,{key:0,runtime:"forms","log-service":e(c),onRestart:(u=f.value)==null?void 0:u.runHook},null,8,["log-service","onRestart"])):m("",!0)]}),_:1}))}});export{de as default};
//# sourceMappingURL=HookEditor.aa31c03a.js.map
