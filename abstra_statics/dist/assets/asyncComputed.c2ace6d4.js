import{F as c,H as l}from"./outputWidgets.fac45c48.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="44e51714-9720-4ef2-ba44-73b0225fa32e",r._sentryDebugIdIdentifier="sentry-dbid-44e51714-9720-4ef2-ba44-73b0225fa32e")}catch{}})();const i=r=>{const e=c({loading:!0,result:null,error:null}),n=t=>(e.value={loading:!1,result:t,error:null},t),s=t=>{e.value={loading:!1,result:null,error:t}},o=async()=>(e.value={loading:!0,result:e.value.result,error:null},r().then(n).catch(s));o();const u=l(()=>e.value.loading),a=l(()=>e.value.result),d=l(()=>e.value.error);return{loading:u,result:a,error:d,refetch:o}};export{i as a};
//# sourceMappingURL=asyncComputed.c2ace6d4.js.map
