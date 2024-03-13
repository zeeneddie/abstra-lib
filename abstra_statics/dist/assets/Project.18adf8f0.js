import{d,eB as b,H as m,a as f,b as g,c as v,w as s,f as i}from"./outputWidgets.143b89ad.js";import{B as _}from"./BaseLayout.1f3fee38.js";import{a as h}from"./asyncComputed.fefd676a.js";import"./router.21bbc665.js";import"./index.91c8451e.js";import{P as y}from"./project.07a07edd.js";import{O as w}from"./organization.c1cb99ff.js";import{_ as z}from"./Navbar.vue_vue_type_script_setup_true_lang.4d27b866.js";import{S as I}from"./Sidebar.f014cea2.js";import{e as j,Q as C,R as O,S as k,T as B,v as S,G as L,U as P,V as x,M as D}from"./icons.1edc4453.js";import"./Form.db0ef3c4.js";import"./hasIn.b5021533.js";import"./popupNotifcation.fb7df8d7.js";import"./index.cf4c23b9.js";import"./record.557e07c4.js";import"./pubsub.b0541584.js";import"./logo.084e5d7c.js";import"./Text.b74e36c5.js";import"./Base.cfb1ba48.js";import"./Typography.cddcecb6.js";import"./index.735680eb.js";import"./ArrowRightOutlined.08fa31dd.js";import"./index.dbc476d2.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="c62efe8a-87d7-4b35-ab3c-1f50b6ba0fa5",o._sentryDebugIdIdentifier="sentry-dbid-c62efe8a-87d7-4b35-ab3c-1f50b6ba0fa5")}catch{}})();const ta=d({__name:"Project",setup(o){const c=b().params.projectId,{result:e}=h(()=>y.get(c).then(async a=>{const t=await w.get(a.organizationId);return{project:a,organization:t}})),l=m(()=>{var a,t,n,p;return((a=e.value)==null?void 0:a.organization)&&e.value.project?[{label:"My organizations",path:"/organizations"},{label:(n=(t=e.value)==null?void 0:t.organization)==null?void 0:n.name,path:`/organizations/${(p=e.value)==null?void 0:p.organization.id}`},{label:e.value.project.name,path:`/projects/${e.value.project.id}`}]:void 0}),u=m(()=>{var a;return(a=e.value)!=null&&a.project?[{name:"Project",items:[{name:"Live",path:"live",icon:j},{name:"Builds",path:"builds",icon:C},{name:"Connectors",path:"connectors",icon:O,unavailable:!e.value.organization.featureFlags.CONNECTORS_CONSOLE},{name:"Tables",path:"tables",icon:k},{name:"API Keys",path:"api-keys",icon:B},{name:"Env Vars",path:"env-vars",icon:S},{name:"Files",path:"files",icon:L},{name:"Logs",icon:P,path:"logs"},{name:"Settings",icon:x,path:"settings"},{name:"Users",icon:D,path:"users"}]}]:[]});return(a,t)=>{const n=f("router-view");return g(),v(_,null,{content:s(()=>[i(n)]),navbar:s(()=>[i(z,{class:"nav",breadcrumb:l.value},null,8,["breadcrumb"])]),sidebar:s(()=>[i(I,{class:"sidebar",sections:u.value},null,8,["sections"])]),_:1})}}});export{ta as default};
//# sourceMappingURL=Project.18adf8f0.js.map
