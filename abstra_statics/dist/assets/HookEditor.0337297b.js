import{d as U,F as M,E as O,r as B,G as V,b as n,c as d,w as r,ev as f,f as o,u as e,ab as G,et as C,eA as T,cA as $,bF as S,bM as w,ao as y,bo as H,cn as N,e as I,eB as q,ey as Q,ez as W,eI as j}from"./outputWidgets.4d9ba3ef.js";import{R as z,S as J,a as K,L as X}from"./SourceCode.f43517fd.js";import{a as Y}from"./asyncComputed.f4677978.js";import{H as Z}from"./jobs.e5da95ad.js";import{W as ee}from"./workspaces.64773b74.js";import{B as te}from"./BaseLayout.bcc711ed.js";import{_ as oe}from"./RunButton.vue_vue_type_script_setup_true_lang.56f1791c.js";import"./index.e5820f79.js";import{C as ae,A as x}from"./CollapsePanel.59df2ce7.js";import{A as re}from"./index.ca094f94.js";import{D as le,A as se}from"./index.459bafae.js";import{A as c}from"./FormItem.24b19ea4.js";import{A as ne}from"./index.26e4a67e.js";import{A as ue}from"./index.c7c4284d.js";import{F as E}from"./Form.d59f41b5.js";import{N as de}from"./NavbarControls.0775e2bc.js";import{_ as ie}from"./SaveButton.vue_vue_type_script_setup_true_lang.eed7ca99.js";import{c as pe}from"./index.b40ff927.js";import{A as me}from"./index.b6917982.js";import{A as D,T as ce}from"./TabPane.64ffca33.js";import{a as fe}from"./Title.60378b9e.js";import"./uuid.bdef0ddd.js";import"./icons.a69fa9c8.js";import"./storage.39df5cbf.js";import"./scripts.1b06b422.js";import"./record.4e413006.js";import"./pubsub.3bfcfc7f.js";import"./validations.efca2abf.js";import"./string.aad39fae.js";import"./toggleHighContrast.4fda9631.js";import"./Card.5ef44f63.js";import"./url.cd5d7e23.js";import"./Text.cb3c74fa.js";import"./hasIn.1cdec4af.js";import"./index.493c41dc.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.2c380584.js";import"./index.4b4ed2a2.js";import"./Link.ae4bc9d7.js";import"./popupNotifcation.33f89f53.js";import"./CircularLoading.3bf11925.js";import"./Modal.889e82ae.js";import"./ant-design.1a6731f3.js";import"./index.7bba44d5.js";(function(){try{var v=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(v._sentryDebugIds=v._sentryDebugIds||{},v._sentryDebugIds[i]="7a908736-2bd6-458b-b42a-9ebdfdb4cf76",v._sentryDebugIdIdentifier="sentry-dbid-7a908736-2bd6-458b-b42a-9ebdfdb4cf76")}catch{}})();const ve={style:{display:"flex","flex-direction":"column",gap:"10px"}},ye={key:1},P="abstra-run-id",he=U({__name:"HookTester",props:{hook:{},logService:{},disabled:{type:Boolean}},setup(v,{expose:i}){const p=v,h=[{label:"GET",value:"GET"},{label:"POST",value:"POST"},{label:"PUT",value:"PUT"},{label:"PATCH",value:"PATCH"}],k=M(()=>{var l;if((l=t.response)!=null&&l.status)return t.response.status>=500?"red":t.response.status>=400?"orange":t.response.status>=200?"green":"blue"}),R=l=>{t.stageRunId=l},t=O({shouldSelectStageRun:!p.hook.isInitial,stageRunId:null,queryParams:[],headers:[{key:"Content-Type",value:"application/json"}],method:"POST",body:JSON.stringify({foo:123,bar:"abc"},null,4)}),b=B(!1),A=async()=>{b.value=!0;try{const l=await p.hook.test({method:t.method,query:t.queryParams.reduce((u,{name:a,value:s})=>(a&&s&&(u[a]=s),u),{}),body:t.body,headers:t.headers.reduce((u,{key:a,value:s})=>(a&&s&&(u[a]=s),u),{})});t.response=l,l.stderr&&p.logService.log({type:"stderr",log:l.stderr}),l.stdout&&p.logService.log({type:"stdout",log:l.stdout})}finally{b.value=!1}};V([()=>t.stageRunId,()=>t.queryParams],([l,u])=>{const a=u.find(s=>s.name===P);if(l&&!a){t.queryParams.push({name:P,value:l});return}if(!l&&a){t.queryParams=t.queryParams.filter(s=>s.name!==P);return}l&&a&&l!==a.value&&(a.value=l)});const _=()=>{t.queryParams.push({name:"",value:""})},g=l=>{t.queryParams=t.queryParams.filter((u,a)=>a!==l)},F=()=>{t.headers.push({key:"",value:""})},L=l=>{t.headers=t.headers.filter((u,a)=>a!==l)};return i({runHook:A}),(l,u)=>(n(),d(e(E),{layout:"vertical"},{default:r(()=>[f("",!0),o(e(c),{label:"Method"},{default:r(()=>[o(e(G),{value:t.method,options:h,onSelect:u[1]||(u[1]=a=>t.method=a)},null,8,["value"])]),_:1}),o(e(c),null,{default:r(()=>[o(e(ae),{ghost:""},{default:r(()=>[o(e(x),{header:`Query Params (${t.queryParams.length})`},{default:r(()=>[(n(!0),C(H,null,T(t.queryParams,(a,s)=>(n(),d(e(c),{key:s},{default:r(()=>[o(e($),null,{default:r(()=>[o(e(S),{value:a.name,"onUpdate:value":m=>a.name=m,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),o(e(S),{value:a.value,"onUpdate:value":m=>a.value=m,type:"text",placeholder:"value",disabled:a.name===P},null,8,["value","onUpdate:value","disabled"]),o(e(w),{danger:"",onClick:m=>g(s)},{default:r(()=>[y("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128)),o(e(c),null,{default:r(()=>[o(e(w),{type:"dashed",style:{width:"100%"},onClick:_},{default:r(()=>[y("Add Query Param")]),_:1})]),_:1})]),_:1},8,["header"]),o(e(x),{header:`Headers (${t.headers.length})`},{default:r(()=>[(n(!0),C(H,null,T(t.headers,(a,s)=>(n(),d(e(c),{key:s,label:s===0?"Headers":void 0},{default:r(()=>[o(e($),null,{default:r(()=>[o(e(S),{value:a.key,"onUpdate:value":m=>a.key=m,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),o(e(S),{value:a.value,"onUpdate:value":m=>a.value=m,type:"text",placeholder:"value"},null,8,["value","onUpdate:value"]),o(e(w),{danger:"",onClick:m=>L(s)},{default:r(()=>[y("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["label"]))),128)),o(e(c),null,{default:r(()=>[o(e(w),{type:"dashed",style:{width:"100%"},onClick:F},{default:r(()=>[y("Add Header")]),_:1})]),_:1})]),_:1},8,["header"]),o(e(x),{header:"Body"},{default:r(()=>[t.method!=="GET"?(n(),d(e(c),{key:0},{default:r(()=>[o(e(N),{value:t.body,"onUpdate:value":u[2]||(u[2]=a=>t.body=a)},null,8,["value"])]),_:1})):f("",!0)]),_:1})]),_:1})]),_:1}),o(e(c),null,{default:r(()=>[I("div",ve,[!t.stageRunId&&!l.hook.isInitial?(n(),d(e(ne),{key:0,message:"No thread was selected. It must be set during runtime.",type:"info","show-icon":""})):f("",!0),o(oe,{loading:b.value,disabled:l.disabled,onClick:A,onSave:u[3]||(u[3]=a=>l.hook.save())},null,8,["loading","disabled"])])]),_:1}),o(e(re),{orientation:"left"},{default:r(()=>[y("Response")]),_:1}),t.response?(n(),C("div",ye,[o(e(ue),{color:k.value},{default:r(()=>[y(q(t.response.status),1)]),_:1},8,["color"]),o(e(se),null,{default:r(()=>[(n(!0),C(H,null,T(t.response.headers,(a,s)=>(n(),d(e(le),{key:s,label:s},{default:r(()=>[y(q(a),1)]),_:2},1032,["label"]))),128))]),_:1}),o(e(N),{value:t.response.body},null,8,["value"])])):f("",!0)]),_:1}))}}),ke=U({__name:"HookSettings",props:{hook:{}},setup(v){return(i,p)=>(n(),d(e(E),{layout:"vertical"},{default:r(()=>[o(e(c),{label:"Name",required:""},{default:r(()=>[o(e(S),{value:i.hook.title,"onUpdate:value":p[0]||(p[0]=h=>i.hook.title=h)},null,8,["value"])]),_:1}),o(z,{runtime:i.hook},null,8,["runtime"])]),_:1}))}}),be={style:{width:"50%"}},_e={style:{width:"50%"}},it=U({__name:"HookEditor",setup(v){const i=Q(),p=W(),h=B(null),k=B("source-code");function R(){i.push({name:"home"})}const{result:t}=Y(()=>Promise.all([ee.get(),Z.get(p.params.id)]).then(([A,_])=>j({workspace:A,hook:_}))),b=X.create();return(A,_)=>(n(),d(te,null,{navbar:r(()=>[e(t)?(n(),d(e(pe),{key:0,title:e(t).hook.title,style:{padding:"5px 25px"},onBack:R},{extra:r(()=>[o(de,{"docs-path":"hooks","editing-model":e(t).hook,"show-save-button":!1},null,8,["editing-model"])]),_:1},8,["title"])):f("",!0)]),content:r(()=>[e(t)?(n(),d(e(me),{key:0,gap:"40",style:{width:"calc(100% - 80px)"}},{default:r(()=>[I("div",be,[o(e(ce),{"active-key":k.value,"onUpdate:activeKey":_[0]||(_[0]=g=>k.value=g)},{rightExtra:r(()=>[o(ie,{model:e(t).hook},null,8,["model"])]),default:r(()=>[o(e(D),{key:"source-code",tab:"Source code"}),o(e(D),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"]),k.value==="source-code"?(n(),d(J,{key:0,script:e(t).hook,workspace:e(t).workspace},null,8,["script","workspace"])):f("",!0),e(t).hook&&k.value==="settings"?(n(),d(ke,{key:1,hook:e(t).hook},null,8,["hook"])):f("",!0)]),I("div",_e,[o(e(fe),{level:4,style:{margin:"10px 0 24px 0"}},{default:r(()=>[y("Hook preview")]),_:1}),e(t).hook?(n(),d(he,{key:0,ref_key:"tester",ref:h,hook:e(t).hook,disabled:e(t).hook.hasChanges("code_content"),"log-service":e(b)},null,8,["hook","disabled","log-service"])):f("",!0)])]),_:1})):f("",!0)]),footer:r(()=>{var g;return[o(K,{runtime:"forms","log-service":e(b),onRestart:(g=h.value)==null?void 0:g.runHook},null,8,["log-service","onRestart"])]}),_:1}))}});export{it as default};
//# sourceMappingURL=HookEditor.0337297b.js.map