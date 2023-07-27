import{r as _,d as m,o as d,a as p,b as c,c as h,e as l,f as u,g as E,_ as t,h as b,T as v,i as A,P as f,C as P,M as I,I as D,s as w,j as a,k as T,l as y,m as V,n as R}from"./registerWidgets.7cf0d33e.js";import{u as L}from"./index.2b2e98e0.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="d8405885-9c81-45a3-a2f6-321dad1489ca",e._sentryDebugIdIdentifier="sentry-dbid-d8405885-9c81-45a3-a2f6-321dad1489ca")}catch{}})();const s=_(!1),g=()=>{window.innerWidth<780?s.value=!0:s.value=!1},O={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},k=m({__name:"App",setup(e){return d(()=>{window.addEventListener("resize",g)}),(o,n)=>{const i=p("router-view");return c(),h("div",O,[l(i)])}}});const r=u({history:E("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.dfd9591f.js"),["assets/Home.dfd9591f.js","assets/Modal.f8435634.js","assets/registerWidgets.7cf0d33e.js","assets/registerWidgets.a7e6ab4f.css","assets/Modal.5aaf8eba.css","assets/Home.1c04d83a.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.ff6d4963.js"),["assets/Workspace.ff6d4963.js","assets/registerWidgets.7cf0d33e.js","assets/registerWidgets.a7e6ab4f.css","assets/icons.5faf907f.js","assets/Tooltip.fff0be2d.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/asyncComputed.0ce7cae2.js","assets/workspaces.c4b96bd7.js","assets/activeRecord.bddbe06b.js","assets/login.5e2460d5.js","assets/DocsButton.60135abd.js","assets/DocsButton.d2184c76.css","assets/Workspace.4d7eaba0.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>t(()=>import("./Forms.9d136ac5.js"),["assets/Forms.9d136ac5.js","assets/registerWidgets.7cf0d33e.js","assets/registerWidgets.a7e6ab4f.css","assets/icons.5faf907f.js","assets/asyncComputed.0ce7cae2.js","assets/forms.d35d26f9.js","assets/activeRecord.bddbe06b.js","assets/RuntimeList.0e2337be.js","assets/DropdownMenu.e550c7c7.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.252e5f3b.js","assets/lottie.adcbdb1d.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>t(()=>import("./Dashes.da4787af.js"),["assets/Dashes.da4787af.js","assets/registerWidgets.7cf0d33e.js","assets/registerWidgets.a7e6ab4f.css","assets/icons.5faf907f.js","assets/asyncComputed.0ce7cae2.js","assets/dashes.a3a598a8.js","assets/activeRecord.bddbe06b.js","assets/runnerData.a3a3f9aa.js","assets/RuntimeList.0e2337be.js","assets/DropdownMenu.e550c7c7.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.252e5f3b.js","assets/lottie.adcbdb1d.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>t(()=>import("./Jobs.f42755a4.js"),["assets/Jobs.f42755a4.js","assets/registerWidgets.7cf0d33e.js","assets/registerWidgets.a7e6ab4f.css","assets/icons.5faf907f.js","assets/asyncComputed.0ce7cae2.js","assets/jobs.9bd8bf32.js","assets/activeRecord.bddbe06b.js","assets/RuntimeList.0e2337be.js","assets/DropdownMenu.e550c7c7.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.252e5f3b.js","assets/lottie.adcbdb1d.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>t(()=>import("./Hooks.ac732ce4.js"),["assets/Hooks.ac732ce4.js","assets/registerWidgets.7cf0d33e.js","assets/registerWidgets.a7e6ab4f.css","assets/icons.5faf907f.js","assets/asyncComputed.0ce7cae2.js","assets/hooks.85d73e6c.js","assets/activeRecord.bddbe06b.js","assets/RuntimeList.0e2337be.js","assets/DropdownMenu.e550c7c7.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.252e5f3b.js","assets/lottie.adcbdb1d.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Hooks"}},{path:"tables",name:"tables",component:()=>t(()=>import("./Tables.32739412.js"),["assets/Tables.32739412.js","assets/registerWidgets.7cf0d33e.js","assets/registerWidgets.a7e6ab4f.css","assets/icons.5faf907f.js","assets/asyncComputed.0ce7cae2.js","assets/tables.a6a74d94.js","assets/activeRecord.bddbe06b.js","assets/RuntimeList.0e2337be.js","assets/DropdownMenu.e550c7c7.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.252e5f3b.js","assets/lottie.adcbdb1d.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Tables"}},{path:"style",name:"style",component:()=>t(()=>import("./StyleEditor.5161bad5.js"),["assets/StyleEditor.5161bad5.js","assets/registerWidgets.7cf0d33e.js","assets/registerWidgets.a7e6ab4f.css","assets/asyncComputed.0ce7cae2.js","assets/workspaces.c4b96bd7.js","assets/activeRecord.bddbe06b.js","assets/CircularLoading.252e5f3b.js","assets/lottie.adcbdb1d.js","assets/CircularLoading.f81b57b4.css","assets/icons.5faf907f.js","assets/SidebarPreview.e9152a0b.js","assets/PlayerNavbar.4bce3b06.js","assets/PlayerNavbar.1542e7ca.css","assets/runnerData.a3a3f9aa.js","assets/colors.3380771c.js","assets/SidebarPreview.34d34086.css","assets/SaveButton.55a4e83a.js","assets/SaveButton.7277f302.css","assets/StyleEditor.df51333d.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>t(()=>import("./SidebarEditor.2fea1a0f.js"),["assets/SidebarEditor.2fea1a0f.js","assets/registerWidgets.7cf0d33e.js","assets/registerWidgets.a7e6ab4f.css","assets/workspaces.c4b96bd7.js","assets/activeRecord.bddbe06b.js","assets/asyncComputed.0ce7cae2.js","assets/CircularLoading.252e5f3b.js","assets/lottie.adcbdb1d.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.55a4e83a.js","assets/icons.5faf907f.js","assets/SaveButton.7277f302.css","assets/SidebarPreview.e9152a0b.js","assets/PlayerNavbar.4bce3b06.js","assets/PlayerNavbar.1542e7ca.css","assets/runnerData.a3a3f9aa.js","assets/colors.3380771c.js","assets/SidebarPreview.34d34086.css","assets/SidebarEditor.f65d95bf.css"]),meta:{title:"Abstra - Sidebar"}}]},{path:"form/:formPath",name:"editor",component:()=>t(()=>import("./FormEditor.d5c0afde.js"),["assets/FormEditor.d5c0afde.js","assets/registerWidgets.7cf0d33e.js","assets/registerWidgets.a7e6ab4f.css","assets/CircularLoading.252e5f3b.js","assets/lottie.adcbdb1d.js","assets/CircularLoading.f81b57b4.css","assets/Error.af9a20ea.js","assets/Error.5cfc41d8.css","assets/broker.d7213073.js","assets/passwordlessManager.319d982e.js","assets/icons.5faf907f.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.a07ae91e.js","assets/Passwordless.1bb495c6.js","assets/Passwordless.2b58e538.css","assets/executeJs.df044343.js","assets/PlayerNavbar.4bce3b06.js","assets/PlayerNavbar.1542e7ca.css","assets/index.2b2e98e0.js","assets/WidgetsFrame.b81b277b.js","assets/colors.3380771c.js","assets/WidgetsFrame.701a818b.css","assets/Modal.f8435634.js","assets/Modal.5aaf8eba.css","assets/executeJs.b0d1ede9.css","assets/log.6b189859.js","assets/broker.f87ad36d.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.0cee3fc1.js","assets/asyncComputed.0ce7cae2.js","assets/forms.d35d26f9.js","assets/activeRecord.bddbe06b.js","assets/dashes.a3a598a8.js","assets/runnerData.a3a3f9aa.js","assets/hooks.85d73e6c.js","assets/jobs.9bd8bf32.js","assets/workspaces.c4b96bd7.js","assets/login.5e2460d5.js","assets/UnsavedChangesHandler.39d12ceb.css","assets/BackButton.fe223e91.js","assets/BackButton.f2f3c401.css","assets/SaveButton.55a4e83a.js","assets/SaveButton.7277f302.css","assets/DocsButton.60135abd.js","assets/DocsButton.d2184c76.css","assets/PreviewButton.6629294c.js","assets/PreviewButton.52324bbf.css","assets/FormEditor.14b0b0e9.css"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"form-preview",component:()=>t(()=>import("./FormPreview.468fcefa.js"),["assets/FormPreview.468fcefa.js","assets/registerWidgets.7cf0d33e.js","assets/registerWidgets.a7e6ab4f.css","assets/CircularLoading.252e5f3b.js","assets/lottie.adcbdb1d.js","assets/CircularLoading.f81b57b4.css","assets/Error.af9a20ea.js","assets/Error.5cfc41d8.css","assets/broker.d7213073.js","assets/passwordlessManager.319d982e.js","assets/icons.5faf907f.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.a07ae91e.js","assets/Passwordless.1bb495c6.js","assets/Passwordless.2b58e538.css","assets/executeJs.df044343.js","assets/PlayerNavbar.4bce3b06.js","assets/PlayerNavbar.1542e7ca.css","assets/index.2b2e98e0.js","assets/WidgetsFrame.b81b277b.js","assets/colors.3380771c.js","assets/WidgetsFrame.701a818b.css","assets/Modal.f8435634.js","assets/Modal.5aaf8eba.css","assets/executeJs.b0d1ede9.css","assets/log.6b189859.js","assets/broker.f87ad36d.css","assets/BackButton.f9daa765.js","assets/BackButton.dd542746.css","assets/asyncComputed.0ce7cae2.js","assets/forms.d35d26f9.js","assets/activeRecord.bddbe06b.js","assets/workspaces.c4b96bd7.js","assets/FormPreview.bcd09cdf.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>t(()=>import("./JobEditor.4463c4b6.js"),["assets/JobEditor.4463c4b6.js","assets/registerWidgets.7cf0d33e.js","assets/registerWidgets.a7e6ab4f.css","assets/BackButton.fe223e91.js","assets/BackButton.f2f3c401.css","assets/CircularLoading.252e5f3b.js","assets/lottie.adcbdb1d.js","assets/CircularLoading.f81b57b4.css","assets/asyncComputed.0ce7cae2.js","assets/jobs.9bd8bf32.js","assets/activeRecord.bddbe06b.js","assets/SaveButton.55a4e83a.js","assets/icons.5faf907f.js","assets/SaveButton.7277f302.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.0cee3fc1.js","assets/forms.d35d26f9.js","assets/dashes.a3a598a8.js","assets/runnerData.a3a3f9aa.js","assets/hooks.85d73e6c.js","assets/workspaces.c4b96bd7.js","assets/log.6b189859.js","assets/login.5e2460d5.js","assets/UnsavedChangesHandler.39d12ceb.css","assets/DocsButton.60135abd.js","assets/DocsButton.d2184c76.css","assets/JobEditor.891795a7.css"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>t(()=>import("./DashEditor.867004e4.js"),["assets/DashEditor.867004e4.js","assets/index.2b2e98e0.js","assets/registerWidgets.7cf0d33e.js","assets/registerWidgets.a7e6ab4f.css","assets/BackButton.fe223e91.js","assets/BackButton.f2f3c401.css","assets/DashPlayer.44945ec3.js","assets/passwordlessManager.319d982e.js","assets/runnerData.a3a3f9aa.js","assets/executeJs.df044343.js","assets/PlayerNavbar.4bce3b06.js","assets/icons.5faf907f.js","assets/PlayerNavbar.1542e7ca.css","assets/WidgetsFrame.b81b277b.js","assets/colors.3380771c.js","assets/WidgetsFrame.701a818b.css","assets/Modal.f8435634.js","assets/Modal.5aaf8eba.css","assets/executeJs.b0d1ede9.css","assets/log.6b189859.js","assets/Passwordless.1bb495c6.js","assets/CircularLoading.252e5f3b.js","assets/lottie.adcbdb1d.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.2b58e538.css","assets/DashPlayer.a2bc20b8.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.0cee3fc1.js","assets/asyncComputed.0ce7cae2.js","assets/forms.d35d26f9.js","assets/activeRecord.bddbe06b.js","assets/dashes.a3a598a8.js","assets/hooks.85d73e6c.js","assets/jobs.9bd8bf32.js","assets/workspaces.c4b96bd7.js","assets/login.5e2460d5.js","assets/UnsavedChangesHandler.39d12ceb.css","assets/SaveButton.55a4e83a.js","assets/SaveButton.7277f302.css","assets/PreviewButton.6629294c.js","assets/PreviewButton.52324bbf.css","assets/DocsButton.60135abd.js","assets/DocsButton.d2184c76.css","assets/DashEditor.7f66656f.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>t(()=>import("./DashPreview.e66ddba2.js"),["assets/DashPreview.e66ddba2.js","assets/registerWidgets.7cf0d33e.js","assets/registerWidgets.a7e6ab4f.css","assets/DashPlayer.44945ec3.js","assets/passwordlessManager.319d982e.js","assets/runnerData.a3a3f9aa.js","assets/executeJs.df044343.js","assets/PlayerNavbar.4bce3b06.js","assets/icons.5faf907f.js","assets/PlayerNavbar.1542e7ca.css","assets/index.2b2e98e0.js","assets/WidgetsFrame.b81b277b.js","assets/colors.3380771c.js","assets/WidgetsFrame.701a818b.css","assets/Modal.f8435634.js","assets/Modal.5aaf8eba.css","assets/executeJs.b0d1ede9.css","assets/log.6b189859.js","assets/Passwordless.1bb495c6.js","assets/CircularLoading.252e5f3b.js","assets/lottie.adcbdb1d.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.2b58e538.css","assets/DashPlayer.a2bc20b8.css","assets/BackButton.f9daa765.js","assets/BackButton.dd542746.css","assets/asyncComputed.0ce7cae2.js","assets/dashes.a3a598a8.js","assets/activeRecord.bddbe06b.js","assets/workspaces.c4b96bd7.js","assets/DashPreview.e38d1101.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>t(()=>import("./HookEditor.d6ae352e.js"),["assets/HookEditor.d6ae352e.js","assets/registerWidgets.7cf0d33e.js","assets/registerWidgets.a7e6ab4f.css","assets/BackButton.fe223e91.js","assets/BackButton.f2f3c401.css","assets/CircularLoading.252e5f3b.js","assets/lottie.adcbdb1d.js","assets/CircularLoading.f81b57b4.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.0cee3fc1.js","assets/icons.5faf907f.js","assets/asyncComputed.0ce7cae2.js","assets/forms.d35d26f9.js","assets/activeRecord.bddbe06b.js","assets/dashes.a3a598a8.js","assets/runnerData.a3a3f9aa.js","assets/hooks.85d73e6c.js","assets/jobs.9bd8bf32.js","assets/workspaces.c4b96bd7.js","assets/log.6b189859.js","assets/login.5e2460d5.js","assets/UnsavedChangesHandler.39d12ceb.css","assets/SaveButton.55a4e83a.js","assets/SaveButton.7277f302.css","assets/DocsButton.60135abd.js","assets/DocsButton.d2184c76.css","assets/HookEditor.57f047c8.css"]),meta:{title:"Abstra - Hook Editor"}},{path:"table/:tableName",name:"tableEditor",component:()=>t(()=>import("./TableEditor.54348ad7.js"),["assets/TableEditor.54348ad7.js","assets/asyncComputed.0ce7cae2.js","assets/registerWidgets.7cf0d33e.js","assets/registerWidgets.a7e6ab4f.css","assets/tables.a6a74d94.js","assets/activeRecord.bddbe06b.js","assets/CircularLoading.252e5f3b.js","assets/lottie.adcbdb1d.js","assets/CircularLoading.f81b57b4.css","assets/BackButton.fe223e91.js","assets/BackButton.f2f3c401.css","assets/icons.5faf907f.js","assets/DocsButton.60135abd.js","assets/DocsButton.d2184c76.css","assets/TableEditor.86fe96d8.css"]),meta:{title:"Abstra - Table Editor"}}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});r.beforeEach(async(e,o)=>{L(e,o)});(async()=>{const e=b({render:()=>T(k)});v.init(),A(e,r),e.use(r),e.use(f),e.mount("#app"),e.component("VSelect",P),e.component("Markdown",I),e.component("Icon",D),e.component("Message",w),a(e,y),a(e,V),a(e,R)})();
//# sourceMappingURL=editor.b0abd65a.js.map
