import{d as g,eA as y,o as b,u as e,b as p,c as _,eu as w,f as a,w as o,bf as I,aq as l,bE as x,e as h,eD as k}from"./outputWidgets.6d35c6b1.js";import{I as c}from"./router.af98b18b.js";import"./index.cf4ed539.js";import{O as A}from"./organization.6f518302.js";import{a as C}from"./asyncComputed.ecb54415.js";import{A as D}from"./Title.c1aa2d66.js";import{A as v}from"./index.955dc47e.js";import{A as B}from"./index.8e12a908.js";import{C as N}from"./Card.3a07c675.js";import"./Form.1eab882d.js";import"./hasIn.7146681e.js";import"./popupNotifcation.d4387845.js";import"./index.cf4c23b9.js";import"./record.dd1c9786.js";import"./pubsub.cebd46a9.js";import"./Text.3b2ffaec.js";import"./index.0eab68a8.js";import"./TabPane.d8e98a9c.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="d24dd204-585b-4b0d-bfac-48b53d7140d0",t._sentryDebugIdIdentifier="sentry-dbid-d24dd204-585b-4b0d-bfac-48b53d7140d0")}catch{}})();const z={key:1},M={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},Z=g({__name:"Billing",setup(t){const r=y().params.organizationId,{loading:f,result:m}=C(()=>A.get(r));b(()=>{location.search.includes("upgrade")&&c.showNewMessage("I want to upgrade my plan")});const u=()=>c.showNewMessage("I want to upgrade my plan");return(E,V)=>e(f)?(p(),_(e(I),{key:0})):(p(),w("div",z,[a(e(v),{justify:"space-between",align:"center"},{default:o(()=>[a(e(D),{level:3},{default:o(()=>[l("Current plan")]),_:1})]),_:1}),a(e(B),{style:{"margin-top":"0"}}),a(e(N),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(x),{onClick:u},{default:o(()=>[l("Upgrade")]),_:1})]),default:o(()=>{var s,i,d;return[h("div",M,k((d=(i=(s=e(m))==null?void 0:s.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{Z as default};
//# sourceMappingURL=Billing.aed14804.js.map
