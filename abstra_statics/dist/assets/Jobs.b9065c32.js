import{d as m,ex as y,F as _,b as g,u as J,bu as h}from"./registerWidgets.8646b881.js";import{e as k,f as w,g as C}from"./icons.4cf5ca87.js";import{a as x}from"./asyncComputed.3dfb0850.js";import{J as d}from"./jobs.02f92673.js";import{R as I}from"./RuntimeList.99e6dc6c.js";import"./activeRecord.d82f5265.js";import"./pubsub.8879f604.js";import"./DropdownMenu.324a0a77.js";import"./CircularLoading.9f38dddc.js";import"./lottie.e3748251.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[i]="25a4576a-cbee-4d8c-be1f-8ba4705458d8",n._sentryDebugIdIdentifier="sentry-dbid-25a4576a-cbee-4d8c-be1f-8ba4705458d8")}catch{}})();const $=m({__name:"Jobs",setup(n){const i=y(),{loading:r,result:a,refetch:c}=x(()=>d.list()),l=({key:e})=>i.push({path:`/_editor/job/${encodeURIComponent(e)}`}),u=async({key:e})=>{var o,t;await((t=(o=a.value)==null?void 0:o.find(s=>s.identifier===e))==null?void 0:t.duplicate()),c()},b=async()=>{const e=await d.create();l({key:e.identifier})},f=async({key:e})=>{var o,t;confirm("Are you sure you want to delete this job?")&&(await((t=(o=a.value)==null?void 0:o.find(s=>s.identifier===e))==null?void 0:t.delete()),c())},p=_(()=>{var e,o;return{columns:[{name:"Job Name"},{name:"Path"},{name:"Job Actions"}],rows:(o=(e=a.value)==null?void 0:e.map(t=>({key:t.identifier,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/job/${encodeURIComponent(t.identifier)}`},{text:t.identifier},{text:"",classes:["centered"],actions:[{icon:k,label:"Delete",onClick:f,dangerous:!0},{icon:w,label:"Edit Job",onClick:l},{icon:C,label:"Duplicate",onClick:u}]}]})))!=null?o:[]}});return(e,o)=>(g(),J(I,{loading:h(r),title:"Python Jobs",description:"Schedule Python scripts like events on a calendar","create-button-text":"Create Job","empty-title":"No jobs here yet",table:p.value,onCreate:b},null,8,["loading","table"]))}});export{$ as default};
//# sourceMappingURL=Jobs.b9065c32.js.map
