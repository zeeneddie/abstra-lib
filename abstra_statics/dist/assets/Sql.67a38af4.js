import{f as u,eG as I,d as x,eB as q,r as i,o as k,S as y,b as p,ev as g,w as f,u as c,c as D,ex as A,e as O,bG as B,ar as h,aD as P,eC as R,eD as V,cG as j,eE as E,eF as N,v as F}from"./outputWidgets.25dce6ef.js";import"./router.e51f5f97.js";import"./index.9de01bc6.js";import{P as L}from"./project.568c17db.js";import{e as M}from"./toggleHighContrast.6a46de1e.js";import{A as Q}from"./index.fc4c597e.js";import{A as $}from"./index.85d40d30.js";import"./Form.3655a4e5.js";import"./hasIn.e0d864a0.js";import"./popupNotifcation.c74dae43.js";import"./index.cf4c23b9.js";import"./record.7f3a448e.js";import"./pubsub.d8283e38.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="326ceedb-4900-4da8-b19d-a8391a42766b",e._sentryDebugIdIdentifier="sentry-dbid-326ceedb-4900-4da8-b19d-a8391a42766b")}catch{}})();var z={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"}}]},name:"caret-right",theme:"outlined"};const G=z;function S(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable}))),n.forEach(function(r){T(e,r,a[r])})}return e}function T(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var b=function(t,a){var n=S({},t,a.attrs);return u(I,S({},n,{icon:G}),null)};b.displayName="CaretRightOutlined";b.inheritAttrs=!1;const H=b;function J(e){const t={};for(const a in e)e.hasOwnProperty(a)&&(t[a]=String(e[a]));return t}const U=e=>(E("data-v-29bbdaa2"),e=e(),N(),e),W={class:"container"},X=U(()=>O("br",null,null,-1)),Y=x({__name:"Sql",setup(e){const a=q().params.projectId,n=i(null),r=i(""),_=i([]),v=i([]),m=i([]),w=async()=>{const o=await L.executeQuery(a,r.value,[]);if(y.set("lastQuery",r.value),!o)return;const{returns:s,errors:d}=o;m.value=d,v.value=s.fields.map(l=>({title:l.name,key:l.name,dataIndex:l.name})),_.value=s.result.map((l,C)=>J({key:`${C+1}`,...l}))};return k(()=>{const o=M.create(n.value,{language:"sql",value:r.value,fontFamily:"monospace",lineNumbers:"on",minimap:{enabled:!1},scrollbar:{vertical:"hidden",horizontal:"visible"},fontSize:14,scrollBeyondLastLine:!1,lineHeight:20});o.onDidChangeModelContent(()=>{r.value=o.getValue()});const s=y.get("lastQuery");s&&(r.value=s,o.setValue(s))}),(o,s)=>(p(),g("div",W,[u(c(Q),{gap:"large",class:"sql-container",align:"center"},{default:f(()=>[O("div",{ref_key:"sqlEditor",ref:n,class:"sql-editor"},null,512),u(c(B),{type:"primary",onClick:w},{icon:f(()=>[u(c(H))]),default:f(()=>[h(" Run ")]),_:1})]),_:1}),m.value.length?(p(),D(c($),{key:0,type:"error","show-icon":""},{message:f(()=>[(p(!0),g(P,null,R(m.value,d=>(p(),g("span",{key:d},[h(V(d)+" ",1),X]))),128))]),_:1})):A("",!0),u(c(j),{style:{width:"100%"},scroll:{x:100},"data-source":_.value,columns:v.value},null,8,["data-source","columns"])]))}});const de=F(Y,[["__scopeId","data-v-29bbdaa2"]]);export{de as default};
//# sourceMappingURL=Sql.67a38af4.js.map
