import{d,eB as f,H as m,a as b,b as g,c as v,w as s,f as i}from"./outputWidgets.ad220777.js";import{B as _}from"./BaseLayout.a39cb2c8.js";import{a as h}from"./asyncComputed.d014c782.js";import"./router.6b225833.js";import"./index.d1cb9253.js";import{P as y}from"./project.d334b56f.js";import{O as w}from"./organization.97998130.js";import{_ as z}from"./Navbar.vue_vue_type_script_setup_true_lang.f296428e.js";import{S as I}from"./Sidebar.ad5aca93.js";import{e as j,Q as C,R as O,S as k,T as B,v as S,G as L,U as P,V as x,M as D}from"./icons.84407374.js";import"./Form.39fdeb76.js";import"./hasIn.cf7d6bab.js";import"./index.cf4c23b9.js";import"./record.cd6b04cd.js";import"./pubsub.7a6bd333.js";import"./logo.084e5d7c.js";import"./Text.1d40b64f.js";import"./Base.2c96e441.js";import"./Typography.c0b73472.js";import"./index.a4d9c4fd.js";import"./ArrowRightOutlined.08fa31dd.js";import"./index.bf986da6.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="c6fa2708-16fe-4482-822d-31c7e1aed15e",o._sentryDebugIdIdentifier="sentry-dbid-c6fa2708-16fe-4482-822d-31c7e1aed15e")}catch{}})();const oe=d({__name:"Project",setup(o){const c=f().params.projectId,{result:a}=h(()=>y.get(c).then(async e=>{const t=await w.get(e.organizationId);return{project:e,organization:t}})),l=m(()=>{var e,t,n,p;return((e=a.value)==null?void 0:e.organization)&&a.value.project?[{label:"My organizations",path:"/organizations"},{label:(n=(t=a.value)==null?void 0:t.organization)==null?void 0:n.name,path:`/organizations/${(p=a.value)==null?void 0:p.organization.id}`},{label:a.value.project.name,path:`/projects/${a.value.project.id}`}]:void 0}),u=m(()=>{var e;return(e=a.value)!=null&&e.project?[{name:"Project",items:[{name:"Live",path:"live",icon:j},{name:"Builds",path:"builds",icon:C},{name:"Connectors",path:"connectors",icon:O,unavailable:!a.value.organization.featureFlags.CONNECTORS_CONSOLE},{name:"Tables",path:"tables",icon:k},{name:"API Keys",path:"api-keys",icon:B},{name:"Env Vars",path:"env-vars",icon:S},{name:"Files",path:"files",icon:L},{name:"Logs",icon:P,path:"logs"},{name:"Settings",icon:x,path:"settings"},{name:"Users",icon:D,path:"users"}]}]:[]});return(e,t)=>{const n=b("router-view");return g(),v(_,null,{content:s(()=>[i(n)]),navbar:s(()=>[i(z,{class:"nav",breadcrumb:l.value},null,8,["breadcrumb"])]),sidebar:s(()=>[i(I,{class:"sidebar",sections:u.value},null,8,["sections"])]),_:1})}}});export{oe as default};
//# sourceMappingURL=Project.40516175.js.map
