import{r as _,d as m,o as d,a as p,b as c,c as h,e as u,f as l,g as b,_ as t,h as E,T as f,i as v,P as A,C as P,M as I,I as w,s as D,j as a,k as y,l as T,m as V,n as g}from"./registerWidgets.2f354556.js";import{u as R}from"./index.afe47008.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="1952a494-7ba9-42ff-aa37-61bab4a43de4",e._sentryDebugIdIdentifier="sentry-dbid-1952a494-7ba9-42ff-aa37-61bab4a43de4")}catch{}})();const s=_(!1),k=()=>{window.innerWidth<780?s.value=!0:s.value=!1},L={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},O=m({__name:"App",setup(e){return d(()=>{window.addEventListener("resize",k)}),(o,n)=>{const i=p("router-view");return c(),h("div",L,[u(i)])}}});const r=l({history:b("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.f86be171.js"),["assets/Home.f86be171.js","assets/Modal.55b06151.js","assets/registerWidgets.2f354556.js","assets/registerWidgets.eb368e85.css","assets/Modal.5aaf8eba.css","assets/Home.3d251a01.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.486bb0aa.js"),["assets/Workspace.486bb0aa.js","assets/registerWidgets.2f354556.js","assets/registerWidgets.eb368e85.css","assets/icons.1cdfa11b.js","assets/Tooltip.38335a1d.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/asyncComputed.7c1b85ba.js","assets/workspaces.0873a2c8.js","assets/activeRecord.931023a0.js","assets/pubsub.cb65003c.js","assets/DocsButton.480cc694.js","assets/DocsButton.d2184c76.css","assets/Workspace.4ee77fdc.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>t(()=>import("./Forms.f5db3f3e.js"),["assets/Forms.f5db3f3e.js","assets/registerWidgets.2f354556.js","assets/registerWidgets.eb368e85.css","assets/icons.1cdfa11b.js","assets/asyncComputed.7c1b85ba.js","assets/forms.1fbdd547.js","assets/activeRecord.931023a0.js","assets/pubsub.cb65003c.js","assets/RuntimeList.d806a58a.js","assets/DropdownMenu.f3f9574e.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.f70f248e.js","assets/lottie.61602e49.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>t(()=>import("./Dashes.327798f5.js"),["assets/Dashes.327798f5.js","assets/registerWidgets.2f354556.js","assets/registerWidgets.eb368e85.css","assets/icons.1cdfa11b.js","assets/asyncComputed.7c1b85ba.js","assets/dashes.d1956b8d.js","assets/activeRecord.931023a0.js","assets/pubsub.cb65003c.js","assets/index.afe47008.js","assets/RuntimeList.d806a58a.js","assets/DropdownMenu.f3f9574e.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.f70f248e.js","assets/lottie.61602e49.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>t(()=>import("./Jobs.8adfdab5.js"),["assets/Jobs.8adfdab5.js","assets/registerWidgets.2f354556.js","assets/registerWidgets.eb368e85.css","assets/icons.1cdfa11b.js","assets/asyncComputed.7c1b85ba.js","assets/jobs.36d8ff14.js","assets/activeRecord.931023a0.js","assets/pubsub.cb65003c.js","assets/RuntimeList.d806a58a.js","assets/DropdownMenu.f3f9574e.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.f70f248e.js","assets/lottie.61602e49.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>t(()=>import("./Hooks.6739ba57.js"),["assets/Hooks.6739ba57.js","assets/registerWidgets.2f354556.js","assets/registerWidgets.eb368e85.css","assets/icons.1cdfa11b.js","assets/asyncComputed.7c1b85ba.js","assets/hooks.9a7f115d.js","assets/activeRecord.931023a0.js","assets/pubsub.cb65003c.js","assets/RuntimeList.d806a58a.js","assets/DropdownMenu.f3f9574e.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.f70f248e.js","assets/lottie.61602e49.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Hooks"}},{path:"style",name:"style",component:()=>t(()=>import("./StyleEditor.c91d8136.js"),["assets/StyleEditor.c91d8136.js","assets/registerWidgets.2f354556.js","assets/registerWidgets.eb368e85.css","assets/asyncComputed.7c1b85ba.js","assets/workspaces.0873a2c8.js","assets/activeRecord.931023a0.js","assets/pubsub.cb65003c.js","assets/CircularLoading.f70f248e.js","assets/lottie.61602e49.js","assets/CircularLoading.f81b57b4.css","assets/icons.1cdfa11b.js","assets/SaveButton.14adcf95.js","assets/SaveButton.c5392044.css","assets/SidebarPreview.44129074.js","assets/PlayerNavbar.bedaf2b3.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.afe47008.js","assets/WidgetsFrame.ade6550a.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/StyleEditor.b552686c.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>t(()=>import("./SidebarEditor.4232d2cb.js"),["assets/SidebarEditor.4232d2cb.js","assets/registerWidgets.2f354556.js","assets/registerWidgets.eb368e85.css","assets/workspaces.0873a2c8.js","assets/activeRecord.931023a0.js","assets/pubsub.cb65003c.js","assets/asyncComputed.7c1b85ba.js","assets/CircularLoading.f70f248e.js","assets/lottie.61602e49.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.14adcf95.js","assets/icons.1cdfa11b.js","assets/SaveButton.c5392044.css","assets/SidebarPreview.44129074.js","assets/PlayerNavbar.bedaf2b3.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.afe47008.js","assets/WidgetsFrame.ade6550a.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/SidebarEditor.c089a033.css"]),meta:{title:"Abstra - Sidebar"}}]},{path:"form/:formPath",name:"formEditor",component:()=>t(()=>import("./FormEditor.d803dd8d.js"),["assets/FormEditor.d803dd8d.js","assets/registerWidgets.2f354556.js","assets/registerWidgets.eb368e85.css","assets/CircularLoading.f70f248e.js","assets/lottie.61602e49.js","assets/CircularLoading.f81b57b4.css","assets/Error.a5fbdd2d.js","assets/Error.5cfc41d8.css","assets/broker.8b121cd9.js","assets/passwordlessManager.96ab3f5a.js","assets/pubsub.cb65003c.js","assets/Passwordless.1cb3171a.js","assets/icons.1cdfa11b.js","assets/Passwordless.86ac0c56.css","assets/executeJs.27fe2afb.js","assets/PlayerNavbar.bedaf2b3.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.afe47008.js","assets/Steps.74e2104a.js","assets/Steps.998aa76d.css","assets/Modal.55b06151.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/WidgetsFrame.ade6550a.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.ab6c6d5f.js","assets/broker.2e000de9.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.a36627c3.js","assets/asyncComputed.7c1b85ba.js","assets/forms.1fbdd547.js","assets/activeRecord.931023a0.js","assets/dashes.d1956b8d.js","assets/hooks.9a7f115d.js","assets/jobs.36d8ff14.js","assets/workspaces.0873a2c8.js","assets/uuid.9b12df3f.js","assets/DocsButton.480cc694.js","assets/DocsButton.d2184c76.css","assets/UnsavedChangesHandler.2e5679a7.css","assets/BackButton.eaf2f88a.js","assets/BackButton.40348456.css","assets/SaveButton.14adcf95.js","assets/SaveButton.c5392044.css","assets/PreviewButton.a51aac22.js","assets/PreviewButton.52324bbf.css","assets/FormEditor.df31fd81.css"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.638bed69.js"),["assets/FormPreview.638bed69.js","assets/registerWidgets.2f354556.js","assets/registerWidgets.eb368e85.css","assets/CircularLoading.f70f248e.js","assets/lottie.61602e49.js","assets/CircularLoading.f81b57b4.css","assets/Error.a5fbdd2d.js","assets/Error.5cfc41d8.css","assets/broker.8b121cd9.js","assets/passwordlessManager.96ab3f5a.js","assets/pubsub.cb65003c.js","assets/Passwordless.1cb3171a.js","assets/icons.1cdfa11b.js","assets/Passwordless.86ac0c56.css","assets/executeJs.27fe2afb.js","assets/PlayerNavbar.bedaf2b3.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.afe47008.js","assets/Steps.74e2104a.js","assets/Steps.998aa76d.css","assets/Modal.55b06151.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/WidgetsFrame.ade6550a.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.ab6c6d5f.js","assets/broker.2e000de9.css","assets/BackButton.d3af3b6e.js","assets/BackButton.dd542746.css","assets/asyncComputed.7c1b85ba.js","assets/forms.1fbdd547.js","assets/activeRecord.931023a0.js","assets/workspaces.0873a2c8.js","assets/FormPreview.77e60739.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>t(()=>import("./JobEditor.47702bee.js"),["assets/JobEditor.47702bee.js","assets/registerWidgets.2f354556.js","assets/registerWidgets.eb368e85.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.a36627c3.js","assets/icons.1cdfa11b.js","assets/asyncComputed.7c1b85ba.js","assets/forms.1fbdd547.js","assets/activeRecord.931023a0.js","assets/pubsub.cb65003c.js","assets/dashes.d1956b8d.js","assets/index.afe47008.js","assets/hooks.9a7f115d.js","assets/jobs.36d8ff14.js","assets/workspaces.0873a2c8.js","assets/uuid.9b12df3f.js","assets/DocsButton.480cc694.js","assets/DocsButton.d2184c76.css","assets/UnsavedChangesHandler.2e5679a7.css","assets/CircularLoading.f70f248e.js","assets/lottie.61602e49.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.14adcf95.js","assets/SaveButton.c5392044.css","assets/BackButton.eaf2f88a.js","assets/BackButton.40348456.css","assets/JobEditor.d8bbc89c.css"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>t(()=>import("./DashEditor.d702d90f.js"),["assets/DashEditor.d702d90f.js","assets/index.afe47008.js","assets/registerWidgets.2f354556.js","assets/registerWidgets.eb368e85.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.a36627c3.js","assets/icons.1cdfa11b.js","assets/asyncComputed.7c1b85ba.js","assets/forms.1fbdd547.js","assets/activeRecord.931023a0.js","assets/pubsub.cb65003c.js","assets/dashes.d1956b8d.js","assets/hooks.9a7f115d.js","assets/jobs.36d8ff14.js","assets/workspaces.0873a2c8.js","assets/uuid.9b12df3f.js","assets/DocsButton.480cc694.js","assets/DocsButton.d2184c76.css","assets/UnsavedChangesHandler.2e5679a7.css","assets/DashPlayer.813c0f29.js","assets/executeJs.27fe2afb.js","assets/PlayerNavbar.bedaf2b3.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.74e2104a.js","assets/Steps.998aa76d.css","assets/Modal.55b06151.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/passwordlessManager.96ab3f5a.js","assets/Passwordless.1cb3171a.js","assets/CircularLoading.f70f248e.js","assets/lottie.61602e49.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.86ac0c56.css","assets/WidgetsFrame.ade6550a.js","assets/WidgetsFrame.0816a5f5.css","assets/DashPlayer.4868beea.css","assets/BackButton.eaf2f88a.js","assets/BackButton.40348456.css","assets/SaveButton.14adcf95.js","assets/SaveButton.c5392044.css","assets/PreviewButton.a51aac22.js","assets/PreviewButton.52324bbf.css","assets/DashEditor.ce51c045.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>t(()=>import("./DashPreview.9964186b.js"),["assets/DashPreview.9964186b.js","assets/registerWidgets.2f354556.js","assets/registerWidgets.eb368e85.css","assets/DashPlayer.813c0f29.js","assets/executeJs.27fe2afb.js","assets/PlayerNavbar.bedaf2b3.js","assets/icons.1cdfa11b.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.afe47008.js","assets/Steps.74e2104a.js","assets/Steps.998aa76d.css","assets/Modal.55b06151.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/passwordlessManager.96ab3f5a.js","assets/pubsub.cb65003c.js","assets/Passwordless.1cb3171a.js","assets/CircularLoading.f70f248e.js","assets/lottie.61602e49.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.86ac0c56.css","assets/WidgetsFrame.ade6550a.js","assets/WidgetsFrame.0816a5f5.css","assets/DashPlayer.4868beea.css","assets/BackButton.d3af3b6e.js","assets/BackButton.dd542746.css","assets/asyncComputed.7c1b85ba.js","assets/dashes.d1956b8d.js","assets/activeRecord.931023a0.js","assets/workspaces.0873a2c8.js","assets/DashPreview.a3f29850.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>t(()=>import("./HookEditor.115626fd.js"),["assets/HookEditor.115626fd.js","assets/registerWidgets.2f354556.js","assets/registerWidgets.eb368e85.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.a36627c3.js","assets/icons.1cdfa11b.js","assets/asyncComputed.7c1b85ba.js","assets/forms.1fbdd547.js","assets/activeRecord.931023a0.js","assets/pubsub.cb65003c.js","assets/dashes.d1956b8d.js","assets/index.afe47008.js","assets/hooks.9a7f115d.js","assets/jobs.36d8ff14.js","assets/workspaces.0873a2c8.js","assets/uuid.9b12df3f.js","assets/DocsButton.480cc694.js","assets/DocsButton.d2184c76.css","assets/UnsavedChangesHandler.2e5679a7.css","assets/CircularLoading.f70f248e.js","assets/lottie.61602e49.js","assets/CircularLoading.f81b57b4.css","assets/BackButton.eaf2f88a.js","assets/BackButton.40348456.css","assets/SaveButton.14adcf95.js","assets/SaveButton.c5392044.css","assets/HookEditor.1c22dc94.css"]),meta:{title:"Abstra - Hook Editor"}}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});r.beforeEach(async(e,o)=>{R(e,o)});(async()=>{const e=E({render:()=>y(O)});f.init(),v(e,r),e.use(r),e.use(A),e.mount("#app"),e.component("VSelect",P),e.component("Markdown",I),e.component("Icon",w),e.component("Message",D),a(e,T),a(e,V),a(e,g)})();
//# sourceMappingURL=editor.4d93ee38.js.map
