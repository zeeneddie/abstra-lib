import{d as u,J as b,K as p,a as g,b as _,c as v,e as s,x as l,F as f,q as y}from"./registerWidgets.cecc7add.js";import{a as h}from"./asyncComputed.08fdcc30.js";import{P as j}from"./project.14d2a965.js";import"./gateway.c00982e9.js";import{O as z}from"./organization.152bdd94.js";import"./index.d9da78e8.js";import{N as I}from"./Navbar.0a04bae4.js";import{S as w}from"./Sidebar.cce5183a.js";import{F as P,G as k,H as x,I as B,J as C,K as D,C as $,D as E,E as M}from"./icons.a47594f6.js";import"./activeRecord.2a9ab687.js";import"./pubsub.a43e35aa.js";import"./passwordlessManager.8b0c672e.js";import"./logo.084e5d7c.js";import"./Tooltip.44f3c0f6.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="7a1ade76-1305-440b-90b5-a588a3988905",o._sentryDebugIdIdentifier="sentry-dbid-7a1ade76-1305-440b-90b5-a588a3988905")}catch{}})();const N={class:"project"},S={class:"content-wrapper"},F=u({__name:"Project",setup(o){const i=b().params.projectId,{result:e}=h(()=>j.get(i).then(async a=>{const t=await z.get(a.organizationId);return{project:a,organization:t}})),m=p(()=>{var a,t,n,c;return((a=e.value)==null?void 0:a.organization)&&e.value.project?[{label:"My organizations",path:"/organizations"},{label:(n=(t=e.value)==null?void 0:t.organization)==null?void 0:n.name,path:`/organizations/${(c=e.value)==null?void 0:c.organization.id}`},{label:e.value.project.name,path:`/projects/${e.value.project.id}`}]:void 0}),d=p(()=>{var a;return(a=e.value)!=null&&a.project?[{name:"Project",items:[{name:"Builds",path:"builds",icon:P},{name:"Connectors",path:"connectors",icon:k},{name:"API Keys",path:"api-keys",icon:x},{name:"Env Vars",path:"env-vars",icon:B},{name:"Logs",icon:C,path:"logs",beta:!0},{name:"Settings",icon:D,path:"settings"}]},{name:"Organization",items:[{name:"Projects",icon:$,path:`/organizations/${e.value.project.organizationId}/projects`},{name:"Members",icon:E,path:`/organizations/${e.value.project.organizationId}/members`},{name:"Billing",icon:M,path:`/organizations/${e.value.project.organizationId}/billing`,unavailable:!0}]}]:[]});return(a,t)=>{const n=g("router-view");return _(),v(f,null,[s(I,{class:"nav",breadcrumb:m.value},null,8,["breadcrumb"]),l("div",N,[s(w,{class:"sidebar",sections:d.value},null,8,["sections"]),l("div",S,[s(n)])])],64)}}});const X=y(F,[["__scopeId","data-v-4f3bb041"]]);export{X as default};
//# sourceMappingURL=Project.2dc543e3.js.map