import{S as p}from"./Sidebar.4c56397a.js";import{_ as c}from"./Navbar.vue_vue_type_script_setup_true_lang.abdb4f4c.js";import{M as d,N as l,O as u}from"./icons.cbca2df4.js";import{d as b,eB as f,H as g,a as _,b as y,c as v,w as a,f as r}from"./outputWidgets.d6771bd9.js";import{a as w}from"./asyncComputed.80d29ea0.js";import"./router.37b12b93.js";import"./index.9a22ad51.js";import{O as z}from"./organization.765661d0.js";import{B as h}from"./BaseLayout.679c1e81.js";import"./index.d957dad1.js";import"./logo.084e5d7c.js";import"./Text.d26a4614.js";import"./Base.0ee41a7c.js";import"./Typography.0310f653.js";import"./index.d0a38d2e.js";import"./ArrowRightOutlined.08fa31dd.js";import"./Form.9219dd96.js";import"./hasIn.0e8dd531.js";import"./popupNotifcation.2eab21e1.js";import"./index.cf4c23b9.js";import"./record.d1488526.js";import"./pubsub.5586b81f.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="ec3ba134-ebc9-458c-99f0-fe1633748431",o._sentryDebugIdIdentifier="sentry-dbid-ec3ba134-ebc9-458c-99f0-fe1633748431")}catch{}})();const Q=b({__name:"Organization",setup(o){const i=f().params.organizationId,{result:t}=w(()=>z.get(i)),n=g(()=>t.value?[{label:"My organizations",path:"/organizations"},{label:t.value.name,path:`/organizations/${t.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:d,path:"projects"},{name:"Editors",icon:l,path:"editors"},{name:"Billing",icon:u,path:"billing"}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:a(()=>[r(c,{breadcrumb:n.value},null,8,["breadcrumb"])]),sidebar:a(()=>[r(p,{class:"sidebar",sections:s})]),content:a(()=>[r(m)]),_:1})}}});export{Q as default};
//# sourceMappingURL=Organization.0b24c205.js.map
