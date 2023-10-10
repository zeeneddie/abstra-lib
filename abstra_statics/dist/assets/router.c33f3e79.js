var h=Object.defineProperty;var l=(o,t,e)=>t in o?h(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var c=(o,t,e)=>(l(o,typeof t!="symbol"?t+"":t,e),e);import{C as E}from"./Title.74cb802d.js";import{F as g,cZ as p,S as s,q as v,g as b,h as f,_ as n}from"./outputWidgets.5ced94d7.js";import{u as I}from"./index.48bbb941.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="dbfad666-8358-4521-8d39-02cab021b58d",o._sentryDebugIdIdentifier="sentry-dbid-dbfad666-8358-4521-8d39-02cab021b58d")}catch{}})();const P=g(E),w=()=>window.location.host.includes(".abstra.io"),y={authn:"/api/authn","cloud-api":"/api/cloud-api"},T={authn:"https://authn.abstra.cloud","cloud-api":"https://cloud-api.abstra.cloud"},_=o=>{const t="VITE_"+p.toUpper(p.snakeCase(o)),e={VITE_SENTRY_RELEASE:"a8655050b193350882d0760cee208cb65b7dc710",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(w()?y[o]:T[o])},d={authn:_("authn"),cloudApi:_("cloud-api")},a=class{async authenticate(t){try{const e=await fetch(`${d.authn}/authenticate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t})});if(!e.ok)throw new Error(await e.text());return null}catch(e){return e.message}}async verify(t,e){const i=await fetch(`${d.authn}/verify`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t,token:e})});if(!i.ok)throw new Error(await i.text());const m=await i.json();return this.saveJWT(m.jwt),this.getAuthor()}saveJWT(t){s.set(a.key,t)}getJWT(){return s.get(a.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=v(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){s.remove(a.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let r=a;c(r,"key","abstracloud:auth:jwt");const R=new r,u=b({history:f("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./WidgetPreview.a79114d9.js"),["assets/WidgetPreview.a79114d9.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.fdf790e0.js","assets/outputWidgets.5ced94d7.js","assets/outputWidgets.e6401203.css","assets/Steps.e0bb8b23.js","assets/Steps.998aa76d.css","assets/WidgetsFrame.a33f6bb5.js","assets/WidgetsFrame.0816a5f5.css","assets/WidgetPreview.86a24f90.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./Login.76cb384c.js"),["assets/Login.76cb384c.js","assets/outputWidgets.5ced94d7.js","assets/outputWidgets.e6401203.css","assets/icons.157295a5.js","assets/CircularLoading.ee1c51bf.js","assets/CircularLoading.f81b57b4.css","assets/member.87d26496.js","assets/gateway.06420003.js","assets/activeRecord.6ae8bce9.js","assets/pubsub.f395e26b.js","assets/WidgetsFrame.a33f6bb5.js","assets/WidgetsFrame.0816a5f5.css","assets/Title.74cb802d.js","assets/index.48bbb941.js","assets/Login.1f6a6209.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>n(()=>import("./Organizations.c055b779.js"),["assets/Organizations.c055b779.js","assets/outputWidgets.5ced94d7.js","assets/outputWidgets.e6401203.css","assets/icons.157295a5.js","assets/asyncComputed.6f213f9d.js","assets/organization.44bb6c7b.js","assets/gateway.06420003.js","assets/activeRecord.6ae8bce9.js","assets/pubsub.f395e26b.js","assets/index.13e3df9c.js","assets/Navbar.vue_vue_type_script_setup_true_lang.2a7c3217.js","assets/logo.084e5d7c.js","assets/index.8ea91ac5.js","assets/Title.74cb802d.js","assets/index.fe1573f2.js","assets/index.2a4a437f.js","assets/Navbar.f4a98ea3.css","assets/CrudView.1c9778e2.js","assets/Form.3717142f.js","assets/url.b91ad4a3.js","assets/index.54325f84.js","assets/index.d48bc6c3.js","assets/index.c946e10c.js","assets/CrudView.396a8168.css","assets/BaseLayout.a4af420b.js","assets/BaseLayout.2d5b030e.css","assets/ant-design.49bf0c8e.js","assets/index.48bbb941.js"])},{path:"/organizations/:organizationId",name:"organization",component:()=>n(()=>import("./Organization.79b4a710.js"),["assets/Organization.79b4a710.js","assets/Sidebar.d083b372.js","assets/outputWidgets.5ced94d7.js","assets/outputWidgets.e6401203.css","assets/icons.157295a5.js","assets/Tooltip.9bafe9e8.js","assets/Tooltip.63c4352e.css","assets/Sidebar.c72a98ac.css","assets/Navbar.vue_vue_type_script_setup_true_lang.2a7c3217.js","assets/logo.084e5d7c.js","assets/asyncComputed.6f213f9d.js","assets/index.8ea91ac5.js","assets/Title.74cb802d.js","assets/index.fe1573f2.js","assets/index.2a4a437f.js","assets/Navbar.f4a98ea3.css","assets/organization.44bb6c7b.js","assets/gateway.06420003.js","assets/activeRecord.6ae8bce9.js","assets/pubsub.f395e26b.js","assets/index.13e3df9c.js","assets/BaseLayout.a4af420b.js","assets/BaseLayout.2d5b030e.css","assets/index.48bbb941.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>n(()=>import("./Projects.a3f683aa.js"),["assets/Projects.a3f683aa.js","assets/outputWidgets.5ced94d7.js","assets/outputWidgets.e6401203.css","assets/icons.157295a5.js","assets/asyncComputed.6f213f9d.js","assets/project.ec0f904a.js","assets/gateway.06420003.js","assets/activeRecord.6ae8bce9.js","assets/pubsub.f395e26b.js","assets/organization.44bb6c7b.js","assets/index.13e3df9c.js","assets/CrudView.1c9778e2.js","assets/index.8ea91ac5.js","assets/Title.74cb802d.js","assets/Form.3717142f.js","assets/url.b91ad4a3.js","assets/index.54325f84.js","assets/index.d48bc6c3.js","assets/index.c946e10c.js","assets/index.fe1573f2.js","assets/CrudView.396a8168.css","assets/ant-design.49bf0c8e.js","assets/index.48bbb941.js"])},{path:"settings",name:"organization-settings",component:()=>n(()=>import("./OrganizationSettings.43d7405f.js"),["assets/OrganizationSettings.43d7405f.js","assets/outputWidgets.5ced94d7.js","assets/outputWidgets.e6401203.css"])},{path:"members",name:"members",component:()=>n(()=>import("./Members.61967f9b.js"),["assets/Members.61967f9b.js","assets/outputWidgets.5ced94d7.js","assets/outputWidgets.e6401203.css","assets/asyncComputed.6f213f9d.js","assets/member.87d26496.js","assets/gateway.06420003.js","assets/activeRecord.6ae8bce9.js","assets/pubsub.f395e26b.js","assets/index.13e3df9c.js","assets/CrudView.1c9778e2.js","assets/icons.157295a5.js","assets/index.8ea91ac5.js","assets/Title.74cb802d.js","assets/Form.3717142f.js","assets/url.b91ad4a3.js","assets/index.54325f84.js","assets/index.d48bc6c3.js","assets/index.c946e10c.js","assets/index.fe1573f2.js","assets/CrudView.396a8168.css","assets/index.48bbb941.js"])}]},{path:"/projects/:projectId",name:"project",component:()=>n(()=>import("./Project.6ca1bcdd.js"),["assets/Project.6ca1bcdd.js","assets/outputWidgets.5ced94d7.js","assets/outputWidgets.e6401203.css","assets/BaseLayout.a4af420b.js","assets/BaseLayout.2d5b030e.css","assets/asyncComputed.6f213f9d.js","assets/project.ec0f904a.js","assets/gateway.06420003.js","assets/activeRecord.6ae8bce9.js","assets/pubsub.f395e26b.js","assets/organization.44bb6c7b.js","assets/index.13e3df9c.js","assets/Navbar.vue_vue_type_script_setup_true_lang.2a7c3217.js","assets/logo.084e5d7c.js","assets/index.8ea91ac5.js","assets/Title.74cb802d.js","assets/index.fe1573f2.js","assets/index.2a4a437f.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.d083b372.js","assets/icons.157295a5.js","assets/Tooltip.9bafe9e8.js","assets/Tooltip.63c4352e.css","assets/Sidebar.c72a98ac.css","assets/index.48bbb941.js"]),redirect:{name:"builds"},children:[{path:"builds",name:"builds",component:()=>n(()=>import("./Builds.6762d7bb.js"),["assets/Builds.6762d7bb.js","assets/outputWidgets.5ced94d7.js","assets/outputWidgets.e6401203.css","assets/asyncComputed.6f213f9d.js","assets/project.ec0f904a.js","assets/gateway.06420003.js","assets/activeRecord.6ae8bce9.js","assets/pubsub.f395e26b.js","assets/build.7a384cc1.js","assets/index.13e3df9c.js","assets/string.cd43f06a.js","assets/icons.157295a5.js","assets/CrudView.1c9778e2.js","assets/index.8ea91ac5.js","assets/Title.74cb802d.js","assets/Form.3717142f.js","assets/url.b91ad4a3.js","assets/index.54325f84.js","assets/index.d48bc6c3.js","assets/index.c946e10c.js","assets/index.fe1573f2.js","assets/CrudView.396a8168.css","assets/index.b048d0fb.js","assets/index.48bbb941.js","assets/Builds.c65259ed.css"])},{path:"connectors",name:"connectors",component:()=>n(()=>import("./Connectors.5396dea2.js"),["assets/Connectors.5396dea2.js","assets/outputWidgets.5ced94d7.js","assets/outputWidgets.e6401203.css","assets/index.13e3df9c.js","assets/connector.8371083c.js","assets/activeRecord.6ae8bce9.js","assets/pubsub.f395e26b.js","assets/gateway.06420003.js","assets/asyncComputed.6f213f9d.js","assets/icons.157295a5.js","assets/CrudView.1c9778e2.js","assets/index.8ea91ac5.js","assets/Title.74cb802d.js","assets/Form.3717142f.js","assets/url.b91ad4a3.js","assets/index.54325f84.js","assets/index.d48bc6c3.js","assets/index.c946e10c.js","assets/index.fe1573f2.js","assets/CrudView.396a8168.css","assets/index.48bbb941.js"])},{path:"tables",name:"tables",component:()=>n(()=>import("./Tables.45c653f4.js"),["assets/Tables.45c653f4.js","assets/outputWidgets.5ced94d7.js","assets/outputWidgets.e6401203.css","assets/icons.157295a5.js","assets/asyncComputed.6f213f9d.js","assets/index.13e3df9c.js","assets/tables.4df54a6e.js","assets/gateway.06420003.js","assets/activeRecord.6ae8bce9.js","assets/pubsub.f395e26b.js","assets/string.cd43f06a.js","assets/CrudView.1c9778e2.js","assets/index.8ea91ac5.js","assets/Title.74cb802d.js","assets/Form.3717142f.js","assets/url.b91ad4a3.js","assets/index.54325f84.js","assets/index.d48bc6c3.js","assets/index.c946e10c.js","assets/index.fe1573f2.js","assets/CrudView.396a8168.css","assets/index.48bbb941.js"])},{path:"api-keys",name:"api-keys",component:()=>n(()=>import("./ApiKeys.9fe0c0e7.js"),["assets/ApiKeys.9fe0c0e7.js","assets/outputWidgets.5ced94d7.js","assets/outputWidgets.e6401203.css","assets/asyncComputed.6f213f9d.js","assets/project.ec0f904a.js","assets/gateway.06420003.js","assets/activeRecord.6ae8bce9.js","assets/pubsub.f395e26b.js","assets/member.87d26496.js","assets/index.13e3df9c.js","assets/icons.157295a5.js","assets/CrudView.1c9778e2.js","assets/index.8ea91ac5.js","assets/Title.74cb802d.js","assets/Form.3717142f.js","assets/url.b91ad4a3.js","assets/index.54325f84.js","assets/index.d48bc6c3.js","assets/index.c946e10c.js","assets/index.fe1573f2.js","assets/CrudView.396a8168.css","assets/index.b048d0fb.js","assets/index.48bbb941.js"])},{path:"logs",name:"logs",component:()=>n(()=>import("./Logs.0337e412.js"),["assets/Logs.0337e412.js","assets/outputWidgets.5ced94d7.js","assets/outputWidgets.e6401203.css","assets/build.7a384cc1.js","assets/gateway.06420003.js","assets/activeRecord.6ae8bce9.js","assets/pubsub.f395e26b.js","assets/index.13e3df9c.js","assets/asyncComputed.6f213f9d.js","assets/ant-design.49bf0c8e.js","assets/Title.74cb802d.js","assets/index.280a7171.js","assets/index.54325f84.js","assets/dayjs.d44490f2.js","assets/index.b048d0fb.js","assets/Form.3717142f.js","assets/index.8ea91ac5.js","assets/CollapsePanel.3e7dc058.js","assets/index.c946e10c.js","assets/index.fe1573f2.js","assets/index.48bbb941.js"])},{path:"settings",name:"project-settings",component:()=>n(()=>import("./ProjectSettings.baa4f96b.js"),["assets/ProjectSettings.baa4f96b.js","assets/asyncComputed.6f213f9d.js","assets/outputWidgets.5ced94d7.js","assets/outputWidgets.e6401203.css","assets/project.ec0f904a.js","assets/gateway.06420003.js","assets/activeRecord.6ae8bce9.js","assets/pubsub.f395e26b.js","assets/index.13e3df9c.js","assets/index.48bbb941.js","assets/Title.74cb802d.js","assets/index.8ea91ac5.js","assets/index.d48bc6c3.js","assets/Form.3717142f.js","assets/index.fe1573f2.js"])},{path:"env-vars",name:"env-vars",component:()=>n(()=>import("./EnvVars.9a3cfe2e.js"),["assets/EnvVars.9a3cfe2e.js","assets/outputWidgets.5ced94d7.js","assets/outputWidgets.e6401203.css","assets/asyncComputed.6f213f9d.js","assets/gateway.06420003.js","assets/activeRecord.6ae8bce9.js","assets/pubsub.f395e26b.js","assets/index.13e3df9c.js","assets/icons.157295a5.js","assets/CrudView.1c9778e2.js","assets/index.8ea91ac5.js","assets/Title.74cb802d.js","assets/Form.3717142f.js","assets/url.b91ad4a3.js","assets/index.54325f84.js","assets/index.d48bc6c3.js","assets/index.c946e10c.js","assets/index.fe1573f2.js","assets/CrudView.396a8168.css","assets/index.48bbb941.js"])},{path:"files",name:"files",component:()=>n(()=>import("./Files.2d5f4379.js"),["assets/Files.2d5f4379.js","assets/outputWidgets.5ced94d7.js","assets/outputWidgets.e6401203.css","assets/index.13e3df9c.js","assets/gateway.06420003.js","assets/activeRecord.6ae8bce9.js","assets/pubsub.f395e26b.js","assets/asyncComputed.6f213f9d.js","assets/CrudView.1c9778e2.js","assets/icons.157295a5.js","assets/index.8ea91ac5.js","assets/Title.74cb802d.js","assets/Form.3717142f.js","assets/url.b91ad4a3.js","assets/index.54325f84.js","assets/index.d48bc6c3.js","assets/index.c946e10c.js","assets/index.fe1573f2.js","assets/CrudView.396a8168.css","assets/index.48bbb941.js"])}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>n(()=>import("./TableEditor.eb1ebaeb.js"),["assets/TableEditor.eb1ebaeb.js","assets/outputWidgets.5ced94d7.js","assets/outputWidgets.e6401203.css","assets/BaseLayout.a4af420b.js","assets/BaseLayout.2d5b030e.css","assets/tables.4df54a6e.js","assets/gateway.06420003.js","assets/activeRecord.6ae8bce9.js","assets/pubsub.f395e26b.js","assets/string.cd43f06a.js","assets/asyncComputed.6f213f9d.js","assets/popupNotifcation.2a7681be.js","assets/CircularLoading.ee1c51bf.js","assets/CircularLoading.f81b57b4.css","assets/icons.157295a5.js","assets/index.fe1573f2.js","assets/Title.74cb802d.js","assets/project.ec0f904a.js","assets/organization.44bb6c7b.js","assets/index.13e3df9c.js","assets/TabPane.d9f04984.js","assets/index.2a4a437f.js","assets/index.48bbb941.js","assets/TableEditor.3d42ae71.css"])},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>n(()=>import("./ConnectorEditor.c75eef83.js"),["assets/ConnectorEditor.c75eef83.js","assets/outputWidgets.5ced94d7.js","assets/outputWidgets.e6401203.css","assets/index.13e3df9c.js","assets/project.ec0f904a.js","assets/gateway.06420003.js","assets/activeRecord.6ae8bce9.js","assets/pubsub.f395e26b.js","assets/organization.44bb6c7b.js","assets/connector.8371083c.js","assets/asyncComputed.6f213f9d.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.5baa60de.js","assets/ant-design.49bf0c8e.js","assets/Title.74cb802d.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.a4af420b.js","assets/BaseLayout.2d5b030e.css","assets/TabPane.d9f04984.js","assets/index.2a4a437f.js","assets/index.fe1573f2.js","assets/Form.3717142f.js","assets/index.c946e10c.js","assets/index.48bbb941.js","assets/ConnectorEditor.77a62f6e.css"])}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});u.beforeEach(async(o,t)=>{I(o,t);const e=R.getAuthor();if(!o.meta.allowUnauthenticated&&!e){await u.push({name:"login"});return}});export{P as A,d as E,R as a,u as r};
//# sourceMappingURL=router.c33f3e79.js.map
