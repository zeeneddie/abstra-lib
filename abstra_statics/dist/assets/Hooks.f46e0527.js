import{d as k,ez as y,J as b,b as h,c as g,u as _}from"./outputWidgets.17ccdfc9.js";import{e as w,a as C,b as H}from"./icons.da87d01c.js";import{a as I}from"./asyncComputed.5c08f8ed.js";import{H as p}from"./hooks.93335bac.js";import{C as x}from"./CrudView.7531c950.js";import{a as D}from"./ant-design.54d8fa2a.js";import"./activeRecord.fef76a33.js";import"./pubsub.4b5544e4.js";import"./index.acef1430.js";import"./Title.4e76ea1c.js";import"./Form.8766fc30.js";import"./router.ebaa9480.js";import"./index.51e36136.js";import"./url.b6893eca.js";import"./index.993c2f0d.js";import"./index.507ffff2.js";import"./index.a07135d1.js";import"./index.938f1dbb.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="579b1df8-0008-4d84-9cb9-ce3bacf7499a",a._sentryDebugIdIdentifier="sentry-dbid-579b1df8-0008-4d84-9cb9-ce3bacf7499a")}catch{}})();const G=k({__name:"Hooks",setup(a){const n=y(),{loading:s,result:i,refetch:c}=I(()=>p.list()),l=({key:e})=>n.push({path:`/_editor/hook/${encodeURIComponent(e)}`}),d=async({key:e})=>{var o,t;await((t=(o=i.value)==null?void 0:o.find(r=>r.path===e))==null?void 0:t.duplicate()),c()},u=async()=>{const e=await p.create();l({key:e.path})},m=async({key:e})=>{var o,t;await D("Are you sure you want to delete this hook?")&&(await((t=(o=i.value)==null?void 0:o.find(r=>r.path===e))==null?void 0:t.delete()),c())},f=b(()=>{var e,o;return{columns:[{name:"Hook Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(o=(e=i.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,link:`/_editor/hook/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",actions:[{icon:w,label:"Edit Hook",onClick:l},{icon:C,label:"Duplicate",onClick:d},{icon:H,label:"Delete",onClick:m,dangerous:!0}]}]})))!=null?o:[]}});return(e,o)=>(h(),g(x,{loading:_(s),title:"Python Hooks",description:"Trigger your Python scripts with a request.","create-button-text":"Create Hook","empty-title":"No hooks here yet",table:f.value,"entity-name":"Hook",onCreate:u},null,8,["loading","table"]))}});export{G as default};
//# sourceMappingURL=Hooks.f46e0527.js.map
