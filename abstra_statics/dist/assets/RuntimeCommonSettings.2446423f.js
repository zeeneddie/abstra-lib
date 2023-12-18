var de=Object.defineProperty;var pe=(s,t,e)=>t in s?de(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var z=(s,t,e)=>(pe(s,typeof t!="symbol"?t+"":t,e),e);import{u as H}from"./uuid.c46a8d7e.js";import{F as Y,d as B,r as p,S as K,G as A,b as d,ev as h,e as o,ez as R,eE as Z,eF as Q,v as N,eB as ve,H as he,a3 as fe,o as ge,K as me,a as X,f as v,u as r,I as S,aq as T,eD as $,ex as I,ew as _e,bq as ee,eC as ye,c as O,eU as be,eZ as we,eH as ke,w as b,bH as te}from"./outputWidgets.4dca5506.js";import{o as U,q,r as V,g as Ce,u as Se,v as Ie}from"./icons.bd47d131.js";import{l as xe}from"./NavbarControls.5e8d8ecd.js";import{a as j}from"./asyncComputed.c4b429e1.js";import{H as Ee,J as Re,S as Ae}from"./scripts.3780488f.js";import{W as Te}from"./workspaces.c9a13f7f.js";import{A as J}from"./FormItem.64e623f3.js";import{A as $e}from"./index.f5322801.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="a1c3ef5b-4b01-4c21-83ae-8a9e5d90befb",s._sentryDebugIdIdentifier="sentry-dbid-a1c3ef5b-4b01-4c21-83ae-8a9e5d90befb")}catch{}})();class se{constructor(){z(this,"logState",Y({log:[]}));z(this,"_listeners",{})}static create(){return new se}get logs(){return this.logState.log}log(t,e){if(t.type!=="restart"&&t.log.trim()==="")return;const n=e?this.logs.find(l=>l.id===e):null;return n?Object.assign(n,t):this.logs.push({...t,id:e||H()}),this.notifyListeners(t),e}clear(){this.logState.log=[]}listen(t){const e=H();return this._listeners[e]=t,e}unlisten(t){delete this._listeners[t]}notifyListeners(t){Object.values(this._listeners).forEach(e=>e(t))}}class Be{static async*sendMessage(t,e){var i;const l=(i=(await fetch("/_editor/api/ai/message",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:t,runtime:e})})).body)==null?void 0:i.getReader();if(!l)throw new Error("No response body");for(;;){const c=await l.read();if(c.done)break;yield new TextDecoder().decode(c.value)}}}const De=s=>(Z("data-v-59ca7295"),s=s(),Q(),s),Me=De(()=>o("div",{class:"text"}," Changes were made in your code. Click Restart to refresh the preview window. ",-1)),G="ignoreCodeChangesWarning",Le=B({__name:"ChangesWarning",props:{hasChanges:{type:Boolean}},setup(s){var i;const t=s,e=p((i=K.get(G))!=null?i:!1),n=A(()=>t.hasChanges&&!e.value),l=()=>{K.set(G,!0),e.value=!0};return(c,g)=>(d(),h("div",{class:R(["changes-warning",{visible:n.value}])},[Me,o("div",{class:"no-more-alert",onClick:l},"Do not show again")],2))}});const ze=N(Le,[["__scopeId","data-v-59ca7295"]]),He=s=>(Z("data-v-fa74f10a"),s=s(),Q(),s),Ne={class:"smart-console"},Oe={class:"header"},Fe={class:"left"},Pe={class:"right"},We={class:"changes-container"},Ke=["unseen-severity"],Ue={class:"cli"},qe={class:"left"},Ve=He(()=>o("div",{class:"entry ai-output"}," Hello there! I'm both an output console and AI assistant. You can ask me anything. ",-1)),je={key:1,class:"local-entry"},Je={class:"input"},Ge=["pointer-events","onKeydown"],Ye={class:"right"},Ze=B({__name:"SmartConsole",props:{inputEnabled:{type:Boolean},formCode:{},runtime:{},logService:{}},emits:["eval-request","clear-terminal","restart","enter"],setup(s,{emit:t}){const e=s,n=p(""),l=p(null),i=ve(),c=p({type:"seen"}),g=p(!1),u=p(!1),m=()=>{e.logService.clear(),t("restart")},x=()=>{C.value=C.value==="assistant"?"debugger":"assistant"};function k(a){switch(a.type){case"ai-input":return{role:"user",content:a.log};case"ai-output":return{role:"assistant",content:a.log};case"stderr":case"stdout":return{role:"user",content:a.log};case"restart":return{role:"user",content:"-- new session --"};case"files-changed":return{role:"user",content:"-- files changed --"};default:throw new Error(`Unknown log type: ${a.type}`)}}const ne=A(()=>e.logService.logs.some(a=>a.type==="files-changed"));function ae(){y.value=!y.value,y.value&&(c.value={type:"seen"})}he(i,()=>{e.logService.clear(),t("clear-terminal")});const E=p(null),C=p("assistant"),oe=async a=>{var _;if(a.preventDefault(),n.value=((_=E.value)==null?void 0:_.innerText)||"",a.shiftKey){document.execCommand("insertLineBreak");return}E.value&&(E.value.innerText=""),C.value==="assistant"?await re():await le()},re=async()=>{var _;if(t("enter",n.value),e.logService.log({type:"ai-input",log:n.value}),n.value="",!u.value){e.logService.log({type:"stderr",log:"Please login to use the AI assistant."});return}g.value=!0;const a={role:"user",content:(_=e.formCode)!=null?_:""};try{const w=H();let f="";const M=Be.sendMessage([a,...e.logService.logs.map(L=>k(L)),{role:"user",content:n.value}],e.runtime);for await(const L of M)f+=L,e.logService.log({type:"ai-output",log:f},w)}catch(w){e.logService.log({type:"ai-output",log:"Sorry, I don't know how to answer that."}),console.error(w),we(w)}finally{g.value=!1}},le=async()=>{n.value&&(e.logService.log({type:"eval-input",log:`>>> ${n.value}`}),t("eval-request",n.value),n.value="")},ie=()=>{e.logService.clear()};e.logService.listen(async a=>{y.value||(c.value={type:"unseen",count:c.value.type==="unseen"?c.value.count+1:1,severity:a.type==="stderr"?"error":"info"}),a.type!=="restart"&&(await fe(),l.value&&(l.value.scrollTop=l.value.scrollHeight))});const y=p(!1),F=p(400),ce=A(()=>({height:`${F.value}px`})),D=p(!1),ue=()=>D.value=!0,P=a=>{!D.value||(F.value=document.body.clientHeight-a.clientY)},W=()=>D.value=!1;return ge(()=>{document.addEventListener("mousemove",P),document.addEventListener("mouseup",W),xe.get().then(a=>{u.value=!!a.logged})}),me(()=>{document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",W)}),(a,_)=>{const w=X("Markdown");return d(),h("div",Ne,[o("div",Oe,[o("div",Fe,[v(S,{path:C.value==="assistant"?r(U):r(q)},null,8,["path"]),T(" Smart Console ")]),o("div",Pe,[o("div",We,[v(ze,{"has-changes":ne.value},null,8,["has-changes"]),o("button",{class:"header-button",onClick:m},"Restart")]),o("div",{class:"toggle-button",onClick:ae},[v(S,{class:R(["icon",{open:y.value}]),path:r(V),fill:"#fff"},null,8,["class","path"]),c.value.type==="unseen"?(d(),h("div",{key:0,class:"unseen-count","unseen-severity":c.value.severity},$(c.value.count),9,Ke)):I("",!0)])])]),y.value?(d(),h("div",{key:0,class:"terminal",style:_e(ce.value)},[o("div",{class:"resize-handler",onMousedown:ue},null,32),o("div",Ue,[o("div",qe,[o("div",{ref_key:"entriesContainer",ref:l,class:"entries"},[Ve,(d(!0),h(ee,null,ye(e.logService.logs,(f,M)=>(d(),h("div",{key:M,class:R([f.type,"entry"])},[f.type==="ai-output"?(d(),O(w,{key:0,source:f.log},null,8,["source"])):(d(),h("div",je,$(f.type==="restart"?"-- restarted --":f.log),1))],2))),128))],512),o("div",Je,[v(S,{class:R(["icon",{open:y.value}]),path:r(V)},null,8,["class","path"]),o("div",{ref_key:"inputRef",ref:E,class:"input-text",contenteditable:"","pointer-events":g.value?"none":"auto",placeholder:"Ask AI anything",onKeydown:be(oe,["enter"])},null,40,Ge)])]),o("div",Ye,[o("div",{class:"icons",onClick:ie},[v(S,{class:"icon",path:r(Ce)},null,8,["path"])]),o("div",null,[v(S,{class:"icon clickable",path:C.value==="assistant"?r(U):r(q),onClick:_[0]||(_[0]=f=>x())},null,8,["path"])])])])],4)):I("",!0)])}}});const pt=N(Ze,[["__scopeId","data-v-fa74f10a"]]),Qe=B({__name:"PathInput",props:{runtime:{}},setup(s){const t=s,e=p(!1),n=async()=>{e.value=!0;const i=await(await fetch("/_editor/api/utils/normalize_path",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:t.runtime.path})})).text();i&&i!==t.runtime.path&&(t.runtime.path=i),e.value=!1};return(l,i)=>(d(),O(r(te),{value:l.runtime.path,"onUpdate:value":i[0]||(i[0]=c=>l.runtime.path=c),type:"text",disabled:e.value,onBlur:n},ke({_:2},[l.runtime instanceof r(Ee)?{name:"addonBefore",fn:b(()=>[T(" https://[your-subdomain].abstra.app/_hooks/ ")]),key:"0"}:{name:"addonBefore",fn:b(()=>[T(" https://[your-subdomain].abstra.app/ ")]),key:"1"}]),1032,["value","disabled"]))}}),Xe={class:"file-path"},et={key:1},tt=B({__name:"RuntimeCommonSettings",props:{runtime:{}},setup(s){const t=s,e=Y({pathError:null}),{result:n}=j(()=>Te.get()),l=()=>{!n.value||!t.runtime.file||n.value.openFile(t.runtime.file)},i=A(()=>{var u;return(u=t.runtime.file)!=null&&u.endsWith(".py")?t.runtime.hasChanges("file")?"The original file will be renamed after saving":null:"It should be a .py file"}),c=()=>{!n.value||!g.value||n.value.openFile(".")},{result:g}=j(()=>fetch("/_editor/api/workspace/root").then(u=>u.text()));return(u,m)=>{const x=X("icon");return d(),h(ee,null,[v(r($e),null,{default:b(()=>[v(r(J),{label:"Source code",help:i.value},{default:b(()=>[v(r(te),{value:u.runtime.file,"onUpdate:value":m[2]||(m[2]=k=>u.runtime.file=k),type:"text"},{addonBefore:b(()=>[r(g)?(d(),h("span",{key:0,class:"clickable",onClick:m[0]||(m[0]=k=>c())},[v(x,{class:"clickable",path:r(Se)},null,8,["path"]),o("p",Xe,$(r(g)),1)])):I("",!0)]),addonAfter:b(()=>[o("span",{class:"clickable",onClick:m[1]||(m[1]=k=>l())},[v(x,{class:"clickable",path:r(Ie)},null,8,["path"]),T(" Open file ")])]),_:1},8,["value"])]),_:1},8,["help"])]),_:1}),u.runtime instanceof r(Re)||u.runtime instanceof r(Ae)?I("",!0):(d(),O(r(J),{key:0,label:"URL path"},{default:b(()=>[v(Qe,{runtime:u.runtime},null,8,["runtime"])]),_:1})),e.pathError?(d(),h("div",et,$(e.pathError),1)):I("",!0)],64)}}});const vt=N(tt,[["__scopeId","data-v-2ed86fc9"]]);export{se as L,vt as R,pt as S};
//# sourceMappingURL=RuntimeCommonSettings.2446423f.js.map