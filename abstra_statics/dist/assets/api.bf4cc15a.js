import{r,w as a}from"./runnerData.e6656cbd.js";import"./outputWidgets.f0391a74.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="b2705652-8187-4d3d-a297-ea3df4cba463",t._sentryDebugIdIdentifier="sentry-dbid-b2705652-8187-4d3d-a297-ea3df4cba463")}catch{}})();async function f(t){const e=await fetch(`/_pages/${t}`);if(e.status==404)return null;if(!e.ok)throw new Error(await e.text());const{form:n}=await e.json();return n?r(n):null}async function u(){const t=await fetch("/_workspace");if(t.status!=200)return a({});const e=await t.json();return a(e)}export{f,u as g};
//# sourceMappingURL=api.bf4cc15a.js.map
