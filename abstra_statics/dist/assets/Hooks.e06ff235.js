import{d as k,ez as y,J as h,b,c as g,u as _}from"./outputWidgets.5ced94d7.js";import{e as w,a as C,b as H}from"./icons.157295a5.js";import{a as I}from"./asyncComputed.6f213f9d.js";import{H as p}from"./hooks.eb6be727.js";import{C as x}from"./CrudView.1c9778e2.js";import{a as D}from"./ant-design.49bf0c8e.js";import"./activeRecord.6ae8bce9.js";import"./pubsub.f395e26b.js";import"./index.8ea91ac5.js";import"./Title.74cb802d.js";import"./Form.3717142f.js";import"./router.c33f3e79.js";import"./index.48bbb941.js";import"./url.b91ad4a3.js";import"./index.54325f84.js";import"./index.d48bc6c3.js";import"./index.c946e10c.js";import"./index.fe1573f2.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="1e70b0b0-608a-4ee3-9752-d246c7fc01a6",a._sentryDebugIdIdentifier="sentry-dbid-1e70b0b0-608a-4ee3-9752-d246c7fc01a6")}catch{}})();const G=k({__name:"Hooks",setup(a){const n=y(),{loading:s,result:i,refetch:c}=I(()=>p.list()),l=({key:e})=>n.push({path:`/_editor/hook/${encodeURIComponent(e)}`}),d=async({key:e})=>{var o,t;await((t=(o=i.value)==null?void 0:o.find(r=>r.path===e))==null?void 0:t.duplicate()),c()},u=async()=>{const e=await p.create();l({key:e.path})},m=async({key:e})=>{var o,t;await D("Are you sure you want to delete this hook?")&&(await((t=(o=i.value)==null?void 0:o.find(r=>r.path===e))==null?void 0:t.delete()),c())},f=h(()=>{var e,o;return{columns:[{name:"Hook Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(o=(e=i.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,link:`/_editor/hook/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",actions:[{icon:w,label:"Edit Hook",onClick:l},{icon:C,label:"Duplicate",onClick:d},{icon:H,label:"Delete",onClick:m,dangerous:!0}]}]})))!=null?o:[]}});return(e,o)=>(b(),g(x,{loading:_(s),title:"Python Hooks",description:"Trigger your Python scripts with a request.","create-button-text":"Create Hook","empty-title":"No hooks here yet",table:f.value,"entity-name":"Hook",onCreate:u},null,8,["loading","table"]))}});export{G as default};
//# sourceMappingURL=Hooks.e06ff235.js.map
