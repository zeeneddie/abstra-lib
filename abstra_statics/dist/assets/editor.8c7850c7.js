import{r as _,d as m,o as d,a as p,b as c,c as u,w as l,e as h,f as b,u as f,A as E,g as v,h as A,_ as t,i as P,T as I,j as w,P as y,C as g,M as k,I as D,s as R,k as r,l as V,m as T,n as L,p as O}from"./outputWidgets.0510f95f.js";import{u as j}from"./index.da6b8ae1.js";import{r as C,u as S,s as W}from"./index.8438e520.js";import"./pubsub.96341e46.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="0cd845c5-2082-4822-8cab-4c71c15dc792",e._sentryDebugIdIdentifier="sentry-dbid-0cd845c5-2082-4822-8cab-4c71c15dc792")}catch{}})();const n=_(!1),x=()=>{window.innerWidth<780?n.value=!0:n.value=!1},M={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},B=m({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return d(()=>{window.addEventListener("resize",x)}),(s,q)=>{const i=p("router-view");return c(),u(f(E),{theme:o},{default:l(()=>[h("div",M,[b(i)])]),_:1})}}});const a=v({history:A("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.44b3ddf0.js"),["assets/Home.44b3ddf0.js","assets/outputWidgets.0510f95f.js","assets/outputWidgets.cb6d1439.css","assets/Home.58a71584.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.8d909db1.js"),["assets/Workspace.8d909db1.js","assets/outputWidgets.0510f95f.js","assets/outputWidgets.cb6d1439.css","assets/icons.cdb4433d.js","assets/Tooltip.22f72e88.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/workspaces.147bf203.js","assets/activeRecord.e4826715.js","assets/pubsub.96341e46.js","assets/url.27504c64.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8053ea81.js","assets/popupNotifcation.ab94f095.js","assets/asyncComputed.702ff019.js","assets/index.8438e520.js","assets/index.a8ad7985.js","assets/isNumeric.75337b1e.js","assets/transButton.763ee844.js","assets/index.cea43750.js","assets/BaseLayout.97ddb8a9.js","assets/BaseLayout.2d5b030e.css","assets/index.34b81398.js","assets/Workspace.31b6254e.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>t(()=>import("./Forms.3d0009a0.js"),["assets/Forms.3d0009a0.js","assets/outputWidgets.0510f95f.js","assets/outputWidgets.cb6d1439.css","assets/icons.cdb4433d.js","assets/asyncComputed.702ff019.js","assets/forms.6961df54.js","assets/activeRecord.e4826715.js","assets/pubsub.96341e46.js","assets/CrudView.bee9cdac.js","assets/Text.50020ea6.js","assets/Base.d7f580b0.js","assets/transButton.763ee844.js","assets/router.c167d561.js","assets/Title.b2eb2014.js","assets/index.da6b8ae1.js","assets/url.27504c64.js","assets/index.52741b63.js","assets/index.cea43750.js","assets/CrudView.1d309d6a.css","assets/ant-design.59229fa1.js"]),meta:{title:"Abstra - Forms"}},{path:"jobs",name:"jobs",component:()=>t(()=>import("./Jobs.35c781c4.js"),["assets/Jobs.35c781c4.js","assets/outputWidgets.0510f95f.js","assets/outputWidgets.cb6d1439.css","assets/icons.cdb4433d.js","assets/asyncComputed.702ff019.js","assets/jobs.f3e1301f.js","assets/activeRecord.e4826715.js","assets/pubsub.96341e46.js","assets/CrudView.bee9cdac.js","assets/Text.50020ea6.js","assets/Base.d7f580b0.js","assets/transButton.763ee844.js","assets/router.c167d561.js","assets/Title.b2eb2014.js","assets/index.da6b8ae1.js","assets/url.27504c64.js","assets/index.52741b63.js","assets/index.cea43750.js","assets/CrudView.1d309d6a.css","assets/ant-design.59229fa1.js"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>t(()=>import("./Hooks.703d6f8a.js"),["assets/Hooks.703d6f8a.js","assets/outputWidgets.0510f95f.js","assets/outputWidgets.cb6d1439.css","assets/icons.cdb4433d.js","assets/asyncComputed.702ff019.js","assets/hooks.79e67175.js","assets/activeRecord.e4826715.js","assets/pubsub.96341e46.js","assets/CrudView.bee9cdac.js","assets/Text.50020ea6.js","assets/Base.d7f580b0.js","assets/transButton.763ee844.js","assets/router.c167d561.js","assets/Title.b2eb2014.js","assets/index.da6b8ae1.js","assets/url.27504c64.js","assets/index.52741b63.js","assets/index.cea43750.js","assets/CrudView.1d309d6a.css","assets/ant-design.59229fa1.js"]),meta:{title:"Abstra - Hooks"}},{path:"style",name:"style",component:()=>t(()=>import("./StyleEditor.8cb5ab01.js"),["assets/StyleEditor.8cb5ab01.js","assets/asyncComputed.702ff019.js","assets/outputWidgets.0510f95f.js","assets/outputWidgets.cb6d1439.css","assets/workspaces.147bf203.js","assets/activeRecord.e4826715.js","assets/pubsub.96341e46.js","assets/url.27504c64.js","assets/CircularLoading.8bee79c4.js","assets/CircularLoading.f81b57b4.css","assets/icons.cdb4433d.js","assets/Base.d7f580b0.js","assets/transButton.763ee844.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.9be73259.js","assets/ant-design.59229fa1.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.6452a936.js","assets/PlayerNavbar.7c39f010.js","assets/PlayerNavbar.d1d85d81.css","assets/WidgetsFrame.dbb60c29.js","assets/WidgetsFrame.97ae601d.css","assets/SidebarPreview.c2542c64.css","assets/Title.b2eb2014.js","assets/index.52741b63.js","assets/StyleEditor.4d8e1574.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>t(()=>import("./SidebarEditor.424a0e68.js"),["assets/SidebarEditor.424a0e68.js","assets/outputWidgets.0510f95f.js","assets/outputWidgets.cb6d1439.css","assets/index.4dc743ad.js","assets/Base.d7f580b0.js","assets/transButton.763ee844.js","assets/index.52741b63.js","assets/workspaces.147bf203.js","assets/activeRecord.e4826715.js","assets/pubsub.96341e46.js","assets/url.27504c64.js","assets/asyncComputed.702ff019.js","assets/CircularLoading.8bee79c4.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.9be73259.js","assets/ant-design.59229fa1.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.6452a936.js","assets/PlayerNavbar.7c39f010.js","assets/icons.cdb4433d.js","assets/PlayerNavbar.d1d85d81.css","assets/WidgetsFrame.dbb60c29.js","assets/WidgetsFrame.97ae601d.css","assets/SidebarPreview.c2542c64.css","assets/Title.b2eb2014.js"]),meta:{title:"Abstra - Sidebar"}},{path:"requirements",name:"requirements",component:()=>t(()=>import("./RequirementsEditor.e9770c9e.js"),["assets/RequirementsEditor.e9770c9e.js","assets/asyncComputed.702ff019.js","assets/outputWidgets.0510f95f.js","assets/outputWidgets.cb6d1439.css","assets/icons.cdb4433d.js","assets/CrudView.bee9cdac.js","assets/Text.50020ea6.js","assets/Base.d7f580b0.js","assets/transButton.763ee844.js","assets/router.c167d561.js","assets/Title.b2eb2014.js","assets/index.da6b8ae1.js","assets/url.27504c64.js","assets/index.52741b63.js","assets/index.cea43750.js","assets/CrudView.1d309d6a.css","assets/activeRecord.e4826715.js","assets/pubsub.96341e46.js"]),meta:{title:"Abstra - Requirements"}}]},{path:"form/:formPath",name:"formEditor",component:()=>t(()=>import("./FormEditor.f5c14955.js"),["assets/FormEditor.f5c14955.js","assets/outputWidgets.0510f95f.js","assets/outputWidgets.cb6d1439.css","assets/Debugger.vue_vue_type_script_setup_true_lang.f639836b.js","assets/asyncComputed.702ff019.js","assets/forms.6961df54.js","assets/activeRecord.e4826715.js","assets/pubsub.96341e46.js","assets/hooks.79e67175.js","assets/jobs.f3e1301f.js","assets/workspaces.147bf203.js","assets/url.27504c64.js","assets/icons.cdb4433d.js","assets/Base.d7f580b0.js","assets/transButton.763ee844.js","assets/Text.50020ea6.js","assets/uuid.9aa20bcc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8053ea81.js","assets/Debugger.8b9496dd.css","assets/Title.b2eb2014.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.9be73259.js","assets/ant-design.59229fa1.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.97ddb8a9.js","assets/BaseLayout.2d5b030e.css","assets/FormRunner.41e85e50.js","assets/index.8438e520.js","assets/CircularLoading.8bee79c4.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.7c39f010.js","assets/PlayerNavbar.d1d85d81.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.9aaedde5.js","assets/ActionButton.998aa76d.css","assets/WidgetsFrame.dbb60c29.js","assets/WidgetsFrame.97ae601d.css","assets/FormRunner.2a727026.css","assets/index.6d7b6007.js","assets/CollapsePanel.af576a02.js","assets/index.52741b63.js","assets/index.cea43750.js","assets/TabPane.0b2364e5.js","assets/index.51b870c4.js","assets/index.34b81398.js"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.cb4a70cd.js"),["assets/FormPreview.cb4a70cd.js","assets/outputWidgets.0510f95f.js","assets/outputWidgets.cb6d1439.css","assets/CircularLoading.8bee79c4.js","assets/CircularLoading.f81b57b4.css","assets/FormRunner.41e85e50.js","assets/url.27504c64.js","assets/index.8438e520.js","assets/pubsub.96341e46.js","assets/icons.cdb4433d.js","assets/PlayerNavbar.7c39f010.js","assets/PlayerNavbar.d1d85d81.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.9aaedde5.js","assets/ActionButton.998aa76d.css","assets/WidgetsFrame.dbb60c29.js","assets/WidgetsFrame.97ae601d.css","assets/FormRunner.2a727026.css","assets/asyncComputed.702ff019.js","assets/forms.6961df54.js","assets/activeRecord.e4826715.js","assets/workspaces.147bf203.js","assets/FormPreview.ac6e15c0.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>t(()=>import("./JobEditor.098a65d5.js"),["assets/JobEditor.098a65d5.js","assets/outputWidgets.0510f95f.js","assets/outputWidgets.cb6d1439.css","assets/Debugger.vue_vue_type_script_setup_true_lang.f639836b.js","assets/asyncComputed.702ff019.js","assets/forms.6961df54.js","assets/activeRecord.e4826715.js","assets/pubsub.96341e46.js","assets/hooks.79e67175.js","assets/jobs.f3e1301f.js","assets/workspaces.147bf203.js","assets/url.27504c64.js","assets/icons.cdb4433d.js","assets/Base.d7f580b0.js","assets/transButton.763ee844.js","assets/Text.50020ea6.js","assets/uuid.9aa20bcc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8053ea81.js","assets/Debugger.8b9496dd.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.9be73259.js","assets/ant-design.59229fa1.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.97ddb8a9.js","assets/BaseLayout.2d5b030e.css","assets/RunButton.vue_vue_type_script_setup_true_lang.8005fcd1.js","assets/index.8aea0631.js","assets/dayjs.773a98d7.js","assets/Title.b2eb2014.js","assets/index.34b81398.js","assets/TabPane.0b2364e5.js"]),meta:{title:"Abstra - Job Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>t(()=>import("./HookEditor.efe4dc85.js"),["assets/HookEditor.efe4dc85.js","assets/outputWidgets.0510f95f.js","assets/outputWidgets.cb6d1439.css","assets/Debugger.vue_vue_type_script_setup_true_lang.f639836b.js","assets/asyncComputed.702ff019.js","assets/forms.6961df54.js","assets/activeRecord.e4826715.js","assets/pubsub.96341e46.js","assets/hooks.79e67175.js","assets/jobs.f3e1301f.js","assets/workspaces.147bf203.js","assets/url.27504c64.js","assets/icons.cdb4433d.js","assets/Base.d7f580b0.js","assets/transButton.763ee844.js","assets/Text.50020ea6.js","assets/uuid.9aa20bcc.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.8053ea81.js","assets/Debugger.8b9496dd.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.9be73259.js","assets/ant-design.59229fa1.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.97ddb8a9.js","assets/BaseLayout.2d5b030e.css","assets/RunButton.vue_vue_type_script_setup_true_lang.8005fcd1.js","assets/index.73733ce7.js","assets/CollapsePanel.af576a02.js","assets/index.cea43750.js","assets/index.52741b63.js","assets/index.34b81398.js","assets/TabPane.0b2364e5.js"]),meta:{title:"Abstra - Hook Editor"}}]},...C],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{j(e,o)});(async()=>{await Promise.all([S(),W()]);const e=P({render:()=>V(B)});I.init(),w(e,a),e.use(a),e.use(y),e.mount("#app"),e.component("VSelect",g),e.component("Markdown",k),e.component("Icon",D),e.component("Message",R),r(e,T),r(e,L),r(e,O)})();
//# sourceMappingURL=editor.8c7850c7.js.map
