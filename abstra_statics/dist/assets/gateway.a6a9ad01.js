import{E as r,a as i}from"./router.ddb32f08.js";import"./outputWidgets.903ef13f.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="a10d2161-69bd-46be-9af6-d930f1bf7f19",o._sentryDebugIdIdentifier="sentry-dbid-a10d2161-69bd-46be-9af6-d930f1bf7f19")}catch{}})();class n extends Error{constructor(e,t){super(e),this.status=t}static async fromResponse(e){const t=await e.text();return new n(t,e.status)}}class f{static async get(e){const s=await(await fetch(`${r.cloudApi}/console/${e}`,{headers:{...i.headers}})).text();return s?JSON.parse(s):null}static async post(e,t){const s=await fetch(`${r.cloudApi}/console/${e}`,{method:"POST",headers:{"Content-Type":"application/json",...i.headers},body:JSON.stringify(t)});if(!s.ok)throw await n.fromResponse(s);const a=await s.text();return a?JSON.parse(a):null}static async patch(e,t){const s=await fetch(`${r.cloudApi}/console/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json",...i.headers},body:JSON.stringify(t)});if(!s.ok)throw await n.fromResponse(s);const a=await s.text();return a?JSON.parse(a):null}static async delete(e){const t=await fetch(`${r.cloudApi}/console/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json",...i.headers}});if(!t.ok)throw await n.fromResponse(t)}}export{f as C};
//# sourceMappingURL=gateway.a6a9ad01.js.map
