import{D as c,F as t}from"./registerWidgets.ff0e603c.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="348c0c91-269a-46f3-8736-a1dad715834a",r._sentryDebugIdIdentifier="sentry-dbid-348c0c91-269a-46f3-8736-a1dad715834a")}catch{}})();const i=r=>{const e=c({loading:!0,result:null,error:null}),n=l=>(e.value={loading:!1,result:l,error:null},l),a=l=>{e.value={loading:!1,result:null,error:l}},o=()=>{e.value={loading:!0,result:null,error:null},r().then(n).catch(a)};o();const s=t(()=>e.value.loading),u=t(()=>e.value.result),d=t(()=>e.value.error);return{loading:s,result:u,error:d,refetch:o}};export{i as a};
//# sourceMappingURL=asyncComputed.47db4727.js.map