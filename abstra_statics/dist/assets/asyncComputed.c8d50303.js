import{R as f,K as t}from"./registerWidgets.358232d6.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="92f58b03-482f-4f8f-ac81-07a2ed1bb8a2",r._sentryDebugIdIdentifier="sentry-dbid-92f58b03-482f-4f8f-ac81-07a2ed1bb8a2")}catch{}})();const i=r=>{const e=f({loading:!0,result:null,error:null}),n=l=>(e.value={loading:!1,result:l,error:null},l),a=l=>{e.value={loading:!1,result:null,error:l}},o=()=>{e.value={loading:!0,result:null,error:null},r().then(n).catch(a)};o();const s=t(()=>e.value.loading),u=t(()=>e.value.result),d=t(()=>e.value.error);return{loading:s,result:u,error:d,refetch:o}};export{i as a};
//# sourceMappingURL=asyncComputed.c8d50303.js.map
