import{S as c}from"./Sidebar.7081c36b.js";import{_ as p}from"./Navbar.vue_vue_type_script_setup_true_lang.49949a9a.js";import{u as d,v as l,x as u}from"./icons.1a1dc210.js";import{d as b,eB as f,G as g,a as _,b as y,c as v,w as t,f as r}from"./outputWidgets.a5fcf389.js";import{a as w}from"./asyncComputed.b7d3265e.js";import"./router.8a74f04b.js";import"./index.b67da7e9.js";import{O as z}from"./organization.269baf36.js";import{B as h}from"./BaseLayout.19687f5a.js";import"./Tooltip.a8a96b65.js";import"./logo.084e5d7c.js";import"./index.a675a1a6.js";import"./transButton.fc314012.js";import"./Text.d2260f67.js";import"./Base.175f3ec4.js";import"./Title.42ad4bfb.js";import"./index.39083dd8.js";import"./record.e2e84f62.js";import"./pubsub.903f7e54.js";import"./gateway.5878b159.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="42c49ece-b8ae-43c8-a3cd-d604b76abacc",e._sentryDebugIdIdentifier="sentry-dbid-42c49ece-b8ae-43c8-a3cd-d604b76abacc")}catch{}})();const J=b({__name:"Organization",setup(e){const n=f().params.organizationId,{result:o}=w(()=>z.get(n)),i=g(()=>o.value?[{label:"My organizations",path:"/organizations"},{label:o.value.name,path:`/organizations/${o.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:d,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:u,path:"billing",unavailable:!0}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:t(()=>[r(p,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(c,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{J as default};
//# sourceMappingURL=Organization.6f14242f.js.map
