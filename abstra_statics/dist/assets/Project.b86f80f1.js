import{d as u,K as i,b,c as g,e as s,z as c,x as _,F as v,J as f,a as y,q as I}from"./registerWidgets.29e41a54.js";import{a as l}from"./asyncComputed.0126d7e4.js";import{P as h}from"./project.a65a8e44.js";import"./gateway.dfba55d6.js";import{O as j}from"./organization.252003ea.js";import{N as z}from"./Navbar.bbfdac3f.js";import{S as P}from"./Sidebar.8d4d471d.js";import{I as w,E as k,J as x,K as B,L as $,F as D,G as E,H as N}from"./icons.b931f659.js";import"./activeRecord.d63d0be1.js";import"./passwordlessManager.88f105f1.js";import"./logo.084e5d7c.js";import"./Tooltip.1c0158ea.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="707398b5-d20e-4b60-af26-6666ff9bd5a1",a._sentryDebugIdIdentifier="sentry-dbid-707398b5-d20e-4b60-af26-6666ff9bd5a1")}catch{}})();const S={class:"project"},C=u({__name:"Project",setup(a){const r=f().params.projectId,{result:e}=l(()=>h.get(r)),{result:t}=l(()=>e.value?j.get(e.value.organizationId):Promise.resolve(null)),m=i(()=>{var n;return t.value&&e.value?[{label:(n=t.value)==null?void 0:n.name,path:`/organizations/${t.value.id}`},{label:e.value.name,path:`/projects/${e.value.id}`}]:void 0}),d=i(()=>e.value?[{name:"Project",items:[{name:"Builds",path:"builds",icon:w},{name:"API Keys",path:"api-keys",icon:k},{name:"Env Vars",path:"env-vars",icon:x},{name:"Logs",icon:B,path:"logs",beta:!0},{name:"Settings",icon:$,path:"settings"}]},{name:"Organization",items:[{name:"Projects",icon:D,path:`/organizations/${e.value.organizationId}/projects`},{name:"Members",icon:E,path:`/organizations/${e.value.organizationId}/members`},{name:"Billing",icon:N,path:`/organizations/${e.value.organizationId}/billing`,unavailable:!0}]}]:[]);return(n,F)=>{const p=y("router-view");return b(),g(v,null,[s(z,{class:"nav",breadcrumb:c(m)},null,8,["breadcrumb"]),_("div",S,[s(P,{class:"sidebar",sections:c(d)},null,8,["sections"]),s(p)])],64)}}});const T=I(C,[["__scopeId","data-v-e9ea0761"]]);export{T as default};
//# sourceMappingURL=Project.b86f80f1.js.map