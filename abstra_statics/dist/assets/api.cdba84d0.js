import{r as a,w as r}from"./runnerData.72ef15b6.js";import"./outputWidgets.b9fff993.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="c0e00501-c294-4464-9c22-143bf02a80a7",t._sentryDebugIdIdentifier="sentry-dbid-c0e00501-c294-4464-9c22-143bf02a80a7")}catch{}})();async function c(t){const e=await fetch(`/_pages/${t}`);if(e.status==404)return null;if(!e.ok)throw new Error(await e.text());const{form:n}=await e.json();return n?a(n):null}async function f(){const t=await fetch("/_workspace");if(t.status!=200)return r({});const e=await t.json();return r(e)}export{c as f,f as g};
//# sourceMappingURL=api.cdba84d0.js.map
