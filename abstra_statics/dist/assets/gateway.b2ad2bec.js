import{E as o,b as a}from"./router.f4382047.js";import"./outputWidgets.ee623de8.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[t]="9579303e-b962-4b58-86f5-520028224d63",n._sentryDebugIdIdentifier="sentry-dbid-9579303e-b962-4b58-86f5-520028224d63")}catch{}})();class r extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new r(e,t.status)}}class f{static async get(t){const s=await(await fetch(`${o.cloudApi}/console/${t}`,{headers:{...a.headers}})).text();return s?JSON.parse(s):null}static async getBlob(t){return await(await fetch(`${o.cloudApi}/console/${t}`,{headers:{...a.headers}})).blob()}static async post(t,e,s){const i=!!(s!=null&&s["Content-Type"])&&s["Content-Type"]!=="application/json",c=await fetch(`${o.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...a.headers,...s},body:i?e:JSON.stringify(e)});if(!c.ok)throw await r.fromResponse(c);const p=await c.text();return p?JSON.parse(p):null}static async patch(t,e){const s=await fetch(`${o.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...a.headers},body:JSON.stringify(e)});if(!s.ok)throw await r.fromResponse(s);const i=await s.text();return i?JSON.parse(i):null}static async delete(t){const e=await fetch(`${o.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...a.headers}});if(!e.ok)throw await r.fromResponse(e)}}export{f as C};
//# sourceMappingURL=gateway.b2ad2bec.js.map
