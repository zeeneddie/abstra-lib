import{E as r,a as c}from"./console.3fb52eaf.js";import"./outputWidgets.75a5b0b9.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="1bf73529-4a2c-4dae-aa9e-cadccfbf1605",a._sentryDebugIdIdentifier="sentry-dbid-1bf73529-4a2c-4dae-aa9e-cadccfbf1605")}catch{}})();class n extends Error{constructor(e,t){super(e),this.status=t}static async fromResponse(e){const t=await e.text();return new n(t,e.status)}}class f{static async get(e){const s=await(await fetch(`${r.cloudApi}/console/${e}`,{headers:{...c.headers}})).text();return s?JSON.parse(s):null}static async post(e,t){const s=await fetch(`${r.cloudApi}/console/${e}`,{method:"POST",headers:{"Content-Type":"application/json",...c.headers},body:JSON.stringify(t)});if(!s.ok)throw await n.fromResponse(s);const o=await s.text();return o?JSON.parse(o):null}static async patch(e,t){const s=await fetch(`${r.cloudApi}/console/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json",...c.headers},body:JSON.stringify(t)});if(!s.ok)throw await n.fromResponse(s);const o=await s.text();return o?JSON.parse(o):null}static async delete(e){const t=await fetch(`${r.cloudApi}/console/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json",...c.headers}});if(!t.ok)throw await n.fromResponse(t)}}export{f as C};
//# sourceMappingURL=gateway.99e43695.js.map