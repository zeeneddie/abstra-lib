import{S as p}from"./Sidebar.22039000.js";import{_ as c}from"./Navbar.vue_vue_type_script_setup_true_lang.3ef3f270.js";import{G as d,H as l,I as u}from"./icons.2ee60219.js";import{d as b,ez as f,H as g,a as _,b as y,c as v,w as t,f as r}from"./outputWidgets.4420c31f.js";import{a as w}from"./asyncComputed.937eb3b8.js";import"./router.141c8be7.js";import{O as z}from"./organization.9fa0a734.js";import"./columns.d0453565.js";import{B as h}from"./BaseLayout.7e15c8e2.js";import"./Tooltip.0c87c310.js";import"./logo.084e5d7c.js";import"./index.6f566923.js";import"./Title.f4c9dd29.js";import"./index.adf86569.js";import"./index.7712b032.js";import"./index.1ba1c343.js";import"./gateway.c8298b74.js";import"./activeRecord.a89b1253.js";import"./pubsub.1ac087cf.js";import"./index.f4ac7424.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="db218cb4-2777-4523-b1e9-d0d87080a28a",o._sentryDebugIdIdentifier="sentry-dbid-db218cb4-2777-4523-b1e9-d0d87080a28a")}catch{}})();const J=b({__name:"Organization",setup(o){const n=f().params.organizationId,{result:a}=w(()=>z.get(n)),i=g(()=>a.value?[{label:"My organizations",path:"/organizations"},{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:d,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:u,path:"billing",unavailable:!0}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:t(()=>[r(c,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(p,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{J as default};
//# sourceMappingURL=Organization.9e888f54.js.map
