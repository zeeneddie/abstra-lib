import{S as p}from"./Sidebar.331e5b5b.js";import{_ as c}from"./Navbar.vue_vue_type_script_setup_true_lang.cd7c7049.js";import{F as l,G as d,H as u}from"./icons.85d31212.js";import{d as b,eB as f,G as g,a as _,b as y,c as v,w as t,f as r}from"./outputWidgets.acb147ed.js";import{a as w}from"./asyncComputed.95a36516.js";import"./router.00439560.js";import{O as z}from"./organization.34b9b71d.js";import"./columns.589004f2.js";import{B as h}from"./BaseLayout.4d4a7a62.js";import"./Tooltip.37b7ea52.js";import"./logo.084e5d7c.js";import"./Text.d353b37a.js";import"./Base.17c9417a.js";import"./FormItem.d12ca532.js";import"./transButton.cef1faca.js";import"./index.020fc54c.js";import"./Title.911299ad.js";import"./index.d349a4a0.js";import"./gateway.0019b16e.js";import"./activeRecord.bc23ce79.js";import"./pubsub.99f97766.js";import"./index.cf4c23b9.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="0b358589-72ee-4016-a3d4-bcf37e489a96",e._sentryDebugIdIdentifier="sentry-dbid-0b358589-72ee-4016-a3d4-bcf37e489a96")}catch{}})();const Q=b({__name:"Organization",setup(e){const n=f().params.organizationId,{result:a}=w(()=>z.get(n)),i=g(()=>a.value?[{label:"My organizations",path:"/organizations"},{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),s=[{name:"Organization",items:[{name:"Projects",icon:l,path:"projects"},{name:"Members",icon:d,path:"members"},{name:"Billing",icon:u,path:"billing",unavailable:!0}]}];return(I,B)=>{const m=_("router-view");return y(),v(h,null,{navbar:t(()=>[r(c,{breadcrumb:i.value},null,8,["breadcrumb"])]),sidebar:t(()=>[r(p,{class:"sidebar",sections:s})]),content:t(()=>[r(m)]),_:1})}}});export{Q as default};
//# sourceMappingURL=Organization.f7f0dede.js.map
