import{r as a,w as r}from"./runnerData.ccdef8f8.js";import"./outputWidgets.12d07fe6.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="604e28a5-8083-4a31-9924-b55e213bccbc",t._sentryDebugIdIdentifier="sentry-dbid-604e28a5-8083-4a31-9924-b55e213bccbc")}catch{}})();async function c(t){const e=await fetch(`/_pages/${t}`);if(e.status==404)return null;if(!e.ok)throw new Error(await e.text());const{form:n}=await e.json();return n?a(n):null}async function u(){const t=await fetch("/_workspace");if(t.status!=200)return r({});const e=await t.json();return r(e)}export{c as f,u as g};
//# sourceMappingURL=api.1acd0887.js.map
