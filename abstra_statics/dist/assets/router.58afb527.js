var L=Object.defineProperty;var R=(t,e,o)=>e in t?L(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var f=(t,e,o)=>(R(t,typeof e!="symbol"?e+"":e,o),o);import{F as s,C as D,B as v,a as V,T as r}from"./Base.402efeb6.js";import{aV as j,ct as d,D as k,U as p,ab as x,f as S,O as U,cY as E,S as l,q as z,g as J,h as N,_ as n}from"./outputWidgets.be869244.js";import{c as I,b as w}from"./Text.2d270728.js";import{A as O}from"./Title.bfbbb427.js";import{u as B}from"./index.3ed139f2.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="567a2dd0-0b2b-442f-8825-2c8aa2490be9",t._sentryDebugIdIdentifier="sentry-dbid-567a2dd0-0b2b-442f-8825-2c8aa2490be9")}catch{}})();s.useInjectFormItemContext=j;s.ItemRest=d;s.install=function(t){return t.component(s.name,s),t.component(s.Item.name,s.Item),t.component(d.name,d),t};const Z=k(D);var W=globalThis&&globalThis.__rest||function(t,e){var o={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(o[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(t);i<a.length;i++)e.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(t,a[i])&&(o[a[i]]=t[a[i]]);return o};const C=()=>U(p(p({},V()),{ellipsis:{type:Boolean,default:void 0}}),["component"]),_=(t,e)=>{let{slots:o,attrs:a}=e;const i=p(p({},t),a),{ellipsis:P,rel:u}=i,h=W(i,["ellipsis","rel"]);x();const y=p(p({},h),{rel:u===void 0&&h.target==="_blank"?"noopener noreferrer":u,ellipsis:!!P,component:"a"});return delete y.navigate,S(v,y,o)};_.displayName="ATypographyLink";_.inheritAttrs=!1;_.props=C();const A=_;r.Text=I;r.Title=O;r.Paragraph=w;r.Link=A;r.Base=v;r.install=function(t){return t.component(r.name,r),t.component(r.Text.displayName,I),t.component(r.Title.displayName,O),t.component(r.Paragraph.displayName,w),t.component(r.Link.displayName,A),t};const F=()=>window.location.host.includes(".abstra.io"),q={authn:"/api/authn","cloud-api":"/api/cloud-api"},$={authn:"https://authn.abstra.cloud","cloud-api":"https://cloud-api.abstra.cloud"},g=t=>{const e="VITE_"+E.toUpper(E.snakeCase(t)),o={VITE_SENTRY_RELEASE:"96855a74dbb3165721effcaab6e4fafd103ee3f5",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||(F()?q[t]:$[t])},b={authn:g("authn"),cloudApi:g("cloud-api")},c=class{async authenticate(e){try{const o=await fetch(`${b.authn}/authenticate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e})});if(!o.ok)throw new Error(await o.text());return null}catch(o){return o.message}}async verify(e,o){const a=await fetch(`${b.authn}/verify`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e,token:o})});if(!a.ok)throw new Error(await a.text());const i=await a.json();return this.saveJWT(i.jwt),this.getAuthor()}saveJWT(e){l.set(c.key,e)}getJWT(){return l.get(c.key)}getAuthor(){const e=this.getJWT();if(e)try{const o=z(e);if(o.exp&&o.exp>Date.now()/1e3)return{jwt:e,claims:o}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){l.remove(c.key)}get headers(){const e=this.getJWT();return e?{"Author-Authorization":`Bearer ${e}`}:{}}};let m=c;f(m,"key","abstracloud:auth:jwt");const Y=new m,T=J({history:N("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./WidgetPreview.40c6fed5.js"),["assets/WidgetPreview.40c6fed5.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.537db3d5.js","assets/outputWidgets.be869244.js","assets/outputWidgets.cb6d1439.css","assets/ActionButton.998aa76d.css","assets/WidgetsFrame.ed1e191c.js","assets/WidgetsFrame.97ae601d.css","assets/WidgetPreview.6013614a.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./Login.da00b754.js"),["assets/Login.da00b754.js","assets/outputWidgets.be869244.js","assets/outputWidgets.cb6d1439.css","assets/member.f45d2952.js","assets/gateway.178cd360.js","assets/activeRecord.37f03962.js","assets/pubsub.b34d2fda.js","assets/icons.bdc5c208.js","assets/CircularLoading.26783e5b.js","assets/CircularLoading.f81b57b4.css","assets/WidgetsFrame.ed1e191c.js","assets/WidgetsFrame.97ae601d.css","assets/Base.402efeb6.js","assets/transButton.b7be824a.js","assets/Text.2d270728.js","assets/Title.bfbbb427.js","assets/index.3ed139f2.js","assets/Login.49d50616.css"])},{path:"/api-key",name:"api-key",component:()=>n(()=>import("./ReturnApiKey.a2d2fd94.js"),["assets/ReturnApiKey.a2d2fd94.js","assets/outputWidgets.be869244.js","assets/outputWidgets.cb6d1439.css","assets/project.b473bbff.js","assets/gateway.178cd360.js","assets/activeRecord.37f03962.js","assets/pubsub.b34d2fda.js","assets/organization.27b898b7.js","assets/apiKey.2bacd04c.js","assets/columns.39b62365.js","assets/asyncComputed.22c467bd.js","assets/Title.bfbbb427.js","assets/Base.402efeb6.js","assets/transButton.b7be824a.js","assets/Text.2d270728.js","assets/index.67b27967.js","assets/index.3ed139f2.js","assets/ReturnApiKey.909cd622.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>n(()=>import("./Organizations.afe3e2a5.js"),["assets/Organizations.afe3e2a5.js","assets/outputWidgets.be869244.js","assets/outputWidgets.cb6d1439.css","assets/icons.bdc5c208.js","assets/asyncComputed.22c467bd.js","assets/organization.27b898b7.js","assets/gateway.178cd360.js","assets/activeRecord.37f03962.js","assets/pubsub.b34d2fda.js","assets/columns.39b62365.js","assets/Navbar.vue_vue_type_script_setup_true_lang.12beb5b5.js","assets/logo.084e5d7c.js","assets/index.5a58d51c.js","assets/transButton.b7be824a.js","assets/Text.2d270728.js","assets/Base.402efeb6.js","assets/Navbar.f4a98ea3.css","assets/CrudView.4f83be33.js","assets/url.4c4e9448.js","assets/Title.bfbbb427.js","assets/index.9a39d75e.js","assets/index.67b27967.js","assets/CrudView.1d309d6a.css","assets/BaseLayout.860b2b28.js","assets/BaseLayout.2d5b030e.css","assets/ant-design.5c8bd1d6.js","assets/index.3ed139f2.js"])},{path:"/organizations/:organizationId",name:"organization",component:()=>n(()=>import("./Organization.09ca6076.js"),["assets/Organization.09ca6076.js","assets/Sidebar.a60cff50.js","assets/outputWidgets.be869244.js","assets/outputWidgets.cb6d1439.css","assets/icons.bdc5c208.js","assets/Tooltip.0a8388c0.js","assets/Tooltip.63c4352e.css","assets/Sidebar.fc09b9a8.css","assets/Navbar.vue_vue_type_script_setup_true_lang.12beb5b5.js","assets/logo.084e5d7c.js","assets/asyncComputed.22c467bd.js","assets/index.5a58d51c.js","assets/transButton.b7be824a.js","assets/Text.2d270728.js","assets/Base.402efeb6.js","assets/Navbar.f4a98ea3.css","assets/organization.27b898b7.js","assets/gateway.178cd360.js","assets/activeRecord.37f03962.js","assets/pubsub.b34d2fda.js","assets/columns.39b62365.js","assets/BaseLayout.860b2b28.js","assets/BaseLayout.2d5b030e.css","assets/Title.bfbbb427.js","assets/index.3ed139f2.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>n(()=>import("./Projects.3d58e154.js"),["assets/Projects.3d58e154.js","assets/outputWidgets.be869244.js","assets/outputWidgets.cb6d1439.css","assets/icons.bdc5c208.js","assets/asyncComputed.22c467bd.js","assets/project.b473bbff.js","assets/gateway.178cd360.js","assets/activeRecord.37f03962.js","assets/pubsub.b34d2fda.js","assets/organization.27b898b7.js","assets/columns.39b62365.js","assets/CrudView.4f83be33.js","assets/Text.2d270728.js","assets/Base.402efeb6.js","assets/transButton.b7be824a.js","assets/url.4c4e9448.js","assets/Title.bfbbb427.js","assets/index.9a39d75e.js","assets/index.67b27967.js","assets/CrudView.1d309d6a.css","assets/ant-design.5c8bd1d6.js","assets/index.3ed139f2.js"])},{path:"settings",name:"organization-settings",component:()=>n(()=>import("./OrganizationSettings.dd91965d.js"),["assets/OrganizationSettings.dd91965d.js","assets/outputWidgets.be869244.js","assets/outputWidgets.cb6d1439.css"])},{path:"members",name:"members",component:()=>n(()=>import("./Members.b0ac4b09.js"),["assets/Members.b0ac4b09.js","assets/outputWidgets.be869244.js","assets/outputWidgets.cb6d1439.css","assets/asyncComputed.22c467bd.js","assets/member.f45d2952.js","assets/gateway.178cd360.js","assets/activeRecord.37f03962.js","assets/pubsub.b34d2fda.js","assets/columns.39b62365.js","assets/CrudView.4f83be33.js","assets/icons.bdc5c208.js","assets/Text.2d270728.js","assets/Base.402efeb6.js","assets/transButton.b7be824a.js","assets/url.4c4e9448.js","assets/Title.bfbbb427.js","assets/index.9a39d75e.js","assets/index.67b27967.js","assets/CrudView.1d309d6a.css","assets/index.3ed139f2.js"])}]},{path:"/projects/:projectId",name:"project",component:()=>n(()=>import("./Project.a9d6f71f.js"),["assets/Project.a9d6f71f.js","assets/outputWidgets.be869244.js","assets/outputWidgets.cb6d1439.css","assets/BaseLayout.860b2b28.js","assets/BaseLayout.2d5b030e.css","assets/asyncComputed.22c467bd.js","assets/project.b473bbff.js","assets/gateway.178cd360.js","assets/activeRecord.37f03962.js","assets/pubsub.b34d2fda.js","assets/organization.27b898b7.js","assets/columns.39b62365.js","assets/Navbar.vue_vue_type_script_setup_true_lang.12beb5b5.js","assets/logo.084e5d7c.js","assets/index.5a58d51c.js","assets/transButton.b7be824a.js","assets/Text.2d270728.js","assets/Base.402efeb6.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.a60cff50.js","assets/icons.bdc5c208.js","assets/Tooltip.0a8388c0.js","assets/Tooltip.63c4352e.css","assets/Sidebar.fc09b9a8.css","assets/Title.bfbbb427.js","assets/index.3ed139f2.js"]),redirect:{name:"builds"},children:[{path:"builds",name:"builds",component:()=>n(()=>import("./Builds.21559d1f.js"),["assets/Builds.21559d1f.js","assets/outputWidgets.be869244.js","assets/outputWidgets.cb6d1439.css","assets/asyncComputed.22c467bd.js","assets/project.b473bbff.js","assets/gateway.178cd360.js","assets/activeRecord.37f03962.js","assets/pubsub.b34d2fda.js","assets/build.d401be4f.js","assets/columns.39b62365.js","assets/string.1d9ffe03.js","assets/icons.bdc5c208.js","assets/CrudView.4f83be33.js","assets/Text.2d270728.js","assets/Base.402efeb6.js","assets/transButton.b7be824a.js","assets/url.4c4e9448.js","assets/Title.bfbbb427.js","assets/index.9a39d75e.js","assets/index.67b27967.js","assets/CrudView.1d309d6a.css","assets/index.b048d0fb.js","assets/index.3ed139f2.js","assets/Builds.e814da0c.css"])},{path:"connectors",name:"connectors",component:()=>n(()=>import("./Connectors.d120859a.js"),["assets/Connectors.d120859a.js","assets/outputWidgets.be869244.js","assets/outputWidgets.cb6d1439.css","assets/columns.39b62365.js","assets/gateway.178cd360.js","assets/activeRecord.37f03962.js","assets/pubsub.b34d2fda.js","assets/connector.201a998d.js","assets/asyncComputed.22c467bd.js","assets/icons.bdc5c208.js","assets/CrudView.4f83be33.js","assets/Text.2d270728.js","assets/Base.402efeb6.js","assets/transButton.b7be824a.js","assets/url.4c4e9448.js","assets/Title.bfbbb427.js","assets/index.9a39d75e.js","assets/index.67b27967.js","assets/CrudView.1d309d6a.css","assets/index.3ed139f2.js"])},{path:"tables",name:"tables",component:()=>n(()=>import("./Tables.edf856f6.js"),["assets/Tables.edf856f6.js","assets/outputWidgets.be869244.js","assets/outputWidgets.cb6d1439.css","assets/icons.bdc5c208.js","assets/asyncComputed.22c467bd.js","assets/columns.39b62365.js","assets/gateway.178cd360.js","assets/activeRecord.37f03962.js","assets/pubsub.b34d2fda.js","assets/tables.6f07e79d.js","assets/string.1d9ffe03.js","assets/CrudView.4f83be33.js","assets/Text.2d270728.js","assets/Base.402efeb6.js","assets/transButton.b7be824a.js","assets/url.4c4e9448.js","assets/Title.bfbbb427.js","assets/index.9a39d75e.js","assets/index.67b27967.js","assets/CrudView.1d309d6a.css","assets/index.3ed139f2.js"])},{path:"api-keys",name:"api-keys",component:()=>n(()=>import("./ApiKeys.09bd3c0f.js"),["assets/ApiKeys.09bd3c0f.js","assets/outputWidgets.be869244.js","assets/outputWidgets.cb6d1439.css","assets/asyncComputed.22c467bd.js","assets/project.b473bbff.js","assets/gateway.178cd360.js","assets/activeRecord.37f03962.js","assets/pubsub.b34d2fda.js","assets/member.f45d2952.js","assets/apiKey.2bacd04c.js","assets/columns.39b62365.js","assets/icons.bdc5c208.js","assets/CrudView.4f83be33.js","assets/Text.2d270728.js","assets/Base.402efeb6.js","assets/transButton.b7be824a.js","assets/url.4c4e9448.js","assets/Title.bfbbb427.js","assets/index.9a39d75e.js","assets/index.67b27967.js","assets/CrudView.1d309d6a.css","assets/index.b048d0fb.js","assets/index.3ed139f2.js"])},{path:"logs",name:"logs",component:()=>n(()=>import("./Logs.b6cdd4a1.js"),["assets/Logs.b6cdd4a1.js","assets/outputWidgets.be869244.js","assets/outputWidgets.cb6d1439.css","assets/build.d401be4f.js","assets/gateway.178cd360.js","assets/activeRecord.37f03962.js","assets/pubsub.b34d2fda.js","assets/columns.39b62365.js","assets/asyncComputed.22c467bd.js","assets/ant-design.5c8bd1d6.js","assets/transButton.b7be824a.js","assets/dayjs.cf2d4915.js","assets/index.fcb868e0.js","assets/Text.2d270728.js","assets/Base.402efeb6.js","assets/index.b048d0fb.js","assets/Title.bfbbb427.js","assets/CollapsePanel.a69f2d1a.js","assets/index.9a39d75e.js","assets/index.3ed139f2.js","assets/Logs.5df28e1e.css"])},{path:"settings",name:"project-settings",component:()=>n(()=>import("./ProjectSettings.8e33007e.js"),["assets/ProjectSettings.8e33007e.js","assets/asyncComputed.22c467bd.js","assets/outputWidgets.be869244.js","assets/outputWidgets.cb6d1439.css","assets/project.b473bbff.js","assets/gateway.178cd360.js","assets/activeRecord.37f03962.js","assets/pubsub.b34d2fda.js","assets/columns.39b62365.js","assets/Title.bfbbb427.js","assets/Base.402efeb6.js","assets/transButton.b7be824a.js","assets/Text.2d270728.js","assets/index.3ed139f2.js"])},{path:"env-vars",name:"env-vars",component:()=>n(()=>import("./EnvVars.547b4de5.js"),["assets/EnvVars.547b4de5.js","assets/outputWidgets.be869244.js","assets/outputWidgets.cb6d1439.css","assets/asyncComputed.22c467bd.js","assets/gateway.178cd360.js","assets/activeRecord.37f03962.js","assets/pubsub.b34d2fda.js","assets/columns.39b62365.js","assets/icons.bdc5c208.js","assets/CrudView.4f83be33.js","assets/Text.2d270728.js","assets/Base.402efeb6.js","assets/transButton.b7be824a.js","assets/url.4c4e9448.js","assets/Title.bfbbb427.js","assets/index.9a39d75e.js","assets/index.67b27967.js","assets/CrudView.1d309d6a.css","assets/index.3ed139f2.js"])},{path:"files",name:"files",component:()=>n(()=>import("./Files.5a0234cc.js"),["assets/Files.5a0234cc.js","assets/outputWidgets.be869244.js","assets/outputWidgets.cb6d1439.css","assets/columns.39b62365.js","assets/gateway.178cd360.js","assets/activeRecord.37f03962.js","assets/pubsub.b34d2fda.js","assets/asyncComputed.22c467bd.js","assets/CrudView.4f83be33.js","assets/icons.bdc5c208.js","assets/Text.2d270728.js","assets/Base.402efeb6.js","assets/transButton.b7be824a.js","assets/url.4c4e9448.js","assets/Title.bfbbb427.js","assets/index.9a39d75e.js","assets/index.67b27967.js","assets/CrudView.1d309d6a.css","assets/index.3ed139f2.js"])}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>n(()=>import("./TableEditor.f5a99563.js"),["assets/TableEditor.f5a99563.js","assets/outputWidgets.be869244.js","assets/outputWidgets.cb6d1439.css","assets/BaseLayout.860b2b28.js","assets/BaseLayout.2d5b030e.css","assets/tables.6f07e79d.js","assets/gateway.178cd360.js","assets/activeRecord.37f03962.js","assets/pubsub.b34d2fda.js","assets/columns.39b62365.js","assets/string.1d9ffe03.js","assets/asyncComputed.22c467bd.js","assets/popupNotifcation.56aa6f55.js","assets/index.58e8ed53.js","assets/isNumeric.75337b1e.js","assets/index.9a39d75e.js","assets/Base.402efeb6.js","assets/transButton.b7be824a.js","assets/icons.bdc5c208.js","assets/CircularLoading.26783e5b.js","assets/CircularLoading.f81b57b4.css","assets/project.b473bbff.js","assets/organization.27b898b7.js","assets/TabPane.1edd9d3d.js","assets/index.5a58d51c.js","assets/Text.2d270728.js","assets/Title.bfbbb427.js","assets/index.3ed139f2.js","assets/TableEditor.3e12aa3f.css"])},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>n(()=>import("./ConnectorEditor.fa271a42.js"),["assets/ConnectorEditor.fa271a42.js","assets/outputWidgets.be869244.js","assets/outputWidgets.cb6d1439.css","assets/columns.39b62365.js","assets/gateway.178cd360.js","assets/activeRecord.37f03962.js","assets/pubsub.b34d2fda.js","assets/project.b473bbff.js","assets/organization.27b898b7.js","assets/connector.201a998d.js","assets/asyncComputed.22c467bd.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.92cf2c89.js","assets/ant-design.5c8bd1d6.js","assets/transButton.b7be824a.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.860b2b28.js","assets/BaseLayout.2d5b030e.css","assets/TabPane.1edd9d3d.js","assets/Base.402efeb6.js","assets/index.5a58d51c.js","assets/index.9a39d75e.js","assets/Text.2d270728.js","assets/Title.bfbbb427.js","assets/index.3ed139f2.js","assets/ConnectorEditor.77a62f6e.css"])}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});T.beforeEach(async(t,e)=>{B(t,e);const o=Y.getAuthor();if(!t.meta.allowUnauthenticated&&!o){await T.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}});export{Z as A,b as E,A as L,Y as a,T as r};
//# sourceMappingURL=router.58afb527.js.map
