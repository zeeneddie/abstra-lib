import{d as g,ex as v,ey as b,r as k,b as r,c as a,w as s,u as e,f as l,eu as i}from"./registerWidgets.dc9f1313.js";import{S as h,L as w}from"./SmartConsole.92c3a8ad.js";import{a as x}from"./asyncComputed.b23fa538.js";import{H as B}from"./hooks.bca9f31b.js";import{_ as C}from"./SaveButton.vue_vue_type_script_setup_true_lang.cf83a1ea.js";import{_ as H}from"./DocsButton.vue_vue_type_script_setup_true_lang.c091c375.js";import{B as I}from"./BaseLayout.b7855ada.js";import{_ as S,a as T}from"./HookSettings.vue_vue_type_script_setup_true_lang.a21fad3a.js";import{c as D}from"./index.8fa60cd0.js";import{a as _,T as R}from"./index.a6b470f8.js";import"./forms.24e01f47.js";import"./activeRecord.9995b4c7.js";import"./pubsub.358cbe19.js";import"./dashes.1f1f48eb.js";import"./index.306aab55.js";import"./jobs.f5266e82.js";import"./workspaces.1cc68e1c.js";import"./icons.43fab4f0.js";import"./Title.aac0de3b.js";import"./uuid.4b87b1e8.js";import"./storage.44e69db3.js";import"./ant-design.dd79952f.js";import"./index.aeb5998e.js";import"./index.56fa7ca8.js";import"./index.a5ea279e.js";import"./index.13368493.js";import"./Form.14d2c95c.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[m]="d6573c31-62ee-4585-9b11-a1c23945a59d",n._sentryDebugIdIdentifier="sentry-dbid-d6573c31-62ee-4585-9b11-a1c23945a59d")}catch{}})();const ne=g({__name:"HookEditor",setup(n){const m=v(),c=b(),p=k(null),o=k("test");function y(){m.push({name:"hooks"})}const{result:t}=x(()=>B.get(c.params.hookPath)),f=w.create();return($,d)=>(r(),a(I,null,{navbar:s(()=>[e(t)?(r(),a(e(D),{key:0,title:e(t).title,onBack:y},{footer:s(()=>[l(e(R),{"active-key":o.value,"onUpdate:activeKey":d[0]||(d[0]=u=>o.value=u)},{default:s(()=>[l(e(_),{key:"test",tab:"Test"}),l(e(_),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:s(()=>[l(H,{path:"hooks"}),o.value==="settings"?(r(),a(C,{key:0,model:e(t)},null,8,["model"])):i("",!0)]),_:1},8,["title"])):i("",!0)]),content:s(()=>[e(t)&&o.value==="test"?(r(),a(S,{key:0,ref_key:"tester",ref:p,hook:e(t),"log-service":e(f)},null,8,["hook","log-service"])):i("",!0),e(t)&&o.value==="settings"?(r(),a(T,{key:1,hook:e(t)},null,8,["hook"])):i("",!0)]),footer:s(()=>{var u;return[e(t)&&o.value==="test"?(r(),a(h,{key:0,runtime:"forms","log-service":e(f),onRestart:(u=p.value)==null?void 0:u.runHook},null,8,["log-service","onRestart"])):i("",!0)]}),_:1}))}});export{ne as default};
//# sourceMappingURL=HookEditor.16c3643c.js.map