import{S as p}from"./Sidebar.8383ddfd.js";import{_ as c}from"./Navbar.vue_vue_type_script_setup_true_lang.3dbc440e.js";import{M as d,N as l,O as u}from"./icons.744ed7bf.js";import{d as b,eB as f,H as g,a as _,b as y,c as v,w as a,f as r}from"./outputWidgets.ef5495da.js";import{a as w}from"./asyncComputed.6431d6e5.js";import"./router.a88049b6.js";import"./index.1e8e57bb.js";import{O as z}from"./organization.3336d35b.js";import{B as h}from"./BaseLayout.21f508be.js";import"./index.bb5e872e.js";import"./logo.084e5d7c.js";import"./Text.bea7b7ec.js";import"./Base.d23cc64f.js";import"./Typography.a2f9097e.js";import"./index.2c438937.js";import"./ArrowRightOutlined.08fa31dd.js";import"./Form.1a130527.js";import"./hasIn.a76d5c3a.js";import"./popupNotifcation.67de9fe3.js";import"./index.cf4c23b9.js";import"./record.89cbdb8d.js";import"./pubsub.4f53819c.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="fb048423-7945-4c0e-ab77-895868e8eeb6",o._sentryDebugIdIdentifier="sentry-dbid-fb048423-7945-4c0e-ab77-895868e8eeb6")}catch{}})();const Q=b({__name:"Organization",setup(o){const i=f().params.organizationId,{result:t}=w(()=>z.get(i)),n=g(()=>t.value?[{label:"My organizations",path:"/organizations"},{label:t.value.name,path:`/organizations/${t.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:d,path:"projects"},{name:"Editors",icon:l,path:"editors"},{name:"Billing",icon:u,path:"billing"}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:a(()=>[r(c,{breadcrumb:n.value},null,8,["breadcrumb"])]),sidebar:a(()=>[r(p,{class:"sidebar",sections:s})]),content:a(()=>[r(m)]),_:1})}}});export{Q as default};
//# sourceMappingURL=Organization.aaf2739e.js.map
