import{d as g,ez as v,eA as b,r as k,b as r,c as s,w as a,u as e,f as u,ew as n}from"./outputWidgets.dcbaec6c.js";import{S as h,L as w}from"./SmartConsole.02ad3457.js";import{a as x}from"./asyncComputed.05eefdbd.js";import{H as B}from"./hooks.02c70748.js";import{_ as C}from"./SaveButton.vue_vue_type_script_setup_true_lang.9935a71b.js";import{_ as H}from"./DocsButton.vue_vue_type_script_setup_true_lang.54ee9498.js";import{B as I}from"./BaseLayout.7aa9f430.js";import{_ as S,a as T}from"./HookSettings.vue_vue_type_script_setup_true_lang.1e899501.js";import{c as A}from"./index.3c7c5d6b.js";import{A as _,T as D}from"./TabPane.fc42b1c2.js";import"./forms.71227c25.js";import"./activeRecord.d9292c93.js";import"./pubsub.999268d8.js";import"./dashes.55e540d6.js";import"./index.678801af.js";import"./jobs.8d7f79b7.js";import"./workspaces.afe95fae.js";import"./url.5c03711e.js";import"./icons.eaf14b7d.js";import"./Title.137468a8.js";import"./index.12134aed.js";import"./uuid.474712e6.js";import"./ant-design.f602ec67.js";import"./StageRunSelector.vue_vue_type_script_setup_true_lang.c01f25c4.js";import"./RunButton.vue_vue_type_script_setup_true_lang.7307b493.js";import"./index.fadf09a3.js";import"./index.87a757a5.js";import"./CollapsePanel.1830ea80.js";import"./index.a56c5205.js";import"./index.a2b43efb.js";import"./index.69bd7c01.js";import"./Form.94b2db91.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[m]="8d568ca7-c478-4fcd-90f6-ba843330159f",i._sentryDebugIdIdentifier="sentry-dbid-8d568ca7-c478-4fcd-90f6-ba843330159f")}catch{}})();const ce=g({__name:"HookEditor",setup(i){const m=v(),c=b(),l=k(null),o=k("test");function y(){m.push({name:"hooks"})}const{result:t}=x(()=>B.get(c.params.hookPath)),f=w.create();return(R,d)=>(r(),s(I,null,{navbar:a(()=>[e(t)?(r(),s(e(A),{key:0,title:e(t).title,style:{padding:"5px 10px"},onBack:y},{footer:a(()=>[u(e(D),{"active-key":o.value,"onUpdate:activeKey":d[0]||(d[0]=p=>o.value=p)},{default:a(()=>[u(e(_),{key:"test",tab:"Test"}),u(e(_),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:a(()=>[u(H,{path:"hooks"}),o.value==="settings"?(r(),s(C,{key:0,model:e(t)},null,8,["model"])):n("",!0)]),_:1},8,["title"])):n("",!0)]),content:a(()=>[e(t)&&o.value==="test"?(r(),s(S,{key:0,ref_key:"tester",ref:l,hook:e(t),"log-service":e(f)},null,8,["hook","log-service"])):n("",!0),e(t)&&o.value==="settings"?(r(),s(T,{key:1,hook:e(t)},null,8,["hook"])):n("",!0)]),footer:a(()=>{var p;return[e(t)&&o.value==="test"?(r(),s(h,{key:0,runtime:"forms","log-service":e(f),onRestart:(p=l.value)==null?void 0:p.runHook},null,8,["log-service","onRestart"])):n("",!0)]}),_:1}))}});export{ce as default};
//# sourceMappingURL=HookEditor.9719abc1.js.map
