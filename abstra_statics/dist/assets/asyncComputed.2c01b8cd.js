import{R as c,K as t}from"./registerWidgets.d08da683.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="4f615563-1968-4bb2-8f99-7cbe0f09ec06",r._sentryDebugIdIdentifier="sentry-dbid-4f615563-1968-4bb2-8f99-7cbe0f09ec06")}catch{}})();const i=r=>{const e=c({loading:!0,result:null,error:null}),n=l=>(e.value={loading:!1,result:l,error:null},l),s=l=>{e.value={loading:!1,result:null,error:l}},o=()=>{e.value={loading:!0,result:null,error:null},r().then(n).catch(s)};o();const u=t(()=>e.value.loading),a=t(()=>e.value.result),d=t(()=>e.value.error);return{loading:u,result:a,error:d,refetch:o}};export{i as a};
//# sourceMappingURL=asyncComputed.2c01b8cd.js.map
