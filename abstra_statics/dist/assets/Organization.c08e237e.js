import{S as c}from"./Sidebar.89ef7ee9.js";import{N as m}from"./Navbar.5fae2a49.js";import{C as d,D as p,E as l}from"./icons.9c4c14c4.js";import{d as u,ey as b,F as _,a as f,b as g,c as v,e as t,er as y,bw as z,t as w}from"./registerWidgets.b2d74d6b.js";import{a as h}from"./asyncComputed.000dd401.js";import"./gateway.eade7a58.js";import{O as I}from"./organization.cabcd0c8.js";import"./index.0621dc6f.js";import"./Tooltip.dce0688b.js";import"./logo.084e5d7c.js";import"./passwordlessManager.1e9ad5f4.js";import"./pubsub.de7b160f.js";import"./storage.4c5a0e4a.js";import"./activeRecord.ad458e5f.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="daa66e37-25fb-4397-80d1-4582e7ee8fcb",e._sentryDebugIdIdentifier="sentry-dbid-daa66e37-25fb-4397-80d1-4582e7ee8fcb")}catch{}})();const O={class:"organization"},D=u({__name:"Organization",setup(e){const n=b().params.organizationId,{result:o}=h(()=>I.get(n)),r=_(()=>o.value?[{label:"My organizations",path:"/organizations"},{label:o.value.name,path:`/organizations/${o.value.id}`}]:void 0),i=[{name:"Organization",items:[{name:"Projects",icon:d,path:"projects"},{name:"Members",icon:p,path:"members"},{name:"Billing",icon:l,path:"billing",unavailable:!0}]}];return(k,x)=>{const s=f("router-view");return g(),v(z,null,[t(m,{breadcrumb:r.value},null,8,["breadcrumb"]),y("div",O,[t(c,{class:"sidebar",sections:i}),t(s)])],64)}}});const G=w(D,[["__scopeId","data-v-51ce7239"]]);export{G as default};
//# sourceMappingURL=Organization.c08e237e.js.map
