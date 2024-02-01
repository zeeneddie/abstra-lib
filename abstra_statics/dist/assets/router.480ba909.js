var T=Object.defineProperty;var b=(o,t,e)=>t in o?T(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var h=(o,t,e)=>(b(o,typeof t!="symbol"?t+"":t,e),e);import{C as R,R as v}from"./FormItem.a6b24876.js";import{E as y,cT as E,S as l,t as I,g as O,h as A,_ as n,i as P}from"./outputWidgets.a721265b.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="360c909f-4ccb-41d8-9afb-4ca8c401ed47",o._sentryDebugIdIdentifier="sentry-dbid-360c909f-4ccb-41d8-9afb-4ca8c401ed47")}catch{}})();const U=y(R),J=y(v);class g{static async trackSession(t){const e=Object.fromEntries(document.cookie.split("; ").map(r=>r.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search)),previousSessionId:a,email:t})})}static async trackPageView(t){const e=Object.fromEntries(document.cookie.split("; ").map(r=>r.split(/=(.*)/s).map(decodeURIComponent))),a=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/hackerforms/browser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({previousSessionId:a,author_email:t,type:"PageView",payload:{referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search))}})})}}const L=()=>window.location.host.includes(".abstra.io"),D={"cloud-api":"/api/cloud-api"},V={"cloud-api":"https://cloud-api.abstra.cloud"},j=o=>{const t="VITE_"+E.toUpper(E.snakeCase(o)),e={VITE_SENTRY_RELEASE:"d8d4ab80f97cc560bd98a826ad676294e1ed0542",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(L()?D[o]:V[o])},p={cloudApi:j("cloud-api")};class _ extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new _(e,t.status)}}class f{static async get(t,e){const a=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,u])=>u!=null)),r=Object.keys(a).length>0?`?${new URLSearchParams(a).toString()}`:"",s=await fetch(`${p.cloudApi}/console/${t}${r}`,{headers:{...i.headers}});s.status===403&&(window.location.href="/login");const c=await s.text();return c?JSON.parse(c):null}static async getBlob(t){return await(await fetch(`${p.cloudApi}/console/${t}`,{headers:{...i.headers}})).blob()}static async post(t,e,a){const r=!!(a!=null&&a["Content-Type"])&&a["Content-Type"]!=="application/json",s=await fetch(`${p.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...i.headers,...a},body:r?e:JSON.stringify(e)});if(!s.ok)throw await _.fromResponse(s);const c=await s.text();return c?JSON.parse(c):null}static async patch(t,e){const a=await fetch(`${p.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...i.headers},body:JSON.stringify(e)});if(!a.ok)throw await _.fromResponse(a);const r=await a.text();return r?JSON.parse(r):null}static async delete(t){const e=await fetch(`${p.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...i.headers}});if(!e.ok)throw await _.fromResponse(e)}}const d=class{async authenticate(t){try{return await f.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const a=await f.post("authn/verify",{email:t,token:e});if(!(a&&"jwt"in a))throw new Error("Invalid token");return this.saveJWT(a.jwt),g.trackSession(t),this.getAuthor()}saveJWT(t){l.set(d.key,t)}getJWT(){return l.get(d.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=I(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){l.remove(d.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let m=d;h(m,"key","abstracloud:auth:jwt");const i=new m,w=O({history:A("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./WidgetPreview.fc7c3c09.js"),["assets/WidgetPreview.fc7c3c09.js","assets/ActionButton.5cc99c71.js","assets/outputWidgets.a721265b.js","assets/outputWidgets.ead3c588.css","assets/ActionButton.f74e60ec.css","assets/WidgetsFrame.a42f57b5.js","assets/WidgetsFrame.97ae601d.css","assets/WidgetPreview.2be4ed12.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./Login.7e06b65d.js"),["assets/Login.7e06b65d.js","assets/outputWidgets.a721265b.js","assets/outputWidgets.ead3c588.css","assets/icons.d79101d7.js","assets/CircularLoading.a592b6d1.js","assets/CircularLoading.f81b57b4.css","assets/index.ba7200ad.js","assets/index.cf4c23b9.js","assets/record.5b18e499.js","assets/pubsub.7f76ac52.js","assets/member.c5275c14.js","assets/WidgetsFrame.a42f57b5.js","assets/WidgetsFrame.97ae601d.css","assets/FormItem.a6b24876.js","assets/hasIn.447933db.js","assets/Login.6f9ffede.css"])},{path:"/api-key",name:"api-key",component:()=>n(()=>import("./ReturnApiKey.a85faf95.js"),["assets/ReturnApiKey.a85faf95.js","assets/outputWidgets.a721265b.js","assets/outputWidgets.ead3c588.css","assets/index.ba7200ad.js","assets/index.cf4c23b9.js","assets/record.5b18e499.js","assets/pubsub.7f76ac52.js","assets/apiKey.c751c010.js","assets/project.5189079d.js","assets/organization.3d51ef7c.js","assets/asyncComputed.4b877038.js","assets/Title.26e17d48.js","assets/Base.66af83ab.js","assets/FormItem.a6b24876.js","assets/hasIn.447933db.js","assets/Form.e7ef5aca.js","assets/Paragraph.fd8e4b5d.js","assets/Text.42924b87.js","assets/index.a0f5af7a.js","assets/Modal.f58ab193.js","assets/ReturnApiKey.909cd622.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>n(()=>import("./Organizations.7ced2c3c.js"),["assets/Organizations.7ced2c3c.js","assets/outputWidgets.a721265b.js","assets/outputWidgets.ead3c588.css","assets/icons.d79101d7.js","assets/asyncComputed.4b877038.js","assets/index.ba7200ad.js","assets/index.cf4c23b9.js","assets/record.5b18e499.js","assets/pubsub.7f76ac52.js","assets/organization.3d51ef7c.js","assets/Navbar.vue_vue_type_script_setup_true_lang.05a8f28d.js","assets/logo.084e5d7c.js","assets/Text.42924b87.js","assets/Base.66af83ab.js","assets/index.ea642681.js","assets/Navbar.f4a98ea3.css","assets/CrudView.d1389e77.js","assets/Paragraph.fd8e4b5d.js","assets/FormItem.a6b24876.js","assets/hasIn.447933db.js","assets/Form.e7ef5aca.js","assets/Modal.f58ab193.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2dc1df5b.js","assets/url.4270c510.js","assets/index.bfbe8ecf.js","assets/Title.26e17d48.js","assets/index.5f2f9116.js","assets/CrudView.f31d3386.css","assets/BaseLayout.20c1918d.js","assets/BaseLayout.881bfa61.css","assets/ant-design.89b608e4.js","assets/index.b003bef6.js"])},{path:"/organizations/:organizationId",name:"organization",component:()=>n(()=>import("./Organization.6a11acaa.js"),["assets/Organization.6a11acaa.js","assets/Sidebar.a01cb419.js","assets/outputWidgets.a721265b.js","assets/outputWidgets.ead3c588.css","assets/icons.d79101d7.js","assets/index.5f2f9116.js","assets/Sidebar.055402cc.css","assets/Navbar.vue_vue_type_script_setup_true_lang.05a8f28d.js","assets/logo.084e5d7c.js","assets/asyncComputed.4b877038.js","assets/Text.42924b87.js","assets/Base.66af83ab.js","assets/index.ea642681.js","assets/Navbar.f4a98ea3.css","assets/index.ba7200ad.js","assets/index.cf4c23b9.js","assets/record.5b18e499.js","assets/pubsub.7f76ac52.js","assets/organization.3d51ef7c.js","assets/BaseLayout.20c1918d.js","assets/BaseLayout.881bfa61.css","assets/FormItem.a6b24876.js","assets/hasIn.447933db.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>n(()=>import("./Projects.8852e3e6.js"),["assets/Projects.8852e3e6.js","assets/outputWidgets.a721265b.js","assets/outputWidgets.ead3c588.css","assets/icons.d79101d7.js","assets/asyncComputed.4b877038.js","assets/index.ba7200ad.js","assets/index.cf4c23b9.js","assets/record.5b18e499.js","assets/pubsub.7f76ac52.js","assets/project.5189079d.js","assets/organization.3d51ef7c.js","assets/CrudView.d1389e77.js","assets/Paragraph.fd8e4b5d.js","assets/Base.66af83ab.js","assets/FormItem.a6b24876.js","assets/hasIn.447933db.js","assets/Form.e7ef5aca.js","assets/Modal.f58ab193.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2dc1df5b.js","assets/url.4270c510.js","assets/index.bfbe8ecf.js","assets/Title.26e17d48.js","assets/Text.42924b87.js","assets/index.5f2f9116.js","assets/CrudView.f31d3386.css","assets/ant-design.89b608e4.js","assets/index.b003bef6.js"])},{path:"settings",name:"organization-settings",component:()=>n(()=>import("./OrganizationSettings.b2cdbeac.js"),["assets/OrganizationSettings.b2cdbeac.js","assets/outputWidgets.a721265b.js","assets/outputWidgets.ead3c588.css"])},{path:"members",name:"members",component:()=>n(()=>import("./Members.75175bd7.js"),["assets/Members.75175bd7.js","assets/outputWidgets.a721265b.js","assets/outputWidgets.ead3c588.css","assets/asyncComputed.4b877038.js","assets/index.ba7200ad.js","assets/index.cf4c23b9.js","assets/record.5b18e499.js","assets/pubsub.7f76ac52.js","assets/member.c5275c14.js","assets/CrudView.d1389e77.js","assets/icons.d79101d7.js","assets/Paragraph.fd8e4b5d.js","assets/Base.66af83ab.js","assets/FormItem.a6b24876.js","assets/hasIn.447933db.js","assets/Form.e7ef5aca.js","assets/Modal.f58ab193.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2dc1df5b.js","assets/url.4270c510.js","assets/index.bfbe8ecf.js","assets/Title.26e17d48.js","assets/Text.42924b87.js","assets/index.5f2f9116.js","assets/CrudView.f31d3386.css","assets/ant-design.89b608e4.js","assets/index.b003bef6.js"])},{path:"billing",name:"billing",component:()=>n(()=>import("./Billing.3145bab6.js"),["assets/Billing.3145bab6.js","assets/outputWidgets.a721265b.js","assets/outputWidgets.ead3c588.css","assets/index.ba7200ad.js","assets/index.cf4c23b9.js","assets/record.5b18e499.js","assets/pubsub.7f76ac52.js","assets/organization.3d51ef7c.js","assets/asyncComputed.4b877038.js","assets/Title.26e17d48.js","assets/Base.66af83ab.js","assets/index.bfbe8ecf.js","assets/index.b4339053.js","assets/Text.42924b87.js","assets/Card.77627c2a.js","assets/TabPane.2216c720.js","assets/hasIn.447933db.js","assets/FormItem.a6b24876.js"])}]},{path:"/projects/:projectId",name:"project",component:()=>n(()=>import("./Project.2f5f8345.js"),["assets/Project.2f5f8345.js","assets/outputWidgets.a721265b.js","assets/outputWidgets.ead3c588.css","assets/BaseLayout.20c1918d.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.4b877038.js","assets/index.ba7200ad.js","assets/index.cf4c23b9.js","assets/record.5b18e499.js","assets/pubsub.7f76ac52.js","assets/project.5189079d.js","assets/organization.3d51ef7c.js","assets/Navbar.vue_vue_type_script_setup_true_lang.05a8f28d.js","assets/logo.084e5d7c.js","assets/Text.42924b87.js","assets/Base.66af83ab.js","assets/index.ea642681.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.a01cb419.js","assets/icons.d79101d7.js","assets/index.5f2f9116.js","assets/Sidebar.055402cc.css","assets/FormItem.a6b24876.js","assets/hasIn.447933db.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>n(()=>import("./Live.9559753f.js"),["assets/Live.9559753f.js","assets/outputWidgets.a721265b.js","assets/outputWidgets.ead3c588.css","assets/asyncComputed.4b877038.js","assets/build.4c95d1f7.js","assets/index.ba7200ad.js","assets/index.cf4c23b9.js","assets/record.5b18e499.js","assets/pubsub.7f76ac52.js","assets/project.5189079d.js","assets/CrudView.d1389e77.js","assets/icons.d79101d7.js","assets/Paragraph.fd8e4b5d.js","assets/Base.66af83ab.js","assets/FormItem.a6b24876.js","assets/hasIn.447933db.js","assets/Form.e7ef5aca.js","assets/Modal.f58ab193.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2dc1df5b.js","assets/url.4270c510.js","assets/index.bfbe8ecf.js","assets/Title.26e17d48.js","assets/Text.42924b87.js","assets/index.5f2f9116.js","assets/CrudView.f31d3386.css","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.b8e020e6.js","assets/CheckCircleFilled.d012c884.js","assets/index.a0f5af7a.js","assets/Link.69598d73.js","assets/Live.ead36dc1.css"])},{path:"builds",name:"builds",component:()=>n(()=>import("./Builds.071d0f12.js"),["assets/Builds.071d0f12.js","assets/outputWidgets.a721265b.js","assets/outputWidgets.ead3c588.css","assets/asyncComputed.4b877038.js","assets/build.4c95d1f7.js","assets/index.ba7200ad.js","assets/index.cf4c23b9.js","assets/record.5b18e499.js","assets/pubsub.7f76ac52.js","assets/project.5189079d.js","assets/CrudView.d1389e77.js","assets/icons.d79101d7.js","assets/Paragraph.fd8e4b5d.js","assets/Base.66af83ab.js","assets/FormItem.a6b24876.js","assets/hasIn.447933db.js","assets/Form.e7ef5aca.js","assets/Modal.f58ab193.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2dc1df5b.js","assets/url.4270c510.js","assets/index.bfbe8ecf.js","assets/Title.26e17d48.js","assets/Text.42924b87.js","assets/index.5f2f9116.js","assets/CrudView.f31d3386.css","assets/index.a7d6b424.js","assets/datetime.a8b55a13.js","assets/Builds.eeb5cc41.css"])},{path:"connectors",name:"connectors",component:()=>n(()=>import("./Connectors.99c410c2.js"),["assets/Connectors.99c410c2.js","assets/outputWidgets.a721265b.js","assets/outputWidgets.ead3c588.css","assets/index.ba7200ad.js","assets/index.cf4c23b9.js","assets/record.5b18e499.js","assets/pubsub.7f76ac52.js","assets/connector.24a020b1.js","assets/asyncComputed.4b877038.js","assets/icons.d79101d7.js","assets/CrudView.d1389e77.js","assets/Paragraph.fd8e4b5d.js","assets/Base.66af83ab.js","assets/FormItem.a6b24876.js","assets/hasIn.447933db.js","assets/Form.e7ef5aca.js","assets/Modal.f58ab193.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2dc1df5b.js","assets/url.4270c510.js","assets/index.bfbe8ecf.js","assets/Title.26e17d48.js","assets/Text.42924b87.js","assets/index.5f2f9116.js","assets/CrudView.f31d3386.css"])},{path:"tables",name:"tables",component:()=>n(()=>import("./Tables.de9c1cb1.js"),["assets/Tables.de9c1cb1.js","assets/outputWidgets.a721265b.js","assets/outputWidgets.ead3c588.css","assets/icons.d79101d7.js","assets/asyncComputed.4b877038.js","assets/tables.7d3c8444.js","assets/record.5b18e499.js","assets/pubsub.7f76ac52.js","assets/index.ba7200ad.js","assets/index.cf4c23b9.js","assets/string.fe731fb4.js","assets/CrudView.d1389e77.js","assets/Paragraph.fd8e4b5d.js","assets/Base.66af83ab.js","assets/FormItem.a6b24876.js","assets/hasIn.447933db.js","assets/Form.e7ef5aca.js","assets/Modal.f58ab193.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2dc1df5b.js","assets/url.4270c510.js","assets/index.bfbe8ecf.js","assets/Title.26e17d48.js","assets/Text.42924b87.js","assets/index.5f2f9116.js","assets/CrudView.f31d3386.css"])},{path:"sql",name:"sql",component:()=>n(()=>import("./Sql.6ada9369.js"),["assets/Sql.6ada9369.js","assets/outputWidgets.a721265b.js","assets/outputWidgets.ead3c588.css","assets/index.ba7200ad.js","assets/index.cf4c23b9.js","assets/record.5b18e499.js","assets/pubsub.7f76ac52.js","assets/project.5189079d.js","assets/toggleHighContrast.55b90c48.js","assets/toggleHighContrast.30d77c87.css","assets/index.bfbe8ecf.js","assets/index.a0f5af7a.js","assets/FormItem.a6b24876.js","assets/hasIn.447933db.js","assets/Sql.cebb6025.css"])},{path:"api-keys",name:"api-keys",component:()=>n(()=>import("./ApiKeys.bb4458cf.js"),["assets/ApiKeys.bb4458cf.js","assets/outputWidgets.a721265b.js","assets/outputWidgets.ead3c588.css","assets/icons.d79101d7.js","assets/asyncComputed.4b877038.js","assets/index.ba7200ad.js","assets/index.cf4c23b9.js","assets/record.5b18e499.js","assets/pubsub.7f76ac52.js","assets/member.c5275c14.js","assets/apiKey.c751c010.js","assets/project.5189079d.js","assets/CrudView.d1389e77.js","assets/Paragraph.fd8e4b5d.js","assets/Base.66af83ab.js","assets/FormItem.a6b24876.js","assets/hasIn.447933db.js","assets/Form.e7ef5aca.js","assets/Modal.f58ab193.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2dc1df5b.js","assets/url.4270c510.js","assets/index.bfbe8ecf.js","assets/Title.26e17d48.js","assets/Text.42924b87.js","assets/index.5f2f9116.js","assets/CrudView.f31d3386.css"])},{path:"logs",name:"logs",component:()=>n(()=>import("./Logs.2a0d9102.js"),["assets/Logs.2a0d9102.js","assets/outputWidgets.a721265b.js","assets/outputWidgets.ead3c588.css","assets/build.4c95d1f7.js","assets/index.ba7200ad.js","assets/index.cf4c23b9.js","assets/record.5b18e499.js","assets/pubsub.7f76ac52.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.b8e020e6.js","assets/CheckCircleFilled.d012c884.js","assets/datetime.a8b55a13.js","assets/dayjs.cbf853c2.js","assets/index.8481c139.js","assets/index.5f2f9116.js","assets/Title.26e17d48.js","assets/Base.66af83ab.js","assets/index.a0f5af7a.js","assets/FormItem.a6b24876.js","assets/hasIn.447933db.js","assets/Form.e7ef5aca.js","assets/CollapsePanel.2971903e.js"])},{path:"legacy-logs",name:"legacy-logs",component:()=>n(()=>import("./LegacyLogs.3fbecef7.js"),["assets/LegacyLogs.3fbecef7.js","assets/outputWidgets.a721265b.js","assets/outputWidgets.ead3c588.css","assets/ant-design.89b608e4.js","assets/index.b003bef6.js","assets/Modal.f58ab193.js","assets/StarFilled.fad29e50.js","assets/Timeline.f166a7e6.js","assets/CheckCircleFilled.d012c884.js","assets/build.4c95d1f7.js","assets/index.ba7200ad.js","assets/index.cf4c23b9.js","assets/record.5b18e499.js","assets/pubsub.7f76ac52.js","assets/asyncComputed.4b877038.js","assets/Title.26e17d48.js","assets/Base.66af83ab.js","assets/index.a0f5af7a.js","assets/FormItem.a6b24876.js","assets/hasIn.447933db.js","assets/dayjs.cbf853c2.js","assets/index.8481c139.js","assets/index.5f2f9116.js","assets/Form.e7ef5aca.js","assets/LegacyLogs.752e315d.css"])},{path:"settings",name:"project-settings",component:()=>n(()=>import("./ProjectSettings.4d297e7e.js"),["assets/ProjectSettings.4d297e7e.js","assets/asyncComputed.4b877038.js","assets/outputWidgets.a721265b.js","assets/outputWidgets.ead3c588.css","assets/index.ba7200ad.js","assets/index.cf4c23b9.js","assets/record.5b18e499.js","assets/pubsub.7f76ac52.js","assets/project.5189079d.js","assets/Title.26e17d48.js","assets/Base.66af83ab.js","assets/Paragraph.fd8e4b5d.js","assets/Text.42924b87.js","assets/FormItem.a6b24876.js","assets/hasIn.447933db.js","assets/Form.e7ef5aca.js"])},{path:"env-vars",name:"env-vars",component:()=>n(()=>import("./EnvVars.b2bb62d2.js"),["assets/EnvVars.b2bb62d2.js","assets/outputWidgets.a721265b.js","assets/outputWidgets.ead3c588.css","assets/asyncComputed.4b877038.js","assets/index.ba7200ad.js","assets/index.cf4c23b9.js","assets/record.5b18e499.js","assets/pubsub.7f76ac52.js","assets/icons.d79101d7.js","assets/CrudView.d1389e77.js","assets/Paragraph.fd8e4b5d.js","assets/Base.66af83ab.js","assets/FormItem.a6b24876.js","assets/hasIn.447933db.js","assets/Form.e7ef5aca.js","assets/Modal.f58ab193.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2dc1df5b.js","assets/url.4270c510.js","assets/index.bfbe8ecf.js","assets/Title.26e17d48.js","assets/Text.42924b87.js","assets/index.5f2f9116.js","assets/CrudView.f31d3386.css"])},{path:"files",name:"files",component:()=>n(()=>import("./Files.4249349f.js"),["assets/Files.4249349f.js","assets/outputWidgets.a721265b.js","assets/outputWidgets.ead3c588.css","assets/index.ba7200ad.js","assets/index.cf4c23b9.js","assets/record.5b18e499.js","assets/pubsub.7f76ac52.js","assets/asyncComputed.4b877038.js","assets/ant-design.89b608e4.js","assets/index.b003bef6.js","assets/Modal.f58ab193.js","assets/popupNotifcation.219bea55.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2dc1df5b.js","assets/DownloadOutlined.c29e0df6.js","assets/Title.26e17d48.js","assets/Base.66af83ab.js","assets/Paragraph.fd8e4b5d.js","assets/Card.77627c2a.js","assets/TabPane.2216c720.js","assets/hasIn.447933db.js","assets/FormItem.a6b24876.js","assets/Files.1001d74a.css"])},{path:"users",name:"users",component:()=>n(()=>import("./Users.884593eb.js"),["assets/Users.884593eb.js","assets/outputWidgets.a721265b.js","assets/outputWidgets.ead3c588.css","assets/icons.d79101d7.js","assets/asyncComputed.4b877038.js","assets/contracts.generated.01ce8949.js","assets/index.cf4c23b9.js","assets/FormItem.a6b24876.js","assets/hasIn.447933db.js","assets/Form.e7ef5aca.js","assets/index.1c2e7b69.js","assets/isNumeric.75337b1e.js","assets/index.ba7200ad.js","assets/record.5b18e499.js","assets/pubsub.7f76ac52.js","assets/CrudView.d1389e77.js","assets/Paragraph.fd8e4b5d.js","assets/Base.66af83ab.js","assets/Modal.f58ab193.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.2dc1df5b.js","assets/url.4270c510.js","assets/index.bfbe8ecf.js","assets/Title.26e17d48.js","assets/Text.42924b87.js","assets/index.5f2f9116.js","assets/CrudView.f31d3386.css","assets/popupNotifcation.219bea55.js"])}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>n(()=>import("./TableEditor.cd5cc071.js"),["assets/TableEditor.cd5cc071.js","assets/outputWidgets.a721265b.js","assets/outputWidgets.ead3c588.css","assets/tables.7d3c8444.js","assets/record.5b18e499.js","assets/pubsub.7f76ac52.js","assets/index.ba7200ad.js","assets/index.cf4c23b9.js","assets/string.fe731fb4.js","assets/BaseLayout.20c1918d.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.4b877038.js","assets/popupNotifcation.219bea55.js","assets/index.b4339053.js","assets/Form.e7ef5aca.js","assets/FormItem.a6b24876.js","assets/hasIn.447933db.js","assets/index.1c2e7b69.js","assets/isNumeric.75337b1e.js","assets/project.5189079d.js","assets/organization.3d51ef7c.js","assets/icons.d79101d7.js","assets/index.3d172569.js","assets/CircularLoading.a592b6d1.js","assets/CircularLoading.f81b57b4.css","assets/TabPane.2216c720.js","assets/index.ea642681.js","assets/Base.66af83ab.js","assets/TableEditor.1138d18e.css"])},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>n(()=>import("./ConnectorEditor.69f885f0.js"),["assets/ConnectorEditor.69f885f0.js","assets/outputWidgets.a721265b.js","assets/outputWidgets.ead3c588.css","assets/BaseLayout.20c1918d.js","assets/BaseLayout.881bfa61.css","assets/asyncComputed.4b877038.js","assets/index.ba7200ad.js","assets/index.cf4c23b9.js","assets/record.5b18e499.js","assets/pubsub.7f76ac52.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.5dc59bb2.js","assets/ant-design.89b608e4.js","assets/index.b003bef6.js","assets/Modal.f58ab193.js","assets/Base.66af83ab.js","assets/Link.69598d73.js","assets/SaveButton.13ece1cb.css","assets/project.5189079d.js","assets/connector.24a020b1.js","assets/organization.3d51ef7c.js","assets/TabPane.2216c720.js","assets/hasIn.447933db.js","assets/index.ea642681.js","assets/Form.e7ef5aca.js","assets/FormItem.a6b24876.js","assets/index.b4339053.js","assets/ConnectorEditor.77a62f6e.css"])}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});w.beforeEach(async(o,t)=>{P(o,t);const e=i.getAuthor();if(g.trackPageView(e==null?void 0:e.claims.email),!o.meta.allowUnauthenticated&&!e){await w.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}});export{U as A,f as C,J as a,i as b,w as r};
//# sourceMappingURL=router.480ba909.js.map
