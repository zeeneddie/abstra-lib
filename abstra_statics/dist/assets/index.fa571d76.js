var g=Object.defineProperty;var l=(s,t,e)=>t in s?g(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var n=(s,t,e)=>(l(s,typeof t!="symbol"?t+"":t,e),e);import{g as p,h as y,_ as w,S as h,q as b}from"./outputWidgets.308fc26e.js";import{P as v}from"./pubsub.d9c6c339.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="77a9386b-86ed-4e47-a3fd-b152ca114eb6",s._sentryDebugIdIdentifier="sentry-dbid-77a9386b-86ed-4e47-a3fd-b152ca114eb6")}catch{}})();const m=[{path:"/:path(.*)*",name:"player",component:()=>w(()=>import("./Player.1402f2cf.js"),["assets/Player.1402f2cf.js","assets/FormRunner.052d0315.js","assets/outputWidgets.308fc26e.js","assets/outputWidgets.3c848cd5.css","assets/url.222c9a1f.js","assets/icons.99d10079.js","assets/CircularLoading.f26e0578.js","assets/CircularLoading.f81b57b4.css","assets/PlayerNavbar.c5b3c477.js","assets/PlayerNavbar.d1d85d81.css","assets/ActionButton.8e405a04.js","assets/ActionButton.f74e60ec.css","assets/WidgetsFrame.e0d3c541.js","assets/WidgetsFrame.97ae601d.css","assets/FormRunner.6a6fbb7a.css","assets/uuid.0659e4fa.js","assets/asyncComputed.7ba10fe2.js","assets/pubsub.d9c6c339.js","assets/Player.6fed9080.css"])}],T=p({history:y("/"),routes:m,scrollBehavior(s){if(s.hash)return{el:s.hash}}}),c=class{constructor(t,e){this.providerConfig=t,this.userManager=e}static async init(t,e){c.instance=new c(t,e)}get provider(){return this.providerConfig.provider}async authenticate(t){try{const e=await fetch(`${this.providerConfig.authority}/authenticate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t,clientId:this.providerConfig.clientId,projectId:this.providerConfig.projectId})});if(!e.ok)throw new Error(await e.text());return null}catch(e){return e.message}}async verify(t,e){const f=await fetch(`${this.providerConfig.authority}/verify`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t,token:e})});if(!f.ok)return null;const d=await f.json();return this.userManager.saveJWT(d.jwt),this.userManager.getUser()}};let i=c;n(i,"instance",null);const r=class{constructor(t=new v){this.pubsub=t}saveJWT(t){h.set(r.key,t),this.notify()}notify(){const t=this.getUser();this.pubsub.publish("authenticated",t)}getJWT(){return h.get(r.key)}getUser(){const t=this.getJWT();if(t)try{const e=b(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeUser(){this.pubsub.publish("authenticated",null),h.remove(r.key)}};let a=r;n(a,"key","abstra:auth:jwt");const I=new a;async function _(){const s=await fetch("/_auth/config");if(!s.ok)throw new Error(await s.text());const t=await s.json();await i.init(t,I)}async function S(){const s=await fetch("/_settings");if(!s.ok)throw new Error(await s.text());const t=await s.json();await o.init(t)}const u=class{constructor(t){this.config=t}static async init(t){u.instance=new u(t)}get showWatermark(){return this.config.show_watermark}get isStagingRelease(){return{}.VITE_ABSTRA_RELEASE==="staging"}};let o=u;n(o,"instance",null);export{i as A,o as S,T as a,I as b,m as r,S as s,_ as u};
//# sourceMappingURL=index.fa571d76.js.map