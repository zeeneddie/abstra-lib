import{d as c,eB as m,u as e,b as d,c as u,ev as y,f as o,w as a,bv as _,ar as p,ex as g,e as b,eD as x}from"./outputWidgets.ad220777.js";import"./router.6b225833.js";import"./index.d1cb9253.js";import{O as w}from"./organization.97998130.js";import{a as k}from"./asyncComputed.d014c782.js";import{A}from"./Title.32f31fbe.js";import{A as B}from"./index.6a914479.js";import{A as h}from"./index.f19c3d9c.js";import{A as C}from"./Text.1d40b64f.js";import{C as v}from"./Card.e2df7a74.js";import"./Form.39fdeb76.js";import"./hasIn.cf7d6bab.js";import"./index.cf4c23b9.js";import"./record.cd6b04cd.js";import"./pubsub.7a6bd333.js";import"./Base.2c96e441.js";import"./Typography.c0b73472.js";import"./TabPane.497367c8.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="208f01ac-f7c7-4eb6-a50b-d23596f8e599",t._sentryDebugIdIdentifier="sentry-dbid-208f01ac-f7c7-4eb6-a50b-d23596f8e599")}catch{}})();const D={key:1},I={style:{display:"flex","justify-content":"flex-end","font-size":"24px"}},W=c({__name:"Billing",setup(t){const n=m().params.organizationId,{loading:f,result:l}=k(()=>w.get(n));return(z,N)=>e(f)?(d(),u(e(_),{key:0})):(d(),y("div",D,[o(e(B),{justify:"space-between",align:"center"},{default:a(()=>[o(e(A),{level:3},{default:a(()=>[p("Current plan")]),_:1}),g("",!0)]),_:1}),o(e(h),{style:{"margin-top":"0"}}),o(e(v),{style:{width:"300px"}},{default:a(()=>{var i,s;return[o(e(C),{type:"secondary"},{default:a(()=>[p("Plan")]),_:1}),b("div",I,x((s=(i=e(l))==null?void 0:i.billingMetadata)==null?void 0:s.plan),1)]}),_:1})]))}});export{W as default};
//# sourceMappingURL=Billing.edab4d31.js.map
