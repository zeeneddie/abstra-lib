import{d as g,eB as y,o as _,u as e,b as p,c as w,eu as b,f as a,w as o,bf as I,aq as l,bF as x,e as h,eE as k}from"./outputWidgets.b1e87772.js";import{I as c}from"./router.a9e5af79.js";import"./index.f89d635d.js";import{O as B}from"./organization.1bd02d23.js";import{a as C}from"./asyncComputed.5830bf45.js";import{A as v}from"./Title.87ff1f7b.js";import{A}from"./index.fae832ba.js";import{A as D}from"./index.45f3079f.js";import{C as N}from"./Card.7e5930fd.js";import"./Form.c64de99c.js";import"./hasIn.443af95b.js";import"./popupNotifcation.6e758e81.js";import"./index.cf4c23b9.js";import"./record.2f552fbf.js";import"./pubsub.8b7604ff.js";import"./Text.a2ac66f5.js";import"./TabPane.71fee0dc.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="898f62ed-6258-40e1-aa7c-0abf3ca85508",t._sentryDebugIdIdentifier="sentry-dbid-898f62ed-6258-40e1-aa7c-0abf3ca85508")}catch{}})();const z={key:1},M={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},Y=g({__name:"Billing",setup(t){const r=y().params.organizationId,{loading:f,result:m}=C(()=>B.get(r));_(()=>{location.search.includes("upgrade")&&c.showNewMessage("I want to upgrade my plan")});const u=()=>c.showNewMessage("I want to upgrade my plan");return(E,V)=>e(f)?(p(),w(e(I),{key:0})):(p(),b("div",z,[a(e(A),{justify:"space-between",align:"center"},{default:o(()=>[a(e(v),{level:3},{default:o(()=>[l("Current plan")]),_:1})]),_:1}),a(e(D),{style:{"margin-top":"0"}}),a(e(N),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(x),{onClick:u},{default:o(()=>[l("Upgrade")]),_:1})]),default:o(()=>{var s,i,d;return[h("div",M,k((d=(i=(s=e(m))==null?void 0:s.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{Y as default};
//# sourceMappingURL=Billing.0d981f9c.js.map