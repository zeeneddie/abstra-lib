import{S as d}from"./Sidebar.dbc62aa3.js";import{N as m}from"./Navbar.3c591950.js";import{F as l,G as p,H as u}from"./icons.f7969917.js";import{d as b,K as _,b as f,c as g,e as t,z as r,x as v,F as y,J as z,a as w,q as I}from"./registerWidgets.726232df.js";import{a as h}from"./asyncComputed.638ec138.js";import"./gateway.459f2c9d.js";import{O}from"./organization.ca66295c.js";import"./Tooltip.03e06fe5.js";import"./logo.084e5d7c.js";import"./passwordlessManager.3b0f9bd3.js";import"./activeRecord.acbdb8bc.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="1a916549-3e80-42fe-9d2b-3832b45d96a0",e._sentryDebugIdIdentifier="sentry-dbid-1a916549-3e80-42fe-9d2b-3832b45d96a0")}catch{}})();const x={class:"organization"},k=b({__name:"Organization",setup(e){const n=z().params.organizationId,{result:o}=h(()=>O.get(n)),s=_(()=>o.value?[{label:o.value.name,path:`/organizations/${o.value.id}`}]:void 0),i=[{name:"Organization",items:[{name:"Projects",icon:l,path:"projects"},{name:"Members",icon:p,path:"members"},{name:"Billing",icon:u,path:"billing",unavailable:!0}]}];return(B,D)=>{const c=w("router-view");return f(),g(y,null,[t(m,{breadcrumb:r(s)},null,8,["breadcrumb"]),v("div",x,[t(d,{class:"sidebar",sections:r(i)},null,8,["sections"]),t(c)])],64)}}});const J=I(k,[["__scopeId","data-v-7eef90b7"]]);export{J as default};
//# sourceMappingURL=Organization.fa73c47a.js.map