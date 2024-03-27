import{a as S}from"./asyncComputed.9ec0ae7d.js";import{a as m}from"./router.bd5e0bcd.js";import{d as _,r as I,eM as B,H as f,b as g,c as C,w as a,u as e,f as t,aq as s,e as v,eE as b,by as E,cD as P,eB as D,eu as F,ew as T}from"./outputWidgets.f017b1ba.js";import"./index.2d300106.js";import{P as h}from"./project.cffa897f.js";import{_ as H}from"./SaveButton.vue_vue_type_script_setup_true_lang.e78c8eeb.js";import{A as j}from"./Title.4002b692.js";import{A as N}from"./Paragraph.3ffb559e.js";import{A as u}from"./Text.01ac3fdf.js";import{A as U,F as V}from"./Form.c4ae4d63.js";import"./popupNotifcation.d47f45e7.js";import"./index.cf4c23b9.js";import"./record.e2bcfa5f.js";import"./pubsub.4d72db7b.js";import"./Base.bb2b5283.js";import"./Typography.5dfc411f.js";import"./hasIn.a2b4c2f9.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[r]="767ee3a8-2fef-4f4c-b99c-678553ad41c3",n._sentryDebugIdIdentifier="sentry-dbid-767ee3a8-2fef-4f4c-b99c-678553ad41c3")}catch{}})();const x=_({__name:"SubdomainEditor",props:{project:{}},setup(n){const r=n,o=I(void 0),i=B.exports.debounce(async()=>{try{const{available:l}=await r.project.checkSubdomain();o.value=l?"available":"unavailable"}catch{o.value=void 0}},500);function d(){r.project.subdomain?(o.value="loading",i()):o.value="invalid"}const c=f(()=>{switch(o.value){case"invalid":return"error";case"loading":return"validating";case"available":return"success";case"unavailable":return"error";default:return}}),y=f(()=>{switch(o.value){case"loading":return"Checking availability...";case"available":return"Available";case"unavailable":return"Unavailable";case"invalid":return"Invalid subdomain";default:return}}),k=()=>{r.project.subdomain=h.formatSubdomain(r.project.subdomain),d()};function w(){r.project.resetChanges(),o.value=void 0}return(l,p)=>(g(),C(e(P),{direction:"vertical"},{default:a(()=>[t(e(j),{level:2},{default:a(()=>[s("Subdomain")]),_:1}),t(e(N),null,{default:a(()=>[s(" Every project in Abstra Cloud comes with a default subdomain, which will appear on all shared project links. ")]),_:1}),t(e(m),null,{default:a(()=>[t(e(u),null,{default:a(()=>[s("Forms available at:")]),_:1}),t(e(u),{code:""},{default:a(()=>[v("span",null,b(l.project.getUrl("[PATH]")),1)]),_:1})]),_:1}),t(e(m),null,{default:a(()=>[t(e(u),null,{default:a(()=>[s("Hooks available at:")]),_:1}),t(e(u),{code:""},{default:a(()=>[v("span",null,b(l.project.getUrl("_hooks/[PATH]")),1)]),_:1})]),_:1}),t(e(V),null,{default:a(()=>[t(e(U),{"validate-status":c.value,help:y.value,"has-feedback":""},{default:a(()=>[t(e(E),{value:l.project.subdomain,"onUpdate:value":p[0]||(p[0]=A=>l.project.subdomain=A),type:"text",loading:o.value==="loading",onBlur:k},{addonBefore:a(()=>[s("https://")]),addonAfter:a(()=>[s(".abstra.app")]),_:1},8,["value","loading"])]),_:1},8,["validate-status","help"]),t(H,{model:l.project,disabled:o.value!=="available",onError:w},null,8,["model","disabled"])]),_:1})]),_:1}))}}),R={key:0,class:"project-settings"},oe=_({__name:"ProjectSettings",setup(n){const o=D().params.projectId,{result:i}=S(()=>h.get(o));return(d,c)=>e(i)?(g(),F("div",R,[t(e(j),null,{default:a(()=>[s("Project Settings")]),_:1}),t(x,{project:e(i)},null,8,["project"])])):T("",!0)}});export{oe as default};
//# sourceMappingURL=ProjectSettings.811a4404.js.map