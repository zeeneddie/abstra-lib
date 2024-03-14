var w=Object.defineProperty;var y=(o,t,e)=>t in o?w(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var h=(o,t,e)=>(y(o,typeof t!="symbol"?t+"":t,e),e);import{C as T,R}from"./Form.d05a1b22.js";import{E as g,cS as E,S as _,t as v,g as O,h as P,_ as a,i as I}from"./outputWidgets.84400f3d.js";import{p as C}from"./popupNotifcation.d06c16fd.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="2cb4d0a0-54d2-4118-8196-049160c02145",o._sentryDebugIdIdentifier="sentry-dbid-2cb4d0a0-54d2-4118-8196-049160c02145")}catch{}})();const $=g(T),z=g(R);class A{static async trackSession(t){const e=Object.fromEntries(document.cookie.split("; ").map(s=>s.split(/=(.*)/s).map(decodeURIComponent))),n=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search)),previousSessionId:n,email:t})})}static async trackPageView(t){const e=Object.fromEntries(document.cookie.split("; ").map(s=>s.split(/=(.*)/s).map(decodeURIComponent))),n=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/hackerforms/browser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({previousSessionId:n,author_email:t,type:"PageView",payload:{referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search))}})})}}const L=()=>window.location.host.includes(".abstra.io"),D={"cloud-api":"/api/cloud-api"},V={"cloud-api":"https://cloud-api.abstra.cloud"},j=o=>{const t="VITE_"+E.toUpper(E.snakeCase(o)),e={VITE_SENTRY_RELEASE:"7f99800170699db147cbc6afcf7325f031a77f6f",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(L()?D[o]:V[o])},p={cloudApi:j("cloud-api")};class l extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new l(e,t.status)}}class b{static async get(t,e){const n=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,u])=>u!=null)),s=Object.keys(n).length>0?`?${new URLSearchParams(n).toString()}`:"",r=await fetch(`${p.cloudApi}/console/${t}${s}`,{headers:{...i.headers}});if(r.status===403){C("You are not authorized to access this resource","Click here to go back to the home page.",()=>{window.location.href="/"});return}const c=await r.text();return c?JSON.parse(c):null}static async getBlob(t){return await(await fetch(`${p.cloudApi}/console/${t}`,{headers:{...i.headers}})).blob()}static async post(t,e,n){const s=!!(n!=null&&n["Content-Type"])&&n["Content-Type"]!=="application/json",r=await fetch(`${p.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...i.headers,...n},body:s?e:JSON.stringify(e)});if(!r.ok)throw await l.fromResponse(r);const c=await r.text();return c?JSON.parse(c):null}static async patch(t,e){const n=await fetch(`${p.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...i.headers},body:JSON.stringify(e)});if(!n.ok)throw await l.fromResponse(n);const s=await n.text();return s?JSON.parse(s):null}static async delete(t){const e=await fetch(`${p.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...i.headers}});if(!e.ok)throw await l.fromResponse(e)}}const m=class{async authenticate(t){try{return await b.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const n=await b.post("authn/verify",{email:t,token:e});if(!(n&&"jwt"in n))throw new Error("Invalid token");return this.saveJWT(n.jwt),A.trackSession(t),this.getAuthor()}saveJWT(t){_.set(m.key,t)}getJWT(){return _.get(m.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=v(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){_.remove(m.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let d=m;h(d,"key","abstracloud:auth:jwt");const i=new d,f=O({history:P("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>a(()=>import("./WidgetPreview.4ab6a290.js"),["assets/WidgetPreview.4ab6a290.js","assets/outputWidgets.84400f3d.js","assets/outputWidgets.a254438e.css","assets/Steps.14960243.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.dc1212ac.js","assets/WidgetsFrame.13b291ee.css","assets/WidgetPreview.1f0f871d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>a(()=>import("./Login.846d2f7d.js"),["assets/Login.846d2f7d.js","assets/outputWidgets.84400f3d.js","assets/outputWidgets.a254438e.css","assets/icons.51c500b8.js","assets/CircularLoading.47f6d656.js","assets/CircularLoading.f81b57b4.css","assets/WidgetsFrame.dc1212ac.js","assets/WidgetsFrame.13b291ee.css","assets/index.575f21cf.js","assets/index.cf4c23b9.js","assets/record.a1f907ea.js","assets/pubsub.87032f37.js","assets/member.448de3ec.js","assets/Form.d05a1b22.js","assets/hasIn.bbea906d.js","assets/popupNotifcation.d06c16fd.js","assets/Login.ddcd6824.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>a(()=>import("./ReturnApiKey.ee210ff5.js"),["assets/ReturnApiKey.ee210ff5.js","assets/outputWidgets.84400f3d.js","assets/outputWidgets.a254438e.css","assets/index.575f21cf.js","assets/index.cf4c23b9.js","assets/record.a1f907ea.js","assets/pubsub.87032f37.js","assets/apiKey.e3163889.js","assets/project.6de3a389.js","assets/organization.0f66ea2d.js","assets/asyncComputed.f2a51feb.js","assets/Title.77255753.js","assets/Base.5abbd37f.js","assets/Typography.d06ce724.js","assets/Form.d05a1b22.js","assets/hasIn.bbea906d.js","assets/url.32b2d17f.js","assets/Paragraph.4b47bceb.js","assets/Text.471d0d00.js","assets/index.ab37c1ab.js","assets/Modal.d808afee.js","assets/popupNotifcation.d06c16fd.js","assets/ReturnApiKey.c0c3152e.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>a(()=>import("./Organizations.8760b782.js"),["assets/Organizations.8760b782.js","assets/outputWidgets.84400f3d.js","assets/outputWidgets.a254438e.css","assets/icons.51c500b8.js","assets/asyncComputed.f2a51feb.js","assets/index.575f21cf.js","assets/index.cf4c23b9.js","assets/record.a1f907ea.js","assets/pubsub.87032f37.js","assets/organization.0f66ea2d.js","assets/Navbar.vue_vue_type_script_setup_true_lang.01047f53.js","assets/logo.084e5d7c.js","assets/Text.471d0d00.js","assets/Base.5abbd37f.js","assets/Typography.d06ce724.js","assets/index.ee5bcd97.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.f4a98ea3.css","assets/CrudView.ff2ba196.js","assets/Paragraph.4b47bceb.js","assets/Form.d05a1b22.js","assets/hasIn.bbea906d.js","assets/Modal.d808afee.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6b27b5c3.js","assets/url.32b2d17f.js","assets/index.fa6ccec8.js","assets/Title.77255753.js","assets/index.f01295b9.js","assets/CrudView.3934aca2.css","assets/BaseLayout.af9cbbe2.js","assets/BaseLayout.2a9791da.css","assets/ant-design.c41e79aa.js","assets/index.e0dbea82.js","assets/popupNotifcation.d06c16fd.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>a(()=>import("./Organization.41a146ca.js"),["assets/Organization.41a146ca.js","assets/Sidebar.8e67d6bd.js","assets/outputWidgets.84400f3d.js","assets/outputWidgets.a254438e.css","assets/icons.51c500b8.js","assets/index.f01295b9.js","assets/Sidebar.055402cc.css","assets/Navbar.vue_vue_type_script_setup_true_lang.01047f53.js","assets/logo.084e5d7c.js","assets/asyncComputed.f2a51feb.js","assets/Text.471d0d00.js","assets/Base.5abbd37f.js","assets/Typography.d06ce724.js","assets/index.ee5bcd97.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.f4a98ea3.css","assets/index.575f21cf.js","assets/index.cf4c23b9.js","assets/record.a1f907ea.js","assets/pubsub.87032f37.js","assets/organization.0f66ea2d.js","assets/BaseLayout.af9cbbe2.js","assets/BaseLayout.2a9791da.css","assets/Form.d05a1b22.js","assets/hasIn.bbea906d.js","assets/popupNotifcation.d06c16fd.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>a(()=>import("./Projects.391f447d.js"),["assets/Projects.391f447d.js","assets/outputWidgets.84400f3d.js","assets/outputWidgets.a254438e.css","assets/asyncComputed.f2a51feb.js","assets/ant-design.c41e79aa.js","assets/index.e0dbea82.js","assets/Modal.d808afee.js","assets/index.575f21cf.js","assets/index.cf4c23b9.js","assets/record.a1f907ea.js","assets/pubsub.87032f37.js","assets/project.6de3a389.js","assets/organization.0f66ea2d.js","assets/CrudView.ff2ba196.js","assets/icons.51c500b8.js","assets/Paragraph.4b47bceb.js","assets/Base.5abbd37f.js","assets/Typography.d06ce724.js","assets/Form.d05a1b22.js","assets/hasIn.bbea906d.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6b27b5c3.js","assets/url.32b2d17f.js","assets/index.fa6ccec8.js","assets/Title.77255753.js","assets/Text.471d0d00.js","assets/index.f01295b9.js","assets/CrudView.3934aca2.css","assets/popupNotifcation.d06c16fd.js"]),meta:{title:"Projects - Abstra Console"}},{path:"settings",name:"organization-settings",component:()=>a(()=>import("./OrganizationSettings.b2305495.js"),["assets/OrganizationSettings.b2305495.js","assets/outputWidgets.84400f3d.js","assets/outputWidgets.a254438e.css"]),meta:{title:"Organization Settings - Abstra Console"}},{path:"editors",name:"editors",component:()=>a(()=>import("./Editors.a61118dc.js"),["assets/Editors.a61118dc.js","assets/outputWidgets.84400f3d.js","assets/outputWidgets.a254438e.css","assets/asyncComputed.f2a51feb.js","assets/index.575f21cf.js","assets/index.cf4c23b9.js","assets/record.a1f907ea.js","assets/pubsub.87032f37.js","assets/member.448de3ec.js","assets/CrudView.ff2ba196.js","assets/icons.51c500b8.js","assets/Paragraph.4b47bceb.js","assets/Base.5abbd37f.js","assets/Typography.d06ce724.js","assets/Form.d05a1b22.js","assets/hasIn.bbea906d.js","assets/Modal.d808afee.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6b27b5c3.js","assets/url.32b2d17f.js","assets/index.fa6ccec8.js","assets/Title.77255753.js","assets/Text.471d0d00.js","assets/index.f01295b9.js","assets/CrudView.3934aca2.css","assets/ant-design.c41e79aa.js","assets/index.e0dbea82.js","assets/popupNotifcation.d06c16fd.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>a(()=>import("./Billing.1cf47b45.js"),["assets/Billing.1cf47b45.js","assets/outputWidgets.84400f3d.js","assets/outputWidgets.a254438e.css","assets/index.575f21cf.js","assets/index.cf4c23b9.js","assets/record.a1f907ea.js","assets/pubsub.87032f37.js","assets/organization.0f66ea2d.js","assets/asyncComputed.f2a51feb.js","assets/Title.77255753.js","assets/Base.5abbd37f.js","assets/Typography.d06ce724.js","assets/index.fa6ccec8.js","assets/index.617fe5ff.js","assets/Text.471d0d00.js","assets/Card.213c3593.js","assets/TabPane.39b3d167.js","assets/hasIn.bbea906d.js","assets/Form.d05a1b22.js","assets/popupNotifcation.d06c16fd.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>a(()=>import("./Project.6dd58333.js"),["assets/Project.6dd58333.js","assets/outputWidgets.84400f3d.js","assets/outputWidgets.a254438e.css","assets/BaseLayout.af9cbbe2.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.f2a51feb.js","assets/index.575f21cf.js","assets/index.cf4c23b9.js","assets/record.a1f907ea.js","assets/pubsub.87032f37.js","assets/project.6de3a389.js","assets/organization.0f66ea2d.js","assets/Navbar.vue_vue_type_script_setup_true_lang.01047f53.js","assets/logo.084e5d7c.js","assets/Text.471d0d00.js","assets/Base.5abbd37f.js","assets/Typography.d06ce724.js","assets/index.ee5bcd97.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.8e67d6bd.js","assets/icons.51c500b8.js","assets/index.f01295b9.js","assets/Sidebar.055402cc.css","assets/Form.d05a1b22.js","assets/hasIn.bbea906d.js","assets/popupNotifcation.d06c16fd.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>a(()=>import("./Live.a7c41ab7.js"),["assets/Live.a7c41ab7.js","assets/outputWidgets.84400f3d.js","assets/outputWidgets.a254438e.css","assets/asyncComputed.f2a51feb.js","assets/build.ad237335.js","assets/index.575f21cf.js","assets/index.cf4c23b9.js","assets/record.a1f907ea.js","assets/pubsub.87032f37.js","assets/project.6de3a389.js","assets/CrudView.ff2ba196.js","assets/icons.51c500b8.js","assets/Paragraph.4b47bceb.js","assets/Base.5abbd37f.js","assets/Typography.d06ce724.js","assets/Form.d05a1b22.js","assets/hasIn.bbea906d.js","assets/Modal.d808afee.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6b27b5c3.js","assets/url.32b2d17f.js","assets/index.fa6ccec8.js","assets/Title.77255753.js","assets/Text.471d0d00.js","assets/index.f01295b9.js","assets/CrudView.3934aca2.css","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.ec837d8c.js","assets/CheckCircleFilled.b310b861.js","assets/LoadingOutlined.95868496.js","assets/index.ab37c1ab.js","assets/Link.c40d5ee3.js","assets/popupNotifcation.d06c16fd.js","assets/Live.ead36dc1.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>a(()=>import("./Builds.a4a728b7.js"),["assets/Builds.a4a728b7.js","assets/outputWidgets.84400f3d.js","assets/outputWidgets.a254438e.css","assets/asyncComputed.f2a51feb.js","assets/build.ad237335.js","assets/index.575f21cf.js","assets/index.cf4c23b9.js","assets/record.a1f907ea.js","assets/pubsub.87032f37.js","assets/project.6de3a389.js","assets/CrudView.ff2ba196.js","assets/icons.51c500b8.js","assets/Paragraph.4b47bceb.js","assets/Base.5abbd37f.js","assets/Typography.d06ce724.js","assets/Form.d05a1b22.js","assets/hasIn.bbea906d.js","assets/Modal.d808afee.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6b27b5c3.js","assets/url.32b2d17f.js","assets/index.fa6ccec8.js","assets/Title.77255753.js","assets/Text.471d0d00.js","assets/index.f01295b9.js","assets/CrudView.3934aca2.css","assets/index.4c020ff0.js","assets/datetime.cfe749a3.js","assets/CloseCircleOutlined.ed91c37c.js","assets/LoadingOutlined.95868496.js","assets/popupNotifcation.d06c16fd.js","assets/Builds.70340bcb.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>a(()=>import("./Connectors.80a42ede.js"),["assets/Connectors.80a42ede.js","assets/outputWidgets.84400f3d.js","assets/outputWidgets.a254438e.css","assets/index.575f21cf.js","assets/index.cf4c23b9.js","assets/record.a1f907ea.js","assets/pubsub.87032f37.js","assets/connector.46e923ae.js","assets/asyncComputed.f2a51feb.js","assets/icons.51c500b8.js","assets/CrudView.ff2ba196.js","assets/Paragraph.4b47bceb.js","assets/Base.5abbd37f.js","assets/Typography.d06ce724.js","assets/Form.d05a1b22.js","assets/hasIn.bbea906d.js","assets/Modal.d808afee.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6b27b5c3.js","assets/url.32b2d17f.js","assets/index.fa6ccec8.js","assets/Title.77255753.js","assets/Text.471d0d00.js","assets/index.f01295b9.js","assets/CrudView.3934aca2.css","assets/popupNotifcation.d06c16fd.js"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>a(()=>import("./Tables.12b40ce8.js"),["assets/Tables.12b40ce8.js","assets/outputWidgets.84400f3d.js","assets/outputWidgets.a254438e.css","assets/icons.51c500b8.js","assets/asyncComputed.f2a51feb.js","assets/tables.1d198494.js","assets/record.a1f907ea.js","assets/pubsub.87032f37.js","assets/index.575f21cf.js","assets/index.cf4c23b9.js","assets/string.486bb998.js","assets/CrudView.ff2ba196.js","assets/Paragraph.4b47bceb.js","assets/Base.5abbd37f.js","assets/Typography.d06ce724.js","assets/Form.d05a1b22.js","assets/hasIn.bbea906d.js","assets/Modal.d808afee.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6b27b5c3.js","assets/url.32b2d17f.js","assets/index.fa6ccec8.js","assets/Title.77255753.js","assets/Text.471d0d00.js","assets/index.f01295b9.js","assets/CrudView.3934aca2.css","assets/popupNotifcation.d06c16fd.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>a(()=>import("./Sql.40ceda1c.js"),["assets/Sql.40ceda1c.js","assets/outputWidgets.84400f3d.js","assets/outputWidgets.a254438e.css","assets/index.575f21cf.js","assets/index.cf4c23b9.js","assets/record.a1f907ea.js","assets/pubsub.87032f37.js","assets/project.6de3a389.js","assets/toggleHighContrast.9cf9f7aa.js","assets/toggleHighContrast.30d77c87.css","assets/index.fa6ccec8.js","assets/index.ab37c1ab.js","assets/Form.d05a1b22.js","assets/hasIn.bbea906d.js","assets/popupNotifcation.d06c16fd.js","assets/Sql.3405ff47.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>a(()=>import("./ApiKeys.7df82dcb.js"),["assets/ApiKeys.7df82dcb.js","assets/outputWidgets.84400f3d.js","assets/outputWidgets.a254438e.css","assets/icons.51c500b8.js","assets/asyncComputed.f2a51feb.js","assets/index.575f21cf.js","assets/index.cf4c23b9.js","assets/record.a1f907ea.js","assets/pubsub.87032f37.js","assets/member.448de3ec.js","assets/apiKey.e3163889.js","assets/project.6de3a389.js","assets/CrudView.ff2ba196.js","assets/Paragraph.4b47bceb.js","assets/Base.5abbd37f.js","assets/Typography.d06ce724.js","assets/Form.d05a1b22.js","assets/hasIn.bbea906d.js","assets/Modal.d808afee.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6b27b5c3.js","assets/url.32b2d17f.js","assets/index.fa6ccec8.js","assets/Title.77255753.js","assets/Text.471d0d00.js","assets/index.f01295b9.js","assets/CrudView.3934aca2.css","assets/popupNotifcation.d06c16fd.js"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.f260d95b.js"),["assets/Logs.f260d95b.js","assets/outputWidgets.84400f3d.js","assets/outputWidgets.a254438e.css","assets/build.ad237335.js","assets/index.575f21cf.js","assets/index.cf4c23b9.js","assets/record.a1f907ea.js","assets/pubsub.87032f37.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.ec837d8c.js","assets/CheckCircleFilled.b310b861.js","assets/LoadingOutlined.95868496.js","assets/datetime.cfe749a3.js","assets/dayjs.c8519110.js","assets/index.671bb8d9.js","assets/index.f01295b9.js","assets/Title.77255753.js","assets/Base.5abbd37f.js","assets/Typography.d06ce724.js","assets/index.ab37c1ab.js","assets/Form.d05a1b22.js","assets/hasIn.bbea906d.js","assets/CollapsePanel.5525fdb8.js","assets/popupNotifcation.d06c16fd.js"]),meta:{title:"Logs - Abstra Console"}},{path:"legacy-logs",name:"legacy-logs",component:()=>a(()=>import("./LegacyLogs.cf58e461.js"),["assets/LegacyLogs.cf58e461.js","assets/outputWidgets.84400f3d.js","assets/outputWidgets.a254438e.css","assets/ant-design.c41e79aa.js","assets/index.e0dbea82.js","assets/Modal.d808afee.js","assets/StarFilled.fad29e50.js","assets/Timeline.2a1b60bf.js","assets/CheckCircleFilled.b310b861.js","assets/build.ad237335.js","assets/index.575f21cf.js","assets/index.cf4c23b9.js","assets/record.a1f907ea.js","assets/pubsub.87032f37.js","assets/asyncComputed.f2a51feb.js","assets/Title.77255753.js","assets/Base.5abbd37f.js","assets/Typography.d06ce724.js","assets/index.ab37c1ab.js","assets/Form.d05a1b22.js","assets/hasIn.bbea906d.js","assets/dayjs.c8519110.js","assets/index.671bb8d9.js","assets/index.f01295b9.js","assets/popupNotifcation.d06c16fd.js","assets/LegacyLogs.752e315d.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>a(()=>import("./ProjectSettings.6c95ba03.js"),["assets/ProjectSettings.6c95ba03.js","assets/asyncComputed.f2a51feb.js","assets/outputWidgets.84400f3d.js","assets/outputWidgets.a254438e.css","assets/index.575f21cf.js","assets/index.cf4c23b9.js","assets/record.a1f907ea.js","assets/pubsub.87032f37.js","assets/project.6de3a389.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.c777ac39.js","assets/Title.77255753.js","assets/Base.5abbd37f.js","assets/Typography.d06ce724.js","assets/Paragraph.4b47bceb.js","assets/Text.471d0d00.js","assets/Form.d05a1b22.js","assets/hasIn.bbea906d.js","assets/popupNotifcation.d06c16fd.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVars.aef60faf.js"),["assets/EnvVars.aef60faf.js","assets/outputWidgets.84400f3d.js","assets/outputWidgets.a254438e.css","assets/index.575f21cf.js","assets/index.cf4c23b9.js","assets/record.a1f907ea.js","assets/pubsub.87032f37.js","assets/icons.51c500b8.js","assets/asyncComputed.f2a51feb.js","assets/CrudView.ff2ba196.js","assets/Paragraph.4b47bceb.js","assets/Base.5abbd37f.js","assets/Typography.d06ce724.js","assets/Form.d05a1b22.js","assets/hasIn.bbea906d.js","assets/Modal.d808afee.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6b27b5c3.js","assets/url.32b2d17f.js","assets/index.fa6ccec8.js","assets/Title.77255753.js","assets/Text.471d0d00.js","assets/index.f01295b9.js","assets/CrudView.3934aca2.css","assets/popupNotifcation.d06c16fd.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>a(()=>import("./Files.ff9c27b1.js"),["assets/Files.ff9c27b1.js","assets/outputWidgets.84400f3d.js","assets/outputWidgets.a254438e.css","assets/popupNotifcation.d06c16fd.js","assets/index.575f21cf.js","assets/index.cf4c23b9.js","assets/record.a1f907ea.js","assets/pubsub.87032f37.js","assets/asyncComputed.f2a51feb.js","assets/ant-design.c41e79aa.js","assets/index.e0dbea82.js","assets/Modal.d808afee.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6b27b5c3.js","assets/DownloadOutlined.f0b0e5f7.js","assets/DeleteOutlined.87dfb7c2.js","assets/DeleteOutlined.f8ba9770.js","assets/Title.77255753.js","assets/Base.5abbd37f.js","assets/Typography.d06ce724.js","assets/Paragraph.4b47bceb.js","assets/Card.213c3593.js","assets/TabPane.39b3d167.js","assets/hasIn.bbea906d.js","assets/Form.d05a1b22.js","assets/Files.1001d74a.css"]),meta:{title:"Files - Abstra Console"}},{path:"users",name:"users",component:()=>a(()=>import("./Users.b67f0711.js"),["assets/Users.b67f0711.js","assets/outputWidgets.84400f3d.js","assets/outputWidgets.a254438e.css","assets/icons.51c500b8.js","assets/asyncComputed.f2a51feb.js","assets/contracts.generated.dfc46d7a.js","assets/index.cf4c23b9.js","assets/Form.d05a1b22.js","assets/hasIn.bbea906d.js","assets/index.93162d4c.js","assets/isNumeric.75337b1e.js","assets/popupNotifcation.d06c16fd.js","assets/index.575f21cf.js","assets/record.a1f907ea.js","assets/pubsub.87032f37.js","assets/CrudView.ff2ba196.js","assets/Paragraph.4b47bceb.js","assets/Base.5abbd37f.js","assets/Typography.d06ce724.js","assets/Modal.d808afee.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.6b27b5c3.js","assets/url.32b2d17f.js","assets/index.fa6ccec8.js","assets/Title.77255753.js","assets/Text.471d0d00.js","assets/index.f01295b9.js","assets/CrudView.3934aca2.css"]),meta:{title:"Users - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>a(()=>import("./TableEditor.8aa47bca.js"),["assets/TableEditor.8aa47bca.js","assets/outputWidgets.84400f3d.js","assets/outputWidgets.a254438e.css","assets/tables.1d198494.js","assets/record.a1f907ea.js","assets/pubsub.87032f37.js","assets/index.575f21cf.js","assets/index.cf4c23b9.js","assets/string.486bb998.js","assets/BaseLayout.af9cbbe2.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.f2a51feb.js","assets/popupNotifcation.d06c16fd.js","assets/icons.51c500b8.js","assets/project.6de3a389.js","assets/index.3493888c.js","assets/index.15ddb2c1.js","assets/Form.d05a1b22.js","assets/hasIn.bbea906d.js","assets/index.0223ca32.js","assets/index.93162d4c.js","assets/isNumeric.75337b1e.js","assets/ant-design.c41e79aa.js","assets/index.e0dbea82.js","assets/Modal.d808afee.js","assets/Base.5abbd37f.js","assets/Typography.d06ce724.js","assets/LoadingOutlined.95868496.js","assets/index.fa6ccec8.js","assets/DeleteOutlined.87dfb7c2.js","assets/DeleteOutlined.f8ba9770.js","assets/DownOutlined.e05fa14d.js","assets/index.617fe5ff.js","assets/organization.0f66ea2d.js","assets/index.ee5bcd97.js","assets/ArrowRightOutlined.08fa31dd.js","assets/TableEditor.a9961944.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>a(()=>import("./ConnectorEditor.b64f93f3.js"),["assets/ConnectorEditor.b64f93f3.js","assets/outputWidgets.84400f3d.js","assets/outputWidgets.a254438e.css","assets/BaseLayout.af9cbbe2.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.f2a51feb.js","assets/index.575f21cf.js","assets/index.cf4c23b9.js","assets/record.a1f907ea.js","assets/pubsub.87032f37.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.e85375ff.js","assets/ant-design.c41e79aa.js","assets/index.e0dbea82.js","assets/Modal.d808afee.js","assets/Typography.d06ce724.js","assets/Link.c40d5ee3.js","assets/Base.5abbd37f.js","assets/SaveButton.13ece1cb.css","assets/project.6de3a389.js","assets/connector.46e923ae.js","assets/organization.0f66ea2d.js","assets/TabPane.39b3d167.js","assets/hasIn.bbea906d.js","assets/index.ee5bcd97.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Form.d05a1b22.js","assets/index.617fe5ff.js","assets/popupNotifcation.d06c16fd.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});f.beforeEach(async(o,t)=>{I(o,t);const e=i.getAuthor();if(A.trackPageView(e==null?void 0:e.claims.email),!o.meta.allowUnauthenticated&&!e){await f.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}});export{$ as A,b as C,z as a,i as b,f as r};
//# sourceMappingURL=router.6e29c40f.js.map