import{d as b,ez as g,eA as v,r as k,b as r,c as s,w as a,u as e,f as u,ew as n}from"./outputWidgets.5ced94d7.js";import{S as h,L as w}from"./SmartConsole.2af8d0ee.js";import{a as x}from"./asyncComputed.6f213f9d.js";import{H as B}from"./hooks.eb6be727.js";import{_ as C}from"./SaveButton.vue_vue_type_script_setup_true_lang.5baa60de.js";import{_ as H}from"./DocsButton.vue_vue_type_script_setup_true_lang.b7605154.js";import{B as I}from"./BaseLayout.a4af420b.js";import{_ as S,a as T}from"./HookSettings.vue_vue_type_script_setup_true_lang.7ff98b45.js";import{c as A}from"./index.2a4a437f.js";import{A as _,T as D}from"./TabPane.d9f04984.js";import"./forms.4a767921.js";import"./activeRecord.6ae8bce9.js";import"./pubsub.f395e26b.js";import"./dashes.11209ba2.js";import"./index.48bbb941.js";import"./jobs.b1195529.js";import"./workspaces.2720be7e.js";import"./url.b91ad4a3.js";import"./icons.157295a5.js";import"./Title.74cb802d.js";import"./index.d48bc6c3.js";import"./uuid.3b98222f.js";import"./ant-design.49bf0c8e.js";import"./StageRunSelector.vue_vue_type_script_setup_true_lang.24c52910.js";import"./RunButton.vue_vue_type_script_setup_true_lang.1dff2367.js";import"./index.bd89b8f7.js";import"./index.c946e10c.js";import"./CollapsePanel.3e7dc058.js";import"./index.fe1573f2.js";import"./index.c816332a.js";import"./index.54325f84.js";import"./Form.3717142f.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[m]="e68fd2be-51dd-4395-bd0c-1c443a6dbf69",i._sentryDebugIdIdentifier="sentry-dbid-e68fd2be-51dd-4395-bd0c-1c443a6dbf69")}catch{}})();const le=b({__name:"HookEditor",setup(i){const m=g(),l=v(),c=k(null),o=k("test");function y(){m.push({name:"hooks"})}const{result:t}=x(()=>B.get(l.params.hookPath)),d=w.create();return(R,f)=>(r(),s(I,null,{navbar:a(()=>[e(t)?(r(),s(e(A),{key:0,title:e(t).title,style:{padding:"5px 10px"},onBack:y},{footer:a(()=>[u(e(D),{"active-key":o.value,"onUpdate:activeKey":f[0]||(f[0]=p=>o.value=p)},{default:a(()=>[u(e(_),{key:"test",tab:"Test"}),u(e(_),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:a(()=>[u(H,{path:"hooks"}),o.value==="settings"?(r(),s(C,{key:0,model:e(t)},null,8,["model"])):n("",!0)]),_:1},8,["title"])):n("",!0)]),content:a(()=>[e(t)&&o.value==="test"?(r(),s(S,{key:0,ref_key:"tester",ref:c,hook:e(t),"log-service":e(d)},null,8,["hook","log-service"])):n("",!0),e(t)&&o.value==="settings"?(r(),s(T,{key:1,hook:e(t)},null,8,["hook"])):n("",!0)]),footer:a(()=>{var p;return[e(t)&&o.value==="test"?(r(),s(h,{key:0,runtime:"forms","log-service":e(d),onRestart:(p=c.value)==null?void 0:p.runHook},null,8,["log-service","onRestart"])):n("",!0)]}),_:1}))}});export{le as default};
//# sourceMappingURL=HookEditor.80c832bb.js.map
