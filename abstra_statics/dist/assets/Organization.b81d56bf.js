import{S as p}from"./Sidebar.fc2c052a.js";import{_ as c}from"./Navbar.vue_vue_type_script_setup_true_lang.9143ace3.js";import{M as d,N as l,O as u}from"./icons.c4e300ba.js";import{d as b,eB as f,H as g,a as _,b as y,c as v,w as r,f as a}from"./outputWidgets.ef7f3407.js";import{a as w}from"./asyncComputed.352c228a.js";import"./router.bb5913c7.js";import"./index.e05ba064.js";import{O as z}from"./organization.34d46b4c.js";import{B as h}from"./BaseLayout.0bf732d1.js";import"./index.edf02e38.js";import"./logo.084e5d7c.js";import"./Text.361a5f7a.js";import"./Base.00784e3c.js";import"./Typography.56b07efe.js";import"./index.b9710cc4.js";import"./ArrowRightOutlined.08fa31dd.js";import"./Form.657b35f5.js";import"./hasIn.2b606bf1.js";import"./index.cf4c23b9.js";import"./record.2e6ff048.js";import"./pubsub.b4b207c2.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="531b5054-b26e-4294-8cff-574c266543b9",o._sentryDebugIdIdentifier="sentry-dbid-531b5054-b26e-4294-8cff-574c266543b9")}catch{}})();const K=b({__name:"Organization",setup(o){const n=f().params.organizationId,{result:e}=w(()=>z.get(n)),i=g(()=>e.value?[{label:"My organizations",path:"/organizations"},{label:e.value.name,path:`/organizations/${e.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:d,path:"projects"},{name:"Editors",icon:l,path:"editors"},{name:"Billing",icon:u,path:"billing"}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:r(()=>[a(c,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:r(()=>[a(p,{class:"sidebar",sections:s})]),content:r(()=>[a(m)]),_:1})}}});export{K as default};
//# sourceMappingURL=Organization.b81d56bf.js.map
