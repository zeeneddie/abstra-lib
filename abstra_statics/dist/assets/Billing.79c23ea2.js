import{d as m,eB as c,u as e,b as d,c as u,ev as y,f as a,w as o,bv as _,ar as p,ex as g,e as b,eD as x}from"./outputWidgets.0d6c71c4.js";import"./router.e5be387e.js";import"./index.a0d2b41b.js";import{O as w}from"./organization.d090f4a5.js";import{a as k}from"./asyncComputed.27df476d.js";import{A}from"./Title.773b1396.js";import{A as B}from"./index.79a50c9a.js";import{A as h}from"./index.ba757ee2.js";import{A as C}from"./Text.5f5581ee.js";import{C as v}from"./Card.a3c31f89.js";import"./Form.4c2d0255.js";import"./hasIn.e6aa186e.js";import"./index.cf4c23b9.js";import"./record.19c12a45.js";import"./pubsub.a3cc160d.js";import"./Base.027fcad1.js";import"./Typography.a1d2ddc8.js";import"./TabPane.e1ce12d2.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="dea366a8-45b9-4cdb-a402-a77f5ea5b269",t._sentryDebugIdIdentifier="sentry-dbid-dea366a8-45b9-4cdb-a402-a77f5ea5b269")}catch{}})();const D={key:1},I={style:{display:"flex","justify-content":"flex-end","font-size":"24px"}},W=m({__name:"Billing",setup(t){const n=c().params.organizationId,{loading:l,result:f}=k(()=>w.get(n));return(z,N)=>e(l)?(d(),u(e(_),{key:0})):(d(),y("div",D,[a(e(B),{justify:"space-between",align:"center"},{default:o(()=>[a(e(A),{level:3},{default:o(()=>[p("Current plan")]),_:1}),g("",!0)]),_:1}),a(e(h),{style:{"margin-top":"0"}}),a(e(v),{style:{width:"300px"}},{default:o(()=>{var i,s;return[a(e(C),{type:"secondary"},{default:o(()=>[p("Plan")]),_:1}),b("div",I,x((s=(i=e(f))==null?void 0:i.billingMetadata)==null?void 0:s.plan),1)]}),_:1})]))}});export{W as default};
//# sourceMappingURL=Billing.79c23ea2.js.map