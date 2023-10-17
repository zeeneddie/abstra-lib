import{d as b,ez as y,J as _,b as g,c as J,u as h}from"./outputWidgets.50a32881.js";import{e as w,a as C,b as k}from"./icons.21c36b2d.js";import{a as I}from"./asyncComputed.b13ea8c8.js";import{J as d}from"./jobs.7361784a.js";import{C as v}from"./CrudView.2bb96676.js";import{a as x}from"./ant-design.c3edd57c.js";import"./activeRecord.a6d1caaf.js";import"./pubsub.a612a4ec.js";import"./index.afd55904.js";import"./Title.6ed5196f.js";import"./Form.eef121ef.js";import"./router.05c8f462.js";import"./index.c6d42cf5.js";import"./url.543483ec.js";import"./index.e0c93905.js";import"./index.30f77a12.js";import"./index.0fb677b8.js";import"./index.9b89ff38.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[n]="17076935-336b-422e-a997-69e90f588872",i._sentryDebugIdIdentifier="sentry-dbid-17076935-336b-422e-a997-69e90f588872")}catch{}})();const G=b({__name:"Jobs",setup(i){const n=y(),{loading:s,result:a,refetch:l}=I(()=>d.list()),c=({key:e})=>n.push({path:`/_editor/job/${encodeURIComponent(e)}`}),p=async({key:e})=>{var o,t;await((t=(o=a.value)==null?void 0:o.find(r=>r.identifier===e))==null?void 0:t.duplicate()),l()},m=async()=>{const e=await d.create();c({key:e.identifier})},u=async({key:e})=>{var o,t;await x("Are you sure you want to delete this job?")&&(await((t=(o=a.value)==null?void 0:o.find(r=>r.identifier===e))==null?void 0:t.delete()),l())},f=_(()=>{var e,o;return{columns:[{name:"Job Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(o=(e=a.value)==null?void 0:e.map(t=>({key:t.identifier,cells:[{text:t.title,link:`/_editor/job/${encodeURIComponent(t.identifier)}`},{text:t.identifier},{text:"",actions:[{icon:w,label:"Edit Job",onClick:c},{icon:C,label:"Duplicate",onClick:p},{icon:k,label:"Delete",onClick:u,dangerous:!0}]}]})))!=null?o:[]}});return(e,o)=>(g(),J(v,{loading:h(s),title:"Python Jobs",description:"Schedule Python scripts like events on a calendar","create-button-text":"Create Job","empty-title":"No jobs here yet",table:f.value,"entity-name":"Job",onCreate:m},null,8,["loading","table"]))}});export{G as default};
//# sourceMappingURL=Jobs.b83616f2.js.map
