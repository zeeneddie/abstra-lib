import{d as k,eB as B,eA as I,G as w,a as h,b as o,c as d,w as a,eJ as j,f as n,u as e,ev as l,eC as x,aq as g,eD as z,bq as C,ex as D,bg as A,cC as S}from"./outputWidgets.737278d2.js";import{B as $}from"./BaseLayout.336b9721.js";import{a as M}from"./asyncComputed.a421a144.js";import{_ as N}from"./component.vue_vue_type_script_setup_true_lang.e2673a5f.js";import"./authorManager.f6785b31.js";import{a as P}from"./build.222714b5.js";import"./index.7dd076b6.js";import{P as R}from"./project.d832252e.js";import{O as V}from"./organization.706dc625.js";import{B as q,a as E,c as L}from"./index.d81945ac.js";import{a as O}from"./Text.208da576.js";import"./gateway.5706e313.js";import"./WarningFilled.d99917ef.js";import"./log.5a60c69c.js";import"./ant-design.38d76521.js";import"./index.10799228.js";import"./Modal.2dd7ed00.js";import"./index.8448ed05.js";import"./Link.c8e2f9ae.js";import"./Title.17b695f3.js";import"./index.ab3c62e5.js";import"./TabPane.a6437ae3.js";import"./hasIn.1648684d.js";import"./index.f8d78ed9.js";import"./isNumeric.75337b1e.js";import"./icons.00e0b192.js";import"./index.dd7f65fc.js";import"./FormItem.b35c2502.js";import"./index.cf4c23b9.js";import"./record.605beade.js";import"./pubsub.88c6ed51.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[s]="1aaa0e2a-dd34-4eed-832d-016f05fd1e25",i._sentryDebugIdIdentifier="sentry-dbid-1aaa0e2a-dd34-4eed-832d-016f05fd1e25")}catch{}})();const T={key:0},F={key:2},Be=k({__name:"Build",setup(i){const s=B(),m=I(),c=s.params.buildId,{result:t,loading:f}=M(async()=>{const r=await P.get(c),p=await R.get(r.projectId),u=await V.get(p.organizationId);return j({bs:r,project:p,organization:u})}),b=w(()=>!f.value&&t.value?[{label:"My organizations",path:"/organizations"},{label:t.value.organization.name,path:`/organizations/${t.value.organization.id}`},{label:`Build ${c.split("-")[0]}`,path:`/projects/${t.value.project.id}/builds`}]:void 0);function y(){var r;(r=t.value)!=null&&r.project.id&&m.push({name:"builds",params:{projectId:t.value.project.id}})}return(r,p)=>{const u=h("router-link");return o(),d($,null,{navbar:a(()=>[n(e(L),{title:"Inspect Build",style:{padding:"5px 25px"},onBack:y},{breadcrumb:a(()=>[b.value?(o(),d(e(q),{key:0},{default:a(()=>[(o(!0),l(C,null,x(b.value,(_,v)=>(o(),d(e(E),{key:v},{default:a(()=>[n(u,{to:_.path},{default:a(()=>[g(z(_.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):D("",!0)]),_:1})]),content:a(()=>[e(f)?(o(),l("div",T,[n(e(A))])):e(t)?(o(),d(N,{key:1,"build-spec":e(t).bs},null,8,["build-spec"])):(o(),l("div",F,[n(e(S),{direction:"vertical"},{default:a(()=>[n(e(O),null,{default:a(()=>[g("Could not find build")]),_:1})]),_:1})]))]),_:1})}}});export{Be as default};
//# sourceMappingURL=Build.c1210b78.js.map
