import{r as a,w as r}from"./runnerData.2db5faf2.js";import"./outputWidgets.a9a26b52.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="3c24fb5d-2f54-4139-9b61-0d931c3fec41",t._sentryDebugIdIdentifier="sentry-dbid-3c24fb5d-2f54-4139-9b61-0d931c3fec41")}catch{}})();async function f(t){const e=await fetch(`/_pages/${t}`);if(e.status==404)return null;if(!e.ok)throw new Error(await e.text());const{form:n}=await e.json();return n?a(n):null}async function c(){const t=await fetch("/_workspace");if(t.status!=200)return r({});const e=await t.json();return r(e)}export{f,c as g};
//# sourceMappingURL=api.c635753d.js.map
