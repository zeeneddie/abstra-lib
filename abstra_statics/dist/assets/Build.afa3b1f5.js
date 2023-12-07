import{d as k,eB as B,eA as w,G as I,a as h,b as o,c as d,w as t,eG as j,f as i,u as e,eu as c,eC as z,aq as g,eD as x,a_ as C,ew as D,bu as A,cF as S}from"./outputWidgets.a5fcf389.js";import{B as $}from"./BaseLayout.19687f5a.js";import{a as M}from"./asyncComputed.b7d3265e.js";import{_ as N}from"./component.vue_vue_type_script_setup_true_lang.927cbac0.js";import"./router.8a74f04b.js";import{a as P}from"./build.f1d97524.js";import"./index.b67da7e9.js";import{P as R}from"./project.26e79e92.js";import{O as V}from"./organization.269baf36.js";import{B as E,a as F,c as G}from"./index.a675a1a6.js";import{c as L}from"./Text.d2260f67.js";import"./icons.1a1dc210.js";import"./index.46488d8d.js";import"./Base.175f3ec4.js";import"./transButton.fc314012.js";import"./Title.42ad4bfb.js";import"./index.39083dd8.js";import"./gateway.5878b159.js";import"./record.e2e84f62.js";import"./pubsub.903f7e54.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[s]="aa41ab7c-0ac7-44fd-add8-85a9fbedab8e",n._sentryDebugIdIdentifier="sentry-dbid-aa41ab7c-0ac7-44fd-add8-85a9fbedab8e")}catch{}})();const O={key:0},T={key:2},le=k({__name:"Build",setup(n){const s=B(),p=w(),m=s.params.buildId,{result:a,loading:f}=M(async()=>{const r=await P.get(m),u=await R.get(r.projectId),l=await V.get(u.organizationId);return j({bs:r,project:u,organization:l})}),b=I(()=>!f.value&&a.value?[{label:"My organizations",path:"/organizations"},{label:a.value.organization.name,path:`/organizations/${a.value.organization.id}`},{label:`Build ${m.split("-")[0]}`,path:`/projects/${a.value.project.id}/builds`}]:void 0);function y(){var r;(r=a.value)!=null&&r.project.id&&p.push({name:"builds",params:{projectId:a.value.project.id}})}return(r,u)=>{const l=h("router-link");return o(),d($,null,{navbar:t(()=>[i(e(G),{title:"Inspect Build",style:{padding:"5px 10px"},onBack:y},{breadcrumb:t(()=>[b.value?(o(),d(e(E),{key:0},{default:t(()=>[(o(!0),c(C,null,z(b.value,(_,v)=>(o(),d(e(F),{key:v},{default:t(()=>[i(l,{to:_.path},{default:t(()=>[g(x(_.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):D("",!0)]),_:1})]),content:t(()=>[e(f)?(o(),c("div",O,[i(e(A))])):e(a)?(o(),d(N,{key:1,"build-spec":e(a).bs},null,8,["build-spec"])):(o(),c("div",T,[i(e(S),{direction:"vertical"},{default:t(()=>[i(e(L),null,{default:t(()=>[g("Could not find build")]),_:1})]),_:1})]))]),_:1})}}});export{le as default};
//# sourceMappingURL=Build.afa3b1f5.js.map
