import{d as I,G as L,F as V,r as U,H as G,b as n,c as d,w as r,ex as f,f as o,u as e,ad as M,ev as C,eC as T,cC as q,bH as S,bO as w,aq as y,bq as x,cp as $,e as B,eD as D,eA as Q,eB as W,eK as j}from"./outputWidgets.b3a86e7b.js";import{R as J,S as K,a as z,L as X}from"./SourceCode.7571ebd6.js";import{a as Y}from"./asyncComputed.bb41673e.js";import{H as Z}from"./validations.21208a50.js";import{W as ee}from"./workspaces.2dacb8c5.js";import{B as te}from"./BaseLayout.3f35a302.js";import{_ as oe}from"./RunButton.vue_vue_type_script_setup_true_lang.dd9b6724.js";import"./index.19e4a013.js";import{C as ae,A as H,D as re,a as le}from"./index.bd7aea8f.js";import{A as se}from"./index.9366d96a.js";import{A as c}from"./FormItem.cdba7330.js";import{A as ne}from"./index.f0276026.js";import{A as ue}from"./index.72c1d494.js";import{F as E}from"./Form.1bdb3e67.js";import{N as de}from"./NavbarControls.e83e4659.js";import{_ as ie}from"./SaveButton.vue_vue_type_script_setup_true_lang.1ae54e44.js";import{c as pe}from"./index.79b9a86a.js";import{A as me}from"./index.a77ee815.js";import{A as N,T as ce}from"./TabPane.f4792853.js";import{a as fe}from"./Title.a7229bb6.js";import"./uuid.a7d01f21.js";import"./icons.34387b26.js";import"./scripts.c5a8edba.js";import"./record.55ec1174.js";import"./pubsub.60e1edc4.js";import"./toggleHighContrast.52fd4eff.js";import"./string.6ee9b725.js";import"./url.6e1f91f9.js";import"./hasIn.5581b27a.js";import"./index.2b125c9b.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.9ebe155f.js";import"./index.f2cc1934.js";import"./Text.29cf7118.js";import"./Link.6f75ee83.js";import"./popupNotifcation.147fe41d.js";import"./CircularLoading.e4ff4af5.js";import"./ant-design.5d22751a.js";import"./index.b477882f.js";(function(){try{var v=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(v._sentryDebugIds=v._sentryDebugIds||{},v._sentryDebugIds[i]="7c2b23cf-5338-457e-a5b3-427c9d22a493",v._sentryDebugIdIdentifier="sentry-dbid-7c2b23cf-5338-457e-a5b3-427c9d22a493")}catch{}})();const ve={style:{display:"flex","flex-direction":"column",gap:"10px"}},ye={key:1},P="abstra-run-id",he=I({__name:"HookTester",props:{hook:{},logService:{}},setup(v,{expose:i}){const p=v,h=[{label:"GET",value:"GET"},{label:"POST",value:"POST"},{label:"PUT",value:"PUT"},{label:"PATCH",value:"PATCH"}],k=L(()=>{var l;if((l=t.response)!=null&&l.status)return t.response.status>=500?"red":t.response.status>=400?"orange":t.response.status>=200?"green":"blue"}),R=l=>{t.stageRunId=l},t=V({shouldSelectStageRun:!p.hook.isInitial,stageRunId:null,queryParams:[],headers:[{key:"Content-Type",value:"application/json"}],method:"POST",body:JSON.stringify({foo:123,bar:"abc"},null,4)}),_=U(!1),A=async()=>{_.value=!0;try{const l=await p.hook.test({method:t.method,query:t.queryParams.reduce((u,{name:a,value:s})=>(a&&s&&(u[a]=s),u),{}),body:t.body,headers:t.headers.reduce((u,{key:a,value:s})=>(a&&s&&(u[a]=s),u),{})});t.response=l,l.stderr&&p.logService.log({type:"stderr",log:l.stderr}),l.stdout&&p.logService.log({type:"stdout",log:l.stdout})}finally{_.value=!1}};G([()=>t.stageRunId,()=>t.queryParams],([l,u])=>{const a=u.find(s=>s.name===P);if(l&&!a){t.queryParams.push({name:P,value:l});return}if(!l&&a){t.queryParams=t.queryParams.filter(s=>s.name!==P);return}l&&a&&l!==a.value&&(a.value=l)});const g=()=>{t.queryParams.push({name:"",value:""})},b=l=>{t.queryParams=t.queryParams.filter((u,a)=>a!==l)},F=()=>{t.headers.push({key:"",value:""})},O=l=>{t.headers=t.headers.filter((u,a)=>a!==l)};return i({runHook:A}),(l,u)=>(n(),d(e(E),{layout:"vertical"},{default:r(()=>[f("",!0),o(e(c),{label:"Method"},{default:r(()=>[o(e(M),{value:t.method,options:h,onSelect:u[1]||(u[1]=a=>t.method=a)},null,8,["value"])]),_:1}),o(e(c),null,{default:r(()=>[o(e(ae),{ghost:""},{default:r(()=>[o(e(H),{header:`Query Params (${t.queryParams.length})`},{default:r(()=>[(n(!0),C(x,null,T(t.queryParams,(a,s)=>(n(),d(e(c),{key:s},{default:r(()=>[o(e(q),null,{default:r(()=>[o(e(S),{value:a.name,"onUpdate:value":m=>a.name=m,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),o(e(S),{value:a.value,"onUpdate:value":m=>a.value=m,type:"text",placeholder:"value",disabled:a.name===P},null,8,["value","onUpdate:value","disabled"]),o(e(w),{danger:"",onClick:m=>b(s)},{default:r(()=>[y("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128)),o(e(c),null,{default:r(()=>[o(e(w),{type:"dashed",style:{width:"100%"},onClick:g},{default:r(()=>[y("Add Query Param")]),_:1})]),_:1})]),_:1},8,["header"]),o(e(H),{header:`Headers (${t.headers.length})`},{default:r(()=>[(n(!0),C(x,null,T(t.headers,(a,s)=>(n(),d(e(c),{key:s,label:s===0?"Headers":void 0},{default:r(()=>[o(e(q),null,{default:r(()=>[o(e(S),{value:a.key,"onUpdate:value":m=>a.key=m,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),o(e(S),{value:a.value,"onUpdate:value":m=>a.value=m,type:"text",placeholder:"value"},null,8,["value","onUpdate:value"]),o(e(w),{danger:"",onClick:m=>O(s)},{default:r(()=>[y("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["label"]))),128)),o(e(c),null,{default:r(()=>[o(e(w),{type:"dashed",style:{width:"100%"},onClick:F},{default:r(()=>[y("Add Header")]),_:1})]),_:1})]),_:1},8,["header"]),o(e(H),{header:"Body"},{default:r(()=>[t.method!=="GET"?(n(),d(e(c),{key:0},{default:r(()=>[o(e($),{value:t.body,"onUpdate:value":u[2]||(u[2]=a=>t.body=a)},null,8,["value"])]),_:1})):f("",!0)]),_:1})]),_:1})]),_:1}),o(e(c),null,{default:r(()=>[B("div",ve,[!t.stageRunId&&!l.hook.isInitial?(n(),d(e(ne),{key:0,message:"No thread was selected. It must be set during runtime.",type:"info","show-icon":""})):f("",!0),o(oe,{loading:_.value,onClick:A},null,8,["loading"])])]),_:1}),o(e(se),{orientation:"left"},{default:r(()=>[y("Response")]),_:1}),t.response?(n(),C("div",ye,[o(e(ue),{color:k.value},{default:r(()=>[y(D(t.response.status),1)]),_:1},8,["color"]),o(e(le),null,{default:r(()=>[(n(!0),C(x,null,T(t.response.headers,(a,s)=>(n(),d(e(re),{key:s,label:s},{default:r(()=>[y(D(a),1)]),_:2},1032,["label"]))),128))]),_:1}),o(e($),{value:t.response.body},null,8,["value"])])):f("",!0)]),_:1}))}}),ke=I({__name:"HookSettings",props:{hook:{}},setup(v){return(i,p)=>(n(),d(e(E),{layout:"vertical"},{default:r(()=>[o(e(c),{label:"Name",required:""},{default:r(()=>[o(e(S),{value:i.hook.title,"onUpdate:value":p[0]||(p[0]=h=>i.hook.title=h)},null,8,["value"])]),_:1}),o(J,{runtime:i.hook},null,8,["runtime"])]),_:1}))}}),_e={style:{width:"50%"}},ge={style:{width:"50%"}},lt=I({__name:"HookEditor",setup(v){const i=Q(),p=W(),h=U(null),k=U("source-code");function R(){i.push({name:"home"})}const{result:t}=Y(()=>Promise.all([ee.get(),Z.get(p.params.id)]).then(([A,g])=>j({workspace:A,hook:g}))),_=X.create();return(A,g)=>(n(),d(te,null,{navbar:r(()=>[e(t)?(n(),d(e(pe),{key:0,title:e(t).hook.title,style:{padding:"5px 25px"},onBack:R},{extra:r(()=>[o(de,{"docs-path":"hooks","editing-model":e(t).hook,"show-save-button":!1},null,8,["editing-model"])]),_:1},8,["title"])):f("",!0)]),content:r(()=>[e(t)?(n(),d(e(me),{key:0,gap:"40",style:{width:"calc(100% - 80px)"}},{default:r(()=>[B("div",_e,[o(e(ce),{"active-key":k.value,"onUpdate:activeKey":g[0]||(g[0]=b=>k.value=b)},{rightExtra:r(()=>[o(ie,{model:e(t).hook},null,8,["model"])]),default:r(()=>[o(e(N),{key:"source-code",tab:"Source code"}),o(e(N),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"]),k.value==="source-code"?(n(),d(K,{key:0,script:e(t).hook,workspace:e(t).workspace},null,8,["script","workspace"])):f("",!0),e(t).hook&&k.value==="settings"?(n(),d(ke,{key:1,hook:e(t).hook},null,8,["hook"])):f("",!0)]),B("div",ge,[o(e(fe),{level:4,style:{margin:"10px 0 24px 0"}},{default:r(()=>[y("Hook preview")]),_:1}),e(t).hook?(n(),d(he,{key:0,ref_key:"tester",ref:h,hook:e(t).hook,"log-service":e(_)},null,8,["hook","log-service"])):f("",!0)])]),_:1})):f("",!0)]),footer:r(()=>{var b;return[o(z,{runtime:"forms","log-service":e(_),onRestart:(b=h.value)==null?void 0:b.runHook},null,8,["log-service","onRestart"])]}),_:1}))}});export{lt as default};
//# sourceMappingURL=HookEditor.56c9da2d.js.map
