import{d as k,r as f,b as u,ev as h,f as o,c as d,w as l,u as e,bO as A,eA as B,eB as N,eK as U,ex as v,e as x}from"./outputWidgets.f6d682fa.js";import{W as R}from"./workspaces.e22fc67c.js";import{a as $}from"./asyncComputed.ed0deb47.js";import{S as D}from"./scripts.951f79db.js";import"./envVars.679dd37d.js";import{R as F,S as E,a as L,L as P}from"./SourceCode.9801aed6.js";import{B as K}from"./BaseLayout.b7275f9a.js";import{_ as V}from"./RunButton.vue_vue_type_script_setup_true_lang.f54288e1.js";import{A as J,F as M}from"./Form.3eacca1c.js";import{N as W}from"./NavbarControls.582a8a4d.js";import{_ as q}from"./SaveButton.vue_vue_type_script_setup_true_lang.102bd0f2.js";import{S as H}from"./StageRunSelector.4f6c8044.js";import{c as O}from"./index.6b070441.js";import{A as j}from"./index.91f4c839.js";import{A as y,T as C}from"./TabPane.732acb1f.js";import"./runnerData.c5e5803f.js";import"./url.4b5dbfe0.js";import"./record.d9541040.js";import"./pubsub.16533839.js";import"./uuid.c644612e.js";import"./icons.42488cb2.js";import"./jobs.0ec5d421.js";import"./validations.c10f9218.js";import"./string.e461de63.js";import"./toggleHighContrast.3b7a710d.js";import"./index.a725ae0a.js";import"./Card.cdf61cdb.js";import"./Text.f0ff112a.js";import"./Base.7c6912dc.js";import"./Typography.9e9f2c8e.js";import"./hasIn.25a290f4.js";import"./index.224bafd3.js";import"./popupNotifcation.aa99f780.js";import"./Link.11ba75c3.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.23d47507.js";import"./Paragraph.f4abe30c.js";import"./Modal.e19cbbe1.js";import"./ant-design.d327c68e.js";import"./index.23ab44a9.js";import"./index.3730cb24.js";import"./index.246b0dac.js";import"./ArrowRightOutlined.08fa31dd.js";(function(){try{var p=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(p._sentryDebugIds=p._sentryDebugIds||{},p._sentryDebugIds[m]="e70ae828-6426-448a-bb87-49552e619836",p._sentryDebugIdIdentifier="sentry-dbid-e70ae828-6426-448a-bb87-49552e619836")}catch{}})();const z={style:{width:"100%",display:"flex","flex-direction":"column"}},G=k({__name:"ScriptTester",props:{script:{},logService:{},stageRunId:{}},emits:["update-stage-run-id"],setup(p,{emit:m}){const r=p,g=f(!1),n=async()=>{g.value=!0;try{const a=r.stageRunId?await r.script.run(r.stageRunId):await r.script.test();a.stderr&&r.logService.log({type:"stderr",log:a.stderr}),a.stdout&&r.logService.log({type:"stdout",log:a.stdout})}finally{g.value=!1,r.stageRunId&&m("update-stage-run-id",null)}};return(a,c)=>(u(),h("div",z,[o(V,{loading:g.value,disabled:a.script.hasChanges(),onClick:n,onSave:c[0]||(c[0]=b=>a.script.save())},null,8,["loading","disabled"])]))}}),Q=k({__name:"ScriptSettings",props:{script:{}},setup(p){const r=f(p.script);return(g,n)=>(u(),d(e(M),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:l(()=>[o(e(J),{label:"Name",required:""},{default:l(()=>[o(e(A),{value:r.value.title,"onUpdate:value":n[0]||(n[0]=a=>r.value.title=a)},null,8,["value"])]),_:1}),o(F,{runtime:r.value},null,8,["runtime"])]),_:1}))}}),X={style:{width:"50%"}},Y={style:{width:"50%"}},Je=k({__name:"ScriptEditor",setup(p){const m=B(),r=N();function g(){m.push({name:"stages"})}const n=f("source-code"),a=f("preview"),c=f(null),b=f(!1),{result:i}=$(()=>Promise.all([R.get(),D.get(r.params.id),R.readTestData()]).then(([w,t,s])=>(t.updateInitialState("test_data",s),U({workspace:w,script:t})))),_=P.create(),S=f(null);return(w,t)=>(u(),d(K,{"no-margins":""},{navbar:l(()=>[e(i)?(u(),d(e(O),{key:0,title:e(i).script.title,style:{padding:"5px 10px"},onBack:g},{extra:l(()=>[o(W,{"show-save-button":!1,"editing-model":e(i).script},null,8,["editing-model"])]),_:1},8,["title"])):v("",!0)]),content:l(()=>[e(i)?(u(),d(e(j),{key:0,gap:"40",style:{width:"calc(100% - 80px)"}},{default:l(()=>[x("div",X,[o(e(C),{"active-key":n.value,"onUpdate:activeKey":t[0]||(t[0]=s=>n.value=s)},{rightExtra:l(()=>[o(q,{model:e(i).script},null,8,["model"])]),default:l(()=>[o(e(y),{key:"source-code",tab:"Source code"}),o(e(y),{key:"settings",tab:"Settings"}),o(e(y),{key:"test-data",tab:"Thread data"})]),_:1},8,["active-key"]),n.value==="source-code"?(u(),d(E,{key:0,script:e(i).script,workspace:e(i).workspace},null,8,["script","workspace"])):v("",!0),e(i).script&&n.value==="settings"?(u(),d(Q,{key:1,script:e(i).script},null,8,["script"])):v("",!0),n.value==="test-data"?(u(),d(H,{key:2,"stage-run-id":c.value,"onUpdate:stageRunId":t[1]||(t[1]=s=>c.value=s),"enable-start-thread":b.value,"onUpdate:enableStartThread":t[2]||(t[2]=s=>b.value=s),stage:e(i).script,onFixInvalidJson:t[3]||(t[3]=(s,T)=>{var I;return(I=S.value)==null?void 0:I.fixJson(s,T)})},null,8,["stage-run-id","enable-start-thread","stage"])):v("",!0)]),x("div",Y,[o(e(C),{"active-key":a.value,"onUpdate:activeKey":t[4]||(t[4]=s=>a.value=s)},{default:l(()=>[o(e(y),{key:"preview",tab:"Preview"})]),_:1},8,["active-key"]),e(i).script&&a.value==="preview"?(u(),d(G,{key:0,ref:"tester",script:e(i).script,"log-service":e(_),"stage-run-id":c.value,onUpdateStageRunId:t[5]||(t[5]=s=>c.value=s)},null,8,["script","log-service","stage-run-id"])):v("",!0)])]),_:1})):v("",!0)]),footer:l(()=>[o(L,{ref_key:"smartConsole",ref:S,runtime:"forms","log-service":e(_)},null,8,["log-service"])]),_:1}))}});export{Je as default};
//# sourceMappingURL=ScriptEditor.5b14f745.js.map
