import{S as p}from"./Sidebar.a5a72b1b.js";import{_ as d}from"./Navbar.vue_vue_type_script_setup_true_lang.7e6472d4.js";import{G as c,H as l,I as u}from"./icons.da87d01c.js";import{d as b,eA as f,J as g,a as _,b as y,c as v,w as t,f as r}from"./outputWidgets.17ccdfc9.js";import{a as w}from"./asyncComputed.5c08f8ed.js";import"./router.ebaa9480.js";import{O as z}from"./organization.7643ff12.js";import"./index.d84e966d.js";import{B as h}from"./BaseLayout.2068e758.js";import"./Tooltip.ba03db77.js";import"./logo.084e5d7c.js";import"./index.acef1430.js";import"./Title.4e76ea1c.js";import"./index.938f1dbb.js";import"./index.2eeacfc4.js";import"./index.51e36136.js";import"./gateway.ebd824e4.js";import"./activeRecord.fef76a33.js";import"./pubsub.4b5544e4.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="db01fd57-fd08-438f-8860-197252552b43",o._sentryDebugIdIdentifier="sentry-dbid-db01fd57-fd08-438f-8860-197252552b43")}catch{}})();const q=b({__name:"Organization",setup(o){const n=f().params.organizationId,{result:a}=w(()=>z.get(n)),i=g(()=>a.value?[{label:"My organizations",path:"/organizations"},{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:c,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:u,path:"billing",unavailable:!0}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:t(()=>[r(d,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(p,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{q as default};
//# sourceMappingURL=Organization.0be6a210.js.map
