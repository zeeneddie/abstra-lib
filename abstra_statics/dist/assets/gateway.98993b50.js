import{E as r,a as i}from"./console.3edc9cde.js";import"./outputWidgets.1f391ab3.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="b6829988-dbb5-46d2-9e45-d4d9a3739a83",o._sentryDebugIdIdentifier="sentry-dbid-b6829988-dbb5-46d2-9e45-d4d9a3739a83")}catch{}})();class n extends Error{constructor(e,t){super(e),this.status=t}static async fromResponse(e){const t=await e.text();return new n(t,e.status)}}class p{static async get(e){const s=await(await fetch(`${r.cloudApi}/console/${e}`,{headers:{...i.headers}})).text();return s?JSON.parse(s):null}static async post(e,t){const s=await fetch(`${r.cloudApi}/console/${e}`,{method:"POST",headers:{"Content-Type":"application/json",...i.headers},body:JSON.stringify(t)});if(!s.ok)throw await n.fromResponse(s);const a=await s.text();return a?JSON.parse(a):null}static async patch(e,t){const s=await fetch(`${r.cloudApi}/console/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json",...i.headers},body:JSON.stringify(t)});if(!s.ok)throw await n.fromResponse(s);const a=await s.text();return a?JSON.parse(a):null}static async delete(e){const t=await fetch(`${r.cloudApi}/console/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json",...i.headers}});if(!t.ok)throw await n.fromResponse(t)}}export{p as C};
//# sourceMappingURL=gateway.98993b50.js.map
