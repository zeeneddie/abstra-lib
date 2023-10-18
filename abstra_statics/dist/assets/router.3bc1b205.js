var h=Object.defineProperty;var l=(o,t,e)=>t in o?h(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var c=(o,t,e)=>(l(o,typeof t!="symbol"?t+"":t,e),e);import{C as E}from"./Title.382247fb.js";import{E as f,cV as p,S as s,q as g,g as v,h as I,_ as n}from"./outputWidgets.397b3720.js";import{u as w}from"./index.06276212.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="909277ed-2cb5-4fdd-935f-1d03c07afe8d",o._sentryDebugIdIdentifier="sentry-dbid-909277ed-2cb5-4fdd-935f-1d03c07afe8d")}catch{}})();const P=f(E),b=()=>window.location.host.includes(".abstra.io"),y={authn:"/api/authn","cloud-api":"/api/cloud-api"},T={authn:"https://authn.abstra.cloud","cloud-api":"https://cloud-api.abstra.cloud"},_=o=>{const t="VITE_"+p.toUpper(p.snakeCase(o)),e={VITE_SENTRY_RELEASE:"c4a7a3cdf7bb051de92a92c24444f6692d916b6a",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(b()?y[o]:T[o])},d={authn:_("authn"),cloudApi:_("cloud-api")},a=class{async authenticate(t){try{const e=await fetch(`${d.authn}/authenticate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t})});if(!e.ok)throw new Error(await e.text());return null}catch(e){return e.message}}async verify(t,e){const i=await fetch(`${d.authn}/verify`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t,token:e})});if(!i.ok)throw new Error(await i.text());const m=await i.json();return this.saveJWT(m.jwt),this.getAuthor()}saveJWT(t){s.set(a.key,t)}getJWT(){return s.get(a.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=g(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){s.remove(a.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let r=a;c(r,"key","abstracloud:auth:jwt");const R=new r,u=v({history:I("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./WidgetPreview.88760cb8.js"),["assets/WidgetPreview.88760cb8.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.0b212a8d.js","assets/outputWidgets.397b3720.js","assets/outputWidgets.f6e466ca.css","assets/Steps.85b9af0a.js","assets/Steps.998aa76d.css","assets/WidgetsFrame.cb4cea4e.js","assets/WidgetsFrame.0816a5f5.css","assets/WidgetPreview.86a24f90.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./Login.aee3b8a3.js"),["assets/Login.aee3b8a3.js","assets/outputWidgets.397b3720.js","assets/outputWidgets.f6e466ca.css","assets/icons.5e65f599.js","assets/CircularLoading.2c694ce3.js","assets/CircularLoading.f81b57b4.css","assets/member.c18019ef.js","assets/gateway.b868389d.js","assets/activeRecord.6bb6b853.js","assets/pubsub.fe0f0397.js","assets/WidgetsFrame.cb4cea4e.js","assets/WidgetsFrame.0816a5f5.css","assets/Title.382247fb.js","assets/index.06276212.js","assets/Login.1f6a6209.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>n(()=>import("./Organizations.488a359d.js"),["assets/Organizations.488a359d.js","assets/outputWidgets.397b3720.js","assets/outputWidgets.f6e466ca.css","assets/icons.5e65f599.js","assets/asyncComputed.28fc9d36.js","assets/organization.28915124.js","assets/gateway.b868389d.js","assets/activeRecord.6bb6b853.js","assets/pubsub.fe0f0397.js","assets/columns.37df3c3d.js","assets/index.f4ac7424.js","assets/Navbar.vue_vue_type_script_setup_true_lang.8eb1ce41.js","assets/logo.084e5d7c.js","assets/index.19008df2.js","assets/Title.382247fb.js","assets/index.e12747aa.js","assets/index.65a47e55.js","assets/Navbar.f4a98ea3.css","assets/CrudView.77c1d16d.js","assets/Form.5ce50c8f.js","assets/url.53bc193a.js","assets/index.4acaedbb.js","assets/index.c9ea7155.js","assets/index.40ca2e79.js","assets/CrudView.396a8168.css","assets/BaseLayout.a83edf4c.js","assets/BaseLayout.2d5b030e.css","assets/ant-design.29edbf4a.js","assets/index.06276212.js"])},{path:"/organizations/:organizationId",name:"organization",component:()=>n(()=>import("./Organization.973d61f8.js"),["assets/Organization.973d61f8.js","assets/Sidebar.868a1fdc.js","assets/outputWidgets.397b3720.js","assets/outputWidgets.f6e466ca.css","assets/icons.5e65f599.js","assets/Tooltip.89f8e414.js","assets/Tooltip.63c4352e.css","assets/Sidebar.c72a98ac.css","assets/Navbar.vue_vue_type_script_setup_true_lang.8eb1ce41.js","assets/logo.084e5d7c.js","assets/asyncComputed.28fc9d36.js","assets/index.19008df2.js","assets/Title.382247fb.js","assets/index.e12747aa.js","assets/index.65a47e55.js","assets/Navbar.f4a98ea3.css","assets/organization.28915124.js","assets/gateway.b868389d.js","assets/activeRecord.6bb6b853.js","assets/pubsub.fe0f0397.js","assets/columns.37df3c3d.js","assets/index.f4ac7424.js","assets/BaseLayout.a83edf4c.js","assets/BaseLayout.2d5b030e.css","assets/index.06276212.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>n(()=>import("./Projects.8e5eda14.js"),["assets/Projects.8e5eda14.js","assets/outputWidgets.397b3720.js","assets/outputWidgets.f6e466ca.css","assets/icons.5e65f599.js","assets/asyncComputed.28fc9d36.js","assets/project.4918ea09.js","assets/gateway.b868389d.js","assets/activeRecord.6bb6b853.js","assets/pubsub.fe0f0397.js","assets/organization.28915124.js","assets/columns.37df3c3d.js","assets/index.f4ac7424.js","assets/CrudView.77c1d16d.js","assets/index.19008df2.js","assets/Title.382247fb.js","assets/Form.5ce50c8f.js","assets/url.53bc193a.js","assets/index.4acaedbb.js","assets/index.c9ea7155.js","assets/index.40ca2e79.js","assets/index.e12747aa.js","assets/CrudView.396a8168.css","assets/ant-design.29edbf4a.js","assets/index.06276212.js"])},{path:"settings",name:"organization-settings",component:()=>n(()=>import("./OrganizationSettings.98688eaa.js"),["assets/OrganizationSettings.98688eaa.js","assets/outputWidgets.397b3720.js","assets/outputWidgets.f6e466ca.css"])},{path:"members",name:"members",component:()=>n(()=>import("./Members.17729308.js"),["assets/Members.17729308.js","assets/outputWidgets.397b3720.js","assets/outputWidgets.f6e466ca.css","assets/asyncComputed.28fc9d36.js","assets/member.c18019ef.js","assets/gateway.b868389d.js","assets/activeRecord.6bb6b853.js","assets/pubsub.fe0f0397.js","assets/columns.37df3c3d.js","assets/index.f4ac7424.js","assets/CrudView.77c1d16d.js","assets/icons.5e65f599.js","assets/index.19008df2.js","assets/Title.382247fb.js","assets/Form.5ce50c8f.js","assets/url.53bc193a.js","assets/index.4acaedbb.js","assets/index.c9ea7155.js","assets/index.40ca2e79.js","assets/index.e12747aa.js","assets/CrudView.396a8168.css","assets/index.06276212.js"])}]},{path:"/projects/:projectId",name:"project",component:()=>n(()=>import("./Project.70977403.js"),["assets/Project.70977403.js","assets/outputWidgets.397b3720.js","assets/outputWidgets.f6e466ca.css","assets/BaseLayout.a83edf4c.js","assets/BaseLayout.2d5b030e.css","assets/asyncComputed.28fc9d36.js","assets/project.4918ea09.js","assets/gateway.b868389d.js","assets/activeRecord.6bb6b853.js","assets/pubsub.fe0f0397.js","assets/organization.28915124.js","assets/columns.37df3c3d.js","assets/index.f4ac7424.js","assets/Navbar.vue_vue_type_script_setup_true_lang.8eb1ce41.js","assets/logo.084e5d7c.js","assets/index.19008df2.js","assets/Title.382247fb.js","assets/index.e12747aa.js","assets/index.65a47e55.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.868a1fdc.js","assets/icons.5e65f599.js","assets/Tooltip.89f8e414.js","assets/Tooltip.63c4352e.css","assets/Sidebar.c72a98ac.css","assets/index.06276212.js"]),redirect:{name:"builds"},children:[{path:"builds",name:"builds",component:()=>n(()=>import("./Builds.af0b885d.js"),["assets/Builds.af0b885d.js","assets/outputWidgets.397b3720.js","assets/outputWidgets.f6e466ca.css","assets/asyncComputed.28fc9d36.js","assets/project.4918ea09.js","assets/gateway.b868389d.js","assets/activeRecord.6bb6b853.js","assets/pubsub.fe0f0397.js","assets/build.5b0469d4.js","assets/columns.37df3c3d.js","assets/index.f4ac7424.js","assets/string.f3e41ceb.js","assets/icons.5e65f599.js","assets/CrudView.77c1d16d.js","assets/index.19008df2.js","assets/Title.382247fb.js","assets/Form.5ce50c8f.js","assets/url.53bc193a.js","assets/index.4acaedbb.js","assets/index.c9ea7155.js","assets/index.40ca2e79.js","assets/index.e12747aa.js","assets/CrudView.396a8168.css","assets/index.b048d0fb.js","assets/index.06276212.js","assets/Builds.c65259ed.css"])},{path:"connectors",name:"connectors",component:()=>n(()=>import("./Connectors.ff8a87fe.js"),["assets/Connectors.ff8a87fe.js","assets/outputWidgets.397b3720.js","assets/outputWidgets.f6e466ca.css","assets/columns.37df3c3d.js","assets/gateway.b868389d.js","assets/activeRecord.6bb6b853.js","assets/pubsub.fe0f0397.js","assets/index.f4ac7424.js","assets/connector.df0706b4.js","assets/asyncComputed.28fc9d36.js","assets/icons.5e65f599.js","assets/CrudView.77c1d16d.js","assets/index.19008df2.js","assets/Title.382247fb.js","assets/Form.5ce50c8f.js","assets/url.53bc193a.js","assets/index.4acaedbb.js","assets/index.c9ea7155.js","assets/index.40ca2e79.js","assets/index.e12747aa.js","assets/CrudView.396a8168.css","assets/index.06276212.js"])},{path:"tables",name:"tables",component:()=>n(()=>import("./Tables.9b395483.js"),["assets/Tables.9b395483.js","assets/outputWidgets.397b3720.js","assets/outputWidgets.f6e466ca.css","assets/icons.5e65f599.js","assets/asyncComputed.28fc9d36.js","assets/columns.37df3c3d.js","assets/gateway.b868389d.js","assets/activeRecord.6bb6b853.js","assets/pubsub.fe0f0397.js","assets/index.f4ac7424.js","assets/tables.d75dd5b8.js","assets/string.f3e41ceb.js","assets/CrudView.77c1d16d.js","assets/index.19008df2.js","assets/Title.382247fb.js","assets/Form.5ce50c8f.js","assets/url.53bc193a.js","assets/index.4acaedbb.js","assets/index.c9ea7155.js","assets/index.40ca2e79.js","assets/index.e12747aa.js","assets/CrudView.396a8168.css","assets/index.06276212.js"])},{path:"api-keys",name:"api-keys",component:()=>n(()=>import("./ApiKeys.4098289f.js"),["assets/ApiKeys.4098289f.js","assets/outputWidgets.397b3720.js","assets/outputWidgets.f6e466ca.css","assets/asyncComputed.28fc9d36.js","assets/project.4918ea09.js","assets/gateway.b868389d.js","assets/activeRecord.6bb6b853.js","assets/pubsub.fe0f0397.js","assets/member.c18019ef.js","assets/columns.37df3c3d.js","assets/index.f4ac7424.js","assets/icons.5e65f599.js","assets/CrudView.77c1d16d.js","assets/index.19008df2.js","assets/Title.382247fb.js","assets/Form.5ce50c8f.js","assets/url.53bc193a.js","assets/index.4acaedbb.js","assets/index.c9ea7155.js","assets/index.40ca2e79.js","assets/index.e12747aa.js","assets/CrudView.396a8168.css","assets/index.b048d0fb.js","assets/index.06276212.js"])},{path:"logs",name:"logs",component:()=>n(()=>import("./Logs.dd77dbb9.js"),["assets/Logs.dd77dbb9.js","assets/outputWidgets.397b3720.js","assets/outputWidgets.f6e466ca.css","assets/build.5b0469d4.js","assets/gateway.b868389d.js","assets/activeRecord.6bb6b853.js","assets/pubsub.fe0f0397.js","assets/columns.37df3c3d.js","assets/index.f4ac7424.js","assets/asyncComputed.28fc9d36.js","assets/ant-design.29edbf4a.js","assets/Title.382247fb.js","assets/index.14368f49.js","assets/index.4acaedbb.js","assets/dayjs.ad6b0dcc.js","assets/index.b048d0fb.js","assets/Form.5ce50c8f.js","assets/index.19008df2.js","assets/CollapsePanel.fc6c100b.js","assets/index.40ca2e79.js","assets/index.e12747aa.js","assets/index.06276212.js"])},{path:"settings",name:"project-settings",component:()=>n(()=>import("./ProjectSettings.dca065b6.js"),["assets/ProjectSettings.dca065b6.js","assets/asyncComputed.28fc9d36.js","assets/outputWidgets.397b3720.js","assets/outputWidgets.f6e466ca.css","assets/project.4918ea09.js","assets/gateway.b868389d.js","assets/activeRecord.6bb6b853.js","assets/pubsub.fe0f0397.js","assets/columns.37df3c3d.js","assets/index.f4ac7424.js","assets/index.06276212.js","assets/Title.382247fb.js","assets/index.19008df2.js","assets/index.c9ea7155.js","assets/Form.5ce50c8f.js","assets/index.e12747aa.js"])},{path:"env-vars",name:"env-vars",component:()=>n(()=>import("./EnvVars.fd14b82a.js"),["assets/EnvVars.fd14b82a.js","assets/outputWidgets.397b3720.js","assets/outputWidgets.f6e466ca.css","assets/asyncComputed.28fc9d36.js","assets/gateway.b868389d.js","assets/activeRecord.6bb6b853.js","assets/pubsub.fe0f0397.js","assets/columns.37df3c3d.js","assets/index.f4ac7424.js","assets/icons.5e65f599.js","assets/CrudView.77c1d16d.js","assets/index.19008df2.js","assets/Title.382247fb.js","assets/Form.5ce50c8f.js","assets/url.53bc193a.js","assets/index.4acaedbb.js","assets/index.c9ea7155.js","assets/index.40ca2e79.js","assets/index.e12747aa.js","assets/CrudView.396a8168.css","assets/index.06276212.js"])},{path:"files",name:"files",component:()=>n(()=>import("./Files.c0f433d8.js"),["assets/Files.c0f433d8.js","assets/outputWidgets.397b3720.js","assets/outputWidgets.f6e466ca.css","assets/columns.37df3c3d.js","assets/gateway.b868389d.js","assets/activeRecord.6bb6b853.js","assets/pubsub.fe0f0397.js","assets/index.f4ac7424.js","assets/asyncComputed.28fc9d36.js","assets/CrudView.77c1d16d.js","assets/icons.5e65f599.js","assets/index.19008df2.js","assets/Title.382247fb.js","assets/Form.5ce50c8f.js","assets/url.53bc193a.js","assets/index.4acaedbb.js","assets/index.c9ea7155.js","assets/index.40ca2e79.js","assets/index.e12747aa.js","assets/CrudView.396a8168.css","assets/index.06276212.js"])}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>n(()=>import("./TableEditor.9cd7145b.js"),["assets/TableEditor.9cd7145b.js","assets/outputWidgets.397b3720.js","assets/outputWidgets.f6e466ca.css","assets/BaseLayout.a83edf4c.js","assets/BaseLayout.2d5b030e.css","assets/tables.d75dd5b8.js","assets/gateway.b868389d.js","assets/activeRecord.6bb6b853.js","assets/pubsub.fe0f0397.js","assets/columns.37df3c3d.js","assets/index.f4ac7424.js","assets/string.f3e41ceb.js","assets/asyncComputed.28fc9d36.js","assets/popupNotifcation.a8311e6c.js","assets/index.0c0c1078.js","assets/index.e12747aa.js","assets/Title.382247fb.js","assets/Form.5ce50c8f.js","assets/index.1a77ad01.js","assets/icons.5e65f599.js","assets/index.40ca2e79.js","assets/CircularLoading.2c694ce3.js","assets/CircularLoading.f81b57b4.css","assets/project.4918ea09.js","assets/organization.28915124.js","assets/TabPane.9487729b.js","assets/index.65a47e55.js","assets/index.06276212.js","assets/TableEditor.3e12aa3f.css"])},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>n(()=>import("./ConnectorEditor.a0fa66f1.js"),["assets/ConnectorEditor.a0fa66f1.js","assets/outputWidgets.397b3720.js","assets/outputWidgets.f6e466ca.css","assets/columns.37df3c3d.js","assets/gateway.b868389d.js","assets/activeRecord.6bb6b853.js","assets/pubsub.fe0f0397.js","assets/index.f4ac7424.js","assets/project.4918ea09.js","assets/organization.28915124.js","assets/connector.df0706b4.js","assets/asyncComputed.28fc9d36.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.004d0186.js","assets/ant-design.29edbf4a.js","assets/Title.382247fb.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.a83edf4c.js","assets/BaseLayout.2d5b030e.css","assets/TabPane.9487729b.js","assets/index.65a47e55.js","assets/index.e12747aa.js","assets/Form.5ce50c8f.js","assets/index.40ca2e79.js","assets/index.06276212.js","assets/ConnectorEditor.77a62f6e.css"])}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});u.beforeEach(async(o,t)=>{w(o,t);const e=R.getAuthor();if(!o.meta.allowUnauthenticated&&!e){await u.push({name:"login"});return}});export{P as A,d as E,R as a,u as r};
//# sourceMappingURL=router.3bc1b205.js.map
