import{r as a,w as r}from"./runnerData.1309ae56.js";import"./outputWidgets.74b0761d.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="cc56abd4-3c5c-4ef5-808b-1481dc9d0a53",t._sentryDebugIdIdentifier="sentry-dbid-cc56abd4-3c5c-4ef5-808b-1481dc9d0a53")}catch{}})();async function c(t){const e=await fetch(`/_pages/${t}`);if(e.status==404)return null;if(!e.ok)throw new Error(await e.text());const{form:n}=await e.json();return n?a(n):null}async function f(){const t=await fetch("/_workspace");if(t.status!=200)return r({});const e=await t.json();return r(e)}export{c as f,f as g};
//# sourceMappingURL=api.4eab114f.js.map
