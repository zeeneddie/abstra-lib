import{F as c,H as l}from"./outputWidgets.6830fc2d.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="e0dc9d75-5440-4c1a-95b0-b2dd540eb546",r._sentryDebugIdIdentifier="sentry-dbid-e0dc9d75-5440-4c1a-95b0-b2dd540eb546")}catch{}})();const f=r=>{const e=c({loading:!0,result:null,error:null}),n=t=>(e.value={loading:!1,result:t,error:null},t),s=t=>{e.value={loading:!1,result:null,error:t}},o=async()=>(e.value={loading:!0,result:e.value.result,error:null},r().then(n).catch(s));o();const u=l(()=>e.value.loading),a=l(()=>e.value.result),d=l(()=>e.value.error);return{loading:u,result:a,error:d,refetch:o}};export{f as a};
//# sourceMappingURL=asyncComputed.46a733c1.js.map
