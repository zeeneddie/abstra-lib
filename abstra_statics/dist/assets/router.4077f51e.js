var h=Object.defineProperty;var l=(o,t,e)=>t in o?h(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var c=(o,t,e)=>(l(o,typeof t!="symbol"?t+"":t,e),e);import{C as E}from"./Title.a8b8fdd6.js";import{E as g,cV as p,S as s,q as v,g as f,h as I,_ as n}from"./outputWidgets.1cf78234.js";import{u as b}from"./index.748edabf.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="795c4ccd-4261-417d-83cf-b83a6d526d3b",o._sentryDebugIdIdentifier="sentry-dbid-795c4ccd-4261-417d-83cf-b83a6d526d3b")}catch{}})();const P=g(E),w=()=>window.location.host.includes(".abstra.io"),y={authn:"/api/authn","cloud-api":"/api/cloud-api"},T={authn:"https://authn.abstra.cloud","cloud-api":"https://cloud-api.abstra.cloud"},_=o=>{const t="VITE_"+p.toUpper(p.snakeCase(o)),e={VITE_SENTRY_RELEASE:"84e34c7604613c124948dd119e63dcf4b6b53db3",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(w()?y[o]:T[o])},d={authn:_("authn"),cloudApi:_("cloud-api")},a=class{async authenticate(t){try{const e=await fetch(`${d.authn}/authenticate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t})});if(!e.ok)throw new Error(await e.text());return null}catch(e){return e.message}}async verify(t,e){const i=await fetch(`${d.authn}/verify`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t,token:e})});if(!i.ok)throw new Error(await i.text());const m=await i.json();return this.saveJWT(m.jwt),this.getAuthor()}saveJWT(t){s.set(a.key,t)}getJWT(){return s.get(a.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=v(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){s.remove(a.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let r=a;c(r,"key","abstracloud:auth:jwt");const R=new r,u=f({history:I("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./WidgetPreview.e9de4553.js"),["assets/WidgetPreview.e9de4553.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.313f1dc5.js","assets/outputWidgets.1cf78234.js","assets/outputWidgets.3bd31a7a.css","assets/Steps.f87bd50d.js","assets/Steps.998aa76d.css","assets/WidgetsFrame.d504dd89.js","assets/WidgetsFrame.0816a5f5.css","assets/WidgetPreview.86a24f90.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./Login.0231da40.js"),["assets/Login.0231da40.js","assets/outputWidgets.1cf78234.js","assets/outputWidgets.3bd31a7a.css","assets/icons.ba4d43de.js","assets/CircularLoading.84ea6d91.js","assets/CircularLoading.f81b57b4.css","assets/member.400ac443.js","assets/gateway.39b6f9d7.js","assets/activeRecord.1ee4e98a.js","assets/pubsub.a66a61fd.js","assets/WidgetsFrame.d504dd89.js","assets/WidgetsFrame.0816a5f5.css","assets/Title.a8b8fdd6.js","assets/index.748edabf.js","assets/Login.1f6a6209.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>n(()=>import("./Organizations.2f9128ff.js"),["assets/Organizations.2f9128ff.js","assets/outputWidgets.1cf78234.js","assets/outputWidgets.3bd31a7a.css","assets/icons.ba4d43de.js","assets/asyncComputed.513601fc.js","assets/organization.62f33bc8.js","assets/gateway.39b6f9d7.js","assets/activeRecord.1ee4e98a.js","assets/pubsub.a66a61fd.js","assets/columns.301c6458.js","assets/index.f4ac7424.js","assets/Navbar.vue_vue_type_script_setup_true_lang.8ea9895e.js","assets/logo.084e5d7c.js","assets/index.a7df5fa7.js","assets/Title.a8b8fdd6.js","assets/index.67188546.js","assets/index.c833051c.js","assets/Navbar.f4a98ea3.css","assets/CrudView.9f0a1020.js","assets/Form.5fb25f40.js","assets/url.18ee0e18.js","assets/index.427c7dc5.js","assets/index.4f30f3fe.js","assets/index.960f4655.js","assets/index.7a53699a.js","assets/CrudView.b7607004.css","assets/BaseLayout.eb5e397f.js","assets/BaseLayout.2d5b030e.css","assets/ant-design.b7f18845.js","assets/index.748edabf.js"])},{path:"/organizations/:organizationId",name:"organization",component:()=>n(()=>import("./Organization.f2bc97bd.js"),["assets/Organization.f2bc97bd.js","assets/Sidebar.6156abf4.js","assets/outputWidgets.1cf78234.js","assets/outputWidgets.3bd31a7a.css","assets/icons.ba4d43de.js","assets/Tooltip.2f3a807e.js","assets/Tooltip.63c4352e.css","assets/Sidebar.c72a98ac.css","assets/Navbar.vue_vue_type_script_setup_true_lang.8ea9895e.js","assets/logo.084e5d7c.js","assets/asyncComputed.513601fc.js","assets/index.a7df5fa7.js","assets/Title.a8b8fdd6.js","assets/index.67188546.js","assets/index.c833051c.js","assets/Navbar.f4a98ea3.css","assets/organization.62f33bc8.js","assets/gateway.39b6f9d7.js","assets/activeRecord.1ee4e98a.js","assets/pubsub.a66a61fd.js","assets/columns.301c6458.js","assets/index.f4ac7424.js","assets/BaseLayout.eb5e397f.js","assets/BaseLayout.2d5b030e.css","assets/index.748edabf.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>n(()=>import("./Projects.e2887087.js"),["assets/Projects.e2887087.js","assets/outputWidgets.1cf78234.js","assets/outputWidgets.3bd31a7a.css","assets/icons.ba4d43de.js","assets/asyncComputed.513601fc.js","assets/project.135110fa.js","assets/gateway.39b6f9d7.js","assets/activeRecord.1ee4e98a.js","assets/pubsub.a66a61fd.js","assets/organization.62f33bc8.js","assets/columns.301c6458.js","assets/index.f4ac7424.js","assets/CrudView.9f0a1020.js","assets/index.a7df5fa7.js","assets/Title.a8b8fdd6.js","assets/Form.5fb25f40.js","assets/url.18ee0e18.js","assets/index.427c7dc5.js","assets/index.4f30f3fe.js","assets/index.960f4655.js","assets/index.7a53699a.js","assets/index.67188546.js","assets/CrudView.b7607004.css","assets/ant-design.b7f18845.js","assets/index.748edabf.js"])},{path:"settings",name:"organization-settings",component:()=>n(()=>import("./OrganizationSettings.add0b755.js"),["assets/OrganizationSettings.add0b755.js","assets/outputWidgets.1cf78234.js","assets/outputWidgets.3bd31a7a.css"])},{path:"members",name:"members",component:()=>n(()=>import("./Members.42d82cac.js"),["assets/Members.42d82cac.js","assets/outputWidgets.1cf78234.js","assets/outputWidgets.3bd31a7a.css","assets/asyncComputed.513601fc.js","assets/member.400ac443.js","assets/gateway.39b6f9d7.js","assets/activeRecord.1ee4e98a.js","assets/pubsub.a66a61fd.js","assets/columns.301c6458.js","assets/index.f4ac7424.js","assets/CrudView.9f0a1020.js","assets/icons.ba4d43de.js","assets/index.a7df5fa7.js","assets/Title.a8b8fdd6.js","assets/Form.5fb25f40.js","assets/url.18ee0e18.js","assets/index.427c7dc5.js","assets/index.4f30f3fe.js","assets/index.960f4655.js","assets/index.7a53699a.js","assets/index.67188546.js","assets/CrudView.b7607004.css","assets/index.748edabf.js"])}]},{path:"/projects/:projectId",name:"project",component:()=>n(()=>import("./Project.b27a763b.js"),["assets/Project.b27a763b.js","assets/outputWidgets.1cf78234.js","assets/outputWidgets.3bd31a7a.css","assets/BaseLayout.eb5e397f.js","assets/BaseLayout.2d5b030e.css","assets/asyncComputed.513601fc.js","assets/project.135110fa.js","assets/gateway.39b6f9d7.js","assets/activeRecord.1ee4e98a.js","assets/pubsub.a66a61fd.js","assets/organization.62f33bc8.js","assets/columns.301c6458.js","assets/index.f4ac7424.js","assets/Navbar.vue_vue_type_script_setup_true_lang.8ea9895e.js","assets/logo.084e5d7c.js","assets/index.a7df5fa7.js","assets/Title.a8b8fdd6.js","assets/index.67188546.js","assets/index.c833051c.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.6156abf4.js","assets/icons.ba4d43de.js","assets/Tooltip.2f3a807e.js","assets/Tooltip.63c4352e.css","assets/Sidebar.c72a98ac.css","assets/index.748edabf.js"]),redirect:{name:"builds"},children:[{path:"builds",name:"builds",component:()=>n(()=>import("./Builds.15c7b691.js"),["assets/Builds.15c7b691.js","assets/outputWidgets.1cf78234.js","assets/outputWidgets.3bd31a7a.css","assets/asyncComputed.513601fc.js","assets/project.135110fa.js","assets/gateway.39b6f9d7.js","assets/activeRecord.1ee4e98a.js","assets/pubsub.a66a61fd.js","assets/build.ce913f67.js","assets/columns.301c6458.js","assets/index.f4ac7424.js","assets/string.cd321add.js","assets/icons.ba4d43de.js","assets/CrudView.9f0a1020.js","assets/index.a7df5fa7.js","assets/Title.a8b8fdd6.js","assets/Form.5fb25f40.js","assets/url.18ee0e18.js","assets/index.427c7dc5.js","assets/index.4f30f3fe.js","assets/index.960f4655.js","assets/index.7a53699a.js","assets/index.67188546.js","assets/CrudView.b7607004.css","assets/index.b048d0fb.js","assets/index.748edabf.js","assets/Builds.a841386a.css"])},{path:"connectors",name:"connectors",component:()=>n(()=>import("./Connectors.0df7a3d6.js"),["assets/Connectors.0df7a3d6.js","assets/outputWidgets.1cf78234.js","assets/outputWidgets.3bd31a7a.css","assets/columns.301c6458.js","assets/gateway.39b6f9d7.js","assets/activeRecord.1ee4e98a.js","assets/pubsub.a66a61fd.js","assets/index.f4ac7424.js","assets/connector.9bd6f2f2.js","assets/asyncComputed.513601fc.js","assets/icons.ba4d43de.js","assets/CrudView.9f0a1020.js","assets/index.a7df5fa7.js","assets/Title.a8b8fdd6.js","assets/Form.5fb25f40.js","assets/url.18ee0e18.js","assets/index.427c7dc5.js","assets/index.4f30f3fe.js","assets/index.960f4655.js","assets/index.7a53699a.js","assets/index.67188546.js","assets/CrudView.b7607004.css","assets/index.748edabf.js"])},{path:"tables",name:"tables",component:()=>n(()=>import("./Tables.ecd16719.js"),["assets/Tables.ecd16719.js","assets/outputWidgets.1cf78234.js","assets/outputWidgets.3bd31a7a.css","assets/icons.ba4d43de.js","assets/asyncComputed.513601fc.js","assets/columns.301c6458.js","assets/gateway.39b6f9d7.js","assets/activeRecord.1ee4e98a.js","assets/pubsub.a66a61fd.js","assets/index.f4ac7424.js","assets/tables.a7c4a20e.js","assets/string.cd321add.js","assets/CrudView.9f0a1020.js","assets/index.a7df5fa7.js","assets/Title.a8b8fdd6.js","assets/Form.5fb25f40.js","assets/url.18ee0e18.js","assets/index.427c7dc5.js","assets/index.4f30f3fe.js","assets/index.960f4655.js","assets/index.7a53699a.js","assets/index.67188546.js","assets/CrudView.b7607004.css","assets/index.748edabf.js"])},{path:"api-keys",name:"api-keys",component:()=>n(()=>import("./ApiKeys.c3ad43e9.js"),["assets/ApiKeys.c3ad43e9.js","assets/outputWidgets.1cf78234.js","assets/outputWidgets.3bd31a7a.css","assets/asyncComputed.513601fc.js","assets/project.135110fa.js","assets/gateway.39b6f9d7.js","assets/activeRecord.1ee4e98a.js","assets/pubsub.a66a61fd.js","assets/member.400ac443.js","assets/columns.301c6458.js","assets/index.f4ac7424.js","assets/icons.ba4d43de.js","assets/CrudView.9f0a1020.js","assets/index.a7df5fa7.js","assets/Title.a8b8fdd6.js","assets/Form.5fb25f40.js","assets/url.18ee0e18.js","assets/index.427c7dc5.js","assets/index.4f30f3fe.js","assets/index.960f4655.js","assets/index.7a53699a.js","assets/index.67188546.js","assets/CrudView.b7607004.css","assets/index.b048d0fb.js","assets/index.748edabf.js"])},{path:"logs",name:"logs",component:()=>n(()=>import("./Logs.9a8cf68d.js"),["assets/Logs.9a8cf68d.js","assets/outputWidgets.1cf78234.js","assets/outputWidgets.3bd31a7a.css","assets/build.ce913f67.js","assets/gateway.39b6f9d7.js","assets/activeRecord.1ee4e98a.js","assets/pubsub.a66a61fd.js","assets/columns.301c6458.js","assets/index.f4ac7424.js","assets/asyncComputed.513601fc.js","assets/ant-design.b7f18845.js","assets/Title.a8b8fdd6.js","assets/index.23f075a6.js","assets/index.4f30f3fe.js","assets/dayjs.bc450294.js","assets/index.b048d0fb.js","assets/Form.5fb25f40.js","assets/index.a7df5fa7.js","assets/CollapsePanel.beab295e.js","assets/index.7a53699a.js","assets/index.67188546.js","assets/index.748edabf.js"])},{path:"settings",name:"project-settings",component:()=>n(()=>import("./ProjectSettings.ff3eb5ed.js"),["assets/ProjectSettings.ff3eb5ed.js","assets/asyncComputed.513601fc.js","assets/outputWidgets.1cf78234.js","assets/outputWidgets.3bd31a7a.css","assets/project.135110fa.js","assets/gateway.39b6f9d7.js","assets/activeRecord.1ee4e98a.js","assets/pubsub.a66a61fd.js","assets/columns.301c6458.js","assets/index.f4ac7424.js","assets/Title.a8b8fdd6.js","assets/index.a7df5fa7.js","assets/index.960f4655.js","assets/Form.5fb25f40.js","assets/index.67188546.js","assets/index.748edabf.js"])},{path:"env-vars",name:"env-vars",component:()=>n(()=>import("./EnvVars.908ac3bd.js"),["assets/EnvVars.908ac3bd.js","assets/outputWidgets.1cf78234.js","assets/outputWidgets.3bd31a7a.css","assets/asyncComputed.513601fc.js","assets/gateway.39b6f9d7.js","assets/activeRecord.1ee4e98a.js","assets/pubsub.a66a61fd.js","assets/columns.301c6458.js","assets/index.f4ac7424.js","assets/icons.ba4d43de.js","assets/CrudView.9f0a1020.js","assets/index.a7df5fa7.js","assets/Title.a8b8fdd6.js","assets/Form.5fb25f40.js","assets/url.18ee0e18.js","assets/index.427c7dc5.js","assets/index.4f30f3fe.js","assets/index.960f4655.js","assets/index.7a53699a.js","assets/index.67188546.js","assets/CrudView.b7607004.css","assets/index.748edabf.js"])},{path:"files",name:"files",component:()=>n(()=>import("./Files.ffe475ba.js"),["assets/Files.ffe475ba.js","assets/outputWidgets.1cf78234.js","assets/outputWidgets.3bd31a7a.css","assets/columns.301c6458.js","assets/gateway.39b6f9d7.js","assets/activeRecord.1ee4e98a.js","assets/pubsub.a66a61fd.js","assets/index.f4ac7424.js","assets/asyncComputed.513601fc.js","assets/CrudView.9f0a1020.js","assets/icons.ba4d43de.js","assets/index.a7df5fa7.js","assets/Title.a8b8fdd6.js","assets/Form.5fb25f40.js","assets/url.18ee0e18.js","assets/index.427c7dc5.js","assets/index.4f30f3fe.js","assets/index.960f4655.js","assets/index.7a53699a.js","assets/index.67188546.js","assets/CrudView.b7607004.css","assets/index.748edabf.js"])}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>n(()=>import("./TableEditor.b9909017.js"),["assets/TableEditor.b9909017.js","assets/outputWidgets.1cf78234.js","assets/outputWidgets.3bd31a7a.css","assets/BaseLayout.eb5e397f.js","assets/BaseLayout.2d5b030e.css","assets/tables.a7c4a20e.js","assets/gateway.39b6f9d7.js","assets/activeRecord.1ee4e98a.js","assets/pubsub.a66a61fd.js","assets/columns.301c6458.js","assets/index.f4ac7424.js","assets/string.cd321add.js","assets/asyncComputed.513601fc.js","assets/popupNotifcation.add0b0b9.js","assets/index.245a5fcf.js","assets/index.67188546.js","assets/Title.a8b8fdd6.js","assets/Form.5fb25f40.js","assets/index.a48c5740.js","assets/icons.ba4d43de.js","assets/index.7a53699a.js","assets/CircularLoading.84ea6d91.js","assets/CircularLoading.f81b57b4.css","assets/project.135110fa.js","assets/organization.62f33bc8.js","assets/TabPane.389dade5.js","assets/index.c833051c.js","assets/index.748edabf.js","assets/TableEditor.3e12aa3f.css"])},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>n(()=>import("./ConnectorEditor.38f57279.js"),["assets/ConnectorEditor.38f57279.js","assets/outputWidgets.1cf78234.js","assets/outputWidgets.3bd31a7a.css","assets/columns.301c6458.js","assets/gateway.39b6f9d7.js","assets/activeRecord.1ee4e98a.js","assets/pubsub.a66a61fd.js","assets/index.f4ac7424.js","assets/project.135110fa.js","assets/organization.62f33bc8.js","assets/connector.9bd6f2f2.js","assets/asyncComputed.513601fc.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.5ad185ad.js","assets/ant-design.b7f18845.js","assets/Title.a8b8fdd6.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.eb5e397f.js","assets/BaseLayout.2d5b030e.css","assets/TabPane.389dade5.js","assets/index.c833051c.js","assets/index.67188546.js","assets/Form.5fb25f40.js","assets/index.7a53699a.js","assets/index.748edabf.js","assets/ConnectorEditor.77a62f6e.css"])}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});u.beforeEach(async(o,t)=>{b(o,t);const e=R.getAuthor();if(!o.meta.allowUnauthenticated&&!e){await u.push({name:"login"});return}});export{P as A,d as E,R as a,u as r};
//# sourceMappingURL=router.4077f51e.js.map
