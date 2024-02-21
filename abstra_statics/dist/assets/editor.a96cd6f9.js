import{r as _,d,o as m,a as p,b as c,c as l,w as u,e as h,f,u as E,A as b,g as w,h as v,_ as t,i as A,j as g,T as I,k as P,P as y,C as k,M as R,I as D,s as V,l as r,m as T,n as L,p as O,q as S}from"./outputWidgets.12d07fe6.js";import{r as W,s as C}from"./index.8cc30cca.js";import"./pubsub.1984cbae.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="df7dec42-dfd5-4b41-af2f-a3a131b27dd1",e._sentryDebugIdIdentifier="sentry-dbid-df7dec42-dfd5-4b41-af2f-a3a131b27dd1")}catch{}})();const i=_(!1),x=()=>{window.innerWidth<780?i.value=!0:i.value=!1},M={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},q=d({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return m(()=>{window.addEventListener("resize",x)}),(n,B)=>{const s=p("router-view");return c(),l(E(b),{theme:o,"page-header":{ghost:!1}},{default:u(()=>[h("div",M,[f(s)])]),_:1})}}});const a=w({history:v("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.cb5f57f4.js"),["assets/Home.cb5f57f4.js","assets/outputWidgets.12d07fe6.js","assets/outputWidgets.b5a98445.css","assets/Home.6c0ec87e.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.bc71c72c.js"),["assets/Workspace.bc71c72c.js","assets/outputWidgets.12d07fe6.js","assets/outputWidgets.b5a98445.css","assets/icons.f2b4f37f.js","assets/logo.084e5d7c.js","assets/BaseLayout.be867c28.js","assets/BaseLayout.881bfa61.css","assets/NavbarControls.9871bf3e.js","assets/index.8cc30cca.js","assets/pubsub.1984cbae.js","assets/asyncComputed.4b96df58.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.2a0c877d.js","assets/ant-design.7bb70225.js","assets/index.209174e2.js","assets/Modal.f73330d1.js","assets/Typography.45a7b8d7.js","assets/Link.91ccc758.js","assets/Base.24118e9f.js","assets/SaveButton.13ece1cb.css","assets/index.a49f83ec.js","assets/workspaces.bed43fcb.js","assets/runnerData.ccdef8f8.js","assets/url.f2a2de62.js","assets/record.9ee5b79a.js","assets/popupNotifcation.1b0a8b3c.js","assets/index.04a061be.js","assets/Text.6b94c3bc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0bca7c74.js","assets/Paragraph.01fbd56d.js","assets/NavbarControls.eec3ba09.css","assets/index.2911c032.js","assets/Workspace.7fb7c04c.css"]),redirect:()=>({name:"home"}),children:[{path:"home",name:"home",component:()=>t(()=>import("./Scripts.8a7b34a7.js"),["assets/Scripts.8a7b34a7.js","assets/outputWidgets.12d07fe6.js","assets/outputWidgets.b5a98445.css","assets/forms.51d3d1b9.js","assets/record.9ee5b79a.js","assets/pubsub.1984cbae.js","assets/workspaces.bed43fcb.js","assets/runnerData.ccdef8f8.js","assets/url.f2a2de62.js","assets/jobs.cfd5c0a2.js","assets/scripts.f6859477.js","assets/asyncComputed.4b96df58.js","assets/icons.f2b4f37f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0bca7c74.js","assets/Typography.45a7b8d7.js","assets/index.04a061be.js","assets/Paragraph.01fbd56d.js","assets/Base.24118e9f.js","assets/validations.78dea1a0.js","assets/string.623bb943.js","assets/FormItem.791863a4.js","assets/hasIn.7e305b7d.js","assets/Text.6b94c3bc.js","assets/index.a49f83ec.js","assets/Form.a87331b6.js","assets/Modal.f73330d1.js","assets/CrudView.1d47b402.js","assets/router.d820a159.js","assets/Title.cc650707.js","assets/index.d055bc8b.js","assets/CrudView.9de44552.css","assets/ant-design.7bb70225.js","assets/index.209174e2.js","assets/Link.91ccc758.js","assets/Scripts.c0ba7f07.css"]),meta:{title:"Scripts - Abstra"}}]},{path:"form/:id",name:"formEditor",component:()=>t(()=>import("./FormEditor.86fb7ce0.js"),["assets/FormEditor.86fb7ce0.js","assets/index.8cc30cca.js","assets/outputWidgets.12d07fe6.js","assets/outputWidgets.b5a98445.css","assets/pubsub.1984cbae.js","assets/BaseLayout.be867c28.js","assets/BaseLayout.881bfa61.css","assets/FormRunner.5e7a09a1.js","assets/url.f2a2de62.js","assets/Passwordless.a7ea3d22.js","assets/icons.f2b4f37f.js","assets/CircularLoading.470373d7.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.7de0ca4a.css","assets/PlayerNavbar.3ccff19a.js","assets/PlayerNavbar.d7d1e342.css","assets/WidgetsFrame.79acf750.js","assets/WidgetsFrame.97ae601d.css","assets/Steps.7dd9244e.js","assets/Steps.4a8d55e8.css","assets/Card.ab1ea8a0.js","assets/TabPane.51b88e6f.js","assets/hasIn.7e305b7d.js","assets/Typography.45a7b8d7.js","assets/FormRunner.21d1e77c.css","assets/SourceCode.2507793e.js","assets/uuid.e4164511.js","assets/NavbarControls.9871bf3e.js","assets/asyncComputed.4b96df58.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.2a0c877d.js","assets/ant-design.7bb70225.js","assets/index.209174e2.js","assets/Modal.f73330d1.js","assets/Link.91ccc758.js","assets/Base.24118e9f.js","assets/SaveButton.13ece1cb.css","assets/index.a49f83ec.js","assets/workspaces.bed43fcb.js","assets/runnerData.ccdef8f8.js","assets/record.9ee5b79a.js","assets/popupNotifcation.1b0a8b3c.js","assets/index.04a061be.js","assets/Text.6b94c3bc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0bca7c74.js","assets/Paragraph.01fbd56d.js","assets/NavbarControls.eec3ba09.css","assets/jobs.cfd5c0a2.js","assets/scripts.f6859477.js","assets/validations.78dea1a0.js","assets/string.623bb943.js","assets/FormItem.791863a4.js","assets/toggleHighContrast.01c2cfd7.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.52c7bd2b.css","assets/forms.51d3d1b9.js","assets/StageRunSelector.e378a046.js","assets/index.7c6e7411.js","assets/index.2bddda7f.js","assets/Form.a87331b6.js","assets/StageRunSelector.587727ed.css","assets/index.6caa2016.js","assets/Title.cc650707.js","assets/api.74776e14.js","assets/schema.a42564e2.js","assets/index.cf4c23b9.js","assets/index.2911c032.js","assets/index.d055bc8b.js","assets/ExpandOutlined.dbc66b84.js","assets/FormEditor.bdb2f6d5.css"]),meta:{title:"Smart Form Editor - Abstra"}},{path:"form/:id/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.e8175b36.js"),["assets/FormPreview.e8175b36.js","assets/index.8cc30cca.js","assets/outputWidgets.12d07fe6.js","assets/outputWidgets.b5a98445.css","assets/pubsub.1984cbae.js","assets/FormRunner.5e7a09a1.js","assets/url.f2a2de62.js","assets/Passwordless.a7ea3d22.js","assets/icons.f2b4f37f.js","assets/CircularLoading.470373d7.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.7de0ca4a.css","assets/PlayerNavbar.3ccff19a.js","assets/PlayerNavbar.d7d1e342.css","assets/WidgetsFrame.79acf750.js","assets/WidgetsFrame.97ae601d.css","assets/Steps.7dd9244e.js","assets/Steps.4a8d55e8.css","assets/Card.ab1ea8a0.js","assets/TabPane.51b88e6f.js","assets/hasIn.7e305b7d.js","assets/Typography.45a7b8d7.js","assets/FormRunner.21d1e77c.css","assets/asyncComputed.4b96df58.js","assets/forms.51d3d1b9.js","assets/record.9ee5b79a.js","assets/workspaces.bed43fcb.js","assets/runnerData.ccdef8f8.js","assets/FormPreview.335edebb.css"]),meta:{title:"Smart Form Preview - Abstra"}},{path:"job/:id",name:"jobEditor",component:()=>t(()=>import("./JobEditor.416ffa81.js"),["assets/JobEditor.416ffa81.js","assets/outputWidgets.12d07fe6.js","assets/outputWidgets.b5a98445.css","assets/workspaces.bed43fcb.js","assets/runnerData.ccdef8f8.js","assets/url.f2a2de62.js","assets/record.9ee5b79a.js","assets/pubsub.1984cbae.js","assets/jobs.cfd5c0a2.js","assets/SourceCode.2507793e.js","assets/uuid.e4164511.js","assets/icons.f2b4f37f.js","assets/NavbarControls.9871bf3e.js","assets/index.8cc30cca.js","assets/asyncComputed.4b96df58.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.2a0c877d.js","assets/ant-design.7bb70225.js","assets/index.209174e2.js","assets/Modal.f73330d1.js","assets/Typography.45a7b8d7.js","assets/Link.91ccc758.js","assets/Base.24118e9f.js","assets/SaveButton.13ece1cb.css","assets/index.a49f83ec.js","assets/popupNotifcation.1b0a8b3c.js","assets/index.04a061be.js","assets/Text.6b94c3bc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0bca7c74.js","assets/Paragraph.01fbd56d.js","assets/NavbarControls.eec3ba09.css","assets/scripts.f6859477.js","assets/validations.78dea1a0.js","assets/string.623bb943.js","assets/FormItem.791863a4.js","assets/hasIn.7e305b7d.js","assets/toggleHighContrast.01c2cfd7.js","assets/toggleHighContrast.30d77c87.css","assets/Card.ab1ea8a0.js","assets/TabPane.51b88e6f.js","assets/SourceCode.52c7bd2b.css","assets/BaseLayout.be867c28.js","assets/BaseLayout.881bfa61.css","assets/RunButton.vue_vue_type_script_setup_true_lang.38484cc2.js","assets/index.4faec362.js","assets/index.d055bc8b.js","assets/dayjs.03f43017.js","assets/index.47046b94.js","assets/Title.cc650707.js","assets/Form.a87331b6.js","assets/index.2911c032.js"]),meta:{title:"Job Editor - Abstra"}},{path:"hook/:id",name:"hookEditor",component:()=>t(()=>import("./HookEditor.6f3973e7.js"),["assets/HookEditor.6f3973e7.js","assets/outputWidgets.12d07fe6.js","assets/outputWidgets.b5a98445.css","assets/SourceCode.2507793e.js","assets/uuid.e4164511.js","assets/icons.f2b4f37f.js","assets/NavbarControls.9871bf3e.js","assets/index.8cc30cca.js","assets/pubsub.1984cbae.js","assets/asyncComputed.4b96df58.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.2a0c877d.js","assets/ant-design.7bb70225.js","assets/index.209174e2.js","assets/Modal.f73330d1.js","assets/Typography.45a7b8d7.js","assets/Link.91ccc758.js","assets/Base.24118e9f.js","assets/SaveButton.13ece1cb.css","assets/index.a49f83ec.js","assets/workspaces.bed43fcb.js","assets/runnerData.ccdef8f8.js","assets/url.f2a2de62.js","assets/record.9ee5b79a.js","assets/popupNotifcation.1b0a8b3c.js","assets/index.04a061be.js","assets/Text.6b94c3bc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0bca7c74.js","assets/Paragraph.01fbd56d.js","assets/NavbarControls.eec3ba09.css","assets/jobs.cfd5c0a2.js","assets/scripts.f6859477.js","assets/validations.78dea1a0.js","assets/string.623bb943.js","assets/FormItem.791863a4.js","assets/hasIn.7e305b7d.js","assets/toggleHighContrast.01c2cfd7.js","assets/toggleHighContrast.30d77c87.css","assets/Card.ab1ea8a0.js","assets/TabPane.51b88e6f.js","assets/SourceCode.52c7bd2b.css","assets/BaseLayout.be867c28.js","assets/BaseLayout.881bfa61.css","assets/RunButton.vue_vue_type_script_setup_true_lang.38484cc2.js","assets/api.74776e14.js","assets/schema.a42564e2.js","assets/index.cf4c23b9.js","assets/CollapsePanel.086654a2.js","assets/index.2bddda7f.js","assets/index.d055bc8b.js","assets/index.618c8d39.js","assets/Form.a87331b6.js","assets/StageRunSelector.e378a046.js","assets/index.7c6e7411.js","assets/StageRunSelector.587727ed.css","assets/index.2911c032.js"]),meta:{title:"Hook Editor - Abstra"}},{path:"script/:id",name:"scriptEditor",component:()=>t(()=>import("./ScriptEditor.2a63c313.js"),["assets/ScriptEditor.2a63c313.js","assets/outputWidgets.12d07fe6.js","assets/outputWidgets.b5a98445.css","assets/workspaces.bed43fcb.js","assets/runnerData.ccdef8f8.js","assets/url.f2a2de62.js","assets/record.9ee5b79a.js","assets/pubsub.1984cbae.js","assets/scripts.f6859477.js","assets/SourceCode.2507793e.js","assets/uuid.e4164511.js","assets/icons.f2b4f37f.js","assets/NavbarControls.9871bf3e.js","assets/index.8cc30cca.js","assets/asyncComputed.4b96df58.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.2a0c877d.js","assets/ant-design.7bb70225.js","assets/index.209174e2.js","assets/Modal.f73330d1.js","assets/Typography.45a7b8d7.js","assets/Link.91ccc758.js","assets/Base.24118e9f.js","assets/SaveButton.13ece1cb.css","assets/index.a49f83ec.js","assets/popupNotifcation.1b0a8b3c.js","assets/index.04a061be.js","assets/Text.6b94c3bc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0bca7c74.js","assets/Paragraph.01fbd56d.js","assets/NavbarControls.eec3ba09.css","assets/jobs.cfd5c0a2.js","assets/validations.78dea1a0.js","assets/string.623bb943.js","assets/FormItem.791863a4.js","assets/hasIn.7e305b7d.js","assets/toggleHighContrast.01c2cfd7.js","assets/toggleHighContrast.30d77c87.css","assets/Card.ab1ea8a0.js","assets/TabPane.51b88e6f.js","assets/SourceCode.52c7bd2b.css","assets/BaseLayout.be867c28.js","assets/BaseLayout.881bfa61.css","assets/RunButton.vue_vue_type_script_setup_true_lang.38484cc2.js","assets/Form.a87331b6.js","assets/StageRunSelector.e378a046.js","assets/index.7c6e7411.js","assets/index.2bddda7f.js","assets/StageRunSelector.587727ed.css","assets/index.2911c032.js"]),meta:{title:"Script Editor - Abstra"}},{path:"workflow",name:"workflow",component:()=>t(()=>import("./Workflow.e7a6dcfe.js"),["assets/Workflow.e7a6dcfe.js","assets/outputWidgets.12d07fe6.js","assets/outputWidgets.b5a98445.css","assets/workspaces.bed43fcb.js","assets/runnerData.ccdef8f8.js","assets/url.f2a2de62.js","assets/record.9ee5b79a.js","assets/pubsub.1984cbae.js","assets/icons.f2b4f37f.js","assets/NavbarControls.9871bf3e.js","assets/index.8cc30cca.js","assets/asyncComputed.4b96df58.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.2a0c877d.js","assets/ant-design.7bb70225.js","assets/index.209174e2.js","assets/Modal.f73330d1.js","assets/Typography.45a7b8d7.js","assets/Link.91ccc758.js","assets/Base.24118e9f.js","assets/SaveButton.13ece1cb.css","assets/index.a49f83ec.js","assets/popupNotifcation.1b0a8b3c.js","assets/index.04a061be.js","assets/Text.6b94c3bc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0bca7c74.js","assets/Paragraph.01fbd56d.js","assets/NavbarControls.eec3ba09.css","assets/api.74776e14.js","assets/schema.a42564e2.js","assets/index.cf4c23b9.js","assets/validations.78dea1a0.js","assets/string.623bb943.js","assets/index.2911c032.js","assets/TabPane.51b88e6f.js","assets/hasIn.7e305b7d.js","assets/Workflow.7f2c0c0a.css"]),meta:{title:"Workflow - Abstra"},redirect:{name:"workflowEditor"},children:[{path:"editor",name:"workflowEditor",component:()=>t(()=>import("./WorkflowEditor.aaca0285.js"),["assets/WorkflowEditor.aaca0285.js","assets/outputWidgets.12d07fe6.js","assets/outputWidgets.b5a98445.css","assets/schema.a42564e2.js","assets/index.cf4c23b9.js","assets/icons.f2b4f37f.js","assets/workspaces.bed43fcb.js","assets/runnerData.ccdef8f8.js","assets/url.f2a2de62.js","assets/record.9ee5b79a.js","assets/pubsub.1984cbae.js","assets/validations.78dea1a0.js","assets/string.623bb943.js","assets/index.508a1f47.js","assets/isNumeric.75337b1e.js","assets/index.04a061be.js","assets/Text.6b94c3bc.js","assets/Base.24118e9f.js","assets/Typography.45a7b8d7.js","assets/FormItem.791863a4.js","assets/hasIn.7e305b7d.js","assets/Link.91ccc758.js","assets/Card.ab1ea8a0.js","assets/TabPane.51b88e6f.js","assets/WorkflowEditor.1a742750.css"]),meta:{title:"Workflow Editor - Abstra"}},{path:"kanban",name:"workflowKanban",component:()=>t(()=>import("./WorkflowKanban.88d97375.js"),["assets/WorkflowKanban.88d97375.js","assets/repository.7b34d1c9.js","assets/ant-design.7bb70225.js","assets/outputWidgets.12d07fe6.js","assets/outputWidgets.b5a98445.css","assets/index.209174e2.js","assets/Modal.f73330d1.js","assets/asyncComputed.4b96df58.js","assets/api.74776e14.js","assets/schema.a42564e2.js","assets/index.cf4c23b9.js","assets/icons.f2b4f37f.js","assets/index.04a061be.js","assets/index.d055bc8b.js","assets/index.7c6e7411.js","assets/Paragraph.01fbd56d.js","assets/Base.24118e9f.js","assets/Typography.45a7b8d7.js","assets/index.d79c442e.js","assets/Link.91ccc758.js","assets/Text.6b94c3bc.js","assets/Title.cc650707.js","assets/index.618c8d39.js","assets/index.31d4408f.js","assets/CollapsePanel.086654a2.js","assets/Form.a87331b6.js","assets/FormItem.791863a4.js","assets/hasIn.7e305b7d.js","assets/Timeline.f63757ec.js","assets/index.57025c90.js","assets/isNumeric.75337b1e.js","assets/contracts.generated.385b04bd.js","assets/scripts.f6859477.js","assets/record.9ee5b79a.js","assets/pubsub.1984cbae.js","assets/workspaces.bed43fcb.js","assets/runnerData.ccdef8f8.js","assets/url.f2a2de62.js","assets/ExpandOutlined.dbc66b84.js","assets/Card.ab1ea8a0.js","assets/TabPane.51b88e6f.js","assets/index.8cc30cca.js","assets/repository.a6dad21c.css"]),meta:{title:"Workflow Kanban - Abstra"}}]},{path:"settings",name:"settings",component:()=>t(()=>import("./Settings.be24192b.js"),["assets/Settings.be24192b.js","assets/NavbarControls.9871bf3e.js","assets/outputWidgets.12d07fe6.js","assets/outputWidgets.b5a98445.css","assets/index.8cc30cca.js","assets/pubsub.1984cbae.js","assets/asyncComputed.4b96df58.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.2a0c877d.js","assets/ant-design.7bb70225.js","assets/index.209174e2.js","assets/Modal.f73330d1.js","assets/Typography.45a7b8d7.js","assets/Link.91ccc758.js","assets/Base.24118e9f.js","assets/SaveButton.13ece1cb.css","assets/index.a49f83ec.js","assets/workspaces.bed43fcb.js","assets/runnerData.ccdef8f8.js","assets/url.f2a2de62.js","assets/record.9ee5b79a.js","assets/popupNotifcation.1b0a8b3c.js","assets/icons.f2b4f37f.js","assets/index.04a061be.js","assets/Text.6b94c3bc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0bca7c74.js","assets/Paragraph.01fbd56d.js","assets/NavbarControls.eec3ba09.css","assets/TabPane.51b88e6f.js","assets/hasIn.7e305b7d.js","assets/index.2911c032.js","assets/Settings.aac728e4.css"]),meta:{title:"Settings - Abstra"},redirect:{name:"settingsStyle"},children:[{path:"style",name:"settingsStyle",component:()=>t(()=>import("./StyleEditor.ec36c1e6.js"),["assets/StyleEditor.ec36c1e6.js","assets/asyncComputed.4b96df58.js","assets/outputWidgets.12d07fe6.js","assets/outputWidgets.b5a98445.css","assets/workspaces.bed43fcb.js","assets/runnerData.ccdef8f8.js","assets/url.f2a2de62.js","assets/record.9ee5b79a.js","assets/pubsub.1984cbae.js","assets/CircularLoading.470373d7.js","assets/CircularLoading.f81b57b4.css","assets/icons.f2b4f37f.js","assets/FormItem.791863a4.js","assets/hasIn.7e305b7d.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.2a0c877d.js","assets/ant-design.7bb70225.js","assets/index.209174e2.js","assets/Modal.f73330d1.js","assets/Typography.45a7b8d7.js","assets/Link.91ccc758.js","assets/Base.24118e9f.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.55d21312.js","assets/PlayerNavbar.3ccff19a.js","assets/PlayerNavbar.d7d1e342.css","assets/WidgetsFrame.79acf750.js","assets/WidgetsFrame.97ae601d.css","assets/Title.cc650707.js","assets/SidebarPreview.c4d1a6e7.css","assets/index.04a061be.js","assets/Form.a87331b6.js","assets/StyleEditor.44e7d84c.css"]),meta:{title:"Style - Abstra"}},{path:"sidebar",name:"settingsSidebar",component:()=>t(()=>import("./SidebarEditor.b294405a.js"),["assets/SidebarEditor.b294405a.js","assets/outputWidgets.12d07fe6.js","assets/outputWidgets.b5a98445.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.2a0c877d.js","assets/ant-design.7bb70225.js","assets/index.209174e2.js","assets/Modal.f73330d1.js","assets/Typography.45a7b8d7.js","assets/Link.91ccc758.js","assets/Base.24118e9f.js","assets/SaveButton.13ece1cb.css","assets/Title.cc650707.js","assets/index.04a061be.js","assets/index.2bddda7f.js","assets/index.47046b94.js","assets/FormItem.791863a4.js","assets/hasIn.7e305b7d.js","assets/workspaces.bed43fcb.js","assets/runnerData.ccdef8f8.js","assets/url.f2a2de62.js","assets/record.9ee5b79a.js","assets/pubsub.1984cbae.js","assets/asyncComputed.4b96df58.js","assets/CircularLoading.470373d7.js","assets/CircularLoading.f81b57b4.css","assets/SidebarPreview.55d21312.js","assets/PlayerNavbar.3ccff19a.js","assets/icons.f2b4f37f.js","assets/PlayerNavbar.d7d1e342.css","assets/WidgetsFrame.79acf750.js","assets/WidgetsFrame.97ae601d.css","assets/SidebarPreview.c4d1a6e7.css","assets/Form.a87331b6.js"]),meta:{title:"Sidebar - Abstra"}},{path:"requirements",name:"settingsRequirements",component:()=>t(()=>import("./RequirementsEditor.42236256.js"),["assets/RequirementsEditor.42236256.js","assets/asyncComputed.4b96df58.js","assets/outputWidgets.12d07fe6.js","assets/outputWidgets.b5a98445.css","assets/icons.f2b4f37f.js","assets/CrudView.1d47b402.js","assets/Paragraph.01fbd56d.js","assets/Base.24118e9f.js","assets/Typography.45a7b8d7.js","assets/FormItem.791863a4.js","assets/hasIn.7e305b7d.js","assets/Form.a87331b6.js","assets/Modal.f73330d1.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0bca7c74.js","assets/router.d820a159.js","assets/url.f2a2de62.js","assets/index.04a061be.js","assets/Title.cc650707.js","assets/Text.6b94c3bc.js","assets/index.d055bc8b.js","assets/CrudView.9de44552.css","assets/record.9ee5b79a.js","assets/pubsub.1984cbae.js"]),meta:{title:"Requirements - Abstra"}}]}]},...W],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{A(e,o)});(async()=>{await C();const e=g({render:()=>T(q)});I.init(),P(e,a),e.use(a),e.use(y),e.mount("#app"),e.component("VSelect",k),e.component("Markdown",R),e.component("Icon",D),e.component("Message",V),r(e,L),r(e,O),r(e,S)})();
//# sourceMappingURL=editor.a96cd6f9.js.map
