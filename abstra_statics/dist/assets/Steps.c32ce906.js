import{d as p,K as l,b as n,c as a,x as o,F as d,L as r,G as _,N as i,D as f,q as u}from"./registerWidgets.ecebf756.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="69cf1659-8680-4cbd-a9da-356f2dea4c8a",e._sentryDebugIdIdentifier="sentry-dbid-69cf1659-8680-4cbd-a9da-356f2dea4c8a")}catch{}})();const m={key:0,class:"p-steps p-component"},y={class:"p-steps-list"},b={class:"p-menuitem-link"},g={class:"p-steps-number"},I=p({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,c=l(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,k)=>e.stepsInfo?(n(),a("nav",m,[o("ol",y,[(n(!0),a(d,null,r(c.value,(v,t)=>(n(),a("li",{key:t,class:_(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[o("span",b,[o("span",g,i(t+1),1)])],2))),128))])])):f("",!0)}});const w=u(I,[["__scopeId","data-v-c6d9488a"]]);export{w as S};
//# sourceMappingURL=Steps.c32ce906.js.map
