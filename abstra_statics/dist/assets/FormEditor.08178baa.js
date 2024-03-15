import{u as Ee}from"./index.9e4a9794.js";import{f as a,eG as de,d as F,r as _,H as U,b as v,c as b,w as o,ar as f,eD as Oe,u as e,bG as R,cA as M,ev as I,bz as E,aD as q,eE as pe,eF as ce,e as $,v as me,bA as ee,eC as Re,cE as Ue,S as te,a as $e,ex as x,eA as Fe,eB as Pe,aw as De,J as ae,eL as Ie,bg as Le}from"./outputWidgets.bfafbcce.js";import{B as Me}from"./BaseLayout.d4943197.js";import{F as Ne,a as fe,b as Be,c as qe,d as Ve,r as oe}from"./FormRunner.dcb8f9dd.js";import{R as je,S as We,a as Qe,L as ze}from"./SourceCode.2a1ba640.js";import{a as He}from"./asyncComputed.e3664e51.js";import{F as Ge}from"./forms.b153b42c.js";import{W as re}from"./workspaces.42b0ae7b.js";import"./envVars.c243b1aa.js";import{l as ne,N as Je}from"./NavbarControls.854856ef.js";import{_ as Ye}from"./SaveButton.vue_vue_type_script_setup_true_lang.f3097259.js";import{S as Xe}from"./StageRunSelector.b199253d.js";import{A as Ze}from"./index.e1631a0f.js";import{A as D}from"./Title.dede4192.js";import{T as N}from"./Typography.a5f91748.js";import{A as T,F as V}from"./Form.07152d5a.js";import{A as le}from"./index.01ca1bc2.js";import{y as Ke,z as et,A as tt}from"./icons.ec0181ba.js";import{A as ve}from"./api.107a98b8.js";import{A as B}from"./index.4ca0ad71.js";import{M as at}from"./Modal.1cd57426.js";import{A as ot}from"./Link.81d3b598.js";import{A as P,T as ue}from"./TabPane.8e75ea2e.js";import"./Card.085a2fa4.js";import{c as rt}from"./index.dad283be.js";import{A as nt}from"./index.ef6b4543.js";import{E as lt}from"./ExpandOutlined.ea4cd56e.js";import"./pubsub.4c5702fb.js";import"./url.9fc5b682.js";import"./Passwordless.71ed26c5.js";import"./CircularLoading.a212776c.js";import"./PlayerNavbar.3d75bb87.js";import"./WidgetsFrame.fa85793a.js";import"./Steps.114a51c6.js";import"./uuid.d6c4e640.js";import"./jobs.94cbdf8c.js";import"./record.d891537d.js";import"./scripts.97f2659d.js";import"./validations.4cb9ab2a.js";import"./string.41604f94.js";import"./toggleHighContrast.a6194931.js";import"./runnerData.df5de691.js";import"./CloseCircleOutlined.4e0ec97f.js";import"./popupNotifcation.a7a97eb2.js";import"./Text.89636bb3.js";import"./Base.2d21206d.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.237f2b0d.js";import"./Paragraph.cec4f59f.js";import"./ant-design.bdf85ef6.js";import"./index.ac17f1fb.js";import"./index.83a062f8.js";import"./index.7f9b2185.js";import"./hasIn.ccde7955.js";import"./index.cf4c23b9.js";import"./ArrowRightOutlined.08fa31dd.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[r]="0a204a68-d36b-4815-8864-f743f1bae29e",s._sentryDebugIdIdentifier="sentry-dbid-0a204a68-d36b-4815-8864-f743f1bae29e")}catch{}})();var ut={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"}}]},name:"export",theme:"outlined"};const st=ut;var it={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"}}]},name:"link",theme:"outlined"};const dt=it;function se(s){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?Object(arguments[r]):{},d=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(d=d.concat(Object.getOwnPropertySymbols(t).filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),d.forEach(function(l){pt(s,l,t[l])})}return s}function pt(s,r,t){return r in s?Object.defineProperty(s,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[r]=t,s}var j=function(r,t){var d=se({},r,t.attrs);return a(de,se({},d,{icon:st}),null)};j.displayName="ExportOutlined";j.inheritAttrs=!1;const ct=j;function ie(s){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?Object(arguments[r]):{},d=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(d=d.concat(Object.getOwnPropertySymbols(t).filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),d.forEach(function(l){mt(s,l,t[l])})}return s}function mt(s,r,t){return r in s?Object.defineProperty(s,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[r]=t,s}var W=function(r,t){var d=ie({},r,t.attrs);return a(de,ie({},d,{icon:dt}),null)};W.displayName="LinkOutlined";W.inheritAttrs=!1;const ft=W,vt=F({__name:"LaunchButton",props:{path:{}},setup(s){const r=s,t=_({state:"loading"}),d=U(()=>t.value.state!=="found"),l=U(()=>t.value.state==="loading"),i=U(()=>t.value.state==="found"?t.value.url:void 0),y=U(()=>{switch(t.value.state){case"error":return"Error";case"loading":return"Loading";case"not-deployed":return"No deploy";case"not-logged":return"Not logged";case"not-found":return"Page not found";case"found":return"Launch";default:throw new Error(`Invalid state ${t.value}`)}}),w=U(()=>{switch(t.value.state){case"error":return"Something went wrong when trying to get your deployed URL.";case"loading":return"Getting deployed url info...";case"not-deployed":return"You have no deployed url yet.";case"not-logged":return"You are not logged.";case"not-found":return"This page is not on the deployed application.";case"found":return"Launch the deployed version of this application in another tab.";default:throw new Error(`Invalid state ${t.value}`)}});async function O(n){const u=`https://${n}.abstra.app/_version`;return(await fetch(u)).ok}async function g(n){const u=`https://${n}.abstra.app/_pages/${r.path}`;return(await fetch(u)).ok}async function h(){var L;const{result:n}=ne.asyncComputed;if(!((L=n.value)!=null&&L.logged)){t.value={state:"not-logged"};return}const u=await ne.getProjectInfo().catch(()=>null);if(!u){t.value={state:"error"};return}if(!await O(u.subdomain).catch(()=>null)){t.value={state:"not-deployed"};return}if(!await g(u.subdomain).catch(()=>null)){t.value={state:"not-found"};return}const c=`https://${u.subdomain}.abstra.app/${r.path}`;t.value={state:"found",url:c}}return h(),(n,u)=>(v(),b(e(M),{title:y.value},{content:o(()=>[f(Oe(w.value),1)]),default:o(()=>[a(e(R),{href:i.value,target:"_blank",disabled:d.value,loading:l.value,size:"small",type:"link"},{icon:o(()=>[a(e(ft))]),default:o(()=>[f(" Open Deployed ")]),_:1},8,["href","disabled","loading"])]),_:1},8,["title"]))}}),ge=s=>(pe("data-v-a8ca44f6"),s=s(),ce(),s),gt=ge(()=>$("i",null,"string",-1)),yt=ge(()=>$("i",null,"string list",-1)),bt=F({__name:"FormNotificationSettings",props:{form:{}},setup(s){const t=_(s.form);return(d,l)=>(v(),I(q,null,[a(e(V),{layout:"vertical"},{default:o(()=>[a(e(D),{level:4,width:"100%",height:"30px",style:{display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"0px"}},{default:o(()=>[f(" Thread waiting "),a(e(Ze),{checked:t.value.notificationTrigger.enabled,"onUpdate:checked":l[0]||(l[0]=i=>t.value.notificationTrigger.enabled=i)},{default:o(()=>[f(" Enabled ")]),_:1},8,["checked"])]),_:1}),a(e(N),{class:"description",style:{fontStyle:"italic",marginBottom:"20px"}},{default:o(()=>[f(" Send emails when the thread is waiting for the form to be filled ")]),_:1}),a(e(T),{label:"Variable name"},{default:o(()=>[a(e(E),{value:t.value.notificationTrigger.variable_name,"onUpdate:value":l[1]||(l[1]=i=>t.value.notificationTrigger.variable_name=i),disabled:!t.value.notificationTrigger.enabled,type:"text",placeholder:"variable_name"},null,8,["value","disabled"])]),_:1})]),_:1}),a(e(le),{type:"info"},{message:o(()=>[a(e(N),null,{default:o(()=>[f(" Notifications are sent to the emails specified in the thread variables set here. The variables should contain a "),gt,f(" or a "),yt,f(". ")]),_:1})]),_:1}),a(e(le),{style:{"margin-top":"20px"}},{message:o(()=>[a(e(N),null,{default:o(()=>[f(" Notifications are a paid feature. Talk to your account manager to enable them. ")]),_:1})]),_:1})],64))}});const ht=me(bt,[["__scopeId","data-v-a8ca44f6"]]),kt=F({__name:"FormSettings",props:{form:{}},setup(s){const t=_(s.form);return(d,l)=>(v(),b(e(V),{layout:"vertical",style:{"padding-bottom":"50px"}},{default:o(()=>[a(je,{runtime:t.value},null,8,["runtime"]),a(e(T),{label:"Form name"},{default:o(()=>[a(e(E),{value:t.value.title,"onUpdate:value":l[0]||(l[0]=i=>t.value.title=i),type:"text",onChange:l[1]||(l[1]=i=>{var y;return t.value.title=(y=i.target.value)!=null?y:""})},null,8,["value"])]),_:1}),a(e(D),{level:3},{default:o(()=>[f(" Texts ")]),_:1}),a(e(D),{level:4},{default:o(()=>[f(" Welcome Screen ")]),_:1}),a(e(T),{label:"Title"},{default:o(()=>[a(e(E),{value:t.value.welcomeTitle,"onUpdate:value":l[2]||(l[2]=i=>t.value.welcomeTitle=i),type:"text",placeholder:t.value.title,disabled:t.value.autoStart},null,8,["value","placeholder","disabled"])]),_:1}),a(e(T),{label:"Description"},{default:o(()=>[a(e(E),{value:t.value.startMessage,"onUpdate:value":l[3]||(l[3]=i=>t.value.startMessage=i),type:"text",disabled:t.value.autoStart},null,8,["value","disabled"])]),_:1}),a(e(T),{label:"Start button label"},{default:o(()=>[a(e(E),{value:t.value.startButtonText,"onUpdate:value":l[4]||(l[4]=i=>t.value.startButtonText=i),type:"text",placeholder:"Start",disabled:t.value.autoStart},null,8,["value","disabled"])]),_:1}),a(e(T),null,{default:o(()=>[a(e(ee),{checked:t.value.autoStart,"onUpdate:checked":l[5]||(l[5]=i=>t.value.autoStart=i)},{default:o(()=>[f("Skip welcome screen")]),_:1},8,["checked"])]),_:1}),a(e(D),{level:4},{default:o(()=>[f(" End Screen ")]),_:1}),a(e(T),{label:"End text"},{default:o(()=>[a(e(E),{value:t.value.endMessage,"onUpdate:value":l[6]||(l[6]=i=>t.value.endMessage=i),type:"text",placeholder:"Thank you"},null,8,["value"])]),_:1}),a(e(T),{label:"Restart button label"},{default:o(()=>[a(e(E),{value:t.value.restartButtonText,"onUpdate:value":l[7]||(l[7]=i=>t.value.restartButtonText=i),placeholder:"Restart",type:"text",disabled:!t.value.allowRestart},null,8,["value","disabled"])]),_:1}),a(e(T),{help:!t.value.isInitial&&"Only initial forms can be restarted"},{default:o(()=>[a(e(ee),{checked:t.value.allowRestart,"onUpdate:checked":l[8]||(l[8]=i=>t.value.allowRestart=i),disabled:!t.value.isInitial},{default:o(()=>[f("Show restart button at the end")]),_:1},8,["checked","disabled"])]),_:1},8,["help"]),a(e(D),{level:4},{default:o(()=>[f(" Alert Messages ")]),_:1}),a(e(T),{label:"Error message"},{default:o(()=>[a(e(E),{value:t.value.errorMessage,"onUpdate:value":l[9]||(l[9]=i=>t.value.errorMessage=i),type:"text",placeholder:"Something went wrong"},null,8,["value"])]),_:1})]),_:1}))}}),_t=F({__name:"QueryParamsModal",props:{open:{type:Boolean},close:{type:Function},queryParams:{}},emits:["update:query-params"],setup(s,{emit:r}){const d=_(l(s.queryParams));function l(g){return Object.entries(g).map(([h,n])=>({key:h,value:n,id:Math.random().toString()}))}function i(){const g={};return d.value.forEach(({key:h,value:n})=>{g[h]=n}),g}const y=(g,h,n)=>{d.value[g]={key:h,value:n},r("update:query-params",i())},w=()=>{const g=d.value.length;d.value.push({key:`param-${g}`,value:"value"}),r("update:query-params",i())},O=g=>{d.value.splice(g,1),r("update:query-params",i())};return(g,h)=>(v(),b(e(at),{open:g.open,onCancel:g.close},{footer:o(()=>[a(e(R),{type:"primary",onClick:g.close},{default:o(()=>[f("OK")]),_:1},8,["onClick"])]),default:o(()=>[a(e(B),{vertical:"",gap:"20"},{default:o(()=>[a(e(N),null,{default:o(()=>[f("Query params")]),_:1}),(v(!0),I(q,null,Re(d.value,(n,u)=>(v(),b(e(T),{key:u},{default:o(()=>[a(e(Ue),null,{default:o(()=>[a(e(E),{value:n.key,"onUpdate:value":A=>n.key=A,type:"text",placeholder:"name",onChange:()=>y(u,n.key,n.value)},null,8,["value","onUpdate:value","onChange"]),a(e(E),{value:n.value,"onUpdate:value":A=>n.value=A,type:"text",placeholder:"value",disabled:n.key===e(ve),onChange:()=>y(u,n.key,n.value)},null,8,["value","onUpdate:value","disabled","onChange"]),a(e(R),{danger:"",onClick:A=>O(u)},{default:o(()=>[f("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128)),a(e(T),null,{default:o(()=>[a(e(R),{type:"dashed",style:{width:"100%"},onClick:w},{default:o(()=>[f(" Add Query Param ")]),_:1})]),_:1})]),_:1})]),_:1},8,["open","onCancel"]))}}),wt=s=>(pe("data-v-d2213ae3"),s=s(),ce(),s),St={key:0},At={key:1},Tt=wt(()=>$("br",null,null,-1)),Ct={class:"form-preview-container"},xt=F({__name:"FormTester",props:{formRunnerData:{},formState:{},userEmail:{},disabled:{type:Boolean},queryParams:{},stageRunId:{}},emits:["start","reset","navigate","logout","auto-fill-clicked","action-clicked","update-widget-errors","update-widget-value","update:query-params"],setup(s,{emit:r}){var h;const t=s,d=_(!1),l=()=>{d.value=!0},i=()=>{d.value=!1},y=U(()=>{const n=g.value.query?`?${g.value.query}`:"";return`/${t.formRunnerData.path}${n}`}),w=_((h=te.get("dontShowReloadHelper"))!=null?h:!1),O=()=>{te.set("dontShowReloadHelper",!0),w.value=!0},g=U(()=>{const n=new URLSearchParams(t.queryParams).toString();return{subdomain:"[your-subdomain]",path:t.formRunnerData.path,query:n}});return(n,u)=>{const A=$e("icon");return v(),I(q,null,[a(e(V),{layout:"vertical"},{default:o(()=>[a(e(B),{gap:"small"},{default:o(()=>[n.formState.type&&e(Ne).includes(n.formState.type)?(v(),b(e(M),{key:0,placement:"bottom",visible:w.value?void 0:!0},{content:o(()=>[w.value?(v(),I("span",St,"Reload form")):(v(),I("span",At,[f(" You can reload the form here"),Tt,a(e(ot),{onClick:O},{default:o(()=>[f("Don't show this again")]),_:1})]))]),default:o(()=>[a(e(R),{disabled:n.disabled,onClick:u[0]||(u[0]=k=>r("reset"))},{default:o(()=>[a(A,{path:e(Ke),width:"20"},null,8,["path"])]),_:1},8,["disabled"])]),_:1},8,["visible"])):x("",!0),e(fe).includes(n.formState.type)?(v(),b(e(M),{key:1,placement:"bottom"},{content:o(()=>[f("Stop form")]),default:o(()=>[a(e(R),{onClick:u[1]||(u[1]=k=>r("reset"))},{default:o(()=>[a(A,{path:e(et),width:"20"},null,8,["path"])]),_:1})]),_:1})):x("",!0),n.formState.type==="waiting"?(v(),b(e(M),{key:2,placement:"bottom"},{content:o(()=>[f("Start form")]),default:o(()=>[a(e(R),{disabled:n.disabled,onClick:u[2]||(u[2]=k=>r("start"))},{default:o(()=>[a(A,{path:e(tt),width:"20"},null,8,["path"])]),_:1},8,["disabled"])]),_:1})):x("",!0),a(e(E),{value:y.value,class:"url-preview",onClick:l},null,8,["value"])]),_:1}),$("div",Ct,[a(Be,{"is-preview":"","form-runner-data":n.formRunnerData,disabled:n.disabled,"form-state":n.formState,"user-email":n.userEmail,onUpdateWidgetErrors:u[3]||(u[3]=(k,c)=>r("update-widget-errors",k,c)),onUpdateWidgetValue:u[4]||(u[4]=(k,c)=>r("update-widget-value",k,c)),onActionClicked:u[5]||(u[5]=k=>r("action-clicked",k)),onNavigate:u[6]||(u[6]=k=>r("navigate",k)),onLogout:u[7]||(u[7]=k=>r("logout")),onAutofillClicked:u[8]||(u[8]=k=>r("auto-fill-clicked"))},null,8,["form-runner-data","disabled","form-state","user-email"])])]),_:1}),a(_t,{"query-params":n.queryParams,open:d.value,close:i,"onUpdate:queryParams":u[9]||(u[9]=k=>r("update:query-params",k))},null,8,["query-params","open"])],64)}}});const Et=me(xt,[["__scopeId","data-v-d2213ae3"]]),Ot={style:{width:"50%"}},Rt={style:{width:"50%"}},$a=F({__name:"FormEditor",setup(s){const r=Fe(),t=Pe(),d=_(null),l=_("source-code"),i=_("preview"),y=_(null),w=_(null),O=_(null),g=_(null),h=_({}),n=_(null),u=_(!1),A=(p,m)=>{var C;(C=d.value)==null||C.setHighlight(p,m)},k=()=>{var p,m;(p=d.value)==null||p.restartEditor(),(m=d.value)==null||m.startPreviewMode()};De(()=>n.value?h.value={...h.value,[ve]:n.value}:null);const{result:c,loading:L,refetch:ye}=He(async()=>{const[p,m,C]=await Promise.all([Ge.get(t.params.id),re.get(),re.readTestData()]);return p.updateInitialState("test_data",C),Ie({form:p,workspace:m})});ae([h,u,c],()=>{Q()});function Q(){if(!c.value)return;const p=c.value.form.isInitial&&!u.value||!c.value.form.isInitial&&!n.value;O.value=c.value.form.makeRunnerData(c.value.workspace),y.value=new qe({formRunnerData:O.value,queryParams:h.value,userManager:Ee,logService:H,connectionManager:new Ve(c.value.form.id,p),onFormStart:k,onFormEnd:be,onRedirect:Ae,onAuthUpdate:C=>g.value=C,onStateUpdate:C=>w.value=C,onStackTraceUpdate:A});const m=y.value.getState();w.value=m.formState,g.value=m.passwordlessUser}const be=()=>{var p;n.value=null,(p=d.value)==null||p.restartEditor()};function he(){var p;(p=y.value)==null||p.start()}function ke(){var p,m;(p=d.value)==null||p.restartEditor(),(m=y.value)==null||m.reset()}const _e=p=>{oe("editor",r,p.path)};function we(){r.push({name:"stages"})}const z=_(null),Se=p=>{!c.value||(c.value.form.file=p)},H=ze.create();function Ae(p,m){oe("editor",r,p,m)}const Te=()=>{var p;r.push({name:"formPreview",query:t.query,params:{id:(p=c.value)==null?void 0:p.form.id}})},Ce=()=>{var m;let p=`/${(m=c.value)==null?void 0:m.form.path}`;n.value&&(p+=`?abstra-run-id=${n.value}`),window.open(p,"_blank")};return ae(()=>t.params.id,()=>{ye()}),(p,m)=>(v(),b(Me,{"no-margins":""},{navbar:o(()=>[e(c)?(v(),b(e(rt),{key:0,title:e(c).form.title,style:{padding:"5px 25px","margin-bottom":"15px"},onBack:we},{extra:o(()=>[a(Je,{"docs-path":"forms/overview","show-v-s-code-button":"","show-save-button":!1,"editing-model":e(c).form},null,8,["editing-model"])]),_:1},8,["title"])):x("",!0)]),content:o(()=>[e(c)?(v(),b(e(B),{key:0,gap:"40",style:{width:"calc(100% - 80px)"}},{default:o(()=>{var C,G,J,Y,X,Z;return[$("div",Ot,[a(e(ue),{"active-key":l.value,"onUpdate:activeKey":m[0]||(m[0]=S=>l.value=S)},{rightExtra:o(()=>[a(Ye,{model:e(c).form,onSave:Q},null,8,["model"])]),default:o(()=>[a(e(P),{key:"source-code",tab:"Source code"}),a(e(P),{key:"settings",tab:"Settings"}),a(e(P),{key:"notifications",tab:"Notifications"}),a(e(P),{key:"test-data",tab:"Thread data"})]),_:1},8,["active-key"]),l.value==="source-code"?(v(),b(We,{key:0,ref_key:"code",ref:d,script:e(c).form,workspace:e(c).workspace,onUpdateFile:Se},null,8,["script","workspace"])):x("",!0),l.value==="settings"?(v(),b(kt,{key:1,form:e(c).form},null,8,["form"])):x("",!0),l.value==="notifications"?(v(),b(ht,{key:2,form:e(c).form},null,8,["form"])):x("",!0),l.value==="test-data"?(v(),b(Xe,{key:3,"enable-start-thread":u.value,"onUpdate:enableStartThread":m[1]||(m[1]=S=>u.value=S),"stage-run-id":n.value,"onUpdate:stageRunId":m[2]||(m[2]=S=>n.value=S),stage:e(c).form,onFixInvalidJson:m[3]||(m[3]=(S,xe)=>{var K;return(K=z.value)==null?void 0:K.fixJson(S,xe)})},null,8,["enable-start-thread","stage-run-id","stage"])):x("",!0)]),$("div",Rt,[a(e(ue),{"active-key":i.value,"onUpdate:activeKey":m[4]||(m[4]=S=>i.value=S)},{rightExtra:o(()=>[a(e(B),{gap:"8",align:"center"},{default:o(()=>{var S;return[w.value&&e(fe).includes((S=w.value)==null?void 0:S.type)?(v(),b(e(nt),{key:0,color:"green",style:{"margin-right":"20px"}},{default:o(()=>[f(" Running ")]),_:1})):x("",!0),a(vt,{path:e(c).form.path},null,8,["path"]),n.value||e(c).form.isInitial&&u.value?(v(),b(e(R),{key:1,target:"_blank",onClick:Ce},{icon:o(()=>[a(e(ct))]),default:o(()=>[f(" Open ")]),_:1})):(v(),b(e(R),{key:2,target:"_blank",onClick:Te},{icon:o(()=>[a(e(lt))]),default:o(()=>[f(" Preview ")]),_:1}))]}),_:1})]),default:o(()=>[a(e(P),{key:"preview",tab:"Preview"})]),_:1},8,["active-key"]),e(L)||!O.value||!w.value?(v(),b(e(Le),{key:0})):i.value==="preview"?(v(),b(Et,{key:1,"query-params":h.value,"onUpdate:queryParams":m[5]||(m[5]=S=>h.value=S),"form-state":w.value,"form-runner-data":O.value,"user-email":(C=g.value)==null?void 0:C.claims.email,disabled:e(c).form.hasChanges(),"stage-run-id":n.value,onStart:he,onReset:ke,onLogout:(G=y.value)==null?void 0:G.logout,onActionClicked:(J=y.value)==null?void 0:J.handleActionClick,onNavigate:_e,onUpdateWidgetErrors:(Y=y.value)==null?void 0:Y.updateWidgetFrontendErrors,onUpdateWidgetValue:(X=y.value)==null?void 0:X.updateWidgetValue,onAutoFillClicked:(Z=y.value)==null?void 0:Z.handleAutofillClick},null,8,["query-params","form-state","form-runner-data","user-email","disabled","stage-run-id","onLogout","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue","onAutoFillClicked"])):x("",!0)])]}),_:1})):x("",!0)]),footer:o(()=>[a(Qe,{ref_key:"smartConsole",ref:z,runtime:"forms","log-service":e(H)},null,8,["log-service"])]),_:1}))}});export{$a as default};
//# sourceMappingURL=FormEditor.08178baa.js.map