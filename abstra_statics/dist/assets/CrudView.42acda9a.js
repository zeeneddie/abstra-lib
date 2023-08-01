import{D as M,_ as T}from"./DropdownMenu.1816b8ae.js";import{d as B,r as I,v as z,b as t,t as f,w as C,S as V,N as o,x as n,c as s,L as k,V as A,ar as L,F as p,O as D,Q as N,q as $,K as E,D as g,B as F,A as U,z as j,a as q,G as S}from"./registerWidgets.5bbfbb1a.js";import{M as G}from"./Modal.34b86d8f.js";import{L as H}from"./LoadingIndicator.2d4920b8.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d=new Error().stack;d&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[d]="f8e6146a-aeb0-40fa-8c86-f6670d57b7bd",e._sentryDebugIdIdentifier="sentry-dbid-f8e6146a-aeb0-40fa-8c86-f6670d57b7bd")}catch{}})();const K=e=>(D("data-v-c81b14a0"),e=e(),N(),e),O={class:"main-text"},Q={class:"fields"},W=["onUpdate:modelValue","type"],Y=K(()=>n("div",{class:"separator"},null,-1)),J={class:"buttons"},P=B({__name:"CreationModal",props:{entityName:null,fields:null},emits:["create"],setup(e,{expose:d,emit:y}){const l=I(null),u=z({inputValue:{}}),b={maxWidth:"350px",height:"unset",padding:"30px"},v={borderBottom:"none",fontSize:"18px",marginBottom:"17px",display:"flex",flexDirection:"column",justifyContent:"center",color:"#4E596A",lineHeight:"22px"},c={color:"#414A58",fontSize:"14px",alignItems:"unset"},w=()=>{var i;return(i=l==null?void 0:l.value)==null?void 0:i.open()},m=()=>{var i;return(i=l==null?void 0:l.value)==null?void 0:i.close()},r=()=>{y("create",u.inputValue),m()};return d({open:w,close:m}),(i,x)=>(t(),f(G,{ref_key:"modalRef",ref:l,"container-style":b,"header-style":v,"content-style":c},{header:C(()=>[V(" Create a new "+o(e.entityName),1)]),content:C(()=>[n("div",O," You may edit the "+o(e.entityName)+" name afterwards at Settings. ",1),n("div",Q,[(t(!0),s(p,null,k(e.fields,a=>{var _;return t(),s("div",{key:a.key,class:"field"},[n("label",null,o(a.label),1),A(n("input",{"onUpdate:modelValue":h=>u.inputValue[a.key]=h,type:(_=a.type)!=null?_:"text",class:"ws-name"},null,8,W),[[L,u.inputValue[a.key]]])])}),128))]),Y,n("div",J,[n("button",{class:"cancel",onClick:m},"Cancel"),n("button",{class:"create",onClick:r},"Create "+o(e.entityName),1)])]),_:1},512))}});const R=$(P,[["__scopeId","data-v-c81b14a0"]]),X=e=>(D("data-v-8365dfdd"),e=e(),N(),e),Z={key:1,class:"crud-view"},ee={class:"header"},te={class:"title-wrapper"},ne={class:"description"},se={key:0,class:"empty-list"},ae=X(()=>n("img",{src:T},null,-1)),oe={class:"empty-list-title"},le={class:"empty-list-description"},ie={key:2},ce=B({__name:"CrudView",props:{loading:{type:Boolean},title:null,description:null,createButtonText:null,emptyTitle:null,entityName:null,fields:null,table:null},emits:["create"],setup(e,{emit:d}){const y=e,l=I(null),u=()=>{var c;y.fields?(c=l.value)==null||c.open():d("create",{})};async function b(c){d("create",c)}const v=E(()=>({"--columnCount":`${y.table.columns.length}`}));return(c,w)=>{const m=q("router-link");return t(),s(p,null,[e.loading?(t(),f(H,{key:0})):(t(),s("div",Z,[n("div",ee,[n("div",te,[n("h1",null,o(e.title),1),n("p",ne,o(e.description),1),e.createButtonText?(t(),s("button",{key:0,onClick:u},o(e.createButtonText),1)):g("",!0)])]),e.table.rows.length===0?(t(),s("div",se,[ae,n("div",oe,o(e.emptyTitle),1),n("div",le,[F(c.$slots,"empty-description",{},void 0,!0)]),e.createButtonText?(t(),s("button",{key:0,onClick:u},o(e.createButtonText),1)):g("",!0)])):(t(),s("table",{key:1,style:U(j(v))},[n("th",null,[(t(!0),s(p,null,k(e.table.columns,(r,i)=>(t(),s("td",{key:i,class:"cell"},o(r.name),1))),128))]),(t(!0),s(p,null,k(e.table.rows,(r,i)=>{var x;return t(),s("tr",{key:i,class:S((x=r.classes)!=null?x:[])},[(t(!0),s(p,null,k(r.cells,(a,_)=>{var h;return t(),s("td",{key:_,class:S((h=a.classes)!=null?h:[])},[a.actions?(t(),f(M,{key:0,title:"Actions","highlight-last":!0,options:a.actions,payload:{key:r.key}},null,8,["options","payload"])):a.link?(t(),f(m,{key:1,to:a.link,class:"runtime-title"},{default:C(()=>[V(o(a.text),1)]),_:2},1032,["to"])):(t(),s("div",ie,o(a.text),1))],2)}),128))],2)}),128))],4))])),e.fields?(t(),f(R,{key:2,ref_key:"modalRef",ref:l,fields:e.fields,"entity-name":e.entityName,onCreate:b},null,8,["fields","entity-name"])):g("",!0)],64)}}});const me=$(ce,[["__scopeId","data-v-8365dfdd"]]);export{me as C};
//# sourceMappingURL=CrudView.42acda9a.js.map
