import{S as c}from"./Sidebar.2b2b226e.js";import{N as m}from"./Navbar.01fb9f74.js";import{C as p,D as d,E as l}from"./icons.5c69e04d.js";import{d as b,ey as u,F as _,a as g,b as f,c as v,e as t,er as y,bw as z,t as w}from"./registerWidgets.35e57f84.js";import{a as h}from"./asyncComputed.c94e9a4f.js";import"./gateway.f9f9043e.js";import{O as I}from"./organization.326c4449.js";import"./index.17016b8e.js";import"./Tooltip.9276ac17.js";import"./logo.084e5d7c.js";import"./passwordlessManager.eaa6b5ad.js";import"./pubsub.f7a86775.js";import"./storage.a155fd84.js";import"./activeRecord.8a45db87.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="b40d723e-c0ba-4cb6-94a1-105e03c919b6",e._sentryDebugIdIdentifier="sentry-dbid-b40d723e-c0ba-4cb6-94a1-105e03c919b6")}catch{}})();const O={class:"organization"},D=b({__name:"Organization",setup(e){const n=u().params.organizationId,{result:o}=h(()=>I.get(n)),r=_(()=>o.value?[{label:"My organizations",path:"/organizations"},{label:o.value.name,path:`/organizations/${o.value.id}`}]:void 0),i=[{name:"Organization",items:[{name:"Projects",icon:p,path:"projects"},{name:"Members",icon:d,path:"members"},{name:"Billing",icon:l,path:"billing",unavailable:!0}]}];return(k,x)=>{const s=g("router-view");return f(),v(z,null,[t(m,{breadcrumb:r.value},null,8,["breadcrumb"]),y("div",O,[t(c,{class:"sidebar",sections:i}),t(s)])],64)}}});const G=w(D,[["__scopeId","data-v-51ce7239"]]);export{G as default};
//# sourceMappingURL=Organization.6b74b442.js.map
