import{d as u,ey as b,F as p,a as g,b as _,c as v,e as r,er as l,bw as f,t as y}from"./registerWidgets.cd0230b6.js";import{a as h}from"./asyncComputed.d5643777.js";import{P as j}from"./project.fc6bd585.js";import"./gateway.13cd486c.js";import{O as z}from"./organization.5d93f4da.js";import"./index.832c5194.js";import{N as I}from"./Navbar.cc73a603.js";import{S as w}from"./Sidebar.4c3ecd9f.js";import{F as P,G as k,H as x,I as B,J as C,K as D,L as $,C as E,D as M,E as N}from"./icons.79c2c142.js";import"./activeRecord.87f5172c.js";import"./pubsub.acd37fe2.js";import"./passwordlessManager.e49dd838.js";import"./storage.c08be30c.js";import"./logo.084e5d7c.js";import"./Tooltip.5a8eeed5.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="9547cca5-7a5c-44cc-9eca-24b7aeb94c7e",o._sentryDebugIdIdentifier="sentry-dbid-9547cca5-7a5c-44cc-9eca-24b7aeb94c7e")}catch{}})();const S={class:"project"},F={class:"content-wrapper"},L=u({__name:"Project",setup(o){const i=b().params.projectId,{result:e}=h(()=>j.get(i).then(async a=>{const t=await z.get(a.organizationId);return{project:a,organization:t}})),m=p(()=>{var a,t,n,c;return((a=e.value)==null?void 0:a.organization)&&e.value.project?[{label:"My organizations",path:"/organizations"},{label:(n=(t=e.value)==null?void 0:t.organization)==null?void 0:n.name,path:`/organizations/${(c=e.value)==null?void 0:c.organization.id}`},{label:e.value.project.name,path:`/projects/${e.value.project.id}`}]:void 0}),d=p(()=>{var a;return(a=e.value)!=null&&a.project?[{name:"Project",items:[{name:"Builds",path:"builds",icon:P},{name:"Connectors",path:"connectors",icon:k},{name:"Tables",path:"tables",icon:x},{name:"API Keys",path:"api-keys",icon:B},{name:"Env Vars",path:"env-vars",icon:C},{name:"Logs",icon:D,path:"logs",beta:!0},{name:"Settings",icon:$,path:"settings"}]},{name:"Organization",items:[{name:"Projects",icon:E,path:`/organizations/${e.value.project.organizationId}/projects`},{name:"Members",icon:M,path:`/organizations/${e.value.project.organizationId}/members`},{name:"Billing",icon:N,path:`/organizations/${e.value.project.organizationId}/billing`,unavailable:!0}]}]:[]});return(a,t)=>{const n=g("router-view");return _(),v(f,null,[r(I,{class:"nav",breadcrumb:m.value},null,8,["breadcrumb"]),l("div",S,[r(w,{class:"sidebar",sections:d.value},null,8,["sections"]),l("div",F,[r(n)])])],64)}}});const Z=y(L,[["__scopeId","data-v-d311093f"]]);export{Z as default};
//# sourceMappingURL=Project.7b1f67b9.js.map