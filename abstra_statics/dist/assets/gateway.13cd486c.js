import{t as i,p as r}from"./passwordlessManager.e49dd838.js";import"./registerWidgets.cd0230b6.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="6ccbdabe-03be-4171-9831-e744ba80d73a",t._sentryDebugIdIdentifier="sentry-dbid-6ccbdabe-03be-4171-9831-e744ba80d73a")}catch{}})();const n=i("cloud-api");class p{static async get(e){const a=await(await fetch(`${n}/console/${e}`,{headers:{...r.getUserHeaders("Author-Authorization")}})).text();return a?JSON.parse(a):null}static async post(e,s){const o=await(await fetch(`${n}/console/${e}`,{method:"POST",headers:{"Content-Type":"application/json",...r.getUserHeaders("Author-Authorization")},body:JSON.stringify(s)})).text();return o?JSON.parse(o):null}static async patch(e,s){const o=await(await fetch(`${n}/console/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json",...r.getUserHeaders("Author-Authorization")},body:JSON.stringify(s)})).text();return o?JSON.parse(o):null}static async delete(e){await fetch(`${n}/console/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json",...r.getUserHeaders("Author-Authorization")}})}}export{p as C};
//# sourceMappingURL=gateway.13cd486c.js.map