import{d as g,eA as v,eB as k,r as b,b as r,c as a,w as s,u as e,f as n,ew as m}from"./outputWidgets.89c081d6.js";import{S as w,L as j}from"./SmartConsole.b62e1a21.js";import{a as x}from"./asyncComputed.c992043d.js";import{J as B}from"./jobs.eb172be8.js";import{_ as I}from"./SaveButton.vue_vue_type_script_setup_true_lang.8a7d4956.js";import{_ as C}from"./DocsButton.vue_vue_type_script_setup_true_lang.46109fda.js";import{B as S}from"./BaseLayout.141f6a3f.js";import{_ as T,a as $}from"./JobSettings.vue_vue_type_script_setup_true_lang.16d4c666.js";import{_ as A}from"./Debugger.vue_vue_type_script_setup_true_lang.0e3a1267.js";import{c as D}from"./index.9f5353e1.js";import{A as _,T as R}from"./TabPane.967df44f.js";import"./forms.b35cefe3.js";import"./activeRecord.43132be4.js";import"./pubsub.fe0d8321.js";import"./dashes.b762cb46.js";import"./runnerData.f02c8762.js";import"./hooks.017383ef.js";import"./workspaces.9db37c13.js";import"./url.d5ac8fae.js";import"./icons.dfde2472.js";import"./Title.61dedb2a.js";import"./transButton.24d66b27.js";import"./index.fa36e8c7.js";import"./uuid.7abc1d5f.js";import"./ant-design.0e417dea.js";import"./RunButton.vue_vue_type_script_setup_true_lang.eeba0082.js";import"./index.b97b091d.js";import"./index.97b6a429.js";import"./dayjs.9b20bea2.js";import"./Form.094bba7e.js";import"./Text.474082f1.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p=new Error().stack;p&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[p]="e4d39378-4a40-43c0-9a37-b31aa5f5ebc4",i._sentryDebugIdIdentifier="sentry-dbid-e4d39378-4a40-43c0-9a37-b31aa5f5ebc4")}catch{}})();const le=g({__name:"JobEditor",setup(i){const p=v(),l=k(),c=b(null),o=b("test");function y(){p.push({name:"jobs"})}const{result:t}=x(()=>B.get(l.params.jobId)),f=j.create();return(J,d)=>(r(),a(S,null,{navbar:s(()=>[e(t)?(r(),a(e(D),{key:0,title:e(t).title,style:{padding:"5px 10px"},onBack:y},{footer:s(()=>[n(e(R),{"active-key":o.value,"onUpdate:activeKey":d[0]||(d[0]=u=>o.value=u)},{default:s(()=>[n(e(_),{key:"test",tab:"Test"}),n(e(_),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:s(()=>[n(A),n(C),o.value==="settings"?(r(),a(I,{key:0,model:e(t)},null,8,["model"])):m("",!0)]),_:1},8,["title"])):m("",!0)]),content:s(()=>[e(t)&&o.value==="test"?(r(),a(T,{key:0,ref_key:"tester",ref:c,job:e(t),"log-service":e(f)},null,8,["job","log-service"])):m("",!0),e(t)&&o.value==="settings"?(r(),a($,{key:1,job:e(t)},null,8,["job"])):m("",!0)]),footer:s(()=>{var u;return[e(t)&&o.value==="test"?(r(),a(w,{key:0,runtime:"forms","log-service":e(f),onRestart:(u=c.value)==null?void 0:u.test},null,8,["log-service","onRestart"])):m("",!0)]}),_:1}))}});export{le as default};
//# sourceMappingURL=JobEditor.2679c900.js.map
