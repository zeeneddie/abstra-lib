import{r as _,d as m,o as d,a as p,b as c,c as l,w as u,e as h,f,u as E,A as b,g as w,h as v,_ as t,i as A,T as g,j as I,P,C as y,M as k,I as R,s as D,k as r,l as V,m as T,n as L,p as O}from"./outputWidgets.9097dbc0.js";import{u as S}from"./index.4edc6d72.js";import{r as W,u as C,s as x}from"./index.3c3781a5.js";import"./pubsub.f022dfa4.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="36169096-8218-42aa-b592-feef03f3de3c",e._sentryDebugIdIdentifier="sentry-dbid-36169096-8218-42aa-b592-feef03f3de3c")}catch{}})();const n=_(!1),M=()=>{window.innerWidth<780?n.value=!0:n.value=!1},B={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},j=m({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return d(()=>{window.addEventListener("resize",M)}),(i,q)=>{const s=p("router-view");return c(),l(E(b),{theme:o,"page-header":{ghost:!1}},{default:u(()=>[h("div",B,[f(s)])]),_:1})}}});const a=w({history:v("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.8b34d7a9.js"),["assets/Home.8b34d7a9.js","assets/outputWidgets.9097dbc0.js","assets/outputWidgets.3c848cd5.css","assets/Home.6c0ec87e.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.a6131e1b.js"),["assets/Workspace.a6131e1b.js","assets/outputWidgets.9097dbc0.js","assets/outputWidgets.3c848cd5.css","assets/icons.6ae66d8b.js","assets/logo.084e5d7c.js","assets/BaseLayout.48d79fbb.js","assets/BaseLayout.881bfa61.css","assets/NavbarControls.b801a22c.js","assets/asyncComputed.9b00006c.js","assets/index.3c3781a5.js","assets/pubsub.f022dfa4.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.52dcbc45.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.efc9baeb.js","assets/ant-design.4beb3f53.js","assets/index.f90d8fbf.js","assets/Modal.4fcd461f.js","assets/Link.dd9c5d0a.js","assets/Text.cd835636.js","assets/index.def3839f.js","assets/Title.8e2a69bb.js","assets/SaveButton.13ece1cb.css","assets/index.b50ed1e5.js","assets/workspaces.eaf6e909.js","assets/record.b3a4016b.js","assets/url.6706b22a.js","assets/popupNotifcation.d9edd198.js","assets/CircularLoading.57135af7.js","assets/CircularLoading.f81b57b4.css","assets/index.981a8218.js","assets/NavbarControls.d196f6d1.css","assets/index.fc0cfa7b.js","assets/Workspace.7fb7c04c.css"]),redirect:()=>({name:"home"}),children:[{path:"home",name:"home",component:()=>t(()=>import("./Scripts.c11bef1a.js"),["assets/Scripts.c11bef1a.js","assets/outputWidgets.9097dbc0.js","assets/outputWidgets.3c848cd5.css","assets/forms.57020b3f.js","assets/record.b3a4016b.js","assets/pubsub.f022dfa4.js","assets/validations.ae554233.js","assets/string.c35d9440.js","assets/workspaces.eaf6e909.js","assets/url.6706b22a.js","assets/scripts.0b301229.js","assets/asyncComputed.9b00006c.js","assets/ant-design.4beb3f53.js","assets/index.f90d8fbf.js","assets/Modal.4fcd461f.js","assets/icons.6ae66d8b.js","assets/Text.cd835636.js","assets/index.981a8218.js","assets/Card.0ecddff9.js","assets/TabPane.e6aec892.js","assets/hasIn.3897ef44.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.52dcbc45.js","assets/Title.8e2a69bb.js","assets/FormItem.ec363eec.js","assets/index.ac8e1f62.js","assets/Form.0c48d571.js","assets/index.b50ed1e5.js","assets/index.def3839f.js","assets/Link.dd9c5d0a.js","assets/Scripts.6da3c7d7.css"]),meta:{title:"Abstra - Scripts"}}]},{path:"form/:id",name:"formEditor",component:()=>t(()=>import("./FormEditor.5d429643.js"),["assets/FormEditor.5d429643.js","assets/FormRunner.b9c4dce7.js","assets/outputWidgets.9097dbc0.js","assets/outputWidgets.3c848cd5.css","assets/url.6706b22a.js","assets/index.3c3781a5.js","assets/pubsub.f022dfa4.js","assets/icons.6ae66d8b.js","assets/CircularLoading.57135af7.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.55054518.js","assets/PlayerNavbar.d1d85d81.css","assets/ActionButton.77dd7906.js","assets/ActionButton.f74e60ec.css","assets/WidgetsFrame.7cdd18d7.js","assets/WidgetsFrame.97ae601d.css","assets/index.e2240d8a.js","assets/Card.0ecddff9.js","assets/TabPane.e6aec892.js","assets/hasIn.3897ef44.js","assets/index.def3839f.js","assets/Text.cd835636.js","assets/Link.dd9c5d0a.js","assets/Title.8e2a69bb.js","assets/FormRunner.ee4bffdb.css","assets/SourceCode.f4a7bec0.js","assets/uuid.90452548.js","assets/NavbarControls.b801a22c.js","assets/asyncComputed.9b00006c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.52dcbc45.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.efc9baeb.js","assets/ant-design.4beb3f53.js","assets/index.f90d8fbf.js","assets/Modal.4fcd461f.js","assets/SaveButton.13ece1cb.css","assets/index.b50ed1e5.js","assets/workspaces.eaf6e909.js","assets/record.b3a4016b.js","assets/popupNotifcation.d9edd198.js","assets/index.981a8218.js","assets/NavbarControls.d196f6d1.css","assets/validations.ae554233.js","assets/string.c35d9440.js","assets/scripts.0b301229.js","assets/FormItem.ec363eec.js","assets/toggleHighContrast.9cd272b1.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.25b35768.css","assets/BaseLayout.48d79fbb.js","assets/BaseLayout.881bfa61.css","assets/forms.57020b3f.js","assets/Form.0c48d571.js","assets/index.2631ac7d.js","assets/ExpandOutlined.e30ad1a0.js","assets/index.fc0cfa7b.js","assets/FormEditor.80dd403e.css"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:id/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.88696e54.js"),["assets/FormPreview.88696e54.js","assets/outputWidgets.9097dbc0.js","assets/outputWidgets.3c848cd5.css","assets/CircularLoading.57135af7.js","assets/CircularLoading.f81b57b4.css","assets/FormRunner.b9c4dce7.js","assets/url.6706b22a.js","assets/index.3c3781a5.js","assets/pubsub.f022dfa4.js","assets/icons.6ae66d8b.js","assets/PlayerNavbar.55054518.js","assets/PlayerNavbar.d1d85d81.css","assets/ActionButton.77dd7906.js","assets/ActionButton.f74e60ec.css","assets/WidgetsFrame.7cdd18d7.js","assets/WidgetsFrame.97ae601d.css","assets/index.e2240d8a.js","assets/Card.0ecddff9.js","assets/TabPane.e6aec892.js","assets/hasIn.3897ef44.js","assets/index.def3839f.js","assets/Text.cd835636.js","assets/Link.dd9c5d0a.js","assets/Title.8e2a69bb.js","assets/FormRunner.ee4bffdb.css","assets/asyncComputed.9b00006c.js","assets/forms.57020b3f.js","assets/record.b3a4016b.js","assets/workspaces.eaf6e909.js","assets/FormPreview.6b9bc365.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:id",name:"jobEditor",component:()=>t(()=>import("./JobEditor.8fb1b938.js"),["assets/JobEditor.8fb1b938.js","assets/outputWidgets.9097dbc0.js","assets/outputWidgets.3c848cd5.css","assets/validations.ae554233.js","assets/record.b3a4016b.js","assets/pubsub.f022dfa4.js","assets/string.c35d9440.js","assets/workspaces.eaf6e909.js","assets/url.6706b22a.js","assets/SourceCode.f4a7bec0.js","assets/uuid.90452548.js","assets/icons.6ae66d8b.js","assets/NavbarControls.b801a22c.js","assets/asyncComputed.9b00006c.js","assets/index.3c3781a5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.52dcbc45.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.efc9baeb.js","assets/ant-design.4beb3f53.js","assets/index.f90d8fbf.js","assets/Modal.4fcd461f.js","assets/Link.dd9c5d0a.js","assets/Text.cd835636.js","assets/index.def3839f.js","assets/Title.8e2a69bb.js","assets/SaveButton.13ece1cb.css","assets/index.b50ed1e5.js","assets/popupNotifcation.d9edd198.js","assets/CircularLoading.57135af7.js","assets/CircularLoading.f81b57b4.css","assets/index.981a8218.js","assets/NavbarControls.d196f6d1.css","assets/scripts.0b301229.js","assets/FormItem.ec363eec.js","assets/hasIn.3897ef44.js","assets/toggleHighContrast.9cd272b1.js","assets/toggleHighContrast.30d77c87.css","assets/Card.0ecddff9.js","assets/TabPane.e6aec892.js","assets/SourceCode.25b35768.css","assets/BaseLayout.48d79fbb.js","assets/BaseLayout.881bfa61.css","assets/RunButton.vue_vue_type_script_setup_true_lang.d2ded491.js","assets/index.df78109c.js","assets/index.2631ac7d.js","assets/dayjs.9dfafa7c.js","assets/index.49761e13.js","assets/Form.0c48d571.js","assets/index.fc0cfa7b.js"]),meta:{title:"Abstra - Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>t(()=>import("./HookEditor.573e20aa.js"),["assets/HookEditor.573e20aa.js","assets/outputWidgets.9097dbc0.js","assets/outputWidgets.3c848cd5.css","assets/SourceCode.f4a7bec0.js","assets/uuid.90452548.js","assets/icons.6ae66d8b.js","assets/NavbarControls.b801a22c.js","assets/asyncComputed.9b00006c.js","assets/index.3c3781a5.js","assets/pubsub.f022dfa4.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.52dcbc45.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.efc9baeb.js","assets/ant-design.4beb3f53.js","assets/index.f90d8fbf.js","assets/Modal.4fcd461f.js","assets/Link.dd9c5d0a.js","assets/Text.cd835636.js","assets/index.def3839f.js","assets/Title.8e2a69bb.js","assets/SaveButton.13ece1cb.css","assets/index.b50ed1e5.js","assets/workspaces.eaf6e909.js","assets/record.b3a4016b.js","assets/url.6706b22a.js","assets/popupNotifcation.d9edd198.js","assets/CircularLoading.57135af7.js","assets/CircularLoading.f81b57b4.css","assets/index.981a8218.js","assets/NavbarControls.d196f6d1.css","assets/validations.ae554233.js","assets/string.c35d9440.js","assets/scripts.0b301229.js","assets/FormItem.ec363eec.js","assets/hasIn.3897ef44.js","assets/toggleHighContrast.9cd272b1.js","assets/toggleHighContrast.30d77c87.css","assets/Card.0ecddff9.js","assets/TabPane.e6aec892.js","assets/SourceCode.25b35768.css","assets/BaseLayout.48d79fbb.js","assets/BaseLayout.881bfa61.css","assets/RunButton.vue_vue_type_script_setup_true_lang.d2ded491.js","assets/index.d300c997.js","assets/CollapsePanel.ea9039c5.js","assets/index.23eed59b.js","assets/index.8ff1ea9e.js","assets/index.2631ac7d.js","assets/Form.0c48d571.js","assets/index.fc0cfa7b.js"]),meta:{title:"Abstra - Hook Editor"}},{path:"workflow",name:"workflow",component:()=>t(()=>import("./Workflow.86de3ef1.js"),["assets/Workflow.86de3ef1.js","assets/outputWidgets.9097dbc0.js","assets/outputWidgets.3c848cd5.css","assets/workspaces.eaf6e909.js","assets/record.b3a4016b.js","assets/pubsub.f022dfa4.js","assets/url.6706b22a.js","assets/icons.6ae66d8b.js","assets/NavbarControls.b801a22c.js","assets/asyncComputed.9b00006c.js","assets/index.3c3781a5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.52dcbc45.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.efc9baeb.js","assets/ant-design.4beb3f53.js","assets/index.f90d8fbf.js","assets/Modal.4fcd461f.js","assets/Link.dd9c5d0a.js","assets/Text.cd835636.js","assets/index.def3839f.js","assets/Title.8e2a69bb.js","assets/SaveButton.13ece1cb.css","assets/index.b50ed1e5.js","assets/popupNotifcation.d9edd198.js","assets/CircularLoading.57135af7.js","assets/CircularLoading.f81b57b4.css","assets/index.981a8218.js","assets/NavbarControls.d196f6d1.css","assets/schema.db35ce1b.js","assets/index.cf4c23b9.js","assets/metadata.f75f5f03.js","assets/index.fc0cfa7b.js","assets/TabPane.e6aec892.js","assets/hasIn.3897ef44.js","assets/Workflow.7f2c0c0a.css"]),meta:{title:"Abstra - Workflow"},redirect:{name:"workflowEditor"},children:[{path:"editor",name:"workflowEditor",component:()=>t(()=>import("./WorkflowEditor.14eb66fd.js"),["assets/WorkflowEditor.14eb66fd.js","assets/outputWidgets.9097dbc0.js","assets/outputWidgets.3c848cd5.css","assets/metadata.f75f5f03.js","assets/icons.6ae66d8b.js","assets/schema.db35ce1b.js","assets/index.cf4c23b9.js","assets/workspaces.eaf6e909.js","assets/record.b3a4016b.js","assets/pubsub.f022dfa4.js","assets/url.6706b22a.js","assets/index.0c57ca78.js","assets/isNumeric.75337b1e.js","assets/index.981a8218.js","assets/Text.cd835636.js","assets/FormItem.ec363eec.js","assets/hasIn.3897ef44.js","assets/Link.dd9c5d0a.js","assets/Card.0ecddff9.js","assets/TabPane.e6aec892.js","assets/WorkflowEditor.8d0f933a.css"]),meta:{title:"Abstra - Workflow Editor"}},{path:"kanban",name:"workflowKanban",component:()=>t(()=>import("./WorkflowKanban.0bbc17aa.js"),["assets/WorkflowKanban.0bbc17aa.js","assets/ant-design.4beb3f53.js","assets/outputWidgets.9097dbc0.js","assets/outputWidgets.3c848cd5.css","assets/index.f90d8fbf.js","assets/Modal.4fcd461f.js","assets/asyncComputed.9b00006c.js","assets/metadata.f75f5f03.js","assets/icons.6ae66d8b.js","assets/index.981a8218.js","assets/index.4edc6d72.js","assets/index.1fce9906.js","assets/index.0c57ca78.js","assets/isNumeric.75337b1e.js","assets/Timeline.5c00408c.js","assets/index.dac13a4e.js","assets/index.2631ac7d.js","assets/Title.8e2a69bb.js","assets/Text.cd835636.js","assets/index.8ff1ea9e.js","assets/CollapsePanel.ea9039c5.js","assets/Link.dd9c5d0a.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.d4e8cd3e.js","assets/Form.0c48d571.js","assets/FormItem.ec363eec.js","assets/hasIn.3897ef44.js","assets/workspaces.eaf6e909.js","assets/record.b3a4016b.js","assets/pubsub.f022dfa4.js","assets/url.6706b22a.js","assets/scripts.0b301229.js","assets/Card.0ecddff9.js","assets/TabPane.e6aec892.js","assets/ExpandOutlined.e30ad1a0.js","assets/WorkflowKanban.f13d6c6b.css"])}]},{path:"settings",name:"settings",component:()=>t(()=>import("./Settings.d6b049d8.js"),["assets/Settings.d6b049d8.js","assets/NavbarControls.b801a22c.js","assets/outputWidgets.9097dbc0.js","assets/outputWidgets.3c848cd5.css","assets/asyncComputed.9b00006c.js","assets/index.3c3781a5.js","assets/pubsub.f022dfa4.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.52dcbc45.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.efc9baeb.js","assets/ant-design.4beb3f53.js","assets/index.f90d8fbf.js","assets/Modal.4fcd461f.js","assets/Link.dd9c5d0a.js","assets/Text.cd835636.js","assets/index.def3839f.js","assets/Title.8e2a69bb.js","assets/SaveButton.13ece1cb.css","assets/index.b50ed1e5.js","assets/workspaces.eaf6e909.js","assets/record.b3a4016b.js","assets/url.6706b22a.js","assets/popupNotifcation.d9edd198.js","assets/CircularLoading.57135af7.js","assets/CircularLoading.f81b57b4.css","assets/icons.6ae66d8b.js","assets/index.981a8218.js","assets/NavbarControls.d196f6d1.css","assets/TabPane.e6aec892.js","assets/hasIn.3897ef44.js","assets/index.fc0cfa7b.js","assets/Settings.aac728e4.css"]),meta:{title:"Abstra - Settings"},redirect:{name:"settingsStyle"},children:[{path:"style",name:"settingsStyle",component:()=>t(()=>import("./StyleEditor.3c54135c.js"),["assets/StyleEditor.3c54135c.js","assets/asyncComputed.9b00006c.js","assets/outputWidgets.9097dbc0.js","assets/outputWidgets.3c848cd5.css","assets/workspaces.eaf6e909.js","assets/record.b3a4016b.js","assets/pubsub.f022dfa4.js","assets/url.6706b22a.js","assets/CircularLoading.57135af7.js","assets/CircularLoading.f81b57b4.css","assets/icons.6ae66d8b.js","assets/FormItem.ec363eec.js","assets/hasIn.3897ef44.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.efc9baeb.js","assets/ant-design.4beb3f53.js","assets/index.f90d8fbf.js","assets/Modal.4fcd461f.js","assets/Link.dd9c5d0a.js","assets/Text.cd835636.js","assets/index.def3839f.js","assets/Title.8e2a69bb.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.3b9d590b.js","assets/PlayerNavbar.55054518.js","assets/PlayerNavbar.d1d85d81.css","assets/WidgetsFrame.7cdd18d7.js","assets/WidgetsFrame.97ae601d.css","assets/SidebarPreview.775a4013.css","assets/index.981a8218.js","assets/Form.0c48d571.js","assets/StyleEditor.44e7d84c.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"settingsSidebar",component:()=>t(()=>import("./SidebarEditor.3d51e762.js"),["assets/SidebarEditor.3d51e762.js","assets/outputWidgets.9097dbc0.js","assets/outputWidgets.3c848cd5.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.efc9baeb.js","assets/ant-design.4beb3f53.js","assets/index.f90d8fbf.js","assets/Modal.4fcd461f.js","assets/Link.dd9c5d0a.js","assets/Text.cd835636.js","assets/index.def3839f.js","assets/Title.8e2a69bb.js","assets/SaveButton.13ece1cb.css","assets/index.981a8218.js","assets/index.23eed59b.js","assets/index.49761e13.js","assets/FormItem.ec363eec.js","assets/hasIn.3897ef44.js","assets/workspaces.eaf6e909.js","assets/record.b3a4016b.js","assets/pubsub.f022dfa4.js","assets/url.6706b22a.js","assets/asyncComputed.9b00006c.js","assets/CircularLoading.57135af7.js","assets/CircularLoading.f81b57b4.css","assets/SidebarPreview.3b9d590b.js","assets/PlayerNavbar.55054518.js","assets/icons.6ae66d8b.js","assets/PlayerNavbar.d1d85d81.css","assets/WidgetsFrame.7cdd18d7.js","assets/WidgetsFrame.97ae601d.css","assets/SidebarPreview.775a4013.css","assets/Form.0c48d571.js"]),meta:{title:"Abstra - Sidebar"}},{path:"requirements",name:"settingsRequirements",component:()=>t(()=>import("./RequirementsEditor.855ccfab.js"),["assets/RequirementsEditor.855ccfab.js","assets/asyncComputed.9b00006c.js","assets/outputWidgets.9097dbc0.js","assets/outputWidgets.3c848cd5.css","assets/icons.6ae66d8b.js","assets/CrudView.8be23ce7.js","assets/Title.8e2a69bb.js","assets/Text.cd835636.js","assets/FormItem.ec363eec.js","assets/hasIn.3897ef44.js","assets/Form.0c48d571.js","assets/Modal.4fcd461f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.52dcbc45.js","assets/router.355a7061.js","assets/index.4edc6d72.js","assets/url.6706b22a.js","assets/index.2631ac7d.js","assets/CrudView.4c069239.css","assets/record.b3a4016b.js","assets/pubsub.f022dfa4.js"]),meta:{title:"Abstra - Requirements"}}]}]},...W],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{S(e,o)});(async()=>{await Promise.all([C(),x()]);const e=A({render:()=>V(j)});g.init(),I(e,a),e.use(a),e.use(P),e.mount("#app"),e.component("VSelect",y),e.component("Markdown",k),e.component("Icon",R),e.component("Message",D),r(e,T),r(e,L),r(e,O)})();
//# sourceMappingURL=editor.2e1e2b7f.js.map
