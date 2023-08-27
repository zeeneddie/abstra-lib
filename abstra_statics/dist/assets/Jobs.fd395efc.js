import{d as m,H as y,K as _,b as g,t as h,z as J}from"./registerWidgets.7afd6438.js";import{f as k,g as w,h as C}from"./icons.0ae396f2.js";import{a as I}from"./asyncComputed.b60ddd9a.js";import{J as d}from"./jobs.cd5428dc.js";import{R as v}from"./RuntimeList.9752755f.js";import"./activeRecord.e140ff8e.js";import"./pubsub.9805d82b.js";import"./DropdownMenu.90d44aab.js";import"./CircularLoading.283e573b.js";import"./lottie.36f8e1f2.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[i]="55762435-3de8-41c9-ac45-560bee1a6195",n._sentryDebugIdIdentifier="sentry-dbid-55762435-3de8-41c9-ac45-560bee1a6195")}catch{}})();const $=m({__name:"Jobs",setup(n){const i=y(),{loading:r,result:a,refetch:c}=I(()=>d.list()),l=({key:e})=>i.push({path:`/_editor/job/${encodeURIComponent(e)}`}),u=async({key:e})=>{var o,t;await((t=(o=a.value)==null?void 0:o.find(s=>s.identifier===e))==null?void 0:t.duplicate()),c()},p=async()=>{const e=await d.create();l({key:e.identifier})},b=async({key:e})=>{var o,t;confirm("Are you sure you want to delete this job?")&&(await((t=(o=a.value)==null?void 0:o.find(s=>s.identifier===e))==null?void 0:t.delete()),c())},f=_(()=>{var e,o;return{columns:[{name:"Job Name"},{name:"Path"},{name:"Job Actions"}],rows:(o=(e=a.value)==null?void 0:e.map(t=>({key:t.identifier,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/job/${encodeURIComponent(t.identifier)}`},{text:t.identifier},{text:"",classes:["centered"],actions:[{icon:k,label:"Delete",onClick:b,dangerous:!0},{icon:w,label:"Edit Job",onClick:l},{icon:C,label:"Duplicate",onClick:u}]}]})))!=null?o:[]}});return(e,o)=>(g(),h(v,{loading:J(r),title:"Python Jobs",description:"Schedule Python scripts like events on a calendar","create-button-text":"Create Job","empty-title":"No jobs here yet",table:f.value,onCreate:p},null,8,["loading","table"]))}});export{$ as default};
//# sourceMappingURL=Jobs.fd395efc.js.map
