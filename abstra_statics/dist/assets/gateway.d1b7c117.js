import{t as i,p as n}from"./passwordlessManager.86ad8b48.js";import"./registerWidgets.ad696c68.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="31e3c728-0d30-4179-b417-1f5b9f3e2f73",t._sentryDebugIdIdentifier="sentry-dbid-31e3c728-0d30-4179-b417-1f5b9f3e2f73")}catch{}})();const a=i("cloud-api");class p{static async get(e){const r=await(await fetch(`${a}/console/${e}`,{headers:{...n.getUserHeaders("Author-Authorization")}})).text();return r?JSON.parse(r):null}static async post(e,s){const o=await(await fetch(`${a}/console/${e}`,{method:"POST",headers:{"Content-Type":"application/json",...n.getUserHeaders("Author-Authorization")},body:JSON.stringify(s)})).text();return o?JSON.parse(o):null}static async patch(e,s){const o=await(await fetch(`${a}/console/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json",...n.getUserHeaders("Author-Authorization")},body:JSON.stringify(s)})).text();return o?JSON.parse(o):null}static async delete(e){await fetch(`${a}/console/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json",...n.getUserHeaders("Author-Authorization")}})}}export{p as C};
//# sourceMappingURL=gateway.d1b7c117.js.map