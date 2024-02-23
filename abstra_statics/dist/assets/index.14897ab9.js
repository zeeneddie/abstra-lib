var d=Object.defineProperty;var w=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var u=(t,e,a)=>(w(t,typeof e!="symbol"?e+"":e,a),a);import{S as c,t as _,g as f,h as y,i as g,_ as r}from"./outputWidgets.0a8e4948.js";import{P as b}from"./pubsub.dcb12b9f.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="352bdc28-a419-40cb-91a5-7f47c963342a",t._sentryDebugIdIdentifier="sentry-dbid-352bdc28-a419-40cb-91a5-7f47c963342a")}catch{}})();const E=(...t)=>window.fetch(...t),s=class{constructor(e=new b,a=E){this.pubsub=e,this.fetch=a}saveJWT(e){c.set(s.key,e),this.notify()}notify(){const e=this.getUser();this.pubsub.publish("authenticated",e)}getJWT(){return c.get(s.key)}getUser(){const e=this.getJWT();if(e)try{const a=_(e);if(a.exp&&a.exp>Date.now()/1e3)return{jwt:e,claims:a}}catch{console.warn("Invalid JWT")}return null}authHeaders(){const e=this.getJWT();return e?{Authorization:`Bearer ${e}`}:{}}removeUser(){this.pubsub.publish("authenticated",null),c.remove(s.key)}async getRoles(){return(await this.fetch("/_user/my-roles",{headers:this.authHeaders()})).json()}};let n=s;u(n,"key","abstra:auth:jwt");const p=new n,R=[{path:"/",name:"playerHome",component:()=>r(()=>import("./Home.295055de.js"),["assets/Home.295055de.js","assets/api.2af17107.js","assets/runnerData.e96f67ef.js","assets/url.5c05e609.js","assets/outputWidgets.0a8e4948.js","assets/outputWidgets.b5a98445.css","assets/asyncComputed.059a4705.js","assets/icons.b13f0b09.js","assets/ArrowRightOutlined.08fa31dd.js","assets/PlayerNavbar.34b46178.js","assets/PlayerNavbar.387187c9.css","assets/index.c3402215.js","assets/Base.dda5d58b.js","assets/Typography.fd999a5c.js","assets/Link.6650ff19.js","assets/Paragraph.b4aaf7da.js","assets/Text.ec9c769b.js","assets/Title.ca8d43a3.js","assets/index.2093130d.js","assets/Card.34fc0534.js","assets/TabPane.4ede097c.js","assets/hasIn.8bcc6abb.js","assets/index.2673874d.js","assets/Home.1326bf62.css"]),meta:{title:"Home - Abstra",allowUnauthenticated:!0}},{path:"/_player/kanban",name:"playerKanban",component:()=>r(()=>import("./Kanban.e5fe1f1f.js"),["assets/Kanban.e5fe1f1f.js","assets/Navbar.vue_vue_type_script_setup_true_lang.2f9ecb34.js","assets/outputWidgets.0a8e4948.js","assets/outputWidgets.b5a98445.css","assets/asyncComputed.059a4705.js","assets/Text.ec9c769b.js","assets/Base.dda5d58b.js","assets/Typography.fd999a5c.js","assets/index.c3402215.js","assets/Link.6650ff19.js","assets/Paragraph.b4aaf7da.js","assets/Title.ca8d43a3.js","assets/index.3a967032.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.928c534f.css","assets/repository.8d0efc43.js","assets/api.08f5d047.js","assets/index.cf4c23b9.js","assets/icons.b13f0b09.js","assets/index.2673874d.js","assets/ant-design.efb76e31.js","assets/index.ab9ed469.js","assets/Modal.7e08920e.js","assets/index.e5d762a8.js","assets/index.b9c8498e.js","assets/index.f4e17bed.js","assets/CollapsePanel.59258ae1.js","assets/Form.c559c050.js","assets/hasIn.8bcc6abb.js","assets/Timeline.bd3fc2e4.js","assets/index.6be6239e.js","assets/index.561d86d7.js","assets/isNumeric.75337b1e.js","assets/contracts.generated.55cc010e.js","assets/workspaces.a90ffeac.js","assets/runnerData.e96f67ef.js","assets/url.5c05e609.js","assets/record.68d70ea4.js","assets/pubsub.dcb12b9f.js","assets/scripts.89e68ee2.js","assets/envVars.ef1bfd4f.js","assets/ExpandOutlined.ca400c9f.js","assets/Card.34fc0534.js","assets/TabPane.4ede097c.js","assets/repository.8e89c80c.css","assets/api.2af17107.js"]),meta:{title:"Kanban - Abstra",requires:"workflow_viewer"}},{path:"/_player/login",name:"playerLogin",component:()=>r(()=>import("./Login.300d8f32.js"),["assets/Login.300d8f32.js","assets/api.2af17107.js","assets/runnerData.e96f67ef.js","assets/url.5c05e609.js","assets/outputWidgets.0a8e4948.js","assets/outputWidgets.b5a98445.css","assets/Passwordless.69343137.js","assets/icons.b13f0b09.js","assets/CircularLoading.68854f75.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.7de0ca4a.css","assets/asyncComputed.059a4705.js","assets/WidgetsFrame.64d79499.js","assets/WidgetsFrame.97ae601d.css","assets/pubsub.dcb12b9f.js","assets/Login.c698e41c.css"]),meta:{allowUnauthenticated:!0}},{path:"/_player/error/:status",name:"error",component:()=>r(()=>import("./Error.5db25e19.js"),["assets/Error.5db25e19.js","assets/Navbar.vue_vue_type_script_setup_true_lang.2f9ecb34.js","assets/outputWidgets.0a8e4948.js","assets/outputWidgets.b5a98445.css","assets/asyncComputed.059a4705.js","assets/Text.ec9c769b.js","assets/Base.dda5d58b.js","assets/Typography.fd999a5c.js","assets/index.c3402215.js","assets/Link.6650ff19.js","assets/Paragraph.b4aaf7da.js","assets/Title.ca8d43a3.js","assets/index.3a967032.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.928c534f.css","assets/api.2af17107.js","assets/runnerData.e96f67ef.js","assets/url.5c05e609.js","assets/WidgetsFrame.64d79499.js","assets/WidgetsFrame.97ae601d.css","assets/pubsub.dcb12b9f.js","assets/Error.afabb19d.css"]),meta:{allowUnauthenticated:!0}},{path:"/:path(.*)*",name:"form",component:()=>r(()=>import("./Form.84e362ca.js"),["assets/Form.84e362ca.js","assets/outputWidgets.0a8e4948.js","assets/outputWidgets.b5a98445.css","assets/FormRunner.326caded.js","assets/url.5c05e609.js","assets/Passwordless.69343137.js","assets/icons.b13f0b09.js","assets/CircularLoading.68854f75.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.7de0ca4a.css","assets/PlayerNavbar.34b46178.js","assets/PlayerNavbar.387187c9.css","assets/WidgetsFrame.64d79499.js","assets/WidgetsFrame.97ae601d.css","assets/Steps.93a7480c.js","assets/Steps.4a8d55e8.css","assets/Card.34fc0534.js","assets/TabPane.4ede097c.js","assets/hasIn.8bcc6abb.js","assets/Typography.fd999a5c.js","assets/FormRunner.2fbc5c93.css","assets/asyncComputed.059a4705.js","assets/uuid.ca4b1a4e.js","assets/api.2af17107.js","assets/runnerData.e96f67ef.js","assets/pubsub.dcb12b9f.js","assets/Form.1e229486.css"]),meta:{allowUnauthenticated:!0}}],l=f({history:y("/"),routes:R,scrollBehavior(t){if(t.hash)return{el:t.hash}}});l.beforeEach(async(t,e)=>{g(t,e);const a=p.getUser();if(!a&&(!t.meta.allowUnauthenticated||t.meta.requires)){const{redirect:h,...m}=t.query;await l.push({name:"playerLogin",query:{...m,redirect:h||t.path},params:t.params});return}if(a&&t.meta.requires&&!(await p.getRoles()).includes(t.meta.requires)){await l.push({name:"error",params:{status:"403"}});return}});async function A(){const t=await fetch("/_settings");if(!t.ok)throw new Error(await t.text());const e=await t.json();await o.init(e)}const i=class{constructor(e){this.config=e}static async init(e){i.instance=new i(e)}get showWatermark(){return this.config.show_watermark}get isStagingRelease(){return{}.VITE_ABSTRA_RELEASE==="staging"}get isLocal(){return location.origin.match(/http:\/\/localhost:\d+/)}};let o=i;u(o,"instance",null);export{o as S,l as a,E as l,R as r,A as s,p as u};
//# sourceMappingURL=index.14897ab9.js.map
