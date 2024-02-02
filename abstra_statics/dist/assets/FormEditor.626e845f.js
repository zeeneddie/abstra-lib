import{B as ye}from"./BaseLayout.49c9a2bb.js";import{F as he,r as re,R as be}from"./FormRunner.cf29d10e.js";import{R as _e,S as ke,a as we,L as Se}from"./SourceCode.6a882243.js";import{f as t,eG as xe,d as I,r as P,H as T,b as p,c as v,w as o,ar as d,eD as Pe,u as e,bV as R,cB as j,bO as k,bP as Z,ev as F,eC as Ae,cF as Te,a$ as G,G as Re,S as ee,J as ne,eA as le,a as Ce,ex as w,bv as $e,eE as se,eF as ue,e as E,v as ie,eB as Fe,eK as Be}from"./outputWidgets.f2dbcdfc.js";import{a as de}from"./asyncComputed.37132230.js";import{F as Le}from"./forms.77eccfe6.js";import{W as ce}from"./workspaces.1bcacb1f.js";import{l as te,N as Ie}from"./NavbarControls.964525b4.js";import{_ as Ue}from"./SaveButton.vue_vue_type_script_setup_true_lang.3acddd29.js";import{A as b}from"./FormItem.cd189ec8.js";import{A as B}from"./Title.5cdc55b4.js";import{F as W}from"./Form.45d9e489.js";import{r as De,d as Oe,p as Ee}from"./icons.ac84ddf6.js";import{a as V}from"./Base.e7a1d92f.js";import{A as L}from"./index.1b352efb.js";import{M as Ne}from"./Modal.cc063c68.js";import{A as Me}from"./Link.7ebe42d5.js";import{A as Y}from"./index.75e649e2.js";import{A as qe}from"./index.1b874aab.js";import{A as ae,T as Qe}from"./TabPane.37e9c944.js";import"./Card.e4c20161.js";import{c as je}from"./index.ad281f8e.js";import{A as Ve}from"./index.c073fe31.js";import{E as ze}from"./ExpandOutlined.7ec7e1fd.js";import"./api.7f5dabf4.js";import"./runnerData.15c3b047.js";import"./url.978d277d.js";import"./Passwordless.f68808ed.js";import"./index.a57e7d56.js";import"./pubsub.d8506141.js";import"./CircularLoading.ca677d59.js";import"./PlayerNavbar.f3b51f00.js";import"./ActionButton.3509783f.js";import"./WidgetsFrame.04da177a.js";import"./index.0b37c2a5.js";import"./Paragraph.a4acc8de.js";import"./Text.e98aa09c.js";import"./uuid.e36bbdcf.js";import"./jobs.80b8b8be.js";import"./record.50d91012.js";import"./scripts.85830127.js";import"./validations.694bbc79.js";import"./string.72fe50ca.js";import"./toggleHighContrast.3722a813.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.07f8bbed.js";import"./popupNotifcation.87555d12.js";import"./ant-design.7bf5dcea.js";import"./index.ab2d11b8.js";import"./hasIn.84ebe126.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[i]="1282ee15-0195-4617-82d2-a4416c502e5b",u._sentryDebugIdIdentifier="sentry-dbid-1282ee15-0195-4617-82d2-a4416c502e5b")}catch{}})();var He={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"}}]},name:"link",theme:"outlined"};const Ye=He;function oe(u){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?Object(arguments[i]):{},s=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(s=s.concat(Object.getOwnPropertySymbols(a).filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable}))),s.forEach(function(r){Ge(u,r,a[r])})}return u}function Ge(u,i,a){return i in u?Object.defineProperty(u,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):u[i]=a,u}var J=function(i,a){var s=oe({},i,a.attrs);return t(xe,oe({},s,{icon:Ye}),null)};J.displayName="LinkOutlined";J.inheritAttrs=!1;const We=J,Je=I({__name:"LaunchButton",props:{path:{}},setup(u){const i=u,a=P({state:"loading"}),s=T(()=>a.value.state!=="found"),r=T(()=>a.value.state==="loading"),n=T(()=>a.value.state==="found"?a.value.url:void 0),c=T(()=>{switch(a.value.state){case"error":return"Error";case"loading":return"Loading";case"not-deployed":return"No deploy";case"not-logged":return"Not logged";case"not-found":return"Page not found";case"found":return"Launch";default:throw new Error(`Invalid state ${a.value}`)}}),U=T(()=>{switch(a.value.state){case"error":return"Something went wrong when trying to get your deployed URL.";case"loading":return"Getting deployed url info...";case"not-deployed":return"You have no deployed url yet.";case"not-logged":return"You are not logged.";case"not-found":return"This page is not on the deployed application.";case"found":return"Launch the deployed version of this application in another tab.";default:throw new Error(`Invalid state ${a.value}`)}});async function D(_){const y=`https://${_}.abstra.app/_version`;return(await fetch(y)).ok}async function m(_){const y=`https://${_}.abstra.app/_pages/${i.path}`;return(await fetch(y)).ok}async function O(){if(!(await te.get()).logged){a.value={state:"not-logged"};return}const y=await te.getProjectInfo().catch(()=>null);if(!y){a.value={state:"error"};return}if(!await D(y.subdomain).catch(()=>null)){a.value={state:"not-deployed"};return}if(!await m(y.subdomain).catch(()=>null)){a.value={state:"not-found"};return}const f=`https://${y.subdomain}.abstra.app/${i.path}`;a.value={state:"found",url:f}}return O(),(_,y)=>(p(),v(e(j),{title:c.value},{content:o(()=>[d(Pe(U.value),1)]),default:o(()=>[t(e(R),{href:n.value,target:"_blank",disabled:s.value,loading:r.value,size:"small",type:"link"},{icon:o(()=>[t(e(We))]),default:o(()=>[d(" Open Deployed ")]),_:1},8,["href","disabled","loading"])]),_:1},8,["title"]))}}),Ke=I({__name:"FormSettings",props:{form:{}},setup(u){const a=P(u.form);return(s,r)=>(p(),v(e(W),{layout:"vertical"},{default:o(()=>[t(_e,{runtime:a.value},null,8,["runtime"]),t(e(b),{label:"Form name"},{default:o(()=>[t(e(k),{value:a.value.title,"onUpdate:value":r[0]||(r[0]=n=>a.value.title=n),type:"text",onChange:r[1]||(r[1]=n=>{var c;return a.value.title=(c=n.target.value)!=null?c:""})},null,8,["value"])]),_:1}),t(e(B),{level:3},{default:o(()=>[d(" Texts ")]),_:1}),t(e(B),{level:4},{default:o(()=>[d(" Welcome Screen ")]),_:1}),t(e(b),{label:"Title"},{default:o(()=>[t(e(k),{value:a.value.welcomeTitle,"onUpdate:value":r[2]||(r[2]=n=>a.value.welcomeTitle=n),type:"text",placeholder:a.value.title,disabled:a.value.autoStart},null,8,["value","placeholder","disabled"])]),_:1}),t(e(b),{label:"Description"},{default:o(()=>[t(e(k),{value:a.value.startMessage,"onUpdate:value":r[3]||(r[3]=n=>a.value.startMessage=n),type:"text",disabled:a.value.autoStart},null,8,["value","disabled"])]),_:1}),t(e(b),{label:"Start button label"},{default:o(()=>[t(e(k),{value:a.value.startButtonText,"onUpdate:value":r[4]||(r[4]=n=>a.value.startButtonText=n),type:"text",placeholder:"Start",disabled:a.value.autoStart},null,8,["value","disabled"])]),_:1}),t(e(b),null,{default:o(()=>[t(e(Z),{checked:a.value.autoStart,"onUpdate:checked":r[5]||(r[5]=n=>a.value.autoStart=n)},{default:o(()=>[d("Skip welcome screen")]),_:1},8,["checked"])]),_:1}),t(e(B),{level:4},{default:o(()=>[d(" End Screen ")]),_:1}),t(e(b),{label:"End text"},{default:o(()=>[t(e(k),{value:a.value.endMessage,"onUpdate:value":r[6]||(r[6]=n=>a.value.endMessage=n),type:"text",placeholder:"Thank you"},null,8,["value"])]),_:1}),t(e(b),{label:"Restart button label"},{default:o(()=>[t(e(k),{value:a.value.restartButtonText,"onUpdate:value":r[7]||(r[7]=n=>a.value.restartButtonText=n),placeholder:"Restart",type:"text",disabled:!a.value.allowRestart},null,8,["value","disabled"])]),_:1}),t(e(b),null,{default:o(()=>[t(e(Z),{checked:a.value.allowRestart,"onUpdate:checked":r[8]||(r[8]=n=>a.value.allowRestart=n)},{default:o(()=>[d("Show restart button at the end")]),_:1},8,["checked"])]),_:1}),t(e(B),{level:4},{default:o(()=>[d(" Alert Messages ")]),_:1}),t(e(b),{label:"Error message"},{default:o(()=>[t(e(k),{value:a.value.errorMessage,"onUpdate:value":r[9]||(r[9]=n=>a.value.errorMessage=n),type:"text",placeholder:"Something went wrong"},null,8,["value"])]),_:1})]),_:1}))}}),Xe="abstra-run-id",Ze=I({__name:"QueryParamsModal",props:{open:{type:Boolean},close:{type:Function},state:{},addQueryParam:{type:Function},removeQueryParam:{type:Function}},setup(u){return(i,a)=>(p(),v(e(Ne),{open:i.open,onCancel:i.close},{footer:o(()=>[t(e(R),{type:"primary",onClick:i.close},{default:o(()=>[d("OK")]),_:1},8,["onClick"])]),default:o(()=>[t(e(L),{vertical:"",gap:"20"},{default:o(()=>[t(e(V),null,{default:o(()=>[d("Query params")]),_:1}),(p(!0),F(G,null,Ae(i.state.queryParams,(s,r)=>(p(),v(e(b),{key:r},{default:o(()=>[t(e(Te),null,{default:o(()=>[t(e(k),{value:s.name,"onUpdate:value":n=>s.name=n,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),t(e(k),{value:s.value,"onUpdate:value":n=>s.value=n,type:"text",placeholder:"value",disabled:s.name===Xe},null,8,["value","onUpdate:value","disabled"]),t(e(R),{danger:"",onClick:n=>i.removeQueryParam(r)},{default:o(()=>[d("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128)),t(e(b),null,{default:o(()=>[t(e(R),{type:"dashed",style:{width:"100%"},onClick:i.addQueryParam},{default:o(()=>[d(" Add Query Param ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["open","onCancel"]))}}),et=u=>(se("data-v-3582c0df"),u=u(),ue(),u),tt={key:0},at={key:1},ot=et(()=>E("br",null,null,-1)),rt={key:2,class:"form-preview-container"},H="abstra-run-id",nt=I({__name:"FormTester",props:{form:{},logService:{},broker:{},disabled:{type:Boolean}},emits:["redirect","exit"],setup(u,{expose:i,emit:a}){var K;const s=u,r=()=>{a("exit")},n=P(!1),c=()=>{n.value=!0},U=()=>{n.value=!1},D=T(()=>`/${s.form.path}?${ge.value.query}`),m=Re({queryParams:[{name:"foo",value:"bar"}],url:`${s.form.path}`,stageRunId:null}),O=l=>{m.stageRunId=l},_=P((K=ee.get("dontShowRestartHelper"))!=null?K:!1),y=()=>{ee.set("dontShowRestartHelper",!0),_.value=!0},{result:C,loading:N}=de(()=>ce.get()),f=()=>{m.queryParams.push({name:"",value:""})},A=l=>{m.queryParams=m.queryParams.filter(($,g)=>g!==l)};ne([()=>m.stageRunId,()=>m.queryParams],([l,$])=>{const g=$.find(h=>h.name===H);if(l&&!g){m.queryParams.push({name:H,value:l});return}if(!l&&g){m.queryParams=m.queryParams.filter(h=>h.name!==H);return}l&&g&&l!==g.value&&(g.value=l)}),s.broker.on("stdout",l=>{s.logService.log({type:"stdout",log:l.log})}),s.broker.on("stderr",l=>{s.logService.log({type:"stderr",log:l.log})}),s.broker.onClose(()=>{s.logService.log({type:"stderr",log:"Program closed"})}),s.broker.on("files:changed",()=>{s.logService.log({type:"files-changed",log:"Files changed"})});const S=le(),M=({path:l})=>{re("editor",S,l)};function me(l,$){a("redirect",l,$)}const x=P(null);async function z(){var l;return s.logService.log({type:"restart"}),(l=x.value)==null?void 0:l.run()}async function fe(){var l;return(l=x.value)==null?void 0:l.run()}async function ve(){var l;return s.logService.log({type:"restart"}),(l=x.value)==null?void 0:l.exit()}const ge=T(()=>{const l=new URLSearchParams(m.queryParams.filter(g=>g.name.trim()).reduce((g,h)=>({...g,[h.name]:h.value}),{})).toString();return{subdomain:"[your-subdomain]",path:s.form.path,query:l}});return i({restart:z,runner:x}),(l,$)=>{const g=Ce("icon");return p(),F(G,null,[t(e(W),{layout:"vertical"},{default:o(()=>[w("",!0),t(e(L),{gap:"small"},{default:o(()=>{var h,q,Q,X;return[((h=x.value)==null?void 0:h.formState)==="over"||((q=x.value)==null?void 0:q.formState)==="error"?(p(),v(e(j),{key:0,placement:"bottom",visible:_.value?void 0:!0},{content:o(()=>[_.value?(p(),F("span",tt,"Restart form")):(p(),F("span",at,[d(" You can restart the form here"),ot,t(e(Me),{onClick:y},{default:o(()=>[d("Don't show this again")]),_:1})]))]),default:o(()=>[t(e(R),{disabled:l.disabled,onClick:z},{default:o(()=>[t(g,{path:e(De),width:"20"},null,8,["path"])]),_:1},8,["disabled"])]),_:1},8,["visible"])):w("",!0),((Q=x.value)==null?void 0:Q.formState)==="running"?(p(),v(e(j),{key:1,placement:"bottom"},{content:o(()=>[d("Stop form")]),default:o(()=>[t(e(R),{onClick:ve},{default:o(()=>[t(g,{path:e(Oe),width:"20"},null,8,["path"])]),_:1})]),_:1})):w("",!0),((X=x.value)==null?void 0:X.formState)==="idle"?(p(),v(e(j),{key:2,placement:"bottom"},{content:o(()=>[d("Start form")]),default:o(()=>[t(e(R),{disabled:l.disabled,onClick:fe},{default:o(()=>[t(g,{path:e(Ee),width:"20"},null,8,["path"])]),_:1},8,["disabled"])]),_:1})):w("",!0),t(e(k),{value:D.value,onClick:c},null,8,["value"])]}),_:1}),e(N)||!e(C)?(p(),v(e($e),{key:1})):m.stageRunId||s.form.isInitial?(p(),F("div",rt,[t(he,{ref_key:"runner",ref:x,form:l.form.makeRunnerData(e(C)),params:{...m.queryParams.reduce((h,{name:q,value:Q})=>({...h,[q]:Q}),{})},"is-preview":"","enable-auto-focus":"",broker:l.broker,disabled:l.disabled,onNavigate:M,onRedirect:me,onLogout:z,onExit:r},null,8,["form","params","broker","disabled"])])):(p(),v(e(Y),{key:3,message:"You can't run this form directly from the editor as it's not the initial form. Use the threads view instead.",type:"warning","show-icon":"",style:{"margin-top":"40px"}}))]),_:1}),t(Ze,{open:n.value,close:U,state:m,"add-query-param":f,"remove-query-param":A},null,8,["open","state"])],64)}}});const lt=ie(nt,[["__scopeId","data-v-3582c0df"]]),pe=u=>(se("data-v-a8ca44f6"),u=u(),ue(),u),st=pe(()=>E("i",null,"string",-1)),ut=pe(()=>E("i",null,"string list",-1)),it=I({__name:"FormNotificationSettings",props:{form:{}},setup(u){const a=P(u.form);return(s,r)=>(p(),F(G,null,[t(e(W),{layout:"vertical"},{default:o(()=>[t(e(B),{level:4,width:"100%",height:"30px",style:{display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"0px"}},{default:o(()=>[d(" Thread waiting "),t(e(qe),{checked:a.value.notificationTrigger.enabled,"onUpdate:checked":r[0]||(r[0]=n=>a.value.notificationTrigger.enabled=n)},{default:o(()=>[d(" Enabled ")]),_:1},8,["checked"])]),_:1}),t(e(V),{class:"description",style:{fontStyle:"italic",marginBottom:"20px"}},{default:o(()=>[d(" Send emails when the thread is waiting for the form to be filled ")]),_:1}),t(e(b),{label:"Variable name"},{default:o(()=>[t(e(k),{value:a.value.notificationTrigger.variable_name,"onUpdate:value":r[1]||(r[1]=n=>a.value.notificationTrigger.variable_name=n),disabled:!a.value.notificationTrigger.enabled,type:"text",placeholder:"variable_name"},null,8,["value","disabled"])]),_:1})]),_:1}),t(e(Y),{type:"info"},{message:o(()=>[t(e(V),null,{default:o(()=>[d(" Notifications are sent to the emails specified in the thread variables set here. The variables should contain a "),st,d(" or a "),ut,d(". ")]),_:1})]),_:1}),t(e(Y),{style:{"margin-top":"20px"}},{message:o(()=>[t(e(V),null,{default:o(()=>[d(" Notifications are a paid feature. Talk to your account manager to enable them. ")]),_:1})]),_:1})],64))}});const dt=ie(it,[["__scopeId","data-v-a8ca44f6"]]),ct={style:{width:"50%"}},pt={style:{width:"50%"}},ua=I({__name:"FormEditor",setup(u){const i=le(),a=Fe(),s=P(null),r=P("source-code");function n(){i.push({name:"home"})}const{result:c,refetch:U}=de(()=>Promise.all([ce.get(),Le.get(a.params.id)]).then(([f,A])=>Be({workspace:f,form:A}))),D=f=>{!c.value||(c.value.form.file=f)},m=Se.create(),O=T(()=>be.create(a.params.id));function _(f,A){re("editor",i,f,A)}const y=P(null),C=()=>{var f;(f=y.value)==null||f.restartEditor()},N=()=>{var f;i.push({name:"formPreview",query:a.query,params:{id:(f=c.value)==null?void 0:f.form.id}})};return ne(()=>a.params.id,()=>{U()}),(f,A)=>(p(),v(ye,null,{navbar:o(()=>[e(c)?(p(),v(e(je),{key:0,title:e(c).form.title,style:{padding:"5px 25px"},onBack:n},{extra:o(()=>[t(Ie,{"docs-path":"forms/overview","show-v-s-code-button":"","show-save-button":!1,"editing-model":e(c).form},null,8,["editing-model"])]),_:1},8,["title"])):w("",!0)]),content:o(()=>[e(c)?(p(),v(e(L),{key:0,gap:"40",style:{width:"calc(100% - 80px)"}},{default:o(()=>[E("div",ct,[t(e(Qe),{"active-key":r.value,"onUpdate:activeKey":A[0]||(A[0]=S=>r.value=S)},{rightExtra:o(()=>[t(Ue,{model:e(c).form},null,8,["model"])]),default:o(()=>[t(e(ae),{key:"source-code",tab:"Source code"}),t(e(ae),{key:"settings",tab:"Settings"}),w("",!0)]),_:1},8,["active-key"]),r.value==="source-code"?(p(),v(ke,{key:0,ref_key:"code",ref:y,script:e(c).form,workspace:e(c).workspace,broker:O.value,onUpdateFile:D},null,8,["script","workspace","broker"])):w("",!0),r.value==="settings"?(p(),v(Ke,{key:1,form:e(c).form},null,8,["form"])):w("",!0),r.value==="notifications"?(p(),v(dt,{key:2,form:e(c).form},null,8,["form"])):w("",!0)]),E("div",pt,[t(e(L),{justify:"space-between"},{default:o(()=>[t(e(L),{align:"center",gap:"large",style:{margin:"10px 0 24px 0"}},{default:o(()=>{var S,M;return[t(e(B),{level:4,style:{margin:"0"}},{default:o(()=>[d("Form preview")]),_:1}),((M=(S=s.value)==null?void 0:S.runner)==null?void 0:M.formState)==="running"?(p(),v(e(Ve),{key:0,color:"green"},{default:o(()=>[d(" Running ")]),_:1})):w("",!0)]}),_:1}),t(e(L),{gap:"8",align:"center",style:{height:"fit-content","margin-top":"10px"}},{default:o(()=>[t(Je,{path:e(c).form.path},null,8,["path"]),t(e(R),{target:"_blank",onClick:N},{icon:o(()=>[t(e(ze))]),default:o(()=>[d(" Preview ")]),_:1})]),_:1})]),_:1}),t(lt,{ref_key:"tester",ref:s,form:e(c).form,"log-service":e(m),broker:O.value,disabled:e(c).form.hasChanges("code_content"),onRedirect:_,onExit:C},null,8,["form","log-service","broker","disabled"])])]),_:1})):w("",!0)]),footer:o(()=>{var S;return[t(we,{runtime:"forms","log-service":e(m),onRestart:(S=s.value)==null?void 0:S.restart},null,8,["log-service","onRestart"])]}),_:1}))}});export{ua as default};
//# sourceMappingURL=FormEditor.626e845f.js.map