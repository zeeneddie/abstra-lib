import{d as g,ey as v,ez as k,r as _,b as r,c as s,w as a,u as e,f as n,ev as m}from"./outputWidgets.46ba2efb.js";import{S as j,L as w}from"./SmartConsole.de70a6a1.js";import{a as x}from"./asyncComputed.57c65b67.js";import{J as I}from"./jobs.bc83ec86.js";import{_ as B}from"./SaveButton.vue_vue_type_script_setup_true_lang.307a155a.js";import{_ as C}from"./DocsButton.vue_vue_type_script_setup_true_lang.10e00df8.js";import{B as S}from"./BaseLayout.13af3b63.js";import{_ as T,a as $}from"./JobSettings.vue_vue_type_script_setup_true_lang.4b15f6ee.js";import{_ as D}from"./Debugger.vue_vue_type_script_setup_true_lang.7a1e6009.js";import{c as R}from"./index.455e587b.js";import{A as b,T as A}from"./TabPane.4a46f9a4.js";import"./forms.54a7e765.js";import"./activeRecord.e90d1fd3.js";import"./pubsub.c955c307.js";import"./dashes.0057c8c6.js";import"./runnerData.af1b31e2.js";import"./hooks.1bf1eb30.js";import"./workspaces.5fb6d9a3.js";import"./url.bfb405d5.js";import"./icons.2b0d9965.js";import"./Title.bdba5bb9.js";import"./transButton.2cce5150.js";import"./index.c47cf724.js";import"./uuid.de4a9a46.js";import"./ant-design.44571376.js";import"./RunButton.vue_vue_type_script_setup_true_lang.10240816.js";import"./index.3998aaee.js";import"./index.e4218be1.js";import"./dayjs.4e5f45e4.js";import"./Form.6a909b48.js";import"./Text.1ef25f97.js";import"./index.f740f6cd.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p=new Error().stack;p&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[p]="f66d4541-73e5-4dde-8015-8d6f0532ab04",i._sentryDebugIdIdentifier="sentry-dbid-f66d4541-73e5-4dde-8015-8d6f0532ab04")}catch{}})();const fe=g({__name:"JobEditor",setup(i){const p=v(),l=k(),f=_(null),o=_("test");function y(){p.push({name:"jobs"})}const{result:t}=x(()=>I.get(l.params.jobId)),d=w.create();return(J,c)=>(r(),s(S,null,{navbar:a(()=>[e(t)?(r(),s(e(R),{key:0,title:e(t).title,style:{padding:"5px 10px"},onBack:y},{footer:a(()=>[n(e(A),{"active-key":o.value,"onUpdate:activeKey":c[0]||(c[0]=u=>o.value=u)},{default:a(()=>[n(e(b),{key:"test",tab:"Test"}),n(e(b),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:a(()=>[n(D),n(C),o.value==="settings"?(r(),s(B,{key:0,model:e(t)},null,8,["model"])):m("",!0)]),_:1},8,["title"])):m("",!0)]),content:a(()=>[e(t)&&o.value==="test"?(r(),s(T,{key:0,ref_key:"tester",ref:f,job:e(t),"log-service":e(d)},null,8,["job","log-service"])):m("",!0),e(t)&&o.value==="settings"?(r(),s($,{key:1,job:e(t)},null,8,["job"])):m("",!0)]),footer:a(()=>{var u;return[e(t)&&o.value==="test"?(r(),s(j,{key:0,runtime:"forms","log-service":e(d),onRestart:(u=f.value)==null?void 0:u.test},null,8,["log-service","onRestart"])):m("",!0)]}),_:1}))}});export{fe as default};
//# sourceMappingURL=JobEditor.041108bd.js.map
