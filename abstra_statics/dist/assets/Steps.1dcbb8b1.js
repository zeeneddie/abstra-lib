import{d as p,H as l,b as n,eu as o,e as a,aC as r,eB as d,ey as _,eD as f,ew as i,v as u}from"./outputWidgets.1c4947c7.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="356d5d91-253c-45b3-b9df-5f7209a24b12",e._sentryDebugIdIdentifier="sentry-dbid-356d5d91-253c-45b3-b9df-5f7209a24b12")}catch{}})();const b={key:0,class:"p-steps p-component"},m={class:"p-steps-list"},y={class:"p-menuitem-link"},g={class:"p-steps-number"},I=p({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,c=l(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,v)=>e.stepsInfo?(n(),o("nav",b,[a("ol",m,[(n(!0),o(r,null,d(c.value,(k,t)=>(n(),o("li",{key:t,class:_(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[a("span",y,[a("span",g,f(t+1),1)])],2))),128))])])):i("",!0)}});const D=u(I,[["__scopeId","data-v-c916ecf3"]]);export{D as S};
//# sourceMappingURL=Steps.1dcbb8b1.js.map
