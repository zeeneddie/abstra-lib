import{d as C,r as D,eB as I,eA as j,u as e,b as c,c as d,w as a,f as u,aA as r,b$ as s,cF as x,ew as P,cp as E,t as R}from"./outputWidgets.acb147ed.js";import{W as S}from"./workspaces.c83aff89.js";import{l as f}from"./DocsButton.vue_vue_type_script_setup_true_lang.619d9307.js";import{p as U}from"./popupNotifcation.54f93a4f.js";import{a as M}from"./asyncComputed.95a36516.js";import{S as N}from"./index.71ad1466.js";import"./index.c1379052.js";import{M as h}from"./transButton.cef1faca.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[l]="ba3b5f2b-f207-43fd-a841-b01322f0448f",n._sentryDebugIdIdentifier="sentry-dbid-ba3b5f2b-f207-43fd-a841-b01322f0448f")}catch{}})();const V=C({__name:"LoginBlock",setup(n){var b;const l="https://cloud.abstra.io/api-key?"+new URLSearchParams({redirect:location.href}),i=D(!1),p=(b=N.instance)==null?void 0:b.deployEnabled,{loading:y,result:t,refetch:g}=M(()=>f.get()),k=I(),w=j();function v(){const o=new URL(location.href);o.searchParams.delete("api-key"),w.replace(o.pathname+o.search)}function L(){var o;(o=t.value)!=null&&o.logged?h.success({title:"You're logged in!",content:"You can now deploy your project to Abstra Cloud."}):h.error({title:"Login failed",content:"Please try again. If the problem persists, contact help@abstra.io."})}const _=k.query["api-key"];typeof _=="string"&&f.create(_).then(g).then(v).then(L);async function A(){!t.value||(await f.delete(),g())}async function B(){if(!!t.value){i.value=!0;try{await S.deploy(),window.open(`https://cloud.abstra.io/projects/${t.value.logged&&t.value.project_id}/builds`,"_blank")}catch(o){U("Deploy failed",String(o))}i.value=!1}}return(o,$)=>{var m;return(m=e(t))!=null&&m.logged?(c(),d(e(E),{key:0},{default:a(()=>[u(e(s),{href:`https://cloud.abstra.io/projects/${e(t).project_id}`,target:"_blank"},{default:a(()=>[r(" Go to console ")]),_:1},8,["href"]),!i.value&&e(p)?(c(),d(e(x),{key:0,title:"Are you sure you want to deploy this project to Abstra Cloud?",onConfirm:B},{default:a(()=>[u(e(s),null,{default:a(()=>[r("Deploy")]),_:1})]),_:1})):e(p)?(c(),d(e(s),{key:1,loading:""},{default:a(()=>[r("Deploying")]),_:1})):P("",!0),u(e(s),{onClick:A},{default:a(()=>[r("Logout")]),_:1})]),_:1})):(c(),d(e(s),{key:1,href:l,loading:e(y),disabled:e(y)},{default:a(()=>[r(" Login to deploy ")]),_:1},8,["loading","disabled"]))}}});const H=R(V,[["__scopeId","data-v-7b8037ee"]]);export{H as L};
//# sourceMappingURL=LoginBlock.8de49c70.js.map
