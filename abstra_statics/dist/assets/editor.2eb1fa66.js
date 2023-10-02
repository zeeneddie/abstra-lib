import{r as _,d,o as m,a as p,b as c,c as h,w as u,e as l,f as E,u as b,A as f,g as v,h as A,_ as t,i as w,T as P,j as I,P as D,C as y,M as k,I as V,s as T,k as r,l as g,m as R,n as L,p as O}from"./outputWidgets.541a6a3f.js";import{u as W}from"./index.1b1480b6.js";import{u as j}from"./index.669ed6e9.js";import"./pubsub.8482a29f.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="6948dadd-5209-4e2a-b93b-cbd20943de71",e._sentryDebugIdIdentifier="sentry-dbid-6948dadd-5209-4e2a-b93b-cbd20943de71")}catch{}})();const s=_(!1),C=()=>{window.innerWidth<780?s.value=!0:s.value=!1},S={style:{height:"100vh","box-sizing":"border-box",width:"100%"}},x=d({__name:"App",setup(e){const o={token:{colorPrimary:"#d14056"}};return m(()=>{window.addEventListener("resize",C)}),(i,M)=>{const n=p("router-view");return c(),h(b(f),{theme:o},{default:u(()=>[l("div",S,[E(n)])]),_:1})}}});const a=v({history:A("/"),routes:[{path:"/_editor/",name:"app",component:()=>t(()=>import("./Home.4bed55a6.js"),["assets/Home.4bed55a6.js","assets/Modal.e29b464d.js","assets/outputWidgets.541a6a3f.js","assets/outputWidgets.8ce475af.css","assets/Modal.5aaf8eba.css","assets/Home.3d251a01.css"]),redirect:{name:"workspace"},children:[{path:"",name:"workspace",component:()=>t(()=>import("./Workspace.e0e4dc95.js"),["assets/Workspace.e0e4dc95.js","assets/outputWidgets.541a6a3f.js","assets/outputWidgets.8ce475af.css","assets/icons.fbbc5318.js","assets/Tooltip.b122611e.js","assets/Tooltip.63c4352e.css","assets/logo.084e5d7c.js","assets/LoginBlock.9946ff89.js","assets/workspaces.d27d9f39.js","assets/activeRecord.867c40fa.js","assets/pubsub.8482a29f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3e45b890.js","assets/popupNotifcation.b07ed784.js","assets/asyncComputed.6496ca6b.js","assets/index.07910c0e.js","assets/Title.3011141f.js","assets/index.ef35da09.js","assets/Form.2a9acb85.js","assets/LoginBlock.d273f904.css","assets/BaseLayout.5761ab4f.js","assets/BaseLayout.282f66f6.css","assets/index.7fb7f882.js","assets/index.33fb7a48.js","assets/Workspace.9a25b177.css"]),redirect:()=>({name:"forms"}),children:[{path:"forms",name:"forms",component:()=>t(()=>import("./Forms.b2fc416f.js"),["assets/Forms.b2fc416f.js","assets/outputWidgets.541a6a3f.js","assets/outputWidgets.8ce475af.css","assets/icons.fbbc5318.js","assets/asyncComputed.6496ca6b.js","assets/forms.4ff36d50.js","assets/activeRecord.867c40fa.js","assets/pubsub.8482a29f.js","assets/CrudView.vue_vue_type_script_setup_true_lang.af69973c.js","assets/index.07910c0e.js","assets/Title.3011141f.js","assets/Form.2a9acb85.js","assets/index.f20ad580.js","assets/index.c3edc651.js","assets/index.3cff0676.js","assets/index.1797b918.js","assets/index.33fb7a48.js","assets/ant-design.e75c36c7.js"]),meta:{title:"Abstra - Forms"}},{path:"dashes",name:"dashes",component:()=>t(()=>import("./Dashes.b190fb3a.js"),["assets/Dashes.b190fb3a.js","assets/outputWidgets.541a6a3f.js","assets/outputWidgets.8ce475af.css","assets/icons.fbbc5318.js","assets/asyncComputed.6496ca6b.js","assets/dashes.438c0418.js","assets/activeRecord.867c40fa.js","assets/pubsub.8482a29f.js","assets/index.1b1480b6.js","assets/CrudView.vue_vue_type_script_setup_true_lang.af69973c.js","assets/index.07910c0e.js","assets/Title.3011141f.js","assets/Form.2a9acb85.js","assets/index.f20ad580.js","assets/index.c3edc651.js","assets/index.3cff0676.js","assets/index.1797b918.js","assets/index.33fb7a48.js","assets/ant-design.e75c36c7.js"]),meta:{title:"Abstra - Dashes"}},{path:"jobs",name:"jobs",component:()=>t(()=>import("./Jobs.d810cc04.js"),["assets/Jobs.d810cc04.js","assets/outputWidgets.541a6a3f.js","assets/outputWidgets.8ce475af.css","assets/icons.fbbc5318.js","assets/asyncComputed.6496ca6b.js","assets/jobs.8963c228.js","assets/activeRecord.867c40fa.js","assets/pubsub.8482a29f.js","assets/CrudView.vue_vue_type_script_setup_true_lang.af69973c.js","assets/index.07910c0e.js","assets/Title.3011141f.js","assets/Form.2a9acb85.js","assets/index.f20ad580.js","assets/index.c3edc651.js","assets/index.3cff0676.js","assets/index.1797b918.js","assets/index.33fb7a48.js","assets/ant-design.e75c36c7.js"]),meta:{title:"Abstra - Jobs"}},{path:"hooks",name:"hooks",component:()=>t(()=>import("./Hooks.9b84041b.js"),["assets/Hooks.9b84041b.js","assets/outputWidgets.541a6a3f.js","assets/outputWidgets.8ce475af.css","assets/icons.fbbc5318.js","assets/asyncComputed.6496ca6b.js","assets/hooks.c3613214.js","assets/activeRecord.867c40fa.js","assets/pubsub.8482a29f.js","assets/CrudView.vue_vue_type_script_setup_true_lang.af69973c.js","assets/index.07910c0e.js","assets/Title.3011141f.js","assets/Form.2a9acb85.js","assets/index.f20ad580.js","assets/index.c3edc651.js","assets/index.3cff0676.js","assets/index.1797b918.js","assets/index.33fb7a48.js","assets/ant-design.e75c36c7.js"]),meta:{title:"Abstra - Hooks"}},{path:"style",name:"style",component:()=>t(()=>import("./StyleEditor.b666732d.js"),["assets/StyleEditor.b666732d.js","assets/asyncComputed.6496ca6b.js","assets/outputWidgets.541a6a3f.js","assets/outputWidgets.8ce475af.css","assets/workspaces.d27d9f39.js","assets/activeRecord.867c40fa.js","assets/pubsub.8482a29f.js","assets/CircularLoading.46b3501d.js","assets/CircularLoading.f81b57b4.css","assets/icons.fbbc5318.js","assets/index.7f86f9a3.js","assets/Title.3011141f.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.af310abc.js","assets/ant-design.e75c36c7.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.343fad7a.js","assets/PlayerNavbar.f92ecc26.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.1b1480b6.js","assets/WidgetsFrame.2d6f15b2.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/index.1797b918.js","assets/Form.2a9acb85.js","assets/StyleEditor.4d8e1574.css"]),meta:{title:"Abstra - Style"}},{path:"sidebar",name:"sidebar",component:()=>t(()=>import("./SidebarEditor.4297e3da.js"),["assets/SidebarEditor.4297e3da.js","assets/outputWidgets.541a6a3f.js","assets/outputWidgets.8ce475af.css","assets/index.68ffc7e6.js","assets/Title.3011141f.js","assets/index.33fb7a48.js","assets/index.1797b918.js","assets/workspaces.d27d9f39.js","assets/activeRecord.867c40fa.js","assets/pubsub.8482a29f.js","assets/asyncComputed.6496ca6b.js","assets/CircularLoading.46b3501d.js","assets/CircularLoading.f81b57b4.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.af310abc.js","assets/ant-design.e75c36c7.js","assets/SaveButton.13ece1cb.css","assets/SidebarPreview.343fad7a.js","assets/PlayerNavbar.f92ecc26.js","assets/icons.fbbc5318.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.1b1480b6.js","assets/WidgetsFrame.2d6f15b2.js","assets/WidgetsFrame.0816a5f5.css","assets/SidebarPreview.45d86893.css","assets/Form.2a9acb85.js"]),meta:{title:"Abstra - Sidebar"}}]},{path:"form/:formPath",name:"formEditor",component:()=>t(()=>import("./FormEditor.91268b07.js"),["assets/FormEditor.91268b07.js","assets/outputWidgets.541a6a3f.js","assets/outputWidgets.8ce475af.css","assets/FormTester.vue_vue_type_script_setup_true_lang.5ffd06da.js","assets/SmartConsole.e1c7bfc3.js","assets/asyncComputed.6496ca6b.js","assets/forms.4ff36d50.js","assets/activeRecord.867c40fa.js","assets/pubsub.8482a29f.js","assets/dashes.438c0418.js","assets/index.1b1480b6.js","assets/hooks.c3613214.js","assets/jobs.8963c228.js","assets/workspaces.d27d9f39.js","assets/icons.fbbc5318.js","assets/Title.3011141f.js","assets/index.3cff0676.js","assets/uuid.25354c68.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3e45b890.js","assets/SmartConsole.ed33cdbe.css","assets/Form.2a9acb85.js","assets/broker.7dc50939.js","assets/index.669ed6e9.js","assets/executeJs.16417bf7.js","assets/CircularLoading.46b3501d.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.f92ecc26.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.554db205.js","assets/Steps.998aa76d.css","assets/Modal.e29b464d.js","assets/Modal.5aaf8eba.css","assets/executeJs.9c4b02ee.css","assets/WidgetsFrame.2d6f15b2.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.a70d3ffa.js","assets/broker.ac4594bd.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.af310abc.js","assets/ant-design.e75c36c7.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.5761ab4f.js","assets/BaseLayout.282f66f6.css","assets/TabPane.40396dd5.js","assets/index.d89692b2.js","assets/index.7fb7f882.js","assets/index.33fb7a48.js"]),meta:{title:"Abstra - Smart Form Editor"}},{path:"form/:formPath/preview",name:"formPreview",component:()=>t(()=>import("./FormPreview.9d0c21a7.js"),["assets/FormPreview.9d0c21a7.js","assets/outputWidgets.541a6a3f.js","assets/outputWidgets.8ce475af.css","assets/CircularLoading.46b3501d.js","assets/CircularLoading.f81b57b4.css","assets/broker.7dc50939.js","assets/index.669ed6e9.js","assets/pubsub.8482a29f.js","assets/executeJs.16417bf7.js","assets/icons.fbbc5318.js","assets/PlayerNavbar.f92ecc26.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.1b1480b6.js","assets/Steps.554db205.js","assets/Steps.998aa76d.css","assets/Modal.e29b464d.js","assets/Modal.5aaf8eba.css","assets/executeJs.9c4b02ee.css","assets/WidgetsFrame.2d6f15b2.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.a70d3ffa.js","assets/broker.ac4594bd.css","assets/BackButton.e2d95cfe.js","assets/BackButton.dd542746.css","assets/asyncComputed.6496ca6b.js","assets/forms.4ff36d50.js","assets/activeRecord.867c40fa.js","assets/workspaces.d27d9f39.js","assets/FormPreview.0cd86555.css"]),meta:{title:"Abstra - Smart Form Preview"}},{path:"job/:jobId",name:"jobEditor",component:()=>t(()=>import("./JobEditor.43dab784.js"),["assets/JobEditor.43dab784.js","assets/outputWidgets.541a6a3f.js","assets/outputWidgets.8ce475af.css","assets/SmartConsole.e1c7bfc3.js","assets/asyncComputed.6496ca6b.js","assets/forms.4ff36d50.js","assets/activeRecord.867c40fa.js","assets/pubsub.8482a29f.js","assets/dashes.438c0418.js","assets/index.1b1480b6.js","assets/hooks.c3613214.js","assets/jobs.8963c228.js","assets/workspaces.d27d9f39.js","assets/icons.fbbc5318.js","assets/Title.3011141f.js","assets/index.3cff0676.js","assets/uuid.25354c68.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3e45b890.js","assets/SmartConsole.ed33cdbe.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.af310abc.js","assets/ant-design.e75c36c7.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.5761ab4f.js","assets/BaseLayout.282f66f6.css","assets/JobSettings.vue_vue_type_script_setup_true_lang.ca02b8dd.js","assets/dayjs.03d6e1d3.js","assets/index.f20ad580.js","assets/Form.2a9acb85.js","assets/index.7fb7f882.js","assets/index.33fb7a48.js","assets/TabPane.40396dd5.js"]),meta:{title:"Abstra - Job Editor"}},{path:"dash/:dashPath",name:"dashEditor",component:()=>t(()=>import("./DashEditor.965e9aa4.js"),["assets/DashEditor.965e9aa4.js","assets/index.1b1480b6.js","assets/outputWidgets.541a6a3f.js","assets/outputWidgets.8ce475af.css","assets/BaseLayout.5761ab4f.js","assets/BaseLayout.282f66f6.css","assets/DashPlayer.1021fe23.js","assets/executeJs.16417bf7.js","assets/icons.fbbc5318.js","assets/index.669ed6e9.js","assets/pubsub.8482a29f.js","assets/CircularLoading.46b3501d.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.f92ecc26.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.554db205.js","assets/Steps.998aa76d.css","assets/Modal.e29b464d.js","assets/Modal.5aaf8eba.css","assets/executeJs.9c4b02ee.css","assets/geometryUtils.2e28a652.js","assets/WidgetsFrame.2d6f15b2.js","assets/WidgetsFrame.0816a5f5.css","assets/DashPlayer.4868beea.css","assets/SmartConsole.e1c7bfc3.js","assets/asyncComputed.6496ca6b.js","assets/forms.4ff36d50.js","assets/activeRecord.867c40fa.js","assets/dashes.438c0418.js","assets/hooks.c3613214.js","assets/jobs.8963c228.js","assets/workspaces.d27d9f39.js","assets/Title.3011141f.js","assets/index.3cff0676.js","assets/uuid.25354c68.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3e45b890.js","assets/SmartConsole.ed33cdbe.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.af310abc.js","assets/ant-design.e75c36c7.js","assets/SaveButton.13ece1cb.css","assets/keyboard.77b17bb3.js","assets/index.7fb7f882.js","assets/index.33fb7a48.js","assets/TabPane.40396dd5.js","assets/DashEditor.b1e4d748.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"dash/:dashPath/preview",name:"dashPreview",component:()=>t(()=>import("./DashPreview.d25ed2d6.js"),["assets/DashPreview.d25ed2d6.js","assets/outputWidgets.541a6a3f.js","assets/outputWidgets.8ce475af.css","assets/DashPlayer.1021fe23.js","assets/executeJs.16417bf7.js","assets/icons.fbbc5318.js","assets/index.669ed6e9.js","assets/pubsub.8482a29f.js","assets/CircularLoading.46b3501d.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.f92ecc26.js","assets/PlayerNavbar.76a7eb2f.css","assets/index.1b1480b6.js","assets/Steps.554db205.js","assets/Steps.998aa76d.css","assets/Modal.e29b464d.js","assets/Modal.5aaf8eba.css","assets/executeJs.9c4b02ee.css","assets/geometryUtils.2e28a652.js","assets/WidgetsFrame.2d6f15b2.js","assets/WidgetsFrame.0816a5f5.css","assets/DashPlayer.4868beea.css","assets/BackButton.e2d95cfe.js","assets/BackButton.dd542746.css","assets/asyncComputed.6496ca6b.js","assets/dashes.438c0418.js","assets/activeRecord.867c40fa.js","assets/workspaces.d27d9f39.js","assets/DashPreview.a3f29850.css"]),meta:{title:"Abstra - Dash Editor"}},{path:"hook/:hookPath",name:"hookEditor",component:()=>t(()=>import("./HookEditor.6d274d94.js"),["assets/HookEditor.6d274d94.js","assets/outputWidgets.541a6a3f.js","assets/outputWidgets.8ce475af.css","assets/SmartConsole.e1c7bfc3.js","assets/asyncComputed.6496ca6b.js","assets/forms.4ff36d50.js","assets/activeRecord.867c40fa.js","assets/pubsub.8482a29f.js","assets/dashes.438c0418.js","assets/index.1b1480b6.js","assets/hooks.c3613214.js","assets/jobs.8963c228.js","assets/workspaces.d27d9f39.js","assets/icons.fbbc5318.js","assets/Title.3011141f.js","assets/index.3cff0676.js","assets/uuid.25354c68.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3e45b890.js","assets/SmartConsole.ed33cdbe.css","assets/SaveButton.vue_vue_type_script_setup_true_lang.af310abc.js","assets/ant-design.e75c36c7.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.5761ab4f.js","assets/BaseLayout.282f66f6.css","assets/HookSettings.vue_vue_type_script_setup_true_lang.f8aa130b.js","assets/index.dda022dd.js","assets/index.33fb7a48.js","assets/index.1797b918.js","assets/index.f20ad580.js","assets/Form.2a9acb85.js","assets/index.7fb7f882.js","assets/TabPane.40396dd5.js"]),meta:{title:"Abstra - Hook Editor"}},{path:"workflow",name:"workflowEditor",component:()=>t(()=>import("./WorkflowEditor.ef027446.js"),["assets/WorkflowEditor.ef027446.js","assets/outputWidgets.541a6a3f.js","assets/outputWidgets.8ce475af.css","assets/workspaces.d27d9f39.js","assets/activeRecord.867c40fa.js","assets/pubsub.8482a29f.js","assets/icons.fbbc5318.js","assets/FormTester.vue_vue_type_script_setup_true_lang.5ffd06da.js","assets/SmartConsole.e1c7bfc3.js","assets/asyncComputed.6496ca6b.js","assets/forms.4ff36d50.js","assets/dashes.438c0418.js","assets/index.1b1480b6.js","assets/hooks.c3613214.js","assets/jobs.8963c228.js","assets/Title.3011141f.js","assets/index.3cff0676.js","assets/uuid.25354c68.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.3e45b890.js","assets/SmartConsole.ed33cdbe.css","assets/Form.2a9acb85.js","assets/broker.7dc50939.js","assets/index.669ed6e9.js","assets/executeJs.16417bf7.js","assets/CircularLoading.46b3501d.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.f92ecc26.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.554db205.js","assets/Steps.998aa76d.css","assets/Modal.e29b464d.js","assets/Modal.5aaf8eba.css","assets/executeJs.9c4b02ee.css","assets/WidgetsFrame.2d6f15b2.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.a70d3ffa.js","assets/broker.ac4594bd.css","assets/geometryUtils.2e28a652.js","assets/keyboard.77b17bb3.js","assets/ant-design.e75c36c7.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.af310abc.js","assets/SaveButton.13ece1cb.css","assets/HookSettings.vue_vue_type_script_setup_true_lang.f8aa130b.js","assets/index.dda022dd.js","assets/index.33fb7a48.js","assets/index.1797b918.js","assets/index.f20ad580.js","assets/JobSettings.vue_vue_type_script_setup_true_lang.ca02b8dd.js","assets/dayjs.03d6e1d3.js","assets/index.07910c0e.js","assets/index.68ffc7e6.js","assets/LoginBlock.9946ff89.js","assets/popupNotifcation.b07ed784.js","assets/index.ef35da09.js","assets/LoginBlock.d273f904.css","assets/index.7fb7f882.js","assets/index.5d5870f2.js","assets/TabPane.40396dd5.js","assets/WorkflowEditor.6d840334.css"]),meta:{title:"Abstra - Workflow Editor"}}]}],scrollBehavior(e){if(e.hash)return{el:e.hash}}});a.beforeEach(async(e,o)=>{W(e,o)});(async()=>{await j();const e=w({render:()=>g(x)});P.init(),I(e,a),e.use(a),e.use(D),e.mount("#app"),e.component("VSelect",y),e.component("Markdown",k),e.component("Icon",V),e.component("Message",T),r(e,R),r(e,L),r(e,O)})();
//# sourceMappingURL=editor.2eb1fa66.js.map
