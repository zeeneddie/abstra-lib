var h=Object.defineProperty;var l=(o,t,e)=>t in o?h(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var c=(o,t,e)=>(l(o,typeof t!="symbol"?t+"":t,e),e);import{C as E}from"./Title.d85134a2.js";import{F as g,cZ as p,S as s,q as v,g as b,h as f,_ as n}from"./outputWidgets.3f6d0550.js";import{u as I}from"./index.3719e3b6.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="6c981ba1-d0b8-44ac-bd2b-809ed11c9895",o._sentryDebugIdIdentifier="sentry-dbid-6c981ba1-d0b8-44ac-bd2b-809ed11c9895")}catch{}})();const P=g(E),w=()=>window.location.host.includes(".abstra.io"),y={authn:"/api/authn","cloud-api":"/api/cloud-api"},T={authn:"https://authn.abstra.cloud","cloud-api":"https://cloud-api.abstra.cloud"},_=o=>{const t="VITE_"+p.toUpper(p.snakeCase(o)),e={VITE_SENTRY_RELEASE:"dec481d6a21d08017f45eb221c1a186c9f18b89d",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(w()?y[o]:T[o])},d={authn:_("authn"),cloudApi:_("cloud-api")},a=class{async authenticate(t){try{const e=await fetch(`${d.authn}/authenticate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t})});if(!e.ok)throw new Error(await e.text());return null}catch(e){return e.message}}async verify(t,e){const i=await fetch(`${d.authn}/verify`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t,token:e})});if(!i.ok)throw new Error(await i.text());const m=await i.json();return this.saveJWT(m.jwt),this.getAuthor()}saveJWT(t){s.set(a.key,t)}getJWT(){return s.get(a.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=v(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){s.remove(a.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let r=a;c(r,"key","abstracloud:auth:jwt");const R=new r,u=b({history:f("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./WidgetPreview.f714aa27.js"),["assets/WidgetPreview.f714aa27.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.a047c9fb.js","assets/outputWidgets.3f6d0550.js","assets/outputWidgets.e6401203.css","assets/Steps.f8152f0d.js","assets/Steps.998aa76d.css","assets/WidgetsFrame.1cd54435.js","assets/WidgetsFrame.0816a5f5.css","assets/WidgetPreview.86a24f90.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./Login.c5cedb42.js"),["assets/Login.c5cedb42.js","assets/outputWidgets.3f6d0550.js","assets/outputWidgets.e6401203.css","assets/icons.51140278.js","assets/CircularLoading.2945792d.js","assets/CircularLoading.f81b57b4.css","assets/member.d98ec36d.js","assets/gateway.985e8615.js","assets/activeRecord.4331371e.js","assets/pubsub.0f07f3a4.js","assets/WidgetsFrame.1cd54435.js","assets/WidgetsFrame.0816a5f5.css","assets/Title.d85134a2.js","assets/index.3719e3b6.js","assets/Login.1f6a6209.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>n(()=>import("./Organizations.f866f986.js"),["assets/Organizations.f866f986.js","assets/outputWidgets.3f6d0550.js","assets/outputWidgets.e6401203.css","assets/icons.51140278.js","assets/asyncComputed.bd80460e.js","assets/organization.4093a69d.js","assets/gateway.985e8615.js","assets/activeRecord.4331371e.js","assets/pubsub.0f07f3a4.js","assets/index.4a6147e4.js","assets/Navbar.vue_vue_type_script_setup_true_lang.7af81a64.js","assets/logo.084e5d7c.js","assets/index.eb4bb603.js","assets/Title.d85134a2.js","assets/index.dee2e461.js","assets/index.18a73dee.js","assets/Navbar.f4a98ea3.css","assets/CrudView.7764d20a.js","assets/Form.7ff4c526.js","assets/url.980858d4.js","assets/index.6a58cd86.js","assets/index.9fce520b.js","assets/index.4614c424.js","assets/CrudView.396a8168.css","assets/BaseLayout.18cbe6d3.js","assets/BaseLayout.2d5b030e.css","assets/ant-design.003e27e5.js","assets/index.3719e3b6.js"])},{path:"/organizations/:organizationId",name:"organization",component:()=>n(()=>import("./Organization.2bea0d8d.js"),["assets/Organization.2bea0d8d.js","assets/Sidebar.727f425b.js","assets/outputWidgets.3f6d0550.js","assets/outputWidgets.e6401203.css","assets/icons.51140278.js","assets/Tooltip.4e4dcd86.js","assets/Tooltip.63c4352e.css","assets/Sidebar.c72a98ac.css","assets/Navbar.vue_vue_type_script_setup_true_lang.7af81a64.js","assets/logo.084e5d7c.js","assets/asyncComputed.bd80460e.js","assets/index.eb4bb603.js","assets/Title.d85134a2.js","assets/index.dee2e461.js","assets/index.18a73dee.js","assets/Navbar.f4a98ea3.css","assets/organization.4093a69d.js","assets/gateway.985e8615.js","assets/activeRecord.4331371e.js","assets/pubsub.0f07f3a4.js","assets/index.4a6147e4.js","assets/BaseLayout.18cbe6d3.js","assets/BaseLayout.2d5b030e.css","assets/index.3719e3b6.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>n(()=>import("./Projects.52175aee.js"),["assets/Projects.52175aee.js","assets/outputWidgets.3f6d0550.js","assets/outputWidgets.e6401203.css","assets/icons.51140278.js","assets/asyncComputed.bd80460e.js","assets/project.8480d50a.js","assets/gateway.985e8615.js","assets/activeRecord.4331371e.js","assets/pubsub.0f07f3a4.js","assets/organization.4093a69d.js","assets/index.4a6147e4.js","assets/CrudView.7764d20a.js","assets/index.eb4bb603.js","assets/Title.d85134a2.js","assets/Form.7ff4c526.js","assets/url.980858d4.js","assets/index.6a58cd86.js","assets/index.9fce520b.js","assets/index.4614c424.js","assets/index.dee2e461.js","assets/CrudView.396a8168.css","assets/ant-design.003e27e5.js","assets/index.3719e3b6.js"])},{path:"settings",name:"organization-settings",component:()=>n(()=>import("./OrganizationSettings.179052b2.js"),["assets/OrganizationSettings.179052b2.js","assets/outputWidgets.3f6d0550.js","assets/outputWidgets.e6401203.css"])},{path:"members",name:"members",component:()=>n(()=>import("./Members.461e5bbe.js"),["assets/Members.461e5bbe.js","assets/outputWidgets.3f6d0550.js","assets/outputWidgets.e6401203.css","assets/asyncComputed.bd80460e.js","assets/member.d98ec36d.js","assets/gateway.985e8615.js","assets/activeRecord.4331371e.js","assets/pubsub.0f07f3a4.js","assets/index.4a6147e4.js","assets/CrudView.7764d20a.js","assets/icons.51140278.js","assets/index.eb4bb603.js","assets/Title.d85134a2.js","assets/Form.7ff4c526.js","assets/url.980858d4.js","assets/index.6a58cd86.js","assets/index.9fce520b.js","assets/index.4614c424.js","assets/index.dee2e461.js","assets/CrudView.396a8168.css","assets/index.3719e3b6.js"])}]},{path:"/projects/:projectId",name:"project",component:()=>n(()=>import("./Project.96f4a6f7.js"),["assets/Project.96f4a6f7.js","assets/outputWidgets.3f6d0550.js","assets/outputWidgets.e6401203.css","assets/BaseLayout.18cbe6d3.js","assets/BaseLayout.2d5b030e.css","assets/asyncComputed.bd80460e.js","assets/project.8480d50a.js","assets/gateway.985e8615.js","assets/activeRecord.4331371e.js","assets/pubsub.0f07f3a4.js","assets/organization.4093a69d.js","assets/index.4a6147e4.js","assets/Navbar.vue_vue_type_script_setup_true_lang.7af81a64.js","assets/logo.084e5d7c.js","assets/index.eb4bb603.js","assets/Title.d85134a2.js","assets/index.dee2e461.js","assets/index.18a73dee.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.727f425b.js","assets/icons.51140278.js","assets/Tooltip.4e4dcd86.js","assets/Tooltip.63c4352e.css","assets/Sidebar.c72a98ac.css","assets/index.3719e3b6.js"]),redirect:{name:"builds"},children:[{path:"builds",name:"builds",component:()=>n(()=>import("./Builds.dfcac97c.js"),["assets/Builds.dfcac97c.js","assets/outputWidgets.3f6d0550.js","assets/outputWidgets.e6401203.css","assets/asyncComputed.bd80460e.js","assets/project.8480d50a.js","assets/gateway.985e8615.js","assets/activeRecord.4331371e.js","assets/pubsub.0f07f3a4.js","assets/build.f6aa9707.js","assets/index.4a6147e4.js","assets/string.75fd4786.js","assets/icons.51140278.js","assets/CrudView.7764d20a.js","assets/index.eb4bb603.js","assets/Title.d85134a2.js","assets/Form.7ff4c526.js","assets/url.980858d4.js","assets/index.6a58cd86.js","assets/index.9fce520b.js","assets/index.4614c424.js","assets/index.dee2e461.js","assets/CrudView.396a8168.css","assets/index.b048d0fb.js","assets/index.3719e3b6.js","assets/Builds.c65259ed.css"])},{path:"connectors",name:"connectors",component:()=>n(()=>import("./Connectors.90791759.js"),["assets/Connectors.90791759.js","assets/outputWidgets.3f6d0550.js","assets/outputWidgets.e6401203.css","assets/index.4a6147e4.js","assets/connector.e8a4d334.js","assets/activeRecord.4331371e.js","assets/pubsub.0f07f3a4.js","assets/gateway.985e8615.js","assets/asyncComputed.bd80460e.js","assets/icons.51140278.js","assets/CrudView.7764d20a.js","assets/index.eb4bb603.js","assets/Title.d85134a2.js","assets/Form.7ff4c526.js","assets/url.980858d4.js","assets/index.6a58cd86.js","assets/index.9fce520b.js","assets/index.4614c424.js","assets/index.dee2e461.js","assets/CrudView.396a8168.css","assets/index.3719e3b6.js"])},{path:"tables",name:"tables",component:()=>n(()=>import("./Tables.3f0cf6b4.js"),["assets/Tables.3f0cf6b4.js","assets/outputWidgets.3f6d0550.js","assets/outputWidgets.e6401203.css","assets/icons.51140278.js","assets/asyncComputed.bd80460e.js","assets/index.4a6147e4.js","assets/tables.db3bfca4.js","assets/gateway.985e8615.js","assets/activeRecord.4331371e.js","assets/pubsub.0f07f3a4.js","assets/string.75fd4786.js","assets/CrudView.7764d20a.js","assets/index.eb4bb603.js","assets/Title.d85134a2.js","assets/Form.7ff4c526.js","assets/url.980858d4.js","assets/index.6a58cd86.js","assets/index.9fce520b.js","assets/index.4614c424.js","assets/index.dee2e461.js","assets/CrudView.396a8168.css","assets/index.3719e3b6.js"])},{path:"api-keys",name:"api-keys",component:()=>n(()=>import("./ApiKeys.7b43de49.js"),["assets/ApiKeys.7b43de49.js","assets/outputWidgets.3f6d0550.js","assets/outputWidgets.e6401203.css","assets/asyncComputed.bd80460e.js","assets/project.8480d50a.js","assets/gateway.985e8615.js","assets/activeRecord.4331371e.js","assets/pubsub.0f07f3a4.js","assets/member.d98ec36d.js","assets/index.4a6147e4.js","assets/icons.51140278.js","assets/CrudView.7764d20a.js","assets/index.eb4bb603.js","assets/Title.d85134a2.js","assets/Form.7ff4c526.js","assets/url.980858d4.js","assets/index.6a58cd86.js","assets/index.9fce520b.js","assets/index.4614c424.js","assets/index.dee2e461.js","assets/CrudView.396a8168.css","assets/index.b048d0fb.js","assets/index.3719e3b6.js"])},{path:"logs",name:"logs",component:()=>n(()=>import("./Logs.42490d7a.js"),["assets/Logs.42490d7a.js","assets/outputWidgets.3f6d0550.js","assets/outputWidgets.e6401203.css","assets/build.f6aa9707.js","assets/gateway.985e8615.js","assets/activeRecord.4331371e.js","assets/pubsub.0f07f3a4.js","assets/index.4a6147e4.js","assets/asyncComputed.bd80460e.js","assets/ant-design.003e27e5.js","assets/Title.d85134a2.js","assets/index.48f04804.js","assets/index.6a58cd86.js","assets/dayjs.9b3d90bb.js","assets/index.b048d0fb.js","assets/Form.7ff4c526.js","assets/index.eb4bb603.js","assets/CollapsePanel.e23edbfd.js","assets/index.4614c424.js","assets/index.dee2e461.js","assets/index.3719e3b6.js"])},{path:"settings",name:"project-settings",component:()=>n(()=>import("./ProjectSettings.54197f7a.js"),["assets/ProjectSettings.54197f7a.js","assets/asyncComputed.bd80460e.js","assets/outputWidgets.3f6d0550.js","assets/outputWidgets.e6401203.css","assets/project.8480d50a.js","assets/gateway.985e8615.js","assets/activeRecord.4331371e.js","assets/pubsub.0f07f3a4.js","assets/index.4a6147e4.js","assets/index.3719e3b6.js","assets/Title.d85134a2.js","assets/index.eb4bb603.js","assets/index.9fce520b.js","assets/Form.7ff4c526.js","assets/index.dee2e461.js"])},{path:"env-vars",name:"env-vars",component:()=>n(()=>import("./EnvVars.ecfb1af1.js"),["assets/EnvVars.ecfb1af1.js","assets/outputWidgets.3f6d0550.js","assets/outputWidgets.e6401203.css","assets/asyncComputed.bd80460e.js","assets/gateway.985e8615.js","assets/activeRecord.4331371e.js","assets/pubsub.0f07f3a4.js","assets/index.4a6147e4.js","assets/icons.51140278.js","assets/CrudView.7764d20a.js","assets/index.eb4bb603.js","assets/Title.d85134a2.js","assets/Form.7ff4c526.js","assets/url.980858d4.js","assets/index.6a58cd86.js","assets/index.9fce520b.js","assets/index.4614c424.js","assets/index.dee2e461.js","assets/CrudView.396a8168.css","assets/index.3719e3b6.js"])},{path:"files",name:"files",component:()=>n(()=>import("./Files.5e450d81.js"),["assets/Files.5e450d81.js","assets/outputWidgets.3f6d0550.js","assets/outputWidgets.e6401203.css","assets/index.4a6147e4.js","assets/gateway.985e8615.js","assets/activeRecord.4331371e.js","assets/pubsub.0f07f3a4.js","assets/asyncComputed.bd80460e.js","assets/CrudView.7764d20a.js","assets/icons.51140278.js","assets/index.eb4bb603.js","assets/Title.d85134a2.js","assets/Form.7ff4c526.js","assets/url.980858d4.js","assets/index.6a58cd86.js","assets/index.9fce520b.js","assets/index.4614c424.js","assets/index.dee2e461.js","assets/CrudView.396a8168.css","assets/index.3719e3b6.js"])}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>n(()=>import("./TableEditor.039fbf03.js"),["assets/TableEditor.039fbf03.js","assets/outputWidgets.3f6d0550.js","assets/outputWidgets.e6401203.css","assets/BaseLayout.18cbe6d3.js","assets/BaseLayout.2d5b030e.css","assets/tables.db3bfca4.js","assets/gateway.985e8615.js","assets/activeRecord.4331371e.js","assets/pubsub.0f07f3a4.js","assets/string.75fd4786.js","assets/asyncComputed.bd80460e.js","assets/popupNotifcation.6a39abbc.js","assets/CircularLoading.2945792d.js","assets/CircularLoading.f81b57b4.css","assets/icons.51140278.js","assets/index.dee2e461.js","assets/Title.d85134a2.js","assets/project.8480d50a.js","assets/organization.4093a69d.js","assets/index.4a6147e4.js","assets/TabPane.3fcb202a.js","assets/index.18a73dee.js","assets/index.3719e3b6.js","assets/TableEditor.3d42ae71.css"])},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>n(()=>import("./ConnectorEditor.1fe12150.js"),["assets/ConnectorEditor.1fe12150.js","assets/outputWidgets.3f6d0550.js","assets/outputWidgets.e6401203.css","assets/index.4a6147e4.js","assets/project.8480d50a.js","assets/gateway.985e8615.js","assets/activeRecord.4331371e.js","assets/pubsub.0f07f3a4.js","assets/organization.4093a69d.js","assets/connector.e8a4d334.js","assets/asyncComputed.bd80460e.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.1a93becf.js","assets/ant-design.003e27e5.js","assets/Title.d85134a2.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.18cbe6d3.js","assets/BaseLayout.2d5b030e.css","assets/TabPane.3fcb202a.js","assets/index.18a73dee.js","assets/index.dee2e461.js","assets/Form.7ff4c526.js","assets/index.4614c424.js","assets/index.3719e3b6.js","assets/ConnectorEditor.77a62f6e.css"])}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});u.beforeEach(async(o,t)=>{I(o,t);const e=R.getAuthor();if(!o.meta.allowUnauthenticated&&!e){await u.push({name:"login"});return}});export{P as A,d as E,R as a,u as r};
//# sourceMappingURL=router.f2ffb037.js.map
