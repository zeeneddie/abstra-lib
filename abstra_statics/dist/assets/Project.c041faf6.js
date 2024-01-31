import{d,eB as g,H as p,a as f,b,c as v,w as r,f as s}from"./outputWidgets.0277cbbd.js";import{B as _}from"./BaseLayout.b1286937.js";import{a as h}from"./asyncComputed.d55fcd20.js";import"./router.80da957b.js";import"./index.484a88f2.js";import{P as z}from"./project.76a348c2.js";import{O as y}from"./organization.250d78b8.js";import{_ as j}from"./Navbar.vue_vue_type_script_setup_true_lang.63a152da.js";import{S as I}from"./Sidebar.6c7bfeed.js";import{e as w,L as O,M as C,N as B,O as P,P as k,q as L,Q as $,s as M,G as N,H as S,I as x}from"./icons.4110f4c3.js";import"./FormItem.6e3fad7e.js";import"./hasIn.30cc1d4f.js";import"./index.cf4c23b9.js";import"./record.cc1b684f.js";import"./pubsub.9dc2e6ac.js";import"./logo.084e5d7c.js";import"./Text.c62153b6.js";import"./Base.b6a7a457.js";import"./index.c6cb8e0a.js";import"./index.23b4fff1.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[i]="ff9d7358-31c3-466f-8cfa-2720e85d3ec9",o._sentryDebugIdIdentifier="sentry-dbid-ff9d7358-31c3-466f-8cfa-2720e85d3ec9")}catch{}})();const oa=d({__name:"Project",setup(o){const c=g().params.projectId,{result:a}=h(()=>z.get(c).then(async e=>{const t=await y.get(e.organizationId);return{project:e,organization:t}})),m=p(()=>{var e,t,n,l;return((e=a.value)==null?void 0:e.organization)&&a.value.project?[{label:"My organizations",path:"/organizations"},{label:(n=(t=a.value)==null?void 0:t.organization)==null?void 0:n.name,path:`/organizations/${(l=a.value)==null?void 0:l.organization.id}`},{label:a.value.project.name,path:`/projects/${a.value.project.id}`}]:void 0}),u=p(()=>{var e;return(e=a.value)!=null&&e.project?[{name:"Project",items:[{name:"Live",path:"live",icon:w},{name:"Builds",path:"builds",icon:O},{name:"Connectors",path:"connectors",icon:C,unavailable:!a.value.organization.featureFlags.CONNECTORS_CONSOLE},{name:"Tables",path:"tables",icon:B},{name:"API Keys",path:"api-keys",icon:P},{name:"Env Vars",path:"env-vars",icon:k},{name:"Files",path:"files",icon:L},{name:"Logs",icon:$,path:"logs"},{name:"Settings",icon:M,path:"settings"}]},{name:"Organization",items:[{name:"Projects",icon:N,path:`/organizations/${a.value.project.organizationId}/projects`},{name:"Members",icon:S,path:`/organizations/${a.value.project.organizationId}/members`},{name:"Billing",icon:x,path:`/organizations/${a.value.project.organizationId}/billing`,unavailable:!0}]}]:[]});return(e,t)=>{const n=f("router-view");return b(),v(_,null,{content:r(()=>[s(n)]),navbar:r(()=>[s(j,{class:"nav",breadcrumb:m.value},null,8,["breadcrumb"])]),sidebar:r(()=>[s(I,{class:"sidebar",sections:u.value},null,8,["sections"])]),_:1})}}});export{oa as default};
//# sourceMappingURL=Project.c041faf6.js.map
