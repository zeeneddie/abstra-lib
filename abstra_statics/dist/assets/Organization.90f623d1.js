import{S as p}from"./Sidebar.041e12c7.js";import{_ as c}from"./Navbar.vue_vue_type_script_setup_true_lang.0ccb2e11.js";import{E as d,F as l,G as u}from"./icons.31e4fa46.js";import{d as b,eB as f,H as g,a as _,b as y,c as v,w as t,f as r}from"./outputWidgets.6830fc2d.js";import{a as w}from"./asyncComputed.46a733c1.js";import"./router.c745a3c2.js";import"./index.fddb9e1e.js";import{O as z}from"./organization.fc8c0ca6.js";import{B as h}from"./BaseLayout.950bd7b6.js";import"./index.ec7fc193.js";import"./logo.084e5d7c.js";import"./Text.b2a17f23.js";import"./Base.e8ab0cc0.js";import"./index.5ed48f82.js";import"./FormItem.278e4518.js";import"./hasIn.48daad41.js";import"./index.cf4c23b9.js";import"./record.416df660.js";import"./pubsub.6d4f7540.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="26ca0d20-ed04-4126-9be8-78cb10d59daf",o._sentryDebugIdIdentifier="sentry-dbid-26ca0d20-ed04-4126-9be8-78cb10d59daf")}catch{}})();const A=b({__name:"Organization",setup(o){const n=f().params.organizationId,{result:a}=w(()=>z.get(n)),i=g(()=>a.value?[{label:"My organizations",path:"/organizations"},{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:d,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:u,path:"billing"}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:t(()=>[r(c,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(p,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{A as default};
//# sourceMappingURL=Organization.90f623d1.js.map
