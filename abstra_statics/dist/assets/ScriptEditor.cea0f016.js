import{d as _,r as v,b as c,ev as F,f as t,c as f,w as a,u as e,bz as N,eA as U,eB as $,H as E,eL as L,ex as y,e as A,ar as I}from"./outputWidgets.33535317.js";import{W as P}from"./workspaces.a9416c96.js";import{a as W}from"./asyncComputed.eceaf3f4.js";import{S as D}from"./scripts.371b19a2.js";import"./envVars.187204be.js";import{R as V,S as H,a as J,L as K}from"./SourceCode.1683d5f3.js";import{B as M}from"./BaseLayout.cc1927cc.js";import{_ as q}from"./RunButton.vue_vue_type_script_setup_true_lang.d2d483fd.js";import{A as z,F as j}from"./Form.bb02d3a3.js";import{N as G}from"./NavbarControls.3f00cd49.js";import{_ as O}from"./SaveButton.vue_vue_type_script_setup_true_lang.d717d72e.js";import{T as Q}from"./ThreadSelector.fb6cb10a.js";import{c as X}from"./index.eba4e2d9.js";import{A as w}from"./index.aaedd1ff.js";import{A as b,T as R}from"./TabPane.47885a07.js";import{A as T}from"./Text.0d020666.js";import{A as Y}from"./index.b3fbfd2a.js";import{A as Z,C as ee}from"./CollapsePanel.c4602a20.js";import{B as te}from"./Badge.8c368916.js";import"./runnerData.613205a3.js";import"./url.807a6d7f.js";import"./record.49cb918d.js";import"./pubsub.fa124b5f.js";import"./uuid.596bfd48.js";import"./icons.3c082a53.js";import"./jobs.2b96bccf.js";import"./validations.3fba433f.js";import"./string.f3ad25cc.js";import"./toggleHighContrast.31bb2e61.js";import"./index.61f765d7.js";import"./Card.684f0b2a.js";import"./Typography.6c9836cc.js";import"./hasIn.0dff4f2d.js";import"./index.b50f735b.js";import"./Paragraph.e5c0c444.js";import"./Base.abc79167.js";import"./popupNotifcation.ce5e5591.js";import"./Link.429288d8.js";import"./CloseCircleOutlined.c170673f.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.b0a6885c.js";import"./Modal.40f2d981.js";import"./ant-design.c6c2096e.js";import"./index.2a50b107.js";import"./index.25e3d10b.js";import"./index.6172c911.js";import"./ArrowRightOutlined.08fa31dd.js";import"./isNumeric.75337b1e.js";(function(){try{var d=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p=new Error().stack;p&&(d._sentryDebugIds=d._sentryDebugIds||{},d._sentryDebugIds[p]="4aad5d79-1c9b-488d-b2a5-4decf04dc930",d._sentryDebugIdIdentifier="sentry-dbid-4aad5d79-1c9b-488d-b2a5-4decf04dc930")}catch{}})();const ae={style:{width:"100%",display:"flex","flex-direction":"column"}},re=_({__name:"ScriptTester",props:{script:{},logService:{},executionConfig:{},disabledWarning:{}},emits:["update-stage-run-id"],setup(d,{emit:p}){const s=d,g=v(!1),u=async()=>{g.value=!0;try{const i=s.executionConfig.attached&&s.executionConfig.stageRunId?await s.script.run(s.executionConfig.stageRunId):await s.script.test();i.stderr&&s.logService.log({type:"stderr",log:i.stderr}),i.stdout&&s.logService.log({type:"stdout",log:i.stdout})}finally{g.value=!1,p("update-stage-run-id",null)}};return(i,r)=>(c(),F("div",ae,[t(q,{loading:g.value,disabled:i.disabledWarning,onClick:u,onSave:r[0]||(r[0]=h=>i.script.save())},null,8,["loading","disabled"])]))}}),oe=_({__name:"ScriptSettings",props:{script:{}},setup(d){const s=v(d.script);return(g,u)=>(c(),f(e(j),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:a(()=>[t(e(z),{label:"Name",required:""},{default:a(()=>[t(e(N),{value:s.value.title,"onUpdate:value":u[0]||(u[0]=i=>s.value.title=i)},null,8,["value"])]),_:1}),t(V,{runtime:s.value},null,8,["runtime"])]),_:1}))}}),se={style:{width:"50%"}},ie={style:{width:"50%"}},et=_({__name:"ScriptEditor",setup(d){const p=U(),s=$();function g(){p.push({name:"stages"})}const u=v("source-code"),i=v("preview"),r=v({attached:!1,stageRunId:null,pendingFork:!1}),h=m=>r.value={...r.value,attached:!!m},B=E(()=>{var m;return(m=o.value)!=null&&m.script.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:r.value.attached&&r.value.pendingFork?{title:"No thread selected",message:"Fork the selected thread to run the workflow"}:r.value.attached&&!r.value.stageRunId?{title:"No thread selected",message:"Select a thread to run the workflow"}:null}),{result:o}=W(async()=>{const[m,n]=await Promise.all([P.get(),D.get(s.params.id)]);return L({workspace:m,script:n})}),x=K.create(),S=v(null);return(m,n)=>(c(),f(M,{"no-margins":""},{navbar:a(()=>[e(o)?(c(),f(e(X),{key:0,title:e(o).script.title,style:{padding:"5px 25px","margin-bottom":"15px"},onBack:g},{extra:a(()=>[t(G,{"show-save-button":!1,"editing-model":e(o).script},null,8,["editing-model"])]),_:1},8,["title"])):y("",!0)]),content:a(()=>[e(o)?(c(),f(e(w),{key:0,gap:"40",style:{width:"calc(100% - 80px)"}},{default:a(()=>[A("div",se,[t(e(R),{"active-key":u.value,"onUpdate:activeKey":n[0]||(n[0]=l=>u.value=l)},{rightExtra:a(()=>[t(O,{model:e(o).script},null,8,["model"])]),default:a(()=>[t(e(b),{key:"source-code",tab:"Source code"}),t(e(b),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"]),u.value==="source-code"?(c(),f(H,{key:0,script:e(o).script,workspace:e(o).workspace},null,8,["script","workspace"])):y("",!0),e(o).script&&u.value==="settings"?(c(),f(oe,{key:1,script:e(o).script},null,8,["script"])):y("",!0)]),A("div",ie,[t(e(R),{"active-key":i.value,"onUpdate:activeKey":n[1]||(n[1]=l=>i.value=l)},{rightExtra:a(()=>[t(e(w),{align:"center",gap:"middle"},{default:a(()=>[t(e(w),{gap:"small"},{default:a(()=>[t(e(T),null,{default:a(()=>[I("Continue workflow")]),_:1}),t(e(Y),{checked:r.value.attached,"onUpdate:checked":h},null,8,["checked"])]),_:1})]),_:1})]),default:a(()=>[t(e(b),{key:"preview",tab:"Preview"})]),_:1},8,["active-key"]),e(o).script&&i.value==="preview"?(c(),f(re,{key:0,ref:"tester",script:e(o).script,"log-service":e(x),"execution-config":r.value,"disabled-warning":B.value,onUpdateStageRunId:n[2]||(n[2]=l=>r.value={...r.value,stageRunId:l})},null,8,["script","log-service","execution-config","disabled-warning"])):y("",!0),t(e(ee),{ghost:"",style:{"margin-top":"20px"}},{default:a(()=>[t(e(Z),{key:"1"},{header:a(()=>[t(e(te),{dot:r.value.attached&&!!(r.value.pendingFork||!r.value.stageRunId)},{default:a(()=>[t(e(T),null,{default:a(()=>[I("Thread")]),_:1})]),_:1},8,["dot"])]),default:a(()=>[t(Q,{"execution-config":r.value,"onUpdate:executionConfig":n[3]||(n[3]=l=>r.value=l),stage:e(o).script,onFixInvalidJson:n[4]||(n[4]=(l,k)=>{var C;return(C=S.value)==null?void 0:C.fixJson(l,k)})},null,8,["execution-config","stage"])]),_:1})]),_:1})])]),_:1})):y("",!0)]),footer:a(()=>{var l,k;return[t(J,{ref_key:"smartConsole",ref:S,runtime:"forms","log-service":e(x),stage:(l=e(o))==null?void 0:l.script,workspace:(k=e(o))==null?void 0:k.workspace},null,8,["log-service","stage","workspace"])]}),_:1}))}});export{et as default};
//# sourceMappingURL=ScriptEditor.cea0f016.js.map