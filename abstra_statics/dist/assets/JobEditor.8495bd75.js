import{d as g,ex as v,ey as k,r as d,b as r,c as s,w as a,u as e,f as l,eu as i}from"./registerWidgets.faf49e08.js";import{S as j,L as w}from"./SmartConsole.6d2b3045.js";import{a as I}from"./asyncComputed.70c50dd2.js";import{J as x}from"./jobs.96e90e4c.js";import{_ as B}from"./SaveButton.vue_vue_type_script_setup_true_lang.2808d1a6.js";import{_ as C}from"./DocsButton.vue_vue_type_script_setup_true_lang.d6a2f39c.js";import{B as S}from"./BaseLayout.2545ec4d.js";import{_ as T,a as D}from"./JobSettings.vue_vue_type_script_setup_true_lang.041228f9.js";import{c as R}from"./index.d5a89d63.js";import{a as _,T as $}from"./index.65170895.js";import"./forms.87eac015.js";import"./activeRecord.a639288f.js";import"./pubsub.04fb37b2.js";import"./dashes.e9024cfc.js";import"./index.b0babef5.js";import"./hooks.487cca4e.js";import"./workspaces.5a397dd7.js";import"./icons.18b78fe3.js";import"./Title.a7f9a7d9.js";import"./transButton.4230aac2.js";import"./FormItem.b7aa4c27.js";import"./uuid.0244e198.js";import"./storage.0aff2700.js";import"./dayjs.f2318b0b.js";import"./index.2d98cc0f.js";import"./Form.4d822450.js";import"./index.e6dcb33c.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[m]="b1c2b98b-8103-4360-b2ff-8d5883a1a19c",n._sentryDebugIdIdentifier="sentry-dbid-b1c2b98b-8103-4360-b2ff-8d5883a1a19c")}catch{}})();const ne=g({__name:"JobEditor",setup(n){const m=v(),c=k(),f=d(null),o=d("test");function y(){m.push({name:"jobs"})}const{result:t}=I(()=>x.get(c.params.jobId)),p=w.create();return(J,b)=>(r(),s(S,null,{navbar:a(()=>[e(t)?(r(),s(e(R),{key:0,title:e(t).title,onBack:y},{footer:a(()=>[l(e($),{"active-key":o.value,"onUpdate:activeKey":b[0]||(b[0]=u=>o.value=u)},{default:a(()=>[l(e(_),{key:"test",tab:"Test"}),l(e(_),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:a(()=>[l(C),o.value==="settings"?(r(),s(B,{key:0,model:e(t)},null,8,["model"])):i("",!0)]),_:1},8,["title"])):i("",!0)]),content:a(()=>[e(t)&&o.value==="test"?(r(),s(T,{key:0,ref_key:"tester",ref:f,job:e(t),"log-service":e(p)},null,8,["job","log-service"])):i("",!0),e(t)&&o.value==="settings"?(r(),s(D,{key:1,job:e(t)},null,8,["job"])):i("",!0)]),footer:a(()=>{var u;return[e(t)&&o.value==="test"?(r(),s(j,{key:0,runtime:"forms","log-service":e(p),onRestart:(u=f.value)==null?void 0:u.test},null,8,["log-service","onRestart"])):i("",!0)]}),_:1}))}});export{ne as default};
//# sourceMappingURL=JobEditor.8495bd75.js.map
