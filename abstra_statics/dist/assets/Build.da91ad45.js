import{d as k,eA as B,ez as I,G as w,a as h,b as o,c as d,w as a,eI as z,f as n,u as e,eu as p,eB as j,az as g,eC as x,b6 as C,ew as A,bx as D,cG as S}from"./outputWidgets.2814e14e.js";import{B as $}from"./BaseLayout.8b1a23ac.js";import{a as M}from"./asyncComputed.c78dddc3.js";import{_ as N}from"./component.vue_vue_type_script_setup_true_lang.f0529c18.js";import"./router.e13be5f3.js";import{a as P}from"./build.8c9a3ab2.js";import"./index.4f381271.js";import{P as R}from"./project.36381a82.js";import{O as V}from"./organization.2996a6bf.js";import{B as E,a as G,c as L}from"./index.c5738c6e.js";import{c as O}from"./index.deb45d2e.js";import"./gateway.67da3b55.js";import"./Log.b08b2199.js";import"./ant-design.802027d3.js";import"./index.30335b35.js";import"./Title.fc84c5eb.js";import"./index.0fca315c.js";import"./WarningFilled.d99917ef.js";import"./index.9e7bf5a2.js";import"./index.90d49c37.js";import"./TabPane.dd9e76e9.js";import"./Form.89853767.js";import"./icons.92f42e32.js";import"./index.6f87a3c3.js";import"./record.f5c40e61.js";import"./pubsub.275dcc5a.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[s]="bb5afec6-af16-481f-b3e7-160efeeb89bb",i._sentryDebugIdIdentifier="sentry-dbid-bb5afec6-af16-481f-b3e7-160efeeb89bb")}catch{}})();const T={key:0},F={key:2},_e=k({__name:"Build",setup(i){const s=B(),c=I(),m=s.params.buildId,{result:t,loading:b}=M(async()=>{const r=await P.get(m),u=await R.get(r.projectId),l=await V.get(u.organizationId);return z({bs:r,project:u,organization:l})}),f=w(()=>!b.value&&t.value?[{label:"My organizations",path:"/organizations"},{label:t.value.organization.name,path:`/organizations/${t.value.organization.id}`},{label:`Build ${m.split("-")[0]}`,path:`/projects/${t.value.project.id}/builds`}]:void 0);function y(){var r;(r=t.value)!=null&&r.project.id&&c.push({name:"builds",params:{projectId:t.value.project.id}})}return(r,u)=>{const l=h("router-link");return o(),d($,null,{navbar:a(()=>[n(e(L),{title:"Inspect Build",style:{padding:"5px 10px"},onBack:y},{breadcrumb:a(()=>[f.value?(o(),d(e(E),{key:0},{default:a(()=>[(o(!0),p(C,null,j(f.value,(_,v)=>(o(),d(e(G),{key:v},{default:a(()=>[n(l,{to:_.path},{default:a(()=>[g(x(_.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):A("",!0)]),_:1})]),content:a(()=>[e(b)?(o(),p("div",T,[n(e(D))])):e(t)?(o(),d(N,{key:1,"build-spec":e(t).bs},null,8,["build-spec"])):(o(),p("div",F,[n(e(S),{direction:"vertical"},{default:a(()=>[n(e(O),null,{default:a(()=>[g("Could not find build")]),_:1})]),_:1})]))]),_:1})}}});export{_e as default};
//# sourceMappingURL=Build.da91ad45.js.map
