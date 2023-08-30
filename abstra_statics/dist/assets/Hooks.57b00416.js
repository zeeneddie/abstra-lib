import{d as f,J as k,L as y,b as h,u as g,A as _}from"./registerWidgets.f2346c28.js";import{e as H,f as w,g as C}from"./icons.97ac1ffb.js";import{a as I}from"./asyncComputed.359496c4.js";import{H as d}from"./hooks.07db0981.js";import{R as x}from"./RuntimeList.952be766.js";import"./activeRecord.58d61804.js";import"./pubsub.db6cb532.js";import"./DropdownMenu.eb76cccb.js";import"./CircularLoading.f28717a9.js";import"./lottie.016d1ff3.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="89b8c51c-8081-467b-8060-acbb63171d2b",a._sentryDebugIdIdentifier="sentry-dbid-89b8c51c-8081-467b-8060-acbb63171d2b")}catch{}})();const U=f({__name:"Hooks",setup(a){const n=k(),{loading:r,result:s,refetch:c}=I(()=>d.list()),l=({key:e})=>n.push({path:`/_editor/hook/${encodeURIComponent(e)}`}),u=async({key:e})=>{var o,t;await((t=(o=s.value)==null?void 0:o.find(i=>i.path===e))==null?void 0:t.duplicate()),c()},p=async()=>{const e=await d.create();l({key:e.path})},m=async({key:e})=>{var o,t;confirm("Are you sure you want to delete this hook?")&&(await((t=(o=s.value)==null?void 0:o.find(i=>i.path===e))==null?void 0:t.delete()),c())},b=y(()=>{var e,o;return{columns:[{name:"Hook Name"},{name:"Path"},{name:"Hook Actions"}],rows:(o=(e=s.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/hook/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",classes:["centered"],actions:[{icon:H,label:"Delete",onClick:m,dangerous:!0},{icon:w,label:"Edit Hook",onClick:l},{icon:C,label:"Duplicate",onClick:u}]}]})))!=null?o:[]}});return(e,o)=>(h(),g(x,{loading:_(r),title:"Python Hooks",description:"Trigger your Python scripts with a request.","create-button-text":"Create Hook","empty-title":"No hooks here yet",table:b.value,onCreate:p},null,8,["loading","table"]))}});export{U as default};
//# sourceMappingURL=Hooks.57b00416.js.map
