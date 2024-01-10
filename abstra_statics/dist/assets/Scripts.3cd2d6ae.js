import{d as T,G as k,a as ae,b as u,c as d,w as t,f as a,u as e,aq as c,eD as $,bh as be,bf as X,ey as we,bM as ke,ex as C,v as q,e as w,eE as Y,eF as z,ev as U,ai as Se,cy as j,ah as H,eH as P,bH as K,br as Ce,bO as R,ad as Fe,eC as se,cB as Ie,bq as L,eM as Te,eA as Ae,r as Q,c4 as xe}from"./outputWidgets.f2ae36a0.js";import{F as x}from"./forms.5e78806f.js";import{H as N,J as M,v as oe,b as Ne}from"./validations.20af43a4.js";import{W as le}from"./workspaces.f2974dab.js";import{S as D}from"./scripts.8ce37c3c.js";import{a as V}from"./asyncComputed.543cc13a.js";import{a as Z}from"./ant-design.e027ec60.js";import{f as ie,a as ne,b as re,j as pe,m as $e,c as Ue}from"./icons.630387be.js";import"./index.dd08e443.js";import{A as F,a as Me}from"./Text.17250f4c.js";import{A as I}from"./index.fca9318f.js";import{C as ce}from"./Card.00072939.js";import{_ as ee}from"./DocsButton.vue_vue_type_script_setup_true_lang.5d18dbfa.js";import{A as B,M as De,a as Ee}from"./Title.1747a412.js";import{A as O}from"./FormItem.a1fd3798.js";import{A as je}from"./index.7b7ef859.js";import{F as ue}from"./Form.47de7bd6.js";import"./index.90a1882b.js";import"./record.104738e2.js";import"./pubsub.815fdbd4.js";import"./string.fdd9fc09.js";import"./url.157ba346.js";import"./index.60f2d2be.js";import"./index.3b9262c5.js";import"./TabPane.8b5621d9.js";import"./hasIn.8c7e2228.js";import"./Link.56508356.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[i]="7e7b5b16-5b65-4de8-817c-c80434fb101e",l._sentryDebugIdIdentifier="sentry-dbid-7e7b5b16-5b65-4de8-817c-c80434fb101e")}catch{}})();const He=T({__name:"ScriptCard",props:{script:{},workspace:{}},emits:["delete","go-to-script"],setup(l,{emit:i}){const o=l,r=async()=>{if(await Z("Are you sure you want to delete this script?")){const _=await Z("Do you want to delete the .py file associated with this script?",{okText:"Yes",cancelText:"No"});i("delete",o.script.id,_)}},y=()=>{o.script instanceof x&&i("go-to-script",o.script.id,"form"),o.script instanceof N&&i("go-to-script",o.script.id,"hook"),o.script instanceof D&&i("go-to-script",o.script.id,"script"),o.script instanceof M&&i("go-to-script",o.script.id,"job")},g=k(()=>{if(o.script instanceof x)return ie;if(o.script instanceof N)return ne;if(o.script instanceof D)return re;if(o.script instanceof M)return pe;throw new Error("Invalid script type")}),f=()=>{!o.script.file||!o.workspace||o.workspace.openFile(o.script.file)};return(_,h)=>{const s=ae("icon");return u(),d(e(ce),{key:_.script.title,class:"script-card",onClick:y},{title:t(()=>[a(e(I),{gap:"small"},{default:t(()=>[a(s,{path:g.value},null,8,["path"]),a(e(F),{ellipsis:!0,style:{"max-width":"150px"}},{default:t(()=>[c($(_.script.title),1)]),_:1})]),_:1})]),extra:t(()=>[a(e(ke),{trigger:["click"],onClick:h[0]||(h[0]=we(()=>{},["stop"]))},{overlay:t(()=>[a(e(be),null,{default:t(()=>[a(e(X),{onClick:f},{default:t(()=>[c("Open .py file")]),_:1}),a(e(X),{danger:"",onClick:r},{default:t(()=>[c("Delete")]),_:1})]),_:1})]),default:t(()=>[a(s,{path:e($e),style:{cursor:"pointer"}},null,8,["path"])]),_:1})]),default:t(()=>[_.script instanceof e(x)||_.script instanceof e(N)?(u(),d(e(I),{key:0,gap:"small"},{default:t(()=>[a(e(F),{type:"secondary"},{default:t(()=>[c("URL path:")]),_:1}),a(e(F),{ellipsis:!0,style:{"max-width":"150px"}},{default:t(()=>[c("/"+$(_.script.path),1)]),_:1})]),_:1})):C("",!0),a(e(I),{gap:"12"},{default:t(()=>[a(e(I),{gap:"small"},{default:t(()=>[a(e(F),{type:"secondary"},{default:t(()=>[c("Code:")]),_:1}),a(e(F),{ellipsis:!0,style:{"max-width":"125px"}},{default:t(()=>[c($(_.script.file),1)]),_:1})]),_:1})]),_:1})]),_:1})}}});const Pe=q(He,[["__scopeId","data-v-0e55c24b"]]),Be=l=>(Y("data-v-14680ef5"),l=l(),z(),l),Oe={class:"card-content"},Ve=Be(()=>w("span",null,"New",-1)),qe=T({__name:"NewScriptCard",setup(l){return(i,o)=>{const r=ae("icon");return u(),d(e(ce),{class:"new-script-card"},{default:t(()=>[w("div",Oe,[a(r,{path:e(Ue)},null,8,["path"]),Ve])]),_:1})}}});const Ge=q(qe,[["__scopeId","data-v-14680ef5"]]),G=l=>(Y("data-v-94df32a7"),l=l(),z(),l),Je={key:0,class:"choose-type"},Re={class:"option-content"},Le=G(()=>w("span",null,"Forms",-1)),Ye={class:"option-content"},ze=G(()=>w("span",null,"Hooks",-1)),We={class:"option-content"},Xe=G(()=>w("span",null,"Scripts",-1)),Ke={class:"option-content"},Qe=G(()=>w("span",null,"Jobs",-1)),Ze=T({__name:"ChooseScriptType",props:{state:{}},emits:["choose-type"],setup(l,{emit:i}){const o=l,r=k(()=>o.state.type==="form"?"#fff":void 0),y=k(()=>o.state.type==="hook"?"#fff":void 0),g=k(()=>o.state.type==="script"?"#fff":void 0),f=k(()=>o.state.type==="job"?"#fff":void 0),_=h=>i("choose-type",h);return(h,s)=>h.state.state==="choosing-type"?(u(),U("div",Je,[a(e(I),{vertical:"",gap:"30"},{default:t(()=>[a(e(Me),null,{default:t(()=>[c("Choose your script type")]),_:1}),a(e(Se),{value:h.state.type,"onUpdate:value":[s[0]||(s[0]=v=>h.state.type=v),_],size:"large","button-style":"solid"},{default:t(()=>[a(e(I),{gap:"24",vertical:""},{default:t(()=>[a(e(I),{gap:"24"},{default:t(()=>[a(e(j),{placement:"left",title:"Forms"},{content:t(()=>[a(e(B),null,{default:t(()=>[c(" Use to collect user input via interaction with a form interface ")]),_:1}),a(ee,{path:"forms/overview"})]),default:t(()=>[a(e(H),{value:"form",class:"option"},{default:t(()=>[w("div",Re,[(u(),d(P,{key:r.value,path:e(ie),fill:r.value},null,8,["path","fill"])),Le])]),_:1})]),_:1}),a(e(j),{placement:"right",title:"Hooks"},{content:t(()=>[a(e(B),null,{default:t(()=>[c("Use to build endpoints triggered by HTTP requests")]),_:1}),a(ee,{path:"forms/overview"})]),default:t(()=>[a(e(H),{value:"hook",class:"option"},{default:t(()=>[w("div",Ye,[(u(),d(P,{key:y.value,path:e(ne),fill:y.value},null,8,["path","fill"])),ze])]),_:1})]),_:1})]),_:1}),a(e(I),{gap:"24"},{default:t(()=>[a(e(j),{placement:"left",title:"Scripts"},{content:t(()=>[a(e(B),null,{default:t(()=>[c(" Use to write plain Python scripts ")]),_:1})]),default:t(()=>[a(e(H),{value:"script",class:"option"},{default:t(()=>[w("div",We,[(u(),d(P,{key:g.value,path:e(re),fill:g.value},null,8,["path","fill"])),Xe])]),_:1})]),_:1}),a(e(j),{placement:"right",title:"Jobs"},{content:t(()=>[a(e(B),null,{default:t(()=>[c(" Use to schedule your script execution periodically ")]),_:1})]),default:t(()=>[a(e(H),{value:"job",class:"option"},{default:t(()=>[w("div",Ke,[(u(),d(P,{key:f.value,path:e(pe),fill:f.value},null,8,["path","fill"])),Qe])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["value"])]),_:1})])):C("",!0)}});const et=q(Ze,[["__scopeId","data-v-94df32a7"]]),tt=w("br",null,null,-1),at=T({__name:"NewScript",props:{state:{}},emits:["update-name","update-file"],setup(l,{emit:i}){const o=l,{result:r}=V(()=>fetch("/_editor/api/workspace/root").then(v=>v.text())),y=k(()=>o.state.state!=="creating"?"":`${r.value}/${o.state.stage.filename}`),g=k(()=>o.state.state!=="creating"?"":`${o.state.stage.type[0].toUpperCase()+o.state.stage.type.slice(1)} title`),f=v=>{i("update-name",v);const p=Ne(v);i("update-file",p),h()},{result:_,refetch:h}=V(()=>le.checkFile(o.state.stage.filename)),s=k(()=>oe(o.state.stage.filename));return(v,p)=>(u(),d(e(ue),{layout:"vertical"},{default:t(()=>{var A;return[a(e(O),{label:g.value,required:!0},{default:t(()=>[a(e(K),{value:v.state.stage.title,"onUpdate:value":f},null,8,["value"])]),_:1},8,["label"]),a(e(O),{label:"Generated file",required:!0,"validate-status":s.value.valid?"success":"error",help:s.value.valid?void 0:s.value.reason},{default:t(()=>[a(e(Ce),{placement:"right"},{title:t(()=>[c(" You can change this later ")]),default:t(()=>[a(e(K),{value:v.state.stage.filename,"onUpdate:value":p[0]||(p[0]=J=>v.state.stage.filename=J),disabled:!0},null,8,["value"])]),_:1})]),_:1},8,["validate-status","help"]),a(e(O),null,{default:t(()=>[a(e(F),null,{default:t(()=>[c(" Your script will be generated at: ")]),_:1}),tt,a(e(F),{code:""},{default:t(()=>[c($(y.value),1)]),_:1})]),_:1}),(A=e(_))!=null&&A.exists?(u(),d(e(je),{key:0,type:"warning"},{message:t(()=>[a(e(F),null,{default:t(()=>[a(e(F),{strong:""},{default:t(()=>[c("Warning:")]),_:1}),c(" This file already exists. It will be used by more than one script. ")]),_:1})]),_:1})):C("",!0)]}),_:1}))}}),st=T({__name:"CreateModal",props:{open:{type:Boolean},state:{}},emits:["close","choose-type","next-step","previous-step","create-script","update-name","update-file"],setup(l,{emit:i}){const o=l,r=p=>i("update-name",p),y=p=>i("update-file",p),g=()=>i("close"),f=p=>i("choose-type",p),_=()=>i("next-step"),h=()=>i("previous-step"),s=()=>i("create-script"),v=k(()=>!(o.state.state!=="creating"||!oe(o.state.stage.filename).valid||!o.state.stage.title));return(p,A)=>(u(),d(e(De),{open:p.open,title:"Create a new script",onCancel:g},{footer:t(()=>[p.state.state==="creating"?(u(),d(e(R),{key:0,onClick:h},{default:t(()=>[c("Previous")]),_:1})):C("",!0),p.state.state==="creating"?(u(),d(e(R),{key:1,type:"primary",disabled:!v.value,onClick:s},{default:t(()=>[c(" Create ")]),_:1},8,["disabled"])):C("",!0),p.state.state==="choosing-type"?(u(),d(e(R),{key:2,type:"primary",disabled:!p.state.type,onClick:_},{default:t(()=>[c(" Next ")]),_:1},8,["disabled"])):C("",!0)]),default:t(()=>[p.state.state==="choosing-type"?(u(),d(et,{key:0,state:p.state,onChooseType:f},null,8,["state"])):C("",!0),p.state.state==="creating"?(u(),d(at,{key:1,state:p.state,onUpdateName:r,onUpdateFile:y},null,8,["state"])):C("",!0)]),_:1},8,["open"]))}}),ot=T({__name:"FilterScripts",emits:["update-filter"],setup(l,{emit:i}){const o=[{label:"Forms",value:"form"},{label:"Hooks",value:"hook"},{label:"Scripts",value:"script"},{label:"Jobs",value:"job"}],r=y=>i("update-filter",y);return(y,g)=>(u(),d(e(ue),null,{default:t(()=>[a(e(O),{label:"Filter"},{default:t(()=>[a(e(Fe),{mode:"multiple",style:{width:"360px"},placeholder:"All","onUpdate:value":r},{default:t(()=>[(u(),U(L,null,se(o,f=>a(e(Ie),{key:f.value,value:f.value},{default:t(()=>[c($(f.label),1)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1}))}}),lt=200,it=l=>{if(!l)return[0,0];if(l.length===0)return[0,0];let i=-1/0,o=0;for(const r of l)r.position.x>i&&(i=r.position.x),o+=r.position.y/l.length;return[i+lt,o]},nt=l=>{if(l instanceof x)return"form";if(l instanceof N)return"hook";if(l instanceof M)return"job";if(l instanceof D)return"script";throw new Error("Invalid script type")},rt=l=>(Y("data-v-f170da7e"),l=l(),z(),l),pt={key:0},ct=rt(()=>w("span",null,"loading",-1)),ut=[ct],te=100,dt=T({__name:"Scripts",setup(l){Te(n=>({"69f5c37e":ye()}));const i=Ae(),{loading:o,result:r,refetch:y}=V(async()=>Promise.all([x.list(),N.list(),M.list(),D.list()]).then(([n,m,b,S])=>[...n,...m,...b,...S])),{result:g}=V(()=>le.get()),f=Q([]),_=n=>{f.value=n},h=k(()=>r.value?f.value.length===0?r.value:r.value.filter(n=>f.value.includes(nt(n))):[]),s=Q({state:"idle"}),v=k(()=>s.value.state==="choosing-type"||s.value.state==="creating"),p=()=>{s.value={state:"choosing-type",type:null}},A=()=>{s.value={state:"idle"}},J=n=>{s.value.state==="choosing-type"&&(s.value={state:"choosing-type",type:n})},de=()=>{s.value.state==="choosing-type"&&s.value.type!==null&&(s.value={state:"creating",stage:{type:s.value.type,title:`Untitled ${s.value.type}`,filename:`untitled_${s.value.type}.py`}})},fe=()=>{s.value.state==="creating"&&(s.value={state:"choosing-type",type:s.value.stage.type})},_e=n=>{s.value.state==="creating"&&(s.value.stage.title=n)},me=n=>{s.value.state==="creating"&&(s.value.stage.filename=n)},ve=async(n,m)=>{var b,S;await((S=(b=r.value)==null?void 0:b.find(E=>E.id===n))==null?void 0:S.delete(m)),await y()},ye=()=>(te/1e3).toString()+"s",he=async()=>{if(s.value.state!=="creating")return;const n=it(r.value||[]);let m;if(s.value.stage.type==="form"?m=await x.create(s.value.stage.title,s.value.stage.filename,n):s.value.stage.type==="hook"?m=await N.create(s.value.stage.title,s.value.stage.filename,n):s.value.stage.type==="job"?m=await M.create(s.value.stage.title,s.value.stage.filename,n):s.value.stage.type==="script"&&(m=await D.create(s.value.stage.title,s.value.stage.filename,n)),!m)throw new Error("Failed to create script");const b=m.id,S=s.value.stage.type;A(),await y(),setTimeout(()=>{W(b,S)},te)},W=(n,m)=>{var b,S;if(m==="form"&&i.push({name:"formEditor",params:{id:n}}),m==="hook"&&i.push({name:"hookEditor",params:{id:n}}),m==="script"){const E=(b=r.value)==null?void 0:b.find(ge=>ge.id===n);if(!E)return;(S=g.value)==null||S.openFile(E.file)}m==="job"&&i.push({name:"jobEditor",params:{id:n}})};return(n,m)=>(u(),U(L,null,[e(o)?(u(),U("span",pt,ut)):C("",!0),a(e(Ee),null,{default:t(()=>[c("Home")]),_:1}),a(ot,{onUpdateFilter:_}),a(e(I),{wrap:"wrap",gap:"large",class:"scripts-container"},{default:t(()=>[a(xe,null,{default:t(()=>[(u(!0),U(L,null,se(h.value,b=>(u(),d(Pe,{key:b.title,script:b,workspace:e(g),onDelete:ve,onGoToScript:W},null,8,["script","workspace"]))),128))]),_:1}),a(Ge,{onClick:p})]),_:1}),a(st,{open:v.value,state:s.value,onClose:A,onChooseType:J,onNextStep:de,onPreviousStep:fe,onCreateScript:he,onUpdateName:_e,onUpdateFile:me},null,8,["open","state"])],64))}});const Ot=q(dt,[["__scopeId","data-v-f170da7e"]]);export{Ot as default};
//# sourceMappingURL=Scripts.3cd2d6ae.js.map