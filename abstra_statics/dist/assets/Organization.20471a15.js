import{S as c}from"./Sidebar.70e63e4b.js";import{_ as p}from"./Navbar.vue_vue_type_script_setup_true_lang.61617ae7.js";import{G as d,H as l,I as u}from"./icons.a9f49c8b.js";import{d as b,eA as f,J as g,a as _,b as y,c as v,w as t,f as r}from"./outputWidgets.71232878.js";import{a as w}from"./asyncComputed.5ac583f6.js";import"./router.5f78a540.js";import{O as z}from"./organization.72548cd6.js";import"./index.17e3eb9b.js";import{B as h}from"./BaseLayout.de7ee3c9.js";import"./Tooltip.e5efc7f4.js";import"./logo.084e5d7c.js";import"./index.ee1d4643.js";import"./Title.31a61e19.js";import"./index.3f649a40.js";import"./index.a727d970.js";import"./index.398ef670.js";import"./gateway.97c42315.js";import"./activeRecord.e2c43405.js";import"./pubsub.ab8812a2.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="6c94b7d6-a7df-481c-93f5-d82c54edc867",o._sentryDebugIdIdentifier="sentry-dbid-6c94b7d6-a7df-481c-93f5-d82c54edc867")}catch{}})();const q=b({__name:"Organization",setup(o){const n=f().params.organizationId,{result:a}=w(()=>z.get(n)),i=g(()=>a.value?[{label:"My organizations",path:"/organizations"},{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:d,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:u,path:"billing",unavailable:!0}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:t(()=>[r(p,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(c,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{q as default};
//# sourceMappingURL=Organization.20471a15.js.map
