import{E as U}from"./icons.b5cf088d.js";import{d as P,F as E,r as M,b as o,c as p,w as l,u as n,f as i,aq as c,eD as d,ev as A,eC as $,bH as R,ad as q,bq as V,cB as z,ex as b,G as j,a as x,dp as N,bO as G,cE as H,ew as L,bM as Y,bh as J,bf as Q,e as W,I as F,cy as X,bg as Z,cC as K,v as ee}from"./outputWidgets.ff030fa2.js";import{A as D,a as te}from"./Title.5f42c0bd.js";import{A as ae}from"./FormItem.8877814f.js";import{F as le}from"./Form.7526cd4e.js";import{M as ne}from"./Modal.69abbe44.js";import{_ as se}from"./DocsButton.vue_vue_type_script_setup_true_lang.f21782c7.js";import{A as O,a as oe,r as ue}from"./router.9b9dfb4b.js";import{i as re}from"./url.605412e6.js";import{A as S}from"./Text.2ac86bcb.js";import{A as pe}from"./index.5d21e124.js";(function(){try{var m=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},v=new Error().stack;v&&(m._sentryDebugIds=m._sentryDebugIds||{},m._sentryDebugIds[v]="639e449a-9d0b-41b6-b34e-db94fc907bdf",m._sentryDebugIdIdentifier="sentry-dbid-639e449a-9d0b-41b6-b34e-db94fc907bdf")}catch{}})();const ie=P({__name:"CreationModal",props:{entityName:{},fields:{}},emits:["create"],setup(m,{expose:v,emit:g}){const _=m,B=`Create a new ${_.entityName}`,r=E({inputValue:{}}),k=M(!1),I=()=>k.value=!0,C=()=>k.value=!1,t=()=>{g("create",r.inputValue),C()},w=(y,a)=>{const e=y.target.value,s=_.fields.find(f=>f.key===a);s!=null&&s.format?r.inputValue[a]=s.format(e):r.inputValue[a]=e},h=(y,a)=>{const e=y.target.value,s=_.fields.find(f=>f.key===a);s!=null&&s.blur?r.inputValue[a]=s.blur(e):r.inputValue[a]=e};return v({open:I,close:C}),(y,a)=>(o(),p(n(ne),{open:k.value,title:B,onCancel:C,onOk:t},{default:l(()=>[i(n(D),null,{default:l(()=>[c(" You may edit the "+d(y.entityName)+" name afterwards at Settings. ",1)]),_:1}),i(n(le),{layout:"vertical"},{default:l(()=>[(o(!0),A(V,null,$(y.fields,e=>{var s;return o(),p(n(ae),{key:e.key,label:e.label,help:(s=e.hint)==null?void 0:s.call(e,r.inputValue[e.key])},{default:l(()=>{var f,T;return[!e.type||typeof e.type=="string"?(o(),p(n(R),{key:0,value:r.inputValue[e.key],"onUpdate:value":u=>r.inputValue[e.key]=u,placeholder:(f=e.placeholder)!=null?f:"",type:(T=e.type)!=null?T:"text",onInput:u=>w(u,e.key),onBlur:u=>h(u,e.key)},null,8,["value","onUpdate:value","placeholder","type","onInput","onBlur"])):Array.isArray(e.type)?(o(),p(n(q),{key:1,value:r.inputValue[e.key],"onUpdate:value":u=>r.inputValue[e.key]=u},{default:l(()=>[(o(!0),A(V,null,$(e.type,u=>(o(),p(n(z),{key:typeof u=="string"?u:u.value,value:typeof u=="string"?u:u.value},{default:l(()=>[c(d(typeof u=="string"?u:u.label),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["value","onUpdate:value"])):b("",!0)]}),_:2},1032,["label","help"])}),128))]),_:1})]),_:1},8,["open"]))}}),ce={class:"action-item"},de=P({__name:"CrudView",props:{table:{},loading:{type:Boolean},title:{},emptyTitle:{},entityName:{},description:{},createButtonText:{},docsPath:{},live:{type:Boolean},fields:{}},emits:["create"],setup(m,{emit:v}){const g=m,_=M(null),B=()=>{var t;g.fields?(t=_.value)==null||t.open():v("create",{})},r=M(!1);async function k(t,w){var h;if(!r.value){r.value=!0;try{"onClick"in t?await((h=t.onClick)==null?void 0:h.call(t,{key:w.key})):"link"in t&&(typeof t.link=="string"&&re(t.link)?open(t.link,"_blank"):ue.push(t.link))}finally{r.value=!1}}}async function I(t){v("create",t)}const C=j(()=>({"--columnCount":`${g.table.columns.length}`}));return(t,w)=>{const h=x("router-link");return o(),A(V,null,[i(n(K),{direction:"vertical"},{default:l(()=>{var y;return[i(n(te),null,{default:l(()=>[c(d(t.title),1)]),_:1}),i(n(D),null,{default:l(()=>[c(d(t.description)+" ",1),N(t.$slots,"description",{},void 0,!0),t.docsPath?(o(),p(se,{key:0,path:t.docsPath},null,8,["path"])):b("",!0)]),_:3}),t.createButtonText?(o(),p(n(G),{key:0,type:"primary",onClick:B},{default:l(()=>[c(d(t.createButtonText),1)]),_:1})):b("",!0),N(t.$slots,"extra",{},void 0,!0),i(n(H),{style:L(C.value),"data-source":t.table.rows,loading:r.value||t.loading&&!t.live,columns:(y=t.table.columns)==null?void 0:y.map(({name:a,align:e},s,f)=>({title:a,key:s,align:e!=null?e:"center"}))},{emptyText:l(()=>[c(d(t.emptyTitle),1)]),headerCell:l(a=>[c(d(a.title),1)]),bodyCell:l(({column:{key:a},record:e})=>[e.cells[a].type==="slot"?N(t.$slots,e.cells[a].key,{key:0,payload:e.cells[a].payload},void 0,!0):(o(),p(n(X),{key:1,open:e.cells[a].hover?void 0:!1},{content:l(()=>[i(n(D),{style:{width:"300px",overflow:"auto","font-family":"monospace"},copyable:"",content:e.cells[a].hover},null,8,["content"])]),default:l(()=>[e.cells[a].type==="text"?(o(),p(n(S),{key:0,secondary:e.cells[a].secondary,code:e.cells[a].code},{default:l(()=>[c(d(e.cells[a].text),1)]),_:2},1032,["secondary","code"])):e.cells[a].type==="tag"?(o(),p(n(pe),{key:1,color:e.cells[a].tagColor},{default:l(()=>[c(d(e.cells[a].text),1)]),_:2},1032,["color"])):e.cells[a].type==="link"?(o(),p(h,{key:2,to:e.cells[a].to},{default:l(()=>[c(d(e.cells[a].text),1)]),_:2},1032,["to"])):e.cells[a].type==="actions"?(o(),p(n(Y),{key:3},{overlay:l(()=>[i(n(J),{disabled:r.value},{default:l(()=>[(o(!0),A(V,null,$(e.cells[a].actions.filter(s=>!s.hide),(s,f)=>(o(),p(n(Q),{key:f,danger:s.dangerous,onClick:T=>k(s,e)},{default:l(()=>[W("div",ce,[s.icon?(o(),p(F,{key:0,path:s.icon},null,8,["path"])):b("",!0),i(n(S),null,{default:l(()=>[c(d(s.label),1)]),_:2},1024)])]),_:2},1032,["danger","onClick"]))),128))]),_:2},1032,["disabled"])]),default:l(()=>[i(F,{path:n(U),style:{cursor:"pointer"}},null,8,["path"])]),_:2},1024)):b("",!0)]),_:2},1032,["open"]))]),footer:l(()=>[t.live?(o(),p(n(oe),{key:0,justify:"end",gutter:10},{default:l(()=>[i(n(O),null,{default:l(()=>[i(n(Z),{size:"small"})]),_:1}),i(n(O),null,{default:l(()=>[i(n(S),null,{default:l(()=>[c(" auto updating ")]),_:1})]),_:1})]),_:1})):b("",!0)]),_:3},8,["style","data-source","loading","columns"])]}),_:3}),t.fields?(o(),p(ie,{key:0,ref_key:"modalRef",ref:_,fields:t.fields,"entity-name":t.entityName,onCreate:I},null,8,["fields","entity-name"])):b("",!0)],64)}}});const Ae=ee(de,[["__scopeId","data-v-128e2f5b"]]);export{Ae as C};
//# sourceMappingURL=CrudView.716440d7.js.map
