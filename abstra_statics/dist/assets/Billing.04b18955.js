import{d as f,eB as m,u as e,b as d,c as u,ev as y,f as o,w as a,bg as _,ar as p,ex as g,e as b,eD as x}from"./outputWidgets.91c9f730.js";import"./router.e4c5e9fd.js";import"./index.7bd5dae7.js";import{O as w}from"./organization.15272921.js";import{a as k}from"./asyncComputed.5cff1726.js";import{A}from"./Title.69e80303.js";import{A as B}from"./index.5a63d36f.js";import{A as h}from"./index.981556bf.js";import{A as C}from"./Text.2f03529d.js";import{C as D}from"./Card.a8631760.js";import"./Form.f24a1c0a.js";import"./hasIn.d8588324.js";import"./popupNotifcation.e7a2b93a.js";import"./index.cf4c23b9.js";import"./record.48aae23b.js";import"./pubsub.25829540.js";import"./Base.79932679.js";import"./Typography.c7c5698a.js";import"./TabPane.7a826f8d.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="3164b41f-20ea-49c5-b1ae-cc19249de575",t._sentryDebugIdIdentifier="sentry-dbid-3164b41f-20ea-49c5-b1ae-cc19249de575")}catch{}})();const I={key:1},v={style:{display:"flex","justify-content":"flex-end","font-size":"24px"}},X=f({__name:"Billing",setup(t){const n=m().params.organizationId,{loading:l,result:c}=k(()=>w.get(n));return(z,N)=>e(l)?(d(),u(e(_),{key:0})):(d(),y("div",I,[o(e(B),{justify:"space-between",align:"center"},{default:a(()=>[o(e(A),{level:3},{default:a(()=>[p("Current plan")]),_:1}),g("",!0)]),_:1}),o(e(h),{style:{"margin-top":"0"}}),o(e(D),{style:{width:"300px"}},{default:a(()=>{var i,s;return[o(e(C),{type:"secondary"},{default:a(()=>[p("Plan")]),_:1}),b("div",v,x((s=(i=e(c))==null?void 0:i.billingMetadata)==null?void 0:s.plan),1)]}),_:1})]))}});export{X as default};
//# sourceMappingURL=Billing.04b18955.js.map
