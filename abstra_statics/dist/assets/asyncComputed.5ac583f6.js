import{G as f,J as l}from"./outputWidgets.71232878.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="21a74e20-1aa1-4f54-a75e-0b9fdd1fbe55",r._sentryDebugIdIdentifier="sentry-dbid-21a74e20-1aa1-4f54-a75e-0b9fdd1fbe55")}catch{}})();const i=r=>{const e=f({loading:!0,result:null,error:null}),n=t=>(e.value={loading:!1,result:t,error:null},t),o=t=>{e.value={loading:!1,result:null,error:t}},a=()=>{e.value={loading:!0,result:e.value.result,error:null},r().then(n).catch(o)};a();const s=l(()=>e.value.loading),u=l(()=>e.value.result),d=l(()=>e.value.error);return{loading:s,result:u,error:d,refetch:a}};export{i as a};
//# sourceMappingURL=asyncComputed.5ac583f6.js.map
