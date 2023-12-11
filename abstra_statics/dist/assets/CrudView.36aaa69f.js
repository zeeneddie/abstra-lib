import{a as R}from"./icons.66203784.js";import{d as O,F as z,r as E,b as s,c as p,w as a,u as l,f as u,aq as c,eD as y,eu as w,eC as S,bN as P,ad as j,a_ as V,cE as q,ew as _,G,a as H,dh as D,bU as L,cH as Y,ev as J,cB as Q,bv as W,bt as X,e as M,I as $,bS as Z,bu as x,cF as K,t as ee}from"./outputWidgets.73d3a989.js";import{b as N,a as te,c as T,A as ae}from"./Text.d42362fd.js";import{A as F,r as le}from"./router.e688604d.js";import{A as ne,F as oe}from"./Base.726513e0.js";import{M as se}from"./transButton.0eadc381.js";import{i as re}from"./url.b5665a50.js";import{A as ue}from"./Title.b64e4413.js";import{A as ie}from"./index.90786431.js";import{A as pe}from"./index.4400d1ad.js";(function(){try{var f=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(f._sentryDebugIds=f._sentryDebugIds||{},f._sentryDebugIds[m]="064c3ddf-a6c6-490a-90a4-681cedaf0ab4",f._sentryDebugIdIdentifier="sentry-dbid-064c3ddf-a6c6-490a-90a4-681cedaf0ab4")}catch{}})();const ce=O({__name:"CreationModal",props:{entityName:{},fields:{}},emits:["create"],setup(f,{expose:m,emit:g}){const k=f,B=`Create a new ${k.entityName}`,d=z({inputValue:{}}),h=E(!1),I=()=>h.value=!0,e=()=>h.value=!1,C=()=>{g("create",d.inputValue),e()},b=(o,n)=>{const t=o.target.value,i=k.fields.find(v=>v.key===n);i!=null&&i.format?d.inputValue[n]=i.format(t):d.inputValue[n]=t},A=(o,n)=>{const t=o.target.value,i=k.fields.find(v=>v.key===n);i!=null&&i.blur?d.inputValue[n]=i.blur(t):d.inputValue[n]=t};return m({open:I,close:e}),(o,n)=>(s(),p(l(se),{open:h.value,title:B,onCancel:e,onOk:C},{default:a(()=>[u(l(N),null,{default:a(()=>[c(" You may edit the "+y(o.entityName)+" name afterwards at Settings. ",1)]),_:1}),u(l(oe),{layout:"vertical"},{default:a(()=>[(s(!0),w(V,null,S(o.fields,t=>{var i;return s(),p(l(ne),{key:t.key,label:t.label,help:(i=t.hint)==null?void 0:i.call(t,d.inputValue[t.key])},{default:a(()=>{var v,U;return[!t.type||typeof t.type=="string"?(s(),p(l(P),{key:0,value:d.inputValue[t.key],"onUpdate:value":r=>d.inputValue[t.key]=r,placeholder:(v=t.placeholder)!=null?v:"",type:(U=t.type)!=null?U:"text",onInput:r=>b(r,t.key),onBlur:r=>A(r,t.key)},null,8,["value","onUpdate:value","placeholder","type","onInput","onBlur"])):Array.isArray(t.type)?(s(),p(l(j),{key:1,value:d.inputValue[t.key],"onUpdate:value":r=>d.inputValue[t.key]=r},{default:a(()=>[(s(!0),w(V,null,S(t.type,r=>(s(),p(l(q),{key:typeof r=="string"?r:r.value,value:typeof r=="string"?r:r.value},{default:a(()=>[c(y(typeof r=="string"?r:r.label),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["value","onUpdate:value"])):_("",!0)]}),_:2},1032,["label","help"])}),128))]),_:1})]),_:1},8,["open"]))}}),de={class:"action-item"},ye={key:2},fe=["src"],me=O({__name:"CrudView",props:{loading:{type:Boolean},title:{},description:{},createButtonText:{},live:{type:Boolean},emptyTitle:{},entityName:{},fields:{},table:{},videoUrl:{}},emits:["create"],setup(f,{emit:m}){const g=f,k=E(null),B=()=>{var e;g.fields?(e=k.value)==null||e.open():m("create",{})};function d(e,C){var b;"onClick"in e?(b=e.onClick)==null||b.call(e,{key:C.key}):"link"in e&&(typeof e.link=="string"&&re(e.link)?open(e.link,"_blank"):le.push(e.link))}async function h(e){m("create",e)}const I=G(()=>({"--columnCount":`${g.table.columns.length}`}));return(e,C)=>{const b=H("router-link");return s(),w(V,null,[u(l(K),{direction:"vertical"},{default:a(()=>{var A;return[u(l(ue),null,{default:a(()=>[c(y(e.title),1)]),_:1}),u(l(N),null,{default:a(()=>[c(y(e.description)+" ",1),D(e.$slots,"description",{},void 0,!0)]),_:3}),e.createButtonText?(s(),p(l(L),{key:0,type:"primary",onClick:B},{default:a(()=>[c(y(e.createButtonText),1)]),_:1})):_("",!0),e.$slots.warning?(s(),p(l(pe),{key:1,type:"warning","show-icon":""},{description:a(()=>[D(e.$slots,"warning",{},void 0,!0)]),_:3})):_("",!0),u(l(Y),{style:J(I.value),"data-source":e.table.rows,loading:e.loading&&!e.live,columns:(A=e.table.columns)==null?void 0:A.map(({name:o,align:n},t,i)=>({title:o,key:t,align:n!=null?n:"center"}))},{emptyText:a(()=>[c(y(e.emptyTitle),1)]),headerCell:a(o=>[c(y(o.title),1)]),bodyCell:a(({column:{key:o},record:n})=>[u(l(Q),{open:n.cells[o].hover?void 0:!1},{content:a(()=>[u(l(N),{style:{width:"300px",overflow:"auto","font-family":"monospace"},copyable:"",content:n.cells[o].hover},null,8,["content"])]),default:a(()=>[n.cells[o].tagColor?(s(),p(l(te),{key:0,color:n.cells[o].tagColor},{default:a(()=>[c(y(n.cells[o].text),1)]),_:2},1032,["color"])):n.cells[o].link?(s(),p(b,{key:1,to:n.cells[o].link},{default:a(()=>[c(y(n.cells[o].text),1)]),_:2},1032,["to"])):n.cells[o].actions?(s(),p(l(Z),{key:2},{overlay:a(()=>[u(l(W),null,{default:a(()=>[(s(!0),w(V,null,S(n.cells[o].actions,(t,i)=>(s(),p(l(X),{key:i,danger:t.dangerous,onClick:v=>d(t,n)},{default:a(()=>[M("div",de,[t.icon?(s(),p($,{key:0,path:t.icon},null,8,["path"])):_("",!0),u(l(T),null,{default:a(()=>[c(y(t.label),1)]),_:2},1024)])]),_:2},1032,["danger","onClick"]))),128))]),_:2},1024)]),default:a(()=>[u($,{path:l(R),style:{cursor:"pointer"}},null,8,["path"])]),_:2},1024)):(s(),p(l(T),{key:3},{default:a(()=>[c(y(n.cells[o].text),1)]),_:2},1024))]),_:2},1032,["open"])]),footer:a(()=>[e.live?(s(),p(l(ae),{key:0,justify:"end",gutter:10},{default:a(()=>[u(l(F),null,{default:a(()=>[u(l(x),{size:"small"})]),_:1}),u(l(F),null,{default:a(()=>[u(l(T),null,{default:a(()=>[c(" auto updating ")]),_:1})]),_:1})]),_:1})):_("",!0)]),_:1},8,["style","data-source","loading","columns"]),e.videoUrl?(s(),w("section",ye,[u(l(ie),{orientation:"left"},{default:a(()=>[c("See it in action")]),_:1}),M("iframe",{style:{width:"100%","aspect-ratio":"16/9"},src:e.videoUrl,title:"runtimes example",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,fe)])):_("",!0)]}),_:3}),e.fields?(s(),p(ce,{key:0,ref_key:"modalRef",ref:k,fields:e.fields,"entity-name":e.entityName,onCreate:h},null,8,["fields","entity-name"])):_("",!0)],64)}}});const Be=ee(me,[["__scopeId","data-v-0a45ac7d"]]);export{Be as C};
//# sourceMappingURL=CrudView.36aaa69f.js.map