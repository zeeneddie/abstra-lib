var ve=Object.defineProperty;var fe=(s,e,t)=>e in s?ve(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var A=(s,e,t)=>(fe(s,typeof e!="symbol"?e+"":e,t),t);import{a as J}from"./asyncComputed.eae0c0ea.js";import{F as ge}from"./forms.f0016f62.js";import{D as me}from"./dashes.1843abee.js";import{H as ye}from"./hooks.3f2564e0.js";import{J as K}from"./jobs.c17d5857.js";import{W as _e}from"./workspaces.48c8fd8f.js";import{d as U,H as ee,J as j,ez as we,a as te,b as d,eu as v,f as u,w as S,aJ as M,u as i,c as se,bZ as V,ew as T,e as r,eC as P,bg as ne,x as F,r as h,S as q,ey as D,eD as ae,eE as oe,eA as be,K as Ce,a5 as ke,o as Se,N as Ie,I as x,ev as Ee,eB as xe,eO as Te,eP as Re}from"./outputWidgets.5f5dca9f.js";import{A as $e}from"./activeRecord.ad81cab4.js";import{n as Ae,e as De,s as Y,o as G,p as Z,q as je}from"./icons.a77543dc.js";import{c as Pe,A as Q}from"./Title.c2ba09dc.js";import{A as Ne}from"./index.10f6bb5a.js";import{u as B}from"./uuid.80bf1f32.js";import{l as Oe}from"./DocsButton.vue_vue_type_script_setup_true_lang.e0e69f03.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="41b22d0f-f93e-4b35-8efb-ebfd1859f791",s._sentryDebugIdIdentifier="sentry-dbid-41b22d0f-f93e-4b35-8efb-ebfd1859f791")}catch{}})();class Le{async list(){return await(await fetch("/_editor/api/scripts")).json()}async create(){return await(await fetch("/_editor/api/scripts",{method:"POST",headers:{"Content-Type":"application/json"}})).json()}async get(e){return await(await fetch(`/_editor/api/scripts/${e}`)).json()}async update(e,t){return await(await fetch(`/_editor/api/scripts/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()}async delete(e){await fetch(`/_editor/api/scripts/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json"}})}async test(e){return(await fetch(`/_editor/api/scripts/${e}/test`,{method:"POST",headers:{"Content-Type":"application/json"}})).json()}}const I=new Le;class R{constructor(e){A(this,"record");this.record=$e.create(I,e,"path")}static async list(){return(await I.list()).map(t=>new R(t))}static async create(){const e=await I.create();return new R(e)}static async get(e){const t=await I.get(e);return new R(t)}async delete(){await I.delete(this.path)}async duplicate(){return this}async save(){await this.record.save()}onUpdate(e){this.record.pubsub.subscribe("update",e)}hasChanges(e){return this.record.hasChanges(e)}get schedule(){return this.record.get("schedule")}set schedule(e){this.record.set("schedule",e)}get title(){return this.record.get("title")}set title(e){this.record.set("title",e)}get file(){return this.record.get("file")}set file(e){this.record.set("file",e)}get path(){return this.record.get("path")}set path(e){this.record.set("path",e)}async test(){return I.test(this.path)}get routeName(){return"script"}get position(){const[e,t]=this.record.get("workflow_position");return{x:e,y:t,referential:"world"}}get isInitial(){return!1}}const Me={class:"file-path"},Be={key:1},Ue=U({__name:"RuntimeCommonSettings",props:{runtime:{}},setup(s){const e=s,t=ee({pathError:null}),{result:n}=J(()=>_e.get()),l=()=>{!n.value||!e.runtime.file||n.value.openFile(e.runtime.file)},f=j(()=>{var a;return(a=e.runtime.file)!=null&&a.endsWith(".py")?e.runtime.hasChanges("file")?"The original file will be renamed after saving":null:"It should be a .py file"}),c=()=>{!n.value||!C.value||n.value.openFile(".")},b=we(),{result:C}=J(()=>fetch("/_editor/api/workspace/root-path").then(a=>a.text()));return e.runtime.onUpdate(a=>{if(e.runtime instanceof K||!a||!("path"in a)||!(a!=null&&a.path))return;const _=[{runtime:ge,basePath:"form"},{runtime:ye,basePath:"hook"},{runtime:me,basePath:"dash"}].find(g=>e.runtime instanceof g.runtime);if(!_)throw new Error(`Unknown runtime type ${e.runtime}`);b.push({path:`/_editor/${_.basePath}/${encodeURIComponent(a.path)}`})}),(a,p)=>{const _=te("icon");return d(),v(ne,null,[u(i(Pe),{level:3},{default:S(()=>[M("Common")]),_:1}),a.runtime instanceof i(K)||a.runtime instanceof i(R)?T("",!0):(d(),se(i(Q),{key:0,label:"Path"},{default:S(()=>[u(i(V),{value:a.runtime.path,"onUpdate:value":p[0]||(p[0]=g=>a.runtime.path=g),type:"text"},null,8,["value"])]),_:1})),u(i(Ne),null,{default:S(()=>[u(i(Q),{label:"source code",help:f.value},{default:S(()=>[u(i(V),{value:a.runtime.file,"onUpdate:value":p[3]||(p[3]=g=>a.runtime.file=g),type:"text"},{addonBefore:S(()=>[i(C)?(d(),v("span",{key:0,class:"clickable",onClick:p[1]||(p[1]=g=>c())},[u(_,{class:"clickable",path:i(Ae)},null,8,["path"]),r("p",Me,P(i(C)),1)])):T("",!0)]),addonAfter:S(()=>[r("span",{class:"clickable",onClick:p[2]||(p[2]=g=>l())},[u(_,{class:"clickable",path:i(De)},null,8,["path"]),M(" Open file ")])]),_:1},8,["value"])]),_:1},8,["help"])]),_:1}),t.pathError?(d(),v("div",Be,P(t.pathError),1)):T("",!0)],64)}}});const bt=F(Ue,[["__scopeId","data-v-24ce428d"]]);class re{constructor(){A(this,"logState",ee({log:[]}));A(this,"_listeners",{})}static create(){return new re}get logs(){return this.logState.log}log(e,t){if(e.type!=="restart"&&e.log.trim()==="")return;const n=t?this.logs.find(l=>l.id===t):null;return n?Object.assign(n,e):this.logs.push({...e,id:t||B()}),this.notifyListeners(e),t}clear(){this.logState.log=[]}listen(e){const t=B();return this._listeners[t]=e,t}unlisten(e){delete this._listeners[e]}notifyListeners(e){Object.values(this._listeners).forEach(t=>t(e))}}class Fe{static async*sendMessage(e,t){var f;const l=(f=(await fetch("/_editor/api/ai/message",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:e,runtime:t})})).body)==null?void 0:f.getReader();if(!l)throw new Error("No response body");for(;;){const c=await l.read();if(c.done)break;yield new TextDecoder().decode(c.value)}}}const ze=s=>(ae("data-v-59ca7295"),s=s(),oe(),s),He=ze(()=>r("div",{class:"text"}," Changes were made in your code. Click Restart to refresh the preview window. ",-1)),X="ignoreCodeChangesWarning",We=U({__name:"ChangesWarning",props:{hasChanges:{type:Boolean}},setup(s){var f;const e=s,t=h((f=q.get(X))!=null?f:!1),n=j(()=>e.hasChanges&&!t.value),l=()=>{q.set(X,!0),t.value=!0};return(c,b)=>(d(),v("div",{class:D(["changes-warning",{visible:n.value}])},[He,r("div",{class:"no-more-alert",onClick:l},"Do not show again")],2))}});const Je=F(We,[["__scopeId","data-v-59ca7295"]]),Ke=s=>(ae("data-v-440200c2"),s=s(),oe(),s),Ve={class:"smart-console"},qe={class:"header"},Ye={class:"left"},Ge={class:"right"},Ze={class:"changes-container"},Qe=["unseen-severity"],Xe={class:"cli"},et={class:"left"},tt=Ke(()=>r("div",{class:"entry ai-output"}," Hello there! I'm both an output console and AI assistant. You can ask me anything. ",-1)),st={key:1,class:"local-entry"},nt={class:"input"},at=["pointer-events","onKeydown"],ot={class:"right"},rt=U({__name:"SmartConsole",props:{inputEnabled:{type:Boolean},formCode:{},runtime:{},logService:{}},emits:["eval-request","clear-terminal","restart","enter"],setup(s,{emit:e}){const t=s,n=h(""),l=h(null),f=be(),c=h({type:"seen"}),b=h(!1),C=h(!1),a=()=>{t.logService.clear(),e("restart")},p=()=>{E.value=E.value==="assistant"?"debugger":"assistant"};function _(o){switch(o.type){case"ai-input":return{role:"user",content:o.log};case"ai-output":return{role:"assistant",content:o.log};case"stderr":case"stdout":return{role:"user",content:o.log};case"restart":return{role:"user",content:"-- new session --"};case"files-changed":return{role:"user",content:"-- files changed --"};default:throw new Error(`Unknown log type: ${o.type}`)}}const g=j(()=>t.logService.logs.some(o=>o.type==="files-changed"));function ie(){w.value=!w.value,w.value&&(c.value={type:"seen"})}Ce(f,()=>{t.logService.clear(),e("clear-terminal")});const $=h(null),E=h("assistant"),le=async o=>{var y;if(o.preventDefault(),n.value=((y=$.value)==null?void 0:y.innerText)||"",o.shiftKey){document.execCommand("insertLineBreak");return}$.value&&($.value.innerText=""),E.value==="assistant"?await ce():await ue()},ce=async()=>{var y;if(e("enter",n.value),t.logService.log({type:"ai-input",log:n.value}),n.value="",!C.value){t.logService.log({type:"stderr",log:"Please login to use the AI assistant."});return}b.value=!0;const o={role:"user",content:(y=t.formCode)!=null?y:""};try{const k=B();let m="";const O=Fe.sendMessage([o,...t.logService.logs.map(L=>_(L)),{role:"user",content:n.value}],t.runtime);for await(const L of O)m+=L,t.logService.log({type:"ai-output",log:m},k)}catch(k){t.logService.log({type:"ai-output",log:"Sorry, I don't know how to answer that."}),console.error(k),Re(k)}finally{b.value=!1}},ue=async()=>{n.value&&(t.logService.log({type:"eval-input",log:`>>> ${n.value}`}),e("eval-request",n.value),n.value="")},de=()=>{t.logService.clear()};t.logService.listen(async o=>{w.value||(c.value={type:"unseen",count:c.value.type==="unseen"?c.value.count+1:1,severity:o.type==="stderr"?"error":"info"}),o.type!=="restart"&&(await ke(),l.value&&(l.value.scrollTop=l.value.scrollHeight))});const w=h(!1),z=h(400),pe=j(()=>({height:`${z.value}px`})),N=h(!1),he=()=>N.value=!0,H=o=>{!N.value||(z.value=document.body.clientHeight-o.clientY)},W=()=>N.value=!1;return Se(()=>{document.addEventListener("mousemove",H),document.addEventListener("mouseup",W),Oe.get().then(o=>C.value=!!o)}),Ie(()=>{document.removeEventListener("mousemove",H),document.removeEventListener("mouseup",W)}),(o,y)=>{const k=te("Markdown");return d(),v("div",Ve,[r("div",qe,[r("div",Ye,[u(x,{path:E.value==="assistant"?i(Y):i(G)},null,8,["path"]),M(" Smart Console ")]),r("div",Ge,[r("div",Ze,[u(Je,{"has-changes":g.value},null,8,["has-changes"]),r("button",{class:"header-button",onClick:a},"Restart")]),r("div",{class:"toggle-button",onClick:ie},[u(x,{class:D(["icon",{open:w.value}]),path:i(Z),fill:"#fff"},null,8,["class","path"]),c.value.type==="unseen"?(d(),v("div",{key:0,class:"unseen-count","unseen-severity":c.value.severity},P(c.value.count),9,Qe)):T("",!0)])])]),w.value?(d(),v("div",{key:0,class:"terminal",style:Ee(pe.value)},[r("div",{class:"resize-handler",onMousedown:he},null,32),r("div",Xe,[r("div",et,[r("div",{ref_key:"entriesContainer",ref:l,class:"entries"},[tt,(d(!0),v(ne,null,xe(t.logService.logs,(m,O)=>(d(),v("div",{key:O,class:D([m.type,"entry"])},[m.type==="ai-output"?(d(),se(k,{key:0,source:m.log},null,8,["source"])):(d(),v("div",st,P(m.type==="restart"?"-- restarted --":m.log),1))],2))),128))],512),r("div",nt,[u(x,{class:D(["icon",{open:w.value}]),path:i(Z)},null,8,["class","path"]),r("div",{ref_key:"inputRef",ref:$,class:"input-text",contenteditable:"","pointer-events":b.value?"none":"auto",placeholder:"Ask AI anything",onKeydown:Te(le,["enter"])},null,40,at)])]),r("div",ot,[r("div",{class:"icons",onClick:de},[u(x,{class:"icon",path:i(je)},null,8,["path"])]),r("div",null,[u(x,{class:"icon clickable",path:E.value==="assistant"?i(Y):i(G),onClick:y[0]||(y[0]=m=>p())},null,8,["path"])])])])],4)):T("",!0)])}}});const Ct=F(rt,[["__scopeId","data-v-440200c2"]]);export{re as L,bt as R,Ct as S,R as a};
//# sourceMappingURL=SmartConsole.9fe0ab76.js.map