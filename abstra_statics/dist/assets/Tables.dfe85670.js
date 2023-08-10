import{d as y,K as _,b as g,t as T,z as d,H as w}from"./registerWidgets.e8bf9be7.js";import{f as C,g as h,h as k}from"./icons.d2d6a2d6.js";import{a as D}from"./asyncComputed.15c1fcc9.js";import{T as u}from"./tables.d890e397.js";import{R as I}from"./RuntimeList.827ae737.js";import"./activeRecord.66fd8f56.js";import"./DropdownMenu.546dc055.js";import"./CircularLoading.a096735f.js";import"./lottie.b4c9148a.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="5fe20722-2944-47f3-9334-9dbefb3e00cf",n._sentryDebugIdIdentifier="sentry-dbid-5fe20722-2944-47f3-9334-9dbefb3e00cf")}catch{}})();const z=y({__name:"Tables",setup(n){const o=w(),{loading:r,result:l,refetch:i}=D(()=>u.list()),c=({key:e})=>o.push({path:`/_editor/table/${encodeURIComponent(e)}`}),b=async({key:e})=>{var t,a;await((a=(t=l.value)==null?void 0:t.find(s=>s.name===e))==null?void 0:a.duplicate()),i()},m=async()=>{const e=await u.create();c({key:e.name})},f=async({key:e})=>{var t,a;confirm("Are you sure you want to delete this table?")&&(await((a=(t=l.value)==null?void 0:t.find(s=>s.name===e))==null?void 0:a.delete()),i())},p=_(()=>{var e,t;return{columns:[{name:"Table Name"},{name:"Table Actions"}],rows:(t=(e=l.value)==null?void 0:e.map(a=>({key:a.name,cells:[{text:a.name,classes:["title","centered"],link:`/_editor/table/${encodeURIComponent(a.name)}`},{text:"",classes:["centered"],actions:[{icon:C,label:"Delete",onClick:f,dangerous:!0},{icon:h,label:"Edit Table",onClick:c},{icon:k,label:"Duplicate",onClick:b}]}]})))!=null?t:[]}});return(e,t)=>(g(),T(I,{loading:d(r),title:"Database Tables",description:"Create and manage your database tables here.","create-button-text":"Create Table","empty-title":"No tables here yet",table:d(p),onCreate:m},null,8,["loading","table"]))}});export{z as default};
//# sourceMappingURL=Tables.dfe85670.js.map