import{S as p}from"./Sidebar.f4f000bd.js";import{_ as c}from"./Navbar.vue_vue_type_script_setup_true_lang.5763220f.js";import{E as d,F as l,G as u}from"./icons.2cb14ff7.js";import{d as b,eB as f,H as g,a as _,b as y,c as v,w as a,f as r}from"./outputWidgets.dfaed084.js";import{a as w}from"./asyncComputed.c6a80f78.js";import"./router.c42c263d.js";import"./index.c9a4e936.js";import{O as z}from"./organization.b4f3489f.js";import{B as h}from"./BaseLayout.c76b087b.js";import"./index.0a9cf697.js";import"./logo.084e5d7c.js";import"./Text.1bcc4cd1.js";import"./Base.d5f581c3.js";import"./Typography.43201f4d.js";import"./index.b530ed25.js";import"./FormItem.6efcf2cb.js";import"./hasIn.21204785.js";import"./index.cf4c23b9.js";import"./record.03803e60.js";import"./pubsub.9d023776.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="56bceef6-db83-4ca5-9219-e296ab030863",e._sentryDebugIdIdentifier="sentry-dbid-56bceef6-db83-4ca5-9219-e296ab030863")}catch{}})();const J=b({__name:"Organization",setup(e){const n=f().params.organizationId,{result:t}=w(()=>z.get(n)),i=g(()=>t.value?[{label:"My organizations",path:"/organizations"},{label:t.value.name,path:`/organizations/${t.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:d,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:u,path:"billing"}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:a(()=>[r(c,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:a(()=>[r(p,{class:"sidebar",sections:s})]),content:a(()=>[r(m)]),_:1})}}});export{J as default};
//# sourceMappingURL=Organization.fc8b7f62.js.map
