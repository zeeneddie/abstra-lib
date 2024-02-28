import{d,eB as b,H as m,a as f,b as g,c as v,w as s,f as i}from"./outputWidgets.f9d55cb0.js";import{B as _}from"./BaseLayout.f6650dfa.js";import{a as h}from"./asyncComputed.c2e425ff.js";import"./router.1ee09928.js";import"./index.a0a2d28c.js";import{P as y}from"./project.1e480b6d.js";import{O as w}from"./organization.15703836.js";import{_ as z}from"./Navbar.vue_vue_type_script_setup_true_lang.144f258b.js";import{S as I}from"./Sidebar.67d1b127.js";import{e as j,R as C,S as O,T as k,U as B,v as S,H as L,V as N,W as P,N as x}from"./icons.26963148.js";import"./Form.7dd6cf64.js";import"./hasIn.d928989a.js";import"./index.cf4c23b9.js";import"./record.ac755122.js";import"./pubsub.eff48f0b.js";import"./logo.084e5d7c.js";import"./Text.8d155850.js";import"./Base.910fdb8b.js";import"./Typography.3699d45d.js";import"./index.4b864f6b.js";import"./ArrowRightOutlined.08fa31dd.js";import"./index.e3695a5b.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="facf65b2-1a9c-448f-927a-d33726b033bb",o._sentryDebugIdIdentifier="sentry-dbid-facf65b2-1a9c-448f-927a-d33726b033bb")}catch{}})();const oa=d({__name:"Project",setup(o){const c=b().params.projectId,{result:e}=h(()=>y.get(c).then(async a=>{const t=await w.get(a.organizationId);return{project:a,organization:t}})),l=m(()=>{var a,t,n,p;return((a=e.value)==null?void 0:a.organization)&&e.value.project?[{label:"My organizations",path:"/organizations"},{label:(n=(t=e.value)==null?void 0:t.organization)==null?void 0:n.name,path:`/organizations/${(p=e.value)==null?void 0:p.organization.id}`},{label:e.value.project.name,path:`/projects/${e.value.project.id}`}]:void 0}),u=m(()=>{var a;return(a=e.value)!=null&&a.project?[{name:"Project",items:[{name:"Live",path:"live",icon:j},{name:"Builds",path:"builds",icon:C},{name:"Connectors",path:"connectors",icon:O,unavailable:!e.value.organization.featureFlags.CONNECTORS_CONSOLE},{name:"Tables",path:"tables",icon:k},{name:"API Keys",path:"api-keys",icon:B},{name:"Env Vars",path:"env-vars",icon:S},{name:"Files",path:"files",icon:L},{name:"Logs",icon:N,path:"logs"},{name:"Settings",icon:P,path:"settings"},{name:"Users",icon:x,path:"users"}]}]:[]});return(a,t)=>{const n=f("router-view");return g(),v(_,null,{content:s(()=>[i(n)]),navbar:s(()=>[i(z,{class:"nav",breadcrumb:l.value},null,8,["breadcrumb"])]),sidebar:s(()=>[i(I,{class:"sidebar",sections:u.value},null,8,["sections"])]),_:1})}}});export{oa as default};
//# sourceMappingURL=Project.6cf45c7a.js.map
