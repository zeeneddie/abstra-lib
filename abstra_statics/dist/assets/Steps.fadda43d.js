import{d as p,H as l,b as n,ev as a,e as o,a$ as r,eC as d,ez as _,eD as i,ex as u,v as f}from"./outputWidgets.0d6c71c4.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="53c96ded-3142-4b7b-8d60-02bbae40ae21",e._sentryDebugIdIdentifier="sentry-dbid-53c96ded-3142-4b7b-8d60-02bbae40ae21")}catch{}})();const b={key:0,class:"p-steps p-component"},m={class:"p-steps-list"},y={class:"p-menuitem-link"},g={class:"p-steps-number"},I=p({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,c=l(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(h,v)=>e.stepsInfo?(n(),a("nav",b,[o("ol",m,[(n(!0),a(r,null,d(c.value,(k,t)=>(n(),a("li",{key:t,class:_(["p-steps-item",{"p-highlight":t+1===e.stepsInfo.current}])},[o("span",y,[o("span",g,i(t+1),1)])],2))),128))])])):u("",!0)}});const w=f(I,[["__scopeId","data-v-c916ecf3"]]);export{w as S};
//# sourceMappingURL=Steps.fadda43d.js.map