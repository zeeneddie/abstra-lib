import{S as p}from"./Sidebar.407918a0.js";import{_ as c}from"./Navbar.vue_vue_type_script_setup_true_lang.f70b3ed6.js";import{G as d,H as l,I as u}from"./icons.a69fa9c8.js";import{d as b,ez as f,F as g,a as _,b as y,c as v,w as a,f as r}from"./outputWidgets.4d9ba3ef.js";import{a as z}from"./asyncComputed.f4677978.js";import"./router.679077c0.js";import"./jwt-decode.esm.74bd4619.js";import"./index.3025c580.js";import{O as w}from"./organization.0c45e039.js";import{B as I}from"./BaseLayout.bcc711ed.js";import"./index.c7c4284d.js";import"./logo.084e5d7c.js";import"./Text.cb3c74fa.js";import"./index.b40ff927.js";import"./FormItem.24b19ea4.js";import"./hasIn.1cdec4af.js";import"./storage.39df5cbf.js";import"./index.cb2c6e5c.js";import"./index.cf4c23b9.js";import"./record.4e413006.js";import"./pubsub.3bfcfc7f.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="8a6bfa70-7f27-4698-8080-5425c8298b29",o._sentryDebugIdIdentifier="sentry-dbid-8a6bfa70-7f27-4698-8080-5425c8298b29")}catch{}})();const K=b({__name:"Organization",setup(o){const n=f().params.organizationId,{result:t}=z(()=>w.get(n)),i=g(()=>t.value?[{label:"My organizations",path:"/organizations"},{label:t.value.name,path:`/organizations/${t.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:d,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:u,path:"billing"}]}];return(h,B)=>{const m=_("router-view");return y(),v(I,null,{navbar:a(()=>[r(c,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:a(()=>[r(p,{class:"sidebar",sections:s})]),content:a(()=>[r(m)]),_:1})}}});export{K as default};
//# sourceMappingURL=Organization.fcf4cc37.js.map