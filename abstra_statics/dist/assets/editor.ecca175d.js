import{r as _,d as m,o as d,a as p,b as c,c as h,w as u,e as l,f as E,u as f,A as b,g as v,h as A,_ as t,i as w,T as P,j as I,P as D,C as y,M as k,I as V,s as T,k as r,l as g,m as R,n as L,p as O}from"./outputWidgets.b56466d5.js";import{u as W}from"./index.a3b69644.js";import{u as j}from"./index.5248b04a.js";import"./pubsub.14ec67af.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="2bd5f371-74bf-43e4-94f1-345bd73c49d5",e._sentryDebugIdIdentifier="sentry-dbid-2bd5f371-74bf-43e4-94f1-345bd73c49d5")}catch{}})();const s=_(!1),C=()=>{window.innerWidth<780?s.value=!0:s.value=!1},S={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},x=m({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return d(()=>{window.addEventListener("resize",C)}),(i,M)=>{const n=p("router-view");return c(),h(f(b),{theme:o},{default:u(()=>[l("div",S,[E(n)])]),_:1})}}});const a=v({history:A("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.510fdc77.js"),["assets/Home.510fdc77.js","assets/Modal.14d90c8b.js","assets/outputWidgets.b56466d5.js","assets/outputWidgets.8ce475af.css","assets/Modal.5aaf8eba.css","assets/Home.3d251a01.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.98007299.js"),["assets/Workspace.98007299.js","assets/outputWidgets.b56466d5.js","assets/outputWidgets.8ce475af.css","assets/icons.471883fc.js","assets/Tooltip.7604c1bf.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/LoginBlock.2d4022d9.js","assets/workspaces.fc22fb79.js","assets/activeRecord.32bffbb4.js","assets/pubsub.14ec67af.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.1bcd9322.js","assets/popupNotifcation.3d8764fd.js","assets/asyncComputed.57054d06.js","assets/index.fca2d835.js","assets/Title.f0be6d00.js","assets/index.c5114736.js","assets/Form.7eedc44a.js","assets/LoginBlock.d273f904.css","assets/BaseLayout.96f238ef.js","assets/BaseLayout.282f66f6.css","assets/index.fedfa0b0.js","assets/index.2288da9e.js","assets/Workspace.9a25b177.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>t(()=>import("./Forms.e1eac6aa.js"),["assets/Forms.e1eac6aa.js","assets/outputWidgets.b56466d5.js","assets/outputWidgets.8ce475af.css","assets/icons.471883fc.js","assets/asyncComputed.57054d06.js","assets/forms.1ca37096.js","assets/activeRecord.32bffbb4.js","assets/pubsub.14ec67af.js","assets/CrudView.vue_vue_type_script_setup_true_lang.fd6822f0.js","assets/index.fca2d835.js","assets/Title.f0be6d00.js","assets/Form.7eedc44a.js","assets/index.77e8fbfa.js","assets/index.dcb1daae.js","assets/index.7680ed50.js","assets/index.7dcd1562.js","assets/index.2288da9e.js","assets/ant-design.a6ec74a8.js"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>t(()=>import("./Dashes.ce1cbff2.js"),["assets/Dashes.ce1cbff2.js","assets/outputWidgets.b56466d5.js","assets/outputWidgets.8ce475af.css","assets/icons.471883fc.js","assets/asyncComputed.57054d06.js","assets/dashes.363075e8.js","assets/activeRecord.32bffbb4.js","assets/pubsub.14ec67af.js","assets/index.a3b69644.js","assets/CrudView.vue_vue_type_script_setup_true_lang.fd6822f0.js","assets/index.fca2d835.js","assets/Title.f0be6d00.js","assets/Form.7eedc44a.js","assets/index.77e8fbfa.js","assets/index.dcb1daae.js","assets/index.7680ed50.js","assets/index.7dcd1562.js","assets/index.2288da9e.js","assets/ant-design.a6ec74a8.js"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>t(()=>import("./Jobs.5ece352c.js"),["assets/Jobs.5ece352c.js","assets/outputWidgets.b56466d5.js","assets/outputWidgets.8ce475af.css","assets/icons.471883fc.js","assets/asyncComputed.57054d06.js","assets/jobs.9123fad6.js","assets/activeRecord.32bffbb4.js","assets/pubsub.14ec67af.js","assets/CrudView.vue_vue_type_script_setup_true_lang.fd6822f0.js","assets/index.fca2d835.js","assets/Title.f0be6d00.js","assets/Form.7eedc44a.js","assets/index.77e8fbfa.js","assets/index.dcb1daae.js","assets/index.7680ed50.js","assets/index.7dcd1562.js","assets/index.2288da9e.js","assets/ant-design.a6ec74a8.js"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>t(()=>import("./Hooks.a05f1acd.js"),["assets/Hooks.a05f1acd.js","assets/outputWidgets.b56466d5.js","assets/outputWidgets.8ce475af.css","assets/icons.471883fc.js","assets/asyncComputed.57054d06.js","assets/hooks.20920d1e.js","assets/activeRecord.32bffbb4.js","assets/pubsub.14ec67af.js","assets/CrudView.vue_vue_type_script_setup_true_lang.fd6822f0.js","assets/index.fca2d835.js","assets/Title.f0be6d00.js","assets/Form.7eedc44a.js","assets/index.77e8fbfa.js","assets/index.dcb1daae.js","assets/index.7680ed50.js","assets/index.7dcd1562.js","assets/index.2288da9e.js","assets/ant-design.a6ec74a8.js"]),meta:{title:"Abstra - Hooks"}},{path:"style",name:"style",component:()=>t(()=>import("./StyleEditor.60850748.js"),["assets/StyleEditor.60850748.js","assets/asyncComputed.57054d06.js","assets/outputWidgets.b56466d5.js","assets/outputWidgets.8ce475af.css","assets/workspaces.fc22fb79.js","assets/activeRecord.32bffbb4.js","assets/pubsub.14ec67af.js","assets/CircularLoading.7e815af5.js","assets/CircularLoading.f81b57b4.css","assets/icons.471883fc.js","assets/index.4ecc8ae4.js","assets/Title.f0be6d00.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.2e9156b8.js","assets/ant-design.a6ec74a8.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.542479e6.js","assets/PlayerNavbar.b0d3110a.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.a3b69644.js","assets/WidgetsFrame.2d096182.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/index.7dcd1562.js","assets/Form.7eedc44a.js","assets/StyleEditor.4d8e1574.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>t(()=>import("./SidebarEditor.530d2fac.js"),["assets/SidebarEditor.530d2fac.js","assets/outputWidgets.b56466d5.js","assets/outputWidgets.8ce475af.css","assets/index.854697d0.js","assets/Title.f0be6d00.js","assets/index.2288da9e.js","assets/index.7dcd1562.js","assets/workspaces.fc22fb79.js","assets/activeRecord.32bffbb4.js","assets/pubsub.14ec67af.js","assets/asyncComputed.57054d06.js","assets/CircularLoading.7e815af5.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.2e9156b8.js","assets/ant-design.a6ec74a8.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.542479e6.js","assets/PlayerNavbar.b0d3110a.js","assets/icons.471883fc.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.a3b69644.js","assets/WidgetsFrame.2d096182.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/Form.7eedc44a.js"]),meta:{title:"Abstra - Sidebar"}}]},{path:"form/:formPath",name:"formEditor",component:()=>t(()=>import("./FormEditor.a5d84b27.js"),["assets/FormEditor.a5d84b27.js","assets/outputWidgets.b56466d5.js","assets/outputWidgets.8ce475af.css","assets/FormTester.vue_vue_type_script_setup_true_lang.fb45e97c.js","assets/SmartConsole.9a54a0d5.js","assets/asyncComputed.57054d06.js","assets/forms.1ca37096.js","assets/activeRecord.32bffbb4.js","assets/pubsub.14ec67af.js","assets/dashes.363075e8.js","assets/index.a3b69644.js","assets/hooks.20920d1e.js","assets/jobs.9123fad6.js","assets/workspaces.fc22fb79.js","assets/icons.471883fc.js","assets/Title.f0be6d00.js","assets/index.7680ed50.js","assets/uuid.465ddae8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.1bcd9322.js","assets/SmartConsole.ec6046c4.css","assets/Form.7eedc44a.js","assets/broker.f51b5baf.js","assets/index.5248b04a.js","assets/executeJs.ef22b96d.js","assets/CircularLoading.7e815af5.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.b0d3110a.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.3046f774.js","assets/Steps.998aa76d.css","assets/Modal.14d90c8b.js","assets/Modal.5aaf8eba.css","assets/executeJs.dfa3b35d.css","assets/WidgetsFrame.2d096182.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.267482a3.js","assets/broker.ac4594bd.css","assets/StageRunSelector.vue_vue_type_script_setup_true_lang.a00800d0.js","assets/index.89e6167b.js","assets/CollapsePanel.621753d2.js","assets/index.7dcd1562.js","assets/index.2288da9e.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.2e9156b8.js","assets/ant-design.a6ec74a8.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.96f238ef.js","assets/BaseLayout.282f66f6.css","assets/TabPane.c10088ee.js","assets/index.ccd74fd0.js","assets/index.fedfa0b0.js"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.bdfb93da.js"),["assets/FormPreview.bdfb93da.js","assets/outputWidgets.b56466d5.js","assets/outputWidgets.8ce475af.css","assets/CircularLoading.7e815af5.js","assets/CircularLoading.f81b57b4.css","assets/broker.f51b5baf.js","assets/index.5248b04a.js","assets/pubsub.14ec67af.js","assets/executeJs.ef22b96d.js","assets/icons.471883fc.js","assets/PlayerNavbar.b0d3110a.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.a3b69644.js","assets/Steps.3046f774.js","assets/Steps.998aa76d.css","assets/Modal.14d90c8b.js","assets/Modal.5aaf8eba.css","assets/executeJs.dfa3b35d.css","assets/WidgetsFrame.2d096182.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.267482a3.js","assets/broker.ac4594bd.css","assets/BackButton.2a6f69cc.js","assets/BackButton.dd542746.css","assets/asyncComputed.57054d06.js","assets/forms.1ca37096.js","assets/activeRecord.32bffbb4.js","assets/workspaces.fc22fb79.js","assets/FormPreview.0cd86555.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>t(()=>import("./JobEditor.7293f260.js"),["assets/JobEditor.7293f260.js","assets/outputWidgets.b56466d5.js","assets/outputWidgets.8ce475af.css","assets/SmartConsole.9a54a0d5.js","assets/asyncComputed.57054d06.js","assets/forms.1ca37096.js","assets/activeRecord.32bffbb4.js","assets/pubsub.14ec67af.js","assets/dashes.363075e8.js","assets/index.a3b69644.js","assets/hooks.20920d1e.js","assets/jobs.9123fad6.js","assets/workspaces.fc22fb79.js","assets/icons.471883fc.js","assets/Title.f0be6d00.js","assets/index.7680ed50.js","assets/uuid.465ddae8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.1bcd9322.js","assets/SmartConsole.ec6046c4.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.2e9156b8.js","assets/ant-design.a6ec74a8.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.96f238ef.js","assets/BaseLayout.282f66f6.css","assets/JobSettings.vue_vue_type_script_setup_true_lang.a53c5c3a.js","assets/dayjs.d50b16c8.js","assets/index.77e8fbfa.js","assets/Form.7eedc44a.js","assets/index.fedfa0b0.js","assets/index.2288da9e.js","assets/TabPane.c10088ee.js"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>t(()=>import("./DashEditor.5f041f32.js"),["assets/DashEditor.5f041f32.js","assets/index.a3b69644.js","assets/outputWidgets.b56466d5.js","assets/outputWidgets.8ce475af.css","assets/BaseLayout.96f238ef.js","assets/BaseLayout.282f66f6.css","assets/DashPlayer.34558c99.js","assets/executeJs.ef22b96d.js","assets/icons.471883fc.js","assets/index.5248b04a.js","assets/pubsub.14ec67af.js","assets/CircularLoading.7e815af5.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.b0d3110a.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.3046f774.js","assets/Steps.998aa76d.css","assets/Modal.14d90c8b.js","assets/Modal.5aaf8eba.css","assets/executeJs.dfa3b35d.css","assets/geometryUtils.bea247fe.js","assets/WidgetsFrame.2d096182.js","assets/WidgetsFrame.0816a5f5.css","assets/DashPlayer.4868beea.css","assets/SmartConsole.9a54a0d5.js","assets/asyncComputed.57054d06.js","assets/forms.1ca37096.js","assets/activeRecord.32bffbb4.js","assets/dashes.363075e8.js","assets/hooks.20920d1e.js","assets/jobs.9123fad6.js","assets/workspaces.fc22fb79.js","assets/Title.f0be6d00.js","assets/index.7680ed50.js","assets/uuid.465ddae8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.1bcd9322.js","assets/SmartConsole.ec6046c4.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.2e9156b8.js","assets/ant-design.a6ec74a8.js","assets/SaveButton.13ece1cb.css","assets/keyboard.7c868ba2.js","assets/index.fedfa0b0.js","assets/index.2288da9e.js","assets/TabPane.c10088ee.js","assets/DashEditor.b1e4d748.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>t(()=>import("./DashPreview.9e9538ae.js"),["assets/DashPreview.9e9538ae.js","assets/outputWidgets.b56466d5.js","assets/outputWidgets.8ce475af.css","assets/DashPlayer.34558c99.js","assets/executeJs.ef22b96d.js","assets/icons.471883fc.js","assets/index.5248b04a.js","assets/pubsub.14ec67af.js","assets/CircularLoading.7e815af5.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.b0d3110a.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.a3b69644.js","assets/Steps.3046f774.js","assets/Steps.998aa76d.css","assets/Modal.14d90c8b.js","assets/Modal.5aaf8eba.css","assets/executeJs.dfa3b35d.css","assets/geometryUtils.bea247fe.js","assets/WidgetsFrame.2d096182.js","assets/WidgetsFrame.0816a5f5.css","assets/DashPlayer.4868beea.css","assets/BackButton.2a6f69cc.js","assets/BackButton.dd542746.css","assets/asyncComputed.57054d06.js","assets/dashes.363075e8.js","assets/activeRecord.32bffbb4.js","assets/workspaces.fc22fb79.js","assets/DashPreview.a3f29850.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>t(()=>import("./HookEditor.bca2875f.js"),["assets/HookEditor.bca2875f.js","assets/outputWidgets.b56466d5.js","assets/outputWidgets.8ce475af.css","assets/SmartConsole.9a54a0d5.js","assets/asyncComputed.57054d06.js","assets/forms.1ca37096.js","assets/activeRecord.32bffbb4.js","assets/pubsub.14ec67af.js","assets/dashes.363075e8.js","assets/index.a3b69644.js","assets/hooks.20920d1e.js","assets/jobs.9123fad6.js","assets/workspaces.fc22fb79.js","assets/icons.471883fc.js","assets/Title.f0be6d00.js","assets/index.7680ed50.js","assets/uuid.465ddae8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.1bcd9322.js","assets/SmartConsole.ec6046c4.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.2e9156b8.js","assets/ant-design.a6ec74a8.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.96f238ef.js","assets/BaseLayout.282f66f6.css","assets/HookSettings.vue_vue_type_script_setup_true_lang.7fb0cbc0.js","assets/StageRunSelector.vue_vue_type_script_setup_true_lang.a00800d0.js","assets/index.24c14e69.js","assets/index.7dcd1562.js","assets/CollapsePanel.621753d2.js","assets/index.2288da9e.js","assets/index.77e8fbfa.js","assets/Form.7eedc44a.js","assets/index.fedfa0b0.js","assets/TabPane.c10088ee.js"]),meta:{title:"Abstra - Hook Editor"}},{path:"workflow",name:"workflowEditor",component:()=>t(()=>import("./WorkflowEditor.1b27dd30.js"),["assets/WorkflowEditor.1b27dd30.js","assets/outputWidgets.b56466d5.js","assets/outputWidgets.8ce475af.css","assets/workspaces.fc22fb79.js","assets/activeRecord.32bffbb4.js","assets/pubsub.14ec67af.js","assets/icons.471883fc.js","assets/FormTester.vue_vue_type_script_setup_true_lang.fb45e97c.js","assets/SmartConsole.9a54a0d5.js","assets/asyncComputed.57054d06.js","assets/forms.1ca37096.js","assets/dashes.363075e8.js","assets/index.a3b69644.js","assets/hooks.20920d1e.js","assets/jobs.9123fad6.js","assets/Title.f0be6d00.js","assets/index.7680ed50.js","assets/uuid.465ddae8.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.1bcd9322.js","assets/SmartConsole.ec6046c4.css","assets/Form.7eedc44a.js","assets/broker.f51b5baf.js","assets/index.5248b04a.js","assets/executeJs.ef22b96d.js","assets/CircularLoading.7e815af5.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.b0d3110a.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.3046f774.js","assets/Steps.998aa76d.css","assets/Modal.14d90c8b.js","assets/Modal.5aaf8eba.css","assets/executeJs.dfa3b35d.css","assets/WidgetsFrame.2d096182.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.267482a3.js","assets/broker.ac4594bd.css","assets/StageRunSelector.vue_vue_type_script_setup_true_lang.a00800d0.js","assets/index.89e6167b.js","assets/CollapsePanel.621753d2.js","assets/index.7dcd1562.js","assets/index.2288da9e.js","assets/geometryUtils.bea247fe.js","assets/keyboard.7c868ba2.js","assets/ant-design.a6ec74a8.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.2e9156b8.js","assets/SaveButton.13ece1cb.css","assets/HookSettings.vue_vue_type_script_setup_true_lang.7fb0cbc0.js","assets/index.24c14e69.js","assets/index.77e8fbfa.js","assets/JobSettings.vue_vue_type_script_setup_true_lang.a53c5c3a.js","assets/dayjs.d50b16c8.js","assets/index.aafa5e48.js","assets/index.fca2d835.js","assets/index.854697d0.js","assets/LoginBlock.2d4022d9.js","assets/popupNotifcation.3d8764fd.js","assets/index.c5114736.js","assets/LoginBlock.d273f904.css","assets/index.fedfa0b0.js","assets/TabPane.c10088ee.js","assets/WorkflowEditor.cd042c40.css"]),meta:{title:"Abstra - Workflow Editor"}}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{W(e,o)});(async()=>{await j();const e=w({render:()=>g(x)});P.init(),I(e,a),e.use(a),e.use(D),e.mount("#app"),e.component("VSelect",y),e.component("Markdown",k),e.component("Icon",V),e.component("Message",T),r(e,R),r(e,L),r(e,O)})();
//# sourceMappingURL=editor.ecca175d.js.map
