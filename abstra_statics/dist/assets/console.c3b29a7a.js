import{q as s,a as i,b as _,c as p,e as m,f as c,g as d,_ as t,h as u,T as h,P as l,C as g,M as v,I as E,s as I,i as a,j as A,k as P,l as T,m as V}from"./registerWidgets.ba12cd54.js";import{p as b}from"./passwordlessManager.a5941d42.js";import{u as f}from"./index.a464e9f0.js";import{i as R}from"./sentry.923a3738.js";const D={},L={style:{height:"100vh","box-sizing":"border-box",width:"100%"}};function O(e,r){const n=i("router-view");return _(),p("div",L,[m(n)])}const y=s(D,[["render",O]]),o=c({history:d("/"),routes:[{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>t(()=>import("./Login.2b1ed2c5.js"),["assets/Login.2b1ed2c5.js","assets/Passwordless.ada2efe6.js","assets/CircularLoading.79e96d11.js","assets/registerWidgets.ba12cd54.js","assets/registerWidgets.c131d556.css","assets/CircularLoading.f81b57b4.css","assets/icons.ea1ef9e9.js","assets/passwordlessManager.a5941d42.js","assets/Passwordless.c981501a.css","assets/Navbar.be22e75c.js","assets/logo.084e5d7c.js","assets/Navbar.84f52f8d.css","assets/member.1ae51d0f.js","assets/utils.a13b462f.js","assets/pubsub.a0411919.js","assets/Login.0394245e.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>t(()=>import("./Organizations.2aecb387.js"),["assets/Organizations.2aecb387.js","assets/registerWidgets.ba12cd54.js","assets/registerWidgets.c131d556.css","assets/icons.ea1ef9e9.js","assets/asyncComputed.3e2c3bcb.js","assets/utils.a13b462f.js","assets/passwordlessManager.a5941d42.js","assets/pubsub.a0411919.js","assets/organization.ffdf2ba2.js","assets/CrudView.705290c0.js","assets/DropdownMenu.7287e391.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.79e96d11.js","assets/CircularLoading.f81b57b4.css","assets/Modal.9cffe8c6.js","assets/Modal.5aaf8eba.css","assets/CrudView.fcb5b6d8.css","assets/Navbar.be22e75c.js","assets/logo.084e5d7c.js","assets/Navbar.84f52f8d.css","assets/Organizations.6ac1d5ed.css"])},{path:"/organizations/:organizationId",name:"organization",component:()=>t(()=>import("./Organization.873255fd.js"),["assets/Organization.873255fd.js","assets/Sidebar.881514c1.js","assets/registerWidgets.ba12cd54.js","assets/registerWidgets.c131d556.css","assets/icons.ea1ef9e9.js","assets/Tooltip.0dc21a61.js","assets/Tooltip.63c4352e.css","assets/Sidebar.a295cdc7.css","assets/Navbar.be22e75c.js","assets/logo.084e5d7c.js","assets/Navbar.84f52f8d.css","assets/asyncComputed.3e2c3bcb.js","assets/utils.a13b462f.js","assets/passwordlessManager.a5941d42.js","assets/pubsub.a0411919.js","assets/organization.ffdf2ba2.js","assets/Organization.48a2e6fb.css"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>t(()=>import("./Projects.af8f2bb4.js"),["assets/Projects.af8f2bb4.js","assets/registerWidgets.ba12cd54.js","assets/registerWidgets.c131d556.css","assets/icons.ea1ef9e9.js","assets/asyncComputed.3e2c3bcb.js","assets/project.7afa7e16.js","assets/utils.a13b462f.js","assets/passwordlessManager.a5941d42.js","assets/pubsub.a0411919.js","assets/CrudView.705290c0.js","assets/DropdownMenu.7287e391.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.79e96d11.js","assets/CircularLoading.f81b57b4.css","assets/Modal.9cffe8c6.js","assets/Modal.5aaf8eba.css","assets/CrudView.fcb5b6d8.css"])},{path:"settings",name:"organization-settings",component:()=>t(()=>import("./OrganizationSettings.c9e15057.js"),["assets/OrganizationSettings.c9e15057.js","assets/registerWidgets.ba12cd54.js","assets/registerWidgets.c131d556.css"])},{path:"members",name:"members",component:()=>t(()=>import("./Members.a2ddd2cb.js"),["assets/Members.a2ddd2cb.js","assets/registerWidgets.ba12cd54.js","assets/registerWidgets.c131d556.css","assets/asyncComputed.3e2c3bcb.js","assets/utils.a13b462f.js","assets/passwordlessManager.a5941d42.js","assets/pubsub.a0411919.js","assets/member.1ae51d0f.js","assets/CrudView.705290c0.js","assets/DropdownMenu.7287e391.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.79e96d11.js","assets/CircularLoading.f81b57b4.css","assets/Modal.9cffe8c6.js","assets/Modal.5aaf8eba.css","assets/CrudView.fcb5b6d8.css"])}]},{path:"/projects/:projectId",name:"project",component:()=>t(()=>import("./Project.7bb5391b.js"),["assets/Project.7bb5391b.js","assets/Sidebar.881514c1.js","assets/registerWidgets.ba12cd54.js","assets/registerWidgets.c131d556.css","assets/icons.ea1ef9e9.js","assets/Tooltip.0dc21a61.js","assets/Tooltip.63c4352e.css","assets/Sidebar.a295cdc7.css","assets/Navbar.be22e75c.js","assets/logo.084e5d7c.js","assets/Navbar.84f52f8d.css","assets/asyncComputed.3e2c3bcb.js","assets/project.7afa7e16.js","assets/utils.a13b462f.js","assets/passwordlessManager.a5941d42.js","assets/pubsub.a0411919.js","assets/organization.ffdf2ba2.js","assets/Project.f09233c8.css"]),redirect:{name:"builds"},children:[{path:"builds",name:"builds",component:()=>t(()=>import("./Builds.10944e73.js"),["assets/Builds.10944e73.js","assets/registerWidgets.ba12cd54.js","assets/registerWidgets.c131d556.css","assets/asyncComputed.3e2c3bcb.js","assets/utils.a13b462f.js","assets/passwordlessManager.a5941d42.js","assets/pubsub.a0411919.js","assets/CrudView.705290c0.js","assets/DropdownMenu.7287e391.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.79e96d11.js","assets/CircularLoading.f81b57b4.css","assets/Modal.9cffe8c6.js","assets/Modal.5aaf8eba.css","assets/CrudView.fcb5b6d8.css"])},{path:"api-keys",name:"api-keys",component:()=>t(()=>import("./ApiKeys.4d441064.js"),["assets/ApiKeys.4d441064.js","assets/registerWidgets.ba12cd54.js","assets/registerWidgets.c131d556.css","assets/asyncComputed.3e2c3bcb.js","assets/project.7afa7e16.js","assets/utils.a13b462f.js","assets/passwordlessManager.a5941d42.js","assets/pubsub.a0411919.js","assets/member.1ae51d0f.js","assets/CrudView.705290c0.js","assets/DropdownMenu.7287e391.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.79e96d11.js","assets/CircularLoading.f81b57b4.css","assets/Modal.9cffe8c6.js","assets/Modal.5aaf8eba.css","assets/CrudView.fcb5b6d8.css","assets/icons.ea1ef9e9.js","assets/ApiKeys.565e4da2.css"])},{path:"settings",name:"project-settings",component:()=>t(()=>import("./ProjectSettings.adc839c1.js"),["assets/ProjectSettings.adc839c1.js","assets/registerWidgets.ba12cd54.js","assets/registerWidgets.c131d556.css"])},{path:"env-vars",name:"env-vars",component:()=>t(()=>import("./EnvVars.dddf610d.js"),["assets/EnvVars.dddf610d.js","assets/registerWidgets.ba12cd54.js","assets/registerWidgets.c131d556.css","assets/asyncComputed.3e2c3bcb.js","assets/utils.a13b462f.js","assets/passwordlessManager.a5941d42.js","assets/pubsub.a0411919.js","assets/CrudView.705290c0.js","assets/DropdownMenu.7287e391.js","assets/DropdownMenu.5abf24d0.css","assets/CircularLoading.79e96d11.js","assets/CircularLoading.f81b57b4.css","assets/Modal.9cffe8c6.js","assets/Modal.5aaf8eba.css","assets/CrudView.fcb5b6d8.css"])}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});o.beforeEach(async(e,r)=>{f(e,r);const n=b.getUser();if(!e.meta.allowUnauthenticated&&!n){await o.push({name:"login"});return}});(async()=>{const e=u({render:()=>A(y)});h.init(),R(e,o,"console.abstracloud.com"),e.use(o),e.use(l),e.mount("#app"),e.component("VSelect",g),e.component("Markdown",v),e.component("Icon",E),e.component("Message",I),a(e,P),a(e,T),a(e,V)})();
//# sourceMappingURL=console.c3b29a7a.js.map
