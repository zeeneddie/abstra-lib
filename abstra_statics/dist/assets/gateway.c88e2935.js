import{t as d,p as a}from"./passwordlessManager.00482f2f.js";import"./registerWidgets.e6444af9.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="203b5f68-66e0-4f4d-978c-d8608560d491",o._sentryDebugIdIdentifier="sentry-dbid-203b5f68-66e0-4f4d-978c-d8608560d491")}catch{}})();const i=d("cloud-api");class n extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new n(e,t.status)}}class u{static async get(t){const s=await(await fetch(`${i}/console/${t}`,{headers:{...a.getUserHeaders("Author-Authorization")}})).text();return s?JSON.parse(s):null}static async post(t,e){const s=await fetch(`${i}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...a.getUserHeaders("Author-Authorization")},body:JSON.stringify(e)});if(!s.ok)throw await n.fromResponse(s);const r=await s.text();return r?JSON.parse(r):null}static async patch(t,e){const s=await fetch(`${i}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...a.getUserHeaders("Author-Authorization")},body:JSON.stringify(e)});if(!s.ok)throw await n.fromResponse(s);const r=await s.text();return r?JSON.parse(r):null}static async delete(t){const e=await fetch(`${i}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...a.getUserHeaders("Author-Authorization")}});if(!e.ok)throw await n.fromResponse(e)}}export{u as C};
//# sourceMappingURL=gateway.c88e2935.js.map
