import{d as k,ey as y,H as h,b,c as g,u as _}from"./outputWidgets.397b3720.js";import{e as w,a as H,b as C}from"./icons.5e65f599.js";import{a as I}from"./asyncComputed.28fc9d36.js";import{H as p}from"./hooks.62ea9eb4.js";import{C as x}from"./CrudView.77c1d16d.js";import{a as D}from"./ant-design.29edbf4a.js";import"./activeRecord.6bb6b853.js";import"./pubsub.fe0f0397.js";import"./index.19008df2.js";import"./Title.382247fb.js";import"./Form.5ce50c8f.js";import"./router.3bc1b205.js";import"./index.06276212.js";import"./url.53bc193a.js";import"./index.4acaedbb.js";import"./index.c9ea7155.js";import"./index.40ca2e79.js";import"./index.e12747aa.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="a8ef92dc-f3ae-41cf-abc8-a3e732d25991",a._sentryDebugIdIdentifier="sentry-dbid-a8ef92dc-f3ae-41cf-abc8-a3e732d25991")}catch{}})();const J=k({__name:"Hooks",setup(a){const n=y(),{loading:s,result:i,refetch:c}=I(()=>p.list()),l=({key:e})=>n.push({path:`/_editor/hook/${encodeURIComponent(e)}`}),d=async({key:e})=>{var o,t;await((t=(o=i.value)==null?void 0:o.find(r=>r.path===e))==null?void 0:t.duplicate()),c()},u=async()=>{const e=await p.create();l({key:e.path})},m=async({key:e})=>{var o,t;await D("Are you sure you want to delete this hook?")&&(await((t=(o=i.value)==null?void 0:o.find(r=>r.path===e))==null?void 0:t.delete()),c())},f=h(()=>{var e,o;return{columns:[{name:"Hook Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(o=(e=i.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,link:`/_editor/hook/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",actions:[{icon:w,label:"Edit Hook",onClick:l},{icon:H,label:"Duplicate",onClick:d},{icon:C,label:"Delete",onClick:m,dangerous:!0}]}]})))!=null?o:[]}});return(e,o)=>(b(),g(x,{loading:_(s),title:"Python Hooks",description:"Trigger your Python scripts with a request.","create-button-text":"Create Hook","empty-title":"No hooks here yet",table:f.value,"entity-name":"Hook",onCreate:u},null,8,["loading","table"]))}});export{J as default};
//# sourceMappingURL=Hooks.522f3abd.js.map
