import{d as m,eB as c,u as e,b as d,c as u,ev as y,f as o,w as a,bv as _,ar as p,ex as g,e as x,eD as b}from"./outputWidgets.eeaef6a8.js";import"./router.c2b0fdc6.js";import"./index.d3bbc2f4.js";import{O as w}from"./organization.d58a2f83.js";import{a as k}from"./asyncComputed.ce3c0699.js";import{A}from"./Title.fb399d95.js";import{A as B}from"./index.fadea433.js";import{A as h}from"./index.df0ee530.js";import{A as C}from"./Text.aef0bb71.js";import{C as v}from"./Card.64fe949c.js";import"./Form.da0f7837.js";import"./hasIn.cc81837f.js";import"./index.cf4c23b9.js";import"./record.daeb4879.js";import"./pubsub.a8e824e5.js";import"./Base.a28afe7f.js";import"./Typography.903846f1.js";import"./TabPane.fba6b406.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="3525fd32-75f6-49ec-9927-3a48416e3753",t._sentryDebugIdIdentifier="sentry-dbid-3525fd32-75f6-49ec-9927-3a48416e3753")}catch{}})();const D={key:1},I={style:{display:"flex","justify-content":"flex-end","font-size":"24px"}},W=m({__name:"Billing",setup(t){const n=c().params.organizationId,{loading:l,result:f}=k(()=>w.get(n));return(z,N)=>e(l)?(d(),u(e(_),{key:0})):(d(),y("div",D,[o(e(B),{justify:"space-between",align:"center"},{default:a(()=>[o(e(A),{level:3},{default:a(()=>[p("Current plan")]),_:1}),g("",!0)]),_:1}),o(e(h),{style:{"margin-top":"0"}}),o(e(v),{style:{width:"300px"}},{default:a(()=>{var i,s;return[o(e(C),{type:"secondary"},{default:a(()=>[p("Plan")]),_:1}),x("div",I,b((s=(i=e(f))==null?void 0:i.billingMetadata)==null?void 0:s.plan),1)]}),_:1})]))}});export{W as default};
//# sourceMappingURL=Billing.c6909617.js.map
