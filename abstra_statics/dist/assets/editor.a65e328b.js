import{r as _,d as m,o as p,a as d,b as c,c as h,e as u,f as l,g as E,_ as t,h as b,T as f,i as v,P as A,C as P,M as I,I as w,s as D,j as r,k as y,l as T,m as V,n as g}from"./registerWidgets.4423f919.js";import{u as R}from"./index.ef5cbb4e.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="b7533c1e-297f-4cf5-9446-644119566826",e._sentryDebugIdIdentifier="sentry-dbid-b7533c1e-297f-4cf5-9446-644119566826")}catch{}})();const s=_(!1),k=()=>{window.innerWidth<780?s.value=!0:s.value=!1},L={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},O=m({__name:"App",setup(e){return p(()=>{window.addEventListener("resize",k)}),(o,n)=>{const i=d("router-view");return c(),h("div",L,[u(i)])}}});const a=l({history:E("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.4d3bc96b.js"),["assets/Home.4d3bc96b.js","assets/Modal.a1d02dc5.js","assets/registerWidgets.4423f919.js","assets/registerWidgets.74435dfa.css","assets/Modal.5aaf8eba.css","assets/Home.3d251a01.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.9deb2673.js"),["assets/Workspace.9deb2673.js","assets/registerWidgets.4423f919.js","assets/registerWidgets.74435dfa.css","assets/icons.83f94343.js","assets/Tooltip.8617d77b.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/asyncComputed.39878ec5.js","assets/workspaces.2e933305.js","assets/activeRecord.9d71c559.js","assets/pubsub.7260b9d2.js","assets/DocsButton.8e7a1ad0.js","assets/DocsButton.d2184c76.css","assets/Workspace.463776d7.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>t(()=>import("./Forms.c34f565c.js"),["assets/Forms.c34f565c.js","assets/registerWidgets.4423f919.js","assets/registerWidgets.74435dfa.css","assets/icons.83f94343.js","assets/asyncComputed.39878ec5.js","assets/forms.23acdbe7.js","assets/activeRecord.9d71c559.js","assets/pubsub.7260b9d2.js","assets/RuntimeList.0edab7d0.js","assets/DropdownMenu.6406574f.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.5965ebdd.js","assets/lottie.4638634c.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.1a7d16c9.css"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>t(()=>import("./Dashes.6a4cd06c.js"),["assets/Dashes.6a4cd06c.js","assets/registerWidgets.4423f919.js","assets/registerWidgets.74435dfa.css","assets/icons.83f94343.js","assets/asyncComputed.39878ec5.js","assets/dashes.1958ed82.js","assets/activeRecord.9d71c559.js","assets/pubsub.7260b9d2.js","assets/index.ef5cbb4e.js","assets/RuntimeList.0edab7d0.js","assets/DropdownMenu.6406574f.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.5965ebdd.js","assets/lottie.4638634c.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.1a7d16c9.css"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>t(()=>import("./Jobs.0e5a4b82.js"),["assets/Jobs.0e5a4b82.js","assets/registerWidgets.4423f919.js","assets/registerWidgets.74435dfa.css","assets/icons.83f94343.js","assets/asyncComputed.39878ec5.js","assets/jobs.36db5868.js","assets/activeRecord.9d71c559.js","assets/pubsub.7260b9d2.js","assets/RuntimeList.0edab7d0.js","assets/DropdownMenu.6406574f.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.5965ebdd.js","assets/lottie.4638634c.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.1a7d16c9.css"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>t(()=>import("./Hooks.3a1eb53b.js"),["assets/Hooks.3a1eb53b.js","assets/registerWidgets.4423f919.js","assets/registerWidgets.74435dfa.css","assets/icons.83f94343.js","assets/asyncComputed.39878ec5.js","assets/hooks.72796d14.js","assets/activeRecord.9d71c559.js","assets/pubsub.7260b9d2.js","assets/RuntimeList.0edab7d0.js","assets/DropdownMenu.6406574f.js","assets/DropdownMenu.4f69c722.css","assets/CircularLoading.5965ebdd.js","assets/lottie.4638634c.js","assets/CircularLoading.f81b57b4.css","assets/RuntimeList.1a7d16c9.css"]),meta:{title:"Abstra - Hooks"}},{path:"style",name:"style",component:()=>t(()=>import("./StyleEditor.eb9df94e.js"),["assets/StyleEditor.eb9df94e.js","assets/registerWidgets.4423f919.js","assets/registerWidgets.74435dfa.css","assets/asyncComputed.39878ec5.js","assets/workspaces.2e933305.js","assets/activeRecord.9d71c559.js","assets/pubsub.7260b9d2.js","assets/CircularLoading.5965ebdd.js","assets/lottie.4638634c.js","assets/CircularLoading.f81b57b4.css","assets/icons.83f94343.js","assets/SaveButton.c1ed884a.js","assets/SaveButton.c5392044.css","assets/SidebarPreview.d7b91a37.js","assets/PlayerNavbar.72acb5f2.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.ef5cbb4e.js","assets/WidgetsFrame.a7d4e3d5.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/StyleEditor.b552686c.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>t(()=>import("./SidebarEditor.607010ff.js"),["assets/SidebarEditor.607010ff.js","assets/registerWidgets.4423f919.js","assets/registerWidgets.74435dfa.css","assets/workspaces.2e933305.js","assets/activeRecord.9d71c559.js","assets/pubsub.7260b9d2.js","assets/asyncComputed.39878ec5.js","assets/CircularLoading.5965ebdd.js","assets/lottie.4638634c.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.c1ed884a.js","assets/icons.83f94343.js","assets/SaveButton.c5392044.css","assets/SidebarPreview.d7b91a37.js","assets/PlayerNavbar.72acb5f2.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.ef5cbb4e.js","assets/WidgetsFrame.a7d4e3d5.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/SidebarEditor.c089a033.css"]),meta:{title:"Abstra - Sidebar"}}]},{path:"form/:formPath",name:"formEditor",component:()=>t(()=>import("./FormEditor.3acb03e7.js"),["assets/FormEditor.3acb03e7.js","assets/registerWidgets.4423f919.js","assets/registerWidgets.74435dfa.css","assets/CircularLoading.5965ebdd.js","assets/lottie.4638634c.js","assets/CircularLoading.f81b57b4.css","assets/Error.cf649876.js","assets/Error.5cfc41d8.css","assets/broker.e4dda9ca.js","assets/passwordlessManager.c1306433.js","assets/pubsub.7260b9d2.js","assets/storage.f7ed9f01.js","assets/Passwordless.590b2e09.js","assets/icons.83f94343.js","assets/Passwordless.38735f5c.css","assets/executeJs.0cc22d46.js","assets/PlayerNavbar.72acb5f2.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.ef5cbb4e.js","assets/Steps.4da05aa4.js","assets/Steps.998aa76d.css","assets/Modal.a1d02dc5.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/WidgetsFrame.a7d4e3d5.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.ff7c47b8.js","assets/broker.54a676ec.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.6b333c27.js","assets/asyncComputed.39878ec5.js","assets/forms.23acdbe7.js","assets/activeRecord.9d71c559.js","assets/dashes.1958ed82.js","assets/hooks.72796d14.js","assets/jobs.36db5868.js","assets/workspaces.2e933305.js","assets/uuid.d556c649.js","assets/DocsButton.8e7a1ad0.js","assets/DocsButton.d2184c76.css","assets/UnsavedChangesHandler.8708d896.css","assets/BackButton.a4e793fc.js","assets/BackButton.40348456.css","assets/SaveButton.c1ed884a.js","assets/SaveButton.c5392044.css","assets/PreviewButton.0cc50407.js","assets/PreviewButton.52324bbf.css","assets/FormEditor.62a947bb.css"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.e47995da.js"),["assets/FormPreview.e47995da.js","assets/registerWidgets.4423f919.js","assets/registerWidgets.74435dfa.css","assets/CircularLoading.5965ebdd.js","assets/lottie.4638634c.js","assets/CircularLoading.f81b57b4.css","assets/Error.cf649876.js","assets/Error.5cfc41d8.css","assets/broker.e4dda9ca.js","assets/passwordlessManager.c1306433.js","assets/pubsub.7260b9d2.js","assets/storage.f7ed9f01.js","assets/Passwordless.590b2e09.js","assets/icons.83f94343.js","assets/Passwordless.38735f5c.css","assets/executeJs.0cc22d46.js","assets/PlayerNavbar.72acb5f2.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.ef5cbb4e.js","assets/Steps.4da05aa4.js","assets/Steps.998aa76d.css","assets/Modal.a1d02dc5.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/WidgetsFrame.a7d4e3d5.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.ff7c47b8.js","assets/broker.54a676ec.css","assets/BackButton.bc5b3954.js","assets/BackButton.dd542746.css","assets/asyncComputed.39878ec5.js","assets/forms.23acdbe7.js","assets/activeRecord.9d71c559.js","assets/workspaces.2e933305.js","assets/FormPreview.77e60739.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>t(()=>import("./JobEditor.496343d3.js"),["assets/JobEditor.496343d3.js","assets/registerWidgets.4423f919.js","assets/registerWidgets.74435dfa.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.6b333c27.js","assets/icons.83f94343.js","assets/asyncComputed.39878ec5.js","assets/forms.23acdbe7.js","assets/activeRecord.9d71c559.js","assets/pubsub.7260b9d2.js","assets/dashes.1958ed82.js","assets/index.ef5cbb4e.js","assets/hooks.72796d14.js","assets/jobs.36db5868.js","assets/workspaces.2e933305.js","assets/uuid.d556c649.js","assets/DocsButton.8e7a1ad0.js","assets/DocsButton.d2184c76.css","assets/storage.f7ed9f01.js","assets/UnsavedChangesHandler.8708d896.css","assets/CircularLoading.5965ebdd.js","assets/lottie.4638634c.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.c1ed884a.js","assets/SaveButton.c5392044.css","assets/BackButton.a4e793fc.js","assets/BackButton.40348456.css","assets/JobEditor.d8bbc89c.css"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>t(()=>import("./DashEditor.365448f3.js"),["assets/DashEditor.365448f3.js","assets/index.ef5cbb4e.js","assets/registerWidgets.4423f919.js","assets/registerWidgets.74435dfa.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.6b333c27.js","assets/icons.83f94343.js","assets/asyncComputed.39878ec5.js","assets/forms.23acdbe7.js","assets/activeRecord.9d71c559.js","assets/pubsub.7260b9d2.js","assets/dashes.1958ed82.js","assets/hooks.72796d14.js","assets/jobs.36db5868.js","assets/workspaces.2e933305.js","assets/uuid.d556c649.js","assets/DocsButton.8e7a1ad0.js","assets/DocsButton.d2184c76.css","assets/storage.f7ed9f01.js","assets/UnsavedChangesHandler.8708d896.css","assets/DashPlayer.df932533.js","assets/executeJs.0cc22d46.js","assets/PlayerNavbar.72acb5f2.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.4da05aa4.js","assets/Steps.998aa76d.css","assets/Modal.a1d02dc5.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/passwordlessManager.c1306433.js","assets/Passwordless.590b2e09.js","assets/CircularLoading.5965ebdd.js","assets/lottie.4638634c.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.38735f5c.css","assets/WidgetsFrame.a7d4e3d5.js","assets/WidgetsFrame.0816a5f5.css","assets/DashPlayer.4868beea.css","assets/BackButton.a4e793fc.js","assets/BackButton.40348456.css","assets/SaveButton.c1ed884a.js","assets/SaveButton.c5392044.css","assets/PreviewButton.0cc50407.js","assets/PreviewButton.52324bbf.css","assets/DashEditor.7597d8d6.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>t(()=>import("./DashPreview.8a3c6b54.js"),["assets/DashPreview.8a3c6b54.js","assets/registerWidgets.4423f919.js","assets/registerWidgets.74435dfa.css","assets/DashPlayer.df932533.js","assets/executeJs.0cc22d46.js","assets/PlayerNavbar.72acb5f2.js","assets/icons.83f94343.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.ef5cbb4e.js","assets/Steps.4da05aa4.js","assets/Steps.998aa76d.css","assets/Modal.a1d02dc5.js","assets/Modal.5aaf8eba.css","assets/executeJs.887e9a58.css","assets/passwordlessManager.c1306433.js","assets/pubsub.7260b9d2.js","assets/storage.f7ed9f01.js","assets/Passwordless.590b2e09.js","assets/CircularLoading.5965ebdd.js","assets/lottie.4638634c.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.38735f5c.css","assets/WidgetsFrame.a7d4e3d5.js","assets/WidgetsFrame.0816a5f5.css","assets/DashPlayer.4868beea.css","assets/BackButton.bc5b3954.js","assets/BackButton.dd542746.css","assets/asyncComputed.39878ec5.js","assets/dashes.1958ed82.js","assets/activeRecord.9d71c559.js","assets/workspaces.2e933305.js","assets/DashPreview.a3f29850.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>t(()=>import("./HookEditor.94f95e1c.js"),["assets/HookEditor.94f95e1c.js","assets/registerWidgets.4423f919.js","assets/registerWidgets.74435dfa.css","assets/UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.6b333c27.js","assets/icons.83f94343.js","assets/asyncComputed.39878ec5.js","assets/forms.23acdbe7.js","assets/activeRecord.9d71c559.js","assets/pubsub.7260b9d2.js","assets/dashes.1958ed82.js","assets/index.ef5cbb4e.js","assets/hooks.72796d14.js","assets/jobs.36db5868.js","assets/workspaces.2e933305.js","assets/uuid.d556c649.js","assets/DocsButton.8e7a1ad0.js","assets/DocsButton.d2184c76.css","assets/storage.f7ed9f01.js","assets/UnsavedChangesHandler.8708d896.css","assets/CircularLoading.5965ebdd.js","assets/lottie.4638634c.js","assets/CircularLoading.f81b57b4.css","assets/BackButton.a4e793fc.js","assets/BackButton.40348456.css","assets/SaveButton.c1ed884a.js","assets/SaveButton.c5392044.css","assets/HookEditor.1c22dc94.css"]),meta:{title:"Abstra - Hook Editor"}}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{R(e,o)});(async()=>{const e=b({render:()=>y(O)});f.init(),v(e,a),e.use(a),e.use(A),e.mount("#app"),e.component("VSelect",P),e.component("Markdown",I),e.component("Icon",w),e.component("Message",D),r(e,T),r(e,V),r(e,g)})();
//# sourceMappingURL=editor.a65e328b.js.map
