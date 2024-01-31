var b=Object.defineProperty;var T=(o,t,e)=>t in o?b(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var h=(o,t,e)=>(T(o,typeof t!="symbol"?t+"":t,e),e);import{C as R,R as v}from"./FormItem.6e3fad7e.js";import{E as y,cT as E,S as l,t as I,g as O,h as A,_ as n,i as P}from"./outputWidgets.0277cbbd.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="b83c16ab-1299-424f-866b-bbe692e48c6d",o._sentryDebugIdIdentifier="sentry-dbid-b83c16ab-1299-424f-866b-bbe692e48c6d")}catch{}})();const U=y(R),J=y(v);class g{static async trackSession(t){const e=Object.fromEntries(document.cookie.split("; ").map(r=>r.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search)),previousSessionId:a,email:t})})}static async trackPageView(t){const e=Object.fromEntries(document.cookie.split("; ").map(r=>r.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/hackerforms/browser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({previousSessionId:a,author_email:t,type:"PageView",payload:{referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search))}})})}}const L=()=>window.location.host.includes(".abstra.io"),D={"cloud-api":"/api/cloud-api"},V={"cloud-api":"https://cloud-api.abstra.cloud"},j=o=>{const t="VITE_"+E.toUpper(E.snakeCase(o)),e={VITE_SENTRY_RELEASE:"7c6d12163108157eddfe77a260e657ce79a3ea19",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(L()?D[o]:V[o])},p={cloudApi:j("cloud-api")};class _ extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new _(e,t.status)}}class f{static async get(t,e){const a=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,u])=>u!=null)),r=Object.keys(a).length>0?`?${new URLSearchParams(a).toString()}`:"",s=await fetch(`${p.cloudApi}/console/${t}${r}`,{headers:{...i.headers}});s.status===403&&(window.location.href="/login");const c=await s.text();return c?JSON.parse(c):null}static async getBlob(t){return await(await fetch(`${p.cloudApi}/console/${t}`,{headers:{...i.headers}})).blob()}static async post(t,e,a){const r=!!(a!=null&&a["Content-Type"])&&a["Content-Type"]!=="application/json",s=await fetch(`${p.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...i.headers,...a},body:r?e:JSON.stringify(e)});if(!s.ok)throw await _.fromResponse(s);const c=await s.text();return c?JSON.parse(c):null}static async patch(t,e){const a=await fetch(`${p.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...i.headers},body:JSON.stringify(e)});if(!a.ok)throw await _.fromResponse(a);const r=await a.text();return r?JSON.parse(r):null}static async delete(t){const e=await fetch(`${p.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...i.headers}});if(!e.ok)throw await _.fromResponse(e)}}const m=class{async authenticate(t){try{return await f.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const a=await f.post("authn/verify",{email:t,token:e});if(!(a&&"jwt"in a))throw new Error("Invalid token");return this.saveJWT(a.jwt),g.trackSession(t),this.getAuthor()}saveJWT(t){l.set(m.key,t)}getJWT(){return l.get(m.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=I(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){l.remove(m.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let d=m;h(d,"key","abstracloud:auth:jwt");const i=new d,w=O({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./WidgetPreview.bbe08635.js"),["assets/WidgetPreview.bbe08635.js","assets/ActionButton.f2966625.js","assets/outputWidgets.0277cbbd.js","assets/outputWidgets.ead3c588.css","assets/ActionButton.f74e60ec.css","assets/WidgetsFrame.eec3aa14.js","assets/WidgetsFrame.97ae601d.css","assets/WidgetPreview.2be4ed12.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./Login.43ec41a2.js"),["assets/Login.43ec41a2.js","assets/outputWidgets.0277cbbd.js","assets/outputWidgets.ead3c588.css","assets/icons.4110f4c3.js","assets/CircularLoading.90f9b4f8.js","assets/CircularLoading.f81b57b4.css","assets/index.484a88f2.js","assets/index.cf4c23b9.js","assets/record.cc1b684f.js","assets/pubsub.9dc2e6ac.js","assets/member.bfb5d34a.js","assets/WidgetsFrame.eec3aa14.js","assets/WidgetsFrame.97ae601d.css","assets/FormItem.6e3fad7e.js","assets/hasIn.30cc1d4f.js","assets/Login.6f9ffede.css"])},{path:"/api-key",name:"api-key",component:()=>n(()=>import("./ReturnApiKey.a769e776.js"),["assets/ReturnApiKey.a769e776.js","assets/outputWidgets.0277cbbd.js","assets/outputWidgets.ead3c588.css","assets/index.484a88f2.js","assets/index.cf4c23b9.js","assets/record.cc1b684f.js","assets/pubsub.9dc2e6ac.js","assets/apiKey.0669629a.js","assets/project.76a348c2.js","assets/organization.250d78b8.js","assets/asyncComputed.d55fcd20.js","assets/Title.e05b5b52.js","assets/Base.b6a7a457.js","assets/FormItem.6e3fad7e.js","assets/hasIn.30cc1d4f.js","assets/Form.c7b890a6.js","assets/Paragraph.11321d3e.js","assets/Text.c62153b6.js","assets/index.15dc65d6.js","assets/Modal.3b9fd86c.js","assets/ReturnApiKey.909cd622.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>n(()=>import("./Organizations.cafcf73c.js"),["assets/Organizations.cafcf73c.js","assets/outputWidgets.0277cbbd.js","assets/outputWidgets.ead3c588.css","assets/icons.4110f4c3.js","assets/asyncComputed.d55fcd20.js","assets/index.484a88f2.js","assets/index.cf4c23b9.js","assets/record.cc1b684f.js","assets/pubsub.9dc2e6ac.js","assets/organization.250d78b8.js","assets/Navbar.vue_vue_type_script_setup_true_lang.63a152da.js","assets/logo.084e5d7c.js","assets/Text.c62153b6.js","assets/Base.b6a7a457.js","assets/index.c6cb8e0a.js","assets/Navbar.f4a98ea3.css","assets/CrudView.783d1b27.js","assets/Paragraph.11321d3e.js","assets/FormItem.6e3fad7e.js","assets/hasIn.30cc1d4f.js","assets/Form.c7b890a6.js","assets/Modal.3b9fd86c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13181c55.js","assets/url.044e3d41.js","assets/index.89cecc01.js","assets/Title.e05b5b52.js","assets/index.23b4fff1.js","assets/CrudView.f31d3386.css","assets/BaseLayout.b1286937.js","assets/BaseLayout.881bfa61.css","assets/ant-design.32d39fd0.js","assets/index.f4aebc3d.js"])},{path:"/organizations/:organizationId",name:"organization",component:()=>n(()=>import("./Organization.6787b909.js"),["assets/Organization.6787b909.js","assets/Sidebar.6c7bfeed.js","assets/outputWidgets.0277cbbd.js","assets/outputWidgets.ead3c588.css","assets/icons.4110f4c3.js","assets/index.23b4fff1.js","assets/Sidebar.055402cc.css","assets/Navbar.vue_vue_type_script_setup_true_lang.63a152da.js","assets/logo.084e5d7c.js","assets/asyncComputed.d55fcd20.js","assets/Text.c62153b6.js","assets/Base.b6a7a457.js","assets/index.c6cb8e0a.js","assets/Navbar.f4a98ea3.css","assets/index.484a88f2.js","assets/index.cf4c23b9.js","assets/record.cc1b684f.js","assets/pubsub.9dc2e6ac.js","assets/organization.250d78b8.js","assets/BaseLayout.b1286937.js","assets/BaseLayout.881bfa61.css","assets/FormItem.6e3fad7e.js","assets/hasIn.30cc1d4f.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>n(()=>import("./Projects.36e0ada4.js"),["assets/Projects.36e0ada4.js","assets/outputWidgets.0277cbbd.js","assets/outputWidgets.ead3c588.css","assets/icons.4110f4c3.js","assets/asyncComputed.d55fcd20.js","assets/index.484a88f2.js","assets/index.cf4c23b9.js","assets/record.cc1b684f.js","assets/pubsub.9dc2e6ac.js","assets/project.76a348c2.js","assets/organization.250d78b8.js","assets/CrudView.783d1b27.js","assets/Paragraph.11321d3e.js","assets/Base.b6a7a457.js","assets/FormItem.6e3fad7e.js","assets/hasIn.30cc1d4f.js","assets/Form.c7b890a6.js","assets/Modal.3b9fd86c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13181c55.js","assets/url.044e3d41.js","assets/index.89cecc01.js","assets/Title.e05b5b52.js","assets/Text.c62153b6.js","assets/index.23b4fff1.js","assets/CrudView.f31d3386.css","assets/ant-design.32d39fd0.js","assets/index.f4aebc3d.js"])},{path:"settings",name:"organization-settings",component:()=>n(()=>import("./OrganizationSettings.078af392.js"),["assets/OrganizationSettings.078af392.js","assets/outputWidgets.0277cbbd.js","assets/outputWidgets.ead3c588.css"])},{path:"members",name:"members",component:()=>n(()=>import("./Members.16016601.js"),["assets/Members.16016601.js","assets/outputWidgets.0277cbbd.js","assets/outputWidgets.ead3c588.css","assets/asyncComputed.d55fcd20.js","assets/index.484a88f2.js","assets/index.cf4c23b9.js","assets/record.cc1b684f.js","assets/pubsub.9dc2e6ac.js","assets/member.bfb5d34a.js","assets/CrudView.783d1b27.js","assets/icons.4110f4c3.js","assets/Paragraph.11321d3e.js","assets/Base.b6a7a457.js","assets/FormItem.6e3fad7e.js","assets/hasIn.30cc1d4f.js","assets/Form.c7b890a6.js","assets/Modal.3b9fd86c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13181c55.js","assets/url.044e3d41.js","assets/index.89cecc01.js","assets/Title.e05b5b52.js","assets/Text.c62153b6.js","assets/index.23b4fff1.js","assets/CrudView.f31d3386.css","assets/ant-design.32d39fd0.js","assets/index.f4aebc3d.js"])},{path:"billing",name:"billing",component:()=>n(()=>import("./Billing.c048cbd5.js"),["assets/Billing.c048cbd5.js","assets/outputWidgets.0277cbbd.js","assets/outputWidgets.ead3c588.css","assets/index.484a88f2.js","assets/index.cf4c23b9.js","assets/record.cc1b684f.js","assets/pubsub.9dc2e6ac.js","assets/organization.250d78b8.js","assets/asyncComputed.d55fcd20.js","assets/Title.e05b5b52.js","assets/Base.b6a7a457.js","assets/index.89cecc01.js","assets/index.8bcb9bc5.js","assets/Text.c62153b6.js","assets/Card.7ed4e7f5.js","assets/TabPane.7a361e44.js","assets/hasIn.30cc1d4f.js","assets/FormItem.6e3fad7e.js"])}]},{path:"/projects/:projectId",name:"project",component:()=>n(()=>import("./Project.c041faf6.js"),["assets/Project.c041faf6.js","assets/outputWidgets.0277cbbd.js","assets/outputWidgets.ead3c588.css","assets/BaseLayout.b1286937.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.d55fcd20.js","assets/index.484a88f2.js","assets/index.cf4c23b9.js","assets/record.cc1b684f.js","assets/pubsub.9dc2e6ac.js","assets/project.76a348c2.js","assets/organization.250d78b8.js","assets/Navbar.vue_vue_type_script_setup_true_lang.63a152da.js","assets/logo.084e5d7c.js","assets/Text.c62153b6.js","assets/Base.b6a7a457.js","assets/index.c6cb8e0a.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.6c7bfeed.js","assets/icons.4110f4c3.js","assets/index.23b4fff1.js","assets/Sidebar.055402cc.css","assets/FormItem.6e3fad7e.js","assets/hasIn.30cc1d4f.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>n(()=>import("./Live.a32abbfb.js"),["assets/Live.a32abbfb.js","assets/outputWidgets.0277cbbd.js","assets/outputWidgets.ead3c588.css","assets/asyncComputed.d55fcd20.js","assets/build.f72a9af6.js","assets/index.484a88f2.js","assets/index.cf4c23b9.js","assets/record.cc1b684f.js","assets/pubsub.9dc2e6ac.js","assets/project.76a348c2.js","assets/CrudView.783d1b27.js","assets/icons.4110f4c3.js","assets/Paragraph.11321d3e.js","assets/Base.b6a7a457.js","assets/FormItem.6e3fad7e.js","assets/hasIn.30cc1d4f.js","assets/Form.c7b890a6.js","assets/Modal.3b9fd86c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13181c55.js","assets/url.044e3d41.js","assets/index.89cecc01.js","assets/Title.e05b5b52.js","assets/Text.c62153b6.js","assets/index.23b4fff1.js","assets/CrudView.f31d3386.css","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.765e2cb7.js","assets/CheckCircleFilled.1e59dac4.js","assets/index.15dc65d6.js","assets/Link.d17adb86.js","assets/Live.ead36dc1.css"])},{path:"builds",name:"builds",component:()=>n(()=>import("./Builds.9d3e1eaf.js"),["assets/Builds.9d3e1eaf.js","assets/outputWidgets.0277cbbd.js","assets/outputWidgets.ead3c588.css","assets/asyncComputed.d55fcd20.js","assets/build.f72a9af6.js","assets/index.484a88f2.js","assets/index.cf4c23b9.js","assets/record.cc1b684f.js","assets/pubsub.9dc2e6ac.js","assets/project.76a348c2.js","assets/CrudView.783d1b27.js","assets/icons.4110f4c3.js","assets/Paragraph.11321d3e.js","assets/Base.b6a7a457.js","assets/FormItem.6e3fad7e.js","assets/hasIn.30cc1d4f.js","assets/Form.c7b890a6.js","assets/Modal.3b9fd86c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13181c55.js","assets/url.044e3d41.js","assets/index.89cecc01.js","assets/Title.e05b5b52.js","assets/Text.c62153b6.js","assets/index.23b4fff1.js","assets/CrudView.f31d3386.css","assets/index.a852f8c3.js","assets/datetime.fa7d64e0.js","assets/Builds.eeb5cc41.css"])},{path:"connectors",name:"connectors",component:()=>n(()=>import("./Connectors.90545bb6.js"),["assets/Connectors.90545bb6.js","assets/outputWidgets.0277cbbd.js","assets/outputWidgets.ead3c588.css","assets/index.484a88f2.js","assets/index.cf4c23b9.js","assets/record.cc1b684f.js","assets/pubsub.9dc2e6ac.js","assets/connector.b3702c3c.js","assets/asyncComputed.d55fcd20.js","assets/icons.4110f4c3.js","assets/CrudView.783d1b27.js","assets/Paragraph.11321d3e.js","assets/Base.b6a7a457.js","assets/FormItem.6e3fad7e.js","assets/hasIn.30cc1d4f.js","assets/Form.c7b890a6.js","assets/Modal.3b9fd86c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13181c55.js","assets/url.044e3d41.js","assets/index.89cecc01.js","assets/Title.e05b5b52.js","assets/Text.c62153b6.js","assets/index.23b4fff1.js","assets/CrudView.f31d3386.css"])},{path:"tables",name:"tables",component:()=>n(()=>import("./Tables.9c7c7789.js"),["assets/Tables.9c7c7789.js","assets/outputWidgets.0277cbbd.js","assets/outputWidgets.ead3c588.css","assets/icons.4110f4c3.js","assets/asyncComputed.d55fcd20.js","assets/tables.2206937f.js","assets/record.cc1b684f.js","assets/pubsub.9dc2e6ac.js","assets/index.484a88f2.js","assets/index.cf4c23b9.js","assets/string.dc1de9d7.js","assets/CrudView.783d1b27.js","assets/Paragraph.11321d3e.js","assets/Base.b6a7a457.js","assets/FormItem.6e3fad7e.js","assets/hasIn.30cc1d4f.js","assets/Form.c7b890a6.js","assets/Modal.3b9fd86c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13181c55.js","assets/url.044e3d41.js","assets/index.89cecc01.js","assets/Title.e05b5b52.js","assets/Text.c62153b6.js","assets/index.23b4fff1.js","assets/CrudView.f31d3386.css"])},{path:"sql",name:"sql",component:()=>n(()=>import("./Sql.ef016322.js"),["assets/Sql.ef016322.js","assets/outputWidgets.0277cbbd.js","assets/outputWidgets.ead3c588.css","assets/index.484a88f2.js","assets/index.cf4c23b9.js","assets/record.cc1b684f.js","assets/pubsub.9dc2e6ac.js","assets/project.76a348c2.js","assets/toggleHighContrast.ea2a2817.js","assets/toggleHighContrast.30d77c87.css","assets/index.89cecc01.js","assets/index.15dc65d6.js","assets/FormItem.6e3fad7e.js","assets/hasIn.30cc1d4f.js","assets/Sql.cebb6025.css"])},{path:"api-keys",name:"api-keys",component:()=>n(()=>import("./ApiKeys.b3e83fa5.js"),["assets/ApiKeys.b3e83fa5.js","assets/outputWidgets.0277cbbd.js","assets/outputWidgets.ead3c588.css","assets/icons.4110f4c3.js","assets/asyncComputed.d55fcd20.js","assets/index.484a88f2.js","assets/index.cf4c23b9.js","assets/record.cc1b684f.js","assets/pubsub.9dc2e6ac.js","assets/member.bfb5d34a.js","assets/apiKey.0669629a.js","assets/project.76a348c2.js","assets/CrudView.783d1b27.js","assets/Paragraph.11321d3e.js","assets/Base.b6a7a457.js","assets/FormItem.6e3fad7e.js","assets/hasIn.30cc1d4f.js","assets/Form.c7b890a6.js","assets/Modal.3b9fd86c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13181c55.js","assets/url.044e3d41.js","assets/index.89cecc01.js","assets/Title.e05b5b52.js","assets/Text.c62153b6.js","assets/index.23b4fff1.js","assets/CrudView.f31d3386.css"])},{path:"logs",name:"logs",component:()=>n(()=>import("./Logs.79606986.js"),["assets/Logs.79606986.js","assets/outputWidgets.0277cbbd.js","assets/outputWidgets.ead3c588.css","assets/build.f72a9af6.js","assets/index.484a88f2.js","assets/index.cf4c23b9.js","assets/record.cc1b684f.js","assets/pubsub.9dc2e6ac.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.765e2cb7.js","assets/CheckCircleFilled.1e59dac4.js","assets/datetime.fa7d64e0.js","assets/dayjs.3ae3d9c8.js","assets/index.d7f347b5.js","assets/index.23b4fff1.js","assets/Title.e05b5b52.js","assets/Base.b6a7a457.js","assets/index.15dc65d6.js","assets/FormItem.6e3fad7e.js","assets/hasIn.30cc1d4f.js","assets/Form.c7b890a6.js","assets/CollapsePanel.598784bc.js"])},{path:"legacy-logs",name:"legacy-logs",component:()=>n(()=>import("./LegacyLogs.fa0528b2.js"),["assets/LegacyLogs.fa0528b2.js","assets/outputWidgets.0277cbbd.js","assets/outputWidgets.ead3c588.css","assets/ant-design.32d39fd0.js","assets/index.f4aebc3d.js","assets/Modal.3b9fd86c.js","assets/StarFilled.fad29e50.js","assets/Timeline.2b0a35e3.js","assets/CheckCircleFilled.1e59dac4.js","assets/build.f72a9af6.js","assets/index.484a88f2.js","assets/index.cf4c23b9.js","assets/record.cc1b684f.js","assets/pubsub.9dc2e6ac.js","assets/asyncComputed.d55fcd20.js","assets/Title.e05b5b52.js","assets/Base.b6a7a457.js","assets/index.15dc65d6.js","assets/FormItem.6e3fad7e.js","assets/hasIn.30cc1d4f.js","assets/dayjs.3ae3d9c8.js","assets/index.d7f347b5.js","assets/index.23b4fff1.js","assets/Form.c7b890a6.js","assets/LegacyLogs.752e315d.css"])},{path:"settings",name:"project-settings",component:()=>n(()=>import("./ProjectSettings.80804c13.js"),["assets/ProjectSettings.80804c13.js","assets/asyncComputed.d55fcd20.js","assets/outputWidgets.0277cbbd.js","assets/outputWidgets.ead3c588.css","assets/index.484a88f2.js","assets/index.cf4c23b9.js","assets/record.cc1b684f.js","assets/pubsub.9dc2e6ac.js","assets/project.76a348c2.js","assets/Title.e05b5b52.js","assets/Base.b6a7a457.js","assets/Paragraph.11321d3e.js","assets/Text.c62153b6.js","assets/FormItem.6e3fad7e.js","assets/hasIn.30cc1d4f.js","assets/Form.c7b890a6.js"])},{path:"env-vars",name:"env-vars",component:()=>n(()=>import("./EnvVars.c2b8bbed.js"),["assets/EnvVars.c2b8bbed.js","assets/outputWidgets.0277cbbd.js","assets/outputWidgets.ead3c588.css","assets/asyncComputed.d55fcd20.js","assets/index.484a88f2.js","assets/index.cf4c23b9.js","assets/record.cc1b684f.js","assets/pubsub.9dc2e6ac.js","assets/icons.4110f4c3.js","assets/CrudView.783d1b27.js","assets/Paragraph.11321d3e.js","assets/Base.b6a7a457.js","assets/FormItem.6e3fad7e.js","assets/hasIn.30cc1d4f.js","assets/Form.c7b890a6.js","assets/Modal.3b9fd86c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13181c55.js","assets/url.044e3d41.js","assets/index.89cecc01.js","assets/Title.e05b5b52.js","assets/Text.c62153b6.js","assets/index.23b4fff1.js","assets/CrudView.f31d3386.css"])},{path:"files",name:"files",component:()=>n(()=>import("./Files.89f5d4b9.js"),["assets/Files.89f5d4b9.js","assets/outputWidgets.0277cbbd.js","assets/outputWidgets.ead3c588.css","assets/index.484a88f2.js","assets/index.cf4c23b9.js","assets/record.cc1b684f.js","assets/pubsub.9dc2e6ac.js","assets/asyncComputed.d55fcd20.js","assets/ant-design.32d39fd0.js","assets/index.f4aebc3d.js","assets/Modal.3b9fd86c.js","assets/popupNotifcation.d23f77c4.js","assets/DownloadOutlined.c29e0df6.js","assets/Title.e05b5b52.js","assets/Base.b6a7a457.js","assets/Paragraph.11321d3e.js","assets/Card.7ed4e7f5.js","assets/TabPane.7a361e44.js","assets/hasIn.30cc1d4f.js","assets/FormItem.6e3fad7e.js","assets/Files.fefbf3f0.css"])},{path:"users",name:"users",component:()=>n(()=>import("./Users.94b87e1d.js"),["assets/Users.94b87e1d.js","assets/outputWidgets.0277cbbd.js","assets/outputWidgets.ead3c588.css","assets/icons.4110f4c3.js","assets/asyncComputed.d55fcd20.js","assets/contracts.generated.94cf600a.js","assets/index.cf4c23b9.js","assets/FormItem.6e3fad7e.js","assets/hasIn.30cc1d4f.js","assets/Form.c7b890a6.js","assets/index.ec8ca449.js","assets/isNumeric.75337b1e.js","assets/index.484a88f2.js","assets/record.cc1b684f.js","assets/pubsub.9dc2e6ac.js","assets/CrudView.783d1b27.js","assets/Paragraph.11321d3e.js","assets/Base.b6a7a457.js","assets/Modal.3b9fd86c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.13181c55.js","assets/url.044e3d41.js","assets/index.89cecc01.js","assets/Title.e05b5b52.js","assets/Text.c62153b6.js","assets/index.23b4fff1.js","assets/CrudView.f31d3386.css","assets/popupNotifcation.d23f77c4.js"])}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>n(()=>import("./TableEditor.87f40967.js"),["assets/TableEditor.87f40967.js","assets/outputWidgets.0277cbbd.js","assets/outputWidgets.ead3c588.css","assets/tables.2206937f.js","assets/record.cc1b684f.js","assets/pubsub.9dc2e6ac.js","assets/index.484a88f2.js","assets/index.cf4c23b9.js","assets/string.dc1de9d7.js","assets/BaseLayout.b1286937.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.d55fcd20.js","assets/popupNotifcation.d23f77c4.js","assets/index.8bcb9bc5.js","assets/Form.c7b890a6.js","assets/FormItem.6e3fad7e.js","assets/hasIn.30cc1d4f.js","assets/index.ec8ca449.js","assets/isNumeric.75337b1e.js","assets/project.76a348c2.js","assets/organization.250d78b8.js","assets/icons.4110f4c3.js","assets/index.5c640ac3.js","assets/CircularLoading.90f9b4f8.js","assets/CircularLoading.f81b57b4.css","assets/TabPane.7a361e44.js","assets/index.c6cb8e0a.js","assets/Base.b6a7a457.js","assets/TableEditor.1138d18e.css"])},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>n(()=>import("./ConnectorEditor.4319ef25.js"),["assets/ConnectorEditor.4319ef25.js","assets/outputWidgets.0277cbbd.js","assets/outputWidgets.ead3c588.css","assets/BaseLayout.b1286937.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.d55fcd20.js","assets/index.484a88f2.js","assets/index.cf4c23b9.js","assets/record.cc1b684f.js","assets/pubsub.9dc2e6ac.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.01bba574.js","assets/ant-design.32d39fd0.js","assets/index.f4aebc3d.js","assets/Modal.3b9fd86c.js","assets/Base.b6a7a457.js","assets/Link.d17adb86.js","assets/SaveButton.13ece1cb.css","assets/project.76a348c2.js","assets/connector.b3702c3c.js","assets/organization.250d78b8.js","assets/TabPane.7a361e44.js","assets/hasIn.30cc1d4f.js","assets/index.c6cb8e0a.js","assets/Form.c7b890a6.js","assets/FormItem.6e3fad7e.js","assets/index.8bcb9bc5.js","assets/ConnectorEditor.77a62f6e.css"])}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});w.beforeEach(async(o,t)=>{P(o,t);const e=i.getAuthor();if(g.trackPageView(e==null?void 0:e.claims.email),!o.meta.allowUnauthenticated&&!e){await w.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}});export{U as A,f as C,J as a,i as b,w as r};
//# sourceMappingURL=router.80da957b.js.map
