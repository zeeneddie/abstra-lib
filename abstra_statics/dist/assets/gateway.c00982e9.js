import{t as i,p as a}from"./passwordlessManager.8b0c672e.js";import"./registerWidgets.cecc7add.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="60960c58-4583-42a0-8c49-95b3f3c2b9ad",t._sentryDebugIdIdentifier="sentry-dbid-60960c58-4583-42a0-8c49-95b3f3c2b9ad")}catch{}})();const n=i("cloud-api");class p{static async get(e){const r=await(await fetch(`${n}/console/${e}`,{headers:{...a.getUserHeaders("Author-Authorization")}})).text();return r?JSON.parse(r):null}static async post(e,s){const o=await(await fetch(`${n}/console/${e}`,{method:"POST",headers:{"Content-Type":"application/json",...a.getUserHeaders("Author-Authorization")},body:JSON.stringify(s)})).text();return o?JSON.parse(o):null}static async patch(e,s){const o=await(await fetch(`${n}/console/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json",...a.getUserHeaders("Author-Authorization")},body:JSON.stringify(s)})).text();return o?JSON.parse(o):null}static async delete(e){await fetch(`${n}/console/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json",...a.getUserHeaders("Author-Authorization")}})}}export{p as C};
//# sourceMappingURL=gateway.c00982e9.js.map
