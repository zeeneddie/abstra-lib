import{d as f,eB as c,u as e,b as d,c as u,ev as y,f as o,w as a,bv as _,ar as p,ex as g,e as x,eD as b}from"./outputWidgets.6eec98ff.js";import"./router.9c6f57ba.js";import"./index.cdb0f83d.js";import{O as w}from"./organization.f37fdd02.js";import{a as k}from"./asyncComputed.1526d434.js";import{A}from"./Title.99e8adef.js";import{A as B}from"./index.ab3fd656.js";import{A as h}from"./index.d10c3ff5.js";import{A as C}from"./Text.fdd11fc0.js";import{C as v}from"./Card.b8f66a68.js";import"./Form.2af9c413.js";import"./hasIn.58de5617.js";import"./index.cf4c23b9.js";import"./record.3e6d2f52.js";import"./pubsub.e1022b3e.js";import"./Base.f2e41c2f.js";import"./Typography.ec01cc4a.js";import"./TabPane.5b70d40d.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="590577d0-1674-4659-99d1-831261395864",t._sentryDebugIdIdentifier="sentry-dbid-590577d0-1674-4659-99d1-831261395864")}catch{}})();const D={key:1},I={style:{display:"flex","justify-content":"flex-end","font-size":"24px"}},W=f({__name:"Billing",setup(t){const n=c().params.organizationId,{loading:l,result:m}=k(()=>w.get(n));return(z,N)=>e(l)?(d(),u(e(_),{key:0})):(d(),y("div",D,[o(e(B),{justify:"space-between",align:"center"},{default:a(()=>[o(e(A),{level:3},{default:a(()=>[p("Current plan")]),_:1}),g("",!0)]),_:1}),o(e(h),{style:{"margin-top":"0"}}),o(e(v),{style:{width:"300px"}},{default:a(()=>{var i,s;return[o(e(C),{type:"secondary"},{default:a(()=>[p("Plan")]),_:1}),x("div",I,b((s=(i=e(m))==null?void 0:i.billingMetadata)==null?void 0:s.plan),1)]}),_:1})]))}});export{W as default};
//# sourceMappingURL=Billing.14bb0e7f.js.map
