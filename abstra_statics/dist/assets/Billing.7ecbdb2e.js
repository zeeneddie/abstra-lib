import{d as m,eB as c,u as e,b as d,c as u,ev as y,f as o,w as r,bg as _,ar as p,ex as g,e as b,eD as x}from"./outputWidgets.e95bb5ba.js";import"./router.3a6e59a9.js";import"./index.625c948c.js";import{O as w}from"./organization.e711adde.js";import{a as k}from"./asyncComputed.a918aff5.js";import{A}from"./Title.c4936cbe.js";import{A as B}from"./index.57d47c25.js";import{A as h}from"./index.1a695e5e.js";import{A as C}from"./Text.dbae65ca.js";import{C as D}from"./Card.dbee84e6.js";import"./Form.f0f90fb3.js";import"./hasIn.c432e05d.js";import"./popupNotifcation.217238e6.js";import"./index.cf4c23b9.js";import"./record.725c0e31.js";import"./pubsub.9f576728.js";import"./Base.fb82d3c2.js";import"./Typography.c0addfce.js";import"./TabPane.490de1fb.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="86415455-98fb-4805-b36e-75d53266674c",t._sentryDebugIdIdentifier="sentry-dbid-86415455-98fb-4805-b36e-75d53266674c")}catch{}})();const I={key:1},v={style:{display:"flex","justify-content":"flex-end","font-size":"24px"}},X=m({__name:"Billing",setup(t){const n=c().params.organizationId,{loading:l,result:f}=k(()=>w.get(n));return(z,N)=>e(l)?(d(),u(e(_),{key:0})):(d(),y("div",I,[o(e(B),{justify:"space-between",align:"center"},{default:r(()=>[o(e(A),{level:3},{default:r(()=>[p("Current plan")]),_:1}),g("",!0)]),_:1}),o(e(h),{style:{"margin-top":"0"}}),o(e(D),{style:{width:"300px"}},{default:r(()=>{var i,s;return[o(e(C),{type:"secondary"},{default:r(()=>[p("Plan")]),_:1}),b("div",v,x((s=(i=e(f))==null?void 0:i.billingMetadata)==null?void 0:s.plan),1)]}),_:1})]))}});export{X as default};
//# sourceMappingURL=Billing.7ecbdb2e.js.map