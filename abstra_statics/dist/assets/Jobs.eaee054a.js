import{d as f,eA as y,G as g,b as _,c as h,w,u as C,aq as d,e as J}from"./outputWidgets.10d5b7b3.js";import{J as c}from"./jobs.82a0d5a5.js";import{e as k,d as x}from"./icons.4302f1b6.js";import{a as I}from"./asyncComputed.50aaa08a.js";import{a as v}from"./ant-design.dbe37cc6.js";import{C as D}from"./CrudView.b7aada96.js";import"./record.97bfe52e.js";import"./pubsub.fdc1af74.js";import"./transButton.b15deae4.js";import"./Text.ed6b5793.js";import"./Base.8a49548e.js";import"./router.7df40615.js";import"./Title.0361a5e9.js";import"./index.c4713c74.js";import"./url.e91540ae.js";import"./index.2676276b.js";import"./index.79a03eae.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="be505d18-a5d6-4622-95f5-144d8e4a14c1",a._sentryDebugIdIdentifier="sentry-dbid-be505d18-a5d6-4622-95f5-144d8e4a14c1")}catch{}})();const N=J("a",{href:"https://abstra.io/pricing",target:"_blank"},"Pricing page",-1),H=f({__name:"Jobs",setup(a){const n=y(),{loading:r,result:i,refetch:l}=I(()=>c.list()),s=({key:e})=>n.push({path:`/_editor/job/${encodeURIComponent(e)}`}),m=async()=>{const e=await c.create();s({key:e.id})},p=async({key:e})=>{var o,t;await v("Are you sure you want to delete this job?")&&(await((t=(o=i.value)==null?void 0:o.find(b=>b.id===e))==null?void 0:t.delete()),l())},u=g(()=>{var e,o;return{columns:[{name:"Job Name"},{name:"Schedule"},{name:"Actions",align:"right"}],rows:(o=(e=i.value)==null?void 0:e.map(t=>({key:t.id,cells:[{text:t.title,link:`/_editor/job/${encodeURIComponent(t.id)}`},{text:t.schedule},{text:"",actions:[{icon:k,label:"Edit Job",onClick:s},{icon:x,label:"Delete",onClick:p,dangerous:!0}]}]})))!=null?o:[]}});return(e,o)=>(_(),h(D,{loading:C(r),title:"Jobs","create-button-text":"Create Job",description:"Schedule Python scripts like events on a calendar.","empty-title":"No jobs here yet",table:u.value,"entity-name":"Job",onCreate:m},{warning:w(()=>[d(" Jobs are exclusive to Cloud plans. Visit our "),N,d(" to learn more. ")]),_:1},8,["loading","table"]))}});export{H as default};
//# sourceMappingURL=Jobs.eaee054a.js.map
