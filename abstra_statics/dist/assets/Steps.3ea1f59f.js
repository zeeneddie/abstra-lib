import{d as p,H as l,b as n,et as a,e as o,b9 as r,eA as d,ex as _,eB as i,ev as u,v as f}from"./outputWidgets.46ba2efb.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="b36a27a6-cb03-4df7-8d0a-eb994c1c83e6",e._sentryDebugIdIdentifier="sentry-dbid-b36a27a6-cb03-4df7-8d0a-eb994c1c83e6")}catch{}})();const b={key:0,class:"p-steps p-component"},m={class:"p-steps-list"},y={class:"p-menuitem-link"},g={class:"p-steps-number"},I=p({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,c=l(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,v)=>e.stepsInfo?(n(),a("nav",b,[o("ol",m,[(n(!0),a(r,null,d(c.value,(k,t)=>(n(),a("li",{key:t,class:_(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[o("span",y,[o("span",g,i(t+1),1)])],2))),128))])])):u("",!0)}});const D=f(I,[["__scopeId","data-v-c6d9488a"]]);export{D as S};
//# sourceMappingURL=Steps.3ea1f59f.js.map
