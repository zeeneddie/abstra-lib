import{d as g,ez as v,eA as k,r as b,b as r,c as s,w as a,u as e,f as l,ew as i}from"./outputWidgets.b13a87c2.js";import{S as w,L as j}from"./SmartConsole.a7d3a3a2.js";import{a as I}from"./asyncComputed.02afd50e.js";import{J as B}from"./jobs.a3ced864.js";import{_ as C}from"./SaveButton.vue_vue_type_script_setup_true_lang.cfe351b9.js";import{_ as S}from"./DocsButton.vue_vue_type_script_setup_true_lang.db34d7f2.js";import{B as T}from"./BaseLayout.a36af3c6.js";import{_ as x,a as A}from"./JobSettings.vue_vue_type_script_setup_true_lang.5ea6274b.js";import{c as D}from"./index.3d7f8177.js";import{A as _,T as R}from"./TabPane.3cb0210e.js";import"./forms.c0c5fcb0.js";import"./activeRecord.f5a2d19d.js";import"./pubsub.dab46576.js";import"./dashes.4926394c.js";import"./index.98e61e8e.js";import"./hooks.b78152bb.js";import"./workspaces.f986af40.js";import"./icons.76c1fe8b.js";import"./Title.6f86755a.js";import"./index.1b5bc05c.js";import"./uuid.8237862c.js";import"./ant-design.b9e555b3.js";import"./dayjs.2e90d17d.js";import"./index.fbf04eaa.js";import"./Form.e21e0d73.js";import"./index.55a2786b.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[m]="8420642e-28b1-4f86-83cd-b331e525e0c9",n._sentryDebugIdIdentifier="sentry-dbid-8420642e-28b1-4f86-83cd-b331e525e0c9")}catch{}})();const ae=g({__name:"JobEditor",setup(n){const m=v(),c=k(),f=b(null),o=b("test");function y(){m.push({name:"jobs"})}const{result:t}=I(()=>B.get(c.params.jobId)),p=j.create();return($,d)=>(r(),s(T,null,{navbar:a(()=>[e(t)?(r(),s(e(D),{key:0,title:e(t).title,onBack:y},{footer:a(()=>[l(e(R),{"active-key":o.value,"onUpdate:activeKey":d[0]||(d[0]=u=>o.value=u)},{default:a(()=>[l(e(_),{key:"test",tab:"Test"}),l(e(_),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:a(()=>[l(S),o.value==="settings"?(r(),s(C,{key:0,model:e(t)},null,8,["model"])):i("",!0)]),_:1},8,["title"])):i("",!0)]),content:a(()=>[e(t)&&o.value==="test"?(r(),s(x,{key:0,ref_key:"tester",ref:f,job:e(t),"log-service":e(p)},null,8,["job","log-service"])):i("",!0),e(t)&&o.value==="settings"?(r(),s(A,{key:1,job:e(t)},null,8,["job"])):i("",!0)]),footer:a(()=>{var u;return[e(t)&&o.value==="test"?(r(),s(w,{key:0,runtime:"forms","log-service":e(p),onRestart:(u=f.value)==null?void 0:u.test},null,8,["log-service","onRestart"])):i("",!0)]}),_:1}))}});export{ae as default};
//# sourceMappingURL=JobEditor.36328a02.js.map
