import{d as b,ez as k,ey as h,b as s,c as m,w as i,aI as $,u as e,c0 as B,r as y,J as C,f as p,ev as f,eE as I}from"./outputWidgets.eadfae9c.js";import{_ as P,a as R}from"./FormTester.vue_vue_type_script_setup_true_lang.221a8426.js";import{S as T,L as S}from"./SmartConsole.25395eea.js";import{a as D}from"./asyncComputed.c95ad691.js";import{F as N}from"./forms.711fc8c3.js";import{W as A}from"./workspaces.7f7f9083.js";import{_ as E}from"./SaveButton.vue_vue_type_script_setup_true_lang.24be8871.js";import{_ as F}from"./DocsButton.vue_vue_type_script_setup_true_lang.9dfc5393.js";import{_ as L}from"./LaunchButton.vue_vue_type_script_setup_true_lang.97fcffcd.js";import{B as V}from"./BaseLayout.9ee6510a.js";import"./index.c6d264a6.js";import{r as q}from"./executeJs.1e69bda9.js";import{A as g,T as M}from"./TabPane.60ddd91d.js";import"./index.93a45bb2.js";import{c as U}from"./index.fbf69af3.js";import"./Title.716fc759.js";import"./Form.6d482df9.js";import"./broker.ea39a436.js";import"./index.2c996689.js";import"./pubsub.ccbe9bec.js";import"./CircularLoading.84fc2751.js";import"./WidgetsFrame.dec1192f.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.0d97c436.js";import"./icons.2f5445a0.js";import"./StageRunSelector.vue_vue_type_script_setup_true_lang.7f148691.js";import"./index.27ed0157.js";import"./CollapsePanel.6df34868.js";import"./index.388714b1.js";import"./index.f475c099.js";import"./index.b3a60446.js";import"./dashes.cae2293a.js";import"./activeRecord.21f51d54.js";import"./runnerData.bd779c09.js";import"./hooks.215cc7bf.js";import"./jobs.88d6c169.js";import"./index.e070f863.js";import"./uuid.342c8143.js";import"./url.0e9a1556.js";import"./ant-design.f789f278.js";import"./PlayerNavbar.927a6fd4.js";import"./Steps.7f1de031.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="aea5a8e5-20c4-4df7-9e65-628405eebc52",a._sentryDebugIdIdentifier="sentry-dbid-aea5a8e5-20c4-4df7-9e65-628405eebc52")}catch{}})();const W=b({__name:"PreviewButton",props:{model:{}},setup(a){const o=a,c=k(),u=h(),r=()=>{const l=c.query;u.push({path:`/_editor/${o.model.routeName}/${encodeURIComponent(o.model.path)}/preview`,query:l})};return(l,t)=>(s(),m(e(B),{class:"preview-button",onClick:r},{default:i(()=>[$(" Preview ")]),_:1}))}}),Te=b({__name:"FormEditor",setup(a){const o=h(),c=k(),u=y(null),r=y("test");function l(){o.push({name:"forms"})}const{result:t,refetch:w}=D(()=>Promise.all([A.get(),N.get(c.params.formPath)]).then(([d,n])=>I({workspace:d,form:n}))),v=S.create();function x(d,n){q("editor",o,d,n)}return C(()=>c.params.formPath,()=>{w()}),(d,n)=>(s(),m(V,null,{navbar:i(()=>[e(t)?(s(),m(e(U),{key:0,title:e(t).form.title,style:{padding:"5px 10px"},onBack:l},{footer:i(()=>[p(e(M),{"active-key":r.value,"onUpdate:activeKey":n[0]||(n[0]=_=>r.value=_)},{default:i(()=>[p(e(g),{key:"test",tab:"Test"}),p(e(g),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:i(()=>[p(L,{path:e(t).form.path},null,8,["path"]),p(F,{path:"forms/overview"}),p(W,{model:e(t).form},null,8,["model"]),r.value==="settings"?(s(),m(E,{key:0,model:e(t).form},null,8,["model"])):f("",!0)]),_:1},8,["title"])):f("",!0)]),content:i(()=>[e(t)&&r.value==="test"?(s(),m(P,{key:0,ref_key:"tester",ref:u,form:e(t).form,"log-service":e(v),onRedirect:x},null,8,["form","log-service"])):f("",!0),e(t)&&r.value==="settings"?(s(),m(R,{key:1,form:e(t).form},null,8,["form"])):f("",!0)]),footer:i(()=>{var _;return[e(t)&&r.value==="test"?(s(),m(T,{key:0,runtime:"forms","log-service":e(v),onRestart:(_=u.value)==null?void 0:_.restart},null,8,["log-service","onRestart"])):f("",!0)]}),_:1}))}});export{Te as default};
//# sourceMappingURL=FormEditor.61e778cd.js.map
