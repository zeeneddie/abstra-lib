import{d as k,ez as y,J as h,b,c as _,u as g}from"./outputWidgets.541a6a3f.js";import{e as w,a as H,b as C}from"./icons.fbbc5318.js";import{a as I}from"./asyncComputed.6496ca6b.js";import{H as d}from"./hooks.c3613214.js";import{_ as x}from"./CrudView.vue_vue_type_script_setup_true_lang.af69973c.js";import{a as D}from"./ant-design.e75c36c7.js";import"./activeRecord.867c40fa.js";import"./pubsub.8482a29f.js";import"./index.07910c0e.js";import"./Title.3011141f.js";import"./Form.2a9acb85.js";import"./index.f20ad580.js";import"./index.c3edc651.js";import"./index.3cff0676.js";import"./index.1797b918.js";import"./index.33fb7a48.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="03345d7c-079b-4903-970f-60d0e299cfb5",a._sentryDebugIdIdentifier="sentry-dbid-03345d7c-079b-4903-970f-60d0e299cfb5")}catch{}})();const j=k({__name:"Hooks",setup(a){const n=y(),{loading:s,result:i,refetch:c}=I(()=>d.list()),l=({key:e})=>n.push({path:`/_editor/hook/${encodeURIComponent(e)}`}),p=async({key:e})=>{var o,t;await((t=(o=i.value)==null?void 0:o.find(r=>r.path===e))==null?void 0:t.duplicate()),c()},u=async()=>{const e=await d.create();l({key:e.path})},m=async({key:e})=>{var o,t;await D("Are you sure you want to delete this hook?")&&(await((t=(o=i.value)==null?void 0:o.find(r=>r.path===e))==null?void 0:t.delete()),c())},f=h(()=>{var e,o;return{columns:[{name:"Hook Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(o=(e=i.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,link:`/_editor/hook/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",actions:[{icon:w,label:"Edit Hook",onClick:l},{icon:H,label:"Duplicate",onClick:p},{icon:C,label:"Delete",onClick:m,dangerous:!0}]}]})))!=null?o:[]}});return(e,o)=>(b(),_(x,{loading:g(s),title:"Python Hooks",description:"Trigger your Python scripts with a request.","create-button-text":"Create Hook","empty-title":"No hooks here yet",table:f.value,"entity-name":"Hook",onCreate:u},null,8,["loading","table"]))}});export{j as default};
//# sourceMappingURL=Hooks.9b84041b.js.map
