import{u as n}from"./index.5682e922.js";import"./outputWidgets.1c4947c7.js";import{r as s,w as a}from"./runnerData.79bc4400.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="a14a2b57-3117-4839-9e81-c94e84dbbd7e",e._sentryDebugIdIdentifier="sentry-dbid-a14a2b57-3117-4839-9e81-c94e84dbbd7e")}catch{}})();async function i(e){const t=await fetch(`/_pages/${e}`,{headers:n.authHeaders()});if(t.status==404)return null;if(!t.ok)throw new Error(await t.text());const{form:r}=await t.json();return r?s(r):null}async function d(){const e=await fetch("/_workspace");if(e.status!=200)return a({});const t=await e.json();return a(t)}export{i as f,d as g};
//# sourceMappingURL=api.1075db62.js.map
