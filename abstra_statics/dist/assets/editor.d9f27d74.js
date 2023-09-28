import{r as _,d as m,o as d,a as p,b as c,c as h,w as u,e as l,f as E,u as b,A as f,g as v,h as A,_ as t,i as w,T as P,j as I,P as D,C as y,M as k,I as V,s as T,k as r,l as g,m as R,n as L,p as O}from"./registerWidgets.fc4aaf77.js";import{u as W}from"./index.bcf94753.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="5e18cf47-b444-4466-b116-935a9160942a",e._sentryDebugIdIdentifier="sentry-dbid-5e18cf47-b444-4466-b116-935a9160942a")}catch{}})();const s=_(!1),j=()=>{window.innerWidth<780?s.value=!0:s.value=!1},C={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},S=m({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return d(()=>{window.addEventListener("resize",j)}),(n,x)=>{const i=p("router-view");return c(),h(b(f),{theme:o},{default:u(()=>[l("div",C,[E(i)])]),_:1})}}});const a=v({history:A("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.a0135186.js"),["assets/Home.a0135186.js","assets/Modal.83b244c5.js","assets/registerWidgets.fc4aaf77.js","assets/registerWidgets.8ce475af.css","assets/Modal.5aaf8eba.css","assets/Home.3d251a01.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.5c52a247.js"),["assets/Workspace.5c52a247.js","assets/registerWidgets.fc4aaf77.js","assets/registerWidgets.8ce475af.css","assets/icons.31c6cada.js","assets/Tooltip.00bbfb41.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/LoginBlock.0b166c2b.js","assets/workspaces.1ea680c1.js","assets/activeRecord.c7aeb378.js","assets/pubsub.e94178aa.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.099f31ea.js","assets/popupNotifcation.68117456.js","assets/asyncComputed.08c94e64.js","assets/index.57939bee.js","assets/Title.e61358fd.js","assets/index.8f0404ae.js","assets/Form.0f5e6fd6.js","assets/LoginBlock.d273f904.css","assets/BaseLayout.d9dfdb9d.js","assets/BaseLayout.282f66f6.css","assets/index.40af30fb.js","assets/index.2bc8768f.js","assets/Workspace.9a25b177.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>t(()=>import("./Forms.846c5783.js"),["assets/Forms.846c5783.js","assets/registerWidgets.fc4aaf77.js","assets/registerWidgets.8ce475af.css","assets/icons.31c6cada.js","assets/asyncComputed.08c94e64.js","assets/forms.a2bda782.js","assets/activeRecord.c7aeb378.js","assets/pubsub.e94178aa.js","assets/CrudView.vue_vue_type_script_setup_true_lang.83b64b42.js","assets/index.57939bee.js","assets/Title.e61358fd.js","assets/Form.0f5e6fd6.js","assets/index.d68febc2.js","assets/index.03c05555.js","assets/index.b20d49a5.js","assets/index.54d5cd76.js","assets/index.2bc8768f.js","assets/ant-design.50360d3d.js"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>t(()=>import("./Dashes.988b5ac6.js"),["assets/Dashes.988b5ac6.js","assets/registerWidgets.fc4aaf77.js","assets/registerWidgets.8ce475af.css","assets/icons.31c6cada.js","assets/asyncComputed.08c94e64.js","assets/dashes.602745a1.js","assets/activeRecord.c7aeb378.js","assets/pubsub.e94178aa.js","assets/index.bcf94753.js","assets/CrudView.vue_vue_type_script_setup_true_lang.83b64b42.js","assets/index.57939bee.js","assets/Title.e61358fd.js","assets/Form.0f5e6fd6.js","assets/index.d68febc2.js","assets/index.03c05555.js","assets/index.b20d49a5.js","assets/index.54d5cd76.js","assets/index.2bc8768f.js","assets/ant-design.50360d3d.js"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>t(()=>import("./Jobs.ef0990c6.js"),["assets/Jobs.ef0990c6.js","assets/registerWidgets.fc4aaf77.js","assets/registerWidgets.8ce475af.css","assets/icons.31c6cada.js","assets/asyncComputed.08c94e64.js","assets/jobs.8ca7afc6.js","assets/activeRecord.c7aeb378.js","assets/pubsub.e94178aa.js","assets/CrudView.vue_vue_type_script_setup_true_lang.83b64b42.js","assets/index.57939bee.js","assets/Title.e61358fd.js","assets/Form.0f5e6fd6.js","assets/index.d68febc2.js","assets/index.03c05555.js","assets/index.b20d49a5.js","assets/index.54d5cd76.js","assets/index.2bc8768f.js","assets/ant-design.50360d3d.js"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>t(()=>import("./Hooks.f1cc32eb.js"),["assets/Hooks.f1cc32eb.js","assets/registerWidgets.fc4aaf77.js","assets/registerWidgets.8ce475af.css","assets/icons.31c6cada.js","assets/asyncComputed.08c94e64.js","assets/hooks.a989bd0d.js","assets/activeRecord.c7aeb378.js","assets/pubsub.e94178aa.js","assets/CrudView.vue_vue_type_script_setup_true_lang.83b64b42.js","assets/index.57939bee.js","assets/Title.e61358fd.js","assets/Form.0f5e6fd6.js","assets/index.d68febc2.js","assets/index.03c05555.js","assets/index.b20d49a5.js","assets/index.54d5cd76.js","assets/index.2bc8768f.js","assets/ant-design.50360d3d.js"]),meta:{title:"Abstra - Hooks"}},{path:"style",name:"style",component:()=>t(()=>import("./StyleEditor.3bb8451a.js"),["assets/StyleEditor.3bb8451a.js","assets/asyncComputed.08c94e64.js","assets/registerWidgets.fc4aaf77.js","assets/registerWidgets.8ce475af.css","assets/workspaces.1ea680c1.js","assets/activeRecord.c7aeb378.js","assets/pubsub.e94178aa.js","assets/CircularLoading.d772a7c5.js","assets/CircularLoading.f81b57b4.css","assets/icons.31c6cada.js","assets/index.dff79f31.js","assets/Title.e61358fd.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.15e353e7.js","assets/ant-design.50360d3d.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.8ff9213c.js","assets/PlayerNavbar.a025303a.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.bcf94753.js","assets/WidgetsFrame.bc8bd9eb.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/index.54d5cd76.js","assets/Form.0f5e6fd6.js","assets/StyleEditor.4d8e1574.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>t(()=>import("./SidebarEditor.eb5af9df.js"),["assets/SidebarEditor.eb5af9df.js","assets/registerWidgets.fc4aaf77.js","assets/registerWidgets.8ce475af.css","assets/index.ffd94e4d.js","assets/Title.e61358fd.js","assets/index.2bc8768f.js","assets/index.54d5cd76.js","assets/workspaces.1ea680c1.js","assets/activeRecord.c7aeb378.js","assets/pubsub.e94178aa.js","assets/asyncComputed.08c94e64.js","assets/CircularLoading.d772a7c5.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.15e353e7.js","assets/ant-design.50360d3d.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.8ff9213c.js","assets/PlayerNavbar.a025303a.js","assets/icons.31c6cada.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.bcf94753.js","assets/WidgetsFrame.bc8bd9eb.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/Form.0f5e6fd6.js"]),meta:{title:"Abstra - Sidebar"}}]},{path:"form/:formPath",name:"formEditor",component:()=>t(()=>import("./FormEditor.984dc044.js"),["assets/FormEditor.984dc044.js","assets/registerWidgets.fc4aaf77.js","assets/registerWidgets.8ce475af.css","assets/FormTester.vue_vue_type_script_setup_true_lang.04ccab5e.js","assets/SmartConsole.18902c91.js","assets/asyncComputed.08c94e64.js","assets/forms.a2bda782.js","assets/activeRecord.c7aeb378.js","assets/pubsub.e94178aa.js","assets/dashes.602745a1.js","assets/index.bcf94753.js","assets/hooks.a989bd0d.js","assets/jobs.8ca7afc6.js","assets/workspaces.1ea680c1.js","assets/icons.31c6cada.js","assets/Title.e61358fd.js","assets/index.b20d49a5.js","assets/uuid.2a39c9f1.js","assets/storage.89590580.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.099f31ea.js","assets/SmartConsole.ed33cdbe.css","assets/Form.0f5e6fd6.js","assets/broker.ff670509.js","assets/passwordlessManager.c8e435b3.js","assets/Passwordless.f1897e8d.js","assets/CircularLoading.d772a7c5.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.38735f5c.css","assets/executeJs.85211c29.js","assets/PlayerNavbar.a025303a.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.a243ea68.js","assets/Steps.998aa76d.css","assets/Modal.83b244c5.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/WidgetsFrame.bc8bd9eb.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.11b9d505.js","assets/broker.fcc295cc.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.15e353e7.js","assets/ant-design.50360d3d.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.d9dfdb9d.js","assets/BaseLayout.282f66f6.css","assets/TabPane.4347ecc0.js","assets/index.75b1f411.js","assets/index.40af30fb.js","assets/index.2bc8768f.js"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.bbb5afe5.js"),["assets/FormPreview.bbb5afe5.js","assets/registerWidgets.fc4aaf77.js","assets/registerWidgets.8ce475af.css","assets/CircularLoading.d772a7c5.js","assets/CircularLoading.f81b57b4.css","assets/broker.ff670509.js","assets/passwordlessManager.c8e435b3.js","assets/pubsub.e94178aa.js","assets/storage.89590580.js","assets/Passwordless.f1897e8d.js","assets/icons.31c6cada.js","assets/Passwordless.38735f5c.css","assets/executeJs.85211c29.js","assets/PlayerNavbar.a025303a.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.bcf94753.js","assets/Steps.a243ea68.js","assets/Steps.998aa76d.css","assets/Modal.83b244c5.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/WidgetsFrame.bc8bd9eb.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.11b9d505.js","assets/broker.fcc295cc.css","assets/BackButton.f66d136a.js","assets/BackButton.dd542746.css","assets/asyncComputed.08c94e64.js","assets/forms.a2bda782.js","assets/activeRecord.c7aeb378.js","assets/workspaces.1ea680c1.js","assets/FormPreview.0cd86555.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>t(()=>import("./JobEditor.9a858f21.js"),["assets/JobEditor.9a858f21.js","assets/registerWidgets.fc4aaf77.js","assets/registerWidgets.8ce475af.css","assets/SmartConsole.18902c91.js","assets/asyncComputed.08c94e64.js","assets/forms.a2bda782.js","assets/activeRecord.c7aeb378.js","assets/pubsub.e94178aa.js","assets/dashes.602745a1.js","assets/index.bcf94753.js","assets/hooks.a989bd0d.js","assets/jobs.8ca7afc6.js","assets/workspaces.1ea680c1.js","assets/icons.31c6cada.js","assets/Title.e61358fd.js","assets/index.b20d49a5.js","assets/uuid.2a39c9f1.js","assets/storage.89590580.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.099f31ea.js","assets/SmartConsole.ed33cdbe.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.15e353e7.js","assets/ant-design.50360d3d.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.d9dfdb9d.js","assets/BaseLayout.282f66f6.css","assets/JobSettings.vue_vue_type_script_setup_true_lang.b419e097.js","assets/dayjs.a2d0a9bc.js","assets/index.d68febc2.js","assets/Form.0f5e6fd6.js","assets/index.40af30fb.js","assets/index.2bc8768f.js","assets/TabPane.4347ecc0.js"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>t(()=>import("./DashEditor.c3d6b094.js"),["assets/DashEditor.c3d6b094.js","assets/index.bcf94753.js","assets/registerWidgets.fc4aaf77.js","assets/registerWidgets.8ce475af.css","assets/BaseLayout.d9dfdb9d.js","assets/BaseLayout.282f66f6.css","assets/DashPlayer.c080d048.js","assets/executeJs.85211c29.js","assets/PlayerNavbar.a025303a.js","assets/icons.31c6cada.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.a243ea68.js","assets/Steps.998aa76d.css","assets/Modal.83b244c5.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/geometryUtils.d637db37.js","assets/passwordlessManager.c8e435b3.js","assets/pubsub.e94178aa.js","assets/storage.89590580.js","assets/Passwordless.f1897e8d.js","assets/CircularLoading.d772a7c5.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.38735f5c.css","assets/WidgetsFrame.bc8bd9eb.js","assets/WidgetsFrame.0816a5f5.css","assets/DashPlayer.4868beea.css","assets/SmartConsole.18902c91.js","assets/asyncComputed.08c94e64.js","assets/forms.a2bda782.js","assets/activeRecord.c7aeb378.js","assets/dashes.602745a1.js","assets/hooks.a989bd0d.js","assets/jobs.8ca7afc6.js","assets/workspaces.1ea680c1.js","assets/Title.e61358fd.js","assets/index.b20d49a5.js","assets/uuid.2a39c9f1.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.099f31ea.js","assets/SmartConsole.ed33cdbe.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.15e353e7.js","assets/ant-design.50360d3d.js","assets/SaveButton.13ece1cb.css","assets/keyboard.dfbb827e.js","assets/index.40af30fb.js","assets/index.2bc8768f.js","assets/TabPane.4347ecc0.js","assets/DashEditor.b1e4d748.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>t(()=>import("./DashPreview.fb68d84f.js"),["assets/DashPreview.fb68d84f.js","assets/registerWidgets.fc4aaf77.js","assets/registerWidgets.8ce475af.css","assets/DashPlayer.c080d048.js","assets/executeJs.85211c29.js","assets/PlayerNavbar.a025303a.js","assets/icons.31c6cada.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.bcf94753.js","assets/Steps.a243ea68.js","assets/Steps.998aa76d.css","assets/Modal.83b244c5.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/geometryUtils.d637db37.js","assets/passwordlessManager.c8e435b3.js","assets/pubsub.e94178aa.js","assets/storage.89590580.js","assets/Passwordless.f1897e8d.js","assets/CircularLoading.d772a7c5.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.38735f5c.css","assets/WidgetsFrame.bc8bd9eb.js","assets/WidgetsFrame.0816a5f5.css","assets/DashPlayer.4868beea.css","assets/BackButton.f66d136a.js","assets/BackButton.dd542746.css","assets/asyncComputed.08c94e64.js","assets/dashes.602745a1.js","assets/activeRecord.c7aeb378.js","assets/workspaces.1ea680c1.js","assets/DashPreview.a3f29850.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>t(()=>import("./HookEditor.0bd6d2a3.js"),["assets/HookEditor.0bd6d2a3.js","assets/registerWidgets.fc4aaf77.js","assets/registerWidgets.8ce475af.css","assets/SmartConsole.18902c91.js","assets/asyncComputed.08c94e64.js","assets/forms.a2bda782.js","assets/activeRecord.c7aeb378.js","assets/pubsub.e94178aa.js","assets/dashes.602745a1.js","assets/index.bcf94753.js","assets/hooks.a989bd0d.js","assets/jobs.8ca7afc6.js","assets/workspaces.1ea680c1.js","assets/icons.31c6cada.js","assets/Title.e61358fd.js","assets/index.b20d49a5.js","assets/uuid.2a39c9f1.js","assets/storage.89590580.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.099f31ea.js","assets/SmartConsole.ed33cdbe.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.15e353e7.js","assets/ant-design.50360d3d.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.d9dfdb9d.js","assets/BaseLayout.282f66f6.css","assets/HookSettings.vue_vue_type_script_setup_true_lang.42214da6.js","assets/index.ff64f072.js","assets/index.2bc8768f.js","assets/index.54d5cd76.js","assets/index.d68febc2.js","assets/Form.0f5e6fd6.js","assets/index.40af30fb.js","assets/TabPane.4347ecc0.js"]),meta:{title:"Abstra - Hook Editor"}},{path:"workflow",name:"workflowEditor",component:()=>t(()=>import("./WorkflowEditor.937aeb10.js"),["assets/WorkflowEditor.937aeb10.js","assets/registerWidgets.fc4aaf77.js","assets/registerWidgets.8ce475af.css","assets/workspaces.1ea680c1.js","assets/activeRecord.c7aeb378.js","assets/pubsub.e94178aa.js","assets/icons.31c6cada.js","assets/FormTester.vue_vue_type_script_setup_true_lang.04ccab5e.js","assets/SmartConsole.18902c91.js","assets/asyncComputed.08c94e64.js","assets/forms.a2bda782.js","assets/dashes.602745a1.js","assets/index.bcf94753.js","assets/hooks.a989bd0d.js","assets/jobs.8ca7afc6.js","assets/Title.e61358fd.js","assets/index.b20d49a5.js","assets/uuid.2a39c9f1.js","assets/storage.89590580.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.099f31ea.js","assets/SmartConsole.ed33cdbe.css","assets/Form.0f5e6fd6.js","assets/broker.ff670509.js","assets/passwordlessManager.c8e435b3.js","assets/Passwordless.f1897e8d.js","assets/CircularLoading.d772a7c5.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.38735f5c.css","assets/executeJs.85211c29.js","assets/PlayerNavbar.a025303a.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.a243ea68.js","assets/Steps.998aa76d.css","assets/Modal.83b244c5.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/WidgetsFrame.bc8bd9eb.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.11b9d505.js","assets/broker.fcc295cc.css","assets/geometryUtils.d637db37.js","assets/keyboard.dfbb827e.js","assets/ant-design.50360d3d.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.15e353e7.js","assets/SaveButton.13ece1cb.css","assets/HookSettings.vue_vue_type_script_setup_true_lang.42214da6.js","assets/index.ff64f072.js","assets/index.2bc8768f.js","assets/index.54d5cd76.js","assets/index.d68febc2.js","assets/JobSettings.vue_vue_type_script_setup_true_lang.b419e097.js","assets/dayjs.a2d0a9bc.js","assets/index.57939bee.js","assets/index.ffd94e4d.js","assets/LoginBlock.0b166c2b.js","assets/popupNotifcation.68117456.js","assets/index.8f0404ae.js","assets/LoginBlock.d273f904.css","assets/index.40af30fb.js","assets/index.7677db1d.js","assets/TabPane.4347ecc0.js","assets/WorkflowEditor.6d840334.css"]),meta:{title:"Abstra - Workflow Editor"}}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{W(e,o)});(async()=>{const e=w({render:()=>g(S)});P.init(),I(e,a),e.use(a),e.use(D),e.mount("#app"),e.component("VSelect",y),e.component("Markdown",k),e.component("Icon",V),e.component("Message",T),r(e,R),r(e,L),r(e,O)})();
//# sourceMappingURL=editor.d9f27d74.js.map
