import{a as C}from"./asyncComputed.1e379dfc.js";import{P as S}from"./project.4932231c.js";import"./console.da68e7a5.js";import{d as h,r as b,b as g,c as w,w as o,aJ as n,ey as I,u as a,c4 as E,cG as B,t as D,J as y,f as r,e as _,eC as j,bZ as T,eA as P,et as F,ew as V}from"./outputWidgets.cdd73ae7.js";import"./index.3432358a.js";import{n as N}from"./index.bb21662d.js";import{c as A,A as H}from"./Title.a585f3b7.js";import{A as R,a as f}from"./index.5d73eb3d.js";import{A as k}from"./index.71dc62b0.js";import{F as $}from"./Form.989d9f34.js";import{A as x}from"./index.23699d9e.js";import"./gateway.701cfd2d.js";import"./activeRecord.7c91f6d1.js";import"./pubsub.f5d6db77.js";import"./CollapsePanel.b3533acc.js";import"./index.3a1041eb.js";import"./index.0ff4e9e1.js";import"./dayjs.8c54e3e0.js";import"./index.74f12426.js";import"./index.d0d1a721.js";import"./TabPane.df53a43e.js";import"./index.4b8538be.js";import"./index.08f7b30c.js";import"./index.2eef836d.js";import"./index.2a1509cb.js";import"./index.165bdf52.js";import"./index.1d69d182.js";import"./index.2ae175da.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[l]="6ee55bb8-795f-4833-b465-271a171a1662",i._sentryDebugIdIdentifier="sentry-dbid-6ee55bb8-795f-4833-b465-271a171a1662")}catch{}})();const J=h({__name:"SaveButton",props:{model:{},disabled:{type:Boolean}},emits:["error"],setup(i,{emit:l}){const t=i,u=b(!1),c=b(null);async function d(){u.value=!0;try{await t.model.save()}catch(e){e instanceof Error&&(l("error",e),B.error({message:"Error",description:e.message}),c.value=e)}finally{u.value=!1}}return addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey)&&e.key==="s"&&(e.preventDefault(),d())}),addEventListener("beforeunload",e=>{t.model.hasChanges()&&(e.preventDefault(),e.returnValue="")}),(e,p)=>{var m,s,v;return g(),w(a(E),{class:I(["save-button",{changes:(m=e.model)==null?void 0:m.hasChanges()}]),loading:u.value,disabled:(v=e.disabled)!=null?v:!((s=e.model)!=null&&s.hasChanges()),onClick:p[0]||(p[0]=q=>d())},{default:o(()=>[n(" Save ")]),_:1},8,["class","loading","disabled"])}}}),K=h({__name:"SubdomainEditor",props:{project:{}},setup(i){const l=i,t=b(void 0),u=D.exports.debounce(async()=>{try{const{available:s}=await l.project.checkSubdomain();t.value=s?"available":"unavailable"}catch{t.value=void 0}},500);function c(){l.project.subdomain?(t.value="loading",u()):t.value="invalid"}const d=y(()=>{switch(t.value){case"invalid":return"error";case"loading":return"validating";case"available":return"success";case"unavailable":return"error";default:return}}),e=y(()=>{switch(t.value){case"loading":return"Checking availability...";case"available":return"Available";case"unavailable":return"Unavailable";case"invalid":return"Invalid subdomain";default:return}}),p=s=>{l.project.subdomain=N(s.target.value,{replacement:"-",lower:!0,strict:!0}),c()};function m(){l.project.resetChanges(),t.value=void 0}return(s,v)=>(g(),w(a(x),{direction:"vertical"},{default:o(()=>[r(a(A),{level:2},{default:o(()=>[n("Subdomain")]),_:1}),r(a(R),null,{default:o(()=>[n(" Every project in Abstra Cloud comes with a default subdomain, which will appear on all shared project links. ")]),_:1}),r(a(k),null,{default:o(()=>[r(a(f),null,{default:o(()=>[n("Forms and Dashes available at:")]),_:1}),r(a(f),{code:""},{default:o(()=>[n("https://"),_("span",null,j(s.project.subdomain),1),n(".abstra.app/[PATH] ")]),_:1})]),_:1}),r(a(k),null,{default:o(()=>[r(a(f),null,{default:o(()=>[n("Hooks available at:")]),_:1}),r(a(f),{code:""},{default:o(()=>[n(" https://"),_("span",null,j(s.project.subdomain),1),n(".abstra.app/_hooks/[PATH] ")]),_:1})]),_:1}),r(a($),null,{default:o(()=>[r(a(H),{"validate-status":d.value,help:e.value,"has-feedback":""},{default:o(()=>[r(a(T),{value:s.project.subdomain,type:"text",loading:t.value==="loading",onInput:p},{addonBefore:o(()=>[n("https://")]),addonAfter:o(()=>[n(".abstra.app")]),_:1},8,["value","loading"])]),_:1},8,["validate-status","help"]),r(J,{model:s.project,disabled:t.value!=="available",onError:m},null,8,["model","disabled"])]),_:1})]),_:1}))}}),L={key:0,class:"project-settings"},ge=h({__name:"ProjectSettings",setup(i){const t=P().params.projectId,{result:u}=C(()=>S.get(t));return(c,d)=>a(u)?(g(),F("div",L,[r(a(A),null,{default:o(()=>[n("Project Settings")]),_:1}),r(K,{project:a(u)},null,8,["project"])])):V("",!0)}});export{ge as default};
//# sourceMappingURL=ProjectSettings.9e11830f.js.map