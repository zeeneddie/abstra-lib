import{a as C}from"./asyncComputed.74bbd75d.js";import{P as S}from"./project.13fd7163.js";import"./console.1e555cd2.js";import{d as h,r as b,b as g,c as w,w as o,b2 as n,ey as I,u as a,cd as E,cN as B,t as D,J as y,f as r,e as _,eC as j,c6 as T,eA as P,et as F,ew as N}from"./outputWidgets.72a8a893.js";import"./index.8450d9eb.js";import{n as V}from"./index.46b9286c.js";import{c as A,A as H}from"./Title.fe2fe6f3.js";import{A as R,a as f}from"./index.ab196bdb.js";import{A as k}from"./index.dc10183a.js";import{F as $}from"./Form.48bbf8f1.js";import{A as x}from"./index.6c331fbc.js";import"./gateway.3abe44fe.js";import"./activeRecord.51d9a2df.js";import"./pubsub.ae9f2be4.js";import"./index.90ebe0b1.js";import"./index.22f0a69d.js";import"./dayjs.1a33e42f.js";import"./index.f700047f.js";import"./index.cd22db62.js";import"./TabPane.dd1f5358.js";import"./index.6f18afbc.js";import"./index.71acb1cc.js";import"./index.08449dba.js";import"./index.dea3d4a3.js";import"./index.c10e75ad.js";import"./index.3637b6d9.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[l]="866229ae-4536-45a4-8bdc-4322b0f01954",i._sentryDebugIdIdentifier="sentry-dbid-866229ae-4536-45a4-8bdc-4322b0f01954")}catch{}})();const K=h({__name:"SaveButton",props:{model:{},disabled:{type:Boolean}},emits:["error"],setup(i,{emit:l}){const t=i,u=b(!1),c=b(null);async function d(){u.value=!0;try{await t.model.save()}catch(e){e instanceof Error&&(l("error",e),B.error({message:"Error",description:e.message}),c.value=e)}finally{u.value=!1}}return addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey)&&e.key==="s"&&(e.preventDefault(),d())}),addEventListener("beforeunload",e=>{t.model.hasChanges()&&(e.preventDefault(),e.returnValue="")}),(e,p)=>{var m,s,v;return g(),w(a(E),{class:I(["save-button",{changes:(m=e.model)==null?void 0:m.hasChanges()}]),loading:u.value,disabled:(v=e.disabled)!=null?v:!((s=e.model)!=null&&s.hasChanges()),onClick:p[0]||(p[0]=z=>d())},{default:o(()=>[n(" Save ")]),_:1},8,["class","loading","disabled"])}}}),L=h({__name:"SubdomainEditor",props:{project:{}},setup(i){const l=i,t=b(void 0),u=D.exports.debounce(async()=>{try{const{available:s}=await l.project.checkSubdomain();t.value=s?"available":"unavailable"}catch{t.value=void 0}},500);function c(){l.project.subdomain?(t.value="loading",u()):t.value="invalid"}const d=y(()=>{switch(t.value){case"invalid":return"error";case"loading":return"validating";case"available":return"success";case"unavailable":return"error";default:return}}),e=y(()=>{switch(t.value){case"loading":return"Checking availability...";case"available":return"Available";case"unavailable":return"Unavailable";case"invalid":return"Invalid subdomain";default:return}}),p=s=>{l.project.subdomain=V(s.target.value,{replacement:"-",lower:!0,strict:!0}),c()};function m(){l.project.resetChanges(),t.value=void 0}return(s,v)=>(g(),w(a(x),{direction:"vertical"},{default:o(()=>[r(a(A),{level:2},{default:o(()=>[n("Subdomain")]),_:1}),r(a(R),null,{default:o(()=>[n(" Every project in Abstra Cloud comes with a default subdomain, which will appear on all shared project links. ")]),_:1}),r(a(k),null,{default:o(()=>[r(a(f),null,{default:o(()=>[n("Forms and Dashes available at:")]),_:1}),r(a(f),{code:""},{default:o(()=>[n("https://"),_("span",null,j(s.project.subdomain),1),n(".abstra.app/[PATH] ")]),_:1})]),_:1}),r(a(k),null,{default:o(()=>[r(a(f),null,{default:o(()=>[n("Hooks available at:")]),_:1}),r(a(f),{code:""},{default:o(()=>[n(" https://"),_("span",null,j(s.project.subdomain),1),n(".abstra.app/_hooks/[PATH] ")]),_:1})]),_:1}),r(a($),null,{default:o(()=>[r(a(H),{"validate-status":d.value,help:e.value,"has-feedback":""},{default:o(()=>[r(a(T),{value:s.project.subdomain,type:"text",loading:t.value==="loading",onInput:p},{addonBefore:o(()=>[n("https://")]),addonAfter:o(()=>[n(".abstra.app")]),_:1},8,["value","loading"])]),_:1},8,["validate-status","help"]),r(K,{model:s.project,disabled:t.value!=="available",onError:m},null,8,["model","disabled"])]),_:1})]),_:1}))}}),q={key:0,class:"project-settings"},be=h({__name:"ProjectSettings",setup(i){const t=P().params.projectId,{result:u}=C(()=>S.get(t));return(c,d)=>a(u)?(g(),F("div",q,[r(a(A),null,{default:o(()=>[n("Project Settings")]),_:1}),r(L,{project:a(u)},null,8,["project"])])):N("",!0)}});export{be as default};
//# sourceMappingURL=ProjectSettings.38e7a9ba.js.map
