var w=Object.defineProperty;var y=(o,t,e)=>t in o?w(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var h=(o,t,e)=>(y(o,typeof t!="symbol"?t+"":t,e),e);import{C as T,R}from"./Form.99377304.js";import{E as f,cS as E,S as _,t as v,g as O,h as P,_ as a,i as I}from"./outputWidgets.18a31a4b.js";import{p as C}from"./popupNotifcation.07382277.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="192238e6-6372-41fa-8573-68e379d563ba",o._sentryDebugIdIdentifier="sentry-dbid-192238e6-6372-41fa-8573-68e379d563ba")}catch{}})();const $=f(T),z=f(R);class A{static async trackSession(t){const e=Object.fromEntries(document.cookie.split("; ").map(s=>s.split(/=(.*)/s).map(decodeURIComponent))),n=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search)),previousSessionId:n,email:t})})}static async trackPageView(t){const e=Object.fromEntries(document.cookie.split("; ").map(s=>s.split(/=(.*)/s).map(decodeURIComponent))),n=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/hackerforms/browser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({previousSessionId:n,author_email:t,type:"PageView",payload:{referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search))}})})}}const L=()=>window.location.host.includes(".abstra.io"),D={"cloud-api":"/api/cloud-api"},V={"cloud-api":"https://cloud-api.abstra.cloud"},j=o=>{const t="VITE_"+E.toUpper(E.snakeCase(o)),e={VITE_SENTRY_RELEASE:"9161c31596a2b38554e966afd93bb3c6e77e4810",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(L()?D[o]:V[o])},p={cloudApi:j("cloud-api")};class l extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new l(e,t.status)}}class b{static async get(t,e){const n=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,u])=>u!=null)),s=Object.keys(n).length>0?`?${new URLSearchParams(n).toString()}`:"",r=await fetch(`${p.cloudApi}/console/${t}${s}`,{headers:{...i.headers}});if(r.status===403){C("You are not authorized to access this resource","Click here to go back to the home page.",()=>{window.location.href="/"});return}const c=await r.text();return c?JSON.parse(c):null}static async getBlob(t){return await(await fetch(`${p.cloudApi}/console/${t}`,{headers:{...i.headers}})).blob()}static async post(t,e,n){const s=!!(n!=null&&n["Content-Type"])&&n["Content-Type"]!=="application/json",r=await fetch(`${p.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...i.headers,...n},body:s?e:JSON.stringify(e)});if(!r.ok)throw await l.fromResponse(r);const c=await r.text();return c?JSON.parse(c):null}static async patch(t,e){const n=await fetch(`${p.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...i.headers},body:JSON.stringify(e)});if(!n.ok)throw await l.fromResponse(n);const s=await n.text();return s?JSON.parse(s):null}static async delete(t){const e=await fetch(`${p.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...i.headers}});if(!e.ok)throw await l.fromResponse(e)}}const m=class{async authenticate(t){try{return await b.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const n=await b.post("authn/verify",{email:t,token:e});if(!(n&&"jwt"in n))throw new Error("Invalid token");return this.saveJWT(n.jwt),A.trackSession(t),this.getAuthor()}saveJWT(t){_.set(m.key,t)}getJWT(){return _.get(m.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=v(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){_.remove(m.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let d=m;h(d,"key","abstracloud:auth:jwt");const i=new d,g=O({history:P("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>a(()=>import("./WidgetPreview.d2f7eab5.js"),["assets/WidgetPreview.d2f7eab5.js","assets/outputWidgets.18a31a4b.js","assets/outputWidgets.ecb1808d.css","assets/Steps.385c92b2.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.91a38947.js","assets/WidgetsFrame.13b291ee.css","assets/WidgetPreview.1f0f871d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>a(()=>import("./Login.fc2768ce.js"),["assets/Login.fc2768ce.js","assets/outputWidgets.18a31a4b.js","assets/outputWidgets.ecb1808d.css","assets/icons.d20708b7.js","assets/CircularLoading.9e01e318.js","assets/CircularLoading.f81b57b4.css","assets/WidgetsFrame.91a38947.js","assets/WidgetsFrame.13b291ee.css","assets/Form.99377304.js","assets/hasIn.1db1a4ba.js","assets/popupNotifcation.07382277.js","assets/Login.4672e6e4.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>a(()=>import("./ReturnApiKey.d3bf5bd2.js"),["assets/ReturnApiKey.d3bf5bd2.js","assets/outputWidgets.18a31a4b.js","assets/outputWidgets.ecb1808d.css","assets/index.e64dc616.js","assets/index.cf4c23b9.js","assets/record.43702d11.js","assets/pubsub.d1622d77.js","assets/apiKey.58969433.js","assets/project.55d2992e.js","assets/organization.e5ba3126.js","assets/asyncComputed.619182b9.js","assets/Title.c00241dd.js","assets/Base.f82c0529.js","assets/Typography.827084de.js","assets/Form.99377304.js","assets/hasIn.1db1a4ba.js","assets/Paragraph.42f17176.js","assets/Text.2f7556a1.js","assets/index.6274e6b8.js","assets/Modal.44ae6a9a.js","assets/popupNotifcation.07382277.js","assets/ReturnApiKey.909cd622.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>a(()=>import("./Organizations.46694fdf.js"),["assets/Organizations.46694fdf.js","assets/outputWidgets.18a31a4b.js","assets/outputWidgets.ecb1808d.css","assets/icons.d20708b7.js","assets/asyncComputed.619182b9.js","assets/index.e64dc616.js","assets/index.cf4c23b9.js","assets/record.43702d11.js","assets/pubsub.d1622d77.js","assets/organization.e5ba3126.js","assets/Navbar.vue_vue_type_script_setup_true_lang.4839a660.js","assets/logo.084e5d7c.js","assets/Text.2f7556a1.js","assets/Base.f82c0529.js","assets/Typography.827084de.js","assets/index.3e7abac4.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.f4a98ea3.css","assets/CrudView.c2557c93.js","assets/Paragraph.42f17176.js","assets/Form.99377304.js","assets/hasIn.1db1a4ba.js","assets/Modal.44ae6a9a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5b956728.js","assets/url.c5408f2f.js","assets/index.e66e1d37.js","assets/Title.c00241dd.js","assets/index.7bcb0088.js","assets/CrudView.66515e1d.css","assets/BaseLayout.981ccf1b.js","assets/BaseLayout.2a9791da.css","assets/ant-design.b4c55a9c.js","assets/index.3a4d17fa.js","assets/popupNotifcation.07382277.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>a(()=>import("./Organization.b6aca87f.js"),["assets/Organization.b6aca87f.js","assets/Sidebar.9cbb7823.js","assets/outputWidgets.18a31a4b.js","assets/outputWidgets.ecb1808d.css","assets/icons.d20708b7.js","assets/index.7bcb0088.js","assets/Sidebar.055402cc.css","assets/Navbar.vue_vue_type_script_setup_true_lang.4839a660.js","assets/logo.084e5d7c.js","assets/asyncComputed.619182b9.js","assets/Text.2f7556a1.js","assets/Base.f82c0529.js","assets/Typography.827084de.js","assets/index.3e7abac4.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.f4a98ea3.css","assets/index.e64dc616.js","assets/index.cf4c23b9.js","assets/record.43702d11.js","assets/pubsub.d1622d77.js","assets/organization.e5ba3126.js","assets/BaseLayout.981ccf1b.js","assets/BaseLayout.2a9791da.css","assets/Form.99377304.js","assets/hasIn.1db1a4ba.js","assets/popupNotifcation.07382277.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>a(()=>import("./Projects.b62bc2d3.js"),["assets/Projects.b62bc2d3.js","assets/outputWidgets.18a31a4b.js","assets/outputWidgets.ecb1808d.css","assets/asyncComputed.619182b9.js","assets/ant-design.b4c55a9c.js","assets/index.3a4d17fa.js","assets/Modal.44ae6a9a.js","assets/index.e64dc616.js","assets/index.cf4c23b9.js","assets/record.43702d11.js","assets/pubsub.d1622d77.js","assets/project.55d2992e.js","assets/organization.e5ba3126.js","assets/CrudView.c2557c93.js","assets/icons.d20708b7.js","assets/Paragraph.42f17176.js","assets/Base.f82c0529.js","assets/Typography.827084de.js","assets/Form.99377304.js","assets/hasIn.1db1a4ba.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5b956728.js","assets/url.c5408f2f.js","assets/index.e66e1d37.js","assets/Title.c00241dd.js","assets/Text.2f7556a1.js","assets/index.7bcb0088.js","assets/CrudView.66515e1d.css","assets/popupNotifcation.07382277.js"]),meta:{title:"Projects - Abstra Console"}},{path:"settings",name:"organization-settings",component:()=>a(()=>import("./OrganizationSettings.b4ed9665.js"),["assets/OrganizationSettings.b4ed9665.js","assets/outputWidgets.18a31a4b.js","assets/outputWidgets.ecb1808d.css"]),meta:{title:"Organization Settings - Abstra Console"}},{path:"editors",name:"editors",component:()=>a(()=>import("./Editors.3cd99ccf.js"),["assets/Editors.3cd99ccf.js","assets/outputWidgets.18a31a4b.js","assets/outputWidgets.ecb1808d.css","assets/asyncComputed.619182b9.js","assets/index.e64dc616.js","assets/index.cf4c23b9.js","assets/record.43702d11.js","assets/pubsub.d1622d77.js","assets/member.3acd0c96.js","assets/CrudView.c2557c93.js","assets/icons.d20708b7.js","assets/Paragraph.42f17176.js","assets/Base.f82c0529.js","assets/Typography.827084de.js","assets/Form.99377304.js","assets/hasIn.1db1a4ba.js","assets/Modal.44ae6a9a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5b956728.js","assets/url.c5408f2f.js","assets/index.e66e1d37.js","assets/Title.c00241dd.js","assets/Text.2f7556a1.js","assets/index.7bcb0088.js","assets/CrudView.66515e1d.css","assets/ant-design.b4c55a9c.js","assets/index.3a4d17fa.js","assets/popupNotifcation.07382277.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>a(()=>import("./Billing.0c3beada.js"),["assets/Billing.0c3beada.js","assets/outputWidgets.18a31a4b.js","assets/outputWidgets.ecb1808d.css","assets/index.e64dc616.js","assets/index.cf4c23b9.js","assets/record.43702d11.js","assets/pubsub.d1622d77.js","assets/organization.e5ba3126.js","assets/asyncComputed.619182b9.js","assets/Title.c00241dd.js","assets/Base.f82c0529.js","assets/Typography.827084de.js","assets/index.e66e1d37.js","assets/index.2a47a75e.js","assets/Text.2f7556a1.js","assets/Card.590c44d7.js","assets/TabPane.f2b25f7d.js","assets/hasIn.1db1a4ba.js","assets/Form.99377304.js","assets/popupNotifcation.07382277.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>a(()=>import("./Project.d4dc796d.js"),["assets/Project.d4dc796d.js","assets/outputWidgets.18a31a4b.js","assets/outputWidgets.ecb1808d.css","assets/BaseLayout.981ccf1b.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.619182b9.js","assets/index.e64dc616.js","assets/index.cf4c23b9.js","assets/record.43702d11.js","assets/pubsub.d1622d77.js","assets/project.55d2992e.js","assets/organization.e5ba3126.js","assets/Navbar.vue_vue_type_script_setup_true_lang.4839a660.js","assets/logo.084e5d7c.js","assets/Text.2f7556a1.js","assets/Base.f82c0529.js","assets/Typography.827084de.js","assets/index.3e7abac4.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.9cbb7823.js","assets/icons.d20708b7.js","assets/index.7bcb0088.js","assets/Sidebar.055402cc.css","assets/Form.99377304.js","assets/hasIn.1db1a4ba.js","assets/popupNotifcation.07382277.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>a(()=>import("./Live.f9ca4f80.js"),["assets/Live.f9ca4f80.js","assets/outputWidgets.18a31a4b.js","assets/outputWidgets.ecb1808d.css","assets/asyncComputed.619182b9.js","assets/build.25c29baf.js","assets/index.e64dc616.js","assets/index.cf4c23b9.js","assets/record.43702d11.js","assets/pubsub.d1622d77.js","assets/project.55d2992e.js","assets/CrudView.c2557c93.js","assets/icons.d20708b7.js","assets/Paragraph.42f17176.js","assets/Base.f82c0529.js","assets/Typography.827084de.js","assets/Form.99377304.js","assets/hasIn.1db1a4ba.js","assets/Modal.44ae6a9a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5b956728.js","assets/url.c5408f2f.js","assets/index.e66e1d37.js","assets/Title.c00241dd.js","assets/Text.2f7556a1.js","assets/index.7bcb0088.js","assets/CrudView.66515e1d.css","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.281da3d4.js","assets/CheckCircleFilled.f4776071.js","assets/LoadingOutlined.05c4614d.js","assets/index.6274e6b8.js","assets/Link.4f092391.js","assets/popupNotifcation.07382277.js","assets/Live.ead36dc1.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>a(()=>import("./Builds.c6e2540f.js"),["assets/Builds.c6e2540f.js","assets/outputWidgets.18a31a4b.js","assets/outputWidgets.ecb1808d.css","assets/asyncComputed.619182b9.js","assets/build.25c29baf.js","assets/index.e64dc616.js","assets/index.cf4c23b9.js","assets/record.43702d11.js","assets/pubsub.d1622d77.js","assets/project.55d2992e.js","assets/CrudView.c2557c93.js","assets/icons.d20708b7.js","assets/Paragraph.42f17176.js","assets/Base.f82c0529.js","assets/Typography.827084de.js","assets/Form.99377304.js","assets/hasIn.1db1a4ba.js","assets/Modal.44ae6a9a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5b956728.js","assets/url.c5408f2f.js","assets/index.e66e1d37.js","assets/Title.c00241dd.js","assets/Text.2f7556a1.js","assets/index.7bcb0088.js","assets/CrudView.66515e1d.css","assets/index.c98d8d0c.js","assets/datetime.5c96b98a.js","assets/popupNotifcation.07382277.js","assets/Builds.e8faf4b0.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>a(()=>import("./Connectors.4de28c5d.js"),["assets/Connectors.4de28c5d.js","assets/outputWidgets.18a31a4b.js","assets/outputWidgets.ecb1808d.css","assets/index.e64dc616.js","assets/index.cf4c23b9.js","assets/record.43702d11.js","assets/pubsub.d1622d77.js","assets/connector.5cafe2b9.js","assets/asyncComputed.619182b9.js","assets/icons.d20708b7.js","assets/CrudView.c2557c93.js","assets/Paragraph.42f17176.js","assets/Base.f82c0529.js","assets/Typography.827084de.js","assets/Form.99377304.js","assets/hasIn.1db1a4ba.js","assets/Modal.44ae6a9a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5b956728.js","assets/url.c5408f2f.js","assets/index.e66e1d37.js","assets/Title.c00241dd.js","assets/Text.2f7556a1.js","assets/index.7bcb0088.js","assets/CrudView.66515e1d.css","assets/popupNotifcation.07382277.js"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>a(()=>import("./Tables.7eef586c.js"),["assets/Tables.7eef586c.js","assets/outputWidgets.18a31a4b.js","assets/outputWidgets.ecb1808d.css","assets/icons.d20708b7.js","assets/asyncComputed.619182b9.js","assets/tables.20853d48.js","assets/record.43702d11.js","assets/pubsub.d1622d77.js","assets/index.e64dc616.js","assets/index.cf4c23b9.js","assets/string.61be7c73.js","assets/CrudView.c2557c93.js","assets/Paragraph.42f17176.js","assets/Base.f82c0529.js","assets/Typography.827084de.js","assets/Form.99377304.js","assets/hasIn.1db1a4ba.js","assets/Modal.44ae6a9a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5b956728.js","assets/url.c5408f2f.js","assets/index.e66e1d37.js","assets/Title.c00241dd.js","assets/Text.2f7556a1.js","assets/index.7bcb0088.js","assets/CrudView.66515e1d.css","assets/popupNotifcation.07382277.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>a(()=>import("./Sql.055a7fdd.js"),["assets/Sql.055a7fdd.js","assets/outputWidgets.18a31a4b.js","assets/outputWidgets.ecb1808d.css","assets/index.e64dc616.js","assets/index.cf4c23b9.js","assets/record.43702d11.js","assets/pubsub.d1622d77.js","assets/project.55d2992e.js","assets/toggleHighContrast.a7a37c46.js","assets/toggleHighContrast.30d77c87.css","assets/index.e66e1d37.js","assets/index.6274e6b8.js","assets/Form.99377304.js","assets/hasIn.1db1a4ba.js","assets/popupNotifcation.07382277.js","assets/Sql.3405ff47.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>a(()=>import("./ApiKeys.e87414e9.js"),["assets/ApiKeys.e87414e9.js","assets/outputWidgets.18a31a4b.js","assets/outputWidgets.ecb1808d.css","assets/icons.d20708b7.js","assets/asyncComputed.619182b9.js","assets/index.e64dc616.js","assets/index.cf4c23b9.js","assets/record.43702d11.js","assets/pubsub.d1622d77.js","assets/member.3acd0c96.js","assets/apiKey.58969433.js","assets/project.55d2992e.js","assets/CrudView.c2557c93.js","assets/Paragraph.42f17176.js","assets/Base.f82c0529.js","assets/Typography.827084de.js","assets/Form.99377304.js","assets/hasIn.1db1a4ba.js","assets/Modal.44ae6a9a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5b956728.js","assets/url.c5408f2f.js","assets/index.e66e1d37.js","assets/Title.c00241dd.js","assets/Text.2f7556a1.js","assets/index.7bcb0088.js","assets/CrudView.66515e1d.css","assets/popupNotifcation.07382277.js"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.d04f747b.js"),["assets/Logs.d04f747b.js","assets/outputWidgets.18a31a4b.js","assets/outputWidgets.ecb1808d.css","assets/build.25c29baf.js","assets/index.e64dc616.js","assets/index.cf4c23b9.js","assets/record.43702d11.js","assets/pubsub.d1622d77.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.281da3d4.js","assets/CheckCircleFilled.f4776071.js","assets/LoadingOutlined.05c4614d.js","assets/datetime.5c96b98a.js","assets/dayjs.f8ae9dfb.js","assets/index.c3023b5b.js","assets/index.7bcb0088.js","assets/Title.c00241dd.js","assets/Base.f82c0529.js","assets/Typography.827084de.js","assets/index.6274e6b8.js","assets/Form.99377304.js","assets/hasIn.1db1a4ba.js","assets/CollapsePanel.2197e349.js","assets/popupNotifcation.07382277.js"]),meta:{title:"Logs - Abstra Console"}},{path:"legacy-logs",name:"legacy-logs",component:()=>a(()=>import("./LegacyLogs.dd401495.js"),["assets/LegacyLogs.dd401495.js","assets/outputWidgets.18a31a4b.js","assets/outputWidgets.ecb1808d.css","assets/ant-design.b4c55a9c.js","assets/index.3a4d17fa.js","assets/Modal.44ae6a9a.js","assets/StarFilled.fad29e50.js","assets/Timeline.81633edc.js","assets/CheckCircleFilled.f4776071.js","assets/build.25c29baf.js","assets/index.e64dc616.js","assets/index.cf4c23b9.js","assets/record.43702d11.js","assets/pubsub.d1622d77.js","assets/asyncComputed.619182b9.js","assets/Title.c00241dd.js","assets/Base.f82c0529.js","assets/Typography.827084de.js","assets/index.6274e6b8.js","assets/Form.99377304.js","assets/hasIn.1db1a4ba.js","assets/dayjs.f8ae9dfb.js","assets/index.c3023b5b.js","assets/index.7bcb0088.js","assets/popupNotifcation.07382277.js","assets/LegacyLogs.752e315d.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>a(()=>import("./ProjectSettings.d21bae94.js"),["assets/ProjectSettings.d21bae94.js","assets/asyncComputed.619182b9.js","assets/outputWidgets.18a31a4b.js","assets/outputWidgets.ecb1808d.css","assets/index.e64dc616.js","assets/index.cf4c23b9.js","assets/record.43702d11.js","assets/pubsub.d1622d77.js","assets/project.55d2992e.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.5cf87eba.js","assets/Title.c00241dd.js","assets/Base.f82c0529.js","assets/Typography.827084de.js","assets/Paragraph.42f17176.js","assets/Text.2f7556a1.js","assets/Form.99377304.js","assets/hasIn.1db1a4ba.js","assets/popupNotifcation.07382277.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVars.d26d0697.js"),["assets/EnvVars.d26d0697.js","assets/outputWidgets.18a31a4b.js","assets/outputWidgets.ecb1808d.css","assets/index.e64dc616.js","assets/index.cf4c23b9.js","assets/record.43702d11.js","assets/pubsub.d1622d77.js","assets/icons.d20708b7.js","assets/asyncComputed.619182b9.js","assets/CrudView.c2557c93.js","assets/Paragraph.42f17176.js","assets/Base.f82c0529.js","assets/Typography.827084de.js","assets/Form.99377304.js","assets/hasIn.1db1a4ba.js","assets/Modal.44ae6a9a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5b956728.js","assets/url.c5408f2f.js","assets/index.e66e1d37.js","assets/Title.c00241dd.js","assets/Text.2f7556a1.js","assets/index.7bcb0088.js","assets/CrudView.66515e1d.css","assets/popupNotifcation.07382277.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>a(()=>import("./Files.c6fe7090.js"),["assets/Files.c6fe7090.js","assets/outputWidgets.18a31a4b.js","assets/outputWidgets.ecb1808d.css","assets/popupNotifcation.07382277.js","assets/index.e64dc616.js","assets/index.cf4c23b9.js","assets/record.43702d11.js","assets/pubsub.d1622d77.js","assets/asyncComputed.619182b9.js","assets/ant-design.b4c55a9c.js","assets/index.3a4d17fa.js","assets/Modal.44ae6a9a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5b956728.js","assets/DownloadOutlined.f0b0e5f7.js","assets/DeleteOutlined.f2fe9be1.js","assets/DeleteOutlined.f8ba9770.js","assets/Title.c00241dd.js","assets/Base.f82c0529.js","assets/Typography.827084de.js","assets/Paragraph.42f17176.js","assets/Card.590c44d7.js","assets/TabPane.f2b25f7d.js","assets/hasIn.1db1a4ba.js","assets/Form.99377304.js","assets/Files.1001d74a.css"]),meta:{title:"Files - Abstra Console"}},{path:"users",name:"users",component:()=>a(()=>import("./Users.6b7f92d8.js"),["assets/Users.6b7f92d8.js","assets/outputWidgets.18a31a4b.js","assets/outputWidgets.ecb1808d.css","assets/icons.d20708b7.js","assets/asyncComputed.619182b9.js","assets/contracts.generated.90d804f5.js","assets/index.cf4c23b9.js","assets/Form.99377304.js","assets/hasIn.1db1a4ba.js","assets/index.ee9c35c5.js","assets/isNumeric.75337b1e.js","assets/popupNotifcation.07382277.js","assets/index.e64dc616.js","assets/record.43702d11.js","assets/pubsub.d1622d77.js","assets/CrudView.c2557c93.js","assets/Paragraph.42f17176.js","assets/Base.f82c0529.js","assets/Typography.827084de.js","assets/Modal.44ae6a9a.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.5b956728.js","assets/url.c5408f2f.js","assets/index.e66e1d37.js","assets/Title.c00241dd.js","assets/Text.2f7556a1.js","assets/index.7bcb0088.js","assets/CrudView.66515e1d.css"]),meta:{title:"Users - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>a(()=>import("./TableEditor.f0bc9e38.js"),["assets/TableEditor.f0bc9e38.js","assets/outputWidgets.18a31a4b.js","assets/outputWidgets.ecb1808d.css","assets/tables.20853d48.js","assets/record.43702d11.js","assets/pubsub.d1622d77.js","assets/index.e64dc616.js","assets/index.cf4c23b9.js","assets/string.61be7c73.js","assets/BaseLayout.981ccf1b.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.619182b9.js","assets/popupNotifcation.07382277.js","assets/icons.d20708b7.js","assets/project.55d2992e.js","assets/index.aecb92a7.js","assets/index.9287d3b8.js","assets/Form.99377304.js","assets/hasIn.1db1a4ba.js","assets/index.d5132f50.js","assets/index.ee9c35c5.js","assets/isNumeric.75337b1e.js","assets/ant-design.b4c55a9c.js","assets/index.3a4d17fa.js","assets/Modal.44ae6a9a.js","assets/Base.f82c0529.js","assets/Typography.827084de.js","assets/LoadingOutlined.05c4614d.js","assets/index.e66e1d37.js","assets/DeleteOutlined.f2fe9be1.js","assets/DeleteOutlined.f8ba9770.js","assets/DownOutlined.71c4cad8.js","assets/index.2a47a75e.js","assets/organization.e5ba3126.js","assets/index.3e7abac4.js","assets/ArrowRightOutlined.08fa31dd.js","assets/TableEditor.aa656ada.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>a(()=>import("./ConnectorEditor.981eda6d.js"),["assets/ConnectorEditor.981eda6d.js","assets/outputWidgets.18a31a4b.js","assets/outputWidgets.ecb1808d.css","assets/BaseLayout.981ccf1b.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.619182b9.js","assets/index.e64dc616.js","assets/index.cf4c23b9.js","assets/record.43702d11.js","assets/pubsub.d1622d77.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.730ece11.js","assets/ant-design.b4c55a9c.js","assets/index.3a4d17fa.js","assets/Modal.44ae6a9a.js","assets/Typography.827084de.js","assets/Link.4f092391.js","assets/Base.f82c0529.js","assets/SaveButton.13ece1cb.css","assets/project.55d2992e.js","assets/connector.5cafe2b9.js","assets/organization.e5ba3126.js","assets/TabPane.f2b25f7d.js","assets/hasIn.1db1a4ba.js","assets/index.3e7abac4.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Form.99377304.js","assets/index.2a47a75e.js","assets/popupNotifcation.07382277.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});g.beforeEach(async(o,t)=>{I(o,t);const e=i.getAuthor();if(A.trackPageView(e==null?void 0:e.claims.email),!o.meta.allowUnauthenticated&&!e){await g.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}});export{$ as A,b as C,z as a,i as b,g as r};
//# sourceMappingURL=router.09f8c19a.js.map
