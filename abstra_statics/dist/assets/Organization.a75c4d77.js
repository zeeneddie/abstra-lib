import{S as p}from"./Sidebar.fbb0c388.js";import{_ as c}from"./Navbar.vue_vue_type_script_setup_true_lang.560db392.js";import{E as l,F as d,G as u}from"./icons.a104c4bd.js";import{d as b,ey as f,H as g,a as _,b as y,c as v,w as t,f as r}from"./registerWidgets.e6444af9.js";import{a as w}from"./asyncComputed.adafca03.js";import"./gateway.c88e2935.js";import{O as z}from"./organization.36814524.js";import"./index.5c484164.js";import{B as h}from"./BaseLayout.bd2dec19.js";import"./Tooltip.037aed24.js";import"./logo.084e5d7c.js";import"./passwordlessManager.00482f2f.js";import"./pubsub.46252dca.js";import"./storage.ec763cd7.js";import"./index.34dd766e.js";import"./index.dff04581.js";import"./Title.d6e4cb48.js";import"./index.a6391753.js";import"./index.930b7087.js";import"./activeRecord.156dfe51.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="b5a81f67-96f4-4d71-ae36-fa28b340aacc",a._sentryDebugIdIdentifier="sentry-dbid-b5a81f67-96f4-4d71-ae36-fa28b340aacc")}catch{}})();const J=b({__name:"Organization",setup(a){const n=f().params.organizationId,{result:e}=w(()=>z.get(n)),i=g(()=>e.value?[{label:"My organizations",path:"/organizations"},{label:e.value.name,path:`/organizations/${e.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:l,path:"projects"},{name:"Members",icon:d,path:"members"},{name:"Billing",icon:u,path:"billing",unavailable:!0}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:t(()=>[r(c,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(p,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{J as default};
//# sourceMappingURL=Organization.a75c4d77.js.map
