import{d as k,eB as B,eA as I,G as w,a as h,b as o,c as p,w as a,eK as j,f as n,u as t,ev as c,eC as x,aq as g,eD as z,bq as C,ex as A,bg as D,cC as S}from"./outputWidgets.b3a86e7b.js";import{B as $}from"./BaseLayout.3f35a302.js";import{a as M}from"./asyncComputed.bb41673e.js";import{_ as N}from"./component.vue_vue_type_script_setup_true_lang.3dc64974.js";import"./authorManager.7c15a400.js";import{a as P}from"./build.e492b381.js";import"./index.bff3f4d9.js";import{P as R}from"./project.b1abb7ad.js";import{O as V}from"./organization.2a5ea366.js";import{B as q,a as E,c as L}from"./index.79b9a86a.js";import{A as O}from"./Text.29cf7118.js";import"./gateway.20a044dd.js";import"./Log.934b3aee.js";import"./ant-design.5d22751a.js";import"./index.b477882f.js";import"./Title.a7229bb6.js";import"./StarFilled.fad29e50.js";import"./Timeline.28970e56.js";import"./WarningFilled.d99917ef.js";import"./Link.6f75ee83.js";import"./index.df7c5617.js";import"./log.937688ab.js";import"./TabPane.f4792853.js";import"./hasIn.5581b27a.js";import"./index.d5594a82.js";import"./isNumeric.75337b1e.js";import"./icons.34387b26.js";import"./index.0904fc66.js";import"./FormItem.cdba7330.js";import"./index.cf4c23b9.js";import"./record.55ec1174.js";import"./pubsub.60e1edc4.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[s]="7312b0eb-c1ec-4234-ab24-1b404dba3fc6",i._sentryDebugIdIdentifier="sentry-dbid-7312b0eb-c1ec-4234-ab24-1b404dba3fc6")}catch{}})();const T={key:0},F={key:2},It=k({__name:"Build",setup(i){const s=B(),l=I(),m=s.params.buildId,{result:e,loading:b}=M(async()=>{const r=await P.get(m),d=await R.get(r.projectId),u=await V.get(d.organizationId);return j({bs:r,project:d,organization:u})}),f=w(()=>!b.value&&e.value?[{label:"My organizations",path:"/organizations"},{label:e.value.organization.name,path:`/organizations/${e.value.organization.id}`},{label:`Build ${m.split("-")[0]}`,path:`/projects/${e.value.project.id}/builds`}]:void 0);function y(){var r;(r=e.value)!=null&&r.project.id&&l.push({name:"builds",params:{projectId:e.value.project.id}})}return(r,d)=>{const u=h("router-link");return o(),p($,null,{navbar:a(()=>[n(t(L),{title:"Inspect Build",style:{padding:"5px 25px"},onBack:y},{breadcrumb:a(()=>[f.value?(o(),p(t(q),{key:0},{default:a(()=>[(o(!0),c(C,null,x(f.value,(_,v)=>(o(),p(t(E),{key:v},{default:a(()=>[n(u,{to:_.path},{default:a(()=>[g(z(_.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):A("",!0)]),_:1})]),content:a(()=>[t(b)?(o(),c("div",T,[n(t(D))])):t(e)?(o(),p(N,{key:1,"build-spec":t(e).bs},null,8,["build-spec"])):(o(),c("div",F,[n(t(S),{direction:"vertical"},{default:a(()=>[n(t(O),null,{default:a(()=>[g("Could not find build")]),_:1})]),_:1})]))]),_:1})}}});export{It as default};
//# sourceMappingURL=Build.b1b722ac.js.map
