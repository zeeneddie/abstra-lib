import{S as p}from"./Sidebar.c55d9bdb.js";import{_ as c}from"./Navbar.vue_vue_type_script_setup_true_lang.6dd24ffa.js";import{G as d,H as l,I as u}from"./icons.069bc807.js";import{d as b,ez as f,F as g,a as _,b as y,c as v,w as t,f as r}from"./outputWidgets.c5bb0ffd.js";import{a as z}from"./asyncComputed.01a998b0.js";import"./router.349f1a13.js";import"./jwt-decode.esm.74bd4619.js";import"./index.8e24d5f4.js";import{O as w}from"./organization.7e8dad2b.js";import{B as I}from"./BaseLayout.c47a2c84.js";import"./index.66cc3f55.js";import"./logo.084e5d7c.js";import"./Text.fa2a0c37.js";import"./index.8cae0c0f.js";import"./FormItem.bf725b43.js";import"./hasIn.8dd71763.js";import"./storage.29370dcf.js";import"./index.09d2601c.js";import"./index.cf4c23b9.js";import"./record.0052787e.js";import"./pubsub.4dcc4eda.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="3e1fd91e-5ed6-454a-9630-79a7b28a444a",o._sentryDebugIdIdentifier="sentry-dbid-3e1fd91e-5ed6-454a-9630-79a7b28a444a")}catch{}})();const K=b({__name:"Organization",setup(o){const n=f().params.organizationId,{result:a}=z(()=>w.get(n)),i=g(()=>a.value?[{label:"My organizations",path:"/organizations"},{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:d,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:u,path:"billing"}]}];return(h,B)=>{const m=_("router-view");return y(),v(I,null,{navbar:t(()=>[r(c,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(p,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{K as default};
//# sourceMappingURL=Organization.ecf8e826.js.map
