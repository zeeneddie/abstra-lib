import{r as a,w as r}from"./runnerData.c28e6b00.js";import"./outputWidgets.cb8125c8.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="7c80bd03-c1f8-4d24-9a0e-d9bc1e6f0e16",t._sentryDebugIdIdentifier="sentry-dbid-7c80bd03-c1f8-4d24-9a0e-d9bc1e6f0e16")}catch{}})();async function f(t){const e=await fetch(`/_pages/${t}`);if(e.status==404)return null;if(!e.ok)throw new Error(await e.text());const{form:n}=await e.json();return n?a(n):null}async function c(){const t=await fetch("/_workspace");if(t.status!=200)return r({});const e=await t.json();return r(e)}export{f,c as g};
//# sourceMappingURL=api.94fbb907.js.map
