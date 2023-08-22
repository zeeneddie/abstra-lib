import{d as y,K as _,b as g,t as h,z as l,H as J}from"./registerWidgets.d08da683.js";import{f as k,g as w,h as C}from"./icons.7be61185.js";import{a as I}from"./asyncComputed.2c01b8cd.js";import{J as u}from"./jobs.ae890079.js";import{R as x}from"./RuntimeList.109bf1de.js";import"./activeRecord.7b9ccd8b.js";import"./pubsub.e3196f46.js";import"./DropdownMenu.5e686445.js";import"./CircularLoading.7cd10bd6.js";import"./lottie.bb3af4f6.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[i]="a5452162-ac00-4890-9e68-192040dd7940",n._sentryDebugIdIdentifier="sentry-dbid-a5452162-ac00-4890-9e68-192040dd7940")}catch{}})();const $=y({__name:"Jobs",setup(n){const i=J(),{loading:r,result:a,refetch:c}=I(()=>u.list()),d=({key:e})=>i.push({path:`/_editor/job/${encodeURIComponent(e)}`}),p=async({key:e})=>{var o,t;await((t=(o=a.value)==null?void 0:o.find(s=>s.identifier===e))==null?void 0:t.duplicate()),c()},f=async()=>{const e=await u.create();d({key:e.identifier})},m=async({key:e})=>{var o,t;confirm("Are you sure you want to delete this job?")&&(await((t=(o=a.value)==null?void 0:o.find(s=>s.identifier===e))==null?void 0:t.delete()),c())},b=_(()=>{var e,o;return{columns:[{name:"Job Name"},{name:"Path"},{name:"Job Actions"}],rows:(o=(e=a.value)==null?void 0:e.map(t=>({key:t.identifier,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/job/${encodeURIComponent(t.identifier)}`},{text:t.identifier},{text:"",classes:["centered"],actions:[{icon:k,label:"Delete",onClick:m,dangerous:!0},{icon:w,label:"Edit Job",onClick:d},{icon:C,label:"Duplicate",onClick:p}]}]})))!=null?o:[]}});return(e,o)=>(g(),h(x,{loading:l(r),title:"Python Jobs",description:"Schedule Python scripts like events on a calendar","create-button-text":"Create Job","empty-title":"No jobs here yet",table:l(b),onCreate:f},null,8,["loading","table"]))}});export{$ as default};
//# sourceMappingURL=Jobs.129a68ce.js.map
