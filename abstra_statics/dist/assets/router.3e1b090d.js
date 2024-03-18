var w=Object.defineProperty;var y=(o,t,e)=>t in o?w(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var h=(o,t,e)=>(y(o,typeof t!="symbol"?t+"":t,e),e);import{C as T,R}from"./Form.fe503f80.js";import{E as f,cS as E,S as _,t as v,g as O,h as P,_ as a,i as I}from"./outputWidgets.8234a0a2.js";import{p as C}from"./popupNotifcation.0cc7a4e0.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="1a8871e5-c46c-4e3a-931d-cc8c8e645678",o._sentryDebugIdIdentifier="sentry-dbid-1a8871e5-c46c-4e3a-931d-cc8c8e645678")}catch{}})();const $=f(T),z=f(R);class A{static async trackSession(t){const e=Object.fromEntries(document.cookie.split("; ").map(s=>s.split(/=(.*)/s).map(decodeURIComponent))),n=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search)),previousSessionId:n,email:t})})}static async trackPageView(t){const e=Object.fromEntries(document.cookie.split("; ").map(s=>s.split(/=(.*)/s).map(decodeURIComponent))),n=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/hackerforms/browser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({previousSessionId:n,author_email:t,type:"PageView",payload:{referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search))}})})}}const L=()=>window.location.host.includes(".abstra.io"),D={"cloud-api":"/api/cloud-api"},V={"cloud-api":"https://cloud-api.abstra.cloud"},j=o=>{const t="VITE_"+E.toUpper(E.snakeCase(o)),e={VITE_SENTRY_RELEASE:"7fb1012dab3a14ab63bbb9c560368b4ea76288f5",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(L()?D[o]:V[o])},p={cloudApi:j("cloud-api")};class l extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new l(e,t.status)}}class b{static async get(t,e){const n=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,u])=>u!=null)),s=Object.keys(n).length>0?`?${new URLSearchParams(n).toString()}`:"",r=await fetch(`${p.cloudApi}/console/${t}${s}`,{headers:{...i.headers}});if(r.status===403){C("You are not authorized to access this resource","Click here to go back to the home page.",()=>{window.location.href="/"});return}const c=await r.text();return c?JSON.parse(c):null}static async getBlob(t){return await(await fetch(`${p.cloudApi}/console/${t}`,{headers:{...i.headers}})).blob()}static async post(t,e,n){const s=!!(n!=null&&n["Content-Type"])&&n["Content-Type"]!=="application/json",r=await fetch(`${p.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...i.headers,...n},body:s?e:JSON.stringify(e)});if(!r.ok)throw await l.fromResponse(r);const c=await r.text();return c?JSON.parse(c):null}static async patch(t,e){const n=await fetch(`${p.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...i.headers},body:JSON.stringify(e)});if(!n.ok)throw await l.fromResponse(n);const s=await n.text();return s?JSON.parse(s):null}static async delete(t){const e=await fetch(`${p.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...i.headers}});if(!e.ok)throw await l.fromResponse(e)}}const m=class{async authenticate(t){try{return await b.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const n=await b.post("authn/verify",{email:t,token:e});if(!(n&&"jwt"in n))throw new Error("Invalid token");return this.saveJWT(n.jwt),A.trackSession(t),this.getAuthor()}saveJWT(t){_.set(m.key,t)}getJWT(){return _.get(m.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=v(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){_.remove(m.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let d=m;h(d,"key","abstracloud:auth:jwt");const i=new d,g=O({history:P("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>a(()=>import("./WidgetPreview.63d5e10b.js"),["assets/WidgetPreview.63d5e10b.js","assets/outputWidgets.8234a0a2.js","assets/outputWidgets.a254438e.css","assets/Steps.1b612a04.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.f6e40909.js","assets/WidgetsFrame.13b291ee.css","assets/WidgetPreview.1f0f871d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>a(()=>import("./Login.d9ecb334.js"),["assets/Login.d9ecb334.js","assets/outputWidgets.8234a0a2.js","assets/outputWidgets.a254438e.css","assets/icons.ce90da9e.js","assets/CircularLoading.bb0e9732.js","assets/CircularLoading.f81b57b4.css","assets/WidgetsFrame.f6e40909.js","assets/WidgetsFrame.13b291ee.css","assets/index.fef01291.js","assets/index.cf4c23b9.js","assets/record.03a7c34e.js","assets/pubsub.9d785f5e.js","assets/member.1ad7ba14.js","assets/Form.fe503f80.js","assets/hasIn.eb2b58d7.js","assets/popupNotifcation.0cc7a4e0.js","assets/Login.ddcd6824.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>a(()=>import("./ReturnApiKey.2bcb699e.js"),["assets/ReturnApiKey.2bcb699e.js","assets/outputWidgets.8234a0a2.js","assets/outputWidgets.a254438e.css","assets/index.fef01291.js","assets/index.cf4c23b9.js","assets/record.03a7c34e.js","assets/pubsub.9d785f5e.js","assets/apiKey.433bdda9.js","assets/project.e91edb65.js","assets/organization.41c4ffe3.js","assets/asyncComputed.b409af1b.js","assets/Title.f4e62791.js","assets/Base.3f643fc8.js","assets/Typography.d90f6795.js","assets/Form.fe503f80.js","assets/hasIn.eb2b58d7.js","assets/url.ca929c1f.js","assets/Paragraph.e2fea462.js","assets/Text.26e815ea.js","assets/index.96339c48.js","assets/Modal.e2b99765.js","assets/popupNotifcation.0cc7a4e0.js","assets/ReturnApiKey.c0c3152e.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>a(()=>import("./Organizations.497a691c.js"),["assets/Organizations.497a691c.js","assets/outputWidgets.8234a0a2.js","assets/outputWidgets.a254438e.css","assets/icons.ce90da9e.js","assets/asyncComputed.b409af1b.js","assets/index.fef01291.js","assets/index.cf4c23b9.js","assets/record.03a7c34e.js","assets/pubsub.9d785f5e.js","assets/organization.41c4ffe3.js","assets/Navbar.vue_vue_type_script_setup_true_lang.afac265f.js","assets/logo.084e5d7c.js","assets/Text.26e815ea.js","assets/Base.3f643fc8.js","assets/Typography.d90f6795.js","assets/index.d4a51de0.js","assets/ArrowRightOutlined.08fa31dd.js","assets/index.96339c48.js","assets/Navbar.f4a98ea3.css","assets/CrudView.220a75f9.js","assets/Paragraph.e2fea462.js","assets/Form.fe503f80.js","assets/hasIn.eb2b58d7.js","assets/Modal.e2b99765.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ed52fbe0.js","assets/url.ca929c1f.js","assets/index.75d219a5.js","assets/Title.f4e62791.js","assets/index.51ad8f20.js","assets/CrudView.3934aca2.css","assets/BaseLayout.0caa9388.js","assets/BaseLayout.2a9791da.css","assets/ant-design.ebf84e26.js","assets/index.0802dbd3.js","assets/popupNotifcation.0cc7a4e0.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>a(()=>import("./Organization.fd027b23.js"),["assets/Organization.fd027b23.js","assets/Sidebar.e98cb208.js","assets/outputWidgets.8234a0a2.js","assets/outputWidgets.a254438e.css","assets/icons.ce90da9e.js","assets/index.51ad8f20.js","assets/Sidebar.055402cc.css","assets/Navbar.vue_vue_type_script_setup_true_lang.afac265f.js","assets/logo.084e5d7c.js","assets/asyncComputed.b409af1b.js","assets/Text.26e815ea.js","assets/Base.3f643fc8.js","assets/Typography.d90f6795.js","assets/index.d4a51de0.js","assets/ArrowRightOutlined.08fa31dd.js","assets/index.96339c48.js","assets/Navbar.f4a98ea3.css","assets/index.fef01291.js","assets/index.cf4c23b9.js","assets/record.03a7c34e.js","assets/pubsub.9d785f5e.js","assets/organization.41c4ffe3.js","assets/BaseLayout.0caa9388.js","assets/BaseLayout.2a9791da.css","assets/Form.fe503f80.js","assets/hasIn.eb2b58d7.js","assets/popupNotifcation.0cc7a4e0.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>a(()=>import("./Projects.6c50a25f.js"),["assets/Projects.6c50a25f.js","assets/outputWidgets.8234a0a2.js","assets/outputWidgets.a254438e.css","assets/asyncComputed.b409af1b.js","assets/ant-design.ebf84e26.js","assets/index.0802dbd3.js","assets/Modal.e2b99765.js","assets/index.fef01291.js","assets/index.cf4c23b9.js","assets/record.03a7c34e.js","assets/pubsub.9d785f5e.js","assets/project.e91edb65.js","assets/organization.41c4ffe3.js","assets/CrudView.220a75f9.js","assets/icons.ce90da9e.js","assets/Paragraph.e2fea462.js","assets/Base.3f643fc8.js","assets/Typography.d90f6795.js","assets/Form.fe503f80.js","assets/hasIn.eb2b58d7.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ed52fbe0.js","assets/url.ca929c1f.js","assets/index.75d219a5.js","assets/Title.f4e62791.js","assets/Text.26e815ea.js","assets/index.51ad8f20.js","assets/CrudView.3934aca2.css","assets/popupNotifcation.0cc7a4e0.js"]),meta:{title:"Projects - Abstra Console"}},{path:"settings",name:"organization-settings",component:()=>a(()=>import("./OrganizationSettings.46b79cd5.js"),["assets/OrganizationSettings.46b79cd5.js","assets/outputWidgets.8234a0a2.js","assets/outputWidgets.a254438e.css"]),meta:{title:"Organization Settings - Abstra Console"}},{path:"editors",name:"editors",component:()=>a(()=>import("./Editors.a55d8db4.js"),["assets/Editors.a55d8db4.js","assets/outputWidgets.8234a0a2.js","assets/outputWidgets.a254438e.css","assets/asyncComputed.b409af1b.js","assets/index.fef01291.js","assets/index.cf4c23b9.js","assets/record.03a7c34e.js","assets/pubsub.9d785f5e.js","assets/member.1ad7ba14.js","assets/CrudView.220a75f9.js","assets/icons.ce90da9e.js","assets/Paragraph.e2fea462.js","assets/Base.3f643fc8.js","assets/Typography.d90f6795.js","assets/Form.fe503f80.js","assets/hasIn.eb2b58d7.js","assets/Modal.e2b99765.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ed52fbe0.js","assets/url.ca929c1f.js","assets/index.75d219a5.js","assets/Title.f4e62791.js","assets/Text.26e815ea.js","assets/index.51ad8f20.js","assets/CrudView.3934aca2.css","assets/ant-design.ebf84e26.js","assets/index.0802dbd3.js","assets/popupNotifcation.0cc7a4e0.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>a(()=>import("./Billing.2f250718.js"),["assets/Billing.2f250718.js","assets/outputWidgets.8234a0a2.js","assets/outputWidgets.a254438e.css","assets/index.fef01291.js","assets/index.cf4c23b9.js","assets/record.03a7c34e.js","assets/pubsub.9d785f5e.js","assets/organization.41c4ffe3.js","assets/asyncComputed.b409af1b.js","assets/Title.f4e62791.js","assets/Base.3f643fc8.js","assets/Typography.d90f6795.js","assets/index.75d219a5.js","assets/index.9561e36d.js","assets/Text.26e815ea.js","assets/Card.e34d61ef.js","assets/TabPane.62fcd83c.js","assets/hasIn.eb2b58d7.js","assets/Form.fe503f80.js","assets/popupNotifcation.0cc7a4e0.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>a(()=>import("./Project.80612a1b.js"),["assets/Project.80612a1b.js","assets/outputWidgets.8234a0a2.js","assets/outputWidgets.a254438e.css","assets/BaseLayout.0caa9388.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.b409af1b.js","assets/index.fef01291.js","assets/index.cf4c23b9.js","assets/record.03a7c34e.js","assets/pubsub.9d785f5e.js","assets/project.e91edb65.js","assets/organization.41c4ffe3.js","assets/Navbar.vue_vue_type_script_setup_true_lang.afac265f.js","assets/logo.084e5d7c.js","assets/Text.26e815ea.js","assets/Base.3f643fc8.js","assets/Typography.d90f6795.js","assets/index.d4a51de0.js","assets/ArrowRightOutlined.08fa31dd.js","assets/index.96339c48.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.e98cb208.js","assets/icons.ce90da9e.js","assets/index.51ad8f20.js","assets/Sidebar.055402cc.css","assets/Form.fe503f80.js","assets/hasIn.eb2b58d7.js","assets/popupNotifcation.0cc7a4e0.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>a(()=>import("./Live.e6898fce.js"),["assets/Live.e6898fce.js","assets/outputWidgets.8234a0a2.js","assets/outputWidgets.a254438e.css","assets/asyncComputed.b409af1b.js","assets/build.1935e5b9.js","assets/index.fef01291.js","assets/index.cf4c23b9.js","assets/record.03a7c34e.js","assets/pubsub.9d785f5e.js","assets/project.e91edb65.js","assets/CrudView.220a75f9.js","assets/icons.ce90da9e.js","assets/Paragraph.e2fea462.js","assets/Base.3f643fc8.js","assets/Typography.d90f6795.js","assets/Form.fe503f80.js","assets/hasIn.eb2b58d7.js","assets/Modal.e2b99765.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ed52fbe0.js","assets/url.ca929c1f.js","assets/index.75d219a5.js","assets/Title.f4e62791.js","assets/Text.26e815ea.js","assets/index.51ad8f20.js","assets/CrudView.3934aca2.css","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.1e1afe89.js","assets/CheckCircleFilled.61389a71.js","assets/LoadingOutlined.c21da432.js","assets/index.96339c48.js","assets/Link.ae53c4bb.js","assets/popupNotifcation.0cc7a4e0.js","assets/Live.ead36dc1.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>a(()=>import("./Builds.6f1f5c61.js"),["assets/Builds.6f1f5c61.js","assets/outputWidgets.8234a0a2.js","assets/outputWidgets.a254438e.css","assets/asyncComputed.b409af1b.js","assets/build.1935e5b9.js","assets/index.fef01291.js","assets/index.cf4c23b9.js","assets/record.03a7c34e.js","assets/pubsub.9d785f5e.js","assets/project.e91edb65.js","assets/CrudView.220a75f9.js","assets/icons.ce90da9e.js","assets/Paragraph.e2fea462.js","assets/Base.3f643fc8.js","assets/Typography.d90f6795.js","assets/Form.fe503f80.js","assets/hasIn.eb2b58d7.js","assets/Modal.e2b99765.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ed52fbe0.js","assets/url.ca929c1f.js","assets/index.75d219a5.js","assets/Title.f4e62791.js","assets/Text.26e815ea.js","assets/index.51ad8f20.js","assets/CrudView.3934aca2.css","assets/index.a4df3611.js","assets/datetime.a0592181.js","assets/CloseCircleOutlined.547e3b27.js","assets/LoadingOutlined.c21da432.js","assets/popupNotifcation.0cc7a4e0.js","assets/Builds.70340bcb.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>a(()=>import("./Connectors.309d150a.js"),["assets/Connectors.309d150a.js","assets/outputWidgets.8234a0a2.js","assets/outputWidgets.a254438e.css","assets/index.fef01291.js","assets/index.cf4c23b9.js","assets/record.03a7c34e.js","assets/pubsub.9d785f5e.js","assets/connector.b00a6cdf.js","assets/asyncComputed.b409af1b.js","assets/icons.ce90da9e.js","assets/CrudView.220a75f9.js","assets/Paragraph.e2fea462.js","assets/Base.3f643fc8.js","assets/Typography.d90f6795.js","assets/Form.fe503f80.js","assets/hasIn.eb2b58d7.js","assets/Modal.e2b99765.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ed52fbe0.js","assets/url.ca929c1f.js","assets/index.75d219a5.js","assets/Title.f4e62791.js","assets/Text.26e815ea.js","assets/index.51ad8f20.js","assets/CrudView.3934aca2.css","assets/popupNotifcation.0cc7a4e0.js"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>a(()=>import("./Tables.c72a1a2f.js"),["assets/Tables.c72a1a2f.js","assets/outputWidgets.8234a0a2.js","assets/outputWidgets.a254438e.css","assets/icons.ce90da9e.js","assets/asyncComputed.b409af1b.js","assets/tables.57553752.js","assets/record.03a7c34e.js","assets/pubsub.9d785f5e.js","assets/index.fef01291.js","assets/index.cf4c23b9.js","assets/string.ca104904.js","assets/CrudView.220a75f9.js","assets/Paragraph.e2fea462.js","assets/Base.3f643fc8.js","assets/Typography.d90f6795.js","assets/Form.fe503f80.js","assets/hasIn.eb2b58d7.js","assets/Modal.e2b99765.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ed52fbe0.js","assets/url.ca929c1f.js","assets/index.75d219a5.js","assets/Title.f4e62791.js","assets/Text.26e815ea.js","assets/index.51ad8f20.js","assets/CrudView.3934aca2.css","assets/popupNotifcation.0cc7a4e0.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>a(()=>import("./Sql.d01bf0c0.js"),["assets/Sql.d01bf0c0.js","assets/outputWidgets.8234a0a2.js","assets/outputWidgets.a254438e.css","assets/index.fef01291.js","assets/index.cf4c23b9.js","assets/record.03a7c34e.js","assets/pubsub.9d785f5e.js","assets/project.e91edb65.js","assets/toggleHighContrast.6183f480.js","assets/toggleHighContrast.30d77c87.css","assets/index.75d219a5.js","assets/index.96339c48.js","assets/Form.fe503f80.js","assets/hasIn.eb2b58d7.js","assets/popupNotifcation.0cc7a4e0.js","assets/Sql.3405ff47.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>a(()=>import("./ApiKeys.4de512e4.js"),["assets/ApiKeys.4de512e4.js","assets/outputWidgets.8234a0a2.js","assets/outputWidgets.a254438e.css","assets/icons.ce90da9e.js","assets/asyncComputed.b409af1b.js","assets/index.fef01291.js","assets/index.cf4c23b9.js","assets/record.03a7c34e.js","assets/pubsub.9d785f5e.js","assets/member.1ad7ba14.js","assets/apiKey.433bdda9.js","assets/project.e91edb65.js","assets/CrudView.220a75f9.js","assets/Paragraph.e2fea462.js","assets/Base.3f643fc8.js","assets/Typography.d90f6795.js","assets/Form.fe503f80.js","assets/hasIn.eb2b58d7.js","assets/Modal.e2b99765.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ed52fbe0.js","assets/url.ca929c1f.js","assets/index.75d219a5.js","assets/Title.f4e62791.js","assets/Text.26e815ea.js","assets/index.51ad8f20.js","assets/CrudView.3934aca2.css","assets/popupNotifcation.0cc7a4e0.js"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.2a9133d0.js"),["assets/Logs.2a9133d0.js","assets/outputWidgets.8234a0a2.js","assets/outputWidgets.a254438e.css","assets/build.1935e5b9.js","assets/index.fef01291.js","assets/index.cf4c23b9.js","assets/record.03a7c34e.js","assets/pubsub.9d785f5e.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.1e1afe89.js","assets/CheckCircleFilled.61389a71.js","assets/LoadingOutlined.c21da432.js","assets/datetime.a0592181.js","assets/dayjs.4d686e1d.js","assets/index.110d8d41.js","assets/index.51ad8f20.js","assets/Title.f4e62791.js","assets/Base.3f643fc8.js","assets/Typography.d90f6795.js","assets/index.96339c48.js","assets/Form.fe503f80.js","assets/hasIn.eb2b58d7.js","assets/CollapsePanel.4e5ea8ed.js","assets/popupNotifcation.0cc7a4e0.js"]),meta:{title:"Logs - Abstra Console"}},{path:"legacy-logs",name:"legacy-logs",component:()=>a(()=>import("./LegacyLogs.fa09b01f.js"),["assets/LegacyLogs.fa09b01f.js","assets/outputWidgets.8234a0a2.js","assets/outputWidgets.a254438e.css","assets/ant-design.ebf84e26.js","assets/index.0802dbd3.js","assets/Modal.e2b99765.js","assets/StarFilled.fad29e50.js","assets/Timeline.b98d7ab1.js","assets/CheckCircleFilled.61389a71.js","assets/build.1935e5b9.js","assets/index.fef01291.js","assets/index.cf4c23b9.js","assets/record.03a7c34e.js","assets/pubsub.9d785f5e.js","assets/asyncComputed.b409af1b.js","assets/Title.f4e62791.js","assets/Base.3f643fc8.js","assets/Typography.d90f6795.js","assets/index.96339c48.js","assets/Form.fe503f80.js","assets/hasIn.eb2b58d7.js","assets/dayjs.4d686e1d.js","assets/index.110d8d41.js","assets/index.51ad8f20.js","assets/popupNotifcation.0cc7a4e0.js","assets/LegacyLogs.752e315d.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>a(()=>import("./ProjectSettings.1d51cf55.js"),["assets/ProjectSettings.1d51cf55.js","assets/asyncComputed.b409af1b.js","assets/outputWidgets.8234a0a2.js","assets/outputWidgets.a254438e.css","assets/index.fef01291.js","assets/index.cf4c23b9.js","assets/record.03a7c34e.js","assets/pubsub.9d785f5e.js","assets/project.e91edb65.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.49e118da.js","assets/Title.f4e62791.js","assets/Base.3f643fc8.js","assets/Typography.d90f6795.js","assets/Paragraph.e2fea462.js","assets/Text.26e815ea.js","assets/Form.fe503f80.js","assets/hasIn.eb2b58d7.js","assets/popupNotifcation.0cc7a4e0.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVars.958f65b5.js"),["assets/EnvVars.958f65b5.js","assets/outputWidgets.8234a0a2.js","assets/outputWidgets.a254438e.css","assets/index.fef01291.js","assets/index.cf4c23b9.js","assets/record.03a7c34e.js","assets/pubsub.9d785f5e.js","assets/icons.ce90da9e.js","assets/asyncComputed.b409af1b.js","assets/CrudView.220a75f9.js","assets/Paragraph.e2fea462.js","assets/Base.3f643fc8.js","assets/Typography.d90f6795.js","assets/Form.fe503f80.js","assets/hasIn.eb2b58d7.js","assets/Modal.e2b99765.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ed52fbe0.js","assets/url.ca929c1f.js","assets/index.75d219a5.js","assets/Title.f4e62791.js","assets/Text.26e815ea.js","assets/index.51ad8f20.js","assets/CrudView.3934aca2.css","assets/popupNotifcation.0cc7a4e0.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>a(()=>import("./Files.e8b2cc04.js"),["assets/Files.e8b2cc04.js","assets/outputWidgets.8234a0a2.js","assets/outputWidgets.a254438e.css","assets/popupNotifcation.0cc7a4e0.js","assets/index.fef01291.js","assets/index.cf4c23b9.js","assets/record.03a7c34e.js","assets/pubsub.9d785f5e.js","assets/asyncComputed.b409af1b.js","assets/ant-design.ebf84e26.js","assets/index.0802dbd3.js","assets/Modal.e2b99765.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ed52fbe0.js","assets/DownloadOutlined.f0b0e5f7.js","assets/DeleteOutlined.3991ea2c.js","assets/DeleteOutlined.f8ba9770.js","assets/Title.f4e62791.js","assets/Base.3f643fc8.js","assets/Typography.d90f6795.js","assets/Paragraph.e2fea462.js","assets/Card.e34d61ef.js","assets/TabPane.62fcd83c.js","assets/hasIn.eb2b58d7.js","assets/Form.fe503f80.js","assets/Files.1001d74a.css"]),meta:{title:"Files - Abstra Console"}},{path:"users",name:"users",component:()=>a(()=>import("./Users.fce32dea.js"),["assets/Users.fce32dea.js","assets/outputWidgets.8234a0a2.js","assets/outputWidgets.a254438e.css","assets/icons.ce90da9e.js","assets/asyncComputed.b409af1b.js","assets/contracts.generated.48361fb8.js","assets/index.cf4c23b9.js","assets/Form.fe503f80.js","assets/hasIn.eb2b58d7.js","assets/index.ed7f15bf.js","assets/isNumeric.75337b1e.js","assets/popupNotifcation.0cc7a4e0.js","assets/index.fef01291.js","assets/record.03a7c34e.js","assets/pubsub.9d785f5e.js","assets/CrudView.220a75f9.js","assets/Paragraph.e2fea462.js","assets/Base.3f643fc8.js","assets/Typography.d90f6795.js","assets/Modal.e2b99765.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.ed52fbe0.js","assets/url.ca929c1f.js","assets/index.75d219a5.js","assets/Title.f4e62791.js","assets/Text.26e815ea.js","assets/index.51ad8f20.js","assets/CrudView.3934aca2.css"]),meta:{title:"Users - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>a(()=>import("./TableEditor.12104204.js"),["assets/TableEditor.12104204.js","assets/outputWidgets.8234a0a2.js","assets/outputWidgets.a254438e.css","assets/tables.57553752.js","assets/record.03a7c34e.js","assets/pubsub.9d785f5e.js","assets/index.fef01291.js","assets/index.cf4c23b9.js","assets/string.ca104904.js","assets/BaseLayout.0caa9388.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.b409af1b.js","assets/popupNotifcation.0cc7a4e0.js","assets/icons.ce90da9e.js","assets/project.e91edb65.js","assets/index.fdfb61b6.js","assets/index.2b744eae.js","assets/Form.fe503f80.js","assets/hasIn.eb2b58d7.js","assets/index.5909cc7b.js","assets/index.ed7f15bf.js","assets/isNumeric.75337b1e.js","assets/ant-design.ebf84e26.js","assets/index.0802dbd3.js","assets/Modal.e2b99765.js","assets/Base.3f643fc8.js","assets/Typography.d90f6795.js","assets/LoadingOutlined.c21da432.js","assets/index.75d219a5.js","assets/DeleteOutlined.3991ea2c.js","assets/DeleteOutlined.f8ba9770.js","assets/DownOutlined.a020608c.js","assets/index.9561e36d.js","assets/organization.41c4ffe3.js","assets/index.d4a51de0.js","assets/ArrowRightOutlined.08fa31dd.js","assets/TableEditor.a9961944.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>a(()=>import("./ConnectorEditor.7890820f.js"),["assets/ConnectorEditor.7890820f.js","assets/outputWidgets.8234a0a2.js","assets/outputWidgets.a254438e.css","assets/BaseLayout.0caa9388.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.b409af1b.js","assets/index.fef01291.js","assets/index.cf4c23b9.js","assets/record.03a7c34e.js","assets/pubsub.9d785f5e.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.dc2b1374.js","assets/ant-design.ebf84e26.js","assets/index.0802dbd3.js","assets/Modal.e2b99765.js","assets/Typography.d90f6795.js","assets/Link.ae53c4bb.js","assets/Base.3f643fc8.js","assets/SaveButton.13ece1cb.css","assets/project.e91edb65.js","assets/connector.b00a6cdf.js","assets/organization.41c4ffe3.js","assets/TabPane.62fcd83c.js","assets/hasIn.eb2b58d7.js","assets/index.d4a51de0.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Form.fe503f80.js","assets/index.9561e36d.js","assets/popupNotifcation.0cc7a4e0.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});g.beforeEach(async(o,t)=>{I(o,t);const e=i.getAuthor();if(A.trackPageView(e==null?void 0:e.claims.email),!o.meta.allowUnauthenticated&&!e){await g.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}});export{$ as A,b as C,z as a,i as b,g as r};
//# sourceMappingURL=router.3e1b090d.js.map
