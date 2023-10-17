var h=Object.defineProperty;var l=(o,t,e)=>t in o?h(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var c=(o,t,e)=>(l(o,typeof t!="symbol"?t+"":t,e),e);import{C as E}from"./Title.6ed5196f.js";import{F as f,cW as p,S as s,q as g,g as v,h as I,_ as n}from"./outputWidgets.50a32881.js";import{u as w}from"./index.c6d42cf5.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="dea002f2-f2fd-4e75-81fb-041588f35b3f",o._sentryDebugIdIdentifier="sentry-dbid-dea002f2-f2fd-4e75-81fb-041588f35b3f")}catch{}})();const P=f(E),b=()=>window.location.host.includes(".abstra.io"),y={authn:"/api/authn","cloud-api":"/api/cloud-api"},T={authn:"https://authn.abstra.cloud","cloud-api":"https://cloud-api.abstra.cloud"},_=o=>{const t="VITE_"+p.toUpper(p.snakeCase(o)),e={VITE_SENTRY_RELEASE:"1643164113d70aa5a4c421dc97cb0198c9fcd292",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(b()?y[o]:T[o])},d={authn:_("authn"),cloudApi:_("cloud-api")},a=class{async authenticate(t){try{const e=await fetch(`${d.authn}/authenticate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t})});if(!e.ok)throw new Error(await e.text());return null}catch(e){return e.message}}async verify(t,e){const i=await fetch(`${d.authn}/verify`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t,token:e})});if(!i.ok)throw new Error(await i.text());const m=await i.json();return this.saveJWT(m.jwt),this.getAuthor()}saveJWT(t){s.set(a.key,t)}getJWT(){return s.get(a.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=g(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){s.remove(a.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let r=a;c(r,"key","abstracloud:auth:jwt");const R=new r,u=v({history:I("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./WidgetPreview.4690df19.js"),["assets/WidgetPreview.4690df19.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.6587ad22.js","assets/outputWidgets.50a32881.js","assets/outputWidgets.f6e466ca.css","assets/Steps.909b3a04.js","assets/Steps.998aa76d.css","assets/WidgetsFrame.5058ad6d.js","assets/WidgetsFrame.0816a5f5.css","assets/WidgetPreview.86a24f90.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./Login.5bdbad55.js"),["assets/Login.5bdbad55.js","assets/outputWidgets.50a32881.js","assets/outputWidgets.f6e466ca.css","assets/icons.21c36b2d.js","assets/CircularLoading.c89fded4.js","assets/CircularLoading.f81b57b4.css","assets/member.719eba03.js","assets/gateway.557f1ef0.js","assets/activeRecord.a6d1caaf.js","assets/pubsub.a612a4ec.js","assets/WidgetsFrame.5058ad6d.js","assets/WidgetsFrame.0816a5f5.css","assets/Title.6ed5196f.js","assets/index.c6d42cf5.js","assets/Login.1f6a6209.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>n(()=>import("./Organizations.6efaa88d.js"),["assets/Organizations.6efaa88d.js","assets/outputWidgets.50a32881.js","assets/outputWidgets.f6e466ca.css","assets/icons.21c36b2d.js","assets/asyncComputed.b13ea8c8.js","assets/organization.51ac1db5.js","assets/gateway.557f1ef0.js","assets/activeRecord.a6d1caaf.js","assets/pubsub.a612a4ec.js","assets/columns.87749077.js","assets/index.f4ac7424.js","assets/Navbar.vue_vue_type_script_setup_true_lang.148a2b72.js","assets/logo.084e5d7c.js","assets/index.afd55904.js","assets/Title.6ed5196f.js","assets/index.9b89ff38.js","assets/index.c2109f24.js","assets/Navbar.f4a98ea3.css","assets/CrudView.2bb96676.js","assets/Form.eef121ef.js","assets/url.543483ec.js","assets/index.e0c93905.js","assets/index.30f77a12.js","assets/index.0fb677b8.js","assets/CrudView.396a8168.css","assets/BaseLayout.4ea40a14.js","assets/BaseLayout.2d5b030e.css","assets/ant-design.c3edd57c.js","assets/index.c6d42cf5.js"])},{path:"/organizations/:organizationId",name:"organization",component:()=>n(()=>import("./Organization.cccbc809.js"),["assets/Organization.cccbc809.js","assets/Sidebar.ee5655b1.js","assets/outputWidgets.50a32881.js","assets/outputWidgets.f6e466ca.css","assets/icons.21c36b2d.js","assets/Tooltip.42fd4c7b.js","assets/Tooltip.63c4352e.css","assets/Sidebar.c72a98ac.css","assets/Navbar.vue_vue_type_script_setup_true_lang.148a2b72.js","assets/logo.084e5d7c.js","assets/asyncComputed.b13ea8c8.js","assets/index.afd55904.js","assets/Title.6ed5196f.js","assets/index.9b89ff38.js","assets/index.c2109f24.js","assets/Navbar.f4a98ea3.css","assets/organization.51ac1db5.js","assets/gateway.557f1ef0.js","assets/activeRecord.a6d1caaf.js","assets/pubsub.a612a4ec.js","assets/columns.87749077.js","assets/index.f4ac7424.js","assets/BaseLayout.4ea40a14.js","assets/BaseLayout.2d5b030e.css","assets/index.c6d42cf5.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>n(()=>import("./Projects.d1049dbd.js"),["assets/Projects.d1049dbd.js","assets/outputWidgets.50a32881.js","assets/outputWidgets.f6e466ca.css","assets/icons.21c36b2d.js","assets/asyncComputed.b13ea8c8.js","assets/project.9a4bd643.js","assets/gateway.557f1ef0.js","assets/activeRecord.a6d1caaf.js","assets/pubsub.a612a4ec.js","assets/organization.51ac1db5.js","assets/columns.87749077.js","assets/index.f4ac7424.js","assets/CrudView.2bb96676.js","assets/index.afd55904.js","assets/Title.6ed5196f.js","assets/Form.eef121ef.js","assets/url.543483ec.js","assets/index.e0c93905.js","assets/index.30f77a12.js","assets/index.0fb677b8.js","assets/index.9b89ff38.js","assets/CrudView.396a8168.css","assets/ant-design.c3edd57c.js","assets/index.c6d42cf5.js"])},{path:"settings",name:"organization-settings",component:()=>n(()=>import("./OrganizationSettings.3ac28ae7.js"),["assets/OrganizationSettings.3ac28ae7.js","assets/outputWidgets.50a32881.js","assets/outputWidgets.f6e466ca.css"])},{path:"members",name:"members",component:()=>n(()=>import("./Members.8ced9ea5.js"),["assets/Members.8ced9ea5.js","assets/outputWidgets.50a32881.js","assets/outputWidgets.f6e466ca.css","assets/asyncComputed.b13ea8c8.js","assets/member.719eba03.js","assets/gateway.557f1ef0.js","assets/activeRecord.a6d1caaf.js","assets/pubsub.a612a4ec.js","assets/columns.87749077.js","assets/index.f4ac7424.js","assets/CrudView.2bb96676.js","assets/icons.21c36b2d.js","assets/index.afd55904.js","assets/Title.6ed5196f.js","assets/Form.eef121ef.js","assets/url.543483ec.js","assets/index.e0c93905.js","assets/index.30f77a12.js","assets/index.0fb677b8.js","assets/index.9b89ff38.js","assets/CrudView.396a8168.css","assets/index.c6d42cf5.js"])}]},{path:"/projects/:projectId",name:"project",component:()=>n(()=>import("./Project.2948792d.js"),["assets/Project.2948792d.js","assets/outputWidgets.50a32881.js","assets/outputWidgets.f6e466ca.css","assets/BaseLayout.4ea40a14.js","assets/BaseLayout.2d5b030e.css","assets/asyncComputed.b13ea8c8.js","assets/project.9a4bd643.js","assets/gateway.557f1ef0.js","assets/activeRecord.a6d1caaf.js","assets/pubsub.a612a4ec.js","assets/organization.51ac1db5.js","assets/columns.87749077.js","assets/index.f4ac7424.js","assets/Navbar.vue_vue_type_script_setup_true_lang.148a2b72.js","assets/logo.084e5d7c.js","assets/index.afd55904.js","assets/Title.6ed5196f.js","assets/index.9b89ff38.js","assets/index.c2109f24.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.ee5655b1.js","assets/icons.21c36b2d.js","assets/Tooltip.42fd4c7b.js","assets/Tooltip.63c4352e.css","assets/Sidebar.c72a98ac.css","assets/index.c6d42cf5.js"]),redirect:{name:"builds"},children:[{path:"builds",name:"builds",component:()=>n(()=>import("./Builds.76241e08.js"),["assets/Builds.76241e08.js","assets/outputWidgets.50a32881.js","assets/outputWidgets.f6e466ca.css","assets/asyncComputed.b13ea8c8.js","assets/project.9a4bd643.js","assets/gateway.557f1ef0.js","assets/activeRecord.a6d1caaf.js","assets/pubsub.a612a4ec.js","assets/build.03735abc.js","assets/columns.87749077.js","assets/index.f4ac7424.js","assets/string.df7840f3.js","assets/icons.21c36b2d.js","assets/CrudView.2bb96676.js","assets/index.afd55904.js","assets/Title.6ed5196f.js","assets/Form.eef121ef.js","assets/url.543483ec.js","assets/index.e0c93905.js","assets/index.30f77a12.js","assets/index.0fb677b8.js","assets/index.9b89ff38.js","assets/CrudView.396a8168.css","assets/index.b048d0fb.js","assets/index.c6d42cf5.js","assets/Builds.c65259ed.css"])},{path:"connectors",name:"connectors",component:()=>n(()=>import("./Connectors.d04428a0.js"),["assets/Connectors.d04428a0.js","assets/outputWidgets.50a32881.js","assets/outputWidgets.f6e466ca.css","assets/columns.87749077.js","assets/gateway.557f1ef0.js","assets/activeRecord.a6d1caaf.js","assets/pubsub.a612a4ec.js","assets/index.f4ac7424.js","assets/connector.756a5413.js","assets/asyncComputed.b13ea8c8.js","assets/icons.21c36b2d.js","assets/CrudView.2bb96676.js","assets/index.afd55904.js","assets/Title.6ed5196f.js","assets/Form.eef121ef.js","assets/url.543483ec.js","assets/index.e0c93905.js","assets/index.30f77a12.js","assets/index.0fb677b8.js","assets/index.9b89ff38.js","assets/CrudView.396a8168.css","assets/index.c6d42cf5.js"])},{path:"tables",name:"tables",component:()=>n(()=>import("./Tables.2180bf8f.js"),["assets/Tables.2180bf8f.js","assets/outputWidgets.50a32881.js","assets/outputWidgets.f6e466ca.css","assets/icons.21c36b2d.js","assets/asyncComputed.b13ea8c8.js","assets/columns.87749077.js","assets/gateway.557f1ef0.js","assets/activeRecord.a6d1caaf.js","assets/pubsub.a612a4ec.js","assets/index.f4ac7424.js","assets/tables.a86e907c.js","assets/string.df7840f3.js","assets/CrudView.2bb96676.js","assets/index.afd55904.js","assets/Title.6ed5196f.js","assets/Form.eef121ef.js","assets/url.543483ec.js","assets/index.e0c93905.js","assets/index.30f77a12.js","assets/index.0fb677b8.js","assets/index.9b89ff38.js","assets/CrudView.396a8168.css","assets/index.c6d42cf5.js"])},{path:"api-keys",name:"api-keys",component:()=>n(()=>import("./ApiKeys.c026c360.js"),["assets/ApiKeys.c026c360.js","assets/outputWidgets.50a32881.js","assets/outputWidgets.f6e466ca.css","assets/asyncComputed.b13ea8c8.js","assets/project.9a4bd643.js","assets/gateway.557f1ef0.js","assets/activeRecord.a6d1caaf.js","assets/pubsub.a612a4ec.js","assets/member.719eba03.js","assets/columns.87749077.js","assets/index.f4ac7424.js","assets/icons.21c36b2d.js","assets/CrudView.2bb96676.js","assets/index.afd55904.js","assets/Title.6ed5196f.js","assets/Form.eef121ef.js","assets/url.543483ec.js","assets/index.e0c93905.js","assets/index.30f77a12.js","assets/index.0fb677b8.js","assets/index.9b89ff38.js","assets/CrudView.396a8168.css","assets/index.b048d0fb.js","assets/index.c6d42cf5.js"])},{path:"logs",name:"logs",component:()=>n(()=>import("./Logs.c9c3eba3.js"),["assets/Logs.c9c3eba3.js","assets/outputWidgets.50a32881.js","assets/outputWidgets.f6e466ca.css","assets/build.03735abc.js","assets/gateway.557f1ef0.js","assets/activeRecord.a6d1caaf.js","assets/pubsub.a612a4ec.js","assets/columns.87749077.js","assets/index.f4ac7424.js","assets/asyncComputed.b13ea8c8.js","assets/ant-design.c3edd57c.js","assets/Title.6ed5196f.js","assets/index.4e7c154f.js","assets/index.e0c93905.js","assets/dayjs.48ea4727.js","assets/index.b048d0fb.js","assets/Form.eef121ef.js","assets/index.afd55904.js","assets/CollapsePanel.b9794b4e.js","assets/index.0fb677b8.js","assets/index.9b89ff38.js","assets/index.c6d42cf5.js"])},{path:"settings",name:"project-settings",component:()=>n(()=>import("./ProjectSettings.8d6806e5.js"),["assets/ProjectSettings.8d6806e5.js","assets/asyncComputed.b13ea8c8.js","assets/outputWidgets.50a32881.js","assets/outputWidgets.f6e466ca.css","assets/project.9a4bd643.js","assets/gateway.557f1ef0.js","assets/activeRecord.a6d1caaf.js","assets/pubsub.a612a4ec.js","assets/columns.87749077.js","assets/index.f4ac7424.js","assets/index.c6d42cf5.js","assets/Title.6ed5196f.js","assets/index.afd55904.js","assets/index.30f77a12.js","assets/Form.eef121ef.js","assets/index.9b89ff38.js"])},{path:"env-vars",name:"env-vars",component:()=>n(()=>import("./EnvVars.c08db656.js"),["assets/EnvVars.c08db656.js","assets/outputWidgets.50a32881.js","assets/outputWidgets.f6e466ca.css","assets/asyncComputed.b13ea8c8.js","assets/gateway.557f1ef0.js","assets/activeRecord.a6d1caaf.js","assets/pubsub.a612a4ec.js","assets/columns.87749077.js","assets/index.f4ac7424.js","assets/icons.21c36b2d.js","assets/CrudView.2bb96676.js","assets/index.afd55904.js","assets/Title.6ed5196f.js","assets/Form.eef121ef.js","assets/url.543483ec.js","assets/index.e0c93905.js","assets/index.30f77a12.js","assets/index.0fb677b8.js","assets/index.9b89ff38.js","assets/CrudView.396a8168.css","assets/index.c6d42cf5.js"])},{path:"files",name:"files",component:()=>n(()=>import("./Files.d51916d1.js"),["assets/Files.d51916d1.js","assets/outputWidgets.50a32881.js","assets/outputWidgets.f6e466ca.css","assets/columns.87749077.js","assets/gateway.557f1ef0.js","assets/activeRecord.a6d1caaf.js","assets/pubsub.a612a4ec.js","assets/index.f4ac7424.js","assets/asyncComputed.b13ea8c8.js","assets/CrudView.2bb96676.js","assets/icons.21c36b2d.js","assets/index.afd55904.js","assets/Title.6ed5196f.js","assets/Form.eef121ef.js","assets/url.543483ec.js","assets/index.e0c93905.js","assets/index.30f77a12.js","assets/index.0fb677b8.js","assets/index.9b89ff38.js","assets/CrudView.396a8168.css","assets/index.c6d42cf5.js"])}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>n(()=>import("./TableEditor.3dbe1948.js"),["assets/TableEditor.3dbe1948.js","assets/outputWidgets.50a32881.js","assets/outputWidgets.f6e466ca.css","assets/BaseLayout.4ea40a14.js","assets/BaseLayout.2d5b030e.css","assets/tables.a86e907c.js","assets/gateway.557f1ef0.js","assets/activeRecord.a6d1caaf.js","assets/pubsub.a612a4ec.js","assets/columns.87749077.js","assets/index.f4ac7424.js","assets/string.df7840f3.js","assets/asyncComputed.b13ea8c8.js","assets/popupNotifcation.47671146.js","assets/index.5cd89e0c.js","assets/index.9b89ff38.js","assets/Title.6ed5196f.js","assets/Form.eef121ef.js","assets/index.68c386c0.js","assets/icons.21c36b2d.js","assets/index.0fb677b8.js","assets/CircularLoading.c89fded4.js","assets/CircularLoading.f81b57b4.css","assets/project.9a4bd643.js","assets/organization.51ac1db5.js","assets/TabPane.226d96c9.js","assets/index.c2109f24.js","assets/index.c6d42cf5.js","assets/TableEditor.3e12aa3f.css"])},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>n(()=>import("./ConnectorEditor.20a44863.js"),["assets/ConnectorEditor.20a44863.js","assets/outputWidgets.50a32881.js","assets/outputWidgets.f6e466ca.css","assets/columns.87749077.js","assets/gateway.557f1ef0.js","assets/activeRecord.a6d1caaf.js","assets/pubsub.a612a4ec.js","assets/index.f4ac7424.js","assets/project.9a4bd643.js","assets/organization.51ac1db5.js","assets/connector.756a5413.js","assets/asyncComputed.b13ea8c8.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.e423e66e.js","assets/ant-design.c3edd57c.js","assets/Title.6ed5196f.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.4ea40a14.js","assets/BaseLayout.2d5b030e.css","assets/TabPane.226d96c9.js","assets/index.c2109f24.js","assets/index.9b89ff38.js","assets/Form.eef121ef.js","assets/index.0fb677b8.js","assets/index.c6d42cf5.js","assets/ConnectorEditor.77a62f6e.css"])}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});u.beforeEach(async(o,t)=>{w(o,t);const e=R.getAuthor();if(!o.meta.allowUnauthenticated&&!e){await u.push({name:"login"});return}});export{P as A,d as E,R as a,u as r};
//# sourceMappingURL=router.05c8f462.js.map
