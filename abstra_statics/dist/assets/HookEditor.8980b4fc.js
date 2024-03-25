import{d as F,H as O,G as V,r as C,J,b as d,c as m,w as o,f as t,u as e,ae as j,ev as T,eC as q,cE as E,bz as A,bG as U,ar as v,aD as B,cr as L,ex as y,e as $,eD as G,eA as z,eB as K,eL as X}from"./outputWidgets.399def05.js";import{R as Y,S as Z,a as ee,L as te}from"./SourceCode.92170647.js";import{a as ae}from"./asyncComputed.f4656215.js";import{H as oe}from"./jobs.e58802d3.js";import{W as re}from"./workspaces.4ffe265e.js";import"./envVars.ffd0c835.js";import{B as ne}from"./BaseLayout.6eb0ab05.js";import{_ as le}from"./RunButton.vue_vue_type_script_setup_true_lang.6242905b.js";import{A as b}from"./api.315eb49f.js";import{T as se}from"./ThreadSelector.65de7967.js";import{D as ue,A as ie}from"./index.abf17a43.js";import{A as g,F as W}from"./Form.725ab820.js";import{C as de,A as R}from"./CollapsePanel.2108d608.js";import{B as pe}from"./Badge.a329587e.js";import{A as Q}from"./Text.ccd6267d.js";import{A as me}from"./index.2ad223b4.js";import{A as ce}from"./index.a2a440a7.js";import{N as fe}from"./NavbarControls.46a4db9b.js";import{_ as ve}from"./SaveButton.vue_vue_type_script_setup_true_lang.3f6a208d.js";import{c as ge}from"./index.4cc488fe.js";import{A as D}from"./index.a22cb932.js";import{A as N,T as M}from"./TabPane.78506a51.js";import{A as he}from"./index.ac9cec08.js";import"./uuid.ddd59fbb.js";import"./icons.f6d106dc.js";import"./scripts.e73ae8e3.js";import"./record.c9aea37a.js";import"./pubsub.9cd3fe84.js";import"./validations.255eb41d.js";import"./string.067c6045.js";import"./toggleHighContrast.724fc8f3.js";import"./index.60ef0a20.js";import"./Card.7157cd01.js";import"./runnerData.f8ac50b9.js";import"./url.c3259ec0.js";import"./Typography.2f5af698.js";import"./index.cf4c23b9.js";import"./index.581ce33d.js";import"./hasIn.2c80750f.js";import"./isNumeric.75337b1e.js";import"./Base.5fff8032.js";import"./index.95b9ac04.js";import"./Paragraph.3f493ddf.js";import"./popupNotifcation.35b231ea.js";import"./Link.df3ddb25.js";import"./CloseCircleOutlined.e14e141a.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.da78bef4.js";import"./Modal.1d07333c.js";import"./ant-design.a7fd4df8.js";import"./index.67d84c17.js";import"./ArrowRightOutlined.08fa31dd.js";(function(){try{var h=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(h._sentryDebugIds=h._sentryDebugIds||{},h._sentryDebugIds[c]="80632328-de8c-4786-917a-e5ac16e270d0",h._sentryDebugIdIdentifier="sentry-dbid-80632328-de8c-4786-917a-e5ac16e270d0")}catch{}})();const ke={style:{display:"flex","flex-direction":"column",gap:"10px"}},ye={key:0},_e=F({__name:"HookTester",props:{hook:{},logService:{},disabledWarning:{},executionConfig:{}},emits:["update:stage-run-id","update:execution-config"],setup(h,{expose:c,emit:k}){const u=h,_=[{label:"GET",value:"GET"},{label:"POST",value:"POST"},{label:"PUT",value:"PUT"},{label:"PATCH",value:"PATCH"}],w=O(()=>{var n;if((n=a.response)!=null&&n.status)return a.response.status>=500?"red":a.response.status>=400?"orange":a.response.status>=200?"green":"blue"}),a=V({shouldSelectStageRun:!u.hook.isInitial,stageRunId:u.executionConfig.stageRunId,queryParams:[],headers:[{key:"Content-Type",value:"application/json"}],method:"POST",body:JSON.stringify({foo:123,bar:"abc"},null,4)}),H=a.queryParams.find(n=>n.name===b);u.executionConfig.stageRunId&&!H&&a.queryParams.push({name:b,value:u.executionConfig.stageRunId});const x=C(!1),S=async()=>{x.value=!0;try{const n={method:a.method,query:a.queryParams.reduce((r,{name:s,value:p})=>(s&&p&&(r[s]=p),r),{}),body:a.body,headers:a.headers.reduce((r,{key:s,value:p})=>(s&&p&&(r[s]=p),r),{})},l=u.executionConfig.attached&&u.executionConfig.stageRunId?await u.hook.run(n):await u.hook.test(n);a.response=l,l.stderr&&u.logService.log({type:"stderr",log:l.stderr}),l.stdout&&u.logService.log({type:"stdout",log:l.stdout})}finally{x.value=!1,k("update:execution-config",{attached:!1,stageRunId:null,pendingFork:!1})}};J([()=>u.executionConfig.stageRunId,()=>a.queryParams],([n,l])=>{const r=l.find(s=>s.name===b);if(n&&!r){a.queryParams.push({name:b,value:n});return}if(!n&&r){a.queryParams=a.queryParams.filter(s=>s.name!==b);return}n&&r&&n!==r.value&&(r.value=n)});const I=()=>{a.queryParams.push({name:"",value:""})},i=n=>{a.queryParams=a.queryParams.filter((l,r)=>r!==n)},P=()=>{a.headers.push({key:"",value:""})},f=n=>{a.headers=a.headers.filter((l,r)=>r!==n)};return c({runHook:S}),(n,l)=>(d(),m(e(W),{layout:"vertical"},{default:o(()=>[t(e(g),{label:"Method"},{default:o(()=>[t(e(j),{value:a.method,options:_,onSelect:l[0]||(l[0]=r=>a.method=r)},null,8,["value"])]),_:1}),t(e(g),null,{default:o(()=>[t(e(de),{ghost:""},{default:o(()=>[t(e(R),{header:`Query Params (${a.queryParams.length})`},{default:o(()=>[(d(!0),T(B,null,q(a.queryParams,(r,s)=>(d(),m(e(g),{key:s},{default:o(()=>[t(e(E),null,{default:o(()=>[t(e(A),{value:r.name,"onUpdate:value":p=>r.name=p,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),t(e(A),{value:r.value,"onUpdate:value":p=>r.value=p,type:"text",placeholder:"value",disabled:r.name===e(b)},null,8,["value","onUpdate:value","disabled"]),t(e(U),{danger:"",onClick:p=>i(s)},{default:o(()=>[v("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128)),t(e(g),null,{default:o(()=>[t(e(U),{type:"dashed",style:{width:"100%"},onClick:I},{default:o(()=>[v(" Add Query Param ")]),_:1})]),_:1})]),_:1},8,["header"]),t(e(R),{header:`Headers (${a.headers.length})`},{default:o(()=>[(d(!0),T(B,null,q(a.headers,(r,s)=>(d(),m(e(g),{key:s,label:s===0?"Headers":void 0},{default:o(()=>[t(e(E),null,{default:o(()=>[t(e(A),{value:r.key,"onUpdate:value":p=>r.key=p,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),t(e(A),{value:r.value,"onUpdate:value":p=>r.value=p,type:"text",placeholder:"value"},null,8,["value","onUpdate:value"]),t(e(U),{danger:"",onClick:p=>f(s)},{default:o(()=>[v("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["label"]))),128)),t(e(g),null,{default:o(()=>[t(e(U),{type:"dashed",style:{width:"100%"},onClick:P},{default:o(()=>[v("Add Header")]),_:1})]),_:1})]),_:1},8,["header"]),t(e(R),{header:"Body"},{default:o(()=>[a.method!=="GET"?(d(),m(e(g),{key:0},{default:o(()=>[t(e(L),{value:a.body,"onUpdate:value":l[1]||(l[1]=r=>a.body=r)},null,8,["value"])]),_:1})):y("",!0)]),_:1}),t(e(R),null,{header:o(()=>[t(e(pe),{dot:n.executionConfig.attached&&!!(n.executionConfig.pendingFork||!n.executionConfig.stageRunId)},{default:o(()=>[t(e(Q),null,{default:o(()=>[v("Thread")]),_:1})]),_:1},8,["dot"])]),default:o(()=>[t(se,{stage:n.hook,"execution-config":u.executionConfig,"onUpdate:executionConfig":l[2]||(l[2]=r=>k("update:execution-config",r))},null,8,["stage","execution-config"])]),_:1})]),_:1})]),_:1}),t(e(g),null,{default:o(()=>[$("div",ke,[t(le,{loading:x.value,disabled:n.disabledWarning,onClick:S,onSave:l[3]||(l[3]=r=>n.hook.save())},null,8,["loading","disabled"])])]),_:1}),t(e(me),{orientation:"left"},{default:o(()=>[v("Response")]),_:1}),a.response?(d(),T("div",ye,[t(e(ce),{color:w.value},{default:o(()=>[v(G(a.response.status),1)]),_:1},8,["color"]),t(e(ie),null,{default:o(()=>[(d(!0),T(B,null,q(a.response.headers,(r,s)=>(d(),m(e(ue),{key:s,label:s},{default:o(()=>[v(G(r),1)]),_:2},1032,["label"]))),128))]),_:1}),t(e(L),{value:a.response.body},null,8,["value"])])):y("",!0)]),_:1}))}}),be=F({__name:"HookSettings",props:{hook:{}},setup(h){return(c,k)=>(d(),m(e(W),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:o(()=>[t(e(g),{label:"Name",required:""},{default:o(()=>[t(e(A),{value:c.hook.title,"onUpdate:value":k[0]||(k[0]=u=>c.hook.title=u)},null,8,["value"])]),_:1}),t(Y,{runtime:c.hook},null,8,["runtime"])]),_:1}))}}),Ce={style:{width:"50%"}},we={style:{width:"50%"}},bt=F({__name:"HookEditor",setup(h){const c=z(),k=K(),u=C(null),_=C("source-code"),w=C("preview"),a=C({attached:!1,stageRunId:null,pendingFork:!1}),H=f=>a.value={...a.value,attached:!!f},x=O(()=>{var f;return(f=i.value)!=null&&f.hook.hasChanges()?{title:"Unsaved changes",message:"Save the form before running the workflow"}:a.value.attached&&a.value.pendingFork?{title:"No thread selected",message:"Fork the selected thread to run the workflow"}:a.value.attached&&!a.value.stageRunId?{title:"No thread selected",message:"Select a thread to run the workflow"}:null});function S(){c.push({name:"stages"})}const I=C(null),{result:i}=ae(async()=>{const[f,n]=await Promise.all([re.get(),oe.get(k.params.id)]);return X({workspace:f,hook:n})}),P=te.create();return(f,n)=>(d(),m(ne,{"no-margins":""},{navbar:o(()=>[e(i)?(d(),m(e(ge),{key:0,title:e(i).hook.title,style:{padding:"5px 25px","margin-bottom":"15px"},onBack:S},{extra:o(()=>[t(fe,{"docs-path":"hooks","editing-model":e(i).hook,"show-save-button":!1},null,8,["editing-model"])]),_:1},8,["title"])):y("",!0)]),content:o(()=>[e(i)?(d(),m(e(D),{key:0,gap:"40",style:{width:"calc(100% - 80px)"}},{default:o(()=>[$("div",Ce,[t(e(M),{"active-key":_.value,"onUpdate:activeKey":n[0]||(n[0]=l=>_.value=l)},{rightExtra:o(()=>[t(ve,{model:e(i).hook},null,8,["model"])]),default:o(()=>[t(e(N),{key:"source-code",tab:"Source code"}),t(e(N),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"]),_.value==="source-code"?(d(),m(Z,{key:0,script:e(i).hook,workspace:e(i).workspace},null,8,["script","workspace"])):y("",!0),e(i).hook&&_.value==="settings"?(d(),m(be,{key:1,hook:e(i).hook},null,8,["hook"])):y("",!0)]),$("div",we,[t(e(M),{"active-key":w.value,"onUpdate:activeKey":n[1]||(n[1]=l=>w.value=l)},{rightExtra:o(()=>[t(e(D),{align:"center",gap:"middle"},{default:o(()=>[t(e(D),{gap:"small"},{default:o(()=>[t(e(Q),null,{default:o(()=>[v("Continue workflow")]),_:1}),t(e(he),{checked:a.value.attached,"onUpdate:checked":H},null,8,["checked"])]),_:1})]),_:1})]),default:o(()=>[t(e(N),{key:"preview",tab:"Preview"})]),_:1},8,["active-key"]),e(i).hook&&w.value==="preview"?(d(),m(_e,{key:0,ref_key:"tester",ref:u,"execution-config":a.value,"onUpdate:executionConfig":n[2]||(n[2]=l=>a.value=l),hook:e(i).hook,"log-service":e(P),"disabled-warning":x.value},null,8,["execution-config","hook","log-service","disabled-warning"])):y("",!0)])]),_:1})):y("",!0)]),footer:o(()=>{var l,r,s;return[t(ee,{ref_key:"smartConsole",ref:I,runtime:"forms","log-service":e(P),stage:(l=e(i))==null?void 0:l.hook,workspace:(r=e(i))==null?void 0:r.workspace,onRestart:(s=u.value)==null?void 0:s.runHook},null,8,["log-service","stage","workspace","onRestart"])]}),_:1}))}});export{bt as default};
//# sourceMappingURL=HookEditor.8980b4fc.js.map
