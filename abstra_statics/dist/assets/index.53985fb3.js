var m=Object.defineProperty;var f=(t,e,a)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var u=(t,e,a)=>(f(t,typeof e!="symbol"?e+"":e,a),a);import{S as c,t as w,g as _,h as y,i as g,_ as r}from"./outputWidgets.a70357a7.js";import{P as b}from"./pubsub.34fcad15.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="43e398cf-55b6-4277-9922-44cddf03f19e",t._sentryDebugIdIdentifier="sentry-dbid-43e398cf-55b6-4277-9922-44cddf03f19e")}catch{}})();const E=(...t)=>window.fetch(...t),s=class{constructor(e=new b,a=E){this.pubsub=e,this.fetch=a}saveJWT(e){c.set(s.key,e),this.notify()}notify(){const e=this.getUser();this.pubsub.publish("authenticated",e)}getJWT(){return c.get(s.key)}getUser(){const e=this.getJWT();if(e)try{const a=w(e);if(a.exp&&a.exp>Date.now()/1e3)return{jwt:e,claims:a}}catch{console.warn("Invalid JWT")}return null}authHeaders(){const e=this.getJWT();return e?{Authorization:`Bearer ${e}`}:{}}removeUser(){this.pubsub.publish("authenticated",null),c.remove(s.key)}async getRoles(){return(await this.fetch("/_user/my-roles",{headers:this.authHeaders()})).json()}};let n=s;u(n,"key","abstra:auth:jwt");const p=new n,R=[{path:"/",name:"playerHome",component:()=>r(()=>import("./Home.37e4eed6.js"),["assets/Home.37e4eed6.js","assets/outputWidgets.a70357a7.js","assets/outputWidgets.a254438e.css","assets/api.a0edba8d.js","assets/runnerData.c9660ac1.js","assets/url.9749e9fd.js","assets/asyncComputed.ce941de6.js","assets/PlayerNavbar.06993192.js","assets/icons.db6d2ab8.js","assets/PlayerNavbar.387187c9.css","assets/repository.edf6ddf5.js","assets/ArrowRightOutlined.08fa31dd.js","assets/index.bcadce89.js","assets/Base.98750a27.js","assets/Typography.89aa347d.js","assets/Link.67590633.js","assets/Paragraph.3e9fddcd.js","assets/Text.d18fa337.js","assets/Title.250cda90.js","assets/index.549e2edc.js","assets/Card.6fe21aa6.js","assets/TabPane.8c9cd975.js","assets/hasIn.c12624ec.js","assets/index.62393042.js","assets/pubsub.34fcad15.js","assets/Home.de07667a.css"]),meta:{title:"Home - Abstra",allowUnauthenticated:!0}},{path:"/_player/kanban",name:"playerKanban",component:()=>r(()=>import("./Kanban.2f923a1c.js"),["assets/Kanban.2f923a1c.js","assets/outputWidgets.a70357a7.js","assets/outputWidgets.a254438e.css","assets/api.a0edba8d.js","assets/runnerData.c9660ac1.js","assets/url.9749e9fd.js","assets/repository.45d7b871.js","assets/asyncComputed.ce941de6.js","assets/workspaces.6c2f1feb.js","assets/record.e4a63f9d.js","assets/pubsub.34fcad15.js","assets/scripts.49adf1c8.js","assets/envVars.d60affbc.js","assets/api.c4008af4.js","assets/index.cf4c23b9.js","assets/icons.db6d2ab8.js","assets/contracts.generated.b49e986e.js","assets/index.62393042.js","assets/ant-design.2be92903.js","assets/index.343e8c34.js","assets/Modal.cd69b867.js","assets/Text.d18fa337.js","assets/Base.98750a27.js","assets/Typography.89aa347d.js","assets/index.bcadce89.js","assets/Link.67590633.js","assets/Paragraph.3e9fddcd.js","assets/Title.250cda90.js","assets/index.2b1954dc.js","assets/index.af04500e.js","assets/index.e1ff9c0b.js","assets/CollapsePanel.68fe88b4.js","assets/Timeline.0d76b043.js","assets/index.dc39097f.js","assets/index.d4b8e5da.js","assets/isNumeric.75337b1e.js","assets/ExpandOutlined.b33240ab.js","assets/Card.6fe21aa6.js","assets/TabPane.8c9cd975.js","assets/hasIn.c12624ec.js","assets/DownOutlined.35bfb0c8.js","assets/index.28f8f455.js","assets/Form.57d24d29.js","assets/repository.08adcc41.css","assets/Navbar.vue_vue_type_script_setup_true_lang.b7a90e3f.js","assets/index.e43f05f1.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.928c534f.css","assets/repository.edf6ddf5.js"]),meta:{title:"Kanban - Abstra",requires:"workflow_viewer"}},{path:"/_player/login",name:"playerLogin",component:()=>r(()=>import("./Login.801e8f68.js"),["assets/Login.801e8f68.js","assets/api.a0edba8d.js","assets/runnerData.c9660ac1.js","assets/url.9749e9fd.js","assets/outputWidgets.a70357a7.js","assets/outputWidgets.a254438e.css","assets/Passwordless.84d53da9.js","assets/index.e1fb30b4.js","assets/icons.db6d2ab8.js","assets/CircularLoading.9e4c99f5.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.158f4af4.css","assets/asyncComputed.ce941de6.js","assets/WidgetsFrame.8112dfb2.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.34fcad15.js","assets/Login.c698e41c.css"]),meta:{allowUnauthenticated:!0}},{path:"/_player/error/:status",name:"error",component:()=>r(()=>import("./Error.3be172ba.js"),["assets/Error.3be172ba.js","assets/Navbar.vue_vue_type_script_setup_true_lang.b7a90e3f.js","assets/outputWidgets.a70357a7.js","assets/outputWidgets.a254438e.css","assets/asyncComputed.ce941de6.js","assets/index.e43f05f1.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Base.98750a27.js","assets/Typography.89aa347d.js","assets/Text.d18fa337.js","assets/Navbar.928c534f.css","assets/api.a0edba8d.js","assets/runnerData.c9660ac1.js","assets/url.9749e9fd.js","assets/WidgetsFrame.8112dfb2.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.34fcad15.js","assets/Error.afabb19d.css"]),meta:{allowUnauthenticated:!0}},{path:"/:path(.*)*",name:"form",component:()=>r(()=>import("./Form.a1d73167.js"),["assets/Form.a1d73167.js","assets/outputWidgets.a70357a7.js","assets/outputWidgets.a254438e.css","assets/FormRunner.f2893702.js","assets/url.9749e9fd.js","assets/Passwordless.84d53da9.js","assets/index.e1fb30b4.js","assets/icons.db6d2ab8.js","assets/CircularLoading.9e4c99f5.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.158f4af4.css","assets/PlayerNavbar.06993192.js","assets/PlayerNavbar.387187c9.css","assets/WidgetsFrame.8112dfb2.js","assets/WidgetsFrame.13b291ee.css","assets/Steps.3e24c66f.js","assets/Steps.4a8d55e8.css","assets/Card.6fe21aa6.js","assets/TabPane.8c9cd975.js","assets/hasIn.c12624ec.js","assets/Typography.89aa347d.js","assets/FormRunner.2fbc5c93.css","assets/asyncComputed.ce941de6.js","assets/uuid.a3f6ff5d.js","assets/api.a0edba8d.js","assets/runnerData.c9660ac1.js","assets/pubsub.34fcad15.js","assets/Form.1e229486.css"]),meta:{allowUnauthenticated:!0}}],l=_({history:y("/"),routes:R,scrollBehavior(t){if(t.hash)return{el:t.hash}}});l.beforeEach(async(t,e)=>{g(t,e);const a=p.getUser();if(!a&&(!t.meta.allowUnauthenticated||t.meta.requires)){const{redirect:h,...d}=t.query;await l.push({name:"playerLogin",query:{...d,redirect:h||t.path},params:t.params});return}if(a&&t.meta.requires&&!(await p.getRoles()).includes(t.meta.requires)){await l.push({name:"error",params:{status:"403"}});return}});async function A(){const t=await fetch("/_settings");if(!t.ok)throw new Error(await t.text());const e=await t.json();await o.init(e)}const i=class{constructor(e){this.config=e}static async init(e){i.instance=new i(e)}get showWatermark(){return this.config.show_watermark}get isStagingRelease(){return{}.VITE_ABSTRA_RELEASE==="staging"}get isLocal(){return location.origin.match(/http:\/\/localhost:\d+/)}};let o=i;u(o,"instance",null);export{o as S,l as a,E as l,R as r,A as s,p as u};
//# sourceMappingURL=index.53985fb3.js.map
