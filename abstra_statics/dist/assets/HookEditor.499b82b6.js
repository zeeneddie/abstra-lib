import{d as b,ez as g,eA as v,r as k,b as r,c as s,w as a,u as e,f as u,ew as n}from"./outputWidgets.65926c1d.js";import{S as h,L as w}from"./SmartConsole.fd1185cf.js";import{a as x}from"./asyncComputed.4723d9b8.js";import{H as B}from"./hooks.4d601fd1.js";import{_ as C}from"./SaveButton.vue_vue_type_script_setup_true_lang.640515bd.js";import{_ as H}from"./DocsButton.vue_vue_type_script_setup_true_lang.ecd1b9ae.js";import{B as I}from"./BaseLayout.7f35e98f.js";import{_ as S,a as T}from"./HookSettings.vue_vue_type_script_setup_true_lang.62c6a991.js";import{c as A}from"./index.205aa6f9.js";import{A as _,T as D}from"./TabPane.844c7fcb.js";import"./forms.06ee06be.js";import"./activeRecord.994400e6.js";import"./pubsub.dc5bec39.js";import"./dashes.5b745c3f.js";import"./index.553ada1f.js";import"./jobs.4fb3de9f.js";import"./workspaces.d75870ed.js";import"./url.bc2b44ba.js";import"./icons.da7d27cd.js";import"./Title.2cced18a.js";import"./index.006c6212.js";import"./uuid.d95c8d0f.js";import"./ant-design.14676eb3.js";import"./StageRunSelector.vue_vue_type_script_setup_true_lang.435f2f79.js";import"./RunButton.vue_vue_type_script_setup_true_lang.e3f0b122.js";import"./index.2fb88cee.js";import"./index.73801d39.js";import"./CollapsePanel.2356d198.js";import"./index.1bb9605d.js";import"./index.59a2d779.js";import"./index.0312767e.js";import"./Form.47548ee6.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[m]="290914a4-d323-4f1e-8b91-0b3a67f677ed",i._sentryDebugIdIdentifier="sentry-dbid-290914a4-d323-4f1e-8b91-0b3a67f677ed")}catch{}})();const le=b({__name:"HookEditor",setup(i){const m=g(),l=v(),f=k(null),o=k("test");function y(){m.push({name:"hooks"})}const{result:t}=x(()=>B.get(l.params.hookPath)),c=w.create();return(R,d)=>(r(),s(I,null,{navbar:a(()=>[e(t)?(r(),s(e(A),{key:0,title:e(t).title,style:{padding:"5px 10px"},onBack:y},{footer:a(()=>[u(e(D),{"active-key":o.value,"onUpdate:activeKey":d[0]||(d[0]=p=>o.value=p)},{default:a(()=>[u(e(_),{key:"test",tab:"Test"}),u(e(_),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:a(()=>[u(H,{path:"hooks"}),o.value==="settings"?(r(),s(C,{key:0,model:e(t)},null,8,["model"])):n("",!0)]),_:1},8,["title"])):n("",!0)]),content:a(()=>[e(t)&&o.value==="test"?(r(),s(S,{key:0,ref_key:"tester",ref:f,hook:e(t),"log-service":e(c)},null,8,["hook","log-service"])):n("",!0),e(t)&&o.value==="settings"?(r(),s(T,{key:1,hook:e(t)},null,8,["hook"])):n("",!0)]),footer:a(()=>{var p;return[e(t)&&o.value==="test"?(r(),s(h,{key:0,runtime:"forms","log-service":e(c),onRestart:(p=f.value)==null?void 0:p.runHook},null,8,["log-service","onRestart"])):n("",!0)]}),_:1}))}});export{le as default};
//# sourceMappingURL=HookEditor.499b82b6.js.map
