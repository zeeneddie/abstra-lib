var m=Object.defineProperty;var w=(t,e,a)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var u=(t,e,a)=>(w(t,typeof e!="symbol"?e+"":e,a),a);import{S as c,t as _,g as f,h as y,i as g,_ as r}from"./outputWidgets.c849273f.js";import{P as b}from"./pubsub.4b8cd066.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="2a752e91-3aec-4cf9-89ea-a38dd032c053",t._sentryDebugIdIdentifier="sentry-dbid-2a752e91-3aec-4cf9-89ea-a38dd032c053")}catch{}})();const E=(...t)=>window.fetch(...t),s=class{constructor(e=new b,a=E){this.pubsub=e,this.fetch=a}saveJWT(e){c.set(s.key,e),this.notify()}notify(){const e=this.getUser();this.pubsub.publish("authenticated",e)}getJWT(){return c.get(s.key)}getUser(){const e=this.getJWT();if(e)try{const a=_(e);if(a.exp&&a.exp>Date.now()/1e3)return{jwt:e,claims:a}}catch{console.warn("Invalid JWT")}return null}authHeaders(){const e=this.getJWT();return e?{Authorization:`Bearer ${e}`}:{}}removeUser(){this.pubsub.publish("authenticated",null),c.remove(s.key)}async getRoles(){return(await this.fetch("/_user/my-roles",{headers:this.authHeaders()})).json()}};let n=s;u(n,"key","abstra:auth:jwt");const p=new n,R=[{path:"/",name:"playerHome",component:()=>r(()=>import("./Home.5fc00b7e.js"),["assets/Home.5fc00b7e.js","assets/api.423dcc38.js","assets/runnerData.d1133baa.js","assets/url.acb8fdc2.js","assets/outputWidgets.c849273f.js","assets/outputWidgets.b5a98445.css","assets/asyncComputed.53ec0023.js","assets/icons.5de06bbc.js","assets/PlayerNavbar.9d84d540.js","assets/PlayerNavbar.d7d1e342.css","assets/index.2acee326.js","assets/Base.f58dc0d7.js","assets/Typography.69f3ca41.js","assets/Link.033fb53b.js","assets/Paragraph.9b9c9580.js","assets/Text.4e6778b2.js","assets/Title.c7ac8182.js","assets/index.a8f8fb7c.js","assets/Card.d04ea65c.js","assets/TabPane.eae28fa1.js","assets/hasIn.a09870a7.js","assets/index.d9979e5f.js","assets/Home.160069a9.css"]),meta:{title:"Abstra - Home",allowUnauthenticated:!0}},{path:"/_player/kanban",name:"playerKanban",component:()=>r(()=>import("./Kanban.33ba9720.js"),["assets/Kanban.33ba9720.js","assets/Navbar.vue_vue_type_script_setup_true_lang.70c1e779.js","assets/outputWidgets.c849273f.js","assets/outputWidgets.b5a98445.css","assets/asyncComputed.53ec0023.js","assets/Text.4e6778b2.js","assets/Base.f58dc0d7.js","assets/Typography.69f3ca41.js","assets/index.2acee326.js","assets/Link.033fb53b.js","assets/Paragraph.9b9c9580.js","assets/Title.c7ac8182.js","assets/index.d8f3b2c5.js","assets/Navbar.928c534f.css","assets/repository.e47999e9.js","assets/ant-design.b086c804.js","assets/index.b316b415.js","assets/Modal.37c66109.js","assets/api.de3fde64.js","assets/schema.d6de01e9.js","assets/index.cf4c23b9.js","assets/icons.5de06bbc.js","assets/index.d9979e5f.js","assets/index.9b701101.js","assets/index.6ff5e404.js","assets/index.3662ecb8.js","assets/index.999205c3.js","assets/CollapsePanel.b005308e.js","assets/Form.5ae0aee9.js","assets/FormItem.8767aead.js","assets/hasIn.a09870a7.js","assets/Timeline.c30585cb.js","assets/index.4b234c0b.js","assets/isNumeric.75337b1e.js","assets/contracts.generated.f4d42013.js","assets/scripts.116ad04f.js","assets/record.7386625d.js","assets/pubsub.4b8cd066.js","assets/workspaces.d3b33248.js","assets/runnerData.d1133baa.js","assets/url.acb8fdc2.js","assets/ExpandOutlined.2c6221fa.js","assets/Card.d04ea65c.js","assets/TabPane.eae28fa1.js","assets/repository.a6dad21c.css","assets/api.423dcc38.js"]),meta:{title:"Abstra - Kanban",requires:"workflow_viewer"}},{path:"/_player/login",name:"playerLogin",component:()=>r(()=>import("./Login.db23d1bf.js"),["assets/Login.db23d1bf.js","assets/api.423dcc38.js","assets/runnerData.d1133baa.js","assets/url.acb8fdc2.js","assets/outputWidgets.c849273f.js","assets/outputWidgets.b5a98445.css","assets/Passwordless.c7dfcc10.js","assets/icons.5de06bbc.js","assets/CircularLoading.a7974fc2.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.7de0ca4a.css","assets/asyncComputed.53ec0023.js","assets/WidgetsFrame.5fe742dc.js","assets/WidgetsFrame.97ae601d.css","assets/pubsub.4b8cd066.js","assets/Login.c698e41c.css"]),meta:{allowUnauthenticated:!0}},{path:"/_player/error/:status",name:"error",component:()=>r(()=>import("./Error.07f54b02.js"),["assets/Error.07f54b02.js","assets/Navbar.vue_vue_type_script_setup_true_lang.70c1e779.js","assets/outputWidgets.c849273f.js","assets/outputWidgets.b5a98445.css","assets/asyncComputed.53ec0023.js","assets/Text.4e6778b2.js","assets/Base.f58dc0d7.js","assets/Typography.69f3ca41.js","assets/index.2acee326.js","assets/Link.033fb53b.js","assets/Paragraph.9b9c9580.js","assets/Title.c7ac8182.js","assets/index.d8f3b2c5.js","assets/Navbar.928c534f.css","assets/api.423dcc38.js","assets/runnerData.d1133baa.js","assets/url.acb8fdc2.js","assets/WidgetsFrame.5fe742dc.js","assets/WidgetsFrame.97ae601d.css","assets/pubsub.4b8cd066.js","assets/Error.afabb19d.css"]),meta:{allowUnauthenticated:!0}},{path:"/:path(.*)*",name:"form",component:()=>r(()=>import("./Form.8ddee494.js"),["assets/Form.8ddee494.js","assets/outputWidgets.c849273f.js","assets/outputWidgets.b5a98445.css","assets/FormRunner.6fc488f1.js","assets/url.acb8fdc2.js","assets/Passwordless.c7dfcc10.js","assets/icons.5de06bbc.js","assets/CircularLoading.a7974fc2.js","assets/CircularLoading.f81b57b4.css","assets/Passwordless.7de0ca4a.css","assets/PlayerNavbar.9d84d540.js","assets/PlayerNavbar.d7d1e342.css","assets/WidgetsFrame.5fe742dc.js","assets/WidgetsFrame.97ae601d.css","assets/Steps.d0eea175.js","assets/Steps.4a8d55e8.css","assets/Card.d04ea65c.js","assets/TabPane.eae28fa1.js","assets/hasIn.a09870a7.js","assets/Typography.69f3ca41.js","assets/FormRunner.21d1e77c.css","assets/asyncComputed.53ec0023.js","assets/uuid.4939677b.js","assets/api.423dcc38.js","assets/runnerData.d1133baa.js","assets/pubsub.4b8cd066.js","assets/Form.c88bad07.css"]),meta:{allowUnauthenticated:!0}}],l=f({history:y("/"),routes:R,scrollBehavior(t){if(t.hash)return{el:t.hash}}});l.beforeEach(async(t,e)=>{g(t,e);const a=p.getUser();if(!a&&(!t.meta.allowUnauthenticated||t.meta.requires)){const{redirect:h,...d}=t.query;await l.push({name:"playerLogin",query:{...d,redirect:h||t.path},params:t.params});return}if(a&&t.meta.requires&&!(await p.getRoles()).includes(t.meta.requires)){await l.push({name:"error",params:{status:"403"}});return}});async function A(){const t=await fetch("/_settings");if(!t.ok)throw new Error(await t.text());const e=await t.json();await o.init(e)}const i=class{constructor(e){this.config=e}static async init(e){i.instance=new i(e)}get showWatermark(){return this.config.show_watermark}get isStagingRelease(){return{}.VITE_ABSTRA_RELEASE==="staging"}get isLocal(){return location.origin.match(/http:\/\/localhost:\d+/)}};let o=i;u(o,"instance",null);export{o as S,l as a,E as l,R as r,A as s,p as u};
//# sourceMappingURL=index.ba6972e5.js.map
