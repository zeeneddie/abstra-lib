var d=Object.defineProperty;var f=(t,e,a)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var c=(t,e,a)=>(f(t,typeof e!="symbol"?e+"":e,a),a);import{S as u,t as w,g as _,h as y,i as g,_ as r}from"./outputWidgets.41f7366b.js";import{P as b}from"./pubsub.84bba8cb.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="6df371ce-1b6f-4185-87c5-4c751c11c66a",t._sentryDebugIdIdentifier="sentry-dbid-6df371ce-1b6f-4185-87c5-4c751c11c66a")}catch{}})();const E=(...t)=>window.fetch(...t),s=class{constructor(e=new b,a=E){this.pubsub=e,this.fetch=a}saveJWT(e){u.set(s.key,e),this.notify()}notify(){const e=this.getUser();this.pubsub.publish("authenticated",e)}getJWT(){return u.get(s.key)}getUser(){const e=this.getJWT();if(e)try{const a=w(e);if(a.exp&&a.exp>Date.now()/1e3)return{jwt:e,claims:a}}catch{console.warn("Invalid JWT")}return null}authHeaders(){const e=this.getJWT();return e?{Authorization:`Bearer ${e}`}:{}}removeUser(){this.pubsub.publish("authenticated",null),u.remove(s.key)}async getRoles(){return(await this.fetch("/_user/my-roles",{headers:this.authHeaders()})).json()}};let n=s;c(n,"key","abstra:auth:jwt");const p=new n,R=[{path:"/",name:"playerHome",component:()=>r(()=>import("./Home.c3bc9034.js"),["assets/Home.c3bc9034.js","assets/outputWidgets.41f7366b.js","assets/outputWidgets.a254438e.css","assets/api.6b486166.js","assets/runnerData.3d454832.js","assets/url.979c65af.js","assets/asyncComputed.c6d5d13b.js","assets/PlayerNavbar.e44cddf1.js","assets/icons.c7395d55.js","assets/PlayerNavbar.387187c9.css","assets/repository.efc27042.js","assets/ArrowRightOutlined.08fa31dd.js","assets/index.3d37fcc5.js","assets/Base.5d0b294d.js","assets/Typography.5d46f71f.js","assets/Link.083765cb.js","assets/Paragraph.e2dc8cc8.js","assets/Text.d563d919.js","assets/Title.e9f2d928.js","assets/index.a9b4caab.js","assets/Card.e23e3fe0.js","assets/TabPane.3ae6f3c1.js","assets/hasIn.1581cdbd.js","assets/index.3ade146c.js","assets/pubsub.84bba8cb.js","assets/Home.de07667a.css"]),meta:{title:"Home - Abstra",allowUnauthenticated:!0}},{path:"/_player/kanban",name:"playerKanban",component:()=>r(()=>import("./Kanban.3d158ed7.js"),["assets/Kanban.3d158ed7.js","assets/outputWidgets.41f7366b.js","assets/outputWidgets.a254438e.css","assets/api.6b486166.js","assets/runnerData.3d454832.js","assets/url.979c65af.js","assets/repository.b4e14979.js","assets/asyncComputed.c6d5d13b.js","assets/workspaces.012ea08f.js","assets/record.5d1d0a56.js","assets/pubsub.84bba8cb.js","assets/scripts.11d30e09.js","assets/envVars.d19769b3.js","assets/api.9530fb64.js","assets/index.cf4c23b9.js","assets/icons.c7395d55.js","assets/contracts.generated.44dea630.js","assets/index.3ade146c.js","assets/ant-design.305fb925.js","assets/index.b3e0475f.js","assets/Modal.705ecca9.js","assets/Text.d563d919.js","assets/Base.5d0b294d.js","assets/Typography.5d46f71f.js","assets/index.3d37fcc5.js","assets/Link.083765cb.js","assets/Paragraph.e2dc8cc8.js","assets/Title.e9f2d928.js","assets/index.f31631d3.js","assets/index.58e993d3.js","assets/index.0e57bf8f.js","assets/CollapsePanel.3668212c.js","assets/Timeline.84055159.js","assets/index.4805e727.js","assets/index.373e25bb.js","assets/isNumeric.75337b1e.js","assets/ExpandOutlined.0ab6cd7f.js","assets/Card.e23e3fe0.js","assets/TabPane.3ae6f3c1.js","assets/hasIn.1581cdbd.js","assets/DownOutlined.d618ae9f.js","assets/index.3db7e625.js","assets/Form.0f714b78.js","assets/repository.b7a655ef.css","assets/Navbar.vue_vue_type_script_setup_true_lang.439678b4.js","assets/index.99dfc556.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.928c534f.css","assets/repository.efc27042.js"]),meta:{title:"Kanban - Abstra",requires:"workflow_viewer"}},{path:"/_player/login",name:"playerLogin",component:()=>r(()=>import("./Login.6861cdef.js"),["assets/Login.6861cdef.js","assets/api.6b486166.js","assets/runnerData.3d454832.js","assets/url.979c65af.js","assets/outputWidgets.41f7366b.js","assets/outputWidgets.a254438e.css","assets/Passwordless.36f5f50d.js","assets/index.61947d5c.js","assets/icons.c7395d55.js","assets/CircularLoading.ccca4e18.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.158f4af4.css","assets/asyncComputed.c6d5d13b.js","assets/WidgetsFrame.940c0ae9.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.84bba8cb.js","assets/Login.c698e41c.css"]),meta:{allowUnauthenticated:!0}},{path:"/_player/error/:status",name:"error",component:()=>r(()=>import("./Error.d3a746c8.js"),["assets/Error.d3a746c8.js","assets/Navbar.vue_vue_type_script_setup_true_lang.439678b4.js","assets/outputWidgets.41f7366b.js","assets/outputWidgets.a254438e.css","assets/asyncComputed.c6d5d13b.js","assets/index.99dfc556.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Base.5d0b294d.js","assets/Typography.5d46f71f.js","assets/Text.d563d919.js","assets/Navbar.928c534f.css","assets/api.6b486166.js","assets/runnerData.3d454832.js","assets/url.979c65af.js","assets/WidgetsFrame.940c0ae9.js","assets/WidgetsFrame.13b291ee.css","assets/pubsub.84bba8cb.js","assets/Error.afabb19d.css"]),meta:{allowUnauthenticated:!0}},{path:"/:path(.*)*",name:"form",component:()=>r(()=>import("./Form.a7e3a418.js"),["assets/Form.a7e3a418.js","assets/outputWidgets.41f7366b.js","assets/outputWidgets.a254438e.css","assets/FormRunner.f2f1b125.js","assets/url.979c65af.js","assets/Passwordless.36f5f50d.js","assets/index.61947d5c.js","assets/icons.c7395d55.js","assets/CircularLoading.ccca4e18.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.158f4af4.css","assets/PlayerNavbar.e44cddf1.js","assets/PlayerNavbar.387187c9.css","assets/WidgetsFrame.940c0ae9.js","assets/WidgetsFrame.13b291ee.css","assets/Steps.9fa2a005.js","assets/Steps.4a8d55e8.css","assets/Card.e23e3fe0.js","assets/TabPane.3ae6f3c1.js","assets/hasIn.1581cdbd.js","assets/Typography.5d46f71f.js","assets/FormRunner.2fbc5c93.css","assets/asyncComputed.c6d5d13b.js","assets/uuid.374042fb.js","assets/api.6b486166.js","assets/runnerData.3d454832.js","assets/pubsub.84bba8cb.js","assets/Form.1e229486.css"]),meta:{allowUnauthenticated:!0}}],l=_({history:y("/"),routes:R,scrollBehavior(t){if(t.hash)return{el:t.hash}}});l.beforeEach(async(t,e)=>{g(t,e);const a=p.getUser();if(!a&&(!t.meta.allowUnauthenticated||t.meta.requires)){const{redirect:h,...m}=t.query;await l.push({name:"playerLogin",query:{...m,redirect:h||t.path},params:t.params});return}if(a&&t.meta.requires&&!(await p.getRoles()).includes(t.meta.requires)){await l.push({name:"error",params:{status:"403"}});return}});async function A(){const t=await fetch("/_settings");if(!t.ok)throw new Error(await t.text());const e=await t.json();await o.init(e)}const i=class{constructor(e){this.config=e}static async init(e){i.instance=new i(e)}get showWatermark(){return this.config.show_watermark}get isStagingRelease(){return{}.VITE_ABSTRA_RELEASE==="staging"}get isLocal(){return location.origin.match(/http:\/\/localhost:\d+/)}};let o=i;c(o,"instance",null);export{o as S,l as a,E as l,R as r,A as s,p as u};
//# sourceMappingURL=index.acca04c0.js.map
