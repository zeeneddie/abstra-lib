var m=Object.defineProperty;var f=(t,e,a)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var u=(t,e,a)=>(f(t,typeof e!="symbol"?e+"":e,a),a);import{S as c,t as w,g as _,h as y,i as g,_ as r}from"./outputWidgets.f017b1ba.js";import{P as b}from"./pubsub.4d72db7b.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="ec3daacb-b674-4110-83df-06f479220180",t._sentryDebugIdIdentifier="sentry-dbid-ec3daacb-b674-4110-83df-06f479220180")}catch{}})();const E=(...t)=>window.fetch(...t),s=class{constructor(e=new b,a=E){this.pubsub=e,this.fetch=a}saveJWT(e){c.set(s.key,e),this.notify()}notify(){const e=this.getUser();this.pubsub.publish("authenticated",e)}getJWT(){return c.get(s.key)}getUser(){const e=this.getJWT();if(e)try{const a=w(e);if(a.exp&&a.exp>Date.now()/1e3)return{jwt:e,claims:a}}catch{console.warn("Invalid JWT")}return null}authHeaders(){const e=this.getJWT();return e?{Authorization:`Bearer ${e}`}:{}}removeUser(){this.pubsub.publish("authenticated",null),c.remove(s.key)}async getRoles(){return(await this.fetch("/_user/my-roles",{headers:this.authHeaders()})).json()}};let n=s;u(n,"key","abstra:auth:jwt");const p=new n,R=[{path:"/",name:"playerHome",component:()=>r(()=>import("./Home.f862b5d8.js"),["assets/Home.f862b5d8.js","assets/outputWidgets.f017b1ba.js","assets/outputWidgets.e406c4a0.css","assets/api.646486da.js","assets/runnerData.69ad746c.js","assets/url.42b30a4e.js","assets/asyncComputed.9ec0ae7d.js","assets/PlayerNavbar.b323f789.js","assets/repository.875b9f0a.js","assets/ArrowRightOutlined.08fa31dd.js","assets/PlayerNavbar.9cc554cb.css","assets/PhArrowSquareOut.vue.962eba4e.js","assets/index.b5f796df.js","assets/Base.bb2b5283.js","assets/Typography.5dfc411f.js","assets/Link.d1ea88f0.js","assets/Paragraph.3ffb559e.js","assets/Text.01ac3fdf.js","assets/Title.4002b692.js","assets/index.dc236740.js","assets/Card.9bd70da8.js","assets/TabPane.3d7693e6.js","assets/hasIn.a2b4c2f9.js","assets/index.5cbbe314.js","assets/pubsub.4d72db7b.js","assets/Home.811bb2ab.css"]),meta:{title:"Home - Abstra",allowUnauthenticated:!0}},{path:"/_player/kanban",name:"playerKanban",component:()=>r(()=>import("./Kanban.65ec6645.js"),["assets/Kanban.65ec6645.js","assets/outputWidgets.f017b1ba.js","assets/outputWidgets.e406c4a0.css","assets/api.646486da.js","assets/runnerData.69ad746c.js","assets/url.42b30a4e.js","assets/repository.469a5d35.js","assets/asyncComputed.9ec0ae7d.js","assets/workspaces.aaea5068.js","assets/record.e2bcfa5f.js","assets/pubsub.4d72db7b.js","assets/scripts.d8d6bdcc.js","assets/envVars.952414d1.js","assets/api.1f698687.js","assets/index.cf4c23b9.js","assets/PhScroll.vue.80bb185b.js","assets/PhWebhooksLogo.vue.bee1b0d9.js","assets/index.5cbbe314.js","assets/ant-design.f8dd6064.js","assets/index.11845c93.js","assets/Modal.334f8812.js","assets/Text.01ac3fdf.js","assets/Base.bb2b5283.js","assets/Typography.5dfc411f.js","assets/index.b5f796df.js","assets/Link.d1ea88f0.js","assets/Paragraph.3ffb559e.js","assets/Title.4002b692.js","assets/index.b5d890a4.js","assets/index.92e1480a.js","assets/index.97a56b04.js","assets/CollapsePanel.a2068d5c.js","assets/Timeline.f0acaa40.js","assets/index.0deb07e4.js","assets/index.76f119cc.js","assets/isNumeric.75337b1e.js","assets/ExpandOutlined.4a8c0ef7.js","assets/Card.9bd70da8.js","assets/TabPane.3d7693e6.js","assets/hasIn.a2b4c2f9.js","assets/vuedraggable.umd.c790090d.js","assets/index.b2067256.js","assets/Form.c4ae4d63.js","assets/repository.549e1324.css","assets/Navbar.vue_vue_type_script_setup_true_lang.c7af449a.js","assets/index.0750564d.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.928c534f.css","assets/repository.875b9f0a.js"]),meta:{title:"Kanban - Abstra",requires:"workflow_viewer"}},{path:"/_player/login",name:"playerLogin",component:()=>r(()=>import("./Login.2e303312.js"),["assets/Login.2e303312.js","assets/api.646486da.js","assets/runnerData.69ad746c.js","assets/url.42b30a4e.js","assets/outputWidgets.f017b1ba.js","assets/outputWidgets.e406c4a0.css","assets/Passwordless.e85302fa.js","assets/index.4a35214d.js","assets/PhArrowClockwise.vue.2fdd521a.js","assets/CircularLoading.f397eb8b.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.22c96f95.css","assets/asyncComputed.9ec0ae7d.js","assets/WidgetsFrame.ba21a3b2.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.4d72db7b.js","assets/Login.c698e41c.css"]),meta:{allowUnauthenticated:!0}},{path:"/_player/error/:status",name:"error",component:()=>r(()=>import("./Error.4cb47f30.js"),["assets/Error.4cb47f30.js","assets/Navbar.vue_vue_type_script_setup_true_lang.c7af449a.js","assets/outputWidgets.f017b1ba.js","assets/outputWidgets.e406c4a0.css","assets/asyncComputed.9ec0ae7d.js","assets/index.0750564d.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Base.bb2b5283.js","assets/Typography.5dfc411f.js","assets/Text.01ac3fdf.js","assets/Navbar.928c534f.css","assets/api.646486da.js","assets/runnerData.69ad746c.js","assets/url.42b30a4e.js","assets/WidgetsFrame.ba21a3b2.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.4d72db7b.js","assets/Error.afabb19d.css"]),meta:{allowUnauthenticated:!0}},{path:"/:path(.*)*",name:"form",component:()=>r(()=>import("./Form.476c713d.js"),["assets/Form.476c713d.js","assets/outputWidgets.f017b1ba.js","assets/outputWidgets.e406c4a0.css","assets/FormRunner.c5da96f2.js","assets/url.42b30a4e.js","assets/Passwordless.e85302fa.js","assets/index.4a35214d.js","assets/PhArrowClockwise.vue.2fdd521a.js","assets/CircularLoading.f397eb8b.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.22c96f95.css","assets/PlayerNavbar.b323f789.js","assets/repository.875b9f0a.js","assets/asyncComputed.9ec0ae7d.js","assets/ArrowRightOutlined.08fa31dd.js","assets/PlayerNavbar.9cc554cb.css","assets/WidgetsFrame.ba21a3b2.js","assets/WidgetsFrame.13b291ee.css","assets/Steps.ce2711d2.js","assets/Steps.4a8d55e8.css","assets/Card.9bd70da8.js","assets/TabPane.3d7693e6.js","assets/hasIn.a2b4c2f9.js","assets/Typography.5dfc411f.js","assets/FormRunner.7e0b2893.css","assets/uuid.d903a693.js","assets/api.646486da.js","assets/runnerData.69ad746c.js","assets/pubsub.4d72db7b.js","assets/Form.1e229486.css"]),meta:{allowUnauthenticated:!0}}],l=_({history:y("/"),routes:R,scrollBehavior(t){if(t.hash)return{el:t.hash}}});l.beforeEach(async(t,e)=>{g(t,e);const a=p.getUser();if(!a&&(!t.meta.allowUnauthenticated||t.meta.requires)){const{redirect:h,...d}=t.query;await l.push({name:"playerLogin",query:{...d,redirect:h||t.path},params:t.params});return}if(a&&t.meta.requires&&!(await p.getRoles()).includes(t.meta.requires)){await l.push({name:"error",params:{status:"403"}});return}});async function A(){const t=await fetch("/_settings");if(!t.ok)throw new Error(await t.text());const e=await t.json();await o.init(e)}const i=class{constructor(e){this.config=e}static async init(e){i.instance=new i(e)}get showWatermark(){return this.config.show_watermark}get isStagingRelease(){return{}.VITE_ABSTRA_RELEASE==="staging"}get isLocal(){return location.origin.match(/http:\/\/localhost:\d+/)}};let o=i;u(o,"instance",null);export{o as S,l as a,E as l,R as r,A as s,p as u};
//# sourceMappingURL=index.7f38f098.js.map