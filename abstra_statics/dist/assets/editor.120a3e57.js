import{r as _,d as m,o as d,a as p,b as c,c as l,w as u,e as h,f as b,u as f,A as E,g as w,h as v,_ as t,i as A,T as g,j as I,P,C as y,M as k,I as R,s as D,k as r,l as V,m as T,n as L,p as O}from"./outputWidgets.c28a264f.js";import{u as S}from"./index.bc0e00c8.js";import{r as W,u as C,s as x}from"./index.65cf0034.js";import"./pubsub.63a9c830.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="9ef420a3-749c-4193-babb-325ad86bbf4c",e._sentryDebugIdIdentifier="sentry-dbid-9ef420a3-749c-4193-babb-325ad86bbf4c")}catch{}})();const n=_(!1),M=()=>{window.innerWidth<780?n.value=!0:n.value=!1},B={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},j=m({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return d(()=>{window.addEventListener("resize",M)}),(i,q)=>{const s=p("router-view");return c(),l(f(E),{theme:o,"page-header":{ghost:!1}},{default:u(()=>[h("div",B,[b(s)])]),_:1})}}});const a=w({history:v("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.d93a0f45.js"),["assets/Home.d93a0f45.js","assets/outputWidgets.c28a264f.js","assets/outputWidgets.3c848cd5.css","assets/Home.6c0ec87e.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.0977b8b0.js"),["assets/Workspace.0977b8b0.js","assets/outputWidgets.c28a264f.js","assets/outputWidgets.3c848cd5.css","assets/icons.eac64055.js","assets/logo.084e5d7c.js","assets/BaseLayout.58ff314a.js","assets/BaseLayout.881bfa61.css","assets/NavbarControls.801ad6c9.js","assets/asyncComputed.5be083d9.js","assets/index.65cf0034.js","assets/pubsub.63a9c830.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.24b07baa.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.71f50984.js","assets/ant-design.7a60fe4c.js","assets/index.c2bdd175.js","assets/Title.d2c22d62.js","assets/Text.b8de0dfe.js","assets/index.2b9c079f.js","assets/Link.21148453.js","assets/SaveButton.13ece1cb.css","assets/index.fa8cadd1.js","assets/workspaces.2749e542.js","assets/record.00b245b9.js","assets/url.1668deee.js","assets/popupNotifcation.0849075a.js","assets/CircularLoading.04e95a9e.js","assets/CircularLoading.f81b57b4.css","assets/index.9ddccc02.js","assets/NavbarControls.d196f6d1.css","assets/index.6fefd0f8.js","assets/Workspace.7fb7c04c.css"]),redirect:()=>({name:"home"}),children:[{path:"home",name:"home",component:()=>t(()=>import("./Scripts.2e64a68d.js"),["assets/Scripts.2e64a68d.js","assets/outputWidgets.c28a264f.js","assets/outputWidgets.3c848cd5.css","assets/forms.e4fb7475.js","assets/record.00b245b9.js","assets/pubsub.63a9c830.js","assets/validations.b8a8946b.js","assets/string.22ff7497.js","assets/workspaces.2749e542.js","assets/url.1668deee.js","assets/asyncComputed.5be083d9.js","assets/ant-design.7a60fe4c.js","assets/index.c2bdd175.js","assets/Title.d2c22d62.js","assets/Text.b8de0dfe.js","assets/icons.eac64055.js","assets/index.4ac45921.js","assets/Card.db259191.js","assets/index.268aa353.js","assets/TabPane.58719b08.js","assets/hasIn.9ac121b6.js","assets/Form.69dcbbc9.js","assets/FormItem.e467a7e7.js","assets/index.9ddccc02.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.24b07baa.js","assets/index.fa8cadd1.js","assets/index.2b9c079f.js","assets/Link.21148453.js","assets/Scripts.6da3c7d7.css"]),meta:{title:"Abstra - Scripts"}}]},{path:"form/:id",name:"formEditor",component:()=>t(()=>import("./FormEditor.f989d5d6.js"),["assets/FormEditor.f989d5d6.js","assets/FormRunner.2d9a7eca.js","assets/outputWidgets.c28a264f.js","assets/outputWidgets.3c848cd5.css","assets/url.1668deee.js","assets/index.65cf0034.js","assets/pubsub.63a9c830.js","assets/icons.eac64055.js","assets/CircularLoading.04e95a9e.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.d014a034.js","assets/PlayerNavbar.d1d85d81.css","assets/ActionButton.a55b12f5.js","assets/ActionButton.f74e60ec.css","assets/WidgetsFrame.efdb3b3a.js","assets/WidgetsFrame.97ae601d.css","assets/FormRunner.6a6fbb7a.css","assets/SourceCode.e56a05d4.js","assets/uuid.e7fcc385.js","assets/NavbarControls.801ad6c9.js","assets/asyncComputed.5be083d9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.24b07baa.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.71f50984.js","assets/ant-design.7a60fe4c.js","assets/index.c2bdd175.js","assets/Title.d2c22d62.js","assets/Text.b8de0dfe.js","assets/index.2b9c079f.js","assets/Link.21148453.js","assets/SaveButton.13ece1cb.css","assets/index.fa8cadd1.js","assets/workspaces.2749e542.js","assets/record.00b245b9.js","assets/popupNotifcation.0849075a.js","assets/index.9ddccc02.js","assets/NavbarControls.d196f6d1.css","assets/validations.b8a8946b.js","assets/string.22ff7497.js","assets/FormItem.e467a7e7.js","assets/hasIn.9ac121b6.js","assets/toggleHighContrast.76a73ba4.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.2e93c187.css","assets/BaseLayout.58ff314a.js","assets/BaseLayout.881bfa61.css","assets/forms.e4fb7475.js","assets/Form.69dcbbc9.js","assets/TabPane.58719b08.js","assets/index.268aa353.js","assets/index.2e041818.js","assets/ExpandOutlined.1b4ed6cc.js","assets/index.6fefd0f8.js","assets/FormEditor.74b4732a.css"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:id/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.65ee0de4.js"),["assets/FormPreview.65ee0de4.js","assets/outputWidgets.c28a264f.js","assets/outputWidgets.3c848cd5.css","assets/CircularLoading.04e95a9e.js","assets/CircularLoading.f81b57b4.css","assets/FormRunner.2d9a7eca.js","assets/url.1668deee.js","assets/index.65cf0034.js","assets/pubsub.63a9c830.js","assets/icons.eac64055.js","assets/PlayerNavbar.d014a034.js","assets/PlayerNavbar.d1d85d81.css","assets/ActionButton.a55b12f5.js","assets/ActionButton.f74e60ec.css","assets/WidgetsFrame.efdb3b3a.js","assets/WidgetsFrame.97ae601d.css","assets/FormRunner.6a6fbb7a.css","assets/asyncComputed.5be083d9.js","assets/forms.e4fb7475.js","assets/record.00b245b9.js","assets/workspaces.2749e542.js","assets/FormPreview.6b9bc365.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:id",name:"jobEditor",component:()=>t(()=>import("./JobEditor.db542727.js"),["assets/JobEditor.db542727.js","assets/outputWidgets.c28a264f.js","assets/outputWidgets.3c848cd5.css","assets/validations.b8a8946b.js","assets/record.00b245b9.js","assets/pubsub.63a9c830.js","assets/string.22ff7497.js","assets/workspaces.2749e542.js","assets/url.1668deee.js","assets/SourceCode.e56a05d4.js","assets/uuid.e7fcc385.js","assets/icons.eac64055.js","assets/NavbarControls.801ad6c9.js","assets/asyncComputed.5be083d9.js","assets/index.65cf0034.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.24b07baa.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.71f50984.js","assets/ant-design.7a60fe4c.js","assets/index.c2bdd175.js","assets/Title.d2c22d62.js","assets/Text.b8de0dfe.js","assets/index.2b9c079f.js","assets/Link.21148453.js","assets/SaveButton.13ece1cb.css","assets/index.fa8cadd1.js","assets/popupNotifcation.0849075a.js","assets/CircularLoading.04e95a9e.js","assets/CircularLoading.f81b57b4.css","assets/index.9ddccc02.js","assets/NavbarControls.d196f6d1.css","assets/FormItem.e467a7e7.js","assets/hasIn.9ac121b6.js","assets/toggleHighContrast.76a73ba4.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.2e93c187.css","assets/BaseLayout.58ff314a.js","assets/BaseLayout.881bfa61.css","assets/RunButton.vue_vue_type_script_setup_true_lang.59caaa1a.js","assets/index.5620c394.js","assets/index.2e041818.js","assets/dayjs.303914a8.js","assets/index.d93f23ad.js","assets/Form.69dcbbc9.js","assets/index.6fefd0f8.js","assets/TabPane.58719b08.js"]),meta:{title:"Abstra - Job Editor"}},{path:"hook/:id",name:"hookEditor",component:()=>t(()=>import("./HookEditor.5d81c0b2.js"),["assets/HookEditor.5d81c0b2.js","assets/outputWidgets.c28a264f.js","assets/outputWidgets.3c848cd5.css","assets/SourceCode.e56a05d4.js","assets/uuid.e7fcc385.js","assets/icons.eac64055.js","assets/NavbarControls.801ad6c9.js","assets/asyncComputed.5be083d9.js","assets/index.65cf0034.js","assets/pubsub.63a9c830.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.24b07baa.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.71f50984.js","assets/ant-design.7a60fe4c.js","assets/index.c2bdd175.js","assets/Title.d2c22d62.js","assets/Text.b8de0dfe.js","assets/index.2b9c079f.js","assets/Link.21148453.js","assets/SaveButton.13ece1cb.css","assets/index.fa8cadd1.js","assets/workspaces.2749e542.js","assets/record.00b245b9.js","assets/url.1668deee.js","assets/popupNotifcation.0849075a.js","assets/CircularLoading.04e95a9e.js","assets/CircularLoading.f81b57b4.css","assets/index.9ddccc02.js","assets/NavbarControls.d196f6d1.css","assets/validations.b8a8946b.js","assets/string.22ff7497.js","assets/FormItem.e467a7e7.js","assets/hasIn.9ac121b6.js","assets/toggleHighContrast.76a73ba4.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.2e93c187.css","assets/BaseLayout.58ff314a.js","assets/BaseLayout.881bfa61.css","assets/RunButton.vue_vue_type_script_setup_true_lang.59caaa1a.js","assets/index.a923c0a5.js","assets/index.078085e2.js","assets/index.cfb2450e.js","assets/index.2e041818.js","assets/Form.69dcbbc9.js","assets/index.6fefd0f8.js","assets/TabPane.58719b08.js"]),meta:{title:"Abstra - Hook Editor"}},{path:"workflow",name:"workflow",component:()=>t(()=>import("./Workflow.ae5cf813.js"),["assets/Workflow.ae5cf813.js","assets/outputWidgets.c28a264f.js","assets/outputWidgets.3c848cd5.css","assets/workspaces.2749e542.js","assets/record.00b245b9.js","assets/pubsub.63a9c830.js","assets/url.1668deee.js","assets/icons.eac64055.js","assets/NavbarControls.801ad6c9.js","assets/asyncComputed.5be083d9.js","assets/index.65cf0034.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.24b07baa.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.71f50984.js","assets/ant-design.7a60fe4c.js","assets/index.c2bdd175.js","assets/Title.d2c22d62.js","assets/Text.b8de0dfe.js","assets/index.2b9c079f.js","assets/Link.21148453.js","assets/SaveButton.13ece1cb.css","assets/index.fa8cadd1.js","assets/popupNotifcation.0849075a.js","assets/CircularLoading.04e95a9e.js","assets/CircularLoading.f81b57b4.css","assets/index.9ddccc02.js","assets/NavbarControls.d196f6d1.css","assets/schema.e30e78cc.js","assets/index.cf4c23b9.js","assets/metadata.a35f39b1.js","assets/index.6fefd0f8.js","assets/TabPane.58719b08.js","assets/hasIn.9ac121b6.js","assets/Workflow.7f2c0c0a.css"]),meta:{title:"Abstra - Workflow"},redirect:{name:"workflowEditor"},children:[{path:"editor",name:"workflowEditor",component:()=>t(()=>import("./WorkflowEditor.941244ce.js"),["assets/WorkflowEditor.941244ce.js","assets/outputWidgets.c28a264f.js","assets/outputWidgets.3c848cd5.css","assets/metadata.a35f39b1.js","assets/icons.eac64055.js","assets/schema.e30e78cc.js","assets/index.cf4c23b9.js","assets/workspaces.2749e542.js","assets/record.00b245b9.js","assets/pubsub.63a9c830.js","assets/url.1668deee.js","assets/index.ecd87edf.js","assets/isNumeric.75337b1e.js","assets/index.9ddccc02.js","assets/Text.b8de0dfe.js","assets/FormItem.e467a7e7.js","assets/hasIn.9ac121b6.js","assets/Link.21148453.js","assets/Card.db259191.js","assets/index.268aa353.js","assets/TabPane.58719b08.js","assets/WorkflowEditor.8d0f933a.css"]),meta:{title:"Abstra - Workflow Editor"}},{path:"kanban",name:"workflowKanban",component:()=>t(()=>import("./WorkflowKanban.cc815ddb.js"),["assets/WorkflowKanban.cc815ddb.js","assets/ant-design.7a60fe4c.js","assets/outputWidgets.c28a264f.js","assets/outputWidgets.3c848cd5.css","assets/index.c2bdd175.js","assets/Title.d2c22d62.js","assets/Text.b8de0dfe.js","assets/asyncComputed.5be083d9.js","assets/log.5478cca3.js","assets/index.d6f58f4d.js","assets/gateway.e67107b5.js","assets/authorManager.704d9df1.js","assets/log.6c2e406b.css","assets/index.691857f7.js","assets/index.cf4c23b9.js","assets/record.00b245b9.js","assets/pubsub.63a9c830.js","assets/metadata.a35f39b1.js","assets/icons.eac64055.js","assets/index.bc0e00c8.js","assets/index.6ca6ec79.js","assets/isNumeric.75337b1e.js","assets/index.2e041818.js","assets/index.078085e2.js","assets/index.9ddccc02.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.d75e6f5a.js","assets/Form.69dcbbc9.js","assets/FormItem.e467a7e7.js","assets/hasIn.9ac121b6.js","assets/workspaces.2749e542.js","assets/url.1668deee.js","assets/index.ede40ec1.js","assets/index.ecd87edf.js","assets/Card.db259191.js","assets/index.268aa353.js","assets/TabPane.58719b08.js","assets/ExpandOutlined.1b4ed6cc.js","assets/WorkflowKanban.bcbd9b98.css"])}]},{path:"settings",name:"settings",component:()=>t(()=>import("./Settings.f09ad447.js"),["assets/Settings.f09ad447.js","assets/NavbarControls.801ad6c9.js","assets/outputWidgets.c28a264f.js","assets/outputWidgets.3c848cd5.css","assets/asyncComputed.5be083d9.js","assets/index.65cf0034.js","assets/pubsub.63a9c830.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.24b07baa.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.71f50984.js","assets/ant-design.7a60fe4c.js","assets/index.c2bdd175.js","assets/Title.d2c22d62.js","assets/Text.b8de0dfe.js","assets/index.2b9c079f.js","assets/Link.21148453.js","assets/SaveButton.13ece1cb.css","assets/index.fa8cadd1.js","assets/workspaces.2749e542.js","assets/record.00b245b9.js","assets/url.1668deee.js","assets/popupNotifcation.0849075a.js","assets/CircularLoading.04e95a9e.js","assets/CircularLoading.f81b57b4.css","assets/icons.eac64055.js","assets/index.9ddccc02.js","assets/NavbarControls.d196f6d1.css","assets/TabPane.58719b08.js","assets/hasIn.9ac121b6.js","assets/index.6fefd0f8.js","assets/Settings.aac728e4.css"]),meta:{title:"Abstra - Settings"},redirect:{name:"settingsStyle"},children:[{path:"style",name:"settingsStyle",component:()=>t(()=>import("./StyleEditor.96f014f8.js"),["assets/StyleEditor.96f014f8.js","assets/asyncComputed.5be083d9.js","assets/outputWidgets.c28a264f.js","assets/outputWidgets.3c848cd5.css","assets/workspaces.2749e542.js","assets/record.00b245b9.js","assets/pubsub.63a9c830.js","assets/url.1668deee.js","assets/CircularLoading.04e95a9e.js","assets/CircularLoading.f81b57b4.css","assets/icons.eac64055.js","assets/FormItem.e467a7e7.js","assets/hasIn.9ac121b6.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.71f50984.js","assets/ant-design.7a60fe4c.js","assets/index.c2bdd175.js","assets/Title.d2c22d62.js","assets/Text.b8de0dfe.js","assets/index.2b9c079f.js","assets/Link.21148453.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.92c66648.js","assets/PlayerNavbar.d014a034.js","assets/PlayerNavbar.d1d85d81.css","assets/WidgetsFrame.efdb3b3a.js","assets/WidgetsFrame.97ae601d.css","assets/SidebarPreview.775a4013.css","assets/index.9ddccc02.js","assets/Form.69dcbbc9.js","assets/StyleEditor.44e7d84c.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"settingsSidebar",component:()=>t(()=>import("./SidebarEditor.7d6fbbfe.js"),["assets/SidebarEditor.7d6fbbfe.js","assets/outputWidgets.c28a264f.js","assets/outputWidgets.3c848cd5.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.71f50984.js","assets/ant-design.7a60fe4c.js","assets/index.c2bdd175.js","assets/Title.d2c22d62.js","assets/Text.b8de0dfe.js","assets/index.2b9c079f.js","assets/Link.21148453.js","assets/SaveButton.13ece1cb.css","assets/index.9ddccc02.js","assets/index.cfb2450e.js","assets/index.d93f23ad.js","assets/FormItem.e467a7e7.js","assets/hasIn.9ac121b6.js","assets/workspaces.2749e542.js","assets/record.00b245b9.js","assets/pubsub.63a9c830.js","assets/url.1668deee.js","assets/asyncComputed.5be083d9.js","assets/CircularLoading.04e95a9e.js","assets/CircularLoading.f81b57b4.css","assets/SidebarPreview.92c66648.js","assets/PlayerNavbar.d014a034.js","assets/icons.eac64055.js","assets/PlayerNavbar.d1d85d81.css","assets/WidgetsFrame.efdb3b3a.js","assets/WidgetsFrame.97ae601d.css","assets/SidebarPreview.775a4013.css","assets/Form.69dcbbc9.js"]),meta:{title:"Abstra - Sidebar"}},{path:"requirements",name:"settingsRequirements",component:()=>t(()=>import("./RequirementsEditor.36e58f24.js"),["assets/RequirementsEditor.36e58f24.js","assets/asyncComputed.5be083d9.js","assets/outputWidgets.c28a264f.js","assets/outputWidgets.3c848cd5.css","assets/icons.eac64055.js","assets/CrudView.6d327925.js","assets/Title.d2c22d62.js","assets/Text.b8de0dfe.js","assets/FormItem.e467a7e7.js","assets/hasIn.9ac121b6.js","assets/Form.69dcbbc9.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.24b07baa.js","assets/router.92796efa.js","assets/authorManager.704d9df1.js","assets/index.bc0e00c8.js","assets/url.1668deee.js","assets/index.fa8cadd1.js","assets/index.2e041818.js","assets/index.cfb2450e.js","assets/CrudView.ec0f092c.css","assets/record.00b245b9.js","assets/pubsub.63a9c830.js"]),meta:{title:"Abstra - Requirements"}}]}]},...W],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{S(e,o)});(async()=>{await Promise.all([C(),x()]);const e=A({render:()=>V(j)});g.init(),I(e,a),e.use(a),e.use(P),e.mount("#app"),e.component("VSelect",y),e.component("Markdown",k),e.component("Icon",R),e.component("Message",D),r(e,T),r(e,L),r(e,O)})();
//# sourceMappingURL=editor.120a3e57.js.map
