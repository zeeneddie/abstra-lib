import{S as d}from"./Sidebar.8655c670.js";import{_ as p}from"./Navbar.vue_vue_type_script_setup_true_lang.39fd34e5.js";import{G as c,H as l,I as b}from"./icons.a77543dc.js";import{d as u,eA as f,J as g,a as _,b as y,c as v,w as t,f as r}from"./outputWidgets.5f5dca9f.js";import{a as w}from"./asyncComputed.eae0c0ea.js";import"./router.a7910fab.js";import{O as z}from"./organization.dacfc6ab.js";import"./index.fcdb7e23.js";import{B as h}from"./BaseLayout.ff65337e.js";import"./Tooltip.3202f444.js";import"./logo.084e5d7c.js";import"./index.d2da0107.js";import"./Title.c2ba09dc.js";import"./index.7ab474e7.js";import"./index.de5dbed2.js";import"./index.92c8cf6e.js";import"./gateway.68ea1e37.js";import"./activeRecord.ad81cab4.js";import"./pubsub.628f19a6.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="e3232990-4bd8-4dd6-afbf-d3e989da4fbb",e._sentryDebugIdIdentifier="sentry-dbid-e3232990-4bd8-4dd6-afbf-d3e989da4fbb")}catch{}})();const q=u({__name:"Organization",setup(e){const n=f().params.organizationId,{result:a}=w(()=>z.get(n)),i=g(()=>a.value?[{label:"My organizations",path:"/organizations"},{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:c,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:b,path:"billing",unavailable:!0}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:t(()=>[r(p,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(d,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{q as default};
//# sourceMappingURL=Organization.bf5a9f01.js.map