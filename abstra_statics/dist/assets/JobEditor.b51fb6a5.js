import{d as g,ez as v,eA as k,r as b,b as r,c as s,w as a,u as e,f as u,ew as i}from"./outputWidgets.476f2a51.js";import{S as w,L as j}from"./SmartConsole.7f26c661.js";import{a as I}from"./asyncComputed.c543915e.js";import{J as B}from"./jobs.45aaf2fd.js";import{_ as C}from"./SaveButton.vue_vue_type_script_setup_true_lang.293a4362.js";import{_ as S}from"./DocsButton.vue_vue_type_script_setup_true_lang.88efaeb3.js";import{B as T}from"./BaseLayout.80bd22a1.js";import{_ as x,a as A}from"./JobSettings.vue_vue_type_script_setup_true_lang.dea0a5db.js";import{c as D}from"./index.d3a85ca8.js";import{A as _,T as R}from"./TabPane.ab16f3f2.js";import"./forms.e5579d4a.js";import"./activeRecord.3174fc13.js";import"./pubsub.fbceb8b1.js";import"./dashes.90550fd8.js";import"./index.ce9d146b.js";import"./hooks.7dc0d622.js";import"./workspaces.d443cf9f.js";import"./icons.87949ead.js";import"./Title.571c869b.js";import"./index.8c48751f.js";import"./uuid.8ded734a.js";import"./ant-design.1c01fbf6.js";import"./dayjs.3dcc83a9.js";import"./index.14be91c7.js";import"./Form.620554b6.js";import"./index.3889d6fe.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[m]="84bcd373-2e3b-4b72-98cc-a288f9144c3c",n._sentryDebugIdIdentifier="sentry-dbid-84bcd373-2e3b-4b72-98cc-a288f9144c3c")}catch{}})();const ae=g({__name:"JobEditor",setup(n){const m=v(),l=k(),f=b(null),o=b("test");function y(){m.push({name:"jobs"})}const{result:t}=I(()=>B.get(l.params.jobId)),p=j.create();return($,d)=>(r(),s(T,null,{navbar:a(()=>[e(t)?(r(),s(e(D),{key:0,title:e(t).title,onBack:y},{footer:a(()=>[u(e(R),{"active-key":o.value,"onUpdate:activeKey":d[0]||(d[0]=c=>o.value=c)},{default:a(()=>[u(e(_),{key:"test",tab:"Test"}),u(e(_),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:a(()=>[u(S),o.value==="settings"?(r(),s(C,{key:0,model:e(t)},null,8,["model"])):i("",!0)]),_:1},8,["title"])):i("",!0)]),content:a(()=>[e(t)&&o.value==="test"?(r(),s(x,{key:0,ref_key:"tester",ref:f,job:e(t),"log-service":e(p)},null,8,["job","log-service"])):i("",!0),e(t)&&o.value==="settings"?(r(),s(A,{key:1,job:e(t)},null,8,["job"])):i("",!0)]),footer:a(()=>{var c;return[e(t)&&o.value==="test"?(r(),s(w,{key:0,runtime:"forms","log-service":e(p),onRestart:(c=f.value)==null?void 0:c.test},null,8,["log-service","onRestart"])):i("",!0)]}),_:1}))}});export{ae as default};
//# sourceMappingURL=JobEditor.b51fb6a5.js.map
