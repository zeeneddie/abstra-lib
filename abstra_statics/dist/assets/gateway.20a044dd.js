import{E as o,a}from"./authorManager.7c15a400.js";import"./outputWidgets.b3a86e7b.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[t]="bac34f87-fbcf-4f21-8529-fc97bb1e2f8e",n._sentryDebugIdIdentifier="sentry-dbid-bac34f87-fbcf-4f21-8529-fc97bb1e2f8e")}catch{}})();class c extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new c(e,t.status)}}class d{static async get(t){const e=await fetch(`${o.cloudApi}/console/${t}`,{headers:{...a.headers}});e.status===403&&(window.location.href="/login");const s=await e.text();return s?JSON.parse(s):null}static async getBlob(t){return await(await fetch(`${o.cloudApi}/console/${t}`,{headers:{...a.headers}})).blob()}static async post(t,e,s){const i=!!(s!=null&&s["Content-Type"])&&s["Content-Type"]!=="application/json",r=await fetch(`${o.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...a.headers,...s},body:i?e:JSON.stringify(e)});if(!r.ok)throw await c.fromResponse(r);const f=await r.text();return f?JSON.parse(f):null}static async patch(t,e){const s=await fetch(`${o.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...a.headers},body:JSON.stringify(e)});if(!s.ok)throw await c.fromResponse(s);const i=await s.text();return i?JSON.parse(i):null}static async delete(t){const e=await fetch(`${o.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...a.headers}});if(!e.ok)throw await c.fromResponse(e)}}export{d as C};
//# sourceMappingURL=gateway.20a044dd.js.map
