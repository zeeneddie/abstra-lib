import{d as p,H as l,b as n,eu as o,e as a,aC as r,eB as d,ey as f,eD as _,ew as i,v as u}from"./outputWidgets.c199cd65.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="6cdee75e-f41e-46e3-8cf4-d329f819df60",e._sentryDebugIdIdentifier="sentry-dbid-6cdee75e-f41e-46e3-8cf4-d329f819df60")}catch{}})();const m={key:0,class:"p-steps p-component"},y={class:"p-steps-list"},b={class:"p-menuitem-link"},g={class:"p-steps-number"},I=p({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,c=l(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,v)=>e.stepsInfo?(n(),o("nav",m,[a("ol",y,[(n(!0),o(r,null,d(c.value,(k,t)=>(n(),o("li",{key:t,class:f(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[a("span",b,[a("span",g,_(t+1),1)])],2))),128))])])):i("",!0)}});const D=u(I,[["__scopeId","data-v-c916ecf3"]]);export{D as S};
//# sourceMappingURL=Steps.21019a95.js.map