import{r,w as a}from"./runnerData.a3f8e698.js";import"./outputWidgets.415d7ed9.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="a6d09263-e2cb-46da-99a4-2556f45d681c",t._sentryDebugIdIdentifier="sentry-dbid-a6d09263-e2cb-46da-99a4-2556f45d681c")}catch{}})();async function f(t){const e=await fetch(`/_pages/${t}`);if(e.status==404)return null;if(!e.ok)throw new Error(await e.text());const{form:n}=await e.json();return n?r(n):null}async function u(){const t=await fetch("/_workspace");if(t.status!=200)return a({});const e=await t.json();return a(e)}export{f,u as g};
//# sourceMappingURL=api.df836ff8.js.map
