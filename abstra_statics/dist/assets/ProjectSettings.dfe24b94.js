import{a as B}from"./asyncComputed.17a6198d.js";import"./router.4e9df257.js";import{d as k,r as y,b as h,c as S,w as a,az as r,ey as P,u as e,bX as T,cA as F,eJ as H,G as w,f as t,e as f,eC as m,bQ as U,eu as D,ew as E,cG as V,eA as N}from"./outputWidgets.6d6b4a37.js";import"./index.2cafcd9c.js";import{P as I}from"./project.c406c3ff.js";import{A as j}from"./Title.b41b4f96.js";import{b as C,c as i}from"./index.0e216cc8.js";import{A as _}from"./index.9eddb8ae.js";import{A as $,F as R}from"./Form.1ff54ed5.js";import"./index.72c317ca.js";import"./record.7835c07e.js";import"./pubsub.7d377b25.js";import"./gateway.7a58b0c8.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[s]="95fe076f-f6fe-42b8-96ce-361fe92b023b",u._sentryDebugIdIdentifier="sentry-dbid-95fe076f-f6fe-42b8-96ce-361fe92b023b")}catch{}})();const z=k({__name:"SaveButton",props:{model:{},disabled:{type:Boolean}},emits:["error"],setup(u,{emit:s}){const l=u,d=y(!1),v=y(null);async function c(){d.value=!0;try{await l.model.save()}catch(o){o instanceof Error&&(s("error",o),F.error({message:"Error",description:o.message}),v.value=o)}finally{d.value=!1}}return addEventListener("keydown",o=>{(o.metaKey||o.ctrlKey)&&o.key==="s"&&(o.preventDefault(),c())}),addEventListener("beforeunload",o=>{l.model.hasChanges()&&(o.preventDefault(),o.returnValue="")}),(o,b)=>{var g,n,p;return h(),S(e(T),{class:P(["save-button",{changes:(g=o.model)==null?void 0:g.hasChanges()}]),loading:d.value,disabled:(p=o.disabled)!=null?p:!((n=o.model)!=null&&n.hasChanges()),onClick:b[0]||(b[0]=A=>c())},{default:a(()=>[r(" Save ")]),_:1},8,["class","loading","disabled"])}}}),G={key:0},K=k({__name:"SubdomainEditor",props:{project:{}},setup(u){const s=u,l=y(void 0),d=H.exports.debounce(async()=>{try{const{available:n}=await s.project.checkSubdomain();l.value=n?"available":"unavailable"}catch{l.value=void 0}},500);function v(){s.project.subdomain?(l.value="loading",d()):l.value="invalid"}const c=w(()=>{switch(l.value){case"invalid":return"error";case"loading":return"validating";case"available":return"success";case"unavailable":return"error";default:return}}),o=w(()=>{switch(l.value){case"loading":return"Checking availability...";case"available":return"Available";case"unavailable":return"Unavailable";case"invalid":return"Invalid subdomain";default:return}}),b=()=>{s.project.subdomain=I.formatSubdomain(s.project.subdomain),v()};function g(){s.project.resetChanges(),l.value=void 0}return(n,p)=>(h(),S(e(V),{direction:"vertical"},{default:a(()=>[t(e(j),{level:2},{default:a(()=>[r("Subdomain")]),_:1}),t(e(C),null,{default:a(()=>[r(" Every project in Abstra Cloud comes with a default subdomain, which will appear on all shared project links. ")]),_:1}),t(e(_),null,{default:a(()=>[t(e(i),null,{default:a(()=>[r("Forms available at:")]),_:1}),t(e(i),{code:""},{default:a(()=>[f("span",null,m(n.project.getUrl("[PATH]")),1)]),_:1})]),_:1}),t(e(_),null,{default:a(()=>[t(e(i),null,{default:a(()=>[r("Hooks available at:")]),_:1}),t(e(i),{code:""},{default:a(()=>[f("span",null,m(n.project.getUrl("_hooks/[PATH]")),1)]),_:1})]),_:1}),t(e(R),null,{default:a(()=>[t(e($),{"validate-status":c.value,help:o.value,"has-feedback":""},{default:a(()=>[t(e(U),{value:n.project.subdomain,"onUpdate:value":p[0]||(p[0]=A=>n.project.subdomain=A),type:"text",loading:l.value==="loading",onBlur:b},{addonBefore:a(()=>[r("https://")]),addonAfter:a(()=>[r(".abstra.app")]),_:1},8,["value","loading"])]),_:1},8,["validate-status","help"]),t(z,{model:n.project,disabled:l.value!=="available",onError:g},null,8,["model","disabled"])]),_:1}),n.project.customDomain?(h(),D("div",G,[t(e(j),{level:2},{default:a(()=>[r("Custom Domain")]),_:1}),t(e(C),null,{default:a(()=>[r(" Your project also has a custom domain: "),t(e(i),{code:""},{default:a(()=>[f("span",null,m(n.project.customDomain),1)]),_:1})]),_:1}),t(e(_),null,{default:a(()=>[t(e(i),null,{default:a(()=>[r("Forms available at:")]),_:1}),t(e(i),{code:""},{default:a(()=>[f("span",null,m(n.project.getCustomDomainUrl("[PATH]")),1)]),_:1})]),_:1}),t(e(_),null,{default:a(()=>[t(e(i),null,{default:a(()=>[r("Hooks available at:")]),_:1}),t(e(i),{code:""},{default:a(()=>[f("span",null,m(n.project.getCustomDomainUrl("_hooks/[PATH]")),1)]),_:1})]),_:1})])):E("",!0)]),_:1}))}}),L={key:0,class:"project-settings"},oe=k({__name:"ProjectSettings",setup(u){const l=N().params.projectId,{result:d}=B(()=>I.get(l));return(v,c)=>e(d)?(h(),D("div",L,[t(e(j),null,{default:a(()=>[r("Project Settings")]),_:1}),t(K,{project:e(d)},null,8,["project"])])):E("",!0)}});export{oe as default};
//# sourceMappingURL=ProjectSettings.dfe24b94.js.map