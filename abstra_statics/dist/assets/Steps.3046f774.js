import{d as p,J as l,b as n,et as a,e as o,bq as r,eB as d,ey as _,eC as i,ew as u,x as b}from"./outputWidgets.b56466d5.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="482ea0a4-3c94-4e5b-b494-2e0cbb2b6d9b",e._sentryDebugIdIdentifier="sentry-dbid-482ea0a4-3c94-4e5b-b494-2e0cbb2b6d9b")}catch{}})();const f={key:0,class:"p-steps p-component"},m={class:"p-steps-list"},y={class:"p-menuitem-link"},g={class:"p-steps-number"},I=p({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,c=l(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,k)=>e.stepsInfo?(n(),a("nav",f,[o("ol",m,[(n(!0),a(r,null,d(c.value,(v,t)=>(n(),a("li",{key:t,class:_(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[o("span",y,[o("span",g,i(t+1),1)])],2))),128))])])):u("",!0)}});const D=b(I,[["__scopeId","data-v-c6d9488a"]]);export{D as S};
//# sourceMappingURL=Steps.3046f774.js.map
