import{q as i,a as s,b as _,c as p,e as c,f as m,g as d,_ as t,h as u,T as h,i as l,P as g,C as E,M as v,I as f,s as I,j as a,k as b,l as w,m as y,n as D}from"./registerWidgets.60bba559.js";import{p as A}from"./passwordlessManager.e1b568b1.js";import{u as P}from"./index.7e7f8bb2.js";import"./pubsub.6df2423b.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="5c941e3f-6fc1-4c55-a1ec-4f198e9b7d50",e._sentryDebugIdIdentifier="sentry-dbid-5c941e3f-6fc1-4c55-a1ec-4f198e9b7d50")}catch{}})();const T={},V={style:{height:"100vh","box-sizing":"border-box",width:"100%"}};function R(e,o){const n=s("router-view");return _(),p("div",V,[c(n)])}const L=i(T,[["render",R]]),r=m({history:d("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>t(()=>import("./WidgetPreview.21ec60ac.js"),["assets/WidgetPreview.21ec60ac.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.11413f0b.js","assets/registerWidgets.60bba559.js","assets/registerWidgets.448db7e9.css","assets/WidgetsFrame.c566de3c.js","assets/colors.472988d2.js","assets/WidgetsFrame.701a818b.css","assets/WidgetPreview.83bab6c7.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>t(()=>import("./Login.3b573205.js"),["assets/Login.3b573205.js","assets/Passwordless.4a584300.js","assets/CircularLoading.0edb8bc0.js","assets/lottie.fd5d7b21.js","assets/registerWidgets.60bba559.js","assets/registerWidgets.448db7e9.css","assets/CircularLoading.f81b57b4.css","assets/icons.86798a2e.js","assets/passwordlessManager.e1b568b1.js","assets/pubsub.6df2423b.js","assets/Passwordless.86ac0c56.css","assets/Navbar.85a9a92e.js","assets/logo.084e5d7c.js","assets/asyncComputed.d00a688c.js","assets/Navbar.a5a179d1.css","assets/member.4ea40a45.js","assets/gateway.aefff1da.js","assets/activeRecord.5794d4d2.js","assets/Login.8e4eb3db.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>t(()=>import("./Organizations.9fce46d6.js"),["assets/Organizations.9fce46d6.js","assets/registerWidgets.60bba559.js","assets/registerWidgets.448db7e9.css","assets/icons.86798a2e.js","assets/asyncComputed.d00a688c.js","assets/gateway.aefff1da.js","assets/passwordlessManager.e1b568b1.js","assets/pubsub.6df2423b.js","assets/organization.e7137f47.js","assets/activeRecord.5794d4d2.js","assets/index.320037c9.js","assets/CrudView.a60cfd24.js","assets/DropdownMenu.5abb73fd.js","assets/DropdownMenu.4f69c722.css","assets/Modal.8fbea10f.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.0b01cf4c.js","assets/lottie.fd5d7b21.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.47836ec6.css","assets/Navbar.85a9a92e.js","assets/logo.084e5d7c.js","assets/Navbar.a5a179d1.css","assets/Organizations.07de1b82.css"])},{path:"/organizations/:organizationId",name:"organization",component:()=>t(()=>import("./Organization.df7280fe.js"),["assets/Organization.df7280fe.js","assets/Sidebar.0d64783f.js","assets/registerWidgets.60bba559.js","assets/registerWidgets.448db7e9.css","assets/icons.86798a2e.js","assets/Tooltip.c2c5e61a.js","assets/Tooltip.63c4352e.css","assets/Sidebar.054bea37.css","assets/Navbar.85a9a92e.js","assets/logo.084e5d7c.js","assets/passwordlessManager.e1b568b1.js","assets/pubsub.6df2423b.js","assets/asyncComputed.d00a688c.js","assets/Navbar.a5a179d1.css","assets/gateway.aefff1da.js","assets/organization.e7137f47.js","assets/activeRecord.5794d4d2.js","assets/index.320037c9.js","assets/Organization.b3fd9094.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>t(()=>import("./Projects.188f327e.js"),["assets/Projects.188f327e.js","assets/registerWidgets.60bba559.js","assets/registerWidgets.448db7e9.css","assets/icons.86798a2e.js","assets/asyncComputed.d00a688c.js","assets/project.d55020ea.js","assets/gateway.aefff1da.js","assets/passwordlessManager.e1b568b1.js","assets/pubsub.6df2423b.js","assets/activeRecord.5794d4d2.js","assets/organization.e7137f47.js","assets/index.320037c9.js","assets/CrudView.a60cfd24.js","assets/DropdownMenu.5abb73fd.js","assets/DropdownMenu.4f69c722.css","assets/Modal.8fbea10f.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.0b01cf4c.js","assets/lottie.fd5d7b21.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.47836ec6.css"])},{path:"settings",name:"organization-settings",component:()=>t(()=>import("./OrganizationSettings.80bba302.js"),["assets/OrganizationSettings.80bba302.js","assets/registerWidgets.60bba559.js","assets/registerWidgets.448db7e9.css"])},{path:"members",name:"members",component:()=>t(()=>import("./Members.ce88f63a.js"),["assets/Members.ce88f63a.js","assets/registerWidgets.60bba559.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.d00a688c.js","assets/gateway.aefff1da.js","assets/passwordlessManager.e1b568b1.js","assets/pubsub.6df2423b.js","assets/member.4ea40a45.js","assets/activeRecord.5794d4d2.js","assets/index.320037c9.js","assets/CrudView.a60cfd24.js","assets/DropdownMenu.5abb73fd.js","assets/DropdownMenu.4f69c722.css","assets/Modal.8fbea10f.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.0b01cf4c.js","assets/lottie.fd5d7b21.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.47836ec6.css"])}]},{path:"/projects/:projectId",name:"project",component:()=>t(()=>import("./Project.abab1cbb.js"),["assets/Project.abab1cbb.js","assets/registerWidgets.60bba559.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.d00a688c.js","assets/project.d55020ea.js","assets/gateway.aefff1da.js","assets/passwordlessManager.e1b568b1.js","assets/pubsub.6df2423b.js","assets/activeRecord.5794d4d2.js","assets/organization.e7137f47.js","assets/index.320037c9.js","assets/Navbar.85a9a92e.js","assets/logo.084e5d7c.js","assets/Navbar.a5a179d1.css","assets/Sidebar.0d64783f.js","assets/icons.86798a2e.js","assets/Tooltip.c2c5e61a.js","assets/Tooltip.63c4352e.css","assets/Sidebar.054bea37.css","assets/Project.efdfb078.css"]),redirect:{name:"builds"},children:[{path:"builds",name:"builds",component:()=>t(()=>import("./Builds.42caa057.js"),["assets/Builds.42caa057.js","assets/registerWidgets.60bba559.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.d00a688c.js","assets/gateway.aefff1da.js","assets/passwordlessManager.e1b568b1.js","assets/pubsub.6df2423b.js","assets/build.5d0701bc.js","assets/activeRecord.5794d4d2.js","assets/index.320037c9.js","assets/CrudView.a60cfd24.js","assets/DropdownMenu.5abb73fd.js","assets/DropdownMenu.4f69c722.css","assets/Modal.8fbea10f.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.0b01cf4c.js","assets/lottie.fd5d7b21.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.47836ec6.css","assets/icons.86798a2e.js","assets/index.b048d0fb.js","assets/index.7e7f8bb2.js","assets/Builds.f9eaf052.css"])},{path:"connectors",name:"connectors",component:()=>t(()=>import("./Connectors.e3b2920d.js"),["assets/Connectors.e3b2920d.js","assets/registerWidgets.60bba559.js","assets/registerWidgets.448db7e9.css","assets/index.320037c9.js","assets/gateway.aefff1da.js","assets/passwordlessManager.e1b568b1.js","assets/pubsub.6df2423b.js","assets/connector.a6d69625.js","assets/activeRecord.5794d4d2.js","assets/asyncComputed.d00a688c.js","assets/icons.86798a2e.js","assets/CrudView.a60cfd24.js","assets/DropdownMenu.5abb73fd.js","assets/DropdownMenu.4f69c722.css","assets/Modal.8fbea10f.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.0b01cf4c.js","assets/lottie.fd5d7b21.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.47836ec6.css"])},{path:"api-keys",name:"api-keys",component:()=>t(()=>import("./ApiKeys.79431dd8.js"),["assets/ApiKeys.79431dd8.js","assets/registerWidgets.60bba559.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.d00a688c.js","assets/project.d55020ea.js","assets/gateway.aefff1da.js","assets/passwordlessManager.e1b568b1.js","assets/pubsub.6df2423b.js","assets/activeRecord.5794d4d2.js","assets/member.4ea40a45.js","assets/index.320037c9.js","assets/CrudView.a60cfd24.js","assets/DropdownMenu.5abb73fd.js","assets/DropdownMenu.4f69c722.css","assets/Modal.8fbea10f.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.0b01cf4c.js","assets/lottie.fd5d7b21.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.47836ec6.css","assets/icons.86798a2e.js","assets/index.b048d0fb.js","assets/ApiKeys.1adf158a.css"])},{path:"logs",name:"logs",component:()=>t(()=>import("./Logs.82e5a9b8.js"),["assets/Logs.82e5a9b8.js","assets/registerWidgets.60bba559.js","assets/registerWidgets.448db7e9.css","assets/gateway.aefff1da.js","assets/passwordlessManager.e1b568b1.js","assets/pubsub.6df2423b.js","assets/build.5d0701bc.js","assets/activeRecord.5794d4d2.js","assets/index.320037c9.js","assets/asyncComputed.d00a688c.js","assets/LoadingIndicator.0b01cf4c.js","assets/lottie.fd5d7b21.js","assets/LoadingIndicator.f4d31167.css","assets/index.b048d0fb.js","assets/Logs.a17321ed.css"])},{path:"settings",name:"project-settings",component:()=>t(()=>import("./ProjectSettings.e0d5828f.js"),["assets/ProjectSettings.e0d5828f.js","assets/asyncComputed.d00a688c.js","assets/registerWidgets.60bba559.js","assets/registerWidgets.448db7e9.css","assets/project.d55020ea.js","assets/gateway.aefff1da.js","assets/passwordlessManager.e1b568b1.js","assets/pubsub.6df2423b.js","assets/activeRecord.5794d4d2.js","assets/index.320037c9.js","assets/index.7e7f8bb2.js","assets/CircularLoading.0edb8bc0.js","assets/lottie.fd5d7b21.js","assets/CircularLoading.f81b57b4.css","assets/icons.86798a2e.js","assets/ProjectSettings.b8d779fa.css"])},{path:"env-vars",name:"env-vars",component:()=>t(()=>import("./EnvVars.65615087.js"),["assets/EnvVars.65615087.js","assets/registerWidgets.60bba559.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.d00a688c.js","assets/gateway.aefff1da.js","assets/passwordlessManager.e1b568b1.js","assets/pubsub.6df2423b.js","assets/activeRecord.5794d4d2.js","assets/index.320037c9.js","assets/CrudView.a60cfd24.js","assets/DropdownMenu.5abb73fd.js","assets/DropdownMenu.4f69c722.css","assets/Modal.8fbea10f.js","assets/Modal.5aaf8eba.css","assets/LoadingIndicator.0b01cf4c.js","assets/lottie.fd5d7b21.js","assets/LoadingIndicator.f4d31167.css","assets/CrudView.47836ec6.css","assets/icons.86798a2e.js"])}]},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>t(()=>import("./ConnectorEditor.79bf0614.js"),["assets/ConnectorEditor.79bf0614.js","assets/registerWidgets.60bba559.js","assets/registerWidgets.448db7e9.css","assets/index.320037c9.js","assets/gateway.aefff1da.js","assets/passwordlessManager.e1b568b1.js","assets/pubsub.6df2423b.js","assets/connector.a6d69625.js","assets/activeRecord.5794d4d2.js","assets/asyncComputed.d00a688c.js","assets/BackButton.e2bba4ae.js","assets/BackButton.40348456.css","assets/SaveButton.e83f0d5f.js","assets/icons.86798a2e.js","assets/SaveButton.c5392044.css","assets/CircularLoading.0edb8bc0.js","assets/lottie.fd5d7b21.js","assets/CircularLoading.f81b57b4.css","assets/ConnectorEditor.93911b56.css"])}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});r.beforeEach(async(e,o)=>{P(e,o);const n=A.getUser();if(!e.meta.allowUnauthenticated&&!n){await r.push({name:"login"});return}});(async()=>{const e=u({render:()=>b(L)});h.init(),l(e,r),e.use(r),e.use(g),e.mount("#app"),e.component("VSelect",E),e.component("Markdown",v),e.component("Icon",f),e.component("Message",I),a(e,w),a(e,y),a(e,D)})();export{r};
//# sourceMappingURL=console.8553c5f2.js.map
