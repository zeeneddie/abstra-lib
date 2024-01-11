import{r as p}from"./router.40ff7b2b.js";import{d as y,eB as _,o as h,K as k,G as I,b as x,c as C,u as v,v as w}from"./outputWidgets.308fc26e.js";import{d as B}from"./index.a1e57d14.js";import{a as D}from"./asyncComputed.7ba10fe2.js";import"./authorManager.61b245b2.js";import{B as A}from"./build.813b03d4.js";import"./index.61e3d21d.js";import{P}from"./project.ce2bdfda.js";import{C as R}from"./CrudView.edbfe69a.js";import{L as j,Q as E,R as F}from"./icons.99d10079.js";import"./FormItem.d0e912fc.js";import"./hasIn.1b9bee8b.js";import"./gateway.8216c3fe.js";import"./index.cf4c23b9.js";import"./record.1ea6e7e1.js";import"./pubsub.d9c6c339.js";import"./Title.3127a7b5.js";import"./Text.e9c2c18e.js";import"./Form.b644815c.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.e0190f24.js";import"./url.222c9a1f.js";import"./index.e2bf0b77.js";import"./index.6eb62518.js";import"./index.afc8f873.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[r]="0b181bd5-cd7d-4186-9338-0ff0b76674db",s._sentryDebugIdIdentifier="sentry-dbid-0b181bd5-cd7d-4186-9338-0ff0b76674db")}catch{}})();const S=y({__name:"Builds",setup(s){const l=_().params.projectId,{loading:m,result:d,refetch:b}=D(async()=>{const[t,e]=await Promise.all([A.list(l),P.getStatus(l)]);return{b:t.map(a=>({build:a,status:e.filter(i=>i.buildId==a.id).map(i=>i.status)})),status:e}});let u;h(()=>{u=setInterval(b,1e4)}),k(()=>{clearInterval(u)});const c=[{text:"Deploying",tagColor:"blue",check:t=>{var e,o;return(o=t.build.latest&&t.status.some(a=>a=="Running")&&((e=d.value)==null?void 0:e.status.some(a=>a.buildId!==t.build.id)))!=null?o:!1}},{text:"Deactivating",tagColor:"orange",check:t=>t.build.status==="success"&&!t.build.latest&&t.status.some(e=>e=="Running")},{text:"Failed",tagColor:"orange",check:t=>t.build.latest&&t.status.some(e=>e=="Failed")},{text:"LIVE",tagColor:"green",check:t=>t.build.latest},{text:"Inactive",tagColor:"lightgray",check:t=>t.build.status==="success"},{text:"Aborted",tagColor:"orange",check:t=>t.build.status==="aborted"||t.build.status==="aborted-by-user"},{text:"Failed",tagColor:"orange",check:t=>t.build.status==="failure"},{text:"In progress",tagColor:"red",check:t=>t.build.status==="in-progress"},{text:"Pending",tagColor:"yellow",check:t=>t.build.status==="pending"}];function g(t){var e,o,a,i;return{text:(o=(e=c.find(n=>n.check(t)))==null?void 0:e.text)!=null?o:"unknown",tagColor:(i=(a=c.find(n=>n.check(t)))==null?void 0:a.tagColor)!=null?i:"lightgray"}}const f=I(()=>{const t=[{name:"Id"},{name:"Date"},{name:"Status"},{name:"Actions",align:"right"}];return d.value?{columns:t,rows:d.value.b.map(e=>{var o;return{key:e.build.id,cells:[{link:`/builds/${e.build.id}`,text:e.build.id.slice(0,8)},{text:B(e.build.createdAt)},{...g(e),hover:(o=e.build.log)!=null?o:void 0},{text:"",actions:[{icon:j,label:"Inspect build",onClick:()=>p.push({name:"build",params:{buildId:e.build.id}})},{icon:E,label:"View application logs",onClick:()=>p.push({name:"logs",params:{projectId:l},query:{buildId:e.build.id}})},{icon:F,label:"Download files",onClick:()=>e.build.download()}]}]}})}:{columns:t,rows:[]}});return(t,e)=>(x(),C(R,{"entity-name":"build",loading:v(m),title:"Builds",description:"Each build is a version of your app. You can create a new build by deploying your app from the local editor.","empty-title":"No builds here yet",table:f.value,live:""},null,8,["loading","table"]))}});const st=w(S,[["__scopeId","data-v-808c1b1c"]]);export{st as default};
//# sourceMappingURL=Builds.8f6e07c8.js.map