import{S as p}from"./Sidebar.862226d9.js";import{_ as c}from"./Navbar.vue_vue_type_script_setup_true_lang.fd9e03e3.js";import{G as l,H as d,I as u}from"./icons.5a4d121b.js";import{d as b,eA as f,J as g,a as _,b as y,c as v,w as e,f as a}from"./outputWidgets.cdd73ae7.js";import{a as w}from"./asyncComputed.1e379dfc.js";import"./console.da68e7a5.js";import{O as z}from"./organization.8280b807.js";import"./index.3432358a.js";import{B as h}from"./BaseLayout.d9f67ad3.js";import"./Tooltip.f77ace2b.js";import"./logo.084e5d7c.js";import"./index.5d73eb3d.js";import"./Title.a585f3b7.js";import"./index.23699d9e.js";import"./index.3a1041eb.js";import"./index.bb21662d.js";import"./Form.989d9f34.js";import"./CollapsePanel.b3533acc.js";import"./index.0ff4e9e1.js";import"./dayjs.8c54e3e0.js";import"./index.74f12426.js";import"./index.d0d1a721.js";import"./TabPane.df53a43e.js";import"./index.4b8538be.js";import"./index.08f7b30c.js";import"./index.2eef836d.js";import"./index.2a1509cb.js";import"./index.165bdf52.js";import"./index.1d69d182.js";import"./index.2ae175da.js";import"./index.71dc62b0.js";import"./gateway.701cfd2d.js";import"./activeRecord.7c91f6d1.js";import"./pubsub.f5d6db77.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="3c22ebcd-f1a2-411f-8ba2-46ea1b2e7705",o._sentryDebugIdIdentifier="sentry-dbid-3c22ebcd-f1a2-411f-8ba2-46ea1b2e7705")}catch{}})();const io=b({__name:"Organization",setup(o){const i=f().params.organizationId,{result:r}=w(()=>z.get(i)),n=g(()=>r.value?[{label:"My organizations",path:"/organizations"},{label:r.value.name,path:`/organizations/${r.value.id}`}]:void 0),m=[{name:"Organization",items:[{name:"Projects",icon:l,path:"projects"},{name:"Members",icon:d,path:"members"},{name:"Billing",icon:u,path:"billing",unavailable:!0}]}];return(I,B)=>{const s=_("router-view");return y(),v(h,null,{navbar:e(()=>[a(c,{breadcrumb:n.value},null,8,["breadcrumb"])]),sidebar:e(()=>[a(p,{class:"sidebar",sections:m})]),content:e(()=>[a(s)]),_:1})}}});export{io as default};
//# sourceMappingURL=Organization.74d787aa.js.map