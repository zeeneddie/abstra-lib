import{d as g,eB as y,o as _,u as e,b as p,c as b,eu as w,f as a,w as o,bf as I,aq as l,bF as x,e as h,eE as k}from"./outputWidgets.80ed7f0a.js";import{I as c}from"./router.16cafb9e.js";import"./index.0eabcebf.js";import{O as B}from"./organization.b29407b4.js";import{a as C}from"./asyncComputed.1ae83221.js";import{A as v}from"./Title.f10dd7b0.js";import{A}from"./index.420a0baf.js";import{A as D}from"./index.c39ab52b.js";import{C as N}from"./Card.c4ebac4d.js";import"./Form.946c98f3.js";import"./hasIn.df51f741.js";import"./popupNotifcation.627aa0fa.js";import"./index.cf4c23b9.js";import"./record.a42c79a7.js";import"./pubsub.7b2bb88b.js";import"./Text.f4655682.js";import"./TabPane.3dc77e5c.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="ac5a916f-c77d-4263-9b42-7f3755c6a0ba",t._sentryDebugIdIdentifier="sentry-dbid-ac5a916f-c77d-4263-9b42-7f3755c6a0ba")}catch{}})();const z={key:1},M={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},Y=g({__name:"Billing",setup(t){const r=y().params.organizationId,{loading:f,result:m}=C(()=>B.get(r));_(()=>{location.search.includes("upgrade")&&c.showNewMessage("I want to upgrade my plan")});const u=()=>c.showNewMessage("I want to upgrade my plan");return(E,V)=>e(f)?(p(),b(e(I),{key:0})):(p(),w("div",z,[a(e(A),{justify:"space-between",align:"center"},{default:o(()=>[a(e(v),{level:3},{default:o(()=>[l("Current plan")]),_:1})]),_:1}),a(e(D),{style:{"margin-top":"0"}}),a(e(N),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(x),{onClick:u},{default:o(()=>[l("Upgrade")]),_:1})]),default:o(()=>{var s,i,d;return[h("div",M,k((d=(i=(s=e(m))==null?void 0:s.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{Y as default};
//# sourceMappingURL=Billing.6e7373ed.js.map
