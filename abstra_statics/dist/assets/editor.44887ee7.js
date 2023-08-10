import{r as _,d as m,o as d,a as p,b as c,c as h,e as l,f as u,g as b,_ as t,h as E,T as v,i as A,P as f,C as P,M as I,I as D,s as w,j as a,k as T,l as y,m as V,n as R}from"./registerWidgets.29ceb1a3.js";import{u as L}from"./index.2f0d1fcf.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="490a4dab-0816-47e4-8c95-90d307cde357",e._sentryDebugIdIdentifier="sentry-dbid-490a4dab-0816-47e4-8c95-90d307cde357")}catch{}})();const s=_(!1),g=()=>{window.innerWidth<780?s.value=!0:s.value=!1},O={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},k=m({__name:"App",setup(e){return d(()=>{window.addEventListener("resize",g)}),(o,n)=>{const i=p("router-view");return c(),h("div",O,[l(i)])}}});const r=u({history:b("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.3233dd85.js"),["assets/Home.3233dd85.js","assets/Modal.466a15f5.js","assets/registerWidgets.29ceb1a3.js","assets/registerWidgets.a7e6ab4f.css","assets/Modal.5aaf8eba.css","assets/Home.1c04d83a.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.dd7feae5.js"),["assets/Workspace.dd7feae5.js","assets/registerWidgets.29ceb1a3.js","assets/registerWidgets.a7e6ab4f.css","assets/icons.3ddac2d4.js","assets/Tooltip.0ade5ea3.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/asyncComputed.9ed582d0.js","assets/workspaces.8cc8d5a8.js","assets/activeRecord.ab1afca6.js","assets/login.deb55fde.js","assets/DocsButton.173ea0c2.js","assets/DocsButton.d2184c76.css","assets/Workspace.4d7eaba0.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>t(()=>import("./Forms.1bdea639.js"),["assets/Forms.1bdea639.js","assets/registerWidgets.29ceb1a3.js","assets/registerWidgets.a7e6ab4f.css","assets/icons.3ddac2d4.js","assets/asyncComputed.9ed582d0.js","assets/forms.7d77f27e.js","assets/activeRecord.ab1afca6.js","assets/RuntimeList.199acaf8.js","assets/DropdownMenu.e7128f2e.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.f0b3522c.js","assets/lottie.dc9b75c3.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>t(()=>import("./Dashes.889eb556.js"),["assets/Dashes.889eb556.js","assets/registerWidgets.29ceb1a3.js","assets/registerWidgets.a7e6ab4f.css","assets/icons.3ddac2d4.js","assets/asyncComputed.9ed582d0.js","assets/dashes.f777e69e.js","assets/activeRecord.ab1afca6.js","assets/runnerData.b34f70e9.js","assets/RuntimeList.199acaf8.js","assets/DropdownMenu.e7128f2e.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.f0b3522c.js","assets/lottie.dc9b75c3.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>t(()=>import("./Jobs.af2d4040.js"),["assets/Jobs.af2d4040.js","assets/registerWidgets.29ceb1a3.js","assets/registerWidgets.a7e6ab4f.css","assets/icons.3ddac2d4.js","assets/asyncComputed.9ed582d0.js","assets/jobs.ffe87936.js","assets/activeRecord.ab1afca6.js","assets/RuntimeList.199acaf8.js","assets/DropdownMenu.e7128f2e.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.f0b3522c.js","assets/lottie.dc9b75c3.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>t(()=>import("./Hooks.56301b7c.js"),["assets/Hooks.56301b7c.js","assets/registerWidgets.29ceb1a3.js","assets/registerWidgets.a7e6ab4f.css","assets/icons.3ddac2d4.js","assets/asyncComputed.9ed582d0.js","assets/hooks.78238382.js","assets/activeRecord.ab1afca6.js","assets/RuntimeList.199acaf8.js","assets/DropdownMenu.e7128f2e.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.f0b3522c.js","assets/lottie.dc9b75c3.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Hooks"}},{path:"tables",name:"tables",component:()=>t(()=>import("./Tables.1c90e4e7.js"),["assets/Tables.1c90e4e7.js","assets/registerWidgets.29ceb1a3.js","assets/registerWidgets.a7e6ab4f.css","assets/icons.3ddac2d4.js","assets/asyncComputed.9ed582d0.js","assets/tables.a46b59f3.js","assets/activeRecord.ab1afca6.js","assets/RuntimeList.199acaf8.js","assets/DropdownMenu.e7128f2e.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.f0b3522c.js","assets/lottie.dc9b75c3.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Tables"}},{path:"style",name:"style",component:()=>t(()=>import("./StyleEditor.21bb36e1.js"),["assets/StyleEditor.21bb36e1.js","assets/registerWidgets.29ceb1a3.js","assets/registerWidgets.a7e6ab4f.css","assets/asyncComputed.9ed582d0.js","assets/workspaces.8cc8d5a8.js","assets/activeRecord.ab1afca6.js","assets/CircularLoading.f0b3522c.js","assets/lottie.dc9b75c3.js","assets/CircularLoading.f81b57b4.css","assets/icons.3ddac2d4.js","assets/SidebarPreview.490852d7.js","assets/PlayerNavbar.560ce26d.js","assets/PlayerNavbar.1542e7ca.css","assets/runnerData.b34f70e9.js","assets/colors.9ea007bd.js","assets/SidebarPreview.34d34086.css","assets/SaveButton.0a2cf088.js","assets/SaveButton.7277f302.css","assets/StyleEditor.df51333d.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>t(()=>import("./SidebarEditor.4b887aab.js"),["assets/SidebarEditor.4b887aab.js","assets/registerWidgets.29ceb1a3.js","assets/registerWidgets.a7e6ab4f.css","assets/workspaces.8cc8d5a8.js","assets/activeRecord.ab1afca6.js","assets/asyncComputed.9ed582d0.js","assets/CircularLoading.f0b3522c.js","assets/lottie.dc9b75c3.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.0a2cf088.js","assets/icons.3ddac2d4.js","assets/SaveButton.7277f302.css","assets/SidebarPreview.490852d7.js","assets/PlayerNavbar.560ce26d.js","assets/PlayerNavbar.1542e7ca.css","assets/runnerData.b34f70e9.js","assets/colors.9ea007bd.js","assets/SidebarPreview.34d34086.css","assets/SidebarEditor.f65d95bf.css"]),meta:{title:"Abstra - Sidebar"}}]},{path:"form/:formPath",name:"editor",component:()=>t(()=>import("./FormEditor.32412529.js"),["assets/FormEditor.32412529.js","assets/registerWidgets.29ceb1a3.js","assets/registerWidgets.a7e6ab4f.css","assets/CircularLoading.f0b3522c.js","assets/lottie.dc9b75c3.js","assets/CircularLoading.f81b57b4.css","assets/Error.9385b331.js","assets/Error.5cfc41d8.css","assets/broker.bffb79f6.js","assets/passwordlessManager.68f14bfc.js","assets/icons.3ddac2d4.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.58d6f594.js","assets/Passwordless.aeb71179.js","assets/Passwordless.2b58e538.css","assets/executeJs.fc18b508.js","assets/PlayerNavbar.560ce26d.js","assets/PlayerNavbar.1542e7ca.css","assets/index.2f0d1fcf.js","assets/WidgetsFrame.2255c592.js","assets/colors.9ea007bd.js","assets/WidgetsFrame.701a818b.css","assets/Modal.466a15f5.js","assets/Modal.5aaf8eba.css","assets/executeJs.b0d1ede9.css","assets/log.59215350.js","assets/broker.f87ad36d.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.a0d939b1.js","assets/asyncComputed.9ed582d0.js","assets/forms.7d77f27e.js","assets/activeRecord.ab1afca6.js","assets/dashes.f777e69e.js","assets/runnerData.b34f70e9.js","assets/hooks.78238382.js","assets/jobs.ffe87936.js","assets/workspaces.8cc8d5a8.js","assets/login.deb55fde.js","assets/UnsavedChangesHandler.39d12ceb.css","assets/BackButton.fcfbc4cf.js","assets/BackButton.f2f3c401.css","assets/SaveButton.0a2cf088.js","assets/SaveButton.7277f302.css","assets/DocsButton.173ea0c2.js","assets/DocsButton.d2184c76.css","assets/PreviewButton.e7614ba8.js","assets/PreviewButton.52324bbf.css","assets/FormEditor.14b0b0e9.css"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"form-preview",component:()=>t(()=>import("./FormPreview.2407a179.js"),["assets/FormPreview.2407a179.js","assets/registerWidgets.29ceb1a3.js","assets/registerWidgets.a7e6ab4f.css","assets/CircularLoading.f0b3522c.js","assets/lottie.dc9b75c3.js","assets/CircularLoading.f81b57b4.css","assets/Error.9385b331.js","assets/Error.5cfc41d8.css","assets/broker.bffb79f6.js","assets/passwordlessManager.68f14bfc.js","assets/icons.3ddac2d4.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.58d6f594.js","assets/Passwordless.aeb71179.js","assets/Passwordless.2b58e538.css","assets/executeJs.fc18b508.js","assets/PlayerNavbar.560ce26d.js","assets/PlayerNavbar.1542e7ca.css","assets/index.2f0d1fcf.js","assets/WidgetsFrame.2255c592.js","assets/colors.9ea007bd.js","assets/WidgetsFrame.701a818b.css","assets/Modal.466a15f5.js","assets/Modal.5aaf8eba.css","assets/executeJs.b0d1ede9.css","assets/log.59215350.js","assets/broker.f87ad36d.css","assets/BackButton.358e997b.js","assets/BackButton.dd542746.css","assets/asyncComputed.9ed582d0.js","assets/forms.7d77f27e.js","assets/activeRecord.ab1afca6.js","assets/workspaces.8cc8d5a8.js","assets/FormPreview.bcd09cdf.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>t(()=>import("./JobEditor.d56fab67.js"),["assets/JobEditor.d56fab67.js","assets/registerWidgets.29ceb1a3.js","assets/registerWidgets.a7e6ab4f.css","assets/BackButton.fcfbc4cf.js","assets/BackButton.f2f3c401.css","assets/CircularLoading.f0b3522c.js","assets/lottie.dc9b75c3.js","assets/CircularLoading.f81b57b4.css","assets/asyncComputed.9ed582d0.js","assets/jobs.ffe87936.js","assets/activeRecord.ab1afca6.js","assets/SaveButton.0a2cf088.js","assets/icons.3ddac2d4.js","assets/SaveButton.7277f302.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.a0d939b1.js","assets/forms.7d77f27e.js","assets/dashes.f777e69e.js","assets/runnerData.b34f70e9.js","assets/hooks.78238382.js","assets/workspaces.8cc8d5a8.js","assets/log.59215350.js","assets/login.deb55fde.js","assets/UnsavedChangesHandler.39d12ceb.css","assets/DocsButton.173ea0c2.js","assets/DocsButton.d2184c76.css","assets/JobEditor.891795a7.css"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>t(()=>import("./DashEditor.1116cdf4.js"),["assets/DashEditor.1116cdf4.js","assets/index.2f0d1fcf.js","assets/registerWidgets.29ceb1a3.js","assets/registerWidgets.a7e6ab4f.css","assets/BackButton.fcfbc4cf.js","assets/BackButton.f2f3c401.css","assets/DashPlayer.46bd3ef2.js","assets/passwordlessManager.68f14bfc.js","assets/runnerData.b34f70e9.js","assets/executeJs.fc18b508.js","assets/PlayerNavbar.560ce26d.js","assets/icons.3ddac2d4.js","assets/PlayerNavbar.1542e7ca.css","assets/WidgetsFrame.2255c592.js","assets/colors.9ea007bd.js","assets/WidgetsFrame.701a818b.css","assets/Modal.466a15f5.js","assets/Modal.5aaf8eba.css","assets/executeJs.b0d1ede9.css","assets/log.59215350.js","assets/Passwordless.aeb71179.js","assets/CircularLoading.f0b3522c.js","assets/lottie.dc9b75c3.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.2b58e538.css","assets/DashPlayer.a2bc20b8.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.a0d939b1.js","assets/asyncComputed.9ed582d0.js","assets/forms.7d77f27e.js","assets/activeRecord.ab1afca6.js","assets/dashes.f777e69e.js","assets/hooks.78238382.js","assets/jobs.ffe87936.js","assets/workspaces.8cc8d5a8.js","assets/login.deb55fde.js","assets/UnsavedChangesHandler.39d12ceb.css","assets/SaveButton.0a2cf088.js","assets/SaveButton.7277f302.css","assets/PreviewButton.e7614ba8.js","assets/PreviewButton.52324bbf.css","assets/DocsButton.173ea0c2.js","assets/DocsButton.d2184c76.css","assets/DashEditor.7f66656f.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>t(()=>import("./DashPreview.87a83845.js"),["assets/DashPreview.87a83845.js","assets/registerWidgets.29ceb1a3.js","assets/registerWidgets.a7e6ab4f.css","assets/DashPlayer.46bd3ef2.js","assets/passwordlessManager.68f14bfc.js","assets/runnerData.b34f70e9.js","assets/executeJs.fc18b508.js","assets/PlayerNavbar.560ce26d.js","assets/icons.3ddac2d4.js","assets/PlayerNavbar.1542e7ca.css","assets/index.2f0d1fcf.js","assets/WidgetsFrame.2255c592.js","assets/colors.9ea007bd.js","assets/WidgetsFrame.701a818b.css","assets/Modal.466a15f5.js","assets/Modal.5aaf8eba.css","assets/executeJs.b0d1ede9.css","assets/log.59215350.js","assets/Passwordless.aeb71179.js","assets/CircularLoading.f0b3522c.js","assets/lottie.dc9b75c3.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.2b58e538.css","assets/DashPlayer.a2bc20b8.css","assets/BackButton.358e997b.js","assets/BackButton.dd542746.css","assets/asyncComputed.9ed582d0.js","assets/dashes.f777e69e.js","assets/activeRecord.ab1afca6.js","assets/workspaces.8cc8d5a8.js","assets/DashPreview.e38d1101.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>t(()=>import("./HookEditor.ed0155d7.js"),["assets/HookEditor.ed0155d7.js","assets/registerWidgets.29ceb1a3.js","assets/registerWidgets.a7e6ab4f.css","assets/BackButton.fcfbc4cf.js","assets/BackButton.f2f3c401.css","assets/CircularLoading.f0b3522c.js","assets/lottie.dc9b75c3.js","assets/CircularLoading.f81b57b4.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.a0d939b1.js","assets/icons.3ddac2d4.js","assets/asyncComputed.9ed582d0.js","assets/forms.7d77f27e.js","assets/activeRecord.ab1afca6.js","assets/dashes.f777e69e.js","assets/runnerData.b34f70e9.js","assets/hooks.78238382.js","assets/jobs.ffe87936.js","assets/workspaces.8cc8d5a8.js","assets/log.59215350.js","assets/login.deb55fde.js","assets/UnsavedChangesHandler.39d12ceb.css","assets/SaveButton.0a2cf088.js","assets/SaveButton.7277f302.css","assets/DocsButton.173ea0c2.js","assets/DocsButton.d2184c76.css","assets/HookEditor.57f047c8.css"]),meta:{title:"Abstra - Hook Editor"}},{path:"table/:tableName",name:"tableEditor",component:()=>t(()=>import("./TableEditor.18ac9926.js"),["assets/TableEditor.18ac9926.js","assets/asyncComputed.9ed582d0.js","assets/registerWidgets.29ceb1a3.js","assets/registerWidgets.a7e6ab4f.css","assets/tables.a46b59f3.js","assets/activeRecord.ab1afca6.js","assets/CircularLoading.f0b3522c.js","assets/lottie.dc9b75c3.js","assets/CircularLoading.f81b57b4.css","assets/BackButton.fcfbc4cf.js","assets/BackButton.f2f3c401.css","assets/icons.3ddac2d4.js","assets/DocsButton.173ea0c2.js","assets/DocsButton.d2184c76.css","assets/TableEditor.86fe96d8.css"]),meta:{title:"Abstra - Table Editor"}}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});r.beforeEach(async(e,o)=>{L(e,o)});(async()=>{const e=E({render:()=>T(k)});v.init(),A(e,r),e.use(r),e.use(f),e.mount("#app"),e.component("VSelect",P),e.component("Markdown",I),e.component("Icon",D),e.component("Message",w),a(e,y),a(e,V),a(e,R)})();
//# sourceMappingURL=editor.44887ee7.js.map