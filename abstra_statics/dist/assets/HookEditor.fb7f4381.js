import{d as g,ez as v,eA as b,r as k,b as r,c as s,w as a,u as e,f as u,ew as n}from"./outputWidgets.51bf7797.js";import{S as h,L as w}from"./SmartConsole.278a1f0c.js";import{a as x}from"./asyncComputed.21e91621.js";import{H as B}from"./hooks.28383bfc.js";import{_ as C}from"./SaveButton.vue_vue_type_script_setup_true_lang.d93ece16.js";import{_ as H}from"./DocsButton.vue_vue_type_script_setup_true_lang.3e012103.js";import{B as I}from"./BaseLayout.58212a38.js";import{_ as S,a as T}from"./HookSettings.vue_vue_type_script_setup_true_lang.dad15380.js";import{c as A}from"./index.6a85c4cf.js";import{A as _,T as D}from"./TabPane.ebdfbf96.js";import"./forms.fa61d39c.js";import"./activeRecord.6b597982.js";import"./pubsub.57f09ced.js";import"./dashes.92455113.js";import"./index.d1ab863b.js";import"./jobs.bac9d0c8.js";import"./workspaces.06f07bd2.js";import"./url.6c50ef27.js";import"./icons.3dbf3493.js";import"./Title.e753a451.js";import"./index.e767adaa.js";import"./uuid.da6b9064.js";import"./ant-design.b48e7327.js";import"./StageRunSelector.vue_vue_type_script_setup_true_lang.06ca8da4.js";import"./RunButton.vue_vue_type_script_setup_true_lang.c3b0502d.js";import"./index.417957d3.js";import"./index.e3e7c9ba.js";import"./CollapsePanel.060ed900.js";import"./index.c83d37e6.js";import"./index.8916ba17.js";import"./index.9850a290.js";import"./Form.11a934e4.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[m]="6db310c8-7909-40a1-9de7-6da51126e935",i._sentryDebugIdIdentifier="sentry-dbid-6db310c8-7909-40a1-9de7-6da51126e935")}catch{}})();const le=g({__name:"HookEditor",setup(i){const m=v(),l=b(),c=k(null),o=k("test");function y(){m.push({name:"hooks"})}const{result:t}=x(()=>B.get(l.params.hookPath)),d=w.create();return(R,f)=>(r(),s(I,null,{navbar:a(()=>[e(t)?(r(),s(e(A),{key:0,title:e(t).title,style:{padding:"5px 10px"},onBack:y},{footer:a(()=>[u(e(D),{"active-key":o.value,"onUpdate:activeKey":f[0]||(f[0]=p=>o.value=p)},{default:a(()=>[u(e(_),{key:"test",tab:"Test"}),u(e(_),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:a(()=>[u(H,{path:"hooks"}),o.value==="settings"?(r(),s(C,{key:0,model:e(t)},null,8,["model"])):n("",!0)]),_:1},8,["title"])):n("",!0)]),content:a(()=>[e(t)&&o.value==="test"?(r(),s(S,{key:0,ref_key:"tester",ref:c,hook:e(t),"log-service":e(d)},null,8,["hook","log-service"])):n("",!0),e(t)&&o.value==="settings"?(r(),s(T,{key:1,hook:e(t)},null,8,["hook"])):n("",!0)]),footer:a(()=>{var p;return[e(t)&&o.value==="test"?(r(),s(h,{key:0,runtime:"forms","log-service":e(d),onRestart:(p=c.value)==null?void 0:p.runHook},null,8,["log-service","onRestart"])):n("",!0)]}),_:1}))}});export{le as default};
//# sourceMappingURL=HookEditor.fb7f4381.js.map
