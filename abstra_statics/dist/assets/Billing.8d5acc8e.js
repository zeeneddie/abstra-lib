import{d as g,eB as y,o as _,u as e,b as p,c as b,eu as w,f as a,w as o,bf as I,aq as l,bF as x,e as h,eE as k}from"./outputWidgets.36438843.js";import{I as f}from"./router.dee1064a.js";import"./index.ec4ce82c.js";import{O as B}from"./organization.acf55b7c.js";import{a as C}from"./asyncComputed.337ea25d.js";import{A as v}from"./Title.06965b70.js";import{A}from"./index.173d5349.js";import{A as D}from"./index.eec227d3.js";import{C as N}from"./Card.5a1294b3.js";import"./Form.89631493.js";import"./hasIn.0e346df9.js";import"./popupNotifcation.a4e64d79.js";import"./index.cf4c23b9.js";import"./record.84099288.js";import"./pubsub.0ad28dde.js";import"./Text.0a4c76ae.js";import"./TabPane.3879967a.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="eb4965f3-2919-4f72-8922-fbe6aaf55704",t._sentryDebugIdIdentifier="sentry-dbid-eb4965f3-2919-4f72-8922-fbe6aaf55704")}catch{}})();const z={key:1},M={style:{display:"flex","justify-content":"flex-start","font-size":"24px"}},Y=g({__name:"Billing",setup(t){const r=y().params.organizationId,{loading:m,result:u}=C(()=>B.get(r));_(()=>{location.search.includes("upgrade")&&f.showNewMessage("I want to upgrade my plan")});const c=()=>f.showNewMessage("I want to upgrade my plan");return(E,V)=>e(m)?(p(),b(e(I),{key:0})):(p(),w("div",z,[a(e(A),{justify:"space-between",align:"center"},{default:o(()=>[a(e(v),{level:3},{default:o(()=>[l("Current plan")]),_:1})]),_:1}),a(e(D),{style:{"margin-top":"0"}}),a(e(N),{style:{width:"300px"},title:"Plan"},{extra:o(()=>[a(e(x),{onClick:c},{default:o(()=>[l("Upgrade")]),_:1})]),default:o(()=>{var s,i,d;return[h("div",M,k((d=(i=(s=e(u))==null?void 0:s.billingMetadata)==null?void 0:i.plan)!=null?d:"No active plan"),1)]}),_:1})]))}});export{Y as default};
//# sourceMappingURL=Billing.8d5acc8e.js.map