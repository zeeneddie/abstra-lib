import{d as b,ez as k,ey as h,b as s,c as m,w as i,aI as $,u as e,c0 as B,r as y,J as C,f as p,ev as f,eE as I}from"./outputWidgets.045188bd.js";import{_ as P,a as R}from"./FormTester.vue_vue_type_script_setup_true_lang.d7b556bc.js";import{S as T,L as S}from"./SmartConsole.2ecaeb7d.js";import{a as D}from"./asyncComputed.06133f02.js";import{F as N}from"./forms.53add417.js";import{W as A}from"./workspaces.4a7fbc34.js";import{_ as E}from"./SaveButton.vue_vue_type_script_setup_true_lang.9276752b.js";import{_ as F}from"./DocsButton.vue_vue_type_script_setup_true_lang.00692ab2.js";import{_ as L}from"./LaunchButton.vue_vue_type_script_setup_true_lang.27c97cb7.js";import{B as V}from"./BaseLayout.eb5e61a6.js";import"./index.1da31a2f.js";import{r as q}from"./executeJs.c91974cd.js";import{A as g,T as M}from"./TabPane.fd371b57.js";import"./index.40f486d8.js";import{c as U}from"./index.57a8f261.js";import"./Title.68794b00.js";import"./Form.92915dba.js";import"./broker.fe12dff2.js";import"./index.86c1596a.js";import"./pubsub.a5d83d03.js";import"./CircularLoading.a6e7292e.js";import"./WidgetsFrame.9710b204.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.5ff66728.js";import"./icons.5c1b068e.js";import"./StageRunSelector.vue_vue_type_script_setup_true_lang.530523fc.js";import"./index.02572c74.js";import"./CollapsePanel.5b61c53e.js";import"./index.227ca95f.js";import"./index.061642e4.js";import"./index.22e7eee3.js";import"./dashes.2219b4f6.js";import"./activeRecord.0c38eaa0.js";import"./runnerData.0191b589.js";import"./hooks.4a40d405.js";import"./jobs.4e6199e9.js";import"./index.9fe41369.js";import"./uuid.beef1d59.js";import"./url.8edd0b7b.js";import"./ant-design.68149cf6.js";import"./PlayerNavbar.8ee93a77.js";import"./Steps.e1890b8d.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="97c61732-22b6-49ae-9c92-5545eb2da8fc",a._sentryDebugIdIdentifier="sentry-dbid-97c61732-22b6-49ae-9c92-5545eb2da8fc")}catch{}})();const W=b({__name:"PreviewButton",props:{model:{}},setup(a){const o=a,c=k(),u=h(),r=()=>{const l=c.query;u.push({path:`/_editor/${o.model.routeName}/${encodeURIComponent(o.model.path)}/preview`,query:l})};return(l,t)=>(s(),m(e(B),{class:"preview-button",onClick:r},{default:i(()=>[$(" Preview ")]),_:1}))}}),Te=b({__name:"FormEditor",setup(a){const o=h(),c=k(),u=y(null),r=y("test");function l(){o.push({name:"forms"})}const{result:t,refetch:w}=D(()=>Promise.all([A.get(),N.get(c.params.formPath)]).then(([d,n])=>I({workspace:d,form:n}))),v=S.create();function x(d,n){q("editor",o,d,n)}return C(()=>c.params.formPath,()=>{w()}),(d,n)=>(s(),m(V,null,{navbar:i(()=>[e(t)?(s(),m(e(U),{key:0,title:e(t).form.title,style:{padding:"5px 10px"},onBack:l},{footer:i(()=>[p(e(M),{"active-key":r.value,"onUpdate:activeKey":n[0]||(n[0]=_=>r.value=_)},{default:i(()=>[p(e(g),{key:"test",tab:"Test"}),p(e(g),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:i(()=>[p(L,{path:e(t).form.path},null,8,["path"]),p(F,{path:"forms/overview"}),p(W,{model:e(t).form},null,8,["model"]),r.value==="settings"?(s(),m(E,{key:0,model:e(t).form},null,8,["model"])):f("",!0)]),_:1},8,["title"])):f("",!0)]),content:i(()=>[e(t)&&r.value==="test"?(s(),m(P,{key:0,ref_key:"tester",ref:u,form:e(t).form,"log-service":e(v),onRedirect:x},null,8,["form","log-service"])):f("",!0),e(t)&&r.value==="settings"?(s(),m(R,{key:1,form:e(t).form},null,8,["form"])):f("",!0)]),footer:i(()=>{var _;return[e(t)&&r.value==="test"?(s(),m(T,{key:0,runtime:"forms","log-service":e(v),onRestart:(_=u.value)==null?void 0:_.restart},null,8,["log-service","onRestart"])):f("",!0)]}),_:1}))}});export{Te as default};
//# sourceMappingURL=FormEditor.336b58b5.js.map