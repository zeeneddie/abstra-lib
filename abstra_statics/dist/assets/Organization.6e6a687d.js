import{S as c}from"./Sidebar.a72ef7ad.js";import{_ as p}from"./Navbar.vue_vue_type_script_setup_true_lang.b01470c3.js";import{G as d,H as l,I as u}from"./icons.50cbdedb.js";import{d as b,eB as f,G as g,a as _,b as y,c as v,w as t,f as r}from"./outputWidgets.1fa697ec.js";import{a as w}from"./asyncComputed.75e390ac.js";import"./router.ea9d7256.js";import{O as z}from"./organization.a11aefeb.js";import"./columns.766ac47e.js";import{B as h}from"./BaseLayout.a00ee9ac.js";import"./Tooltip.2cbb74ac.js";import"./logo.084e5d7c.js";import"./Text.75188cac.js";import"./Title.f5b94017.js";import"./transButton.d868181c.js";import"./index.f946ffca.js";import"./Form.4333e43d.js";import"./index.b149a301.js";import"./gateway.d5e3123d.js";import"./activeRecord.b14dfa18.js";import"./pubsub.332a43e4.js";import"./index.cf4c23b9.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="501d3510-6f2a-4c5d-81c7-51fc8c9c87ec",o._sentryDebugIdIdentifier="sentry-dbid-501d3510-6f2a-4c5d-81c7-51fc8c9c87ec")}catch{}})();const K=b({__name:"Organization",setup(o){const n=f().params.organizationId,{result:a}=w(()=>z.get(n)),i=g(()=>a.value?[{label:"My organizations",path:"/organizations"},{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:d,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:u,path:"billing",unavailable:!0}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:t(()=>[r(p,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(c,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{K as default};
//# sourceMappingURL=Organization.6e6a687d.js.map
