import{p as i,a as s,b as _,c as p,e as m,f as c,g as d,_ as t,h as u,T as h,P as l,C as g,M as v,I as E,s as I,i as a,j as A,k as P,l as T,m as V}from"./registerWidgets.4cc86716.js";import{p as w}from"./passwordlessManager.d432fb48.js";import{u as R}from"./index.a6f97cb6.js";import{i as D}from"./sentry.2692e5c6.js";const L={},O={style:{height:"100vh","box-sizing":"border-box",width:"100%"}};function b(e,r){const n=s("router-view");return _(),p("div",O,[m(n)])}const f=i(L,[["render",b]]),o=c({history:d("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>t(()=>import("./WidgetPreview.d581bb12.js"),["assets/WidgetPreview.d581bb12.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.a22e4194.js","assets/registerWidgets.4cc86716.js","assets/registerWidgets.a7e6ab4f.css","assets/WidgetsFrame.8a984b59.js","assets/colors.267ec6f7.js","assets/WidgetsFrame.701a818b.css","assets/WidgetPreview.d0b68276.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>t(()=>import("./Login.6923ff32.js"),["assets/Login.6923ff32.js","assets/Passwordless.42b443a5.js","assets/CircularLoading.249aa989.js","assets/registerWidgets.4cc86716.js","assets/registerWidgets.a7e6ab4f.css","assets/CircularLoading.f81b57b4.css","assets/icons.d4e872e2.js","assets/passwordlessManager.d432fb48.js","assets/Passwordless.2b58e538.css","assets/Navbar.1dd95194.js","assets/logo.084e5d7c.js","assets/asyncComputed.f9d446a7.js","assets/Navbar.a5a179d1.css","assets/member.60c494cc.js","assets/gateway.6112d0c1.js","assets/activeRecord.57c6bf02.js","assets/Login.8e4eb3db.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>t(()=>import("./Organizations.71d6b175.js"),["assets/Organizations.71d6b175.js","assets/registerWidgets.4cc86716.js","assets/registerWidgets.a7e6ab4f.css","assets/icons.d4e872e2.js","assets/asyncComputed.f9d446a7.js","assets/gateway.6112d0c1.js","assets/passwordlessManager.d432fb48.js","assets/organization.e8fff16a.js","assets/activeRecord.57c6bf02.js","assets/CrudView.58195497.js","assets/DropdownMenu.e399150c.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.249aa989.js","assets/CircularLoading.f81b57b4.css","assets/Modal.7d907bdb.js","assets/Modal.5aaf8eba.css","assets/CrudView.f6808403.css","assets/Navbar.1dd95194.js","assets/logo.084e5d7c.js","assets/Navbar.a5a179d1.css","assets/Organizations.e71f1a90.css"])},{path:"/organizations/:organizationId",name:"organization",component:()=>t(()=>import("./Organization.a6a9e664.js"),["assets/Organization.a6a9e664.js","assets/Sidebar.2bf564e0.js","assets/registerWidgets.4cc86716.js","assets/registerWidgets.a7e6ab4f.css","assets/icons.d4e872e2.js","assets/Tooltip.1fe1f181.js","assets/Tooltip.63c4352e.css","assets/Sidebar.054bea37.css","assets/Navbar.1dd95194.js","assets/logo.084e5d7c.js","assets/passwordlessManager.d432fb48.js","assets/asyncComputed.f9d446a7.js","assets/Navbar.a5a179d1.css","assets/gateway.6112d0c1.js","assets/organization.e8fff16a.js","assets/activeRecord.57c6bf02.js","assets/Organization.b227bec1.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>t(()=>import("./Projects.4050fa10.js"),["assets/Projects.4050fa10.js","assets/registerWidgets.4cc86716.js","assets/registerWidgets.a7e6ab4f.css","assets/icons.d4e872e2.js","assets/asyncComputed.f9d446a7.js","assets/project.74e740ba.js","assets/gateway.6112d0c1.js","assets/passwordlessManager.d432fb48.js","assets/activeRecord.57c6bf02.js","assets/organization.e8fff16a.js","assets/CrudView.58195497.js","assets/DropdownMenu.e399150c.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.249aa989.js","assets/CircularLoading.f81b57b4.css","assets/Modal.7d907bdb.js","assets/Modal.5aaf8eba.css","assets/CrudView.f6808403.css"])},{path:"settings",name:"organization-settings",component:()=>t(()=>import("./OrganizationSettings.d15d1404.js"),["assets/OrganizationSettings.d15d1404.js","assets/registerWidgets.4cc86716.js","assets/registerWidgets.a7e6ab4f.css"])},{path:"members",name:"members",component:()=>t(()=>import("./Members.f7260bf4.js"),["assets/Members.f7260bf4.js","assets/registerWidgets.4cc86716.js","assets/registerWidgets.a7e6ab4f.css","assets/asyncComputed.f9d446a7.js","assets/gateway.6112d0c1.js","assets/passwordlessManager.d432fb48.js","assets/member.60c494cc.js","assets/activeRecord.57c6bf02.js","assets/CrudView.58195497.js","assets/DropdownMenu.e399150c.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.249aa989.js","assets/CircularLoading.f81b57b4.css","assets/Modal.7d907bdb.js","assets/Modal.5aaf8eba.css","assets/CrudView.f6808403.css"])}]},{path:"/projects/:projectId",name:"project",component:()=>t(()=>import("./Project.8ae5d8b8.js"),["assets/Project.8ae5d8b8.js","assets/registerWidgets.4cc86716.js","assets/registerWidgets.a7e6ab4f.css","assets/asyncComputed.f9d446a7.js","assets/project.74e740ba.js","assets/gateway.6112d0c1.js","assets/passwordlessManager.d432fb48.js","assets/activeRecord.57c6bf02.js","assets/organization.e8fff16a.js","assets/Navbar.1dd95194.js","assets/logo.084e5d7c.js","assets/Navbar.a5a179d1.css","assets/Sidebar.2bf564e0.js","assets/icons.d4e872e2.js","assets/Tooltip.1fe1f181.js","assets/Tooltip.63c4352e.css","assets/Sidebar.054bea37.css","assets/Project.fc209320.css"]),redirect:{name:"builds"},children:[{path:"builds",name:"builds",component:()=>t(()=>import("./Builds.32230db9.js"),["assets/Builds.32230db9.js","assets/registerWidgets.4cc86716.js","assets/registerWidgets.a7e6ab4f.css","assets/asyncComputed.f9d446a7.js","assets/gateway.6112d0c1.js","assets/passwordlessManager.d432fb48.js","assets/build.3fdd5895.js","assets/activeRecord.57c6bf02.js","assets/CrudView.58195497.js","assets/DropdownMenu.e399150c.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.249aa989.js","assets/CircularLoading.f81b57b4.css","assets/Modal.7d907bdb.js","assets/Modal.5aaf8eba.css","assets/CrudView.f6808403.css","assets/Builds.bb724135.css"])},{path:"api-keys",name:"api-keys",component:()=>t(()=>import("./ApiKeys.8a9f1249.js"),["assets/ApiKeys.8a9f1249.js","assets/registerWidgets.4cc86716.js","assets/registerWidgets.a7e6ab4f.css","assets/asyncComputed.f9d446a7.js","assets/project.74e740ba.js","assets/gateway.6112d0c1.js","assets/passwordlessManager.d432fb48.js","assets/activeRecord.57c6bf02.js","assets/member.60c494cc.js","assets/CrudView.58195497.js","assets/DropdownMenu.e399150c.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.249aa989.js","assets/CircularLoading.f81b57b4.css","assets/Modal.7d907bdb.js","assets/Modal.5aaf8eba.css","assets/CrudView.f6808403.css","assets/icons.d4e872e2.js","assets/ApiKeys.1adf158a.css"])},{path:"logs",name:"logs",component:()=>t(()=>import("./Logs.d9a9400d.js"),["assets/Logs.d9a9400d.js","assets/registerWidgets.4cc86716.js","assets/registerWidgets.a7e6ab4f.css","assets/gateway.6112d0c1.js","assets/passwordlessManager.d432fb48.js","assets/build.3fdd5895.js","assets/activeRecord.57c6bf02.js","assets/asyncComputed.f9d446a7.js","assets/CircularLoading.249aa989.js","assets/CircularLoading.f81b57b4.css","assets/Logs.be15dc09.css"])},{path:"settings",name:"project-settings",component:()=>t(()=>import("./ProjectSettings.f18d6684.js"),["assets/ProjectSettings.f18d6684.js","assets/asyncComputed.f9d446a7.js","assets/registerWidgets.4cc86716.js","assets/registerWidgets.a7e6ab4f.css","assets/project.74e740ba.js","assets/gateway.6112d0c1.js","assets/passwordlessManager.d432fb48.js","assets/activeRecord.57c6bf02.js","assets/index.a6f97cb6.js","assets/CircularLoading.249aa989.js","assets/CircularLoading.f81b57b4.css","assets/icons.d4e872e2.js","assets/ProjectSettings.2ba6a55b.css"])},{path:"env-vars",name:"env-vars",component:()=>t(()=>import("./EnvVars.f2c773fc.js"),["assets/EnvVars.f2c773fc.js","assets/registerWidgets.4cc86716.js","assets/registerWidgets.a7e6ab4f.css","assets/asyncComputed.f9d446a7.js","assets/gateway.6112d0c1.js","assets/passwordlessManager.d432fb48.js","assets/activeRecord.57c6bf02.js","assets/CrudView.58195497.js","assets/DropdownMenu.e399150c.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.249aa989.js","assets/CircularLoading.f81b57b4.css","assets/Modal.7d907bdb.js","assets/Modal.5aaf8eba.css","assets/CrudView.f6808403.css","assets/icons.d4e872e2.js"])}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});o.beforeEach(async(e,r)=>{R(e,r);const n=w.getUser();if(!e.meta.allowUnauthenticated&&!n){await o.push({name:"login"});return}});(async()=>{const e=u({render:()=>A(f)});h.init(),D(e,o,"console.abstracloud.com"),e.use(o),e.use(l),e.mount("#app"),e.component("VSelect",g),e.component("Markdown",v),e.component("Icon",E),e.component("Message",I),a(e,P),a(e,T),a(e,V)})();
//# sourceMappingURL=console.69293ba5.js.map
