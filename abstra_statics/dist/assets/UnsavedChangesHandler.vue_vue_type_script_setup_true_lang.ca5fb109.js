var ye=Object.defineProperty;var be=(s,e,t)=>e in s?ye(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var V=(s,e,t)=>(be(s,typeof e!="symbol"?e+"":e,t),t);import{d as $,E as M,F as A,ex as we,b as l,c as u,bu as h,aS as H,eF as G,er as o,eu as C,eA as S,e as w,eQ as Ce,bh as O,eB as K,eC as j,t as x,es as ke,U as Se,o as D,a as oe,c2 as L,bw as ae,ez as re,ew as T,u as ie,V as $e,aT as Ie,r as f,ey as Ee,G as le,a1 as Te,J as ce,I as E,et as xe,eR as Re,eS as Le,eT as Me}from"./registerWidgets.ff0e603c.js";import{p as Ae,k as Q,n as X,o as Z,q as De}from"./icons.e90de051.js";import{a as ee}from"./asyncComputed.47db4727.js";import{F as Ue}from"./forms.21b47742.js";import{D as Be}from"./dashes.ae356330.js";import{H as Fe}from"./hooks.eec847d2.js";import{J as te}from"./jobs.875f4f93.js";import{W as Ne}from"./workspaces.145b71db.js";import{u as W}from"./uuid.0307a1d7.js";import{L as Pe}from"./DocsButton.73363d5d.js";import{S as se}from"./storage.db287aee.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="3181540f-c530-4253-9d12-b9372a15e60c",s._sentryDebugIdIdentifier="sentry-dbid-3181540f-c530-4253-9d12-b9372a15e60c")}catch{}})();const ue=s=>(K("data-v-0dfc8705"),s=s(),j(),s),Ve={class:"runtime-settings"},ze={key:0,class:"field"},He=ue(()=>o("div",{class:"label"},"Path",-1)),We={class:"field"},Oe=ue(()=>o("div",{class:"label"},"Code",-1)),Ke={class:"input-row"},je={key:1,class:"root-path loading"},Je={class:"path-feedback"},Ye={key:1,class:"error"},qe=$({__name:"RuntimeCommonSettings",props:{runtime:{}},setup(s){const e=s,t=M({pathError:null}),{result:n}=ee(()=>Ne.get()),r=()=>{!n.value||!e.runtime.file||n.value.openFile(e.runtime.file)},a=A(()=>{var i;return(i=e.runtime.file)!=null&&i.endsWith(".py")?null:"It should be a .py file"}),c=()=>{!n.value||!p.value||n.value.openFile(".")},d=we(),{result:p}=ee(()=>fetch("/_editor/api/workspace/root-path").then(i=>i.text()));return e.runtime.onUpdate(i=>{if(e.runtime instanceof te||!i||!("path"in i)||!(i!=null&&i.path))return;const g=[{runtime:Ue,basePath:"form"},{runtime:Fe,basePath:"hook"},{runtime:Be,basePath:"dash"}].find(U=>e.runtime instanceof U.runtime);if(!g)throw new Error(`Unknown runtime type ${e.runtime}`);d.push({path:`/_editor/${g.basePath}/${encodeURIComponent(i.path)}`})}),(i,_)=>(l(),u("div",Ve,[i.runtime instanceof h(te)?C("",!0):(l(),u("div",ze,[He,H(o("input",{"onUpdate:modelValue":_[0]||(_[0]=g=>i.runtime.path=g),class:"path-input",type:"text"},null,512),[[G,i.runtime.path]])])),o("div",We,[Oe,o("div",Ke,[h(p)?(l(),u("button",{key:0,class:"root-path",onClick:_[1]||(_[1]=g=>c())},S(h(p)),1)):(l(),u("span",je," Loading... ")),H(o("input",{"onUpdate:modelValue":_[2]||(_[2]=g=>i.runtime.file=g),type:"text"},null,512),[[G,i.runtime.file]]),o("button",{class:"open-file-icon",onClick:_[3]||(_[3]=g=>r())},[w(Ce,{path:h(Ae)},null,8,["path"]),O(" Open in editor ")])]),o("div",Je,S(a.value),1)]),t.pathError?(l(),u("div",Ye,S(t.pathError),1)):C("",!0)]))}});const Pt=x(qe,[["__scopeId","data-v-0dfc8705"]]),Ge={class:"tab-menu"},Qe={class:"tabs"},Xe={key:0,class:"group"},Ze={class:"group"},et=["onClick"],tt={key:1,class:"group"},st={class:"content"},nt=$({__name:"TabMenuUnderline",setup(s){const e=M([]),t=ke(),n=a=>{const c=d=>d==a;e.forEach((d,p)=>{d.isActive=c(p)})},r=A(()=>e.findIndex(a=>a.isActive));return Se("addTab",a=>{e.push(a)}),D(()=>{n(0)}),(a,c)=>{const d=oe("icon");return l(),u("div",Ge,[o("div",Qe,[h(t).left?(l(),u("div",Xe,[L(a.$slots,"left",{},void 0,!0)])):C("",!0),o("div",Ze,[(l(!0),u(ae,null,re(e,(p,i)=>(l(),u("button",{key:p.title,class:T(["form-tab",r.value==i&&"active"]),onClick:_=>n(i)},[p.icon?(l(),ie(d,{key:0,path:p.icon,fill:"#8692A5",width:"10",height:"10"},null,8,["path"])):C("",!0),O(" "+S(p.title),1)],10,et))),128))]),h(t).right?(l(),u("div",tt,[L(a.$slots,"right",{},void 0,!0)])):C("",!0)]),o("div",st,[L(a.$slots,"default",{},void 0,!0)])])}}});const Vt=x(nt,[["__scopeId","data-v-60b2affa"]]),ot={class:"tab"},at=$({__name:"Tab",props:{title:{},icon:{}},setup(s){const e=s,t=M({isActive:!1,title:e.title,icon:e.icon}),n=$e("addTab");return D(()=>{n(t)}),(r,a)=>H((l(),u("div",ot,[L(r.$slots,"default",{},void 0,!0)],512)),[[Ie,t.isActive]])}});const zt=x(at,[["__scopeId","data-v-9c2e92c2"]]);class de{constructor(){V(this,"logState",M({log:[]}));V(this,"_listeners",{})}static create(){return new de}get logs(){return this.logState.log}log(e,t){if(e.type!=="restart"&&e.log.trim()==="")return;const n=t?this.logs.find(r=>r.id===t):null;return n?Object.assign(n,e):this.logs.push({...e,id:t||W()}),this.notifyListeners(e),t}clear(){this.logState.log=[]}listen(e){const t=W();return this._listeners[t]=e,t}unlisten(e){delete this._listeners[e]}notifyListeners(e){Object.values(this._listeners).forEach(t=>t(e))}}class rt{static async*sendMessage(e,t){var a;const r=(a=(await fetch("/_editor/api/ai/message",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:e,runtime:t})})).body)==null?void 0:a.getReader();if(!r)throw new Error("No response body");for(;;){const c=await r.read();if(c.done)break;yield new TextDecoder().decode(c.value)}}}const it=s=>(K("data-v-59ca7295"),s=s(),j(),s),lt=it(()=>o("div",{class:"text"}," Changes were made in your code. Click Restart to refresh the preview window. ",-1)),ne="ignoreCodeChangesWarning",ct=$({__name:"ChangesWarning",props:{hasChanges:{type:Boolean}},setup(s){var a;const e=s,t=f((a=se.get(ne))!=null?a:!1),n=A(()=>e.hasChanges&&!t.value),r=()=>{se.set(ne,!0),t.value=!0};return(c,d)=>(l(),u("div",{class:T(["changes-warning",{visible:n.value}])},[lt,o("div",{class:"no-more-alert",onClick:r},"Do not show again")],2))}});const ut=x(ct,[["__scopeId","data-v-59ca7295"]]),dt=s=>(K("data-v-64b9b09a"),s=s(),j(),s),pt={class:"smart-console"},vt={class:"header"},ht={class:"left"},_t={class:"right"},ft={class:"changes-container"},gt=["unseen-severity"],mt={class:"cli"},yt={class:"left"},bt=dt(()=>o("div",{class:"entry ai-output"}," Hello there! I'm both an output console and AI assistant. You can ask me anything. ",-1)),wt={key:1,class:"local-entry"},Ct={class:"input"},kt=["pointer-events","onKeydown"],St={class:"right"},$t=$({__name:"SmartConsole",props:{inputEnabled:{type:Boolean},formCode:{},runtime:{},logService:{}},emits:["eval-request","clear-terminal","restart","enter"],setup(s,{expose:e,emit:t}){const n=s,r=f(""),a=f(null),c=Ee(),d=f({type:"seen"}),p=f(!1),i=f(!1),_=()=>{n.logService.clear(),B.value=!1,t("restart")},g=()=>{I.value=I.value==="assistant"?"debugger":"assistant"};function U(v){switch(v.type){case"ai-input":return{role:"user",content:v.log};case"ai-output":return{role:"assistant",content:v.log};case"stderr":case"stdout":return{role:"user",content:v.log};case"restart":return{role:"user",content:"-- new session --"};default:throw new Error(`Unknown log type: ${v.type}`)}}const B=f(!1);function pe(){b.value=!b.value,b.value&&(d.value={type:"seen"})}le(c,()=>{n.logService.clear(),t("clear-terminal")});const R=f(null),I=f("assistant"),ve=async v=>{var y;if(v.preventDefault(),r.value=((y=R.value)==null?void 0:y.innerText)||"",v.shiftKey){document.execCommand("insertLineBreak");return}R.value&&(R.value.innerText=""),I.value==="assistant"?await he():await _e()},he=async()=>{var y;if(t("enter",r.value),n.logService.log({type:"ai-input",log:r.value}),r.value="",!i.value){n.logService.log({type:"stderr",log:"Please login to use the AI assistant."});return}p.value=!0;const v={role:"user",content:(y=n.formCode)!=null?y:""};try{const k=W();let m="";const N=rt.sendMessage([v,...n.logService.logs.map(P=>U(P)),{role:"user",content:r.value}],n.runtime);for await(const P of N)m+=P,n.logService.log({type:"ai-output",log:m},k)}catch(k){n.logService.log({type:"ai-output",log:"Sorry, I don't know how to answer that."}),console.error(k),Le(k)}finally{p.value=!1}};e({filesChanged:()=>{B.value=!0}});const _e=async()=>{r.value&&(n.logService.log({type:"eval-input",log:`>>> ${r.value}`}),t("eval-request",r.value),r.value="")},fe=()=>{n.logService.clear()};n.logService.listen(async v=>{b.value||(d.value={type:"unseen",count:d.value.type==="unseen"?d.value.count+1:1,severity:v.type==="stderr"?"error":"info"}),v.type!=="restart"&&(await Te(),a.value&&(a.value.scrollTop=a.value.scrollHeight))});const b=f(!1),J=f(400),ge=A(()=>({height:`${J.value}px`})),F=f(!1),me=()=>F.value=!0,Y=v=>{!F.value||(J.value=document.body.clientHeight-v.clientY)},q=()=>F.value=!1;return D(()=>{document.addEventListener("mousemove",Y),document.addEventListener("mouseup",q),Pe.get().then(v=>i.value=!!v)}),ce(()=>{document.removeEventListener("mousemove",Y),document.removeEventListener("mouseup",q)}),(v,y)=>{const k=oe("Markdown");return l(),u("div",pt,[o("div",vt,[o("div",ht,[w(E,{path:I.value==="assistant"?h(Q):h(X)},null,8,["path"]),O(" Smart Console ")]),o("div",_t,[o("div",ft,[w(ut,{"has-changes":B.value},null,8,["has-changes"]),o("button",{class:"header-button",onClick:_},"Restart")]),o("div",{class:"toggle-button",onClick:pe},[w(E,{class:T(["icon",{open:b.value}]),path:h(Z),fill:"#fff"},null,8,["class","path"]),d.value.type==="unseen"?(l(),u("div",{key:0,class:"unseen-count","unseen-severity":d.value.severity},S(d.value.count),9,gt)):C("",!0)])])]),b.value?(l(),u("div",{key:0,class:"terminal",style:xe(ge.value)},[o("div",{class:"resize-handler",onMousedown:me},null,32),o("div",mt,[o("div",yt,[o("div",{ref_key:"entriesContainer",ref:a,class:"entries"},[bt,(l(!0),u(ae,null,re(n.logService.logs,(m,N)=>(l(),u("div",{key:N,class:T([m.type,"entry"])},[m.type==="ai-output"?(l(),ie(k,{key:0,source:m.log},null,8,["source"])):(l(),u("div",wt,S(m.type==="restart"?"-- restarted --":m.log),1))],2))),128))],512),o("div",Ct,[w(E,{class:T(["icon",{open:b.value}]),path:h(Z)},null,8,["class","path"]),o("div",{ref_key:"inputRef",ref:R,class:"input-text",contenteditable:"","pointer-events":p.value?"none":"auto",placeholder:"Ask AI anything",onKeydown:Re(ve,["enter"])},null,40,kt)])]),o("div",St,[o("div",{class:"icons",onClick:fe},[w(E,{class:"icon",path:h(De)},null,8,["path"])]),o("div",null,[w(E,{class:"icon clickable",path:I.value==="assistant"?h(Q):h(X),onClick:y[0]||(y[0]=m=>g())},null,8,["path"])])])])],4)):C("",!0)])}}});const Ht=x($t,[["__scopeId","data-v-64b9b09a"]]),It={class:"unsaved-changes-handler"},z="You have unsaved changes. Are you sure you want to leave?",Wt=$({__name:"UnsavedChangesHandler",props:{hasChanges:{type:Boolean}},setup(s){const e=s,t=c=>(c=c||window.event,c&&(c.returnValue=z),z),n=()=>{window.addEventListener("beforeunload",t)};Me((c,d,p)=>{if(!e.hasChanges)return p();confirm(z)?p():p(!1)});const r=()=>window.removeEventListener("beforeunload",t),a=c=>c?n():r();return le(()=>e.hasChanges,a),D(()=>a(e.hasChanges)),ce(r),(c,d)=>(l(),u("div",It))}});export{de as L,Pt as R,Ht as S,Vt as T,Wt as _,zt as a};
//# sourceMappingURL=UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.ca5fb109.js.map
