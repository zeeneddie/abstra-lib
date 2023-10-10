import{d as b,ez as y,J as _,b as g,c as J,u as h}from"./outputWidgets.5ced94d7.js";import{e as w,a as C,b as k}from"./icons.157295a5.js";import{a as I}from"./asyncComputed.6f213f9d.js";import{J as d}from"./jobs.b1195529.js";import{C as v}from"./CrudView.1c9778e2.js";import{a as x}from"./ant-design.49bf0c8e.js";import"./activeRecord.6ae8bce9.js";import"./pubsub.f395e26b.js";import"./index.8ea91ac5.js";import"./Title.74cb802d.js";import"./Form.3717142f.js";import"./router.c33f3e79.js";import"./index.48bbb941.js";import"./url.b91ad4a3.js";import"./index.54325f84.js";import"./index.d48bc6c3.js";import"./index.c946e10c.js";import"./index.fe1573f2.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[n]="343c8ef7-00af-4ff9-8847-683141aac778",i._sentryDebugIdIdentifier="sentry-dbid-343c8ef7-00af-4ff9-8847-683141aac778")}catch{}})();const G=b({__name:"Jobs",setup(i){const n=y(),{loading:s,result:a,refetch:c}=I(()=>d.list()),l=({key:e})=>n.push({path:`/_editor/job/${encodeURIComponent(e)}`}),p=async({key:e})=>{var o,t;await((t=(o=a.value)==null?void 0:o.find(r=>r.identifier===e))==null?void 0:t.duplicate()),c()},m=async()=>{const e=await d.create();l({key:e.identifier})},u=async({key:e})=>{var o,t;await x("Are you sure you want to delete this job?")&&(await((t=(o=a.value)==null?void 0:o.find(r=>r.identifier===e))==null?void 0:t.delete()),c())},f=_(()=>{var e,o;return{columns:[{name:"Job Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(o=(e=a.value)==null?void 0:e.map(t=>({key:t.identifier,cells:[{text:t.title,link:`/_editor/job/${encodeURIComponent(t.identifier)}`},{text:t.identifier},{text:"",actions:[{icon:w,label:"Edit Job",onClick:l},{icon:C,label:"Duplicate",onClick:p},{icon:k,label:"Delete",onClick:u,dangerous:!0}]}]})))!=null?o:[]}});return(e,o)=>(g(),J(v,{loading:h(s),title:"Python Jobs",description:"Schedule Python scripts like events on a calendar","create-button-text":"Create Job","empty-title":"No jobs here yet",table:f.value,"entity-name":"Job",onCreate:m},null,8,["loading","table"]))}});export{G as default};
//# sourceMappingURL=Jobs.fad46f83.js.map
