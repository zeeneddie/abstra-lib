import{d as g,eB as y,o as _,u as e,b as p,c as w,ev as b,f as o,w as a,bg as I,ar as l,bG as x,e as h,eD as k}from"./outputWidgets.7e6eb177.js";import{I as c}from"./router.1fa38c42.js";import"./index.0e1d2395.js";import{O as v}from"./organization.f1f61faa.js";import{a as B}from"./asyncComputed.5c83bb8a.js";import{A as C}from"./Title.f948a676.js";import{A as D}from"./index.d8062c86.js";import{A}from"./index.57701e80.js";import{C as N}from"./Card.edac6aea.js";import"./Form.f6e73dd6.js";import"./hasIn.958b80f9.js";import"./popupNotifcation.1c8d50aa.js";import"./index.cf4c23b9.js";import"./record.a100d067.js";import"./pubsub.782b9d46.js";import"./Base.fe1b5bdf.js";import"./Typography.9133b65d.js";import"./TabPane.31848b67.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="1b608582-0350-475c-9147-214235297c35",t._sentryDebugIdIdentifier="sentry-dbid-1b608582-0350-475c-9147-214235297c35")}catch{}})();const z={key:1},M={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},Z=g({__name:"Billing",setup(t){const n=y().params.organizationId,{loading:m,result:u}=B(()=>v.get(n));_(()=>{location.search.includes("upgrade")&&c.showNewMessage("I want to upgrade my plan")});const f=()=>c.showNewMessage("I want to upgrade my plan");return(V,j)=>e(m)?(p(),w(e(I),{key:0})):(p(),b("div",z,[o(e(D),{justify:"space-between",align:"center"},{default:a(()=>[o(e(C),{level:3},{default:a(()=>[l("Current plan")]),_:1})]),_:1}),o(e(A),{style:{"margin-top":"0"}}),o(e(N),{style:{width:"300px"},title:"Plan"},{extra:a(()=>[o(e(x),{onClick:f},{default:a(()=>[l("Upgrade")]),_:1})]),default:a(()=>{var s,i,d;return[h("div",M,k((d=(i=(s=e(u))==null?void 0:s.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{Z as default};
//# sourceMappingURL=Billing.a65f9cca.js.map