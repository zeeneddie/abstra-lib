import{d as y,K as h,b,t as g,z as d,H as _}from"./registerWidgets.80830a62.js";import{f as H,g as w,h as C}from"./icons.96376736.js";import{a as I}from"./asyncComputed.7fd138fd.js";import{H as u}from"./hooks.51f3c6f3.js";import{R as x}from"./RuntimeList.5a001092.js";import"./activeRecord.dd1973bd.js";import"./DropdownMenu.8a84ea08.js";import"./CircularLoading.dfc9e798.js";import"./lottie.ab5349ef.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="c7102037-748c-42c3-a6b2-55b036f996a8",a._sentryDebugIdIdentifier="sentry-dbid-c7102037-748c-42c3-a6b2-55b036f996a8")}catch{}})();const U=y({__name:"Hooks",setup(a){const n=_(),{loading:r,result:s,refetch:c}=I(()=>u.list()),l=({key:e})=>n.push({path:`/_editor/hook/${encodeURIComponent(e)}`}),p=async({key:e})=>{var o,t;await((t=(o=s.value)==null?void 0:o.find(i=>i.path===e))==null?void 0:t.duplicate()),c()},m=async()=>{const e=await u.create();l({key:e.path})},f=async({key:e})=>{var o,t;confirm("Are you sure you want to delete this hook?")&&(await((t=(o=s.value)==null?void 0:o.find(i=>i.path===e))==null?void 0:t.delete()),c())},k=h(()=>{var e,o;return{columns:[{name:"Hook Name"},{name:"Path"},{name:"Hook Actions"}],rows:(o=(e=s.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/hook/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",classes:["centered"],actions:[{icon:H,label:"Delete",onClick:f,dangerous:!0},{icon:w,label:"Edit Hook",onClick:l},{icon:C,label:"Duplicate",onClick:p}]}]})))!=null?o:[]}});return(e,o)=>(b(),g(x,{loading:d(r),title:"Python Hooks",description:"Trigger your Python scripts with a request.","create-button-text":"Create Hook","empty-title":"No hooks here yet",table:d(k),onCreate:m},null,8,["loading","table"]))}});export{U as default};
//# sourceMappingURL=Hooks.c7c4921a.js.map