import{r,K as f,R as v}from"./registerWidgets.ad696c68.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d7b1ca0b-ec62-4aa4-9778-e2e55a21347f",e._sentryDebugIdIdentifier="sentry-dbid-d7b1ca0b-ec62-4aa4-9778-e2e55a21347f")}catch{}})();const b=e=>{const n=r(Date.now()),t=r(!0),l=r(null),u=r(null),o=f(()=>(n.value,e())),s=a=>{l.value=a,u.value=null,t.value=!1},c=a=>{u.value=a,l.value=null,t.value=!1},d=()=>{n.value=Date.now()};return v(()=>o.value,()=>{l.value=null,t.value=!0,o.value.then(s).catch(a=>{console.error(a),c(a)})}),o.value.then(s),{result:l,loading:t,error:u,refetch:d}};export{b as a};
//# sourceMappingURL=asyncComputed.40a67fe8.js.map
