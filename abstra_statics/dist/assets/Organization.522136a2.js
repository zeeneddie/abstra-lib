import{S as d}from"./Sidebar.ab304e75.js";import{N as m}from"./Navbar.d934b9e0.js";import{E as p,F as l,G as u}from"./icons.0e48e417.js";import{d as _,K as f,b,c as g,e as t,z as r,x as v,F as y,J as z,a as w,q as I}from"./registerWidgets.7486656e.js";import{a as h}from"./asyncComputed.f083bc97.js";import"./gateway.a727703d.js";import{O}from"./organization.9ba2a418.js";import"./index.7dd462fe.js";import"./Tooltip.79a68b39.js";import"./logo.084e5d7c.js";import"./passwordlessManager.414b112b.js";import"./pubsub.435be95d.js";import"./activeRecord.50cf7416.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="5ef9763a-f736-45d5-a1cd-86c647444d30",e._sentryDebugIdIdentifier="sentry-dbid-5ef9763a-f736-45d5-a1cd-86c647444d30")}catch{}})();const x={class:"organization"},k=_({__name:"Organization",setup(e){const n=z().params.organizationId,{result:o}=h(()=>O.get(n)),s=f(()=>o.value?[{label:o.value.name,path:`/organizations/${o.value.id}`}]:void 0),i=[{name:"Organization",items:[{name:"Projects",icon:p,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:u,path:"billing",unavailable:!0}]}];return(B,D)=>{const c=w("router-view");return b(),g(y,null,[t(m,{breadcrumb:r(s)},null,8,["breadcrumb"]),v("div",x,[t(d,{class:"sidebar",sections:r(i)},null,8,["sections"]),t(c)])],64)}}});const R=I(k,[["__scopeId","data-v-7eef90b7"]]);export{R as default};
//# sourceMappingURL=Organization.522136a2.js.map
