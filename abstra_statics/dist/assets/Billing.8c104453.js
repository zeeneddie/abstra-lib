import{d as c,eB as m,u as e,b as d,c as u,ev as y,f as o,w as a,bv as _,ar as p,ex as g,e as b,eD as x}from"./outputWidgets.d6d96ec7.js";import"./router.a5fc5df9.js";import"./index.bd2c571b.js";import{O as w}from"./organization.d79d02a2.js";import{a as k}from"./asyncComputed.1b2420c8.js";import{A}from"./Title.dda512f8.js";import{A as B}from"./index.1507d19b.js";import{A as h}from"./index.d23f56f6.js";import{A as C}from"./Text.b5eccbba.js";import{C as v}from"./Card.8a7ee049.js";import"./Form.cd215f8b.js";import"./hasIn.62b690a8.js";import"./index.cf4c23b9.js";import"./record.12f5a3cc.js";import"./pubsub.02c72f28.js";import"./Base.338ee0ee.js";import"./Typography.8b2cb2d2.js";import"./TabPane.36bc53ac.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="2597e291-2eea-47d5-b3f6-ccf0d0ffdc62",t._sentryDebugIdIdentifier="sentry-dbid-2597e291-2eea-47d5-b3f6-ccf0d0ffdc62")}catch{}})();const D={key:1},I={style:{display:"flex","justify-content":"flex-end","font-size":"24px"}},W=c({__name:"Billing",setup(t){const n=m().params.organizationId,{loading:f,result:l}=k(()=>w.get(n));return(z,N)=>e(f)?(d(),u(e(_),{key:0})):(d(),y("div",D,[o(e(B),{justify:"space-between",align:"center"},{default:a(()=>[o(e(A),{level:3},{default:a(()=>[p("Current plan")]),_:1}),g("",!0)]),_:1}),o(e(h),{style:{"margin-top":"0"}}),o(e(v),{style:{width:"300px"}},{default:a(()=>{var i,s;return[o(e(C),{type:"secondary"},{default:a(()=>[p("Plan")]),_:1}),b("div",I,x((s=(i=e(l))==null?void 0:i.billingMetadata)==null?void 0:s.plan),1)]}),_:1})]))}});export{W as default};
//# sourceMappingURL=Billing.8c104453.js.map
