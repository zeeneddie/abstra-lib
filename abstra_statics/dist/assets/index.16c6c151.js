var d=Object.defineProperty;var f=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var u=(t,e,a)=>(f(t,typeof e!="symbol"?e+"":e,a),a);import{S as c,t as w,g as _,h as y,i as g,_ as r}from"./outputWidgets.91c9f730.js";import{P as b}from"./pubsub.25829540.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="4560df68-e09a-41e9-a91a-53fa615eac17",t._sentryDebugIdIdentifier="sentry-dbid-4560df68-e09a-41e9-a91a-53fa615eac17")}catch{}})();const E=(...t)=>window.fetch(...t),s=class{constructor(e=new b,a=E){this.pubsub=e,this.fetch=a}saveJWT(e){c.set(s.key,e),this.notify()}notify(){const e=this.getUser();this.pubsub.publish("authenticated",e)}getJWT(){return c.get(s.key)}getUser(){const e=this.getJWT();if(e)try{const a=w(e);if(a.exp&&a.exp>Date.now()/1e3)return{jwt:e,claims:a}}catch{console.warn("Invalid JWT")}return null}authHeaders(){const e=this.getJWT();return e?{Authorization:`Bearer ${e}`}:{}}removeUser(){this.pubsub.publish("authenticated",null),c.remove(s.key)}async getRoles(){return(await this.fetch("/_user/my-roles",{headers:this.authHeaders()})).json()}};let n=s;u(n,"key","abstra:auth:jwt");const p=new n,R=[{path:"/",name:"playerHome",component:()=>r(()=>import("./Home.d61d1893.js"),["assets/Home.d61d1893.js","assets/outputWidgets.91c9f730.js","assets/outputWidgets.37c4b859.css","assets/api.c4c95097.js","assets/runnerData.08a2f6cc.js","assets/url.bd840ee9.js","assets/asyncComputed.5cff1726.js","assets/PlayerNavbar.ea08c47f.js","assets/icons.e854b740.js","assets/PlayerNavbar.387187c9.css","assets/repository.4b8f2a92.js","assets/ArrowRightOutlined.08fa31dd.js","assets/index.6a722ed0.js","assets/Base.79932679.js","assets/Typography.c7c5698a.js","assets/Link.dd2279d6.js","assets/Paragraph.18e7082b.js","assets/Text.2f03529d.js","assets/Title.69e80303.js","assets/index.fc9765ee.js","assets/Card.a8631760.js","assets/TabPane.7a826f8d.js","assets/hasIn.d8588324.js","assets/index.5a63d36f.js","assets/pubsub.25829540.js","assets/Home.de07667a.css"]),meta:{title:"Home - Abstra",allowUnauthenticated:!0}},{path:"/_player/kanban",name:"playerKanban",component:()=>r(()=>import("./Kanban.e0a2108e.js"),["assets/Kanban.e0a2108e.js","assets/outputWidgets.91c9f730.js","assets/outputWidgets.37c4b859.css","assets/api.c4c95097.js","assets/runnerData.08a2f6cc.js","assets/url.bd840ee9.js","assets/repository.cb501b72.js","assets/asyncComputed.5cff1726.js","assets/workspaces.e0f5ccda.js","assets/record.48aae23b.js","assets/pubsub.25829540.js","assets/scripts.8ea61e22.js","assets/envVars.bfc20846.js","assets/api.9186109d.js","assets/index.cf4c23b9.js","assets/icons.e854b740.js","assets/contracts.generated.cc987ccb.js","assets/index.5a63d36f.js","assets/ant-design.b392f32d.js","assets/index.49f61aa4.js","assets/Modal.41a7632f.js","assets/Text.2f03529d.js","assets/Base.79932679.js","assets/Typography.c7c5698a.js","assets/index.6a722ed0.js","assets/Link.dd2279d6.js","assets/Paragraph.18e7082b.js","assets/Title.69e80303.js","assets/index.946fdb2e.js","assets/index.f6bc8d33.js","assets/index.91782368.js","assets/CollapsePanel.4c443ee5.js","assets/Timeline.d06a0a15.js","assets/index.981556bf.js","assets/index.447513b5.js","assets/isNumeric.75337b1e.js","assets/ExpandOutlined.a22b2405.js","assets/Card.a8631760.js","assets/TabPane.7a826f8d.js","assets/hasIn.d8588324.js","assets/DownOutlined.7911c167.js","assets/index.4bd92eaa.js","assets/Form.f24a1c0a.js","assets/repository.b7a655ef.css","assets/Navbar.vue_vue_type_script_setup_true_lang.577f32ed.js","assets/index.ceb65d67.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.928c534f.css","assets/repository.4b8f2a92.js"]),meta:{title:"Kanban - Abstra",requires:"workflow_viewer"}},{path:"/_player/login",name:"playerLogin",component:()=>r(()=>import("./Login.a1c365ea.js"),["assets/Login.a1c365ea.js","assets/api.c4c95097.js","assets/runnerData.08a2f6cc.js","assets/url.bd840ee9.js","assets/outputWidgets.91c9f730.js","assets/outputWidgets.37c4b859.css","assets/Passwordless.5176a366.js","assets/index.bf798f8b.js","assets/icons.e854b740.js","assets/CircularLoading.71cd396c.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.158f4af4.css","assets/asyncComputed.5cff1726.js","assets/WidgetsFrame.0eaed93e.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.25829540.js","assets/Login.c698e41c.css"]),meta:{allowUnauthenticated:!0}},{path:"/_player/error/:status",name:"error",component:()=>r(()=>import("./Error.d77d56c2.js"),["assets/Error.d77d56c2.js","assets/Navbar.vue_vue_type_script_setup_true_lang.577f32ed.js","assets/outputWidgets.91c9f730.js","assets/outputWidgets.37c4b859.css","assets/asyncComputed.5cff1726.js","assets/index.ceb65d67.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Base.79932679.js","assets/Typography.c7c5698a.js","assets/Text.2f03529d.js","assets/Navbar.928c534f.css","assets/api.c4c95097.js","assets/runnerData.08a2f6cc.js","assets/url.bd840ee9.js","assets/WidgetsFrame.0eaed93e.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.25829540.js","assets/Error.afabb19d.css"]),meta:{allowUnauthenticated:!0}},{path:"/:path(.*)*",name:"form",component:()=>r(()=>import("./Form.2a2b14be.js"),["assets/Form.2a2b14be.js","assets/outputWidgets.91c9f730.js","assets/outputWidgets.37c4b859.css","assets/FormRunner.e63105df.js","assets/url.bd840ee9.js","assets/Passwordless.5176a366.js","assets/index.bf798f8b.js","assets/icons.e854b740.js","assets/CircularLoading.71cd396c.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.158f4af4.css","assets/PlayerNavbar.ea08c47f.js","assets/PlayerNavbar.387187c9.css","assets/WidgetsFrame.0eaed93e.js","assets/WidgetsFrame.13b291ee.css","assets/Steps.515977e0.js","assets/Steps.4a8d55e8.css","assets/Card.a8631760.js","assets/TabPane.7a826f8d.js","assets/hasIn.d8588324.js","assets/Typography.c7c5698a.js","assets/FormRunner.2fbc5c93.css","assets/asyncComputed.5cff1726.js","assets/uuid.4846aa16.js","assets/api.c4c95097.js","assets/runnerData.08a2f6cc.js","assets/pubsub.25829540.js","assets/Form.1e229486.css"]),meta:{allowUnauthenticated:!0}}],l=_({history:y("/"),routes:R,scrollBehavior(t){if(t.hash)return{el:t.hash}}});l.beforeEach(async(t,e)=>{g(t,e);const a=p.getUser();if(!a&&(!t.meta.allowUnauthenticated||t.meta.requires)){const{redirect:h,...m}=t.query;await l.push({name:"playerLogin",query:{...m,redirect:h||t.path},params:t.params});return}if(a&&t.meta.requires&&!(await p.getRoles()).includes(t.meta.requires)){await l.push({name:"error",params:{status:"403"}});return}});async function A(){const t=await fetch("/_settings");if(!t.ok)throw new Error(await t.text());const e=await t.json();await o.init(e)}const i=class{constructor(e){this.config=e}static async init(e){i.instance=new i(e)}get showWatermark(){return this.config.show_watermark}get isStagingRelease(){return{}.VITE_ABSTRA_RELEASE==="staging"}get isLocal(){return location.origin.match(/http:\/\/localhost:\d+/)}};let o=i;u(o,"instance",null);export{o as S,l as a,E as l,R as r,A as s,p as u};
//# sourceMappingURL=index.16c6c151.js.map
