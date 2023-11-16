import{d as k,eA as y,G as h,b,c as g,u as _}from"./outputWidgets.427e9347.js";import{e as w,a as C,b as H}from"./icons.2a865956.js";import{a as I}from"./asyncComputed.32abd7c2.js";import{H as p}from"./hooks.4b184497.js";import{C as x}from"./CrudView.22a93e62.js";import{a as D}from"./ant-design.484e81b9.js";import"./activeRecord.91f10272.js";import"./pubsub.9b59356e.js";import"./Text.31458a16.js";import"./Base.dbea8db9.js";import"./FormItem.e1548cef.js";import"./transButton.470f2fe6.js";import"./router.1a20c20c.js";import"./Title.213e158e.js";import"./index.e440fe17.js";import"./url.9044ee0d.js";import"./index.8fcd530b.js";import"./index.36e3a141.js";import"./index.3804082b.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="34701fed-f025-4549-99d3-1355a68b2772",a._sentryDebugIdIdentifier="sentry-dbid-34701fed-f025-4549-99d3-1355a68b2772")}catch{}})();const K=k({__name:"Hooks",setup(a){const n=y(),{loading:s,result:i,refetch:l}=I(()=>p.list()),c=({key:e})=>n.push({path:`/_editor/hook/${encodeURIComponent(e)}`}),d=async({key:e})=>{var o,t;await((t=(o=i.value)==null?void 0:o.find(r=>r.path===e))==null?void 0:t.duplicate()),l()},m=async()=>{const e=await p.create();c({key:e.path})},u=async({key:e})=>{var o,t;await D("Are you sure you want to delete this hook?")&&(await((t=(o=i.value)==null?void 0:o.find(r=>r.path===e))==null?void 0:t.delete()),l())},f=h(()=>{var e,o;return{columns:[{name:"Hook Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(o=(e=i.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,link:`/_editor/hook/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",actions:[{icon:w,label:"Edit Hook",onClick:c},{icon:C,label:"Duplicate",onClick:d},{icon:H,label:"Delete",onClick:u,dangerous:!0}]}]})))!=null?o:[]}});return(e,o)=>(b(),g(x,{loading:_(s),title:"Hooks",description:"Trigger your Python scripts with a request.","create-button-text":"Create Hook","empty-title":"No hooks here yet",table:f.value,"entity-name":"Hook",onCreate:m},null,8,["loading","table"]))}});export{K as default};
//# sourceMappingURL=Hooks.b8239dff.js.map
