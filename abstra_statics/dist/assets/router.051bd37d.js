import{C as i,R as _}from"./FormItem.9941e947.js";import{D as a,g as p,h as m,_ as e}from"./outputWidgets.c7c3593b.js";import{a as s,T as c}from"./authorManager.33208873.js";import{u as d}from"./index.50d90398.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="a67d841f-e7cb-4561-9073-b5e814cbc573",t._sentryDebugIdIdentifier="sentry-dbid-a67d841f-e7cb-4561-9073-b5e814cbc573")}catch{}})();const v=a(i),I=a(_),r=p({history:m("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>e(()=>import("./WidgetPreview.b262e968.js"),["assets/WidgetPreview.b262e968.js","assets/ActionButton.cfebd2c7.js","assets/outputWidgets.c7c3593b.js","assets/outputWidgets.3c848cd5.css","assets/ActionButton.f74e60ec.css","assets/WidgetsFrame.ec8cb712.js","assets/WidgetsFrame.97ae601d.css","assets/WidgetPreview.2be4ed12.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>e(()=>import("./Login.f7c385e4.js"),["assets/Login.f7c385e4.js","assets/outputWidgets.c7c3593b.js","assets/outputWidgets.3c848cd5.css","assets/member.11df63cd.js","assets/gateway.94d6767e.js","assets/authorManager.33208873.js","assets/icons.e912a40c.js","assets/CircularLoading.7f60da51.js","assets/CircularLoading.f81b57b4.css","assets/WidgetsFrame.ec8cb712.js","assets/WidgetsFrame.97ae601d.css","assets/Login.f7d5edc1.css"])},{path:"/api-key",name:"api-key",component:()=>e(()=>import("./ReturnApiKey.1d44d981.js"),["assets/ReturnApiKey.1d44d981.js","assets/outputWidgets.c7c3593b.js","assets/outputWidgets.3c848cd5.css","assets/authorManager.33208873.js","assets/index.640c3418.js","assets/index.cf4c23b9.js","assets/record.b6e0d210.js","assets/pubsub.a1271b13.js","assets/gateway.94d6767e.js","assets/apiKey.bd7e4c74.js","assets/project.95833ddb.js","assets/organization.1981f198.js","assets/asyncComputed.87d89e82.js","assets/Title.47031f69.js","assets/Text.1c53905c.js","assets/FormItem.9941e947.js","assets/hasIn.f4bb54d3.js","assets/Form.5652ed9b.js","assets/index.6a297772.js","assets/ReturnApiKey.909cd622.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>e(()=>import("./Organizations.ec914379.js"),["assets/Organizations.ec914379.js","assets/outputWidgets.c7c3593b.js","assets/outputWidgets.3c848cd5.css","assets/icons.e912a40c.js","assets/asyncComputed.87d89e82.js","assets/authorManager.33208873.js","assets/index.640c3418.js","assets/index.cf4c23b9.js","assets/record.b6e0d210.js","assets/pubsub.a1271b13.js","assets/gateway.94d6767e.js","assets/organization.1981f198.js","assets/Navbar.vue_vue_type_script_setup_true_lang.78b85644.js","assets/logo.084e5d7c.js","assets/Text.1c53905c.js","assets/index.ec294f58.js","assets/Navbar.f4a98ea3.css","assets/CrudView.b146ef3d.js","assets/Title.47031f69.js","assets/FormItem.9941e947.js","assets/hasIn.f4bb54d3.js","assets/Form.5652ed9b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.252f0a18.js","assets/url.03aeeb48.js","assets/index.6a297772.js","assets/index.26b290e3.js","assets/index.03af204f.js","assets/CrudView.ec0f092c.css","assets/BaseLayout.f0c6220f.js","assets/BaseLayout.881bfa61.css","assets/ant-design.41fde510.js","assets/index.27c03e11.js","assets/index.50d90398.js"])},{path:"/organizations/:organizationId",name:"organization",component:()=>e(()=>import("./Organization.385e87c5.js"),["assets/Organization.385e87c5.js","assets/Sidebar.vue_vue_type_script_setup_true_lang.5bfe3d90.js","assets/outputWidgets.c7c3593b.js","assets/outputWidgets.3c848cd5.css","assets/icons.e912a40c.js","assets/index.26b290e3.js","assets/Sidebar.dcc9f92a.css","assets/Navbar.vue_vue_type_script_setup_true_lang.78b85644.js","assets/logo.084e5d7c.js","assets/authorManager.33208873.js","assets/asyncComputed.87d89e82.js","assets/Text.1c53905c.js","assets/index.ec294f58.js","assets/Navbar.f4a98ea3.css","assets/index.640c3418.js","assets/index.cf4c23b9.js","assets/record.b6e0d210.js","assets/pubsub.a1271b13.js","assets/gateway.94d6767e.js","assets/organization.1981f198.js","assets/BaseLayout.f0c6220f.js","assets/BaseLayout.881bfa61.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>e(()=>import("./Projects.2f5d236c.js"),["assets/Projects.2f5d236c.js","assets/outputWidgets.c7c3593b.js","assets/outputWidgets.3c848cd5.css","assets/icons.e912a40c.js","assets/asyncComputed.87d89e82.js","assets/authorManager.33208873.js","assets/index.640c3418.js","assets/index.cf4c23b9.js","assets/record.b6e0d210.js","assets/pubsub.a1271b13.js","assets/gateway.94d6767e.js","assets/project.95833ddb.js","assets/organization.1981f198.js","assets/CrudView.b146ef3d.js","assets/Title.47031f69.js","assets/Text.1c53905c.js","assets/FormItem.9941e947.js","assets/hasIn.f4bb54d3.js","assets/Form.5652ed9b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.252f0a18.js","assets/url.03aeeb48.js","assets/index.6a297772.js","assets/index.26b290e3.js","assets/index.03af204f.js","assets/CrudView.ec0f092c.css","assets/ant-design.41fde510.js","assets/index.27c03e11.js","assets/index.50d90398.js"])},{path:"settings",name:"organization-settings",component:()=>e(()=>import("./OrganizationSettings.9bb58579.js"),["assets/OrganizationSettings.9bb58579.js","assets/outputWidgets.c7c3593b.js","assets/outputWidgets.3c848cd5.css"])},{path:"members",name:"members",component:()=>e(()=>import("./Members.6e6e905f.js"),["assets/Members.6e6e905f.js","assets/outputWidgets.c7c3593b.js","assets/outputWidgets.3c848cd5.css","assets/asyncComputed.87d89e82.js","assets/authorManager.33208873.js","assets/index.640c3418.js","assets/index.cf4c23b9.js","assets/record.b6e0d210.js","assets/pubsub.a1271b13.js","assets/gateway.94d6767e.js","assets/member.11df63cd.js","assets/CrudView.b146ef3d.js","assets/icons.e912a40c.js","assets/Title.47031f69.js","assets/Text.1c53905c.js","assets/FormItem.9941e947.js","assets/hasIn.f4bb54d3.js","assets/Form.5652ed9b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.252f0a18.js","assets/url.03aeeb48.js","assets/index.6a297772.js","assets/index.26b290e3.js","assets/index.03af204f.js","assets/CrudView.ec0f092c.css","assets/ant-design.41fde510.js","assets/index.27c03e11.js","assets/index.50d90398.js"])}]},{path:"/projects/:projectId",name:"project",component:()=>e(()=>import("./Project.ed74e649.js"),["assets/Project.ed74e649.js","assets/outputWidgets.c7c3593b.js","assets/outputWidgets.3c848cd5.css","assets/BaseLayout.f0c6220f.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.87d89e82.js","assets/authorManager.33208873.js","assets/index.640c3418.js","assets/index.cf4c23b9.js","assets/record.b6e0d210.js","assets/pubsub.a1271b13.js","assets/gateway.94d6767e.js","assets/project.95833ddb.js","assets/organization.1981f198.js","assets/Navbar.vue_vue_type_script_setup_true_lang.78b85644.js","assets/logo.084e5d7c.js","assets/Text.1c53905c.js","assets/index.ec294f58.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.vue_vue_type_script_setup_true_lang.5bfe3d90.js","assets/icons.e912a40c.js","assets/index.26b290e3.js","assets/Sidebar.dcc9f92a.css"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>e(()=>import("./Live.5ee98ce3.js"),["assets/Live.5ee98ce3.js","assets/outputWidgets.c7c3593b.js","assets/outputWidgets.3c848cd5.css","assets/asyncComputed.87d89e82.js","assets/authorManager.33208873.js","assets/build.b0660454.js","assets/gateway.94d6767e.js","assets/index.640c3418.js","assets/index.cf4c23b9.js","assets/record.b6e0d210.js","assets/pubsub.a1271b13.js","assets/project.95833ddb.js","assets/component.vue_vue_type_script_setup_true_lang.5b4b5b6c.js","assets/WarningFilled.d99917ef.js","assets/log.a7bab13f.js","assets/ant-design.41fde510.js","assets/index.27c03e11.js","assets/Title.47031f69.js","assets/Text.1c53905c.js","assets/index.4cafd7ec.js","assets/log.6c2e406b.css","assets/Link.48382ddc.js","assets/index.50d90398.js","assets/BaseLayout.f0c6220f.js","assets/BaseLayout.881bfa61.css","assets/index.ec294f58.js","assets/TabPane.8334841d.js","assets/hasIn.f4bb54d3.js","assets/index.e1ffda91.js","assets/isNumeric.75337b1e.js","assets/icons.e912a40c.js","assets/index.bd7719ac.js","assets/FormItem.9941e947.js","assets/component.28425152.css"])},{path:"builds",name:"builds",component:()=>e(()=>import("./Builds.877e66e0.js"),["assets/Builds.877e66e0.js","assets/outputWidgets.c7c3593b.js","assets/outputWidgets.3c848cd5.css","assets/index.50d90398.js","assets/asyncComputed.87d89e82.js","assets/authorManager.33208873.js","assets/build.b0660454.js","assets/gateway.94d6767e.js","assets/index.640c3418.js","assets/index.cf4c23b9.js","assets/record.b6e0d210.js","assets/pubsub.a1271b13.js","assets/project.95833ddb.js","assets/CrudView.b146ef3d.js","assets/icons.e912a40c.js","assets/Title.47031f69.js","assets/Text.1c53905c.js","assets/FormItem.9941e947.js","assets/hasIn.f4bb54d3.js","assets/Form.5652ed9b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.252f0a18.js","assets/url.03aeeb48.js","assets/index.6a297772.js","assets/index.26b290e3.js","assets/index.03af204f.js","assets/CrudView.ec0f092c.css","assets/Builds.1a609207.css"])},{path:"connectors",name:"connectors",component:()=>e(()=>import("./Connectors.470043f1.js"),["assets/Connectors.470043f1.js","assets/outputWidgets.c7c3593b.js","assets/outputWidgets.3c848cd5.css","assets/index.640c3418.js","assets/index.cf4c23b9.js","assets/record.b6e0d210.js","assets/pubsub.a1271b13.js","assets/gateway.94d6767e.js","assets/authorManager.33208873.js","assets/connector.d66adb9b.js","assets/asyncComputed.87d89e82.js","assets/icons.e912a40c.js","assets/CrudView.b146ef3d.js","assets/Title.47031f69.js","assets/Text.1c53905c.js","assets/FormItem.9941e947.js","assets/hasIn.f4bb54d3.js","assets/Form.5652ed9b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.252f0a18.js","assets/url.03aeeb48.js","assets/index.6a297772.js","assets/index.26b290e3.js","assets/index.03af204f.js","assets/CrudView.ec0f092c.css","assets/index.50d90398.js"])},{path:"tables",name:"tables",component:()=>e(()=>import("./Tables.aeac638b.js"),["assets/Tables.aeac638b.js","assets/outputWidgets.c7c3593b.js","assets/outputWidgets.3c848cd5.css","assets/icons.e912a40c.js","assets/asyncComputed.87d89e82.js","assets/authorManager.33208873.js","assets/tables.d08c9bd9.js","assets/record.b6e0d210.js","assets/pubsub.a1271b13.js","assets/index.640c3418.js","assets/index.cf4c23b9.js","assets/gateway.94d6767e.js","assets/string.6b771772.js","assets/CrudView.b146ef3d.js","assets/Title.47031f69.js","assets/Text.1c53905c.js","assets/FormItem.9941e947.js","assets/hasIn.f4bb54d3.js","assets/Form.5652ed9b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.252f0a18.js","assets/url.03aeeb48.js","assets/index.6a297772.js","assets/index.26b290e3.js","assets/index.03af204f.js","assets/CrudView.ec0f092c.css","assets/index.50d90398.js"])},{path:"api-keys",name:"api-keys",component:()=>e(()=>import("./ApiKeys.4cb64cf8.js"),["assets/ApiKeys.4cb64cf8.js","assets/outputWidgets.c7c3593b.js","assets/outputWidgets.3c848cd5.css","assets/index.50d90398.js","assets/icons.e912a40c.js","assets/asyncComputed.87d89e82.js","assets/authorManager.33208873.js","assets/index.640c3418.js","assets/index.cf4c23b9.js","assets/record.b6e0d210.js","assets/pubsub.a1271b13.js","assets/gateway.94d6767e.js","assets/member.11df63cd.js","assets/apiKey.bd7e4c74.js","assets/project.95833ddb.js","assets/CrudView.b146ef3d.js","assets/Title.47031f69.js","assets/Text.1c53905c.js","assets/FormItem.9941e947.js","assets/hasIn.f4bb54d3.js","assets/Form.5652ed9b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.252f0a18.js","assets/url.03aeeb48.js","assets/index.6a297772.js","assets/index.26b290e3.js","assets/index.03af204f.js","assets/CrudView.ec0f092c.css"])},{path:"logs",name:"logs",component:()=>e(()=>import("./Logs.4e1536b0.js"),["assets/Logs.4e1536b0.js","assets/outputWidgets.c7c3593b.js","assets/outputWidgets.3c848cd5.css","assets/log.a7bab13f.js","assets/ant-design.41fde510.js","assets/index.27c03e11.js","assets/Title.47031f69.js","assets/Text.1c53905c.js","assets/index.4cafd7ec.js","assets/gateway.94d6767e.js","assets/authorManager.33208873.js","assets/log.6c2e406b.css","assets/index.50d90398.js","assets/build.b0660454.js","assets/index.640c3418.js","assets/index.cf4c23b9.js","assets/record.b6e0d210.js","assets/pubsub.a1271b13.js","assets/asyncComputed.87d89e82.js","assets/dayjs.00a656ac.js","assets/index.512ad98b.js","assets/index.26b290e3.js","assets/FormItem.9941e947.js","assets/hasIn.f4bb54d3.js","assets/Form.5652ed9b.js"])},{path:"settings",name:"project-settings",component:()=>e(()=>import("./ProjectSettings.66ea25d0.js"),["assets/ProjectSettings.66ea25d0.js","assets/asyncComputed.87d89e82.js","assets/outputWidgets.c7c3593b.js","assets/outputWidgets.3c848cd5.css","assets/authorManager.33208873.js","assets/index.640c3418.js","assets/index.cf4c23b9.js","assets/record.b6e0d210.js","assets/pubsub.a1271b13.js","assets/gateway.94d6767e.js","assets/project.95833ddb.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.4f1b6654.js","assets/Title.47031f69.js","assets/Text.1c53905c.js","assets/FormItem.9941e947.js","assets/hasIn.f4bb54d3.js","assets/Form.5652ed9b.js","assets/index.50d90398.js"])},{path:"env-vars",name:"env-vars",component:()=>e(()=>import("./EnvVars.b95dfe9b.js"),["assets/EnvVars.b95dfe9b.js","assets/outputWidgets.c7c3593b.js","assets/outputWidgets.3c848cd5.css","assets/asyncComputed.87d89e82.js","assets/authorManager.33208873.js","assets/index.640c3418.js","assets/index.cf4c23b9.js","assets/record.b6e0d210.js","assets/pubsub.a1271b13.js","assets/gateway.94d6767e.js","assets/icons.e912a40c.js","assets/CrudView.b146ef3d.js","assets/Title.47031f69.js","assets/Text.1c53905c.js","assets/FormItem.9941e947.js","assets/hasIn.f4bb54d3.js","assets/Form.5652ed9b.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.252f0a18.js","assets/url.03aeeb48.js","assets/index.6a297772.js","assets/index.26b290e3.js","assets/index.03af204f.js","assets/CrudView.ec0f092c.css","assets/index.50d90398.js"])},{path:"files",name:"files",component:()=>e(()=>import("./Files.7c8eeb7e.js"),["assets/Files.7c8eeb7e.js","assets/outputWidgets.c7c3593b.js","assets/outputWidgets.3c848cd5.css","assets/authorManager.33208873.js","assets/gateway.94d6767e.js","assets/index.640c3418.js","assets/index.cf4c23b9.js","assets/record.b6e0d210.js","assets/pubsub.a1271b13.js","assets/asyncComputed.87d89e82.js","assets/ant-design.41fde510.js","assets/index.27c03e11.js","assets/Title.47031f69.js","assets/Text.1c53905c.js","assets/popupNotifcation.912e0a0f.js","assets/DownloadOutlined.c29e0df6.js","assets/Card.b5b90a92.js","assets/index.e30a6c48.js","assets/TabPane.8334841d.js","assets/hasIn.f4bb54d3.js","assets/Files.fefbf3f0.css"])},{path:"users",name:"users",component:()=>e(()=>import("./Users.541de45a.js"),["assets/Users.541de45a.js","assets/outputWidgets.c7c3593b.js","assets/outputWidgets.3c848cd5.css","assets/icons.e912a40c.js","assets/asyncComputed.87d89e82.js","assets/authorManager.33208873.js","assets/gateway.94d6767e.js","assets/index.640c3418.js","assets/index.cf4c23b9.js","assets/record.b6e0d210.js","assets/pubsub.a1271b13.js","assets/FormItem.9941e947.js","assets/hasIn.f4bb54d3.js","assets/Form.5652ed9b.js","assets/index.e1ffda91.js","assets/isNumeric.75337b1e.js","assets/CrudView.b146ef3d.js","assets/Title.47031f69.js","assets/Text.1c53905c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.252f0a18.js","assets/url.03aeeb48.js","assets/index.6a297772.js","assets/index.26b290e3.js","assets/index.03af204f.js","assets/CrudView.ec0f092c.css","assets/popupNotifcation.912e0a0f.js","assets/index.50d90398.js"])}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>e(()=>import("./TableEditor.20da8bce.js"),["assets/TableEditor.20da8bce.js","assets/outputWidgets.c7c3593b.js","assets/outputWidgets.3c848cd5.css","assets/tables.d08c9bd9.js","assets/record.b6e0d210.js","assets/pubsub.a1271b13.js","assets/index.640c3418.js","assets/index.cf4c23b9.js","assets/gateway.94d6767e.js","assets/authorManager.33208873.js","assets/string.6b771772.js","assets/BaseLayout.f0c6220f.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.87d89e82.js","assets/popupNotifcation.912e0a0f.js","assets/index.03af204f.js","assets/Form.5652ed9b.js","assets/FormItem.9941e947.js","assets/hasIn.f4bb54d3.js","assets/index.e1ffda91.js","assets/isNumeric.75337b1e.js","assets/project.95833ddb.js","assets/organization.1981f198.js","assets/icons.e912a40c.js","assets/index.c3e49f3c.js","assets/CircularLoading.7f60da51.js","assets/CircularLoading.f81b57b4.css","assets/TabPane.8334841d.js","assets/index.ec294f58.js","assets/Text.1c53905c.js","assets/TableEditor.e915f6c1.css"])},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>e(()=>import("./ConnectorEditor.ee7fbe09.js"),["assets/ConnectorEditor.ee7fbe09.js","assets/outputWidgets.c7c3593b.js","assets/outputWidgets.3c848cd5.css","assets/BaseLayout.f0c6220f.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.87d89e82.js","assets/index.640c3418.js","assets/index.cf4c23b9.js","assets/record.b6e0d210.js","assets/pubsub.a1271b13.js","assets/gateway.94d6767e.js","assets/authorManager.33208873.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.87aa7f2d.js","assets/ant-design.41fde510.js","assets/index.27c03e11.js","assets/Title.47031f69.js","assets/Text.1c53905c.js","assets/index.1bc8867f.js","assets/Link.48382ddc.js","assets/SaveButton.13ece1cb.css","assets/project.95833ddb.js","assets/connector.d66adb9b.js","assets/organization.1981f198.js","assets/TabPane.8334841d.js","assets/hasIn.f4bb54d3.js","assets/index.ec294f58.js","assets/Form.5652ed9b.js","assets/FormItem.9941e947.js","assets/index.03af204f.js","assets/ConnectorEditor.77a62f6e.css"])},{path:"/builds/:buildId",name:"build",component:()=>e(()=>import("./Build.c95c544f.js"),["assets/Build.c95c544f.js","assets/outputWidgets.c7c3593b.js","assets/outputWidgets.3c848cd5.css","assets/BaseLayout.f0c6220f.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.87d89e82.js","assets/component.vue_vue_type_script_setup_true_lang.5b4b5b6c.js","assets/authorManager.33208873.js","assets/index.640c3418.js","assets/index.cf4c23b9.js","assets/record.b6e0d210.js","assets/pubsub.a1271b13.js","assets/gateway.94d6767e.js","assets/WarningFilled.d99917ef.js","assets/log.a7bab13f.js","assets/ant-design.41fde510.js","assets/index.27c03e11.js","assets/Title.47031f69.js","assets/Text.1c53905c.js","assets/index.4cafd7ec.js","assets/log.6c2e406b.css","assets/Link.48382ddc.js","assets/index.50d90398.js","assets/index.ec294f58.js","assets/TabPane.8334841d.js","assets/hasIn.f4bb54d3.js","assets/index.e1ffda91.js","assets/isNumeric.75337b1e.js","assets/icons.e912a40c.js","assets/index.bd7719ac.js","assets/FormItem.9941e947.js","assets/component.28425152.css","assets/build.b0660454.js","assets/project.95833ddb.js","assets/organization.1981f198.js"])}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});r.beforeEach(async(t,n)=>{d(t,n);const o=s.getAuthor();if(c.trackPageView(o==null?void 0:o.claims.email),!t.meta.allowUnauthenticated&&!o){await r.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}});export{v as A,I as a,r};
//# sourceMappingURL=router.051bd37d.js.map
