import{d as y,K as _,b as g,t as T,z as d,H as w}from"./registerWidgets.2bf05ebf.js";import{f as C,g as h,h as k}from"./icons.2362754f.js";import{a as D}from"./asyncComputed.62d26af7.js";import{T as b}from"./tables.536426ee.js";import{R as I}from"./RuntimeList.65abae96.js";import"./activeRecord.ffd94d66.js";import"./DropdownMenu.cbfec719.js";import"./CircularLoading.241c7a75.js";import"./lottie.314baab9.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="72aeb32d-4a01-487b-b4d8-d650ce364904",n._sentryDebugIdIdentifier="sentry-dbid-72aeb32d-4a01-487b-b4d8-d650ce364904")}catch{}})();const z=y({__name:"Tables",setup(n){const o=w(),{loading:r,result:l,refetch:i}=D(()=>b.list()),c=({key:e})=>o.push({path:`/_editor/table/${encodeURIComponent(e)}`}),u=async({key:e})=>{var t,a;await((a=(t=l.value)==null?void 0:t.find(s=>s.name===e))==null?void 0:a.duplicate()),i()},m=async()=>{const e=await b.create();c({key:e.name})},p=async({key:e})=>{var t,a;confirm("Are you sure you want to delete this table?")&&(await((a=(t=l.value)==null?void 0:t.find(s=>s.name===e))==null?void 0:a.delete()),i())},f=_(()=>{var e,t;return{columns:[{name:"Table Name"},{name:"Table Actions"}],rows:(t=(e=l.value)==null?void 0:e.map(a=>({key:a.name,cells:[{text:a.name,classes:["title","centered"],link:`/_editor/table/${encodeURIComponent(a.name)}`},{text:"",classes:["centered"],actions:[{icon:C,label:"Delete",onClick:p,dangerous:!0},{icon:h,label:"Edit Table",onClick:c},{icon:k,label:"Duplicate",onClick:u}]}]})))!=null?t:[]}});return(e,t)=>(g(),T(I,{loading:d(r),title:"Database Tables",description:"Create and manage your database tables here.","create-button-text":"Create Table","empty-title":"No tables here yet",table:d(f),onCreate:m},null,8,["loading","table"]))}});export{z as default};
//# sourceMappingURL=Tables.8f865a5c.js.map