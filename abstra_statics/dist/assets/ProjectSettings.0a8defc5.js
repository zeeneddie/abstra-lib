import{a as I}from"./asyncComputed.543cc13a.js";import"./authorManager.39a8ddb8.js";import{d as j,r as P,eL as T,G as g,b as m,c as B,w as a,u as e,f as t,aq as r,e as i,eD as d,bH as F,ev as y,ex as k,cC as H,eB as E}from"./outputWidgets.f2ae36a0.js";import"./index.d218deb1.js";import{P as A}from"./project.3b339c84.js";import{_ as U}from"./SaveButton.vue_vue_type_script_setup_true_lang.ce81cb35.js";import{a as f,A as h}from"./Title.1747a412.js";import{A as s}from"./Text.17250f4c.js";import{a as p}from"./router.4a7d2453.js";import{A as N}from"./FormItem.a1fd3798.js";import{F as V}from"./Form.47de7bd6.js";import"./index.cf4c23b9.js";import"./record.104738e2.js";import"./pubsub.815fdbd4.js";import"./gateway.168406cd.js";import"./index.2a7bba2b.js";import"./hasIn.8c7e2228.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[n]="a3009bfd-f8be-4b97-835c-7c2fb1e472a9",u._sentryDebugIdIdentifier="sentry-dbid-a3009bfd-f8be-4b97-835c-7c2fb1e472a9")}catch{}})();const R={key:0},$=j({__name:"SubdomainEditor",props:{project:{}},setup(u){const n=u,o=P(void 0),c=T.exports.debounce(async()=>{try{const{available:l}=await n.project.checkSubdomain();o.value=l?"available":"unavailable"}catch{o.value=void 0}},500);function b(){n.project.subdomain?(o.value="loading",c()):o.value="invalid"}const v=g(()=>{switch(o.value){case"invalid":return"error";case"loading":return"validating";case"available":return"success";case"unavailable":return"error";default:return}}),w=g(()=>{switch(o.value){case"loading":return"Checking availability...";case"available":return"Available";case"unavailable":return"Unavailable";case"invalid":return"Invalid subdomain";default:return}}),S=()=>{n.project.subdomain=A.formatSubdomain(n.project.subdomain),b()};function C(){n.project.resetChanges(),o.value=void 0}return(l,_)=>(m(),B(e(H),{direction:"vertical"},{default:a(()=>[t(e(f),{level:2},{default:a(()=>[r("Subdomain")]),_:1}),t(e(h),null,{default:a(()=>[r(" Every project in Abstra Cloud comes with a default subdomain, which will appear on all shared project links. ")]),_:1}),t(e(p),null,{default:a(()=>[t(e(s),null,{default:a(()=>[r("Forms available at:")]),_:1}),t(e(s),{code:""},{default:a(()=>[i("span",null,d(l.project.getUrl("[PATH]")),1)]),_:1})]),_:1}),t(e(p),null,{default:a(()=>[t(e(s),null,{default:a(()=>[r("Hooks available at:")]),_:1}),t(e(s),{code:""},{default:a(()=>[i("span",null,d(l.project.getUrl("_hooks/[PATH]")),1)]),_:1})]),_:1}),t(e(V),null,{default:a(()=>[t(e(N),{"validate-status":v.value,help:w.value,"has-feedback":""},{default:a(()=>[t(e(F),{value:l.project.subdomain,"onUpdate:value":_[0]||(_[0]=D=>l.project.subdomain=D),type:"text",loading:o.value==="loading",onBlur:S},{addonBefore:a(()=>[r("https://")]),addonAfter:a(()=>[r(".abstra.app")]),_:1},8,["value","loading"])]),_:1},8,["validate-status","help"]),t(U,{model:l.project,disabled:o.value!=="available",onError:C},null,8,["model","disabled"])]),_:1}),l.project.customDomain?(m(),y("div",R,[t(e(f),{level:2},{default:a(()=>[r("Custom Domain")]),_:1}),t(e(h),null,{default:a(()=>[r(" Your project also has a custom domain: "),t(e(s),{code:""},{default:a(()=>[i("span",null,d(l.project.customDomain),1)]),_:1})]),_:1}),t(e(p),null,{default:a(()=>[t(e(s),null,{default:a(()=>[r("Forms available at:")]),_:1}),t(e(s),{code:""},{default:a(()=>[i("span",null,d(l.project.getCustomDomainUrl("[PATH]")),1)]),_:1})]),_:1}),t(e(p),null,{default:a(()=>[t(e(s),null,{default:a(()=>[r("Hooks available at:")]),_:1}),t(e(s),{code:""},{default:a(()=>[i("span",null,d(l.project.getCustomDomainUrl("_hooks/[PATH]")),1)]),_:1})]),_:1})])):k("",!0)]),_:1}))}}),q={key:0,class:"project-settings"},le=j({__name:"ProjectSettings",setup(u){const o=E().params.projectId,{result:c}=I(()=>A.get(o));return(b,v)=>e(c)?(m(),y("div",q,[t(e(f),null,{default:a(()=>[r("Project Settings")]),_:1}),t($,{project:e(c)},null,8,["project"])])):k("",!0)}});export{le as default};
//# sourceMappingURL=ProjectSettings.0a8defc5.js.map