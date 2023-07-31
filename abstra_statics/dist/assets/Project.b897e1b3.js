import{d as b,K as i,b as _,c as f,e as s,z as c,x as l,F as g,J as v,a as y,q as h}from"./registerWidgets.80830a62.js";import{a as d}from"./asyncComputed.7fd138fd.js";import{P as I}from"./project.b5092d87.js";import"./gateway.0f7f822d.js";import{O as j}from"./organization.dfe98db9.js";import{N as z}from"./Navbar.eac3ae22.js";import{S as w}from"./Sidebar.73e22c10.js";import{I as P,E as k,J as x,K as B,L as $,F as D,G as E,H as N}from"./icons.96376736.js";import"./activeRecord.dd1973bd.js";import"./passwordlessManager.65c1d475.js";import"./logo.084e5d7c.js";import"./Tooltip.102031c9.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="b6b7df06-40d4-4e16-ac1d-e3b3fa478775",a._sentryDebugIdIdentifier="sentry-dbid-b6b7df06-40d4-4e16-ac1d-e3b3fa478775")}catch{}})();const S={class:"project"},C={class:"content-wrapper"},F=b({__name:"Project",setup(a){const r=v().params.projectId,{result:e}=d(()=>I.get(r)),{result:t}=d(()=>e.value?j.get(e.value.organizationId):Promise.resolve(null)),p=i(()=>{var n;return t.value&&e.value?[{label:(n=t.value)==null?void 0:n.name,path:`/organizations/${t.value.id}`},{label:e.value.name,path:`/projects/${e.value.id}`}]:void 0}),m=i(()=>e.value?[{name:"Project",items:[{name:"Builds",path:"builds",icon:P},{name:"API Keys",path:"api-keys",icon:k},{name:"Env Vars",path:"env-vars",icon:x},{name:"Logs",icon:B,path:"logs",beta:!0},{name:"Settings",icon:$,path:"settings"}]},{name:"Organization",items:[{name:"Projects",icon:D,path:`/organizations/${e.value.organizationId}/projects`},{name:"Members",icon:E,path:`/organizations/${e.value.organizationId}/members`},{name:"Billing",icon:N,path:`/organizations/${e.value.organizationId}/billing`,unavailable:!0}]}]:[]);return(n,K)=>{const u=y("router-view");return _(),f(g,null,[s(z,{class:"nav",breadcrumb:c(p)},null,8,["breadcrumb"]),l("div",S,[s(w,{class:"sidebar",sections:c(m)},null,8,["sections"]),l("div",C,[s(u)])])],64)}}});const U=h(F,[["__scopeId","data-v-cfb4011f"]]);export{U as default};
//# sourceMappingURL=Project.b897e1b3.js.map
