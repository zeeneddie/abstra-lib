import{d as k,eB as B,eA as I,G as w,a as h,b as o,c as d,w as a,eJ as j,f as n,u as e,ev as l,eC as x,aq as g,eD as z,bq as C,ex as D,bg as A,cC as S}from"./outputWidgets.31ce2d5c.js";import{B as $}from"./BaseLayout.bada4c41.js";import{a as M}from"./asyncComputed.7e3e21f4.js";import{_ as N}from"./component.vue_vue_type_script_setup_true_lang.acbbae2b.js";import"./router.8f071dc2.js";import{a as P}from"./build.f953a592.js";import"./index.e05c62e3.js";import{P as R}from"./project.41cba40c.js";import{O as V}from"./organization.e24bfce8.js";import{B as q,a as E,c as L}from"./index.cad5b763.js";import{a as O}from"./Text.46c5bec2.js";import"./gateway.3615e807.js";import"./Log.b8415eca.js";import"./ant-design.feb03817.js";import"./index.7e964756.js";import"./Modal.32a7843c.js";import"./index.fa166136.js";import"./WarningFilled.d99917ef.js";import"./Link.c257b01e.js";import"./Base.eeda2dae.js";import"./index.0d76378d.js";import"./TabPane.b9a32e73.js";import"./hasIn.932773c2.js";import"./index.f1fa712c.js";import"./isNumeric.75337b1e.js";import"./icons.266b547d.js";import"./index.b9f4ff2a.js";import"./FormItem.5f0b61bf.js";import"./index.cf4c23b9.js";import"./record.b2148451.js";import"./pubsub.2d9ab3f4.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[s]="9d4b8e92-29c0-47a3-8eef-0bc7d4a3b6fa",i._sentryDebugIdIdentifier="sentry-dbid-9d4b8e92-29c0-47a3-8eef-0bc7d4a3b6fa")}catch{}})();const T={key:0},F={key:2},Be=k({__name:"Build",setup(i){const s=B(),c=I(),m=s.params.buildId,{result:t,loading:b}=M(async()=>{const r=await P.get(m),p=await R.get(r.projectId),u=await V.get(p.organizationId);return j({bs:r,project:p,organization:u})}),f=w(()=>!b.value&&t.value?[{label:"My organizations",path:"/organizations"},{label:t.value.organization.name,path:`/organizations/${t.value.organization.id}`},{label:`Build ${m.split("-")[0]}`,path:`/projects/${t.value.project.id}/builds`}]:void 0);function y(){var r;(r=t.value)!=null&&r.project.id&&c.push({name:"builds",params:{projectId:t.value.project.id}})}return(r,p)=>{const u=h("router-link");return o(),d($,null,{navbar:a(()=>[n(e(L),{title:"Inspect Build",style:{padding:"5px 25px"},onBack:y},{breadcrumb:a(()=>[f.value?(o(),d(e(q),{key:0},{default:a(()=>[(o(!0),l(C,null,x(f.value,(_,v)=>(o(),d(e(E),{key:v},{default:a(()=>[n(u,{to:_.path},{default:a(()=>[g(z(_.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):D("",!0)]),_:1})]),content:a(()=>[e(b)?(o(),l("div",T,[n(e(A))])):e(t)?(o(),d(N,{key:1,"build-spec":e(t).bs},null,8,["build-spec"])):(o(),l("div",F,[n(e(S),{direction:"vertical"},{default:a(()=>[n(e(O),null,{default:a(()=>[g("Could not find build")]),_:1})]),_:1})]))]),_:1})}}});export{Be as default};
//# sourceMappingURL=Build.f3f1c0bf.js.map
