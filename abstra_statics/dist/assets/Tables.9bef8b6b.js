import{d as y,K as _,b as g,t as T,z as d,H as w}from"./registerWidgets.ad696c68.js";import{f as C,g as h,h as k}from"./icons.1c1f9d53.js";import{a as D}from"./asyncComputed.40a67fe8.js";import{T as u}from"./tables.aaffd944.js";import{R as I}from"./RuntimeList.668ecbe0.js";import"./activeRecord.da3a3625.js";import"./DropdownMenu.0fa3a500.js";import"./CircularLoading.1b0ceab6.js";import"./lottie.d1a83079.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="65e6fa6a-3170-469d-8067-52ebe8a5560d",n._sentryDebugIdIdentifier="sentry-dbid-65e6fa6a-3170-469d-8067-52ebe8a5560d")}catch{}})();const z=y({__name:"Tables",setup(n){const o=w(),{loading:r,result:l,refetch:i}=D(()=>u.list()),c=({key:e})=>o.push({path:`/_editor/table/${encodeURIComponent(e)}`}),m=async({key:e})=>{var t,a;await((a=(t=l.value)==null?void 0:t.find(s=>s.name===e))==null?void 0:a.duplicate()),i()},b=async()=>{const e=await u.create();c({key:e.name})},p=async({key:e})=>{var t,a;confirm("Are you sure you want to delete this table?")&&(await((a=(t=l.value)==null?void 0:t.find(s=>s.name===e))==null?void 0:a.delete()),i())},f=_(()=>{var e,t;return{columns:[{name:"Table Name"},{name:"Table Actions"}],rows:(t=(e=l.value)==null?void 0:e.map(a=>({key:a.name,cells:[{text:a.name,classes:["title","centered"],link:`/_editor/table/${encodeURIComponent(a.name)}`},{text:"",classes:["centered"],actions:[{icon:C,label:"Delete",onClick:p,dangerous:!0},{icon:h,label:"Edit Table",onClick:c},{icon:k,label:"Duplicate",onClick:m}]}]})))!=null?t:[]}});return(e,t)=>(g(),T(I,{loading:d(r),title:"Database Tables",description:"Create and manage your database tables here.","create-button-text":"Create Table","empty-title":"No tables here yet",table:d(f),onCreate:b},null,8,["loading","table"]))}});export{z as default};
//# sourceMappingURL=Tables.9bef8b6b.js.map
