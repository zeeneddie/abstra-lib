import{d as b,ez as g,eA as v,r as k,b as r,c as a,w as s,u as e,f as u,ew as n}from"./outputWidgets.cf5b7366.js";import{S as h,L as w}from"./SmartConsole.cae61376.js";import{a as x}from"./asyncComputed.2caa7fe6.js";import{H as B}from"./hooks.8d5e93d9.js";import{_ as C}from"./SaveButton.vue_vue_type_script_setup_true_lang.75a1c197.js";import{_ as H}from"./DocsButton.vue_vue_type_script_setup_true_lang.f865416e.js";import{B as I}from"./BaseLayout.03efcbf5.js";import{_ as S,a as T}from"./HookSettings.vue_vue_type_script_setup_true_lang.862f51a9.js";import{c as A}from"./index.21604c00.js";import{A as _,T as D}from"./TabPane.730cc561.js";import"./forms.0c753bf9.js";import"./activeRecord.f30e02c2.js";import"./pubsub.664a70af.js";import"./dashes.75890af5.js";import"./index.3d2fbf9e.js";import"./jobs.b1b148c3.js";import"./workspaces.510e9023.js";import"./url.fb40e08c.js";import"./icons.c510a141.js";import"./Title.adce1298.js";import"./index.aee8b5d5.js";import"./uuid.8fd92523.js";import"./ant-design.55c856ad.js";import"./StageRunSelector.vue_vue_type_script_setup_true_lang.4e56b000.js";import"./RunButton.vue_vue_type_script_setup_true_lang.d83f32d7.js";import"./index.92232d7b.js";import"./index.9583d9e9.js";import"./CollapsePanel.38c8849b.js";import"./index.10cdfb2c.js";import"./index.54288d9b.js";import"./index.47f17eed.js";import"./Form.c8affe88.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[m]="7ab8621b-50aa-4c62-aa7c-58a8310f849d",i._sentryDebugIdIdentifier="sentry-dbid-7ab8621b-50aa-4c62-aa7c-58a8310f849d")}catch{}})();const le=b({__name:"HookEditor",setup(i){const m=g(),l=v(),c=k(null),o=k("test");function y(){m.push({name:"hooks"})}const{result:t}=x(()=>B.get(l.params.hookPath)),f=w.create();return(R,d)=>(r(),a(I,null,{navbar:s(()=>[e(t)?(r(),a(e(A),{key:0,title:e(t).title,style:{padding:"5px 10px"},onBack:y},{footer:s(()=>[u(e(D),{"active-key":o.value,"onUpdate:activeKey":d[0]||(d[0]=p=>o.value=p)},{default:s(()=>[u(e(_),{key:"test",tab:"Test"}),u(e(_),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:s(()=>[u(H,{path:"hooks"}),o.value==="settings"?(r(),a(C,{key:0,model:e(t)},null,8,["model"])):n("",!0)]),_:1},8,["title"])):n("",!0)]),content:s(()=>[e(t)&&o.value==="test"?(r(),a(S,{key:0,ref_key:"tester",ref:c,hook:e(t),"log-service":e(f)},null,8,["hook","log-service"])):n("",!0),e(t)&&o.value==="settings"?(r(),a(T,{key:1,hook:e(t)},null,8,["hook"])):n("",!0)]),footer:s(()=>{var p;return[e(t)&&o.value==="test"?(r(),a(h,{key:0,runtime:"forms","log-service":e(f),onRestart:(p=c.value)==null?void 0:p.runHook},null,8,["log-service","onRestart"])):n("",!0)]}),_:1}))}});export{le as default};
//# sourceMappingURL=HookEditor.e5f19b04.js.map
