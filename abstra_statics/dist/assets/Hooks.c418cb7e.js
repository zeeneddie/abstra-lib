import{d as k,ey as y,G as h,b,c as g,u as _}from"./outputWidgets.9d44d9f3.js";import{e as w,a as C,b as H}from"./icons.6774e95a.js";import{a as I}from"./asyncComputed.99132b68.js";import{H as p}from"./hooks.057fb77d.js";import{C as x}from"./CrudView.533819ab.js";import{a as D}from"./ant-design.c83e5e33.js";import"./activeRecord.cde63aa9.js";import"./pubsub.36fbfdaf.js";import"./Text.0ad03b29.js";import"./Title.2f009ad9.js";import"./transButton.41dbfda3.js";import"./router.b1f71dc3.js";import"./Form.97529076.js";import"./index.a9ce4fb3.js";import"./url.2bddec37.js";import"./index.ed7c13f2.js";import"./index.6cc0b47a.js";import"./index.eaa93dcb.js";import"./index.0eda3d6a.js";import"./index.a18b3bba.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="43c57ead-2c6c-41d9-a31f-b5a0f4cf6a2d",a._sentryDebugIdIdentifier="sentry-dbid-43c57ead-2c6c-41d9-a31f-b5a0f4cf6a2d")}catch{}})();const L=k({__name:"Hooks",setup(a){const n=y(),{loading:s,result:i,refetch:c}=I(()=>p.list()),l=({key:t})=>n.push({path:`/_editor/hook/${encodeURIComponent(t)}`}),d=async({key:t})=>{var o,e;await((e=(o=i.value)==null?void 0:o.find(r=>r.path===t))==null?void 0:e.duplicate()),c()},m=async()=>{const t=await p.create();l({key:t.path})},u=async({key:t})=>{var o,e;await D("Are you sure you want to delete this hook?")&&(await((e=(o=i.value)==null?void 0:o.find(r=>r.path===t))==null?void 0:e.delete()),c())},f=h(()=>{var t,o;return{columns:[{name:"Hook Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(o=(t=i.value)==null?void 0:t.map(e=>({key:e.path,cells:[{text:e.title,link:`/_editor/hook/${encodeURIComponent(e.path)}`},{text:e.path},{text:"",actions:[{icon:w,label:"Edit Hook",onClick:l},{icon:C,label:"Duplicate",onClick:d},{icon:H,label:"Delete",onClick:u,dangerous:!0}]}]})))!=null?o:[]}});return(t,o)=>(b(),g(x,{loading:_(s),title:"Python Hooks",description:"Trigger your Python scripts with a request.","create-button-text":"Create Hook","empty-title":"No hooks here yet",table:f.value,"entity-name":"Hook",onCreate:m},null,8,["loading","table"]))}});export{L as default};
//# sourceMappingURL=Hooks.c418cb7e.js.map