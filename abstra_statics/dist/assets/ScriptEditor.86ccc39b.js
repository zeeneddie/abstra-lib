import{d as _,r as v,b as d,eu as F,f as t,c as f,w as a,u as e,by as N,eA as U,eB as $,H as E,eL as L,ew as y,e as A,aq as I}from"./outputWidgets.36438843.js";import{W as P}from"./workspaces.fc8248ce.js";import{a as W}from"./asyncComputed.337ea25d.js";import{S as D}from"./scripts.6de0afc0.js";import"./envVars.cc1ecbde.js";import{R as V,S as q,a as H,L as J}from"./SourceCode.66702b96.js";import{B as K}from"./BaseLayout.f2a19b96.js";import{_ as M}from"./RunButton.vue_vue_type_script_setup_true_lang.3d8896b2.js";import{A as j,F as z}from"./Form.89631493.js";import{N as G}from"./NavbarControls.e6d74eae.js";import{_ as O}from"./SaveButton.vue_vue_type_script_setup_true_lang.f47c39f6.js";import{T as Q}from"./ThreadSelector.159ea295.js";import{b as X}from"./index.d08bb707.js";import{A as w}from"./index.173d5349.js";import{A as b,T as R}from"./TabPane.3879967a.js";import{A as T}from"./Text.0a4c76ae.js";import{A as Y}from"./index.a2659ee8.js";import{A as Z,C as ee}from"./CollapsePanel.7869142e.js";import{B as te}from"./Badge.10a17723.js";import"./runnerData.4f481531.js";import"./url.5c79ed51.js";import"./record.84099288.js";import"./pubsub.0ad28dde.js";import"./uuid.15e98fbe.js";import"./PhCaretRight.vue.c6293689.js";import"./jobs.c64c905c.js";import"./validations.2b073e59.js";import"./string.4ab295aa.js";import"./toggleHighContrast.7f4bbd3d.js";import"./PhPencil.vue.579176a6.js";import"./index.c636e08c.js";import"./Card.5a1294b3.js";import"./hasIn.0e346df9.js";import"./index.d8a73281.js";import"./Paragraph.db54cd0a.js";import"./popupNotifcation.a4e64d79.js";import"./PhArrowSquareOut.vue.326dcab4.js";import"./Link.0405183d.js";import"./CloseCircleOutlined.5cee1762.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.6a8a8129.js";import"./Modal.bc5706c4.js";import"./ant-design.ae109f6e.js";import"./index.c7e21684.js";import"./index.71c275d6.js";import"./index.eec227d3.js";import"./index.46e7eb67.js";import"./isNumeric.75337b1e.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p=new Error().stack;p&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[p]="abc5cf23-ce26-410e-a907-c7b5ee0c4adb",u._sentryDebugIdIdentifier="sentry-dbid-abc5cf23-ce26-410e-a907-c7b5ee0c4adb")}catch{}})();const ae={style:{width:"100%",display:"flex","flex-direction":"column"}},oe=_({__name:"ScriptTester",props:{script:{},logService:{},executionConfig:{},disabledWarning:{}},emits:["update-stage-run-id"],setup(u,{emit:p}){const s=u,g=v(!1),c=async()=>{g.value=!0;try{const i=s.executionConfig.attached&&s.executionConfig.stageRunId?await s.script.run(s.executionConfig.stageRunId):await s.script.test();i.stderr&&s.logService.log({type:"stderr",log:i.stderr}),i.stdout&&s.logService.log({type:"stdout",log:i.stdout})}finally{g.value=!1,p("update-stage-run-id",null)}};return(i,o)=>(d(),F("div",ae,[t(M,{loading:g.value,disabled:i.disabledWarning,onClick:c,onSave:o[0]||(o[0]=h=>i.script.save())},null,8,["loading","disabled"])]))}}),re=_({__name:"ScriptSettings",props:{script:{}},setup(u){const s=v(u.script);return(g,c)=>(d(),f(e(z),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:a(()=>[t(e(j),{label:"Name",required:""},{default:a(()=>[t(e(N),{value:s.value.title,"onUpdate:value":c[0]||(c[0]=i=>s.value.title=i)},null,8,["value"])]),_:1}),t(V,{runtime:s.value},null,8,["runtime"])]),_:1}))}}),se={style:{width:"50%"}},ie={style:{width:"50%"}},et=_({__name:"ScriptEditor",setup(u){const p=U(),s=$();function g(){p.push({name:"stages"})}const c=v("source-code"),i=v("preview"),o=v({attached:!1,stageRunId:null,pendingFork:!1}),h=m=>o.value={...o.value,attached:!!m},B=E(()=>{var m;return(m=r.value)!=null&&m.script.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:o.value.attached&&o.value.pendingFork?{title:"No thread selected",message:"Fork the selected thread to run the workflow"}:o.value.attached&&!o.value.stageRunId?{title:"No thread selected",message:"Select a thread to run the workflow"}:null}),{result:r}=W(async()=>{const[m,n]=await Promise.all([P.get(),D.get(s.params.id)]);return L({workspace:m,script:n})}),x=J.create(),S=v(null);return(m,n)=>(d(),f(K,{"no-margins":""},{navbar:a(()=>[e(r)?(d(),f(e(X),{key:0,title:e(r).script.title,style:{padding:"5px 25px","margin-bottom":"15px"},onBack:g},{extra:a(()=>[t(G,{"show-save-button":!1,"editing-model":e(r).script},null,8,["editing-model"])]),_:1},8,["title"])):y("",!0)]),content:a(()=>[e(r)?(d(),f(e(w),{key:0,gap:"40",style:{width:"calc(100% - 80px)"}},{default:a(()=>[A("div",se,[t(e(R),{"active-key":c.value,"onUpdate:activeKey":n[0]||(n[0]=l=>c.value=l)},{rightExtra:a(()=>[t(O,{model:e(r).script},null,8,["model"])]),default:a(()=>[t(e(b),{key:"source-code",tab:"Source code"}),t(e(b),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"]),c.value==="source-code"?(d(),f(q,{key:0,script:e(r).script,workspace:e(r).workspace},null,8,["script","workspace"])):y("",!0),e(r).script&&c.value==="settings"?(d(),f(re,{key:1,script:e(r).script},null,8,["script"])):y("",!0)]),A("div",ie,[t(e(R),{"active-key":i.value,"onUpdate:activeKey":n[1]||(n[1]=l=>i.value=l)},{rightExtra:a(()=>[t(e(w),{align:"center",gap:"middle"},{default:a(()=>[t(e(w),{gap:"small"},{default:a(()=>[t(e(T),null,{default:a(()=>[I("Continue workflow")]),_:1}),t(e(Y),{checked:o.value.attached,"onUpdate:checked":h},null,8,["checked"])]),_:1})]),_:1})]),default:a(()=>[t(e(b),{key:"preview",tab:"Preview"})]),_:1},8,["active-key"]),e(r).script&&i.value==="preview"?(d(),f(oe,{key:0,ref:"tester",script:e(r).script,"log-service":e(x),"execution-config":o.value,"disabled-warning":B.value,onUpdateStageRunId:n[2]||(n[2]=l=>o.value={...o.value,stageRunId:l})},null,8,["script","log-service","execution-config","disabled-warning"])):y("",!0),t(e(ee),{ghost:"",style:{"margin-top":"20px"}},{default:a(()=>[t(e(Z),{key:"1"},{header:a(()=>[t(e(te),{dot:o.value.attached&&!!(o.value.pendingFork||!o.value.stageRunId)},{default:a(()=>[t(e(T),null,{default:a(()=>[I("Thread")]),_:1})]),_:1},8,["dot"])]),default:a(()=>[t(Q,{"execution-config":o.value,"onUpdate:executionConfig":n[3]||(n[3]=l=>o.value=l),stage:e(r).script,onFixInvalidJson:n[4]||(n[4]=(l,k)=>{var C;return(C=S.value)==null?void 0:C.fixJson(l,k)})},null,8,["execution-config","stage"])]),_:1})]),_:1})])]),_:1})):y("",!0)]),footer:a(()=>{var l,k;return[t(H,{ref_key:"smartConsole",ref:S,runtime:"forms","log-service":e(x),stage:(l=e(r))==null?void 0:l.script,workspace:(k=e(r))==null?void 0:k.workspace},null,8,["log-service","stage","workspace"])]}),_:1}))}});export{et as default};
//# sourceMappingURL=ScriptEditor.86ccc39b.js.map