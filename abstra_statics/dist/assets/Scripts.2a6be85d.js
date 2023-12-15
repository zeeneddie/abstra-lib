import{d as A,G as k,a as le,b as p,c as f,w as t,f as a,u as e,aq as u,eD as M,bh as we,bf as ee,ey as ke,bM as Se,ex as F,v as G,e as h,eE as K,eF as Q,ev as U,ai as Fe,cy as H,ah as P,eL as O,H as Ce,r as W,bH as te,bO as L,ad as Ie,eC as ne,cB as Te,bq as Y,eM as Ae,eA as xe,c4 as $e}from"./outputWidgets.31ce2d5c.js";import{F as x}from"./forms.93a606b8.js";import{H as $}from"./hooks.5d5964c0.js";import{S as E,J as D}from"./scripts.77407c5b.js";import{W as re}from"./workspaces.f1f3f168.js";import{a as z}from"./asyncComputed.7e3e21f4.js";import{a as ae}from"./ant-design.feb03817.js";import{f as ie,a as ce,s as pe,j as ue,b as Ne,d as Me}from"./icons.266b547d.js";import{A as I}from"./index.ee176ac7.js";import"./index.5b04e27a.js";import{a as C,A as V}from"./Text.46c5bec2.js";import{C as de}from"./Card.5114c300.js";import{_ as se}from"./DocsButton.vue_vue_type_script_setup_true_lang.69a7fe72.js";import"./index.3e9e5589.js";import{a as Ue}from"./Base.eeda2dae.js";import{n as Ee}from"./string.e57cb081.js";import{A as q}from"./FormItem.5f0b61bf.js";import{A as De}from"./index.5765ee72.js";import{F as fe}from"./Form.482980d3.js";import{M as je}from"./Modal.32a7843c.js";import{A as Be}from"./Title.951eccc5.js";import"./record.b2148451.js";import"./pubsub.2d9ab3f4.js";import"./url.94a5ee71.js";import"./index.7e964756.js";import"./index.f5ad86a0.js";import"./TabPane.b9a32e73.js";import"./hasIn.932773c2.js";import"./Link.c257b01e.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[n]="70e4f8b7-4b76-4ff4-8f1c-60005f6a53dc",l._sentryDebugIdIdentifier="sentry-dbid-70e4f8b7-4b76-4ff4-8f1c-60005f6a53dc")}catch{}})();const He=A({__name:"ScriptCard",props:{script:{},workspace:{}},emits:["delete","go-to-script"],setup(l,{emit:n}){const s=l,d=async()=>{if(await ae("Are you sure you want to delete this script?")){const i=await ae("Do you want to delete the .py file associated with this script?",{okText:"Yes",cancelText:"No"});n("delete",s.script.id,i)}},v=()=>{s.script instanceof x&&n("go-to-script",s.script.id,"form"),s.script instanceof $&&n("go-to-script",s.script.id,"hook"),s.script instanceof E&&n("go-to-script",s.script.id,"script"),s.script instanceof D&&n("go-to-script",s.script.id,"job")},g=k(()=>{if(s.script instanceof x)return ie;if(s.script instanceof $)return ce;if(s.script instanceof E)return pe;if(s.script instanceof D)return ue;throw new Error("Invalid script type")}),_=()=>{!s.script.file||!s.workspace||s.workspace.openFile(s.script.file)};return(i,m)=>{const b=le("icon");return p(),f(e(de),{key:i.script.title,class:"script-card",onClick:v},{title:t(()=>[a(e(I),{gap:"small"},{default:t(()=>[a(b,{path:g.value},null,8,["path"]),a(e(C),{ellipsis:!0,style:{"max-width":"150px"}},{default:t(()=>[u(M(i.script.title),1)]),_:1})]),_:1})]),extra:t(()=>[a(e(Se),{trigger:["click"],onClick:m[0]||(m[0]=ke(()=>{},["stop"]))},{overlay:t(()=>[a(e(we),null,{default:t(()=>[a(e(ee),{onClick:_},{default:t(()=>[u("Open .py file")]),_:1}),a(e(ee),{danger:"",onClick:d},{default:t(()=>[u("Delete")]),_:1})]),_:1})]),default:t(()=>[a(b,{path:e(Ne),style:{cursor:"pointer"}},null,8,["path"])]),_:1})]),default:t(()=>[i.script instanceof e(x)||i.script instanceof e($)?(p(),f(e(I),{key:0,gap:"small"},{default:t(()=>[a(e(C),{type:"secondary"},{default:t(()=>[u("URL path:")]),_:1}),a(e(C),{ellipsis:!0,style:{"max-width":"150px"}},{default:t(()=>[u("/"+M(i.script.path),1)]),_:1})]),_:1})):F("",!0),a(e(I),{gap:"12"},{default:t(()=>[a(e(I),{gap:"small"},{default:t(()=>[a(e(C),{type:"secondary"},{default:t(()=>[u("Code:")]),_:1}),a(e(C),{ellipsis:!0,style:{"max-width":"125px"}},{default:t(()=>[u(M(i.script.file),1)]),_:1})]),_:1})]),_:1})]),_:1})}}});const Pe=G(He,[["__scopeId","data-v-f082da55"]]),Oe=l=>(K("data-v-14680ef5"),l=l(),Q(),l),Ve={class:"card-content"},qe=Oe(()=>h("span",null,"New",-1)),ze=A({__name:"NewScriptCard",setup(l){return(n,s)=>{const d=le("icon");return p(),f(e(de),{class:"new-script-card"},{default:t(()=>[h("div",Ve,[a(d,{path:e(Me)},null,8,["path"]),qe])]),_:1})}}});const Ge=G(ze,[["__scopeId","data-v-14680ef5"]]),J=l=>(K("data-v-b0d14829"),l=l(),Q(),l),Je={key:0,class:"choose-type"},Re={class:"option-content"},Le=J(()=>h("span",null,"Forms",-1)),We={class:"option-content"},Ye=J(()=>h("span",null,"Hooks",-1)),Ke={class:"option-content"},Qe=J(()=>h("span",null,"Scripts",-1)),Xe={class:"option-content"},Ze=J(()=>h("span",null,"Jobs",-1)),et=A({__name:"ChooseScriptType",props:{state:{}},emits:["choose-type"],setup(l,{emit:n}){const s=l,d=k(()=>s.state.type==="form"?"#fff":void 0),v=k(()=>s.state.type==="hook"?"#fff":void 0),g=k(()=>s.state.type==="script"?"#fff":void 0),_=k(()=>s.state.type==="job"?"#fff":void 0),i=m=>n("choose-type",m);return(m,b)=>m.state.state==="choosing-type"?(p(),U("div",Je,[a(e(I),{vertical:"",gap:"30"},{default:t(()=>[a(e(Ue),null,{default:t(()=>[u("Choose your script type")]),_:1}),a(e(Fe),{value:m.state.type,"onUpdate:value":[b[0]||(b[0]=o=>m.state.type=o),i],size:"large","button-style":"solid"},{default:t(()=>[a(e(I),{gap:"24",vertical:""},{default:t(()=>[a(e(I),{gap:"24"},{default:t(()=>[a(e(H),{placement:"left",title:"Forms"},{content:t(()=>[a(e(V),null,{default:t(()=>[u(" Use to collect user input via interaction with a form interface ")]),_:1}),a(se,{path:"forms/overview"})]),default:t(()=>[a(e(P),{value:"form",class:"option"},{default:t(()=>[h("div",Re,[(p(),f(O,{key:d.value,path:e(ie),fill:d.value},null,8,["path","fill"])),Le])]),_:1})]),_:1}),a(e(H),{placement:"right",title:"Hooks"},{content:t(()=>[a(e(V),null,{default:t(()=>[u("Use to build endpoints triggered by HTTP requests")]),_:1}),a(se,{path:"forms/overview"})]),default:t(()=>[a(e(P),{value:"hook",class:"option"},{default:t(()=>[h("div",We,[(p(),f(O,{key:v.value,path:e(ce),fill:v.value},null,8,["path","fill"])),Ye])]),_:1})]),_:1})]),_:1}),a(e(I),{gap:"24"},{default:t(()=>[a(e(H),{placement:"left",title:"Scripts"},{content:t(()=>[a(e(V),null,{default:t(()=>[u(" Use to write plain Python scripts ")]),_:1})]),default:t(()=>[a(e(P),{value:"script",class:"option"},{default:t(()=>[h("div",Ke,[(p(),f(O,{key:g.value,path:e(pe),fill:g.value},null,8,["path","fill"])),Qe])]),_:1})]),_:1}),a(e(H),{placement:"right",title:"Jobs"},{content:t(()=>[a(e(V),null,{default:t(()=>[u(" Use to schedule your script execution periodically ")]),_:1})]),default:t(()=>[a(e(P),{value:"job",class:"option"},{default:t(()=>[h("div",Xe,[(p(),f(O,{key:_.value,path:e(ue),fill:_.value},null,8,["path","fill"])),Ze])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["value"])]),_:1})])):F("",!0)}});const tt=G(et,[["__scopeId","data-v-b0d14829"]]);function X(l){return l.replace(/\.py$/,"").trim().length===0?{valid:!1,reason:"File name cannot be empty"}:l.length>255?{valid:!1,reason:"File name cannot be longer than 255 characters"}:l.includes("/")?{valid:!1,reason:"File name cannot contain slashes"}:l.endsWith(".py")?{valid:!0}:{valid:!1,reason:"File name must end with .py"}}function at(l){if(!X(l).valid)throw new Error("Invalid filename");const n=l.slice(0,-3);return Ee(n,!0,!0)+".py"}const st=h("br",null,null,-1),ot=A({__name:"NewScript",props:{state:{}},emits:["update-name","update-file"],setup(l,{emit:n}){const s=l,{result:d}=z(()=>fetch("/_editor/api/workspace/root").then(S=>S.text()));Ce(()=>s.state.stage.filename,()=>i.value=s.state.stage.filename);const v=k(()=>s.state.state!=="creating"?"":`${d.value}/${i.value}`),g=k(()=>s.state.state!=="creating"?"":`${s.state.stage.type[0].toUpperCase()+s.state.stage.type.slice(1)} title`),_=S=>n("update-name",S),i=W(s.state.stage.filename),{result:m,refetch:b}=z(()=>re.checkFile(i.value)),o=()=>{c.value.valid?n("update-file",at(i.value)):n("update-file",i.value),b()},c=k(()=>X(i.value));return(S,N)=>(p(),f(e(fe),{layout:"vertical"},{default:t(()=>{var j;return[a(e(q),{label:g.value,required:!0},{default:t(()=>[a(e(te),{value:S.state.stage.title,"onUpdate:value":_},null,8,["value"])]),_:1},8,["label"]),a(e(q),{label:"Generated file",required:!0,"validate-status":c.value.valid?"success":"error",help:c.value.valid?void 0:c.value.reason},{default:t(()=>[a(e(te),{value:i.value,"onUpdate:value":N[0]||(N[0]=R=>i.value=R),onBlur:o},null,8,["value"])]),_:1},8,["validate-status","help"]),a(e(q),null,{default:t(()=>[a(e(C),null,{default:t(()=>[u(" Your script will be generated at: ")]),_:1}),st,a(e(C),{code:""},{default:t(()=>[u(M(v.value),1)]),_:1})]),_:1}),(j=e(m))!=null&&j.exists?(p(),f(e(De),{key:0,type:"warning"},{message:t(()=>[a(e(C),null,{default:t(()=>[a(e(C),{strong:""},{default:t(()=>[u("Warning:")]),_:1}),u(" This file already exists. It will be used by more than one script. ")]),_:1})]),_:1})):F("",!0)]}),_:1}))}}),lt=A({__name:"CreateModal",props:{open:{type:Boolean},state:{}},emits:["close","choose-type","next-step","previous-step","create-script","update-name","update-file"],setup(l,{emit:n}){const s=l,d=c=>n("update-name",c),v=c=>n("update-file",c),g=()=>n("close"),_=c=>n("choose-type",c),i=()=>n("next-step"),m=()=>n("previous-step"),b=()=>n("create-script"),o=k(()=>!(s.state.state!=="creating"||!X(s.state.stage.filename).valid||!s.state.stage.title));return(c,S)=>(p(),f(e(je),{open:c.open,title:"Create a new script",onCancel:g},{footer:t(()=>[c.state.state==="creating"?(p(),f(e(L),{key:0,onClick:m},{default:t(()=>[u("Previous")]),_:1})):F("",!0),c.state.state==="creating"?(p(),f(e(L),{key:1,type:"primary",disabled:!o.value,onClick:b},{default:t(()=>[u(" Create ")]),_:1},8,["disabled"])):F("",!0),c.state.state==="choosing-type"?(p(),f(e(L),{key:2,type:"primary",disabled:!c.state.type,onClick:i},{default:t(()=>[u(" Next ")]),_:1},8,["disabled"])):F("",!0)]),default:t(()=>[c.state.state==="choosing-type"?(p(),f(tt,{key:0,state:c.state,onChooseType:_},null,8,["state"])):F("",!0),c.state.state==="creating"?(p(),f(ot,{key:1,state:c.state,onUpdateName:d,onUpdateFile:v},null,8,["state"])):F("",!0)]),_:1},8,["open"]))}}),nt=A({__name:"FilterScripts",emits:["update-filter"],setup(l,{emit:n}){const s=[{label:"Forms",value:"form"},{label:"Hooks",value:"hook"},{label:"Scripts",value:"script"},{label:"Jobs",value:"job"}],d=v=>n("update-filter",v);return(v,g)=>(p(),f(e(fe),null,{default:t(()=>[a(e(q),{label:"Filter"},{default:t(()=>[a(e(Ie),{mode:"multiple",style:{width:"360px"},placeholder:"All","onUpdate:value":d},{default:t(()=>[(p(),U(Y,null,ne(s,_=>a(e(Te),{key:_.value,value:_.value},{default:t(()=>[u(M(_.label),1)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1}))}}),rt=l=>(K("data-v-00f8f457"),l=l(),Q(),l),it={key:0},ct=rt(()=>h("span",null,"loading",-1)),pt=[ct],oe=100,ut=A({__name:"Scripts",setup(l){Ae(r=>({e9cb4458:he()}));const n=xe(),{loading:s,result:d,refetch:v}=z(async()=>Promise.all([x.list(),$.list(),D.list(),E.list()]).then(([r,w,y,T])=>[...r,...w,...y,...T])),g=r=>{if(r instanceof x)return"form";if(r instanceof $)return"hook";if(r instanceof D)return"job";if(r instanceof E)return"script";throw new Error("Invalid script type")},{result:_}=z(()=>re.get()),i=W([]),m=r=>{i.value=r},b=k(()=>d.value?i.value.length===0?d.value:d.value.filter(r=>i.value.includes(g(r))):[]),o=W({state:"idle"}),c=k(()=>o.value.state==="choosing-type"||o.value.state==="creating"),S=()=>{o.value={state:"choosing-type",type:null}},N=()=>{o.value={state:"idle"}},j=r=>{o.value.state==="choosing-type"&&(o.value={state:"choosing-type",type:r})},R=()=>{o.value.state==="choosing-type"&&o.value.type!==null&&(o.value={state:"creating",stage:{type:o.value.type,title:`Untitled ${o.value.type}`,filename:`untitled_${o.value.type}.py`}})},_e=()=>{o.value.state==="creating"&&(o.value={state:"choosing-type",type:o.value.stage.type})},ve=r=>{o.value.state==="creating"&&(o.value.stage.title=r)},me=r=>{o.value.state==="creating"&&(o.value.stage.filename=r)},ye=async(r,w)=>{var y,T;await((T=(y=d.value)==null?void 0:y.find(B=>B.id===r))==null?void 0:T.delete(w)),await v()},he=()=>(oe/1e3).toString()+"s",ge=async()=>{if(o.value.state!=="creating")return;let r;if(o.value.stage.type==="form"?r=await x.create(o.value.stage.title,o.value.stage.filename):o.value.stage.type==="hook"?r=await $.create(o.value.stage.title,o.value.stage.filename):o.value.stage.type==="job"?r=await D.create(o.value.stage.title,o.value.stage.filename):o.value.stage.type==="script"&&(r=await E.create(o.value.stage.title,o.value.stage.filename)),!r)throw new Error("Failed to create script");const w=r.id,y=o.value.stage.type;N(),await v(),setTimeout(()=>{Z(w,y)},oe)},Z=(r,w)=>{var y,T;if(w==="form"&&n.push({name:"formEditor",params:{id:r}}),w==="hook"&&n.push({name:"hookEditor",params:{id:r}}),w==="script"){const B=(y=d.value)==null?void 0:y.find(be=>be.id===r);if(!B)return;(T=_.value)==null||T.openFile(B.file)}w==="job"&&n.push({name:"jobEditor",params:{id:r}})};return(r,w)=>(p(),U(Y,null,[e(s)?(p(),U("span",it,pt)):F("",!0),a(e(Be),null,{default:t(()=>[u("Home")]),_:1}),a(nt,{onUpdateFilter:m}),a(e(I),{wrap:"wrap",gap:"large",class:"scripts-container"},{default:t(()=>[a($e,null,{default:t(()=>[(p(!0),U(Y,null,ne(b.value,y=>(p(),f(Pe,{key:y.title,script:y,workspace:e(_),onDelete:ye,onGoToScript:Z},null,8,["script","workspace"]))),128))]),_:1}),a(Ge,{onClick:S})]),_:1}),a(lt,{open:c.value,state:o.value,onClose:N,onChooseType:j,onNextStep:R,onPreviousStep:_e,onCreateScript:ge,onUpdateName:ve,onUpdateFile:me},null,8,["open","state"])],64))}});const Vt=G(ut,[["__scopeId","data-v-00f8f457"]]);export{Vt as default};
//# sourceMappingURL=Scripts.2a6be85d.js.map