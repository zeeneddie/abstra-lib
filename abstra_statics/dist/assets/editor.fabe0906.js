import{r as _,d as m,o as p,a as d,b as c,c as h,e as l,f as b,g as u,_ as t,h as E,T as v,i as f,P as A,C as P,M as I,I as D,s as w,j as a,k as T,l as y,m as V,n as R}from"./registerWidgets.08d6baab.js";import{u as L}from"./index.da52e009.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="abc01a85-4599-448b-aaab-0803e42f72f2",e._sentryDebugIdIdentifier="sentry-dbid-abc01a85-4599-448b-aaab-0803e42f72f2")}catch{}})();const s=_(!1),g=()=>{window.innerWidth<780?s.value=!0:s.value=!1},O={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},k=m({__name:"App",setup(e){return p(()=>{window.addEventListener("resize",g)}),(o,n)=>{const i=d("router-view");return c(),h("div",O,[l(i)])}}});const r=b({history:u("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.a677a51e.js"),["assets/Home.a677a51e.js","assets/Modal.3f337bc0.js","assets/registerWidgets.08d6baab.js","assets/registerWidgets.11938843.css","assets/Modal.5aaf8eba.css","assets/Home.3d251a01.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.cb71bbd0.js"),["assets/Workspace.cb71bbd0.js","assets/registerWidgets.08d6baab.js","assets/registerWidgets.11938843.css","assets/icons.e8e5575c.js","assets/Tooltip.5e71bfd3.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/asyncComputed.d051cfa0.js","assets/workspaces.c02f8744.js","assets/activeRecord.e95a5747.js","assets/pubsub.78fe3466.js","assets/login.4514ddd6.js","assets/DocsButton.f47eff9e.js","assets/DocsButton.d2184c76.css","assets/Workspace.b7d4a3bf.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>t(()=>import("./Forms.b39f42c6.js"),["assets/Forms.b39f42c6.js","assets/registerWidgets.08d6baab.js","assets/registerWidgets.11938843.css","assets/icons.e8e5575c.js","assets/asyncComputed.d051cfa0.js","assets/forms.e73a0849.js","assets/activeRecord.e95a5747.js","assets/pubsub.78fe3466.js","assets/RuntimeList.1385f584.js","assets/DropdownMenu.2fa07f6b.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.2d1b6c60.js","assets/lottie.1d018d12.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>t(()=>import("./Dashes.b91ce22c.js"),["assets/Dashes.b91ce22c.js","assets/registerWidgets.08d6baab.js","assets/registerWidgets.11938843.css","assets/icons.e8e5575c.js","assets/asyncComputed.d051cfa0.js","assets/dashes.c2c7b6b8.js","assets/activeRecord.e95a5747.js","assets/pubsub.78fe3466.js","assets/runnerData.265454ca.js","assets/RuntimeList.1385f584.js","assets/DropdownMenu.2fa07f6b.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.2d1b6c60.js","assets/lottie.1d018d12.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>t(()=>import("./Jobs.3cc1af18.js"),["assets/Jobs.3cc1af18.js","assets/registerWidgets.08d6baab.js","assets/registerWidgets.11938843.css","assets/icons.e8e5575c.js","assets/asyncComputed.d051cfa0.js","assets/jobs.c62116dd.js","assets/activeRecord.e95a5747.js","assets/pubsub.78fe3466.js","assets/RuntimeList.1385f584.js","assets/DropdownMenu.2fa07f6b.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.2d1b6c60.js","assets/lottie.1d018d12.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>t(()=>import("./Hooks.6cbdddbb.js"),["assets/Hooks.6cbdddbb.js","assets/registerWidgets.08d6baab.js","assets/registerWidgets.11938843.css","assets/icons.e8e5575c.js","assets/asyncComputed.d051cfa0.js","assets/hooks.cede592a.js","assets/activeRecord.e95a5747.js","assets/pubsub.78fe3466.js","assets/RuntimeList.1385f584.js","assets/DropdownMenu.2fa07f6b.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.2d1b6c60.js","assets/lottie.1d018d12.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Hooks"}},{path:"tables",name:"tables",component:()=>t(()=>import("./Tables.b60bf86f.js"),["assets/Tables.b60bf86f.js","assets/registerWidgets.08d6baab.js","assets/registerWidgets.11938843.css","assets/icons.e8e5575c.js","assets/asyncComputed.d051cfa0.js","assets/tables.8613f2aa.js","assets/activeRecord.e95a5747.js","assets/pubsub.78fe3466.js","assets/RuntimeList.1385f584.js","assets/DropdownMenu.2fa07f6b.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.2d1b6c60.js","assets/lottie.1d018d12.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Tables"}},{path:"style",name:"style",component:()=>t(()=>import("./StyleEditor.b7050478.js"),["assets/StyleEditor.b7050478.js","assets/registerWidgets.08d6baab.js","assets/registerWidgets.11938843.css","assets/asyncComputed.d051cfa0.js","assets/workspaces.c02f8744.js","assets/activeRecord.e95a5747.js","assets/pubsub.78fe3466.js","assets/CircularLoading.2d1b6c60.js","assets/lottie.1d018d12.js","assets/CircularLoading.f81b57b4.css","assets/icons.e8e5575c.js","assets/SaveButton.55394a0b.js","assets/SaveButton.c5392044.css","assets/SidebarPreview.4a413f9c.js","assets/PlayerNavbar.896781ed.js","assets/PlayerNavbar.76a7eb2f.css","assets/runnerData.265454ca.js","assets/WidgetsFrame.921c2d99.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/StyleEditor.b552686c.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>t(()=>import("./SidebarEditor.c432cd5d.js"),["assets/SidebarEditor.c432cd5d.js","assets/registerWidgets.08d6baab.js","assets/registerWidgets.11938843.css","assets/workspaces.c02f8744.js","assets/activeRecord.e95a5747.js","assets/pubsub.78fe3466.js","assets/asyncComputed.d051cfa0.js","assets/CircularLoading.2d1b6c60.js","assets/lottie.1d018d12.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.55394a0b.js","assets/icons.e8e5575c.js","assets/SaveButton.c5392044.css","assets/SidebarPreview.4a413f9c.js","assets/PlayerNavbar.896781ed.js","assets/PlayerNavbar.76a7eb2f.css","assets/runnerData.265454ca.js","assets/WidgetsFrame.921c2d99.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/SidebarEditor.c089a033.css"]),meta:{title:"Abstra - Sidebar"}}]},{path:"form/:formPath",name:"editor",component:()=>t(()=>import("./FormEditor.1426b209.js"),["assets/FormEditor.1426b209.js","assets/registerWidgets.08d6baab.js","assets/registerWidgets.11938843.css","assets/CircularLoading.2d1b6c60.js","assets/lottie.1d018d12.js","assets/CircularLoading.f81b57b4.css","assets/Error.ad70d80c.js","assets/Error.5cfc41d8.css","assets/broker.477b6f16.js","assets/passwordlessManager.073b43ea.js","assets/pubsub.78fe3466.js","assets/Passwordless.b4bf0234.js","assets/icons.e8e5575c.js","assets/Passwordless.86ac0c56.css","assets/executeJs.1e2bbf54.js","assets/PlayerNavbar.896781ed.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.da52e009.js","assets/Steps.0f0643d5.js","assets/Steps.998aa76d.css","assets/Modal.3f337bc0.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/WidgetsFrame.921c2d99.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.d11c90a4.js","assets/broker.1ce8d5ac.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.132a1129.js","assets/asyncComputed.d051cfa0.js","assets/forms.e73a0849.js","assets/activeRecord.e95a5747.js","assets/dashes.c2c7b6b8.js","assets/runnerData.265454ca.js","assets/hooks.cede592a.js","assets/jobs.c62116dd.js","assets/workspaces.c02f8744.js","assets/uuid.7a6ccb76.js","assets/login.4514ddd6.js","assets/UnsavedChangesHandler.18e1a61d.css","assets/Tab.2a8edb19.js","assets/Tab.68f29dcc.css","assets/BackButton.f16ccdc8.js","assets/BackButton.40348456.css","assets/SaveButton.55394a0b.js","assets/SaveButton.c5392044.css","assets/DocsButton.f47eff9e.js","assets/DocsButton.d2184c76.css","assets/PreviewButton.82e5760d.js","assets/PreviewButton.52324bbf.css","assets/FormEditor.3f8953f0.css"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"form-preview",component:()=>t(()=>import("./FormPreview.af92903c.js"),["assets/FormPreview.af92903c.js","assets/registerWidgets.08d6baab.js","assets/registerWidgets.11938843.css","assets/CircularLoading.2d1b6c60.js","assets/lottie.1d018d12.js","assets/CircularLoading.f81b57b4.css","assets/Error.ad70d80c.js","assets/Error.5cfc41d8.css","assets/broker.477b6f16.js","assets/passwordlessManager.073b43ea.js","assets/pubsub.78fe3466.js","assets/Passwordless.b4bf0234.js","assets/icons.e8e5575c.js","assets/Passwordless.86ac0c56.css","assets/executeJs.1e2bbf54.js","assets/PlayerNavbar.896781ed.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.da52e009.js","assets/Steps.0f0643d5.js","assets/Steps.998aa76d.css","assets/Modal.3f337bc0.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/WidgetsFrame.921c2d99.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.d11c90a4.js","assets/broker.1ce8d5ac.css","assets/BackButton.51b275b7.js","assets/BackButton.dd542746.css","assets/asyncComputed.d051cfa0.js","assets/forms.e73a0849.js","assets/activeRecord.e95a5747.js","assets/workspaces.c02f8744.js","assets/FormPreview.6d0d0d3a.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>t(()=>import("./JobEditor.60c5e32a.js"),["assets/JobEditor.60c5e32a.js","assets/registerWidgets.08d6baab.js","assets/registerWidgets.11938843.css","assets/Tab.2a8edb19.js","assets/Tab.68f29dcc.css","assets/CircularLoading.2d1b6c60.js","assets/lottie.1d018d12.js","assets/CircularLoading.f81b57b4.css","assets/asyncComputed.d051cfa0.js","assets/jobs.c62116dd.js","assets/activeRecord.e95a5747.js","assets/pubsub.78fe3466.js","assets/SaveButton.55394a0b.js","assets/icons.e8e5575c.js","assets/SaveButton.c5392044.css","assets/BackButton.f16ccdc8.js","assets/BackButton.40348456.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.132a1129.js","assets/forms.e73a0849.js","assets/dashes.c2c7b6b8.js","assets/runnerData.265454ca.js","assets/hooks.cede592a.js","assets/workspaces.c02f8744.js","assets/uuid.7a6ccb76.js","assets/login.4514ddd6.js","assets/UnsavedChangesHandler.18e1a61d.css","assets/DocsButton.f47eff9e.js","assets/DocsButton.d2184c76.css","assets/JobEditor.d8bbc89c.css"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>t(()=>import("./DashEditor.842b83e4.js"),["assets/DashEditor.842b83e4.js","assets/index.da52e009.js","assets/registerWidgets.08d6baab.js","assets/registerWidgets.11938843.css","assets/Tab.2a8edb19.js","assets/Tab.68f29dcc.css","assets/DashPlayer.c8631241.js","assets/executeJs.1e2bbf54.js","assets/PlayerNavbar.896781ed.js","assets/icons.e8e5575c.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.0f0643d5.js","assets/Steps.998aa76d.css","assets/Modal.3f337bc0.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/runnerData.265454ca.js","assets/passwordlessManager.073b43ea.js","assets/pubsub.78fe3466.js","assets/Passwordless.b4bf0234.js","assets/CircularLoading.2d1b6c60.js","assets/lottie.1d018d12.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.86ac0c56.css","assets/WidgetsFrame.921c2d99.js","assets/WidgetsFrame.0816a5f5.css","assets/DashPlayer.4868beea.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.132a1129.js","assets/asyncComputed.d051cfa0.js","assets/forms.e73a0849.js","assets/activeRecord.e95a5747.js","assets/dashes.c2c7b6b8.js","assets/hooks.cede592a.js","assets/jobs.c62116dd.js","assets/workspaces.c02f8744.js","assets/uuid.7a6ccb76.js","assets/login.4514ddd6.js","assets/UnsavedChangesHandler.18e1a61d.css","assets/BackButton.f16ccdc8.js","assets/BackButton.40348456.css","assets/SaveButton.55394a0b.js","assets/SaveButton.c5392044.css","assets/PreviewButton.82e5760d.js","assets/PreviewButton.52324bbf.css","assets/DocsButton.f47eff9e.js","assets/DocsButton.d2184c76.css","assets/DashEditor.debab8a5.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>t(()=>import("./DashPreview.af97f80f.js"),["assets/DashPreview.af97f80f.js","assets/registerWidgets.08d6baab.js","assets/registerWidgets.11938843.css","assets/DashPlayer.c8631241.js","assets/executeJs.1e2bbf54.js","assets/PlayerNavbar.896781ed.js","assets/icons.e8e5575c.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.da52e009.js","assets/Steps.0f0643d5.js","assets/Steps.998aa76d.css","assets/Modal.3f337bc0.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/runnerData.265454ca.js","assets/passwordlessManager.073b43ea.js","assets/pubsub.78fe3466.js","assets/Passwordless.b4bf0234.js","assets/CircularLoading.2d1b6c60.js","assets/lottie.1d018d12.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.86ac0c56.css","assets/WidgetsFrame.921c2d99.js","assets/WidgetsFrame.0816a5f5.css","assets/DashPlayer.4868beea.css","assets/BackButton.51b275b7.js","assets/BackButton.dd542746.css","assets/asyncComputed.d051cfa0.js","assets/dashes.c2c7b6b8.js","assets/activeRecord.e95a5747.js","assets/workspaces.c02f8744.js","assets/DashPreview.999196e0.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>t(()=>import("./HookEditor.8bd059ea.js"),["assets/HookEditor.8bd059ea.js","assets/registerWidgets.08d6baab.js","assets/registerWidgets.11938843.css","assets/Tab.2a8edb19.js","assets/Tab.68f29dcc.css","assets/CircularLoading.2d1b6c60.js","assets/lottie.1d018d12.js","assets/CircularLoading.f81b57b4.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.132a1129.js","assets/icons.e8e5575c.js","assets/asyncComputed.d051cfa0.js","assets/forms.e73a0849.js","assets/activeRecord.e95a5747.js","assets/pubsub.78fe3466.js","assets/dashes.c2c7b6b8.js","assets/runnerData.265454ca.js","assets/hooks.cede592a.js","assets/jobs.c62116dd.js","assets/workspaces.c02f8744.js","assets/uuid.7a6ccb76.js","assets/login.4514ddd6.js","assets/UnsavedChangesHandler.18e1a61d.css","assets/BackButton.f16ccdc8.js","assets/BackButton.40348456.css","assets/SaveButton.55394a0b.js","assets/SaveButton.c5392044.css","assets/DocsButton.f47eff9e.js","assets/DocsButton.d2184c76.css","assets/HookEditor.1c22dc94.css"]),meta:{title:"Abstra - Hook Editor"}},{path:"table/:tableName",name:"tableEditor",component:()=>t(()=>import("./TableEditor.e14373f0.js"),["assets/TableEditor.e14373f0.js","assets/asyncComputed.d051cfa0.js","assets/registerWidgets.08d6baab.js","assets/registerWidgets.11938843.css","assets/tables.8613f2aa.js","assets/activeRecord.e95a5747.js","assets/pubsub.78fe3466.js","assets/CircularLoading.2d1b6c60.js","assets/lottie.1d018d12.js","assets/CircularLoading.f81b57b4.css","assets/Tab.2a8edb19.js","assets/Tab.68f29dcc.css","assets/BackButton.f16ccdc8.js","assets/BackButton.40348456.css","assets/icons.e8e5575c.js","assets/DocsButton.f47eff9e.js","assets/DocsButton.d2184c76.css","assets/SaveButton.55394a0b.js","assets/SaveButton.c5392044.css","assets/TableEditor.66877c31.css"]),meta:{title:"Abstra - Table Editor"}}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});r.beforeEach(async(e,o)=>{L(e,o)});(async()=>{const e=E({render:()=>T(k)});v.init(),f(e,r),e.use(r),e.use(A),e.mount("#app"),e.component("VSelect",P),e.component("Markdown",I),e.component("Icon",D),e.component("Message",w),a(e,y),a(e,V),a(e,R)})();
//# sourceMappingURL=editor.fabe0906.js.map
