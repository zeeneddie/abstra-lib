import{d as b,K as i,b as f,c as _,e as s,z as c,x as l,F as g,J as v,a as y,q as h}from"./registerWidgets.966858c5.js";import{a as p}from"./asyncComputed.af01c07f.js";import{P as I}from"./project.55413ff1.js";import"./gateway.e0302561.js";import{O as j}from"./organization.aacf58b8.js";import{N as z}from"./Navbar.85024c61.js";import{S as w}from"./Sidebar.cc043baf.js";import{I as P,E as k,J as x,K as B,L as $,F as D,G as E,H as N}from"./icons.e22fc21e.js";import"./activeRecord.250eaea9.js";import"./passwordlessManager.7ff47fc0.js";import"./logo.084e5d7c.js";import"./Tooltip.806322b9.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="8a163a37-b245-43e2-aefa-1f69f5871842",a._sentryDebugIdIdentifier="sentry-dbid-8a163a37-b245-43e2-aefa-1f69f5871842")}catch{}})();const S={class:"project"},C={class:"content-wrapper"},F=b({__name:"Project",setup(a){const r=v().params.projectId,{result:e}=p(()=>I.get(r)),{result:t}=p(()=>e.value?j.get(e.value.organizationId):Promise.resolve(null)),m=i(()=>{var n;return t.value&&e.value?[{label:(n=t.value)==null?void 0:n.name,path:`/organizations/${t.value.id}`},{label:e.value.name,path:`/projects/${e.value.id}`}]:void 0}),u=i(()=>e.value?[{name:"Project",items:[{name:"Builds",path:"builds",icon:P},{name:"API Keys",path:"api-keys",icon:k},{name:"Env Vars",path:"env-vars",icon:x},{name:"Logs",icon:B,path:"logs",beta:!0},{name:"Settings",icon:$,path:"settings"}]},{name:"Organization",items:[{name:"Projects",icon:D,path:`/organizations/${e.value.organizationId}/projects`},{name:"Members",icon:E,path:`/organizations/${e.value.organizationId}/members`},{name:"Billing",icon:N,path:`/organizations/${e.value.organizationId}/billing`,unavailable:!0}]}]:[]);return(n,K)=>{const d=y("router-view");return f(),_(g,null,[s(z,{class:"nav",breadcrumb:c(m)},null,8,["breadcrumb"]),l("div",S,[s(w,{class:"sidebar",sections:c(u)},null,8,["sections"]),l("div",C,[s(d)])])],64)}}});const U=h(F,[["__scopeId","data-v-cfb4011f"]]);export{U as default};
//# sourceMappingURL=Project.85cc2260.js.map