import{S as p}from"./Sidebar.d0176ff3.js";import{_ as c}from"./Navbar.vue_vue_type_script_setup_true_lang.f0e39c34.js";import{F as l,G as d,H as u}from"./icons.fbbc5318.js";import{d as b,eA as f,J as g,a as _,b as y,c as v,w as e,f as a}from"./outputWidgets.541a6a3f.js";import{a as w}from"./asyncComputed.6496ca6b.js";import"./console.7080c244.js";import{O as z}from"./organization.8c5c9dd0.js";import"./index.56c0102f.js";import{B as h}from"./BaseLayout.5761ab4f.js";import"./Tooltip.b122611e.js";import"./logo.084e5d7c.js";import"./index.07910c0e.js";import"./Title.3011141f.js";import"./index.33fb7a48.js";import"./index.7fb7f882.js";import"./index.1b1480b6.js";import"./Form.2a9acb85.js";import"./index.5d5870f2.js";import"./dayjs.03d6e1d3.js";import"./index.f20ad580.js";import"./index.d89692b2.js";import"./TabPane.40396dd5.js";import"./index.ef35da09.js";import"./index.c3edc651.js";import"./index.dda022dd.js";import"./index.1797b918.js";import"./index.7f86f9a3.js";import"./index.68ffc7e6.js";import"./index.3cff0676.js";import"./gateway.647cec74.js";import"./activeRecord.867c40fa.js";import"./pubsub.8482a29f.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="3c783874-6c43-4c1f-9f34-12494a251d96",o._sentryDebugIdIdentifier="sentry-dbid-3c783874-6c43-4c1f-9f34-12494a251d96")}catch{}})();const eo=b({__name:"Organization",setup(o){const i=f().params.organizationId,{result:r}=w(()=>z.get(i)),n=g(()=>r.value?[{label:"My organizations",path:"/organizations"},{label:r.value.name,path:`/organizations/${r.value.id}`}]:void 0),m=[{name:"Organization",items:[{name:"Projects",icon:l,path:"projects"},{name:"Members",icon:d,path:"members"},{name:"Billing",icon:u,path:"billing",unavailable:!0}]}];return(I,B)=>{const s=_("router-view");return y(),v(h,null,{navbar:e(()=>[a(c,{breadcrumb:n.value},null,8,["breadcrumb"])]),sidebar:e(()=>[a(p,{class:"sidebar",sections:m})]),content:e(()=>[a(s)]),_:1})}}});export{eo as default};
//# sourceMappingURL=Organization.db820874.js.map
