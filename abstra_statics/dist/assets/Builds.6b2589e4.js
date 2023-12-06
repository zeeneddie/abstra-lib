import{r as p}from"./router.774776a6.js";import{d as y,eB as _,o as h,K as k,G as x,b as I,c as C,u as w,t as v}from"./outputWidgets.d5e6cc81.js";import{B as D}from"./build.4726fd24.js";import"./index.c5114751.js";import{P as B}from"./project.03e95e7d.js";import{a as A}from"./asyncComputed.bda7377e.js";import{C as E}from"./CrudView.48d933a8.js";import{z as P,E as S,G as j}from"./icons.b2a7ac2f.js";import{f as F}from"./index.b048d0fb.js";import"./Base.94ec4fa5.js";import"./transButton.47db9cbc.js";import"./Text.c99d3fc5.js";import"./Title.1444b2b8.js";import"./index.4a14e36f.js";import"./gateway.71b9bb90.js";import"./record.d9d8ddd5.js";import"./pubsub.6c21d86f.js";import"./url.20e98aa7.js";import"./index.11ee56ae.js";import"./index.9dbd1b96.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[r]="cf2ec40c-8c05-4efa-a4f5-2e4e04890d45",s._sentryDebugIdIdentifier="sentry-dbid-cf2ec40c-8c05-4efa-a4f5-2e4e04890d45")}catch{}})();const R=y({__name:"Builds",setup(s){const l=_().params.projectId,{loading:m,result:n,refetch:g}=A(async()=>{const[t,e]=await Promise.all([D.list(l),B.getStatus(l)]);return{b:t.map(a=>({build:a,status:e.filter(i=>i.buildId==a.id).map(i=>i.status)})),status:e}});let u;h(()=>{u=setInterval(g,1e4)}),k(()=>{clearInterval(u)});const c=[{text:"Deploying",tagColor:"blue",check:t=>{var e,o;return(o=t.build.latest&&t.status.some(a=>a=="Running")&&((e=n.value)==null?void 0:e.status.some(a=>a.buildId!==t.build.id)))!=null?o:!1}},{text:"Deactivating",tagColor:"orange",check:t=>t.build.status==="success"&&!t.build.latest&&t.status.some(e=>e=="Running")},{text:"Failed",tagColor:"orange",check:t=>t.build.latest&&t.status.some(e=>e=="Failed")},{text:"LIVE",tagColor:"green",check:t=>t.build.latest},{text:"Inactive",tagColor:"lightgray",check:t=>t.build.status==="success"},{text:"Aborted",tagColor:"orange",check:t=>t.build.status==="aborted"||t.build.status==="aborted-by-user"},{text:"Failed",tagColor:"orange",check:t=>t.build.status==="failure"},{text:"In progress",tagColor:"red",check:t=>t.build.status==="in-progress"},{text:"Pending",tagColor:"yellow",check:t=>t.build.status==="pending"}];function f(t){var e,o,a,i;return{text:(o=(e=c.find(d=>d.check(t)))==null?void 0:e.text)!=null?o:"unknown",tagColor:(i=(a=c.find(d=>d.check(t)))==null?void 0:a.tagColor)!=null?i:"lightgray"}}const b=x(()=>{const t=[{name:"Id"},{name:"Date"},{name:"Status"},{name:"Actions",align:"right"}];return n.value?{columns:t,rows:n.value.b.map(e=>{var o;return{key:e.build.id,cells:[{link:`/builds/${e.build.id}`,text:e.build.id.slice(0,8)},{text:F(e.build.createdAt,Date.now(),{addSuffix:!0})},{...f(e),hover:(o=e.build.log)!=null?o:void 0},{text:"",actions:[{icon:P,label:"Inspect build",onClick:()=>p.push({name:"build",params:{buildId:e.build.id}})},{icon:S,label:"View application logs",onClick:()=>p.push({name:"logs",params:{projectId:l},query:{buildId:e.build.id}})},{icon:j,label:"Download files",onClick:()=>e.build.download()}]}]}})}:{columns:t,rows:[]}});return(t,e)=>(I(),C(E,{"entity-name":"build",loading:w(m),title:"Builds",description:"Each build is a version of your app. You can create a new build by deploying your app from the local editor.","empty-title":"No builds here yet",table:b.value,live:""},null,8,["loading","table"]))}});const et=v(R,[["__scopeId","data-v-201b9738"]]);export{et as default};
//# sourceMappingURL=Builds.6b2589e4.js.map
