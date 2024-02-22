var d=Object.defineProperty;var f=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var u=(t,e,a)=>(f(t,typeof e!="symbol"?e+"":e,a),a);import{S as c,t as w,g as _,h as y,i as g,_ as r}from"./outputWidgets.5f19dc20.js";import{P as b}from"./pubsub.cf987a6d.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="feec2721-4c1e-47b8-b495-6843e32f2714",t._sentryDebugIdIdentifier="sentry-dbid-feec2721-4c1e-47b8-b495-6843e32f2714")}catch{}})();const E=(...t)=>window.fetch(...t),s=class{constructor(e=new b,a=E){this.pubsub=e,this.fetch=a}saveJWT(e){c.set(s.key,e),this.notify()}notify(){const e=this.getUser();this.pubsub.publish("authenticated",e)}getJWT(){return c.get(s.key)}getUser(){const e=this.getJWT();if(e)try{const a=w(e);if(a.exp&&a.exp>Date.now()/1e3)return{jwt:e,claims:a}}catch{console.warn("Invalid JWT")}return null}authHeaders(){const e=this.getJWT();return e?{Authorization:`Bearer ${e}`}:{}}removeUser(){this.pubsub.publish("authenticated",null),c.remove(s.key)}async getRoles(){return(await this.fetch("/_user/my-roles",{headers:this.authHeaders()})).json()}};let n=s;u(n,"key","abstra:auth:jwt");const p=new n,R=[{path:"/",name:"playerHome",component:()=>r(()=>import("./Home.9971c22e.js"),["assets/Home.9971c22e.js","assets/api.269bead7.js","assets/runnerData.82056134.js","assets/url.67f7d557.js","assets/outputWidgets.5f19dc20.js","assets/outputWidgets.b5a98445.css","assets/asyncComputed.7644a573.js","assets/icons.74432c33.js","assets/ArrowRightOutlined.08fa31dd.js","assets/PlayerNavbar.67babe30.js","assets/PlayerNavbar.387187c9.css","assets/index.03780873.js","assets/Base.0fabeebf.js","assets/Typography.48eaafd1.js","assets/Link.cc14adfa.js","assets/Paragraph.9c092968.js","assets/Text.eb392bbf.js","assets/Title.c51aa78c.js","assets/index.4484ae62.js","assets/Card.ed384c1f.js","assets/TabPane.ce988d94.js","assets/hasIn.08254cff.js","assets/index.2552162f.js","assets/Home.1326bf62.css"]),meta:{title:"Home - Abstra",allowUnauthenticated:!0}},{path:"/_player/kanban",name:"playerKanban",component:()=>r(()=>import("./Kanban.82e381b0.js"),["assets/Kanban.82e381b0.js","assets/Navbar.vue_vue_type_script_setup_true_lang.b7eb2216.js","assets/outputWidgets.5f19dc20.js","assets/outputWidgets.b5a98445.css","assets/asyncComputed.7644a573.js","assets/Text.eb392bbf.js","assets/Base.0fabeebf.js","assets/Typography.48eaafd1.js","assets/index.03780873.js","assets/Link.cc14adfa.js","assets/Paragraph.9c092968.js","assets/Title.c51aa78c.js","assets/index.ad6315b2.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.928c534f.css","assets/repository.eee2180b.js","assets/api.5cb63b62.js","assets/index.cf4c23b9.js","assets/icons.74432c33.js","assets/index.2552162f.js","assets/ant-design.380befc1.js","assets/index.8c792cda.js","assets/Modal.00d066b5.js","assets/index.eb482644.js","assets/index.2f407357.js","assets/index.390c35ee.js","assets/CollapsePanel.ca79916a.js","assets/Form.3af0c76b.js","assets/hasIn.08254cff.js","assets/Timeline.4ca3d5e2.js","assets/index.26b1b85e.js","assets/index.19effcbb.js","assets/isNumeric.75337b1e.js","assets/contracts.generated.a2ddb1e6.js","assets/workspaces.5f14b5c2.js","assets/runnerData.82056134.js","assets/url.67f7d557.js","assets/record.c399a9f5.js","assets/pubsub.cf987a6d.js","assets/scripts.ef6025e1.js","assets/envVars.d7f42df5.js","assets/ExpandOutlined.feebc6a6.js","assets/Card.ed384c1f.js","assets/TabPane.ce988d94.js","assets/repository.0d517847.css","assets/api.269bead7.js"]),meta:{title:"Kanban - Abstra",requires:"workflow_viewer"}},{path:"/_player/login",name:"playerLogin",component:()=>r(()=>import("./Login.130995ab.js"),["assets/Login.130995ab.js","assets/api.269bead7.js","assets/runnerData.82056134.js","assets/url.67f7d557.js","assets/outputWidgets.5f19dc20.js","assets/outputWidgets.b5a98445.css","assets/Passwordless.387d710a.js","assets/icons.74432c33.js","assets/CircularLoading.b0e39751.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.7de0ca4a.css","assets/asyncComputed.7644a573.js","assets/WidgetsFrame.7660c93e.js","assets/WidgetsFrame.97ae601d.css","assets/pubsub.cf987a6d.js","assets/Login.c698e41c.css"]),meta:{allowUnauthenticated:!0}},{path:"/_player/error/:status",name:"error",component:()=>r(()=>import("./Error.8be1e8db.js"),["assets/Error.8be1e8db.js","assets/Navbar.vue_vue_type_script_setup_true_lang.b7eb2216.js","assets/outputWidgets.5f19dc20.js","assets/outputWidgets.b5a98445.css","assets/asyncComputed.7644a573.js","assets/Text.eb392bbf.js","assets/Base.0fabeebf.js","assets/Typography.48eaafd1.js","assets/index.03780873.js","assets/Link.cc14adfa.js","assets/Paragraph.9c092968.js","assets/Title.c51aa78c.js","assets/index.ad6315b2.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.928c534f.css","assets/api.269bead7.js","assets/runnerData.82056134.js","assets/url.67f7d557.js","assets/WidgetsFrame.7660c93e.js","assets/WidgetsFrame.97ae601d.css","assets/pubsub.cf987a6d.js","assets/Error.afabb19d.css"]),meta:{allowUnauthenticated:!0}},{path:"/:path(.*)*",name:"form",component:()=>r(()=>import("./Form.23d9b709.js"),["assets/Form.23d9b709.js","assets/outputWidgets.5f19dc20.js","assets/outputWidgets.b5a98445.css","assets/FormRunner.94b608a8.js","assets/url.67f7d557.js","assets/Passwordless.387d710a.js","assets/icons.74432c33.js","assets/CircularLoading.b0e39751.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.7de0ca4a.css","assets/PlayerNavbar.67babe30.js","assets/PlayerNavbar.387187c9.css","assets/WidgetsFrame.7660c93e.js","assets/WidgetsFrame.97ae601d.css","assets/Steps.ec177884.js","assets/Steps.4a8d55e8.css","assets/Card.ed384c1f.js","assets/TabPane.ce988d94.js","assets/hasIn.08254cff.js","assets/Typography.48eaafd1.js","assets/FormRunner.5ba85569.css","assets/asyncComputed.7644a573.js","assets/uuid.96d74c51.js","assets/api.269bead7.js","assets/runnerData.82056134.js","assets/pubsub.cf987a6d.js","assets/Form.1e229486.css"]),meta:{allowUnauthenticated:!0}}],l=_({history:y("/"),routes:R,scrollBehavior(t){if(t.hash)return{el:t.hash}}});l.beforeEach(async(t,e)=>{g(t,e);const a=p.getUser();if(!a&&(!t.meta.allowUnauthenticated||t.meta.requires)){const{redirect:h,...m}=t.query;await l.push({name:"playerLogin",query:{...m,redirect:h||t.path},params:t.params});return}if(a&&t.meta.requires&&!(await p.getRoles()).includes(t.meta.requires)){await l.push({name:"error",params:{status:"403"}});return}});async function A(){const t=await fetch("/_settings");if(!t.ok)throw new Error(await t.text());const e=await t.json();await o.init(e)}const i=class{constructor(e){this.config=e}static async init(e){i.instance=new i(e)}get showWatermark(){return this.config.show_watermark}get isStagingRelease(){return{}.VITE_ABSTRA_RELEASE==="staging"}get isLocal(){return location.origin.match(/http:\/\/localhost:\d+/)}};let o=i;u(o,"instance",null);export{o as S,l as a,E as l,R as r,A as s,p as u};
//# sourceMappingURL=index.1493f413.js.map
