import{d as p,F as d,b as n,c as a,er as o,bw as l,ez as r,ew as _,eA as f,eu as i,t as u}from"./registerWidgets.06c1cec2.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="bd45cfcb-a397-4d8e-bd3b-3d53fb3af74b",e._sentryDebugIdIdentifier="sentry-dbid-bd45cfcb-a397-4d8e-bd3b-3d53fb3af74b")}catch{}})();const b={key:0,class:"p-steps p-component"},m={class:"p-steps-list"},y={class:"p-menuitem-link"},g={class:"p-steps-number"},I=p({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,c=d(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,w)=>e.stepsInfo?(n(),a("nav",b,[o("ol",m,[(n(!0),a(l,null,r(c.value,(k,t)=>(n(),a("li",{key:t,class:_(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[o("span",y,[o("span",g,f(t+1),1)])],2))),128))])])):i("",!0)}});const D=u(I,[["__scopeId","data-v-c6d9488a"]]);export{D as S};
//# sourceMappingURL=Steps.c24e53db.js.map
