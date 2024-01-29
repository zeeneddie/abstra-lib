import{F as ce,r as ee,R as pe}from"./FormRunner.1f54f8a4.js";import{f as t,eE as me,d as M,r as R,F as A,b as c,c as g,w as r,ao as p,eB as fe,u as e,bM as C,cw as Q,et as I,eA as ve,cA as ge,bF as k,bo as te,E as ye,G as ae,ey as re,a as be,ev as P,be as he,eC as _e,eD as ke,e as V,t as we,bG as Y,ez as Se,eI as Pe}from"./outputWidgets.4d9ba3ef.js";import{R as xe,S as Ae,a as Re,L as Ce}from"./SourceCode.f43517fd.js";import{B as Fe}from"./BaseLayout.bcc711ed.js";import{a as oe}from"./asyncComputed.f4677978.js";import{F as Le}from"./forms.0e77fda8.js";import{W as le}from"./workspaces.64773b74.js";import{l as J,N as Te}from"./NavbarControls.0775e2bc.js";import{r as $e,d as Be,p as De}from"./icons.a69fa9c8.js";import{a as Ie}from"./Text.cb3c74fa.js";import{A as _}from"./FormItem.24b19ea4.js";import{A as T}from"./index.b6917982.js";import{M as Ee}from"./Modal.889e82ae.js";import{S as K}from"./storage.39df5cbf.js";import{A as Me}from"./Link.ae4bc9d7.js";import{A as Oe}from"./index.26e4a67e.js";import{F as ne}from"./Form.d59f41b5.js";import{a as E}from"./Title.60378b9e.js";import{_ as Ue}from"./SaveButton.vue_vue_type_script_setup_true_lang.eed7ca99.js";import{A as X,T as qe}from"./TabPane.64ffca33.js";import"./Card.5ef44f63.js";import{A as Ne}from"./index.c7c4284d.js";import{E as Qe}from"./ExpandOutlined.6dd4a314.js";import{c as je}from"./index.b40ff927.js";import"./url.cd5d7e23.js";import"./pubsub.3bfcfc7f.js";import"./jwt-decode.esm.74bd4619.js";import"./index.493c41dc.js";import"./CircularLoading.3bf11925.js";import"./PlayerNavbar.cad4f428.js";import"./ActionButton.63e74f87.js";import"./WidgetsFrame.5db7f10d.js";import"./index.085c3749.js";import"./index.4b4ed2a2.js";import"./uuid.bdef0ddd.js";import"./jobs.e5da95ad.js";import"./record.4e413006.js";import"./scripts.1b06b422.js";import"./validations.efca2abf.js";import"./string.aad39fae.js";import"./toggleHighContrast.4fda9631.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.2c380584.js";import"./popupNotifcation.33f89f53.js";import"./hasIn.1cdec4af.js";import"./ant-design.1a6731f3.js";import"./index.7bba44d5.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},u=new Error().stack;u&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[u]="6805692b-59c7-49d1-a325-38c197b67fbf",i._sentryDebugIdIdentifier="sentry-dbid-6805692b-59c7-49d1-a325-38c197b67fbf")}catch{}})();var ze={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"}}]},name:"link",theme:"outlined"};const Ve=ze;function Z(i){for(var u=1;u<arguments.length;u++){var a=arguments[u]!=null?Object(arguments[u]):{},n=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(o){return Object.getOwnPropertyDescriptor(a,o).enumerable}))),n.forEach(function(o){Ge(i,o,a[o])})}return i}function Ge(i,u,a){return u in i?Object.defineProperty(i,u,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[u]=a,i}var G=function(u,a){var n=Z({},u,a.attrs);return t(me,Z({},n,{icon:Ve}),null)};G.displayName="LinkOutlined";G.inheritAttrs=!1;const He=G,We=M({__name:"LaunchButton",props:{path:{}},setup(i){const u=i,a=R({state:"loading"}),n=A(()=>a.value.state!=="found"),o=A(()=>a.value.state==="loading"),s=A(()=>a.value.state==="found"?a.value.url:void 0),d=A(()=>{switch(a.value.state){case"error":return"Error";case"loading":return"Loading";case"not-deployed":return"No deploy";case"not-logged":return"Not logged";case"not-found":return"Page not found";case"found":return"Launch";default:throw new Error(`Invalid state ${a.value}`)}}),$=A(()=>{switch(a.value.state){case"error":return"Something went wrong when trying to get your deployed URL.";case"loading":return"Getting deployed url info...";case"not-deployed":return"You have no deployed url yet.";case"not-logged":return"You are not logged.";case"not-found":return"This page is not on the deployed application.";case"found":return"Launch the deployed version of this application in another tab.";default:throw new Error(`Invalid state ${a.value}`)}});async function B(h){const y=`https://${h}.abstra.app/_version`;return(await fetch(y)).ok}async function m(h){const y=`https://${h}.abstra.app/_pages/${u.path}`;return(await fetch(y)).ok}async function D(){if(!(await J.get()).logged){a.value={state:"not-logged"};return}const y=await J.getProjectInfo().catch(()=>null);if(!y){a.value={state:"error"};return}if(!await B(y.subdomain).catch(()=>null)){a.value={state:"not-deployed"};return}if(!await m(y.subdomain).catch(()=>null)){a.value={state:"not-found"};return}const f=`https://${y.subdomain}.abstra.app/${u.path}`;a.value={state:"found",url:f}}return D(),(h,y)=>(c(),g(e(Q),{title:d.value},{content:r(()=>[p(fe($.value),1)]),default:r(()=>[t(e(C),{href:s.value,target:"_blank",disabled:n.value,loading:o.value,size:"small",type:"link"},{icon:r(()=>[t(e(He))]),default:r(()=>[p(" Open Deployed ")]),_:1},8,["href","disabled","loading"])]),_:1},8,["title"]))}}),Ye="abstra-run-id",Je=M({__name:"QueryParamsModal",props:{open:{type:Boolean},close:{type:Function},state:{},addQueryParam:{type:Function},removeQueryParam:{type:Function}},setup(i){return(u,a)=>(c(),g(e(Ee),{open:u.open,onCancel:u.close},{footer:r(()=>[t(e(C),{type:"primary",onClick:u.close},{default:r(()=>[p("OK")]),_:1},8,["onClick"])]),default:r(()=>[t(e(T),{vertical:"",gap:"20"},{default:r(()=>[t(e(Ie),null,{default:r(()=>[p("Query params")]),_:1}),(c(!0),I(te,null,ve(u.state.queryParams,(n,o)=>(c(),g(e(_),{key:o},{default:r(()=>[t(e(ge),null,{default:r(()=>[t(e(k),{value:n.name,"onUpdate:value":s=>n.name=s,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),t(e(k),{value:n.value,"onUpdate:value":s=>n.value=s,type:"text",placeholder:"value",disabled:n.name===Ye},null,8,["value","onUpdate:value","disabled"]),t(e(C),{danger:"",onClick:s=>u.removeQueryParam(o)},{default:r(()=>[p("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128)),t(e(_),null,{default:r(()=>[t(e(C),{type:"dashed",style:{width:"100%"},onClick:u.addQueryParam},{default:r(()=>[p(" Add Query Param ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["open","onCancel"]))}}),Ke=i=>(_e("data-v-ba31712e"),i=i(),ke(),i),Xe={key:0},Ze={key:1},et=Ke(()=>V("br",null,null,-1)),tt={key:2,class:"form-preview-container"},z="abstra-run-id",at=M({__name:"FormTester",props:{form:{},logService:{},broker:{},disabled:{type:Boolean}},emits:["redirect","exit"],setup(i,{expose:u,emit:a}){var H;const n=i,o=()=>{a("exit")},s=R(!1),d=()=>{s.value=!0},$=()=>{s.value=!1},B=A(()=>`/${n.form.path}?${de.value.query}`),m=ye({queryParams:[{name:"foo",value:"bar"}],url:`${n.form.path}`,stageRunId:null}),D=l=>{m.stageRunId=l},h=R((H=K.get("dontShowRestartHelper"))!=null?H:!1),y=()=>{K.set("dontShowRestartHelper",!0),h.value=!0},{result:F,loading:O}=oe(()=>le.get()),f=()=>{m.queryParams.push({name:"",value:""})},x=l=>{m.queryParams=m.queryParams.filter((L,v)=>v!==l)};ae([()=>m.stageRunId,()=>m.queryParams],([l,L])=>{const v=L.find(b=>b.name===z);if(l&&!v){m.queryParams.push({name:z,value:l});return}if(!l&&v){m.queryParams=m.queryParams.filter(b=>b.name!==z);return}l&&v&&l!==v.value&&(v.value=l)}),n.broker.on("stdout",l=>{n.logService.log({type:"stdout",log:l.log})}),n.broker.on("stderr",l=>{n.logService.log({type:"stderr",log:l.log})}),n.broker.onClose(()=>{n.logService.log({type:"stderr",log:"Program closed"})}),n.broker.on("files:changed",()=>{n.logService.log({type:"files-changed",log:"Files changed"})});const w=re(),U=({path:l})=>{ee("editor",w,l)};function se(l,L){a("redirect",l,L)}const S=R(null);async function j(){var l;return n.logService.log({type:"restart"}),(l=S.value)==null?void 0:l.run()}async function ue(){var l;return(l=S.value)==null?void 0:l.run()}async function ie(){var l;return n.logService.log({type:"restart"}),(l=S.value)==null?void 0:l.exit()}const de=A(()=>{const l=new URLSearchParams(m.queryParams.filter(v=>v.name.trim()).reduce((v,b)=>({...v,[b.name]:b.value}),{})).toString();return{subdomain:"[your-subdomain]",path:n.form.path,query:l}});return u({restart:j,runner:S}),(l,L)=>{const v=be("icon");return c(),I(te,null,[t(e(ne),{layout:"vertical"},{default:r(()=>[P("",!0),t(e(T),{gap:"small"},{default:r(()=>{var b,q,N,W;return[((b=S.value)==null?void 0:b.formState)==="over"||((q=S.value)==null?void 0:q.formState)==="error"?(c(),g(e(Q),{key:0,placement:"bottom",visible:h.value?void 0:!0},{content:r(()=>[h.value?(c(),I("span",Xe,"Restart form")):(c(),I("span",Ze,[p(" You can restart the form here"),et,t(e(Me),{onClick:y},{default:r(()=>[p("Don't show this again")]),_:1})]))]),default:r(()=>[t(e(C),{disabled:l.disabled,onClick:j},{default:r(()=>[t(v,{path:e($e),width:"20"},null,8,["path"])]),_:1},8,["disabled"])]),_:1},8,["visible"])):P("",!0),((N=S.value)==null?void 0:N.formState)==="running"?(c(),g(e(Q),{key:1,placement:"bottom"},{content:r(()=>[p("Stop form")]),default:r(()=>[t(e(C),{onClick:ie},{default:r(()=>[t(v,{path:e(Be),width:"20"},null,8,["path"])]),_:1})]),_:1})):P("",!0),((W=S.value)==null?void 0:W.formState)==="idle"?(c(),g(e(Q),{key:2,placement:"bottom"},{content:r(()=>[p("Start form")]),default:r(()=>[t(e(C),{disabled:l.disabled,onClick:ue},{default:r(()=>[t(v,{path:e(De),width:"20"},null,8,["path"])]),_:1},8,["disabled"])]),_:1})):P("",!0),t(e(k),{value:B.value,onClick:d},null,8,["value"])]}),_:1}),e(O)||!e(F)?(c(),g(e(he),{key:1})):m.stageRunId||n.form.isInitial?(c(),I("div",tt,[t(ce,{ref_key:"runner",ref:S,form:l.form.makeRunnerData(e(F)),params:{...m.queryParams.reduce((b,{name:q,value:N})=>({...b,[q]:N}),{})},"is-preview":"","enable-auto-focus":"",broker:l.broker,disabled:l.disabled,onNavigate:U,onRedirect:se,onLogout:j,onExit:o},null,8,["form","params","broker","disabled"])])):(c(),g(e(Oe),{key:3,message:"This form is an intermediate task within the workflow. Please select a thread to initiate the form.",type:"warning","show-icon":""}))]),_:1}),t(Je,{open:s.value,close:$,state:m,"add-query-param":f,"remove-query-param":x},null,8,["open","state"])],64)}}});const rt=we(at,[["__scopeId","data-v-ba31712e"]]),ot=M({__name:"FormSettings",props:{form:{}},setup(i){const a=R(i.form);return(n,o)=>(c(),g(e(ne),{layout:"vertical"},{default:r(()=>[t(xe,{runtime:a.value},null,8,["runtime"]),t(e(_),{label:"Form name"},{default:r(()=>[t(e(k),{value:a.value.title,"onUpdate:value":o[0]||(o[0]=s=>a.value.title=s),type:"text",onChange:o[1]||(o[1]=s=>{var d;return a.value.title=(d=s.target.value)!=null?d:""})},null,8,["value"])]),_:1}),t(e(E),{level:3},{default:r(()=>[p(" Texts ")]),_:1}),t(e(E),{level:4},{default:r(()=>[p(" Welcome Screen ")]),_:1}),t(e(_),{label:"Title"},{default:r(()=>[t(e(k),{value:a.value.welcomeTitle,"onUpdate:value":o[2]||(o[2]=s=>a.value.welcomeTitle=s),type:"text",placeholder:a.value.title,disabled:a.value.autoStart},null,8,["value","placeholder","disabled"])]),_:1}),t(e(_),{label:"Description"},{default:r(()=>[t(e(k),{value:a.value.startMessage,"onUpdate:value":o[3]||(o[3]=s=>a.value.startMessage=s),type:"text",disabled:a.value.autoStart},null,8,["value","disabled"])]),_:1}),t(e(_),{label:"Start button label"},{default:r(()=>[t(e(k),{value:a.value.startButtonText,"onUpdate:value":o[4]||(o[4]=s=>a.value.startButtonText=s),type:"text",placeholder:"Start",disabled:a.value.autoStart},null,8,["value","disabled"])]),_:1}),t(e(_),null,{default:r(()=>[t(e(Y),{checked:a.value.autoStart,"onUpdate:checked":o[5]||(o[5]=s=>a.value.autoStart=s)},{default:r(()=>[p("Skip welcome screen")]),_:1},8,["checked"])]),_:1}),t(e(E),{level:4},{default:r(()=>[p(" End Screen ")]),_:1}),t(e(_),{label:"End text"},{default:r(()=>[t(e(k),{value:a.value.endMessage,"onUpdate:value":o[6]||(o[6]=s=>a.value.endMessage=s),type:"text",placeholder:"Thank you"},null,8,["value"])]),_:1}),t(e(_),{label:"Restart button label"},{default:r(()=>[t(e(k),{value:a.value.restartButtonText,"onUpdate:value":o[7]||(o[7]=s=>a.value.restartButtonText=s),placeholder:"Restart",type:"text",disabled:!a.value.allowRestart},null,8,["value","disabled"])]),_:1}),t(e(_),null,{default:r(()=>[t(e(Y),{checked:a.value.allowRestart,"onUpdate:checked":o[8]||(o[8]=s=>a.value.allowRestart=s)},{default:r(()=>[p("Show restart button at the end")]),_:1},8,["checked"])]),_:1}),t(e(E),{level:4},{default:r(()=>[p(" Alert Messages ")]),_:1}),t(e(_),{label:"Error message"},{default:r(()=>[t(e(k),{value:a.value.errorMessage,"onUpdate:value":o[9]||(o[9]=s=>a.value.errorMessage=s),type:"text",placeholder:"Something went wrong"},null,8,["value"])]),_:1})]),_:1}))}}),lt={style:{width:"50%"}},nt={style:{width:"50%"}},Zt=M({__name:"FormEditor",setup(i){const u=re(),a=Se(),n=R(null),o=R("source-code");function s(){u.push({name:"home"})}const{result:d,refetch:$}=oe(()=>Promise.all([le.get(),Le.get(a.params.id)]).then(([f,x])=>Pe({workspace:f,form:x}))),B=f=>{!d.value||(d.value.form.file=f)},m=Ce.create(),D=A(()=>pe.create(a.params.id));function h(f,x){ee("editor",u,f,x)}const y=R(null),F=()=>{var f;(f=y.value)==null||f.restartEditor()},O=()=>{var f;u.push({name:"formPreview",query:a.query,params:{id:(f=d.value)==null?void 0:f.form.id}})};return ae(()=>a.params.id,()=>{$()}),(f,x)=>(c(),g(Fe,null,{navbar:r(()=>[e(d)?(c(),g(e(je),{key:0,title:e(d).form.title,style:{padding:"5px 25px"},onBack:s},{extra:r(()=>[t(Te,{"docs-path":"forms/overview","show-v-s-code-button":"","show-save-button":!1,"editing-model":e(d).form},null,8,["editing-model"])]),_:1},8,["title"])):P("",!0)]),content:r(()=>[e(d)?(c(),g(e(T),{key:0,gap:"40",style:{width:"calc(100% - 80px)"}},{default:r(()=>[V("div",lt,[t(e(qe),{"active-key":o.value,"onUpdate:activeKey":x[0]||(x[0]=w=>o.value=w)},{rightExtra:r(()=>[t(Ue,{model:e(d).form},null,8,["model"])]),default:r(()=>[t(e(X),{key:"source-code",tab:"Source code"}),t(e(X),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"]),o.value==="source-code"?(c(),g(Ae,{key:0,ref_key:"code",ref:y,script:e(d).form,workspace:e(d).workspace,broker:D.value,onUpdateFile:B},null,8,["script","workspace","broker"])):P("",!0),o.value==="settings"?(c(),g(ot,{key:1,form:e(d).form},null,8,["form"])):P("",!0)]),V("div",nt,[t(e(T),{justify:"space-between"},{default:r(()=>[t(e(T),{align:"center",gap:"large",style:{margin:"10px 0 24px 0"}},{default:r(()=>{var w,U;return[t(e(E),{level:4,style:{margin:"0"}},{default:r(()=>[p("Form preview")]),_:1}),((U=(w=n.value)==null?void 0:w.runner)==null?void 0:U.formState)==="running"?(c(),g(e(Ne),{key:0,color:"green"},{default:r(()=>[p(" Running ")]),_:1})):P("",!0)]}),_:1}),t(e(T),{gap:"8",align:"center",style:{height:"fit-content","margin-top":"10px"}},{default:r(()=>[t(We,{path:e(d).form.path},null,8,["path"]),t(e(C),{target:"_blank",onClick:O},{icon:r(()=>[t(e(Qe))]),default:r(()=>[p(" Preview ")]),_:1})]),_:1})]),_:1}),t(rt,{ref_key:"tester",ref:n,form:e(d).form,"log-service":e(m),broker:D.value,disabled:e(d).form.hasChanges("code_content"),onRedirect:h,onExit:F},null,8,["form","log-service","broker","disabled"])])]),_:1})):P("",!0)]),footer:r(()=>{var w;return[t(Re,{runtime:"forms","log-service":e(m),onRestart:(w=n.value)==null?void 0:w.restart},null,8,["log-service","onRestart"])]}),_:1}))}});export{Zt as default};
//# sourceMappingURL=FormEditor.f4a4ea2b.js.map