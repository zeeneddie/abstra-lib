import{d as y,K as h,b,t as g,z as d,H as _}from"./registerWidgets.08459ba9.js";import{f as H,g as w,h as C}from"./icons.bc25a773.js";import{a as I}from"./asyncComputed.0e1908a0.js";import{H as p}from"./hooks.b037e07e.js";import{R as x}from"./RuntimeList.b9c2c598.js";import"./activeRecord.12319fb5.js";import"./pubsub.f8482951.js";import"./DropdownMenu.a76e4801.js";import"./CircularLoading.ac78692b.js";import"./lottie.eec78ff0.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="e23f3804-16ee-4e2f-9bec-7f4df66042ff",n._sentryDebugIdIdentifier="sentry-dbid-e23f3804-16ee-4e2f-9bec-7f4df66042ff")}catch{}})();const $=y({__name:"Hooks",setup(n){const a=_(),{loading:r,result:s,refetch:c}=I(()=>p.list()),l=({key:e})=>a.push({path:`/_editor/hook/${encodeURIComponent(e)}`}),u=async({key:e})=>{var o,t;await((t=(o=s.value)==null?void 0:o.find(i=>i.path===e))==null?void 0:t.duplicate()),c()},f=async()=>{const e=await p.create();l({key:e.path})},m=async({key:e})=>{var o,t;confirm("Are you sure you want to delete this hook?")&&(await((t=(o=s.value)==null?void 0:o.find(i=>i.path===e))==null?void 0:t.delete()),c())},k=h(()=>{var e,o;return{columns:[{name:"Hook Name"},{name:"Path"},{name:"Hook Actions"}],rows:(o=(e=s.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/hook/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",classes:["centered"],actions:[{icon:H,label:"Delete",onClick:m,dangerous:!0},{icon:w,label:"Edit Hook",onClick:l},{icon:C,label:"Duplicate",onClick:u}]}]})))!=null?o:[]}});return(e,o)=>(b(),g(x,{loading:d(r),title:"Python Hooks",description:"Trigger your Python scripts with a request.","create-button-text":"Create Hook","empty-title":"No hooks here yet",table:d(k),onCreate:f},null,8,["loading","table"]))}});export{$ as default};
//# sourceMappingURL=Hooks.c4b7540b.js.map
