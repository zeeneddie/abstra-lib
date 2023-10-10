import{r as _,d as m,o as d,a as p,b as c,c as h,w as u,e as l,f as E,u as b,A as f,g as v,h as A,_ as t,i as w,T as P,j as I,P as D,C as y,M as k,I as V,s as T,k as r,l as g,m as R,n as L,p as O}from"./outputWidgets.5ced94d7.js";import{u as W}from"./index.48bbb941.js";import{u as j}from"./index.cec4fd9b.js";import"./pubsub.f395e26b.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="27ae6d40-76b9-4e5e-b40e-538604a67372",e._sentryDebugIdIdentifier="sentry-dbid-27ae6d40-76b9-4e5e-b40e-538604a67372")}catch{}})();const s=_(!1),C=()=>{window.innerWidth<780?s.value=!0:s.value=!1},S={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},x=m({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return d(()=>{window.addEventListener("resize",C)}),(i,M)=>{const n=p("router-view");return c(),h(b(f),{theme:o},{default:u(()=>[l("div",S,[E(n)])]),_:1})}}});const a=v({history:A("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.1ef13a6c.js"),["assets/Home.1ef13a6c.js","assets/outputWidgets.5ced94d7.js","assets/outputWidgets.e6401203.css","assets/Home.58a71584.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.ed1510e3.js"),["assets/Workspace.ed1510e3.js","assets/outputWidgets.5ced94d7.js","assets/outputWidgets.e6401203.css","assets/icons.157295a5.js","assets/Tooltip.9bafe9e8.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/LoginBlock.c2755418.js","assets/workspaces.2720be7e.js","assets/activeRecord.6ae8bce9.js","assets/pubsub.f395e26b.js","assets/url.b91ad4a3.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b7605154.js","assets/popupNotifcation.2a7681be.js","assets/asyncComputed.6f213f9d.js","assets/index.8ea91ac5.js","assets/Title.74cb802d.js","assets/index.1664a598.js","assets/Form.3717142f.js","assets/LoginBlock.d273f904.css","assets/BaseLayout.a4af420b.js","assets/BaseLayout.2d5b030e.css","assets/index.2a4a437f.js","assets/index.fe1573f2.js","assets/Workspace.9a25b177.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>t(()=>import("./Forms.e3f37e7c.js"),["assets/Forms.e3f37e7c.js","assets/outputWidgets.5ced94d7.js","assets/outputWidgets.e6401203.css","assets/icons.157295a5.js","assets/asyncComputed.6f213f9d.js","assets/forms.4a767921.js","assets/activeRecord.6ae8bce9.js","assets/pubsub.f395e26b.js","assets/CrudView.1c9778e2.js","assets/index.8ea91ac5.js","assets/Title.74cb802d.js","assets/Form.3717142f.js","assets/router.c33f3e79.js","assets/index.48bbb941.js","assets/url.b91ad4a3.js","assets/index.54325f84.js","assets/index.d48bc6c3.js","assets/index.c946e10c.js","assets/index.fe1573f2.js","assets/CrudView.396a8168.css","assets/ant-design.49bf0c8e.js"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>t(()=>import("./Dashes.b93b4bc2.js"),["assets/Dashes.b93b4bc2.js","assets/outputWidgets.5ced94d7.js","assets/outputWidgets.e6401203.css","assets/icons.157295a5.js","assets/asyncComputed.6f213f9d.js","assets/dashes.11209ba2.js","assets/activeRecord.6ae8bce9.js","assets/pubsub.f395e26b.js","assets/index.48bbb941.js","assets/CrudView.1c9778e2.js","assets/index.8ea91ac5.js","assets/Title.74cb802d.js","assets/Form.3717142f.js","assets/router.c33f3e79.js","assets/url.b91ad4a3.js","assets/index.54325f84.js","assets/index.d48bc6c3.js","assets/index.c946e10c.js","assets/index.fe1573f2.js","assets/CrudView.396a8168.css","assets/ant-design.49bf0c8e.js"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>t(()=>import("./Jobs.fad46f83.js"),["assets/Jobs.fad46f83.js","assets/outputWidgets.5ced94d7.js","assets/outputWidgets.e6401203.css","assets/icons.157295a5.js","assets/asyncComputed.6f213f9d.js","assets/jobs.b1195529.js","assets/activeRecord.6ae8bce9.js","assets/pubsub.f395e26b.js","assets/CrudView.1c9778e2.js","assets/index.8ea91ac5.js","assets/Title.74cb802d.js","assets/Form.3717142f.js","assets/router.c33f3e79.js","assets/index.48bbb941.js","assets/url.b91ad4a3.js","assets/index.54325f84.js","assets/index.d48bc6c3.js","assets/index.c946e10c.js","assets/index.fe1573f2.js","assets/CrudView.396a8168.css","assets/ant-design.49bf0c8e.js"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>t(()=>import("./Hooks.e06ff235.js"),["assets/Hooks.e06ff235.js","assets/outputWidgets.5ced94d7.js","assets/outputWidgets.e6401203.css","assets/icons.157295a5.js","assets/asyncComputed.6f213f9d.js","assets/hooks.eb6be727.js","assets/activeRecord.6ae8bce9.js","assets/pubsub.f395e26b.js","assets/CrudView.1c9778e2.js","assets/index.8ea91ac5.js","assets/Title.74cb802d.js","assets/Form.3717142f.js","assets/router.c33f3e79.js","assets/index.48bbb941.js","assets/url.b91ad4a3.js","assets/index.54325f84.js","assets/index.d48bc6c3.js","assets/index.c946e10c.js","assets/index.fe1573f2.js","assets/CrudView.396a8168.css","assets/ant-design.49bf0c8e.js"]),meta:{title:"Abstra - Hooks"}},{path:"style",name:"style",component:()=>t(()=>import("./StyleEditor.5f447d9f.js"),["assets/StyleEditor.5f447d9f.js","assets/asyncComputed.6f213f9d.js","assets/outputWidgets.5ced94d7.js","assets/outputWidgets.e6401203.css","assets/workspaces.2720be7e.js","assets/activeRecord.6ae8bce9.js","assets/pubsub.f395e26b.js","assets/url.b91ad4a3.js","assets/CircularLoading.ee1c51bf.js","assets/CircularLoading.f81b57b4.css","assets/icons.157295a5.js","assets/index.ce50c26f.js","assets/Title.74cb802d.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.5baa60de.js","assets/ant-design.49bf0c8e.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.a72a41c7.js","assets/PlayerNavbar.82b5545a.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.48bbb941.js","assets/WidgetsFrame.a33f6bb5.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/index.c946e10c.js","assets/Form.3717142f.js","assets/StyleEditor.4d8e1574.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>t(()=>import("./SidebarEditor.4430bf68.js"),["assets/SidebarEditor.4430bf68.js","assets/outputWidgets.5ced94d7.js","assets/outputWidgets.e6401203.css","assets/index.111424a8.js","assets/Title.74cb802d.js","assets/index.fe1573f2.js","assets/index.c946e10c.js","assets/workspaces.2720be7e.js","assets/activeRecord.6ae8bce9.js","assets/pubsub.f395e26b.js","assets/url.b91ad4a3.js","assets/asyncComputed.6f213f9d.js","assets/CircularLoading.ee1c51bf.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.5baa60de.js","assets/ant-design.49bf0c8e.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.a72a41c7.js","assets/PlayerNavbar.82b5545a.js","assets/icons.157295a5.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.48bbb941.js","assets/WidgetsFrame.a33f6bb5.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/Form.3717142f.js"]),meta:{title:"Abstra - Sidebar"}}]},{path:"form/:formPath",name:"formEditor",component:()=>t(()=>import("./FormEditor.44334e38.js"),["assets/FormEditor.44334e38.js","assets/outputWidgets.5ced94d7.js","assets/outputWidgets.e6401203.css","assets/FormTester.vue_vue_type_script_setup_true_lang.0f2cc92d.js","assets/SmartConsole.2af8d0ee.js","assets/asyncComputed.6f213f9d.js","assets/forms.4a767921.js","assets/activeRecord.6ae8bce9.js","assets/pubsub.f395e26b.js","assets/dashes.11209ba2.js","assets/index.48bbb941.js","assets/hooks.eb6be727.js","assets/jobs.b1195529.js","assets/workspaces.2720be7e.js","assets/url.b91ad4a3.js","assets/icons.157295a5.js","assets/Title.74cb802d.js","assets/index.d48bc6c3.js","assets/uuid.3b98222f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b7605154.js","assets/SmartConsole.96457e04.css","assets/Form.3717142f.js","assets/broker.9e31ddd3.js","assets/index.cec4fd9b.js","assets/executeJs.11b87c77.js","assets/CircularLoading.ee1c51bf.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.82b5545a.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.e0bb8b23.js","assets/Steps.998aa76d.css","assets/executeJs.ee59d5a5.css","assets/WidgetsFrame.a33f6bb5.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.fdf790e0.js","assets/broker.1fe265d9.css","assets/StageRunSelector.vue_vue_type_script_setup_true_lang.24c52910.js","assets/index.2298efd5.js","assets/CollapsePanel.3e7dc058.js","assets/index.c816332a.js","assets/index.c946e10c.js","assets/index.fe1573f2.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.5baa60de.js","assets/ant-design.49bf0c8e.js","assets/SaveButton.13ece1cb.css","assets/LaunchButton.vue_vue_type_script_setup_true_lang.7fd38883.js","assets/BaseLayout.a4af420b.js","assets/BaseLayout.2d5b030e.css","assets/TabPane.d9f04984.js","assets/index.bd8df636.js","assets/index.2a4a437f.js"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.dfd64855.js"),["assets/FormPreview.dfd64855.js","assets/outputWidgets.5ced94d7.js","assets/outputWidgets.e6401203.css","assets/CircularLoading.ee1c51bf.js","assets/CircularLoading.f81b57b4.css","assets/broker.9e31ddd3.js","assets/index.cec4fd9b.js","assets/pubsub.f395e26b.js","assets/executeJs.11b87c77.js","assets/icons.157295a5.js","assets/PlayerNavbar.82b5545a.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.48bbb941.js","assets/Steps.e0bb8b23.js","assets/Steps.998aa76d.css","assets/executeJs.ee59d5a5.css","assets/WidgetsFrame.a33f6bb5.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.fdf790e0.js","assets/broker.1fe265d9.css","assets/BackButton.77695c64.js","assets/BackButton.dd542746.css","assets/asyncComputed.6f213f9d.js","assets/forms.4a767921.js","assets/activeRecord.6ae8bce9.js","assets/workspaces.2720be7e.js","assets/url.b91ad4a3.js","assets/FormPreview.0cd86555.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>t(()=>import("./JobEditor.024aa8f7.js"),["assets/JobEditor.024aa8f7.js","assets/outputWidgets.5ced94d7.js","assets/outputWidgets.e6401203.css","assets/SmartConsole.2af8d0ee.js","assets/asyncComputed.6f213f9d.js","assets/forms.4a767921.js","assets/activeRecord.6ae8bce9.js","assets/pubsub.f395e26b.js","assets/dashes.11209ba2.js","assets/index.48bbb941.js","assets/hooks.eb6be727.js","assets/jobs.b1195529.js","assets/workspaces.2720be7e.js","assets/url.b91ad4a3.js","assets/icons.157295a5.js","assets/Title.74cb802d.js","assets/index.d48bc6c3.js","assets/uuid.3b98222f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b7605154.js","assets/SmartConsole.96457e04.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.5baa60de.js","assets/ant-design.49bf0c8e.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.a4af420b.js","assets/BaseLayout.2d5b030e.css","assets/JobSettings.vue_vue_type_script_setup_true_lang.d46e3984.js","assets/RunButton.vue_vue_type_script_setup_true_lang.1dff2367.js","assets/index.280a7171.js","assets/index.54325f84.js","assets/dayjs.75fd0727.js","assets/Form.3717142f.js","assets/index.2a4a437f.js","assets/index.fe1573f2.js","assets/TabPane.d9f04984.js"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>t(()=>import("./DashEditor.25c20c98.js"),["assets/DashEditor.25c20c98.js","assets/index.48bbb941.js","assets/outputWidgets.5ced94d7.js","assets/outputWidgets.e6401203.css","assets/BaseLayout.a4af420b.js","assets/BaseLayout.2d5b030e.css","assets/DashPlayer.52c5e4a6.js","assets/executeJs.11b87c77.js","assets/icons.157295a5.js","assets/index.cec4fd9b.js","assets/pubsub.f395e26b.js","assets/CircularLoading.ee1c51bf.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.82b5545a.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.e0bb8b23.js","assets/Steps.998aa76d.css","assets/executeJs.ee59d5a5.css","assets/geometryUtils.dec88751.js","assets/WidgetsFrame.a33f6bb5.js","assets/WidgetsFrame.0816a5f5.css","assets/DashPlayer.b0953bcd.css","assets/SmartConsole.2af8d0ee.js","assets/asyncComputed.6f213f9d.js","assets/forms.4a767921.js","assets/activeRecord.6ae8bce9.js","assets/dashes.11209ba2.js","assets/hooks.eb6be727.js","assets/jobs.b1195529.js","assets/workspaces.2720be7e.js","assets/url.b91ad4a3.js","assets/Title.74cb802d.js","assets/index.d48bc6c3.js","assets/uuid.3b98222f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b7605154.js","assets/SmartConsole.96457e04.css","assets/LaunchButton.vue_vue_type_script_setup_true_lang.7fd38883.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.5baa60de.js","assets/ant-design.49bf0c8e.js","assets/SaveButton.13ece1cb.css","assets/keyboard.7c3d2e46.js","assets/index.2a4a437f.js","assets/index.fe1573f2.js","assets/TabPane.d9f04984.js","assets/DashEditor.b1e4d748.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>t(()=>import("./DashPreview.9254d897.js"),["assets/DashPreview.9254d897.js","assets/outputWidgets.5ced94d7.js","assets/outputWidgets.e6401203.css","assets/DashPlayer.52c5e4a6.js","assets/executeJs.11b87c77.js","assets/icons.157295a5.js","assets/index.cec4fd9b.js","assets/pubsub.f395e26b.js","assets/CircularLoading.ee1c51bf.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.82b5545a.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.48bbb941.js","assets/Steps.e0bb8b23.js","assets/Steps.998aa76d.css","assets/executeJs.ee59d5a5.css","assets/geometryUtils.dec88751.js","assets/WidgetsFrame.a33f6bb5.js","assets/WidgetsFrame.0816a5f5.css","assets/DashPlayer.b0953bcd.css","assets/BackButton.77695c64.js","assets/BackButton.dd542746.css","assets/asyncComputed.6f213f9d.js","assets/dashes.11209ba2.js","assets/activeRecord.6ae8bce9.js","assets/workspaces.2720be7e.js","assets/url.b91ad4a3.js","assets/DashPreview.a3f29850.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>t(()=>import("./HookEditor.80c832bb.js"),["assets/HookEditor.80c832bb.js","assets/outputWidgets.5ced94d7.js","assets/outputWidgets.e6401203.css","assets/SmartConsole.2af8d0ee.js","assets/asyncComputed.6f213f9d.js","assets/forms.4a767921.js","assets/activeRecord.6ae8bce9.js","assets/pubsub.f395e26b.js","assets/dashes.11209ba2.js","assets/index.48bbb941.js","assets/hooks.eb6be727.js","assets/jobs.b1195529.js","assets/workspaces.2720be7e.js","assets/url.b91ad4a3.js","assets/icons.157295a5.js","assets/Title.74cb802d.js","assets/index.d48bc6c3.js","assets/uuid.3b98222f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b7605154.js","assets/SmartConsole.96457e04.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.5baa60de.js","assets/ant-design.49bf0c8e.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.a4af420b.js","assets/BaseLayout.2d5b030e.css","assets/HookSettings.vue_vue_type_script_setup_true_lang.7ff98b45.js","assets/StageRunSelector.vue_vue_type_script_setup_true_lang.24c52910.js","assets/RunButton.vue_vue_type_script_setup_true_lang.1dff2367.js","assets/index.bd89b8f7.js","assets/index.c946e10c.js","assets/CollapsePanel.3e7dc058.js","assets/index.fe1573f2.js","assets/index.c816332a.js","assets/index.54325f84.js","assets/Form.3717142f.js","assets/index.2a4a437f.js","assets/TabPane.d9f04984.js"]),meta:{title:"Abstra - Hook Editor"}},{path:"workflow",name:"workflowEditor",component:()=>t(()=>import("./WorkflowEditor.4140f50d.js"),["assets/WorkflowEditor.4140f50d.js","assets/forms.4a767921.js","assets/activeRecord.6ae8bce9.js","assets/pubsub.f395e26b.js","assets/outputWidgets.5ced94d7.js","assets/outputWidgets.e6401203.css","assets/workspaces.2720be7e.js","assets/url.b91ad4a3.js","assets/icons.157295a5.js","assets/FormTester.vue_vue_type_script_setup_true_lang.0f2cc92d.js","assets/SmartConsole.2af8d0ee.js","assets/asyncComputed.6f213f9d.js","assets/dashes.11209ba2.js","assets/index.48bbb941.js","assets/hooks.eb6be727.js","assets/jobs.b1195529.js","assets/Title.74cb802d.js","assets/index.d48bc6c3.js","assets/uuid.3b98222f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.b7605154.js","assets/SmartConsole.96457e04.css","assets/Form.3717142f.js","assets/broker.9e31ddd3.js","assets/index.cec4fd9b.js","assets/executeJs.11b87c77.js","assets/CircularLoading.ee1c51bf.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.82b5545a.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.e0bb8b23.js","assets/Steps.998aa76d.css","assets/executeJs.ee59d5a5.css","assets/WidgetsFrame.a33f6bb5.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.fdf790e0.js","assets/broker.1fe265d9.css","assets/StageRunSelector.vue_vue_type_script_setup_true_lang.24c52910.js","assets/index.2298efd5.js","assets/CollapsePanel.3e7dc058.js","assets/index.c816332a.js","assets/index.c946e10c.js","assets/index.fe1573f2.js","assets/geometryUtils.dec88751.js","assets/keyboard.7c3d2e46.js","assets/ant-design.49bf0c8e.js","assets/LaunchButton.vue_vue_type_script_setup_true_lang.7fd38883.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.5baa60de.js","assets/SaveButton.13ece1cb.css","assets/HookSettings.vue_vue_type_script_setup_true_lang.7ff98b45.js","assets/RunButton.vue_vue_type_script_setup_true_lang.1dff2367.js","assets/index.bd89b8f7.js","assets/index.54325f84.js","assets/JobSettings.vue_vue_type_script_setup_true_lang.d46e3984.js","assets/index.280a7171.js","assets/dayjs.75fd0727.js","assets/index.8ea91ac5.js","assets/index.111424a8.js","assets/LoginBlock.c2755418.js","assets/popupNotifcation.2a7681be.js","assets/index.1664a598.js","assets/LoginBlock.d273f904.css","assets/index.2a4a437f.js","assets/index.e3b09094.js","assets/TabPane.d9f04984.js","assets/WorkflowEditor.f777e473.css"]),meta:{title:"Abstra - Workflow Editor"}}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{W(e,o)});(async()=>{await j();const e=w({render:()=>g(x)});P.init(),I(e,a),e.use(a),e.use(D),e.mount("#app"),e.component("VSelect",y),e.component("Markdown",k),e.component("Icon",V),e.component("Message",T),r(e,R),r(e,L),r(e,O)})();
//# sourceMappingURL=editor.b465962d.js.map
