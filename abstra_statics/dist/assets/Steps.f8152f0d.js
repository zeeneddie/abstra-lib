import{d as l,J as c,b as n,eu as o,e as a,bg as d,eB as r,ey as _,eC as i,ew as u,x as b}from"./outputWidgets.3f6d0550.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="88851f86-66de-4009-b085-bdb8b7d27bb8",e._sentryDebugIdIdentifier="sentry-dbid-88851f86-66de-4009-b085-bdb8b7d27bb8")}catch{}})();const f={key:0,class:"p-steps p-component"},m={class:"p-steps-list"},y={class:"p-menuitem-link"},g={class:"p-steps-number"},I=l({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,p=c(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,k)=>e.stepsInfo?(n(),o("nav",f,[a("ol",m,[(n(!0),o(d,null,r(p.value,(v,t)=>(n(),o("li",{key:t,class:_(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[a("span",y,[a("span",g,i(t+1),1)])],2))),128))])])):u("",!0)}});const D=b(I,[["__scopeId","data-v-c6d9488a"]]);export{D as S};
//# sourceMappingURL=Steps.f8152f0d.js.map
