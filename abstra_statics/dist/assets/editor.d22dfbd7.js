import{r as _,d as m,o as d,a as p,b as c,c as h,w as u,e as f,f as l,u as E,A as b,g as v,h as A,_ as t,i as w,T as P,j as I,P as D,C as y,M as k,I as V,s as T,k as r,l as g,m as R,n as L,p as O}from"./outputWidgets.65926c1d.js";import{u as W}from"./index.553ada1f.js";import{u as j}from"./index.f2493334.js";import"./pubsub.dc5bec39.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="f28655e2-ba4f-4fc7-84d1-8fd57166d3fc",e._sentryDebugIdIdentifier="sentry-dbid-f28655e2-ba4f-4fc7-84d1-8fd57166d3fc")}catch{}})();const s=_(!1),C=()=>{window.innerWidth<780?s.value=!0:s.value=!1},S={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},x=m({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return d(()=>{window.addEventListener("resize",C)}),(i,M)=>{const n=p("router-view");return c(),h(E(b),{theme:o},{default:u(()=>[f("div",S,[l(n)])]),_:1})}}});const a=v({history:A("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.8c715462.js"),["assets/Home.8c715462.js","assets/outputWidgets.65926c1d.js","assets/outputWidgets.f6e466ca.css","assets/Home.58a71584.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.abf5903b.js"),["assets/Workspace.abf5903b.js","assets/outputWidgets.65926c1d.js","assets/outputWidgets.f6e466ca.css","assets/icons.da7d27cd.js","assets/Tooltip.aac6d259.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/LoginBlock.6f12de51.js","assets/workspaces.d75870ed.js","assets/activeRecord.994400e6.js","assets/pubsub.dc5bec39.js","assets/url.bc2b44ba.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ecd1b9ae.js","assets/popupNotifcation.e755f0fa.js","assets/asyncComputed.4723d9b8.js","assets/index.2740d90e.js","assets/Title.2cced18a.js","assets/index.f97cc166.js","assets/Form.47548ee6.js","assets/LoginBlock.d273f904.css","assets/BaseLayout.7f35e98f.js","assets/BaseLayout.2d5b030e.css","assets/index.205aa6f9.js","assets/index.1bb9605d.js","assets/Workspace.9a25b177.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>t(()=>import("./Forms.b24bebaf.js"),["assets/Forms.b24bebaf.js","assets/outputWidgets.65926c1d.js","assets/outputWidgets.f6e466ca.css","assets/icons.da7d27cd.js","assets/asyncComputed.4723d9b8.js","assets/forms.06ee06be.js","assets/activeRecord.994400e6.js","assets/pubsub.dc5bec39.js","assets/CrudView.bb677fb8.js","assets/index.2740d90e.js","assets/Title.2cced18a.js","assets/Form.47548ee6.js","assets/router.52af5430.js","assets/index.553ada1f.js","assets/url.bc2b44ba.js","assets/index.0312767e.js","assets/index.006c6212.js","assets/index.73801d39.js","assets/index.1bb9605d.js","assets/CrudView.396a8168.css","assets/ant-design.14676eb3.js"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>t(()=>import("./Dashes.65bbcbed.js"),["assets/Dashes.65bbcbed.js","assets/outputWidgets.65926c1d.js","assets/outputWidgets.f6e466ca.css","assets/icons.da7d27cd.js","assets/asyncComputed.4723d9b8.js","assets/dashes.5b745c3f.js","assets/activeRecord.994400e6.js","assets/pubsub.dc5bec39.js","assets/index.553ada1f.js","assets/CrudView.bb677fb8.js","assets/index.2740d90e.js","assets/Title.2cced18a.js","assets/Form.47548ee6.js","assets/router.52af5430.js","assets/url.bc2b44ba.js","assets/index.0312767e.js","assets/index.006c6212.js","assets/index.73801d39.js","assets/index.1bb9605d.js","assets/CrudView.396a8168.css","assets/ant-design.14676eb3.js"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>t(()=>import("./Jobs.47978a3e.js"),["assets/Jobs.47978a3e.js","assets/outputWidgets.65926c1d.js","assets/outputWidgets.f6e466ca.css","assets/icons.da7d27cd.js","assets/asyncComputed.4723d9b8.js","assets/jobs.4fb3de9f.js","assets/activeRecord.994400e6.js","assets/pubsub.dc5bec39.js","assets/CrudView.bb677fb8.js","assets/index.2740d90e.js","assets/Title.2cced18a.js","assets/Form.47548ee6.js","assets/router.52af5430.js","assets/index.553ada1f.js","assets/url.bc2b44ba.js","assets/index.0312767e.js","assets/index.006c6212.js","assets/index.73801d39.js","assets/index.1bb9605d.js","assets/CrudView.396a8168.css","assets/ant-design.14676eb3.js"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>t(()=>import("./Hooks.7d104946.js"),["assets/Hooks.7d104946.js","assets/outputWidgets.65926c1d.js","assets/outputWidgets.f6e466ca.css","assets/icons.da7d27cd.js","assets/asyncComputed.4723d9b8.js","assets/hooks.4d601fd1.js","assets/activeRecord.994400e6.js","assets/pubsub.dc5bec39.js","assets/CrudView.bb677fb8.js","assets/index.2740d90e.js","assets/Title.2cced18a.js","assets/Form.47548ee6.js","assets/router.52af5430.js","assets/index.553ada1f.js","assets/url.bc2b44ba.js","assets/index.0312767e.js","assets/index.006c6212.js","assets/index.73801d39.js","assets/index.1bb9605d.js","assets/CrudView.396a8168.css","assets/ant-design.14676eb3.js"]),meta:{title:"Abstra - Hooks"}},{path:"style",name:"style",component:()=>t(()=>import("./StyleEditor.1928d6af.js"),["assets/StyleEditor.1928d6af.js","assets/asyncComputed.4723d9b8.js","assets/outputWidgets.65926c1d.js","assets/outputWidgets.f6e466ca.css","assets/workspaces.d75870ed.js","assets/activeRecord.994400e6.js","assets/pubsub.dc5bec39.js","assets/url.bc2b44ba.js","assets/CircularLoading.ae94822e.js","assets/CircularLoading.f81b57b4.css","assets/icons.da7d27cd.js","assets/index.b13bdb07.js","assets/Title.2cced18a.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.640515bd.js","assets/ant-design.14676eb3.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.c7158f62.js","assets/PlayerNavbar.946bd0d9.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.553ada1f.js","assets/WidgetsFrame.f8a89a70.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/index.73801d39.js","assets/Form.47548ee6.js","assets/StyleEditor.4d8e1574.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>t(()=>import("./SidebarEditor.4e841127.js"),["assets/SidebarEditor.4e841127.js","assets/outputWidgets.65926c1d.js","assets/outputWidgets.f6e466ca.css","assets/index.9ed15ba3.js","assets/Title.2cced18a.js","assets/index.1bb9605d.js","assets/index.73801d39.js","assets/workspaces.d75870ed.js","assets/activeRecord.994400e6.js","assets/pubsub.dc5bec39.js","assets/url.bc2b44ba.js","assets/asyncComputed.4723d9b8.js","assets/CircularLoading.ae94822e.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.640515bd.js","assets/ant-design.14676eb3.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.c7158f62.js","assets/PlayerNavbar.946bd0d9.js","assets/icons.da7d27cd.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.553ada1f.js","assets/WidgetsFrame.f8a89a70.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/Form.47548ee6.js"]),meta:{title:"Abstra - Sidebar"}}]},{path:"form/:formPath",name:"formEditor",component:()=>t(()=>import("./FormEditor.6a14c13d.js"),["assets/FormEditor.6a14c13d.js","assets/outputWidgets.65926c1d.js","assets/outputWidgets.f6e466ca.css","assets/FormTester.vue_vue_type_script_setup_true_lang.dfdb245b.js","assets/SmartConsole.fd1185cf.js","assets/asyncComputed.4723d9b8.js","assets/forms.06ee06be.js","assets/activeRecord.994400e6.js","assets/pubsub.dc5bec39.js","assets/dashes.5b745c3f.js","assets/index.553ada1f.js","assets/hooks.4d601fd1.js","assets/jobs.4fb3de9f.js","assets/workspaces.d75870ed.js","assets/url.bc2b44ba.js","assets/icons.da7d27cd.js","assets/Title.2cced18a.js","assets/index.006c6212.js","assets/uuid.d95c8d0f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ecd1b9ae.js","assets/SmartConsole.96457e04.css","assets/Form.47548ee6.js","assets/broker.98f22493.js","assets/index.f2493334.js","assets/executeJs.2fa51613.js","assets/CircularLoading.ae94822e.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.946bd0d9.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.e21bff84.js","assets/Steps.998aa76d.css","assets/executeJs.ee59d5a5.css","assets/WidgetsFrame.f8a89a70.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.5958fe19.js","assets/broker.1fe265d9.css","assets/StageRunSelector.vue_vue_type_script_setup_true_lang.435f2f79.js","assets/index.3d562d91.js","assets/CollapsePanel.2356d198.js","assets/index.59a2d779.js","assets/index.73801d39.js","assets/index.1bb9605d.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.640515bd.js","assets/ant-design.14676eb3.js","assets/SaveButton.13ece1cb.css","assets/LaunchButton.vue_vue_type_script_setup_true_lang.017c2558.js","assets/BaseLayout.7f35e98f.js","assets/BaseLayout.2d5b030e.css","assets/TabPane.844c7fcb.js","assets/index.00f25e76.js","assets/index.205aa6f9.js"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.d6e6b026.js"),["assets/FormPreview.d6e6b026.js","assets/outputWidgets.65926c1d.js","assets/outputWidgets.f6e466ca.css","assets/CircularLoading.ae94822e.js","assets/CircularLoading.f81b57b4.css","assets/broker.98f22493.js","assets/index.f2493334.js","assets/pubsub.dc5bec39.js","assets/executeJs.2fa51613.js","assets/icons.da7d27cd.js","assets/PlayerNavbar.946bd0d9.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.553ada1f.js","assets/Steps.e21bff84.js","assets/Steps.998aa76d.css","assets/executeJs.ee59d5a5.css","assets/WidgetsFrame.f8a89a70.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.5958fe19.js","assets/broker.1fe265d9.css","assets/BackButton.3d19a95b.js","assets/BackButton.dd542746.css","assets/asyncComputed.4723d9b8.js","assets/forms.06ee06be.js","assets/activeRecord.994400e6.js","assets/workspaces.d75870ed.js","assets/url.bc2b44ba.js","assets/FormPreview.0cd86555.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>t(()=>import("./JobEditor.f09baecf.js"),["assets/JobEditor.f09baecf.js","assets/outputWidgets.65926c1d.js","assets/outputWidgets.f6e466ca.css","assets/SmartConsole.fd1185cf.js","assets/asyncComputed.4723d9b8.js","assets/forms.06ee06be.js","assets/activeRecord.994400e6.js","assets/pubsub.dc5bec39.js","assets/dashes.5b745c3f.js","assets/index.553ada1f.js","assets/hooks.4d601fd1.js","assets/jobs.4fb3de9f.js","assets/workspaces.d75870ed.js","assets/url.bc2b44ba.js","assets/icons.da7d27cd.js","assets/Title.2cced18a.js","assets/index.006c6212.js","assets/uuid.d95c8d0f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ecd1b9ae.js","assets/SmartConsole.96457e04.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.640515bd.js","assets/ant-design.14676eb3.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.7f35e98f.js","assets/BaseLayout.2d5b030e.css","assets/JobSettings.vue_vue_type_script_setup_true_lang.f87609a6.js","assets/RunButton.vue_vue_type_script_setup_true_lang.e3f0b122.js","assets/index.db5ce87a.js","assets/index.0312767e.js","assets/dayjs.71c0f113.js","assets/Form.47548ee6.js","assets/index.205aa6f9.js","assets/index.1bb9605d.js","assets/TabPane.844c7fcb.js"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>t(()=>import("./DashEditor.d1e17b1f.js"),["assets/DashEditor.d1e17b1f.js","assets/index.553ada1f.js","assets/outputWidgets.65926c1d.js","assets/outputWidgets.f6e466ca.css","assets/BaseLayout.7f35e98f.js","assets/BaseLayout.2d5b030e.css","assets/DashPlayer.4eeffbf0.js","assets/executeJs.2fa51613.js","assets/icons.da7d27cd.js","assets/index.f2493334.js","assets/pubsub.dc5bec39.js","assets/CircularLoading.ae94822e.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.946bd0d9.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.e21bff84.js","assets/Steps.998aa76d.css","assets/executeJs.ee59d5a5.css","assets/geometryUtils.0facfb30.js","assets/WidgetsFrame.f8a89a70.js","assets/WidgetsFrame.0816a5f5.css","assets/DashPlayer.b0953bcd.css","assets/SmartConsole.fd1185cf.js","assets/asyncComputed.4723d9b8.js","assets/forms.06ee06be.js","assets/activeRecord.994400e6.js","assets/dashes.5b745c3f.js","assets/hooks.4d601fd1.js","assets/jobs.4fb3de9f.js","assets/workspaces.d75870ed.js","assets/url.bc2b44ba.js","assets/Title.2cced18a.js","assets/index.006c6212.js","assets/uuid.d95c8d0f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ecd1b9ae.js","assets/SmartConsole.96457e04.css","assets/LaunchButton.vue_vue_type_script_setup_true_lang.017c2558.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.640515bd.js","assets/ant-design.14676eb3.js","assets/SaveButton.13ece1cb.css","assets/keyboard.b94ad919.js","assets/index.205aa6f9.js","assets/index.1bb9605d.js","assets/TabPane.844c7fcb.js","assets/DashEditor.b1e4d748.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>t(()=>import("./DashPreview.a522b1e2.js"),["assets/DashPreview.a522b1e2.js","assets/outputWidgets.65926c1d.js","assets/outputWidgets.f6e466ca.css","assets/DashPlayer.4eeffbf0.js","assets/executeJs.2fa51613.js","assets/icons.da7d27cd.js","assets/index.f2493334.js","assets/pubsub.dc5bec39.js","assets/CircularLoading.ae94822e.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.946bd0d9.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.553ada1f.js","assets/Steps.e21bff84.js","assets/Steps.998aa76d.css","assets/executeJs.ee59d5a5.css","assets/geometryUtils.0facfb30.js","assets/WidgetsFrame.f8a89a70.js","assets/WidgetsFrame.0816a5f5.css","assets/DashPlayer.b0953bcd.css","assets/BackButton.3d19a95b.js","assets/BackButton.dd542746.css","assets/asyncComputed.4723d9b8.js","assets/dashes.5b745c3f.js","assets/activeRecord.994400e6.js","assets/workspaces.d75870ed.js","assets/url.bc2b44ba.js","assets/DashPreview.a3f29850.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>t(()=>import("./HookEditor.499b82b6.js"),["assets/HookEditor.499b82b6.js","assets/outputWidgets.65926c1d.js","assets/outputWidgets.f6e466ca.css","assets/SmartConsole.fd1185cf.js","assets/asyncComputed.4723d9b8.js","assets/forms.06ee06be.js","assets/activeRecord.994400e6.js","assets/pubsub.dc5bec39.js","assets/dashes.5b745c3f.js","assets/index.553ada1f.js","assets/hooks.4d601fd1.js","assets/jobs.4fb3de9f.js","assets/workspaces.d75870ed.js","assets/url.bc2b44ba.js","assets/icons.da7d27cd.js","assets/Title.2cced18a.js","assets/index.006c6212.js","assets/uuid.d95c8d0f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ecd1b9ae.js","assets/SmartConsole.96457e04.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.640515bd.js","assets/ant-design.14676eb3.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.7f35e98f.js","assets/BaseLayout.2d5b030e.css","assets/HookSettings.vue_vue_type_script_setup_true_lang.62c6a991.js","assets/StageRunSelector.vue_vue_type_script_setup_true_lang.435f2f79.js","assets/RunButton.vue_vue_type_script_setup_true_lang.e3f0b122.js","assets/index.2fb88cee.js","assets/index.73801d39.js","assets/CollapsePanel.2356d198.js","assets/index.1bb9605d.js","assets/index.59a2d779.js","assets/index.0312767e.js","assets/Form.47548ee6.js","assets/index.205aa6f9.js","assets/TabPane.844c7fcb.js"]),meta:{title:"Abstra - Hook Editor"}},{path:"workflow",name:"workflowEditor",component:()=>t(()=>import("./WorkflowEditor.91c61982.js"),["assets/WorkflowEditor.91c61982.js","assets/forms.06ee06be.js","assets/activeRecord.994400e6.js","assets/pubsub.dc5bec39.js","assets/outputWidgets.65926c1d.js","assets/outputWidgets.f6e466ca.css","assets/workspaces.d75870ed.js","assets/url.bc2b44ba.js","assets/icons.da7d27cd.js","assets/FormTester.vue_vue_type_script_setup_true_lang.dfdb245b.js","assets/SmartConsole.fd1185cf.js","assets/asyncComputed.4723d9b8.js","assets/dashes.5b745c3f.js","assets/index.553ada1f.js","assets/hooks.4d601fd1.js","assets/jobs.4fb3de9f.js","assets/Title.2cced18a.js","assets/index.006c6212.js","assets/uuid.d95c8d0f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ecd1b9ae.js","assets/SmartConsole.96457e04.css","assets/Form.47548ee6.js","assets/broker.98f22493.js","assets/index.f2493334.js","assets/executeJs.2fa51613.js","assets/CircularLoading.ae94822e.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.946bd0d9.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.e21bff84.js","assets/Steps.998aa76d.css","assets/executeJs.ee59d5a5.css","assets/WidgetsFrame.f8a89a70.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.5958fe19.js","assets/broker.1fe265d9.css","assets/StageRunSelector.vue_vue_type_script_setup_true_lang.435f2f79.js","assets/index.3d562d91.js","assets/CollapsePanel.2356d198.js","assets/index.59a2d779.js","assets/index.73801d39.js","assets/index.1bb9605d.js","assets/geometryUtils.0facfb30.js","assets/keyboard.b94ad919.js","assets/ant-design.14676eb3.js","assets/LaunchButton.vue_vue_type_script_setup_true_lang.017c2558.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.640515bd.js","assets/SaveButton.13ece1cb.css","assets/HookSettings.vue_vue_type_script_setup_true_lang.62c6a991.js","assets/RunButton.vue_vue_type_script_setup_true_lang.e3f0b122.js","assets/index.2fb88cee.js","assets/index.0312767e.js","assets/JobSettings.vue_vue_type_script_setup_true_lang.f87609a6.js","assets/index.db5ce87a.js","assets/dayjs.71c0f113.js","assets/index.2740d90e.js","assets/index.9ed15ba3.js","assets/LoginBlock.6f12de51.js","assets/popupNotifcation.e755f0fa.js","assets/index.f97cc166.js","assets/LoginBlock.d273f904.css","assets/index.205aa6f9.js","assets/index.d0e0a4fa.js","assets/TabPane.844c7fcb.js","assets/WorkflowEditor.f777e473.css"]),meta:{title:"Abstra - Workflow Editor"}}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{W(e,o)});(async()=>{await j();const e=w({render:()=>g(x)});P.init(),I(e,a),e.use(a),e.use(D),e.mount("#app"),e.component("VSelect",y),e.component("Markdown",k),e.component("Icon",V),e.component("Message",T),r(e,R),r(e,L),r(e,O)})();
//# sourceMappingURL=editor.d22dfbd7.js.map
