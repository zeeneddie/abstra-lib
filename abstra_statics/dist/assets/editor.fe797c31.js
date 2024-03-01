import{r as _,d as m,o as p,a as d,b as c,c as u,w as l,e as E,f as h,u as f,A as v,g as b,h as A,_ as t,i as w,j as g,T as I,k as P,P as y,C as R,M as V,I as k,s as D,l as r,m as T,n as L,p as O,q as S}from"./outputWidgets.ef7f3407.js";import{r as W,s as C}from"./index.5ed874f5.js";import"./pubsub.b4b207c2.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="a5f45ab6-77c1-4821-825d-f1049188976c",e._sentryDebugIdIdentifier="sentry-dbid-a5f45ab6-77c1-4821-825d-f1049188976c")}catch{}})();const n=_(!1),x=()=>{window.innerWidth<780?n.value=!0:n.value=!1},M={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},q=m({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return p(()=>{window.addEventListener("resize",x)}),(i,B)=>{const s=d("router-view");return c(),u(f(v),{theme:o,"page-header":{ghost:!1}},{default:l(()=>[E("div",M,[h(s)])]),_:1})}}});const a=b({history:A("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.9c9d5a3a.js"),["assets/Home.9c9d5a3a.js","assets/outputWidgets.ef7f3407.js","assets/outputWidgets.6d880e89.css","assets/Home.6c0ec87e.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.065647de.js"),["assets/Workspace.065647de.js","assets/outputWidgets.ef7f3407.js","assets/outputWidgets.6d880e89.css","assets/icons.c4e300ba.js","assets/logo.084e5d7c.js","assets/BaseLayout.0bf732d1.js","assets/BaseLayout.2a9791da.css","assets/NavbarControls.0ae12387.js","assets/workspaces.9e93225b.js","assets/runnerData.7142dc1d.js","assets/url.d258a57b.js","assets/record.2e6ff048.js","assets/pubsub.b4b207c2.js","assets/asyncComputed.352c228a.js","assets/envVars.42f74dcb.js","assets/index.5ed874f5.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.64a6b2bb.js","assets/ant-design.f3720243.js","assets/index.f158f070.js","assets/Modal.bf1b2b77.js","assets/Typography.56b07efe.js","assets/Link.574ee8b3.js","assets/Base.00784e3c.js","assets/SaveButton.13ece1cb.css","assets/index.ead23094.js","assets/popupNotifcation.875b663f.js","assets/index.030a4369.js","assets/Text.361a5f7a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.853bcb44.js","assets/Paragraph.7f2d959b.js","assets/NavbarControls.7c3c4908.css","assets/index.b9710cc4.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Workspace.d7296ad3.css"]),redirect:()=>({name:"stages"}),children:[{path:"stages",name:"stages",component:()=>t(()=>import("./Scripts.6b8b5ba2.js"),["assets/Scripts.6b8b5ba2.js","assets/outputWidgets.ef7f3407.js","assets/outputWidgets.6d880e89.css","assets/forms.0748389e.js","assets/record.2e6ff048.js","assets/pubsub.b4b207c2.js","assets/workspaces.9e93225b.js","assets/runnerData.7142dc1d.js","assets/url.d258a57b.js","assets/asyncComputed.352c228a.js","assets/jobs.41c12f0f.js","assets/scripts.a1a413b6.js","assets/envVars.42f74dcb.js","assets/icons.c4e300ba.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.853bcb44.js","assets/Typography.56b07efe.js","assets/index.030a4369.js","assets/Paragraph.7f2d959b.js","assets/Base.00784e3c.js","assets/validations.9e1a8719.js","assets/string.59b56883.js","assets/Form.657b35f5.js","assets/hasIn.2b606bf1.js","assets/Text.361a5f7a.js","assets/index.ead23094.js","assets/Modal.bf1b2b77.js","assets/CrudView.623f4bd3.js","assets/router.bb5913c7.js","assets/Title.1adff754.js","assets/index.edf02e38.js","assets/CrudView.66515e1d.css","assets/ant-design.f3720243.js","assets/index.f158f070.js","assets/Link.574ee8b3.js","assets/Scripts.24c2f930.css"]),meta:{title:"Scripts - Abstra"}},{path:"workflow",name:"workflowEditor",component:()=>t(()=>import("./WorkflowEditor.835608c2.js"),["assets/WorkflowEditor.835608c2.js","assets/outputWidgets.ef7f3407.js","assets/outputWidgets.6d880e89.css","assets/api.db4f0a0a.js","assets/index.cf4c23b9.js","assets/icons.c4e300ba.js","assets/workspaces.9e93225b.js","assets/runnerData.7142dc1d.js","assets/url.d258a57b.js","assets/record.2e6ff048.js","assets/pubsub.b4b207c2.js","assets/asyncComputed.352c228a.js","assets/validations.9e1a8719.js","assets/string.59b56883.js","assets/index.29ea8bf9.js","assets/isNumeric.75337b1e.js","assets/index.030a4369.js","assets/Text.361a5f7a.js","assets/Base.00784e3c.js","assets/Typography.56b07efe.js","assets/index.ead23094.js","assets/Form.657b35f5.js","assets/hasIn.2b606bf1.js","assets/Card.60565ea4.js","assets/TabPane.7712efbf.js","assets/Modal.bf1b2b77.js","assets/uuid.aba93d7c.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.3fb4385d.js","assets/ant-design.f3720243.js","assets/index.f158f070.js","assets/index.8ed8081b.js","assets/WorkflowEditor.84511888.css"]),meta:{title:"Abstra - Workflow Editor"}},{path:"kanban",name:"workflowKanban",component:()=>t(()=>import("./WorkflowKanban.3c56b390.js"),["assets/WorkflowKanban.3c56b390.js","assets/repository.a9851d04.js","assets/outputWidgets.ef7f3407.js","assets/outputWidgets.6d880e89.css","assets/asyncComputed.352c228a.js","assets/api.db4f0a0a.js","assets/index.cf4c23b9.js","assets/icons.c4e300ba.js","assets/ant-design.f3720243.js","assets/index.f158f070.js","assets/Modal.bf1b2b77.js","assets/Text.361a5f7a.js","assets/Base.00784e3c.js","assets/Typography.56b07efe.js","assets/index.3db3a5f6.js","assets/Link.574ee8b3.js","assets/Paragraph.7f2d959b.js","assets/Title.1adff754.js","assets/index.030a4369.js","assets/index.edf02e38.js","assets/index.a41f195f.js","assets/index.29ac8d6b.js","assets/CollapsePanel.cff0c182.js","assets/Form.657b35f5.js","assets/hasIn.2b606bf1.js","assets/Timeline.11f7bdd3.js","assets/index.8ed8081b.js","assets/index.51110c94.js","assets/isNumeric.75337b1e.js","assets/contracts.generated.ae70e7eb.js","assets/workspaces.9e93225b.js","assets/runnerData.7142dc1d.js","assets/url.d258a57b.js","assets/record.2e6ff048.js","assets/pubsub.b4b207c2.js","assets/scripts.a1a413b6.js","assets/envVars.42f74dcb.js","assets/ExpandOutlined.8020b32e.js","assets/Card.60565ea4.js","assets/TabPane.7712efbf.js","assets/repository.fef7f638.css","assets/repository.517e59cf.js","assets/index.5ed874f5.js"]),meta:{title:"Abstra - Workflow Threads"}},{path:"style",name:"settingsStyle",component:()=>t(()=>import("./StyleEditor.b5be2031.js"),["assets/StyleEditor.b5be2031.js","assets/asyncComputed.352c228a.js","assets/outputWidgets.ef7f3407.js","assets/outputWidgets.6d880e89.css","assets/workspaces.9e93225b.js","assets/runnerData.7142dc1d.js","assets/url.d258a57b.js","assets/record.2e6ff048.js","assets/pubsub.b4b207c2.js","assets/envVars.42f74dcb.js","assets/CircularLoading.95908b2d.js","assets/CircularLoading.f81b57b4.css","assets/icons.c4e300ba.js","assets/Form.657b35f5.js","assets/hasIn.2b606bf1.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.64a6b2bb.js","assets/ant-design.f3720243.js","assets/index.f158f070.js","assets/Modal.bf1b2b77.js","assets/Typography.56b07efe.js","assets/Link.574ee8b3.js","assets/Base.00784e3c.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.6f94eb4f.js","assets/PlayerNavbar.e5d51f34.js","assets/PlayerNavbar.387187c9.css","assets/WidgetsFrame.6dcbe6ca.js","assets/WidgetsFrame.13b291ee.css","assets/Title.1adff754.js","assets/SidebarPreview.c4d1a6e7.css","assets/index.030a4369.js","assets/StyleEditor.44e7d84c.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"settingsSidebar",component:()=>t(()=>import("./SidebarEditor.be8e690c.js"),["assets/SidebarEditor.be8e690c.js","assets/outputWidgets.ef7f3407.js","assets/outputWidgets.6d880e89.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.64a6b2bb.js","assets/ant-design.f3720243.js","assets/index.f158f070.js","assets/Modal.bf1b2b77.js","assets/Typography.56b07efe.js","assets/Link.574ee8b3.js","assets/Base.00784e3c.js","assets/SaveButton.13ece1cb.css","assets/index.8d7a8186.js","assets/Form.657b35f5.js","assets/hasIn.2b606bf1.js","assets/Title.1adff754.js","assets/index.030a4369.js","assets/index.8ed8081b.js","assets/workspaces.9e93225b.js","assets/runnerData.7142dc1d.js","assets/url.d258a57b.js","assets/record.2e6ff048.js","assets/pubsub.b4b207c2.js","assets/asyncComputed.352c228a.js","assets/envVars.42f74dcb.js","assets/CircularLoading.95908b2d.js","assets/CircularLoading.f81b57b4.css","assets/SidebarPreview.6f94eb4f.js","assets/PlayerNavbar.e5d51f34.js","assets/icons.c4e300ba.js","assets/PlayerNavbar.387187c9.css","assets/WidgetsFrame.6dcbe6ca.js","assets/WidgetsFrame.13b291ee.css","assets/SidebarPreview.c4d1a6e7.css"]),meta:{title:"Abstra - Sidebar"}},{path:"requirements",name:"settingsRequirements",component:()=>t(()=>import("./RequirementsEditor.b16205d2.js"),["assets/RequirementsEditor.b16205d2.js","assets/asyncComputed.352c228a.js","assets/outputWidgets.ef7f3407.js","assets/outputWidgets.6d880e89.css","assets/icons.c4e300ba.js","assets/CrudView.623f4bd3.js","assets/Paragraph.7f2d959b.js","assets/Base.00784e3c.js","assets/Typography.56b07efe.js","assets/Form.657b35f5.js","assets/hasIn.2b606bf1.js","assets/Modal.bf1b2b77.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.853bcb44.js","assets/router.bb5913c7.js","assets/url.d258a57b.js","assets/index.030a4369.js","assets/Title.1adff754.js","assets/Text.361a5f7a.js","assets/index.edf02e38.js","assets/CrudView.66515e1d.css","assets/workspaces.9e93225b.js","assets/runnerData.7142dc1d.js","assets/record.2e6ff048.js","assets/pubsub.b4b207c2.js","assets/envVars.42f74dcb.js"]),meta:{title:"Abstra - Requirements"}},{path:"env-vars",name:"env-vars",component:()=>t(()=>import("./EnvVarsEditor.8ec534ec.js"),["assets/EnvVarsEditor.8ec534ec.js","assets/outputWidgets.ef7f3407.js","assets/outputWidgets.6d880e89.css","assets/workspaces.9e93225b.js","assets/runnerData.7142dc1d.js","assets/url.d258a57b.js","assets/record.2e6ff048.js","assets/pubsub.b4b207c2.js","assets/asyncComputed.352c228a.js","assets/envVars.42f74dcb.js","assets/icons.c4e300ba.js","assets/CrudView.623f4bd3.js","assets/Paragraph.7f2d959b.js","assets/Base.00784e3c.js","assets/Typography.56b07efe.js","assets/Form.657b35f5.js","assets/hasIn.2b606bf1.js","assets/Modal.bf1b2b77.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.853bcb44.js","assets/router.bb5913c7.js","assets/index.030a4369.js","assets/Title.1adff754.js","assets/Text.361a5f7a.js","assets/index.edf02e38.js","assets/CrudView.66515e1d.css","assets/index.ead23094.js"]),meta:{title:"Abstra - Environment Variables"}}]},{path:"form/:id",name:"formEditor",component:()=>t(()=>import("./FormEditor.8c8c1ddb.js"),["assets/FormEditor.8c8c1ddb.js","assets/index.5ed874f5.js","assets/outputWidgets.ef7f3407.js","assets/outputWidgets.6d880e89.css","assets/pubsub.b4b207c2.js","assets/BaseLayout.0bf732d1.js","assets/BaseLayout.2a9791da.css","assets/FormRunner.45541240.js","assets/url.d258a57b.js","assets/Passwordless.f7bde46c.js","assets/icons.c4e300ba.js","assets/CircularLoading.95908b2d.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.7de0ca4a.css","assets/PlayerNavbar.e5d51f34.js","assets/PlayerNavbar.387187c9.css","assets/WidgetsFrame.6dcbe6ca.js","assets/WidgetsFrame.13b291ee.css","assets/Steps.1ec67aa5.js","assets/Steps.4a8d55e8.css","assets/Card.60565ea4.js","assets/TabPane.7712efbf.js","assets/hasIn.2b606bf1.js","assets/Typography.56b07efe.js","assets/FormRunner.2fbc5c93.css","assets/SourceCode.892e60dd.js","assets/uuid.aba93d7c.js","assets/workspaces.9e93225b.js","assets/runnerData.7142dc1d.js","assets/record.2e6ff048.js","assets/asyncComputed.352c228a.js","assets/NavbarControls.0ae12387.js","assets/envVars.42f74dcb.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.64a6b2bb.js","assets/ant-design.f3720243.js","assets/index.f158f070.js","assets/Modal.bf1b2b77.js","assets/Link.574ee8b3.js","assets/Base.00784e3c.js","assets/SaveButton.13ece1cb.css","assets/index.ead23094.js","assets/popupNotifcation.875b663f.js","assets/index.030a4369.js","assets/Text.361a5f7a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.853bcb44.js","assets/Paragraph.7f2d959b.js","assets/NavbarControls.7c3c4908.css","assets/jobs.41c12f0f.js","assets/scripts.a1a413b6.js","assets/validations.9e1a8719.js","assets/string.59b56883.js","assets/Form.657b35f5.js","assets/toggleHighContrast.d2657e94.js","assets/toggleHighContrast.30d77c87.css","assets/SourceCode.313a55a6.css","assets/forms.0748389e.js","assets/StageRunSelector.47d4f01f.js","assets/index.a41f195f.js","assets/index.8ed8081b.js","assets/StageRunSelector.98b90ce4.css","assets/index.d37875c0.js","assets/Title.1adff754.js","assets/api.db4f0a0a.js","assets/index.cf4c23b9.js","assets/index.b9710cc4.js","assets/ArrowRightOutlined.08fa31dd.js","assets/index.edf02e38.js","assets/ExpandOutlined.8020b32e.js","assets/FormEditor.bdb2f6d5.css"]),meta:{title:"Smart Form Editor - Abstra"}},{path:"form/:id/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.53ea47d4.js"),["assets/FormPreview.53ea47d4.js","assets/index.5ed874f5.js","assets/outputWidgets.ef7f3407.js","assets/outputWidgets.6d880e89.css","assets/pubsub.b4b207c2.js","assets/FormRunner.45541240.js","assets/url.d258a57b.js","assets/Passwordless.f7bde46c.js","assets/icons.c4e300ba.js","assets/CircularLoading.95908b2d.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.7de0ca4a.css","assets/PlayerNavbar.e5d51f34.js","assets/PlayerNavbar.387187c9.css","assets/WidgetsFrame.6dcbe6ca.js","assets/WidgetsFrame.13b291ee.css","assets/Steps.1ec67aa5.js","assets/Steps.4a8d55e8.css","assets/Card.60565ea4.js","assets/TabPane.7712efbf.js","assets/hasIn.2b606bf1.js","assets/Typography.56b07efe.js","assets/FormRunner.2fbc5c93.css","assets/asyncComputed.352c228a.js","assets/forms.0748389e.js","assets/record.2e6ff048.js","assets/workspaces.9e93225b.js","assets/runnerData.7142dc1d.js","assets/envVars.42f74dcb.js","assets/FormPreview.335edebb.css"]),meta:{title:"Smart Form Preview - Abstra"}},{path:"job/:id",name:"jobEditor",component:()=>t(()=>import("./JobEditor.fa170d69.js"),["assets/JobEditor.fa170d69.js","assets/outputWidgets.ef7f3407.js","assets/outputWidgets.6d880e89.css","assets/workspaces.9e93225b.js","assets/runnerData.7142dc1d.js","assets/url.d258a57b.js","assets/record.2e6ff048.js","assets/pubsub.b4b207c2.js","assets/asyncComputed.352c228a.js","assets/jobs.41c12f0f.js","assets/envVars.42f74dcb.js","assets/SourceCode.892e60dd.js","assets/uuid.aba93d7c.js","assets/icons.c4e300ba.js","assets/NavbarControls.0ae12387.js","assets/index.5ed874f5.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.64a6b2bb.js","assets/ant-design.f3720243.js","assets/index.f158f070.js","assets/Modal.bf1b2b77.js","assets/Typography.56b07efe.js","assets/Link.574ee8b3.js","assets/Base.00784e3c.js","assets/SaveButton.13ece1cb.css","assets/index.ead23094.js","assets/popupNotifcation.875b663f.js","assets/index.030a4369.js","assets/Text.361a5f7a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.853bcb44.js","assets/Paragraph.7f2d959b.js","assets/NavbarControls.7c3c4908.css","assets/scripts.a1a413b6.js","assets/validations.9e1a8719.js","assets/string.59b56883.js","assets/Form.657b35f5.js","assets/hasIn.2b606bf1.js","assets/toggleHighContrast.d2657e94.js","assets/toggleHighContrast.30d77c87.css","assets/Card.60565ea4.js","assets/TabPane.7712efbf.js","assets/SourceCode.313a55a6.css","assets/BaseLayout.0bf732d1.js","assets/BaseLayout.2a9791da.css","assets/RunButton.vue_vue_type_script_setup_true_lang.b946f047.js","assets/index.58a2671f.js","assets/index.edf02e38.js","assets/dayjs.ff42883a.js","assets/Title.1adff754.js","assets/index.8d7a8186.js","assets/index.b9710cc4.js","assets/ArrowRightOutlined.08fa31dd.js"]),meta:{title:"Job Editor - Abstra"}},{path:"hook/:id",name:"hookEditor",component:()=>t(()=>import("./HookEditor.443cd076.js"),["assets/HookEditor.443cd076.js","assets/outputWidgets.ef7f3407.js","assets/outputWidgets.6d880e89.css","assets/SourceCode.892e60dd.js","assets/uuid.aba93d7c.js","assets/icons.c4e300ba.js","assets/workspaces.9e93225b.js","assets/runnerData.7142dc1d.js","assets/url.d258a57b.js","assets/record.2e6ff048.js","assets/pubsub.b4b207c2.js","assets/asyncComputed.352c228a.js","assets/NavbarControls.0ae12387.js","assets/envVars.42f74dcb.js","assets/index.5ed874f5.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.64a6b2bb.js","assets/ant-design.f3720243.js","assets/index.f158f070.js","assets/Modal.bf1b2b77.js","assets/Typography.56b07efe.js","assets/Link.574ee8b3.js","assets/Base.00784e3c.js","assets/SaveButton.13ece1cb.css","assets/index.ead23094.js","assets/popupNotifcation.875b663f.js","assets/index.030a4369.js","assets/Text.361a5f7a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.853bcb44.js","assets/Paragraph.7f2d959b.js","assets/NavbarControls.7c3c4908.css","assets/jobs.41c12f0f.js","assets/scripts.a1a413b6.js","assets/validations.9e1a8719.js","assets/string.59b56883.js","assets/Form.657b35f5.js","assets/hasIn.2b606bf1.js","assets/toggleHighContrast.d2657e94.js","assets/toggleHighContrast.30d77c87.css","assets/Card.60565ea4.js","assets/TabPane.7712efbf.js","assets/SourceCode.313a55a6.css","assets/BaseLayout.0bf732d1.js","assets/BaseLayout.2a9791da.css","assets/RunButton.vue_vue_type_script_setup_true_lang.b946f047.js","assets/api.db4f0a0a.js","assets/index.cf4c23b9.js","assets/index.a409786b.js","assets/CollapsePanel.cff0c182.js","assets/index.8ed8081b.js","assets/index.edf02e38.js","assets/StageRunSelector.47d4f01f.js","assets/index.a41f195f.js","assets/StageRunSelector.98b90ce4.css","assets/index.b9710cc4.js","assets/ArrowRightOutlined.08fa31dd.js"]),meta:{title:"Hook Editor - Abstra"}},{path:"script/:id",name:"scriptEditor",component:()=>t(()=>import("./ScriptEditor.eef606fa.js"),["assets/ScriptEditor.eef606fa.js","assets/outputWidgets.ef7f3407.js","assets/outputWidgets.6d880e89.css","assets/workspaces.9e93225b.js","assets/runnerData.7142dc1d.js","assets/url.d258a57b.js","assets/record.2e6ff048.js","assets/pubsub.b4b207c2.js","assets/asyncComputed.352c228a.js","assets/scripts.a1a413b6.js","assets/envVars.42f74dcb.js","assets/SourceCode.892e60dd.js","assets/uuid.aba93d7c.js","assets/icons.c4e300ba.js","assets/NavbarControls.0ae12387.js","assets/index.5ed874f5.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.64a6b2bb.js","assets/ant-design.f3720243.js","assets/index.f158f070.js","assets/Modal.bf1b2b77.js","assets/Typography.56b07efe.js","assets/Link.574ee8b3.js","assets/Base.00784e3c.js","assets/SaveButton.13ece1cb.css","assets/index.ead23094.js","assets/popupNotifcation.875b663f.js","assets/index.030a4369.js","assets/Text.361a5f7a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.853bcb44.js","assets/Paragraph.7f2d959b.js","assets/NavbarControls.7c3c4908.css","assets/jobs.41c12f0f.js","assets/validations.9e1a8719.js","assets/string.59b56883.js","assets/Form.657b35f5.js","assets/hasIn.2b606bf1.js","assets/toggleHighContrast.d2657e94.js","assets/toggleHighContrast.30d77c87.css","assets/Card.60565ea4.js","assets/TabPane.7712efbf.js","assets/SourceCode.313a55a6.css","assets/BaseLayout.0bf732d1.js","assets/BaseLayout.2a9791da.css","assets/RunButton.vue_vue_type_script_setup_true_lang.b946f047.js","assets/StageRunSelector.47d4f01f.js","assets/index.a41f195f.js","assets/index.8ed8081b.js","assets/StageRunSelector.98b90ce4.css","assets/index.b9710cc4.js","assets/ArrowRightOutlined.08fa31dd.js"]),meta:{title:"Script Editor - Abstra"}}]},...W],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{w(e,o)});(async()=>{await C();const e=g({render:()=>T(q)});I.init(),P(e,a),e.use(a),e.use(y),e.mount("#app"),e.component("VSelect",R),e.component("Markdown",V),e.component("Icon",k),e.component("Message",D),r(e,L),r(e,O),r(e,S)})();
//# sourceMappingURL=editor.fe797c31.js.map
