import{S as m}from"./Sidebar.f5a0d15c.js";import{_ as p}from"./Navbar.vue_vue_type_script_setup_true_lang.0282f6f4.js";import{G as d,H as l,I as u}from"./icons.3ee16103.js";import{d as b,eB as f,H as g,a as _,b as y,c as v,w as t,f as r}from"./outputWidgets.1f5e37db.js";import{a as w}from"./asyncComputed.b6d33567.js";import"./router.0f91c45d.js";import"./index.2108931e.js";import{O as z}from"./organization.af2f77db.js";import{B as I}from"./BaseLayout.7864d5b1.js";import"./index.2c308e51.js";import"./logo.084e5d7c.js";import"./Text.7209cdf6.js";import"./Base.8111e6c8.js";import"./index.0e9b9c18.js";import"./FormItem.35b801a2.js";import"./hasIn.8ed1a5a4.js";import"./index.cf4c23b9.js";import"./record.a20dd19d.js";import"./pubsub.82b0dd97.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="32e8a9a5-2ce6-4cfb-b79f-d911ca1a63cc",o._sentryDebugIdIdentifier="sentry-dbid-32e8a9a5-2ce6-4cfb-b79f-d911ca1a63cc")}catch{}})();const F=b({__name:"Organization",setup(o){const n=f().params.organizationId,{result:a}=w(()=>z.get(n)),i=g(()=>a.value?[{label:"My organizations",path:"/organizations"},{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:d,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:u,path:"billing"}]}];return(h,B)=>{const c=_("router-view");return y(),v(I,null,{navbar:t(()=>[r(p,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(m,{class:"sidebar",sections:s})]),content:t(()=>[r(c)]),_:1})}}});export{F as default};
//# sourceMappingURL=Organization.16667dc8.js.map
