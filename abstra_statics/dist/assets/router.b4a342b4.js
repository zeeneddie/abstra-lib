var L=Object.defineProperty;var R=(t,e,o)=>e in t?L(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var E=(t,e,o)=>(R(t,typeof e!="symbol"?e+"":e,o),o);import{F as s}from"./Form.2b1bb5d1.js";import{aV as D,cu as d,D as V,U as c,ab as j,f as k,O as x,cZ as f,S as l,q as S,g as U,h as z,_ as n}from"./outputWidgets.f8f8676d.js";import{C as J,B as I,c as N,T as r,a as b}from"./Title.53d37289.js";import{a as w,A as O}from"./Text.7ab5366c.js";import{u as B}from"./index.878fa14a.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="ab711adf-163d-4e07-8e00-7394a428ccd9",t._sentryDebugIdIdentifier="sentry-dbid-ab711adf-163d-4e07-8e00-7394a428ccd9")}catch{}})();s.useInjectFormItemContext=D;s.ItemRest=d;s.install=function(t){return t.component(s.name,s),t.component(s.Item.name,s.Item),t.component(d.name,d),t};const X=V(J);var W=globalThis&&globalThis.__rest||function(t,e){var o={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(o[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(t);i<a.length;i++)e.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(t,a[i])&&(o[a[i]]=t[a[i]]);return o};const C=()=>x(c(c({},N()),{ellipsis:{type:Boolean,default:void 0}}),["component"]),_=(t,e)=>{let{slots:o,attrs:a}=e;const i=c(c({},t),a),{ellipsis:P,rel:u}=i,h=W(i,["ellipsis","rel"]);j();const y=c(c({},h),{rel:u===void 0&&h.target==="_blank"?"noopener noreferrer":u,ellipsis:!!P,component:"a"});return delete y.navigate,k(I,y,o)};_.displayName="ATypographyLink";_.inheritAttrs=!1;_.props=C();const A=_;r.Text=w;r.Title=b;r.Paragraph=O;r.Link=A;r.Base=I;r.install=function(t){return t.component(r.name,r),t.component(r.Text.displayName,w),t.component(r.Title.displayName,b),t.component(r.Paragraph.displayName,O),t.component(r.Link.displayName,A),t};const F=()=>window.location.host.includes(".abstra.io"),q={authn:"/api/authn","cloud-api":"/api/cloud-api"},$={authn:"https://authn.abstra.cloud","cloud-api":"https://cloud-api.abstra.cloud"},g=t=>{const e="VITE_"+f.toUpper(f.snakeCase(t)),o={VITE_SENTRY_RELEASE:"b70f0966aa8f97901980c20b62654a9836d7ab69",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return o||(F()?q[t]:$[t])},T={authn:g("authn"),cloudApi:g("cloud-api")},p=class{async authenticate(e){try{const o=await fetch(`${T.authn}/authenticate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e})});if(!o.ok)throw new Error(await o.text());return null}catch(o){return o.message}}async verify(e,o){const a=await fetch(`${T.authn}/verify`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e,token:o})});if(!a.ok)throw new Error(await a.text());const i=await a.json();return this.saveJWT(i.jwt),this.getAuthor()}saveJWT(e){l.set(p.key,e)}getJWT(){return l.get(p.key)}getAuthor(){const e=this.getJWT();if(e)try{const o=S(e);if(o.exp&&o.exp>Date.now()/1e3)return{jwt:e,claims:o}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){l.remove(p.key)}get headers(){const e=this.getJWT();return e?{"Author-Authorization":`Bearer ${e}`}:{}}};let m=p;E(m,"key","abstracloud:auth:jwt");const H=new m,v=U({history:z("/"),routes:[{path:"/widget-preview",name:"widget-preview",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./WidgetPreview.1b01e290.js"),["assets/WidgetPreview.1b01e290.js","assets/ActionButton.vue_vue_type_script_setup_true_lang.4a8d0188.js","assets/outputWidgets.f8f8676d.js","assets/outputWidgets.0f63bd62.css","assets/Steps.4e36f5e7.js","assets/Steps.998aa76d.css","assets/WidgetsFrame.a66fb7a8.js","assets/WidgetsFrame.0816a5f5.css","assets/WidgetPreview.86a24f90.css"])},{path:"/login",name:"login",meta:{allowUnauthenticated:!0},component:()=>n(()=>import("./Login.8aa927a5.js"),["assets/Login.8aa927a5.js","assets/outputWidgets.f8f8676d.js","assets/outputWidgets.0f63bd62.css","assets/member.f9d116a4.js","assets/gateway.209624eb.js","assets/activeRecord.913921b5.js","assets/pubsub.8eddc628.js","assets/icons.c3170cf4.js","assets/CircularLoading.7abe007d.js","assets/CircularLoading.f81b57b4.css","assets/WidgetsFrame.a66fb7a8.js","assets/WidgetsFrame.0816a5f5.css","assets/Form.2b1bb5d1.js","assets/Title.53d37289.js","assets/transButton.ca7603a2.js","assets/Text.7ab5366c.js","assets/index.878fa14a.js","assets/Login.92d70f03.css"])},{path:"/api-key",name:"api-key",component:()=>n(()=>import("./ReturnApiKey.02296455.js"),["assets/ReturnApiKey.02296455.js","assets/outputWidgets.f8f8676d.js","assets/outputWidgets.0f63bd62.css","assets/project.8fa78f0c.js","assets/gateway.209624eb.js","assets/activeRecord.913921b5.js","assets/pubsub.8eddc628.js","assets/organization.f01d64b4.js","assets/apiKey.edebdb62.js","assets/columns.dbb1c1df.js","assets/index.cf4c23b9.js","assets/asyncComputed.9c91cdf6.js","assets/Title.53d37289.js","assets/transButton.ca7603a2.js","assets/Form.2b1bb5d1.js","assets/Text.7ab5366c.js","assets/index.e041bc2d.js","assets/index.878fa14a.js","assets/ReturnApiKey.909cd622.css"])},{path:"/",name:"home",redirect:{name:"organizations"}},{path:"/organizations",name:"organizations",component:()=>n(()=>import("./Organizations.3e186e83.js"),["assets/Organizations.3e186e83.js","assets/outputWidgets.f8f8676d.js","assets/outputWidgets.0f63bd62.css","assets/icons.c3170cf4.js","assets/asyncComputed.9c91cdf6.js","assets/organization.f01d64b4.js","assets/gateway.209624eb.js","assets/activeRecord.913921b5.js","assets/pubsub.8eddc628.js","assets/columns.dbb1c1df.js","assets/index.cf4c23b9.js","assets/Navbar.vue_vue_type_script_setup_true_lang.629f3f60.js","assets/logo.084e5d7c.js","assets/Text.7ab5366c.js","assets/Title.53d37289.js","assets/transButton.ca7603a2.js","assets/index.44b02920.js","assets/Navbar.f4a98ea3.css","assets/CrudView.fe3c74bf.js","assets/Form.2b1bb5d1.js","assets/url.46c79102.js","assets/index.4c4e9bdd.js","assets/index.97771f01.js","assets/index.2ab0079e.js","assets/index.e041bc2d.js","assets/CrudView.1d309d6a.css","assets/BaseLayout.f7927f02.js","assets/BaseLayout.2d5b030e.css","assets/ant-design.8ffd5ed0.js","assets/index.878fa14a.js"])},{path:"/organizations/:organizationId",name:"organization",component:()=>n(()=>import("./Organization.c60d51e7.js"),["assets/Organization.c60d51e7.js","assets/Sidebar.8a278bcc.js","assets/outputWidgets.f8f8676d.js","assets/outputWidgets.0f63bd62.css","assets/icons.c3170cf4.js","assets/Tooltip.6d75538b.js","assets/Tooltip.63c4352e.css","assets/Sidebar.c72a98ac.css","assets/Navbar.vue_vue_type_script_setup_true_lang.629f3f60.js","assets/logo.084e5d7c.js","assets/asyncComputed.9c91cdf6.js","assets/Text.7ab5366c.js","assets/Title.53d37289.js","assets/transButton.ca7603a2.js","assets/index.44b02920.js","assets/Navbar.f4a98ea3.css","assets/organization.f01d64b4.js","assets/gateway.209624eb.js","assets/activeRecord.913921b5.js","assets/pubsub.8eddc628.js","assets/columns.dbb1c1df.js","assets/index.cf4c23b9.js","assets/BaseLayout.f7927f02.js","assets/BaseLayout.2d5b030e.css","assets/Form.2b1bb5d1.js","assets/index.878fa14a.js"]),redirect:{name:"projects"},children:[{path:"projects",name:"projects",component:()=>n(()=>import("./Projects.dd3c6db4.js"),["assets/Projects.dd3c6db4.js","assets/outputWidgets.f8f8676d.js","assets/outputWidgets.0f63bd62.css","assets/icons.c3170cf4.js","assets/asyncComputed.9c91cdf6.js","assets/project.8fa78f0c.js","assets/gateway.209624eb.js","assets/activeRecord.913921b5.js","assets/pubsub.8eddc628.js","assets/organization.f01d64b4.js","assets/columns.dbb1c1df.js","assets/index.cf4c23b9.js","assets/CrudView.fe3c74bf.js","assets/Text.7ab5366c.js","assets/Title.53d37289.js","assets/transButton.ca7603a2.js","assets/Form.2b1bb5d1.js","assets/url.46c79102.js","assets/index.4c4e9bdd.js","assets/index.97771f01.js","assets/index.2ab0079e.js","assets/index.e041bc2d.js","assets/CrudView.1d309d6a.css","assets/ant-design.8ffd5ed0.js","assets/index.878fa14a.js"])},{path:"settings",name:"organization-settings",component:()=>n(()=>import("./OrganizationSettings.9e9ef2bf.js"),["assets/OrganizationSettings.9e9ef2bf.js","assets/outputWidgets.f8f8676d.js","assets/outputWidgets.0f63bd62.css"])},{path:"members",name:"members",component:()=>n(()=>import("./Members.84bcc1bb.js"),["assets/Members.84bcc1bb.js","assets/outputWidgets.f8f8676d.js","assets/outputWidgets.0f63bd62.css","assets/asyncComputed.9c91cdf6.js","assets/member.f9d116a4.js","assets/gateway.209624eb.js","assets/activeRecord.913921b5.js","assets/pubsub.8eddc628.js","assets/columns.dbb1c1df.js","assets/index.cf4c23b9.js","assets/CrudView.fe3c74bf.js","assets/icons.c3170cf4.js","assets/Text.7ab5366c.js","assets/Title.53d37289.js","assets/transButton.ca7603a2.js","assets/Form.2b1bb5d1.js","assets/url.46c79102.js","assets/index.4c4e9bdd.js","assets/index.97771f01.js","assets/index.2ab0079e.js","assets/index.e041bc2d.js","assets/CrudView.1d309d6a.css","assets/index.878fa14a.js"])}]},{path:"/projects/:projectId",name:"project",component:()=>n(()=>import("./Project.02788120.js"),["assets/Project.02788120.js","assets/outputWidgets.f8f8676d.js","assets/outputWidgets.0f63bd62.css","assets/BaseLayout.f7927f02.js","assets/BaseLayout.2d5b030e.css","assets/asyncComputed.9c91cdf6.js","assets/project.8fa78f0c.js","assets/gateway.209624eb.js","assets/activeRecord.913921b5.js","assets/pubsub.8eddc628.js","assets/organization.f01d64b4.js","assets/columns.dbb1c1df.js","assets/index.cf4c23b9.js","assets/Navbar.vue_vue_type_script_setup_true_lang.629f3f60.js","assets/logo.084e5d7c.js","assets/Text.7ab5366c.js","assets/Title.53d37289.js","assets/transButton.ca7603a2.js","assets/index.44b02920.js","assets/Navbar.f4a98ea3.css","assets/Sidebar.8a278bcc.js","assets/icons.c3170cf4.js","assets/Tooltip.6d75538b.js","assets/Tooltip.63c4352e.css","assets/Sidebar.c72a98ac.css","assets/Form.2b1bb5d1.js","assets/index.878fa14a.js"]),redirect:{name:"builds"},children:[{path:"builds",name:"builds",component:()=>n(()=>import("./Builds.ed5eaa1e.js"),["assets/Builds.ed5eaa1e.js","assets/outputWidgets.f8f8676d.js","assets/outputWidgets.0f63bd62.css","assets/asyncComputed.9c91cdf6.js","assets/project.8fa78f0c.js","assets/gateway.209624eb.js","assets/activeRecord.913921b5.js","assets/pubsub.8eddc628.js","assets/build.1601e50b.js","assets/columns.dbb1c1df.js","assets/index.cf4c23b9.js","assets/string.1a713e18.js","assets/icons.c3170cf4.js","assets/CrudView.fe3c74bf.js","assets/Text.7ab5366c.js","assets/Title.53d37289.js","assets/transButton.ca7603a2.js","assets/Form.2b1bb5d1.js","assets/url.46c79102.js","assets/index.4c4e9bdd.js","assets/index.97771f01.js","assets/index.2ab0079e.js","assets/index.e041bc2d.js","assets/CrudView.1d309d6a.css","assets/index.b048d0fb.js","assets/index.878fa14a.js","assets/Builds.e814da0c.css"])},{path:"connectors",name:"connectors",component:()=>n(()=>import("./Connectors.e60ecd88.js"),["assets/Connectors.e60ecd88.js","assets/outputWidgets.f8f8676d.js","assets/outputWidgets.0f63bd62.css","assets/columns.dbb1c1df.js","assets/gateway.209624eb.js","assets/activeRecord.913921b5.js","assets/pubsub.8eddc628.js","assets/index.cf4c23b9.js","assets/connector.075642b1.js","assets/asyncComputed.9c91cdf6.js","assets/icons.c3170cf4.js","assets/CrudView.fe3c74bf.js","assets/Text.7ab5366c.js","assets/Title.53d37289.js","assets/transButton.ca7603a2.js","assets/Form.2b1bb5d1.js","assets/url.46c79102.js","assets/index.4c4e9bdd.js","assets/index.97771f01.js","assets/index.2ab0079e.js","assets/index.e041bc2d.js","assets/CrudView.1d309d6a.css","assets/index.878fa14a.js"])},{path:"tables",name:"tables",component:()=>n(()=>import("./Tables.db6deef1.js"),["assets/Tables.db6deef1.js","assets/outputWidgets.f8f8676d.js","assets/outputWidgets.0f63bd62.css","assets/icons.c3170cf4.js","assets/asyncComputed.9c91cdf6.js","assets/columns.dbb1c1df.js","assets/gateway.209624eb.js","assets/activeRecord.913921b5.js","assets/pubsub.8eddc628.js","assets/index.cf4c23b9.js","assets/tables.d19838f3.js","assets/string.1a713e18.js","assets/CrudView.fe3c74bf.js","assets/Text.7ab5366c.js","assets/Title.53d37289.js","assets/transButton.ca7603a2.js","assets/Form.2b1bb5d1.js","assets/url.46c79102.js","assets/index.4c4e9bdd.js","assets/index.97771f01.js","assets/index.2ab0079e.js","assets/index.e041bc2d.js","assets/CrudView.1d309d6a.css","assets/index.878fa14a.js"])},{path:"api-keys",name:"api-keys",component:()=>n(()=>import("./ApiKeys.7d676917.js"),["assets/ApiKeys.7d676917.js","assets/outputWidgets.f8f8676d.js","assets/outputWidgets.0f63bd62.css","assets/asyncComputed.9c91cdf6.js","assets/project.8fa78f0c.js","assets/gateway.209624eb.js","assets/activeRecord.913921b5.js","assets/pubsub.8eddc628.js","assets/member.f9d116a4.js","assets/apiKey.edebdb62.js","assets/columns.dbb1c1df.js","assets/index.cf4c23b9.js","assets/icons.c3170cf4.js","assets/CrudView.fe3c74bf.js","assets/Text.7ab5366c.js","assets/Title.53d37289.js","assets/transButton.ca7603a2.js","assets/Form.2b1bb5d1.js","assets/url.46c79102.js","assets/index.4c4e9bdd.js","assets/index.97771f01.js","assets/index.2ab0079e.js","assets/index.e041bc2d.js","assets/CrudView.1d309d6a.css","assets/index.b048d0fb.js","assets/index.878fa14a.js"])},{path:"logs",name:"logs",component:()=>n(()=>import("./Logs.3d3c81c2.js"),["assets/Logs.3d3c81c2.js","assets/outputWidgets.f8f8676d.js","assets/outputWidgets.0f63bd62.css","assets/build.1601e50b.js","assets/gateway.209624eb.js","assets/activeRecord.913921b5.js","assets/pubsub.8eddc628.js","assets/columns.dbb1c1df.js","assets/index.cf4c23b9.js","assets/asyncComputed.9c91cdf6.js","assets/ant-design.8ffd5ed0.js","assets/transButton.ca7603a2.js","assets/index.2b59b7df.js","assets/index.4c4e9bdd.js","assets/dayjs.869eb078.js","assets/index.b048d0fb.js","assets/Title.53d37289.js","assets/Form.2b1bb5d1.js","assets/Text.7ab5366c.js","assets/CollapsePanel.cc3e3f63.js","assets/index.2ab0079e.js","assets/index.878fa14a.js"])},{path:"settings",name:"project-settings",component:()=>n(()=>import("./ProjectSettings.9ec78b0f.js"),["assets/ProjectSettings.9ec78b0f.js","assets/asyncComputed.9c91cdf6.js","assets/outputWidgets.f8f8676d.js","assets/outputWidgets.0f63bd62.css","assets/project.8fa78f0c.js","assets/gateway.209624eb.js","assets/activeRecord.913921b5.js","assets/pubsub.8eddc628.js","assets/columns.dbb1c1df.js","assets/index.cf4c23b9.js","assets/Title.53d37289.js","assets/transButton.ca7603a2.js","assets/Text.7ab5366c.js","assets/index.97771f01.js","assets/Form.2b1bb5d1.js","assets/index.878fa14a.js"])},{path:"env-vars",name:"env-vars",component:()=>n(()=>import("./EnvVars.db052de0.js"),["assets/EnvVars.db052de0.js","assets/outputWidgets.f8f8676d.js","assets/outputWidgets.0f63bd62.css","assets/asyncComputed.9c91cdf6.js","assets/gateway.209624eb.js","assets/activeRecord.913921b5.js","assets/pubsub.8eddc628.js","assets/columns.dbb1c1df.js","assets/index.cf4c23b9.js","assets/icons.c3170cf4.js","assets/CrudView.fe3c74bf.js","assets/Text.7ab5366c.js","assets/Title.53d37289.js","assets/transButton.ca7603a2.js","assets/Form.2b1bb5d1.js","assets/url.46c79102.js","assets/index.4c4e9bdd.js","assets/index.97771f01.js","assets/index.2ab0079e.js","assets/index.e041bc2d.js","assets/CrudView.1d309d6a.css","assets/index.878fa14a.js"])},{path:"files",name:"files",component:()=>n(()=>import("./Files.e828a6e7.js"),["assets/Files.e828a6e7.js","assets/outputWidgets.f8f8676d.js","assets/outputWidgets.0f63bd62.css","assets/columns.dbb1c1df.js","assets/gateway.209624eb.js","assets/activeRecord.913921b5.js","assets/pubsub.8eddc628.js","assets/index.cf4c23b9.js","assets/asyncComputed.9c91cdf6.js","assets/CrudView.fe3c74bf.js","assets/icons.c3170cf4.js","assets/Text.7ab5366c.js","assets/Title.53d37289.js","assets/transButton.ca7603a2.js","assets/Form.2b1bb5d1.js","assets/url.46c79102.js","assets/index.4c4e9bdd.js","assets/index.97771f01.js","assets/index.2ab0079e.js","assets/index.e041bc2d.js","assets/CrudView.1d309d6a.css","assets/index.878fa14a.js"])}]},{path:"/projects/:projectId/tables/:tableId",name:"tableEditor",component:()=>n(()=>import("./TableEditor.b2a583ad.js"),["assets/TableEditor.b2a583ad.js","assets/outputWidgets.f8f8676d.js","assets/outputWidgets.0f63bd62.css","assets/BaseLayout.f7927f02.js","assets/BaseLayout.2d5b030e.css","assets/tables.d19838f3.js","assets/gateway.209624eb.js","assets/activeRecord.913921b5.js","assets/pubsub.8eddc628.js","assets/columns.dbb1c1df.js","assets/index.cf4c23b9.js","assets/string.1a713e18.js","assets/asyncComputed.9c91cdf6.js","assets/popupNotifcation.ad46752a.js","assets/index.2ab0079e.js","assets/Form.2b1bb5d1.js","assets/Title.53d37289.js","assets/transButton.ca7603a2.js","assets/index.6e7a6170.js","assets/isNumeric.75337b1e.js","assets/index.a2508eb6.js","assets/icons.c3170cf4.js","assets/CircularLoading.7abe007d.js","assets/CircularLoading.f81b57b4.css","assets/project.8fa78f0c.js","assets/organization.f01d64b4.js","assets/TabPane.56eaca62.js","assets/index.44b02920.js","assets/Text.7ab5366c.js","assets/index.878fa14a.js","assets/TableEditor.3e12aa3f.css"])},{path:"/connectors/:connectorId",name:"connectorEditor",component:()=>n(()=>import("./ConnectorEditor.2aff4943.js"),["assets/ConnectorEditor.2aff4943.js","assets/outputWidgets.f8f8676d.js","assets/outputWidgets.0f63bd62.css","assets/columns.dbb1c1df.js","assets/gateway.209624eb.js","assets/activeRecord.913921b5.js","assets/pubsub.8eddc628.js","assets/index.cf4c23b9.js","assets/project.8fa78f0c.js","assets/organization.f01d64b4.js","assets/connector.075642b1.js","assets/asyncComputed.9c91cdf6.js","assets/SaveButton.vue_vue_type_script_setup_true_lang.2a589021.js","assets/ant-design.8ffd5ed0.js","assets/transButton.ca7603a2.js","assets/SaveButton.13ece1cb.css","assets/BaseLayout.f7927f02.js","assets/BaseLayout.2d5b030e.css","assets/TabPane.56eaca62.js","assets/Title.53d37289.js","assets/index.44b02920.js","assets/Form.2b1bb5d1.js","assets/index.2ab0079e.js","assets/Text.7ab5366c.js","assets/index.878fa14a.js","assets/ConnectorEditor.77a62f6e.css"])}],scrollBehavior(t){if(t.hash)return{el:t.hash}}});v.beforeEach(async(t,e)=>{B(t,e);const o=H.getAuthor();if(!t.meta.allowUnauthenticated&&!o){await v.push({name:"login",query:{...t.query,redirect:t.path,"prev-redirect":t.query.redirect}});return}});export{X as A,T as E,A as L,H as a,v as r};
//# sourceMappingURL=router.b4a342b4.js.map
