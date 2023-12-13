import{d as B,G,F as O,r as U,H as Q,b as n,c as d,w as l,ew as y,f as o,u as e,ad as V,eu as S,eB as w,cG as x,bQ as b,bX as C,az as h,b6 as H,ct as R,e as L,eC as D,ez as M,eA as z}from"./outputWidgets.3acae187.js";import{R as J,S as Y,L as j}from"./RuntimeCommonSettings.7e7b3b8c.js";import{a as X}from"./asyncComputed.4acb40f3.js";import{H as K}from"./hooks.94468817.js";import{B as W}from"./BaseLayout.550facf6.js";import{_ as Z}from"./RunButton.vue_vue_type_script_setup_true_lang.75ebec2c.js";import{D as ee,A as te}from"./index.c179b7b3.js";import{A as c,F as $}from"./Form.01134ed5.js";import{C as ae,A as N}from"./CollapsePanel.da3dea77.js";import{A as oe}from"./index.d2e87b7c.js";import{A as le}from"./index.72042afd.js";import{a as re}from"./index.a63dba09.js";import{N as se}from"./NavbarControls.56d9c88d.js";import{c as ne}from"./index.ec1e7f1e.js";import{A as q,T as ue}from"./TabPane.7427d21f.js";import"./uuid.92b68c2e.js";import"./icons.238cb834.js";import"./jobs.f9bdba5e.js";import"./record.8667ddd6.js";import"./pubsub.bc590f31.js";import"./workspaces.7a27fae6.js";import"./url.ba80c662.js";import"./Title.b0254e64.js";import"./popupNotifcation.8ea6ea7e.js";import"./index.ccaafdec.js";import"./SaveButton.vue_vue_type_script_setup_true_lang.8f5dc820.js";import"./ant-design.0486e70d.js";import"./index.ea121cf6.js";(function(){try{var f=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(f._sentryDebugIds=f._sentryDebugIds||{},f._sentryDebugIds[i]="7d0acf77-90d4-44f8-a646-bec2c280c4f0",f._sentryDebugIdIdentifier="sentry-dbid-7d0acf77-90d4-44f8-a646-bec2c280c4f0")}catch{}})();const de={style:{display:"flex","flex-direction":"column",gap:"10px"}},ie={key:1},P="abstra-run-id",pe=B({__name:"HookTester",props:{hook:{},logService:{}},setup(f,{expose:i}){const p=f,k=[{label:"GET",value:"GET"},{label:"POST",value:"POST"},{label:"PUT",value:"PUT"},{label:"PATCH",value:"PATCH"}],v=G(()=>{var r;if((r=t.response)!=null&&r.status)return t.response.status>=500?"red":t.response.status>=400?"orange":t.response.status>=200?"green":"blue"}),I=r=>{t.stageRunId=r},t=O({shouldSelectStageRun:!p.hook.isInitial,stageRunId:null,queryParams:[],headers:[{key:"Content-Type",value:"application/json"}],method:"POST",body:JSON.stringify({firstName:"John",lastName:"Doe",age:25,address:{streetAddress:"21 2nd Ave",city:"New York",state:"NY",postalCode:"10021"}},null,4)}),_=U(!1),T=async()=>{_.value=!0;try{const r=await p.hook.test({method:t.method,query:t.queryParams.reduce((u,{name:a,value:s})=>(a&&s&&(u[a]=s),u),{}),body:t.body,headers:t.headers.reduce((u,{key:a,value:s})=>(a&&s&&(u[a]=s),u),{})});t.response=r,r.stderr&&p.logService.log({type:"stderr",log:r.stderr}),r.stdout&&p.logService.log({type:"stdout",log:r.stdout})}finally{_.value=!1}};Q([()=>t.stageRunId,()=>t.queryParams],([r,u])=>{const a=u.find(s=>s.name===P);if(r&&!a){t.queryParams.push({name:P,value:r});return}if(!r&&a){t.queryParams=t.queryParams.filter(s=>s.name!==P);return}r&&a&&r!==a.value&&(a.value=r)});const A=()=>{t.queryParams.push({name:"",value:""})},g=r=>{t.queryParams=t.queryParams.filter((u,a)=>a!==r)},E=()=>{t.headers.push({key:"",value:""})},F=r=>{t.headers=t.headers.filter((u,a)=>a!==r)};return i({runHook:T}),(r,u)=>(n(),d(e($),{layout:"vertical"},{default:l(()=>[y("",!0),o(e(c),{label:"Method"},{default:l(()=>[o(e(V),{value:t.method,options:k,onSelect:u[1]||(u[1]=a=>t.method=a)},null,8,["value"])]),_:1}),o(e(c),null,{default:l(()=>[o(e(ae),{ghost:""},{default:l(()=>[o(e(N),{header:`Query Params (${t.queryParams.length})`},{default:l(()=>[(n(!0),S(H,null,w(t.queryParams,(a,s)=>(n(),d(e(c),{key:s},{default:l(()=>[o(e(x),null,{default:l(()=>[o(e(b),{value:a.name,"onUpdate:value":m=>a.name=m,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),o(e(b),{value:a.value,"onUpdate:value":m=>a.value=m,type:"text",placeholder:"value",disabled:a.name===P},null,8,["value","onUpdate:value","disabled"]),o(e(C),{danger:"",onClick:m=>g(s)},{default:l(()=>[h("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128)),o(e(c),null,{default:l(()=>[o(e(C),{type:"dashed",style:{width:"100%"},onClick:A},{default:l(()=>[h("Add Query Param")]),_:1})]),_:1})]),_:1},8,["header"]),o(e(N),{header:`Headers (${t.headers.length})`},{default:l(()=>[(n(!0),S(H,null,w(t.headers,(a,s)=>(n(),d(e(c),{key:s,label:s===0?"Headers":void 0},{default:l(()=>[o(e(x),null,{default:l(()=>[o(e(b),{value:a.key,"onUpdate:value":m=>a.key=m,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),o(e(b),{value:a.value,"onUpdate:value":m=>a.value=m,type:"text",placeholder:"value"},null,8,["value","onUpdate:value"]),o(e(C),{danger:"",onClick:m=>F(s)},{default:l(()=>[h("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["label"]))),128)),o(e(c),null,{default:l(()=>[o(e(C),{type:"dashed",style:{width:"100%"},onClick:E},{default:l(()=>[h("Add Header")]),_:1})]),_:1})]),_:1},8,["header"]),o(e(N),{header:"Body"},{default:l(()=>[t.method!=="GET"?(n(),d(e(c),{key:0},{default:l(()=>[o(e(R),{value:t.body,"onUpdate:value":u[2]||(u[2]=a=>t.body=a)},null,8,["value"])]),_:1})):y("",!0)]),_:1})]),_:1})]),_:1}),o(e(c),null,{default:l(()=>[L("div",de,[!t.stageRunId&&!r.hook.isInitial?(n(),d(e(oe),{key:0,message:"No task instance was selected. It must be set during runtime.",type:"info","show-icon":""})):y("",!0),o(Z,{loading:_.value,onClick:T},null,8,["loading"])])]),_:1}),o(e(le),{orientation:"left"},{default:l(()=>[h("Response")]),_:1}),t.response?(n(),S("div",ie,[o(e(re),{color:v.value},{default:l(()=>[h(D(t.response.status),1)]),_:1},8,["color"]),o(e(te),null,{default:l(()=>[(n(!0),S(H,null,w(t.response.headers,(a,s)=>(n(),d(e(ee),{key:s,label:s},{default:l(()=>[h(D(a),1)]),_:2},1032,["label"]))),128))]),_:1}),o(e(R),{value:t.response.body},null,8,["value"])])):y("",!0)]),_:1}))}}),me=B({__name:"HookSettings",props:{hook:{}},setup(f){return(i,p)=>(n(),d(e($),{layout:"vertical"},{default:l(()=>[o(e(c),{label:"Name",required:""},{default:l(()=>[o(e(b),{value:i.hook.title,"onUpdate:value":p[0]||(p[0]=k=>i.hook.title=k)},null,8,["value"])]),_:1}),o(J,{runtime:i.hook},null,8,["runtime"])]),_:1}))}}),Oe=B({__name:"HookEditor",setup(f){const i=M(),p=z(),k=U(null),v=U("test");function I(){i.push({name:"hooks"})}const{result:t}=X(()=>K.get(p.params.id)),_=j.create();return(T,A)=>(n(),d(W,null,{navbar:l(()=>[e(t)?(n(),d(e(ne),{key:0,title:e(t).title,style:{padding:"5px 10px"},onBack:I},{footer:l(()=>[o(e(ue),{"active-key":v.value,"onUpdate:activeKey":A[0]||(A[0]=g=>v.value=g)},{default:l(()=>[o(e(q),{key:"test",tab:"Test"}),o(e(q),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:l(()=>[o(se,{"docs-path":"hooks/","editing-model":e(t),"show-save-button":v.value==="settings"},null,8,["editing-model","show-save-button"])]),_:1},8,["title"])):y("",!0)]),content:l(()=>[e(t)&&v.value==="test"?(n(),d(pe,{key:0,ref_key:"tester",ref:k,hook:e(t),"log-service":e(_)},null,8,["hook","log-service"])):y("",!0),e(t)&&v.value==="settings"?(n(),d(me,{key:1,hook:e(t)},null,8,["hook"])):y("",!0)]),footer:l(()=>{var g;return[e(t)&&v.value==="test"?(n(),d(Y,{key:0,runtime:"forms","log-service":e(_),onRestart:(g=k.value)==null?void 0:g.runHook},null,8,["log-service","onRestart"])):y("",!0)]}),_:1}))}});export{Oe as default};
//# sourceMappingURL=HookEditor.1ec6a1df.js.map