import{S as p}from"./Sidebar.de65adde.js";import{_ as c}from"./Navbar.vue_vue_type_script_setup_true_lang.8629f178.js";import{u as d,v as l,x as u}from"./icons.eae3993a.js";import{d as b,eB as f,G as g,a as _,b as y,c as v,w as t,f as r}from"./outputWidgets.bf2ccc30.js";import{a as w}from"./asyncComputed.89463d98.js";import"./router.724280b3.js";import{O as z}from"./organization.c70067bd.js";import"./columns.6b6e9690.js";import{B as h}from"./BaseLayout.72adb649.js";import"./Tooltip.0c556cb5.js";import"./logo.084e5d7c.js";import"./index.b5e54988.js";import"./transButton.4ff5a2f3.js";import"./Text.733c8136.js";import"./Base.08a90b2d.js";import"./Title.b201b493.js";import"./index.99b6e0a0.js";import"./gateway.e97424ce.js";import"./record.72c168c7.js";import"./pubsub.4417aa45.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="e3fa8473-1d5c-4a18-9129-dd8fa4f8e3b6",e._sentryDebugIdIdentifier="sentry-dbid-e3fa8473-1d5c-4a18-9129-dd8fa4f8e3b6")}catch{}})();const J=b({__name:"Organization",setup(e){const n=f().params.organizationId,{result:a}=w(()=>z.get(n)),i=g(()=>a.value?[{label:"My organizations",path:"/organizations"},{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:d,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:u,path:"billing",unavailable:!0}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:t(()=>[r(c,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(p,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{J as default};
//# sourceMappingURL=Organization.a3d24d20.js.map
