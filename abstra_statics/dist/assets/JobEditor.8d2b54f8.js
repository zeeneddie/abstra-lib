import{d as g,ez as v,eA as k,r as b,b as r,c as a,w as s,u as e,f as u,ew as n}from"./outputWidgets.cf5b7366.js";import{S as w,L as j}from"./SmartConsole.cae61376.js";import{a as x}from"./asyncComputed.2caa7fe6.js";import{J as I}from"./jobs.b1b148c3.js";import{_ as B}from"./SaveButton.vue_vue_type_script_setup_true_lang.75a1c197.js";import{_ as C}from"./DocsButton.vue_vue_type_script_setup_true_lang.f865416e.js";import{B as S}from"./BaseLayout.03efcbf5.js";import{_ as T,a as A}from"./JobSettings.vue_vue_type_script_setup_true_lang.60a6c24d.js";import{c as D}from"./index.21604c00.js";import{A as _,T as R}from"./TabPane.730cc561.js";import"./forms.0c753bf9.js";import"./activeRecord.f30e02c2.js";import"./pubsub.664a70af.js";import"./dashes.75890af5.js";import"./index.3d2fbf9e.js";import"./hooks.8d5e93d9.js";import"./workspaces.510e9023.js";import"./url.fb40e08c.js";import"./icons.c510a141.js";import"./Title.adce1298.js";import"./index.aee8b5d5.js";import"./uuid.8fd92523.js";import"./ant-design.55c856ad.js";import"./RunButton.vue_vue_type_script_setup_true_lang.d83f32d7.js";import"./index.50be7881.js";import"./index.47f17eed.js";import"./dayjs.4b3e669b.js";import"./Form.c8affe88.js";import"./index.10cdfb2c.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[m]="17b2596d-b969-4b98-ab78-a824e1409a5a",i._sentryDebugIdIdentifier="sentry-dbid-17b2596d-b969-4b98-ab78-a824e1409a5a")}catch{}})();const me=g({__name:"JobEditor",setup(i){const m=v(),l=k(),c=b(null),o=b("test");function y(){m.push({name:"jobs"})}const{result:t}=x(()=>I.get(l.params.jobId)),f=j.create();return($,d)=>(r(),a(S,null,{navbar:s(()=>[e(t)?(r(),a(e(D),{key:0,title:e(t).title,style:{padding:"5px 10px"},onBack:y},{footer:s(()=>[u(e(R),{"active-key":o.value,"onUpdate:activeKey":d[0]||(d[0]=p=>o.value=p)},{default:s(()=>[u(e(_),{key:"test",tab:"Test"}),u(e(_),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:s(()=>[u(C),o.value==="settings"?(r(),a(B,{key:0,model:e(t)},null,8,["model"])):n("",!0)]),_:1},8,["title"])):n("",!0)]),content:s(()=>[e(t)&&o.value==="test"?(r(),a(T,{key:0,ref_key:"tester",ref:c,job:e(t),"log-service":e(f)},null,8,["job","log-service"])):n("",!0),e(t)&&o.value==="settings"?(r(),a(A,{key:1,job:e(t)},null,8,["job"])):n("",!0)]),footer:s(()=>{var p;return[e(t)&&o.value==="test"?(r(),a(w,{key:0,runtime:"forms","log-service":e(f),onRestart:(p=c.value)==null?void 0:p.test},null,8,["log-service","onRestart"])):n("",!0)]}),_:1}))}});export{me as default};
//# sourceMappingURL=JobEditor.8d2b54f8.js.map
