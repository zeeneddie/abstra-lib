import{d as B,eB as k,eA as w,G as I,a as h,b as r,c as d,w as a,eG as j,f as i,u as e,eu as c,eC as z,aq as g,eD as x,a_ as C,ew as D,bu as A,cF as S}from"./outputWidgets.609857d3.js";import{B as $}from"./BaseLayout.6ac59d62.js";import{a as E}from"./asyncComputed.ee441ca1.js";import{a as M,_ as N}from"./BuildInspector.vue_vue_type_script_setup_true_lang.547959a9.js";import"./router.1cab72b8.js";import"./index.bd6c8cf6.js";import{P}from"./project.bebd4cec.js";import{O as R}from"./organization.9b406ccd.js";import{B as V,a as F,c as G}from"./index.2973cf41.js";import{c as L}from"./Text.5910ec7d.js";import"./gateway.18443e48.js";import"./icons.ae3b09ff.js";import"./index.3cc9f02e.js";import"./Base.cff9ddf5.js";import"./transButton.29406144.js";import"./Title.86fadf94.js";import"./index.efb45bdb.js";import"./record.5fdd269a.js";import"./pubsub.54491294.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[s]="cf7b32bb-fd2e-4371-a86a-ab622ff3c3f0",n._sentryDebugIdIdentifier="sentry-dbid-cf7b32bb-fd2e-4371-a86a-ab622ff3c3f0")}catch{}})();const O={key:0},T={key:2},ue=B({__name:"Build",setup(n){const s=k(),p=w(),m=s.params.buildId,{result:t,loading:f}=E(async()=>{const o=await M(m);if(!o)throw new Error("Build not found");const u=await P.get(o.projectId),l=await R.get(u.organizationId);return j({bs:o,project:u,organization:l})}),b=I(()=>!f.value&&t.value?[{label:"My organizations",path:"/organizations"},{label:t.value.organization.name,path:`/organizations/${t.value.organization.id}`},{label:`Build ${m.split("-")[0]}`,path:`/projects/${t.value.project.id}/builds`}]:void 0);function y(){var o;(o=t.value)!=null&&o.project.id&&p.push({name:"builds",params:{projectId:t.value.project.id}})}return(o,u)=>{const l=h("router-link");return r(),d($,null,{navbar:a(()=>[i(e(G),{title:"Inspect Build",style:{padding:"5px 10px"},onBack:y},{breadcrumb:a(()=>[b.value?(r(),d(e(V),{key:0},{default:a(()=>[(r(!0),c(C,null,z(b.value,(_,v)=>(r(),d(e(F),{key:v},{default:a(()=>[i(l,{to:_.path},{default:a(()=>[g(x(_.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):D("",!0)]),_:1})]),content:a(()=>[e(f)?(r(),c("div",O,[i(e(A))])):e(t)?(r(),d(N,{key:1,"build-spec":e(t).bs},null,8,["build-spec"])):(r(),c("div",T,[i(e(S),{direction:"vertical"},{default:a(()=>[i(e(L),null,{default:a(()=>[g("Could not find build")]),_:1})]),_:1})]))]),_:1})}}});export{ue as default};
//# sourceMappingURL=Build.71be7653.js.map
