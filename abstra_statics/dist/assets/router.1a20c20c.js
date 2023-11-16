var L=Object.defineProperty;var R=(t,e,o)=>e in t?L(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var y=(t,e,o)=>(R(t,typeof e!="symbol"?e+"":e,o),o);import{F as s,B as v,b as D,T as r}from"./Base.dbea8db9.js";import{aV as V,ct as u,D as j,U as p,ab as k,f as x,O as S,cY as E,S as l,q as U,g as z,h as J,_ as n}from"./outputWidgets.427e9347.js";import{C as N}from"./FormItem.e1548cef.js";import{b as I,a as w}from"./Text.31458a16.js";import{A as O}from"./Title.213e158e.js";import{u as B}from"./index.e440fe17.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="f43fe488-166b-430d-b9af-7511124c4a0d",t._sentryDebugIdIdentifier="sentry-dbid-f43fe488-166b-430d-b9af-7511124c4a0d")}catch{}})();s.useInjectFormItemContext=V;s.ItemRest=u;s.install=function(t){return t.component(s.name,s),t.component(s.Item.name,s.Item),t.component(u.name,u),t};const tt=j(N);var W=globalThis&&globalThis.__rest||function(t,e){var o={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(o[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(t);i<a.length;i++)e.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(t,a[i])&&(o[a[i]]=t[a[i]]);return o};const C=()=>S(p(p({},D()),{ellipsis:{type:Boolean,default:void 0}}),["component"]),_=(t,e)=>{let{slots:o,attrs:a}=e;const i=p(p({},t),a),{ellipsis:P,rel:d}=i,h=W(i,["ellipsis","rel"]);k();const f=p(p({},h),{rel:d===void 0&&h.target==="_blank"?"noopener noreferrer":d,ellipsis:!!P,component:"a"});return delete f.navigate,x(v,f,o)};_.displayName="ATypographyLink";_.inheritAttrs=!1;_.props=C();const A=_;r.Text=I;r.Title=O;r.Paragraph=w;r.Link=A;r.Base=v;r.install=function(t){return t.component(r.name,r),t.component(r.Text.displayName,I),t.component(r.Title.displayName,O),t.component(r.Paragraph.displayName,w),t.component(r.Link.displayName,A),t};const F=()=>window.location.host.includes(".abstra.io"),q={authn:"/api/authn","cloud-api":"/api/cloud-api"},$={authn:"https://authn.abstra.cloud","cloud-api":"https://cloud-api.abstra.cloud"},g=t=>{const e="VITE_"+E.toUpper(E.snakeCase(t)),o={VITE_SENTRY_RELEASE:"73ef230c0918038cae8f8672abed9cb92f159c1a",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||(F()?q[t]:$[t])},b={authn:g("authn"),cloudApi:g("cloud-api")},c=class{async authenticate(e){try{const o=await fetch(`${b.authn}/authenticate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e})});if(!o.ok)throw new Error(await o.text());return null}catch(o){return o.message}}async verify(e,o){const a=await fetch(`${b.authn}/verify`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e,token:o})});if(!a.ok)throw new Error(await a.text());const i=await a.json();return this.saveJWT(i.jwt),this.getAuthor()}saveJWT(e){l.set(c.key,e)}getJWT(){return l.get(c.key)}getAuthor(){const e=this.getJWT();if(e)try{const o=U(e);if(o.exp&&o.exp>Date.now()/1e3)return{jwt:e,claims:o}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){l.remove(c.key)}get headers(){const e=this.getJWT();return e?{"Author-Authorization":`Bearer ${e}`}:{}}};let m=c;y(m,"key","abstracloud:auth:jwt");const Y=new m,T=z({history:J("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./WidgetPreview.21ad99fd.js"),["assets/WidgetPreview.21ad99fd.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.d8baf360.js","assets/outputWidgets.427e9347.js","assets/outputWidgets.0f63bd62.css","assets/Steps.e44a290d.js","assets/Steps.998aa76d.css","assets/WidgetsFrame.e9d125d0.js","assets/WidgetsFrame.0816a5f5.css","assets/WidgetPreview.86a24f90.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./Login.9352f77e.js"),["assets/Login.9352f77e.js","assets/outputWidgets.427e9347.js","assets/outputWidgets.0f63bd62.css","assets/member.e9d58ec7.js","assets/gateway.5f288bf8.js","assets/activeRecord.91f10272.js","assets/pubsub.9b59356e.js","assets/icons.2a865956.js","assets/CircularLoading.044df273.js","assets/CircularLoading.f81b57b4.css","assets/WidgetsFrame.e9d125d0.js","assets/WidgetsFrame.0816a5f5.css","assets/Base.dbea8db9.js","assets/FormItem.e1548cef.js","assets/transButton.470f2fe6.js","assets/Text.31458a16.js","assets/Title.213e158e.js","assets/index.e440fe17.js","assets/Login.92d70f03.css"])},{path:"/api-key",name:"api-key",component:()=>n(()=>import("./ReturnApiKey.c1064383.js"),["assets/ReturnApiKey.c1064383.js","assets/outputWidgets.427e9347.js","assets/outputWidgets.0f63bd62.css","assets/project.b9df110d.js","assets/gateway.5f288bf8.js","assets/activeRecord.91f10272.js","assets/pubsub.9b59356e.js","assets/organization.432163c5.js","assets/apiKey.f57f119e.js","assets/columns.eab062cb.js","assets/index.cf4c23b9.js","assets/asyncComputed.32abd7c2.js","assets/Title.213e158e.js","assets/Base.dbea8db9.js","assets/FormItem.e1548cef.js","assets/transButton.470f2fe6.js","assets/Text.31458a16.js","assets/index.3804082b.js","assets/index.e440fe17.js","assets/ReturnApiKey.909cd622.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>n(()=>import("./Organizations.6d1bf5e8.js"),["assets/Organizations.6d1bf5e8.js","assets/outputWidgets.427e9347.js","assets/outputWidgets.0f63bd62.css","assets/icons.2a865956.js","assets/asyncComputed.32abd7c2.js","assets/organization.432163c5.js","assets/gateway.5f288bf8.js","assets/activeRecord.91f10272.js","assets/pubsub.9b59356e.js","assets/columns.eab062cb.js","assets/index.cf4c23b9.js","assets/Navbar.vue_vue_type_script_setup_true_lang.54b32cf1.js","assets/logo.084e5d7c.js","assets/Text.31458a16.js","assets/Base.dbea8db9.js","assets/FormItem.e1548cef.js","assets/transButton.470f2fe6.js","assets/index.e58605b8.js","assets/Navbar.f4a98ea3.css","assets/CrudView.22a93e62.js","assets/url.9044ee0d.js","assets/Title.213e158e.js","assets/index.8fcd530b.js","assets/index.36e3a141.js","assets/index.3804082b.js","assets/CrudView.1d309d6a.css","assets/BaseLayout.0abe2ed6.js","assets/BaseLayout.2d5b030e.css","assets/ant-design.484e81b9.js","assets/index.e440fe17.js"])},{path:"/organizations/:organizationId",name:"organization",component:()=>n(()=>import("./Organization.c55deec7.js"),["assets/Organization.c55deec7.js","assets/Sidebar.50f4a5e7.js","assets/outputWidgets.427e9347.js","assets/outputWidgets.0f63bd62.css","assets/icons.2a865956.js","assets/Tooltip.93b3fa6a.js","assets/Tooltip.63c4352e.css","assets/Sidebar.c72a98ac.css","assets/Navbar.vue_vue_type_script_setup_true_lang.54b32cf1.js","assets/logo.084e5d7c.js","assets/asyncComputed.32abd7c2.js","assets/Text.31458a16.js","assets/Base.dbea8db9.js","assets/FormItem.e1548cef.js","assets/transButton.470f2fe6.js","assets/index.e58605b8.js","assets/Navbar.f4a98ea3.css","assets/organization.432163c5.js","assets/gateway.5f288bf8.js","assets/activeRecord.91f10272.js","assets/pubsub.9b59356e.js","assets/columns.eab062cb.js","assets/index.cf4c23b9.js","assets/BaseLayout.0abe2ed6.js","assets/BaseLayout.2d5b030e.css","assets/Title.213e158e.js","assets/index.e440fe17.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>n(()=>import("./Projects.8f35d394.js"),["assets/Projects.8f35d394.js","assets/outputWidgets.427e9347.js","assets/outputWidgets.0f63bd62.css","assets/icons.2a865956.js","assets/asyncComputed.32abd7c2.js","assets/project.b9df110d.js","assets/gateway.5f288bf8.js","assets/activeRecord.91f10272.js","assets/pubsub.9b59356e.js","assets/organization.432163c5.js","assets/columns.eab062cb.js","assets/index.cf4c23b9.js","assets/CrudView.22a93e62.js","assets/Text.31458a16.js","assets/Base.dbea8db9.js","assets/FormItem.e1548cef.js","assets/transButton.470f2fe6.js","assets/url.9044ee0d.js","assets/Title.213e158e.js","assets/index.8fcd530b.js","assets/index.36e3a141.js","assets/index.3804082b.js","assets/CrudView.1d309d6a.css","assets/ant-design.484e81b9.js","assets/index.e440fe17.js"])},{path:"settings",name:"organization-settings",component:()=>n(()=>import("./OrganizationSettings.8891d51c.js"),["assets/OrganizationSettings.8891d51c.js","assets/outputWidgets.427e9347.js","assets/outputWidgets.0f63bd62.css"])},{path:"members",name:"members",component:()=>n(()=>import("./Members.45d8b708.js"),["assets/Members.45d8b708.js","assets/outputWidgets.427e9347.js","assets/outputWidgets.0f63bd62.css","assets/asyncComputed.32abd7c2.js","assets/member.e9d58ec7.js","assets/gateway.5f288bf8.js","assets/activeRecord.91f10272.js","assets/pubsub.9b59356e.js","assets/columns.eab062cb.js","assets/index.cf4c23b9.js","assets/CrudView.22a93e62.js","assets/icons.2a865956.js","assets/Text.31458a16.js","assets/Base.dbea8db9.js","assets/FormItem.e1548cef.js","assets/transButton.470f2fe6.js","assets/url.9044ee0d.js","assets/Title.213e158e.js","assets/index.8fcd530b.js","assets/index.36e3a141.js","assets/index.3804082b.js","assets/CrudView.1d309d6a.css","assets/index.e440fe17.js"])}]},{path:"/projects/:projectId",name:"project",component:()=>n(()=>import("./Project.5deff724.js"),["assets/Project.5deff724.js","assets/outputWidgets.427e9347.js","assets/outputWidgets.0f63bd62.css","assets/BaseLayout.0abe2ed6.js","assets/BaseLayout.2d5b030e.css","assets/asyncComputed.32abd7c2.js","assets/project.b9df110d.js","assets/gateway.5f288bf8.js","assets/activeRecord.91f10272.js","assets/pubsub.9b59356e.js","assets/organization.432163c5.js","assets/columns.eab062cb.js","assets/index.cf4c23b9.js","assets/Navbar.vue_vue_type_script_setup_true_lang.54b32cf1.js","assets/logo.084e5d7c.js","assets/Text.31458a16.js","assets/Base.dbea8db9.js","assets/FormItem.e1548cef.js","assets/transButton.470f2fe6.js","assets/index.e58605b8.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.50f4a5e7.js","assets/icons.2a865956.js","assets/Tooltip.93b3fa6a.js","assets/Tooltip.63c4352e.css","assets/Sidebar.c72a98ac.css","assets/Title.213e158e.js","assets/index.e440fe17.js"]),redirect:{name:"builds"},children:[{path:"builds",name:"builds",component:()=>n(()=>import("./Builds.f67d37b3.js"),["assets/Builds.f67d37b3.js","assets/outputWidgets.427e9347.js","assets/outputWidgets.0f63bd62.css","assets/asyncComputed.32abd7c2.js","assets/project.b9df110d.js","assets/gateway.5f288bf8.js","assets/activeRecord.91f10272.js","assets/pubsub.9b59356e.js","assets/build.c2118fa1.js","assets/columns.eab062cb.js","assets/index.cf4c23b9.js","assets/string.6480a4a9.js","assets/icons.2a865956.js","assets/CrudView.22a93e62.js","assets/Text.31458a16.js","assets/Base.dbea8db9.js","assets/FormItem.e1548cef.js","assets/transButton.470f2fe6.js","assets/url.9044ee0d.js","assets/Title.213e158e.js","assets/index.8fcd530b.js","assets/index.36e3a141.js","assets/index.3804082b.js","assets/CrudView.1d309d6a.css","assets/index.b048d0fb.js","assets/index.e440fe17.js","assets/Builds.e814da0c.css"])},{path:"connectors",name:"connectors",component:()=>n(()=>import("./Connectors.64c86bcc.js"),["assets/Connectors.64c86bcc.js","assets/outputWidgets.427e9347.js","assets/outputWidgets.0f63bd62.css","assets/columns.eab062cb.js","assets/gateway.5f288bf8.js","assets/activeRecord.91f10272.js","assets/pubsub.9b59356e.js","assets/index.cf4c23b9.js","assets/connector.4efb60f4.js","assets/asyncComputed.32abd7c2.js","assets/icons.2a865956.js","assets/CrudView.22a93e62.js","assets/Text.31458a16.js","assets/Base.dbea8db9.js","assets/FormItem.e1548cef.js","assets/transButton.470f2fe6.js","assets/url.9044ee0d.js","assets/Title.213e158e.js","assets/index.8fcd530b.js","assets/index.36e3a141.js","assets/index.3804082b.js","assets/CrudView.1d309d6a.css","assets/index.e440fe17.js"])},{path:"tables",name:"tables",component:()=>n(()=>import("./Tables.a9b6ae67.js"),["assets/Tables.a9b6ae67.js","assets/outputWidgets.427e9347.js","assets/outputWidgets.0f63bd62.css","assets/icons.2a865956.js","assets/asyncComputed.32abd7c2.js","assets/columns.eab062cb.js","assets/gateway.5f288bf8.js","assets/activeRecord.91f10272.js","assets/pubsub.9b59356e.js","assets/index.cf4c23b9.js","assets/tables.f152865a.js","assets/string.6480a4a9.js","assets/CrudView.22a93e62.js","assets/Text.31458a16.js","assets/Base.dbea8db9.js","assets/FormItem.e1548cef.js","assets/transButton.470f2fe6.js","assets/url.9044ee0d.js","assets/Title.213e158e.js","assets/index.8fcd530b.js","assets/index.36e3a141.js","assets/index.3804082b.js","assets/CrudView.1d309d6a.css","assets/index.e440fe17.js"])},{path:"api-keys",name:"api-keys",component:()=>n(()=>import("./ApiKeys.4ee34fd3.js"),["assets/ApiKeys.4ee34fd3.js","assets/outputWidgets.427e9347.js","assets/outputWidgets.0f63bd62.css","assets/asyncComputed.32abd7c2.js","assets/project.b9df110d.js","assets/gateway.5f288bf8.js","assets/activeRecord.91f10272.js","assets/pubsub.9b59356e.js","assets/member.e9d58ec7.js","assets/apiKey.f57f119e.js","assets/columns.eab062cb.js","assets/index.cf4c23b9.js","assets/icons.2a865956.js","assets/CrudView.22a93e62.js","assets/Text.31458a16.js","assets/Base.dbea8db9.js","assets/FormItem.e1548cef.js","assets/transButton.470f2fe6.js","assets/url.9044ee0d.js","assets/Title.213e158e.js","assets/index.8fcd530b.js","assets/index.36e3a141.js","assets/index.3804082b.js","assets/CrudView.1d309d6a.css","assets/index.b048d0fb.js","assets/index.e440fe17.js"])},{path:"logs",name:"logs",component:()=>n(()=>import("./Logs.84266ad0.js"),["assets/Logs.84266ad0.js","assets/outputWidgets.427e9347.js","assets/outputWidgets.0f63bd62.css","assets/build.c2118fa1.js","assets/gateway.5f288bf8.js","assets/activeRecord.91f10272.js","assets/pubsub.9b59356e.js","assets/columns.eab062cb.js","assets/index.cf4c23b9.js","assets/asyncComputed.32abd7c2.js","assets/ant-design.484e81b9.js","assets/transButton.470f2fe6.js","assets/index.122357f4.js","assets/Text.31458a16.js","assets/Base.dbea8db9.js","assets/FormItem.e1548cef.js","assets/dayjs.7e73d8ac.js","assets/index.b048d0fb.js","assets/Title.213e158e.js","assets/CollapsePanel.bad9e978.js","assets/index.36e3a141.js","assets/index.e440fe17.js"])},{path:"settings",name:"project-settings",component:()=>n(()=>import("./ProjectSettings.ee362a54.js"),["assets/ProjectSettings.ee362a54.js","assets/asyncComputed.32abd7c2.js","assets/outputWidgets.427e9347.js","assets/outputWidgets.0f63bd62.css","assets/project.b9df110d.js","assets/gateway.5f288bf8.js","assets/activeRecord.91f10272.js","assets/pubsub.9b59356e.js","assets/columns.eab062cb.js","assets/index.cf4c23b9.js","assets/Title.213e158e.js","assets/Base.dbea8db9.js","assets/FormItem.e1548cef.js","assets/transButton.470f2fe6.js","assets/Text.31458a16.js","assets/index.8fcd530b.js","assets/index.e440fe17.js"])},{path:"env-vars",name:"env-vars",component:()=>n(()=>import("./EnvVars.0f5ffc3d.js"),["assets/EnvVars.0f5ffc3d.js","assets/outputWidgets.427e9347.js","assets/outputWidgets.0f63bd62.css","assets/asyncComputed.32abd7c2.js","assets/gateway.5f288bf8.js","assets/activeRecord.91f10272.js","assets/pubsub.9b59356e.js","assets/columns.eab062cb.js","assets/index.cf4c23b9.js","assets/icons.2a865956.js","assets/CrudView.22a93e62.js","assets/Text.31458a16.js","assets/Base.dbea8db9.js","assets/FormItem.e1548cef.js","assets/transButton.470f2fe6.js","assets/url.9044ee0d.js","assets/Title.213e158e.js","assets/index.8fcd530b.js","assets/index.36e3a141.js","assets/index.3804082b.js","assets/CrudView.1d309d6a.css","assets/index.e440fe17.js"])},{path:"files",name:"files",component:()=>n(()=>import("./Files.6306a6c2.js"),["assets/Files.6306a6c2.js","assets/outputWidgets.427e9347.js","assets/outputWidgets.0f63bd62.css","assets/columns.eab062cb.js","assets/gateway.5f288bf8.js","assets/activeRecord.91f10272.js","assets/pubsub.9b59356e.js","assets/index.cf4c23b9.js","assets/asyncComputed.32abd7c2.js","assets/CrudView.22a93e62.js","assets/icons.2a865956.js","assets/Text.31458a16.js","assets/Base.dbea8db9.js","assets/FormItem.e1548cef.js","assets/transButton.470f2fe6.js","assets/url.9044ee0d.js","assets/Title.213e158e.js","assets/index.8fcd530b.js","assets/index.36e3a141.js","assets/index.3804082b.js","assets/CrudView.1d309d6a.css","assets/index.e440fe17.js"])}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>n(()=>import("./TableEditor.66dc0db3.js"),["assets/TableEditor.66dc0db3.js","assets/outputWidgets.427e9347.js","assets/outputWidgets.0f63bd62.css","assets/BaseLayout.0abe2ed6.js","assets/BaseLayout.2d5b030e.css","assets/tables.f152865a.js","assets/gateway.5f288bf8.js","assets/activeRecord.91f10272.js","assets/pubsub.9b59356e.js","assets/columns.eab062cb.js","assets/index.cf4c23b9.js","assets/string.6480a4a9.js","assets/asyncComputed.32abd7c2.js","assets/popupNotifcation.ad1f6d90.js","assets/index.36e3a141.js","assets/Base.dbea8db9.js","assets/FormItem.e1548cef.js","assets/transButton.470f2fe6.js","assets/index.00c2f1ee.js","assets/isNumeric.75337b1e.js","assets/index.51026ef8.js","assets/icons.2a865956.js","assets/CircularLoading.044df273.js","assets/CircularLoading.f81b57b4.css","assets/project.b9df110d.js","assets/organization.432163c5.js","assets/TabPane.7a3514c0.js","assets/index.e58605b8.js","assets/Text.31458a16.js","assets/Title.213e158e.js","assets/index.e440fe17.js","assets/TableEditor.3e12aa3f.css"])},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>n(()=>import("./ConnectorEditor.0944412b.js"),["assets/ConnectorEditor.0944412b.js","assets/outputWidgets.427e9347.js","assets/outputWidgets.0f63bd62.css","assets/columns.eab062cb.js","assets/gateway.5f288bf8.js","assets/activeRecord.91f10272.js","assets/pubsub.9b59356e.js","assets/index.cf4c23b9.js","assets/project.b9df110d.js","assets/organization.432163c5.js","assets/connector.4efb60f4.js","assets/asyncComputed.32abd7c2.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.a846a0dc.js","assets/ant-design.484e81b9.js","assets/transButton.470f2fe6.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.0abe2ed6.js","assets/BaseLayout.2d5b030e.css","assets/TabPane.7a3514c0.js","assets/FormItem.e1548cef.js","assets/index.e58605b8.js","assets/Base.dbea8db9.js","assets/index.36e3a141.js","assets/Text.31458a16.js","assets/Title.213e158e.js","assets/index.e440fe17.js","assets/ConnectorEditor.77a62f6e.css"])}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});T.beforeEach(async(t,e)=>{B(t,e);const o=Y.getAuthor();if(!t.meta.allowUnauthenticated&&!o){await T.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}});export{tt as A,b as E,A as L,Y as a,T as r};
//# sourceMappingURL=router.1a20c20c.js.map
