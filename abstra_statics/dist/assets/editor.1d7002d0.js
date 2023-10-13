import{r as _,d as m,o as d,a as p,b as c,c as h,w as u,e as l,f as E,u as f,A as b,g as v,h as A,_ as t,i as w,T as P,j as I,P as D,C as y,M as k,I as V,s as T,k as r,l as g,m as R,n as L,p as O}from"./outputWidgets.51bf7797.js";import{u as W}from"./index.d1ab863b.js";import{u as j}from"./index.16b35cb5.js";import"./pubsub.57f09ced.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="e4973cce-2717-475c-aa9e-3e25f81cbf28",e._sentryDebugIdIdentifier="sentry-dbid-e4973cce-2717-475c-aa9e-3e25f81cbf28")}catch{}})();const s=_(!1),C=()=>{window.innerWidth<780?s.value=!0:s.value=!1},S={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},x=m({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return d(()=>{window.addEventListener("resize",C)}),(i,M)=>{const n=p("router-view");return c(),h(f(b),{theme:o},{default:u(()=>[l("div",S,[E(n)])]),_:1})}}});const a=v({history:A("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.ef5323d7.js"),["assets/Home.ef5323d7.js","assets/outputWidgets.51bf7797.js","assets/outputWidgets.f6e466ca.css","assets/Home.58a71584.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.0ae6872f.js"),["assets/Workspace.0ae6872f.js","assets/outputWidgets.51bf7797.js","assets/outputWidgets.f6e466ca.css","assets/icons.3dbf3493.js","assets/Tooltip.a2453552.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/LoginBlock.ebab37ae.js","assets/workspaces.06f07bd2.js","assets/activeRecord.6b597982.js","assets/pubsub.57f09ced.js","assets/url.6c50ef27.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3e012103.js","assets/popupNotifcation.3287bccf.js","assets/asyncComputed.21e91621.js","assets/index.56b6966f.js","assets/Title.e753a451.js","assets/index.e62da870.js","assets/Form.11a934e4.js","assets/LoginBlock.d273f904.css","assets/BaseLayout.58212a38.js","assets/BaseLayout.2d5b030e.css","assets/index.6a85c4cf.js","assets/index.c83d37e6.js","assets/Workspace.9a25b177.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>t(()=>import("./Forms.17116f4b.js"),["assets/Forms.17116f4b.js","assets/outputWidgets.51bf7797.js","assets/outputWidgets.f6e466ca.css","assets/icons.3dbf3493.js","assets/asyncComputed.21e91621.js","assets/forms.fa61d39c.js","assets/activeRecord.6b597982.js","assets/pubsub.57f09ced.js","assets/CrudView.8cfc0fbf.js","assets/index.56b6966f.js","assets/Title.e753a451.js","assets/Form.11a934e4.js","assets/router.f8e576d0.js","assets/index.d1ab863b.js","assets/url.6c50ef27.js","assets/index.9850a290.js","assets/index.e767adaa.js","assets/index.e3e7c9ba.js","assets/index.c83d37e6.js","assets/CrudView.396a8168.css","assets/ant-design.b48e7327.js"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>t(()=>import("./Dashes.1b1d5117.js"),["assets/Dashes.1b1d5117.js","assets/outputWidgets.51bf7797.js","assets/outputWidgets.f6e466ca.css","assets/icons.3dbf3493.js","assets/asyncComputed.21e91621.js","assets/dashes.92455113.js","assets/activeRecord.6b597982.js","assets/pubsub.57f09ced.js","assets/index.d1ab863b.js","assets/CrudView.8cfc0fbf.js","assets/index.56b6966f.js","assets/Title.e753a451.js","assets/Form.11a934e4.js","assets/router.f8e576d0.js","assets/url.6c50ef27.js","assets/index.9850a290.js","assets/index.e767adaa.js","assets/index.e3e7c9ba.js","assets/index.c83d37e6.js","assets/CrudView.396a8168.css","assets/ant-design.b48e7327.js"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>t(()=>import("./Jobs.0d2da649.js"),["assets/Jobs.0d2da649.js","assets/outputWidgets.51bf7797.js","assets/outputWidgets.f6e466ca.css","assets/icons.3dbf3493.js","assets/asyncComputed.21e91621.js","assets/jobs.bac9d0c8.js","assets/activeRecord.6b597982.js","assets/pubsub.57f09ced.js","assets/CrudView.8cfc0fbf.js","assets/index.56b6966f.js","assets/Title.e753a451.js","assets/Form.11a934e4.js","assets/router.f8e576d0.js","assets/index.d1ab863b.js","assets/url.6c50ef27.js","assets/index.9850a290.js","assets/index.e767adaa.js","assets/index.e3e7c9ba.js","assets/index.c83d37e6.js","assets/CrudView.396a8168.css","assets/ant-design.b48e7327.js"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>t(()=>import("./Hooks.9aec5e25.js"),["assets/Hooks.9aec5e25.js","assets/outputWidgets.51bf7797.js","assets/outputWidgets.f6e466ca.css","assets/icons.3dbf3493.js","assets/asyncComputed.21e91621.js","assets/hooks.28383bfc.js","assets/activeRecord.6b597982.js","assets/pubsub.57f09ced.js","assets/CrudView.8cfc0fbf.js","assets/index.56b6966f.js","assets/Title.e753a451.js","assets/Form.11a934e4.js","assets/router.f8e576d0.js","assets/index.d1ab863b.js","assets/url.6c50ef27.js","assets/index.9850a290.js","assets/index.e767adaa.js","assets/index.e3e7c9ba.js","assets/index.c83d37e6.js","assets/CrudView.396a8168.css","assets/ant-design.b48e7327.js"]),meta:{title:"Abstra - Hooks"}},{path:"style",name:"style",component:()=>t(()=>import("./StyleEditor.77b82216.js"),["assets/StyleEditor.77b82216.js","assets/asyncComputed.21e91621.js","assets/outputWidgets.51bf7797.js","assets/outputWidgets.f6e466ca.css","assets/workspaces.06f07bd2.js","assets/activeRecord.6b597982.js","assets/pubsub.57f09ced.js","assets/url.6c50ef27.js","assets/CircularLoading.44ce69a6.js","assets/CircularLoading.f81b57b4.css","assets/icons.3dbf3493.js","assets/index.e5e561d6.js","assets/Title.e753a451.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.d93ece16.js","assets/ant-design.b48e7327.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.063a4f0b.js","assets/PlayerNavbar.91b71b78.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.d1ab863b.js","assets/WidgetsFrame.e3719081.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/index.e3e7c9ba.js","assets/Form.11a934e4.js","assets/StyleEditor.4d8e1574.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>t(()=>import("./SidebarEditor.bd1640e6.js"),["assets/SidebarEditor.bd1640e6.js","assets/outputWidgets.51bf7797.js","assets/outputWidgets.f6e466ca.css","assets/index.b0cdd9a6.js","assets/Title.e753a451.js","assets/index.c83d37e6.js","assets/index.e3e7c9ba.js","assets/workspaces.06f07bd2.js","assets/activeRecord.6b597982.js","assets/pubsub.57f09ced.js","assets/url.6c50ef27.js","assets/asyncComputed.21e91621.js","assets/CircularLoading.44ce69a6.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.d93ece16.js","assets/ant-design.b48e7327.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.063a4f0b.js","assets/PlayerNavbar.91b71b78.js","assets/icons.3dbf3493.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.d1ab863b.js","assets/WidgetsFrame.e3719081.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/Form.11a934e4.js"]),meta:{title:"Abstra - Sidebar"}}]},{path:"form/:formPath",name:"formEditor",component:()=>t(()=>import("./FormEditor.ea6907ff.js"),["assets/FormEditor.ea6907ff.js","assets/outputWidgets.51bf7797.js","assets/outputWidgets.f6e466ca.css","assets/FormTester.vue_vue_type_script_setup_true_lang.65b8cf3b.js","assets/SmartConsole.278a1f0c.js","assets/asyncComputed.21e91621.js","assets/forms.fa61d39c.js","assets/activeRecord.6b597982.js","assets/pubsub.57f09ced.js","assets/dashes.92455113.js","assets/index.d1ab863b.js","assets/hooks.28383bfc.js","assets/jobs.bac9d0c8.js","assets/workspaces.06f07bd2.js","assets/url.6c50ef27.js","assets/icons.3dbf3493.js","assets/Title.e753a451.js","assets/index.e767adaa.js","assets/uuid.da6b9064.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3e012103.js","assets/SmartConsole.96457e04.css","assets/Form.11a934e4.js","assets/broker.01dc3845.js","assets/index.16b35cb5.js","assets/executeJs.79cdc8dc.js","assets/CircularLoading.44ce69a6.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.91b71b78.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.ce3aed36.js","assets/Steps.998aa76d.css","assets/executeJs.ee59d5a5.css","assets/WidgetsFrame.e3719081.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.9969c903.js","assets/broker.1fe265d9.css","assets/StageRunSelector.vue_vue_type_script_setup_true_lang.06ca8da4.js","assets/index.16f9e212.js","assets/CollapsePanel.060ed900.js","assets/index.8916ba17.js","assets/index.e3e7c9ba.js","assets/index.c83d37e6.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.d93ece16.js","assets/ant-design.b48e7327.js","assets/SaveButton.13ece1cb.css","assets/LaunchButton.vue_vue_type_script_setup_true_lang.3a777271.js","assets/BaseLayout.58212a38.js","assets/BaseLayout.2d5b030e.css","assets/TabPane.ebdfbf96.js","assets/index.e59f6a40.js","assets/index.6a85c4cf.js"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.53e88238.js"),["assets/FormPreview.53e88238.js","assets/outputWidgets.51bf7797.js","assets/outputWidgets.f6e466ca.css","assets/CircularLoading.44ce69a6.js","assets/CircularLoading.f81b57b4.css","assets/broker.01dc3845.js","assets/index.16b35cb5.js","assets/pubsub.57f09ced.js","assets/executeJs.79cdc8dc.js","assets/icons.3dbf3493.js","assets/PlayerNavbar.91b71b78.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.d1ab863b.js","assets/Steps.ce3aed36.js","assets/Steps.998aa76d.css","assets/executeJs.ee59d5a5.css","assets/WidgetsFrame.e3719081.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.9969c903.js","assets/broker.1fe265d9.css","assets/BackButton.9781c3a7.js","assets/BackButton.dd542746.css","assets/asyncComputed.21e91621.js","assets/forms.fa61d39c.js","assets/activeRecord.6b597982.js","assets/workspaces.06f07bd2.js","assets/url.6c50ef27.js","assets/FormPreview.0cd86555.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>t(()=>import("./JobEditor.1c9a0b0b.js"),["assets/JobEditor.1c9a0b0b.js","assets/outputWidgets.51bf7797.js","assets/outputWidgets.f6e466ca.css","assets/SmartConsole.278a1f0c.js","assets/asyncComputed.21e91621.js","assets/forms.fa61d39c.js","assets/activeRecord.6b597982.js","assets/pubsub.57f09ced.js","assets/dashes.92455113.js","assets/index.d1ab863b.js","assets/hooks.28383bfc.js","assets/jobs.bac9d0c8.js","assets/workspaces.06f07bd2.js","assets/url.6c50ef27.js","assets/icons.3dbf3493.js","assets/Title.e753a451.js","assets/index.e767adaa.js","assets/uuid.da6b9064.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3e012103.js","assets/SmartConsole.96457e04.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.d93ece16.js","assets/ant-design.b48e7327.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.58212a38.js","assets/BaseLayout.2d5b030e.css","assets/JobSettings.vue_vue_type_script_setup_true_lang.2a41e0f5.js","assets/RunButton.vue_vue_type_script_setup_true_lang.c3b0502d.js","assets/index.16e57313.js","assets/index.9850a290.js","assets/dayjs.1f20a52a.js","assets/Form.11a934e4.js","assets/index.6a85c4cf.js","assets/index.c83d37e6.js","assets/TabPane.ebdfbf96.js"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>t(()=>import("./DashEditor.b105b2ca.js"),["assets/DashEditor.b105b2ca.js","assets/index.d1ab863b.js","assets/outputWidgets.51bf7797.js","assets/outputWidgets.f6e466ca.css","assets/BaseLayout.58212a38.js","assets/BaseLayout.2d5b030e.css","assets/DashPlayer.57519290.js","assets/executeJs.79cdc8dc.js","assets/icons.3dbf3493.js","assets/index.16b35cb5.js","assets/pubsub.57f09ced.js","assets/CircularLoading.44ce69a6.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.91b71b78.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.ce3aed36.js","assets/Steps.998aa76d.css","assets/executeJs.ee59d5a5.css","assets/geometryUtils.61b48168.js","assets/WidgetsFrame.e3719081.js","assets/WidgetsFrame.0816a5f5.css","assets/DashPlayer.b0953bcd.css","assets/SmartConsole.278a1f0c.js","assets/asyncComputed.21e91621.js","assets/forms.fa61d39c.js","assets/activeRecord.6b597982.js","assets/dashes.92455113.js","assets/hooks.28383bfc.js","assets/jobs.bac9d0c8.js","assets/workspaces.06f07bd2.js","assets/url.6c50ef27.js","assets/Title.e753a451.js","assets/index.e767adaa.js","assets/uuid.da6b9064.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3e012103.js","assets/SmartConsole.96457e04.css","assets/LaunchButton.vue_vue_type_script_setup_true_lang.3a777271.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.d93ece16.js","assets/ant-design.b48e7327.js","assets/SaveButton.13ece1cb.css","assets/keyboard.f5b20982.js","assets/index.6a85c4cf.js","assets/index.c83d37e6.js","assets/TabPane.ebdfbf96.js","assets/DashEditor.b1e4d748.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>t(()=>import("./DashPreview.ca5d16f5.js"),["assets/DashPreview.ca5d16f5.js","assets/outputWidgets.51bf7797.js","assets/outputWidgets.f6e466ca.css","assets/DashPlayer.57519290.js","assets/executeJs.79cdc8dc.js","assets/icons.3dbf3493.js","assets/index.16b35cb5.js","assets/pubsub.57f09ced.js","assets/CircularLoading.44ce69a6.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.91b71b78.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.d1ab863b.js","assets/Steps.ce3aed36.js","assets/Steps.998aa76d.css","assets/executeJs.ee59d5a5.css","assets/geometryUtils.61b48168.js","assets/WidgetsFrame.e3719081.js","assets/WidgetsFrame.0816a5f5.css","assets/DashPlayer.b0953bcd.css","assets/BackButton.9781c3a7.js","assets/BackButton.dd542746.css","assets/asyncComputed.21e91621.js","assets/dashes.92455113.js","assets/activeRecord.6b597982.js","assets/workspaces.06f07bd2.js","assets/url.6c50ef27.js","assets/DashPreview.a3f29850.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>t(()=>import("./HookEditor.fb7f4381.js"),["assets/HookEditor.fb7f4381.js","assets/outputWidgets.51bf7797.js","assets/outputWidgets.f6e466ca.css","assets/SmartConsole.278a1f0c.js","assets/asyncComputed.21e91621.js","assets/forms.fa61d39c.js","assets/activeRecord.6b597982.js","assets/pubsub.57f09ced.js","assets/dashes.92455113.js","assets/index.d1ab863b.js","assets/hooks.28383bfc.js","assets/jobs.bac9d0c8.js","assets/workspaces.06f07bd2.js","assets/url.6c50ef27.js","assets/icons.3dbf3493.js","assets/Title.e753a451.js","assets/index.e767adaa.js","assets/uuid.da6b9064.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3e012103.js","assets/SmartConsole.96457e04.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.d93ece16.js","assets/ant-design.b48e7327.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.58212a38.js","assets/BaseLayout.2d5b030e.css","assets/HookSettings.vue_vue_type_script_setup_true_lang.dad15380.js","assets/StageRunSelector.vue_vue_type_script_setup_true_lang.06ca8da4.js","assets/RunButton.vue_vue_type_script_setup_true_lang.c3b0502d.js","assets/index.417957d3.js","assets/index.e3e7c9ba.js","assets/CollapsePanel.060ed900.js","assets/index.c83d37e6.js","assets/index.8916ba17.js","assets/index.9850a290.js","assets/Form.11a934e4.js","assets/index.6a85c4cf.js","assets/TabPane.ebdfbf96.js"]),meta:{title:"Abstra - Hook Editor"}},{path:"workflow",name:"workflowEditor",component:()=>t(()=>import("./WorkflowEditor.7b766b0f.js"),["assets/WorkflowEditor.7b766b0f.js","assets/forms.fa61d39c.js","assets/activeRecord.6b597982.js","assets/pubsub.57f09ced.js","assets/outputWidgets.51bf7797.js","assets/outputWidgets.f6e466ca.css","assets/workspaces.06f07bd2.js","assets/url.6c50ef27.js","assets/icons.3dbf3493.js","assets/FormTester.vue_vue_type_script_setup_true_lang.65b8cf3b.js","assets/SmartConsole.278a1f0c.js","assets/asyncComputed.21e91621.js","assets/dashes.92455113.js","assets/index.d1ab863b.js","assets/hooks.28383bfc.js","assets/jobs.bac9d0c8.js","assets/Title.e753a451.js","assets/index.e767adaa.js","assets/uuid.da6b9064.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3e012103.js","assets/SmartConsole.96457e04.css","assets/Form.11a934e4.js","assets/broker.01dc3845.js","assets/index.16b35cb5.js","assets/executeJs.79cdc8dc.js","assets/CircularLoading.44ce69a6.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.91b71b78.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.ce3aed36.js","assets/Steps.998aa76d.css","assets/executeJs.ee59d5a5.css","assets/WidgetsFrame.e3719081.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.9969c903.js","assets/broker.1fe265d9.css","assets/StageRunSelector.vue_vue_type_script_setup_true_lang.06ca8da4.js","assets/index.16f9e212.js","assets/CollapsePanel.060ed900.js","assets/index.8916ba17.js","assets/index.e3e7c9ba.js","assets/index.c83d37e6.js","assets/geometryUtils.61b48168.js","assets/keyboard.f5b20982.js","assets/ant-design.b48e7327.js","assets/LaunchButton.vue_vue_type_script_setup_true_lang.3a777271.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.d93ece16.js","assets/SaveButton.13ece1cb.css","assets/HookSettings.vue_vue_type_script_setup_true_lang.dad15380.js","assets/RunButton.vue_vue_type_script_setup_true_lang.c3b0502d.js","assets/index.417957d3.js","assets/index.9850a290.js","assets/JobSettings.vue_vue_type_script_setup_true_lang.2a41e0f5.js","assets/index.16e57313.js","assets/dayjs.1f20a52a.js","assets/index.56b6966f.js","assets/index.b0cdd9a6.js","assets/LoginBlock.ebab37ae.js","assets/popupNotifcation.3287bccf.js","assets/index.e62da870.js","assets/LoginBlock.d273f904.css","assets/index.6a85c4cf.js","assets/index.392c27c0.js","assets/TabPane.ebdfbf96.js","assets/WorkflowEditor.f777e473.css"]),meta:{title:"Abstra - Workflow Editor"}}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{W(e,o)});(async()=>{await j();const e=w({render:()=>g(x)});P.init(),I(e,a),e.use(a),e.use(D),e.mount("#app"),e.component("VSelect",y),e.component("Markdown",k),e.component("Icon",V),e.component("Message",T),r(e,R),r(e,L),r(e,O)})();
//# sourceMappingURL=editor.1d7002d0.js.map
