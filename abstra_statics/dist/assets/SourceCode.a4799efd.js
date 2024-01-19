var ke=Object.defineProperty;var Ee=(o,e,t)=>e in o?ke(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var S=(o,e,t)=>(Ee(o,typeof e!="symbol"?e+"":e,t),t);import{u as te}from"./uuid.45527e3a.js";import{F as he,d as z,r as m,S as ie,G as Q,b as h,ev as b,e as p,ez as P,eE as fe,eF as ve,v as Z,eB as Se,H as se,a3 as ge,o as _e,K as me,a as ye,f as v,u as i,I as N,aq as C,eD as V,ex as M,ew as Me,bq as oe,eC as Ie,c as W,eP as xe,eV as De,eI as Oe,w as u,bH as Ce,E as Y,bO as J,br as ee}from"./outputWidgets.0c4e4661.js";import{k as re,l as le,n as ce,o as Fe,q as Re,u as Ae}from"./icons.d6072388.js";import{l as Be}from"./NavbarControls.ef1fd449.js";import{H as We,J as $e,v as He,n as Pe}from"./validations.7f9697ac.js";import{S as Te}from"./scripts.a80508a3.js";import{A as we}from"./FormItem.16053930.js";import{W as Le}from"./workspaces.da165694.js";import{a as de}from"./asyncComputed.5f444091.js";import{l as Ne,e as G,R as Ve}from"./toggleHighContrast.36f30711.js";import{A as ue}from"./index.338e0265.js";import{A as ze}from"./index.b551fd73.js";import{C as Ke}from"./Card.7bcc5f4f.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="b571add1-4bdc-45ba-8eb4-73b8d76fed2d",o._sentryDebugIdIdentifier="sentry-dbid-b571add1-4bdc-45ba-8eb4-73b8d76fed2d")}catch{}})();class be{constructor(){S(this,"logState",he({log:[]}));S(this,"_listeners",{})}static create(){return new be}get logs(){return this.logState.log}log(e,t){if(e.type!=="restart"&&e.log.trim()==="")return;const s=t?this.logs.find(r=>r.id===t):null;return s?Object.assign(s,e):this.logs.push({...e,id:t||te()}),this.notifyListeners(e),t}clear(){this.logState.log=[]}listen(e){const t=te();return this._listeners[t]=e,t}unlisten(e){delete this._listeners[e]}notifyListeners(e){Object.values(this._listeners).forEach(t=>t(e))}}class qe{static async*sendMessage(e,t){var l;const r=(l=(await fetch("/_editor/api/ai/message",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:e,runtime:t})})).body)==null?void 0:l.getReader();if(!r)throw new Error("No response body");for(;;){const f=await r.read();if(f.done)break;yield new TextDecoder().decode(f.value)}}}const Ue=o=>(fe("data-v-59ca7295"),o=o(),ve(),o),je=Ue(()=>p("div",{class:"text"}," Changes were made in your code. Click Restart to refresh the preview window. ",-1)),pe="ignoreCodeChangesWarning",Je=z({__name:"ChangesWarning",props:{hasChanges:{type:Boolean}},setup(o){var l;const e=o,t=m((l=ie.get(pe))!=null?l:!1),s=Q(()=>e.hasChanges&&!t.value),r=()=>{ie.set(pe,!0),t.value=!0};return(f,O)=>(h(),b("div",{class:P(["changes-warning",{visible:s.value}])},[je,p("div",{class:"no-more-alert",onClick:r},"Do not show again")],2))}});const Ye=Z(Je,[["__scopeId","data-v-59ca7295"]]),Ge=o=>(fe("data-v-9d2d7cb6"),o=o(),ve(),o),Qe={class:"smart-console"},Xe={class:"header"},Ze={class:"left"},et={class:"right"},tt={class:"changes-container"},st=["unseen-severity"],ot={class:"cli"},nt={class:"left"},at=Ge(()=>p("div",{class:"entry ai-output"}," Hello there! I'm both an output console and AI assistant. You can ask me anything. ",-1)),it={key:1,class:"local-entry"},rt={class:"input"},lt=["pointer-events","onKeydown"],ct={class:"right"},dt=z({__name:"SmartConsole",props:{inputEnabled:{type:Boolean},formCode:{},runtime:{},logService:{}},emits:["eval-request","clear-terminal","restart","enter"],setup(o,{emit:e}){const t=o,s=m(""),r=m(null),l=Se(),f=m({type:"seen"}),O=m(!1),F=m(!1),A=()=>{k.value=k.value==="assistant"?"debugger":"assistant"};function R(d){switch(d.type){case"ai-input":return{role:"user",content:d.log};case"ai-output":return{role:"assistant",content:d.log};case"stderr":case"stdout":return{role:"user",content:d.log};case"restart":return{role:"user",content:"-- new session --"};case"files-changed":return{role:"user",content:"-- files changed --"};default:throw new Error(`Unknown log type: ${d.type}`)}}const y=Q(()=>t.logService.logs.some(d=>d.type==="files-changed"));function I(){w.value=!w.value,w.value&&(f.value={type:"seen"})}se(l,()=>{t.logService.clear(),e("clear-terminal")});const g=m(null),k=m("assistant"),T=async d=>{var n;if(d.preventDefault(),s.value=((n=g.value)==null?void 0:n.innerText)||"",d.shiftKey){document.execCommand("insertLineBreak");return}g.value&&(g.value.innerText=""),k.value==="assistant"?await $():await E()},$=async()=>{var n;if(e("enter",s.value),t.logService.log({type:"ai-input",log:s.value}),s.value="",!F.value){t.logService.log({type:"stderr",log:"Please login to use the AI assistant."});return}O.value=!0;const d={role:"user",content:(n=t.formCode)!=null?n:""};try{const a=te();let _="";const x=qe.sendMessage([d,...t.logService.logs.map(D=>R(D)),{role:"user",content:s.value}],t.runtime);for await(const D of x)_+=D,t.logService.log({type:"ai-output",log:_},a)}catch(a){t.logService.log({type:"ai-output",log:"Sorry, I don't know how to answer that."}),console.error(a),De(a)}finally{O.value=!1}},E=async()=>{s.value&&(t.logService.log({type:"eval-input",log:`>>> ${s.value}`}),e("eval-request",s.value),s.value="")},L=()=>{t.logService.clear()};t.logService.listen(async d=>{w.value||(f.value={type:"unseen",count:f.value.type==="unseen"?f.value.count+1:1,severity:d.type==="stderr"?"error":"info"}),d.type!=="restart"&&(await ge(),r.value&&(r.value.scrollTop=r.value.scrollHeight))});const w=m(!1),K=m(400),c=Q(()=>({height:`${K.value}px`})),H=m(!1),q=()=>H.value=!0,U=d=>{!H.value||(K.value=document.body.clientHeight-d.clientY)},j=()=>H.value=!1;return _e(()=>{document.addEventListener("mousemove",U),document.addEventListener("mouseup",j),Be.get().then(d=>{F.value=!!d.logged})}),me(()=>{document.removeEventListener("mousemove",U),document.removeEventListener("mouseup",j)}),(d,n)=>{const a=ye("Markdown");return h(),b("div",Qe,[p("div",Xe,[p("div",Ze,[v(N,{path:k.value==="assistant"?i(re):i(le)},null,8,["path"]),C(" Smart Console ")]),p("div",et,[p("div",tt,[v(Ye,{"has-changes":y.value},null,8,["has-changes"])]),p("div",{class:"toggle-button",onClick:I},[v(N,{class:P(["icon",{open:w.value}]),path:i(ce),fill:"#fff"},null,8,["class","path"]),f.value.type==="unseen"?(h(),b("div",{key:0,class:"unseen-count","unseen-severity":f.value.severity},V(f.value.count),9,st)):M("",!0)])])]),w.value?(h(),b("div",{key:0,class:"terminal",style:Me(c.value)},[p("div",{class:"resize-handler",onMousedown:q},null,32),p("div",ot,[p("div",nt,[p("div",{ref_key:"entriesContainer",ref:r,class:"entries"},[at,(h(!0),b(oe,null,Ie(t.logService.logs,(_,x)=>(h(),b("div",{key:x,class:P([_.type,"entry"])},[_.type==="ai-output"?(h(),W(a,{key:0,source:_.log},null,8,["source"])):(h(),b("div",it,V(_.type==="restart"?"-- restarted --":_.log),1))],2))),128))],512),p("div",rt,[v(N,{class:P(["icon",{open:w.value}]),path:i(ce)},null,8,["class","path"]),p("div",{ref_key:"inputRef",ref:g,class:"input-text",contenteditable:"","pointer-events":O.value?"none":"auto",placeholder:"Ask AI anything",onKeydown:xe(T,["enter"])},null,40,lt)])]),p("div",ct,[p("div",{class:"icons",onClick:L},[v(N,{class:"icon",path:i(Fe)},null,8,["path"])]),p("div",null,[v(N,{class:"icon clickable",path:k.value==="assistant"?i(re):i(le),onClick:n[0]||(n[0]=_=>A())},null,8,["path"])])])])],4)):M("",!0)])}}});const Bt=Z(dt,[["__scopeId","data-v-9d2d7cb6"]]),ut=z({__name:"PathInput",props:{runtime:{}},setup(o){const e=o,t=m(!1),s=async()=>{t.value=!0;const l=await(await fetch("/_editor/api/utils/normalize_path",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:e.runtime.path})})).text();l&&l!==e.runtime.path&&(e.runtime.path=l),t.value=!1};return(r,l)=>(h(),W(i(Ce),{value:r.runtime.path,"onUpdate:value":l[0]||(l[0]=f=>r.runtime.path=f),type:"text",disabled:t.value,onBlur:s},Oe({_:2},[r.runtime instanceof i(We)?{name:"addonBefore",fn:u(()=>[C(" https://[your-subdomain].abstra.app/_hooks/ ")]),key:"0"}:{name:"addonBefore",fn:u(()=>[C(" https://[your-subdomain].abstra.app/ ")]),key:"1"}]),1032,["value","disabled"]))}}),pt={key:1},ht=z({__name:"RuntimeCommonSettings",props:{runtime:{}},setup(o){const e=he({pathError:null});return(t,s)=>(h(),b(oe,null,[t.runtime instanceof i($e)||t.runtime instanceof i(Te)?M("",!0):(h(),W(i(we),{key:0,label:"URL path"},{default:u(()=>[v(ut,{runtime:t.runtime},null,8,["runtime"])]),_:1})),e.pathError?(h(),b("div",pt,V(e.pathError),1)):M("",!0)],64))}});const Wt=Z(ht,[["__scopeId","data-v-60a397e0"]]);let X={};function ft(o){return o in X?"\n\n```python\n"+o+" = "+X[o]+"\n```":""}Ne.registerHoverProvider("python",{provideHover:function(o,e){const t=o.getWordAtPosition(e);if(!!t)return{contents:[{value:ft(t.word)}]}}});const vt=(o,e,t={})=>{var R;const s=G.create(o,{language:"python",value:e,minimap:{enabled:!1},readOnly:(R=t.readOnly)!=null?R:!1,contextmenu:!t.readOnly,automaticLayout:!t.readOnly,tabSize:4,fixedOverflowWidgets:!0,theme:t.theme?t.theme:"vs",fontFamily:"monospace",lineNumbers:"on",scrollBeyondLastColumn:t.readOnly?0:5,scrollBeyondLastLine:!t.readOnly,renderLineHighlight:t.readOnly?"none":"all",scrollbar:{useShadows:!1,alwaysConsumeMouseWheel:!1}}),r=s.getContribution("editor.contrib.messageController");s.onDidAttemptReadOnlyEdit(()=>{r.showMessage("Cannot edit during preview execution",s.getPosition())});const l=s.createDecorationsCollection([]),f=(y,I)=>{l.set(y.map(g=>({range:new Ve(g.lineno,1,g.lineno,1),options:{isWholeLine:!0,className:I}}))),X=y.reduce((g,k)=>({...g,...k.locals}),{})};return{editor:s,highlight:(y,I)=>g=>{var $,E;const T=((E=($=g.debug)==null?void 0:$.stack)!=null?E:[]).filter(L=>L.filename.endsWith(I));f(T,y)},clearHighlights:()=>{l.clear(),X={}},setReadOnly:y=>{s.updateOptions({readOnly:y})}}},gt=(o,e,t)=>{const s=G.createModel(e),r=G.createModel(t),l=G.createDiffEditor(o,{minimap:{enabled:!1},readOnly:!0,contextmenu:!1,automaticLayout:!0,renderWhitespace:"none",guides:{indentation:!1},fontFamily:"monospace",lineNumbers:"on",scrollBeyondLastColumn:0,scrollBeyondLastLine:!1,renderLineHighlight:"none"});return l.setModel({original:s,modified:r}),{diffEditor:l}};class _t{constructor(e,t){S(this,"_script");S(this,"_localEditorCode");S(this,"_monacoEditor");S(this,"_diffEditor");S(this,"_viewMode");S(this,"_alertMessage");S(this,"_conflictingChanges");this._localEditorCode=e,this._script=t,this._monacoEditor=null,this._diffEditor=null,this._viewMode=Y("editor"),this._alertMessage=Y(""),this._conflictingChanges=Y(!1)}get alertMessage(){return this._alertMessage.value}set alertMessage(e){this._alertMessage.value=e}get conflictingChanges(){return this._conflictingChanges.value}set conflictingChanges(e){this._conflictingChanges.value=e}get viewMode(){return this._viewMode.value}set viewMode(e){this._viewMode.value=e}get abstraIDECode(){return this._script.codeContent}get localEditorCode(){return this._localEditorCode}set monacoEditor(e){this._monacoEditor=e}set diffEditor(e){this._diffEditor=e}finishPreview(){var e;this._viewMode.value="editor",this._script.codeContent=this._localEditorCode,(e=this._monacoEditor)==null||e.setValue(this._localEditorCode),this._script.save("code_content"),this._script.updateInitialState("code_content",this._localEditorCode),this.alertMessage=""}updateCodeWhileEditing(e){var r;const t=e!==this._localEditorCode;if(this._localEditorCode=e,e===this._script.codeContent){this.alertMessage="",this.conflictingChanges=!1;return}const s=!this._script.hasChanges("code_content");if(s){(r=this._monacoEditor)==null||r.setValue(e),this._script.codeContent=e,this._script.updateInitialState("code_content",e);return}if(!s&&t){this.alertMessage="You have conflicting changes with your local editor code",this.conflictingChanges=!0;return}}updateCodeWhileDiff(e){var t,s;if(e===this._script.codeContent){this.alertMessage="",this.conflictingChanges=!1,this.viewMode="editor",this._localEditorCode=e;return}if(e!==this._localEditorCode){(s=(t=this._diffEditor)==null?void 0:t.getModel())==null||s.modified.setValue(e),this._localEditorCode=e;return}}updateCodeWhilePreview(e){if(this._localEditorCode=e,e===this._script.codeContent){this.alertMessage="";return}this.alertMessage="The changes on your code will be shown after the preview stops running"}updateCode(e){switch(this._viewMode.value){case"editor":return this.updateCodeWhileEditing(e);case"diff":return this.updateCodeWhileDiff(e);case"preview":return this.updateCodeWhilePreview(e)}}keepAbstraIDECode(){var e;(e=this._monacoEditor)==null||e.setValue(this._script.codeContent),this._script.save("code_content"),this._script.updateInitialState("code_content",this._script.codeContent),this._localEditorCode=this._script.codeContent,this.conflictingChanges=!1,this.alertMessage="",this.viewMode="editor"}keepLocalEditor(){var e;(e=this._monacoEditor)==null||e.setValue(this._localEditorCode),this._script.updateInitialState("code_content",this._localEditorCode),this.conflictingChanges=!1,this.alertMessage="",this.viewMode="editor"}}const mt={class:"container"},yt=z({__name:"SourceCode",props:{script:{},workspace:{},broker:{}},emits:["update-file"],setup(o,{expose:e,emit:t}){const s=o,r=()=>{!s.script.file||s.workspace.openFile(s.script.file)},l=()=>{c.value.viewMode="diff",j()},f=m(null),O=m(null);let F,A,R,y;const{result:I}=de(()=>fetch("/_editor/api/workspace/root").then(n=>n.text())),g=m(s.script.file);se(()=>s.script.file,()=>g.value=s.script.file);const{result:k,refetch:T}=de(()=>Le.checkFile(g.value)),$=()=>{E.value.valid?t("update-file",Pe(g.value)):t("update-file",g.value),T()},E=Q(()=>{var a;const n=He(g.value);return n.valid?((a=k.value)==null?void 0:a.exists)&&s.script.hasChanges("file")?{valid:!0,help:"This file already exists"}:s.script.hasChanges("file")?{valid:!0,help:"The original file will be renamed"}:n:n}),L=()=>{!s.workspace||!I.value||s.workspace.openFile(".")},w=m(!1),K=async()=>{var a;if(!s.script.file)return;const n=await s.workspace.readFile(s.script.file);if(n===null){w.value=!0;return}w.value=!1,(a=c.value)==null||a.updateCode(n)},c=Y(null);let H;_e(()=>{U(),H=setInterval(K,1e3)}),me(()=>{clearInterval(H)}),se(()=>s.broker,()=>{A(),q()});const q=()=>{var n,a,_;(n=s.broker)==null||n.on("start",()=>{y(!0),c.value.viewMode="preview"}),(a=s.broker)==null||a.on("form",R("executing-line",s.script.file)),(_=s.broker)==null||_.on("program:end",x=>{var D;(D=c.value)==null||D.finishPreview(),y(!1),x.exception?R("error-line",s.script.file)(x):A()})},U=async()=>{await ge(),s.workspace.readFile(s.script.file).then(n=>{if(n===null)return;s.script.codeContent=n,s.script.updateInitialState("code_content",n),c.value=new _t(n,s.script);const a=vt(f.value,n);A=a.clearHighlights,R=a.highlight,y=a.setReadOnly,q(),F=a.editor,c.value.monacoEditor=F,F.onDidChangeModelContent(()=>{s.script.codeContent=F.getValue()})})},j=async()=>{const n=await s.workspace.readFile(s.script.file);if(!n)return;const a=s.script.codeContent,_=gt(O.value,a,n);c.value.diffEditor=_.diffEditor};return e({restartEditor:()=>{var n;A(),y(!1),(n=c.value)==null||n.finishPreview()}}),(n,a)=>{var x,D,ne,ae;const _=ye("icon");return h(),b(oe,null,[v(i(we),{"validate-status":E.value.valid?"success":"error",help:E.value.valid?E.value.help:E.value.reason},{default:u(()=>[v(i(Ce),{value:n.script.file,"onUpdate:value":a[0]||(a[0]=B=>n.script.file=B),onBlur:$},{addonBefore:u(()=>[i(I)?(h(),b("span",{key:0,class:"clickable",onClick:L},[v(_,{path:i(Re)},null,8,["path"]),p("span",null,V(i(I)),1)])):M("",!0)]),addonAfter:u(()=>[p("span",{class:"clickable",onClick:r},[C(" Open in editor "),v(_,{path:i(Ae),width:"22"},null,8,["path"])])]),_:1},8,["value"])]),_:1},8,["validate-status","help"]),(x=c.value)!=null&&x.alertMessage?(h(),W(i(ze),{key:0,type:"warning","show-icon":""},{message:u(()=>{var B;return[C(V((B=c.value)==null?void 0:B.alertMessage),1)]}),action:u(()=>[c.value.conflictingChanges&&c.value.viewMode!=="diff"?(h(),W(i(ue),{key:0,gap:"small"},{default:u(()=>[v(i(J),{type:"primary",onClick:l},{default:u(()=>[C("Compare")]),_:1}),v(i(ee),null,{title:u(()=>[C("Keep the local editor version")]),default:u(()=>[v(i(J),{onClick:a[1]||(a[1]=B=>c.value.keepLocalEditor())},{default:u(()=>[C("Discard")]),_:1})]),_:1})]),_:1})):M("",!0),c.value.conflictingChanges&&c.value.viewMode==="diff"?(h(),W(i(ue),{key:1,gap:"small"},{default:u(()=>[v(i(ee),null,{title:u(()=>[C("Keep your current changes")]),default:u(()=>[v(i(J),{onClick:a[2]||(a[2]=B=>c.value.keepAbstraIDECode())},{default:u(()=>[C("Keep left")]),_:1})]),_:1}),v(i(ee),null,{title:u(()=>[C("Keep the local editor version")]),default:u(()=>[v(i(J),{onClick:a[3]||(a[3]=B=>c.value.keepLocalEditor())},{default:u(()=>[C("Keep right")]),_:1})]),_:1})]),_:1})):M("",!0)]),_:1})):M("",!0),p("div",mt,[p("div",{id:"code",ref_key:"codeComponent",ref:f,class:P(["code-container",{hide:((D=c.value)==null?void 0:D.viewMode)==="diff",blur:w.value}])},null,2),w.value?(h(),W(i(Ke),{key:0,class:"not-found-popup"},{title:u(()=>[C("File not found")]),_:1})):M("",!0)]),((ne=c.value)==null?void 0:ne.viewMode)==="diff"?(h(),b("div",{key:1,id:"code",ref_key:"codeDiffComponent",ref:O,class:P(["code-container",{hide:((ae=c.value)==null?void 0:ae.viewMode)!=="diff"}])},null,2)):M("",!0)],64)}}});const $t=Z(yt,[["__scopeId","data-v-975dd1bf"]]);export{be as L,Wt as R,$t as S,Bt as a};
//# sourceMappingURL=SourceCode.a4799efd.js.map
