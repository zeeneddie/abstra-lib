import{r as p}from"./router.330b5ee2.js";import{d as y,eA as _,o as h,K as k,G as I,b as x,c as C,u as v,t as w}from"./outputWidgets.3acae187.js";import{d as D}from"./index.30e21000.js";import{a as B}from"./asyncComputed.4acb40f3.js";import{B as A}from"./build.35c29208.js";import"./index.330e6f4e.js";import{P as E}from"./project.7c8c0251.js";import{C as P}from"./CrudView.ad3897c2.js";import{z as j,E as F,G as R}from"./icons.238cb834.js";import"./Form.01134ed5.js";import"./gateway.d73b54c4.js";import"./record.8667ddd6.js";import"./pubsub.bc590f31.js";import"./index.d2e87b7c.js";import"./Title.b0254e64.js";import"./url.ba80c662.js";import"./index.a63dba09.js";import"./index.72042afd.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[r]="a66909e5-c001-46d1-af06-bc4d191c599c",i._sentryDebugIdIdentifier="sentry-dbid-a66909e5-c001-46d1-af06-bc4d191c599c")}catch{}})();const S=y({__name:"Builds",setup(i){const l=_().params.projectId,{loading:m,result:n,refetch:g}=B(async()=>{const[t,e]=await Promise.all([A.list(l),E.getStatus(l)]);return{b:t.map(a=>({build:a,status:e.filter(s=>s.buildId==a.id).map(s=>s.status)})),status:e}});let u;h(()=>{u=setInterval(g,1e4)}),k(()=>{clearInterval(u)});const c=[{text:"Deploying",tagColor:"blue",check:t=>{var e,o;return(o=t.build.latest&&t.status.some(a=>a=="Running")&&((e=n.value)==null?void 0:e.status.some(a=>a.buildId!==t.build.id)))!=null?o:!1}},{text:"Deactivating",tagColor:"orange",check:t=>t.build.status==="success"&&!t.build.latest&&t.status.some(e=>e=="Running")},{text:"Failed",tagColor:"orange",check:t=>t.build.latest&&t.status.some(e=>e=="Failed")},{text:"LIVE",tagColor:"green",check:t=>t.build.latest},{text:"Inactive",tagColor:"lightgray",check:t=>t.build.status==="success"},{text:"Aborted",tagColor:"orange",check:t=>t.build.status==="aborted"||t.build.status==="aborted-by-user"},{text:"Failed",tagColor:"orange",check:t=>t.build.status==="failure"},{text:"In progress",tagColor:"red",check:t=>t.build.status==="in-progress"},{text:"Pending",tagColor:"yellow",check:t=>t.build.status==="pending"}];function b(t){var e,o,a,s;return{text:(o=(e=c.find(d=>d.check(t)))==null?void 0:e.text)!=null?o:"unknown",tagColor:(s=(a=c.find(d=>d.check(t)))==null?void 0:a.tagColor)!=null?s:"lightgray"}}const f=I(()=>{const t=[{name:"Id"},{name:"Date"},{name:"Status"},{name:"Actions",align:"right"}];return n.value?{columns:t,rows:n.value.b.map(e=>{var o;return{key:e.build.id,cells:[{link:`/builds/${e.build.id}`,text:e.build.id.slice(0,8)},{text:D(e.build.createdAt)},{...b(e),hover:(o=e.build.log)!=null?o:void 0},{text:"",actions:[{icon:j,label:"Inspect build",onClick:()=>p.push({name:"build",params:{buildId:e.build.id}})},{icon:F,label:"View application logs",onClick:()=>p.push({name:"logs",params:{projectId:l},query:{buildId:e.build.id}})},{icon:R,label:"Download files",onClick:()=>e.build.download()}]}]}})}:{columns:t,rows:[]}});return(t,e)=>(x(),C(P,{"entity-name":"build",loading:v(m),title:"Builds",description:"Each build is a version of your app. You can create a new build by deploying your app from the local editor.","empty-title":"No builds here yet",table:f.value,live:""},null,8,["loading","table"]))}});const Z=w(S,[["__scopeId","data-v-808c1b1c"]]);export{Z as default};
//# sourceMappingURL=Builds.b747654e.js.map