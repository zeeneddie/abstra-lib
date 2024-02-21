var f=Object.defineProperty;var d=(t,e,a)=>e in t?f(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var u=(t,e,a)=>(d(t,typeof e!="symbol"?e+"":e,a),a);import{S as c,t as w,g as _,h as y,i as g,_ as r}from"./outputWidgets.23000524.js";import{P as b}from"./pubsub.1c155070.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="470aea01-f4a2-4f49-9f73-7208f9c1cc64",t._sentryDebugIdIdentifier="sentry-dbid-470aea01-f4a2-4f49-9f73-7208f9c1cc64")}catch{}})();const E=(...t)=>window.fetch(...t),s=class{constructor(e=new b,a=E){this.pubsub=e,this.fetch=a}saveJWT(e){c.set(s.key,e),this.notify()}notify(){const e=this.getUser();this.pubsub.publish("authenticated",e)}getJWT(){return c.get(s.key)}getUser(){const e=this.getJWT();if(e)try{const a=w(e);if(a.exp&&a.exp>Date.now()/1e3)return{jwt:e,claims:a}}catch{console.warn("Invalid JWT")}return null}authHeaders(){const e=this.getJWT();return e?{Authorization:`Bearer ${e}`}:{}}removeUser(){this.pubsub.publish("authenticated",null),c.remove(s.key)}async getRoles(){return(await this.fetch("/_user/my-roles",{headers:this.authHeaders()})).json()}};let n=s;u(n,"key","abstra:auth:jwt");const p=new n,R=[{path:"/",name:"playerHome",component:()=>r(()=>import("./Home.d55ccfd2.js"),["assets/Home.d55ccfd2.js","assets/api.88fe2061.js","assets/runnerData.f20b93ca.js","assets/url.f1743f94.js","assets/outputWidgets.23000524.js","assets/outputWidgets.b5a98445.css","assets/asyncComputed.119d5dc7.js","assets/icons.4c4e9b27.js","assets/ArrowRightOutlined.08fa31dd.js","assets/PlayerNavbar.4a5d84b8.js","assets/PlayerNavbar.387187c9.css","assets/index.b08459a5.js","assets/Base.4c280123.js","assets/Typography.05b88506.js","assets/Link.8428ea5c.js","assets/Paragraph.952d3d60.js","assets/Text.4a706067.js","assets/Title.4ad9b85b.js","assets/index.4f272c2e.js","assets/Card.e6b54178.js","assets/TabPane.ead29efb.js","assets/hasIn.28f00305.js","assets/index.a6ee613e.js","assets/Home.1326bf62.css"]),meta:{title:"Home - Abstra",allowUnauthenticated:!0}},{path:"/_player/kanban",name:"playerKanban",component:()=>r(()=>import("./Kanban.d4ae2547.js"),["assets/Kanban.d4ae2547.js","assets/Navbar.vue_vue_type_script_setup_true_lang.395c15ef.js","assets/outputWidgets.23000524.js","assets/outputWidgets.b5a98445.css","assets/asyncComputed.119d5dc7.js","assets/Text.4a706067.js","assets/Base.4c280123.js","assets/Typography.05b88506.js","assets/index.b08459a5.js","assets/Link.8428ea5c.js","assets/Paragraph.952d3d60.js","assets/Title.4ad9b85b.js","assets/index.4490617e.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.928c534f.css","assets/repository.a696b697.js","assets/api.4f8841b6.js","assets/index.cf4c23b9.js","assets/icons.4c4e9b27.js","assets/index.a6ee613e.js","assets/ant-design.a4f77240.js","assets/index.12214178.js","assets/Modal.06e92a54.js","assets/index.235cb6c6.js","assets/index.53b8663d.js","assets/index.ade79796.js","assets/CollapsePanel.ea3d5e77.js","assets/Form.516b88d2.js","assets/hasIn.28f00305.js","assets/Timeline.be7acdfa.js","assets/index.739f3cc7.js","assets/index.ee0bc2ad.js","assets/isNumeric.75337b1e.js","assets/contracts.generated.2eb43001.js","assets/workspaces.31e8e5d2.js","assets/runnerData.f20b93ca.js","assets/url.f1743f94.js","assets/record.fdd32742.js","assets/pubsub.1c155070.js","assets/scripts.ab3ad0d5.js","assets/envVars.3f92131f.js","assets/ExpandOutlined.fa91d386.js","assets/Card.e6b54178.js","assets/TabPane.ead29efb.js","assets/repository.0d517847.css","assets/api.88fe2061.js"]),meta:{title:"Kanban - Abstra",requires:"workflow_viewer"}},{path:"/_player/login",name:"playerLogin",component:()=>r(()=>import("./Login.4a5364fd.js"),["assets/Login.4a5364fd.js","assets/api.88fe2061.js","assets/runnerData.f20b93ca.js","assets/url.f1743f94.js","assets/outputWidgets.23000524.js","assets/outputWidgets.b5a98445.css","assets/Passwordless.80e6c349.js","assets/icons.4c4e9b27.js","assets/CircularLoading.810117ba.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.7de0ca4a.css","assets/asyncComputed.119d5dc7.js","assets/WidgetsFrame.9fe417c8.js","assets/WidgetsFrame.97ae601d.css","assets/pubsub.1c155070.js","assets/Login.c698e41c.css"]),meta:{allowUnauthenticated:!0}},{path:"/_player/error/:status",name:"error",component:()=>r(()=>import("./Error.9a083d2d.js"),["assets/Error.9a083d2d.js","assets/Navbar.vue_vue_type_script_setup_true_lang.395c15ef.js","assets/outputWidgets.23000524.js","assets/outputWidgets.b5a98445.css","assets/asyncComputed.119d5dc7.js","assets/Text.4a706067.js","assets/Base.4c280123.js","assets/Typography.05b88506.js","assets/index.b08459a5.js","assets/Link.8428ea5c.js","assets/Paragraph.952d3d60.js","assets/Title.4ad9b85b.js","assets/index.4490617e.js","assets/ArrowRightOutlined.08fa31dd.js","assets/Navbar.928c534f.css","assets/api.88fe2061.js","assets/runnerData.f20b93ca.js","assets/url.f1743f94.js","assets/WidgetsFrame.9fe417c8.js","assets/WidgetsFrame.97ae601d.css","assets/pubsub.1c155070.js","assets/Error.afabb19d.css"]),meta:{allowUnauthenticated:!0}},{path:"/:path(.*)*",name:"form",component:()=>r(()=>import("./Form.5602181c.js"),["assets/Form.5602181c.js","assets/outputWidgets.23000524.js","assets/outputWidgets.b5a98445.css","assets/FormRunner.a082a813.js","assets/url.f1743f94.js","assets/Passwordless.80e6c349.js","assets/icons.4c4e9b27.js","assets/CircularLoading.810117ba.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.7de0ca4a.css","assets/PlayerNavbar.4a5d84b8.js","assets/PlayerNavbar.387187c9.css","assets/WidgetsFrame.9fe417c8.js","assets/WidgetsFrame.97ae601d.css","assets/Steps.f94e8cb7.js","assets/Steps.4a8d55e8.css","assets/Card.e6b54178.js","assets/TabPane.ead29efb.js","assets/hasIn.28f00305.js","assets/Typography.05b88506.js","assets/FormRunner.21d1e77c.css","assets/asyncComputed.119d5dc7.js","assets/uuid.bf1ccf5f.js","assets/api.88fe2061.js","assets/runnerData.f20b93ca.js","assets/pubsub.1c155070.js","assets/Form.1e229486.css"]),meta:{allowUnauthenticated:!0}}],l=_({history:y("/"),routes:R,scrollBehavior(t){if(t.hash)return{el:t.hash}}});l.beforeEach(async(t,e)=>{g(t,e);const a=p.getUser();if(!a&&(!t.meta.allowUnauthenticated||t.meta.requires)){const{redirect:h,...m}=t.query;await l.push({name:"playerLogin",query:{...m,redirect:h||t.path},params:t.params});return}if(a&&t.meta.requires&&!(await p.getRoles()).includes(t.meta.requires)){await l.push({name:"error",params:{status:"403"}});return}});async function A(){const t=await fetch("/_settings");if(!t.ok)throw new Error(await t.text());const e=await t.json();await o.init(e)}const i=class{constructor(e){this.config=e}static async init(e){i.instance=new i(e)}get showWatermark(){return this.config.show_watermark}get isStagingRelease(){return{}.VITE_ABSTRA_RELEASE==="staging"}get isLocal(){return location.origin.match(/http:\/\/localhost:\d+/)}};let o=i;u(o,"instance",null);export{o as S,l as a,E as l,R as r,A as s,p as u};
//# sourceMappingURL=index.e3298693.js.map
