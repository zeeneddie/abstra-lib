import{d as k,eB as B,eA as I,G as w,a as h,b as a,c as d,w as o,eK as j,f as n,u as t,ev as c,eC as x,aq as g,eD as z,bq as C,ex as A,bg as D,cC as S}from"./outputWidgets.653c8a73.js";import{B as $}from"./BaseLayout.097279b1.js";import{a as M}from"./asyncComputed.9f9227e3.js";import{_ as N}from"./component.vue_vue_type_script_setup_true_lang.62036b1f.js";import"./authorManager.3dac85e8.js";import{a as P}from"./build.f6ec18b1.js";import"./index.8017d516.js";import{P as R}from"./project.54cc20e1.js";import{O as V}from"./organization.2715d63a.js";import{B as q,a as E,c as L}from"./index.5adc073d.js";import{A as O}from"./Text.af56d73a.js";import"./gateway.cfb6397f.js";import"./Log.47bddf1f.js";import"./ant-design.98cd6ab7.js";import"./index.ffa5d9d6.js";import"./Title.3966c502.js";import"./StarFilled.fad29e50.js";import"./Timeline.91a23822.js";import"./WarningFilled.d99917ef.js";import"./Link.acf07363.js";import"./index.69010622.js";import"./log.5217a4b4.js";import"./TabPane.a4622189.js";import"./hasIn.574593fa.js";import"./index.3a8886cc.js";import"./isNumeric.75337b1e.js";import"./icons.a6b15bf7.js";import"./index.0275b9e2.js";import"./FormItem.ca4bccbe.js";import"./index.cf4c23b9.js";import"./record.74db4e46.js";import"./pubsub.96e918cc.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[s]="543fe321-32dd-4f62-9466-f05bbcb73ccb",i._sentryDebugIdIdentifier="sentry-dbid-543fe321-32dd-4f62-9466-f05bbcb73ccb")}catch{}})();const T={key:0},F={key:2},It=k({__name:"Build",setup(i){const s=B(),l=I(),m=s.params.buildId,{result:e,loading:b}=M(async()=>{const r=await P.get(m),p=await R.get(r.projectId),u=await V.get(p.organizationId);return j({bs:r,project:p,organization:u})}),f=w(()=>!b.value&&e.value?[{label:"My organizations",path:"/organizations"},{label:e.value.organization.name,path:`/organizations/${e.value.organization.id}`},{label:`Build ${m.split("-")[0]}`,path:`/projects/${e.value.project.id}/builds`}]:void 0);function y(){var r;(r=e.value)!=null&&r.project.id&&l.push({name:"builds",params:{projectId:e.value.project.id}})}return(r,p)=>{const u=h("router-link");return a(),d($,null,{navbar:o(()=>[n(t(L),{title:"Inspect Build",style:{padding:"5px 25px"},onBack:y},{breadcrumb:o(()=>[f.value?(a(),d(t(q),{key:0},{default:o(()=>[(a(!0),c(C,null,x(f.value,(_,v)=>(a(),d(t(E),{key:v},{default:o(()=>[n(u,{to:_.path},{default:o(()=>[g(z(_.label),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):A("",!0)]),_:1})]),content:o(()=>[t(b)?(a(),c("div",T,[n(t(D))])):t(e)?(a(),d(N,{key:1,"build-spec":t(e).bs},null,8,["build-spec"])):(a(),c("div",F,[n(t(S),{direction:"vertical"},{default:o(()=>[n(t(O),null,{default:o(()=>[g("Could not find build")]),_:1})]),_:1})]))]),_:1})}}});export{It as default};
//# sourceMappingURL=Build.42dce1d5.js.map
