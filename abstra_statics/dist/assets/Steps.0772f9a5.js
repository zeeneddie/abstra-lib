import{d as c,H as l,b as n,ev as o,e as a,a$ as r,eC as d,ez as _,eD as i,ex as u,v as f}from"./outputWidgets.859d4988.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="5de279e7-0658-46e2-a55d-b8ed2b5235b8",e._sentryDebugIdIdentifier="sentry-dbid-5de279e7-0658-46e2-a55d-b8ed2b5235b8")}catch{}})();const b={key:0,class:"p-steps p-component"},m={class:"p-steps-list"},y={class:"p-menuitem-link"},g={class:"p-steps-number"},I=c({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,p=l(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,v)=>e.stepsInfo?(n(),o("nav",b,[a("ol",m,[(n(!0),o(r,null,d(p.value,(k,t)=>(n(),o("li",{key:t,class:_(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[a("span",y,[a("span",g,i(t+1),1)])],2))),128))])])):u("",!0)}});const w=f(I,[["__scopeId","data-v-c916ecf3"]]);export{w as S};
//# sourceMappingURL=Steps.0772f9a5.js.map
