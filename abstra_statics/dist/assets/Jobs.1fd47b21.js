import{d as b,ex as y,H as _,b as g,c as h,u as J}from"./registerWidgets.4340e287.js";import{e as k,a as w,b as C}from"./icons.da02f7f7.js";import{a as x}from"./asyncComputed.a4cc4ebe.js";import{J as d}from"./jobs.33e9ced7.js";import{_ as I}from"./CrudView.vue_vue_type_script_setup_true_lang.e9f57b5e.js";import{a as v}from"./ant-design.56df7a71.js";import"./activeRecord.c40ac301.js";import"./pubsub.3290d859.js";import"./index.f58e2ef8.js";import"./Title.4165770a.js";import"./Form.7b78c348.js";import"./index.17a2edf7.js";import"./index.7bc7e814.js";import"./index.d24f6130.js";import"./index.9aade351.js";import"./index.c13b703c.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[a]="ec104de8-477a-4ca1-981a-2a0044f17ccb",i._sentryDebugIdIdentifier="sentry-dbid-ec104de8-477a-4ca1-981a-2a0044f17ccb")}catch{}})();const q=b({__name:"Jobs",setup(i){const a=y(),{loading:s,result:n,refetch:c}=x(()=>d.list()),l=({key:e})=>a.push({path:`/_editor/job/${encodeURIComponent(e)}`}),m=async({key:e})=>{var o,t;await((t=(o=n.value)==null?void 0:o.find(r=>r.identifier===e))==null?void 0:t.duplicate()),c()},p=async()=>{const e=await d.create();l({key:e.identifier})},u=async({key:e})=>{var o,t;await v("Are you sure you want to delete this job?")&&(await((t=(o=n.value)==null?void 0:o.find(r=>r.identifier===e))==null?void 0:t.delete()),c())},f=_(()=>{var e,o;return{columns:[{name:"Job Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(o=(e=n.value)==null?void 0:e.map(t=>({key:t.identifier,cells:[{text:t.title,link:`/_editor/job/${encodeURIComponent(t.identifier)}`},{text:t.identifier},{text:"",actions:[{icon:k,label:"Edit Job",onClick:l},{icon:w,label:"Duplicate",onClick:m},{icon:C,label:"Delete",onClick:u,dangerous:!0}]}]})))!=null?o:[]}});return(e,o)=>(g(),h(I,{loading:J(s),title:"Python Jobs",description:"Schedule Python scripts like events on a calendar","create-button-text":"Create Job","empty-title":"No jobs here yet",table:f.value,"entity-name":"Job",onCreate:p},null,8,["loading","table"]))}});export{q as default};
//# sourceMappingURL=Jobs.1fd47b21.js.map
