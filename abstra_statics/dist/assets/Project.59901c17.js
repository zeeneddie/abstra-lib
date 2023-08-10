import{d as b,K as i,b as _,c as f,e as s,z as c,x as l,F as g,J as v,a as y,q as h}from"./registerWidgets.5e258592.js";import{a as p}from"./asyncComputed.2269e9b0.js";import{P as I}from"./project.81d80344.js";import"./gateway.772dec88.js";import{O as j}from"./organization.02596ab9.js";import"./index.7276737e.js";import{N as z}from"./Navbar.59d68b5d.js";import{S as w}from"./Sidebar.13ef7f6b.js";import{I as P,J as k,E as x,K as B,L as $,M as C,F as D,G as E,H as M}from"./icons.854ecd29.js";import"./activeRecord.b3eba751.js";import"./passwordlessManager.0607f999.js";import"./logo.084e5d7c.js";import"./Tooltip.03fabd65.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="66b459c9-9244-48d1-bf6a-90347ad224ff",a._sentryDebugIdIdentifier="sentry-dbid-66b459c9-9244-48d1-bf6a-90347ad224ff")}catch{}})();const N={class:"project"},S={class:"content-wrapper"},F=b({__name:"Project",setup(a){const r=v().params.projectId,{result:e}=p(()=>I.get(r)),{result:t}=p(()=>e.value?j.get(e.value.organizationId):Promise.resolve(null)),m=i(()=>{var n;return t.value&&e.value?[{label:(n=t.value)==null?void 0:n.name,path:`/organizations/${t.value.id}`},{label:e.value.name,path:`/projects/${e.value.id}`}]:void 0}),d=i(()=>e.value?[{name:"Project",items:[{name:"Builds",path:"builds",icon:P},{name:"Connectors",path:"connectors",icon:k},{name:"API Keys",path:"api-keys",icon:x},{name:"Env Vars",path:"env-vars",icon:B},{name:"Logs",icon:$,path:"logs",beta:!0},{name:"Settings",icon:C,path:"settings"}]},{name:"Organization",items:[{name:"Projects",icon:D,path:`/organizations/${e.value.organizationId}/projects`},{name:"Members",icon:E,path:`/organizations/${e.value.organizationId}/members`},{name:"Billing",icon:M,path:`/organizations/${e.value.organizationId}/billing`,unavailable:!0}]}]:[]);return(n,K)=>{const u=y("router-view");return _(),f(g,null,[s(z,{class:"nav",breadcrumb:c(m)},null,8,["breadcrumb"]),l("div",N,[s(w,{class:"sidebar",sections:c(d)},null,8,["sections"]),l("div",S,[s(u)])])],64)}}});const X=h(F,[["__scopeId","data-v-f3927501"]]);export{X as default};
//# sourceMappingURL=Project.59901c17.js.map