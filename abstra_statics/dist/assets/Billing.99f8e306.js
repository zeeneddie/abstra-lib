import{d as g,eB as y,o as b,u as e,b as p,c as _,ev as w,f as a,w as o,bg as I,ar as l,bG as h,e as x,eD as k}from"./outputWidgets.399def05.js";import{I as c}from"./router.6781b4fe.js";import"./index.142828c3.js";import{O as v}from"./organization.5f360a13.js";import{a as B}from"./asyncComputed.f4656215.js";import{A as C}from"./Title.2c7413e1.js";import{A as D}from"./index.a22cb932.js";import{A}from"./index.2ad223b4.js";import{C as N}from"./Card.7157cd01.js";import"./Form.725ab820.js";import"./hasIn.2c80750f.js";import"./popupNotifcation.35b231ea.js";import"./index.cf4c23b9.js";import"./record.c9aea37a.js";import"./pubsub.9cd3fe84.js";import"./Base.5fff8032.js";import"./Typography.2f5af698.js";import"./TabPane.78506a51.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="48a597db-9bb2-4cf9-8ba4-96eca736ac2d",t._sentryDebugIdIdentifier="sentry-dbid-48a597db-9bb2-4cf9-8ba4-96eca736ac2d")}catch{}})();const z={key:1},M={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},Z=g({__name:"Billing",setup(t){const n=y().params.organizationId,{loading:m,result:f}=B(()=>v.get(n));b(()=>{location.search.includes("upgrade")&&c.showNewMessage("I want to upgrade my plan")});const u=()=>c.showNewMessage("I want to upgrade my plan");return(T,V)=>e(m)?(p(),_(e(I),{key:0})):(p(),w("div",z,[a(e(D),{justify:"space-between",align:"center"},{default:o(()=>[a(e(C),{level:3},{default:o(()=>[l("Current plan")]),_:1})]),_:1}),a(e(A),{style:{"margin-top":"0"}}),a(e(N),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(h),{onClick:u},{default:o(()=>[l("Upgrade")]),_:1})]),default:o(()=>{var s,i,d;return[x("div",M,k((d=(i=(s=e(f))==null?void 0:s.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{Z as default};
//# sourceMappingURL=Billing.99f8e306.js.map
