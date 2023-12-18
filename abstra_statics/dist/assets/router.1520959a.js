import{C as i,R as _}from"./FormItem.21d76171.js";import{D as a,g as p,h as m,_ as e}from"./outputWidgets.10485988.js";import{a as c,T as s}from"./authorManager.38afa1bc.js";import{u as d}from"./index.dcc4ceec.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="86100c06-d03b-483b-8196-fbe14a4cc0b1",t._sentryDebugIdIdentifier="sentry-dbid-86100c06-d03b-483b-8196-fbe14a4cc0b1")}catch{}})();const v=a(i),I=a(_),r=p({history:m("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>e(()=>import("./WidgetPreview.83378222.js"),["assets/WidgetPreview.83378222.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.8772c1b6.js","assets/outputWidgets.10485988.js","assets/outputWidgets.3c848cd5.css","assets/ActionButton.4a8d55e8.css","assets/WidgetsFrame.4e7c7426.js","assets/WidgetsFrame.97ae601d.css","assets/WidgetPreview.2be4ed12.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>e(()=>import("./Login.f590b677.js"),["assets/Login.f590b677.js","assets/outputWidgets.10485988.js","assets/outputWidgets.3c848cd5.css","assets/member.5909681f.js","assets/gateway.724886d8.js","assets/authorManager.38afa1bc.js","assets/icons.393c4985.js","assets/CircularLoading.d63002ee.js","assets/CircularLoading.f81b57b4.css","assets/WidgetsFrame.4e7c7426.js","assets/WidgetsFrame.97ae601d.css","assets/Login.f7d5edc1.css"])},{path:"/api-key",name:"api-key",component:()=>e(()=>import("./ReturnApiKey.c4b8c057.js"),["assets/ReturnApiKey.c4b8c057.js","assets/outputWidgets.10485988.js","assets/outputWidgets.3c848cd5.css","assets/authorManager.38afa1bc.js","assets/index.8a848ecb.js","assets/index.cf4c23b9.js","assets/record.3506005a.js","assets/pubsub.bdb96fa3.js","assets/gateway.724886d8.js","assets/apiKey.2ff187c1.js","assets/project.e614c45d.js","assets/organization.790bf6c4.js","assets/asyncComputed.b2872703.js","assets/Title.4956004f.js","assets/Text.4b6115af.js","assets/FormItem.21d76171.js","assets/hasIn.28143096.js","assets/Form.f7b760d4.js","assets/index.219e66b8.js","assets/ReturnApiKey.909cd622.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>e(()=>import("./Organizations.9c85c8c9.js"),["assets/Organizations.9c85c8c9.js","assets/outputWidgets.10485988.js","assets/outputWidgets.3c848cd5.css","assets/icons.393c4985.js","assets/asyncComputed.b2872703.js","assets/authorManager.38afa1bc.js","assets/index.8a848ecb.js","assets/index.cf4c23b9.js","assets/record.3506005a.js","assets/pubsub.bdb96fa3.js","assets/gateway.724886d8.js","assets/organization.790bf6c4.js","assets/Navbar.vue_vue_type_script_setup_true_lang.4e555d06.js","assets/logo.084e5d7c.js","assets/Text.4b6115af.js","assets/index.a61b4a40.js","assets/Navbar.f4a98ea3.css","assets/CrudView.92d7f792.js","assets/Title.4956004f.js","assets/FormItem.21d76171.js","assets/hasIn.28143096.js","assets/Form.f7b760d4.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a2ff82bf.js","assets/url.b99e6d36.js","assets/index.219e66b8.js","assets/index.30e77ea6.js","assets/index.1a244270.js","assets/CrudView.ec0f092c.css","assets/BaseLayout.313320da.js","assets/BaseLayout.881bfa61.css","assets/ant-design.28efff87.js","assets/index.712d5bdc.js","assets/index.dcc4ceec.js"])},{path:"/organizations/:organizationId",name:"organization",component:()=>e(()=>import("./Organization.77be5aa3.js"),["assets/Organization.77be5aa3.js","assets/Sidebar.vue_vue_type_script_setup_true_lang.459716b7.js","assets/outputWidgets.10485988.js","assets/outputWidgets.3c848cd5.css","assets/icons.393c4985.js","assets/index.30e77ea6.js","assets/Sidebar.dcc9f92a.css","assets/Navbar.vue_vue_type_script_setup_true_lang.4e555d06.js","assets/logo.084e5d7c.js","assets/authorManager.38afa1bc.js","assets/asyncComputed.b2872703.js","assets/Text.4b6115af.js","assets/index.a61b4a40.js","assets/Navbar.f4a98ea3.css","assets/index.8a848ecb.js","assets/index.cf4c23b9.js","assets/record.3506005a.js","assets/pubsub.bdb96fa3.js","assets/gateway.724886d8.js","assets/organization.790bf6c4.js","assets/BaseLayout.313320da.js","assets/BaseLayout.881bfa61.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>e(()=>import("./Projects.20d8af83.js"),["assets/Projects.20d8af83.js","assets/outputWidgets.10485988.js","assets/outputWidgets.3c848cd5.css","assets/icons.393c4985.js","assets/asyncComputed.b2872703.js","assets/authorManager.38afa1bc.js","assets/index.8a848ecb.js","assets/index.cf4c23b9.js","assets/record.3506005a.js","assets/pubsub.bdb96fa3.js","assets/gateway.724886d8.js","assets/project.e614c45d.js","assets/organization.790bf6c4.js","assets/CrudView.92d7f792.js","assets/Title.4956004f.js","assets/Text.4b6115af.js","assets/FormItem.21d76171.js","assets/hasIn.28143096.js","assets/Form.f7b760d4.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a2ff82bf.js","assets/url.b99e6d36.js","assets/index.219e66b8.js","assets/index.30e77ea6.js","assets/index.1a244270.js","assets/CrudView.ec0f092c.css","assets/ant-design.28efff87.js","assets/index.712d5bdc.js","assets/index.dcc4ceec.js"])},{path:"settings",name:"organization-settings",component:()=>e(()=>import("./OrganizationSettings.74152308.js"),["assets/OrganizationSettings.74152308.js","assets/outputWidgets.10485988.js","assets/outputWidgets.3c848cd5.css"])},{path:"members",name:"members",component:()=>e(()=>import("./Members.2f15ec0b.js"),["assets/Members.2f15ec0b.js","assets/outputWidgets.10485988.js","assets/outputWidgets.3c848cd5.css","assets/asyncComputed.b2872703.js","assets/authorManager.38afa1bc.js","assets/index.8a848ecb.js","assets/index.cf4c23b9.js","assets/record.3506005a.js","assets/pubsub.bdb96fa3.js","assets/gateway.724886d8.js","assets/member.5909681f.js","assets/CrudView.92d7f792.js","assets/icons.393c4985.js","assets/Title.4956004f.js","assets/Text.4b6115af.js","assets/FormItem.21d76171.js","assets/hasIn.28143096.js","assets/Form.f7b760d4.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a2ff82bf.js","assets/url.b99e6d36.js","assets/index.219e66b8.js","assets/index.30e77ea6.js","assets/index.1a244270.js","assets/CrudView.ec0f092c.css","assets/ant-design.28efff87.js","assets/index.712d5bdc.js","assets/index.dcc4ceec.js"])}]},{path:"/projects/:projectId",name:"project",component:()=>e(()=>import("./Project.41c361e8.js"),["assets/Project.41c361e8.js","assets/outputWidgets.10485988.js","assets/outputWidgets.3c848cd5.css","assets/BaseLayout.313320da.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.b2872703.js","assets/authorManager.38afa1bc.js","assets/index.8a848ecb.js","assets/index.cf4c23b9.js","assets/record.3506005a.js","assets/pubsub.bdb96fa3.js","assets/gateway.724886d8.js","assets/project.e614c45d.js","assets/organization.790bf6c4.js","assets/Navbar.vue_vue_type_script_setup_true_lang.4e555d06.js","assets/logo.084e5d7c.js","assets/Text.4b6115af.js","assets/index.a61b4a40.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.vue_vue_type_script_setup_true_lang.459716b7.js","assets/icons.393c4985.js","assets/index.30e77ea6.js","assets/Sidebar.dcc9f92a.css"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>e(()=>import("./Live.dad9617b.js"),["assets/Live.dad9617b.js","assets/outputWidgets.10485988.js","assets/outputWidgets.3c848cd5.css","assets/asyncComputed.b2872703.js","assets/authorManager.38afa1bc.js","assets/build.92c6b533.js","assets/gateway.724886d8.js","assets/index.8a848ecb.js","assets/index.cf4c23b9.js","assets/record.3506005a.js","assets/pubsub.bdb96fa3.js","assets/project.e614c45d.js","assets/component.vue_vue_type_script_setup_true_lang.13482511.js","assets/WarningFilled.d99917ef.js","assets/log.e6c413c8.js","assets/ant-design.28efff87.js","assets/index.712d5bdc.js","assets/Title.4956004f.js","assets/Text.4b6115af.js","assets/index.25a4b3b0.js","assets/log.6c2e406b.css","assets/Link.b73e2c43.js","assets/index.dcc4ceec.js","assets/BaseLayout.313320da.js","assets/BaseLayout.881bfa61.css","assets/index.a61b4a40.js","assets/TabPane.ace3c7db.js","assets/hasIn.28143096.js","assets/index.2c4a8eaa.js","assets/isNumeric.75337b1e.js","assets/icons.393c4985.js","assets/index.e5b1cdb6.js","assets/FormItem.21d76171.js","assets/component.28425152.css"])},{path:"builds",name:"builds",component:()=>e(()=>import("./Builds.eaecfe09.js"),["assets/Builds.eaecfe09.js","assets/outputWidgets.10485988.js","assets/outputWidgets.3c848cd5.css","assets/index.dcc4ceec.js","assets/asyncComputed.b2872703.js","assets/authorManager.38afa1bc.js","assets/build.92c6b533.js","assets/gateway.724886d8.js","assets/index.8a848ecb.js","assets/index.cf4c23b9.js","assets/record.3506005a.js","assets/pubsub.bdb96fa3.js","assets/project.e614c45d.js","assets/CrudView.92d7f792.js","assets/icons.393c4985.js","assets/Title.4956004f.js","assets/Text.4b6115af.js","assets/FormItem.21d76171.js","assets/hasIn.28143096.js","assets/Form.f7b760d4.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a2ff82bf.js","assets/url.b99e6d36.js","assets/index.219e66b8.js","assets/index.30e77ea6.js","assets/index.1a244270.js","assets/CrudView.ec0f092c.css","assets/Builds.1a609207.css"])},{path:"connectors",name:"connectors",component:()=>e(()=>import("./Connectors.41f641ae.js"),["assets/Connectors.41f641ae.js","assets/outputWidgets.10485988.js","assets/outputWidgets.3c848cd5.css","assets/index.8a848ecb.js","assets/index.cf4c23b9.js","assets/record.3506005a.js","assets/pubsub.bdb96fa3.js","assets/gateway.724886d8.js","assets/authorManager.38afa1bc.js","assets/connector.4b3c6a06.js","assets/asyncComputed.b2872703.js","assets/icons.393c4985.js","assets/CrudView.92d7f792.js","assets/Title.4956004f.js","assets/Text.4b6115af.js","assets/FormItem.21d76171.js","assets/hasIn.28143096.js","assets/Form.f7b760d4.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a2ff82bf.js","assets/url.b99e6d36.js","assets/index.219e66b8.js","assets/index.30e77ea6.js","assets/index.1a244270.js","assets/CrudView.ec0f092c.css","assets/index.dcc4ceec.js"])},{path:"tables",name:"tables",component:()=>e(()=>import("./Tables.41aaac6d.js"),["assets/Tables.41aaac6d.js","assets/outputWidgets.10485988.js","assets/outputWidgets.3c848cd5.css","assets/icons.393c4985.js","assets/asyncComputed.b2872703.js","assets/authorManager.38afa1bc.js","assets/tables.bb2c9796.js","assets/record.3506005a.js","assets/pubsub.bdb96fa3.js","assets/index.8a848ecb.js","assets/index.cf4c23b9.js","assets/gateway.724886d8.js","assets/string.0133be3f.js","assets/CrudView.92d7f792.js","assets/Title.4956004f.js","assets/Text.4b6115af.js","assets/FormItem.21d76171.js","assets/hasIn.28143096.js","assets/Form.f7b760d4.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a2ff82bf.js","assets/url.b99e6d36.js","assets/index.219e66b8.js","assets/index.30e77ea6.js","assets/index.1a244270.js","assets/CrudView.ec0f092c.css","assets/index.dcc4ceec.js"])},{path:"api-keys",name:"api-keys",component:()=>e(()=>import("./ApiKeys.202fe296.js"),["assets/ApiKeys.202fe296.js","assets/outputWidgets.10485988.js","assets/outputWidgets.3c848cd5.css","assets/index.dcc4ceec.js","assets/icons.393c4985.js","assets/asyncComputed.b2872703.js","assets/authorManager.38afa1bc.js","assets/index.8a848ecb.js","assets/index.cf4c23b9.js","assets/record.3506005a.js","assets/pubsub.bdb96fa3.js","assets/gateway.724886d8.js","assets/member.5909681f.js","assets/apiKey.2ff187c1.js","assets/project.e614c45d.js","assets/CrudView.92d7f792.js","assets/Title.4956004f.js","assets/Text.4b6115af.js","assets/FormItem.21d76171.js","assets/hasIn.28143096.js","assets/Form.f7b760d4.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a2ff82bf.js","assets/url.b99e6d36.js","assets/index.219e66b8.js","assets/index.30e77ea6.js","assets/index.1a244270.js","assets/CrudView.ec0f092c.css"])},{path:"logs",name:"logs",component:()=>e(()=>import("./Logs.60c60ce0.js"),["assets/Logs.60c60ce0.js","assets/outputWidgets.10485988.js","assets/outputWidgets.3c848cd5.css","assets/log.e6c413c8.js","assets/ant-design.28efff87.js","assets/index.712d5bdc.js","assets/Title.4956004f.js","assets/Text.4b6115af.js","assets/index.25a4b3b0.js","assets/gateway.724886d8.js","assets/authorManager.38afa1bc.js","assets/log.6c2e406b.css","assets/index.dcc4ceec.js","assets/build.92c6b533.js","assets/index.8a848ecb.js","assets/index.cf4c23b9.js","assets/record.3506005a.js","assets/pubsub.bdb96fa3.js","assets/asyncComputed.b2872703.js","assets/dayjs.8753fa10.js","assets/index.1ff2cf0b.js","assets/index.30e77ea6.js","assets/FormItem.21d76171.js","assets/hasIn.28143096.js","assets/Form.f7b760d4.js"])},{path:"settings",name:"project-settings",component:()=>e(()=>import("./ProjectSettings.db912fe1.js"),["assets/ProjectSettings.db912fe1.js","assets/asyncComputed.b2872703.js","assets/outputWidgets.10485988.js","assets/outputWidgets.3c848cd5.css","assets/authorManager.38afa1bc.js","assets/index.8a848ecb.js","assets/index.cf4c23b9.js","assets/record.3506005a.js","assets/pubsub.bdb96fa3.js","assets/gateway.724886d8.js","assets/project.e614c45d.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.ca3ff427.js","assets/Title.4956004f.js","assets/Text.4b6115af.js","assets/FormItem.21d76171.js","assets/hasIn.28143096.js","assets/Form.f7b760d4.js","assets/index.dcc4ceec.js"])},{path:"env-vars",name:"env-vars",component:()=>e(()=>import("./EnvVars.cc5f0b98.js"),["assets/EnvVars.cc5f0b98.js","assets/outputWidgets.10485988.js","assets/outputWidgets.3c848cd5.css","assets/asyncComputed.b2872703.js","assets/authorManager.38afa1bc.js","assets/index.8a848ecb.js","assets/index.cf4c23b9.js","assets/record.3506005a.js","assets/pubsub.bdb96fa3.js","assets/gateway.724886d8.js","assets/icons.393c4985.js","assets/CrudView.92d7f792.js","assets/Title.4956004f.js","assets/Text.4b6115af.js","assets/FormItem.21d76171.js","assets/hasIn.28143096.js","assets/Form.f7b760d4.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a2ff82bf.js","assets/url.b99e6d36.js","assets/index.219e66b8.js","assets/index.30e77ea6.js","assets/index.1a244270.js","assets/CrudView.ec0f092c.css","assets/index.dcc4ceec.js"])},{path:"files",name:"files",component:()=>e(()=>import("./Files.5faf75a5.js"),["assets/Files.5faf75a5.js","assets/outputWidgets.10485988.js","assets/outputWidgets.3c848cd5.css","assets/authorManager.38afa1bc.js","assets/gateway.724886d8.js","assets/index.8a848ecb.js","assets/index.cf4c23b9.js","assets/record.3506005a.js","assets/pubsub.bdb96fa3.js","assets/asyncComputed.b2872703.js","assets/ant-design.28efff87.js","assets/index.712d5bdc.js","assets/Title.4956004f.js","assets/Text.4b6115af.js","assets/popupNotifcation.5045b353.js","assets/DownloadOutlined.c29e0df6.js","assets/Card.a68e4cf2.js","assets/index.9b524035.js","assets/TabPane.ace3c7db.js","assets/hasIn.28143096.js","assets/Files.fefbf3f0.css"])}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>e(()=>import("./TableEditor.40da543b.js"),["assets/TableEditor.40da543b.js","assets/outputWidgets.10485988.js","assets/outputWidgets.3c848cd5.css","assets/tables.bb2c9796.js","assets/record.3506005a.js","assets/pubsub.bdb96fa3.js","assets/index.8a848ecb.js","assets/index.cf4c23b9.js","assets/gateway.724886d8.js","assets/authorManager.38afa1bc.js","assets/string.0133be3f.js","assets/BaseLayout.313320da.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.b2872703.js","assets/popupNotifcation.5045b353.js","assets/index.1a244270.js","assets/Form.f7b760d4.js","assets/FormItem.21d76171.js","assets/hasIn.28143096.js","assets/index.2c4a8eaa.js","assets/isNumeric.75337b1e.js","assets/project.e614c45d.js","assets/organization.790bf6c4.js","assets/icons.393c4985.js","assets/index.aa6641bd.js","assets/CircularLoading.d63002ee.js","assets/CircularLoading.f81b57b4.css","assets/TabPane.ace3c7db.js","assets/index.a61b4a40.js","assets/Text.4b6115af.js","assets/TableEditor.e915f6c1.css"])},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>e(()=>import("./ConnectorEditor.44423ffb.js"),["assets/ConnectorEditor.44423ffb.js","assets/outputWidgets.10485988.js","assets/outputWidgets.3c848cd5.css","assets/BaseLayout.313320da.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.b2872703.js","assets/index.8a848ecb.js","assets/index.cf4c23b9.js","assets/record.3506005a.js","assets/pubsub.bdb96fa3.js","assets/gateway.724886d8.js","assets/authorManager.38afa1bc.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.4df3cdf1.js","assets/ant-design.28efff87.js","assets/index.712d5bdc.js","assets/Title.4956004f.js","assets/Text.4b6115af.js","assets/index.06ad4999.js","assets/Link.b73e2c43.js","assets/SaveButton.13ece1cb.css","assets/project.e614c45d.js","assets/connector.4b3c6a06.js","assets/organization.790bf6c4.js","assets/TabPane.ace3c7db.js","assets/hasIn.28143096.js","assets/index.a61b4a40.js","assets/Form.f7b760d4.js","assets/FormItem.21d76171.js","assets/index.1a244270.js","assets/ConnectorEditor.77a62f6e.css"])},{path:"/builds/:buildId",name:"build",component:()=>e(()=>import("./Build.187afdb1.js"),["assets/Build.187afdb1.js","assets/outputWidgets.10485988.js","assets/outputWidgets.3c848cd5.css","assets/BaseLayout.313320da.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.b2872703.js","assets/component.vue_vue_type_script_setup_true_lang.13482511.js","assets/authorManager.38afa1bc.js","assets/index.8a848ecb.js","assets/index.cf4c23b9.js","assets/record.3506005a.js","assets/pubsub.bdb96fa3.js","assets/gateway.724886d8.js","assets/WarningFilled.d99917ef.js","assets/log.e6c413c8.js","assets/ant-design.28efff87.js","assets/index.712d5bdc.js","assets/Title.4956004f.js","assets/Text.4b6115af.js","assets/index.25a4b3b0.js","assets/log.6c2e406b.css","assets/Link.b73e2c43.js","assets/index.dcc4ceec.js","assets/index.a61b4a40.js","assets/TabPane.ace3c7db.js","assets/hasIn.28143096.js","assets/index.2c4a8eaa.js","assets/isNumeric.75337b1e.js","assets/icons.393c4985.js","assets/index.e5b1cdb6.js","assets/FormItem.21d76171.js","assets/component.28425152.css","assets/build.92c6b533.js","assets/project.e614c45d.js","assets/organization.790bf6c4.js"])}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});r.beforeEach(async(t,n)=>{d(t,n);const o=c.getAuthor();if(s.trackPageView(o==null?void 0:o.claims.email),!t.meta.allowUnauthenticated&&!o){await r.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}});export{v as A,I as a,r};
//# sourceMappingURL=router.1520959a.js.map
