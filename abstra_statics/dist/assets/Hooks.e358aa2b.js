import{d as k,ez as y,J as h,b,c as _,u as g}from"./outputWidgets.d6897520.js";import{e as w,a as H,b as C}from"./icons.20b5fc8a.js";import{a as I}from"./asyncComputed.2c363ccc.js";import{H as d}from"./hooks.00c0c0b3.js";import{_ as x}from"./CrudView.vue_vue_type_script_setup_true_lang.eece189e.js";import{a as D}from"./ant-design.25ee6641.js";import"./activeRecord.e97440b4.js";import"./pubsub.e0b33cd4.js";import"./index.59123055.js";import"./Title.9e102f51.js";import"./Form.a2bccbf0.js";import"./index.0f5fc52a.js";import"./index.7c1a9101.js";import"./index.a2784b6b.js";import"./index.30191c77.js";import"./index.dcf9fd0a.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="747d055f-b3da-4196-ab37-65c7774a27a5",a._sentryDebugIdIdentifier="sentry-dbid-747d055f-b3da-4196-ab37-65c7774a27a5")}catch{}})();const j=k({__name:"Hooks",setup(a){const n=y(),{loading:s,result:i,refetch:c}=I(()=>d.list()),l=({key:e})=>n.push({path:`/_editor/hook/${encodeURIComponent(e)}`}),p=async({key:e})=>{var o,t;await((t=(o=i.value)==null?void 0:o.find(r=>r.path===e))==null?void 0:t.duplicate()),c()},u=async()=>{const e=await d.create();l({key:e.path})},m=async({key:e})=>{var o,t;await D("Are you sure you want to delete this hook?")&&(await((t=(o=i.value)==null?void 0:o.find(r=>r.path===e))==null?void 0:t.delete()),c())},f=h(()=>{var e,o;return{columns:[{name:"Hook Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(o=(e=i.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,link:`/_editor/hook/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",actions:[{icon:w,label:"Edit Hook",onClick:l},{icon:H,label:"Duplicate",onClick:p},{icon:C,label:"Delete",onClick:m,dangerous:!0}]}]})))!=null?o:[]}});return(e,o)=>(b(),_(x,{loading:g(s),title:"Python Hooks",description:"Trigger your Python scripts with a request.","create-button-text":"Create Hook","empty-title":"No hooks here yet",table:f.value,"entity-name":"Hook",onCreate:u},null,8,["loading","table"]))}});export{j as default};
//# sourceMappingURL=Hooks.e358aa2b.js.map