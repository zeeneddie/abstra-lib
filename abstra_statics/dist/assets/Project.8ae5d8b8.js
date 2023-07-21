import{d as p,J as s,b as u,c as d,e as t,y as n,v,F as _,H as g,a as b,p as f}from"./registerWidgets.4cc86716.js";import{a as r}from"./asyncComputed.f9d446a7.js";import{P as h}from"./project.74e740ba.js";import"./gateway.6112d0c1.js";import{O as j}from"./organization.e8fff16a.js";import{N as z}from"./Navbar.1dd95194.js";import{S as I}from"./Sidebar.2bf564e0.js";import{I as P,E as y,J as k,K as x,L as B,F as $,G as N,H as S}from"./icons.d4e872e2.js";import"./activeRecord.57c6bf02.js";import"./passwordlessManager.d432fb48.js";import"./logo.084e5d7c.js";import"./Tooltip.1fe1f181.js";const w={class:"project"},C=p({__name:"Project",setup(E){const i=g().params.projectId,{result:e}=r(()=>h.get(i)),{result:a}=r(()=>e.value?j.get(e.value.organizationId):Promise.resolve(null)),c=s(()=>{var o;return a.value&&e.value?[{label:(o=a.value)==null?void 0:o.name,path:`/organizations/${a.value.id}`},{label:e.value.name,path:`/projects/${e.value.id}`}]:void 0}),l=s(()=>e.value?[{name:"Project",items:[{name:"Builds",path:"builds",icon:P},{name:"API Keys",path:"api-keys",icon:y},{name:"Env Vars",path:"env-vars",icon:k},{name:"Logs",icon:x,path:"logs",beta:!0},{name:"Settings",icon:B,path:"settings"}]},{name:"Organization",items:[{name:"Projects",icon:$,path:`/organizations/${e.value.organizationId}/projects`},{name:"Members",icon:N,path:`/organizations/${e.value.organizationId}/members`},{name:"Billing",icon:S,path:`/organizations/${e.value.organizationId}/billing`,unavailable:!0}]}]:[]);return(o,L)=>{const m=b("router-view");return u(),d(_,null,[t(z,{class:"nav",breadcrumb:n(c)},null,8,["breadcrumb"]),v("div",w,[t(I,{class:"sidebar",sections:n(l)},null,8,["sections"]),t(m)])],64)}}});const T=f(C,[["__scopeId","data-v-e9ea0761"]]);export{T as default};
//# sourceMappingURL=Project.8ae5d8b8.js.map
