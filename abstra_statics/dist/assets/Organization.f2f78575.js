import{S as p}from"./Sidebar.d135379e.js";import{_ as c}from"./Navbar.vue_vue_type_script_setup_true_lang.d6ef89bf.js";import{D as b,E as l,F as u}from"./icons.18b78fe3.js";import{d,ey as f,H as g,a as _,b as y,c as v,w as t,f as r}from"./registerWidgets.faf49e08.js";import{a as w}from"./asyncComputed.70c50dd2.js";import"./gateway.ac5d4b11.js";import{O as z}from"./organization.8e3358ce.js";import"./index.72bdd39f.js";import{B as h}from"./BaseLayout.2545ec4d.js";import"./Tooltip.2e9deb3f.js";import"./logo.084e5d7c.js";import"./passwordlessManager.c54f57c4.js";import"./pubsub.04fb37b2.js";import"./storage.0aff2700.js";import"./Text.b5970504.js";import"./Title.a7f9a7d9.js";import"./transButton.4230aac2.js";import"./index.e6dcb33c.js";import"./index.d5a89d63.js";import"./activeRecord.a639288f.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="56ab088b-7b80-4398-830e-2ebe30b80cc2",e._sentryDebugIdIdentifier="sentry-dbid-56ab088b-7b80-4398-830e-2ebe30b80cc2")}catch{}})();const J=d({__name:"Organization",setup(e){const n=f().params.organizationId,{result:a}=w(()=>z.get(n)),i=g(()=>a.value?[{label:"My organizations",path:"/organizations"},{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:b,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:u,path:"billing",unavailable:!0}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:t(()=>[r(c,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(p,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{J as default};
//# sourceMappingURL=Organization.f2f78575.js.map
