import{d as f,eB as m,u as e,b as d,c as u,ev as y,f as a,w as o,bg as _,ar as p,ex as g,e as b,eD as x}from"./outputWidgets.005a49a1.js";import"./router.9c22a786.js";import"./index.9789f02b.js";import{O as w}from"./organization.7f032ebc.js";import{a as k}from"./asyncComputed.51614009.js";import{A}from"./Title.16535362.js";import{A as B}from"./index.01dc8a70.js";import{A as h}from"./index.f1718a65.js";import{A as C}from"./Text.7e4b9927.js";import{C as D}from"./Card.947e162a.js";import"./Form.3806d778.js";import"./hasIn.7afb4985.js";import"./popupNotifcation.1e3039cb.js";import"./index.cf4c23b9.js";import"./record.254478c0.js";import"./pubsub.46648e88.js";import"./Base.b9e1eb2d.js";import"./Typography.8a556c4b.js";import"./TabPane.83346231.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="6a230e1a-b6cd-4296-a218-f233ed6e359c",t._sentryDebugIdIdentifier="sentry-dbid-6a230e1a-b6cd-4296-a218-f233ed6e359c")}catch{}})();const I={key:1},v={style:{display:"flex","justify-content":"flex-end","font-size":"24px"}},X=f({__name:"Billing",setup(t){const n=m().params.organizationId,{loading:l,result:c}=k(()=>w.get(n));return(z,N)=>e(l)?(d(),u(e(_),{key:0})):(d(),y("div",I,[a(e(B),{justify:"space-between",align:"center"},{default:o(()=>[a(e(A),{level:3},{default:o(()=>[p("Current plan")]),_:1}),g("",!0)]),_:1}),a(e(h),{style:{"margin-top":"0"}}),a(e(D),{style:{width:"300px"}},{default:o(()=>{var i,s;return[a(e(C),{type:"secondary"},{default:o(()=>[p("Plan")]),_:1}),b("div",v,x((s=(i=e(c))==null?void 0:i.billingMetadata)==null?void 0:s.plan),1)]}),_:1})]))}});export{X as default};
//# sourceMappingURL=Billing.431a93db.js.map
