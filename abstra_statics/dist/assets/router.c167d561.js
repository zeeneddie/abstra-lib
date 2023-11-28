var L=Object.defineProperty;var R=(t,e,o)=>e in t?L(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var f=(t,e,o)=>(R(t,typeof e!="symbol"?e+"":e,o),o);import{F as s,C as D,B as v,a as V,T as r}from"./Base.d7f580b0.js";import{aL as j,co as d,D as k,U as c,ab as x,f as S,O as U,cT as E,S as l,q as z,g as J,h as N,_ as n}from"./outputWidgets.0510f95f.js";import{c as I,b as w}from"./Text.50020ea6.js";import{A as O}from"./Title.b2eb2014.js";import{u as B}from"./index.da6b8ae1.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="de5d4006-9a55-4e0c-94ca-b1f3755565ef",t._sentryDebugIdIdentifier="sentry-dbid-de5d4006-9a55-4e0c-94ca-b1f3755565ef")}catch{}})();s.useInjectFormItemContext=j;s.ItemRest=d;s.install=function(t){return t.component(s.name,s),t.component(s.Item.name,s.Item),t.component(d.name,d),t};const Z=k(D);var W=globalThis&&globalThis.__rest||function(t,e){var o={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(o[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(t);i<a.length;i++)e.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(t,a[i])&&(o[a[i]]=t[a[i]]);return o};const C=()=>U(c(c({},V()),{ellipsis:{type:Boolean,default:void 0}}),["component"]),_=(t,e)=>{let{slots:o,attrs:a}=e;const i=c(c({},t),a),{ellipsis:P,rel:u}=i,h=W(i,["ellipsis","rel"]);x();const y=c(c({},h),{rel:u===void 0&&h.target==="_blank"?"noopener noreferrer":u,ellipsis:!!P,component:"a"});return delete y.navigate,S(v,y,o)};_.displayName="ATypographyLink";_.inheritAttrs=!1;_.props=C();const A=_;r.Text=I;r.Title=O;r.Paragraph=w;r.Link=A;r.Base=v;r.install=function(t){return t.component(r.name,r),t.component(r.Text.displayName,I),t.component(r.Title.displayName,O),t.component(r.Paragraph.displayName,w),t.component(r.Link.displayName,A),t};const F=()=>window.location.host.includes(".abstra.io"),q={authn:"/api/authn","cloud-api":"/api/cloud-api"},$={authn:"https://authn.abstra.cloud","cloud-api":"https://cloud-api.abstra.cloud"},g=t=>{const e="VITE_"+E.toUpper(E.snakeCase(t)),o={VITE_SENTRY_RELEASE:"4143136e9790d9af2c0a7e8996a87bbdb6b81fb1",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||(F()?q[t]:$[t])},T={authn:g("authn"),cloudApi:g("cloud-api")},p=class{async authenticate(e){try{const o=await fetch(`${T.authn}/authenticate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e})});if(!o.ok)throw new Error(await o.text());return null}catch(o){return o.message}}async verify(e,o){const a=await fetch(`${T.authn}/verify`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e,token:o})});if(!a.ok)throw new Error(await a.text());const i=await a.json();return this.saveJWT(i.jwt),this.getAuthor()}saveJWT(e){l.set(p.key,e)}getJWT(){return l.get(p.key)}getAuthor(){const e=this.getJWT();if(e)try{const o=z(e);if(o.exp&&o.exp>Date.now()/1e3)return{jwt:e,claims:o}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){l.remove(p.key)}get headers(){const e=this.getJWT();return e?{"Author-Authorization":`Bearer ${e}`}:{}}};let m=p;f(m,"key","abstracloud:auth:jwt");const H=new m,b=J({history:N("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./WidgetPreview.3a3cfd6b.js"),["assets/WidgetPreview.3a3cfd6b.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.9aaedde5.js","assets/outputWidgets.0510f95f.js","assets/outputWidgets.cb6d1439.css","assets/ActionButton.998aa76d.css","assets/WidgetsFrame.dbb60c29.js","assets/WidgetsFrame.97ae601d.css","assets/WidgetPreview.6013614a.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./Login.7ba5e5f0.js"),["assets/Login.7ba5e5f0.js","assets/outputWidgets.0510f95f.js","assets/outputWidgets.cb6d1439.css","assets/member.b9d96582.js","assets/gateway.691b6901.js","assets/activeRecord.e4826715.js","assets/pubsub.96341e46.js","assets/icons.cdb4433d.js","assets/CircularLoading.8bee79c4.js","assets/CircularLoading.f81b57b4.css","assets/WidgetsFrame.dbb60c29.js","assets/WidgetsFrame.97ae601d.css","assets/Base.d7f580b0.js","assets/transButton.763ee844.js","assets/Text.50020ea6.js","assets/Title.b2eb2014.js","assets/index.da6b8ae1.js","assets/Login.49d50616.css"])},{path:"/api-key",name:"api-key",component:()=>n(()=>import("./ReturnApiKey.22600c27.js"),["assets/ReturnApiKey.22600c27.js","assets/outputWidgets.0510f95f.js","assets/outputWidgets.cb6d1439.css","assets/project.0dfcf532.js","assets/gateway.691b6901.js","assets/activeRecord.e4826715.js","assets/pubsub.96341e46.js","assets/organization.a7cba736.js","assets/apiKey.bf045e4f.js","assets/columns.15d4fd63.js","assets/asyncComputed.702ff019.js","assets/Title.b2eb2014.js","assets/Base.d7f580b0.js","assets/transButton.763ee844.js","assets/Text.50020ea6.js","assets/index.cea43750.js","assets/index.da6b8ae1.js","assets/ReturnApiKey.909cd622.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>n(()=>import("./Organizations.222eb1f6.js"),["assets/Organizations.222eb1f6.js","assets/outputWidgets.0510f95f.js","assets/outputWidgets.cb6d1439.css","assets/icons.cdb4433d.js","assets/asyncComputed.702ff019.js","assets/organization.a7cba736.js","assets/gateway.691b6901.js","assets/activeRecord.e4826715.js","assets/pubsub.96341e46.js","assets/columns.15d4fd63.js","assets/Navbar.vue_vue_type_script_setup_true_lang.53ed4302.js","assets/logo.084e5d7c.js","assets/index.34b81398.js","assets/transButton.763ee844.js","assets/Text.50020ea6.js","assets/Base.d7f580b0.js","assets/Navbar.f4a98ea3.css","assets/CrudView.bee9cdac.js","assets/url.27504c64.js","assets/Title.b2eb2014.js","assets/index.52741b63.js","assets/index.cea43750.js","assets/CrudView.1d309d6a.css","assets/BaseLayout.97ddb8a9.js","assets/BaseLayout.2d5b030e.css","assets/ant-design.59229fa1.js","assets/index.da6b8ae1.js"])},{path:"/organizations/:organizationId",name:"organization",component:()=>n(()=>import("./Organization.68e34a69.js"),["assets/Organization.68e34a69.js","assets/Sidebar.e3c4328d.js","assets/outputWidgets.0510f95f.js","assets/outputWidgets.cb6d1439.css","assets/icons.cdb4433d.js","assets/Tooltip.22f72e88.js","assets/Tooltip.63c4352e.css","assets/Sidebar.fc09b9a8.css","assets/Navbar.vue_vue_type_script_setup_true_lang.53ed4302.js","assets/logo.084e5d7c.js","assets/asyncComputed.702ff019.js","assets/index.34b81398.js","assets/transButton.763ee844.js","assets/Text.50020ea6.js","assets/Base.d7f580b0.js","assets/Navbar.f4a98ea3.css","assets/organization.a7cba736.js","assets/gateway.691b6901.js","assets/activeRecord.e4826715.js","assets/pubsub.96341e46.js","assets/columns.15d4fd63.js","assets/BaseLayout.97ddb8a9.js","assets/BaseLayout.2d5b030e.css","assets/Title.b2eb2014.js","assets/index.da6b8ae1.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>n(()=>import("./Projects.a7564a1a.js"),["assets/Projects.a7564a1a.js","assets/outputWidgets.0510f95f.js","assets/outputWidgets.cb6d1439.css","assets/icons.cdb4433d.js","assets/asyncComputed.702ff019.js","assets/project.0dfcf532.js","assets/gateway.691b6901.js","assets/activeRecord.e4826715.js","assets/pubsub.96341e46.js","assets/organization.a7cba736.js","assets/columns.15d4fd63.js","assets/CrudView.bee9cdac.js","assets/Text.50020ea6.js","assets/Base.d7f580b0.js","assets/transButton.763ee844.js","assets/url.27504c64.js","assets/Title.b2eb2014.js","assets/index.52741b63.js","assets/index.cea43750.js","assets/CrudView.1d309d6a.css","assets/ant-design.59229fa1.js","assets/index.da6b8ae1.js"])},{path:"settings",name:"organization-settings",component:()=>n(()=>import("./OrganizationSettings.aeeb553c.js"),["assets/OrganizationSettings.aeeb553c.js","assets/outputWidgets.0510f95f.js","assets/outputWidgets.cb6d1439.css"])},{path:"members",name:"members",component:()=>n(()=>import("./Members.1573a3b2.js"),["assets/Members.1573a3b2.js","assets/outputWidgets.0510f95f.js","assets/outputWidgets.cb6d1439.css","assets/asyncComputed.702ff019.js","assets/member.b9d96582.js","assets/gateway.691b6901.js","assets/activeRecord.e4826715.js","assets/pubsub.96341e46.js","assets/columns.15d4fd63.js","assets/CrudView.bee9cdac.js","assets/icons.cdb4433d.js","assets/Text.50020ea6.js","assets/Base.d7f580b0.js","assets/transButton.763ee844.js","assets/url.27504c64.js","assets/Title.b2eb2014.js","assets/index.52741b63.js","assets/index.cea43750.js","assets/CrudView.1d309d6a.css","assets/index.da6b8ae1.js"])}]},{path:"/projects/:projectId",name:"project",component:()=>n(()=>import("./Project.c50bd6c4.js"),["assets/Project.c50bd6c4.js","assets/outputWidgets.0510f95f.js","assets/outputWidgets.cb6d1439.css","assets/BaseLayout.97ddb8a9.js","assets/BaseLayout.2d5b030e.css","assets/asyncComputed.702ff019.js","assets/project.0dfcf532.js","assets/gateway.691b6901.js","assets/activeRecord.e4826715.js","assets/pubsub.96341e46.js","assets/organization.a7cba736.js","assets/columns.15d4fd63.js","assets/Navbar.vue_vue_type_script_setup_true_lang.53ed4302.js","assets/logo.084e5d7c.js","assets/index.34b81398.js","assets/transButton.763ee844.js","assets/Text.50020ea6.js","assets/Base.d7f580b0.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.e3c4328d.js","assets/icons.cdb4433d.js","assets/Tooltip.22f72e88.js","assets/Tooltip.63c4352e.css","assets/Sidebar.fc09b9a8.css","assets/Title.b2eb2014.js","assets/index.da6b8ae1.js"]),redirect:{name:"builds"},children:[{path:"builds",name:"builds",component:()=>n(()=>import("./Builds.b3cd3d59.js"),["assets/Builds.b3cd3d59.js","assets/outputWidgets.0510f95f.js","assets/outputWidgets.cb6d1439.css","assets/asyncComputed.702ff019.js","assets/project.0dfcf532.js","assets/gateway.691b6901.js","assets/activeRecord.e4826715.js","assets/pubsub.96341e46.js","assets/build.e937a628.js","assets/columns.15d4fd63.js","assets/string.820cef05.js","assets/icons.cdb4433d.js","assets/CrudView.bee9cdac.js","assets/Text.50020ea6.js","assets/Base.d7f580b0.js","assets/transButton.763ee844.js","assets/url.27504c64.js","assets/Title.b2eb2014.js","assets/index.52741b63.js","assets/index.cea43750.js","assets/CrudView.1d309d6a.css","assets/index.b048d0fb.js","assets/index.da6b8ae1.js","assets/Builds.e814da0c.css"])},{path:"connectors",name:"connectors",component:()=>n(()=>import("./Connectors.331548da.js"),["assets/Connectors.331548da.js","assets/outputWidgets.0510f95f.js","assets/outputWidgets.cb6d1439.css","assets/columns.15d4fd63.js","assets/gateway.691b6901.js","assets/activeRecord.e4826715.js","assets/pubsub.96341e46.js","assets/connector.eeb9e3e7.js","assets/asyncComputed.702ff019.js","assets/icons.cdb4433d.js","assets/CrudView.bee9cdac.js","assets/Text.50020ea6.js","assets/Base.d7f580b0.js","assets/transButton.763ee844.js","assets/url.27504c64.js","assets/Title.b2eb2014.js","assets/index.52741b63.js","assets/index.cea43750.js","assets/CrudView.1d309d6a.css","assets/index.da6b8ae1.js"])},{path:"tables",name:"tables",component:()=>n(()=>import("./Tables.0f0b3880.js"),["assets/Tables.0f0b3880.js","assets/outputWidgets.0510f95f.js","assets/outputWidgets.cb6d1439.css","assets/icons.cdb4433d.js","assets/asyncComputed.702ff019.js","assets/columns.15d4fd63.js","assets/gateway.691b6901.js","assets/activeRecord.e4826715.js","assets/pubsub.96341e46.js","assets/tables.388faec5.js","assets/string.820cef05.js","assets/CrudView.bee9cdac.js","assets/Text.50020ea6.js","assets/Base.d7f580b0.js","assets/transButton.763ee844.js","assets/url.27504c64.js","assets/Title.b2eb2014.js","assets/index.52741b63.js","assets/index.cea43750.js","assets/CrudView.1d309d6a.css","assets/index.da6b8ae1.js"])},{path:"api-keys",name:"api-keys",component:()=>n(()=>import("./ApiKeys.fe1327e0.js"),["assets/ApiKeys.fe1327e0.js","assets/outputWidgets.0510f95f.js","assets/outputWidgets.cb6d1439.css","assets/asyncComputed.702ff019.js","assets/project.0dfcf532.js","assets/gateway.691b6901.js","assets/activeRecord.e4826715.js","assets/pubsub.96341e46.js","assets/member.b9d96582.js","assets/apiKey.bf045e4f.js","assets/columns.15d4fd63.js","assets/icons.cdb4433d.js","assets/CrudView.bee9cdac.js","assets/Text.50020ea6.js","assets/Base.d7f580b0.js","assets/transButton.763ee844.js","assets/url.27504c64.js","assets/Title.b2eb2014.js","assets/index.52741b63.js","assets/index.cea43750.js","assets/CrudView.1d309d6a.css","assets/index.b048d0fb.js","assets/index.da6b8ae1.js"])},{path:"logs",name:"logs",component:()=>n(()=>import("./Logs.192e82db.js"),["assets/Logs.192e82db.js","assets/outputWidgets.0510f95f.js","assets/outputWidgets.cb6d1439.css","assets/build.e937a628.js","assets/gateway.691b6901.js","assets/activeRecord.e4826715.js","assets/pubsub.96341e46.js","assets/columns.15d4fd63.js","assets/asyncComputed.702ff019.js","assets/ant-design.59229fa1.js","assets/transButton.763ee844.js","assets/dayjs.ee92c1e5.js","assets/index.8aea0631.js","assets/Text.50020ea6.js","assets/Base.d7f580b0.js","assets/index.b048d0fb.js","assets/Title.b2eb2014.js","assets/CollapsePanel.af576a02.js","assets/index.52741b63.js","assets/index.da6b8ae1.js","assets/Logs.fe20517e.css"])},{path:"settings",name:"project-settings",component:()=>n(()=>import("./ProjectSettings.06e8ba31.js"),["assets/ProjectSettings.06e8ba31.js","assets/asyncComputed.702ff019.js","assets/outputWidgets.0510f95f.js","assets/outputWidgets.cb6d1439.css","assets/project.0dfcf532.js","assets/gateway.691b6901.js","assets/activeRecord.e4826715.js","assets/pubsub.96341e46.js","assets/columns.15d4fd63.js","assets/Title.b2eb2014.js","assets/Base.d7f580b0.js","assets/transButton.763ee844.js","assets/Text.50020ea6.js","assets/index.da6b8ae1.js"])},{path:"env-vars",name:"env-vars",component:()=>n(()=>import("./EnvVars.862f44dc.js"),["assets/EnvVars.862f44dc.js","assets/outputWidgets.0510f95f.js","assets/outputWidgets.cb6d1439.css","assets/asyncComputed.702ff019.js","assets/gateway.691b6901.js","assets/activeRecord.e4826715.js","assets/pubsub.96341e46.js","assets/columns.15d4fd63.js","assets/icons.cdb4433d.js","assets/CrudView.bee9cdac.js","assets/Text.50020ea6.js","assets/Base.d7f580b0.js","assets/transButton.763ee844.js","assets/url.27504c64.js","assets/Title.b2eb2014.js","assets/index.52741b63.js","assets/index.cea43750.js","assets/CrudView.1d309d6a.css","assets/index.da6b8ae1.js"])},{path:"files",name:"files",component:()=>n(()=>import("./Files.89960b18.js"),["assets/Files.89960b18.js","assets/outputWidgets.0510f95f.js","assets/outputWidgets.cb6d1439.css","assets/columns.15d4fd63.js","assets/gateway.691b6901.js","assets/activeRecord.e4826715.js","assets/pubsub.96341e46.js","assets/asyncComputed.702ff019.js","assets/ant-design.59229fa1.js","assets/transButton.763ee844.js","assets/popupNotifcation.ab94f095.js","assets/DownloadOutlined.a08b9adf.js","assets/index.51b870c4.js","assets/TabPane.0b2364e5.js","assets/Base.d7f580b0.js","assets/Title.b2eb2014.js","assets/Text.50020ea6.js","assets/index.da6b8ae1.js","assets/Files.fefbf3f0.css"])}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>n(()=>import("./TableEditor.0a4d46ab.js"),["assets/TableEditor.0a4d46ab.js","assets/outputWidgets.0510f95f.js","assets/outputWidgets.cb6d1439.css","assets/BaseLayout.97ddb8a9.js","assets/BaseLayout.2d5b030e.css","assets/tables.388faec5.js","assets/gateway.691b6901.js","assets/activeRecord.e4826715.js","assets/pubsub.96341e46.js","assets/columns.15d4fd63.js","assets/string.820cef05.js","assets/asyncComputed.702ff019.js","assets/popupNotifcation.ab94f095.js","assets/index.cbe65fae.js","assets/isNumeric.75337b1e.js","assets/index.52741b63.js","assets/Base.d7f580b0.js","assets/transButton.763ee844.js","assets/icons.cdb4433d.js","assets/CircularLoading.8bee79c4.js","assets/CircularLoading.f81b57b4.css","assets/project.0dfcf532.js","assets/organization.a7cba736.js","assets/TabPane.0b2364e5.js","assets/index.34b81398.js","assets/Text.50020ea6.js","assets/Title.b2eb2014.js","assets/index.da6b8ae1.js","assets/TableEditor.57152cbf.css"])},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>n(()=>import("./ConnectorEditor.1d07a8e2.js"),["assets/ConnectorEditor.1d07a8e2.js","assets/outputWidgets.0510f95f.js","assets/outputWidgets.cb6d1439.css","assets/columns.15d4fd63.js","assets/gateway.691b6901.js","assets/activeRecord.e4826715.js","assets/pubsub.96341e46.js","assets/project.0dfcf532.js","assets/organization.a7cba736.js","assets/connector.eeb9e3e7.js","assets/asyncComputed.702ff019.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.9be73259.js","assets/ant-design.59229fa1.js","assets/transButton.763ee844.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.97ddb8a9.js","assets/BaseLayout.2d5b030e.css","assets/TabPane.0b2364e5.js","assets/Base.d7f580b0.js","assets/index.34b81398.js","assets/index.52741b63.js","assets/Text.50020ea6.js","assets/Title.b2eb2014.js","assets/index.da6b8ae1.js","assets/ConnectorEditor.77a62f6e.css"])}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});b.beforeEach(async(t,e)=>{B(t,e);const o=H.getAuthor();if(!t.meta.allowUnauthenticated&&!o){await b.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}});export{Z as A,T as E,A as L,H as a,b as r};
//# sourceMappingURL=router.c167d561.js.map
