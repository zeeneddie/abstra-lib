var g=Object.defineProperty;var b=(r,e,t)=>e in r?g(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var p=(r,e,t)=>(b(r,typeof e!="symbol"?e+"":e,t),t);import{u as f}from"./registerWidgets.5e258592.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="df871056-32a6-40ae-b7b8-bb2dd4ebf995",r._sentryDebugIdIdentifier="sentry-dbid-df871056-32a6-40ae-b7b8-bb2dd4ebf995")}catch{}})();const y=()=>window.location.host.includes(".abstra.io"),v={passwordless:"/api/passwordless","cloud-api":"/api/cloud-api"},m={passwordless:"https://passwordless.abstra.cloud","cloud-api":"https://cloud-api.abstra.cloud"},w=r=>{const e="VITE_"+f.toUpper(f.snakeCase(r)),t={VITE_SENTRY_RELEASE:"4ce8052ec68980fd9745bed6b8663a88521f9bbd",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}[e];return t||(y()?v[r]:m[r])};class a{static get(e){try{const t=localStorage.getItem(e);return t&&JSON.parse(t)}catch{return null}}static set(e,t){localStorage.setItem(e,JSON.stringify(t))}static pop(e){const t=a.get(e);return a.remove(e),t}static remove(e){localStorage.removeItem(e)}}function l(r){this.message=r}l.prototype=new Error,l.prototype.name="InvalidCharacterError";var h=typeof window<"u"&&window.atob&&window.atob.bind(window)||function(r){var e=String(r).replace(/=+$/,"");if(e.length%4==1)throw new l("'atob' failed: The string to be decoded is not correctly encoded.");for(var t,n,o=0,s=0,u="";n=e.charAt(s++);~n&&(t=o%4?64*t+n:n,o++%4)?u+=String.fromCharCode(255&t>>(-2*o&6)):0)n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);return u};function I(r){var e=r.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw"Illegal base64url string!"}try{return function(t){return decodeURIComponent(h(t).replace(/(.)/g,function(n,o){var s=o.charCodeAt(0).toString(16).toUpperCase();return s.length<2&&(s="0"+s),"%"+s}))}(e)}catch{return h(e)}}function d(r){this.message=r}function E(r,e){if(typeof r!="string")throw new d("Invalid token specified");var t=(e=e||{}).header===!0?0:1;try{return JSON.parse(I(r.split(".")[t]))}catch(n){throw new d("Invalid token specified: "+n.message)}}d.prototype=new Error,d.prototype.name="InvalidTokenError";const i=class{async authenticate(e){try{const t=await fetch(`${w("passwordless")}/authenticate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e})});if(!t.ok)throw new Error(await t.text());return null}catch(t){return t.message}}async verify(e,t){const n=await fetch(`${w("passwordless")}/verify`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e,token:t})});if(!n.ok)throw new Error(await n.text());const o=await n.json();return this.saveJWT(o.jwt),this.getUser()}saveJWT(e){a.set(i.key,e)}getJWT(){return a.get(i.key)}getUser(){const e=this.getJWT();if(e)try{const t=E(e);if(t.exp&&t.exp>Date.now()/1e3)return{jwt:e,claims:t}}catch{console.warn("Invalid JWT")}return null}removeUser(){a.remove(i.key)}getUserHeaders(e="User-Authorization"){const t=this.getJWT();return t?{[e]:`Bearer ${t}`}:{}}};let c=i;p(c,"key","hackerforms:auth:jwt");const T=new c;export{T as p,w as t};
//# sourceMappingURL=passwordlessManager.0607f999.js.map
