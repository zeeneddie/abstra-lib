import{d as b,K as i,b as f,c as _,e as s,z as c,x as l,F as g,J as v,a as y,q as h}from"./registerWidgets.726232df.js";import{a as p}from"./asyncComputed.638ec138.js";import{P as I}from"./project.3c29237c.js";import"./gateway.459f2c9d.js";import{O as j}from"./organization.ca66295c.js";import{N as z}from"./Navbar.3c591950.js";import{S as w}from"./Sidebar.dbc62aa3.js";import{I as P,E as k,J as x,K as B,L as $,F as D,G as E,H as N}from"./icons.f7969917.js";import"./activeRecord.acbdb8bc.js";import"./passwordlessManager.3b0f9bd3.js";import"./logo.084e5d7c.js";import"./Tooltip.03e06fe5.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="782ffea6-233e-4f0b-9528-286424384741",a._sentryDebugIdIdentifier="sentry-dbid-782ffea6-233e-4f0b-9528-286424384741")}catch{}})();const S={class:"project"},C={class:"content-wrapper"},F=b({__name:"Project",setup(a){const r=v().params.projectId,{result:e}=p(()=>I.get(r)),{result:t}=p(()=>e.value?j.get(e.value.organizationId):Promise.resolve(null)),m=i(()=>{var n;return t.value&&e.value?[{label:(n=t.value)==null?void 0:n.name,path:`/organizations/${t.value.id}`},{label:e.value.name,path:`/projects/${e.value.id}`}]:void 0}),u=i(()=>e.value?[{name:"Project",items:[{name:"Builds",path:"builds",icon:P},{name:"API Keys",path:"api-keys",icon:k},{name:"Env Vars",path:"env-vars",icon:x},{name:"Logs",icon:B,path:"logs",beta:!0},{name:"Settings",icon:$,path:"settings"}]},{name:"Organization",items:[{name:"Projects",icon:D,path:`/organizations/${e.value.organizationId}/projects`},{name:"Members",icon:E,path:`/organizations/${e.value.organizationId}/members`},{name:"Billing",icon:N,path:`/organizations/${e.value.organizationId}/billing`,unavailable:!0}]}]:[]);return(n,K)=>{const d=y("router-view");return f(),_(g,null,[s(z,{class:"nav",breadcrumb:c(m)},null,8,["breadcrumb"]),l("div",S,[s(w,{class:"sidebar",sections:c(u)},null,8,["sections"]),l("div",C,[s(d)])])],64)}}});const U=h(F,[["__scopeId","data-v-cfb4011f"]]);export{U as default};
//# sourceMappingURL=Project.09ec8d1e.js.map