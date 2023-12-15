var p=Object.defineProperty;var l=(a,e,t)=>e in a?p(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var c=(a,e,t)=>(l(a,typeof e!="symbol"?e+"":e,t),t);import{cQ as d,S as i,q as f}from"./outputWidgets.90a37dfb.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="d6241e36-9325-47e8-9d72-3789ae1a40c0",a._sentryDebugIdIdentifier="sentry-dbid-d6241e36-9325-47e8-9d72-3789ae1a40c0")}catch{}})();const y=()=>window.location.host.includes(".abstra.io"),w={authn:"/api/authn","cloud-api":"/api/cloud-api"},m={authn:"https://authn.abstra.cloud","cloud-api":"https://cloud-api.abstra.cloud"},u=a=>{const e="VITE_"+d.toUpper(d.snakeCase(a)),t={VITE_SENTRY_RELEASE:"173b0a16a633c76692ca1ce992b0a3e359880a2f",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return t||(y()?w[a]:m[a])},h={authn:u("authn"),cloudApi:u("cloud-api")};class b{static async trackSession(e){const t=Object.fromEntries(document.cookie.split("; ").map(o=>o.split(/=(.*)/s).map(decodeURIComponent))),s=new URLSearchParams(window.location.search).get("session")||t.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search)),previousSessionId:s,email:e})})}static async trackPageView(e){const t=Object.fromEntries(document.cookie.split("; ").map(o=>o.split(/=(.*)/s).map(decodeURIComponent))),s=new URLSearchParams(window.location.search).get("session")||t.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/hackerforms/browser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({previousSessionId:s,author_email:e,type:"PageView",payload:{referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search))}})})}}const n=class{async authenticate(e){try{const t=await fetch(`${h.authn}/authenticate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e})});if(!t.ok)throw new Error(await t.text());return null}catch(t){return t.message}}async verify(e,t){const s=await fetch(`${h.authn}/verify`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e,token:t})});if(!s.ok)throw new Error(await s.text());const o=await s.json();return this.saveJWT(o.jwt),b.trackSession(e),this.getAuthor()}saveJWT(e){i.set(n.key,e)}getJWT(){return i.get(n.key)}getAuthor(){const e=this.getJWT();if(e)try{const t=f(e);if(t.exp&&t.exp>Date.now()/1e3)return{jwt:e,claims:t}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){i.remove(n.key)}get headers(){const e=this.getJWT();return e?{"Author-Authorization":`Bearer ${e}`}:{}}};let r=n;c(r,"key","abstracloud:auth:jwt");const E=new r;export{h as E,b as T,E as a};
//# sourceMappingURL=authorManager.f2a35532.js.map
