import{E as c,G as l}from"./outputWidgets.427e9347.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="369ba3a8-7e07-4409-b4dd-b05c645c5d0c",r._sentryDebugIdIdentifier="sentry-dbid-369ba3a8-7e07-4409-b4dd-b05c645c5d0c")}catch{}})();const f=r=>{const e=c({loading:!0,result:null,error:null}),n=t=>(e.value={loading:!1,result:t,error:null},t),s=t=>{e.value={loading:!1,result:null,error:t}},o=async()=>(e.value={loading:!0,result:e.value.result,error:null},r().then(n).catch(s));o();const u=l(()=>e.value.loading),a=l(()=>e.value.result),d=l(()=>e.value.error);return{loading:u,result:a,error:d,refetch:o}};export{f as a};
//# sourceMappingURL=asyncComputed.32abd7c2.js.map
