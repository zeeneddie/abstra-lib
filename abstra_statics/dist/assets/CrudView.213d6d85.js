import{l as E}from"./icons.7e35f224.js";import{f as y,eG as R,d as z,G,r as $,b as s,c as u,w as l,u as n,ar as f,eD as v,ev as V,eC as N,bO as H,ae as x,a$ as B,cE as L,ex as b,H as Y,a as q,dp as w,bV as J,cH as Q,ew as W,bT as X,bw as Z,bu as K,e as ee,I as M,cB as te,bv as ae,cF as le,v as ne}from"./outputWidgets.2d3c78c6.js";import{A as P}from"./Paragraph.0d4c2436.js";import{A as se,F as oe}from"./Form.dd8e71e2.js";import{M as ue}from"./Modal.33e6a364.js";import{_ as re}from"./DocsButton.vue_vue_type_script_setup_true_lang.fa188d83.js";import{A as j,a as ie,r as ce}from"./router.307fb6ea.js";import{i as pe}from"./url.2ddc233b.js";import{A as F}from"./index.2a44e1b5.js";import{A as de}from"./Title.a467e7ec.js";import{A as S}from"./Text.96993af4.js";import{A as ye}from"./index.4ef4a7b8.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[r]="301a0669-0e52-4901-8273-b17e5b6bcfd6",i._sentryDebugIdIdentifier="sentry-dbid-301a0669-0e52-4901-8273-b17e5b6bcfd6")}catch{}})();var fe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z"}}]},name:"sync",theme:"outlined"};const me=fe;function U(i){for(var r=1;r<arguments.length;r++){var d=arguments[r]!=null?Object(arguments[r]):{},m=Object.keys(d);typeof Object.getOwnPropertySymbols=="function"&&(m=m.concat(Object.getOwnPropertySymbols(d).filter(function(h){return Object.getOwnPropertyDescriptor(d,h).enumerable}))),m.forEach(function(h){ve(i,h,d[h])})}return i}function ve(i,r,d){return r in i?Object.defineProperty(i,r,{value:d,enumerable:!0,configurable:!0,writable:!0}):i[r]=d,i}var D=function(r,d){var m=U({},r,d.attrs);return y(R,U({},m,{icon:me}),null)};D.displayName="SyncOutlined";D.inheritAttrs=!1;const be=D,ge=z({__name:"CreationModal",props:{entityName:{},fields:{}},emits:["create"],setup(i,{expose:r,emit:d}){const m=i,h=`Create a new ${m.entityName}`,c=G({inputValue:{}}),C=$(!1),I=()=>C.value=!0,A=()=>C.value=!1,t=()=>{d("create",c.inputValue),c.inputValue={},A()},O=(g,a)=>{const e=g.target.value,o=m.fields.find(_=>_.key===a);o!=null&&o.format?c.inputValue[a]=o.format(e):c.inputValue[a]=e},k=(g,a)=>{const e=g.target.value,o=m.fields.find(_=>_.key===a);o!=null&&o.blur?c.inputValue[a]=o.blur(e):c.inputValue[a]=e};return r({open:I,close:A}),(g,a)=>(s(),u(n(ue),{open:C.value,title:h,onCancel:A,onOk:t},{default:l(()=>[y(n(P),null,{default:l(()=>[f(" You may edit the "+v(g.entityName)+" name afterwards at Settings. ",1)]),_:1}),y(n(oe),{layout:"vertical"},{default:l(()=>[(s(!0),V(B,null,N(g.fields,e=>{var o;return s(),u(n(se),{key:e.key,label:e.label,help:(o=e.hint)==null?void 0:o.call(e,c.inputValue[e.key])},{default:l(()=>{var _,T;return[!e.type||typeof e.type=="string"?(s(),u(n(H),{key:0,value:c.inputValue[e.key],"onUpdate:value":p=>c.inputValue[e.key]=p,placeholder:(_=e.placeholder)!=null?_:"",type:(T=e.type)!=null?T:"text",onInput:p=>O(p,e.key),onBlur:p=>k(p,e.key)},null,8,["value","onUpdate:value","placeholder","type","onInput","onBlur"])):Array.isArray(e.type)?(s(),u(n(x),{key:1,value:c.inputValue[e.key],"onUpdate:value":p=>c.inputValue[e.key]=p},{default:l(()=>[(s(!0),V(B,null,N(e.type,p=>(s(),u(n(L),{key:typeof p=="string"?p:p.value,value:typeof p=="string"?p:p.value},{default:l(()=>[f(v(typeof p=="string"?p:p.label),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["value","onUpdate:value"])):b("",!0)]}),_:2},1032,["label","help"])}),128))]),_:1})]),_:1},8,["open"]))}}),_e={class:"action-item"},he=z({__name:"CrudView",props:{table:{},loading:{type:Boolean},title:{},emptyTitle:{},entityName:{},description:{},createButtonText:{},docsPath:{},live:{type:Boolean},fields:{}},emits:["create"],setup(i,{emit:r}){const d=i,m=$(null),h=()=>{var t;d.fields?(t=m.value)==null||t.open():r("create",{})},c=$(!1);async function C(t,O){var k;if(!c.value){c.value=!0;try{"onClick"in t?await((k=t.onClick)==null?void 0:k.call(t,{key:O.key})):"link"in t&&(typeof t.link=="string"&&pe(t.link)?open(t.link,"_blank"):ce.push(t.link))}finally{c.value=!1}}}async function I(t){r("create",t)}const A=Y(()=>({"--columnCount":`${d.table.columns.length}`}));return(t,O)=>{const k=q("router-link");return s(),V(B,null,[y(n(le),{direction:"vertical"},{default:l(()=>{var g;return[y(n(F),{align:"center",justify:"space-between"},{default:l(()=>[t.title?(s(),u(n(de),{key:0},{default:l(()=>[f(v(t.title),1)]),_:1})):b("",!0),w(t.$slots,"more",{},void 0,!0)]),_:3}),t.description?(s(),u(n(P),{key:0},{default:l(()=>[f(v(t.description)+" ",1),w(t.$slots,"description",{},void 0,!0),t.docsPath?(s(),u(re,{key:0,path:t.docsPath},null,8,["path"])):b("",!0)]),_:3})):b("",!0),y(n(F),{gap:"middle"},{default:l(()=>[t.createButtonText?(s(),u(n(J),{key:0,type:"primary",onClick:h},{default:l(()=>[f(v(t.createButtonText),1)]),_:1})):b("",!0),w(t.$slots,"secondary",{},void 0,!0)]),_:3}),w(t.$slots,"extra",{},void 0,!0),y(n(Q),{style:W(A.value),"data-source":t.table.rows,loading:c.value||t.loading&&!t.live,columns:(g=t.table.columns)==null?void 0:g.map(({name:a,align:e},o,_)=>({title:a,key:o,align:e!=null?e:"center"}))},{emptyText:l(()=>[f(v(t.emptyTitle),1)]),headerCell:l(a=>[f(v(a.title),1)]),bodyCell:l(({column:{key:a},record:e})=>[e.cells[a].type==="slot"?w(t.$slots,e.cells[a].key,{key:0,payload:e.cells[a].payload},void 0,!0):(s(),u(n(te),{key:1,open:e.cells[a].hover?void 0:!1},{content:l(()=>[y(n(P),{style:{width:"300px",overflow:"auto","font-family":"monospace"},copyable:"",content:e.cells[a].hover},null,8,["content"])]),default:l(()=>[e.cells[a].type==="text"?(s(),u(n(S),{key:0,secondary:e.cells[a].secondary,code:e.cells[a].code},{default:l(()=>[f(v(e.cells[a].text),1)]),_:2},1032,["secondary","code"])):e.cells[a].type==="secret"?(s(),u(n(S),{key:1,copyable:{text:e.cells[a].text}},{default:l(()=>[f(" ******** ")]),_:2},1032,["copyable"])):e.cells[a].type==="tag"?(s(),u(n(ye),{key:2,color:e.cells[a].tagColor},{icon:l(()=>[e.cells[a].loading?(s(),u(n(be),{key:0,spin:!0})):b("",!0)]),default:l(()=>[f(v(e.cells[a].text)+" ",1)]),_:2},1032,["color"])):e.cells[a].type==="link"?(s(),u(k,{key:3,to:e.cells[a].to},{default:l(()=>[f(v(e.cells[a].text),1)]),_:2},1032,["to"])):e.cells[a].type==="actions"?(s(),u(n(X),{key:4},{overlay:l(()=>[y(n(Z),{disabled:c.value},{default:l(()=>[(s(!0),V(B,null,N(e.cells[a].actions.filter(o=>!o.hide),(o,_)=>(s(),u(n(K),{key:_,danger:o.dangerous,onClick:T=>C(o,e)},{default:l(()=>[ee("div",_e,[o.icon?(s(),u(M,{key:0,path:o.icon},null,8,["path"])):b("",!0),y(n(S),null,{default:l(()=>[f(v(o.label),1)]),_:2},1024)])]),_:2},1032,["danger","onClick"]))),128))]),_:2},1032,["disabled"])]),default:l(()=>[y(M,{path:n(E),style:{cursor:"pointer"}},null,8,["path"])]),_:2},1024)):b("",!0)]),_:2},1032,["open"]))]),footer:l(()=>[t.live?(s(),u(n(ie),{key:0,justify:"end",gutter:10},{default:l(()=>[y(n(j),null,{default:l(()=>[y(n(ae),{size:"small"})]),_:1}),y(n(j),null,{default:l(()=>[y(n(S),null,{default:l(()=>[f(" auto updating ")]),_:1})]),_:1})]),_:1})):b("",!0)]),_:3},8,["style","data-source","loading","columns"])]}),_:3}),t.fields?(s(),u(ge,{key:0,ref_key:"modalRef",ref:m,fields:t.fields,"entity-name":t.entityName,onCreate:I},null,8,["fields","entity-name"])):b("",!0)],64)}}});const Pe=ne(he,[["__scopeId","data-v-5a2e63db"]]);export{Pe as C};
//# sourceMappingURL=CrudView.213d6d85.js.map
