import{S as d}from"./Sidebar.dd509ac9.js";import{_ as u}from"./Navbar.vue_vue_type_script_setup_true_lang.b2f0d611.js";import{L as b,M as f,N as g}from"./icons.0bc7085f.js";import{d as _,eB as v,H as s,a as y,b as w,c as z,w as i,f as r}from"./outputWidgets.cd9a7023.js";import{a as h}from"./asyncComputed.d485b66f.js";import"./router.3892c6ef.js";import"./index.9161dd13.js";import{O as I}from"./organization.d3464626.js";import{B}from"./BaseLayout.a1f9bd3c.js";import"./index.d8200973.js";import"./logo.084e5d7c.js";import"./Text.8af9010b.js";import"./Base.db9f67df.js";import"./Typography.686aa668.js";import"./index.9bbb791e.js";import"./ArrowRightOutlined.08fa31dd.js";import"./index.95c89dbd.js";import"./Form.6eabd32b.js";import"./hasIn.5fdc0bbb.js";import"./popupNotifcation.d4f20194.js";import"./index.cf4c23b9.js";import"./record.4940789d.js";import"./pubsub.56df9c23.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="4aaa2461-eac9-4f7e-9b53-f62b7468fe89",a._sentryDebugIdIdentifier="sentry-dbid-4aaa2461-eac9-4f7e-9b53-f62b7468fe89")}catch{}})();const U=_({__name:"Organization",setup(a){const n=v().params.organizationId,{result:t}=h(()=>I.get(n)),m=s(()=>t.value?[{label:"My organizations",path:"/organizations"},{label:t.value.name,path:`/organizations/${t.value.id}`}]:void 0),p=s(()=>{var e;return(e=t.value)==null?void 0:e.billingMetadata}),l=[{name:"Organization",items:[{name:"Projects",icon:b,path:"projects"},{name:"Editors",icon:f,path:"editors"},{name:"Billing",icon:g,path:"billing"}]}];return(e,M)=>{const c=y("router-view");return w(),z(B,null,{navbar:i(()=>[r(u,{breadcrumb:m.value,"billing-metadata":p.value},null,8,["breadcrumb","billing-metadata"])]),sidebar:i(()=>[r(d,{class:"sidebar",sections:l})]),content:i(()=>[r(c)]),_:1})}}});export{U as default};
//# sourceMappingURL=Organization.00959d67.js.map
