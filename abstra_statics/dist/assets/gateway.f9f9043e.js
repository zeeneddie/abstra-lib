import{t as i,p as n}from"./passwordlessManager.eaa6b5ad.js";import"./registerWidgets.35e57f84.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="345e9944-324c-44b8-8c2f-c908b1eef446",t._sentryDebugIdIdentifier="sentry-dbid-345e9944-324c-44b8-8c2f-c908b1eef446")}catch{}})();const a=i("cloud-api");class p{static async get(e){const r=await(await fetch(`${a}/console/${e}`,{headers:{...n.getUserHeaders("Author-Authorization")}})).text();return r?JSON.parse(r):null}static async post(e,s){const o=await(await fetch(`${a}/console/${e}`,{method:"POST",headers:{"Content-Type":"application/json",...n.getUserHeaders("Author-Authorization")},body:JSON.stringify(s)})).text();return o?JSON.parse(o):null}static async patch(e,s){const o=await(await fetch(`${a}/console/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json",...n.getUserHeaders("Author-Authorization")},body:JSON.stringify(s)})).text();return o?JSON.parse(o):null}static async delete(e){await fetch(`${a}/console/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json",...n.getUserHeaders("Author-Authorization")}})}}export{p as C};
//# sourceMappingURL=gateway.f9f9043e.js.map
