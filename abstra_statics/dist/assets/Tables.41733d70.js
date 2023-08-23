import{d as y,K as _,b as g,t as T,z as d,H as w}from"./registerWidgets.bac2b379.js";import{f as C,g as h,h as k}from"./icons.abc13ad2.js";import{a as D}from"./asyncComputed.83599e4d.js";import{T as b}from"./tables.31ad20ee.js";import{R as I}from"./RuntimeList.12816386.js";import"./activeRecord.6456961c.js";import"./pubsub.bffb362a.js";import"./DropdownMenu.e82bbd6b.js";import"./CircularLoading.74f072be.js";import"./lottie.ba581d78.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="10f8b4c4-8b3f-4cbf-8c81-b121d65c956f",n._sentryDebugIdIdentifier="sentry-dbid-10f8b4c4-8b3f-4cbf-8c81-b121d65c956f")}catch{}})();const H=y({__name:"Tables",setup(n){const o=w(),{loading:c,result:l,refetch:r}=D(()=>b.list()),i=({key:e})=>o.push({path:`/_editor/table/${encodeURIComponent(e)}`}),u=async({key:e})=>{var t,a;await((a=(t=l.value)==null?void 0:t.find(s=>s.name===e))==null?void 0:a.duplicate()),r()},m=async()=>{const e=await b.create();i({key:e.name})},f=async({key:e})=>{var t,a;confirm("Are you sure you want to delete this table?")&&(await((a=(t=l.value)==null?void 0:t.find(s=>s.name===e))==null?void 0:a.delete()),r())},p=_(()=>{var e,t;return{columns:[{name:"Table Name"},{name:"Table Actions"}],rows:(t=(e=l.value)==null?void 0:e.map(a=>({key:a.name,cells:[{text:a.name,classes:["title","centered"],link:`/_editor/table/${encodeURIComponent(a.name)}`},{text:"",classes:["centered"],actions:[{icon:C,label:"Delete",onClick:f,dangerous:!0},{icon:h,label:"Edit Table",onClick:i},{icon:k,label:"Duplicate",onClick:u}]}]})))!=null?t:[]}});return(e,t)=>(g(),T(I,{loading:d(c),title:"Database Tables",description:"Create and manage your database tables here.","create-button-text":"Create Table","empty-title":"No tables here yet",table:d(p),onCreate:m},null,8,["loading","table"]))}});export{H as default};
//# sourceMappingURL=Tables.41733d70.js.map
