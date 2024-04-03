import{f as c,eG as N,d as T,eA as z,H as U,r as H,b as d,c as m,w as u,u as l,aq as y,dj as L,bF as w,e as j,eD as O,eu as P,ew as _,cN as M,cl as G,cD as q,eE as J,eF as Q,v as W}from"./outputWidgets.b6281ddd.js";import{C as b}from"./router.fb8b2bbf.js";import{p as X}from"./popupNotifcation.f4ca9331.js";import"./index.3003d4e2.js";import{a as Y}from"./asyncComputed.87b89de5.js";import{a as Z}from"./ant-design.d420447b.js";import{_ as K}from"./DocsButton.vue_vue_type_script_setup_true_lang.73ce8d01.js";import{D as ee}from"./DownloadOutlined.f0b0e5f7.js";import{D as te}from"./DeleteOutlined.6cf783d7.js";import{A as ne}from"./Title.cf7b0ba4.js";import{A as S}from"./Paragraph.87e5c88f.js";import{C as re}from"./Card.691279c5.js";import"./Form.64aa12be.js";import"./hasIn.fa8badbc.js";import"./index.cf4c23b9.js";import"./record.5472cc64.js";import"./pubsub.3bfaef01.js";import"./index.a577e013.js";import"./Modal.f720b408.js";import"./DeleteOutlined.f8ba9770.js";import"./Text.266d831f.js";import"./index.81455936.js";import"./TabPane.fac8b66a.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="56a89787-674f-4df4-a37a-791b1480946a",n._sentryDebugIdIdentifier="sentry-dbid-56a89787-674f-4df4-a37a-791b1480946a")}catch{}})();var ae={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"};const oe=ae;function A(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?Object(arguments[e]):{},a=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable}))),a.forEach(function(s){le(n,s,r[s])})}return n}function le(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}var I=function(e,r){var a=A({},e,r.attrs);return c(N,A({},a,{icon:ee}),null)};I.displayName="DownloadOutlined";I.inheritAttrs=!1;const ie=I;function E(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?Object(arguments[e]):{},a=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable}))),a.forEach(function(s){se(n,s,r[s])})}return n}function se(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}var C=function(e,r){var a=E({},e,r.attrs);return c(N,E({},a,{icon:oe}),null)};C.displayName="UploadOutlined";C.inheritAttrs=!1;const ce=C;class k{constructor(e){this.projectId=e}static fromProjectId(e){return new k(e)}async list(){return b.get(`projects/${this.projectId}/files`)}async upload(e){const r={"Content-Type":"multipart/form-data"};return b.post(`projects/${this.projectId}/files/upload?path=${encodeURIComponent(e.name)}`,e,r)}async download(e){return b.getBlob(`projects/${this.projectId}/files/download?path=${encodeURIComponent(e)}`)}async delete(e){return b.delete(`projects/${this.projectId}/files?path=${encodeURIComponent(e)}`)}async move(e,r){return b.patch(`projects/${this.projectId}/files?path=${encodeURIComponent(e)}&newPath=${encodeURIComponent(r)}`,{})}}const ue=n=>(J("data-v-ef5665c8"),n=n(),Q(),n),de=ue(()=>j("br",null,null,-1)),pe={key:0},fe={key:0,class:"file-size"},me=T({__name:"Files",setup(n){const r=z().params.projectId,a=k.fromProjectId(r),{loading:s,result:x,refetch:D}=Y(()=>a.list());function $(t){var i,o;return{key:t.path,title:t.name,isLeaf:t.type==="file",file:t,children:t.type==="file"?[]:(o=(i=t.children)==null?void 0:i.map($))!=null?o:[]}}const p=U(()=>{var t;return(t=x.value)==null?void 0:t.map($)}),F=t=>{var i,o;return t.isLeaf?1:(o=(i=t.children)==null?void 0:i.reduce((f,h)=>f+F(h),0))!=null?o:0},v=U(()=>p.value?p==null?void 0:p.value.reduce((t,i)=>t+F(i),0):0),g=H(!1);function R(){const t=document.createElement("input");t.type="file",t.onchange=async()=>{var o;const i=(o=t.files)==null?void 0:o[0];if(!!i)try{g.value=!0,await a.upload(i),await D()}catch{X("Failed to upload file","File already exists")}finally{g.value=!1}},t.click()}async function V(t){if(!t)return;const i=await a.download(t.path),o=document.createElement("a");o.href=URL.createObjectURL(i),o.download=t.name,o.click()}async function B(t){!t||await Z("Are you sure you want to delete this file?")&&(await a.delete(t.path),await D())}return(t,i)=>(d(),m(l(q),{direction:"vertical"},{default:u(()=>[c(l(ne),null,{default:u(()=>[y("Files")]),_:1}),c(l(S),null,{default:u(()=>[y(" Here you can upload, download and delete files in your persistent dir."),de,y(" Files can be used in your scripts. "),c(K,{path:"files"}),L(t.$slots,"description",{},void 0,!0)]),_:3}),c(l(w),{type:"primary",loading:g.value,onClick:R},{default:u(()=>[c(l(ce)),y(" Upload ")]),_:1},8,["loading"]),c(l(re),null,{default:u(()=>[v.value>0?(d(),m(l(S),{key:0},{default:u(()=>[j("b",null,[y(O(v.value)+" file",1),v.value!==1?(d(),P("span",pe,"s")):_("",!0)])]),_:1})):_("",!0),p.value&&p.value.length>0?(d(),m(l(M),{key:1,"tree-data":p.value,selectable:!1},{title:u(({title:o,isLeaf:f,file:h})=>[j("span",null,[y(O(o)+" ",1),f?(d(),P("span",fe,"("+O(h.size)+")",1)):_("",!0)]),f?(d(),m(l(w),{key:0,type:"text",size:"small",style:{float:"inline-end"},onClick:()=>V(h)},{default:u(()=>[c(l(ie))]),_:2},1032,["onClick"])):_("",!0),f?(d(),m(l(w),{key:1,type:"text",size:"small",style:{float:"inline-end"},onClick:()=>B(h)},{default:u(()=>[c(l(te))]),_:2},1032,["onClick"])):_("",!0)]),_:1},8,["tree-data"])):(d(),m(l(G),{key:2,description:l(s)?"Loading...":"No files"},null,8,["description"]))]),_:1})]),_:3}))}});const Ve=W(me,[["__scopeId","data-v-ef5665c8"]]);export{Ve as default};
//# sourceMappingURL=Files.8d592e59.js.map
