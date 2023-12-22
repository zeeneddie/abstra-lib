var p=Object.defineProperty;var l=(a,t,e)=>t in a?p(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var i=(a,t,e)=>(l(a,typeof t!="symbol"?t+"":t,e),e);import{cQ as d,S as c,q as f}from"./outputWidgets.c7c3593b.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="ac5e09c3-3574-43c4-9c5b-3cc21cfc258b",a._sentryDebugIdIdentifier="sentry-dbid-ac5e09c3-3574-43c4-9c5b-3cc21cfc258b")}catch{}})();const y=()=>window.location.host.includes(".abstra.io"),w={authn:"/api/authn","cloud-api":"/api/cloud-api"},m={authn:"https://authn.abstra.cloud","cloud-api":"https://cloud-api.abstra.cloud"},u=a=>{const t="VITE_"+d.toUpper(d.snakeCase(a)),e={VITE_SENTRY_RELEASE:"1162d928ec4434c8271a94a5d6851600d128aa50",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[t];return e||(y()?w[a]:m[a])},h={authn:u("authn"),cloudApi:u("cloud-api")};class b{static async trackSession(t){const e=Object.fromEntries(document.cookie.split("; ").map(o=>o.split(/=(.*)/s).map(decodeURIComponent))),s=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search)),previousSessionId:s,email:t})})}static async trackPageView(t){const e=Object.fromEntries(document.cookie.split("; ").map(o=>o.split(/=(.*)/s).map(decodeURIComponent))),s=new URLSearchParams(window.location.search).get("session")||e.abstra_session;await fetch("https://usage-api.abstra.cloud/api/rest/hackerforms/browser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({previousSessionId:s,author_email:t,type:"PageView",payload:{referrer:document.referrer,href:location.href,queryParams:Object.fromEntries(new URLSearchParams(location.search))}})})}}const n=class{async authenticate(t){try{const e=await fetch(`${h.authn}/authenticate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t})});if(!e.ok)throw new Error(await e.text());return null}catch(e){return e.message}}async verify(t,e){const s=await fetch(`${h.authn}/verify`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t,token:e})});if(!s.ok)throw new Error(await s.text());const o=await s.json();return this.saveJWT(o.jwt),b.trackSession(t),this.getAuthor()}saveJWT(t){c.set(n.key,t)}getJWT(){return c.get(n.key)}getAuthor(){const t=this.getJWT();if(t)try{const e=f(t);if(e.exp&&e.exp>Date.now()/1e3)return{jwt:t,claims:e}}catch{console.warn("Invalid JWT")}return null}removeAuthor(){c.remove(n.key)}get headers(){const t=this.getJWT();return t?{"Author-Authorization":`Bearer ${t}`}:{}}};let r=n;i(r,"key","abstracloud:auth:jwt");const E=new r;export{h as E,b as T,E as a};
//# sourceMappingURL=authorManager.33208873.js.map
