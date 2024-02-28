var m=Object.defineProperty;var f=(t,e,a)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var u=(t,e,a)=>(f(t,typeof e!="symbol"?e+"":e,a),a);import{S as c,t as w,g as _,h as y,i as g,_ as r}from"./outputWidgets.a3cf86d4.js";import{P as b}from"./pubsub.f3afa6c4.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="2d72f9a9-6b93-4d91-af87-7a2e12f27770",t._sentryDebugIdIdentifier="sentry-dbid-2d72f9a9-6b93-4d91-af87-7a2e12f27770")}catch{}})();const E=(...t)=>window.fetch(...t),s=class{constructor(e=new b,a=E){this.pubsub=e,this.fetch=a}saveJWT(e){c.set(s.key,e),this.notify()}notify(){const e=this.getUser();this.pubsub.publish("authenticated",e)}getJWT(){return c.get(s.key)}getUser(){const e=this.getJWT();if(e)try{const a=w(e);if(a.exp&&a.exp>Date.now()/1e3)return{jwt:e,claims:a}}catch{console.warn("Invalid JWT")}return null}authHeaders(){const e=this.getJWT();return e?{Authorization:`Bearer ${e}`}:{}}removeUser(){this.pubsub.publish("authenticated",null),c.remove(s.key)}async getRoles(){return(await this.fetch("/_user/my-roles",{headers:this.authHeaders()})).json()}};let n=s;u(n,"key","abstra:auth:jwt");const p=new n,R=[{path:"/",name:"playerHome",component:()=>r(()=>import("./Home.248b8e7c.js"),["assets/Home.248b8e7c.js","assets/api.be2c2269.js","assets/runnerData.678131e4.js","assets/url.eef7d5cb.js","assets/outputWidgets.a3cf86d4.js","assets/outputWidgets.6d880e89.css","assets/asyncComputed.1cc21e38.js","assets/icons.71dd468a.js","assets/ArrowRightOutlined.08fa31dd.js","assets/PlayerNavbar.1932e884.js","assets/PlayerNavbar.387187c9.css","assets/index.da726cd2.js","assets/Base.438220fe.js","assets/Typography.2d337449.js","assets/Link.61dd5f03.js","assets/Paragraph.d0378343.js","assets/Text.c33f164a.js","assets/Title.abc37adf.js","assets/index.824bcb23.js","assets/Card.850be138.js","assets/TabPane.f8a6e192.js","assets/hasIn.c81db0e4.js","assets/index.3c8fbafb.js","assets/Home.1326bf62.css"]),meta:{title:"Home - Abstra",allowUnauthenticated:!0}},{path:"/_player/kanban",name:"playerKanban",component:()=>r(()=>import("./Kanban.111a4624.js"),["assets/Kanban.111a4624.js","assets/Navbar.vue_vue_type_script_setup_true_lang.3c340704.js","assets/outputWidgets.a3cf86d4.js","assets/outputWidgets.6d880e89.css","assets/asyncComputed.1cc21e38.js","assets/Text.c33f164a.js","assets/Base.438220fe.js","assets/Typography.2d337449.js","assets/index.da726cd2.js","assets/Link.61dd5f03.js","assets/Paragraph.d0378343.js","assets/Title.abc37adf.js","assets/index.af89eb75.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.928c534f.css","assets/repository.14575f59.js","assets/api.2f2cdc65.js","assets/index.cf4c23b9.js","assets/icons.71dd468a.js","assets/index.3c8fbafb.js","assets/ant-design.c1da1bcc.js","assets/index.9041dcba.js","assets/Modal.a36dd52c.js","assets/index.1c110c61.js","assets/index.b4a80997.js","assets/index.71a1c764.js","assets/CollapsePanel.26685f14.js","assets/Form.48a2d714.js","assets/hasIn.c81db0e4.js","assets/Timeline.012fe06b.js","assets/index.9e0eb879.js","assets/index.9134ebdf.js","assets/isNumeric.75337b1e.js","assets/contracts.generated.8c979689.js","assets/workspaces.cec5c6f2.js","assets/runnerData.678131e4.js","assets/url.eef7d5cb.js","assets/record.284ed593.js","assets/pubsub.f3afa6c4.js","assets/scripts.13ac6d69.js","assets/envVars.be48c3cd.js","assets/ExpandOutlined.9b5298b6.js","assets/Card.850be138.js","assets/TabPane.f8a6e192.js","assets/repository.fa37235a.css","assets/api.be2c2269.js"]),meta:{title:"Kanban - Abstra",requires:"workflow_viewer"}},{path:"/_player/login",name:"playerLogin",component:()=>r(()=>import("./Login.27025fbd.js"),["assets/Login.27025fbd.js","assets/api.be2c2269.js","assets/runnerData.678131e4.js","assets/url.eef7d5cb.js","assets/outputWidgets.a3cf86d4.js","assets/outputWidgets.6d880e89.css","assets/Passwordless.eef2ee59.js","assets/icons.71dd468a.js","assets/CircularLoading.f5dba7da.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.7de0ca4a.css","assets/asyncComputed.1cc21e38.js","assets/WidgetsFrame.93a10971.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.f3afa6c4.js","assets/Login.c698e41c.css"]),meta:{allowUnauthenticated:!0}},{path:"/_player/error/:status",name:"error",component:()=>r(()=>import("./Error.ac2360f4.js"),["assets/Error.ac2360f4.js","assets/Navbar.vue_vue_type_script_setup_true_lang.3c340704.js","assets/outputWidgets.a3cf86d4.js","assets/outputWidgets.6d880e89.css","assets/asyncComputed.1cc21e38.js","assets/Text.c33f164a.js","assets/Base.438220fe.js","assets/Typography.2d337449.js","assets/index.da726cd2.js","assets/Link.61dd5f03.js","assets/Paragraph.d0378343.js","assets/Title.abc37adf.js","assets/index.af89eb75.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.928c534f.css","assets/api.be2c2269.js","assets/runnerData.678131e4.js","assets/url.eef7d5cb.js","assets/WidgetsFrame.93a10971.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.f3afa6c4.js","assets/Error.afabb19d.css"]),meta:{allowUnauthenticated:!0}},{path:"/:path(.*)*",name:"form",component:()=>r(()=>import("./Form.b6072a64.js"),["assets/Form.b6072a64.js","assets/outputWidgets.a3cf86d4.js","assets/outputWidgets.6d880e89.css","assets/FormRunner.c1a3f22a.js","assets/url.eef7d5cb.js","assets/Passwordless.eef2ee59.js","assets/icons.71dd468a.js","assets/CircularLoading.f5dba7da.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.7de0ca4a.css","assets/PlayerNavbar.1932e884.js","assets/PlayerNavbar.387187c9.css","assets/WidgetsFrame.93a10971.js","assets/WidgetsFrame.13b291ee.css","assets/Steps.78475d31.js","assets/Steps.4a8d55e8.css","assets/Card.850be138.js","assets/TabPane.f8a6e192.js","assets/hasIn.c81db0e4.js","assets/Typography.2d337449.js","assets/FormRunner.2fbc5c93.css","assets/asyncComputed.1cc21e38.js","assets/uuid.b893fa45.js","assets/api.be2c2269.js","assets/runnerData.678131e4.js","assets/pubsub.f3afa6c4.js","assets/Form.1e229486.css"]),meta:{allowUnauthenticated:!0}}],l=_({history:y("/"),routes:R,scrollBehavior(t){if(t.hash)return{el:t.hash}}});l.beforeEach(async(t,e)=>{g(t,e);const a=p.getUser();if(!a&&(!t.meta.allowUnauthenticated||t.meta.requires)){const{redirect:h,...d}=t.query;await l.push({name:"playerLogin",query:{...d,redirect:h||t.path},params:t.params});return}if(a&&t.meta.requires&&!(await p.getRoles()).includes(t.meta.requires)){await l.push({name:"error",params:{status:"403"}});return}});async function A(){const t=await fetch("/_settings");if(!t.ok)throw new Error(await t.text());const e=await t.json();await o.init(e)}const i=class{constructor(e){this.config=e}static async init(e){i.instance=new i(e)}get showWatermark(){return this.config.show_watermark}get isStagingRelease(){return{}.VITE_ABSTRA_RELEASE==="staging"}get isLocal(){return location.origin.match(/http:\/\/localhost:\d+/)}};let o=i;u(o,"instance",null);export{o as S,l as a,E as l,R as r,A as s,p as u};
//# sourceMappingURL=index.434a1aa9.js.map
