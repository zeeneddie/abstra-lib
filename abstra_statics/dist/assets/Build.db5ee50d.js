import{d as k,eA as B,ez as I,G as w,a as h,b as o,c as d,w as a,eI as z,f as n,u as e,eu as p,eB as j,az as g,eC as x,b6 as C,ew as A,bx as D,cG as S}from"./outputWidgets.6d6b4a37.js";import{B as $}from"./BaseLayout.5a0efef2.js";import{a as M}from"./asyncComputed.17a6198d.js";import{_ as N}from"./component.vue_vue_type_script_setup_true_lang.f57f0633.js";import"./router.4e9df257.js";import{a as P}from"./build.9462cb9f.js";import"./index.2cafcd9c.js";import{P as R}from"./project.c406c3ff.js";import{O as V}from"./organization.f89e67cc.js";import{B as E,a as G,c as L}from"./index.838a4574.js";import{c as O}from"./index.0e216cc8.js";import"./gateway.7a58b0c8.js";import"./Log.5c4b495f.js";import"./ant-design.c99b7781.js";import"./index.f2a53bdb.js";import"./Title.b41b4f96.js";import"./index.1c6494ef.js";import"./WarningFilled.d99917ef.js";import"./index.72c317ca.js";import"./index.e1585735.js";import"./TabPane.2e98a9d7.js";import"./Form.1ff54ed5.js";import"./icons.28d0d847.js";import"./index.380a65f3.js";import"./record.7835c07e.js";import"./pubsub.7d377b25.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[s]="1e16c781-d742-4a86-a846-64b52e2f063a",i._sentryDebugIdIdentifier="sentry-dbid-1e16c781-d742-4a86-a846-64b52e2f063a")}catch{}})();const T={key:0},F={key:2},_e=k({__name:"Build",setup(i){const s=B(),c=I(),m=s.params.buildId,{result:t,loading:f}=M(async()=>{const r=await P.get(m),u=await R.get(r.projectId),l=await V.get(u.organizationId);return z({bs:r,project:u,organization:l})}),b=w(()=>!f.value&&t.value?[{label:"My organizations",path:"/organizations"},{label:t.value.organization.name,path:`/organizations/${t.value.organization.id}`},{label:`Build ${m.split("-")[0]}`,path:`/projects/${t.value.project.id}/builds`}]:void 0);function y(){var r;(r=t.value)!=null&&r.project.id&&c.push({name:"builds",params:{projectId:t.value.project.id}})}return(r,u)=>{const l=h("router-link");return o(),d($,null,{navbar:a(()=>[n(e(L),{title:"Inspect Build",style:{padding:"5px 10px"},onBack:y},{breadcrumb:a(()=>[b.value?(o(),d(e(E),{key:0},{default:a(()=>[(o(!0),p(C,null,j(b.value,(_,v)=>(o(),d(e(G),{key:v},{default:a(()=>[n(l,{to:_.path},{default:a(()=>[g(x(_.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):A("",!0)]),_:1})]),content:a(()=>[e(f)?(o(),p("div",T,[n(e(D))])):e(t)?(o(),d(N,{key:1,"build-spec":e(t).bs},null,8,["build-spec"])):(o(),p("div",F,[n(e(S),{direction:"vertical"},{default:a(()=>[n(e(O),null,{default:a(()=>[g("Could not find build")]),_:1})]),_:1})]))]),_:1})}}});export{_e as default};
//# sourceMappingURL=Build.db5ee50d.js.map
