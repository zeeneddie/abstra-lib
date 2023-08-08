import{D as T,_ as A}from"./DropdownMenu.06bbb53d.js";import{d as B,r as I,v as z,b as t,t as f,w as C,S as D,N as o,x as l,c as s,L as h,V,ar as L,W as U,F as m,D as v,O as $,Q as N,q as M,K as E,B as F,A as W,z as j,a as q,G as S}from"./registerWidgets.68572380.js";import{M as G}from"./Modal.dacb9a40.js";import{L as H}from"./LoadingIndicator.5fb5b875.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},u=new Error().stack;u&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[u]="048c8dd8-c122-4062-b2c1-373b1cb3f029",e._sentryDebugIdIdentifier="sentry-dbid-048c8dd8-c122-4062-b2c1-373b1cb3f029")}catch{}})();const K=e=>($("data-v-ed693c76"),e=e(),N(),e),O={class:"main-text"},Q={class:"fields"},Y=["onUpdate:modelValue","type"],J=["onUpdate:modelValue"],P=["value"],R=K(()=>l("div",{class:"separator"},null,-1)),X={class:"buttons"},Z=B({__name:"CreationModal",props:{entityName:null,fields:null},emits:["create"],setup(e,{expose:u,emit:p}){const c=I(null),d=z({inputValue:{}}),b={maxWidth:"350px",height:"unset",padding:"30px"},g={borderBottom:"none",fontSize:"18px",marginBottom:"17px",display:"flex",flexDirection:"column",justifyContent:"center",color:"#4E596A",lineHeight:"22px"},r={color:"#414A58",fontSize:"14px",alignItems:"unset"},w=()=>{var i;return(i=c==null?void 0:c.value)==null?void 0:i.open()},_=()=>{var i;return(i=c==null?void 0:c.value)==null?void 0:i.close()},y=()=>{p("create",d.inputValue),_()};return u({open:w,close:_}),(i,x)=>(t(),f(G,{ref_key:"modalRef",ref:c,"container-style":b,"header-style":g,"content-style":r},{header:C(()=>[D(" Create a new "+o(e.entityName),1)]),content:C(()=>[l("div",O," You may edit the "+o(e.entityName)+" name afterwards at Settings. ",1),l("div",Q,[(t(!0),s(m,null,h(e.fields,n=>{var k;return t(),s("div",{key:n.key,class:"field"},[l("label",null,o(n.label),1),!n.type||typeof n.type=="string"?V((t(),s("input",{key:0,"onUpdate:modelValue":a=>d.inputValue[n.key]=a,type:(k=n.type)!=null?k:"text",class:"ws-name"},null,8,Y)),[[L,d.inputValue[n.key]]]):Array.isArray(n.type)?V((t(),s("select",{key:1,"onUpdate:modelValue":a=>d.inputValue[n.key]=a,class:"ws-name"},[(t(!0),s(m,null,h(n.type,a=>(t(),s("option",{key:typeof a=="string"?a:a.value,value:typeof a=="string"?a:a.value},o(typeof a=="string"?a:a.label),9,P))),128))],8,J)),[[U,d.inputValue[n.key]]]):v("",!0)])}),128))]),R,l("div",X,[l("button",{class:"cancel",onClick:_},"Cancel"),l("button",{class:"create",onClick:y},"Create "+o(e.entityName),1)])]),_:1},512))}});const ee=M(Z,[["__scopeId","data-v-ed693c76"]]),te=e=>($("data-v-8365dfdd"),e=e(),N(),e),ne={key:1,class:"crud-view"},se={class:"header"},ae={class:"title-wrapper"},le={class:"description"},oe={key:0,class:"empty-list"},ce=te(()=>l("img",{src:A},null,-1)),ie={class:"empty-list-title"},de={class:"empty-list-description"},re={key:2},ue=B({__name:"CrudView",props:{loading:{type:Boolean},title:null,description:null,createButtonText:null,emptyTitle:null,entityName:null,fields:null,table:null},emits:["create"],setup(e,{emit:u}){const p=e,c=I(null),d=()=>{var r;p.fields?(r=c.value)==null||r.open():u("create",{})};async function b(r){u("create",r)}const g=E(()=>({"--columnCount":`${p.table.columns.length}`}));return(r,w)=>{const _=q("router-link");return t(),s(m,null,[e.loading?(t(),f(H,{key:0})):(t(),s("div",ne,[l("div",se,[l("div",ae,[l("h1",null,o(e.title),1),l("p",le,o(e.description),1),e.createButtonText?(t(),s("button",{key:0,onClick:d},o(e.createButtonText),1)):v("",!0)])]),e.table.rows.length===0?(t(),s("div",oe,[ce,l("div",ie,o(e.emptyTitle),1),l("div",de,[F(r.$slots,"empty-description",{},void 0,!0)]),e.createButtonText?(t(),s("button",{key:0,onClick:d},o(e.createButtonText),1)):v("",!0)])):(t(),s("table",{key:1,style:W(j(g))},[l("th",null,[(t(!0),s(m,null,h(e.table.columns,(y,i)=>(t(),s("td",{key:i,class:"cell"},o(y.name),1))),128))]),(t(!0),s(m,null,h(e.table.rows,(y,i)=>{var x;return t(),s("tr",{key:i,class:S((x=y.classes)!=null?x:[])},[(t(!0),s(m,null,h(y.cells,(n,k)=>{var a;return t(),s("td",{key:k,class:S((a=n.classes)!=null?a:[])},[n.actions?(t(),f(T,{key:0,title:"Actions","highlight-last":!0,options:n.actions,payload:{key:y.key}},null,8,["options","payload"])):n.link?(t(),f(_,{key:1,to:n.link,class:"runtime-title"},{default:C(()=>[D(o(n.text),1)]),_:2},1032,["to"])):(t(),s("div",re,o(n.text),1))],2)}),128))],2)}),128))],4))])),e.fields?(t(),f(ee,{key:2,ref_key:"modalRef",ref:c,fields:e.fields,"entity-name":e.entityName,onCreate:b},null,8,["fields","entity-name"])):v("",!0)],64)}}});const fe=M(ue,[["__scopeId","data-v-8365dfdd"]]);export{fe as C};
//# sourceMappingURL=CrudView.22ff1852.js.map
