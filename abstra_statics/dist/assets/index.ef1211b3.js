var d=Object.defineProperty;var y=(s,t,e)=>t in s?d(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var n=(s,t,e)=>(y(s,typeof t!="symbol"?t+"":t,e),e);import{g as l,h as w,_ as g,S as h,q as p}from"./outputWidgets.9d44d9f3.js";import{P as v}from"./pubsub.36fbfdaf.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="bbbba7b8-f5ce-4913-b8b8-4e18d6e4b4b4",s._sentryDebugIdIdentifier="sentry-dbid-bbbba7b8-f5ce-4913-b8b8-4e18d6e4b4b4")}catch{}})();const m=[{path:"/:path(.*)*",name:"player",component:()=>g(()=>import("./Player.b21b10eb.js"),["assets/Player.b21b10eb.js","assets/executeJs.d848b39e.js","assets/runnerData.6febcd00.js","assets/outputWidgets.9d44d9f3.js","assets/outputWidgets.e8fba759.css","assets/url.2bddec37.js","assets/icons.6774e95a.js","assets/CircularLoading.24757374.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.39e14c47.js","assets/PlayerNavbar.76a7eb2f.css","assets/Steps.df014620.js","assets/Steps.998aa76d.css","assets/executeJs.6525f608.css","assets/uuid.eb5852c8.js","assets/FormRunner.4008b9c4.js","assets/WidgetsFrame.b9249d7c.js","assets/WidgetsFrame.0816a5f5.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.08f4f90e.js","assets/FormRunner.0e67fa04.css","assets/index.bfd34692.js","assets/geometryUtils.97125ae9.js","assets/pubsub.36fbfdaf.js","assets/index.b0953bcd.css","assets/asyncComputed.99132b68.js","assets/Player.77337a17.css"])}],_=l({history:w("/"),routes:m,scrollBehavior(s){if(s.hash)return{el:s.hash}}}),c=class{constructor(t,e){this.providerConfig=t,this.userManager=e}static async init(t,e){c.instance=new c(t,e)}get provider(){return this.providerConfig.provider}async authenticate(t){try{const e=await fetch(`${this.providerConfig.authority}/authenticate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t})});if(!e.ok)throw new Error(await e.text());return null}catch(e){return e.message}}async verify(t,e){const f=await fetch(`${this.providerConfig.authority}/verify`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t,token:e})});if(!f.ok)return null;const b=await f.json();return this.userManager.saveJWT(b.jwt),this.userManager.getUser()}};let a=c;n(a,"instance",null);const r=class{constructor(t=new v){this.pubsub=t}saveJWT(t){h.set(r.key,t),this.notify()}notify(){const t=this.getUser();this.pubsub.publish("authenticated",t)}getJWT(){return h.get(r.key)}getUser(){const t=this.getJWT();if(t)try{const e=p(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeUser(){this.pubsub.publish("authenticated",null),h.remove(r.key)}};let i=r;n(i,"key","abstra:auth:jwt");const k=new i;async function j(){const s=await fetch("/_auth/config");if(!s.ok)throw new Error(await s.text());const t=await s.json();await a.init(t,k)}async function S(){const s=await fetch("/_settings");if(!s.ok)throw new Error(await s.text());const t=await s.json();await o.init(t)}const u=class{constructor(t){this.config=t}static async init(t){u.instance=new u(t)}get showWatermark(){return this.config.show_watermark}get deployEnabled(){return{}.VITE_ABSTRA_RELEASE!=="staging"}};let o=u;n(o,"instance",null);export{a as A,o as S,_ as a,k as b,m as r,S as s,j as u};
//# sourceMappingURL=index.ef1211b3.js.map