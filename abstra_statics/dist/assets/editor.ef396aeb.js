import{r as _,d,o as m,a as p,b as c,c as l,w as u,e as h,f,u as E,A as b,g as w,h as v,_ as t,i as A,T as g,j as I,P as y,C as P,M as k,I as R,s as D,k as r,l as V,m as T,n as L,p as O}from"./outputWidgets.4b203988.js";import{u as S}from"./index.08241909.js";import{r as W,s as C}from"./index.85e6facd.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="fc48ee83-39dd-4156-8dfb-05afde8dccba",e._sentryDebugIdIdentifier="sentry-dbid-fc48ee83-39dd-4156-8dfb-05afde8dccba")}catch{}})();const n=_(!1),x=()=>{window.innerWidth<780?n.value=!0:n.value=!1},M={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},B=d({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return m(()=>{window.addEventListener("resize",x)}),(i,j)=>{const s=p("router-view");return c(),l(E(b),{theme:o,"page-header":{ghost:!1}},{default:u(()=>[h("div",M,[f(s)])]),_:1})}}});const a=w({history:v("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.08eb6ea6.js"),["assets/Home.08eb6ea6.js","assets/outputWidgets.4b203988.js","assets/outputWidgets.3c848cd5.css","assets/Home.6c0ec87e.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.695344e8.js"),["assets/Workspace.695344e8.js","assets/outputWidgets.4b203988.js","assets/outputWidgets.3c848cd5.css","assets/icons.b5300508.js","assets/logo.084e5d7c.js","assets/BaseLayout.89faeb15.js","assets/BaseLayout.881bfa61.css","assets/NavbarControls.b5354b08.js","assets/asyncComputed.e3f401af.js","assets/index.85e6facd.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0a96fdb4.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.3aeb8cf8.js","assets/ant-design.af81433d.js","assets/index.fc0a25db.js","assets/Modal.96464eb7.js","assets/storage.e938f042.js","assets/Link.daf6c82a.js","assets/Text.574763d2.js","assets/index.689acef2.js","assets/Title.aa160519.js","assets/SaveButton.13ece1cb.css","assets/index.571ba84c.js","assets/workspaces.12ceebcb.js","assets/record.3809e80c.js","assets/pubsub.3a2fa885.js","assets/url.fcdccb50.js","assets/popupNotifcation.6d467042.js","assets/CircularLoading.31bc2494.js","assets/CircularLoading.f81b57b4.css","assets/index.70306866.js","assets/NavbarControls.d196f6d1.css","assets/index.4ded4700.js","assets/Workspace.7fb7c04c.css"]),redirect:()=>({name:"home"}),children:[{path:"home",name:"home",component:()=>t(()=>import("./Scripts.a6ecc588.js"),["assets/Scripts.a6ecc588.js","assets/outputWidgets.4b203988.js","assets/outputWidgets.3c848cd5.css","assets/forms.61f78af6.js","assets/record.3809e80c.js","assets/pubsub.3a2fa885.js","assets/jobs.ee1b559d.js","assets/workspaces.12ceebcb.js","assets/url.fcdccb50.js","assets/scripts.46c0047a.js","assets/asyncComputed.e3f401af.js","assets/ant-design.af81433d.js","assets/index.fc0a25db.js","assets/Modal.96464eb7.js","assets/icons.b5300508.js","assets/Text.574763d2.js","assets/index.70306866.js","assets/Card.789851ad.js","assets/TabPane.763603c5.js","assets/hasIn.c2d80060.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0a96fdb4.js","assets/Title.aa160519.js","assets/validations.23173f24.js","assets/string.ebbe001f.js","assets/FormItem.dacf5a0e.js","assets/index.b192920a.js","assets/Form.ed264728.js","assets/index.571ba84c.js","assets/index.689acef2.js","assets/Link.daf6c82a.js","assets/Scripts.6da3c7d7.css"]),meta:{title:"Abstra - Scripts"}}]},{path:"form/:id",name:"formEditor",component:()=>t(()=>import("./FormEditor.e6545454.js"),["assets/FormEditor.e6545454.js","assets/FormRunner.fdadd483.js","assets/outputWidgets.4b203988.js","assets/outputWidgets.3c848cd5.css","assets/url.fcdccb50.js","assets/storage.e938f042.js","assets/pubsub.3a2fa885.js","assets/jwt-decode.esm.74bd4619.js","assets/index.85e6facd.js","assets/icons.b5300508.js","assets/CircularLoading.31bc2494.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.7db6fd7e.js","assets/PlayerNavbar.d1d85d81.css","assets/ActionButton.fee7ae20.js","assets/ActionButton.f74e60ec.css","assets/WidgetsFrame.c31e5796.js","assets/WidgetsFrame.97ae601d.css","assets/index.a717dae8.js","assets/Card.789851ad.js","assets/TabPane.763603c5.js","assets/hasIn.c2d80060.js","assets/index.689acef2.js","assets/Text.574763d2.js","assets/Link.daf6c82a.js","assets/Title.aa160519.js","assets/FormRunner.8ff3f1ac.css","assets/SourceCode.dd6149d0.js","assets/uuid.2f7b47ed.js","assets/NavbarControls.b5354b08.js","assets/asyncComputed.e3f401af.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0a96fdb4.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.3aeb8cf8.js","assets/ant-design.af81433d.js","assets/index.fc0a25db.js","assets/Modal.96464eb7.js","assets/SaveButton.13ece1cb.css","assets/index.571ba84c.js","assets/workspaces.12ceebcb.js","assets/record.3809e80c.js","assets/popupNotifcation.6d467042.js","assets/index.70306866.js","assets/NavbarControls.d196f6d1.css","assets/jobs.ee1b559d.js","assets/scripts.46c0047a.js","assets/validations.23173f24.js","assets/string.ebbe001f.js","assets/FormItem.dacf5a0e.js","assets/toggleHighContrast.ce631ec3.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.bb7637cb.css","assets/BaseLayout.89faeb15.js","assets/BaseLayout.881bfa61.css","assets/forms.61f78af6.js","assets/Form.ed264728.js","assets/index.50465e1e.js","assets/ExpandOutlined.d0bfc26d.js","assets/index.4ded4700.js","assets/FormEditor.80dd403e.css"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:id/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.68db2cd1.js"),["assets/FormPreview.68db2cd1.js","assets/outputWidgets.4b203988.js","assets/outputWidgets.3c848cd5.css","assets/CircularLoading.31bc2494.js","assets/CircularLoading.f81b57b4.css","assets/FormRunner.fdadd483.js","assets/url.fcdccb50.js","assets/storage.e938f042.js","assets/pubsub.3a2fa885.js","assets/jwt-decode.esm.74bd4619.js","assets/index.85e6facd.js","assets/icons.b5300508.js","assets/PlayerNavbar.7db6fd7e.js","assets/PlayerNavbar.d1d85d81.css","assets/ActionButton.fee7ae20.js","assets/ActionButton.f74e60ec.css","assets/WidgetsFrame.c31e5796.js","assets/WidgetsFrame.97ae601d.css","assets/index.a717dae8.js","assets/Card.789851ad.js","assets/TabPane.763603c5.js","assets/hasIn.c2d80060.js","assets/index.689acef2.js","assets/Text.574763d2.js","assets/Link.daf6c82a.js","assets/Title.aa160519.js","assets/FormRunner.8ff3f1ac.css","assets/asyncComputed.e3f401af.js","assets/forms.61f78af6.js","assets/record.3809e80c.js","assets/workspaces.12ceebcb.js","assets/FormPreview.6b9bc365.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:id",name:"jobEditor",component:()=>t(()=>import("./JobEditor.46fa073c.js"),["assets/JobEditor.46fa073c.js","assets/outputWidgets.4b203988.js","assets/outputWidgets.3c848cd5.css","assets/jobs.ee1b559d.js","assets/record.3809e80c.js","assets/pubsub.3a2fa885.js","assets/workspaces.12ceebcb.js","assets/url.fcdccb50.js","assets/SourceCode.dd6149d0.js","assets/uuid.2f7b47ed.js","assets/icons.b5300508.js","assets/storage.e938f042.js","assets/NavbarControls.b5354b08.js","assets/asyncComputed.e3f401af.js","assets/index.85e6facd.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0a96fdb4.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.3aeb8cf8.js","assets/ant-design.af81433d.js","assets/index.fc0a25db.js","assets/Modal.96464eb7.js","assets/Link.daf6c82a.js","assets/Text.574763d2.js","assets/index.689acef2.js","assets/Title.aa160519.js","assets/SaveButton.13ece1cb.css","assets/index.571ba84c.js","assets/popupNotifcation.6d467042.js","assets/CircularLoading.31bc2494.js","assets/CircularLoading.f81b57b4.css","assets/index.70306866.js","assets/NavbarControls.d196f6d1.css","assets/scripts.46c0047a.js","assets/validations.23173f24.js","assets/string.ebbe001f.js","assets/FormItem.dacf5a0e.js","assets/hasIn.c2d80060.js","assets/toggleHighContrast.ce631ec3.js","assets/toggleHighContrast.30d77c87.css","assets/Card.789851ad.js","assets/TabPane.763603c5.js","assets/SourceCode.bb7637cb.css","assets/BaseLayout.89faeb15.js","assets/BaseLayout.881bfa61.css","assets/RunButton.vue_vue_type_script_setup_true_lang.2f69a859.js","assets/index.30bcda71.js","assets/index.50465e1e.js","assets/dayjs.ad933af0.js","assets/index.9170dd9e.js","assets/Form.ed264728.js","assets/index.4ded4700.js"]),meta:{title:"Abstra - Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>t(()=>import("./HookEditor.9009b71d.js"),["assets/HookEditor.9009b71d.js","assets/outputWidgets.4b203988.js","assets/outputWidgets.3c848cd5.css","assets/SourceCode.dd6149d0.js","assets/uuid.2f7b47ed.js","assets/icons.b5300508.js","assets/storage.e938f042.js","assets/NavbarControls.b5354b08.js","assets/asyncComputed.e3f401af.js","assets/index.85e6facd.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0a96fdb4.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.3aeb8cf8.js","assets/ant-design.af81433d.js","assets/index.fc0a25db.js","assets/Modal.96464eb7.js","assets/Link.daf6c82a.js","assets/Text.574763d2.js","assets/index.689acef2.js","assets/Title.aa160519.js","assets/SaveButton.13ece1cb.css","assets/index.571ba84c.js","assets/workspaces.12ceebcb.js","assets/record.3809e80c.js","assets/pubsub.3a2fa885.js","assets/url.fcdccb50.js","assets/popupNotifcation.6d467042.js","assets/CircularLoading.31bc2494.js","assets/CircularLoading.f81b57b4.css","assets/index.70306866.js","assets/NavbarControls.d196f6d1.css","assets/jobs.ee1b559d.js","assets/scripts.46c0047a.js","assets/validations.23173f24.js","assets/string.ebbe001f.js","assets/FormItem.dacf5a0e.js","assets/hasIn.c2d80060.js","assets/toggleHighContrast.ce631ec3.js","assets/toggleHighContrast.30d77c87.css","assets/Card.789851ad.js","assets/TabPane.763603c5.js","assets/SourceCode.bb7637cb.css","assets/BaseLayout.89faeb15.js","assets/BaseLayout.881bfa61.css","assets/RunButton.vue_vue_type_script_setup_true_lang.2f69a859.js","assets/index.00091251.js","assets/CollapsePanel.cf59cb6e.js","assets/index.6c62aa95.js","assets/index.949b4f74.js","assets/index.50465e1e.js","assets/Form.ed264728.js","assets/index.4ded4700.js"]),meta:{title:"Abstra - Hook Editor"}},{path:"workflow",name:"workflow",component:()=>t(()=>import("./Workflow.70c90896.js"),["assets/Workflow.70c90896.js","assets/outputWidgets.4b203988.js","assets/outputWidgets.3c848cd5.css","assets/workspaces.12ceebcb.js","assets/record.3809e80c.js","assets/pubsub.3a2fa885.js","assets/url.fcdccb50.js","assets/icons.b5300508.js","assets/NavbarControls.b5354b08.js","assets/asyncComputed.e3f401af.js","assets/index.85e6facd.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0a96fdb4.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.3aeb8cf8.js","assets/ant-design.af81433d.js","assets/index.fc0a25db.js","assets/Modal.96464eb7.js","assets/storage.e938f042.js","assets/Link.daf6c82a.js","assets/Text.574763d2.js","assets/index.689acef2.js","assets/Title.aa160519.js","assets/SaveButton.13ece1cb.css","assets/index.571ba84c.js","assets/popupNotifcation.6d467042.js","assets/CircularLoading.31bc2494.js","assets/CircularLoading.f81b57b4.css","assets/index.70306866.js","assets/NavbarControls.d196f6d1.css","assets/schema.98f691b2.js","assets/index.cf4c23b9.js","assets/metadata.e7b504f9.js","assets/validations.23173f24.js","assets/string.ebbe001f.js","assets/index.4ded4700.js","assets/TabPane.763603c5.js","assets/hasIn.c2d80060.js","assets/Workflow.7f2c0c0a.css"]),meta:{title:"Abstra - Workflow"},redirect:{name:"workflowEditor"},children:[{path:"editor",name:"workflowEditor",component:()=>t(()=>import("./WorkflowEditor.2f469800.js"),["assets/WorkflowEditor.2f469800.js","assets/outputWidgets.4b203988.js","assets/outputWidgets.3c848cd5.css","assets/metadata.e7b504f9.js","assets/icons.b5300508.js","assets/schema.98f691b2.js","assets/index.cf4c23b9.js","assets/workspaces.12ceebcb.js","assets/record.3809e80c.js","assets/pubsub.3a2fa885.js","assets/url.fcdccb50.js","assets/validations.23173f24.js","assets/string.ebbe001f.js","assets/index.187293fe.js","assets/isNumeric.75337b1e.js","assets/index.70306866.js","assets/Text.574763d2.js","assets/FormItem.dacf5a0e.js","assets/hasIn.c2d80060.js","assets/Link.daf6c82a.js","assets/Card.789851ad.js","assets/TabPane.763603c5.js","assets/WorkflowEditor.1a742750.css"]),meta:{title:"Abstra - Workflow Editor"}},{path:"kanban",name:"workflowKanban",component:()=>t(()=>import("./WorkflowKanban.e23104d5.js"),["assets/WorkflowKanban.e23104d5.js","assets/ant-design.af81433d.js","assets/outputWidgets.4b203988.js","assets/outputWidgets.3c848cd5.css","assets/index.fc0a25db.js","assets/Modal.96464eb7.js","assets/asyncComputed.e3f401af.js","assets/metadata.e7b504f9.js","assets/icons.b5300508.js","assets/index.70306866.js","assets/index.08241909.js","assets/index.1791eede.js","assets/index.187293fe.js","assets/isNumeric.75337b1e.js","assets/Timeline.e3f1ef8c.js","assets/index.37e2dcb5.js","assets/index.50465e1e.js","assets/Title.aa160519.js","assets/Text.574763d2.js","assets/index.949b4f74.js","assets/CollapsePanel.cf59cb6e.js","assets/Link.daf6c82a.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.a23f1847.js","assets/Form.ed264728.js","assets/FormItem.dacf5a0e.js","assets/hasIn.c2d80060.js","assets/workspaces.12ceebcb.js","assets/record.3809e80c.js","assets/pubsub.3a2fa885.js","assets/url.fcdccb50.js","assets/scripts.46c0047a.js","assets/Card.789851ad.js","assets/TabPane.763603c5.js","assets/ExpandOutlined.d0bfc26d.js","assets/WorkflowKanban.f13d6c6b.css"])}]},{path:"settings",name:"settings",component:()=>t(()=>import("./Settings.73cb59ad.js"),["assets/Settings.73cb59ad.js","assets/NavbarControls.b5354b08.js","assets/outputWidgets.4b203988.js","assets/outputWidgets.3c848cd5.css","assets/asyncComputed.e3f401af.js","assets/index.85e6facd.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0a96fdb4.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.3aeb8cf8.js","assets/ant-design.af81433d.js","assets/index.fc0a25db.js","assets/Modal.96464eb7.js","assets/storage.e938f042.js","assets/Link.daf6c82a.js","assets/Text.574763d2.js","assets/index.689acef2.js","assets/Title.aa160519.js","assets/SaveButton.13ece1cb.css","assets/index.571ba84c.js","assets/workspaces.12ceebcb.js","assets/record.3809e80c.js","assets/pubsub.3a2fa885.js","assets/url.fcdccb50.js","assets/popupNotifcation.6d467042.js","assets/CircularLoading.31bc2494.js","assets/CircularLoading.f81b57b4.css","assets/icons.b5300508.js","assets/index.70306866.js","assets/NavbarControls.d196f6d1.css","assets/TabPane.763603c5.js","assets/hasIn.c2d80060.js","assets/index.4ded4700.js","assets/Settings.aac728e4.css"]),meta:{title:"Abstra - Settings"},redirect:{name:"settingsStyle"},children:[{path:"style",name:"settingsStyle",component:()=>t(()=>import("./StyleEditor.2fda7708.js"),["assets/StyleEditor.2fda7708.js","assets/asyncComputed.e3f401af.js","assets/outputWidgets.4b203988.js","assets/outputWidgets.3c848cd5.css","assets/workspaces.12ceebcb.js","assets/record.3809e80c.js","assets/pubsub.3a2fa885.js","assets/url.fcdccb50.js","assets/CircularLoading.31bc2494.js","assets/CircularLoading.f81b57b4.css","assets/icons.b5300508.js","assets/FormItem.dacf5a0e.js","assets/hasIn.c2d80060.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.3aeb8cf8.js","assets/ant-design.af81433d.js","assets/index.fc0a25db.js","assets/Modal.96464eb7.js","assets/storage.e938f042.js","assets/Link.daf6c82a.js","assets/Text.574763d2.js","assets/index.689acef2.js","assets/Title.aa160519.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.2f1c6031.js","assets/PlayerNavbar.7db6fd7e.js","assets/PlayerNavbar.d1d85d81.css","assets/WidgetsFrame.c31e5796.js","assets/WidgetsFrame.97ae601d.css","assets/SidebarPreview.775a4013.css","assets/index.70306866.js","assets/Form.ed264728.js","assets/StyleEditor.44e7d84c.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"settingsSidebar",component:()=>t(()=>import("./SidebarEditor.be37be62.js"),["assets/SidebarEditor.be37be62.js","assets/outputWidgets.4b203988.js","assets/outputWidgets.3c848cd5.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.3aeb8cf8.js","assets/ant-design.af81433d.js","assets/index.fc0a25db.js","assets/Modal.96464eb7.js","assets/storage.e938f042.js","assets/Link.daf6c82a.js","assets/Text.574763d2.js","assets/index.689acef2.js","assets/Title.aa160519.js","assets/SaveButton.13ece1cb.css","assets/index.70306866.js","assets/index.6c62aa95.js","assets/index.9170dd9e.js","assets/FormItem.dacf5a0e.js","assets/hasIn.c2d80060.js","assets/workspaces.12ceebcb.js","assets/record.3809e80c.js","assets/pubsub.3a2fa885.js","assets/url.fcdccb50.js","assets/asyncComputed.e3f401af.js","assets/CircularLoading.31bc2494.js","assets/CircularLoading.f81b57b4.css","assets/SidebarPreview.2f1c6031.js","assets/PlayerNavbar.7db6fd7e.js","assets/icons.b5300508.js","assets/PlayerNavbar.d1d85d81.css","assets/WidgetsFrame.c31e5796.js","assets/WidgetsFrame.97ae601d.css","assets/SidebarPreview.775a4013.css","assets/Form.ed264728.js"]),meta:{title:"Abstra - Sidebar"}},{path:"requirements",name:"settingsRequirements",component:()=>t(()=>import("./RequirementsEditor.5396e14e.js"),["assets/RequirementsEditor.5396e14e.js","assets/asyncComputed.e3f401af.js","assets/outputWidgets.4b203988.js","assets/outputWidgets.3c848cd5.css","assets/icons.b5300508.js","assets/CrudView.54167740.js","assets/Title.aa160519.js","assets/Text.574763d2.js","assets/FormItem.dacf5a0e.js","assets/hasIn.c2d80060.js","assets/Form.ed264728.js","assets/Modal.96464eb7.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.0a96fdb4.js","assets/router.b5e476b6.js","assets/jwt-decode.esm.74bd4619.js","assets/storage.e938f042.js","assets/index.08241909.js","assets/url.fcdccb50.js","assets/index.50465e1e.js","assets/CrudView.4c069239.css","assets/record.3809e80c.js","assets/pubsub.3a2fa885.js"]),meta:{title:"Abstra - Requirements"}}]}]},...W],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{S(e,o)});(async()=>{await C();const e=A({render:()=>V(B)});g.init(),I(e,a),e.use(a),e.use(y),e.mount("#app"),e.component("VSelect",P),e.component("Markdown",k),e.component("Icon",R),e.component("Message",D),r(e,T),r(e,L),r(e,O)})();
//# sourceMappingURL=editor.ef396aeb.js.map
