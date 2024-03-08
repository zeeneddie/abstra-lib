var m=Object.defineProperty;var f=(t,e,a)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var u=(t,e,a)=>(f(t,typeof e!="symbol"?e+"":e,a),a);import{S as c,t as w,g as _,h as y,i as b,_ as r}from"./outputWidgets.d6771bd9.js";import{P as g}from"./pubsub.5586b81f.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="e916c9cf-bb40-4eac-8e06-dc8be71e0f1d",t._sentryDebugIdIdentifier="sentry-dbid-e916c9cf-bb40-4eac-8e06-dc8be71e0f1d")}catch{}})();const E=(...t)=>window.fetch(...t),s=class{constructor(e=new g,a=E){this.pubsub=e,this.fetch=a}saveJWT(e){c.set(s.key,e),this.notify()}notify(){const e=this.getUser();this.pubsub.publish("authenticated",e)}getJWT(){return c.get(s.key)}getUser(){const e=this.getJWT();if(e)try{const a=w(e);if(a.exp&&a.exp>Date.now()/1e3)return{jwt:e,claims:a}}catch{console.warn("Invalid JWT")}return null}authHeaders(){const e=this.getJWT();return e?{Authorization:`Bearer ${e}`}:{}}removeUser(){this.pubsub.publish("authenticated",null),c.remove(s.key)}async getRoles(){return(await this.fetch("/_user/my-roles",{headers:this.authHeaders()})).json()}};let n=s;u(n,"key","abstra:auth:jwt");const p=new n,R=[{path:"/",name:"playerHome",component:()=>r(()=>import("./Home.ab14be9b.js"),["assets/Home.ab14be9b.js","assets/outputWidgets.d6771bd9.js","assets/outputWidgets.ba69b022.css","assets/api.07d719b3.js","assets/runnerData.3ab9535d.js","assets/url.476008e4.js","assets/asyncComputed.80d29ea0.js","assets/PlayerNavbar.b0dba4bd.js","assets/icons.cbca2df4.js","assets/PlayerNavbar.387187c9.css","assets/repository.9b811bf5.js","assets/ArrowRightOutlined.08fa31dd.js","assets/index.d503154a.js","assets/Base.0ee41a7c.js","assets/Typography.0310f653.js","assets/Link.60b9104b.js","assets/Paragraph.43dd6508.js","assets/Text.d26a4614.js","assets/Title.47214a2f.js","assets/index.a0ece097.js","assets/Card.c47a8fe4.js","assets/TabPane.47f55a6c.js","assets/hasIn.0e8dd531.js","assets/index.3d271e06.js","assets/pubsub.5586b81f.js","assets/Home.de07667a.css"]),meta:{title:"Home - Abstra",allowUnauthenticated:!0}},{path:"/_player/kanban",name:"playerKanban",component:()=>r(()=>import("./Kanban.b2822893.js"),["assets/Kanban.b2822893.js","assets/outputWidgets.d6771bd9.js","assets/outputWidgets.ba69b022.css","assets/api.07d719b3.js","assets/runnerData.3ab9535d.js","assets/url.476008e4.js","assets/repository.6f22b909.js","assets/asyncComputed.80d29ea0.js","assets/workspaces.01b810f0.js","assets/record.d1488526.js","assets/pubsub.5586b81f.js","assets/scripts.c1d7807b.js","assets/envVars.3be1c1f6.js","assets/api.e93d1fca.js","assets/index.cf4c23b9.js","assets/icons.cbca2df4.js","assets/contracts.generated.4af89754.js","assets/index.3d271e06.js","assets/ant-design.4eefe98e.js","assets/index.da9a5f74.js","assets/Modal.c04788fa.js","assets/Text.d26a4614.js","assets/Base.0ee41a7c.js","assets/Typography.0310f653.js","assets/index.d503154a.js","assets/Link.60b9104b.js","assets/Paragraph.43dd6508.js","assets/Title.47214a2f.js","assets/index.d957dad1.js","assets/index.3842da73.js","assets/index.8e384e13.js","assets/CollapsePanel.95125d85.js","assets/Timeline.f45362c2.js","assets/index.f3b56e98.js","assets/index.281ff938.js","assets/isNumeric.75337b1e.js","assets/SyncOutlined.3fd76732.js","assets/ExpandOutlined.55b21a6c.js","assets/Card.c47a8fe4.js","assets/TabPane.47f55a6c.js","assets/hasIn.0e8dd531.js","assets/DownOutlined.71eefe28.js","assets/index.d625930c.js","assets/Form.9219dd96.js","assets/repository.b7a655ef.css","assets/Navbar.vue_vue_type_script_setup_true_lang.f5b906e0.js","assets/index.d0a38d2e.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.928c534f.css","assets/repository.9b811bf5.js"]),meta:{title:"Kanban - Abstra",requires:"workflow_viewer"}},{path:"/_player/login",name:"playerLogin",component:()=>r(()=>import("./Login.aa49fe17.js"),["assets/Login.aa49fe17.js","assets/api.07d719b3.js","assets/runnerData.3ab9535d.js","assets/url.476008e4.js","assets/outputWidgets.d6771bd9.js","assets/outputWidgets.ba69b022.css","assets/Passwordless.208ae988.js","assets/index.876b4bcd.js","assets/icons.cbca2df4.js","assets/CircularLoading.25711d7d.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.158f4af4.css","assets/asyncComputed.80d29ea0.js","assets/WidgetsFrame.de6466a6.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.5586b81f.js","assets/Login.c698e41c.css"]),meta:{allowUnauthenticated:!0}},{path:"/_player/error/:status",name:"error",component:()=>r(()=>import("./Error.fceee811.js"),["assets/Error.fceee811.js","assets/Navbar.vue_vue_type_script_setup_true_lang.f5b906e0.js","assets/outputWidgets.d6771bd9.js","assets/outputWidgets.ba69b022.css","assets/asyncComputed.80d29ea0.js","assets/index.d0a38d2e.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Base.0ee41a7c.js","assets/Typography.0310f653.js","assets/Text.d26a4614.js","assets/Navbar.928c534f.css","assets/api.07d719b3.js","assets/runnerData.3ab9535d.js","assets/url.476008e4.js","assets/WidgetsFrame.de6466a6.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.5586b81f.js","assets/Error.afabb19d.css"]),meta:{allowUnauthenticated:!0}},{path:"/:path(.*)*",name:"form",component:()=>r(()=>import("./Form.d90120da.js"),["assets/Form.d90120da.js","assets/outputWidgets.d6771bd9.js","assets/outputWidgets.ba69b022.css","assets/FormRunner.a85560d1.js","assets/url.476008e4.js","assets/Passwordless.208ae988.js","assets/index.876b4bcd.js","assets/icons.cbca2df4.js","assets/CircularLoading.25711d7d.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.158f4af4.css","assets/PlayerNavbar.b0dba4bd.js","assets/PlayerNavbar.387187c9.css","assets/WidgetsFrame.de6466a6.js","assets/WidgetsFrame.13b291ee.css","assets/Steps.263699cc.js","assets/Steps.4a8d55e8.css","assets/Card.c47a8fe4.js","assets/TabPane.47f55a6c.js","assets/hasIn.0e8dd531.js","assets/Typography.0310f653.js","assets/FormRunner.2fbc5c93.css","assets/asyncComputed.80d29ea0.js","assets/uuid.ed3cee51.js","assets/api.07d719b3.js","assets/runnerData.3ab9535d.js","assets/pubsub.5586b81f.js","assets/Form.1e229486.css"]),meta:{allowUnauthenticated:!0}}],l=_({history:y("/"),routes:R,scrollBehavior(t){if(t.hash)return{el:t.hash}}});l.beforeEach(async(t,e)=>{b(t,e);const a=p.getUser();if(!a&&(!t.meta.allowUnauthenticated||t.meta.requires)){const{redirect:h,...d}=t.query;await l.push({name:"playerLogin",query:{...d,redirect:h||t.path},params:t.params});return}if(a&&t.meta.requires&&!(await p.getRoles()).includes(t.meta.requires)){await l.push({name:"error",params:{status:"403"}});return}});async function A(){const t=await fetch("/_settings");if(!t.ok)throw new Error(await t.text());const e=await t.json();await o.init(e)}const i=class{constructor(e){this.config=e}static async init(e){i.instance=new i(e)}get showWatermark(){return this.config.show_watermark}get isStagingRelease(){return{}.VITE_ABSTRA_RELEASE==="staging"}get isLocal(){return location.origin.match(/http:\/\/localhost:\d+/)}};let o=i;u(o,"instance",null);export{o as S,l as a,E as l,R as r,A as s,p as u};
//# sourceMappingURL=index.7b67183d.js.map
