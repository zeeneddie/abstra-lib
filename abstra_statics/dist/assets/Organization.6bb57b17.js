import{S as p}from"./Sidebar.a5d1ca1c.js";import{_ as c}from"./Navbar.vue_vue_type_script_setup_true_lang.ab3d3f73.js";import{L as d,M as l,N as u}from"./icons.6b845aee.js";import{d as b,eB as f,H as g,a as _,b as y,c as v,w as t,f as r}from"./outputWidgets.6eec98ff.js";import{a as w}from"./asyncComputed.1526d434.js";import"./router.9c6f57ba.js";import"./index.cdb0f83d.js";import{O as z}from"./organization.f37fdd02.js";import{B as h}from"./BaseLayout.32375d8e.js";import"./index.c7f8a481.js";import"./logo.084e5d7c.js";import"./Text.fdd11fc0.js";import"./Base.f2e41c2f.js";import"./Typography.ec01cc4a.js";import"./index.6967ea34.js";import"./ArrowRightOutlined.08fa31dd.js";import"./Form.2af9c413.js";import"./hasIn.58de5617.js";import"./index.cf4c23b9.js";import"./record.3e6d2f52.js";import"./pubsub.e1022b3e.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="249553ad-b9c4-4b7a-a96e-70fe9296523f",o._sentryDebugIdIdentifier="sentry-dbid-249553ad-b9c4-4b7a-a96e-70fe9296523f")}catch{}})();const K=b({__name:"Organization",setup(o){const n=f().params.organizationId,{result:a}=w(()=>z.get(n)),i=g(()=>a.value?[{label:"My organizations",path:"/organizations"},{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:d,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:u,path:"billing"}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:t(()=>[r(c,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(p,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{K as default};
//# sourceMappingURL=Organization.6bb57b17.js.map
