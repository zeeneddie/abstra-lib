import{S as p}from"./Sidebar.790fde0b.js";import{_ as c}from"./Navbar.vue_vue_type_script_setup_true_lang.725f8738.js";import{G as l,H as u,I as d}from"./icons.4de3900f.js";import{d as b,eA as f,J as g,a as _,b as y,c as v,w as t,f as r}from"./outputWidgets.b8e3fbc0.js";import{a as w}from"./asyncComputed.977b7d3a.js";import"./router.c0f681d7.js";import{O as z}from"./organization.872564db.js";import"./index.c28e38ab.js";import{B as h}from"./BaseLayout.8874d2af.js";import"./Tooltip.3940fc57.js";import"./logo.084e5d7c.js";import"./index.364876d6.js";import"./Title.b922ff42.js";import"./index.5ca55868.js";import"./index.35048621.js";import"./index.b9764f4b.js";import"./gateway.fb1f3fe6.js";import"./activeRecord.407da188.js";import"./pubsub.dbd75de9.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="1320369a-011f-40e4-ae4c-c51b07e34514",e._sentryDebugIdIdentifier="sentry-dbid-1320369a-011f-40e4-ae4c-c51b07e34514")}catch{}})();const q=b({__name:"Organization",setup(e){const n=f().params.organizationId,{result:a}=w(()=>z.get(n)),i=g(()=>a.value?[{label:"My organizations",path:"/organizations"},{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:l,path:"projects"},{name:"Members",icon:u,path:"members"},{name:"Billing",icon:d,path:"billing",unavailable:!0}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:t(()=>[r(c,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(p,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{q as default};
//# sourceMappingURL=Organization.de79d43e.js.map
