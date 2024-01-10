import{r as p}from"./router.08175d4d.js";import{d as y,eB as _,o as h,K as k,G as I,b as x,c as C,u as v,v as w}from"./outputWidgets.bf79c6b8.js";import{d as B}from"./index.e5b14e39.js";import{a as D}from"./asyncComputed.42c5da60.js";import"./authorManager.09a2317d.js";import{B as A}from"./build.3f7f8e63.js";import"./index.1e489b02.js";import{P}from"./project.3cb51038.js";import{C as R}from"./CrudView.255ead71.js";import{L as j,Q as E,R as F}from"./icons.cf4b109d.js";import"./FormItem.56138d9e.js";import"./hasIn.36ac051b.js";import"./gateway.8adee4a2.js";import"./index.cf4c23b9.js";import"./record.fe4e890f.js";import"./pubsub.8fba7f4f.js";import"./Title.1751190b.js";import"./Text.db5ef3fa.js";import"./Form.b42a9c68.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.fc0b8e07.js";import"./url.379334d1.js";import"./index.934b837d.js";import"./index.bcfb1cc8.js";import"./index.9404929f.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[r]="d87cde01-de31-45a4-b335-7171c6bd00b9",s._sentryDebugIdIdentifier="sentry-dbid-d87cde01-de31-45a4-b335-7171c6bd00b9")}catch{}})();const S=y({__name:"Builds",setup(s){const l=_().params.projectId,{loading:m,result:d,refetch:b}=D(async()=>{const[t,e]=await Promise.all([A.list(l),P.getStatus(l)]);return{b:t.map(a=>({build:a,status:e.filter(i=>i.buildId==a.id).map(i=>i.status)})),status:e}});let u;h(()=>{u=setInterval(b,1e4)}),k(()=>{clearInterval(u)});const c=[{text:"Deploying",tagColor:"blue",check:t=>{var e,o;return(o=t.build.latest&&t.status.some(a=>a=="Running")&&((e=d.value)==null?void 0:e.status.some(a=>a.buildId!==t.build.id)))!=null?o:!1}},{text:"Deactivating",tagColor:"orange",check:t=>t.build.status==="success"&&!t.build.latest&&t.status.some(e=>e=="Running")},{text:"Failed",tagColor:"orange",check:t=>t.build.latest&&t.status.some(e=>e=="Failed")},{text:"LIVE",tagColor:"green",check:t=>t.build.latest},{text:"Inactive",tagColor:"lightgray",check:t=>t.build.status==="success"},{text:"Aborted",tagColor:"orange",check:t=>t.build.status==="aborted"||t.build.status==="aborted-by-user"},{text:"Failed",tagColor:"orange",check:t=>t.build.status==="failure"},{text:"In progress",tagColor:"red",check:t=>t.build.status==="in-progress"},{text:"Pending",tagColor:"yellow",check:t=>t.build.status==="pending"}];function g(t){var e,o,a,i;return{text:(o=(e=c.find(n=>n.check(t)))==null?void 0:e.text)!=null?o:"unknown",tagColor:(i=(a=c.find(n=>n.check(t)))==null?void 0:a.tagColor)!=null?i:"lightgray"}}const f=I(()=>{const t=[{name:"Id"},{name:"Date"},{name:"Status"},{name:"Actions",align:"right"}];return d.value?{columns:t,rows:d.value.b.map(e=>{var o;return{key:e.build.id,cells:[{link:`/builds/${e.build.id}`,text:e.build.id.slice(0,8)},{text:B(e.build.createdAt)},{...g(e),hover:(o=e.build.log)!=null?o:void 0},{text:"",actions:[{icon:j,label:"Inspect build",onClick:()=>p.push({name:"build",params:{buildId:e.build.id}})},{icon:E,label:"View application logs",onClick:()=>p.push({name:"logs",params:{projectId:l},query:{buildId:e.build.id}})},{icon:F,label:"Download files",onClick:()=>e.build.download()}]}]}})}:{columns:t,rows:[]}});return(t,e)=>(x(),C(R,{"entity-name":"build",loading:v(m),title:"Builds",description:"Each build is a version of your app. You can create a new build by deploying your app from the local editor.","empty-title":"No builds here yet",table:f.value,live:""},null,8,["loading","table"]))}});const st=w(S,[["__scopeId","data-v-808c1b1c"]]);export{st as default};
//# sourceMappingURL=Builds.45d850ce.js.map
