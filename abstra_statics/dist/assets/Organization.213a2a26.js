import{S as d}from"./Sidebar.c254bc2a.js";import{N as m}from"./Navbar.77d1d8a6.js";import{E as p,F as l,G as b}from"./icons.abc13ad2.js";import{d as u,K as _,b as f,c as g,e as t,z as r,x as v,F as y,J as z,a as w,q as I}from"./registerWidgets.bac2b379.js";import{a as h}from"./asyncComputed.83599e4d.js";import"./gateway.255fbec9.js";import{O}from"./organization.dd53769f.js";import"./index.b42de1d1.js";import"./Tooltip.a2ae5eb2.js";import"./logo.084e5d7c.js";import"./passwordlessManager.5719ed30.js";import"./pubsub.bffb362a.js";import"./activeRecord.6456961c.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="ee1dbb13-2b0c-4d3f-be8a-863816d3bccc",e._sentryDebugIdIdentifier="sentry-dbid-ee1dbb13-2b0c-4d3f-be8a-863816d3bccc")}catch{}})();const x={class:"organization"},k=u({__name:"Organization",setup(e){const n=z().params.organizationId,{result:a}=h(()=>O.get(n)),s=_(()=>a.value?[{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),i=[{name:"Organization",items:[{name:"Projects",icon:p,path:"projects"},{name:"Members",icon:l,path:"members"},{name:"Billing",icon:b,path:"billing",unavailable:!0}]}];return(B,D)=>{const c=w("router-view");return f(),g(y,null,[t(m,{breadcrumb:r(s)},null,8,["breadcrumb"]),v("div",x,[t(d,{class:"sidebar",sections:r(i)},null,8,["sections"]),t(c)])],64)}}});const R=I(k,[["__scopeId","data-v-7eef90b7"]]);export{R as default};
//# sourceMappingURL=Organization.213a2a26.js.map
