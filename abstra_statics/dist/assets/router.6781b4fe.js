var T=Object.defineProperty;var R=(o,t,e)=>t in o?T(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var _=(o,t,e)=>(R(o,typeof t!="symbol"?t+"":t,e),e);import{C as I,R as v}from"./Form.725ab820.js";import{E as A,cS as E,S as f,t as O,g as P,h as C,_ as a,i as L}from"./outputWidgets.399def05.js";import{p as D}from"./popupNotifcation.35b231ea.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="e8370455-cb2b-472a-8f8a-f81c7353f3b9",o._sentryDebugIdIdentifier="sentry-dbid-e8370455-cb2b-472a-8f8a-f81c7353f3b9")}catch{}})();const B=A(I),N=A(v);class y{static async trackSession(t){const e=Object.fromEntries(document.cookie.split("; ").map(n=>n.split(/=(.*)/s).map(decodeURIComponent))),s=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search)),previousSessionId:s,email:t})})}static async trackPageView(t){const e=Object.fromEntries(document.cookie.split("; ").map(n=>n.split(/=(.*)/s).map(decodeURIComponent))),s=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/hackerforms/browser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({previousSessionId:s,author_email:t,type:"PageView",payload:{referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search))}})})}}const r=class{static dispatch(t,e,s=0){window.Intercom?window.Intercom(t,e):s<10?setTimeout(()=>r.dispatch(t,e),100):console.error("Intercom not loaded")}static boot(t){r.booted||(r.dispatch("boot",{api_base:"https://api-iam.intercom.io",app_id:"h97k86ks",name:t.claims.email,email:t.claims.email}),r.booted=!0)}static show(){r.dispatch("show")}static hide(){r.dispatch("hide")}static showNewMessage(t){r.dispatch("showNewMessage",t)}};let h=r;_(h,"booted",!1);const V=()=>window.location.host.includes(".abstra.io"),j={"cloud-api":"/api/cloud-api"},S={"cloud-api":"https://cloud-api.abstra.cloud"},k=o=>{const t="VITE_"+E.toUpper(E.snakeCase(o)),e={VITE_SENTRY_RELEASE:"8c74fffa381d7f8f8e6c5383af58295b1fcf7bff",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(V()?j[o]:S[o])},l={cloudApi:k("cloud-api")};class m extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new m(e,t.status)}}class w{static async get(t,e){const s=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,b])=>b!=null)),n=Object.keys(s).length>0?`?${new URLSearchParams(s).toString()}`:"",i=await fetch(`${l.cloudApi}/console/${t}${n}`,{headers:{...c.headers}});if(i.status===403){D("You are not authorized to access this resource","Click here to go back to the home page.",()=>{window.location.href="/"});return}const p=await i.text();return p?JSON.parse(p):null}static async getBlob(t){return await(await fetch(`${l.cloudApi}/console/${t}`,{headers:{...c.headers}})).blob()}static async post(t,e,s){const n=!!(s!=null&&s["Content-Type"])&&s["Content-Type"]!=="application/json",i=await fetch(`${l.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...c.headers,...s},body:n?e:JSON.stringify(e)});if(!i.ok)throw await m.fromResponse(i);const p=await i.text();return p?JSON.parse(p):null}static async patch(t,e){const s=await fetch(`${l.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...c.headers},body:JSON.stringify(e)});if(!s.ok)throw await m.fromResponse(s);const n=await s.text();return n?JSON.parse(n):null}static async delete(t){const e=await fetch(`${l.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...c.headers}});if(!e.ok)throw await m.fromResponse(e)}}const d=class{async authenticate(t){try{return await w.post("authn/authenticate",{email:t}),null}catch(e){return e.message}}async verify(t,e){const s=await w.post("authn/verify",{email:t,token:e});if(!(s&&"jwt"in s))throw new Error("Invalid token");return this.saveJWT(s.jwt),y.trackSession(t),this.getAuthor()}saveJWT(t){f.set(d.key,t)}getJWT(){return f.get(d.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=O(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){f.remove(d.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let u=d;_(u,"key","abstracloud:auth:jwt");const c=new u,g=P({history:C("/"),routes:[{path:"/widget-preview",name:"widget-preview",component:()=>a(()=>import("./WidgetPreview.79544bbd.js"),["assets/WidgetPreview.79544bbd.js","assets/outputWidgets.399def05.js","assets/outputWidgets.a254438e.css","assets/Steps.7c2a4eba.js","assets/Steps.4a8d55e8.css","assets/WidgetsFrame.23df477d.js","assets/WidgetsFrame.13b291ee.css","assets/WidgetPreview.1f0f871d.css"]),meta:{allowUnauthenticated:!0,title:"Preview - Abstra Console"}},{path:"/login",name:"login",component:()=>a(()=>import("./Login.868d46bd.js"),["assets/Login.868d46bd.js","assets/outputWidgets.399def05.js","assets/outputWidgets.a254438e.css","assets/icons.f6d106dc.js","assets/CircularLoading.2c6286a9.js","assets/CircularLoading.f81b57b4.css","assets/WidgetsFrame.23df477d.js","assets/WidgetsFrame.13b291ee.css","assets/index.142828c3.js","assets/index.cf4c23b9.js","assets/record.c9aea37a.js","assets/pubsub.9cd3fe84.js","assets/member.541feb06.js","assets/Form.725ab820.js","assets/hasIn.2c80750f.js","assets/popupNotifcation.35b231ea.js","assets/Login.ddcd6824.css"]),meta:{allowUnauthenticated:!0,title:"Login - Abstra Console"}},{path:"/api-key",name:"api-key",component:()=>a(()=>import("./ReturnApiKey.f9b80f8c.js"),["assets/ReturnApiKey.f9b80f8c.js","assets/outputWidgets.399def05.js","assets/outputWidgets.a254438e.css","assets/index.142828c3.js","assets/index.cf4c23b9.js","assets/record.c9aea37a.js","assets/pubsub.9cd3fe84.js","assets/apiKey.3272b13f.js","assets/project.2c4f2da9.js","assets/organization.5f360a13.js","assets/asyncComputed.f4656215.js","assets/Title.2c7413e1.js","assets/Base.5fff8032.js","assets/Typography.2f5af698.js","assets/Form.725ab820.js","assets/hasIn.2c80750f.js","assets/url.c3259ec0.js","assets/Paragraph.3f493ddf.js","assets/Text.ccd6267d.js","assets/index.60ef0a20.js","assets/Modal.1d07333c.js","assets/popupNotifcation.35b231ea.js","assets/ReturnApiKey.c0c3152e.css"]),meta:{title:"Api Keys - Abstra Console"}},{path:"/",name:"home",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}},{path:"/organizations",name:"organizations",component:()=>a(()=>import("./Organizations.bede7797.js"),["assets/Organizations.bede7797.js","assets/outputWidgets.399def05.js","assets/outputWidgets.a254438e.css","assets/icons.f6d106dc.js","assets/asyncComputed.f4656215.js","assets/index.142828c3.js","assets/index.cf4c23b9.js","assets/record.c9aea37a.js","assets/pubsub.9cd3fe84.js","assets/organization.5f360a13.js","assets/Navbar.vue_vue_type_script_setup_true_lang.2770b981.js","assets/logo.084e5d7c.js","assets/Text.ccd6267d.js","assets/Base.5fff8032.js","assets/Typography.2f5af698.js","assets/index.4cc488fe.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.f4a98ea3.css","assets/CrudView.d3f4ce45.js","assets/Paragraph.3f493ddf.js","assets/Form.725ab820.js","assets/hasIn.2c80750f.js","assets/Modal.1d07333c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.da78bef4.js","assets/url.c3259ec0.js","assets/index.a22cb932.js","assets/Title.2c7413e1.js","assets/index.a2a440a7.js","assets/CrudView.3934aca2.css","assets/BaseLayout.6eb0ab05.js","assets/BaseLayout.2a9791da.css","assets/ant-design.a7fd4df8.js","assets/index.67d84c17.js","assets/popupNotifcation.35b231ea.js"]),meta:{title:"Organizations - Abstra Console"}},{path:"/organizations/:organizationId",name:"organization",component:()=>a(()=>import("./Organization.12cf8d11.js"),["assets/Organization.12cf8d11.js","assets/outputWidgets.399def05.js","assets/outputWidgets.a254438e.css","assets/index.142828c3.js","assets/index.cf4c23b9.js","assets/record.c9aea37a.js","assets/pubsub.9cd3fe84.js","assets/organization.5f360a13.js","assets/BaseLayout.6eb0ab05.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.f4656215.js","assets/Sidebar.b3e28d2a.js","assets/Text.ccd6267d.js","assets/Base.5fff8032.js","assets/Typography.2f5af698.js","assets/index.60ef0a20.js","assets/icons.f6d106dc.js","assets/index.a2a440a7.js","assets/Sidebar.055402cc.css","assets/Navbar.vue_vue_type_script_setup_true_lang.2770b981.js","assets/logo.084e5d7c.js","assets/index.4cc488fe.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.f4a98ea3.css","assets/Form.725ab820.js","assets/hasIn.2c80750f.js","assets/popupNotifcation.35b231ea.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>a(()=>import("./Projects.64cd1559.js"),["assets/Projects.64cd1559.js","assets/outputWidgets.399def05.js","assets/outputWidgets.a254438e.css","assets/asyncComputed.f4656215.js","assets/ant-design.a7fd4df8.js","assets/index.67d84c17.js","assets/Modal.1d07333c.js","assets/index.142828c3.js","assets/index.cf4c23b9.js","assets/record.c9aea37a.js","assets/pubsub.9cd3fe84.js","assets/project.2c4f2da9.js","assets/organization.5f360a13.js","assets/CrudView.d3f4ce45.js","assets/icons.f6d106dc.js","assets/Paragraph.3f493ddf.js","assets/Base.5fff8032.js","assets/Typography.2f5af698.js","assets/Form.725ab820.js","assets/hasIn.2c80750f.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.da78bef4.js","assets/url.c3259ec0.js","assets/index.a22cb932.js","assets/Title.2c7413e1.js","assets/Text.ccd6267d.js","assets/index.a2a440a7.js","assets/CrudView.3934aca2.css","assets/popupNotifcation.35b231ea.js"]),meta:{title:"Projects - Abstra Console"}},{path:"settings",name:"organization-settings",component:()=>a(()=>import("./OrganizationSettings.437d7783.js"),["assets/OrganizationSettings.437d7783.js","assets/outputWidgets.399def05.js","assets/outputWidgets.a254438e.css"]),meta:{title:"Organization Settings - Abstra Console"}},{path:"editors",name:"editors",component:()=>a(()=>import("./Editors.568a1903.js"),["assets/Editors.568a1903.js","assets/outputWidgets.399def05.js","assets/outputWidgets.a254438e.css","assets/asyncComputed.f4656215.js","assets/index.142828c3.js","assets/index.cf4c23b9.js","assets/record.c9aea37a.js","assets/pubsub.9cd3fe84.js","assets/member.541feb06.js","assets/CrudView.d3f4ce45.js","assets/icons.f6d106dc.js","assets/Paragraph.3f493ddf.js","assets/Base.5fff8032.js","assets/Typography.2f5af698.js","assets/Form.725ab820.js","assets/hasIn.2c80750f.js","assets/Modal.1d07333c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.da78bef4.js","assets/url.c3259ec0.js","assets/index.a22cb932.js","assets/Title.2c7413e1.js","assets/Text.ccd6267d.js","assets/index.a2a440a7.js","assets/CrudView.3934aca2.css","assets/ant-design.a7fd4df8.js","assets/index.67d84c17.js","assets/popupNotifcation.35b231ea.js"]),meta:{title:"Editors - Abstra Console"}},{path:"members",redirect:{name:"editors"}},{path:"billing",name:"billing",component:()=>a(()=>import("./Billing.99f8e306.js"),["assets/Billing.99f8e306.js","assets/outputWidgets.399def05.js","assets/outputWidgets.a254438e.css","assets/index.142828c3.js","assets/index.cf4c23b9.js","assets/record.c9aea37a.js","assets/pubsub.9cd3fe84.js","assets/organization.5f360a13.js","assets/asyncComputed.f4656215.js","assets/Title.2c7413e1.js","assets/Base.5fff8032.js","assets/Typography.2f5af698.js","assets/index.a22cb932.js","assets/index.2ad223b4.js","assets/Card.7157cd01.js","assets/TabPane.78506a51.js","assets/hasIn.2c80750f.js","assets/Form.725ab820.js","assets/popupNotifcation.35b231ea.js"]),meta:{title:"Billing - Abstra Console"}}]},{path:"/projects/:projectId",name:"project",component:()=>a(()=>import("./Project.4117db42.js"),["assets/Project.4117db42.js","assets/outputWidgets.399def05.js","assets/outputWidgets.a254438e.css","assets/BaseLayout.6eb0ab05.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.f4656215.js","assets/index.142828c3.js","assets/index.cf4c23b9.js","assets/record.c9aea37a.js","assets/pubsub.9cd3fe84.js","assets/project.2c4f2da9.js","assets/organization.5f360a13.js","assets/Navbar.vue_vue_type_script_setup_true_lang.2770b981.js","assets/logo.084e5d7c.js","assets/Text.ccd6267d.js","assets/Base.5fff8032.js","assets/Typography.2f5af698.js","assets/index.4cc488fe.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.b3e28d2a.js","assets/index.60ef0a20.js","assets/icons.f6d106dc.js","assets/index.a2a440a7.js","assets/Sidebar.055402cc.css","assets/Form.725ab820.js","assets/hasIn.2c80750f.js","assets/popupNotifcation.35b231ea.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>a(()=>import("./Live.6a16ac02.js"),["assets/Live.6a16ac02.js","assets/outputWidgets.399def05.js","assets/outputWidgets.a254438e.css","assets/asyncComputed.f4656215.js","assets/build.c0fbbb61.js","assets/index.142828c3.js","assets/index.cf4c23b9.js","assets/record.c9aea37a.js","assets/pubsub.9cd3fe84.js","assets/project.2c4f2da9.js","assets/CrudView.d3f4ce45.js","assets/icons.f6d106dc.js","assets/Paragraph.3f493ddf.js","assets/Base.5fff8032.js","assets/Typography.2f5af698.js","assets/Form.725ab820.js","assets/hasIn.2c80750f.js","assets/Modal.1d07333c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.da78bef4.js","assets/url.c3259ec0.js","assets/index.a22cb932.js","assets/Title.2c7413e1.js","assets/Text.ccd6267d.js","assets/index.a2a440a7.js","assets/CrudView.3934aca2.css","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.a983dc43.js","assets/CheckCircleFilled.1bbca98e.js","assets/LoadingOutlined.42c96cf4.js","assets/index.60ef0a20.js","assets/Link.df3ddb25.js","assets/popupNotifcation.35b231ea.js","assets/Live.ead36dc1.css"]),meta:{title:"Project - Abstra Console"}},{path:"builds",name:"builds",component:()=>a(()=>import("./Builds.90cbd8d3.js"),["assets/Builds.90cbd8d3.js","assets/outputWidgets.399def05.js","assets/outputWidgets.a254438e.css","assets/asyncComputed.f4656215.js","assets/build.c0fbbb61.js","assets/index.142828c3.js","assets/index.cf4c23b9.js","assets/record.c9aea37a.js","assets/pubsub.9cd3fe84.js","assets/project.2c4f2da9.js","assets/CrudView.d3f4ce45.js","assets/icons.f6d106dc.js","assets/Paragraph.3f493ddf.js","assets/Base.5fff8032.js","assets/Typography.2f5af698.js","assets/Form.725ab820.js","assets/hasIn.2c80750f.js","assets/Modal.1d07333c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.da78bef4.js","assets/url.c3259ec0.js","assets/index.a22cb932.js","assets/Title.2c7413e1.js","assets/Text.ccd6267d.js","assets/index.a2a440a7.js","assets/CrudView.3934aca2.css","assets/index.1afdd841.js","assets/datetime.ced9563a.js","assets/CloseCircleOutlined.e14e141a.js","assets/LoadingOutlined.42c96cf4.js","assets/popupNotifcation.35b231ea.js","assets/Builds.70340bcb.css"]),meta:{title:"Builds - Abstra Console"}},{path:"connectors",name:"connectors",component:()=>a(()=>import("./Connectors.ed594e59.js"),["assets/Connectors.ed594e59.js","assets/outputWidgets.399def05.js","assets/outputWidgets.a254438e.css","assets/index.142828c3.js","assets/index.cf4c23b9.js","assets/record.c9aea37a.js","assets/pubsub.9cd3fe84.js","assets/connector.f78f5bde.js","assets/asyncComputed.f4656215.js","assets/icons.f6d106dc.js","assets/CrudView.d3f4ce45.js","assets/Paragraph.3f493ddf.js","assets/Base.5fff8032.js","assets/Typography.2f5af698.js","assets/Form.725ab820.js","assets/hasIn.2c80750f.js","assets/Modal.1d07333c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.da78bef4.js","assets/url.c3259ec0.js","assets/index.a22cb932.js","assets/Title.2c7413e1.js","assets/Text.ccd6267d.js","assets/index.a2a440a7.js","assets/CrudView.3934aca2.css","assets/popupNotifcation.35b231ea.js"]),meta:{title:"Connectors - Abstra Console"}},{path:"tables",name:"tables",component:()=>a(()=>import("./Tables.07df46eb.js"),["assets/Tables.07df46eb.js","assets/outputWidgets.399def05.js","assets/outputWidgets.a254438e.css","assets/icons.f6d106dc.js","assets/asyncComputed.f4656215.js","assets/tables.5cbd7f06.js","assets/record.c9aea37a.js","assets/pubsub.9cd3fe84.js","assets/index.142828c3.js","assets/index.cf4c23b9.js","assets/string.067c6045.js","assets/CrudView.d3f4ce45.js","assets/Paragraph.3f493ddf.js","assets/Base.5fff8032.js","assets/Typography.2f5af698.js","assets/Form.725ab820.js","assets/hasIn.2c80750f.js","assets/Modal.1d07333c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.da78bef4.js","assets/url.c3259ec0.js","assets/index.a22cb932.js","assets/Title.2c7413e1.js","assets/Text.ccd6267d.js","assets/index.a2a440a7.js","assets/CrudView.3934aca2.css","assets/popupNotifcation.35b231ea.js"]),meta:{title:"Tables - Abstra Console"}},{path:"sql",name:"sql",component:()=>a(()=>import("./Sql.4c676dec.js"),["assets/Sql.4c676dec.js","assets/outputWidgets.399def05.js","assets/outputWidgets.a254438e.css","assets/index.142828c3.js","assets/index.cf4c23b9.js","assets/record.c9aea37a.js","assets/pubsub.9cd3fe84.js","assets/project.2c4f2da9.js","assets/toggleHighContrast.724fc8f3.js","assets/toggleHighContrast.30d77c87.css","assets/index.a22cb932.js","assets/index.60ef0a20.js","assets/Form.725ab820.js","assets/hasIn.2c80750f.js","assets/popupNotifcation.35b231ea.js","assets/Sql.3405ff47.css"]),meta:{title:"SQL Editor - Abstra Console"}},{path:"api-keys",name:"api-keys",component:()=>a(()=>import("./ApiKeys.69d01972.js"),["assets/ApiKeys.69d01972.js","assets/outputWidgets.399def05.js","assets/outputWidgets.a254438e.css","assets/icons.f6d106dc.js","assets/asyncComputed.f4656215.js","assets/index.142828c3.js","assets/index.cf4c23b9.js","assets/record.c9aea37a.js","assets/pubsub.9cd3fe84.js","assets/member.541feb06.js","assets/apiKey.3272b13f.js","assets/project.2c4f2da9.js","assets/CrudView.d3f4ce45.js","assets/Paragraph.3f493ddf.js","assets/Base.5fff8032.js","assets/Typography.2f5af698.js","assets/Form.725ab820.js","assets/hasIn.2c80750f.js","assets/Modal.1d07333c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.da78bef4.js","assets/url.c3259ec0.js","assets/index.a22cb932.js","assets/Title.2c7413e1.js","assets/Text.ccd6267d.js","assets/index.a2a440a7.js","assets/CrudView.3934aca2.css","assets/popupNotifcation.35b231ea.js"]),meta:{title:"API Keys - Abstra Console"}},{path:"logs",name:"logs",component:()=>a(()=>import("./Logs.caa14249.js"),["assets/Logs.caa14249.js","assets/outputWidgets.399def05.js","assets/outputWidgets.a254438e.css","assets/build.c0fbbb61.js","assets/index.142828c3.js","assets/index.cf4c23b9.js","assets/record.c9aea37a.js","assets/pubsub.9cd3fe84.js","assets/ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.a983dc43.js","assets/CheckCircleFilled.1bbca98e.js","assets/LoadingOutlined.42c96cf4.js","assets/datetime.ced9563a.js","assets/dayjs.ece6b945.js","assets/index.78abb3ac.js","assets/index.a2a440a7.js","assets/Title.2c7413e1.js","assets/Base.5fff8032.js","assets/Typography.2f5af698.js","assets/index.60ef0a20.js","assets/Form.725ab820.js","assets/hasIn.2c80750f.js","assets/CollapsePanel.2108d608.js","assets/popupNotifcation.35b231ea.js"]),meta:{title:"Logs - Abstra Console"}},{path:"legacy-logs",name:"legacy-logs",component:()=>a(()=>import("./LegacyLogs.4b104c9a.js"),["assets/LegacyLogs.4b104c9a.js","assets/outputWidgets.399def05.js","assets/outputWidgets.a254438e.css","assets/ant-design.a7fd4df8.js","assets/index.67d84c17.js","assets/Modal.1d07333c.js","assets/StarFilled.fad29e50.js","assets/Timeline.725cfa1e.js","assets/CheckCircleFilled.1bbca98e.js","assets/build.c0fbbb61.js","assets/index.142828c3.js","assets/index.cf4c23b9.js","assets/record.c9aea37a.js","assets/pubsub.9cd3fe84.js","assets/asyncComputed.f4656215.js","assets/Title.2c7413e1.js","assets/Base.5fff8032.js","assets/Typography.2f5af698.js","assets/index.60ef0a20.js","assets/Form.725ab820.js","assets/hasIn.2c80750f.js","assets/dayjs.ece6b945.js","assets/index.78abb3ac.js","assets/index.a2a440a7.js","assets/popupNotifcation.35b231ea.js","assets/LegacyLogs.752e315d.css"]),meta:{title:"Logs - Abstra Console"}},{path:"settings",name:"project-settings",component:()=>a(()=>import("./ProjectSettings.f0b19e40.js"),["assets/ProjectSettings.f0b19e40.js","assets/asyncComputed.f4656215.js","assets/outputWidgets.399def05.js","assets/outputWidgets.a254438e.css","assets/index.142828c3.js","assets/index.cf4c23b9.js","assets/record.c9aea37a.js","assets/pubsub.9cd3fe84.js","assets/project.2c4f2da9.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.99157de0.js","assets/Title.2c7413e1.js","assets/Base.5fff8032.js","assets/Typography.2f5af698.js","assets/Paragraph.3f493ddf.js","assets/Text.ccd6267d.js","assets/Form.725ab820.js","assets/hasIn.2c80750f.js","assets/popupNotifcation.35b231ea.js"]),meta:{title:"Project Settings - Abstra Console"}},{path:"env-vars",name:"env-vars",component:()=>a(()=>import("./EnvVars.7672733d.js"),["assets/EnvVars.7672733d.js","assets/outputWidgets.399def05.js","assets/outputWidgets.a254438e.css","assets/index.142828c3.js","assets/index.cf4c23b9.js","assets/record.c9aea37a.js","assets/pubsub.9cd3fe84.js","assets/icons.f6d106dc.js","assets/asyncComputed.f4656215.js","assets/CrudView.d3f4ce45.js","assets/Paragraph.3f493ddf.js","assets/Base.5fff8032.js","assets/Typography.2f5af698.js","assets/Form.725ab820.js","assets/hasIn.2c80750f.js","assets/Modal.1d07333c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.da78bef4.js","assets/url.c3259ec0.js","assets/index.a22cb932.js","assets/Title.2c7413e1.js","assets/Text.ccd6267d.js","assets/index.a2a440a7.js","assets/CrudView.3934aca2.css","assets/popupNotifcation.35b231ea.js"]),meta:{title:"Environment Variables - Abstra Console"}},{path:"files",name:"files",component:()=>a(()=>import("./Files.63ac723d.js"),["assets/Files.63ac723d.js","assets/outputWidgets.399def05.js","assets/outputWidgets.a254438e.css","assets/popupNotifcation.35b231ea.js","assets/index.142828c3.js","assets/index.cf4c23b9.js","assets/record.c9aea37a.js","assets/pubsub.9cd3fe84.js","assets/asyncComputed.f4656215.js","assets/ant-design.a7fd4df8.js","assets/index.67d84c17.js","assets/Modal.1d07333c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.da78bef4.js","assets/DownloadOutlined.f0b0e5f7.js","assets/DeleteOutlined.32bdbcc7.js","assets/DeleteOutlined.f8ba9770.js","assets/Title.2c7413e1.js","assets/Base.5fff8032.js","assets/Typography.2f5af698.js","assets/Paragraph.3f493ddf.js","assets/Card.7157cd01.js","assets/TabPane.78506a51.js","assets/hasIn.2c80750f.js","assets/Form.725ab820.js","assets/Files.1001d74a.css"]),meta:{title:"Files - Abstra Console"}},{path:"users",name:"users",component:()=>a(()=>import("./Users.8ecd2fdc.js"),["assets/Users.8ecd2fdc.js","assets/outputWidgets.399def05.js","assets/outputWidgets.a254438e.css","assets/icons.f6d106dc.js","assets/asyncComputed.f4656215.js","assets/contracts.generated.626e0dbc.js","assets/index.cf4c23b9.js","assets/Form.725ab820.js","assets/hasIn.2c80750f.js","assets/index.39998b66.js","assets/isNumeric.75337b1e.js","assets/popupNotifcation.35b231ea.js","assets/index.142828c3.js","assets/record.c9aea37a.js","assets/pubsub.9cd3fe84.js","assets/CrudView.d3f4ce45.js","assets/Paragraph.3f493ddf.js","assets/Base.5fff8032.js","assets/Typography.2f5af698.js","assets/Modal.1d07333c.js","assets/DocsButton.vue_vue_type_script_setup_true_lang.da78bef4.js","assets/url.c3259ec0.js","assets/index.a22cb932.js","assets/Title.2c7413e1.js","assets/Text.ccd6267d.js","assets/index.a2a440a7.js","assets/CrudView.3934aca2.css"]),meta:{title:"Users - Abstra Console"}}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>a(()=>import("./TableEditor.f28fd4b4.js"),["assets/TableEditor.f28fd4b4.js","assets/outputWidgets.399def05.js","assets/outputWidgets.a254438e.css","assets/tables.5cbd7f06.js","assets/record.c9aea37a.js","assets/pubsub.9cd3fe84.js","assets/index.142828c3.js","assets/index.cf4c23b9.js","assets/string.067c6045.js","assets/BaseLayout.6eb0ab05.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.f4656215.js","assets/popupNotifcation.35b231ea.js","assets/icons.f6d106dc.js","assets/project.2c4f2da9.js","assets/index.4d03dbc2.js","assets/index.e158a8a1.js","assets/Form.725ab820.js","assets/hasIn.2c80750f.js","assets/index.ac9cec08.js","assets/index.39998b66.js","assets/isNumeric.75337b1e.js","assets/ant-design.a7fd4df8.js","assets/index.67d84c17.js","assets/Modal.1d07333c.js","assets/Base.5fff8032.js","assets/Typography.2f5af698.js","assets/LoadingOutlined.42c96cf4.js","assets/index.a22cb932.js","assets/DeleteOutlined.32bdbcc7.js","assets/DeleteOutlined.f8ba9770.js","assets/index.2ad223b4.js","assets/organization.5f360a13.js","assets/index.4cc488fe.js","assets/ArrowRightOutlined.08fa31dd.js","assets/TableEditor.a9961944.css"]),meta:{title:"Tables - Abstra Console"}},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>a(()=>import("./ConnectorEditor.b7b655f1.js"),["assets/ConnectorEditor.b7b655f1.js","assets/outputWidgets.399def05.js","assets/outputWidgets.a254438e.css","assets/BaseLayout.6eb0ab05.js","assets/BaseLayout.2a9791da.css","assets/asyncComputed.f4656215.js","assets/index.142828c3.js","assets/index.cf4c23b9.js","assets/record.c9aea37a.js","assets/pubsub.9cd3fe84.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.3f6a208d.js","assets/ant-design.a7fd4df8.js","assets/index.67d84c17.js","assets/Modal.1d07333c.js","assets/Typography.2f5af698.js","assets/Link.df3ddb25.js","assets/Base.5fff8032.js","assets/SaveButton.13ece1cb.css","assets/project.2c4f2da9.js","assets/connector.f78f5bde.js","assets/organization.5f360a13.js","assets/TabPane.78506a51.js","assets/hasIn.2c80750f.js","assets/index.4cc488fe.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Form.725ab820.js","assets/index.2ad223b4.js","assets/popupNotifcation.35b231ea.js","assets/ConnectorEditor.77a62f6e.css"]),meta:{title:"Connectors - Abstra Console"}},{path:"/:pathMatch(.*)*",name:"NotFound",redirect:{name:"organizations"},meta:{title:"Home - Abstra Console"}}],scrollBehavior(o){if(o.hash)return{el:o.hash}}});g.beforeEach(async(o,t)=>{L(o,t);const e=c.getAuthor();if(y.trackPageView(e==null?void 0:e.claims.email),!o.meta.allowUnauthenticated&&!e){await g.push({name:"login",query:{...o.query,redirect:o.path,"prev-redirect":o.query.redirect}});return}e&&h.boot(e)});export{B as A,w as C,h as I,N as a,c as b,g as r};
//# sourceMappingURL=router.6781b4fe.js.map
