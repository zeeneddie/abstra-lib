import{d as b,eA as k,ez as w,b as s,c as m,w as i,aJ as h,u as e,c4 as x,r as y,f as n,ew as p,eF as $}from"./outputWidgets.65926c1d.js";import{_ as B,a as C}from"./FormTester.vue_vue_type_script_setup_true_lang.dfdb245b.js";import{S as I,L as P}from"./SmartConsole.fd1185cf.js";import{a as R}from"./asyncComputed.4723d9b8.js";import{F as T}from"./forms.06ee06be.js";import{W as S}from"./workspaces.d75870ed.js";import{_ as A}from"./SaveButton.vue_vue_type_script_setup_true_lang.640515bd.js";import{_ as D}from"./DocsButton.vue_vue_type_script_setup_true_lang.ecd1b9ae.js";import{_ as F}from"./LaunchButton.vue_vue_type_script_setup_true_lang.017c2558.js";import{B as N}from"./BaseLayout.7f35e98f.js";import{A as g,T as L}from"./TabPane.844c7fcb.js";import"./index.00f25e76.js";import{c as V}from"./index.205aa6f9.js";import"./Title.2cced18a.js";import"./Form.47548ee6.js";import"./broker.98f22493.js";import"./index.f2493334.js";import"./pubsub.dc5bec39.js";import"./executeJs.2fa51613.js";import"./icons.da7d27cd.js";import"./CircularLoading.ae94822e.js";import"./PlayerNavbar.946bd0d9.js";import"./index.553ada1f.js";import"./Steps.e21bff84.js";import"./WidgetsFrame.f8a89a70.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.5958fe19.js";import"./StageRunSelector.vue_vue_type_script_setup_true_lang.435f2f79.js";import"./index.3d562d91.js";import"./CollapsePanel.2356d198.js";import"./index.59a2d779.js";import"./index.73801d39.js";import"./index.1bb9605d.js";import"./dashes.5b745c3f.js";import"./activeRecord.994400e6.js";import"./hooks.4d601fd1.js";import"./jobs.4fb3de9f.js";import"./index.006c6212.js";import"./uuid.d95c8d0f.js";import"./url.bc2b44ba.js";import"./ant-design.14676eb3.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="64391cf4-e71e-4ab9-bd83-8884a5de3ece",r._sentryDebugIdIdentifier="sentry-dbid-64391cf4-e71e-4ab9-bd83-8884a5de3ece")}catch{}})();const q=b({__name:"PreviewButton",props:{model:{}},setup(r){const a=r,u=k(),c=w(),o=()=>{const l=u.query;c.push({path:`/_editor/${a.model.routeName}/${encodeURIComponent(a.model.path)}/preview`,query:l})};return(l,t)=>(s(),m(e(x),{class:"preview-button",onClick:o},{default:i(()=>[h(" Preview ")]),_:1}))}}),Be=b({__name:"FormEditor",setup(r){const a=w(),u=k(),c=y(null),o=y("test");function l(){a.push({name:"forms"})}const{result:t}=R(()=>Promise.all([S.get(),T.get(u.params.formPath)]).then(([v,f])=>$({workspace:v,form:f}))),_=P.create();return(v,f)=>(s(),m(N,null,{navbar:i(()=>[e(t)?(s(),m(e(V),{key:0,title:e(t).form.title,style:{padding:"5px 10px"},onBack:l},{footer:i(()=>[n(e(L),{"active-key":o.value,"onUpdate:activeKey":f[0]||(f[0]=d=>o.value=d)},{default:i(()=>[n(e(g),{key:"test",tab:"Test"}),n(e(g),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:i(()=>[n(F,{path:e(t).form.path},null,8,["path"]),n(D,{path:"forms/overview"}),n(q,{model:e(t).form},null,8,["model"]),o.value==="settings"?(s(),m(A,{key:0,model:e(t).form},null,8,["model"])):p("",!0)]),_:1},8,["title"])):p("",!0)]),content:i(()=>[e(t)&&o.value==="test"?(s(),m(B,{key:0,ref_key:"tester",ref:c,form:e(t).form,"log-service":e(_)},null,8,["form","log-service"])):p("",!0),e(t)&&o.value==="settings"?(s(),m(C,{key:1,form:e(t).form},null,8,["form"])):p("",!0)]),footer:i(()=>{var d;return[e(t)&&o.value==="test"?(s(),m(I,{key:0,runtime:"forms","log-service":e(_),onRestart:(d=c.value)==null?void 0:d.restart},null,8,["log-service","onRestart"])):p("",!0)]}),_:1}))}});export{Be as default};
//# sourceMappingURL=FormEditor.6a14c13d.js.map
