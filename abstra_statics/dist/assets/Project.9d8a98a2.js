import{d,eB as g,G as l,a as b,b as f,c as v,w as r,f as s}from"./outputWidgets.90a37dfb.js";import{B as _}from"./BaseLayout.f1b2811a.js";import{a as h}from"./asyncComputed.04259b99.js";import"./authorManager.f2a35532.js";import"./index.c6f2c2d2.js";import{P as y}from"./project.cdd4195e.js";import{O as z}from"./organization.304abf42.js";import{_ as j}from"./Navbar.vue_vue_type_script_setup_true_lang.c94b5b5c.js";import{_ as I}from"./Sidebar.vue_vue_type_script_setup_true_lang.e66e98e6.js";import{B as w,H as B,I as k,J as $,K as P,L as C,u as D,M as L,N as M,D as x,E as O,F as E}from"./icons.9cf35040.js";import"./index.cf4c23b9.js";import"./record.ebb65067.js";import"./pubsub.4fea4be7.js";import"./gateway.6f30a6bf.js";import"./logo.084e5d7c.js";import"./Text.215ae4f0.js";import"./Title.b52522ff.js";import"./index.3afa8a3e.js";import"./index.85b56a97.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[i]="6e892a78-3a79-436d-93d0-ecee76003fe0",o._sentryDebugIdIdentifier="sentry-dbid-6e892a78-3a79-436d-93d0-ecee76003fe0")}catch{}})();const ae=d({__name:"Project",setup(o){const c=g().params.projectId,{result:e}=h(()=>y.get(c).then(async a=>{const t=await z.get(a.organizationId);return{project:a,organization:t}})),m=l(()=>{var a,t,n,p;return((a=e.value)==null?void 0:a.organization)&&e.value.project?[{label:"My organizations",path:"/organizations"},{label:(n=(t=e.value)==null?void 0:t.organization)==null?void 0:n.name,path:`/organizations/${(p=e.value)==null?void 0:p.organization.id}`},{label:e.value.project.name,path:`/projects/${e.value.project.id}`}]:void 0}),u=l(()=>{var a;return(a=e.value)!=null&&a.project?[{name:"Project",items:[{name:"Live",path:"live",icon:w},{name:"Builds",path:"builds",icon:B},{name:"Connectors",path:"connectors",icon:k},{name:"Tables",path:"tables",icon:$},{name:"API Keys",path:"api-keys",icon:P},{name:"Env Vars",path:"env-vars",icon:C},{name:"Files",path:"files",icon:D},{name:"Logs",icon:L,path:"logs",beta:!0},{name:"Settings",icon:M,path:"settings"}]},{name:"Organization",items:[{name:"Projects",icon:x,path:`/organizations/${e.value.project.organizationId}/projects`},{name:"Members",icon:O,path:`/organizations/${e.value.project.organizationId}/members`},{name:"Billing",icon:E,path:`/organizations/${e.value.project.organizationId}/billing`,unavailable:!0}]}]:[]});return(a,t)=>{const n=b("router-view");return f(),v(_,null,{content:r(()=>[s(n)]),navbar:r(()=>[s(j,{class:"nav",breadcrumb:m.value},null,8,["breadcrumb"])]),sidebar:r(()=>[s(I,{class:"sidebar",sections:u.value},null,8,["sections"])]),_:1})}}});export{ae as default};
//# sourceMappingURL=Project.9d8a98a2.js.map