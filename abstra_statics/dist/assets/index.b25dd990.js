var m=Object.defineProperty;var f=(t,e,a)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var u=(t,e,a)=>(f(t,typeof e!="symbol"?e+"":e,a),a);import{S as c,t as w,g as _,h as b,i as y,_ as r}from"./outputWidgets.25dce6ef.js";import{P as g}from"./pubsub.d8283e38.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="e701f6c5-0b28-4bec-a92b-84fd4d848f1b",t._sentryDebugIdIdentifier="sentry-dbid-e701f6c5-0b28-4bec-a92b-84fd4d848f1b")}catch{}})();const E=(...t)=>window.fetch(...t),s=class{constructor(e=new g,a=E){this.pubsub=e,this.fetch=a}saveJWT(e){c.set(s.key,e),this.notify()}notify(){const e=this.getUser();this.pubsub.publish("authenticated",e)}getJWT(){return c.get(s.key)}getUser(){const e=this.getJWT();if(e)try{const a=w(e);if(a.exp&&a.exp>Date.now()/1e3)return{jwt:e,claims:a}}catch{console.warn("Invalid JWT")}return null}authHeaders(){const e=this.getJWT();return e?{Authorization:`Bearer ${e}`}:{}}removeUser(){this.pubsub.publish("authenticated",null),c.remove(s.key)}async getRoles(){return(await this.fetch("/_user/my-roles",{headers:this.authHeaders()})).json()}};let n=s;u(n,"key","abstra:auth:jwt");const p=new n,R=[{path:"/",name:"playerHome",component:()=>r(()=>import("./Home.4acd0684.js"),["assets/Home.4acd0684.js","assets/outputWidgets.25dce6ef.js","assets/outputWidgets.a254438e.css","assets/api.bae0a6fb.js","assets/runnerData.361e047a.js","assets/url.79cbe7ef.js","assets/asyncComputed.a16c4c65.js","assets/PlayerNavbar.b1f6bb65.js","assets/icons.7960dc02.js","assets/PlayerNavbar.387187c9.css","assets/repository.755fae01.js","assets/ArrowRightOutlined.08fa31dd.js","assets/index.a8a306cd.js","assets/Base.fa280ef3.js","assets/Typography.339a5435.js","assets/Link.9c6b757b.js","assets/Paragraph.fadf37c7.js","assets/Text.b67c302b.js","assets/Title.83602e90.js","assets/index.6751de1f.js","assets/Card.fb8671a8.js","assets/TabPane.276c8712.js","assets/hasIn.e0d864a0.js","assets/index.fc4c597e.js","assets/pubsub.d8283e38.js","assets/Home.de07667a.css"]),meta:{title:"Home - Abstra",allowUnauthenticated:!0}},{path:"/_player/kanban",name:"playerKanban",component:()=>r(()=>import("./Kanban.73f5e83f.js"),["assets/Kanban.73f5e83f.js","assets/outputWidgets.25dce6ef.js","assets/outputWidgets.a254438e.css","assets/api.bae0a6fb.js","assets/runnerData.361e047a.js","assets/url.79cbe7ef.js","assets/repository.a0e0ebeb.js","assets/asyncComputed.a16c4c65.js","assets/workspaces.7774725f.js","assets/record.7f3a448e.js","assets/pubsub.d8283e38.js","assets/scripts.2ed23d77.js","assets/envVars.bcc2bdd3.js","assets/api.2dc37a52.js","assets/index.cf4c23b9.js","assets/icons.7960dc02.js","assets/contracts.generated.798bd295.js","assets/index.fc4c597e.js","assets/ant-design.111a07e6.js","assets/index.bd52bba7.js","assets/Modal.69a1b2db.js","assets/Text.b67c302b.js","assets/Base.fa280ef3.js","assets/Typography.339a5435.js","assets/index.a8a306cd.js","assets/Link.9c6b757b.js","assets/Paragraph.fadf37c7.js","assets/Title.83602e90.js","assets/index.7c4562af.js","assets/index.937e53c0.js","assets/index.7e2c66f7.js","assets/CollapsePanel.8f83e592.js","assets/Timeline.ff519879.js","assets/index.79f3b85a.js","assets/index.acaf125f.js","assets/isNumeric.75337b1e.js","assets/ExpandOutlined.ed22e5d2.js","assets/Card.fb8671a8.js","assets/TabPane.276c8712.js","assets/hasIn.e0d864a0.js","assets/DownOutlined.9ed0ce2f.js","assets/index.b6a05492.js","assets/Form.3655a4e5.js","assets/repository.b7a655ef.css","assets/Navbar.vue_vue_type_script_setup_true_lang.fd35f549.js","assets/index.d2546a3c.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.928c534f.css","assets/repository.755fae01.js"]),meta:{title:"Kanban - Abstra",requires:"workflow_viewer"}},{path:"/_player/login",name:"playerLogin",component:()=>r(()=>import("./Login.7c97f2fb.js"),["assets/Login.7c97f2fb.js","assets/api.bae0a6fb.js","assets/runnerData.361e047a.js","assets/url.79cbe7ef.js","assets/outputWidgets.25dce6ef.js","assets/outputWidgets.a254438e.css","assets/Passwordless.b37296a7.js","assets/index.85d40d30.js","assets/icons.7960dc02.js","assets/CircularLoading.250b7810.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.158f4af4.css","assets/asyncComputed.a16c4c65.js","assets/WidgetsFrame.63e66673.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.d8283e38.js","assets/Login.c698e41c.css"]),meta:{allowUnauthenticated:!0}},{path:"/_player/error/:status",name:"error",component:()=>r(()=>import("./Error.5c4c3bb7.js"),["assets/Error.5c4c3bb7.js","assets/Navbar.vue_vue_type_script_setup_true_lang.fd35f549.js","assets/outputWidgets.25dce6ef.js","assets/outputWidgets.a254438e.css","assets/asyncComputed.a16c4c65.js","assets/index.d2546a3c.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Base.fa280ef3.js","assets/Typography.339a5435.js","assets/Text.b67c302b.js","assets/Navbar.928c534f.css","assets/api.bae0a6fb.js","assets/runnerData.361e047a.js","assets/url.79cbe7ef.js","assets/WidgetsFrame.63e66673.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.d8283e38.js","assets/Error.afabb19d.css"]),meta:{allowUnauthenticated:!0}},{path:"/:path(.*)*",name:"form",component:()=>r(()=>import("./Form.5d296524.js"),["assets/Form.5d296524.js","assets/outputWidgets.25dce6ef.js","assets/outputWidgets.a254438e.css","assets/FormRunner.bd352a39.js","assets/url.79cbe7ef.js","assets/Passwordless.b37296a7.js","assets/index.85d40d30.js","assets/icons.7960dc02.js","assets/CircularLoading.250b7810.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.158f4af4.css","assets/PlayerNavbar.b1f6bb65.js","assets/PlayerNavbar.387187c9.css","assets/WidgetsFrame.63e66673.js","assets/WidgetsFrame.13b291ee.css","assets/Steps.14e15536.js","assets/Steps.4a8d55e8.css","assets/Card.fb8671a8.js","assets/TabPane.276c8712.js","assets/hasIn.e0d864a0.js","assets/Typography.339a5435.js","assets/FormRunner.2fbc5c93.css","assets/asyncComputed.a16c4c65.js","assets/uuid.12af096b.js","assets/api.bae0a6fb.js","assets/runnerData.361e047a.js","assets/pubsub.d8283e38.js","assets/Form.1e229486.css"]),meta:{allowUnauthenticated:!0}}],l=_({history:b("/"),routes:R,scrollBehavior(t){if(t.hash)return{el:t.hash}}});l.beforeEach(async(t,e)=>{y(t,e);const a=p.getUser();if(!a&&(!t.meta.allowUnauthenticated||t.meta.requires)){const{redirect:h,...d}=t.query;await l.push({name:"playerLogin",query:{...d,redirect:h||t.path},params:t.params});return}if(a&&t.meta.requires&&!(await p.getRoles()).includes(t.meta.requires)){await l.push({name:"error",params:{status:"403"}});return}});async function A(){const t=await fetch("/_settings");if(!t.ok)throw new Error(await t.text());const e=await t.json();await o.init(e)}const i=class{constructor(e){this.config=e}static async init(e){i.instance=new i(e)}get showWatermark(){return this.config.show_watermark}get isStagingRelease(){return{}.VITE_ABSTRA_RELEASE==="staging"}get isLocal(){return location.origin.match(/http:\/\/localhost:\d+/)}};let o=i;u(o,"instance",null);export{o as S,l as a,E as l,R as r,A as s,p as u};
//# sourceMappingURL=index.b25dd990.js.map
