import{S as p}from"./Sidebar.d06fa747.js";import{_ as c}from"./Navbar.vue_vue_type_script_setup_true_lang.9e593187.js";import{G as d,H as l,I as u}from"./icons.17139281.js";import{d as b,ez as f,F as g,a as _,b as y,c as v,w as a,f as r}from"./outputWidgets.dbf31506.js";import{a as z}from"./asyncComputed.22d83ebd.js";import"./router.50e0effa.js";import"./jwt-decode.esm.74bd4619.js";import"./index.26ac7d5a.js";import{O as w}from"./organization.b0b9b308.js";import{B as I}from"./BaseLayout.d8f51198.js";import"./index.a66cb776.js";import"./logo.084e5d7c.js";import"./Text.44b29478.js";import"./index.a9b883ec.js";import"./FormItem.14aec113.js";import"./hasIn.cb997ddd.js";import"./storage.38bf401b.js";import"./index.c87831d1.js";import"./index.cf4c23b9.js";import"./record.d3b10a69.js";import"./pubsub.df3ed44c.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="6990e90a-7777-494f-8676-0d441598b9f9",o._sentryDebugIdIdentifier="sentry-dbid-6990e90a-7777-494f-8676-0d441598b9f9")}catch{}})();const K=b({__name:"Organization",setup(o){const n=f().params.organizationId,{result:t}=z(()=>w.get(n)),i=g(()=>t.value?[{label:"My organizations",path:"/organizations"},{label:t.value.name,path:`/organizations/${t.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:d,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:u,path:"billing"}]}];return(h,B)=>{const m=_("router-view");return y(),v(I,null,{navbar:a(()=>[r(c,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:a(()=>[r(p,{class:"sidebar",sections:s})]),content:a(()=>[r(m)]),_:1})}}});export{K as default};
//# sourceMappingURL=Organization.cbde4027.js.map
