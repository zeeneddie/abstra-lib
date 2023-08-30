import{d as k,J as y,L as b,b as h,u as g,A as _}from"./registerWidgets.163fba07.js";import{e as H,f as w,g as C}from"./icons.89f10f59.js";import{a as I}from"./asyncComputed.5f7867b2.js";import{H as d}from"./hooks.ac8a3116.js";import{R as x}from"./RuntimeList.d11aea7e.js";import"./activeRecord.b56127d8.js";import"./pubsub.2d612358.js";import"./DropdownMenu.8ad1467e.js";import"./CircularLoading.926802eb.js";import"./lottie.981a9cff.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="7314fd29-42e1-4070-a2ab-7ab5b5335451",a._sentryDebugIdIdentifier="sentry-dbid-7314fd29-42e1-4070-a2ab-7ab5b5335451")}catch{}})();const U=k({__name:"Hooks",setup(a){const n=y(),{loading:r,result:s,refetch:l}=I(()=>d.list()),c=({key:e})=>n.push({path:`/_editor/hook/${encodeURIComponent(e)}`}),u=async({key:e})=>{var o,t;await((t=(o=s.value)==null?void 0:o.find(i=>i.path===e))==null?void 0:t.duplicate()),l()},p=async()=>{const e=await d.create();c({key:e.path})},m=async({key:e})=>{var o,t;confirm("Are you sure you want to delete this hook?")&&(await((t=(o=s.value)==null?void 0:o.find(i=>i.path===e))==null?void 0:t.delete()),l())},f=b(()=>{var e,o;return{columns:[{name:"Hook Name"},{name:"Path"},{name:"Hook Actions"}],rows:(o=(e=s.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/hook/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",classes:["centered"],actions:[{icon:H,label:"Delete",onClick:m,dangerous:!0},{icon:w,label:"Edit Hook",onClick:c},{icon:C,label:"Duplicate",onClick:u}]}]})))!=null?o:[]}});return(e,o)=>(h(),g(x,{loading:_(r),title:"Python Hooks",description:"Trigger your Python scripts with a request.","create-button-text":"Create Hook","empty-title":"No hooks here yet",table:f.value,onCreate:p},null,8,["loading","table"]))}});export{U as default};
//# sourceMappingURL=Hooks.c25bc2cf.js.map
