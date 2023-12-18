var f=Object.defineProperty;var p=(a,t,e)=>t in a?f(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var c=(a,t,e)=>(p(a,typeof t!="symbol"?t+"":t,e),e);import{cQ as d,S as i,q as l}from"./outputWidgets.4dca5506.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="bf36f0fb-6205-4d8b-9829-8fb3f040da2f",a._sentryDebugIdIdentifier="sentry-dbid-bf36f0fb-6205-4d8b-9829-8fb3f040da2f")}catch{}})();const y=()=>window.location.host.includes(".abstra.io"),w={authn:"/api/authn","cloud-api":"/api/cloud-api"},b={authn:"https://authn.abstra.cloud","cloud-api":"https://cloud-api.abstra.cloud"},u=a=>{const t="VITE_"+d.toUpper(d.snakeCase(a)),e={VITE_SENTRY_RELEASE:"e1ae931671a45b2f415ea5164bc41e43c2145b1c",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(y()?w[a]:b[a])},h={authn:u("authn"),cloudApi:u("cloud-api")};class m{static async trackSession(t){const e=Object.fromEntries(document.cookie.split("; ").map(o=>o.split(/=(.*)/s).map(decodeURIComponent))),s=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search)),previousSessionId:s,email:t})})}static async trackPageView(t){const e=Object.fromEntries(document.cookie.split("; ").map(o=>o.split(/=(.*)/s).map(decodeURIComponent))),s=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/hackerforms/browser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({previousSessionId:s,author_email:t,type:"PageView",payload:{referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search))}})})}}const n=class{async authenticate(t){try{const e=await fetch(`${h.authn}/authenticate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t})});if(!e.ok)throw new Error(await e.text());return null}catch(e){return e.message}}async verify(t,e){const s=await fetch(`${h.authn}/verify`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t,token:e})});if(!s.ok)throw new Error(await s.text());const o=await s.json();return this.saveJWT(o.jwt),m.trackSession(t),this.getAuthor()}saveJWT(t){i.set(n.key,t)}getJWT(){return i.get(n.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=l(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){i.remove(n.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let r=n;c(r,"key","abstracloud:auth:jwt");const E=new r;export{h as E,m as T,E as a};
//# sourceMappingURL=authorManager.a800075c.js.map