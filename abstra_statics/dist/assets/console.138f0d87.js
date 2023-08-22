import{q as i,a as s,b as _,c as p,e as c,f as m,g as d,_ as t,h as u,T as h,i as l,P as g,C as E,M as v,I as f,s as I,j as a,k as b,l as w,m as y,n as D}from"./registerWidgets.89616af0.js";import{p as A}from"./passwordlessManager.884221ca.js";import{u as P}from"./index.d40cd19f.js";import"./pubsub.d7600aa1.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="7d6f8510-0412-4de7-b9b6-fa03f3aa0a96",e._sentryDebugIdIdentifier="sentry-dbid-7d6f8510-0412-4de7-b9b6-fa03f3aa0a96")}catch{}})();const T={},V={style:{height:"100vh","box-sizing":"border-box",width:"100%"}};function R(e,o){const n=s("router-view");return _(),p("div",V,[c(n)])}const L=i(T,[["render",R]]),r=m({history:d("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>t(()=>import("./WidgetPreview.6ebb6ff1.js"),["assets/WidgetPreview.6ebb6ff1.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.5682728a.js","assets/registerWidgets.89616af0.js","assets/registerWidgets.448db7e9.css","assets/WidgetsFrame.2b06573d.js","assets/colors.bc71fdf2.js","assets/WidgetsFrame.701a818b.css","assets/WidgetPreview.83bab6c7.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>t(()=>import("./Login.04e589a7.js"),["assets/Login.04e589a7.js","assets/Passwordless.ac83d40c.js","assets/CircularLoading.0fb686c0.js","assets/lottie.fc57e5ac.js","assets/registerWidgets.89616af0.js","assets/registerWidgets.448db7e9.css","assets/CircularLoading.f81b57b4.css","assets/icons.9cfdae6d.js","assets/passwordlessManager.884221ca.js","assets/pubsub.d7600aa1.js","assets/Passwordless.86ac0c56.css","assets/Navbar.dbea5082.js","assets/logo.084e5d7c.js","assets/asyncComputed.8ac91a75.js","assets/Navbar.a5a179d1.css","assets/member.f4131337.js","assets/gateway.0deebb85.js","assets/activeRecord.3d3c7835.js","assets/Login.8e4eb3db.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>t(()=>import("./Organizations.86d96323.js"),["assets/Organizations.86d96323.js","assets/registerWidgets.89616af0.js","assets/registerWidgets.448db7e9.css","assets/icons.9cfdae6d.js","assets/asyncComputed.8ac91a75.js","assets/gateway.0deebb85.js","assets/passwordlessManager.884221ca.js","assets/pubsub.d7600aa1.js","assets/organization.682269f4.js","assets/activeRecord.3d3c7835.js","assets/index.dae46ea1.js","assets/CrudView.7ced9145.js","assets/DropdownMenu.8f7fc9d3.js","assets/DropdownMenu.4f69c722.css","assets/Modal.73e976a2.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.10cfcfe7.js","assets/lottie.fc57e5ac.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.47836ec6.css","assets/Navbar.dbea5082.js","assets/logo.084e5d7c.js","assets/Navbar.a5a179d1.css","assets/Organizations.07de1b82.css"])},{path:"/organizations/:organizationId",name:"organization",component:()=>t(()=>import("./Organization.8d378a9c.js"),["assets/Organization.8d378a9c.js","assets/Sidebar.8babb822.js","assets/registerWidgets.89616af0.js","assets/registerWidgets.448db7e9.css","assets/icons.9cfdae6d.js","assets/Tooltip.1f768a3e.js","assets/Tooltip.63c4352e.css","assets/Sidebar.054bea37.css","assets/Navbar.dbea5082.js","assets/logo.084e5d7c.js","assets/passwordlessManager.884221ca.js","assets/pubsub.d7600aa1.js","assets/asyncComputed.8ac91a75.js","assets/Navbar.a5a179d1.css","assets/gateway.0deebb85.js","assets/organization.682269f4.js","assets/activeRecord.3d3c7835.js","assets/index.dae46ea1.js","assets/Organization.b3fd9094.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>t(()=>import("./Projects.51ccea2f.js"),["assets/Projects.51ccea2f.js","assets/registerWidgets.89616af0.js","assets/registerWidgets.448db7e9.css","assets/icons.9cfdae6d.js","assets/asyncComputed.8ac91a75.js","assets/project.a27ed749.js","assets/gateway.0deebb85.js","assets/passwordlessManager.884221ca.js","assets/pubsub.d7600aa1.js","assets/activeRecord.3d3c7835.js","assets/organization.682269f4.js","assets/index.dae46ea1.js","assets/CrudView.7ced9145.js","assets/DropdownMenu.8f7fc9d3.js","assets/DropdownMenu.4f69c722.css","assets/Modal.73e976a2.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.10cfcfe7.js","assets/lottie.fc57e5ac.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.47836ec6.css"])},{path:"settings",name:"organization-settings",component:()=>t(()=>import("./OrganizationSettings.46e64732.js"),["assets/OrganizationSettings.46e64732.js","assets/registerWidgets.89616af0.js","assets/registerWidgets.448db7e9.css"])},{path:"members",name:"members",component:()=>t(()=>import("./Members.f5d95bd4.js"),["assets/Members.f5d95bd4.js","assets/registerWidgets.89616af0.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.8ac91a75.js","assets/gateway.0deebb85.js","assets/passwordlessManager.884221ca.js","assets/pubsub.d7600aa1.js","assets/member.f4131337.js","assets/activeRecord.3d3c7835.js","assets/index.dae46ea1.js","assets/CrudView.7ced9145.js","assets/DropdownMenu.8f7fc9d3.js","assets/DropdownMenu.4f69c722.css","assets/Modal.73e976a2.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.10cfcfe7.js","assets/lottie.fc57e5ac.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.47836ec6.css"])}]},{path:"/projects/:projectId",name:"project",component:()=>t(()=>import("./Project.03df7c29.js"),["assets/Project.03df7c29.js","assets/registerWidgets.89616af0.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.8ac91a75.js","assets/project.a27ed749.js","assets/gateway.0deebb85.js","assets/passwordlessManager.884221ca.js","assets/pubsub.d7600aa1.js","assets/activeRecord.3d3c7835.js","assets/organization.682269f4.js","assets/index.dae46ea1.js","assets/Navbar.dbea5082.js","assets/logo.084e5d7c.js","assets/Navbar.a5a179d1.css","assets/Sidebar.8babb822.js","assets/icons.9cfdae6d.js","assets/Tooltip.1f768a3e.js","assets/Tooltip.63c4352e.css","assets/Sidebar.054bea37.css","assets/Project.efdfb078.css"]),redirect:{name:"builds"},children:[{path:"builds",name:"builds",component:()=>t(()=>import("./Builds.dbfd5324.js"),["assets/Builds.dbfd5324.js","assets/registerWidgets.89616af0.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.8ac91a75.js","assets/gateway.0deebb85.js","assets/passwordlessManager.884221ca.js","assets/pubsub.d7600aa1.js","assets/build.ac459472.js","assets/activeRecord.3d3c7835.js","assets/index.dae46ea1.js","assets/CrudView.7ced9145.js","assets/DropdownMenu.8f7fc9d3.js","assets/DropdownMenu.4f69c722.css","assets/Modal.73e976a2.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.10cfcfe7.js","assets/lottie.fc57e5ac.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.47836ec6.css","assets/icons.9cfdae6d.js","assets/index.b048d0fb.js","assets/index.d40cd19f.js","assets/Builds.f9eaf052.css"])},{path:"connectors",name:"connectors",component:()=>t(()=>import("./Connectors.f3069a96.js"),["assets/Connectors.f3069a96.js","assets/registerWidgets.89616af0.js","assets/registerWidgets.448db7e9.css","assets/index.dae46ea1.js","assets/gateway.0deebb85.js","assets/passwordlessManager.884221ca.js","assets/pubsub.d7600aa1.js","assets/connector.8528d309.js","assets/activeRecord.3d3c7835.js","assets/asyncComputed.8ac91a75.js","assets/icons.9cfdae6d.js","assets/CrudView.7ced9145.js","assets/DropdownMenu.8f7fc9d3.js","assets/DropdownMenu.4f69c722.css","assets/Modal.73e976a2.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.10cfcfe7.js","assets/lottie.fc57e5ac.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.47836ec6.css"])},{path:"api-keys",name:"api-keys",component:()=>t(()=>import("./ApiKeys.5ce6c5c7.js"),["assets/ApiKeys.5ce6c5c7.js","assets/registerWidgets.89616af0.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.8ac91a75.js","assets/project.a27ed749.js","assets/gateway.0deebb85.js","assets/passwordlessManager.884221ca.js","assets/pubsub.d7600aa1.js","assets/activeRecord.3d3c7835.js","assets/member.f4131337.js","assets/index.dae46ea1.js","assets/CrudView.7ced9145.js","assets/DropdownMenu.8f7fc9d3.js","assets/DropdownMenu.4f69c722.css","assets/Modal.73e976a2.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.10cfcfe7.js","assets/lottie.fc57e5ac.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.47836ec6.css","assets/icons.9cfdae6d.js","assets/index.b048d0fb.js","assets/ApiKeys.1adf158a.css"])},{path:"logs",name:"logs",component:()=>t(()=>import("./Logs.6a1222af.js"),["assets/Logs.6a1222af.js","assets/registerWidgets.89616af0.js","assets/registerWidgets.448db7e9.css","assets/gateway.0deebb85.js","assets/passwordlessManager.884221ca.js","assets/pubsub.d7600aa1.js","assets/build.ac459472.js","assets/activeRecord.3d3c7835.js","assets/index.dae46ea1.js","assets/asyncComputed.8ac91a75.js","assets/LoadingIndicator.10cfcfe7.js","assets/lottie.fc57e5ac.js","assets/LoadingIndicator.f4d31167.css","assets/index.b048d0fb.js","assets/Logs.a17321ed.css"])},{path:"settings",name:"project-settings",component:()=>t(()=>import("./ProjectSettings.007fec14.js"),["assets/ProjectSettings.007fec14.js","assets/asyncComputed.8ac91a75.js","assets/registerWidgets.89616af0.js","assets/registerWidgets.448db7e9.css","assets/project.a27ed749.js","assets/gateway.0deebb85.js","assets/passwordlessManager.884221ca.js","assets/pubsub.d7600aa1.js","assets/activeRecord.3d3c7835.js","assets/index.dae46ea1.js","assets/index.d40cd19f.js","assets/CircularLoading.0fb686c0.js","assets/lottie.fc57e5ac.js","assets/CircularLoading.f81b57b4.css","assets/icons.9cfdae6d.js","assets/ProjectSettings.b8d779fa.css"])},{path:"env-vars",name:"env-vars",component:()=>t(()=>import("./EnvVars.38d91162.js"),["assets/EnvVars.38d91162.js","assets/registerWidgets.89616af0.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.8ac91a75.js","assets/gateway.0deebb85.js","assets/passwordlessManager.884221ca.js","assets/pubsub.d7600aa1.js","assets/activeRecord.3d3c7835.js","assets/index.dae46ea1.js","assets/CrudView.7ced9145.js","assets/DropdownMenu.8f7fc9d3.js","assets/DropdownMenu.4f69c722.css","assets/Modal.73e976a2.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.10cfcfe7.js","assets/lottie.fc57e5ac.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.47836ec6.css","assets/icons.9cfdae6d.js"])}]},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>t(()=>import("./ConnectorEditor.7b329188.js"),["assets/ConnectorEditor.7b329188.js","assets/registerWidgets.89616af0.js","assets/registerWidgets.448db7e9.css","assets/index.dae46ea1.js","assets/gateway.0deebb85.js","assets/passwordlessManager.884221ca.js","assets/pubsub.d7600aa1.js","assets/connector.8528d309.js","assets/activeRecord.3d3c7835.js","assets/asyncComputed.8ac91a75.js","assets/BackButton.6e480dd1.js","assets/BackButton.40348456.css","assets/SaveButton.c0a67dea.js","assets/icons.9cfdae6d.js","assets/SaveButton.c5392044.css","assets/CircularLoading.0fb686c0.js","assets/lottie.fc57e5ac.js","assets/CircularLoading.f81b57b4.css","assets/ConnectorEditor.93911b56.css"])}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});r.beforeEach(async(e,o)=>{P(e,o);const n=A.getUser();if(!e.meta.allowUnauthenticated&&!n){await r.push({name:"login"});return}});(async()=>{const e=u({render:()=>b(L)});h.init(),l(e,r),e.use(r),e.use(g),e.mount("#app"),e.component("VSelect",E),e.component("Markdown",v),e.component("Icon",f),e.component("Message",I),a(e,w),a(e,y),a(e,D)})();export{r};
//# sourceMappingURL=console.138f0d87.js.map
