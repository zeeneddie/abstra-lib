import{d as g,ex as v,ey as k,r as _,b as r,c as a,w as s,u as e,f as l,eu as i}from"./registerWidgets.2031932d.js";import{S as j,L as w}from"./SmartConsole.d0c13dae.js";import{a as I}from"./asyncComputed.57cbb10a.js";import{J as x}from"./jobs.a906ca62.js";import{_ as B}from"./SaveButton.vue_vue_type_script_setup_true_lang.c0e86fd4.js";import{_ as C}from"./DocsButton.vue_vue_type_script_setup_true_lang.bf51a812.js";import{B as S}from"./BaseLayout.c048975a.js";import{_ as T,a as D}from"./JobSettings.vue_vue_type_script_setup_true_lang.73aaa670.js";import{c as R}from"./index.5a7b7c6a.js";import{a as b,T as $}from"./index.b16d118e.js";import"./forms.12f7b751.js";import"./activeRecord.7b173443.js";import"./pubsub.9625b443.js";import"./dashes.1acea272.js";import"./index.92e22978.js";import"./hooks.c1ec5474.js";import"./workspaces.1906fd86.js";import"./icons.3cd62928.js";import"./Title.6d39f4ca.js";import"./transButton.d9059bcf.js";import"./FormItem.b791fd49.js";import"./uuid.f2026848.js";import"./storage.8b8c0b1c.js";import"./dayjs.8e62b4eb.js";import"./index.c3ca64f4.js";import"./Form.422a7411.js";import"./index.b4b072a9.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[m]="6ece5756-3307-4a4c-a1a1-261a61220633",n._sentryDebugIdIdentifier="sentry-dbid-6ece5756-3307-4a4c-a1a1-261a61220633")}catch{}})();const ne=g({__name:"JobEditor",setup(n){const m=v(),c=k(),p=_(null),o=_("test");function y(){m.push({name:"jobs"})}const{result:t}=I(()=>x.get(c.params.jobId)),f=w.create();return(J,d)=>(r(),a(S,null,{navbar:s(()=>[e(t)?(r(),a(e(R),{key:0,title:e(t).title,onBack:y},{footer:s(()=>[l(e($),{"active-key":o.value,"onUpdate:activeKey":d[0]||(d[0]=u=>o.value=u)},{default:s(()=>[l(e(b),{key:"test",tab:"Test"}),l(e(b),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:s(()=>[l(C),o.value==="settings"?(r(),a(B,{key:0,model:e(t)},null,8,["model"])):i("",!0)]),_:1},8,["title"])):i("",!0)]),content:s(()=>[e(t)&&o.value==="test"?(r(),a(T,{key:0,ref_key:"tester",ref:p,job:e(t),"log-service":e(f)},null,8,["job","log-service"])):i("",!0),e(t)&&o.value==="settings"?(r(),a(D,{key:1,job:e(t)},null,8,["job"])):i("",!0)]),footer:s(()=>{var u;return[e(t)&&o.value==="test"?(r(),a(j,{key:0,runtime:"forms","log-service":e(f),onRestart:(u=p.value)==null?void 0:u.test},null,8,["log-service","onRestart"])):i("",!0)]}),_:1}))}});export{ne as default};
//# sourceMappingURL=JobEditor.5eada2bb.js.map
