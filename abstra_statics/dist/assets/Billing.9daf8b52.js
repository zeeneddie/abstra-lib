import{d as f,eB as m,u as e,b as d,c as u,ev as y,f as a,w as o,bg as _,aq as p,ex as g,e as b,eD as x}from"./outputWidgets.4ee23211.js";import"./authorManager.f7011066.js";import"./index.2515b741.js";import{O as w}from"./organization.d9089ea0.js";import{a as k}from"./asyncComputed.6aa53888.js";import{a as B}from"./Title.875de539.js";import{A as h}from"./index.7262b1f9.js";import{A}from"./index.ade977cc.js";import{A as C}from"./Text.4ac8e7c3.js";import{C as D}from"./Card.b6bd1cb4.js";import"./index.cf4c23b9.js";import"./record.dfbd8ce8.js";import"./pubsub.2e625fee.js";import"./TabPane.828a474c.js";import"./hasIn.ab5a960d.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="eac8cc1a-83b0-4eab-a5cf-855aa574a6a7",t._sentryDebugIdIdentifier="sentry-dbid-eac8cc1a-83b0-4eab-a5cf-855aa574a6a7")}catch{}})();const I={key:1},v={style:{display:"flex","justify-content":"flex-end","font-size":"24px"}},K=f({__name:"Billing",setup(t){const n=m().params.organizationId,{loading:c,result:l}=k(()=>w.get(n));return(z,N)=>e(c)?(d(),u(e(_),{key:0})):(d(),y("div",I,[a(e(h),{justify:"space-between",align:"center"},{default:o(()=>[a(e(B),{level:3},{default:o(()=>[p("Current plan")]),_:1}),g("",!0)]),_:1}),a(e(A),{style:{"margin-top":"0"}}),a(e(D),{style:{width:"300px"}},{default:o(()=>{var i,s;return[a(e(C),{type:"secondary"},{default:o(()=>[p("Plan")]),_:1}),b("div",v,x((s=(i=e(l))==null?void 0:i.billingMetadata)==null?void 0:s.plan),1)]}),_:1})]))}});export{K as default};
//# sourceMappingURL=Billing.9daf8b52.js.map
