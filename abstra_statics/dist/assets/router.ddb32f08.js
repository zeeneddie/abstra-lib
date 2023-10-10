var h=Object.defineProperty;var l=(o,t,e)=>t in o?h(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var c=(o,t,e)=>(l(o,typeof t!="symbol"?t+"":t,e),e);import{C as E}from"./Title.a0ce44ea.js";import{F as f,cZ as p,S as s,q as g,g as v,h as I,_ as n}from"./outputWidgets.903ef13f.js";import{u as b}from"./index.e5fe38b8.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="79c7f997-ed16-4683-b83b-e0c4076fa2aa",o._sentryDebugIdIdentifier="sentry-dbid-79c7f997-ed16-4683-b83b-e0c4076fa2aa")}catch{}})();const P=f(E),w=()=>window.location.host.includes(".abstra.io"),y={authn:"/api/authn","cloud-api":"/api/cloud-api"},T={authn:"https://authn.abstra.cloud","cloud-api":"https://cloud-api.abstra.cloud"},_=o=>{const t="VITE_"+p.toUpper(p.snakeCase(o)),e={VITE_SENTRY_RELEASE:"53b173ba83ca37a3fb743d4e72f2a302637a34af",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(w()?y[o]:T[o])},u={authn:_("authn"),cloudApi:_("cloud-api")},a=class{async authenticate(t){try{const e=await fetch(`${u.authn}/authenticate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t})});if(!e.ok)throw new Error(await e.text());return null}catch(e){return e.message}}async verify(t,e){const i=await fetch(`${u.authn}/verify`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t,token:e})});if(!i.ok)throw new Error(await i.text());const m=await i.json();return this.saveJWT(m.jwt),this.getAuthor()}saveJWT(t){s.set(a.key,t)}getJWT(){return s.get(a.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=g(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){s.remove(a.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let r=a;c(r,"key","abstracloud:auth:jwt");const R=new r,d=v({history:I("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./WidgetPreview.3573ab82.js"),["assets/WidgetPreview.3573ab82.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.ad9a3e11.js","assets/outputWidgets.903ef13f.js","assets/outputWidgets.e6401203.css","assets/Steps.86141059.js","assets/Steps.998aa76d.css","assets/WidgetsFrame.55190db5.js","assets/WidgetsFrame.0816a5f5.css","assets/WidgetPreview.86a24f90.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./Login.6a203f98.js"),["assets/Login.6a203f98.js","assets/outputWidgets.903ef13f.js","assets/outputWidgets.e6401203.css","assets/icons.c6b9d5b7.js","assets/CircularLoading.adfd7b04.js","assets/CircularLoading.f81b57b4.css","assets/member.74ca7c87.js","assets/gateway.a6a9ad01.js","assets/activeRecord.55ed0790.js","assets/pubsub.c9a1cd12.js","assets/WidgetsFrame.55190db5.js","assets/WidgetsFrame.0816a5f5.css","assets/Title.a0ce44ea.js","assets/index.e5fe38b8.js","assets/Login.1f6a6209.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>n(()=>import("./Organizations.09c2d73f.js"),["assets/Organizations.09c2d73f.js","assets/outputWidgets.903ef13f.js","assets/outputWidgets.e6401203.css","assets/icons.c6b9d5b7.js","assets/asyncComputed.c4e04ddf.js","assets/organization.3570e1df.js","assets/gateway.a6a9ad01.js","assets/activeRecord.55ed0790.js","assets/pubsub.c9a1cd12.js","assets/index.7a97ebf0.js","assets/Navbar.vue_vue_type_script_setup_true_lang.876e0b87.js","assets/logo.084e5d7c.js","assets/index.038e0c5b.js","assets/Title.a0ce44ea.js","assets/index.ff825c04.js","assets/index.33a83bfb.js","assets/Navbar.f4a98ea3.css","assets/CrudView.87fcb808.js","assets/Form.49dc913d.js","assets/url.08ed6687.js","assets/index.c70ecf50.js","assets/index.d93d8aa2.js","assets/index.abf1ee4c.js","assets/CrudView.396a8168.css","assets/BaseLayout.206b37c4.js","assets/BaseLayout.2d5b030e.css","assets/ant-design.6476f34e.js","assets/index.e5fe38b8.js"])},{path:"/organizations/:organizationId",name:"organization",component:()=>n(()=>import("./Organization.9a00a551.js"),["assets/Organization.9a00a551.js","assets/Sidebar.14903d99.js","assets/outputWidgets.903ef13f.js","assets/outputWidgets.e6401203.css","assets/icons.c6b9d5b7.js","assets/Tooltip.9897857a.js","assets/Tooltip.63c4352e.css","assets/Sidebar.c72a98ac.css","assets/Navbar.vue_vue_type_script_setup_true_lang.876e0b87.js","assets/logo.084e5d7c.js","assets/asyncComputed.c4e04ddf.js","assets/index.038e0c5b.js","assets/Title.a0ce44ea.js","assets/index.ff825c04.js","assets/index.33a83bfb.js","assets/Navbar.f4a98ea3.css","assets/organization.3570e1df.js","assets/gateway.a6a9ad01.js","assets/activeRecord.55ed0790.js","assets/pubsub.c9a1cd12.js","assets/index.7a97ebf0.js","assets/BaseLayout.206b37c4.js","assets/BaseLayout.2d5b030e.css","assets/index.e5fe38b8.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>n(()=>import("./Projects.5e8bb1e2.js"),["assets/Projects.5e8bb1e2.js","assets/outputWidgets.903ef13f.js","assets/outputWidgets.e6401203.css","assets/icons.c6b9d5b7.js","assets/asyncComputed.c4e04ddf.js","assets/project.f7671242.js","assets/gateway.a6a9ad01.js","assets/activeRecord.55ed0790.js","assets/pubsub.c9a1cd12.js","assets/organization.3570e1df.js","assets/index.7a97ebf0.js","assets/CrudView.87fcb808.js","assets/index.038e0c5b.js","assets/Title.a0ce44ea.js","assets/Form.49dc913d.js","assets/url.08ed6687.js","assets/index.c70ecf50.js","assets/index.d93d8aa2.js","assets/index.abf1ee4c.js","assets/index.ff825c04.js","assets/CrudView.396a8168.css","assets/ant-design.6476f34e.js","assets/index.e5fe38b8.js"])},{path:"settings",name:"organization-settings",component:()=>n(()=>import("./OrganizationSettings.a1a8f264.js"),["assets/OrganizationSettings.a1a8f264.js","assets/outputWidgets.903ef13f.js","assets/outputWidgets.e6401203.css"])},{path:"members",name:"members",component:()=>n(()=>import("./Members.5bef5d54.js"),["assets/Members.5bef5d54.js","assets/outputWidgets.903ef13f.js","assets/outputWidgets.e6401203.css","assets/asyncComputed.c4e04ddf.js","assets/member.74ca7c87.js","assets/gateway.a6a9ad01.js","assets/activeRecord.55ed0790.js","assets/pubsub.c9a1cd12.js","assets/index.7a97ebf0.js","assets/CrudView.87fcb808.js","assets/icons.c6b9d5b7.js","assets/index.038e0c5b.js","assets/Title.a0ce44ea.js","assets/Form.49dc913d.js","assets/url.08ed6687.js","assets/index.c70ecf50.js","assets/index.d93d8aa2.js","assets/index.abf1ee4c.js","assets/index.ff825c04.js","assets/CrudView.396a8168.css","assets/index.e5fe38b8.js"])}]},{path:"/projects/:projectId",name:"project",component:()=>n(()=>import("./Project.0b471363.js"),["assets/Project.0b471363.js","assets/outputWidgets.903ef13f.js","assets/outputWidgets.e6401203.css","assets/BaseLayout.206b37c4.js","assets/BaseLayout.2d5b030e.css","assets/asyncComputed.c4e04ddf.js","assets/project.f7671242.js","assets/gateway.a6a9ad01.js","assets/activeRecord.55ed0790.js","assets/pubsub.c9a1cd12.js","assets/organization.3570e1df.js","assets/index.7a97ebf0.js","assets/Navbar.vue_vue_type_script_setup_true_lang.876e0b87.js","assets/logo.084e5d7c.js","assets/index.038e0c5b.js","assets/Title.a0ce44ea.js","assets/index.ff825c04.js","assets/index.33a83bfb.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.14903d99.js","assets/icons.c6b9d5b7.js","assets/Tooltip.9897857a.js","assets/Tooltip.63c4352e.css","assets/Sidebar.c72a98ac.css","assets/index.e5fe38b8.js"]),redirect:{name:"builds"},children:[{path:"builds",name:"builds",component:()=>n(()=>import("./Builds.5e606b38.js"),["assets/Builds.5e606b38.js","assets/outputWidgets.903ef13f.js","assets/outputWidgets.e6401203.css","assets/asyncComputed.c4e04ddf.js","assets/project.f7671242.js","assets/gateway.a6a9ad01.js","assets/activeRecord.55ed0790.js","assets/pubsub.c9a1cd12.js","assets/build.562a7cae.js","assets/index.7a97ebf0.js","assets/string.82fbc777.js","assets/icons.c6b9d5b7.js","assets/CrudView.87fcb808.js","assets/index.038e0c5b.js","assets/Title.a0ce44ea.js","assets/Form.49dc913d.js","assets/url.08ed6687.js","assets/index.c70ecf50.js","assets/index.d93d8aa2.js","assets/index.abf1ee4c.js","assets/index.ff825c04.js","assets/CrudView.396a8168.css","assets/index.b048d0fb.js","assets/index.e5fe38b8.js","assets/Builds.c65259ed.css"])},{path:"connectors",name:"connectors",component:()=>n(()=>import("./Connectors.b3b466aa.js"),["assets/Connectors.b3b466aa.js","assets/outputWidgets.903ef13f.js","assets/outputWidgets.e6401203.css","assets/index.7a97ebf0.js","assets/connector.804f7629.js","assets/activeRecord.55ed0790.js","assets/pubsub.c9a1cd12.js","assets/gateway.a6a9ad01.js","assets/asyncComputed.c4e04ddf.js","assets/icons.c6b9d5b7.js","assets/CrudView.87fcb808.js","assets/index.038e0c5b.js","assets/Title.a0ce44ea.js","assets/Form.49dc913d.js","assets/url.08ed6687.js","assets/index.c70ecf50.js","assets/index.d93d8aa2.js","assets/index.abf1ee4c.js","assets/index.ff825c04.js","assets/CrudView.396a8168.css","assets/index.e5fe38b8.js"])},{path:"tables",name:"tables",component:()=>n(()=>import("./Tables.31eacda9.js"),["assets/Tables.31eacda9.js","assets/outputWidgets.903ef13f.js","assets/outputWidgets.e6401203.css","assets/icons.c6b9d5b7.js","assets/asyncComputed.c4e04ddf.js","assets/index.7a97ebf0.js","assets/tables.6d301f97.js","assets/gateway.a6a9ad01.js","assets/activeRecord.55ed0790.js","assets/pubsub.c9a1cd12.js","assets/string.82fbc777.js","assets/CrudView.87fcb808.js","assets/index.038e0c5b.js","assets/Title.a0ce44ea.js","assets/Form.49dc913d.js","assets/url.08ed6687.js","assets/index.c70ecf50.js","assets/index.d93d8aa2.js","assets/index.abf1ee4c.js","assets/index.ff825c04.js","assets/CrudView.396a8168.css","assets/index.e5fe38b8.js"])},{path:"api-keys",name:"api-keys",component:()=>n(()=>import("./ApiKeys.c64ca504.js"),["assets/ApiKeys.c64ca504.js","assets/outputWidgets.903ef13f.js","assets/outputWidgets.e6401203.css","assets/asyncComputed.c4e04ddf.js","assets/project.f7671242.js","assets/gateway.a6a9ad01.js","assets/activeRecord.55ed0790.js","assets/pubsub.c9a1cd12.js","assets/member.74ca7c87.js","assets/index.7a97ebf0.js","assets/icons.c6b9d5b7.js","assets/CrudView.87fcb808.js","assets/index.038e0c5b.js","assets/Title.a0ce44ea.js","assets/Form.49dc913d.js","assets/url.08ed6687.js","assets/index.c70ecf50.js","assets/index.d93d8aa2.js","assets/index.abf1ee4c.js","assets/index.ff825c04.js","assets/CrudView.396a8168.css","assets/index.b048d0fb.js","assets/index.e5fe38b8.js"])},{path:"logs",name:"logs",component:()=>n(()=>import("./Logs.f9eb21fb.js"),["assets/Logs.f9eb21fb.js","assets/outputWidgets.903ef13f.js","assets/outputWidgets.e6401203.css","assets/build.562a7cae.js","assets/gateway.a6a9ad01.js","assets/activeRecord.55ed0790.js","assets/pubsub.c9a1cd12.js","assets/index.7a97ebf0.js","assets/asyncComputed.c4e04ddf.js","assets/ant-design.6476f34e.js","assets/Title.a0ce44ea.js","assets/index.a56b7194.js","assets/index.c70ecf50.js","assets/dayjs.5738d982.js","assets/index.b048d0fb.js","assets/Form.49dc913d.js","assets/index.038e0c5b.js","assets/CollapsePanel.51ba056d.js","assets/index.abf1ee4c.js","assets/index.ff825c04.js","assets/index.e5fe38b8.js"])},{path:"settings",name:"project-settings",component:()=>n(()=>import("./ProjectSettings.2baf1c85.js"),["assets/ProjectSettings.2baf1c85.js","assets/asyncComputed.c4e04ddf.js","assets/outputWidgets.903ef13f.js","assets/outputWidgets.e6401203.css","assets/project.f7671242.js","assets/gateway.a6a9ad01.js","assets/activeRecord.55ed0790.js","assets/pubsub.c9a1cd12.js","assets/index.7a97ebf0.js","assets/index.e5fe38b8.js","assets/Title.a0ce44ea.js","assets/index.038e0c5b.js","assets/index.d93d8aa2.js","assets/Form.49dc913d.js","assets/index.ff825c04.js"])},{path:"env-vars",name:"env-vars",component:()=>n(()=>import("./EnvVars.140bb853.js"),["assets/EnvVars.140bb853.js","assets/outputWidgets.903ef13f.js","assets/outputWidgets.e6401203.css","assets/asyncComputed.c4e04ddf.js","assets/gateway.a6a9ad01.js","assets/activeRecord.55ed0790.js","assets/pubsub.c9a1cd12.js","assets/index.7a97ebf0.js","assets/icons.c6b9d5b7.js","assets/CrudView.87fcb808.js","assets/index.038e0c5b.js","assets/Title.a0ce44ea.js","assets/Form.49dc913d.js","assets/url.08ed6687.js","assets/index.c70ecf50.js","assets/index.d93d8aa2.js","assets/index.abf1ee4c.js","assets/index.ff825c04.js","assets/CrudView.396a8168.css","assets/index.e5fe38b8.js"])},{path:"files",name:"files",component:()=>n(()=>import("./Files.e57556ca.js"),["assets/Files.e57556ca.js","assets/outputWidgets.903ef13f.js","assets/outputWidgets.e6401203.css","assets/index.7a97ebf0.js","assets/gateway.a6a9ad01.js","assets/activeRecord.55ed0790.js","assets/pubsub.c9a1cd12.js","assets/asyncComputed.c4e04ddf.js","assets/CrudView.87fcb808.js","assets/icons.c6b9d5b7.js","assets/index.038e0c5b.js","assets/Title.a0ce44ea.js","assets/Form.49dc913d.js","assets/url.08ed6687.js","assets/index.c70ecf50.js","assets/index.d93d8aa2.js","assets/index.abf1ee4c.js","assets/index.ff825c04.js","assets/CrudView.396a8168.css","assets/index.e5fe38b8.js"])}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>n(()=>import("./TableEditor.ef82d24e.js"),["assets/TableEditor.ef82d24e.js","assets/outputWidgets.903ef13f.js","assets/outputWidgets.e6401203.css","assets/BaseLayout.206b37c4.js","assets/BaseLayout.2d5b030e.css","assets/tables.6d301f97.js","assets/gateway.a6a9ad01.js","assets/activeRecord.55ed0790.js","assets/pubsub.c9a1cd12.js","assets/string.82fbc777.js","assets/asyncComputed.c4e04ddf.js","assets/popupNotifcation.aeec7ea3.js","assets/CircularLoading.adfd7b04.js","assets/CircularLoading.f81b57b4.css","assets/icons.c6b9d5b7.js","assets/index.ff825c04.js","assets/Title.a0ce44ea.js","assets/project.f7671242.js","assets/organization.3570e1df.js","assets/index.7a97ebf0.js","assets/TabPane.a0a5d077.js","assets/index.33a83bfb.js","assets/index.e5fe38b8.js","assets/TableEditor.3d42ae71.css"])},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>n(()=>import("./ConnectorEditor.92d701f9.js"),["assets/ConnectorEditor.92d701f9.js","assets/outputWidgets.903ef13f.js","assets/outputWidgets.e6401203.css","assets/index.7a97ebf0.js","assets/project.f7671242.js","assets/gateway.a6a9ad01.js","assets/activeRecord.55ed0790.js","assets/pubsub.c9a1cd12.js","assets/organization.3570e1df.js","assets/connector.804f7629.js","assets/asyncComputed.c4e04ddf.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.69262f1d.js","assets/ant-design.6476f34e.js","assets/Title.a0ce44ea.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.206b37c4.js","assets/BaseLayout.2d5b030e.css","assets/TabPane.a0a5d077.js","assets/index.33a83bfb.js","assets/index.ff825c04.js","assets/Form.49dc913d.js","assets/index.abf1ee4c.js","assets/index.e5fe38b8.js","assets/ConnectorEditor.77a62f6e.css"])}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});d.beforeEach(async(o,t)=>{b(o,t);const e=R.getAuthor();if(!o.meta.allowUnauthenticated&&!e){await d.push({name:"login"});return}});export{P as A,u as E,R as a,d as r};
//# sourceMappingURL=router.ddb32f08.js.map
