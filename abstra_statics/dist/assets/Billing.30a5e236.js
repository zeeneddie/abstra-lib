import{d as f,ez as m,u as e,b as d,c as u,et as y,f as a,w as o,be as _,ao as p,ev as g,e as b,eB as x}from"./outputWidgets.4d9ba3ef.js";import"./router.679077c0.js";import"./jwt-decode.esm.74bd4619.js";import"./index.3025c580.js";import{O as w}from"./organization.0c45e039.js";import{a as h}from"./asyncComputed.f4677978.js";import{a as k}from"./Title.60378b9e.js";import{A as B}from"./index.b6917982.js";import{A}from"./index.ca094f94.js";import{A as C}from"./Text.cb3c74fa.js";import{C as I}from"./Card.5ef44f63.js";import"./FormItem.24b19ea4.js";import"./hasIn.1cdec4af.js";import"./storage.39df5cbf.js";import"./index.cb2c6e5c.js";import"./index.cf4c23b9.js";import"./record.4e413006.js";import"./pubsub.3bfcfc7f.js";import"./TabPane.64ffca33.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="6b3f70ac-c5b9-422e-96ed-ad6b93d3233a",t._sentryDebugIdIdentifier="sentry-dbid-6b3f70ac-c5b9-422e-96ed-ad6b93d3233a")}catch{}})();const v={key:1},z={style:{display:"flex","justify-content":"flex-end","font-size":"24px"}},X=f({__name:"Billing",setup(t){const n=m().params.organizationId,{loading:l,result:c}=h(()=>w.get(n));return(D,T)=>e(l)?(d(),u(e(_),{key:0})):(d(),y("div",v,[a(e(B),{justify:"space-between",align:"center"},{default:o(()=>[a(e(k),{level:3},{default:o(()=>[p("Current plan")]),_:1}),g("",!0)]),_:1}),a(e(A),{style:{"margin-top":"0"}}),a(e(I),{style:{width:"300px"}},{default:o(()=>{var i,s;return[a(e(C),{type:"secondary"},{default:o(()=>[p("Plan")]),_:1}),b("div",z,x((s=(i=e(c))==null?void 0:i.billingMetadata)==null?void 0:s.plan),1)]}),_:1})]))}});export{X as default};
//# sourceMappingURL=Billing.30a5e236.js.map