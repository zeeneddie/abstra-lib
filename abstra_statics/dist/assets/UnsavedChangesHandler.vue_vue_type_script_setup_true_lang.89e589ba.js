import{d as T,v as le,K as O,H as ie,b as g,c as _,z as c,V as F,Y as V,x as t,D as M,N as L,e as x,ab as ue,S as Y,O as W,Q as q,q as j,r as b,R as G,ac as ce,o as Q,X,I as P,G as D,A as de,F as pe,L as ve,ad as fe,J as he,a as me,t as ye,ae as ge,af as _e}from"./registerWidgets.ad696c68.js";import{p as we,o as z,q as H,r as N,t as be}from"./icons.1c1f9d53.js";import{a as K}from"./asyncComputed.40a67fe8.js";import{F as ke}from"./forms.b1d3d225.js";import{D as Ce}from"./dashes.55442710.js";import{H as Se}from"./hooks.11fa8e4c.js";import{J}from"./jobs.519b05d4.js";import{W as Ie}from"./workspaces.d73a0523.js";import{l,u as $e}from"./log.812f9d15.js";import{L as xe}from"./login.d93a4279.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="1f71ddea-bfd7-4df2-a6e0-3f05daa34f60",e._sentryDebugIdIdentifier="sentry-dbid-1f71ddea-bfd7-4df2-a6e0-3f05daa34f60")}catch{}})();const Z=e=>(W("data-v-0dfc8705"),e=e(),q(),e),Ee={class:"runtime-settings"},Pe={key:0,class:"field"},Le=Z(()=>t("div",{class:"label"},"Path",-1)),Re={class:"field"},De=Z(()=>t("div",{class:"label"},"Code",-1)),Me={class:"input-row"},Te={key:1,class:"root-path loading"},Ue={class:"path-feedback"},Ae={key:1,class:"error"},Be=T({__name:"RuntimeCommonSettings",props:{runtime:null},setup(e){const o=e,n=le({pathError:null}),{result:a}=K(()=>Ie.get()),h=()=>{!a.value||!o.runtime.file||a.value.openFile(o.runtime.file)},w=O(()=>{var r;return(r=o.runtime.file)!=null&&r.endsWith(".py")?null:"It should be a .py file"}),m=()=>{!a.value||!C.value||a.value.openFile(".")},v=ie(),{result:C}=K(()=>fetch("/_editor/api/workspace/root-path").then(r=>r.text()));return o.runtime.onUpdate(r=>{if(o.runtime instanceof J||!r||!("path"in r)||!(r!=null&&r.path))return;const d=[{runtime:ke,basePath:"form"},{runtime:Se,basePath:"hook"},{runtime:Ce,basePath:"dash"}].find(k=>o.runtime instanceof k.runtime);if(!d)throw new Error(`Unknown runtime type ${o.runtime}`);v.push({path:`/_editor/${d.basePath}/${encodeURIComponent(r.path)}`})}),(r,y)=>(g(),_("div",Ee,[e.runtime instanceof c(J)?M("",!0):(g(),_("div",Pe,[Le,F(t("input",{"onUpdate:modelValue":y[0]||(y[0]=d=>e.runtime.path=d),class:"path-input",type:"text"},null,512),[[V,e.runtime.path]])])),t("div",Re,[De,t("div",Me,[c(C)?(g(),_("button",{key:0,class:"root-path",onClick:y[1]||(y[1]=d=>m())},L(c(C)),1)):(g(),_("span",Te," Loading... ")),F(t("input",{"onUpdate:modelValue":y[2]||(y[2]=d=>e.runtime.file=d),type:"text"},null,512),[[V,e.runtime.file]]),t("button",{class:"open-file-icon",onClick:y[3]||(y[3]=d=>h())},[x(ue,{path:c(we)},null,8,["path"]),Y(" Open in editor ")])]),t("div",Ue,L(c(w)),1)]),n.pathError?(g(),_("div",Ae,L(n.pathError),1)):M("",!0)]))}});const ut=j(Be,[["__scopeId","data-v-0dfc8705"]]);class Fe{static async*sendMessage(o,n){var w;const h=(w=(await fetch("/_editor/api/ai/message",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:o,runtime:n})})).body)==null?void 0:w.getReader();if(!h)throw new Error("No response body");for(;;){const m=await h.read();if(m.done)break;yield new TextDecoder().decode(m.value)}}}const Ve=e=>(W("data-v-3bda3e11"),e=e(),q(),e),ze={class:"smart-console"},He={class:"header"},Ne={class:"left"},Ke={class:"right"},Je={class:"cli"},Oe={class:"left"},Ye=Ve(()=>t("div",{class:"entry ai-output"}," Hello there! I'm both an output console and AI assistant. You can ask me anything. ",-1)),We={key:1,class:"local-entry"},qe={class:"input"},je=["pointer-events","onKeydown"],Ge={class:"right"},Qe=T({__name:"SmartConsole",props:{inputEnabled:{type:Boolean},dashPlayerState:null,formCode:null,runtime:null},emits:["clear-terminal","restart","enter"],setup(e,{emit:o}){const n=e,a=b(""),h=b(null),w=he(),m=b(!1),v=b(!1),C=()=>{l.clear(),o("restart")},r=()=>{k.value=k.value==="assistant"?"debugger":"assistant"};function y(s){switch(s.type){case"ai-input":return{role:"user",content:s.log};case"ai-output":return{role:"assistant",content:s.log};case"stderr":case"stdout":return{role:"user",content:s.log};case"restart":return{role:"user",content:"-- new session --"};default:throw new Error(`Unknown log type: ${s.type}`)}}G(w,()=>{l.clear(),o("clear-terminal")});const d=b(null),k=b("assistant"),ee=async s=>{var i;if(s.preventDefault(),a.value=((i=d.value)==null?void 0:i.innerText)||"",s.shiftKey){document.execCommand("insertLineBreak");return}d.value&&(d.value.innerText=""),k.value==="assistant"?await te():await se()},te=async()=>{var i;if(o("enter",a.value),l.log({type:"ai-input",log:a.value}),a.value="",!v.value){l.log({type:"stderr",log:"Please login to use the AI assistant."});return}m.value=!0;const s={role:"user",content:(i=n.formCode)!=null?i:""};try{const f=$e();let u="";const I=Fe.sendMessage([s,...l.logs.map($=>y($)),{role:"user",content:a.value}],n.runtime);for await(const $ of I)u+=$,l.log({type:"ai-output",log:u},f)}catch(f){l.log({type:"ai-output",log:"Sorry, I don't know how to answer that."}),console.error(f),ge(f)}finally{m.value=!1}},se=async()=>{a.value&&(l.log({type:"eval-input",log:`>>> ${a.value}`}),oe(a.value),a.value="")},oe=s=>{var i,f,u;(u=(i=n.dashPlayerState)==null?void 0:i.broker)==null||u.send({type:"eval",expression:s,state:(f=n.dashPlayerState)==null?void 0:f.apiPageState})};(()=>{var s,i,f,u,I,$;(s=n.dashPlayerState)==null||s.on("eval-return",p=>{p.repr&&l.log({type:"eval-output",log:p.repr})}),(i=n.dashPlayerState)==null||i.on("eval-error",p=>{l.log({type:"eval-output",log:p.repr})}),(f=n.dashPlayerState)==null||f.on("stderr",p=>{l.log({type:"stderr",log:p.log})}),(u=n.dashPlayerState)==null||u.on("stdout",p=>{l.log({type:"stdout",log:p.log})}),(I=n.dashPlayerState)==null||I.on("widgets-computed",p=>{var E;(E=p.errors)!=null&&E.general&&l.log({type:"stderr",log:p.errors.general.repr})}),($=n.dashPlayerState)==null||$.on("program-start-failed",p=>{var E;l.log({type:"stderr",log:(E=p.error)!=null?E:""})})})();const ne=()=>{l.clear()};l.listen(async s=>{s.type!=="restart"&&(S.value=!0,await ce(),h.value&&(h.value.scrollTop=h.value.scrollHeight))});const S=b(!1),U=b(400),ae=O(()=>({height:`${U.value}px`})),R=b(!1),re=()=>R.value=!0,A=s=>{!R.value||(U.value=document.body.clientHeight-s.clientY)},B=()=>R.value=!1;return Q(()=>{document.addEventListener("mousemove",A),document.addEventListener("mouseup",B),xe.get().then(s=>v.value=!!s)}),X(()=>{document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",B)}),(s,i)=>{const f=me("Markdown");return g(),_("div",ze,[t("div",He,[t("div",Ne,[x(P,{path:k.value==="assistant"?c(z):c(H)},null,8,["path"]),Y(" Smart Console ")]),t("div",Ke,[t("div",{class:"changes-container"},[t("button",{class:"header-button",onClick:C},"Restart")]),t("div",{class:"toggle-button",onClick:i[0]||(i[0]=u=>S.value=!S.value)},[x(P,{class:D(["icon",{open:S.value}]),path:c(N),fill:"#fff"},null,8,["class","path"])])])]),S.value?(g(),_("div",{key:0,class:"terminal",style:de(c(ae))},[t("div",{class:"resize-handler",onMousedown:re},null,32),t("div",Je,[t("div",Oe,[t("div",{ref_key:"entriesContainer",ref:h,class:"entries"},[Ye,(g(!0),_(pe,null,ve(c(l).logs,(u,I)=>(g(),_("div",{key:I,class:D([u.type,"entry"])},[u.type==="ai-output"?(g(),ye(f,{key:0,source:u.log},null,8,["source"])):(g(),_("div",We,L(u.type==="restart"?"-- restarted --":u.log),1))],2))),128))],512),t("div",qe,[x(P,{class:D(["icon",{open:S.value}]),path:c(N)},null,8,["class","path"]),t("div",{ref_key:"inputRef",ref:d,class:"input-text",contenteditable:"","pointer-events":m.value?"none":"auto",placeholder:"Ask AI anything",onKeydown:fe(ee,["enter"])},null,40,je)])]),t("div",Ge,[t("div",{class:"icons",onClick:ne},[x(P,{class:"icon",path:c(be)},null,8,["path"])]),t("div",null,[x(P,{class:"icon clickable",path:k.value==="assistant"?c(z):c(H),onClick:i[1]||(i[1]=u=>r())},null,8,["path"])])])])],4)):M("",!0)])}}});const ct=j(Qe,[["__scopeId","data-v-3bda3e11"]]),dt=T({__name:"UnsavedChangesHandler",props:{hasChanges:{type:Boolean}},setup(e){const o=e,n="You have unsaved changes. Are you sure you want to leave?",a=v=>(v=v||window.event,v&&(v.returnValue=n),n),h=()=>{window.addEventListener("beforeunload",a)};_e((v,C,r)=>{if(!o.hasChanges)return r();confirm(n)?r():r(!1)});const w=()=>window.removeEventListener("beforeunload",a),m=v=>v?h():w();return G(()=>o.hasChanges,m),Q(()=>m(o.hasChanges)),X(w),()=>{}}});export{ut as R,ct as S,dt as _};
//# sourceMappingURL=UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.89e589ba.js.map
