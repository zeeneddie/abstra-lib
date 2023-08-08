import{d as y,K as _,b as g,t as T,z as d,H as w}from"./registerWidgets.68572380.js";import{f as C,g as h,h as k}from"./icons.3acf9dc1.js";import{a as D}from"./asyncComputed.896b7bde.js";import{T as u}from"./tables.2b47cb15.js";import{R as I}from"./RuntimeList.4dae376a.js";import"./activeRecord.15082700.js";import"./DropdownMenu.06bbb53d.js";import"./CircularLoading.30fd4d73.js";import"./lottie.e503152f.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="d4be2aaa-ba24-41cf-83c0-e19f1ef4c08d",n._sentryDebugIdIdentifier="sentry-dbid-d4be2aaa-ba24-41cf-83c0-e19f1ef4c08d")}catch{}})();const z=y({__name:"Tables",setup(n){const o=w(),{loading:r,result:l,refetch:c}=D(()=>u.list()),i=({key:e})=>o.push({path:`/_editor/table/${encodeURIComponent(e)}`}),b=async({key:e})=>{var t,a;await((a=(t=l.value)==null?void 0:t.find(s=>s.name===e))==null?void 0:a.duplicate()),c()},m=async()=>{const e=await u.create();i({key:e.name})},f=async({key:e})=>{var t,a;confirm("Are you sure you want to delete this table?")&&(await((a=(t=l.value)==null?void 0:t.find(s=>s.name===e))==null?void 0:a.delete()),c())},p=_(()=>{var e,t;return{columns:[{name:"Table Name"},{name:"Table Actions"}],rows:(t=(e=l.value)==null?void 0:e.map(a=>({key:a.name,cells:[{text:a.name,classes:["title","centered"],link:`/_editor/table/${encodeURIComponent(a.name)}`},{text:"",classes:["centered"],actions:[{icon:C,label:"Delete",onClick:f,dangerous:!0},{icon:h,label:"Edit Table",onClick:i},{icon:k,label:"Duplicate",onClick:b}]}]})))!=null?t:[]}});return(e,t)=>(g(),T(I,{loading:d(r),title:"Database Tables",description:"Create and manage your database tables here.","create-button-text":"Create Table","empty-title":"No tables here yet",table:d(p),onCreate:m},null,8,["loading","table"]))}});export{z as default};
//# sourceMappingURL=Tables.825f46e9.js.map
