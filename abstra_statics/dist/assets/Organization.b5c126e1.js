import{S as c}from"./Sidebar.ba38e46f.js";import{N as m}from"./Navbar.f12dce0a.js";import{D as p,E as d,F as l}from"./icons.4be6cb33.js";import{d as u,ey as b,H as _,a as f,b as g,d2 as v,f as t,e as y,bu as z,v as h}from"./registerWidgets.d6e66474.js";import{a as w}from"./asyncComputed.5c362931.js";import"./gateway.651c554e.js";import{O as I}from"./organization.dccc1664.js";import"./index.0eed7dd2.js";import"./Tooltip.a5a595bc.js";import"./logo.084e5d7c.js";import"./passwordlessManager.a2051844.js";import"./pubsub.9e806cff.js";import"./storage.d7eb729a.js";import"./activeRecord.1009e596.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="729b5bcc-1027-49f0-9648-c85f7972439a",e._sentryDebugIdIdentifier="sentry-dbid-729b5bcc-1027-49f0-9648-c85f7972439a")}catch{}})();const O={class:"organization"},D=u({__name:"Organization",setup(e){const n=b().params.organizationId,{result:o}=w(()=>I.get(n)),r=_(()=>o.value?[{label:"My organizations",path:"/organizations"},{label:o.value.name,path:`/organizations/${o.value.id}`}]:void 0),i=[{name:"Organization",items:[{name:"Projects",icon:p,path:"projects"},{name:"Members",icon:d,path:"members"},{name:"Billing",icon:l,path:"billing",unavailable:!0}]}];return(k,x)=>{const s=f("router-view");return g(),v(z,null,[t(m,{breadcrumb:r.value},null,8,["breadcrumb"]),y("div",O,[t(c,{class:"sidebar",sections:i}),t(s)])],64)}}});const A=h(D,[["__scopeId","data-v-51ce7239"]]);export{A as default};
//# sourceMappingURL=Organization.b5c126e1.js.map
