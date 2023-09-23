import{d as g,ey as k,ex as w,b as s,c as m,w as n,b0 as h,u as e,cb as x,r as y,f as i,eu as p,eD as B}from"./registerWidgets.1e9167ab.js";import{_ as C,a as $}from"./FormTester.vue_vue_type_script_setup_true_lang.e8d42aa3.js";import{S as I,L as P}from"./SmartConsole.035658a5.js";import{a as R}from"./asyncComputed.8a644895.js";import{F as T}from"./forms.5cb504dd.js";import{W as D}from"./workspaces.681666ae.js";import{_ as S}from"./SaveButton.vue_vue_type_script_setup_true_lang.77a4e1fa.js";import{_ as N}from"./DocsButton.vue_vue_type_script_setup_true_lang.5ae278fd.js";import{B as F}from"./BaseLayout.6055d322.js";import{a as b,T as L}from"./index.b4361545.js";import"./index.d8a9ea06.js";import{c as V}from"./index.4b30ebdc.js";import"./Title.d1f45d59.js";import"./transButton.755e702e.js";import"./FormItem.7ea68eff.js";import"./Form.0a031d70.js";import"./broker.d4f9d0c3.js";import"./passwordlessManager.b7f590c1.js";import"./pubsub.09eafe35.js";import"./storage.84fcb572.js";import"./Passwordless.a466b928.js";import"./CircularLoading.b699e65c.js";import"./icons.41af03d8.js";import"./executeJs.994915b2.js";import"./PlayerNavbar.399148eb.js";import"./index.89742732.js";import"./Steps.64a40e70.js";import"./Modal.b646cd22.js";import"./WidgetsFrame.75884b13.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.2753de3d.js";import"./dashes.6c2a613d.js";import"./activeRecord.60b6bd01.js";import"./hooks.9dbb5925.js";import"./jobs.10e8045a.js";import"./uuid.eb101573.js";import"./index.d74062f4.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="f0dc9e5f-6205-4a84-8fd4-89352dc208b5",r._sentryDebugIdIdentifier="sentry-dbid-f0dc9e5f-6205-4a84-8fd4-89352dc208b5")}catch{}})();const q=g({__name:"PreviewButton",props:{model:{}},setup(r){const a=r,u=k(),c=w(),o=()=>{const f=u.query;c.push({path:`/_editor/${a.model.routeName}/${encodeURIComponent(a.model.path)}/preview`,query:f})};return(f,t)=>(s(),m(e(x),{class:"preview-button",onClick:o},{default:n(()=>[h(" Preview ")]),_:1}))}}),ke=g({__name:"FormEditor",setup(r){const a=w(),u=k(),c=y(null),o=y("test");function f(){a.push({name:"forms"})}const{result:t}=R(()=>Promise.all([D.get(),T.get(u.params.formPath)]).then(([v,l])=>B({workspace:v,form:l}))),_=P.create();return(v,l)=>(s(),m(F,{"full-canvas":o.value==="test"},{navbar:n(()=>[e(t)?(s(),m(e(V),{key:0,title:e(t).form.title,onBack:f},{footer:n(()=>[i(e(L),{"active-key":o.value,"onUpdate:activeKey":l[0]||(l[0]=d=>o.value=d)},{default:n(()=>[i(e(b),{key:"test",tab:"Test"}),i(e(b),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:n(()=>[i(N,{path:"forms/overview"}),i(q,{model:e(t).form},null,8,["model"]),o.value==="settings"?(s(),m(S,{key:0,model:e(t).form},null,8,["model"])):p("",!0)]),_:1},8,["title"])):p("",!0)]),content:n(()=>[e(t)&&o.value==="test"?(s(),m(C,{key:0,ref_key:"tester",ref:c,form:e(t).form,"log-service":e(_)},null,8,["form","log-service"])):p("",!0),e(t)&&o.value==="settings"?(s(),m($,{key:1,form:e(t).form},null,8,["form"])):p("",!0)]),footer:n(()=>{var d;return[e(t)&&o.value==="test"?(s(),m(I,{key:0,runtime:"forms","log-service":e(_),onRestart:(d=c.value)==null?void 0:d.restart},null,8,["log-service","onRestart"])):p("",!0)]}),_:1},8,["full-canvas"]))}});export{ke as default};
//# sourceMappingURL=FormEditor.f106e3d3.js.map
