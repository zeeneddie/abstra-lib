import{r as a,w as r}from"./runnerData.7760bba6.js";import"./outputWidgets.cb403911.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="6a919c04-13d1-4291-9abc-71bcee7c9100",t._sentryDebugIdIdentifier="sentry-dbid-6a919c04-13d1-4291-9abc-71bcee7c9100")}catch{}})();async function c(t){const e=await fetch(`/_pages/${t}`);if(e.status==404)return null;if(!e.ok)throw new Error(await e.text());const{form:n}=await e.json();return n?a(n):null}async function u(){const t=await fetch("/_workspace");if(t.status!=200)return r({});const e=await t.json();return r(e)}export{c as f,u as g};
//# sourceMappingURL=api.a7dd0e77.js.map
