import{d as g,ex as v,ey as b,r as k,b as r,c as s,w as a,u as e,f as l,eu as i}from"./registerWidgets.6188faf0.js";import{S as h,L as w}from"./SmartConsole.708bad32.js";import{a as x}from"./asyncComputed.6cbf0d62.js";import{H as B}from"./hooks.ffe7005d.js";import{_ as C}from"./SaveButton.vue_vue_type_script_setup_true_lang.f3b42cfb.js";import{_ as H}from"./DocsButton.vue_vue_type_script_setup_true_lang.07f1f132.js";import{B as I}from"./BaseLayout.0e6d53ae.js";import{_ as S,a as T}from"./HookSettings.vue_vue_type_script_setup_true_lang.549d93cc.js";import{c as D}from"./index.8da7f344.js";import{a as _,T as R}from"./index.6aca739c.js";import"./forms.851ebcc3.js";import"./activeRecord.e8c526b6.js";import"./pubsub.7d8aa3c3.js";import"./dashes.edb88ed4.js";import"./index.56e4dc82.js";import"./jobs.2902ef13.js";import"./workspaces.3815c537.js";import"./icons.c657f916.js";import"./Title.214d96cd.js";import"./transButton.09f1c61d.js";import"./FormItem.5245f233.js";import"./uuid.1c988e25.js";import"./storage.f7fb1c95.js";import"./index.a32d3716.js";import"./index.adbf87a8.js";import"./index.8ddb3d62.js";import"./index.5089a144.js";import"./Form.bf1af152.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[m]="05443984-8974-4f59-98f6-8871da639bc5",n._sentryDebugIdIdentifier="sentry-dbid-05443984-8974-4f59-98f6-8871da639bc5")}catch{}})();const ie=g({__name:"HookEditor",setup(n){const m=v(),p=b(),f=k(null),o=k("test");function y(){m.push({name:"hooks"})}const{result:t}=x(()=>B.get(p.params.hookPath)),c=w.create();return($,d)=>(r(),s(I,null,{navbar:a(()=>[e(t)?(r(),s(e(D),{key:0,title:e(t).title,onBack:y},{footer:a(()=>[l(e(R),{"active-key":o.value,"onUpdate:activeKey":d[0]||(d[0]=u=>o.value=u)},{default:a(()=>[l(e(_),{key:"test",tab:"Test"}),l(e(_),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:a(()=>[l(H,{path:"hooks"}),o.value==="settings"?(r(),s(C,{key:0,model:e(t)},null,8,["model"])):i("",!0)]),_:1},8,["title"])):i("",!0)]),content:a(()=>[e(t)&&o.value==="test"?(r(),s(S,{key:0,ref_key:"tester",ref:f,hook:e(t),"log-service":e(c)},null,8,["hook","log-service"])):i("",!0),e(t)&&o.value==="settings"?(r(),s(T,{key:1,hook:e(t)},null,8,["hook"])):i("",!0)]),footer:a(()=>{var u;return[e(t)&&o.value==="test"?(r(),s(h,{key:0,runtime:"forms","log-service":e(c),onRestart:(u=f.value)==null?void 0:u.runHook},null,8,["log-service","onRestart"])):i("",!0)]}),_:1}))}});export{ie as default};
//# sourceMappingURL=HookEditor.c5fc023d.js.map
