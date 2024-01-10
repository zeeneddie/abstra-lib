var h=Object.defineProperty;var l=(a,t,e)=>t in a?h(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var i=(a,t,e)=>(l(a,typeof t!="symbol"?t+"":t,e),e);import{cQ as d,S as c,q as f}from"./outputWidgets.f2ae36a0.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="bd7630b1-41e4-4284-af19-8104b5c1fe78",a._sentryDebugIdIdentifier="sentry-dbid-bd7630b1-41e4-4284-af19-8104b5c1fe78")}catch{}})();const y=()=>window.location.host.includes(".abstra.io"),w={authn:"/api/authn","cloud-api":"/api/cloud-api"},b={authn:"https://authn.abstra.cloud","cloud-api":"https://cloud-api.abstra.cloud"},u=a=>{const t="VITE_"+d.toUpper(d.snakeCase(a)),e={VITE_SENTRY_RELEASE:"16085d2780d362a512e60857ef94d74d52b5a62f",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(y()?w[a]:b[a])},p={authn:u("authn"),cloudApi:u("cloud-api")};class m{static async trackSession(t){const e=Object.fromEntries(document.cookie.split("; ").map(r=>r.split(/=(.*)/s).map(decodeURIComponent))),s=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search)),previousSessionId:s,email:t})})}static async trackPageView(t){const e=Object.fromEntries(document.cookie.split("; ").map(r=>r.split(/=(.*)/s).map(decodeURIComponent))),s=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/hackerforms/browser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({previousSessionId:s,author_email:t,type:"PageView",payload:{referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search))}})})}}const o=class{async authenticate(t){try{const e=await fetch(`${p.authn}/authenticate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t,clientId:o.clientId,projectId:o.projectId})});if(!e.ok)throw new Error(await e.text());return null}catch(e){return e.message}}async verify(t,e){const s=await fetch(`${p.authn}/verify`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t,token:e})});if(!s.ok)throw new Error(await s.text());const r=await s.json();return this.saveJWT(r.jwt),m.trackSession(t),this.getAuthor()}saveJWT(t){c.set(o.key,t)}getJWT(){return c.get(o.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=f(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){c.remove(o.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let n=o;i(n,"key","abstracloud:auth:jwt"),i(n,"clientId","abstra:console"),i(n,"projectId","abstra:console");const E=new n;export{p as E,m as T,E as a};
//# sourceMappingURL=authorManager.39a8ddb8.js.map