import{r as p}from"./router.d677740c.js";import{d as y,eA as _,o as h,K as I,G as k,b as x,c as C,u as v,t as w}from"./outputWidgets.e350d8e4.js";import{d as D}from"./index.c53bcd95.js";import{a as B}from"./asyncComputed.11f5ac08.js";import{B as A}from"./build.0cb9ecb6.js";import"./index.13a5dbe3.js";import{P}from"./project.771ffb89.js";import{C as j}from"./CrudView.35101150.js";import{D as E,I as F,K as R}from"./icons.2c394e63.js";import"./Form.b043e834.js";import"./gateway.1fcbfbcf.js";import"./record.8c9e165d.js";import"./pubsub.dd4743a2.js";import"./Text.1223a40d.js";import"./Title.f9a2b403.js";import"./url.958bb521.js";import"./index.6d013bd4.js";import"./index.310b827e.js";import"./index.ecead728.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[r]="cc9f919d-321d-4f89-87dd-a08901466f42",i._sentryDebugIdIdentifier="sentry-dbid-cc9f919d-321d-4f89-87dd-a08901466f42")}catch{}})();const S=y({__name:"Builds",setup(i){const l=_().params.projectId,{loading:m,result:d,refetch:g}=B(async()=>{const[t,e]=await Promise.all([A.list(l),P.getStatus(l)]);return{b:t.map(a=>({build:a,status:e.filter(s=>s.buildId==a.id).map(s=>s.status)})),status:e}});let u;h(()=>{u=setInterval(g,1e4)}),I(()=>{clearInterval(u)});const c=[{text:"Deploying",tagColor:"blue",check:t=>{var e,o;return(o=t.build.latest&&t.status.some(a=>a=="Running")&&((e=d.value)==null?void 0:e.status.some(a=>a.buildId!==t.build.id)))!=null?o:!1}},{text:"Deactivating",tagColor:"orange",check:t=>t.build.status==="success"&&!t.build.latest&&t.status.some(e=>e=="Running")},{text:"Failed",tagColor:"orange",check:t=>t.build.latest&&t.status.some(e=>e=="Failed")},{text:"LIVE",tagColor:"green",check:t=>t.build.latest},{text:"Inactive",tagColor:"lightgray",check:t=>t.build.status==="success"},{text:"Aborted",tagColor:"orange",check:t=>t.build.status==="aborted"||t.build.status==="aborted-by-user"},{text:"Failed",tagColor:"orange",check:t=>t.build.status==="failure"},{text:"In progress",tagColor:"red",check:t=>t.build.status==="in-progress"},{text:"Pending",tagColor:"yellow",check:t=>t.build.status==="pending"}];function b(t){var e,o,a,s;return{text:(o=(e=c.find(n=>n.check(t)))==null?void 0:e.text)!=null?o:"unknown",tagColor:(s=(a=c.find(n=>n.check(t)))==null?void 0:a.tagColor)!=null?s:"lightgray"}}const f=k(()=>{const t=[{name:"Id"},{name:"Date"},{name:"Status"},{name:"Actions",align:"right"}];return d.value?{columns:t,rows:d.value.b.map(e=>{var o;return{key:e.build.id,cells:[{link:`/builds/${e.build.id}`,text:e.build.id.slice(0,8)},{text:D(e.build.createdAt)},{...b(e),hover:(o=e.build.log)!=null?o:void 0},{text:"",actions:[{icon:E,label:"Inspect build",onClick:()=>p.push({name:"build",params:{buildId:e.build.id}})},{icon:F,label:"View application logs",onClick:()=>p.push({name:"logs",params:{projectId:l},query:{buildId:e.build.id}})},{icon:R,label:"Download files",onClick:()=>e.build.download()}]}]}})}:{columns:t,rows:[]}});return(t,e)=>(x(),C(j,{"entity-name":"build",loading:v(m),title:"Builds",description:"Each build is a version of your app. You can create a new build by deploying your app from the local editor.","empty-title":"No builds here yet",table:f.value,live:""},null,8,["loading","table"]))}});const tt=w(S,[["__scopeId","data-v-808c1b1c"]]);export{tt as default};
//# sourceMappingURL=Builds.89b82211.js.map
