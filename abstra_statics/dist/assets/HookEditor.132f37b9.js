import{d as $,H as W,G as V,r as C,I as j,b as d,c as m,w as a,f as t,u as e,ad as J,eu as T,eC as I,cD as E,by as A,bF as U,aq as v,aC as B,cq as L,ew as y,e as N,eE as M,eA as K,eB as z,eL as X}from"./outputWidgets.b1e87772.js";import{R as Y,S as Z,a as ee,L as te}from"./SourceCode.a0c25f73.js";import{a as oe}from"./asyncComputed.5830bf45.js";import{H as ae}from"./jobs.76f51498.js";import{W as re}from"./workspaces.56803bab.js";import"./envVars.205c1f47.js";import{B as ne}from"./BaseLayout.edc5e0b5.js";import{_ as le}from"./RunButton.vue_vue_type_script_setup_true_lang.859fccb4.js";import{A as _}from"./api.0084513b.js";import{T as se}from"./ThreadSelector.7ab5196d.js";import{D as ue,A as ie}from"./index.72a5cf61.js";import{A as g,F as G}from"./Form.c64de99c.js";import{C as de,A as R}from"./CollapsePanel.113693b8.js";import{B as pe}from"./Badge.956ff047.js";import{A as Q}from"./Text.a2ac66f5.js";import{A as me}from"./index.45f3079f.js";import{A as ce}from"./index.78c9c56d.js";import{N as fe}from"./NavbarControls.21a326c8.js";import{_ as ve}from"./SaveButton.vue_vue_type_script_setup_true_lang.130665bd.js";import{b as ge}from"./index.aff0a004.js";import{A as D}from"./index.fae832ba.js";import{A as F,T as O}from"./TabPane.71fee0dc.js";import{A as he}from"./index.92020dc1.js";import"./uuid.3041f1c5.js";import"./PhCaretRight.vue.1983b5a8.js";import"./scripts.e16f3ade.js";import"./record.2f552fbf.js";import"./pubsub.8b7604ff.js";import"./validations.8f0efe91.js";import"./string.10c626b7.js";import"./toggleHighContrast.35042700.js";import"./PhPencil.vue.7cdde2e6.js";import"./index.0d1bf03c.js";import"./Card.7e5930fd.js";import"./runnerData.95ea1f30.js";import"./url.105c4f84.js";import"./index.cf4c23b9.js";import"./PhCheckCircle.vue.bd573ad9.js";import"./PhScroll.vue.1d8d7f37.js";import"./PhWebhooksLogo.vue.593430d6.js";import"./index.b5202fc0.js";import"./hasIn.443af95b.js";import"./isNumeric.75337b1e.js";import"./index.d1bb5a49.js";import"./popupNotifcation.6e758e81.js";import"./PhArrowSquareOut.vue.0925e93c.js";import"./Link.d93fe6d3.js";import"./CloseCircleOutlined.70e6f72c.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.370ccd6b.js";import"./Modal.6f2aaf4e.js";import"./ant-design.baebef5b.js";import"./index.0a49c5ca.js";import"./index.56c26672.js";(function(){try{var h=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(h._sentryDebugIds=h._sentryDebugIds||{},h._sentryDebugIds[c]="46cd80c6-6bda-4df3-b615-00e1c5af320c",h._sentryDebugIdIdentifier="sentry-dbid-46cd80c6-6bda-4df3-b615-00e1c5af320c")}catch{}})();const ke={style:{display:"flex","flex-direction":"column",gap:"10px"}},ye={key:0},be=$({__name:"HookTester",props:{hook:{},logService:{},disabledWarning:{},executionConfig:{}},emits:["update:stage-run-id","update:execution-config"],setup(h,{expose:c,emit:k}){const u=h,b=[{label:"GET",value:"GET"},{label:"POST",value:"POST"},{label:"PUT",value:"PUT"},{label:"PATCH",value:"PATCH"}],w=W(()=>{var n;if((n=o.response)!=null&&n.status)return o.response.status>=500?"red":o.response.status>=400?"orange":o.response.status>=200?"green":"blue"}),o=V({shouldSelectStageRun:!u.hook.isInitial,stageRunId:u.executionConfig.stageRunId,queryParams:[],headers:[{key:"Content-Type",value:"application/json"}],method:"POST",body:JSON.stringify({foo:123,bar:"abc"},null,4)}),q=o.queryParams.find(n=>n.name===_);u.executionConfig.stageRunId&&!q&&o.queryParams.push({name:_,value:u.executionConfig.stageRunId});const x=C(!1),S=async()=>{x.value=!0;try{const n={method:o.method,query:o.queryParams.reduce((r,{name:s,value:p})=>(s&&p&&(r[s]=p),r),{}),body:o.body,headers:o.headers.reduce((r,{key:s,value:p})=>(s&&p&&(r[s]=p),r),{})},l=u.executionConfig.attached&&u.executionConfig.stageRunId?await u.hook.run(n):await u.hook.test(n);o.response=l,l.stderr&&u.logService.log({type:"stderr",log:l.stderr}),l.stdout&&u.logService.log({type:"stdout",log:l.stdout})}finally{x.value=!1,k("update:execution-config",{attached:!1,stageRunId:null,pendingFork:!1})}};j([()=>u.executionConfig.stageRunId,()=>o.queryParams],([n,l])=>{const r=l.find(s=>s.name===_);if(n&&!r){o.queryParams.push({name:_,value:n});return}if(!n&&r){o.queryParams=o.queryParams.filter(s=>s.name!==_);return}n&&r&&n!==r.value&&(r.value=n)});const H=()=>{o.queryParams.push({name:"",value:""})},i=n=>{o.queryParams=o.queryParams.filter((l,r)=>r!==n)},P=()=>{o.headers.push({key:"",value:""})},f=n=>{o.headers=o.headers.filter((l,r)=>r!==n)};return c({runHook:S}),(n,l)=>(d(),m(e(G),{layout:"vertical"},{default:a(()=>[t(e(g),{label:"Method"},{default:a(()=>[t(e(J),{value:o.method,options:b,onSelect:l[0]||(l[0]=r=>o.method=r)},null,8,["value"])]),_:1}),t(e(g),null,{default:a(()=>[t(e(de),{ghost:""},{default:a(()=>[t(e(R),{header:`Query Params (${o.queryParams.length})`},{default:a(()=>[(d(!0),T(B,null,I(o.queryParams,(r,s)=>(d(),m(e(g),{key:s},{default:a(()=>[t(e(E),null,{default:a(()=>[t(e(A),{value:r.name,"onUpdate:value":p=>r.name=p,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),t(e(A),{value:r.value,"onUpdate:value":p=>r.value=p,type:"text",placeholder:"value",disabled:r.name===e(_)},null,8,["value","onUpdate:value","disabled"]),t(e(U),{danger:"",onClick:p=>i(s)},{default:a(()=>[v("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128)),t(e(g),null,{default:a(()=>[t(e(U),{type:"dashed",style:{width:"100%"},onClick:H},{default:a(()=>[v(" Add Query Param ")]),_:1})]),_:1})]),_:1},8,["header"]),t(e(R),{header:`Headers (${o.headers.length})`},{default:a(()=>[(d(!0),T(B,null,I(o.headers,(r,s)=>(d(),m(e(g),{key:s,label:s===0?"Headers":void 0},{default:a(()=>[t(e(E),null,{default:a(()=>[t(e(A),{value:r.key,"onUpdate:value":p=>r.key=p,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),t(e(A),{value:r.value,"onUpdate:value":p=>r.value=p,type:"text",placeholder:"value"},null,8,["value","onUpdate:value"]),t(e(U),{danger:"",onClick:p=>f(s)},{default:a(()=>[v("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["label"]))),128)),t(e(g),null,{default:a(()=>[t(e(U),{type:"dashed",style:{width:"100%"},onClick:P},{default:a(()=>[v("Add Header")]),_:1})]),_:1})]),_:1},8,["header"]),t(e(R),{header:"Body"},{default:a(()=>[o.method!=="GET"?(d(),m(e(g),{key:0},{default:a(()=>[t(e(L),{value:o.body,"onUpdate:value":l[1]||(l[1]=r=>o.body=r)},null,8,["value"])]),_:1})):y("",!0)]),_:1}),t(e(R),null,{header:a(()=>[t(e(pe),{dot:n.executionConfig.attached&&!!(n.executionConfig.pendingFork||!n.executionConfig.stageRunId)},{default:a(()=>[t(e(Q),null,{default:a(()=>[v("Thread")]),_:1})]),_:1},8,["dot"])]),default:a(()=>[t(se,{stage:n.hook,"execution-config":u.executionConfig,"onUpdate:executionConfig":l[2]||(l[2]=r=>k("update:execution-config",r))},null,8,["stage","execution-config"])]),_:1})]),_:1})]),_:1}),t(e(g),null,{default:a(()=>[N("div",ke,[t(le,{loading:x.value,disabled:n.disabledWarning,onClick:S,onSave:l[3]||(l[3]=r=>n.hook.save())},null,8,["loading","disabled"])])]),_:1}),t(e(me),{orientation:"left"},{default:a(()=>[v("Response")]),_:1}),o.response?(d(),T("div",ye,[t(e(ce),{color:w.value},{default:a(()=>[v(M(o.response.status),1)]),_:1},8,["color"]),t(e(ie),null,{default:a(()=>[(d(!0),T(B,null,I(o.response.headers,(r,s)=>(d(),m(e(ue),{key:s,label:s},{default:a(()=>[v(M(r),1)]),_:2},1032,["label"]))),128))]),_:1}),t(e(L),{value:o.response.body},null,8,["value"])])):y("",!0)]),_:1}))}}),_e=$({__name:"HookSettings",props:{hook:{}},setup(h){return(c,k)=>(d(),m(e(G),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:a(()=>[t(e(g),{label:"Name",required:""},{default:a(()=>[t(e(A),{value:c.hook.title,"onUpdate:value":k[0]||(k[0]=u=>c.hook.title=u)},null,8,["value"])]),_:1}),t(Y,{runtime:c.hook},null,8,["runtime"])]),_:1}))}}),Ce={style:{width:"50%"}},we={style:{width:"50%"}},wt=$({__name:"HookEditor",setup(h){const c=K(),k=z(),u=C(null),b=C("source-code"),w=C("preview"),o=C({attached:!1,stageRunId:null,pendingFork:!1}),q=f=>o.value={...o.value,attached:!!f},x=W(()=>{var f;return(f=i.value)!=null&&f.hook.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:o.value.attached&&o.value.pendingFork?{title:"No thread selected",message:"Fork the selected thread to run the workflow"}:o.value.attached&&!o.value.stageRunId?{title:"No thread selected",message:"Select a thread to run the workflow"}:null});function S(){c.push({name:"stages"})}const H=C(null),{result:i}=oe(async()=>{const[f,n]=await Promise.all([re.get(),ae.get(k.params.id)]);return X({workspace:f,hook:n})}),P=te.create();return(f,n)=>(d(),m(ne,{"no-margins":""},{navbar:a(()=>[e(i)?(d(),m(e(ge),{key:0,title:e(i).hook.title,style:{padding:"5px 25px","margin-bottom":"15px"},onBack:S},{extra:a(()=>[t(fe,{"docs-path":"hooks","editing-model":e(i).hook,"show-save-button":!1},null,8,["editing-model"])]),_:1},8,["title"])):y("",!0)]),content:a(()=>[e(i)?(d(),m(e(D),{key:0,gap:"40",style:{width:"calc(100% - 80px)"}},{default:a(()=>[N("div",Ce,[t(e(O),{"active-key":b.value,"onUpdate:activeKey":n[0]||(n[0]=l=>b.value=l)},{rightExtra:a(()=>[t(ve,{model:e(i).hook},null,8,["model"])]),default:a(()=>[t(e(F),{key:"source-code",tab:"Source code"}),t(e(F),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"]),b.value==="source-code"?(d(),m(Z,{key:0,script:e(i).hook,workspace:e(i).workspace},null,8,["script","workspace"])):y("",!0),e(i).hook&&b.value==="settings"?(d(),m(_e,{key:1,hook:e(i).hook},null,8,["hook"])):y("",!0)]),N("div",we,[t(e(O),{"active-key":w.value,"onUpdate:activeKey":n[1]||(n[1]=l=>w.value=l)},{rightExtra:a(()=>[t(e(D),{align:"center",gap:"middle"},{default:a(()=>[t(e(D),{gap:"small"},{default:a(()=>[t(e(Q),null,{default:a(()=>[v("Continue workflow")]),_:1}),t(e(he),{checked:o.value.attached,"onUpdate:checked":q},null,8,["checked"])]),_:1})]),_:1})]),default:a(()=>[t(e(F),{key:"preview",tab:"Preview"})]),_:1},8,["active-key"]),e(i).hook&&w.value==="preview"?(d(),m(be,{key:0,ref_key:"tester",ref:u,"execution-config":o.value,"onUpdate:executionConfig":n[2]||(n[2]=l=>o.value=l),hook:e(i).hook,"log-service":e(P),"disabled-warning":x.value},null,8,["execution-config","hook","log-service","disabled-warning"])):y("",!0)])]),_:1})):y("",!0)]),footer:a(()=>{var l,r,s;return[t(ee,{ref_key:"smartConsole",ref:H,runtime:"forms","log-service":e(P),stage:(l=e(i))==null?void 0:l.hook,workspace:(r=e(i))==null?void 0:r.workspace,onRestart:(s=u.value)==null?void 0:s.runHook},null,8,["log-service","stage","workspace","onRestart"])]}),_:1}))}});export{wt as default};
//# sourceMappingURL=HookEditor.132f37b9.js.map