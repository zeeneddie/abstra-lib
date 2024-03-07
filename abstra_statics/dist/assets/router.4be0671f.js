var w=Object.defineProperty;var y=(o,t,e)=>t in o?w(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var h=(o,t,e)=>(y(o,typeof t!="symbol"?t+"":t,e),e);import{C as T,R}from"./Form.03917452.js";import{E as g,cS as b,S as _,t as v,g as O,h as P,_ as a,i as I}from"./outputWidgets.76902441.js";import{p as C}from"./popupNotifcation.20547cc9.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="0eff8b5b-1f76-412e-966e-3fce36c4768a",o._sentryDebugIdIdentifier="sentry-dbid-0eff8b5b-1f76-412e-966e-3fce36c4768a")}catch{}})();const $=g(T),z=g(R);class A{static async trackSession(t){const e=Object.fromEntries(document.cookie.split("; ").map(s=>s.split(/=(.*)/s).map(decodeURIComponent))),n=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search)),previousSessionId:n,email:t})})}static async trackPageView(t){const e=Object.fromEntries(document.cookie.split("; ").map(s=>s.split(/=(.*)/s).map(decodeURIComponent))),n=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/hackerforms/browser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({previousSessionId:n,author_email:t,type:"PageView",payload:{referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search))}})})}}const L=()=>window.location.host.includes(".abstra.io"),D={"cloud-api":"/api/cloud-api"},V={"cloud-api":"https://cloud-api.abstra.cloud"},j=o=>{const t="VITE_"+b.toUpper(b.snakeCase(o)),e={VITE_SENTRY_RELEASE:"ddb5e107badb12a557bf5508bffb8bc3c0665c89",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(L()?D[o]:V[o])},p={cloudApi:j("cloud-api")};class l extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new l(e,t.status)}}class E{static async get(t,e){const n=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,u])=>u!=null)),s=Object.keys(n).length>0?`?${new URLSearchParams(n).toString()}`:"",r=await fetch(`${p.cloudApi}/console/${t}${s}`,{headers:{...i.headers}});if(r.status===403){C("You are not authorized to access this resource","Click here to go back to the home page.",()=>{window.location.href="/"});return}const c=await r.text();return c?JSON.parse(c):null}static async getBlob(t){return await(await fetch(`${p.cloudApi}/console/${t}`,{headers:{...i.headers}})).blob()}static async post(t,e,n){const s=!!(n!=null&&n["Content-Type"])&&n["Content-Type"]!=="application/json",r=await fetch(`${p.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...i.headers,...n},body:s?e:JSON.stringify(e)});if(!r.ok)throw await l.fromResponse(r);const c=await r.text();return c?JSON.parse(c):null}static async patch(t,e){const n=await fetch(`${p.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...i.headers},body:JSON.stringify(e)});if(!n.ok)throw await l.fromResponse(n);const s=await n.text();return s?JSON.parse(s):null}static async delete(t){const e=await fetch(`${p.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...i.headers}});if(!e.ok)throw await l.fromResponse(e)}}const m=class{async authenticate(t){try{return await E.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const n=await E.post("authn/verify",{email:t,token:e});if(!(n&&"jwt"in n))throw new Error("Invalid token");return this.saveJWT(n.jwt),A.trackSession(t),this.getAuthor()}saveJWT(t){_.set(m.key,t)}getJWT(){return _.get(m.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=v(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){_.remove(m.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let d=m;h(d,"key","abstracloud:auth:jwt");const i=new d,f=O({history:P("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>a(()=>import("./WidgetPreview.4cfe03e5.js"),["assets/WidgetPreview.4cfe03e5.js","assets/outputWidgets.76902441.js","assets/outputWidgets.37c4b859.css","assets/Steps.6d5d279d.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.2487b996.js","assets/WidgetsFrame.13b291ee.css","assets/WidgetPreview.1f0f871d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>a(()=>import("./Login.cc35e89b.js"),["assets/Login.cc35e89b.js","assets/outputWidgets.76902441.js","assets/outputWidgets.37c4b859.css","assets/icons.33aed02e.js","assets/CircularLoading.15f05016.js","assets/CircularLoading.f81b57b4.css","assets/WidgetsFrame.2487b996.js","assets/WidgetsFrame.13b291ee.css","assets/Form.03917452.js","assets/hasIn.6e9d6fff.js","assets/popupNotifcation.20547cc9.js","assets/Login.4672e6e4.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>a(()=>import("./ReturnApiKey.f2674bd7.js"),["assets/ReturnApiKey.f2674bd7.js","assets/outputWidgets.76902441.js","assets/outputWidgets.37c4b859.css","assets/index.4c49ddde.js","assets/index.cf4c23b9.js","assets/record.743c54d7.js","assets/pubsub.98730cd9.js","assets/apiKey.19c3284a.js","assets/project.67d5ad6e.js","assets/organization.a900b3c0.js","assets/asyncComputed.d847e2fc.js","assets/Title.add74044.js","assets/Base.5930d3e1.js","assets/Typography.25fe7416.js","assets/Form.03917452.js","assets/hasIn.6e9d6fff.js","assets/Paragraph.790dd5ff.js","assets/Text.229395cc.js","assets/index.c81d1ddf.js","assets/Modal.8c54b442.js","assets/popupNotifcation.20547cc9.js","assets/ReturnApiKey.909cd622.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>a(()=>import("./Organizations.3bc05e29.js"),["assets/Organizations.3bc05e29.js","assets/outputWidgets.76902441.js","assets/outputWidgets.37c4b859.css","assets/icons.33aed02e.js","assets/asyncComputed.d847e2fc.js","assets/index.4c49ddde.js","assets/index.cf4c23b9.js","assets/record.743c54d7.js","assets/pubsub.98730cd9.js","assets/organization.a900b3c0.js","assets/Navbar.vue_vue_type_script_setup_true_lang.19fb930f.js","assets/logo.084e5d7c.js","assets/Text.229395cc.js","assets/Base.5930d3e1.js","assets/Typography.25fe7416.js","assets/index.c801983a.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.f4a98ea3.css","assets/CrudView.fcce827d.js","assets/Paragraph.790dd5ff.js","assets/Form.03917452.js","assets/hasIn.6e9d6fff.js","assets/Modal.8c54b442.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a2162042.js","assets/url.1818ad15.js","assets/index.25c8cdcb.js","assets/Title.add74044.js","assets/index.0d679f5f.js","assets/CrudView.66515e1d.css","assets/BaseLayout.6a53f392.js","assets/BaseLayout.2a9791da.css","assets/ant-design.e7179aa7.js","assets/index.ec3bdec0.js","assets/popupNotifcation.20547cc9.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>a(()=>import("./Organization.b00fc59e.js"),["assets/Organization.b00fc59e.js","assets/Sidebar.c39c1f63.js","assets/outputWidgets.76902441.js","assets/outputWidgets.37c4b859.css","assets/icons.33aed02e.js","assets/index.0d679f5f.js","assets/Sidebar.055402cc.css","assets/Navbar.vue_vue_type_script_setup_true_lang.19fb930f.js","assets/logo.084e5d7c.js","assets/asyncComputed.d847e2fc.js","assets/Text.229395cc.js","assets/Base.5930d3e1.js","assets/Typography.25fe7416.js","assets/index.c801983a.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.f4a98ea3.css","assets/index.4c49ddde.js","assets/index.cf4c23b9.js","assets/record.743c54d7.js","assets/pubsub.98730cd9.js","assets/organization.a900b3c0.js","assets/BaseLayout.6a53f392.js","assets/BaseLayout.2a9791da.css","assets/Form.03917452.js","assets/hasIn.6e9d6fff.js","assets/popupNotifcation.20547cc9.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>a(()=>import("./Projects.cf3f732b.js"),["assets/Projects.cf3f732b.js","assets/outputWidgets.76902441.js","assets/outputWidgets.37c4b859.css","assets/asyncComputed.d847e2fc.js","assets/ant-design.e7179aa7.js","assets/index.ec3bdec0.js","assets/Modal.8c54b442.js","assets/index.4c49ddde.js","assets/index.cf4c23b9.js","assets/record.743c54d7.js","assets/pubsub.98730cd9.js","assets/project.67d5ad6e.js","assets/organization.a900b3c0.js","assets/CrudView.fcce827d.js","assets/icons.33aed02e.js","assets/Paragraph.790dd5ff.js","assets/Base.5930d3e1.js","assets/Typography.25fe7416.js","assets/Form.03917452.js","assets/hasIn.6e9d6fff.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a2162042.js","assets/url.1818ad15.js","assets/index.25c8cdcb.js","assets/Title.add74044.js","assets/Text.229395cc.js","assets/index.0d679f5f.js","assets/CrudView.66515e1d.css","assets/popupNotifcation.20547cc9.js"]),meta:{title:"Projects - Abstra Console"}},{path:"settings",name:"organization-settings",component:()=>a(()=>import("./OrganizationSettings.cf96c9b2.js"),["assets/OrganizationSettings.cf96c9b2.js","assets/outputWidgets.76902441.js","assets/outputWidgets.37c4b859.css"]),meta:{title:"Organization Settings - Abstra Console"}},{path:"editors",name:"editors",component:()=>a(()=>import("./Editors.5ff9f3d6.js"),["assets/Editors.5ff9f3d6.js","assets/outputWidgets.76902441.js","assets/outputWidgets.37c4b859.css","assets/asyncComputed.d847e2fc.js","assets/index.4c49ddde.js","assets/index.cf4c23b9.js","assets/record.743c54d7.js","assets/pubsub.98730cd9.js","assets/member.ee834c82.js","assets/CrudView.fcce827d.js","assets/icons.33aed02e.js","assets/Paragraph.790dd5ff.js","assets/Base.5930d3e1.js","assets/Typography.25fe7416.js","assets/Form.03917452.js","assets/hasIn.6e9d6fff.js","assets/Modal.8c54b442.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a2162042.js","assets/url.1818ad15.js","assets/index.25c8cdcb.js","assets/Title.add74044.js","assets/Text.229395cc.js","assets/index.0d679f5f.js","assets/CrudView.66515e1d.css","assets/ant-design.e7179aa7.js","assets/index.ec3bdec0.js","assets/popupNotifcation.20547cc9.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>a(()=>import("./Billing.eb09f89d.js"),["assets/Billing.eb09f89d.js","assets/outputWidgets.76902441.js","assets/outputWidgets.37c4b859.css","assets/index.4c49ddde.js","assets/index.cf4c23b9.js","assets/record.743c54d7.js","assets/pubsub.98730cd9.js","assets/organization.a900b3c0.js","assets/asyncComputed.d847e2fc.js","assets/Title.add74044.js","assets/Base.5930d3e1.js","assets/Typography.25fe7416.js","assets/index.25c8cdcb.js","assets/index.66687528.js","assets/Text.229395cc.js","assets/Card.fc51bbda.js","assets/TabPane.90e21055.js","assets/hasIn.6e9d6fff.js","assets/Form.03917452.js","assets/popupNotifcation.20547cc9.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>a(()=>import("./Project.17c74d7c.js"),["assets/Project.17c74d7c.js","assets/outputWidgets.76902441.js","assets/outputWidgets.37c4b859.css","assets/BaseLayout.6a53f392.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.d847e2fc.js","assets/index.4c49ddde.js","assets/index.cf4c23b9.js","assets/record.743c54d7.js","assets/pubsub.98730cd9.js","assets/project.67d5ad6e.js","assets/organization.a900b3c0.js","assets/Navbar.vue_vue_type_script_setup_true_lang.19fb930f.js","assets/logo.084e5d7c.js","assets/Text.229395cc.js","assets/Base.5930d3e1.js","assets/Typography.25fe7416.js","assets/index.c801983a.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.c39c1f63.js","assets/icons.33aed02e.js","assets/index.0d679f5f.js","assets/Sidebar.055402cc.css","assets/Form.03917452.js","assets/hasIn.6e9d6fff.js","assets/popupNotifcation.20547cc9.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>a(()=>import("./Live.e8b57453.js"),["assets/Live.e8b57453.js","assets/outputWidgets.76902441.js","assets/outputWidgets.37c4b859.css","assets/asyncComputed.d847e2fc.js","assets/build.73fd3023.js","assets/index.4c49ddde.js","assets/index.cf4c23b9.js","assets/record.743c54d7.js","assets/pubsub.98730cd9.js","assets/project.67d5ad6e.js","assets/CrudView.fcce827d.js","assets/icons.33aed02e.js","assets/Paragraph.790dd5ff.js","assets/Base.5930d3e1.js","assets/Typography.25fe7416.js","assets/Form.03917452.js","assets/hasIn.6e9d6fff.js","assets/Modal.8c54b442.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a2162042.js","assets/url.1818ad15.js","assets/index.25c8cdcb.js","assets/Title.add74044.js","assets/Text.229395cc.js","assets/index.0d679f5f.js","assets/CrudView.66515e1d.css","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.b38a055c.js","assets/CheckCircleFilled.7c1f0c50.js","assets/LoadingOutlined.8ee02d54.js","assets/index.c81d1ddf.js","assets/Link.66a25290.js","assets/popupNotifcation.20547cc9.js","assets/Live.ead36dc1.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>a(()=>import("./Builds.aa724e73.js"),["assets/Builds.aa724e73.js","assets/outputWidgets.76902441.js","assets/outputWidgets.37c4b859.css","assets/asyncComputed.d847e2fc.js","assets/build.73fd3023.js","assets/index.4c49ddde.js","assets/index.cf4c23b9.js","assets/record.743c54d7.js","assets/pubsub.98730cd9.js","assets/project.67d5ad6e.js","assets/CrudView.fcce827d.js","assets/icons.33aed02e.js","assets/Paragraph.790dd5ff.js","assets/Base.5930d3e1.js","assets/Typography.25fe7416.js","assets/Form.03917452.js","assets/hasIn.6e9d6fff.js","assets/Modal.8c54b442.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a2162042.js","assets/url.1818ad15.js","assets/index.25c8cdcb.js","assets/Title.add74044.js","assets/Text.229395cc.js","assets/index.0d679f5f.js","assets/CrudView.66515e1d.css","assets/index.6ae60041.js","assets/datetime.f21e1be7.js","assets/popupNotifcation.20547cc9.js","assets/Builds.e8faf4b0.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>a(()=>import("./Connectors.1106f6c3.js"),["assets/Connectors.1106f6c3.js","assets/outputWidgets.76902441.js","assets/outputWidgets.37c4b859.css","assets/index.4c49ddde.js","assets/index.cf4c23b9.js","assets/record.743c54d7.js","assets/pubsub.98730cd9.js","assets/connector.d54549a9.js","assets/asyncComputed.d847e2fc.js","assets/icons.33aed02e.js","assets/CrudView.fcce827d.js","assets/Paragraph.790dd5ff.js","assets/Base.5930d3e1.js","assets/Typography.25fe7416.js","assets/Form.03917452.js","assets/hasIn.6e9d6fff.js","assets/Modal.8c54b442.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a2162042.js","assets/url.1818ad15.js","assets/index.25c8cdcb.js","assets/Title.add74044.js","assets/Text.229395cc.js","assets/index.0d679f5f.js","assets/CrudView.66515e1d.css","assets/popupNotifcation.20547cc9.js"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>a(()=>import("./Tables.0ae91b78.js"),["assets/Tables.0ae91b78.js","assets/outputWidgets.76902441.js","assets/outputWidgets.37c4b859.css","assets/icons.33aed02e.js","assets/asyncComputed.d847e2fc.js","assets/tables.51e55981.js","assets/record.743c54d7.js","assets/pubsub.98730cd9.js","assets/index.4c49ddde.js","assets/index.cf4c23b9.js","assets/string.b257cc2d.js","assets/CrudView.fcce827d.js","assets/Paragraph.790dd5ff.js","assets/Base.5930d3e1.js","assets/Typography.25fe7416.js","assets/Form.03917452.js","assets/hasIn.6e9d6fff.js","assets/Modal.8c54b442.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a2162042.js","assets/url.1818ad15.js","assets/index.25c8cdcb.js","assets/Title.add74044.js","assets/Text.229395cc.js","assets/index.0d679f5f.js","assets/CrudView.66515e1d.css","assets/popupNotifcation.20547cc9.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>a(()=>import("./Sql.2ca6ab3b.js"),["assets/Sql.2ca6ab3b.js","assets/outputWidgets.76902441.js","assets/outputWidgets.37c4b859.css","assets/index.4c49ddde.js","assets/index.cf4c23b9.js","assets/record.743c54d7.js","assets/pubsub.98730cd9.js","assets/project.67d5ad6e.js","assets/toggleHighContrast.517bf3cb.js","assets/toggleHighContrast.30d77c87.css","assets/index.25c8cdcb.js","assets/index.c81d1ddf.js","assets/Form.03917452.js","assets/hasIn.6e9d6fff.js","assets/popupNotifcation.20547cc9.js","assets/Sql.3405ff47.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>a(()=>import("./ApiKeys.07c987e1.js"),["assets/ApiKeys.07c987e1.js","assets/outputWidgets.76902441.js","assets/outputWidgets.37c4b859.css","assets/icons.33aed02e.js","assets/asyncComputed.d847e2fc.js","assets/index.4c49ddde.js","assets/index.cf4c23b9.js","assets/record.743c54d7.js","assets/pubsub.98730cd9.js","assets/member.ee834c82.js","assets/apiKey.19c3284a.js","assets/project.67d5ad6e.js","assets/CrudView.fcce827d.js","assets/Paragraph.790dd5ff.js","assets/Base.5930d3e1.js","assets/Typography.25fe7416.js","assets/Form.03917452.js","assets/hasIn.6e9d6fff.js","assets/Modal.8c54b442.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a2162042.js","assets/url.1818ad15.js","assets/index.25c8cdcb.js","assets/Title.add74044.js","assets/Text.229395cc.js","assets/index.0d679f5f.js","assets/CrudView.66515e1d.css","assets/popupNotifcation.20547cc9.js"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.1fcf71bd.js"),["assets/Logs.1fcf71bd.js","assets/outputWidgets.76902441.js","assets/outputWidgets.37c4b859.css","assets/build.73fd3023.js","assets/index.4c49ddde.js","assets/index.cf4c23b9.js","assets/record.743c54d7.js","assets/pubsub.98730cd9.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.b38a055c.js","assets/CheckCircleFilled.7c1f0c50.js","assets/LoadingOutlined.8ee02d54.js","assets/datetime.f21e1be7.js","assets/dayjs.db9d0c8f.js","assets/index.47e2c204.js","assets/index.0d679f5f.js","assets/Title.add74044.js","assets/Base.5930d3e1.js","assets/Typography.25fe7416.js","assets/index.c81d1ddf.js","assets/Form.03917452.js","assets/hasIn.6e9d6fff.js","assets/CollapsePanel.4de38f90.js","assets/popupNotifcation.20547cc9.js"]),meta:{title:"Logs - Abstra Console"}},{path:"legacy-logs",name:"legacy-logs",component:()=>a(()=>import("./LegacyLogs.9f8b1d86.js"),["assets/LegacyLogs.9f8b1d86.js","assets/outputWidgets.76902441.js","assets/outputWidgets.37c4b859.css","assets/ant-design.e7179aa7.js","assets/index.ec3bdec0.js","assets/Modal.8c54b442.js","assets/StarFilled.fad29e50.js","assets/Timeline.c31b38df.js","assets/CheckCircleFilled.7c1f0c50.js","assets/build.73fd3023.js","assets/index.4c49ddde.js","assets/index.cf4c23b9.js","assets/record.743c54d7.js","assets/pubsub.98730cd9.js","assets/asyncComputed.d847e2fc.js","assets/Title.add74044.js","assets/Base.5930d3e1.js","assets/Typography.25fe7416.js","assets/index.c81d1ddf.js","assets/Form.03917452.js","assets/hasIn.6e9d6fff.js","assets/dayjs.db9d0c8f.js","assets/index.47e2c204.js","assets/index.0d679f5f.js","assets/popupNotifcation.20547cc9.js","assets/LegacyLogs.752e315d.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>a(()=>import("./ProjectSettings.260441c6.js"),["assets/ProjectSettings.260441c6.js","assets/asyncComputed.d847e2fc.js","assets/outputWidgets.76902441.js","assets/outputWidgets.37c4b859.css","assets/index.4c49ddde.js","assets/index.cf4c23b9.js","assets/record.743c54d7.js","assets/pubsub.98730cd9.js","assets/project.67d5ad6e.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.0e5b4a2a.js","assets/Title.add74044.js","assets/Base.5930d3e1.js","assets/Typography.25fe7416.js","assets/Paragraph.790dd5ff.js","assets/Text.229395cc.js","assets/Form.03917452.js","assets/hasIn.6e9d6fff.js","assets/popupNotifcation.20547cc9.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVars.bbf1c3d6.js"),["assets/EnvVars.bbf1c3d6.js","assets/outputWidgets.76902441.js","assets/outputWidgets.37c4b859.css","assets/index.4c49ddde.js","assets/index.cf4c23b9.js","assets/record.743c54d7.js","assets/pubsub.98730cd9.js","assets/icons.33aed02e.js","assets/asyncComputed.d847e2fc.js","assets/CrudView.fcce827d.js","assets/Paragraph.790dd5ff.js","assets/Base.5930d3e1.js","assets/Typography.25fe7416.js","assets/Form.03917452.js","assets/hasIn.6e9d6fff.js","assets/Modal.8c54b442.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a2162042.js","assets/url.1818ad15.js","assets/index.25c8cdcb.js","assets/Title.add74044.js","assets/Text.229395cc.js","assets/index.0d679f5f.js","assets/CrudView.66515e1d.css","assets/popupNotifcation.20547cc9.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>a(()=>import("./Files.d2598382.js"),["assets/Files.d2598382.js","assets/outputWidgets.76902441.js","assets/outputWidgets.37c4b859.css","assets/popupNotifcation.20547cc9.js","assets/index.4c49ddde.js","assets/index.cf4c23b9.js","assets/record.743c54d7.js","assets/pubsub.98730cd9.js","assets/asyncComputed.d847e2fc.js","assets/ant-design.e7179aa7.js","assets/index.ec3bdec0.js","assets/Modal.8c54b442.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a2162042.js","assets/DownloadOutlined.f0b0e5f7.js","assets/DeleteOutlined.3ca0d91b.js","assets/DeleteOutlined.f8ba9770.js","assets/Title.add74044.js","assets/Base.5930d3e1.js","assets/Typography.25fe7416.js","assets/Paragraph.790dd5ff.js","assets/Card.fc51bbda.js","assets/TabPane.90e21055.js","assets/hasIn.6e9d6fff.js","assets/Form.03917452.js","assets/Files.1001d74a.css"]),meta:{title:"Files - Abstra Console"}},{path:"users",name:"users",component:()=>a(()=>import("./Users.7e238588.js"),["assets/Users.7e238588.js","assets/outputWidgets.76902441.js","assets/outputWidgets.37c4b859.css","assets/icons.33aed02e.js","assets/asyncComputed.d847e2fc.js","assets/contracts.generated.b5a73c03.js","assets/index.cf4c23b9.js","assets/Form.03917452.js","assets/hasIn.6e9d6fff.js","assets/index.b48ad267.js","assets/isNumeric.75337b1e.js","assets/popupNotifcation.20547cc9.js","assets/index.4c49ddde.js","assets/record.743c54d7.js","assets/pubsub.98730cd9.js","assets/CrudView.fcce827d.js","assets/Paragraph.790dd5ff.js","assets/Base.5930d3e1.js","assets/Typography.25fe7416.js","assets/Modal.8c54b442.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.a2162042.js","assets/url.1818ad15.js","assets/index.25c8cdcb.js","assets/Title.add74044.js","assets/Text.229395cc.js","assets/index.0d679f5f.js","assets/CrudView.66515e1d.css"]),meta:{title:"Users - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>a(()=>import("./TableEditor.50be7c54.js"),["assets/TableEditor.50be7c54.js","assets/outputWidgets.76902441.js","assets/outputWidgets.37c4b859.css","assets/tables.51e55981.js","assets/record.743c54d7.js","assets/pubsub.98730cd9.js","assets/index.4c49ddde.js","assets/index.cf4c23b9.js","assets/string.b257cc2d.js","assets/BaseLayout.6a53f392.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.d847e2fc.js","assets/popupNotifcation.20547cc9.js","assets/icons.33aed02e.js","assets/project.67d5ad6e.js","assets/index.065402d6.js","assets/index.8527ac27.js","assets/Form.03917452.js","assets/hasIn.6e9d6fff.js","assets/index.fa3f6eeb.js","assets/index.b48ad267.js","assets/isNumeric.75337b1e.js","assets/ant-design.e7179aa7.js","assets/index.ec3bdec0.js","assets/Modal.8c54b442.js","assets/Base.5930d3e1.js","assets/Typography.25fe7416.js","assets/LoadingOutlined.8ee02d54.js","assets/index.25c8cdcb.js","assets/DeleteOutlined.3ca0d91b.js","assets/DeleteOutlined.f8ba9770.js","assets/DownOutlined.e71e826b.js","assets/index.66687528.js","assets/organization.a900b3c0.js","assets/index.c801983a.js","assets/ArrowRightOutlined.08fa31dd.js","assets/TableEditor.a9961944.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>a(()=>import("./ConnectorEditor.798d3989.js"),["assets/ConnectorEditor.798d3989.js","assets/outputWidgets.76902441.js","assets/outputWidgets.37c4b859.css","assets/BaseLayout.6a53f392.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.d847e2fc.js","assets/index.4c49ddde.js","assets/index.cf4c23b9.js","assets/record.743c54d7.js","assets/pubsub.98730cd9.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.65571ae0.js","assets/ant-design.e7179aa7.js","assets/index.ec3bdec0.js","assets/Modal.8c54b442.js","assets/Typography.25fe7416.js","assets/Link.66a25290.js","assets/Base.5930d3e1.js","assets/SaveButton.13ece1cb.css","assets/project.67d5ad6e.js","assets/connector.d54549a9.js","assets/organization.a900b3c0.js","assets/TabPane.90e21055.js","assets/hasIn.6e9d6fff.js","assets/index.c801983a.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Form.03917452.js","assets/index.66687528.js","assets/popupNotifcation.20547cc9.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});f.beforeEach(async(o,t)=>{I(o,t);const e=i.getAuthor();if(A.trackPageView(e==null?void 0:e.claims.email),!o.meta.allowUnauthenticated&&!e){await f.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}});export{$ as A,E as C,z as a,i as b,f as r};
//# sourceMappingURL=router.4be0671f.js.map
