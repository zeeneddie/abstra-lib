import{S as c}from"./Sidebar.aa249497.js";import{_ as p}from"./Navbar.vue_vue_type_script_setup_true_lang.d4c1eb85.js";import{G as l,H as b,I as u}from"./icons.73bff2ab.js";import{d,ez as f,H as g,a as _,b as y,c as v,w as t,f as r}from"./outputWidgets.a4629ff8.js";import{a as w}from"./asyncComputed.fb8b9ba6.js";import"./router.ab2ac3ba.js";import{O as z}from"./organization.6571a8a9.js";import"./columns.464a3bb5.js";import{B as h}from"./BaseLayout.4a3e21df.js";import"./Tooltip.7a72d4e4.js";import"./logo.084e5d7c.js";import"./Text.eb216708.js";import"./Title.cf2a531e.js";import"./index.fda4c602.js";import"./index.dc4c5f56.js";import"./index.339c7421.js";import"./gateway.68939de7.js";import"./activeRecord.a2b7d343.js";import"./pubsub.25dc8c41.js";import"./index.f4ac7424.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="7e4e30cc-a922-49a9-bbc6-c8772549bfbf",e._sentryDebugIdIdentifier="sentry-dbid-7e4e30cc-a922-49a9-bbc6-c8772549bfbf")}catch{}})();const J=d({__name:"Organization",setup(e){const n=f().params.organizationId,{result:a}=w(()=>z.get(n)),i=g(()=>a.value?[{label:"My organizations",path:"/organizations"},{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:l,path:"projects"},{name:"Members",icon:b,path:"members"},{name:"Billing",icon:u,path:"billing",unavailable:!0}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:t(()=>[r(p,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(c,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{J as default};
//# sourceMappingURL=Organization.45ade4dc.js.map
