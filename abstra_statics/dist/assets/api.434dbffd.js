import{r as n,w as a}from"./runnerData.524c4a4f.js";import"./outputWidgets.af28e799.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="c4d407e8-10e8-4cb7-91b7-3da37c7b8fa0",t._sentryDebugIdIdentifier="sentry-dbid-c4d407e8-10e8-4cb7-91b7-3da37c7b8fa0")}catch{}})();async function c(t){const e=await fetch(`/_pages/${t}`);if(e.status==404)return null;if(!e.ok)throw new Error(await e.text());const{form:r}=await e.json();return{form:r&&n(r)}}async function f(){const t=await fetch("/_workspace");if(t.status!=200)return a({});const e=await t.json();return a(e)}export{c as a,f as g};
//# sourceMappingURL=api.434dbffd.js.map
