var b=Object.defineProperty;var T=(o,t,e)=>t in o?b(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var h=(o,t,e)=>(T(o,typeof t!="symbol"?t+"":t,e),e);import{C as R,R as v}from"./FormItem.cd67f0ff.js";import{E as y,cT as f,S as d,t as I,g as O,h as A,_ as n,i as P}from"./outputWidgets.f04a7247.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="b18ec646-7a6f-427f-b677-d3acc5c35fb5",o._sentryDebugIdIdentifier="sentry-dbid-b18ec646-7a6f-427f-b677-d3acc5c35fb5")}catch{}})();const U=y(R),J=y(v);class g{static async trackSession(t){const e=Object.fromEntries(document.cookie.split("; ").map(r=>r.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search)),previousSessionId:a,email:t})})}static async trackPageView(t){const e=Object.fromEntries(document.cookie.split("; ").map(r=>r.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/hackerforms/browser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({previousSessionId:a,author_email:t,type:"PageView",payload:{referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search))}})})}}const L=()=>window.location.host.includes(".abstra.io"),D={"cloud-api":"/api/cloud-api"},V={"cloud-api":"https://cloud-api.abstra.cloud"},j=o=>{const t="VITE_"+f.toUpper(f.snakeCase(o)),e={VITE_SENTRY_RELEASE:"730991e222c9f359a162ecb98511506f9f4ed2f8",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(L()?D[o]:V[o])},p={cloudApi:j("cloud-api")};class _ extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new _(e,t.status)}}class E{static async get(t,e){const a=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,u])=>u!=null)),r=Object.keys(a).length>0?`?${new URLSearchParams(a).toString()}`:"",s=await fetch(`${p.cloudApi}/console/${t}${r}`,{headers:{...i.headers}});s.status===403&&(window.location.href="/login");const c=await s.text();return c?JSON.parse(c):null}static async getBlob(t){return await(await fetch(`${p.cloudApi}/console/${t}`,{headers:{...i.headers}})).blob()}static async post(t,e,a){const r=!!(a!=null&&a["Content-Type"])&&a["Content-Type"]!=="application/json",s=await fetch(`${p.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...i.headers,...a},body:r?e:JSON.stringify(e)});if(!s.ok)throw await _.fromResponse(s);const c=await s.text();return c?JSON.parse(c):null}static async patch(t,e){const a=await fetch(`${p.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...i.headers},body:JSON.stringify(e)});if(!a.ok)throw await _.fromResponse(a);const r=await a.text();return r?JSON.parse(r):null}static async delete(t){const e=await fetch(`${p.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...i.headers}});if(!e.ok)throw await _.fromResponse(e)}}const m=class{async authenticate(t){try{return await E.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const a=await E.post("authn/verify",{email:t,token:e});if(!(a&&"jwt"in a))throw new Error("Invalid token");return this.saveJWT(a.jwt),g.trackSession(t),this.getAuthor()}saveJWT(t){d.set(m.key,t)}getJWT(){return d.get(m.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=I(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){d.remove(m.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let l=m;h(l,"key","abstracloud:auth:jwt");const i=new l,w=O({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./WidgetPreview.e225c2d4.js"),["assets/WidgetPreview.e225c2d4.js","assets/ActionButton.19a14795.js","assets/outputWidgets.f04a7247.js","assets/outputWidgets.20866a94.css","assets/ActionButton.f74e60ec.css","assets/WidgetsFrame.226b27ec.js","assets/WidgetsFrame.97ae601d.css","assets/WidgetPreview.2be4ed12.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./Login.43939c6c.js"),["assets/Login.43939c6c.js","assets/outputWidgets.f04a7247.js","assets/outputWidgets.20866a94.css","assets/icons.03d75fc8.js","assets/CircularLoading.20f1c24a.js","assets/CircularLoading.f81b57b4.css","assets/index.1786638b.js","assets/index.cf4c23b9.js","assets/record.9511849b.js","assets/pubsub.067f6366.js","assets/member.01724894.js","assets/WidgetsFrame.226b27ec.js","assets/WidgetsFrame.97ae601d.css","assets/FormItem.cd67f0ff.js","assets/hasIn.8e271825.js","assets/Login.f9c7607e.css"])},{path:"/api-key",name:"api-key",component:()=>n(()=>import("./ReturnApiKey.37c1f559.js"),["assets/ReturnApiKey.37c1f559.js","assets/outputWidgets.f04a7247.js","assets/outputWidgets.20866a94.css","assets/index.1786638b.js","assets/index.cf4c23b9.js","assets/record.9511849b.js","assets/pubsub.067f6366.js","assets/apiKey.f2540260.js","assets/project.2d5639cf.js","assets/organization.33f04e08.js","assets/asyncComputed.626bf869.js","assets/Title.6d8cba05.js","assets/Base.3edf0277.js","assets/Typography.d96689a8.js","assets/FormItem.cd67f0ff.js","assets/hasIn.8e271825.js","assets/Form.9846df60.js","assets/Paragraph.abb55c14.js","assets/Text.f4f2e607.js","assets/index.1633487c.js","assets/Modal.2040e85f.js","assets/ReturnApiKey.909cd622.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>n(()=>import("./Organizations.125dce36.js"),["assets/Organizations.125dce36.js","assets/outputWidgets.f04a7247.js","assets/outputWidgets.20866a94.css","assets/icons.03d75fc8.js","assets/asyncComputed.626bf869.js","assets/index.1786638b.js","assets/index.cf4c23b9.js","assets/record.9511849b.js","assets/pubsub.067f6366.js","assets/organization.33f04e08.js","assets/Navbar.vue_vue_type_script_setup_true_lang.ac5d3249.js","assets/logo.084e5d7c.js","assets/Text.f4f2e607.js","assets/Base.3edf0277.js","assets/Typography.d96689a8.js","assets/index.cafa36ae.js","assets/Navbar.f4a98ea3.css","assets/CrudView.10c6f122.js","assets/Paragraph.abb55c14.js","assets/FormItem.cd67f0ff.js","assets/hasIn.8e271825.js","assets/Form.9846df60.js","assets/Modal.2040e85f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7785f0ca.js","assets/url.0ab4de93.js","assets/index.9fb01524.js","assets/Title.6d8cba05.js","assets/index.d1e63779.js","assets/CrudView.9de44552.css","assets/BaseLayout.1b18a0d4.js","assets/BaseLayout.881bfa61.css","assets/ant-design.e8d42d5d.js","assets/index.f8478a08.js"])},{path:"/organizations/:organizationId",name:"organization",component:()=>n(()=>import("./Organization.2584b004.js"),["assets/Organization.2584b004.js","assets/Sidebar.81a20d29.js","assets/outputWidgets.f04a7247.js","assets/outputWidgets.20866a94.css","assets/icons.03d75fc8.js","assets/index.d1e63779.js","assets/Sidebar.055402cc.css","assets/Navbar.vue_vue_type_script_setup_true_lang.ac5d3249.js","assets/logo.084e5d7c.js","assets/asyncComputed.626bf869.js","assets/Text.f4f2e607.js","assets/Base.3edf0277.js","assets/Typography.d96689a8.js","assets/index.cafa36ae.js","assets/Navbar.f4a98ea3.css","assets/index.1786638b.js","assets/index.cf4c23b9.js","assets/record.9511849b.js","assets/pubsub.067f6366.js","assets/organization.33f04e08.js","assets/BaseLayout.1b18a0d4.js","assets/BaseLayout.881bfa61.css","assets/FormItem.cd67f0ff.js","assets/hasIn.8e271825.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>n(()=>import("./Projects.a8cfb9bb.js"),["assets/Projects.a8cfb9bb.js","assets/outputWidgets.f04a7247.js","assets/outputWidgets.20866a94.css","assets/asyncComputed.626bf869.js","assets/ant-design.e8d42d5d.js","assets/index.f8478a08.js","assets/Modal.2040e85f.js","assets/index.1786638b.js","assets/index.cf4c23b9.js","assets/record.9511849b.js","assets/pubsub.067f6366.js","assets/project.2d5639cf.js","assets/organization.33f04e08.js","assets/CrudView.10c6f122.js","assets/icons.03d75fc8.js","assets/Paragraph.abb55c14.js","assets/Base.3edf0277.js","assets/Typography.d96689a8.js","assets/FormItem.cd67f0ff.js","assets/hasIn.8e271825.js","assets/Form.9846df60.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7785f0ca.js","assets/url.0ab4de93.js","assets/index.9fb01524.js","assets/Title.6d8cba05.js","assets/Text.f4f2e607.js","assets/index.d1e63779.js","assets/CrudView.9de44552.css"])},{path:"settings",name:"organization-settings",component:()=>n(()=>import("./OrganizationSettings.6cd7093f.js"),["assets/OrganizationSettings.6cd7093f.js","assets/outputWidgets.f04a7247.js","assets/outputWidgets.20866a94.css"])},{path:"members",name:"members",component:()=>n(()=>import("./Members.51f7c87c.js"),["assets/Members.51f7c87c.js","assets/outputWidgets.f04a7247.js","assets/outputWidgets.20866a94.css","assets/asyncComputed.626bf869.js","assets/index.1786638b.js","assets/index.cf4c23b9.js","assets/record.9511849b.js","assets/pubsub.067f6366.js","assets/member.01724894.js","assets/CrudView.10c6f122.js","assets/icons.03d75fc8.js","assets/Paragraph.abb55c14.js","assets/Base.3edf0277.js","assets/Typography.d96689a8.js","assets/FormItem.cd67f0ff.js","assets/hasIn.8e271825.js","assets/Form.9846df60.js","assets/Modal.2040e85f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7785f0ca.js","assets/url.0ab4de93.js","assets/index.9fb01524.js","assets/Title.6d8cba05.js","assets/Text.f4f2e607.js","assets/index.d1e63779.js","assets/CrudView.9de44552.css","assets/ant-design.e8d42d5d.js","assets/index.f8478a08.js"])},{path:"billing",name:"billing",component:()=>n(()=>import("./Billing.50ea1122.js"),["assets/Billing.50ea1122.js","assets/outputWidgets.f04a7247.js","assets/outputWidgets.20866a94.css","assets/index.1786638b.js","assets/index.cf4c23b9.js","assets/record.9511849b.js","assets/pubsub.067f6366.js","assets/organization.33f04e08.js","assets/asyncComputed.626bf869.js","assets/Title.6d8cba05.js","assets/Base.3edf0277.js","assets/Typography.d96689a8.js","assets/index.9fb01524.js","assets/index.9bd5124d.js","assets/Text.f4f2e607.js","assets/Card.f2b30e3a.js","assets/TabPane.63b3fdd1.js","assets/hasIn.8e271825.js","assets/FormItem.cd67f0ff.js"])}]},{path:"/projects/:projectId",name:"project",component:()=>n(()=>import("./Project.d8aa9b7d.js"),["assets/Project.d8aa9b7d.js","assets/outputWidgets.f04a7247.js","assets/outputWidgets.20866a94.css","assets/BaseLayout.1b18a0d4.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.626bf869.js","assets/index.1786638b.js","assets/index.cf4c23b9.js","assets/record.9511849b.js","assets/pubsub.067f6366.js","assets/project.2d5639cf.js","assets/organization.33f04e08.js","assets/Navbar.vue_vue_type_script_setup_true_lang.ac5d3249.js","assets/logo.084e5d7c.js","assets/Text.f4f2e607.js","assets/Base.3edf0277.js","assets/Typography.d96689a8.js","assets/index.cafa36ae.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.81a20d29.js","assets/icons.03d75fc8.js","assets/index.d1e63779.js","assets/Sidebar.055402cc.css","assets/FormItem.cd67f0ff.js","assets/hasIn.8e271825.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>n(()=>import("./Live.377ad88f.js"),["assets/Live.377ad88f.js","assets/outputWidgets.f04a7247.js","assets/outputWidgets.20866a94.css","assets/asyncComputed.626bf869.js","assets/build.6f978915.js","assets/index.1786638b.js","assets/index.cf4c23b9.js","assets/record.9511849b.js","assets/pubsub.067f6366.js","assets/project.2d5639cf.js","assets/CrudView.10c6f122.js","assets/icons.03d75fc8.js","assets/Paragraph.abb55c14.js","assets/Base.3edf0277.js","assets/Typography.d96689a8.js","assets/FormItem.cd67f0ff.js","assets/hasIn.8e271825.js","assets/Form.9846df60.js","assets/Modal.2040e85f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7785f0ca.js","assets/url.0ab4de93.js","assets/index.9fb01524.js","assets/Title.6d8cba05.js","assets/Text.f4f2e607.js","assets/index.d1e63779.js","assets/CrudView.9de44552.css","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.bb033840.js","assets/CheckCircleFilled.77832525.js","assets/index.1633487c.js","assets/Link.1a753974.js","assets/Live.ead36dc1.css"])},{path:"builds",name:"builds",component:()=>n(()=>import("./Builds.5cba21a6.js"),["assets/Builds.5cba21a6.js","assets/outputWidgets.f04a7247.js","assets/outputWidgets.20866a94.css","assets/asyncComputed.626bf869.js","assets/build.6f978915.js","assets/index.1786638b.js","assets/index.cf4c23b9.js","assets/record.9511849b.js","assets/pubsub.067f6366.js","assets/project.2d5639cf.js","assets/CrudView.10c6f122.js","assets/icons.03d75fc8.js","assets/Paragraph.abb55c14.js","assets/Base.3edf0277.js","assets/Typography.d96689a8.js","assets/FormItem.cd67f0ff.js","assets/hasIn.8e271825.js","assets/Form.9846df60.js","assets/Modal.2040e85f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7785f0ca.js","assets/url.0ab4de93.js","assets/index.9fb01524.js","assets/Title.6d8cba05.js","assets/Text.f4f2e607.js","assets/index.d1e63779.js","assets/CrudView.9de44552.css","assets/index.b9cfc4d7.js","assets/datetime.f64ebd96.js","assets/Builds.e8faf4b0.css"])},{path:"connectors",name:"connectors",component:()=>n(()=>import("./Connectors.8ed12993.js"),["assets/Connectors.8ed12993.js","assets/outputWidgets.f04a7247.js","assets/outputWidgets.20866a94.css","assets/index.1786638b.js","assets/index.cf4c23b9.js","assets/record.9511849b.js","assets/pubsub.067f6366.js","assets/connector.14e1d459.js","assets/asyncComputed.626bf869.js","assets/icons.03d75fc8.js","assets/CrudView.10c6f122.js","assets/Paragraph.abb55c14.js","assets/Base.3edf0277.js","assets/Typography.d96689a8.js","assets/FormItem.cd67f0ff.js","assets/hasIn.8e271825.js","assets/Form.9846df60.js","assets/Modal.2040e85f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7785f0ca.js","assets/url.0ab4de93.js","assets/index.9fb01524.js","assets/Title.6d8cba05.js","assets/Text.f4f2e607.js","assets/index.d1e63779.js","assets/CrudView.9de44552.css"])},{path:"tables",name:"tables",component:()=>n(()=>import("./Tables.b97bcbaa.js"),["assets/Tables.b97bcbaa.js","assets/outputWidgets.f04a7247.js","assets/outputWidgets.20866a94.css","assets/icons.03d75fc8.js","assets/asyncComputed.626bf869.js","assets/tables.6e6f3ab0.js","assets/record.9511849b.js","assets/pubsub.067f6366.js","assets/index.1786638b.js","assets/index.cf4c23b9.js","assets/string.2f79c883.js","assets/CrudView.10c6f122.js","assets/Paragraph.abb55c14.js","assets/Base.3edf0277.js","assets/Typography.d96689a8.js","assets/FormItem.cd67f0ff.js","assets/hasIn.8e271825.js","assets/Form.9846df60.js","assets/Modal.2040e85f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7785f0ca.js","assets/url.0ab4de93.js","assets/index.9fb01524.js","assets/Title.6d8cba05.js","assets/Text.f4f2e607.js","assets/index.d1e63779.js","assets/CrudView.9de44552.css"])},{path:"sql",name:"sql",component:()=>n(()=>import("./Sql.d936c050.js"),["assets/Sql.d936c050.js","assets/outputWidgets.f04a7247.js","assets/outputWidgets.20866a94.css","assets/index.1786638b.js","assets/index.cf4c23b9.js","assets/record.9511849b.js","assets/pubsub.067f6366.js","assets/project.2d5639cf.js","assets/toggleHighContrast.568aaf78.js","assets/toggleHighContrast.30d77c87.css","assets/index.9fb01524.js","assets/index.1633487c.js","assets/FormItem.cd67f0ff.js","assets/hasIn.8e271825.js","assets/Sql.3405ff47.css"])},{path:"api-keys",name:"api-keys",component:()=>n(()=>import("./ApiKeys.ed4b9ac1.js"),["assets/ApiKeys.ed4b9ac1.js","assets/outputWidgets.f04a7247.js","assets/outputWidgets.20866a94.css","assets/icons.03d75fc8.js","assets/asyncComputed.626bf869.js","assets/index.1786638b.js","assets/index.cf4c23b9.js","assets/record.9511849b.js","assets/pubsub.067f6366.js","assets/member.01724894.js","assets/apiKey.f2540260.js","assets/project.2d5639cf.js","assets/CrudView.10c6f122.js","assets/Paragraph.abb55c14.js","assets/Base.3edf0277.js","assets/Typography.d96689a8.js","assets/FormItem.cd67f0ff.js","assets/hasIn.8e271825.js","assets/Form.9846df60.js","assets/Modal.2040e85f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7785f0ca.js","assets/url.0ab4de93.js","assets/index.9fb01524.js","assets/Title.6d8cba05.js","assets/Text.f4f2e607.js","assets/index.d1e63779.js","assets/CrudView.9de44552.css"])},{path:"logs",name:"logs",component:()=>n(()=>import("./Logs.159b1458.js"),["assets/Logs.159b1458.js","assets/outputWidgets.f04a7247.js","assets/outputWidgets.20866a94.css","assets/build.6f978915.js","assets/index.1786638b.js","assets/index.cf4c23b9.js","assets/record.9511849b.js","assets/pubsub.067f6366.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.bb033840.js","assets/CheckCircleFilled.77832525.js","assets/datetime.f64ebd96.js","assets/dayjs.1dafb350.js","assets/index.db77aa0a.js","assets/index.d1e63779.js","assets/Title.6d8cba05.js","assets/Base.3edf0277.js","assets/Typography.d96689a8.js","assets/index.1633487c.js","assets/FormItem.cd67f0ff.js","assets/hasIn.8e271825.js","assets/Form.9846df60.js","assets/CollapsePanel.5799471b.js"])},{path:"legacy-logs",name:"legacy-logs",component:()=>n(()=>import("./LegacyLogs.092b2a12.js"),["assets/LegacyLogs.092b2a12.js","assets/outputWidgets.f04a7247.js","assets/outputWidgets.20866a94.css","assets/ant-design.e8d42d5d.js","assets/index.f8478a08.js","assets/Modal.2040e85f.js","assets/StarFilled.fad29e50.js","assets/Timeline.75c84ea0.js","assets/CheckCircleFilled.77832525.js","assets/build.6f978915.js","assets/index.1786638b.js","assets/index.cf4c23b9.js","assets/record.9511849b.js","assets/pubsub.067f6366.js","assets/asyncComputed.626bf869.js","assets/Title.6d8cba05.js","assets/Base.3edf0277.js","assets/Typography.d96689a8.js","assets/index.1633487c.js","assets/FormItem.cd67f0ff.js","assets/hasIn.8e271825.js","assets/dayjs.1dafb350.js","assets/index.db77aa0a.js","assets/index.d1e63779.js","assets/Form.9846df60.js","assets/LegacyLogs.752e315d.css"])},{path:"settings",name:"project-settings",component:()=>n(()=>import("./ProjectSettings.93f0e2bd.js"),["assets/ProjectSettings.93f0e2bd.js","assets/asyncComputed.626bf869.js","assets/outputWidgets.f04a7247.js","assets/outputWidgets.20866a94.css","assets/index.1786638b.js","assets/index.cf4c23b9.js","assets/record.9511849b.js","assets/pubsub.067f6366.js","assets/project.2d5639cf.js","assets/Title.6d8cba05.js","assets/Base.3edf0277.js","assets/Typography.d96689a8.js","assets/Paragraph.abb55c14.js","assets/Text.f4f2e607.js","assets/FormItem.cd67f0ff.js","assets/hasIn.8e271825.js","assets/Form.9846df60.js"])},{path:"env-vars",name:"env-vars",component:()=>n(()=>import("./EnvVars.314d8ef1.js"),["assets/EnvVars.314d8ef1.js","assets/outputWidgets.f04a7247.js","assets/outputWidgets.20866a94.css","assets/index.1786638b.js","assets/index.cf4c23b9.js","assets/record.9511849b.js","assets/pubsub.067f6366.js","assets/icons.03d75fc8.js","assets/asyncComputed.626bf869.js","assets/CrudView.10c6f122.js","assets/Paragraph.abb55c14.js","assets/Base.3edf0277.js","assets/Typography.d96689a8.js","assets/FormItem.cd67f0ff.js","assets/hasIn.8e271825.js","assets/Form.9846df60.js","assets/Modal.2040e85f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7785f0ca.js","assets/url.0ab4de93.js","assets/index.9fb01524.js","assets/Title.6d8cba05.js","assets/Text.f4f2e607.js","assets/index.d1e63779.js","assets/CrudView.9de44552.css"])},{path:"files",name:"files",component:()=>n(()=>import("./Files.46161bfa.js"),["assets/Files.46161bfa.js","assets/outputWidgets.f04a7247.js","assets/outputWidgets.20866a94.css","assets/index.1786638b.js","assets/index.cf4c23b9.js","assets/record.9511849b.js","assets/pubsub.067f6366.js","assets/asyncComputed.626bf869.js","assets/ant-design.e8d42d5d.js","assets/index.f8478a08.js","assets/Modal.2040e85f.js","assets/popupNotifcation.9959c461.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7785f0ca.js","assets/DownloadOutlined.c29e0df6.js","assets/Title.6d8cba05.js","assets/Base.3edf0277.js","assets/Typography.d96689a8.js","assets/Paragraph.abb55c14.js","assets/Card.f2b30e3a.js","assets/TabPane.63b3fdd1.js","assets/hasIn.8e271825.js","assets/FormItem.cd67f0ff.js","assets/Files.1001d74a.css"])},{path:"users",name:"users",component:()=>n(()=>import("./Users.507d8488.js"),["assets/Users.507d8488.js","assets/outputWidgets.f04a7247.js","assets/outputWidgets.20866a94.css","assets/icons.03d75fc8.js","assets/asyncComputed.626bf869.js","assets/contracts.generated.b937d7b7.js","assets/index.cf4c23b9.js","assets/FormItem.cd67f0ff.js","assets/hasIn.8e271825.js","assets/Form.9846df60.js","assets/index.336929fb.js","assets/isNumeric.75337b1e.js","assets/index.1786638b.js","assets/record.9511849b.js","assets/pubsub.067f6366.js","assets/CrudView.10c6f122.js","assets/Paragraph.abb55c14.js","assets/Base.3edf0277.js","assets/Typography.d96689a8.js","assets/Modal.2040e85f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.7785f0ca.js","assets/url.0ab4de93.js","assets/index.9fb01524.js","assets/Title.6d8cba05.js","assets/Text.f4f2e607.js","assets/index.d1e63779.js","assets/CrudView.9de44552.css","assets/popupNotifcation.9959c461.js"])}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>n(()=>import("./TableEditor.b7ea7916.js"),["assets/TableEditor.b7ea7916.js","assets/outputWidgets.f04a7247.js","assets/outputWidgets.20866a94.css","assets/tables.6e6f3ab0.js","assets/record.9511849b.js","assets/pubsub.067f6366.js","assets/index.1786638b.js","assets/index.cf4c23b9.js","assets/string.2f79c883.js","assets/BaseLayout.1b18a0d4.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.626bf869.js","assets/popupNotifcation.9959c461.js","assets/index.9bd5124d.js","assets/Form.9846df60.js","assets/FormItem.cd67f0ff.js","assets/hasIn.8e271825.js","assets/index.336929fb.js","assets/isNumeric.75337b1e.js","assets/project.2d5639cf.js","assets/organization.33f04e08.js","assets/icons.03d75fc8.js","assets/index.6b9c7feb.js","assets/CircularLoading.20f1c24a.js","assets/CircularLoading.f81b57b4.css","assets/TabPane.63b3fdd1.js","assets/index.cafa36ae.js","assets/Base.3edf0277.js","assets/Typography.d96689a8.js","assets/TableEditor.1138d18e.css"])},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>n(()=>import("./ConnectorEditor.c21110c7.js"),["assets/ConnectorEditor.c21110c7.js","assets/outputWidgets.f04a7247.js","assets/outputWidgets.20866a94.css","assets/BaseLayout.1b18a0d4.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.626bf869.js","assets/index.1786638b.js","assets/index.cf4c23b9.js","assets/record.9511849b.js","assets/pubsub.067f6366.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.ce2bcffb.js","assets/ant-design.e8d42d5d.js","assets/index.f8478a08.js","assets/Modal.2040e85f.js","assets/Typography.d96689a8.js","assets/Link.1a753974.js","assets/Base.3edf0277.js","assets/SaveButton.13ece1cb.css","assets/project.2d5639cf.js","assets/connector.14e1d459.js","assets/organization.33f04e08.js","assets/TabPane.63b3fdd1.js","assets/hasIn.8e271825.js","assets/index.cafa36ae.js","assets/Form.9846df60.js","assets/FormItem.cd67f0ff.js","assets/index.9bd5124d.js","assets/ConnectorEditor.77a62f6e.css"])}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});w.beforeEach(async(o,t)=>{P(o,t);const e=i.getAuthor();if(g.trackPageView(e==null?void 0:e.claims.email),!o.meta.allowUnauthenticated&&!e){await w.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}});export{U as A,E as C,J as a,i as b,w as r};
//# sourceMappingURL=router.36dc6d26.js.map
