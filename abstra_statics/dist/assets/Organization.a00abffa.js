import{_ as c}from"./Sidebar.vue_vue_type_script_setup_true_lang.6ce8bf68.js";import{_ as p}from"./Navbar.vue_vue_type_script_setup_true_lang.d88327da.js";import{G as d,H as l,I as u}from"./icons.99d10079.js";import{d as f,eB as b,G as _,a as g,b as y,c as v,w as t,f as r}from"./outputWidgets.308fc26e.js";import{a as w}from"./asyncComputed.7ba10fe2.js";import"./authorManager.61b245b2.js";import"./index.61e3d21d.js";import{O as z}from"./organization.9fc338e8.js";import{B as I}from"./BaseLayout.df0b4879.js";import"./index.6eb62518.js";import"./logo.084e5d7c.js";import"./Text.e9c2c18e.js";import"./index.a6ccaaa8.js";import"./index.cf4c23b9.js";import"./record.1ea6e7e1.js";import"./pubsub.d9c6c339.js";import"./gateway.8216c3fe.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="65ad215c-7702-431f-ad66-fedfad871447",a._sentryDebugIdIdentifier="sentry-dbid-65ad215c-7702-431f-ad66-fedfad871447")}catch{}})();const A=f({__name:"Organization",setup(a){const n=b().params.organizationId,{result:o}=w(()=>z.get(n)),i=_(()=>o.value?[{label:"My organizations",path:"/organizations"},{label:o.value.name,path:`/organizations/${o.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:d,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:u,path:"billing",unavailable:!0}]}];return(h,B)=>{const m=g("router-view");return y(),v(I,null,{navbar:t(()=>[r(p,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(c,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{A as default};
//# sourceMappingURL=Organization.a00abffa.js.map