import{d as p,F as l,b as n,c as a,er as o,bw as r,ez as d,ew as _,eA as i,eu as u,t as f}from"./registerWidgets.b2d74d6b.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="e2e60035-3cf8-4c17-89fb-8eb6ea43a4ad",e._sentryDebugIdIdentifier="sentry-dbid-e2e60035-3cf8-4c17-89fb-8eb6ea43a4ad")}catch{}})();const m={key:0,class:"p-steps p-component"},b={class:"p-steps-list"},y={class:"p-menuitem-link"},g={class:"p-steps-number"},I=p({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,c=l(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,w)=>e.stepsInfo?(n(),a("nav",m,[o("ol",b,[(n(!0),a(r,null,d(c.value,(k,t)=>(n(),a("li",{key:t,class:_(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[o("span",y,[o("span",g,i(t+1),1)])],2))),128))])])):u("",!0)}});const D=f(I,[["__scopeId","data-v-c6d9488a"]]);export{D as S};
//# sourceMappingURL=Steps.66f87ea7.js.map
