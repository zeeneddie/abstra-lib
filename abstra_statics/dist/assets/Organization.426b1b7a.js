import{S as p}from"./Sidebar.258ad865.js";import{_ as c}from"./Navbar.vue_vue_type_script_setup_true_lang.9ef1f466.js";import{G as l,H as b,I as d}from"./icons.0a1291aa.js";import{d as u,eA as f,J as g,a as _,b as y,c as v,w as r,f as e}from"./outputWidgets.0607c5f7.js";import{a as w}from"./asyncComputed.9d360b31.js";import"./console.b766339a.js";import{O as z}from"./organization.3d6346f5.js";import"./index.cc469f4b.js";import{B as h}from"./BaseLayout.681de991.js";import"./Tooltip.7d7d88c9.js";import"./logo.084e5d7c.js";import"./index.60e069ab.js";import"./Title.64cf794c.js";import"./index.13cc6d2b.js";import"./index.fb95c825.js";import"./index.dc02ac8b.js";import"./Form.7b93f433.js";import"./index.e55c1dca.js";import"./dayjs.a8dca6cb.js";import"./index.4d00468a.js";import"./index.7145dba7.js";import"./TabPane.deb05916.js";import"./index.972bd3b8.js";import"./CollapsePanel.3b334b57.js";import"./index.b75020f9.js";import"./index.eb505871.js";import"./index.1038647d.js";import"./index.ea23cb6e.js";import"./index.1bda0976.js";import"./index.8b435834.js";import"./index.fc1e2b4e.js";import"./gateway.bbc1481c.js";import"./activeRecord.9f5b552a.js";import"./pubsub.c651758a.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="a1702a86-1882-4daa-bacb-0587bb007a72",o._sentryDebugIdIdentifier="sentry-dbid-a1702a86-1882-4daa-bacb-0587bb007a72")}catch{}})();const io=u({__name:"Organization",setup(o){const i=f().params.organizationId,{result:a}=w(()=>z.get(i)),n=g(()=>a.value?[{label:"My organizations",path:"/organizations"},{label:a.value.name,path:`/organizations/${a.value.id}`}]:void 0),m=[{name:"Organization",items:[{name:"Projects",icon:l,path:"projects"},{name:"Members",icon:b,path:"members"},{name:"Billing",icon:d,path:"billing",unavailable:!0}]}];return(I,B)=>{const s=_("router-view");return y(),v(h,null,{navbar:r(()=>[e(c,{breadcrumb:n.value},null,8,["breadcrumb"])]),sidebar:r(()=>[e(p,{class:"sidebar",sections:m})]),content:r(()=>[e(s)]),_:1})}}});export{io as default};
//# sourceMappingURL=Organization.426b1b7a.js.map
