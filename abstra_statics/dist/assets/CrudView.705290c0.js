import{D as M,_ as D}from"./DropdownMenu.7287e391.js";import{L as z}from"./CircularLoading.79e96d11.js";import{d as S,r as B,v as A,b as t,t as y,w as C,S as N,N as s,x as n,V as L,W as O,O as V,Q as T,q as $,K as j,c as a,D as v,B as E,A as F,z as W,F as p,L as x,a as q,G as w}from"./registerWidgets.ba12cd54.js";import{M as G}from"./Modal.9cffe8c6.js";const H=e=>(V("data-v-1701cf99"),e=e(),T(),e),K={class:"main-text"},Q=["placeholder"],U=H(()=>n("div",{class:"separator"},null,-1)),Y={class:"buttons"},J=S({__name:"CreationModal",props:{entityName:null},emits:["create"],setup(e,{expose:_,emit:h}){const o=B(null),d=A({inputValue:""}),k={maxWidth:"350px",height:"unset",padding:"30px"},f={borderBottom:"none",fontSize:"18px",marginBottom:"17px",display:"flex",flexDirection:"column",justifyContent:"center",color:"#4E596A",lineHeight:"22px"},c={color:"#414A58",fontSize:"14px",alignItems:"unset"},g=()=>{var l;return(l=o==null?void 0:o.value)==null?void 0:l.open()},u=()=>{var l;return(l=o==null?void 0:o.value)==null?void 0:l.close()},r=()=>{h("create",d.inputValue),u()};return _({open:g,close:u}),(l,m)=>(t(),y(G,{ref_key:"modalRef",ref:o,"container-style":k,"header-style":f,"content-style":c},{header:C(()=>[N(" Create a new "+s(e.entityName),1)]),content:C(()=>[n("div",K," You may edit the "+s(e.entityName)+" name afterwards at Settings. ",1),L(n("input",{"onUpdate:modelValue":m[0]||(m[0]=i=>d.inputValue=i),class:"ws-name",placeholder:`Name your ${e.entityName}`},null,8,Q),[[O,d.inputValue]]),U,n("div",Y,[n("button",{class:"cancel",onClick:u},"Cancel"),n("button",{class:"create",onClick:r},"Create "+s(e.entityName),1)])]),_:1},512))}});const P=$(J,[["__scopeId","data-v-1701cf99"]]),R=e=>(V("data-v-a8db99af"),e=e(),T(),e),X={key:1,class:"runtimes-container"},Z={class:"header"},ee={class:"title-wrapper"},te={class:"description"},ne={key:0,class:"empty-list"},ae=R(()=>n("img",{src:D},null,-1)),se={class:"empty-list-title"},oe={class:"empty-list-description"},le={key:2},ie=S({__name:"CrudView",props:{loading:{type:Boolean},title:null,description:null,createButtonText:null,emptyTitle:null,entityName:null,askNameOnCreate:{type:Boolean},table:null},emits:["create"],setup(e,{emit:_}){const h=e,o=B(null),d=()=>{var c;(c=o.value)==null||c.open()};async function k(c){_("create",c)}const f=j(()=>({"--columnCount":`${h.table.columns.length}`}));return(c,g)=>{const u=q("router-link");return t(),a(p,null,[e.loading?(t(),y(z,{key:0,class:"loading-wrapper",justify:"center"})):(t(),a("div",X,[n("div",Z,[n("div",ee,[n("h1",null,s(e.title),1),n("p",te,s(e.description),1),e.createButtonText?(t(),a("button",{key:0,onClick:d},s(e.createButtonText),1)):v("",!0)])]),e.table.rows.length===0?(t(),a("div",ne,[ae,n("div",se,s(e.emptyTitle),1),n("div",oe,[E(c.$slots,"empty-description",{},void 0,!0)]),e.createButtonText?(t(),a("button",{key:0,onClick:d},s(e.createButtonText),1)):v("",!0)])):(t(),a("table",{key:1,style:F(W(f))},[n("th",null,[(t(!0),a(p,null,x(e.table.columns,(r,l)=>(t(),a("td",{key:l,class:"cell"},s(r.name),1))),128))]),(t(!0),a(p,null,x(e.table.rows,(r,l)=>{var m;return t(),a("tr",{key:l,class:w((m=r.classes)!=null?m:[])},[(t(!0),a(p,null,x(r.cells,(i,I)=>{var b;return t(),a("td",{key:I,class:w((b=i.classes)!=null?b:[])},[i.actions?(t(),y(M,{key:0,title:"Actions","highlight-last":!0,options:i.actions,payload:{key:r.key}},null,8,["options","payload"])):i.link?(t(),y(u,{key:1,to:i.link,class:"runtime-title"},{default:C(()=>[N(s(i.text),1)]),_:2},1032,["to"])):(t(),a("div",le,s(i.text),1))],2)}),128))],2)}),128))],4))])),e.askNameOnCreate?(t(),y(P,{key:2,ref_key:"modalRef",ref:o,"entity-name":e.entityName,onCreate:k},null,8,["entity-name"])):v("",!0)],64)}}});const me=$(ie,[["__scopeId","data-v-a8db99af"]]);export{me as C};
//# sourceMappingURL=CrudView.705290c0.js.map
