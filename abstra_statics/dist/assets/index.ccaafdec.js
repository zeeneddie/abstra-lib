var y=Object.defineProperty;var g=(s,t,e)=>t in s?y(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var n=(s,t,e)=>(g(s,typeof t!="symbol"?t+"":t,e),e);import{g as l,h as w,_ as p,S as h,q as b}from"./outputWidgets.3acae187.js";import{P as v}from"./pubsub.bc590f31.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="8cf92eb5-1de0-4121-be65-10d0a94baf71",s._sentryDebugIdIdentifier="sentry-dbid-8cf92eb5-1de0-4121-be65-10d0a94baf71")}catch{}})();const m=[{path:"/:path(.*)*",name:"player",component:()=>p(()=>import("./Player.fccfae2f.js"),["assets/Player.fccfae2f.js","assets/FormRunner.41509a0b.js","assets/outputWidgets.3acae187.js","assets/outputWidgets.c8d85cd0.css","assets/url.ba80c662.js","assets/icons.238cb834.js","assets/CircularLoading.d4dcde9f.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.be793c82.js","assets/PlayerNavbar.d1d85d81.css","assets/ActionButton.vue_vue_type_script_setup_true_lang.384dcbf9.js","assets/ActionButton.998aa76d.css","assets/WidgetsFrame.800144ec.js","assets/WidgetsFrame.97ae601d.css","assets/FormRunner.353c1d6f.css","assets/uuid.92b68c2e.js","assets/asyncComputed.4acb40f3.js","assets/pubsub.bc590f31.js","assets/Player.8da60c29.css"])}],_=l({history:w("/"),routes:m,scrollBehavior(s){if(s.hash)return{el:s.hash}}}),c=class{constructor(t,e){this.providerConfig=t,this.userManager=e}static async init(t,e){c.instance=new c(t,e)}get provider(){return this.providerConfig.provider}async authenticate(t){try{const e=await fetch(`${this.providerConfig.authority}/authenticate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t})});if(!e.ok)throw new Error(await e.text());return null}catch(e){return e.message}}async verify(t,e){const f=await fetch(`${this.providerConfig.authority}/verify`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t,token:e})});if(!f.ok)return null;const d=await f.json();return this.userManager.saveJWT(d.jwt),this.userManager.getUser()}};let a=c;n(a,"instance",null);const r=class{constructor(t=new v){this.pubsub=t}saveJWT(t){h.set(r.key,t),this.notify()}notify(){const t=this.getUser();this.pubsub.publish("authenticated",t)}getJWT(){return h.get(r.key)}getUser(){const t=this.getJWT();if(t)try{const e=b(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeUser(){this.pubsub.publish("authenticated",null),h.remove(r.key)}};let i=r;n(i,"key","abstra:auth:jwt");const k=new i;async function S(){const s=await fetch("/_auth/config");if(!s.ok)throw new Error(await s.text());const t=await s.json();await a.init(t,k)}async function j(){const s=await fetch("/_settings");if(!s.ok)throw new Error(await s.text());const t=await s.json();await o.init(t)}const u=class{constructor(t){this.config=t}static async init(t){u.instance=new u(t)}get showWatermark(){return this.config.show_watermark}get isStagingRelease(){return{}.VITE_ABSTRA_RELEASE==="staging"}};let o=u;n(o,"instance",null);export{a as A,o as S,_ as a,k as b,m as r,j as s,S as u};
//# sourceMappingURL=index.ccaafdec.js.map
