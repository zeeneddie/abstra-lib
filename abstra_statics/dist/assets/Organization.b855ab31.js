import{S as c}from"./Sidebar.fa2d2513.js";import{_ as p}from"./Navbar.vue_vue_type_script_setup_true_lang.b3ffdc0e.js";import{G as d,H as l,I as u}from"./icons.c37bd5be.js";import{d as b,ez as f,H as g,a as _,b as y,c as v,w as t,f as r}from"./outputWidgets.942e04a7.js";import{a as w}from"./asyncComputed.581a6d32.js";import"./router.88ac172f.js";import{O as z}from"./organization.bbf9b4b1.js";import"./columns.b249ad7a.js";import{B as h}from"./BaseLayout.d874b5ce.js";import"./Tooltip.77e4a250.js";import"./logo.084e5d7c.js";import"./index.a0056785.js";import"./Title.02f374d5.js";import"./index.90e879e1.js";import"./index.e7605f26.js";import"./index.6d3b437a.js";import"./gateway.c853ac2b.js";import"./activeRecord.c49c8827.js";import"./pubsub.c4874b0f.js";import"./index.f4ac7424.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="d45bf145-0a1c-4c9c-8e56-f789d2b4c008",o._sentryDebugIdIdentifier="sentry-dbid-d45bf145-0a1c-4c9c-8e56-f789d2b4c008")}catch{}})();const J=b({__name:"Organization",setup(o){const n=f().params.organizationId,{result:a}=w(()=>z.get(n)),i=g(()=>a.value?[{label:"My organizations",path:"/organizations"},{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:d,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:u,path:"billing",unavailable:!0}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:t(()=>[r(p,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(c,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{J as default};
//# sourceMappingURL=Organization.b855ab31.js.map
