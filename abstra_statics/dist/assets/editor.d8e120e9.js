import{r as _,d as m,o as p,a as d,b as c,c as h,e as b,f as l,g as u,_ as t,h as E,T as v,i as f,P as A,C as P,M as I,I as D,s as w,j as a,k as T,l as y,m as V,n as R}from"./registerWidgets.9796e1ef.js";import{u as L}from"./index.b8da9183.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="c07dc36b-8ade-4cbb-82a6-26afaef34b8a",e._sentryDebugIdIdentifier="sentry-dbid-c07dc36b-8ade-4cbb-82a6-26afaef34b8a")}catch{}})();const s=_(!1),g=()=>{window.innerWidth<780?s.value=!0:s.value=!1},O={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},k=m({__name:"App",setup(e){return p(()=>{window.addEventListener("resize",g)}),(o,n)=>{const i=d("router-view");return c(),h("div",O,[b(i)])}}});const r=l({history:u("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.e30171a7.js"),["assets/Home.e30171a7.js","assets/Modal.8105c913.js","assets/registerWidgets.9796e1ef.js","assets/registerWidgets.448db7e9.css","assets/Modal.5aaf8eba.css","assets/Home.1c04d83a.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.41d59a96.js"),["assets/Workspace.41d59a96.js","assets/registerWidgets.9796e1ef.js","assets/registerWidgets.448db7e9.css","assets/icons.ef8111c1.js","assets/Tooltip.75f602ed.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/asyncComputed.8fa1d416.js","assets/workspaces.e63e9838.js","assets/activeRecord.c82d3135.js","assets/pubsub.b7af8716.js","assets/login.8f09656b.js","assets/DocsButton.b0c09551.js","assets/DocsButton.d2184c76.css","assets/Workspace.b7d4a3bf.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>t(()=>import("./Forms.74e9e905.js"),["assets/Forms.74e9e905.js","assets/registerWidgets.9796e1ef.js","assets/registerWidgets.448db7e9.css","assets/icons.ef8111c1.js","assets/asyncComputed.8fa1d416.js","assets/forms.30f0093c.js","assets/activeRecord.c82d3135.js","assets/pubsub.b7af8716.js","assets/RuntimeList.b42e19d3.js","assets/DropdownMenu.1e184655.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.c1af5350.js","assets/lottie.5511c17b.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>t(()=>import("./Dashes.27e36247.js"),["assets/Dashes.27e36247.js","assets/registerWidgets.9796e1ef.js","assets/registerWidgets.448db7e9.css","assets/icons.ef8111c1.js","assets/asyncComputed.8fa1d416.js","assets/dashes.b1bdfdd3.js","assets/activeRecord.c82d3135.js","assets/pubsub.b7af8716.js","assets/runnerData.259c60d0.js","assets/RuntimeList.b42e19d3.js","assets/DropdownMenu.1e184655.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.c1af5350.js","assets/lottie.5511c17b.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>t(()=>import("./Jobs.0e067aea.js"),["assets/Jobs.0e067aea.js","assets/registerWidgets.9796e1ef.js","assets/registerWidgets.448db7e9.css","assets/icons.ef8111c1.js","assets/asyncComputed.8fa1d416.js","assets/jobs.685b25e1.js","assets/activeRecord.c82d3135.js","assets/pubsub.b7af8716.js","assets/RuntimeList.b42e19d3.js","assets/DropdownMenu.1e184655.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.c1af5350.js","assets/lottie.5511c17b.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>t(()=>import("./Hooks.b858fac8.js"),["assets/Hooks.b858fac8.js","assets/registerWidgets.9796e1ef.js","assets/registerWidgets.448db7e9.css","assets/icons.ef8111c1.js","assets/asyncComputed.8fa1d416.js","assets/hooks.4658fc23.js","assets/activeRecord.c82d3135.js","assets/pubsub.b7af8716.js","assets/RuntimeList.b42e19d3.js","assets/DropdownMenu.1e184655.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.c1af5350.js","assets/lottie.5511c17b.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Hooks"}},{path:"tables",name:"tables",component:()=>t(()=>import("./Tables.c2115b5c.js"),["assets/Tables.c2115b5c.js","assets/registerWidgets.9796e1ef.js","assets/registerWidgets.448db7e9.css","assets/icons.ef8111c1.js","assets/asyncComputed.8fa1d416.js","assets/tables.0d9ad853.js","assets/activeRecord.c82d3135.js","assets/pubsub.b7af8716.js","assets/RuntimeList.b42e19d3.js","assets/DropdownMenu.1e184655.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.c1af5350.js","assets/lottie.5511c17b.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.bab136d4.css"]),meta:{title:"Abstra - Tables"}},{path:"style",name:"style",component:()=>t(()=>import("./StyleEditor.d92423b2.js"),["assets/StyleEditor.d92423b2.js","assets/registerWidgets.9796e1ef.js","assets/registerWidgets.448db7e9.css","assets/asyncComputed.8fa1d416.js","assets/workspaces.e63e9838.js","assets/activeRecord.c82d3135.js","assets/pubsub.b7af8716.js","assets/CircularLoading.c1af5350.js","assets/lottie.5511c17b.js","assets/CircularLoading.f81b57b4.css","assets/icons.ef8111c1.js","assets/SidebarPreview.c7eac74f.js","assets/PlayerNavbar.9e7b1797.js","assets/PlayerNavbar.adff8b48.css","assets/runnerData.259c60d0.js","assets/colors.9023ee77.js","assets/SidebarPreview.12212654.css","assets/SaveButton.f25db7ad.js","assets/SaveButton.c5392044.css","assets/StyleEditor.b552686c.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>t(()=>import("./SidebarEditor.fec5aabb.js"),["assets/SidebarEditor.fec5aabb.js","assets/registerWidgets.9796e1ef.js","assets/registerWidgets.448db7e9.css","assets/workspaces.e63e9838.js","assets/activeRecord.c82d3135.js","assets/pubsub.b7af8716.js","assets/asyncComputed.8fa1d416.js","assets/CircularLoading.c1af5350.js","assets/lottie.5511c17b.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.f25db7ad.js","assets/icons.ef8111c1.js","assets/SaveButton.c5392044.css","assets/SidebarPreview.c7eac74f.js","assets/PlayerNavbar.9e7b1797.js","assets/PlayerNavbar.adff8b48.css","assets/runnerData.259c60d0.js","assets/colors.9023ee77.js","assets/SidebarPreview.12212654.css","assets/SidebarEditor.f65d95bf.css"]),meta:{title:"Abstra - Sidebar"}}]},{path:"form/:formPath",name:"editor",component:()=>t(()=>import("./FormEditor.188aa1a9.js"),["assets/FormEditor.188aa1a9.js","assets/registerWidgets.9796e1ef.js","assets/registerWidgets.448db7e9.css","assets/CircularLoading.c1af5350.js","assets/lottie.5511c17b.js","assets/CircularLoading.f81b57b4.css","assets/Error.53593bcd.js","assets/Error.5cfc41d8.css","assets/broker.660ab506.js","assets/passwordlessManager.a6a91c78.js","assets/pubsub.b7af8716.js","assets/icons.ef8111c1.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.b8eb8dca.js","assets/Passwordless.c8714c1c.js","assets/Passwordless.86ac0c56.css","assets/executeJs.8eb12018.js","assets/PlayerNavbar.9e7b1797.js","assets/PlayerNavbar.adff8b48.css","assets/index.b8da9183.js","assets/WidgetsFrame.d915bdf0.js","assets/colors.9023ee77.js","assets/WidgetsFrame.701a818b.css","assets/Modal.8105c913.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/broker.5f3abad8.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.172b65d1.js","assets/asyncComputed.8fa1d416.js","assets/forms.30f0093c.js","assets/activeRecord.c82d3135.js","assets/dashes.b1bdfdd3.js","assets/runnerData.259c60d0.js","assets/hooks.4658fc23.js","assets/jobs.685b25e1.js","assets/workspaces.e63e9838.js","assets/uuid.c631c202.js","assets/login.8f09656b.js","assets/UnsavedChangesHandler.6c0ea770.css","assets/Tab.553fd73e.js","assets/Tab.68f29dcc.css","assets/BackButton.3f2a1bf1.js","assets/BackButton.40348456.css","assets/SaveButton.f25db7ad.js","assets/SaveButton.c5392044.css","assets/DocsButton.b0c09551.js","assets/DocsButton.d2184c76.css","assets/PreviewButton.a8d7577c.js","assets/PreviewButton.52324bbf.css","assets/FormEditor.6172d866.css"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"form-preview",component:()=>t(()=>import("./FormPreview.8ee8c98f.js"),["assets/FormPreview.8ee8c98f.js","assets/registerWidgets.9796e1ef.js","assets/registerWidgets.448db7e9.css","assets/CircularLoading.c1af5350.js","assets/lottie.5511c17b.js","assets/CircularLoading.f81b57b4.css","assets/Error.53593bcd.js","assets/Error.5cfc41d8.css","assets/broker.660ab506.js","assets/passwordlessManager.a6a91c78.js","assets/pubsub.b7af8716.js","assets/icons.ef8111c1.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.b8eb8dca.js","assets/Passwordless.c8714c1c.js","assets/Passwordless.86ac0c56.css","assets/executeJs.8eb12018.js","assets/PlayerNavbar.9e7b1797.js","assets/PlayerNavbar.adff8b48.css","assets/index.b8da9183.js","assets/WidgetsFrame.d915bdf0.js","assets/colors.9023ee77.js","assets/WidgetsFrame.701a818b.css","assets/Modal.8105c913.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/broker.5f3abad8.css","assets/BackButton.087c0b1a.js","assets/BackButton.dd542746.css","assets/asyncComputed.8fa1d416.js","assets/forms.30f0093c.js","assets/activeRecord.c82d3135.js","assets/workspaces.e63e9838.js","assets/FormPreview.6d0d0d3a.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>t(()=>import("./JobEditor.4e7b204b.js"),["assets/JobEditor.4e7b204b.js","assets/registerWidgets.9796e1ef.js","assets/registerWidgets.448db7e9.css","assets/Tab.553fd73e.js","assets/Tab.68f29dcc.css","assets/CircularLoading.c1af5350.js","assets/lottie.5511c17b.js","assets/CircularLoading.f81b57b4.css","assets/asyncComputed.8fa1d416.js","assets/jobs.685b25e1.js","assets/activeRecord.c82d3135.js","assets/pubsub.b7af8716.js","assets/SaveButton.f25db7ad.js","assets/icons.ef8111c1.js","assets/SaveButton.c5392044.css","assets/BackButton.3f2a1bf1.js","assets/BackButton.40348456.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.172b65d1.js","assets/forms.30f0093c.js","assets/dashes.b1bdfdd3.js","assets/runnerData.259c60d0.js","assets/hooks.4658fc23.js","assets/workspaces.e63e9838.js","assets/uuid.c631c202.js","assets/login.8f09656b.js","assets/UnsavedChangesHandler.6c0ea770.css","assets/DocsButton.b0c09551.js","assets/DocsButton.d2184c76.css","assets/JobEditor.d8bbc89c.css"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>t(()=>import("./DashEditor.968e3d9c.js"),["assets/DashEditor.968e3d9c.js","assets/index.b8da9183.js","assets/registerWidgets.9796e1ef.js","assets/registerWidgets.448db7e9.css","assets/Tab.553fd73e.js","assets/Tab.68f29dcc.css","assets/DashPlayer.7e6e597c.js","assets/runnerData.259c60d0.js","assets/executeJs.8eb12018.js","assets/PlayerNavbar.9e7b1797.js","assets/icons.ef8111c1.js","assets/PlayerNavbar.adff8b48.css","assets/WidgetsFrame.d915bdf0.js","assets/colors.9023ee77.js","assets/WidgetsFrame.701a818b.css","assets/Modal.8105c913.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/passwordlessManager.a6a91c78.js","assets/pubsub.b7af8716.js","assets/Passwordless.c8714c1c.js","assets/CircularLoading.c1af5350.js","assets/lottie.5511c17b.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.86ac0c56.css","assets/DashPlayer.ef4a798d.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.172b65d1.js","assets/asyncComputed.8fa1d416.js","assets/forms.30f0093c.js","assets/activeRecord.c82d3135.js","assets/dashes.b1bdfdd3.js","assets/hooks.4658fc23.js","assets/jobs.685b25e1.js","assets/workspaces.e63e9838.js","assets/uuid.c631c202.js","assets/login.8f09656b.js","assets/UnsavedChangesHandler.6c0ea770.css","assets/BackButton.3f2a1bf1.js","assets/BackButton.40348456.css","assets/SaveButton.f25db7ad.js","assets/SaveButton.c5392044.css","assets/PreviewButton.a8d7577c.js","assets/PreviewButton.52324bbf.css","assets/DocsButton.b0c09551.js","assets/DocsButton.d2184c76.css","assets/DashEditor.3a6ec511.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>t(()=>import("./DashPreview.9d2530c1.js"),["assets/DashPreview.9d2530c1.js","assets/registerWidgets.9796e1ef.js","assets/registerWidgets.448db7e9.css","assets/DashPlayer.7e6e597c.js","assets/runnerData.259c60d0.js","assets/executeJs.8eb12018.js","assets/PlayerNavbar.9e7b1797.js","assets/icons.ef8111c1.js","assets/PlayerNavbar.adff8b48.css","assets/index.b8da9183.js","assets/WidgetsFrame.d915bdf0.js","assets/colors.9023ee77.js","assets/WidgetsFrame.701a818b.css","assets/Modal.8105c913.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/passwordlessManager.a6a91c78.js","assets/pubsub.b7af8716.js","assets/Passwordless.c8714c1c.js","assets/CircularLoading.c1af5350.js","assets/lottie.5511c17b.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.86ac0c56.css","assets/DashPlayer.ef4a798d.css","assets/BackButton.087c0b1a.js","assets/BackButton.dd542746.css","assets/asyncComputed.8fa1d416.js","assets/dashes.b1bdfdd3.js","assets/activeRecord.c82d3135.js","assets/workspaces.e63e9838.js","assets/DashPreview.999196e0.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>t(()=>import("./HookEditor.46b16f5e.js"),["assets/HookEditor.46b16f5e.js","assets/registerWidgets.9796e1ef.js","assets/registerWidgets.448db7e9.css","assets/Tab.553fd73e.js","assets/Tab.68f29dcc.css","assets/CircularLoading.c1af5350.js","assets/lottie.5511c17b.js","assets/CircularLoading.f81b57b4.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.172b65d1.js","assets/icons.ef8111c1.js","assets/asyncComputed.8fa1d416.js","assets/forms.30f0093c.js","assets/activeRecord.c82d3135.js","assets/pubsub.b7af8716.js","assets/dashes.b1bdfdd3.js","assets/runnerData.259c60d0.js","assets/hooks.4658fc23.js","assets/jobs.685b25e1.js","assets/workspaces.e63e9838.js","assets/uuid.c631c202.js","assets/login.8f09656b.js","assets/UnsavedChangesHandler.6c0ea770.css","assets/BackButton.3f2a1bf1.js","assets/BackButton.40348456.css","assets/SaveButton.f25db7ad.js","assets/SaveButton.c5392044.css","assets/DocsButton.b0c09551.js","assets/DocsButton.d2184c76.css","assets/HookEditor.1c22dc94.css"]),meta:{title:"Abstra - Hook Editor"}},{path:"table/:tableName",name:"tableEditor",component:()=>t(()=>import("./TableEditor.5966cc1f.js"),["assets/TableEditor.5966cc1f.js","assets/asyncComputed.8fa1d416.js","assets/registerWidgets.9796e1ef.js","assets/registerWidgets.448db7e9.css","assets/tables.0d9ad853.js","assets/activeRecord.c82d3135.js","assets/pubsub.b7af8716.js","assets/CircularLoading.c1af5350.js","assets/lottie.5511c17b.js","assets/CircularLoading.f81b57b4.css","assets/Tab.553fd73e.js","assets/Tab.68f29dcc.css","assets/BackButton.3f2a1bf1.js","assets/BackButton.40348456.css","assets/icons.ef8111c1.js","assets/DocsButton.b0c09551.js","assets/DocsButton.d2184c76.css","assets/SaveButton.f25db7ad.js","assets/SaveButton.c5392044.css","assets/TableEditor.66877c31.css"]),meta:{title:"Abstra - Table Editor"}}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});r.beforeEach(async(e,o)=>{L(e,o)});(async()=>{const e=E({render:()=>T(k)});v.init(),f(e,r),e.use(r),e.use(A),e.mount("#app"),e.component("VSelect",P),e.component("Markdown",I),e.component("Icon",D),e.component("Message",w),a(e,y),a(e,V),a(e,R)})();
//# sourceMappingURL=editor.d8e120e9.js.map
