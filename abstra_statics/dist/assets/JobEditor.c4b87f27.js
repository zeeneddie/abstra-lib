import{d as g,ex as v,ey as k,r as b,b as r,c as s,w as a,u as e,f,eu as i}from"./registerWidgets.1e9167ab.js";import{S as j,L as w}from"./SmartConsole.035658a5.js";import{a as I}from"./asyncComputed.8a644895.js";import{J as x}from"./jobs.10e8045a.js";import{_ as B}from"./SaveButton.vue_vue_type_script_setup_true_lang.77a4e1fa.js";import{_ as C}from"./DocsButton.vue_vue_type_script_setup_true_lang.5ae278fd.js";import{B as S}from"./BaseLayout.6055d322.js";import{_ as T,a as D}from"./JobSettings.vue_vue_type_script_setup_true_lang.df132f31.js";import{c as R}from"./index.4b30ebdc.js";import{a as _,T as $}from"./index.b4361545.js";import"./forms.5cb504dd.js";import"./activeRecord.60b6bd01.js";import"./pubsub.09eafe35.js";import"./dashes.6c2a613d.js";import"./index.89742732.js";import"./hooks.9dbb5925.js";import"./workspaces.681666ae.js";import"./icons.41af03d8.js";import"./Title.d1f45d59.js";import"./transButton.755e702e.js";import"./FormItem.7ea68eff.js";import"./uuid.eb101573.js";import"./storage.84fcb572.js";import"./dayjs.3081011a.js";import"./index.ff683f30.js";import"./Form.0a031d70.js";import"./index.d74062f4.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[m]="2ffe5abb-00f4-4ae0-8237-6980e81c3d7e",n._sentryDebugIdIdentifier="sentry-dbid-2ffe5abb-00f4-4ae0-8237-6980e81c3d7e")}catch{}})();const ne=g({__name:"JobEditor",setup(n){const m=v(),l=k(),c=b(null),o=b("test");function y(){m.push({name:"jobs"})}const{result:t}=I(()=>x.get(l.params.jobId)),p=w.create();return(J,d)=>(r(),s(S,null,{navbar:a(()=>[e(t)?(r(),s(e(R),{key:0,title:e(t).title,onBack:y},{footer:a(()=>[f(e($),{"active-key":o.value,"onUpdate:activeKey":d[0]||(d[0]=u=>o.value=u)},{default:a(()=>[f(e(_),{key:"test",tab:"Test"}),f(e(_),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:a(()=>[f(C),o.value==="settings"?(r(),s(B,{key:0,model:e(t)},null,8,["model"])):i("",!0)]),_:1},8,["title"])):i("",!0)]),content:a(()=>[e(t)&&o.value==="test"?(r(),s(T,{key:0,ref_key:"tester",ref:c,job:e(t),"log-service":e(p)},null,8,["job","log-service"])):i("",!0),e(t)&&o.value==="settings"?(r(),s(D,{key:1,job:e(t)},null,8,["job"])):i("",!0)]),footer:a(()=>{var u;return[e(t)&&o.value==="test"?(r(),s(j,{key:0,runtime:"forms","log-service":e(p),onRestart:(u=c.value)==null?void 0:u.test},null,8,["log-service","onRestart"])):i("",!0)]}),_:1}))}});export{ne as default};
//# sourceMappingURL=JobEditor.c4b87f27.js.map
