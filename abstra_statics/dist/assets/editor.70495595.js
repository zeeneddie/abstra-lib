import{r as _,d as m,o as p,a as d,b as c,c as h,e as l,f as b,g as u,_ as t,h as E,T as v,i as f,P as A,C as P,M as I,I as D,s as w,j as a,k as T,l as y,m as V,n as R}from"./registerWidgets.80830a62.js";import{u as L}from"./index.9089c8c2.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="bf51037d-7319-40cb-9554-ceae58f814e6",e._sentryDebugIdIdentifier="sentry-dbid-bf51037d-7319-40cb-9554-ceae58f814e6")}catch{}})();const s=_(!1),g=()=>{window.innerWidth<780?s.value=!0:s.value=!1},O={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},k=m({__name:"App",setup(e){return p(()=>{window.addEventListener("resize",g)}),(o,n)=>{const i=d("router-view");return c(),h("div",O,[l(i)])}}});const r=b({history:u("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.98f124a8.js"),["assets/Home.98f124a8.js","assets/Modal.75286ba0.js","assets/registerWidgets.80830a62.js","assets/registerWidgets.448db7e9.css","assets/Modal.5aaf8eba.css","assets/Home.1c04d83a.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.c2f8e40d.js"),["assets/Workspace.c2f8e40d.js","assets/registerWidgets.80830a62.js","assets/registerWidgets.448db7e9.css","assets/icons.96376736.js","assets/Tooltip.102031c9.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/asyncComputed.7fd138fd.js","assets/workspaces.f05f8c3f.js","assets/activeRecord.dd1973bd.js","assets/login.eaa316db.js","assets/DocsButton.f99d1d80.js","assets/DocsButton.d2184c76.css","assets/Workspace.4d7eaba0.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>t(()=>import("./Forms.140154d8.js"),["assets/Forms.140154d8.js","assets/registerWidgets.80830a62.js","assets/registerWidgets.448db7e9.css","assets/icons.96376736.js","assets/asyncComputed.7fd138fd.js","assets/forms.9a920c96.js","assets/activeRecord.dd1973bd.js","assets/RuntimeList.5a001092.js","assets/DropdownMenu.8a84ea08.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.dfc9e798.js","assets/lottie.ab5349ef.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>t(()=>import("./Dashes.83854f6d.js"),["assets/Dashes.83854f6d.js","assets/registerWidgets.80830a62.js","assets/registerWidgets.448db7e9.css","assets/icons.96376736.js","assets/asyncComputed.7fd138fd.js","assets/dashes.9f8f928b.js","assets/activeRecord.dd1973bd.js","assets/runnerData.fe559a1a.js","assets/RuntimeList.5a001092.js","assets/DropdownMenu.8a84ea08.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.dfc9e798.js","assets/lottie.ab5349ef.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>t(()=>import("./Jobs.71f708de.js"),["assets/Jobs.71f708de.js","assets/registerWidgets.80830a62.js","assets/registerWidgets.448db7e9.css","assets/icons.96376736.js","assets/asyncComputed.7fd138fd.js","assets/jobs.5f408c22.js","assets/activeRecord.dd1973bd.js","assets/RuntimeList.5a001092.js","assets/DropdownMenu.8a84ea08.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.dfc9e798.js","assets/lottie.ab5349ef.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>t(()=>import("./Hooks.c7c4921a.js"),["assets/Hooks.c7c4921a.js","assets/registerWidgets.80830a62.js","assets/registerWidgets.448db7e9.css","assets/icons.96376736.js","assets/asyncComputed.7fd138fd.js","assets/hooks.51f3c6f3.js","assets/activeRecord.dd1973bd.js","assets/RuntimeList.5a001092.js","assets/DropdownMenu.8a84ea08.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.dfc9e798.js","assets/lottie.ab5349ef.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Hooks"}},{path:"tables",name:"tables",component:()=>t(()=>import("./Tables.2a9ff078.js"),["assets/Tables.2a9ff078.js","assets/registerWidgets.80830a62.js","assets/registerWidgets.448db7e9.css","assets/icons.96376736.js","assets/asyncComputed.7fd138fd.js","assets/tables.3d2c87a8.js","assets/activeRecord.dd1973bd.js","assets/RuntimeList.5a001092.js","assets/DropdownMenu.8a84ea08.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.dfc9e798.js","assets/lottie.ab5349ef.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Tables"}},{path:"style",name:"style",component:()=>t(()=>import("./StyleEditor.b2188ba4.js"),["assets/StyleEditor.b2188ba4.js","assets/registerWidgets.80830a62.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.7fd138fd.js","assets/workspaces.f05f8c3f.js","assets/activeRecord.dd1973bd.js","assets/CircularLoading.dfc9e798.js","assets/lottie.ab5349ef.js","assets/CircularLoading.f81b57b4.css","assets/icons.96376736.js","assets/SidebarPreview.ed2386d5.js","assets/PlayerNavbar.1f5ef7b9.js","assets/PlayerNavbar.1542e7ca.css","assets/runnerData.fe559a1a.js","assets/colors.8b04d8aa.js","assets/SidebarPreview.34d34086.css","assets/SaveButton.68e44a8d.js","assets/SaveButton.7277f302.css","assets/StyleEditor.df51333d.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>t(()=>import("./SidebarEditor.4d7e933c.js"),["assets/SidebarEditor.4d7e933c.js","assets/registerWidgets.80830a62.js","assets/registerWidgets.448db7e9.css","assets/workspaces.f05f8c3f.js","assets/activeRecord.dd1973bd.js","assets/asyncComputed.7fd138fd.js","assets/CircularLoading.dfc9e798.js","assets/lottie.ab5349ef.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.68e44a8d.js","assets/icons.96376736.js","assets/SaveButton.7277f302.css","assets/SidebarPreview.ed2386d5.js","assets/PlayerNavbar.1f5ef7b9.js","assets/PlayerNavbar.1542e7ca.css","assets/runnerData.fe559a1a.js","assets/colors.8b04d8aa.js","assets/SidebarPreview.34d34086.css","assets/SidebarEditor.f65d95bf.css"]),meta:{title:"Abstra - Sidebar"}}]},{path:"form/:formPath",name:"editor",component:()=>t(()=>import("./FormEditor.100ca2e6.js"),["assets/FormEditor.100ca2e6.js","assets/registerWidgets.80830a62.js","assets/registerWidgets.448db7e9.css","assets/CircularLoading.dfc9e798.js","assets/lottie.ab5349ef.js","assets/CircularLoading.f81b57b4.css","assets/Error.e8920d2f.js","assets/Error.5cfc41d8.css","assets/broker.6a85f534.js","assets/passwordlessManager.65c1d475.js","assets/icons.96376736.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.f332c731.js","assets/Passwordless.e6779d6e.js","assets/Passwordless.2b58e538.css","assets/executeJs.74f241ca.js","assets/PlayerNavbar.1f5ef7b9.js","assets/PlayerNavbar.1542e7ca.css","assets/index.9089c8c2.js","assets/WidgetsFrame.fba80f3e.js","assets/colors.8b04d8aa.js","assets/WidgetsFrame.701a818b.css","assets/Modal.75286ba0.js","assets/Modal.5aaf8eba.css","assets/executeJs.b0d1ede9.css","assets/log.3ccd8497.js","assets/broker.f87ad36d.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.d045a020.js","assets/asyncComputed.7fd138fd.js","assets/forms.9a920c96.js","assets/activeRecord.dd1973bd.js","assets/dashes.9f8f928b.js","assets/runnerData.fe559a1a.js","assets/hooks.51f3c6f3.js","assets/jobs.5f408c22.js","assets/workspaces.f05f8c3f.js","assets/login.eaa316db.js","assets/UnsavedChangesHandler.39d12ceb.css","assets/BackButton.21705cd5.js","assets/BackButton.f2f3c401.css","assets/SaveButton.68e44a8d.js","assets/SaveButton.7277f302.css","assets/DocsButton.f99d1d80.js","assets/DocsButton.d2184c76.css","assets/PreviewButton.de23d035.js","assets/PreviewButton.52324bbf.css","assets/FormEditor.14b0b0e9.css"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"form-preview",component:()=>t(()=>import("./FormPreview.9319c1f0.js"),["assets/FormPreview.9319c1f0.js","assets/registerWidgets.80830a62.js","assets/registerWidgets.448db7e9.css","assets/CircularLoading.dfc9e798.js","assets/lottie.ab5349ef.js","assets/CircularLoading.f81b57b4.css","assets/Error.e8920d2f.js","assets/Error.5cfc41d8.css","assets/broker.6a85f534.js","assets/passwordlessManager.65c1d475.js","assets/icons.96376736.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.f332c731.js","assets/Passwordless.e6779d6e.js","assets/Passwordless.2b58e538.css","assets/executeJs.74f241ca.js","assets/PlayerNavbar.1f5ef7b9.js","assets/PlayerNavbar.1542e7ca.css","assets/index.9089c8c2.js","assets/WidgetsFrame.fba80f3e.js","assets/colors.8b04d8aa.js","assets/WidgetsFrame.701a818b.css","assets/Modal.75286ba0.js","assets/Modal.5aaf8eba.css","assets/executeJs.b0d1ede9.css","assets/log.3ccd8497.js","assets/broker.f87ad36d.css","assets/BackButton.ffb59a51.js","assets/BackButton.dd542746.css","assets/asyncComputed.7fd138fd.js","assets/forms.9a920c96.js","assets/activeRecord.dd1973bd.js","assets/workspaces.f05f8c3f.js","assets/FormPreview.bcd09cdf.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>t(()=>import("./JobEditor.b687d0e8.js"),["assets/JobEditor.b687d0e8.js","assets/registerWidgets.80830a62.js","assets/registerWidgets.448db7e9.css","assets/BackButton.21705cd5.js","assets/BackButton.f2f3c401.css","assets/CircularLoading.dfc9e798.js","assets/lottie.ab5349ef.js","assets/CircularLoading.f81b57b4.css","assets/asyncComputed.7fd138fd.js","assets/jobs.5f408c22.js","assets/activeRecord.dd1973bd.js","assets/SaveButton.68e44a8d.js","assets/icons.96376736.js","assets/SaveButton.7277f302.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.d045a020.js","assets/forms.9a920c96.js","assets/dashes.9f8f928b.js","assets/runnerData.fe559a1a.js","assets/hooks.51f3c6f3.js","assets/workspaces.f05f8c3f.js","assets/log.3ccd8497.js","assets/login.eaa316db.js","assets/UnsavedChangesHandler.39d12ceb.css","assets/DocsButton.f99d1d80.js","assets/DocsButton.d2184c76.css","assets/JobEditor.891795a7.css"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>t(()=>import("./DashEditor.eb0a0794.js"),["assets/DashEditor.eb0a0794.js","assets/index.9089c8c2.js","assets/registerWidgets.80830a62.js","assets/registerWidgets.448db7e9.css","assets/BackButton.21705cd5.js","assets/BackButton.f2f3c401.css","assets/DashPlayer.572466ef.js","assets/passwordlessManager.65c1d475.js","assets/runnerData.fe559a1a.js","assets/executeJs.74f241ca.js","assets/PlayerNavbar.1f5ef7b9.js","assets/icons.96376736.js","assets/PlayerNavbar.1542e7ca.css","assets/WidgetsFrame.fba80f3e.js","assets/colors.8b04d8aa.js","assets/WidgetsFrame.701a818b.css","assets/Modal.75286ba0.js","assets/Modal.5aaf8eba.css","assets/executeJs.b0d1ede9.css","assets/log.3ccd8497.js","assets/Passwordless.e6779d6e.js","assets/CircularLoading.dfc9e798.js","assets/lottie.ab5349ef.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.2b58e538.css","assets/DashPlayer.a2bc20b8.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.d045a020.js","assets/asyncComputed.7fd138fd.js","assets/forms.9a920c96.js","assets/activeRecord.dd1973bd.js","assets/dashes.9f8f928b.js","assets/hooks.51f3c6f3.js","assets/jobs.5f408c22.js","assets/workspaces.f05f8c3f.js","assets/login.eaa316db.js","assets/UnsavedChangesHandler.39d12ceb.css","assets/SaveButton.68e44a8d.js","assets/SaveButton.7277f302.css","assets/PreviewButton.de23d035.js","assets/PreviewButton.52324bbf.css","assets/DocsButton.f99d1d80.js","assets/DocsButton.d2184c76.css","assets/DashEditor.7f66656f.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>t(()=>import("./DashPreview.6b54a0af.js"),["assets/DashPreview.6b54a0af.js","assets/registerWidgets.80830a62.js","assets/registerWidgets.448db7e9.css","assets/DashPlayer.572466ef.js","assets/passwordlessManager.65c1d475.js","assets/runnerData.fe559a1a.js","assets/executeJs.74f241ca.js","assets/PlayerNavbar.1f5ef7b9.js","assets/icons.96376736.js","assets/PlayerNavbar.1542e7ca.css","assets/index.9089c8c2.js","assets/WidgetsFrame.fba80f3e.js","assets/colors.8b04d8aa.js","assets/WidgetsFrame.701a818b.css","assets/Modal.75286ba0.js","assets/Modal.5aaf8eba.css","assets/executeJs.b0d1ede9.css","assets/log.3ccd8497.js","assets/Passwordless.e6779d6e.js","assets/CircularLoading.dfc9e798.js","assets/lottie.ab5349ef.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.2b58e538.css","assets/DashPlayer.a2bc20b8.css","assets/BackButton.ffb59a51.js","assets/BackButton.dd542746.css","assets/asyncComputed.7fd138fd.js","assets/dashes.9f8f928b.js","assets/activeRecord.dd1973bd.js","assets/workspaces.f05f8c3f.js","assets/DashPreview.e38d1101.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>t(()=>import("./HookEditor.6b0f89dc.js"),["assets/HookEditor.6b0f89dc.js","assets/registerWidgets.80830a62.js","assets/registerWidgets.448db7e9.css","assets/BackButton.21705cd5.js","assets/BackButton.f2f3c401.css","assets/CircularLoading.dfc9e798.js","assets/lottie.ab5349ef.js","assets/CircularLoading.f81b57b4.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.d045a020.js","assets/icons.96376736.js","assets/asyncComputed.7fd138fd.js","assets/forms.9a920c96.js","assets/activeRecord.dd1973bd.js","assets/dashes.9f8f928b.js","assets/runnerData.fe559a1a.js","assets/hooks.51f3c6f3.js","assets/jobs.5f408c22.js","assets/workspaces.f05f8c3f.js","assets/log.3ccd8497.js","assets/login.eaa316db.js","assets/UnsavedChangesHandler.39d12ceb.css","assets/SaveButton.68e44a8d.js","assets/SaveButton.7277f302.css","assets/DocsButton.f99d1d80.js","assets/DocsButton.d2184c76.css","assets/HookEditor.57f047c8.css"]),meta:{title:"Abstra - Hook Editor"}},{path:"table/:tableName",name:"tableEditor",component:()=>t(()=>import("./TableEditor.15de4274.js"),["assets/TableEditor.15de4274.js","assets/asyncComputed.7fd138fd.js","assets/registerWidgets.80830a62.js","assets/registerWidgets.448db7e9.css","assets/tables.3d2c87a8.js","assets/activeRecord.dd1973bd.js","assets/CircularLoading.dfc9e798.js","assets/lottie.ab5349ef.js","assets/CircularLoading.f81b57b4.css","assets/BackButton.21705cd5.js","assets/BackButton.f2f3c401.css","assets/icons.96376736.js","assets/DocsButton.f99d1d80.js","assets/DocsButton.d2184c76.css","assets/TableEditor.86fe96d8.css"]),meta:{title:"Abstra - Table Editor"}}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});r.beforeEach(async(e,o)=>{L(e,o)});(async()=>{const e=E({render:()=>T(k)});v.init(),f(e,r),e.use(r),e.use(A),e.mount("#app"),e.component("VSelect",P),e.component("Markdown",I),e.component("Icon",D),e.component("Message",w),a(e,y),a(e,V),a(e,R)})();
//# sourceMappingURL=editor.70495595.js.map
