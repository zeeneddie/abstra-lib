import{d as u,eA as b,J as m,a as g,b as f,c as v,w as i,f as s}from"./outputWidgets.5f5dca9f.js";import{B as _}from"./BaseLayout.ff65337e.js";import{a as h}from"./asyncComputed.eae0c0ea.js";import{P as y}from"./project.de2f38b9.js";import"./router.a7910fab.js";import{O as z}from"./organization.dacfc6ab.js";import"./index.fcdb7e23.js";import{_ as j}from"./Navbar.vue_vue_type_script_setup_true_lang.39fd34e5.js";import{S as I}from"./Sidebar.8655c670.js";import{k as w,J as k,K as B,L as P,M as $,N as C,O as M,G as x,H as D,I as L}from"./icons.a77543dc.js";import"./gateway.68ea1e37.js";import"./activeRecord.ad81cab4.js";import"./pubsub.628f19a6.js";import"./Title.c2ba09dc.js";import"./index.92c8cf6e.js";import"./logo.084e5d7c.js";import"./index.d2da0107.js";import"./index.7ab474e7.js";import"./index.de5dbed2.js";import"./Tooltip.3202f444.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="b1e68afd-f58d-4abb-a946-846379b76c5d",o._sentryDebugIdIdentifier="sentry-dbid-b1e68afd-f58d-4abb-a946-846379b76c5d")}catch{}})();const aa=u({__name:"Project",setup(o){const c=b().params.projectId,{result:a}=h(()=>y.get(c).then(async e=>{const t=await z.get(e.organizationId);return{project:e,organization:t}})),l=m(()=>{var e,t,n,p;return((e=a.value)==null?void 0:e.organization)&&a.value.project?[{label:"My organizations",path:"/organizations"},{label:(n=(t=a.value)==null?void 0:t.organization)==null?void 0:n.name,path:`/organizations/${(p=a.value)==null?void 0:p.organization.id}`},{label:a.value.project.name,path:`/projects/${a.value.project.id}`}]:void 0}),d=m(()=>{var e;return(e=a.value)!=null&&e.project?[{name:"Project",items:[{name:"Builds",path:"builds",icon:w},{name:"Connectors",path:"connectors",icon:k},{name:"Tables",path:"tables",icon:B},{name:"API Keys",path:"api-keys",icon:P},{name:"Env Vars",path:"env-vars",icon:$},{name:"Logs",icon:C,path:"logs",beta:!0},{name:"Settings",icon:M,path:"settings"}]},{name:"Organization",items:[{name:"Projects",icon:x,path:`/organizations/${a.value.project.organizationId}/projects`},{name:"Members",icon:D,path:`/organizations/${a.value.project.organizationId}/members`},{name:"Billing",icon:L,path:`/organizations/${a.value.project.organizationId}/billing`,unavailable:!0}]}]:[]});return(e,t)=>{const n=g("router-view");return f(),v(_,null,{content:i(()=>[s(n)]),navbar:i(()=>[s(j,{class:"nav",breadcrumb:l.value},null,8,["breadcrumb"])]),sidebar:i(()=>[s(I,{class:"sidebar",sections:d.value},null,8,["sections"])]),_:1})}}});export{aa as default};
//# sourceMappingURL=Project.b59cb22c.js.map
