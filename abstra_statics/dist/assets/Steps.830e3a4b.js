import{d as l,G as c,b as n,eu as a,e as o,b8 as r,eC as d,ey as _,eD as i,ew as u,t as f}from"./outputWidgets.89c081d6.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="e060a0b3-46e2-4e61-8b10-05e302ab8289",e._sentryDebugIdIdentifier="sentry-dbid-e060a0b3-46e2-4e61-8b10-05e302ab8289")}catch{}})();const b={key:0,class:"p-steps p-component"},m={class:"p-steps-list"},y={class:"p-menuitem-link"},g={class:"p-steps-number"},I=l({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,p=c(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,k)=>e.stepsInfo?(n(),a("nav",b,[o("ol",m,[(n(!0),a(r,null,d(p.value,(v,t)=>(n(),a("li",{key:t,class:_(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[o("span",y,[o("span",g,i(t+1),1)])],2))),128))])])):u("",!0)}});const D=f(I,[["__scopeId","data-v-c6d9488a"]]);export{D as S};
//# sourceMappingURL=Steps.830e3a4b.js.map
