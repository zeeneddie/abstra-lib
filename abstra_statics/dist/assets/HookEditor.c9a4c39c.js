import{d as y,ez as g,eA as v,r as k,b as r,c as s,w as a,u as e,f as u,ew as n}from"./outputWidgets.3f6d0550.js";import{S as h,L as w}from"./SmartConsole.f95cdbd8.js";import{a as x}from"./asyncComputed.bd80460e.js";import{H as B}from"./hooks.16f451e3.js";import{_ as C}from"./SaveButton.vue_vue_type_script_setup_true_lang.1a93becf.js";import{_ as H}from"./DocsButton.vue_vue_type_script_setup_true_lang.5cd072ac.js";import{B as I}from"./BaseLayout.18cbe6d3.js";import{_ as S,a as T}from"./HookSettings.vue_vue_type_script_setup_true_lang.b780301d.js";import{c as A}from"./index.18a73dee.js";import{A as _,T as D}from"./TabPane.3fcb202a.js";import"./forms.a3b5b703.js";import"./activeRecord.4331371e.js";import"./pubsub.0f07f3a4.js";import"./dashes.e5b250f4.js";import"./index.3719e3b6.js";import"./jobs.dcdde26a.js";import"./workspaces.3b4ce0c9.js";import"./url.980858d4.js";import"./icons.51140278.js";import"./Title.d85134a2.js";import"./index.9fce520b.js";import"./uuid.f20985fc.js";import"./ant-design.003e27e5.js";import"./StageRunSelector.vue_vue_type_script_setup_true_lang.68004980.js";import"./RunButton.vue_vue_type_script_setup_true_lang.a5bfd54b.js";import"./index.5b11c5b0.js";import"./index.4614c424.js";import"./CollapsePanel.e23edbfd.js";import"./index.dee2e461.js";import"./index.0df500da.js";import"./index.6a58cd86.js";import"./Form.7ff4c526.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[m]="63efb01e-b279-4e88-8fb1-49a68316b94f",i._sentryDebugIdIdentifier="sentry-dbid-63efb01e-b279-4e88-8fb1-49a68316b94f")}catch{}})();const le=y({__name:"HookEditor",setup(i){const m=g(),l=v(),f=k(null),o=k("test");function b(){m.push({name:"hooks"})}const{result:t}=x(()=>B.get(l.params.hookPath)),c=w.create();return(R,d)=>(r(),s(I,null,{navbar:a(()=>[e(t)?(r(),s(e(A),{key:0,title:e(t).title,style:{padding:"5px 10px"},onBack:b},{footer:a(()=>[u(e(D),{"active-key":o.value,"onUpdate:activeKey":d[0]||(d[0]=p=>o.value=p)},{default:a(()=>[u(e(_),{key:"test",tab:"Test"}),u(e(_),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:a(()=>[u(H,{path:"hooks"}),o.value==="settings"?(r(),s(C,{key:0,model:e(t)},null,8,["model"])):n("",!0)]),_:1},8,["title"])):n("",!0)]),content:a(()=>[e(t)&&o.value==="test"?(r(),s(S,{key:0,ref_key:"tester",ref:f,hook:e(t),"log-service":e(c)},null,8,["hook","log-service"])):n("",!0),e(t)&&o.value==="settings"?(r(),s(T,{key:1,hook:e(t)},null,8,["hook"])):n("",!0)]),footer:a(()=>{var p;return[e(t)&&o.value==="test"?(r(),s(h,{key:0,runtime:"forms","log-service":e(c),onRestart:(p=f.value)==null?void 0:p.runHook},null,8,["log-service","onRestart"])):n("",!0)]}),_:1}))}});export{le as default};
//# sourceMappingURL=HookEditor.c9a4c39c.js.map
