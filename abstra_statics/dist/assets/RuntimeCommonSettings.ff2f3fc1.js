var de=Object.defineProperty;var pe=(s,t,e)=>t in s?de(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var M=(s,t,e)=>(pe(s,typeof t!="symbol"?t+"":t,e),e);import{u as z}from"./uuid.33b66bf0.js";import{F as Y,d as $,r as p,S as K,G as A,b as d,ev as h,e as o,ez as R,eE as Z,eF as Q,v as N,eB as ve,H as he,a3 as fe,o as ge,K as me,a as X,f as v,u as r,I as k,aq as O,eD as T,ex as I,ew as _e,bq as ee,eC as ye,c as F,eU as be,eZ as we,w,bH as te}from"./outputWidgets.31ce2d5c.js";import{o as U,q,r as V,g as Ce,u as Se,v as ke}from"./icons.266b547d.js";import{l as Ie}from"./NavbarControls.afcfe3f2.js";import{a as j}from"./asyncComputed.7e3e21f4.js";import{J as xe,S as Ee}from"./scripts.77407c5b.js";import{W as Re}from"./workspaces.f1f3f168.js";import{A as J}from"./FormItem.5f0b61bf.js";import{A as Ae}from"./index.ef6e34b6.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="495dbc5f-85e3-4fb4-b3ed-8a6930eeeb2d",s._sentryDebugIdIdentifier="sentry-dbid-495dbc5f-85e3-4fb4-b3ed-8a6930eeeb2d")}catch{}})();class se{constructor(){M(this,"logState",Y({log:[]}));M(this,"_listeners",{})}static create(){return new se}get logs(){return this.logState.log}log(t,e){if(t.type!=="restart"&&t.log.trim()==="")return;const n=e?this.logs.find(l=>l.id===e):null;return n?Object.assign(n,t):this.logs.push({...t,id:e||z()}),this.notifyListeners(t),e}clear(){this.logState.log=[]}listen(t){const e=z();return this._listeners[e]=t,e}unlisten(t){delete this._listeners[t]}notifyListeners(t){Object.values(this._listeners).forEach(e=>e(t))}}class Te{static async*sendMessage(t,e){var i;const l=(i=(await fetch("/_editor/api/ai/message",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:t,runtime:e})})).body)==null?void 0:i.getReader();if(!l)throw new Error("No response body");for(;;){const c=await l.read();if(c.done)break;yield new TextDecoder().decode(c.value)}}}const $e=s=>(Z("data-v-59ca7295"),s=s(),Q(),s),Be=$e(()=>o("div",{class:"text"}," Changes were made in your code. Click Restart to refresh the preview window. ",-1)),G="ignoreCodeChangesWarning",De=$({__name:"ChangesWarning",props:{hasChanges:{type:Boolean}},setup(s){var i;const t=s,e=p((i=K.get(G))!=null?i:!1),n=A(()=>t.hasChanges&&!e.value),l=()=>{K.set(G,!0),e.value=!0};return(c,g)=>(d(),h("div",{class:R(["changes-warning",{visible:n.value}])},[Be,o("div",{class:"no-more-alert",onClick:l},"Do not show again")],2))}});const Le=N(De,[["__scopeId","data-v-59ca7295"]]),Me=s=>(Z("data-v-fa74f10a"),s=s(),Q(),s),ze={class:"smart-console"},Ne={class:"header"},Oe={class:"left"},Fe={class:"right"},Pe={class:"changes-container"},We=["unseen-severity"],He={class:"cli"},Ke={class:"left"},Ue=Me(()=>o("div",{class:"entry ai-output"}," Hello there! I'm both an output console and AI assistant. You can ask me anything. ",-1)),qe={key:1,class:"local-entry"},Ve={class:"input"},je=["pointer-events","onKeydown"],Je={class:"right"},Ge=$({__name:"SmartConsole",props:{inputEnabled:{type:Boolean},formCode:{},runtime:{},logService:{}},emits:["eval-request","clear-terminal","restart","enter"],setup(s,{emit:t}){const e=s,n=p(""),l=p(null),i=ve(),c=p({type:"seen"}),g=p(!1),u=p(!1),m=()=>{e.logService.clear(),t("restart")},x=()=>{S.value=S.value==="assistant"?"debugger":"assistant"};function C(a){switch(a.type){case"ai-input":return{role:"user",content:a.log};case"ai-output":return{role:"assistant",content:a.log};case"stderr":case"stdout":return{role:"user",content:a.log};case"restart":return{role:"user",content:"-- new session --"};case"files-changed":return{role:"user",content:"-- files changed --"};default:throw new Error(`Unknown log type: ${a.type}`)}}const ne=A(()=>e.logService.logs.some(a=>a.type==="files-changed"));function ae(){y.value=!y.value,y.value&&(c.value={type:"seen"})}he(i,()=>{e.logService.clear(),t("clear-terminal")});const E=p(null),S=p("assistant"),oe=async a=>{var _;if(a.preventDefault(),n.value=((_=E.value)==null?void 0:_.innerText)||"",a.shiftKey){document.execCommand("insertLineBreak");return}E.value&&(E.value.innerText=""),S.value==="assistant"?await re():await le()},re=async()=>{var _;if(t("enter",n.value),e.logService.log({type:"ai-input",log:n.value}),n.value="",!u.value){e.logService.log({type:"stderr",log:"Please login to use the AI assistant."});return}g.value=!0;const a={role:"user",content:(_=e.formCode)!=null?_:""};try{const b=z();let f="";const D=Te.sendMessage([a,...e.logService.logs.map(L=>C(L)),{role:"user",content:n.value}],e.runtime);for await(const L of D)f+=L,e.logService.log({type:"ai-output",log:f},b)}catch(b){e.logService.log({type:"ai-output",log:"Sorry, I don't know how to answer that."}),console.error(b),we(b)}finally{g.value=!1}},le=async()=>{n.value&&(e.logService.log({type:"eval-input",log:`>>> ${n.value}`}),t("eval-request",n.value),n.value="")},ie=()=>{e.logService.clear()};e.logService.listen(async a=>{y.value||(c.value={type:"unseen",count:c.value.type==="unseen"?c.value.count+1:1,severity:a.type==="stderr"?"error":"info"}),a.type!=="restart"&&(await fe(),l.value&&(l.value.scrollTop=l.value.scrollHeight))});const y=p(!1),P=p(400),ce=A(()=>({height:`${P.value}px`})),B=p(!1),ue=()=>B.value=!0,W=a=>{!B.value||(P.value=document.body.clientHeight-a.clientY)},H=()=>B.value=!1;return ge(()=>{document.addEventListener("mousemove",W),document.addEventListener("mouseup",H),Ie.get().then(a=>{u.value=!!a.logged})}),me(()=>{document.removeEventListener("mousemove",W),document.removeEventListener("mouseup",H)}),(a,_)=>{const b=X("Markdown");return d(),h("div",ze,[o("div",Ne,[o("div",Oe,[v(k,{path:S.value==="assistant"?r(U):r(q)},null,8,["path"]),O(" Smart Console ")]),o("div",Fe,[o("div",Pe,[v(Le,{"has-changes":ne.value},null,8,["has-changes"]),o("button",{class:"header-button",onClick:m},"Restart")]),o("div",{class:"toggle-button",onClick:ae},[v(k,{class:R(["icon",{open:y.value}]),path:r(V),fill:"#fff"},null,8,["class","path"]),c.value.type==="unseen"?(d(),h("div",{key:0,class:"unseen-count","unseen-severity":c.value.severity},T(c.value.count),9,We)):I("",!0)])])]),y.value?(d(),h("div",{key:0,class:"terminal",style:_e(ce.value)},[o("div",{class:"resize-handler",onMousedown:ue},null,32),o("div",He,[o("div",Ke,[o("div",{ref_key:"entriesContainer",ref:l,class:"entries"},[Ue,(d(!0),h(ee,null,ye(e.logService.logs,(f,D)=>(d(),h("div",{key:D,class:R([f.type,"entry"])},[f.type==="ai-output"?(d(),F(b,{key:0,source:f.log},null,8,["source"])):(d(),h("div",qe,T(f.type==="restart"?"-- restarted --":f.log),1))],2))),128))],512),o("div",Ve,[v(k,{class:R(["icon",{open:y.value}]),path:r(V)},null,8,["class","path"]),o("div",{ref_key:"inputRef",ref:E,class:"input-text",contenteditable:"","pointer-events":g.value?"none":"auto",placeholder:"Ask AI anything",onKeydown:be(oe,["enter"])},null,40,je)])]),o("div",Je,[o("div",{class:"icons",onClick:ie},[v(k,{class:"icon",path:r(Ce)},null,8,["path"])]),o("div",null,[v(k,{class:"icon clickable",path:S.value==="assistant"?r(U):r(q),onClick:_[0]||(_[0]=f=>x())},null,8,["path"])])])])],4)):I("",!0)])}}});const ut=N(Ge,[["__scopeId","data-v-fa74f10a"]]),Ye=$({__name:"PathInput",props:{runtime:{}},setup(s){const t=s,e=p(!1),n=async()=>{e.value=!0;const i=await(await fetch("/_editor/api/utils/normalize_path",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:t.runtime.path})})).text();i&&i!==t.runtime.path&&(t.runtime.path=i),e.value=!1};return(l,i)=>(d(),F(r(te),{value:l.runtime.path,"onUpdate:value":i[0]||(i[0]=c=>l.runtime.path=c),type:"text",disabled:e.value,onBlur:n},{addonBefore:w(()=>[O(" https://[your-subdomain].abstra.app/ ")]),_:1},8,["value","disabled"]))}}),Ze={class:"file-path"},Qe={key:1},Xe=$({__name:"RuntimeCommonSettings",props:{runtime:{}},setup(s){const t=s,e=Y({pathError:null}),{result:n}=j(()=>Re.get()),l=()=>{!n.value||!t.runtime.file||n.value.openFile(t.runtime.file)},i=A(()=>{var u;return(u=t.runtime.file)!=null&&u.endsWith(".py")?t.runtime.hasChanges("file")?"The original file will be renamed after saving":null:"It should be a .py file"}),c=()=>{!n.value||!g.value||n.value.openFile(".")},{result:g}=j(()=>fetch("/_editor/api/workspace/root").then(u=>u.text()));return(u,m)=>{const x=X("icon");return d(),h(ee,null,[v(r(Ae),null,{default:w(()=>[v(r(J),{label:"Source code",help:i.value},{default:w(()=>[v(r(te),{value:u.runtime.file,"onUpdate:value":m[2]||(m[2]=C=>u.runtime.file=C),type:"text"},{addonBefore:w(()=>[r(g)?(d(),h("span",{key:0,class:"clickable",onClick:m[0]||(m[0]=C=>c())},[v(x,{class:"clickable",path:r(Se)},null,8,["path"]),o("p",Ze,T(r(g)),1)])):I("",!0)]),addonAfter:w(()=>[o("span",{class:"clickable",onClick:m[1]||(m[1]=C=>l())},[v(x,{class:"clickable",path:r(ke)},null,8,["path"]),O(" Open file ")])]),_:1},8,["value"])]),_:1},8,["help"])]),_:1}),u.runtime instanceof r(xe)||u.runtime instanceof r(Ee)?I("",!0):(d(),F(r(J),{key:0,label:"URL path"},{default:w(()=>[v(Ye,{runtime:u.runtime},null,8,["runtime"])]),_:1})),e.pathError?(d(),h("div",Qe,T(e.pathError),1)):I("",!0)],64)}}});const dt=N(Xe,[["__scopeId","data-v-2ed86fc9"]]);export{se as L,dt as R,ut as S};
//# sourceMappingURL=RuntimeCommonSettings.ff2f3fc1.js.map
