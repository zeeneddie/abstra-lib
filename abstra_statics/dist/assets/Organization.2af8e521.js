import{S as p}from"./Sidebar.f308f38a.js";import{_ as c}from"./Navbar.vue_vue_type_script_setup_true_lang.712eb5bb.js";import{E as d,F as l,G as u}from"./icons.43fab4f0.js";import{d as b,ey as f,H as g,a as _,b as y,c as v,w as t,f as r}from"./registerWidgets.dc9f1313.js";import{a as w}from"./asyncComputed.b23fa538.js";import"./gateway.edd1f42a.js";import{O as z}from"./organization.b2f5863f.js";import"./index.5939d926.js";import{B as h}from"./BaseLayout.b7855ada.js";import"./Tooltip.ef66c1a8.js";import"./logo.084e5d7c.js";import"./passwordlessManager.bb9c7ffc.js";import"./pubsub.358cbe19.js";import"./storage.44e69db3.js";import"./index.809c009e.js";import"./Title.aac0de3b.js";import"./index.a5ea279e.js";import"./index.8fa60cd0.js";import"./activeRecord.9995b4c7.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="13e77da0-ac81-45bf-9710-0208d943cb6e",e._sentryDebugIdIdentifier="sentry-dbid-13e77da0-ac81-45bf-9710-0208d943cb6e")}catch{}})();const A=b({__name:"Organization",setup(e){const n=f().params.organizationId,{result:a}=w(()=>z.get(n)),i=g(()=>a.value?[{label:"My organizations",path:"/organizations"},{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:d,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:u,path:"billing",unavailable:!0}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:t(()=>[r(c,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(p,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{A as default};
//# sourceMappingURL=Organization.2af8e521.js.map
