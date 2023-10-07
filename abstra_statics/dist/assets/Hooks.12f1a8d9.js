import{d as k,ez as y,J as h,b,c as _,u as g}from"./outputWidgets.a63119cc.js";import{e as w,a as H,b as C}from"./icons.1038fc63.js";import{a as I}from"./asyncComputed.0765bec9.js";import{H as p}from"./hooks.12397854.js";import{_ as x}from"./CrudView.vue_vue_type_script_setup_true_lang.239784ed.js";import{a as D}from"./ant-design.c652125d.js";import"./activeRecord.799e4af2.js";import"./pubsub.229f97b0.js";import"./index.cd450d2a.js";import"./Title.96f1946a.js";import"./Form.fd17293d.js";import"./index.14800d12.js";import"./index.80cbdddc.js";import"./index.71778fd1.js";import"./index.8db1387d.js";import"./index.575c8c16.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="164ae195-851b-4f35-9a5c-164e52cd4642",a._sentryDebugIdIdentifier="sentry-dbid-164ae195-851b-4f35-9a5c-164e52cd4642")}catch{}})();const j=k({__name:"Hooks",setup(a){const n=y(),{loading:s,result:i,refetch:c}=I(()=>p.list()),l=({key:e})=>n.push({path:`/_editor/hook/${encodeURIComponent(e)}`}),d=async({key:e})=>{var o,t;await((t=(o=i.value)==null?void 0:o.find(r=>r.path===e))==null?void 0:t.duplicate()),c()},u=async()=>{const e=await p.create();l({key:e.path})},m=async({key:e})=>{var o,t;await D("Are you sure you want to delete this hook?")&&(await((t=(o=i.value)==null?void 0:o.find(r=>r.path===e))==null?void 0:t.delete()),c())},f=h(()=>{var e,o;return{columns:[{name:"Hook Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(o=(e=i.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,link:`/_editor/hook/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",actions:[{icon:w,label:"Edit Hook",onClick:l},{icon:H,label:"Duplicate",onClick:d},{icon:C,label:"Delete",onClick:m,dangerous:!0}]}]})))!=null?o:[]}});return(e,o)=>(b(),_(x,{loading:g(s),title:"Python Hooks",description:"Trigger your Python scripts with a request.","create-button-text":"Create Hook","empty-title":"No hooks here yet",table:f.value,"entity-name":"Hook",onCreate:u},null,8,["loading","table"]))}});export{j as default};
//# sourceMappingURL=Hooks.12f1a8d9.js.map
