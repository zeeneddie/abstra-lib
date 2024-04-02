import{d as _,r as v,b as p,eu as F,f as t,c as f,w as a,u as e,by as N,eA as U,eB as $,H as E,eL as L,ew as y,e as A,aq as I}from"./outputWidgets.225dd371.js";import{W as P}from"./workspaces.57178210.js";import{a as W}from"./asyncComputed.8a54909a.js";import{S as D}from"./scripts.30552fdf.js";import"./envVars.fa2414d6.js";import{R as V,S as q,a as H,L as J}from"./SourceCode.6a81c124.js";import{B as K}from"./BaseLayout.97c9eb13.js";import{_ as M}from"./RunButton.vue_vue_type_script_setup_true_lang.737734ce.js";import{A as j,F as z}from"./Form.12e2d16e.js";import{N as G}from"./NavbarControls.e024c2d8.js";import{_ as O}from"./SaveButton.vue_vue_type_script_setup_true_lang.37c28cd7.js";import{T as Q}from"./ThreadSelector.05d91cd5.js";import{b as X}from"./index.36801c80.js";import{A as w}from"./index.8e2737d3.js";import{A as b,T as R}from"./TabPane.3fb3cd2e.js";import{A as T}from"./Text.a0f2d781.js";import{A as Y}from"./index.e1cd1732.js";import{A as Z,C as ee}from"./CollapsePanel.16aa48f2.js";import{B as te}from"./Badge.c3b23218.js";import"./runnerData.6fca8fdf.js";import"./url.29c1f37b.js";import"./record.b805ac15.js";import"./pubsub.3bce7ea8.js";import"./uuid.bf6dec31.js";import"./PhCaretRight.vue.3dbc5590.js";import"./jobs.debda744.js";import"./validations.591c9aa8.js";import"./string.321f230b.js";import"./toggleHighContrast.392fec37.js";import"./PhPencil.vue.bd1d8b41.js";import"./index.480feb65.js";import"./Card.ed89093a.js";import"./hasIn.1e38e049.js";import"./index.82d7df3b.js";import"./popupNotifcation.6873325b.js";import"./PhArrowSquareOut.vue.32437cf7.js";import"./Link.da1b7649.js";import"./CloseCircleOutlined.785e73cc.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.c28d2d29.js";import"./Modal.0a797886.js";import"./ant-design.a00feaec.js";import"./index.86c302fc.js";import"./index.7439e64c.js";import"./index.ceccdea3.js";import"./index.b8149c32.js";import"./isNumeric.75337b1e.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[c]="b6336aac-9486-40ed-80b6-b228765ff058",u._sentryDebugIdIdentifier="sentry-dbid-b6336aac-9486-40ed-80b6-b228765ff058")}catch{}})();const ae={style:{width:"100%",display:"flex","flex-direction":"column"}},oe=_({__name:"ScriptTester",props:{script:{},logService:{},executionConfig:{},disabledWarning:{}},emits:["update-stage-run-id"],setup(u,{emit:c}){const s=u,g=v(!1),d=async()=>{g.value=!0;try{const i=s.executionConfig.attached&&s.executionConfig.stageRunId?await s.script.run(s.executionConfig.stageRunId):await s.script.test();i.stderr&&s.logService.log({type:"stderr",log:i.stderr}),i.stdout&&s.logService.log({type:"stdout",log:i.stdout})}finally{g.value=!1,c("update-stage-run-id",null)}};return(i,o)=>(p(),F("div",ae,[t(M,{loading:g.value,disabled:i.disabledWarning,onClick:d,onSave:o[0]||(o[0]=h=>i.script.save())},null,8,["loading","disabled"])]))}}),re=_({__name:"ScriptSettings",props:{script:{}},setup(u){const s=v(u.script);return(g,d)=>(p(),f(e(z),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:a(()=>[t(e(j),{label:"Name",required:""},{default:a(()=>[t(e(N),{value:s.value.title,"onUpdate:value":d[0]||(d[0]=i=>s.value.title=i)},null,8,["value"])]),_:1}),t(V,{runtime:s.value},null,8,["runtime"])]),_:1}))}}),se={style:{width:"50%"}},ie={style:{width:"50%"}},Ze=_({__name:"ScriptEditor",setup(u){const c=U(),s=$();function g(){c.push({name:"stages"})}const d=v("source-code"),i=v("preview"),o=v({attached:!1,stageRunId:null,pendingFork:!1}),h=m=>o.value={...o.value,attached:!!m},B=E(()=>{var m;return(m=r.value)!=null&&m.script.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:o.value.attached&&o.value.pendingFork?{title:"No thread selected",message:"Fork the selected thread to run the workflow"}:o.value.attached&&!o.value.stageRunId?{title:"No thread selected",message:"Select a thread to run the workflow"}:null}),{result:r}=W(async()=>{const[m,n]=await Promise.all([P.get(),D.get(s.params.id)]);return L({workspace:m,script:n})}),x=J.create(),S=v(null);return(m,n)=>(p(),f(K,{"no-margins":""},{navbar:a(()=>[e(r)?(p(),f(e(X),{key:0,title:e(r).script.title,style:{padding:"5px 25px","margin-bottom":"15px"},onBack:g},{extra:a(()=>[t(G,{"show-save-button":!1,"editing-model":e(r).script},null,8,["editing-model"])]),_:1},8,["title"])):y("",!0)]),content:a(()=>[e(r)?(p(),f(e(w),{key:0,gap:"40",style:{width:"calc(100% - 80px)"}},{default:a(()=>[A("div",se,[t(e(R),{"active-key":d.value,"onUpdate:activeKey":n[0]||(n[0]=l=>d.value=l)},{rightExtra:a(()=>[t(O,{model:e(r).script},null,8,["model"])]),default:a(()=>[t(e(b),{key:"source-code",tab:"Source code"}),t(e(b),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"]),d.value==="source-code"?(p(),f(q,{key:0,script:e(r).script,workspace:e(r).workspace},null,8,["script","workspace"])):y("",!0),e(r).script&&d.value==="settings"?(p(),f(re,{key:1,script:e(r).script},null,8,["script"])):y("",!0)]),A("div",ie,[t(e(R),{"active-key":i.value,"onUpdate:activeKey":n[1]||(n[1]=l=>i.value=l)},{rightExtra:a(()=>[t(e(w),{align:"center",gap:"middle"},{default:a(()=>[t(e(w),{gap:"small"},{default:a(()=>[t(e(T),null,{default:a(()=>[I("Continue workflow")]),_:1}),t(e(Y),{checked:o.value.attached,"onUpdate:checked":h},null,8,["checked"])]),_:1})]),_:1})]),default:a(()=>[t(e(b),{key:"preview",tab:"Preview"})]),_:1},8,["active-key"]),e(r).script&&i.value==="preview"?(p(),f(oe,{key:0,ref:"tester",script:e(r).script,"log-service":e(x),"execution-config":o.value,"disabled-warning":B.value,onUpdateStageRunId:n[2]||(n[2]=l=>o.value={...o.value,stageRunId:l})},null,8,["script","log-service","execution-config","disabled-warning"])):y("",!0),t(e(ee),{ghost:"",style:{"margin-top":"20px"}},{default:a(()=>[t(e(Z),{key:"1"},{header:a(()=>[t(e(te),{dot:o.value.attached&&!!(o.value.pendingFork||!o.value.stageRunId)},{default:a(()=>[t(e(T),null,{default:a(()=>[I("Thread")]),_:1})]),_:1},8,["dot"])]),default:a(()=>[t(Q,{"execution-config":o.value,"onUpdate:executionConfig":n[3]||(n[3]=l=>o.value=l),stage:e(r).script,onFixInvalidJson:n[4]||(n[4]=(l,k)=>{var C;return(C=S.value)==null?void 0:C.fixJson(l,k)})},null,8,["execution-config","stage"])]),_:1})]),_:1})])]),_:1})):y("",!0)]),footer:a(()=>{var l,k;return[t(H,{ref_key:"smartConsole",ref:S,runtime:"forms","log-service":e(x),stage:(l=e(r))==null?void 0:l.script,workspace:(k=e(r))==null?void 0:k.workspace},null,8,["log-service","stage","workspace"])]}),_:1}))}});export{Ze as default};
//# sourceMappingURL=ScriptEditor.1cebb78c.js.map
