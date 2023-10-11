import{d as k,ez as y,J as h,b,c as g,u as _}from"./outputWidgets.5f5dca9f.js";import{e as w,a as C,b as H}from"./icons.a77543dc.js";import{a as I}from"./asyncComputed.eae0c0ea.js";import{H as d}from"./hooks.3f2564e0.js";import{C as x}from"./CrudView.f3b7e8d3.js";import{a as D}from"./ant-design.b34b2997.js";import"./activeRecord.ad81cab4.js";import"./pubsub.628f19a6.js";import"./index.d2da0107.js";import"./Title.c2ba09dc.js";import"./Form.09052538.js";import"./router.a7910fab.js";import"./index.92c8cf6e.js";import"./url.1555ad6e.js";import"./index.f5a72b75.js";import"./index.10f6bb5a.js";import"./index.7ef152c5.js";import"./index.7ab474e7.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="3b650e58-79d4-4cf3-8ad3-cfed26a6124d",a._sentryDebugIdIdentifier="sentry-dbid-3b650e58-79d4-4cf3-8ad3-cfed26a6124d")}catch{}})();const G=k({__name:"Hooks",setup(a){const n=y(),{loading:s,result:i,refetch:c}=I(()=>d.list()),l=({key:e})=>n.push({path:`/_editor/hook/${encodeURIComponent(e)}`}),p=async({key:e})=>{var o,t;await((t=(o=i.value)==null?void 0:o.find(r=>r.path===e))==null?void 0:t.duplicate()),c()},u=async()=>{const e=await d.create();l({key:e.path})},m=async({key:e})=>{var o,t;await D("Are you sure you want to delete this hook?")&&(await((t=(o=i.value)==null?void 0:o.find(r=>r.path===e))==null?void 0:t.delete()),c())},f=h(()=>{var e,o;return{columns:[{name:"Hook Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(o=(e=i.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,link:`/_editor/hook/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",actions:[{icon:w,label:"Edit Hook",onClick:l},{icon:C,label:"Duplicate",onClick:p},{icon:H,label:"Delete",onClick:m,dangerous:!0}]}]})))!=null?o:[]}});return(e,o)=>(b(),g(x,{loading:_(s),title:"Python Hooks",description:"Trigger your Python scripts with a request.","create-button-text":"Create Hook","empty-title":"No hooks here yet",table:f.value,"entity-name":"Hook",onCreate:u},null,8,["loading","table"]))}});export{G as default};
//# sourceMappingURL=Hooks.fe948f14.js.map
