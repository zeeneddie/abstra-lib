import{E as a,b as n}from"./router.72d8b140.js";import"./outputWidgets.3a9c8b77.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="e152b7b3-0f1b-4fbb-93fb-42ffdf948a80",o._sentryDebugIdIdentifier="sentry-dbid-e152b7b3-0f1b-4fbb-93fb-42ffdf948a80")}catch{}})();class r extends Error{constructor(e,t){super(e),this.status=t}static async fromResponse(e){const t=await e.text();return new r(t,e.status)}}class l{static async get(e){const s=await(await fetch(`${a.cloudApi}/console/${e}`,{headers:{...n.headers}})).text();return s?JSON.parse(s):null}static async getBlob(e){return await(await fetch(`${a.cloudApi}/console/${e}`,{headers:{...n.headers}})).blob()}static async post(e,t,s=!0){const i=s?{"Content-Type":"application/json"}:null,c=await fetch(`${a.cloudApi}/console/${e}`,{method:"POST",headers:{...i,...n.headers},body:s?JSON.stringify(t):t});if(!c.ok)throw await r.fromResponse(c);const d=await c.text();return d?JSON.parse(d):null}static async patch(e,t){const s=await fetch(`${a.cloudApi}/console/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json",...n.headers},body:JSON.stringify(t)});if(!s.ok)throw await r.fromResponse(s);const i=await s.text();return i?JSON.parse(i):null}static async delete(e){const t=await fetch(`${a.cloudApi}/console/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json",...n.headers}});if(!t.ok)throw await r.fromResponse(t)}}export{l as C};
//# sourceMappingURL=gateway.ba63e948.js.map
