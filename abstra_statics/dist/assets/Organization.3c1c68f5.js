import{S as l}from"./Sidebar.f96ca77b.js";import{_ as u}from"./Navbar.vue_vue_type_script_setup_true_lang.7e381f99.js";import{L as b,M as f,N as g}from"./icons.14bde68f.js";import{d as _,eB as v,H as s,a as y,b as w,c as z,w as i,f as r}from"./outputWidgets.45c7404b.js";import{a as h}from"./asyncComputed.b6502bd0.js";import"./router.2f3e9c3c.js";import"./index.bf58e34e.js";import{O as I}from"./organization.3ce33a7e.js";import{B}from"./BaseLayout.9491c0c7.js";import"./index.55b8a0fc.js";import"./logo.084e5d7c.js";import"./Text.9d46918a.js";import"./Base.7d2c537c.js";import"./Typography.1a23e608.js";import"./index.e75ded50.js";import"./ArrowRightOutlined.08fa31dd.js";import"./index.0234f8f9.js";import"./Form.05416e25.js";import"./hasIn.e0b0d824.js";import"./popupNotifcation.0c3205fd.js";import"./index.cf4c23b9.js";import"./record.7138611e.js";import"./pubsub.fbad3310.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="23cb58e0-5401-4ca4-885d-6ee8ab13df04",t._sentryDebugIdIdentifier="sentry-dbid-23cb58e0-5401-4ca4-885d-6ee8ab13df04")}catch{}})();const U=_({__name:"Organization",setup(t){const n=v().params.organizationId,{result:a}=h(()=>I.get(n)),m=s(()=>a.value?[{label:"My organizations",path:"/organizations"},{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),p=s(()=>{var e;return(e=a.value)==null?void 0:e.billingMetadata}),c=[{name:"Organization",items:[{name:"Projects",icon:b,path:"projects"},{name:"Editors",icon:f,path:"editors"},{name:"Billing",icon:g,path:"billing"}]}];return(e,M)=>{const d=y("router-view");return w(),z(B,null,{navbar:i(()=>[r(u,{breadcrumb:m.value,"billing-metadata":p.value},null,8,["breadcrumb","billing-metadata"])]),sidebar:i(()=>[r(l,{class:"sidebar",sections:c})]),content:i(()=>[r(d)]),_:1})}}});export{U as default};
//# sourceMappingURL=Organization.3c1c68f5.js.map
