import{d as y,K as b,b as h,t as g,z as d,H as _}from"./registerWidgets.c33434b6.js";import{f as H,g as w,h as C}from"./icons.da9eecb0.js";import{a as I}from"./asyncComputed.2a2efb36.js";import{H as u}from"./hooks.3327ed1c.js";import{R as x}from"./RuntimeList.dafa8570.js";import"./activeRecord.cbf414d4.js";import"./DropdownMenu.0269901f.js";import"./CircularLoading.8d9a0f4b.js";import"./lottie.02d4abc1.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="b3099bd0-144c-4352-98ce-da1a6f9ab255",a._sentryDebugIdIdentifier="sentry-dbid-b3099bd0-144c-4352-98ce-da1a6f9ab255")}catch{}})();const U=y({__name:"Hooks",setup(a){const n=_(),{loading:r,result:s,refetch:c}=I(()=>u.list()),l=({key:e})=>n.push({path:`/_editor/hook/${encodeURIComponent(e)}`}),p=async({key:e})=>{var o,t;await((t=(o=s.value)==null?void 0:o.find(i=>i.path===e))==null?void 0:t.duplicate()),c()},m=async()=>{const e=await u.create();l({key:e.path})},f=async({key:e})=>{var o,t;confirm("Are you sure you want to delete this hook?")&&(await((t=(o=s.value)==null?void 0:o.find(i=>i.path===e))==null?void 0:t.delete()),c())},k=b(()=>{var e,o;return{columns:[{name:"Hook Name"},{name:"Path"},{name:"Hook Actions"}],rows:(o=(e=s.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/hook/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",classes:["centered"],actions:[{icon:H,label:"Delete",onClick:f,dangerous:!0},{icon:w,label:"Edit Hook",onClick:l},{icon:C,label:"Duplicate",onClick:p}]}]})))!=null?o:[]}});return(e,o)=>(h(),g(x,{loading:d(r),title:"Python Hooks",description:"Trigger your Python scripts with a request.","create-button-text":"Create Hook","empty-title":"No hooks here yet",table:d(k),onCreate:m},null,8,["loading","table"]))}});export{U as default};
//# sourceMappingURL=Hooks.1670e2e4.js.map