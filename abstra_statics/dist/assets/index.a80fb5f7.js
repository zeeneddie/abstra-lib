var d=Object.defineProperty;var w=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var u=(t,e,a)=>(w(t,typeof e!="symbol"?e+"":e,a),a);import{S as c,t as _,g as f,h as y,i as g,_ as r}from"./outputWidgets.b371faab.js";import{P as b}from"./pubsub.1ef18f2c.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="2848383b-c558-4d72-8f25-2a2ea29827c2",t._sentryDebugIdIdentifier="sentry-dbid-2848383b-c558-4d72-8f25-2a2ea29827c2")}catch{}})();const E=(...t)=>window.fetch(...t),s=class{constructor(e=new b,a=E){this.pubsub=e,this.fetch=a}saveJWT(e){c.set(s.key,e),this.notify()}notify(){const e=this.getUser();this.pubsub.publish("authenticated",e)}getJWT(){return c.get(s.key)}getUser(){const e=this.getJWT();if(e)try{const a=_(e);if(a.exp&&a.exp>Date.now()/1e3)return{jwt:e,claims:a}}catch{console.warn("Invalid JWT")}return null}authHeaders(){const e=this.getJWT();return e?{Authorization:`Bearer ${e}`}:{}}removeUser(){this.pubsub.publish("authenticated",null),c.remove(s.key)}async getRoles(){return(await this.fetch("/_user/my-roles",{headers:this.authHeaders()})).json()}};let n=s;u(n,"key","abstra:auth:jwt");const p=new n,R=[{path:"/",name:"playerHome",component:()=>r(()=>import("./Home.ada71f21.js"),["assets/Home.ada71f21.js","assets/outputWidgets.b371faab.js","assets/outputWidgets.6d880e89.css","assets/api.e8fffba9.js","assets/runnerData.d7938a08.js","assets/url.4b522996.js","assets/asyncComputed.66bdf3a5.js","assets/PlayerNavbar.b1a11ab1.js","assets/icons.60c48a9c.js","assets/PlayerNavbar.387187c9.css","assets/repository.1e555240.js","assets/ArrowRightOutlined.08fa31dd.js","assets/index.22a1128d.js","assets/Base.0aab856c.js","assets/Typography.abd3e9cc.js","assets/Link.71e7ddf2.js","assets/Paragraph.8dc909f8.js","assets/Text.f0bed858.js","assets/Title.22d25069.js","assets/index.7459ad55.js","assets/Card.735643f9.js","assets/TabPane.e7a277d9.js","assets/hasIn.e0ab2aca.js","assets/index.d1149b95.js","assets/pubsub.1ef18f2c.js","assets/Home.de07667a.css"]),meta:{title:"Home - Abstra",allowUnauthenticated:!0}},{path:"/_player/kanban",name:"playerKanban",component:()=>r(()=>import("./Kanban.e328b920.js"),["assets/Kanban.e328b920.js","assets/outputWidgets.b371faab.js","assets/outputWidgets.6d880e89.css","assets/api.e8fffba9.js","assets/runnerData.d7938a08.js","assets/url.4b522996.js","assets/repository.31b08cea.js","assets/asyncComputed.66bdf3a5.js","assets/api.e51a730c.js","assets/index.cf4c23b9.js","assets/icons.60c48a9c.js","assets/ant-design.b3579a21.js","assets/index.2cc32927.js","assets/Modal.a1061144.js","assets/Text.f0bed858.js","assets/Base.0aab856c.js","assets/Typography.abd3e9cc.js","assets/index.22a1128d.js","assets/Link.71e7ddf2.js","assets/Paragraph.8dc909f8.js","assets/Title.22d25069.js","assets/index.d1149b95.js","assets/index.1d80631e.js","assets/index.5b64ed5b.js","assets/index.8d13ecca.js","assets/CollapsePanel.5cbf9c88.js","assets/Form.dcac769d.js","assets/hasIn.e0ab2aca.js","assets/Timeline.de236b4b.js","assets/index.a1ca8cd7.js","assets/index.60aed530.js","assets/isNumeric.75337b1e.js","assets/contracts.generated.a068efc2.js","assets/workspaces.e7c9b2b1.js","assets/record.7038c83f.js","assets/pubsub.1ef18f2c.js","assets/scripts.5cb392b9.js","assets/envVars.ca14dd64.js","assets/ExpandOutlined.2bf7e858.js","assets/Card.735643f9.js","assets/TabPane.e7a277d9.js","assets/repository.4e549b39.css","assets/Navbar.vue_vue_type_script_setup_true_lang.012776fe.js","assets/index.35ba3c85.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.928c534f.css","assets/repository.1e555240.js"]),meta:{title:"Kanban - Abstra",requires:"workflow_viewer"}},{path:"/_player/login",name:"playerLogin",component:()=>r(()=>import("./Login.c4557962.js"),["assets/Login.c4557962.js","assets/api.e8fffba9.js","assets/runnerData.d7938a08.js","assets/url.4b522996.js","assets/outputWidgets.b371faab.js","assets/outputWidgets.6d880e89.css","assets/Passwordless.d49ff344.js","assets/icons.60c48a9c.js","assets/CircularLoading.04779ce2.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.7de0ca4a.css","assets/asyncComputed.66bdf3a5.js","assets/WidgetsFrame.ec6b4234.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.1ef18f2c.js","assets/Login.c698e41c.css"]),meta:{allowUnauthenticated:!0}},{path:"/_player/error/:status",name:"error",component:()=>r(()=>import("./Error.27a7a0ec.js"),["assets/Error.27a7a0ec.js","assets/Navbar.vue_vue_type_script_setup_true_lang.012776fe.js","assets/outputWidgets.b371faab.js","assets/outputWidgets.6d880e89.css","assets/asyncComputed.66bdf3a5.js","assets/index.35ba3c85.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Base.0aab856c.js","assets/Typography.abd3e9cc.js","assets/Text.f0bed858.js","assets/Navbar.928c534f.css","assets/api.e8fffba9.js","assets/runnerData.d7938a08.js","assets/url.4b522996.js","assets/WidgetsFrame.ec6b4234.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.1ef18f2c.js","assets/Error.afabb19d.css"]),meta:{allowUnauthenticated:!0}},{path:"/:path(.*)*",name:"form",component:()=>r(()=>import("./Form.df154063.js"),["assets/Form.df154063.js","assets/outputWidgets.b371faab.js","assets/outputWidgets.6d880e89.css","assets/FormRunner.0f9d7ebe.js","assets/url.4b522996.js","assets/Passwordless.d49ff344.js","assets/icons.60c48a9c.js","assets/CircularLoading.04779ce2.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.7de0ca4a.css","assets/PlayerNavbar.b1a11ab1.js","assets/PlayerNavbar.387187c9.css","assets/WidgetsFrame.ec6b4234.js","assets/WidgetsFrame.13b291ee.css","assets/Steps.3c04b0d1.js","assets/Steps.4a8d55e8.css","assets/Card.735643f9.js","assets/TabPane.e7a277d9.js","assets/hasIn.e0ab2aca.js","assets/Typography.abd3e9cc.js","assets/FormRunner.2fbc5c93.css","assets/asyncComputed.66bdf3a5.js","assets/uuid.ea7b9e35.js","assets/api.e8fffba9.js","assets/runnerData.d7938a08.js","assets/pubsub.1ef18f2c.js","assets/Form.1e229486.css"]),meta:{allowUnauthenticated:!0}}],l=f({history:y("/"),routes:R,scrollBehavior(t){if(t.hash)return{el:t.hash}}});l.beforeEach(async(t,e)=>{g(t,e);const a=p.getUser();if(!a&&(!t.meta.allowUnauthenticated||t.meta.requires)){const{redirect:h,...m}=t.query;await l.push({name:"playerLogin",query:{...m,redirect:h||t.path},params:t.params});return}if(a&&t.meta.requires&&!(await p.getRoles()).includes(t.meta.requires)){await l.push({name:"error",params:{status:"403"}});return}});async function A(){const t=await fetch("/_settings");if(!t.ok)throw new Error(await t.text());const e=await t.json();await o.init(e)}const i=class{constructor(e){this.config=e}static async init(e){i.instance=new i(e)}get showWatermark(){return this.config.show_watermark}get isStagingRelease(){return{}.VITE_ABSTRA_RELEASE==="staging"}get isLocal(){return location.origin.match(/http:\/\/localhost:\d+/)}};let o=i;u(o,"instance",null);export{o as S,l as a,E as l,R as r,A as s,p as u};
//# sourceMappingURL=index.a80fb5f7.js.map
