import{F as d,H as l}from"./outputWidgets.1b9917d7.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="3b7dbfda-a745-44c9-b706-805c36ca3cf3",r._sentryDebugIdIdentifier="sentry-dbid-3b7dbfda-a745-44c9-b706-805c36ca3cf3")}catch{}})();const i=r=>{const e=d({loading:!0,result:null,error:null}),n=t=>(e.value={loading:!1,result:t,error:null},t),a=t=>{e.value={loading:!1,result:null,error:t}},o=async()=>(e.value={loading:!0,result:e.value.result,error:null},r().then(n).catch(a));o();const s=l(()=>e.value.loading),u=l(()=>e.value.result),c=l(()=>e.value.error);return{loading:s,result:u,error:c,refetch:o}};export{i as a};
//# sourceMappingURL=asyncComputed.a675a47b.js.map
