import{r as a,w as r}from"./runnerData.4f481531.js";import"./outputWidgets.36438843.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="cfae12f5-e6b4-4527-911c-256cc8b5943d",t._sentryDebugIdIdentifier="sentry-dbid-cfae12f5-e6b4-4527-911c-256cc8b5943d")}catch{}})();async function c(t){const e=await fetch(`/_pages/${t}`);if(e.status==404)return null;if(!e.ok)throw new Error(await e.text());const{form:n}=await e.json();return n?a(n):null}async function f(){const t=await fetch("/_workspace");if(t.status!=200)return r({});const e=await t.json();return r(e)}export{c as f,f as g};
//# sourceMappingURL=api.835ba87f.js.map