import{d as b,ex as g,ey as v,r as k,b as r,c as a,w as s,u as e,f,eu as i}from"./registerWidgets.2031932d.js";import{S as h,L as w}from"./SmartConsole.d0c13dae.js";import{a as x}from"./asyncComputed.57cbb10a.js";import{H as B}from"./hooks.c1ec5474.js";import{_ as C}from"./SaveButton.vue_vue_type_script_setup_true_lang.c0e86fd4.js";import{_ as H}from"./DocsButton.vue_vue_type_script_setup_true_lang.bf51a812.js";import{B as I}from"./BaseLayout.c048975a.js";import{_ as S,a as T}from"./HookSettings.vue_vue_type_script_setup_true_lang.5eb23805.js";import{c as D}from"./index.5a7b7c6a.js";import{a as _,T as R}from"./index.b16d118e.js";import"./forms.12f7b751.js";import"./activeRecord.7b173443.js";import"./pubsub.9625b443.js";import"./dashes.1acea272.js";import"./index.92e22978.js";import"./jobs.a906ca62.js";import"./workspaces.1906fd86.js";import"./icons.3cd62928.js";import"./Title.6d39f4ca.js";import"./transButton.d9059bcf.js";import"./FormItem.b791fd49.js";import"./uuid.f2026848.js";import"./storage.8b8c0b1c.js";import"./index.c3ca64f4.js";import"./index.52845d1d.js";import"./index.b4b072a9.js";import"./index.29b38c7d.js";import"./Form.422a7411.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[m]="e58774e4-ab0d-4c67-9fc6-3a60b9f7b84f",n._sentryDebugIdIdentifier="sentry-dbid-e58774e4-ab0d-4c67-9fc6-3a60b9f7b84f")}catch{}})();const ie=b({__name:"HookEditor",setup(n){const m=g(),l=v(),c=k(null),o=k("test");function y(){m.push({name:"hooks"})}const{result:t}=x(()=>B.get(l.params.hookPath)),p=w.create();return($,d)=>(r(),a(I,null,{navbar:s(()=>[e(t)?(r(),a(e(D),{key:0,title:e(t).title,onBack:y},{footer:s(()=>[f(e(R),{"active-key":o.value,"onUpdate:activeKey":d[0]||(d[0]=u=>o.value=u)},{default:s(()=>[f(e(_),{key:"test",tab:"Test"}),f(e(_),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:s(()=>[f(H,{path:"hooks"}),o.value==="settings"?(r(),a(C,{key:0,model:e(t)},null,8,["model"])):i("",!0)]),_:1},8,["title"])):i("",!0)]),content:s(()=>[e(t)&&o.value==="test"?(r(),a(S,{key:0,ref_key:"tester",ref:c,hook:e(t),"log-service":e(p)},null,8,["hook","log-service"])):i("",!0),e(t)&&o.value==="settings"?(r(),a(T,{key:1,hook:e(t)},null,8,["hook"])):i("",!0)]),footer:s(()=>{var u;return[e(t)&&o.value==="test"?(r(),a(h,{key:0,runtime:"forms","log-service":e(p),onRestart:(u=c.value)==null?void 0:u.runHook},null,8,["log-service","onRestart"])):i("",!0)]}),_:1}))}});export{ie as default};
//# sourceMappingURL=HookEditor.53013f7b.js.map
