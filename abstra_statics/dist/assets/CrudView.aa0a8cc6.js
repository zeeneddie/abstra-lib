import{E as U}from"./icons.3ee16103.js";import{d as P,G as E,r as $,b as o,c as p,w as l,u as n,f as i,ar as c,eD as y,ev as A,eC as D,bO as R,ae as z,a$ as V,cE as H,ex as _,H as j,a as x,dp as N,bV as G,cH as L,ew as Y,bT as q,bw as J,bu as Q,e as W,I as F,cB as X,bv as Z,cF as K,v as ee}from"./outputWidgets.1f5e37db.js";import{A as M}from"./Paragraph.da768ab2.js";import{A as te}from"./FormItem.35b801a2.js";import{F as ae}from"./Form.8b1f9044.js";import{M as le}from"./Modal.55149f37.js";import{_ as ne}from"./DocsButton.vue_vue_type_script_setup_true_lang.c72340a5.js";import{A as O,a as se,r as oe}from"./router.0f91c45d.js";import{i as ue}from"./url.81ebd9eb.js";import{A as re}from"./Title.02f3792e.js";import{A as S}from"./Text.7209cdf6.js";import{A as pe}from"./index.2c308e51.js";(function(){try{var m=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},v=new Error().stack;v&&(m._sentryDebugIds=m._sentryDebugIds||{},m._sentryDebugIds[v]="e5768170-7fbe-446c-889c-f0c42707ed0e",m._sentryDebugIdIdentifier="sentry-dbid-e5768170-7fbe-446c-889c-f0c42707ed0e")}catch{}})();const ie=P({__name:"CreationModal",props:{entityName:{},fields:{}},emits:["create"],setup(m,{expose:v,emit:k}){const b=m,T=`Create a new ${b.entityName}`,r=E({inputValue:{}}),g=$(!1),B=()=>g.value=!0,C=()=>g.value=!1,t=()=>{k("create",r.inputValue),C()},w=(d,a)=>{const e=d.target.value,s=b.fields.find(f=>f.key===a);s!=null&&s.format?r.inputValue[a]=s.format(e):r.inputValue[a]=e},h=(d,a)=>{const e=d.target.value,s=b.fields.find(f=>f.key===a);s!=null&&s.blur?r.inputValue[a]=s.blur(e):r.inputValue[a]=e};return v({open:B,close:C}),(d,a)=>(o(),p(n(le),{open:g.value,title:T,onCancel:C,onOk:t},{default:l(()=>[i(n(M),null,{default:l(()=>[c(" You may edit the "+y(d.entityName)+" name afterwards at Settings. ",1)]),_:1}),i(n(ae),{layout:"vertical"},{default:l(()=>[(o(!0),A(V,null,D(d.fields,e=>{var s;return o(),p(n(te),{key:e.key,label:e.label,help:(s=e.hint)==null?void 0:s.call(e,r.inputValue[e.key])},{default:l(()=>{var f,I;return[!e.type||typeof e.type=="string"?(o(),p(n(R),{key:0,value:r.inputValue[e.key],"onUpdate:value":u=>r.inputValue[e.key]=u,placeholder:(f=e.placeholder)!=null?f:"",type:(I=e.type)!=null?I:"text",onInput:u=>w(u,e.key),onBlur:u=>h(u,e.key)},null,8,["value","onUpdate:value","placeholder","type","onInput","onBlur"])):Array.isArray(e.type)?(o(),p(n(z),{key:1,value:r.inputValue[e.key],"onUpdate:value":u=>r.inputValue[e.key]=u},{default:l(()=>[(o(!0),A(V,null,D(e.type,u=>(o(),p(n(H),{key:typeof u=="string"?u:u.value,value:typeof u=="string"?u:u.value},{default:l(()=>[c(y(typeof u=="string"?u:u.label),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["value","onUpdate:value"])):_("",!0)]}),_:2},1032,["label","help"])}),128))]),_:1})]),_:1},8,["open"]))}}),ce={class:"action-item"},ye=P({__name:"CrudView",props:{table:{},loading:{type:Boolean},title:{},emptyTitle:{},entityName:{},description:{},createButtonText:{},docsPath:{},live:{type:Boolean},fields:{}},emits:["create"],setup(m,{emit:v}){const k=m,b=$(null),T=()=>{var t;k.fields?(t=b.value)==null||t.open():v("create",{})},r=$(!1);async function g(t,w){var h;if(!r.value){r.value=!0;try{"onClick"in t?await((h=t.onClick)==null?void 0:h.call(t,{key:w.key})):"link"in t&&(typeof t.link=="string"&&ue(t.link)?open(t.link,"_blank"):oe.push(t.link))}finally{r.value=!1}}}async function B(t){v("create",t)}const C=j(()=>({"--columnCount":`${k.table.columns.length}`}));return(t,w)=>{const h=x("router-link");return o(),A(V,null,[i(n(K),{direction:"vertical"},{default:l(()=>{var d;return[i(n(re),null,{default:l(()=>[c(y(t.title),1)]),_:1}),i(n(M),null,{default:l(()=>[c(y(t.description)+" ",1),N(t.$slots,"description",{},void 0,!0),t.docsPath?(o(),p(ne,{key:0,path:t.docsPath},null,8,["path"])):_("",!0)]),_:3}),t.createButtonText?(o(),p(n(G),{key:0,type:"primary",onClick:T},{default:l(()=>[c(y(t.createButtonText),1)]),_:1})):_("",!0),N(t.$slots,"extra",{},void 0,!0),i(n(L),{style:Y(C.value),"data-source":t.table.rows,loading:r.value||t.loading&&!t.live,columns:(d=t.table.columns)==null?void 0:d.map(({name:a,align:e},s,f)=>({title:a,key:s,align:e!=null?e:"center"}))},{emptyText:l(()=>[c(y(t.emptyTitle),1)]),headerCell:l(a=>[c(y(a.title),1)]),bodyCell:l(({column:{key:a},record:e})=>[e.cells[a].type==="slot"?N(t.$slots,e.cells[a].key,{key:0,payload:e.cells[a].payload},void 0,!0):(o(),p(n(X),{key:1,open:e.cells[a].hover?void 0:!1},{content:l(()=>[i(n(M),{style:{width:"300px",overflow:"auto","font-family":"monospace"},copyable:"",content:e.cells[a].hover},null,8,["content"])]),default:l(()=>[e.cells[a].type==="text"?(o(),p(n(S),{key:0,secondary:e.cells[a].secondary,code:e.cells[a].code},{default:l(()=>[c(y(e.cells[a].text),1)]),_:2},1032,["secondary","code"])):e.cells[a].type==="tag"?(o(),p(n(pe),{key:1,color:e.cells[a].tagColor},{default:l(()=>[c(y(e.cells[a].text),1)]),_:2},1032,["color"])):e.cells[a].type==="link"?(o(),p(h,{key:2,to:e.cells[a].to},{default:l(()=>[c(y(e.cells[a].text),1)]),_:2},1032,["to"])):e.cells[a].type==="actions"?(o(),p(n(q),{key:3},{overlay:l(()=>[i(n(J),{disabled:r.value},{default:l(()=>[(o(!0),A(V,null,D(e.cells[a].actions.filter(s=>!s.hide),(s,f)=>(o(),p(n(Q),{key:f,danger:s.dangerous,onClick:I=>g(s,e)},{default:l(()=>[W("div",ce,[s.icon?(o(),p(F,{key:0,path:s.icon},null,8,["path"])):_("",!0),i(n(S),null,{default:l(()=>[c(y(s.label),1)]),_:2},1024)])]),_:2},1032,["danger","onClick"]))),128))]),_:2},1032,["disabled"])]),default:l(()=>[i(F,{path:n(U),style:{cursor:"pointer"}},null,8,["path"])]),_:2},1024)):_("",!0)]),_:2},1032,["open"]))]),footer:l(()=>[t.live?(o(),p(n(se),{key:0,justify:"end",gutter:10},{default:l(()=>[i(n(O),null,{default:l(()=>[i(n(Z),{size:"small"})]),_:1}),i(n(O),null,{default:l(()=>[i(n(S),null,{default:l(()=>[c(" auto updating ")]),_:1})]),_:1})]),_:1})):_("",!0)]),_:3},8,["style","data-source","loading","columns"])]}),_:3}),t.fields?(o(),p(ie,{key:0,ref_key:"modalRef",ref:b,fields:t.fields,"entity-name":t.entityName,onCreate:B},null,8,["fields","entity-name"])):_("",!0)],64)}}});const Ve=ee(ye,[["__scopeId","data-v-128e2f5b"]]);export{Ve as C};
//# sourceMappingURL=CrudView.aa0a8cc6.js.map
