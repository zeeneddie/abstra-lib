import{F as c,H as t}from"./registerWidgets.aa38e167.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="380852f6-9ad4-4069-9090-3caa2c03c034",r._sentryDebugIdIdentifier="sentry-dbid-380852f6-9ad4-4069-9090-3caa2c03c034")}catch{}})();const i=r=>{const e=c({loading:!0,result:null,error:null}),n=l=>(e.value={loading:!1,result:l,error:null},l),a=l=>{e.value={loading:!1,result:null,error:l}},o=()=>{e.value={loading:!0,result:null,error:null},r().then(n).catch(a)};o();const s=t(()=>e.value.loading),u=t(()=>e.value.result),d=t(()=>e.value.error);return{loading:s,result:u,error:d,refetch:o}};export{i as a};
//# sourceMappingURL=asyncComputed.736869e1.js.map
