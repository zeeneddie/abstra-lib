var L=Object.defineProperty;var R=(t,e,o)=>e in t?L(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var y=(t,e,o)=>(R(t,typeof e!="symbol"?e+"":e,o),o);import{F as s,C as D,B as b,a as V,T as r}from"./Base.175f3ec4.js";import{aL as j,co as d,D as k,U as p,ab as x,f as S,O as U,cT as f,S as l,q as z,g as J,h as N,_ as n}from"./outputWidgets.a5fcf389.js";import{c as I,b as A}from"./Text.d2260f67.js";import{A as O}from"./Title.42ad4bfb.js";import{u as B}from"./index.39083dd8.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="d39e8900-a068-461b-87ea-d877ef0251dd",t._sentryDebugIdIdentifier="sentry-dbid-d39e8900-a068-461b-87ea-d877ef0251dd")}catch{}})();s.useInjectFormItemContext=j;s.ItemRest=d;s.install=function(t){return t.component(s.name,s),t.component(s.Item.name,s.Item),t.component(d.name,d),t};const Z=k(D);var W=globalThis&&globalThis.__rest||function(t,e){var o={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(o[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(t);i<a.length;i++)e.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(t,a[i])&&(o[a[i]]=t[a[i]]);return o};const C=()=>U(p(p({},V()),{ellipsis:{type:Boolean,default:void 0}}),["component"]),_=(t,e)=>{let{slots:o,attrs:a}=e;const i=p(p({},t),a),{ellipsis:P,rel:u}=i,h=W(i,["ellipsis","rel"]);x();const E=p(p({},h),{rel:u===void 0&&h.target==="_blank"?"noopener noreferrer":u,ellipsis:!!P,component:"a"});return delete E.navigate,S(b,E,o)};_.displayName="ATypographyLink";_.inheritAttrs=!1;_.props=C();const w=_;r.Text=I;r.Title=O;r.Paragraph=A;r.Link=w;r.Base=b;r.install=function(t){return t.component(r.name,r),t.component(r.Text.displayName,I),t.component(r.Title.displayName,O),t.component(r.Paragraph.displayName,A),t.component(r.Link.displayName,w),t};const F=()=>window.location.host.includes(".abstra.io"),q={authn:"/api/authn","cloud-api":"/api/cloud-api"},$={authn:"https://authn.abstra.cloud","cloud-api":"https://cloud-api.abstra.cloud"},g=t=>{const e="VITE_"+f.toUpper(f.snakeCase(t)),o={VITE_SENTRY_RELEASE:"3044cfac2fcb56117335a22beb5e45ca753e4ce0",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||(F()?q[t]:$[t])},v={authn:g("authn"),cloudApi:g("cloud-api")},c=class{async authenticate(e){try{const o=await fetch(`${v.authn}/authenticate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e})});if(!o.ok)throw new Error(await o.text());return null}catch(o){return o.message}}async verify(e,o){const a=await fetch(`${v.authn}/verify`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e,token:o})});if(!a.ok)throw new Error(await a.text());const i=await a.json();return this.saveJWT(i.jwt),this.getAuthor()}saveJWT(e){l.set(c.key,e)}getJWT(){return l.get(c.key)}getAuthor(){const e=this.getJWT();if(e)try{const o=z(e);if(o.exp&&o.exp>Date.now()/1e3)return{jwt:e,claims:o}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){l.remove(c.key)}get headers(){const e=this.getJWT();return e?{"Author-Authorization":`Bearer ${e}`}:{}}};let m=c;y(m,"key","abstracloud:auth:jwt");const H=new m,T=J({history:N("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./WidgetPreview.ef23ae61.js"),["assets/WidgetPreview.ef23ae61.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.a31220bc.js","assets/outputWidgets.a5fcf389.js","assets/outputWidgets.cb6d1439.css","assets/ActionButton.998aa76d.css","assets/WidgetsFrame.d43cab20.js","assets/WidgetsFrame.97ae601d.css","assets/WidgetPreview.6013614a.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./Login.17b7ec92.js"),["assets/Login.17b7ec92.js","assets/outputWidgets.a5fcf389.js","assets/outputWidgets.cb6d1439.css","assets/member.bfbe771d.js","assets/gateway.5878b159.js","assets/icons.1a1dc210.js","assets/CircularLoading.9003e8f8.js","assets/CircularLoading.f81b57b4.css","assets/WidgetsFrame.d43cab20.js","assets/WidgetsFrame.97ae601d.css","assets/Base.175f3ec4.js","assets/transButton.fc314012.js","assets/Text.d2260f67.js","assets/Title.42ad4bfb.js","assets/index.39083dd8.js","assets/Login.f7d5edc1.css"])},{path:"/api-key",name:"api-key",component:()=>n(()=>import("./ReturnApiKey.44530ee4.js"),["assets/ReturnApiKey.44530ee4.js","assets/outputWidgets.a5fcf389.js","assets/outputWidgets.cb6d1439.css","assets/index.b67da7e9.js","assets/record.e2e84f62.js","assets/pubsub.903f7e54.js","assets/gateway.5878b159.js","assets/apiKey.dc945a4b.js","assets/project.26e79e92.js","assets/organization.269baf36.js","assets/asyncComputed.b7d3265e.js","assets/Title.42ad4bfb.js","assets/Base.175f3ec4.js","assets/transButton.fc314012.js","assets/Text.d2260f67.js","assets/index.5b7d1aca.js","assets/index.39083dd8.js","assets/ReturnApiKey.909cd622.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>n(()=>import("./Organizations.1a9b9e5d.js"),["assets/Organizations.1a9b9e5d.js","assets/outputWidgets.a5fcf389.js","assets/outputWidgets.cb6d1439.css","assets/icons.1a1dc210.js","assets/asyncComputed.b7d3265e.js","assets/index.b67da7e9.js","assets/record.e2e84f62.js","assets/pubsub.903f7e54.js","assets/gateway.5878b159.js","assets/organization.269baf36.js","assets/Navbar.vue_vue_type_script_setup_true_lang.49949a9a.js","assets/logo.084e5d7c.js","assets/index.a675a1a6.js","assets/transButton.fc314012.js","assets/Text.d2260f67.js","assets/Base.175f3ec4.js","assets/Navbar.f4a98ea3.css","assets/CrudView.cee1047f.js","assets/url.d6641ded.js","assets/Title.42ad4bfb.js","assets/index.48f4731a.js","assets/index.5b7d1aca.js","assets/CrudView.1d309d6a.css","assets/BaseLayout.19687f5a.js","assets/BaseLayout.2d5b030e.css","assets/ant-design.35ff28ee.js","assets/index.39083dd8.js"])},{path:"/organizations/:organizationId",name:"organization",component:()=>n(()=>import("./Organization.6f14242f.js"),["assets/Organization.6f14242f.js","assets/Sidebar.7081c36b.js","assets/outputWidgets.a5fcf389.js","assets/outputWidgets.cb6d1439.css","assets/icons.1a1dc210.js","assets/Tooltip.a8a96b65.js","assets/Tooltip.63c4352e.css","assets/Sidebar.fc09b9a8.css","assets/Navbar.vue_vue_type_script_setup_true_lang.49949a9a.js","assets/logo.084e5d7c.js","assets/asyncComputed.b7d3265e.js","assets/index.a675a1a6.js","assets/transButton.fc314012.js","assets/Text.d2260f67.js","assets/Base.175f3ec4.js","assets/Navbar.f4a98ea3.css","assets/index.b67da7e9.js","assets/record.e2e84f62.js","assets/pubsub.903f7e54.js","assets/gateway.5878b159.js","assets/organization.269baf36.js","assets/BaseLayout.19687f5a.js","assets/BaseLayout.2d5b030e.css","assets/Title.42ad4bfb.js","assets/index.39083dd8.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>n(()=>import("./Projects.54801452.js"),["assets/Projects.54801452.js","assets/outputWidgets.a5fcf389.js","assets/outputWidgets.cb6d1439.css","assets/icons.1a1dc210.js","assets/asyncComputed.b7d3265e.js","assets/index.b67da7e9.js","assets/record.e2e84f62.js","assets/pubsub.903f7e54.js","assets/gateway.5878b159.js","assets/project.26e79e92.js","assets/organization.269baf36.js","assets/CrudView.cee1047f.js","assets/Text.d2260f67.js","assets/Base.175f3ec4.js","assets/transButton.fc314012.js","assets/url.d6641ded.js","assets/Title.42ad4bfb.js","assets/index.48f4731a.js","assets/index.5b7d1aca.js","assets/CrudView.1d309d6a.css","assets/ant-design.35ff28ee.js","assets/index.39083dd8.js"])},{path:"settings",name:"organization-settings",component:()=>n(()=>import("./OrganizationSettings.1c94d8c9.js"),["assets/OrganizationSettings.1c94d8c9.js","assets/outputWidgets.a5fcf389.js","assets/outputWidgets.cb6d1439.css"])},{path:"members",name:"members",component:()=>n(()=>import("./Members.b271ce35.js"),["assets/Members.b271ce35.js","assets/outputWidgets.a5fcf389.js","assets/outputWidgets.cb6d1439.css","assets/asyncComputed.b7d3265e.js","assets/index.b67da7e9.js","assets/record.e2e84f62.js","assets/pubsub.903f7e54.js","assets/gateway.5878b159.js","assets/member.bfbe771d.js","assets/CrudView.cee1047f.js","assets/icons.1a1dc210.js","assets/Text.d2260f67.js","assets/Base.175f3ec4.js","assets/transButton.fc314012.js","assets/url.d6641ded.js","assets/Title.42ad4bfb.js","assets/index.48f4731a.js","assets/index.5b7d1aca.js","assets/CrudView.1d309d6a.css","assets/index.39083dd8.js"])}]},{path:"/projects/:projectId",name:"project",component:()=>n(()=>import("./Project.ef3c0425.js"),["assets/Project.ef3c0425.js","assets/outputWidgets.a5fcf389.js","assets/outputWidgets.cb6d1439.css","assets/BaseLayout.19687f5a.js","assets/BaseLayout.2d5b030e.css","assets/asyncComputed.b7d3265e.js","assets/index.b67da7e9.js","assets/record.e2e84f62.js","assets/pubsub.903f7e54.js","assets/gateway.5878b159.js","assets/project.26e79e92.js","assets/organization.269baf36.js","assets/Navbar.vue_vue_type_script_setup_true_lang.49949a9a.js","assets/logo.084e5d7c.js","assets/index.a675a1a6.js","assets/transButton.fc314012.js","assets/Text.d2260f67.js","assets/Base.175f3ec4.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.7081c36b.js","assets/icons.1a1dc210.js","assets/Tooltip.a8a96b65.js","assets/Tooltip.63c4352e.css","assets/Sidebar.fc09b9a8.css","assets/Title.42ad4bfb.js","assets/index.39083dd8.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>n(()=>import("./Live.fb5fe96e.js"),["assets/Live.fb5fe96e.js","assets/outputWidgets.a5fcf389.js","assets/outputWidgets.cb6d1439.css","assets/asyncComputed.b7d3265e.js","assets/build.f1d97524.js","assets/gateway.5878b159.js","assets/index.b67da7e9.js","assets/record.e2e84f62.js","assets/pubsub.903f7e54.js","assets/project.26e79e92.js","assets/component.vue_vue_type_script_setup_true_lang.927cbac0.js","assets/icons.1a1dc210.js","assets/Text.d2260f67.js","assets/Base.175f3ec4.js","assets/transButton.fc314012.js","assets/index.46488d8d.js","assets/Title.42ad4bfb.js","assets/index.39083dd8.js"])},{path:"builds",name:"builds",component:()=>n(()=>import("./Builds.ff20d3b9.js"),["assets/Builds.ff20d3b9.js","assets/outputWidgets.a5fcf389.js","assets/outputWidgets.cb6d1439.css","assets/build.f1d97524.js","assets/gateway.5878b159.js","assets/index.b67da7e9.js","assets/record.e2e84f62.js","assets/pubsub.903f7e54.js","assets/project.26e79e92.js","assets/asyncComputed.b7d3265e.js","assets/CrudView.cee1047f.js","assets/icons.1a1dc210.js","assets/Text.d2260f67.js","assets/Base.175f3ec4.js","assets/transButton.fc314012.js","assets/url.d6641ded.js","assets/Title.42ad4bfb.js","assets/index.48f4731a.js","assets/index.5b7d1aca.js","assets/CrudView.1d309d6a.css","assets/index.b048d0fb.js","assets/index.39083dd8.js","assets/Builds.f8f533c4.css"])},{path:"connectors",name:"connectors",component:()=>n(()=>import("./Connectors.4114263e.js"),["assets/Connectors.4114263e.js","assets/outputWidgets.a5fcf389.js","assets/outputWidgets.cb6d1439.css","assets/index.b67da7e9.js","assets/record.e2e84f62.js","assets/pubsub.903f7e54.js","assets/gateway.5878b159.js","assets/connector.b4bc160a.js","assets/asyncComputed.b7d3265e.js","assets/icons.1a1dc210.js","assets/CrudView.cee1047f.js","assets/Text.d2260f67.js","assets/Base.175f3ec4.js","assets/transButton.fc314012.js","assets/url.d6641ded.js","assets/Title.42ad4bfb.js","assets/index.48f4731a.js","assets/index.5b7d1aca.js","assets/CrudView.1d309d6a.css","assets/index.39083dd8.js"])},{path:"tables",name:"tables",component:()=>n(()=>import("./Tables.685e0a7d.js"),["assets/Tables.685e0a7d.js","assets/outputWidgets.a5fcf389.js","assets/outputWidgets.cb6d1439.css","assets/icons.1a1dc210.js","assets/asyncComputed.b7d3265e.js","assets/tables.165ad279.js","assets/record.e2e84f62.js","assets/pubsub.903f7e54.js","assets/index.b67da7e9.js","assets/gateway.5878b159.js","assets/CrudView.cee1047f.js","assets/Text.d2260f67.js","assets/Base.175f3ec4.js","assets/transButton.fc314012.js","assets/url.d6641ded.js","assets/Title.42ad4bfb.js","assets/index.48f4731a.js","assets/index.5b7d1aca.js","assets/CrudView.1d309d6a.css","assets/index.39083dd8.js"])},{path:"api-keys",name:"api-keys",component:()=>n(()=>import("./ApiKeys.0dad23f2.js"),["assets/ApiKeys.0dad23f2.js","assets/outputWidgets.a5fcf389.js","assets/outputWidgets.cb6d1439.css","assets/asyncComputed.b7d3265e.js","assets/index.b67da7e9.js","assets/record.e2e84f62.js","assets/pubsub.903f7e54.js","assets/gateway.5878b159.js","assets/member.bfbe771d.js","assets/apiKey.dc945a4b.js","assets/project.26e79e92.js","assets/icons.1a1dc210.js","assets/CrudView.cee1047f.js","assets/Text.d2260f67.js","assets/Base.175f3ec4.js","assets/transButton.fc314012.js","assets/url.d6641ded.js","assets/Title.42ad4bfb.js","assets/index.48f4731a.js","assets/index.5b7d1aca.js","assets/CrudView.1d309d6a.css","assets/index.b048d0fb.js","assets/index.39083dd8.js"])},{path:"logs",name:"logs",component:()=>n(()=>import("./Logs.b64cf01c.js"),["assets/Logs.b64cf01c.js","assets/outputWidgets.a5fcf389.js","assets/outputWidgets.cb6d1439.css","assets/ant-design.35ff28ee.js","assets/transButton.fc314012.js","assets/gateway.5878b159.js","assets/build.f1d97524.js","assets/index.b67da7e9.js","assets/record.e2e84f62.js","assets/pubsub.903f7e54.js","assets/asyncComputed.b7d3265e.js","assets/dayjs.4c9a6853.js","assets/index.440639bd.js","assets/Text.d2260f67.js","assets/Base.175f3ec4.js","assets/index.b048d0fb.js","assets/Title.42ad4bfb.js","assets/CollapsePanel.14ce59d8.js","assets/index.48f4731a.js","assets/index.39083dd8.js","assets/Logs.20b75fff.css"])},{path:"settings",name:"project-settings",component:()=>n(()=>import("./ProjectSettings.650d7be8.js"),["assets/ProjectSettings.650d7be8.js","assets/asyncComputed.b7d3265e.js","assets/outputWidgets.a5fcf389.js","assets/outputWidgets.cb6d1439.css","assets/index.b67da7e9.js","assets/record.e2e84f62.js","assets/pubsub.903f7e54.js","assets/gateway.5878b159.js","assets/project.26e79e92.js","assets/Title.42ad4bfb.js","assets/Base.175f3ec4.js","assets/transButton.fc314012.js","assets/Text.d2260f67.js","assets/index.39083dd8.js"])},{path:"env-vars",name:"env-vars",component:()=>n(()=>import("./EnvVars.1f179a3b.js"),["assets/EnvVars.1f179a3b.js","assets/outputWidgets.a5fcf389.js","assets/outputWidgets.cb6d1439.css","assets/asyncComputed.b7d3265e.js","assets/index.b67da7e9.js","assets/record.e2e84f62.js","assets/pubsub.903f7e54.js","assets/gateway.5878b159.js","assets/icons.1a1dc210.js","assets/CrudView.cee1047f.js","assets/Text.d2260f67.js","assets/Base.175f3ec4.js","assets/transButton.fc314012.js","assets/url.d6641ded.js","assets/Title.42ad4bfb.js","assets/index.48f4731a.js","assets/index.5b7d1aca.js","assets/CrudView.1d309d6a.css","assets/index.39083dd8.js"])},{path:"files",name:"files",component:()=>n(()=>import("./Files.3e45774f.js"),["assets/Files.3e45774f.js","assets/outputWidgets.a5fcf389.js","assets/outputWidgets.cb6d1439.css","assets/gateway.5878b159.js","assets/index.b67da7e9.js","assets/record.e2e84f62.js","assets/pubsub.903f7e54.js","assets/asyncComputed.b7d3265e.js","assets/ant-design.35ff28ee.js","assets/transButton.fc314012.js","assets/popupNotifcation.f267868b.js","assets/DownloadOutlined.527d8586.js","assets/index.8ee399e0.js","assets/TabPane.b49fecf2.js","assets/Base.175f3ec4.js","assets/Title.42ad4bfb.js","assets/Text.d2260f67.js","assets/index.39083dd8.js","assets/Files.fefbf3f0.css"])}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>n(()=>import("./TableEditor.6d779ad1.js"),["assets/TableEditor.6d779ad1.js","assets/outputWidgets.a5fcf389.js","assets/outputWidgets.cb6d1439.css","assets/tables.165ad279.js","assets/record.e2e84f62.js","assets/pubsub.903f7e54.js","assets/index.b67da7e9.js","assets/gateway.5878b159.js","assets/BaseLayout.19687f5a.js","assets/BaseLayout.2d5b030e.css","assets/asyncComputed.b7d3265e.js","assets/popupNotifcation.f267868b.js","assets/index.689f68cc.js","assets/isNumeric.75337b1e.js","assets/index.48f4731a.js","assets/Base.175f3ec4.js","assets/transButton.fc314012.js","assets/project.26e79e92.js","assets/organization.269baf36.js","assets/icons.1a1dc210.js","assets/CircularLoading.9003e8f8.js","assets/CircularLoading.f81b57b4.css","assets/TabPane.b49fecf2.js","assets/index.a675a1a6.js","assets/Text.d2260f67.js","assets/Title.42ad4bfb.js","assets/index.39083dd8.js","assets/TableEditor.2a3462ab.css"])},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>n(()=>import("./ConnectorEditor.5a25c915.js"),["assets/ConnectorEditor.5a25c915.js","assets/outputWidgets.a5fcf389.js","assets/outputWidgets.cb6d1439.css","assets/BaseLayout.19687f5a.js","assets/BaseLayout.2d5b030e.css","assets/asyncComputed.b7d3265e.js","assets/index.b67da7e9.js","assets/record.e2e84f62.js","assets/pubsub.903f7e54.js","assets/gateway.5878b159.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.4c9be161.js","assets/ant-design.35ff28ee.js","assets/transButton.fc314012.js","assets/SaveButton.13ece1cb.css","assets/project.26e79e92.js","assets/connector.b4bc160a.js","assets/organization.269baf36.js","assets/TabPane.b49fecf2.js","assets/Base.175f3ec4.js","assets/index.a675a1a6.js","assets/index.48f4731a.js","assets/Text.d2260f67.js","assets/Title.42ad4bfb.js","assets/index.39083dd8.js","assets/ConnectorEditor.77a62f6e.css"])},{path:"/builds/:buildId",name:"build",component:()=>n(()=>import("./Build.afa3b1f5.js"),["assets/Build.afa3b1f5.js","assets/outputWidgets.a5fcf389.js","assets/outputWidgets.cb6d1439.css","assets/BaseLayout.19687f5a.js","assets/BaseLayout.2d5b030e.css","assets/asyncComputed.b7d3265e.js","assets/component.vue_vue_type_script_setup_true_lang.927cbac0.js","assets/icons.1a1dc210.js","assets/Text.d2260f67.js","assets/Base.175f3ec4.js","assets/transButton.fc314012.js","assets/index.46488d8d.js","assets/build.f1d97524.js","assets/gateway.5878b159.js","assets/index.b67da7e9.js","assets/record.e2e84f62.js","assets/pubsub.903f7e54.js","assets/project.26e79e92.js","assets/organization.269baf36.js","assets/index.a675a1a6.js","assets/Title.42ad4bfb.js","assets/index.39083dd8.js"])}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});T.beforeEach(async(t,e)=>{B(t,e);const o=H.getAuthor();if(!t.meta.allowUnauthenticated&&!o){await T.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}});export{Z as A,v as E,w as a,H as b,T as r};
//# sourceMappingURL=router.8a74f04b.js.map
