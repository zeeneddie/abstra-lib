var m=Object.defineProperty;var f=(t,e,a)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var u=(t,e,a)=>(f(t,typeof e!="symbol"?e+"":e,a),a);import{S as c,t as w,g as _,h as y,i as g,_ as r}from"./outputWidgets.4bdeedf6.js";import{P as b}from"./pubsub.f069be03.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="f6731c79-aa3d-43d8-81c8-763c6f233c37",t._sentryDebugIdIdentifier="sentry-dbid-f6731c79-aa3d-43d8-81c8-763c6f233c37")}catch{}})();const E=(...t)=>window.fetch(...t),s=class{constructor(e=new b,a=E){this.pubsub=e,this.fetch=a}saveJWT(e){c.set(s.key,e),this.notify()}notify(){const e=this.getUser();this.pubsub.publish("authenticated",e)}getJWT(){return c.get(s.key)}getUser(){const e=this.getJWT();if(e)try{const a=w(e);if(a.exp&&a.exp>Date.now()/1e3)return{jwt:e,claims:a}}catch{console.warn("Invalid JWT")}return null}authHeaders(){const e=this.getJWT();return e?{Authorization:`Bearer ${e}`}:{}}removeUser(){this.pubsub.publish("authenticated",null),c.remove(s.key)}async getRoles(){return(await this.fetch("/_user/my-roles",{headers:this.authHeaders()})).json()}};let n=s;u(n,"key","abstra:auth:jwt");const p=new n,R=[{path:"/",name:"playerHome",component:()=>r(()=>import("./Home.0a318def.js"),["assets/Home.0a318def.js","assets/outputWidgets.4bdeedf6.js","assets/outputWidgets.6d880e89.css","assets/api.2c520cad.js","assets/runnerData.54813269.js","assets/url.1fde62e6.js","assets/asyncComputed.24a8bb67.js","assets/PlayerNavbar.18ed71e9.js","assets/icons.17d0b981.js","assets/PlayerNavbar.387187c9.css","assets/repository.441b2c43.js","assets/ArrowRightOutlined.08fa31dd.js","assets/index.4a8a49fe.js","assets/Base.baeb1c24.js","assets/Typography.3f3b56a1.js","assets/Link.3e7fe3bf.js","assets/Paragraph.7fb1b835.js","assets/Text.4321cfaa.js","assets/Title.784d2aab.js","assets/index.e84ff376.js","assets/Card.0726e8fe.js","assets/TabPane.5cd89fc3.js","assets/hasIn.04f62625.js","assets/index.b5379f30.js","assets/pubsub.f069be03.js","assets/Home.de07667a.css"]),meta:{title:"Home - Abstra",allowUnauthenticated:!0}},{path:"/_player/kanban",name:"playerKanban",component:()=>r(()=>import("./Kanban.b8c22fe9.js"),["assets/Kanban.b8c22fe9.js","assets/outputWidgets.4bdeedf6.js","assets/outputWidgets.6d880e89.css","assets/api.2c520cad.js","assets/runnerData.54813269.js","assets/url.1fde62e6.js","assets/repository.717dc55f.js","assets/asyncComputed.24a8bb67.js","assets/api.486099e2.js","assets/index.cf4c23b9.js","assets/icons.17d0b981.js","assets/ant-design.9bd6fc96.js","assets/index.fce38f61.js","assets/Modal.8543e106.js","assets/Text.4321cfaa.js","assets/Base.baeb1c24.js","assets/Typography.3f3b56a1.js","assets/index.4a8a49fe.js","assets/Link.3e7fe3bf.js","assets/Paragraph.7fb1b835.js","assets/Title.784d2aab.js","assets/index.b5379f30.js","assets/index.0f17bb47.js","assets/index.dd1c094d.js","assets/index.4dd7f083.js","assets/CollapsePanel.08de49ed.js","assets/Timeline.e0b94624.js","assets/index.5a58700e.js","assets/index.8f5d7ded.js","assets/isNumeric.75337b1e.js","assets/contracts.generated.25afde3e.js","assets/workspaces.5b96d64b.js","assets/record.b2b122f7.js","assets/pubsub.f069be03.js","assets/scripts.2b962593.js","assets/envVars.619ad1fa.js","assets/index.73004d52.js","assets/Form.a53f72b4.js","assets/hasIn.04f62625.js","assets/ExpandOutlined.538a6734.js","assets/Card.0726e8fe.js","assets/TabPane.5cd89fc3.js","assets/repository.aa17223b.css","assets/Navbar.vue_vue_type_script_setup_true_lang.6a025130.js","assets/index.96aae951.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.928c534f.css","assets/repository.441b2c43.js"]),meta:{title:"Kanban - Abstra",requires:"workflow_viewer"}},{path:"/_player/login",name:"playerLogin",component:()=>r(()=>import("./Login.74fadbe4.js"),["assets/Login.74fadbe4.js","assets/api.2c520cad.js","assets/runnerData.54813269.js","assets/url.1fde62e6.js","assets/outputWidgets.4bdeedf6.js","assets/outputWidgets.6d880e89.css","assets/Passwordless.7091cec3.js","assets/index.954dc930.js","assets/icons.17d0b981.js","assets/CircularLoading.a417689a.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.158f4af4.css","assets/asyncComputed.24a8bb67.js","assets/WidgetsFrame.54155ff5.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.f069be03.js","assets/Login.c698e41c.css"]),meta:{allowUnauthenticated:!0}},{path:"/_player/error/:status",name:"error",component:()=>r(()=>import("./Error.cfde48aa.js"),["assets/Error.cfde48aa.js","assets/Navbar.vue_vue_type_script_setup_true_lang.6a025130.js","assets/outputWidgets.4bdeedf6.js","assets/outputWidgets.6d880e89.css","assets/asyncComputed.24a8bb67.js","assets/index.96aae951.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Base.baeb1c24.js","assets/Typography.3f3b56a1.js","assets/Text.4321cfaa.js","assets/Navbar.928c534f.css","assets/api.2c520cad.js","assets/runnerData.54813269.js","assets/url.1fde62e6.js","assets/WidgetsFrame.54155ff5.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.f069be03.js","assets/Error.afabb19d.css"]),meta:{allowUnauthenticated:!0}},{path:"/:path(.*)*",name:"form",component:()=>r(()=>import("./Form.c116aa49.js"),["assets/Form.c116aa49.js","assets/outputWidgets.4bdeedf6.js","assets/outputWidgets.6d880e89.css","assets/FormRunner.717998e8.js","assets/url.1fde62e6.js","assets/Passwordless.7091cec3.js","assets/index.954dc930.js","assets/icons.17d0b981.js","assets/CircularLoading.a417689a.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.158f4af4.css","assets/PlayerNavbar.18ed71e9.js","assets/PlayerNavbar.387187c9.css","assets/WidgetsFrame.54155ff5.js","assets/WidgetsFrame.13b291ee.css","assets/Steps.22572a30.js","assets/Steps.4a8d55e8.css","assets/Card.0726e8fe.js","assets/TabPane.5cd89fc3.js","assets/hasIn.04f62625.js","assets/Typography.3f3b56a1.js","assets/FormRunner.2fbc5c93.css","assets/asyncComputed.24a8bb67.js","assets/uuid.1213f912.js","assets/api.2c520cad.js","assets/runnerData.54813269.js","assets/pubsub.f069be03.js","assets/Form.1e229486.css"]),meta:{allowUnauthenticated:!0}}],l=_({history:y("/"),routes:R,scrollBehavior(t){if(t.hash)return{el:t.hash}}});l.beforeEach(async(t,e)=>{g(t,e);const a=p.getUser();if(!a&&(!t.meta.allowUnauthenticated||t.meta.requires)){const{redirect:h,...d}=t.query;await l.push({name:"playerLogin",query:{...d,redirect:h||t.path},params:t.params});return}if(a&&t.meta.requires&&!(await p.getRoles()).includes(t.meta.requires)){await l.push({name:"error",params:{status:"403"}});return}});async function A(){const t=await fetch("/_settings");if(!t.ok)throw new Error(await t.text());const e=await t.json();await o.init(e)}const i=class{constructor(e){this.config=e}static async init(e){i.instance=new i(e)}get showWatermark(){return this.config.show_watermark}get isStagingRelease(){return{}.VITE_ABSTRA_RELEASE==="staging"}get isLocal(){return location.origin.match(/http:\/\/localhost:\d+/)}};let o=i;u(o,"instance",null);export{o as S,l as a,E as l,R as r,A as s,p as u};
//# sourceMappingURL=index.01f0bc6b.js.map
