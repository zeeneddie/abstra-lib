import{G as d,J as l}from"./outputWidgets.5f5dca9f.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="9ccc72e1-c211-47ae-992f-99eecd73d57b",r._sentryDebugIdIdentifier="sentry-dbid-9ccc72e1-c211-47ae-992f-99eecd73d57b")}catch{}})();const i=r=>{const e=d({loading:!0,result:null,error:null}),n=t=>(e.value={loading:!1,result:t,error:null},t),s=t=>{e.value={loading:!1,result:null,error:t}},o=()=>{e.value={loading:!0,result:e.value.result,error:null},r().then(n).catch(s)};o();const u=l(()=>e.value.loading),a=l(()=>e.value.result),c=l(()=>e.value.error);return{loading:u,result:a,error:c,refetch:o}};export{i as a};
//# sourceMappingURL=asyncComputed.eae0c0ea.js.map
