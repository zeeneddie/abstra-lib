import{S as p}from"./Sidebar.2491f3c4.js";import{_ as d}from"./Navbar.vue_vue_type_script_setup_true_lang.e71fa429.js";import{F as c,G as l,H as u}from"./icons.63405824.js";import{d as b,eB as f,G as g,a as _,b as y,c as v,w as a,f as r}from"./outputWidgets.562826ac.js";import{a as w}from"./asyncComputed.df2d9552.js";import"./router.e5ce2c0b.js";import{O as z}from"./organization.ab77399d.js";import"./columns.29d297cf.js";import{B as h}from"./BaseLayout.544f6749.js";import"./Tooltip.558cd30c.js";import"./logo.084e5d7c.js";import"./Text.712cfc26.js";import"./Base.bf8dc0b1.js";import"./FormItem.fc4e7da8.js";import"./transButton.17480f27.js";import"./index.ab0f4a56.js";import"./Title.f7aaa881.js";import"./index.82606edc.js";import"./gateway.c80b0686.js";import"./activeRecord.6bb1bd7f.js";import"./pubsub.7185b91b.js";import"./index.cf4c23b9.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="389530d0-29ad-4575-bd64-8983b70dd1d3",o._sentryDebugIdIdentifier="sentry-dbid-389530d0-29ad-4575-bd64-8983b70dd1d3")}catch{}})();const Q=b({__name:"Organization",setup(o){const n=f().params.organizationId,{result:t}=w(()=>z.get(n)),i=g(()=>t.value?[{label:"My organizations",path:"/organizations"},{label:t.value.name,path:`/organizations/${t.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:c,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:u,path:"billing",unavailable:!0}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:a(()=>[r(d,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:a(()=>[r(p,{class:"sidebar",sections:s})]),content:a(()=>[r(m)]),_:1})}}});export{Q as default};
//# sourceMappingURL=Organization.3f0e256c.js.map
