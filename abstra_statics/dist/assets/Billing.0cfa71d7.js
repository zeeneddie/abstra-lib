import{d as f,ez as m,u as e,b as p,c as u,et as y,f as a,w as o,be as _,ao as d,ev as g,e as b,eB as x}from"./outputWidgets.dbf31506.js";import"./router.50e0effa.js";import"./jwt-decode.esm.74bd4619.js";import"./index.26ac7d5a.js";import{O as w}from"./organization.b0b9b308.js";import{a as h}from"./asyncComputed.22d83ebd.js";import{a as k}from"./Title.f2db1f8a.js";import{A as B}from"./index.77d9dc22.js";import{A}from"./index.71dff0d6.js";import{A as C}from"./Text.44b29478.js";import{C as I}from"./Card.65bd92b2.js";import"./FormItem.14aec113.js";import"./hasIn.cb997ddd.js";import"./storage.38bf401b.js";import"./index.c87831d1.js";import"./index.cf4c23b9.js";import"./record.d3b10a69.js";import"./pubsub.df3ed44c.js";import"./TabPane.cdcf438f.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="1a086b54-52c4-444c-9012-3ae33ce4a4f8",t._sentryDebugIdIdentifier="sentry-dbid-1a086b54-52c4-444c-9012-3ae33ce4a4f8")}catch{}})();const v={key:1},z={style:{display:"flex","justify-content":"flex-end","font-size":"24px"}},X=f({__name:"Billing",setup(t){const n=m().params.organizationId,{loading:l,result:c}=h(()=>w.get(n));return(D,T)=>e(l)?(p(),u(e(_),{key:0})):(p(),y("div",v,[a(e(B),{justify:"space-between",align:"center"},{default:o(()=>[a(e(k),{level:3},{default:o(()=>[d("Current plan")]),_:1}),g("",!0)]),_:1}),a(e(A),{style:{"margin-top":"0"}}),a(e(I),{style:{width:"300px"}},{default:o(()=>{var i,s;return[a(e(C),{type:"secondary"},{default:o(()=>[d("Plan")]),_:1}),b("div",z,x((s=(i=e(c))==null?void 0:i.billingMetadata)==null?void 0:s.plan),1)]}),_:1})]))}});export{X as default};
//# sourceMappingURL=Billing.0cfa71d7.js.map
