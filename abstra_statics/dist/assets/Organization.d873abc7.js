import{S as p}from"./Sidebar.9ba64149.js";import{_ as d}from"./Navbar.vue_vue_type_script_setup_true_lang.ac1403b4.js";import{u as c,v as l,x as u}from"./icons.93dd91eb.js";import{d as b,eB as f,G as g,a as _,b as y,c as v,w as t,f as r}from"./outputWidgets.4ac7ed6a.js";import{a as w}from"./asyncComputed.0dba16b3.js";import"./router.9d27f31e.js";import"./index.27206526.js";import{O as z}from"./organization.76fe5496.js";import{B as h}from"./BaseLayout.4d3fc0db.js";import"./Tooltip.ab80c44c.js";import"./logo.084e5d7c.js";import"./index.04ccfb18.js";import"./transButton.b0dd5689.js";import"./Text.66a7fd0c.js";import"./Base.3cb224ee.js";import"./Title.0d429667.js";import"./index.b78bddc0.js";import"./record.f2687d65.js";import"./pubsub.8b43534d.js";import"./gateway.474f9d7a.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="6591a17d-53f4-424d-8db1-29935b9f48ed",o._sentryDebugIdIdentifier="sentry-dbid-6591a17d-53f4-424d-8db1-29935b9f48ed")}catch{}})();const J=b({__name:"Organization",setup(o){const n=f().params.organizationId,{result:a}=w(()=>z.get(n)),i=g(()=>a.value?[{label:"My organizations",path:"/organizations"},{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:c,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:u,path:"billing",unavailable:!0}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:t(()=>[r(d,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(p,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{J as default};
//# sourceMappingURL=Organization.d873abc7.js.map
