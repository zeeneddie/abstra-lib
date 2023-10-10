import{d as b,eA as k,ez as w,b as s,c as m,w as i,aJ as h,u as e,c4 as x,r as y,f as n,ew as p,eF as $}from"./outputWidgets.903ef13f.js";import{_ as B,a as C}from"./FormTester.vue_vue_type_script_setup_true_lang.a11eb4ad.js";import{S as I,L as P}from"./SmartConsole.051eedb1.js";import{a as R}from"./asyncComputed.c4e04ddf.js";import{F as T}from"./forms.faec79b9.js";import{W as S}from"./workspaces.1ca64420.js";import{_ as A}from"./SaveButton.vue_vue_type_script_setup_true_lang.69262f1d.js";import{_ as D}from"./DocsButton.vue_vue_type_script_setup_true_lang.6502a11c.js";import{_ as F}from"./LaunchButton.vue_vue_type_script_setup_true_lang.ef329596.js";import{B as N}from"./BaseLayout.206b37c4.js";import{A as g,T as L}from"./TabPane.a0a5d077.js";import"./index.c2d58350.js";import{c as V}from"./index.33a83bfb.js";import"./Title.a0ce44ea.js";import"./Form.49dc913d.js";import"./broker.a83b5551.js";import"./index.bc8c2490.js";import"./pubsub.c9a1cd12.js";import"./executeJs.16c242ef.js";import"./icons.c6b9d5b7.js";import"./CircularLoading.adfd7b04.js";import"./PlayerNavbar.b989c6bd.js";import"./index.e5fe38b8.js";import"./Steps.86141059.js";import"./WidgetsFrame.55190db5.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.ad9a3e11.js";import"./StageRunSelector.vue_vue_type_script_setup_true_lang.c1082ad9.js";import"./index.2bfb16b6.js";import"./CollapsePanel.51ba056d.js";import"./index.7ad33f1e.js";import"./index.abf1ee4c.js";import"./index.ff825c04.js";import"./dashes.b1fc78bb.js";import"./activeRecord.55ed0790.js";import"./hooks.25569791.js";import"./jobs.04bac720.js";import"./index.d93d8aa2.js";import"./uuid.d60a69af.js";import"./url.08ed6687.js";import"./ant-design.6476f34e.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="233496fe-0876-42f7-b734-d6f46afaace2",r._sentryDebugIdIdentifier="sentry-dbid-233496fe-0876-42f7-b734-d6f46afaace2")}catch{}})();const q=b({__name:"PreviewButton",props:{model:{}},setup(r){const a=r,f=k(),u=w(),o=()=>{const l=f.query;u.push({path:`/_editor/${a.model.routeName}/${encodeURIComponent(a.model.path)}/preview`,query:l})};return(l,t)=>(s(),m(e(x),{class:"preview-button",onClick:o},{default:i(()=>[h(" Preview ")]),_:1}))}}),Be=b({__name:"FormEditor",setup(r){const a=w(),f=k(),u=y(null),o=y("test");function l(){a.push({name:"forms"})}const{result:t}=R(()=>Promise.all([S.get(),T.get(f.params.formPath)]).then(([v,c])=>$({workspace:v,form:c}))),_=P.create();return(v,c)=>(s(),m(N,null,{navbar:i(()=>[e(t)?(s(),m(e(V),{key:0,title:e(t).form.title,style:{padding:"5px 10px"},onBack:l},{footer:i(()=>[n(e(L),{"active-key":o.value,"onUpdate:activeKey":c[0]||(c[0]=d=>o.value=d)},{default:i(()=>[n(e(g),{key:"test",tab:"Test"}),n(e(g),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:i(()=>[n(F,{path:e(t).form.path},null,8,["path"]),n(D,{path:"forms/overview"}),n(q,{model:e(t).form},null,8,["model"]),o.value==="settings"?(s(),m(A,{key:0,model:e(t).form},null,8,["model"])):p("",!0)]),_:1},8,["title"])):p("",!0)]),content:i(()=>[e(t)&&o.value==="test"?(s(),m(B,{key:0,ref_key:"tester",ref:u,form:e(t).form,"log-service":e(_)},null,8,["form","log-service"])):p("",!0),e(t)&&o.value==="settings"?(s(),m(C,{key:1,form:e(t).form},null,8,["form"])):p("",!0)]),footer:i(()=>{var d;return[e(t)&&o.value==="test"?(s(),m(I,{key:0,runtime:"forms","log-service":e(_),onRestart:(d=u.value)==null?void 0:d.restart},null,8,["log-service","onRestart"])):p("",!0)]}),_:1}))}});export{Be as default};
//# sourceMappingURL=FormEditor.a3c39571.js.map
