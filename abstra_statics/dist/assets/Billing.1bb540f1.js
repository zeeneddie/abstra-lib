import{d as g,eB as y,o as _,u as e,b as d,c as w,ev as b,f as a,w as o,bg as I,ar as l,bG as h,e as x,eD as k}from"./outputWidgets.11c13597.js";import{I as c}from"./router.bc4b4a8b.js";import"./index.39a7b91f.js";import{O as v}from"./organization.06f1d3bf.js";import{a as B}from"./asyncComputed.0965b761.js";import{A as C}from"./Title.3c1e3215.js";import{A as D}from"./index.405725bc.js";import{A}from"./index.1264fd13.js";import{C as N}from"./Card.5565f82c.js";import"./Form.44f65f2e.js";import"./hasIn.97837ffd.js";import"./popupNotifcation.b64a50c0.js";import"./index.cf4c23b9.js";import"./record.94768b55.js";import"./pubsub.2e2e587a.js";import"./Base.bee70dae.js";import"./Typography.8ed5e18a.js";import"./TabPane.a9c45f7a.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="1afa0e92-8c64-4851-96b9-70c0c5a2afaa",t._sentryDebugIdIdentifier="sentry-dbid-1afa0e92-8c64-4851-96b9-70c0c5a2afaa")}catch{}})();const z={key:1},M={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},Z=g({__name:"Billing",setup(t){const n=y().params.organizationId,{loading:f,result:m}=B(()=>v.get(n));_(()=>{location.search.includes("upgrade")&&c.showNewMessage("I want to upgrade my plan")});const u=()=>c.showNewMessage("I want to upgrade my plan");return(T,V)=>e(f)?(d(),w(e(I),{key:0})):(d(),b("div",z,[a(e(D),{justify:"space-between",align:"center"},{default:o(()=>[a(e(C),{level:3},{default:o(()=>[l("Current plan")]),_:1})]),_:1}),a(e(A),{style:{"margin-top":"0"}}),a(e(N),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(h),{onClick:u},{default:o(()=>[l("Upgrade")]),_:1})]),default:o(()=>{var s,i,p;return[x("div",M,k((p=(i=(s=e(m))==null?void 0:s.billingMetadata)==null?void 0:i.plan)!=null?p:"No active plan"),1)]}),_:1})]))}});export{Z as default};
//# sourceMappingURL=Billing.1bb540f1.js.map
