import{r as _,d as m,o as d,a as p,b as c,c as h,w as u,e as l,f as E,u as b,A as f,g as v,h as A,_ as t,i as w,T as P,j as I,P as D,C as y,M as k,I as V,s as T,k as r,l as g,m as R,n as L,p as O}from"./outputWidgets.7f968caf.js";import{u as W}from"./index.35253f43.js";import{u as j}from"./index.8b02ccbe.js";import"./pubsub.7e5686b2.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="d1663693-4768-4224-bad3-374dca2212e6",e._sentryDebugIdIdentifier="sentry-dbid-d1663693-4768-4224-bad3-374dca2212e6")}catch{}})();const s=_(!1),C=()=>{window.innerWidth<780?s.value=!0:s.value=!1},S={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},x=m({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return d(()=>{window.addEventListener("resize",C)}),(i,M)=>{const n=p("router-view");return c(),h(b(f),{theme:o},{default:u(()=>[l("div",S,[E(n)])]),_:1})}}});const a=v({history:A("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.a4b31867.js"),["assets/Home.a4b31867.js","assets/outputWidgets.7f968caf.js","assets/outputWidgets.3bd31a7a.css","assets/Home.58a71584.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.31861e2b.js"),["assets/Workspace.31861e2b.js","assets/outputWidgets.7f968caf.js","assets/outputWidgets.3bd31a7a.css","assets/icons.c30c7a3d.js","assets/Tooltip.ed0dee44.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/LoginBlock.f91ff819.js","assets/workspaces.4661d504.js","assets/activeRecord.42da519e.js","assets/pubsub.7e5686b2.js","assets/url.19f02b2c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5f3f0008.js","assets/popupNotifcation.f1d23a62.js","assets/asyncComputed.fdc164f0.js","assets/index.4ad346db.js","assets/Title.d8e3350b.js","assets/index.f8216c89.js","assets/Form.b10b090a.js","assets/LoginBlock.d273f904.css","assets/BaseLayout.7a6c9832.js","assets/BaseLayout.2d5b030e.css","assets/index.3f317fc8.js","assets/index.8d2abc42.js","assets/Workspace.6ebc5b25.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>t(()=>import("./Forms.820e4ea4.js"),["assets/Forms.820e4ea4.js","assets/outputWidgets.7f968caf.js","assets/outputWidgets.3bd31a7a.css","assets/icons.c30c7a3d.js","assets/asyncComputed.fdc164f0.js","assets/forms.35f76371.js","assets/activeRecord.42da519e.js","assets/pubsub.7e5686b2.js","assets/CrudView.1eecc76a.js","assets/index.4ad346db.js","assets/Title.d8e3350b.js","assets/Form.b10b090a.js","assets/router.d23a4a60.js","assets/index.35253f43.js","assets/url.19f02b2c.js","assets/index.a668da42.js","assets/index.029e59cc.js","assets/index.371754e3.js","assets/index.6a968710.js","assets/index.8d2abc42.js","assets/CrudView.b7607004.css","assets/ant-design.365bcc20.js"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>t(()=>import("./Dashes.0a89ec6f.js"),["assets/Dashes.0a89ec6f.js","assets/outputWidgets.7f968caf.js","assets/outputWidgets.3bd31a7a.css","assets/icons.c30c7a3d.js","assets/asyncComputed.fdc164f0.js","assets/dashes.8a4273d6.js","assets/activeRecord.42da519e.js","assets/pubsub.7e5686b2.js","assets/runnerData.fd21b8cc.js","assets/CrudView.1eecc76a.js","assets/index.4ad346db.js","assets/Title.d8e3350b.js","assets/Form.b10b090a.js","assets/router.d23a4a60.js","assets/index.35253f43.js","assets/url.19f02b2c.js","assets/index.a668da42.js","assets/index.029e59cc.js","assets/index.371754e3.js","assets/index.6a968710.js","assets/index.8d2abc42.js","assets/CrudView.b7607004.css","assets/ant-design.365bcc20.js"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>t(()=>import("./Jobs.51809f5d.js"),["assets/Jobs.51809f5d.js","assets/outputWidgets.7f968caf.js","assets/outputWidgets.3bd31a7a.css","assets/icons.c30c7a3d.js","assets/asyncComputed.fdc164f0.js","assets/jobs.bbc87c45.js","assets/activeRecord.42da519e.js","assets/pubsub.7e5686b2.js","assets/CrudView.1eecc76a.js","assets/index.4ad346db.js","assets/Title.d8e3350b.js","assets/Form.b10b090a.js","assets/router.d23a4a60.js","assets/index.35253f43.js","assets/url.19f02b2c.js","assets/index.a668da42.js","assets/index.029e59cc.js","assets/index.371754e3.js","assets/index.6a968710.js","assets/index.8d2abc42.js","assets/CrudView.b7607004.css","assets/ant-design.365bcc20.js"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>t(()=>import("./Hooks.14fd4eef.js"),["assets/Hooks.14fd4eef.js","assets/outputWidgets.7f968caf.js","assets/outputWidgets.3bd31a7a.css","assets/icons.c30c7a3d.js","assets/asyncComputed.fdc164f0.js","assets/hooks.beb73f44.js","assets/activeRecord.42da519e.js","assets/pubsub.7e5686b2.js","assets/CrudView.1eecc76a.js","assets/index.4ad346db.js","assets/Title.d8e3350b.js","assets/Form.b10b090a.js","assets/router.d23a4a60.js","assets/index.35253f43.js","assets/url.19f02b2c.js","assets/index.a668da42.js","assets/index.029e59cc.js","assets/index.371754e3.js","assets/index.6a968710.js","assets/index.8d2abc42.js","assets/CrudView.b7607004.css","assets/ant-design.365bcc20.js"]),meta:{title:"Abstra - Hooks"}},{path:"style",name:"style",component:()=>t(()=>import("./StyleEditor.77b3721f.js"),["assets/StyleEditor.77b3721f.js","assets/asyncComputed.fdc164f0.js","assets/outputWidgets.7f968caf.js","assets/outputWidgets.3bd31a7a.css","assets/workspaces.4661d504.js","assets/activeRecord.42da519e.js","assets/pubsub.7e5686b2.js","assets/url.19f02b2c.js","assets/CircularLoading.da94e376.js","assets/CircularLoading.f81b57b4.css","assets/icons.c30c7a3d.js","assets/index.5e1e7255.js","assets/Title.d8e3350b.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.9e3890b8.js","assets/ant-design.365bcc20.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.8d325ad3.js","assets/PlayerNavbar.8e7ca310.js","assets/PlayerNavbar.76a7eb2f.css","assets/runnerData.fd21b8cc.js","assets/WidgetsFrame.2586f2cc.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/index.6a968710.js","assets/Form.b10b090a.js","assets/StyleEditor.4d8e1574.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>t(()=>import("./SidebarEditor.490aa4f5.js"),["assets/SidebarEditor.490aa4f5.js","assets/outputWidgets.7f968caf.js","assets/outputWidgets.3bd31a7a.css","assets/index.47e5b3bb.js","assets/Title.d8e3350b.js","assets/index.8d2abc42.js","assets/index.6a968710.js","assets/workspaces.4661d504.js","assets/activeRecord.42da519e.js","assets/pubsub.7e5686b2.js","assets/url.19f02b2c.js","assets/asyncComputed.fdc164f0.js","assets/CircularLoading.da94e376.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.9e3890b8.js","assets/ant-design.365bcc20.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.8d325ad3.js","assets/PlayerNavbar.8e7ca310.js","assets/icons.c30c7a3d.js","assets/PlayerNavbar.76a7eb2f.css","assets/runnerData.fd21b8cc.js","assets/WidgetsFrame.2586f2cc.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/Form.b10b090a.js"]),meta:{title:"Abstra - Sidebar"}}]},{path:"form/:formPath",name:"formEditor",component:()=>t(()=>import("./FormEditor.6de8b9d4.js"),["assets/FormEditor.6de8b9d4.js","assets/outputWidgets.7f968caf.js","assets/outputWidgets.3bd31a7a.css","assets/FormTester.vue_vue_type_script_setup_true_lang.4ac39a69.js","assets/SmartConsole.32877c76.js","assets/asyncComputed.fdc164f0.js","assets/forms.35f76371.js","assets/activeRecord.42da519e.js","assets/pubsub.7e5686b2.js","assets/dashes.8a4273d6.js","assets/runnerData.fd21b8cc.js","assets/hooks.beb73f44.js","assets/jobs.bbc87c45.js","assets/workspaces.4661d504.js","assets/url.19f02b2c.js","assets/icons.c30c7a3d.js","assets/Title.d8e3350b.js","assets/index.371754e3.js","assets/uuid.11dd0fff.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5f3f0008.js","assets/SmartConsole.96457e04.css","assets/Form.b10b090a.js","assets/broker.db5b4665.js","assets/index.8b02ccbe.js","assets/executeJs.dcac5983.js","assets/CircularLoading.da94e376.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.8e7ca310.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.35253f43.js","assets/Steps.e6f36726.js","assets/Steps.998aa76d.css","assets/executeJs.ee59d5a5.css","assets/WidgetsFrame.2586f2cc.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.58cd3fb8.js","assets/broker.1fe265d9.css","assets/StageRunSelector.vue_vue_type_script_setup_true_lang.aa38fe27.js","assets/index.357d2e97.js","assets/CollapsePanel.535af870.js","assets/index.6a968710.js","assets/index.8d2abc42.js","assets/index.a668da42.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.9e3890b8.js","assets/ant-design.365bcc20.js","assets/SaveButton.13ece1cb.css","assets/LaunchButton.vue_vue_type_script_setup_true_lang.f6ee27d4.js","assets/BaseLayout.7a6c9832.js","assets/BaseLayout.2d5b030e.css","assets/TabPane.0c5b44e9.js","assets/index.26fd5df2.js","assets/index.3f317fc8.js"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.68750fdd.js"),["assets/FormPreview.68750fdd.js","assets/outputWidgets.7f968caf.js","assets/outputWidgets.3bd31a7a.css","assets/CircularLoading.da94e376.js","assets/CircularLoading.f81b57b4.css","assets/broker.db5b4665.js","assets/index.8b02ccbe.js","assets/pubsub.7e5686b2.js","assets/executeJs.dcac5983.js","assets/runnerData.fd21b8cc.js","assets/url.19f02b2c.js","assets/icons.c30c7a3d.js","assets/PlayerNavbar.8e7ca310.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.35253f43.js","assets/Steps.e6f36726.js","assets/Steps.998aa76d.css","assets/executeJs.ee59d5a5.css","assets/WidgetsFrame.2586f2cc.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.58cd3fb8.js","assets/broker.1fe265d9.css","assets/BackButton.266e0070.js","assets/BackButton.dd542746.css","assets/asyncComputed.fdc164f0.js","assets/forms.35f76371.js","assets/activeRecord.42da519e.js","assets/workspaces.4661d504.js","assets/FormPreview.0cd86555.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>t(()=>import("./JobEditor.a273f0b6.js"),["assets/JobEditor.a273f0b6.js","assets/outputWidgets.7f968caf.js","assets/outputWidgets.3bd31a7a.css","assets/SmartConsole.32877c76.js","assets/asyncComputed.fdc164f0.js","assets/forms.35f76371.js","assets/activeRecord.42da519e.js","assets/pubsub.7e5686b2.js","assets/dashes.8a4273d6.js","assets/runnerData.fd21b8cc.js","assets/hooks.beb73f44.js","assets/jobs.bbc87c45.js","assets/workspaces.4661d504.js","assets/url.19f02b2c.js","assets/icons.c30c7a3d.js","assets/Title.d8e3350b.js","assets/index.371754e3.js","assets/uuid.11dd0fff.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5f3f0008.js","assets/SmartConsole.96457e04.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.9e3890b8.js","assets/ant-design.365bcc20.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.7a6c9832.js","assets/BaseLayout.2d5b030e.css","assets/JobSettings.vue_vue_type_script_setup_true_lang.2084d920.js","assets/RunButton.vue_vue_type_script_setup_true_lang.5c8d22cd.js","assets/index.7bbdea64.js","assets/index.029e59cc.js","assets/dayjs.80ba8191.js","assets/Form.b10b090a.js","assets/index.3f317fc8.js","assets/index.8d2abc42.js","assets/TabPane.0c5b44e9.js"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>t(()=>import("./DashEditor.45b83055.js"),["assets/DashEditor.45b83055.js","assets/outputWidgets.7f968caf.js","assets/outputWidgets.3bd31a7a.css","assets/index.35253f43.js","assets/executeJs.dcac5983.js","assets/runnerData.fd21b8cc.js","assets/url.19f02b2c.js","assets/icons.c30c7a3d.js","assets/index.8b02ccbe.js","assets/pubsub.7e5686b2.js","assets/CircularLoading.da94e376.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.8e7ca310.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.e6f36726.js","assets/Steps.998aa76d.css","assets/executeJs.ee59d5a5.css","assets/BaseLayout.7a6c9832.js","assets/BaseLayout.2d5b030e.css","assets/DashPlayer.a1cf4275.js","assets/geometryUtils.ad252cde.js","assets/WidgetsFrame.2586f2cc.js","assets/WidgetsFrame.0816a5f5.css","assets/DashPlayer.b0953bcd.css","assets/SmartConsole.32877c76.js","assets/asyncComputed.fdc164f0.js","assets/forms.35f76371.js","assets/activeRecord.42da519e.js","assets/dashes.8a4273d6.js","assets/hooks.beb73f44.js","assets/jobs.bbc87c45.js","assets/workspaces.4661d504.js","assets/Title.d8e3350b.js","assets/index.371754e3.js","assets/uuid.11dd0fff.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5f3f0008.js","assets/SmartConsole.96457e04.css","assets/LaunchButton.vue_vue_type_script_setup_true_lang.f6ee27d4.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.9e3890b8.js","assets/ant-design.365bcc20.js","assets/SaveButton.13ece1cb.css","assets/keyboard.dc35050f.js","assets/index.3f317fc8.js","assets/index.8d2abc42.js","assets/TabPane.0c5b44e9.js","assets/DashEditor.b1e4d748.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>t(()=>import("./DashPreview.bf75f177.js"),["assets/DashPreview.bf75f177.js","assets/outputWidgets.7f968caf.js","assets/outputWidgets.3bd31a7a.css","assets/DashPlayer.a1cf4275.js","assets/executeJs.dcac5983.js","assets/runnerData.fd21b8cc.js","assets/url.19f02b2c.js","assets/icons.c30c7a3d.js","assets/index.8b02ccbe.js","assets/pubsub.7e5686b2.js","assets/CircularLoading.da94e376.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.8e7ca310.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.35253f43.js","assets/Steps.e6f36726.js","assets/Steps.998aa76d.css","assets/executeJs.ee59d5a5.css","assets/geometryUtils.ad252cde.js","assets/WidgetsFrame.2586f2cc.js","assets/WidgetsFrame.0816a5f5.css","assets/DashPlayer.b0953bcd.css","assets/BackButton.266e0070.js","assets/BackButton.dd542746.css","assets/asyncComputed.fdc164f0.js","assets/dashes.8a4273d6.js","assets/activeRecord.42da519e.js","assets/workspaces.4661d504.js","assets/DashPreview.a3f29850.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>t(()=>import("./HookEditor.f73a06d2.js"),["assets/HookEditor.f73a06d2.js","assets/outputWidgets.7f968caf.js","assets/outputWidgets.3bd31a7a.css","assets/SmartConsole.32877c76.js","assets/asyncComputed.fdc164f0.js","assets/forms.35f76371.js","assets/activeRecord.42da519e.js","assets/pubsub.7e5686b2.js","assets/dashes.8a4273d6.js","assets/runnerData.fd21b8cc.js","assets/hooks.beb73f44.js","assets/jobs.bbc87c45.js","assets/workspaces.4661d504.js","assets/url.19f02b2c.js","assets/icons.c30c7a3d.js","assets/Title.d8e3350b.js","assets/index.371754e3.js","assets/uuid.11dd0fff.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5f3f0008.js","assets/SmartConsole.96457e04.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.9e3890b8.js","assets/ant-design.365bcc20.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.7a6c9832.js","assets/BaseLayout.2d5b030e.css","assets/HookSettings.vue_vue_type_script_setup_true_lang.499b0690.js","assets/StageRunSelector.vue_vue_type_script_setup_true_lang.aa38fe27.js","assets/RunButton.vue_vue_type_script_setup_true_lang.5c8d22cd.js","assets/index.fa480c33.js","assets/index.6a968710.js","assets/CollapsePanel.535af870.js","assets/index.8d2abc42.js","assets/index.a668da42.js","assets/index.029e59cc.js","assets/Form.b10b090a.js","assets/index.3f317fc8.js","assets/TabPane.0c5b44e9.js"]),meta:{title:"Abstra - Hook Editor"}},{path:"workflow",name:"workflowEditor",component:()=>t(()=>import("./WorkflowEditor.db828499.js"),["assets/WorkflowEditor.db828499.js","assets/forms.35f76371.js","assets/activeRecord.42da519e.js","assets/pubsub.7e5686b2.js","assets/outputWidgets.7f968caf.js","assets/outputWidgets.3bd31a7a.css","assets/workspaces.4661d504.js","assets/url.19f02b2c.js","assets/icons.c30c7a3d.js","assets/FormTester.vue_vue_type_script_setup_true_lang.4ac39a69.js","assets/SmartConsole.32877c76.js","assets/asyncComputed.fdc164f0.js","assets/dashes.8a4273d6.js","assets/runnerData.fd21b8cc.js","assets/hooks.beb73f44.js","assets/jobs.bbc87c45.js","assets/Title.d8e3350b.js","assets/index.371754e3.js","assets/uuid.11dd0fff.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5f3f0008.js","assets/SmartConsole.96457e04.css","assets/Form.b10b090a.js","assets/broker.db5b4665.js","assets/index.8b02ccbe.js","assets/executeJs.dcac5983.js","assets/CircularLoading.da94e376.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.8e7ca310.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.35253f43.js","assets/Steps.e6f36726.js","assets/Steps.998aa76d.css","assets/executeJs.ee59d5a5.css","assets/WidgetsFrame.2586f2cc.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.58cd3fb8.js","assets/broker.1fe265d9.css","assets/StageRunSelector.vue_vue_type_script_setup_true_lang.aa38fe27.js","assets/index.357d2e97.js","assets/CollapsePanel.535af870.js","assets/index.6a968710.js","assets/index.8d2abc42.js","assets/index.a668da42.js","assets/geometryUtils.ad252cde.js","assets/keyboard.dc35050f.js","assets/ant-design.365bcc20.js","assets/index.f4ac7424.js","assets/LaunchButton.vue_vue_type_script_setup_true_lang.f6ee27d4.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.9e3890b8.js","assets/SaveButton.13ece1cb.css","assets/HookSettings.vue_vue_type_script_setup_true_lang.499b0690.js","assets/RunButton.vue_vue_type_script_setup_true_lang.5c8d22cd.js","assets/index.fa480c33.js","assets/index.029e59cc.js","assets/JobSettings.vue_vue_type_script_setup_true_lang.2084d920.js","assets/index.7bbdea64.js","assets/dayjs.80ba8191.js","assets/index.4ad346db.js","assets/index.47e5b3bb.js","assets/LoginBlock.f91ff819.js","assets/popupNotifcation.f1d23a62.js","assets/index.f8216c89.js","assets/LoginBlock.d273f904.css","assets/index.3f317fc8.js","assets/index.c88a5cb4.js","assets/TabPane.0c5b44e9.js","assets/WorkflowEditor.df415533.css"]),meta:{title:"Abstra - Workflow Editor"}}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{W(e,o)});(async()=>{await j();const e=w({render:()=>g(x)});P.init(),I(e,a),e.use(a),e.use(D),e.mount("#app"),e.component("VSelect",y),e.component("Markdown",k),e.component("Icon",V),e.component("Message",T),r(e,R),r(e,L),r(e,O)})();
//# sourceMappingURL=editor.e0f1aeb4.js.map
