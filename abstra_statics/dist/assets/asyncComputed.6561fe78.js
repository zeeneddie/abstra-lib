import{G as f,J as l}from"./outputWidgets.300f3e96.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="2fbbad58-95ce-43e3-b737-0d7bba37eff9",r._sentryDebugIdIdentifier="sentry-dbid-2fbbad58-95ce-43e3-b737-0d7bba37eff9")}catch{}})();const b=r=>{const e=f({loading:!0,result:null,error:null}),n=t=>(e.value={loading:!1,result:t,error:null},t),s=t=>{e.value={loading:!1,result:null,error:t}},o=()=>{e.value={loading:!0,result:e.value.result,error:null},r().then(n).catch(s)};o();const u=l(()=>e.value.loading),a=l(()=>e.value.result),d=l(()=>e.value.error);return{loading:u,result:a,error:d,refetch:o}};export{b as a};
//# sourceMappingURL=asyncComputed.6561fe78.js.map
