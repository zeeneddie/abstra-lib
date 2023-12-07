var L=Object.defineProperty;var R=(t,e,o)=>e in t?L(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var E=(t,e,o)=>(R(t,typeof e!="symbol"?e+"":e,o),o);import{F as s,C as D,B as I,a as V,T as r}from"./Base.9d7d2b7a.js";import{aL as j,co as d,D as k,U as c,ab as x,f as S,O as U,cT as y,S as l,q as z,g as J,h as N,_ as n}from"./outputWidgets.ee623de8.js";import{c as b,b as A}from"./Text.c71af019.js";import{A as O}from"./Title.b8c54c51.js";import{u as B}from"./index.bd3c0e89.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="2b917fe5-eceb-43f1-96ce-cf7670a9fcd6",t._sentryDebugIdIdentifier="sentry-dbid-2b917fe5-eceb-43f1-96ce-cf7670a9fcd6")}catch{}})();s.useInjectFormItemContext=j;s.ItemRest=d;s.install=function(t){return t.component(s.name,s),t.component(s.Item.name,s.Item),t.component(d.name,d),t};const Z=k(D);var W=globalThis&&globalThis.__rest||function(t,e){var o={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(o[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(t);i<a.length;i++)e.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(t,a[i])&&(o[a[i]]=t[a[i]]);return o};const C=()=>U(c(c({},V()),{ellipsis:{type:Boolean,default:void 0}}),["component"]),_=(t,e)=>{let{slots:o,attrs:a}=e;const i=c(c({},t),a),{ellipsis:P,rel:u}=i,h=W(i,["ellipsis","rel"]);x();const f=c(c({},h),{rel:u===void 0&&h.target==="_blank"?"noopener noreferrer":u,ellipsis:!!P,component:"a"});return delete f.navigate,S(I,f,o)};_.displayName="ATypographyLink";_.inheritAttrs=!1;_.props=C();const w=_;r.Text=b;r.Title=O;r.Paragraph=A;r.Link=w;r.Base=I;r.install=function(t){return t.component(r.name,r),t.component(r.Text.displayName,b),t.component(r.Title.displayName,O),t.component(r.Paragraph.displayName,A),t.component(r.Link.displayName,w),t};const F=()=>window.location.host.includes(".abstra.io"),q={authn:"/api/authn","cloud-api":"/api/cloud-api"},$={authn:"https://authn.abstra.cloud","cloud-api":"https://cloud-api.abstra.cloud"},g=t=>{const e="VITE_"+y.toUpper(y.snakeCase(t)),o={VITE_SENTRY_RELEASE:"9f3a51e869a3ced4073af752454985c86de90aad",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||(F()?q[t]:$[t])},v={authn:g("authn"),cloudApi:g("cloud-api")},p=class{async authenticate(e){try{const o=await fetch(`${v.authn}/authenticate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e})});if(!o.ok)throw new Error(await o.text());return null}catch(o){return o.message}}async verify(e,o){const a=await fetch(`${v.authn}/verify`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e,token:o})});if(!a.ok)throw new Error(await a.text());const i=await a.json();return this.saveJWT(i.jwt),this.getAuthor()}saveJWT(e){l.set(p.key,e)}getJWT(){return l.get(p.key)}getAuthor(){const e=this.getJWT();if(e)try{const o=z(e);if(o.exp&&o.exp>Date.now()/1e3)return{jwt:e,claims:o}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){l.remove(p.key)}get headers(){const e=this.getJWT();return e?{"Author-Authorization":`Bearer ${e}`}:{}}};let m=p;E(m,"key","abstracloud:auth:jwt");const H=new m,T=J({history:N("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./WidgetPreview.0be52b7a.js"),["assets/WidgetPreview.0be52b7a.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.a6012d47.js","assets/outputWidgets.ee623de8.js","assets/outputWidgets.c8d85cd0.css","assets/ActionButton.998aa76d.css","assets/WidgetsFrame.0fe18173.js","assets/WidgetsFrame.97ae601d.css","assets/WidgetPreview.6013614a.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./Login.d59ea3ef.js"),["assets/Login.d59ea3ef.js","assets/outputWidgets.ee623de8.js","assets/outputWidgets.c8d85cd0.css","assets/member.47e5b3e8.js","assets/gateway.b2ad2bec.js","assets/icons.2279e506.js","assets/CircularLoading.d139d1e3.js","assets/CircularLoading.f81b57b4.css","assets/WidgetsFrame.0fe18173.js","assets/WidgetsFrame.97ae601d.css","assets/Base.9d7d2b7a.js","assets/transButton.5a2ccef7.js","assets/Text.c71af019.js","assets/Title.b8c54c51.js","assets/index.bd3c0e89.js","assets/Login.f7d5edc1.css"])},{path:"/api-key",name:"api-key",component:()=>n(()=>import("./ReturnApiKey.6d70a86d.js"),["assets/ReturnApiKey.6d70a86d.js","assets/outputWidgets.ee623de8.js","assets/outputWidgets.c8d85cd0.css","assets/index.b5ea7813.js","assets/record.5f64c9de.js","assets/pubsub.334006de.js","assets/gateway.b2ad2bec.js","assets/apiKey.b47e4764.js","assets/project.d5f74b59.js","assets/organization.54017e54.js","assets/asyncComputed.fd0b57c5.js","assets/Title.b8c54c51.js","assets/Base.9d7d2b7a.js","assets/transButton.5a2ccef7.js","assets/Text.c71af019.js","assets/index.47cc5d3e.js","assets/index.bd3c0e89.js","assets/ReturnApiKey.909cd622.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>n(()=>import("./Organizations.ecc82551.js"),["assets/Organizations.ecc82551.js","assets/outputWidgets.ee623de8.js","assets/outputWidgets.c8d85cd0.css","assets/icons.2279e506.js","assets/asyncComputed.fd0b57c5.js","assets/index.b5ea7813.js","assets/record.5f64c9de.js","assets/pubsub.334006de.js","assets/gateway.b2ad2bec.js","assets/organization.54017e54.js","assets/Navbar.vue_vue_type_script_setup_true_lang.8ef32645.js","assets/logo.084e5d7c.js","assets/index.08c52bbd.js","assets/transButton.5a2ccef7.js","assets/Text.c71af019.js","assets/Base.9d7d2b7a.js","assets/Navbar.f4a98ea3.css","assets/CrudView.ff294c89.js","assets/url.bfd3c670.js","assets/Title.b8c54c51.js","assets/index.cb62c543.js","assets/index.47cc5d3e.js","assets/CrudView.1d309d6a.css","assets/BaseLayout.8f4bd160.js","assets/BaseLayout.2d5b030e.css","assets/ant-design.a923b0d2.js","assets/index.bd3c0e89.js"])},{path:"/organizations/:organizationId",name:"organization",component:()=>n(()=>import("./Organization.7bc0c1f0.js"),["assets/Organization.7bc0c1f0.js","assets/Sidebar.97e1e769.js","assets/outputWidgets.ee623de8.js","assets/outputWidgets.c8d85cd0.css","assets/icons.2279e506.js","assets/Tooltip.46c55f81.js","assets/Tooltip.63c4352e.css","assets/Sidebar.fc09b9a8.css","assets/Navbar.vue_vue_type_script_setup_true_lang.8ef32645.js","assets/logo.084e5d7c.js","assets/asyncComputed.fd0b57c5.js","assets/index.08c52bbd.js","assets/transButton.5a2ccef7.js","assets/Text.c71af019.js","assets/Base.9d7d2b7a.js","assets/Navbar.f4a98ea3.css","assets/index.b5ea7813.js","assets/record.5f64c9de.js","assets/pubsub.334006de.js","assets/gateway.b2ad2bec.js","assets/organization.54017e54.js","assets/BaseLayout.8f4bd160.js","assets/BaseLayout.2d5b030e.css","assets/Title.b8c54c51.js","assets/index.bd3c0e89.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>n(()=>import("./Projects.8a84c897.js"),["assets/Projects.8a84c897.js","assets/outputWidgets.ee623de8.js","assets/outputWidgets.c8d85cd0.css","assets/icons.2279e506.js","assets/asyncComputed.fd0b57c5.js","assets/index.b5ea7813.js","assets/record.5f64c9de.js","assets/pubsub.334006de.js","assets/gateway.b2ad2bec.js","assets/project.d5f74b59.js","assets/organization.54017e54.js","assets/CrudView.ff294c89.js","assets/Text.c71af019.js","assets/Base.9d7d2b7a.js","assets/transButton.5a2ccef7.js","assets/url.bfd3c670.js","assets/Title.b8c54c51.js","assets/index.cb62c543.js","assets/index.47cc5d3e.js","assets/CrudView.1d309d6a.css","assets/ant-design.a923b0d2.js","assets/index.bd3c0e89.js"])},{path:"settings",name:"organization-settings",component:()=>n(()=>import("./OrganizationSettings.cba8efcc.js"),["assets/OrganizationSettings.cba8efcc.js","assets/outputWidgets.ee623de8.js","assets/outputWidgets.c8d85cd0.css"])},{path:"members",name:"members",component:()=>n(()=>import("./Members.16c9a1fd.js"),["assets/Members.16c9a1fd.js","assets/outputWidgets.ee623de8.js","assets/outputWidgets.c8d85cd0.css","assets/asyncComputed.fd0b57c5.js","assets/index.b5ea7813.js","assets/record.5f64c9de.js","assets/pubsub.334006de.js","assets/gateway.b2ad2bec.js","assets/member.47e5b3e8.js","assets/CrudView.ff294c89.js","assets/icons.2279e506.js","assets/Text.c71af019.js","assets/Base.9d7d2b7a.js","assets/transButton.5a2ccef7.js","assets/url.bfd3c670.js","assets/Title.b8c54c51.js","assets/index.cb62c543.js","assets/index.47cc5d3e.js","assets/CrudView.1d309d6a.css","assets/index.bd3c0e89.js"])}]},{path:"/projects/:projectId",name:"project",component:()=>n(()=>import("./Project.63430169.js"),["assets/Project.63430169.js","assets/outputWidgets.ee623de8.js","assets/outputWidgets.c8d85cd0.css","assets/BaseLayout.8f4bd160.js","assets/BaseLayout.2d5b030e.css","assets/asyncComputed.fd0b57c5.js","assets/index.b5ea7813.js","assets/record.5f64c9de.js","assets/pubsub.334006de.js","assets/gateway.b2ad2bec.js","assets/project.d5f74b59.js","assets/organization.54017e54.js","assets/Navbar.vue_vue_type_script_setup_true_lang.8ef32645.js","assets/logo.084e5d7c.js","assets/index.08c52bbd.js","assets/transButton.5a2ccef7.js","assets/Text.c71af019.js","assets/Base.9d7d2b7a.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.97e1e769.js","assets/icons.2279e506.js","assets/Tooltip.46c55f81.js","assets/Tooltip.63c4352e.css","assets/Sidebar.fc09b9a8.css","assets/Title.b8c54c51.js","assets/index.bd3c0e89.js"]),redirect:{name:"live"},children:[{path:"live",name:"live",component:()=>n(()=>import("./Live.a4ce36c3.js"),["assets/Live.a4ce36c3.js","assets/outputWidgets.ee623de8.js","assets/outputWidgets.c8d85cd0.css","assets/asyncComputed.fd0b57c5.js","assets/build.6c1ea51d.js","assets/gateway.b2ad2bec.js","assets/index.b5ea7813.js","assets/record.5f64c9de.js","assets/pubsub.334006de.js","assets/project.d5f74b59.js","assets/component.vue_vue_type_script_setup_true_lang.50663f30.js","assets/icons.2279e506.js","assets/Text.c71af019.js","assets/Base.9d7d2b7a.js","assets/transButton.5a2ccef7.js","assets/index.0ea4dafd.js","assets/Title.b8c54c51.js","assets/index.bd3c0e89.js"])},{path:"builds",name:"builds",component:()=>n(()=>import("./Builds.50efe61c.js"),["assets/Builds.50efe61c.js","assets/outputWidgets.ee623de8.js","assets/outputWidgets.c8d85cd0.css","assets/build.6c1ea51d.js","assets/gateway.b2ad2bec.js","assets/index.b5ea7813.js","assets/record.5f64c9de.js","assets/pubsub.334006de.js","assets/project.d5f74b59.js","assets/asyncComputed.fd0b57c5.js","assets/CrudView.ff294c89.js","assets/icons.2279e506.js","assets/Text.c71af019.js","assets/Base.9d7d2b7a.js","assets/transButton.5a2ccef7.js","assets/url.bfd3c670.js","assets/Title.b8c54c51.js","assets/index.cb62c543.js","assets/index.47cc5d3e.js","assets/CrudView.1d309d6a.css","assets/index.b048d0fb.js","assets/index.bd3c0e89.js","assets/Builds.f8f533c4.css"])},{path:"connectors",name:"connectors",component:()=>n(()=>import("./Connectors.7d6f539d.js"),["assets/Connectors.7d6f539d.js","assets/outputWidgets.ee623de8.js","assets/outputWidgets.c8d85cd0.css","assets/index.b5ea7813.js","assets/record.5f64c9de.js","assets/pubsub.334006de.js","assets/gateway.b2ad2bec.js","assets/connector.81c97233.js","assets/asyncComputed.fd0b57c5.js","assets/icons.2279e506.js","assets/CrudView.ff294c89.js","assets/Text.c71af019.js","assets/Base.9d7d2b7a.js","assets/transButton.5a2ccef7.js","assets/url.bfd3c670.js","assets/Title.b8c54c51.js","assets/index.cb62c543.js","assets/index.47cc5d3e.js","assets/CrudView.1d309d6a.css","assets/index.bd3c0e89.js"])},{path:"tables",name:"tables",component:()=>n(()=>import("./Tables.b75d4083.js"),["assets/Tables.b75d4083.js","assets/outputWidgets.ee623de8.js","assets/outputWidgets.c8d85cd0.css","assets/icons.2279e506.js","assets/asyncComputed.fd0b57c5.js","assets/tables.bf35fd8a.js","assets/record.5f64c9de.js","assets/pubsub.334006de.js","assets/index.b5ea7813.js","assets/gateway.b2ad2bec.js","assets/CrudView.ff294c89.js","assets/Text.c71af019.js","assets/Base.9d7d2b7a.js","assets/transButton.5a2ccef7.js","assets/url.bfd3c670.js","assets/Title.b8c54c51.js","assets/index.cb62c543.js","assets/index.47cc5d3e.js","assets/CrudView.1d309d6a.css","assets/index.bd3c0e89.js"])},{path:"api-keys",name:"api-keys",component:()=>n(()=>import("./ApiKeys.ff1781c8.js"),["assets/ApiKeys.ff1781c8.js","assets/outputWidgets.ee623de8.js","assets/outputWidgets.c8d85cd0.css","assets/asyncComputed.fd0b57c5.js","assets/index.b5ea7813.js","assets/record.5f64c9de.js","assets/pubsub.334006de.js","assets/gateway.b2ad2bec.js","assets/member.47e5b3e8.js","assets/apiKey.b47e4764.js","assets/project.d5f74b59.js","assets/icons.2279e506.js","assets/CrudView.ff294c89.js","assets/Text.c71af019.js","assets/Base.9d7d2b7a.js","assets/transButton.5a2ccef7.js","assets/url.bfd3c670.js","assets/Title.b8c54c51.js","assets/index.cb62c543.js","assets/index.47cc5d3e.js","assets/CrudView.1d309d6a.css","assets/index.b048d0fb.js","assets/index.bd3c0e89.js"])},{path:"logs",name:"logs",component:()=>n(()=>import("./Logs.896e0ac3.js"),["assets/Logs.896e0ac3.js","assets/outputWidgets.ee623de8.js","assets/outputWidgets.c8d85cd0.css","assets/ant-design.a923b0d2.js","assets/transButton.5a2ccef7.js","assets/gateway.b2ad2bec.js","assets/build.6c1ea51d.js","assets/index.b5ea7813.js","assets/record.5f64c9de.js","assets/pubsub.334006de.js","assets/asyncComputed.fd0b57c5.js","assets/dayjs.bdc4f3c2.js","assets/index.e281d396.js","assets/Text.c71af019.js","assets/Base.9d7d2b7a.js","assets/index.b048d0fb.js","assets/Title.b8c54c51.js","assets/CollapsePanel.d9226ac0.js","assets/index.cb62c543.js","assets/index.bd3c0e89.js","assets/Logs.20b75fff.css"])},{path:"settings",name:"project-settings",component:()=>n(()=>import("./ProjectSettings.23e636a3.js"),["assets/ProjectSettings.23e636a3.js","assets/asyncComputed.fd0b57c5.js","assets/outputWidgets.ee623de8.js","assets/outputWidgets.c8d85cd0.css","assets/index.b5ea7813.js","assets/record.5f64c9de.js","assets/pubsub.334006de.js","assets/gateway.b2ad2bec.js","assets/project.d5f74b59.js","assets/Title.b8c54c51.js","assets/Base.9d7d2b7a.js","assets/transButton.5a2ccef7.js","assets/Text.c71af019.js","assets/index.bd3c0e89.js"])},{path:"env-vars",name:"env-vars",component:()=>n(()=>import("./EnvVars.211260ba.js"),["assets/EnvVars.211260ba.js","assets/outputWidgets.ee623de8.js","assets/outputWidgets.c8d85cd0.css","assets/asyncComputed.fd0b57c5.js","assets/index.b5ea7813.js","assets/record.5f64c9de.js","assets/pubsub.334006de.js","assets/gateway.b2ad2bec.js","assets/icons.2279e506.js","assets/CrudView.ff294c89.js","assets/Text.c71af019.js","assets/Base.9d7d2b7a.js","assets/transButton.5a2ccef7.js","assets/url.bfd3c670.js","assets/Title.b8c54c51.js","assets/index.cb62c543.js","assets/index.47cc5d3e.js","assets/CrudView.1d309d6a.css","assets/index.bd3c0e89.js"])},{path:"files",name:"files",component:()=>n(()=>import("./Files.5f4b52ef.js"),["assets/Files.5f4b52ef.js","assets/outputWidgets.ee623de8.js","assets/outputWidgets.c8d85cd0.css","assets/gateway.b2ad2bec.js","assets/index.b5ea7813.js","assets/record.5f64c9de.js","assets/pubsub.334006de.js","assets/asyncComputed.fd0b57c5.js","assets/ant-design.a923b0d2.js","assets/transButton.5a2ccef7.js","assets/popupNotifcation.283b82f7.js","assets/DownloadOutlined.b623b050.js","assets/index.7ad7664a.js","assets/TabPane.487067b4.js","assets/Base.9d7d2b7a.js","assets/Title.b8c54c51.js","assets/Text.c71af019.js","assets/index.bd3c0e89.js","assets/Files.fefbf3f0.css"])}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>n(()=>import("./TableEditor.154d0a26.js"),["assets/TableEditor.154d0a26.js","assets/outputWidgets.ee623de8.js","assets/outputWidgets.c8d85cd0.css","assets/tables.bf35fd8a.js","assets/record.5f64c9de.js","assets/pubsub.334006de.js","assets/index.b5ea7813.js","assets/gateway.b2ad2bec.js","assets/BaseLayout.8f4bd160.js","assets/BaseLayout.2d5b030e.css","assets/asyncComputed.fd0b57c5.js","assets/popupNotifcation.283b82f7.js","assets/index.0bbd94d5.js","assets/isNumeric.75337b1e.js","assets/index.cb62c543.js","assets/Base.9d7d2b7a.js","assets/transButton.5a2ccef7.js","assets/project.d5f74b59.js","assets/organization.54017e54.js","assets/icons.2279e506.js","assets/CircularLoading.d139d1e3.js","assets/CircularLoading.f81b57b4.css","assets/TabPane.487067b4.js","assets/index.08c52bbd.js","assets/Text.c71af019.js","assets/Title.b8c54c51.js","assets/index.bd3c0e89.js","assets/TableEditor.ce4ceff8.css"])},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>n(()=>import("./ConnectorEditor.c42e26f3.js"),["assets/ConnectorEditor.c42e26f3.js","assets/outputWidgets.ee623de8.js","assets/outputWidgets.c8d85cd0.css","assets/BaseLayout.8f4bd160.js","assets/BaseLayout.2d5b030e.css","assets/asyncComputed.fd0b57c5.js","assets/index.b5ea7813.js","assets/record.5f64c9de.js","assets/pubsub.334006de.js","assets/gateway.b2ad2bec.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.74ad3cd0.js","assets/ant-design.a923b0d2.js","assets/transButton.5a2ccef7.js","assets/SaveButton.13ece1cb.css","assets/project.d5f74b59.js","assets/connector.81c97233.js","assets/organization.54017e54.js","assets/TabPane.487067b4.js","assets/Base.9d7d2b7a.js","assets/index.08c52bbd.js","assets/index.cb62c543.js","assets/Text.c71af019.js","assets/Title.b8c54c51.js","assets/index.bd3c0e89.js","assets/ConnectorEditor.77a62f6e.css"])},{path:"/builds/:buildId",name:"build",component:()=>n(()=>import("./Build.714c7505.js"),["assets/Build.714c7505.js","assets/outputWidgets.ee623de8.js","assets/outputWidgets.c8d85cd0.css","assets/BaseLayout.8f4bd160.js","assets/BaseLayout.2d5b030e.css","assets/asyncComputed.fd0b57c5.js","assets/component.vue_vue_type_script_setup_true_lang.50663f30.js","assets/icons.2279e506.js","assets/Text.c71af019.js","assets/Base.9d7d2b7a.js","assets/transButton.5a2ccef7.js","assets/index.0ea4dafd.js","assets/build.6c1ea51d.js","assets/gateway.b2ad2bec.js","assets/index.b5ea7813.js","assets/record.5f64c9de.js","assets/pubsub.334006de.js","assets/project.d5f74b59.js","assets/organization.54017e54.js","assets/index.08c52bbd.js","assets/Title.b8c54c51.js","assets/index.bd3c0e89.js"])}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});T.beforeEach(async(t,e)=>{B(t,e);const o=H.getAuthor();if(!t.meta.allowUnauthenticated&&!o){await T.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}});export{Z as A,v as E,w as a,H as b,T as r};
//# sourceMappingURL=router.f4382047.js.map
