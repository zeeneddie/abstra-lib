import{t as i,p as r}from"./passwordlessManager.63aead33.js";import"./registerWidgets.ec5f13bb.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="1bc135aa-a0a3-4693-9148-3f720573c54b",t._sentryDebugIdIdentifier="sentry-dbid-1bc135aa-a0a3-4693-9148-3f720573c54b")}catch{}})();const n=i("cloud-api");class p{static async get(e){const o=await(await fetch(`${n}/console/${e}`,{headers:{...r.getUserHeaders("Author-Authorization")}})).text();return o?JSON.parse(o):null}static async post(e,s){const a=await(await fetch(`${n}/console/${e}`,{method:"POST",headers:{"Content-Type":"application/json",...r.getUserHeaders("Author-Authorization")},body:JSON.stringify(s)})).text();return a?JSON.parse(a):null}static async patch(e,s){const a=await(await fetch(`${n}/console/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json",...r.getUserHeaders("Author-Authorization")},body:JSON.stringify(s)})).text();return a?JSON.parse(a):null}static async delete(e){await fetch(`${n}/console/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json",...r.getUserHeaders("Author-Authorization")}})}}export{p as C};
//# sourceMappingURL=gateway.ef4c11b5.js.map
