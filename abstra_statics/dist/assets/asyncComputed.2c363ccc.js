import{G as c,J as l}from"./outputWidgets.d6897520.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="89f86bec-5bf8-4559-959c-4307fa94d287",r._sentryDebugIdIdentifier="sentry-dbid-89f86bec-5bf8-4559-959c-4307fa94d287")}catch{}})();const i=r=>{const e=c({loading:!0,result:null,error:null}),n=t=>(e.value={loading:!1,result:t,error:null},t),s=t=>{e.value={loading:!1,result:null,error:t}},o=()=>{e.value={loading:!0,result:e.value.result,error:null},r().then(n).catch(s)};o();const u=l(()=>e.value.loading),a=l(()=>e.value.result),d=l(()=>e.value.error);return{loading:u,result:a,error:d,refetch:o}};export{i as a};
//# sourceMappingURL=asyncComputed.2c363ccc.js.map