import{d as f,eB as m,u as e,b as d,c as u,ev as y,f as o,w as a,bg as _,ar as p,ex as g,e as b,eD as x}from"./outputWidgets.9bb29762.js";import"./router.f15646c4.js";import"./index.2f604abe.js";import{O as w}from"./organization.a9e9abb1.js";import{a as k}from"./asyncComputed.ac1a0197.js";import{A}from"./Title.b342fcc9.js";import{A as B}from"./index.fcc99b17.js";import{A as h}from"./index.54135072.js";import{A as C}from"./Text.5324981a.js";import{C as D}from"./Card.b91f4cc4.js";import"./Form.472b1af8.js";import"./hasIn.fa8167cd.js";import"./popupNotifcation.b12790e0.js";import"./index.cf4c23b9.js";import"./record.dd7b0559.js";import"./pubsub.90d4935e.js";import"./Base.abff5e35.js";import"./Typography.184e8c0b.js";import"./TabPane.aa230872.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="bdd45fc3-007c-4c1c-8d2d-47d91c57a7b6",t._sentryDebugIdIdentifier="sentry-dbid-bdd45fc3-007c-4c1c-8d2d-47d91c57a7b6")}catch{}})();const I={key:1},v={style:{display:"flex","justify-content":"flex-end","font-size":"24px"}},X=f({__name:"Billing",setup(t){const n=m().params.organizationId,{loading:c,result:l}=k(()=>w.get(n));return(z,N)=>e(c)?(d(),u(e(_),{key:0})):(d(),y("div",I,[o(e(B),{justify:"space-between",align:"center"},{default:a(()=>[o(e(A),{level:3},{default:a(()=>[p("Current plan")]),_:1}),g("",!0)]),_:1}),o(e(h),{style:{"margin-top":"0"}}),o(e(D),{style:{width:"300px"}},{default:a(()=>{var i,s;return[o(e(C),{type:"secondary"},{default:a(()=>[p("Plan")]),_:1}),b("div",v,x((s=(i=e(l))==null?void 0:i.billingMetadata)==null?void 0:s.plan),1)]}),_:1})]))}});export{X as default};
//# sourceMappingURL=Billing.1381516c.js.map
