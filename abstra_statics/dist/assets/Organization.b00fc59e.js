import{S as p}from"./Sidebar.c39c1f63.js";import{_ as c}from"./Navbar.vue_vue_type_script_setup_true_lang.19fb930f.js";import{M as d,N as l,O as u}from"./icons.33aed02e.js";import{d as f,eB as b,H as g,a as _,b as y,c as v,w as e,f as r}from"./outputWidgets.76902441.js";import{a as w}from"./asyncComputed.d847e2fc.js";import"./router.4be0671f.js";import"./index.4c49ddde.js";import{O as z}from"./organization.a900b3c0.js";import{B as h}from"./BaseLayout.6a53f392.js";import"./index.0d679f5f.js";import"./logo.084e5d7c.js";import"./Text.229395cc.js";import"./Base.5930d3e1.js";import"./Typography.25fe7416.js";import"./index.c801983a.js";import"./ArrowRightOutlined.08fa31dd.js";import"./Form.03917452.js";import"./hasIn.6e9d6fff.js";import"./popupNotifcation.20547cc9.js";import"./index.cf4c23b9.js";import"./record.743c54d7.js";import"./pubsub.98730cd9.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="c751ae51-0b0f-4467-9a62-1f4f9339a1c1",o._sentryDebugIdIdentifier="sentry-dbid-c751ae51-0b0f-4467-9a62-1f4f9339a1c1")}catch{}})();const Q=f({__name:"Organization",setup(o){const i=b().params.organizationId,{result:a}=w(()=>z.get(i)),n=g(()=>a.value?[{label:"My organizations",path:"/organizations"},{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:d,path:"projects"},{name:"Editors",icon:l,path:"editors"},{name:"Billing",icon:u,path:"billing"}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:e(()=>[r(c,{breadcrumb:n.value},null,8,["breadcrumb"])]),sidebar:e(()=>[r(p,{class:"sidebar",sections:s})]),content:e(()=>[r(m)]),_:1})}}});export{Q as default};
//# sourceMappingURL=Organization.b00fc59e.js.map
