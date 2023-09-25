import{d as g,r as k,u as e,b as s,c,bP as m,w as o,f as u,b0 as l,cb as d,cM as w,cy as h,v}from"./registerWidgets.ca57da3e.js";import{W as L}from"./workspaces.0ed1b422.js";import{L as f}from"./DocsButton.vue_vue_type_script_setup_true_lang.e215c49e.js";import{p as I}from"./popupNotifcation.1fd3422a.js";import{a as D}from"./asyncComputed.ae0b6a3c.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[t]="cf430cb1-7a84-49ea-88c4-601507dbe43b",n._sentryDebugIdIdentifier="sentry-dbid-cf430cb1-7a84-49ea-88c4-601507dbe43b")}catch{}})();const B=g({__name:"LoginBlock",setup(n){const t=k(!1),{loading:i,result:a,refetch:p}=D(()=>f.get());async function y(){const r=prompt(`Login to our console at https://cloud.abstra.io and get an API Key to deploy your Projects.

Enter your API Key here:`);!r||(await f.create(r),p())}async function _(){!a.value||(await a.value.delete(),p())}async function b(){if(!!a.value){t.value=!0;try{await L.deploy(),window.open(`https://cloud.abstra.io/projects/${a.value.projectId}/builds`,"_blank")}catch(r){I("Deploy failed",String(r))}t.value=!1}}return(r,C)=>e(i)?(s(),c(e(m),{key:0})):e(a)?(s(),c(e(h),{key:1},{default:o(()=>[u(e(d),{href:`https://cloud.abstra.io/projects/${e(a).projectId}`,target:"_blank"},{default:o(()=>[l("Go to console ")]),_:1},8,["href"]),t.value?(s(),c(e(d),{key:1},{default:o(()=>[l("Deploying ...")]),_:1})):(s(),c(e(w),{key:0,title:"Are you sure you want to deploy this project to Abstra Cloud?",onConfirm:b},{default:o(()=>[u(e(d),null,{default:o(()=>[l("Deploy")]),_:1})]),_:1})),u(e(d),{onClick:_},{default:o(()=>[l("Logout")]),_:1})]),_:1})):(s(),c(e(d),{key:2,onClick:y},{default:o(()=>[l("Login to deploy")]),_:1}))}});const M=v(B,[["__scopeId","data-v-227d4310"]]);export{M as L};
//# sourceMappingURL=LoginBlock.4c20bc2f.js.map