import{d as T,r as A,b as c,c as y,w as r,f as t,u as e,bN as _,aq as d,bO as H,eB as J,eA as N,bU as F,G as S,eD as D,cB as X,F as oe,H as Z,ew as P,eu as K,eC as le,cF as ne,a_ as se,bu as ue,e as ie,eG as de}from"./outputWidgets.8ed5c9f3.js";import{R as pe,_ as ce,S as me,L as fe}from"./Debugger.vue_vue_type_script_setup_true_lang.31825e5c.js";import{A as g,F as ee}from"./Base.7a191de8.js";import{A as B}from"./Title.c0f8cffb.js";import{a as te}from"./asyncComputed.8a952af2.js";import{F as ve}from"./forms.81664fdb.js";import{W as ae}from"./workspaces.a396c4cb.js";import{_ as ge}from"./SaveButton.vue_vue_type_script_setup_true_lang.b638519b.js";import{l as Y,_ as ye}from"./DocsButton.vue_vue_type_script_setup_true_lang.762f5409.js";import{B as he}from"./BaseLayout.58b764d6.js";import{R as _e,F as be,r as re}from"./FormRunner.0d76802c.js";import{A as O}from"./index.13af31b4.js";import{C as we,A as ke}from"./CollapsePanel.a63a8528.js";import{a as L}from"./Text.e6e81a88.js";import{A as Se}from"./index.a4211c54.js";import{A as xe}from"./index.45a9faae.js";import{A as z,T as Pe}from"./TabPane.bb242da2.js";import"./index.9e0a5f68.js";import{c as Ae}from"./index.71675cf2.js";import"./hooks.984bab03.js";import"./activeRecord.065f5706.js";import"./pubsub.d7e8bfae.js";import"./jobs.949acbac.js";import"./icons.fb67404e.js";import"./uuid.7934c52f.js";import"./transButton.67499561.js";import"./url.cb72f6fb.js";import"./ant-design.104e9a39.js";import"./index.5c2dac81.js";import"./CircularLoading.411937e0.js";import"./PlayerNavbar.163d7e89.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.6b5aee26.js";import"./WidgetsFrame.d99825d6.js";(function(){try{var v=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(v._sentryDebugIds=v._sentryDebugIds||{},v._sentryDebugIds[m]="dc7cad6b-e492-4765-9083-396c9494209d",v._sentryDebugIdIdentifier="sentry-dbid-dc7cad6b-e492-4765-9083-396c9494209d")}catch{}})();const Re=T({__name:"FormSettings",props:{form:{}},setup(v){const a=A(v.form);return(p,o)=>(c(),y(e(ee),{layout:"vertical"},{default:r(()=>[t(pe,{runtime:a.value},null,8,["runtime"]),t(e(g),{label:"Form name"},{default:r(()=>[t(e(_),{type:"text",onChange:o[0]||(o[0]=n=>{var l;return a.value.title=(l=n.target.value)!=null?l:""})})]),_:1}),t(e(B),{level:3},{default:r(()=>[d(" Texts ")]),_:1}),t(e(B),{level:4},{default:r(()=>[d(" Welcome Screen ")]),_:1}),t(e(g),{label:"Title"},{default:r(()=>[t(e(_),{value:a.value.welcomeTitle,"onUpdate:value":o[1]||(o[1]=n=>a.value.welcomeTitle=n),type:"text",placeholder:a.value.title,disabled:a.value.autoStart},null,8,["value","placeholder","disabled"])]),_:1}),t(e(g),{label:"Description"},{default:r(()=>[t(e(_),{value:a.value.startMessage,"onUpdate:value":o[2]||(o[2]=n=>a.value.startMessage=n),type:"text",disabled:a.value.autoStart},null,8,["value","disabled"])]),_:1}),t(e(g),{label:"Start button label"},{default:r(()=>[t(e(_),{value:a.value.startButtonText,"onUpdate:value":o[3]||(o[3]=n=>a.value.startButtonText=n),type:"text",placeholder:"Start",disabled:a.value.autoStart},null,8,["value","disabled"])]),_:1}),t(e(g),null,{default:r(()=>[t(e(H),{checked:a.value.autoStart,"onUpdate:checked":o[4]||(o[4]=n=>a.value.autoStart=n)},{default:r(()=>[d("Skip welcome screen")]),_:1},8,["checked"])]),_:1}),t(e(B),{level:4},{default:r(()=>[d(" End Screen ")]),_:1}),t(e(g),{label:"End text"},{default:r(()=>[t(e(_),{value:a.value.endMessage,"onUpdate:value":o[5]||(o[5]=n=>a.value.endMessage=n),type:"text",placeholder:"Thank you"},null,8,["value"])]),_:1}),t(e(g),{label:"Restart button label"},{default:r(()=>[t(e(_),{value:a.value.restartButtonText,"onUpdate:value":o[6]||(o[6]=n=>a.value.restartButtonText=n),placeholder:"Restart",type:"text",disabled:!a.value.allowRestart},null,8,["value","disabled"])]),_:1}),t(e(g),null,{default:r(()=>[t(e(H),{checked:a.value.allowRestart,"onUpdate:checked":o[7]||(o[7]=n=>a.value.allowRestart=n)},{default:r(()=>[d("Show restart button at the end")]),_:1},8,["checked"])]),_:1}),t(e(B),{level:4},{default:r(()=>[d(" Alert Messages ")]),_:1}),t(e(g),{label:"Error message"},{default:r(()=>[t(e(_),{value:a.value.errorMessage,"onUpdate:value":o[8]||(o[8]=n=>a.value.errorMessage=n),type:"text",placeholder:"Something went wrong"},null,8,["value"])]),_:1})]),_:1}))}}),Te=T({__name:"PreviewButton",props:{model:{}},setup(v){const m=v,a=J(),p=N(),o=()=>{const n=a.query;p.push({path:`/_editor/${m.model.routeName}/${encodeURIComponent(m.model.path)}/preview`,query:n})};return(n,l)=>(c(),y(e(F),{class:"preview-button",onClick:o},{default:r(()=>[d(" Preview ")]),_:1}))}}),Ue=T({__name:"LaunchButton",props:{path:{}},setup(v){const m=v,a=A({state:"loading"}),p=S(()=>a.value.state!=="found"),o=S(()=>a.value.state==="loading"),n=S(()=>a.value.state==="found"?a.value.url:void 0),l=S(()=>{switch(a.value.state){case"error":return"Error";case"loading":return"Loading";case"not-deployed":return"No deploy";case"not-logged":return"Not logged";case"not-found":return"Page not found";case"found":return"Launch";default:throw new Error(`Invalid state ${a.value}`)}}),U=S(()=>{switch(a.value.state){case"error":return"Something went wrong when trying to get your deployed URL.";case"loading":return"Getting deployed url info...";case"not-deployed":return"You have no deployed url yet.";case"not-logged":return"You are not logged.";case"not-found":return"This page is not on the deployed application.";case"found":return"Launch the deployed version of this application in another tab.";default:throw new Error(`Invalid state ${a.value}`)}});async function k(f){const i=`https://${f}.abstra.app/_version`;return(await fetch(i)).ok}async function R(f){const i=`https://${f}.abstra.app/_pages/${m.path}`;return(await fetch(i)).ok}async function b(){if(!(await Y.get()).logged){a.value={state:"not-logged"};return}const i=await Y.getProjectInfo().catch(()=>null);if(!i){a.value={state:"error"};return}if(!await k(i.subdomain).catch(()=>null)){a.value={state:"not-deployed"};return}if(!await R(i.subdomain).catch(()=>null)){a.value={state:"not-found"};return}const q=`https://${i.subdomain}.abstra.app/${m.path}`;a.value={state:"found",url:q}}return b(),(f,i)=>(c(),y(e(X),{title:l.value},{content:r(()=>[d(D(U.value),1)]),default:r(()=>[t(e(F),{href:n.value,target:"_blank",disabled:p.value,loading:o.value},{default:r(()=>[d("Launch last deploy")]),_:1},8,["href","disabled","loading"])]),_:1},8,["title"]))}}),$e=ie("p",{style:{width:"200px"}}," Add query params to simulate someone using your forms with specific data in the URL. ",-1),Be={key:2,style:{height:"600px",margin:"20px","border-radius":"10px",overflow:"hidden"}},C="abstra-run-id",Ce=T({__name:"FormTester",props:{form:{},logService:{}},emits:["redirect"],setup(v,{expose:m,emit:a}){var V,G,W,j;const p=v,o=A(void 0);function n(){o.value=o.value?void 0:"query-params"}const l=oe({queryParams:[],url:`${p.form.path}`,stageRunId:null}),U=s=>{l.stageRunId=s},{result:k,loading:R}=te(()=>ae.get()),b=()=>{l.queryParams.push({name:"",value:""})},f=s=>{l.queryParams=l.queryParams.filter((w,u)=>u!==s)};Z([()=>l.stageRunId,()=>l.queryParams],([s,w])=>{const u=w.find(h=>h.name===C);if(console.log(s,u),s&&!u){l.queryParams.push({name:C,value:s});return}if(!s&&u){l.queryParams=l.queryParams.filter(h=>h.name!==C);return}s&&u&&s!==u.value&&(u.value=s)});const i=S(()=>_e.create({formPath:p.form.path}));(V=i.value)==null||V.on("stdout",s=>{p.logService.log({type:"stdout",log:s.log})}),(G=i.value)==null||G.on("stderr",s=>{p.logService.log({type:"stderr",log:s.log})}),(W=i.value)==null||W.onClose(()=>{p.logService.log({type:"stderr",log:"Program closed"})}),(j=i.value)==null||j.on("files:changed",()=>{p.logService.log({type:"files-changed",log:"Files changed"})});const $=N(),M=({path:s})=>{re("editor",$,s)};function q(s,w){a("redirect",s,w)}const E=A(null);async function Q(){var s;return p.logService.log({type:"restart"}),(s=E.value)==null?void 0:s.run()}const I=S(()=>{const s=new URLSearchParams(l.queryParams.filter(u=>u.name.trim()).reduce((u,h)=>({...u,[h.name]:h.value}),{})).toString();return{subdomain:"[your-subdomain]",path:p.form.path,query:s}});return m({restart:Q}),(s,w)=>(c(),y(e(ee),{layout:"vertical"},{default:r(()=>[P("",!0),t(e(g),{label:"Testing URL"},{default:r(()=>[t(e(O),{gap:0,style:{overflow:"hidden"}},{default:r(()=>[d(" https:// "),t(e(L),{style:{"margin-right":"0"}},{default:r(()=>[d(D(I.value.subdomain),1)]),_:1}),d(" .abstra.app/ "),t(e(L),{style:{"margin-right":"0","max-width":"100px",overflow:"hidden","text-overflow":"ellipsis"}},{default:r(()=>[d(D(I.value.path),1)]),_:1}),t(e(O),null,{default:r(()=>[d(" ? "),t(e(X),{title:"Query params"},{content:r(()=>[$e]),default:r(()=>[t(e(L),{style:{"max-width":"200px",overflow:"hidden","text-overflow":"ellipsis",cursor:"pointer"},onClick:n},{default:r(()=>[d(D(I.value.query||"[ ... ]"),1)]),_:1})]),_:1})]),_:1})]),_:1}),t(e(g),null,{default:r(()=>[t(e(we),{"active-key":o.value,"onUpdate:activeKey":w[1]||(w[1]=u=>o.value=u),ghost:""},{default:r(()=>[t(e(ke),{key:"query-params",header:`Query Params (${l.queryParams.length})`},{default:r(()=>[(c(!0),K(se,null,le(l.queryParams,(u,h)=>(c(),y(e(g),{key:h},{default:r(()=>[t(e(ne),null,{default:r(()=>[t(e(_),{value:u.name,"onUpdate:value":x=>u.name=x,type:"text",placeholder:"name"},null,8,["value","onUpdate:value"]),t(e(_),{value:u.value,"onUpdate:value":x=>u.value=x,type:"text",placeholder:"value",disabled:u.name===C},null,8,["value","onUpdate:value","disabled"]),t(e(F),{danger:"",onClick:x=>f(h)},{default:r(()=>[d("remove")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128)),t(e(g),null,{default:r(()=>[t(e(F),{type:"dashed",style:{width:"100%"},onClick:b},{default:r(()=>[d("Add Query Param")]),_:1})]),_:1})]),_:1},8,["header"])]),_:1},8,["active-key"])]),_:1})]),_:1}),t(e(Se),{orientation:"left"},{default:r(()=>[d("Quick Preview")]),_:1}),e(R)||!e(k)?(c(),y(e(ue),{key:1})):l.stageRunId||p.form.isInitial?(c(),K("div",Be,[t(be,{ref_key:"runner",ref:E,form:s.form.makeRunnerData(e(k)),params:{...l.queryParams.reduce((u,{name:h,value:x})=>({...u,[h]:x}),{})},"is-preview":"","enable-auto-focus":"",broker:i.value,onNavigate:M,onRedirect:q,onLogout:Q},null,8,["form","params","broker"])])):(c(),y(e(xe),{key:3,message:"This form is an intermediate task within the workflow. Please select a task instance to initiate the form.",type:"warning","show-icon":""}))]),_:1}))}}),ct=T({__name:"FormEditor",setup(v){const m=N(),a=J(),p=A(null),o=A("test");function n(){m.push({name:"forms"})}const{result:l,refetch:U}=te(()=>Promise.all([ae.get(),ve.get(a.params.formPath)]).then(([b,f])=>de({workspace:b,form:f}))),k=fe.create();function R(b,f){re("editor",m,b,f)}return Z(()=>a.params.formPath,()=>{U()}),(b,f)=>(c(),y(he,null,{navbar:r(()=>[e(l)?(c(),y(e(Ae),{key:0,title:e(l).form.title,style:{padding:"5px 10px"},onBack:n},{footer:r(()=>[t(e(Pe),{"active-key":o.value,"onUpdate:activeKey":f[0]||(f[0]=i=>o.value=i)},{default:r(()=>[t(e(z),{key:"test",tab:"Test"}),t(e(z),{key:"settings",tab:"Settings"})]),_:1},8,["active-key"])]),extra:r(()=>[t(ce),t(Ue,{path:e(l).form.path},null,8,["path"]),t(ye,{path:"forms/overview"}),t(Te,{model:e(l).form},null,8,["model"]),o.value==="settings"?(c(),y(ge,{key:0,model:e(l).form},null,8,["model"])):P("",!0)]),_:1},8,["title"])):P("",!0)]),content:r(()=>[e(l)&&o.value==="test"?(c(),y(Ce,{key:0,ref_key:"tester",ref:p,form:e(l).form,"log-service":e(k),onRedirect:R},null,8,["form","log-service"])):P("",!0),e(l)&&o.value==="settings"?(c(),y(Re,{key:1,form:e(l).form},null,8,["form"])):P("",!0)]),footer:r(()=>{var i;return[e(l)&&o.value==="test"?(c(),y(me,{key:0,runtime:"forms","log-service":e(k),onRestart:(i=p.value)==null?void 0:i.restart},null,8,["log-service","onRestart"])):P("",!0)]}),_:1}))}});export{ct as default};
//# sourceMappingURL=FormEditor.bca58815.js.map
