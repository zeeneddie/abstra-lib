import{i as E}from"./icons.2243ed2d.js";import{d as O,F as R,r as P,b as s,c as i,w as a,u as l,f as u,aq as c,eD as m,ev as w,eC as S,bH as q,ad as z,bq as V,cB as j,ex as f,G,a as H,dp as M,bO as L,cE as Y,ew as J,cy as Q,bh as W,bf as X,e as U,I as $,bM as Z,bg as x,cC as K,v as ee}from"./outputWidgets.f5b314de.js";import{A as N,a as T}from"./Text.0b02f67b.js";import{A as te}from"./FormItem.f216019b.js";import{F as ae}from"./Form.d83ca7e0.js";import{M as le}from"./Modal.894255c0.js";import{_ as ne}from"./DocsButton.vue_vue_type_script_setup_true_lang.c0d24a0e.js";import{A as F,r as oe}from"./router.070b9953.js";import{i as se}from"./url.d88f6cd6.js";import{A as re}from"./index.e263ba39.js";import{A as ue}from"./index.bfc8ab09.js";import{A as ie}from"./Title.c252d005.js";import{A as pe}from"./index.3afac047.js";import{A as ce}from"./index.aa723f63.js";(function(){try{var y=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},v=new Error().stack;v&&(y._sentryDebugIds=y._sentryDebugIds||{},y._sentryDebugIds[v]="d7e5dc7b-9da4-4363-af27-56b26ed9a293",y._sentryDebugIdIdentifier="sentry-dbid-d7e5dc7b-9da4-4363-af27-56b26ed9a293")}catch{}})();const de=O({__name:"CreationModal",props:{entityName:{},fields:{}},emits:["create"],setup(y,{expose:v,emit:h}){const b=y,B=`Create a new ${b.entityName}`,d=R({inputValue:{}}),g=P(!1),I=()=>g.value=!0,e=()=>g.value=!1,C=()=>{h("create",d.inputValue),e()},k=(o,n)=>{const t=o.target.value,p=b.fields.find(_=>_.key===n);p!=null&&p.format?d.inputValue[n]=p.format(t):d.inputValue[n]=t},A=(o,n)=>{const t=o.target.value,p=b.fields.find(_=>_.key===n);p!=null&&p.blur?d.inputValue[n]=p.blur(t):d.inputValue[n]=t};return v({open:I,close:e}),(o,n)=>(s(),i(l(le),{open:g.value,title:B,onCancel:e,onOk:C},{default:a(()=>[u(l(N),null,{default:a(()=>[c(" You may edit the "+m(o.entityName)+" name afterwards at Settings. ",1)]),_:1}),u(l(ae),{layout:"vertical"},{default:a(()=>[(s(!0),w(V,null,S(o.fields,t=>{var p;return s(),i(l(te),{key:t.key,label:t.label,help:(p=t.hint)==null?void 0:p.call(t,d.inputValue[t.key])},{default:a(()=>{var _,D;return[!t.type||typeof t.type=="string"?(s(),i(l(q),{key:0,value:d.inputValue[t.key],"onUpdate:value":r=>d.inputValue[t.key]=r,placeholder:(_=t.placeholder)!=null?_:"",type:(D=t.type)!=null?D:"text",onInput:r=>k(r,t.key),onBlur:r=>A(r,t.key)},null,8,["value","onUpdate:value","placeholder","type","onInput","onBlur"])):Array.isArray(t.type)?(s(),i(l(z),{key:1,value:d.inputValue[t.key],"onUpdate:value":r=>d.inputValue[t.key]=r},{default:a(()=>[(s(!0),w(V,null,S(t.type,r=>(s(),i(l(j),{key:typeof r=="string"?r:r.value,value:typeof r=="string"?r:r.value},{default:a(()=>[c(m(typeof r=="string"?r:r.label),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["value","onUpdate:value"])):f("",!0)]}),_:2},1032,["label","help"])}),128))]),_:1})]),_:1},8,["open"]))}}),me={class:"action-item"},ye={key:2},fe=["src"],ve=O({__name:"CrudView",props:{loading:{type:Boolean},title:{},docsPath:{},description:{},createButtonText:{},live:{type:Boolean},emptyTitle:{},entityName:{},fields:{},table:{},videoUrl:{}},emits:["create"],setup(y,{emit:v}){const h=y,b=P(null),B=()=>{var e;h.fields?(e=b.value)==null||e.open():v("create",{})};function d(e,C){var k;"onClick"in e?(k=e.onClick)==null||k.call(e,{key:C.key}):"link"in e&&(typeof e.link=="string"&&se(e.link)?open(e.link,"_blank"):oe.push(e.link))}async function g(e){v("create",e)}const I=G(()=>({"--columnCount":`${h.table.columns.length}`}));return(e,C)=>{const k=H("router-link");return s(),w(V,null,[u(l(K),{direction:"vertical"},{default:a(()=>{var A;return[u(l(ie),null,{default:a(()=>[c(m(e.title),1)]),_:1}),u(l(N),null,{default:a(()=>[c(m(e.description)+" ",1),M(e.$slots,"description",{},void 0,!0),e.docsPath?(s(),i(ne,{key:0,path:e.docsPath},null,8,["path"])):f("",!0)]),_:3}),e.createButtonText?(s(),i(l(L),{key:0,type:"primary",onClick:B},{default:a(()=>[c(m(e.createButtonText),1)]),_:1})):f("",!0),e.$slots.warning?(s(),i(l(pe),{key:1,type:"warning","show-icon":""},{description:a(()=>[M(e.$slots,"warning",{},void 0,!0)]),_:3})):f("",!0),u(l(Y),{style:J(I.value),"data-source":e.table.rows,loading:e.loading&&!e.live,columns:(A=e.table.columns)==null?void 0:A.map(({name:o,align:n},t,p)=>({title:o,key:t,align:n!=null?n:"center"}))},{emptyText:a(()=>[c(m(e.emptyTitle),1)]),headerCell:a(o=>[c(m(o.title),1)]),bodyCell:a(({column:{key:o},record:n})=>[u(l(Q),{open:n.cells[o].hover?void 0:!1},{content:a(()=>[u(l(N),{style:{width:"300px",overflow:"auto","font-family":"monospace"},copyable:"",content:n.cells[o].hover},null,8,["content"])]),default:a(()=>[n.cells[o].tagColor?(s(),i(l(re),{key:0,color:n.cells[o].tagColor},{default:a(()=>[c(m(n.cells[o].text),1)]),_:2},1032,["color"])):n.cells[o].link?(s(),i(k,{key:1,to:n.cells[o].link},{default:a(()=>[c(m(n.cells[o].text),1)]),_:2},1032,["to"])):n.cells[o].actions?(s(),i(l(Z),{key:2},{overlay:a(()=>[u(l(W),null,{default:a(()=>[(s(!0),w(V,null,S(n.cells[o].actions,(t,p)=>(s(),i(l(X),{key:p,danger:t.dangerous,onClick:_=>d(t,n)},{default:a(()=>[U("div",me,[t.icon?(s(),i($,{key:0,path:t.icon},null,8,["path"])):f("",!0),u(l(T),null,{default:a(()=>[c(m(t.label),1)]),_:2},1024)])]),_:2},1032,["danger","onClick"]))),128))]),_:2},1024)]),default:a(()=>[u($,{path:l(E),style:{cursor:"pointer"}},null,8,["path"])]),_:2},1024)):(s(),i(l(T),{key:3},{default:a(()=>[c(m(n.cells[o].text),1)]),_:2},1024))]),_:2},1032,["open"])]),footer:a(()=>[e.live?(s(),i(l(ue),{key:0,justify:"end",gutter:10},{default:a(()=>[u(l(F),null,{default:a(()=>[u(l(x),{size:"small"})]),_:1}),u(l(F),null,{default:a(()=>[u(l(T),null,{default:a(()=>[c(" auto updating ")]),_:1})]),_:1})]),_:1})):f("",!0)]),_:1},8,["style","data-source","loading","columns"]),e.videoUrl?(s(),w("section",ye,[u(l(ce),{orientation:"left"},{default:a(()=>[c("See it in action")]),_:1}),U("iframe",{style:{width:"100%","aspect-ratio":"16/9"},src:e.videoUrl,title:"runtimes example",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,fe)])):f("",!0)]}),_:3}),e.fields?(s(),i(de,{key:0,ref_key:"modalRef",ref:b,fields:e.fields,"entity-name":e.entityName,onCreate:g},null,8,["fields","entity-name"])):f("",!0)],64)}}});const De=ee(ve,[["__scopeId","data-v-bd6bc32c"]]);export{De as C};
//# sourceMappingURL=CrudView.67134afd.js.map
