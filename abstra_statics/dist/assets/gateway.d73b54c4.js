import{E as o,a}from"./router.330b5ee2.js";import"./outputWidgets.3acae187.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[t]="1a4ae562-9dfd-4ff7-b9ef-6fb4c3d31b57",n._sentryDebugIdIdentifier="sentry-dbid-1a4ae562-9dfd-4ff7-b9ef-6fb4c3d31b57")}catch{}})();class r extends Error{constructor(t,e){super(t),this.status=e}static async fromResponse(t){const e=await t.text();return new r(e,t.status)}}class l{static async get(t){const s=await(await fetch(`${o.cloudApi}/console/${t}`,{headers:{...a.headers}})).text();return s?JSON.parse(s):null}static async getBlob(t){return await(await fetch(`${o.cloudApi}/console/${t}`,{headers:{...a.headers}})).blob()}static async post(t,e,s){const c=!!(s!=null&&s["Content-Type"])&&s["Content-Type"]!=="application/json",i=await fetch(`${o.cloudApi}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...a.headers,...s},body:c?e:JSON.stringify(e)});if(!i.ok)throw await r.fromResponse(i);const p=await i.text();return p?JSON.parse(p):null}static async patch(t,e){const s=await fetch(`${o.cloudApi}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...a.headers},body:JSON.stringify(e)});if(!s.ok)throw await r.fromResponse(s);const c=await s.text();return c?JSON.parse(c):null}static async delete(t){const e=await fetch(`${o.cloudApi}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...a.headers}});if(!e.ok)throw await r.fromResponse(e)}}export{l as C};
//# sourceMappingURL=gateway.d73b54c4.js.map