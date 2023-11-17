import{d as y,eA as g,G as _,b as h,c as w,w as C,u as J,aA as c,e as k}from"./outputWidgets.b77ddaf6.js";import{e as x,a as v,b as I}from"./icons.17df8f5e.js";import{a as D}from"./asyncComputed.8b5013c9.js";import{J as p}from"./jobs.3ae003ad.js";import{C as A}from"./CrudView.2ace1001.js";import{a as N}from"./ant-design.498c49a9.js";import"./activeRecord.7520f80e.js";import"./pubsub.2adc1077.js";import"./Text.35e3b4e2.js";import"./Base.74447ba0.js";import"./FormItem.a3774506.js";import"./transButton.ff89e414.js";import"./router.e3ec5353.js";import"./Title.cba03153.js";import"./index.3bca886d.js";import"./url.418d151e.js";import"./index.4dc534d2.js";import"./index.071ec421.js";import"./index.8f28c8c6.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[a]="73443ed1-2df8-4f56-a590-6adf39fba821",i._sentryDebugIdIdentifier="sentry-dbid-73443ed1-2df8-4f56-a590-6adf39fba821")}catch{}})();const V=k("a",{href:"https://abstra.io/pricing",target:"_blank"},"Pricing page",-1),W=y({__name:"Jobs",setup(i){const a=g(),{loading:s,result:n,refetch:d}=D(()=>p.list()),l=({key:e})=>a.push({path:`/_editor/job/${encodeURIComponent(e)}`}),m=async({key:e})=>{var o,t;await((t=(o=n.value)==null?void 0:o.find(r=>r.identifier===e))==null?void 0:t.duplicate()),d()},u=async()=>{const e=await p.create();l({key:e.identifier})},f=async({key:e})=>{var o,t;await N("Are you sure you want to delete this job?")&&(await((t=(o=n.value)==null?void 0:o.find(r=>r.identifier===e))==null?void 0:t.delete()),d())},b=_(()=>{var e,o;return{columns:[{name:"Job Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(o=(e=n.value)==null?void 0:e.map(t=>({key:t.identifier,cells:[{text:t.title,link:`/_editor/job/${encodeURIComponent(t.identifier)}`},{text:t.identifier},{text:"",actions:[{icon:x,label:"Edit Job",onClick:l},{icon:v,label:"Duplicate",onClick:m},{icon:I,label:"Delete",onClick:f,dangerous:!0}]}]})))!=null?o:[]}});return(e,o)=>(h(),w(A,{loading:J(s),title:"Jobs","create-button-text":"Create Job",description:"Schedule Python scripts like events on a calendar.","empty-title":"No jobs here yet",table:b.value,"entity-name":"Job",onCreate:u},{warning:C(()=>[c(" Jobs are exclusive to Cloud plans. Visit our "),V,c(" to learn more. ")]),_:1},8,["loading","table"]))}});export{W as default};
//# sourceMappingURL=Jobs.1804244e.js.map
