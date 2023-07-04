import{q as s,a as i,b as _,c as p,e as m,f as c,g as d,_ as t,h as u,T as h,P as l,C as g,M as v,I as E,s as I,i as a,j as A,k as P,l as T,m as V}from"./registerWidgets.802bba2f.js";import{p as b}from"./passwordlessManager.d5134797.js";import{u as f}from"./index.7eb978ee.js";import{i as R}from"./sentry.923a3738.js";const D={},L={style:{height:"100vh","box-sizing":"border-box",width:"100%"}};function O(e,r){const n=i("router-view");return _(),p("div",L,[m(n)])}const y=s(D,[["render",O]]),o=c({history:d("/"),routes:[{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>t(()=>import("./Login.b51f7411.js"),["assets/Login.b51f7411.js","assets/Passwordless.50bb9805.js","assets/CircularLoading.5c7f2ad7.js","assets/registerWidgets.802bba2f.js","assets/registerWidgets.c131d556.css","assets/CircularLoading.f81b57b4.css","assets/icons.03f7ad73.js","assets/passwordlessManager.d5134797.js","assets/Passwordless.c981501a.css","assets/Navbar.a1669887.js","assets/logo.084e5d7c.js","assets/asyncComputed.1364aaa9.js","assets/Navbar.ef36b569.css","assets/member.d32af91c.js","assets/utils.acbba3b4.js","assets/pubsub.a0411919.js","assets/Login.8dc5040f.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>t(()=>import("./Organizations.bcb5bbdc.js"),["assets/Organizations.bcb5bbdc.js","assets/registerWidgets.802bba2f.js","assets/registerWidgets.c131d556.css","assets/icons.03f7ad73.js","assets/asyncComputed.1364aaa9.js","assets/utils.acbba3b4.js","assets/passwordlessManager.d5134797.js","assets/pubsub.a0411919.js","assets/organization.843e0012.js","assets/CrudView.9eafd43a.js","assets/DropdownMenu.32db0ef2.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.5c7f2ad7.js","assets/CircularLoading.f81b57b4.css","assets/Modal.e13f7972.js","assets/Modal.5aaf8eba.css","assets/CrudView.e43041f8.css","assets/Navbar.a1669887.js","assets/logo.084e5d7c.js","assets/Navbar.ef36b569.css","assets/Organizations.28d2a372.css"])},{path:"/organizations/:organizationId",name:"organization",component:()=>t(()=>import("./Organization.6815f07e.js"),["assets/Organization.6815f07e.js","assets/Sidebar.0abdc27c.js","assets/registerWidgets.802bba2f.js","assets/registerWidgets.c131d556.css","assets/icons.03f7ad73.js","assets/Tooltip.345f0ce8.js","assets/Tooltip.63c4352e.css","assets/Sidebar.a295cdc7.css","assets/Navbar.a1669887.js","assets/logo.084e5d7c.js","assets/passwordlessManager.d5134797.js","assets/asyncComputed.1364aaa9.js","assets/Navbar.ef36b569.css","assets/utils.acbba3b4.js","assets/pubsub.a0411919.js","assets/organization.843e0012.js","assets/Organization.3577d69b.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>t(()=>import("./Projects.77a958ab.js"),["assets/Projects.77a958ab.js","assets/registerWidgets.802bba2f.js","assets/registerWidgets.c131d556.css","assets/icons.03f7ad73.js","assets/asyncComputed.1364aaa9.js","assets/project.7c905308.js","assets/utils.acbba3b4.js","assets/passwordlessManager.d5134797.js","assets/pubsub.a0411919.js","assets/CrudView.9eafd43a.js","assets/DropdownMenu.32db0ef2.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.5c7f2ad7.js","assets/CircularLoading.f81b57b4.css","assets/Modal.e13f7972.js","assets/Modal.5aaf8eba.css","assets/CrudView.e43041f8.css"])},{path:"settings",name:"organization-settings",component:()=>t(()=>import("./OrganizationSettings.1a1e31d7.js"),["assets/OrganizationSettings.1a1e31d7.js","assets/registerWidgets.802bba2f.js","assets/registerWidgets.c131d556.css"])},{path:"members",name:"members",component:()=>t(()=>import("./Members.f48c15f4.js"),["assets/Members.f48c15f4.js","assets/registerWidgets.802bba2f.js","assets/registerWidgets.c131d556.css","assets/asyncComputed.1364aaa9.js","assets/utils.acbba3b4.js","assets/passwordlessManager.d5134797.js","assets/pubsub.a0411919.js","assets/member.d32af91c.js","assets/CrudView.9eafd43a.js","assets/DropdownMenu.32db0ef2.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.5c7f2ad7.js","assets/CircularLoading.f81b57b4.css","assets/Modal.e13f7972.js","assets/Modal.5aaf8eba.css","assets/CrudView.e43041f8.css"])}]},{path:"/projects/:projectId",name:"project",component:()=>t(()=>import("./Project.24f39a01.js"),["assets/Project.24f39a01.js","assets/Sidebar.0abdc27c.js","assets/registerWidgets.802bba2f.js","assets/registerWidgets.c131d556.css","assets/icons.03f7ad73.js","assets/Tooltip.345f0ce8.js","assets/Tooltip.63c4352e.css","assets/Sidebar.a295cdc7.css","assets/Navbar.a1669887.js","assets/logo.084e5d7c.js","assets/passwordlessManager.d5134797.js","assets/asyncComputed.1364aaa9.js","assets/Navbar.ef36b569.css","assets/project.7c905308.js","assets/utils.acbba3b4.js","assets/pubsub.a0411919.js","assets/organization.843e0012.js","assets/Project.73b105d5.css"]),redirect:{name:"builds"},children:[{path:"builds",name:"builds",component:()=>t(()=>import("./Builds.91539c1b.js"),["assets/Builds.91539c1b.js","assets/registerWidgets.802bba2f.js","assets/registerWidgets.c131d556.css","assets/asyncComputed.1364aaa9.js","assets/utils.acbba3b4.js","assets/passwordlessManager.d5134797.js","assets/pubsub.a0411919.js","assets/CrudView.9eafd43a.js","assets/DropdownMenu.32db0ef2.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.5c7f2ad7.js","assets/CircularLoading.f81b57b4.css","assets/Modal.e13f7972.js","assets/Modal.5aaf8eba.css","assets/CrudView.e43041f8.css"])},{path:"api-keys",name:"api-keys",component:()=>t(()=>import("./ApiKeys.63ffd6e8.js"),["assets/ApiKeys.63ffd6e8.js","assets/registerWidgets.802bba2f.js","assets/registerWidgets.c131d556.css","assets/asyncComputed.1364aaa9.js","assets/project.7c905308.js","assets/utils.acbba3b4.js","assets/passwordlessManager.d5134797.js","assets/pubsub.a0411919.js","assets/member.d32af91c.js","assets/CrudView.9eafd43a.js","assets/DropdownMenu.32db0ef2.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.5c7f2ad7.js","assets/CircularLoading.f81b57b4.css","assets/Modal.e13f7972.js","assets/Modal.5aaf8eba.css","assets/CrudView.e43041f8.css","assets/icons.03f7ad73.js","assets/ApiKeys.565e4da2.css"])},{path:"settings",name:"project-settings",component:()=>t(()=>import("./ProjectSettings.efaa1950.js"),["assets/ProjectSettings.efaa1950.js","assets/asyncComputed.1364aaa9.js","assets/registerWidgets.802bba2f.js","assets/registerWidgets.c131d556.css","assets/project.7c905308.js","assets/utils.acbba3b4.js","assets/passwordlessManager.d5134797.js","assets/pubsub.a0411919.js","assets/index.7eb978ee.js","assets/CircularLoading.5c7f2ad7.js","assets/CircularLoading.f81b57b4.css","assets/icons.03f7ad73.js","assets/ProjectSettings.b2184acb.css"])},{path:"env-vars",name:"env-vars",component:()=>t(()=>import("./EnvVars.2ba863d5.js"),["assets/EnvVars.2ba863d5.js","assets/registerWidgets.802bba2f.js","assets/registerWidgets.c131d556.css","assets/asyncComputed.1364aaa9.js","assets/utils.acbba3b4.js","assets/passwordlessManager.d5134797.js","assets/pubsub.a0411919.js","assets/CrudView.9eafd43a.js","assets/DropdownMenu.32db0ef2.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.5c7f2ad7.js","assets/CircularLoading.f81b57b4.css","assets/Modal.e13f7972.js","assets/Modal.5aaf8eba.css","assets/CrudView.e43041f8.css","assets/icons.03f7ad73.js"])}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});o.beforeEach(async(e,r)=>{f(e,r);const n=b.getUser();if(!e.meta.allowUnauthenticated&&!n){await o.push({name:"login"});return}});(async()=>{const e=u({render:()=>A(y)});h.init(),R(e,o,"console.abstracloud.com"),e.use(o),e.use(l),e.mount("#app"),e.component("VSelect",g),e.component("Markdown",v),e.component("Icon",E),e.component("Message",I),a(e,P),a(e,T),a(e,V)})();
//# sourceMappingURL=console.b6fdcc2e.js.map
