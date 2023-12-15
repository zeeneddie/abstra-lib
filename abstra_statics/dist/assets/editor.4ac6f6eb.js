import{r as _,d,o as m,a as p,b as c,c as u,w as l,e as h,f,u as b,A as E,g as v,h as w,_ as t,i as A,T as I,j as P,P as y,C as g,M as k,I as D,s as R,k as r,l as V,m as T,n as L,p as O}from"./outputWidgets.31ce2d5c.js";import{u as W}from"./index.0d76378d.js";import{r as S,u as C,s as x}from"./index.dcfaf8a5.js";import"./pubsub.2d9ab3f4.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="9d95b753-3d0a-4434-83f6-400e2dd075bb",e._sentryDebugIdIdentifier="sentry-dbid-9d95b753-3d0a-4434-83f6-400e2dd075bb")}catch{}})();const n=_(!1),M=()=>{window.innerWidth<780?n.value=!0:n.value=!1},B={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},j=d({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return m(()=>{window.addEventListener("resize",M)}),(i,q)=>{const s=p("router-view");return c(),u(b(E),{theme:o,"page-header":{ghost:!1}},{default:l(()=>[h("div",B,[f(s)])]),_:1})}}});const a=v({history:w("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.5aed48bf.js"),["assets/Home.5aed48bf.js","assets/outputWidgets.31ce2d5c.js","assets/outputWidgets.3c848cd5.css","assets/Home.58a71584.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.ce599bdb.js"),["assets/Workspace.ce599bdb.js","assets/outputWidgets.31ce2d5c.js","assets/outputWidgets.3c848cd5.css","assets/icons.266b547d.js","assets/logo.084e5d7c.js","assets/BaseLayout.bada4c41.js","assets/BaseLayout.881bfa61.css","assets/NavbarControls.afcfe3f2.js","assets/workspaces.f1f3f168.js","assets/record.b2148451.js","assets/pubsub.2d9ab3f4.js","assets/url.94a5ee71.js","assets/popupNotifcation.2de4b14e.js","assets/asyncComputed.7e3e21f4.js","assets/index.dcfaf8a5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.69a7fe72.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.97e9b0aa.js","assets/ant-design.feb03817.js","assets/index.7e964756.js","assets/Modal.32a7843c.js","assets/SaveButton.13ece1cb.css","assets/index.5765ee72.js","assets/Text.46c5bec2.js","assets/Base.eeda2dae.js","assets/index.3e9e5589.js","assets/Link.c257b01e.js","assets/Title.951eccc5.js","assets/NavbarControls.bffa51e8.css","assets/index.cad5b763.js","assets/Workspace.7fb7c04c.css"]),redirect:()=>({name:"home"}),children:[{path:"home",name:"home",component:()=>t(()=>import("./Scripts.2a6be85d.js"),["assets/Scripts.2a6be85d.js","assets/outputWidgets.31ce2d5c.js","assets/outputWidgets.3c848cd5.css","assets/forms.93a606b8.js","assets/record.b2148451.js","assets/pubsub.2d9ab3f4.js","assets/hooks.5d5964c0.js","assets/scripts.77407c5b.js","assets/workspaces.f1f3f168.js","assets/url.94a5ee71.js","assets/asyncComputed.7e3e21f4.js","assets/ant-design.feb03817.js","assets/index.7e964756.js","assets/Modal.32a7843c.js","assets/icons.266b547d.js","assets/index.ee176ac7.js","assets/index.5b04e27a.js","assets/Card.5114c300.js","assets/index.f5ad86a0.js","assets/TabPane.b9a32e73.js","assets/hasIn.932773c2.js","assets/Form.482980d3.js","assets/FormItem.5f0b61bf.js","assets/Text.46c5bec2.js","assets/Base.eeda2dae.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.69a7fe72.js","assets/index.3e9e5589.js","assets/Link.c257b01e.js","assets/Title.951eccc5.js","assets/string.e57cb081.js","assets/index.5765ee72.js","assets/Scripts.a432934a.css"]),meta:{title:"Abstra - Scripts"}},{path:"style",name:"style",component:()=>t(()=>import("./StyleEditor.7d3bc90b.js"),["assets/StyleEditor.7d3bc90b.js","assets/asyncComputed.7e3e21f4.js","assets/outputWidgets.31ce2d5c.js","assets/outputWidgets.3c848cd5.css","assets/workspaces.f1f3f168.js","assets/record.b2148451.js","assets/pubsub.2d9ab3f4.js","assets/url.94a5ee71.js","assets/CircularLoading.edae9c88.js","assets/CircularLoading.f81b57b4.css","assets/icons.266b547d.js","assets/FormItem.5f0b61bf.js","assets/hasIn.932773c2.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.97e9b0aa.js","assets/ant-design.feb03817.js","assets/index.7e964756.js","assets/Modal.32a7843c.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.b4246016.js","assets/PlayerNavbar.44712d86.js","assets/PlayerNavbar.d1d85d81.css","assets/WidgetsFrame.6ae6a4f6.js","assets/WidgetsFrame.97ae601d.css","assets/SidebarPreview.c2542c64.css","assets/index.f1d2e592.js","assets/Title.951eccc5.js","assets/Base.eeda2dae.js","assets/Form.482980d3.js","assets/StyleEditor.4d8e1574.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>t(()=>import("./SidebarEditor.2e0611c8.js"),["assets/SidebarEditor.2e0611c8.js","assets/outputWidgets.31ce2d5c.js","assets/outputWidgets.3c848cd5.css","assets/index.b9f4ff2a.js","assets/FormItem.5f0b61bf.js","assets/hasIn.932773c2.js","assets/index.f1d2e592.js","assets/workspaces.f1f3f168.js","assets/record.b2148451.js","assets/pubsub.2d9ab3f4.js","assets/url.94a5ee71.js","assets/asyncComputed.7e3e21f4.js","assets/CircularLoading.edae9c88.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.97e9b0aa.js","assets/ant-design.feb03817.js","assets/index.7e964756.js","assets/Modal.32a7843c.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.b4246016.js","assets/PlayerNavbar.44712d86.js","assets/icons.266b547d.js","assets/PlayerNavbar.d1d85d81.css","assets/WidgetsFrame.6ae6a4f6.js","assets/WidgetsFrame.97ae601d.css","assets/SidebarPreview.c2542c64.css","assets/Title.951eccc5.js","assets/Base.eeda2dae.js","assets/Form.482980d3.js"]),meta:{title:"Abstra - Sidebar"}},{path:"requirements",name:"requirements",component:()=>t(()=>import("./RequirementsEditor.24571fb7.js"),["assets/RequirementsEditor.24571fb7.js","assets/asyncComputed.7e3e21f4.js","assets/outputWidgets.31ce2d5c.js","assets/outputWidgets.3c848cd5.css","assets/icons.266b547d.js","assets/CrudView.9d67f588.js","assets/Text.46c5bec2.js","assets/Base.eeda2dae.js","assets/FormItem.5f0b61bf.js","assets/hasIn.932773c2.js","assets/Form.482980d3.js","assets/Modal.32a7843c.js","assets/router.8f071dc2.js","assets/index.0d76378d.js","assets/url.94a5ee71.js","assets/index.627ab86d.js","assets/index.ef6e34b6.js","assets/Title.951eccc5.js","assets/index.5765ee72.js","assets/index.f1d2e592.js","assets/CrudView.1d309d6a.css","assets/record.b2148451.js","assets/pubsub.2d9ab3f4.js"]),meta:{title:"Abstra - Requirements"}}]},{path:"form/:id",name:"formEditor",component:()=>t(()=>import("./FormEditor.42d1236c.js"),["assets/FormEditor.42d1236c.js","assets/FormRunner.09b692ed.js","assets/outputWidgets.31ce2d5c.js","assets/outputWidgets.3c848cd5.css","assets/url.94a5ee71.js","assets/index.dcfaf8a5.js","assets/pubsub.2d9ab3f4.js","assets/icons.266b547d.js","assets/CircularLoading.edae9c88.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.44712d86.js","assets/PlayerNavbar.d1d85d81.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.44699949.js","assets/ActionButton.998aa76d.css","assets/WidgetsFrame.6ae6a4f6.js","assets/WidgetsFrame.97ae601d.css","assets/FormRunner.353c1d6f.css","assets/RuntimeCommonSettings.ff2f3fc1.js","assets/uuid.33b66bf0.js","assets/NavbarControls.afcfe3f2.js","assets/workspaces.f1f3f168.js","assets/record.b2148451.js","assets/popupNotifcation.2de4b14e.js","assets/asyncComputed.7e3e21f4.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.69a7fe72.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.97e9b0aa.js","assets/ant-design.feb03817.js","assets/index.7e964756.js","assets/Modal.32a7843c.js","assets/SaveButton.13ece1cb.css","assets/index.5765ee72.js","assets/Text.46c5bec2.js","assets/Base.eeda2dae.js","assets/index.3e9e5589.js","assets/Link.c257b01e.js","assets/Title.951eccc5.js","assets/NavbarControls.bffa51e8.css","assets/scripts.77407c5b.js","assets/FormItem.5f0b61bf.js","assets/hasIn.932773c2.js","assets/index.ef6e34b6.js","assets/RuntimeCommonSettings.36b00c4a.css","assets/BaseLayout.bada4c41.js","assets/BaseLayout.881bfa61.css","assets/forms.93a606b8.js","assets/index.b9827b76.js","assets/CollapsePanel.27a12193.js","assets/index.ee176ac7.js","assets/index.627ab86d.js","assets/index.f1d2e592.js","assets/Form.482980d3.js","assets/TabPane.b9a32e73.js","assets/index.f5ad86a0.js","assets/ExpandOutlined.564a8f2b.js","assets/index.cad5b763.js"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:id/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.125a41b2.js"),["assets/FormPreview.125a41b2.js","assets/outputWidgets.31ce2d5c.js","assets/outputWidgets.3c848cd5.css","assets/CircularLoading.edae9c88.js","assets/CircularLoading.f81b57b4.css","assets/FormRunner.09b692ed.js","assets/url.94a5ee71.js","assets/index.dcfaf8a5.js","assets/pubsub.2d9ab3f4.js","assets/icons.266b547d.js","assets/PlayerNavbar.44712d86.js","assets/PlayerNavbar.d1d85d81.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.44699949.js","assets/ActionButton.998aa76d.css","assets/WidgetsFrame.6ae6a4f6.js","assets/WidgetsFrame.97ae601d.css","assets/FormRunner.353c1d6f.css","assets/asyncComputed.7e3e21f4.js","assets/forms.93a606b8.js","assets/record.b2148451.js","assets/workspaces.f1f3f168.js","assets/FormPreview.fba4fe96.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:id",name:"jobEditor",component:()=>t(()=>import("./JobEditor.6ab64709.js"),["assets/JobEditor.6ab64709.js","assets/outputWidgets.31ce2d5c.js","assets/outputWidgets.3c848cd5.css","assets/scripts.77407c5b.js","assets/record.b2148451.js","assets/pubsub.2d9ab3f4.js","assets/RuntimeCommonSettings.ff2f3fc1.js","assets/uuid.33b66bf0.js","assets/icons.266b547d.js","assets/NavbarControls.afcfe3f2.js","assets/workspaces.f1f3f168.js","assets/url.94a5ee71.js","assets/popupNotifcation.2de4b14e.js","assets/asyncComputed.7e3e21f4.js","assets/index.dcfaf8a5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.69a7fe72.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.97e9b0aa.js","assets/ant-design.feb03817.js","assets/index.7e964756.js","assets/Modal.32a7843c.js","assets/SaveButton.13ece1cb.css","assets/index.5765ee72.js","assets/Text.46c5bec2.js","assets/Base.eeda2dae.js","assets/index.3e9e5589.js","assets/Link.c257b01e.js","assets/Title.951eccc5.js","assets/NavbarControls.bffa51e8.css","assets/FormItem.5f0b61bf.js","assets/hasIn.932773c2.js","assets/index.ef6e34b6.js","assets/RuntimeCommonSettings.36b00c4a.css","assets/BaseLayout.bada4c41.js","assets/BaseLayout.881bfa61.css","assets/RunButton.vue_vue_type_script_setup_true_lang.7c5c6a3a.js","assets/index.519d0ddc.js","assets/index.627ab86d.js","assets/dayjs.86ecb78a.js","assets/index.b9f4ff2a.js","assets/Form.482980d3.js","assets/index.cad5b763.js","assets/TabPane.b9a32e73.js"]),meta:{title:"Abstra - Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>t(()=>import("./HookEditor.875ebff9.js"),["assets/HookEditor.875ebff9.js","assets/outputWidgets.31ce2d5c.js","assets/outputWidgets.3c848cd5.css","assets/RuntimeCommonSettings.ff2f3fc1.js","assets/uuid.33b66bf0.js","assets/icons.266b547d.js","assets/NavbarControls.afcfe3f2.js","assets/workspaces.f1f3f168.js","assets/record.b2148451.js","assets/pubsub.2d9ab3f4.js","assets/url.94a5ee71.js","assets/popupNotifcation.2de4b14e.js","assets/asyncComputed.7e3e21f4.js","assets/index.dcfaf8a5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.69a7fe72.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.97e9b0aa.js","assets/ant-design.feb03817.js","assets/index.7e964756.js","assets/Modal.32a7843c.js","assets/SaveButton.13ece1cb.css","assets/index.5765ee72.js","assets/Text.46c5bec2.js","assets/Base.eeda2dae.js","assets/index.3e9e5589.js","assets/Link.c257b01e.js","assets/Title.951eccc5.js","assets/NavbarControls.bffa51e8.css","assets/scripts.77407c5b.js","assets/FormItem.5f0b61bf.js","assets/hasIn.932773c2.js","assets/index.ef6e34b6.js","assets/RuntimeCommonSettings.36b00c4a.css","assets/hooks.5d5964c0.js","assets/BaseLayout.bada4c41.js","assets/BaseLayout.881bfa61.css","assets/RunButton.vue_vue_type_script_setup_true_lang.7c5c6a3a.js","assets/index.ed715684.js","assets/CollapsePanel.27a12193.js","assets/index.f1d2e592.js","assets/index.627ab86d.js","assets/Form.482980d3.js","assets/index.cad5b763.js","assets/TabPane.b9a32e73.js"]),meta:{title:"Abstra - Hook Editor"}},{path:"workflow",name:"workflow",component:()=>t(()=>import("./Workflow.2deaef76.js"),["assets/Workflow.2deaef76.js","assets/outputWidgets.31ce2d5c.js","assets/outputWidgets.3c848cd5.css","assets/workspaces.f1f3f168.js","assets/record.b2148451.js","assets/pubsub.2d9ab3f4.js","assets/url.94a5ee71.js","assets/icons.266b547d.js","assets/NavbarControls.afcfe3f2.js","assets/popupNotifcation.2de4b14e.js","assets/asyncComputed.7e3e21f4.js","assets/index.dcfaf8a5.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.69a7fe72.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.97e9b0aa.js","assets/ant-design.feb03817.js","assets/index.7e964756.js","assets/Modal.32a7843c.js","assets/SaveButton.13ece1cb.css","assets/index.5765ee72.js","assets/Text.46c5bec2.js","assets/Base.eeda2dae.js","assets/index.3e9e5589.js","assets/Link.c257b01e.js","assets/Title.951eccc5.js","assets/NavbarControls.bffa51e8.css","assets/schema.7b608f6f.js","assets/index.cf4c23b9.js","assets/index.cad5b763.js","assets/TabPane.b9a32e73.js","assets/hasIn.932773c2.js","assets/index.ee176ac7.js","assets/Workflow.956bdfc6.css"]),meta:{title:"Abstra - Workflow"},children:[{path:"editor",name:"workflowEditor",component:()=>t(()=>import("./WorkflowEditor.cc5c14ed.js"),["assets/WorkflowEditor.cc5c14ed.js","assets/outputWidgets.31ce2d5c.js","assets/outputWidgets.3c848cd5.css","assets/schema.7b608f6f.js","assets/index.cf4c23b9.js","assets/icons.266b547d.js","assets/workspaces.f1f3f168.js","assets/record.b2148451.js","assets/pubsub.2d9ab3f4.js","assets/url.94a5ee71.js","assets/Link.c257b01e.js","assets/Base.eeda2dae.js","assets/index.3e9e5589.js","assets/Text.46c5bec2.js","assets/Title.951eccc5.js","assets/index.437deef7.js","assets/isNumeric.75337b1e.js","assets/index.ee176ac7.js","assets/FormItem.5f0b61bf.js","assets/hasIn.932773c2.js","assets/Card.5114c300.js","assets/index.f5ad86a0.js","assets/TabPane.b9a32e73.js","assets/WorkflowEditor.f5539571.css"]),meta:{title:"Abstra - Workflow Editor"}},{path:"kanban",name:"workflowKanban",component:()=>t(()=>import("./WorkflowKanban.d7e8eddd.js"),["assets/WorkflowKanban.d7e8eddd.js","assets/ant-design.feb03817.js","assets/outputWidgets.31ce2d5c.js","assets/outputWidgets.3c848cd5.css","assets/index.7e964756.js","assets/Modal.32a7843c.js","assets/asyncComputed.7e3e21f4.js","assets/workspaces.f1f3f168.js","assets/record.b2148451.js","assets/pubsub.2d9ab3f4.js","assets/url.94a5ee71.js","assets/index.f1fa712c.js","assets/isNumeric.75337b1e.js","assets/index.627ab86d.js","assets/Text.46c5bec2.js","assets/Base.eeda2dae.js","assets/index.ed715684.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.c2abc329.js","assets/CollapsePanel.27a12193.js","assets/Form.482980d3.js","assets/FormItem.5f0b61bf.js","assets/hasIn.932773c2.js","assets/index.e76163c6.js","assets/index.437deef7.js","assets/Card.5114c300.js","assets/index.f5ad86a0.js","assets/TabPane.b9a32e73.js","assets/ExpandOutlined.564a8f2b.js","assets/index.ee176ac7.js","assets/WorkflowKanban.f5953d0c.css"])}]}]},...S],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{W(e,o)});(async()=>{await Promise.all([C(),x()]);const e=A({render:()=>V(j)});I.init(),P(e,a),e.use(a),e.use(y),e.mount("#app"),e.component("VSelect",g),e.component("Markdown",k),e.component("Icon",D),e.component("Message",R),r(e,T),r(e,L),r(e,O)})();
//# sourceMappingURL=editor.4ac6f6eb.js.map
