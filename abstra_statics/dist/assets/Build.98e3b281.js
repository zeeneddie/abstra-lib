import{d as k,eB as B,eA as I,G as w,a as h,b as o,c as d,w as a,eK as j,f as n,u as t,ev as l,eC as x,aq as g,eD as z,bq as C,ex as A,bg as D,cC as S}from"./outputWidgets.308fc26e.js";import{B as $}from"./BaseLayout.df0b4879.js";import{a as M}from"./asyncComputed.7ba10fe2.js";import{_ as N}from"./component.vue_vue_type_script_setup_true_lang.2c363002.js";import"./authorManager.61b245b2.js";import{a as P}from"./build.813b03d4.js";import"./index.61e3d21d.js";import{P as R}from"./project.ce2bdfda.js";import{O as V}from"./organization.9fc338e8.js";import{B as q,a as E,c as L}from"./index.a6ccaaa8.js";import{A as O}from"./Text.e9c2c18e.js";import"./gateway.8216c3fe.js";import"./Log.16987213.js";import"./ant-design.60fb69b6.js";import"./index.30ae7068.js";import"./Title.3127a7b5.js";import"./StarFilled.fad29e50.js";import"./Timeline.93e3acb9.js";import"./WarningFilled.d99917ef.js";import"./Link.8ca2f88d.js";import"./index.a1e57d14.js";import"./log.5140a56c.js";import"./TabPane.66ea01f5.js";import"./hasIn.1b9bee8b.js";import"./index.6c5645cd.js";import"./isNumeric.75337b1e.js";import"./icons.99d10079.js";import"./index.321bb81e.js";import"./FormItem.d0e912fc.js";import"./index.cf4c23b9.js";import"./record.1ea6e7e1.js";import"./pubsub.d9c6c339.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[s]="ada55d1e-6fbf-475a-8428-f6ce6f2e7cb0",i._sentryDebugIdIdentifier="sentry-dbid-ada55d1e-6fbf-475a-8428-f6ce6f2e7cb0")}catch{}})();const T={key:0},F={key:2},It=k({__name:"Build",setup(i){const s=B(),c=I(),m=s.params.buildId,{result:e,loading:f}=M(async()=>{const r=await P.get(m),p=await R.get(r.projectId),u=await V.get(p.organizationId);return j({bs:r,project:p,organization:u})}),b=w(()=>!f.value&&e.value?[{label:"My organizations",path:"/organizations"},{label:e.value.organization.name,path:`/organizations/${e.value.organization.id}`},{label:`Build ${m.split("-")[0]}`,path:`/projects/${e.value.project.id}/builds`}]:void 0);function y(){var r;(r=e.value)!=null&&r.project.id&&c.push({name:"builds",params:{projectId:e.value.project.id}})}return(r,p)=>{const u=h("router-link");return o(),d($,null,{navbar:a(()=>[n(t(L),{title:"Inspect Build",style:{padding:"5px 25px"},onBack:y},{breadcrumb:a(()=>[b.value?(o(),d(t(q),{key:0},{default:a(()=>[(o(!0),l(C,null,x(b.value,(_,v)=>(o(),d(t(E),{key:v},{default:a(()=>[n(u,{to:_.path},{default:a(()=>[g(z(_.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):A("",!0)]),_:1})]),content:a(()=>[t(f)?(o(),l("div",T,[n(t(D))])):t(e)?(o(),d(N,{key:1,"build-spec":t(e).bs},null,8,["build-spec"])):(o(),l("div",F,[n(t(S),{direction:"vertical"},{default:a(()=>[n(t(O),null,{default:a(()=>[g("Could not find build")]),_:1})]),_:1})]))]),_:1})}}});export{It as default};
//# sourceMappingURL=Build.98e3b281.js.map
