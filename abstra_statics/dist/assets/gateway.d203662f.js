import{t as c,p as a}from"./passwordlessManager.59ddd75d.js";import"./registerWidgets.3527ced4.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="9c2370db-81c7-4d3f-9302-f37b932831eb",o._sentryDebugIdIdentifier="sentry-dbid-9c2370db-81c7-4d3f-9302-f37b932831eb")}catch{}})();const i=c("cloud-api");class n extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new n(e,t.status)}}class u{static async get(t){const s=await(await fetch(`${i}/console/${t}`,{headers:{...a.getUserHeaders("Author-Authorization")}})).text();return s?JSON.parse(s):null}static async post(t,e){const s=await fetch(`${i}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...a.getUserHeaders("Author-Authorization")},body:JSON.stringify(e)});if(!s.ok)throw await n.fromResponse(s);const r=await s.text();return r?JSON.parse(r):null}static async patch(t,e){const s=await fetch(`${i}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...a.getUserHeaders("Author-Authorization")},body:JSON.stringify(e)});if(!s.ok)throw await n.fromResponse(s);const r=await s.text();return r?JSON.parse(r):null}static async delete(t){const e=await fetch(`${i}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...a.getUserHeaders("Author-Authorization")}});if(!e.ok)throw await n.fromResponse(e)}}export{u as C};
//# sourceMappingURL=gateway.d203662f.js.map
