import{d,eA as b,J as c,a as g,b as v,c as f,w as i,f as s}from"./outputWidgets.b13a87c2.js";import{B as _}from"./BaseLayout.a36af3c6.js";import{a as h}from"./asyncComputed.02afd50e.js";import{P as y}from"./project.d6937cfa.js";import"./console.d76c010c.js";import{O as z}from"./organization.2e5c7a70.js";import"./index.b8915c7f.js";import{_ as j}from"./Navbar.vue_vue_type_script_setup_true_lang.7bd6f741.js";import{S as I}from"./Sidebar.db74fc07.js";import{I as w,J as k,K as B,L as P,M as $,N as C,O as M,F as x,G as D,H as L}from"./icons.76c1fe8b.js";import"./gateway.f581ef9f.js";import"./activeRecord.f5a2d19d.js";import"./pubsub.dab46576.js";import"./index.98e61e8e.js";import"./Form.e21e0d73.js";import"./Title.6f86755a.js";import"./index.3d7f8177.js";import"./index.55a2786b.js";import"./index.c4d59e95.js";import"./dayjs.2e90d17d.js";import"./index.fbf04eaa.js";import"./index.7011a200.js";import"./TabPane.3cb0210e.js";import"./index.0345671f.js";import"./index.24360d49.js";import"./index.c32ce6af.js";import"./index.73746068.js";import"./index.7dcc157a.js";import"./index.0b99f8ef.js";import"./index.1b5bc05c.js";import"./index.957937c4.js";import"./logo.084e5d7c.js";import"./Tooltip.a469d789.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="aa73132a-48d4-459e-9e0e-9aa2a77bba2d",e._sentryDebugIdIdentifier="sentry-dbid-aa73132a-48d4-459e-9e0e-9aa2a77bba2d")}catch{}})();const da=d({__name:"Project",setup(e){const p=b().params.projectId,{result:a}=h(()=>y.get(p).then(async o=>{const t=await z.get(o.organizationId);return{project:o,organization:t}})),l=c(()=>{var o,t,n,m;return((o=a.value)==null?void 0:o.organization)&&a.value.project?[{label:"My organizations",path:"/organizations"},{label:(n=(t=a.value)==null?void 0:t.organization)==null?void 0:n.name,path:`/organizations/${(m=a.value)==null?void 0:m.organization.id}`},{label:a.value.project.name,path:`/projects/${a.value.project.id}`}]:void 0}),u=c(()=>{var o;return(o=a.value)!=null&&o.project?[{name:"Project",items:[{name:"Builds",path:"builds",icon:w},{name:"Connectors",path:"connectors",icon:k},{name:"Tables",path:"tables",icon:B},{name:"API Keys",path:"api-keys",icon:P},{name:"Env Vars",path:"env-vars",icon:$},{name:"Logs",icon:C,path:"logs",beta:!0},{name:"Settings",icon:M,path:"settings"}]},{name:"Organization",items:[{name:"Projects",icon:x,path:`/organizations/${a.value.project.organizationId}/projects`},{name:"Members",icon:D,path:`/organizations/${a.value.project.organizationId}/members`},{name:"Billing",icon:L,path:`/organizations/${a.value.project.organizationId}/billing`,unavailable:!0}]}]:[]});return(o,t)=>{const n=g("router-view");return v(),f(_,null,{content:i(()=>[s(n)]),navbar:i(()=>[s(j,{class:"nav",breadcrumb:l.value},null,8,["breadcrumb"])]),sidebar:i(()=>[s(I,{class:"sidebar",sections:u.value},null,8,["sections"])]),_:1})}}});export{da as default};
//# sourceMappingURL=Project.d1d29138.js.map
