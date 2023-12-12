import{d,eB as b,G as m,a as g,b as f,c as v,w as r,f as s}from"./outputWidgets.91878a00.js";import{B as h}from"./BaseLayout.7377c126.js";import{a as _}from"./asyncComputed.6ced1d7b.js";import"./router.77bfbaae.js";import"./index.8262a422.js";import{P as y}from"./project.e6aa2cb4.js";import{O as z}from"./organization.7073a119.js";import{_ as j}from"./Navbar.vue_vue_type_script_setup_true_lang.2c29c19f.js";import{S as I}from"./Sidebar.543d22f9.js";import{y as w,z as B,A as k,B as C,C as P,D as $,q as x,E as D,F as L,u as M,v as O,x as S}from"./icons.842bb077.js";import"./Base.80d71c98.js";import"./transButton.c9ea1045.js";import"./Text.24e27494.js";import"./Title.cb0c3b9b.js";import"./index.571df689.js";import"./record.8ded570d.js";import"./pubsub.862a9619.js";import"./gateway.6c51aaca.js";import"./logo.084e5d7c.js";import"./index.2b74a3c8.js";import"./Tooltip.c00de598.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[i]="314577a8-39e6-47e4-a0e2-daccda83f098",o._sentryDebugIdIdentifier="sentry-dbid-314577a8-39e6-47e4-a0e2-daccda83f098")}catch{}})();const ta=d({__name:"Project",setup(o){const c=b().params.projectId,{result:a}=_(()=>y.get(c).then(async e=>{const t=await z.get(e.organizationId);return{project:e,organization:t}})),l=m(()=>{var e,t,n,p;return((e=a.value)==null?void 0:e.organization)&&a.value.project?[{label:"My organizations",path:"/organizations"},{label:(n=(t=a.value)==null?void 0:t.organization)==null?void 0:n.name,path:`/organizations/${(p=a.value)==null?void 0:p.organization.id}`},{label:a.value.project.name,path:`/projects/${a.value.project.id}`}]:void 0}),u=m(()=>{var e;return(e=a.value)!=null&&e.project?[{name:"Project",items:[{name:"Live",path:"live",icon:w},{name:"Builds",path:"builds",icon:B},{name:"Connectors",path:"connectors",icon:k},{name:"Tables",path:"tables",icon:C},{name:"API Keys",path:"api-keys",icon:P},{name:"Env Vars",path:"env-vars",icon:$},{name:"Files",path:"files",icon:x},{name:"Logs",icon:D,path:"logs",beta:!0},{name:"Settings",icon:L,path:"settings"}]},{name:"Organization",items:[{name:"Projects",icon:M,path:`/organizations/${a.value.project.organizationId}/projects`},{name:"Members",icon:O,path:`/organizations/${a.value.project.organizationId}/members`},{name:"Billing",icon:S,path:`/organizations/${a.value.project.organizationId}/billing`,unavailable:!0}]}]:[]});return(e,t)=>{const n=g("router-view");return f(),v(h,null,{content:r(()=>[s(n)]),navbar:r(()=>[s(j,{class:"nav",breadcrumb:l.value},null,8,["breadcrumb"])]),sidebar:r(()=>[s(I,{class:"sidebar",sections:u.value},null,8,["sections"])]),_:1})}}});export{ta as default};
//# sourceMappingURL=Project.fe47f633.js.map
