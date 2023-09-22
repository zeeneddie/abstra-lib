import{d as f,ex as y,ey as _,H as g,b as I,c as T,u as w}from"./registerWidgets.d6e66474.js";import{e as C,q as h}from"./icons.4be6cb33.js";import{a as k}from"./asyncComputed.5c362931.js";import{C as x}from"./CrudView.62da965d.js";import"./gateway.651c554e.js";import"./index.0eed7dd2.js";import{T as n}from"./tables.c71e09c7.js";import"./DropdownMenu.687dee5a.js";import"./Modal.87772a38.js";import"./LoadingIndicator.d52fa99a.js";import"./lottie.b059da2e.js";import"./passwordlessManager.a2051844.js";import"./pubsub.9e806cff.js";import"./storage.d7eb729a.js";import"./activeRecord.1009e596.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="55e4777f-c002-4207-9477-5f058246ba1f",e._sentryDebugIdIdentifier="sentry-dbid-55e4777f-c002-4207-9477-5f058246ba1f")}catch{}})();const J=f({__name:"Tables",setup(e){const t=y(),a=_().params.projectId,{loading:i,result:c,refetch:d}=k(()=>n.list(a)),m=async o=>{const s=await n.create(a,o.name);t.push({name:"tableEditor",params:{tableId:s.id,projectId:a}})},p=g(()=>{var o,s;return{columns:[{name:"Table Name"},{name:"Table Actions"}],rows:(s=(o=c.value)==null?void 0:o.map(r=>({key:r.id,cells:[{text:r.name,classes:["title","centered"]},{text:"Actions",classes:["centered"],actions:[{icon:C,label:"Edit Table",onClick({key:b}){t.push({name:"tableEditor",params:{tableId:b,projectId:a}})}},{icon:h,label:"Delete",dangerous:!0,async onClick(){await r.delete(a,r.id),d()}}]}]})))!=null?s:[]}}),u=[{key:"name",label:"Table name",type:"text"}];return(o,s)=>(I(),T(x,{"entity-name":"table",loading:w(i),title:"Database Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:p.value,fields:u,"create-button-text":"Create Table",onCreate:m},null,8,["loading","table"]))}});export{J as default};
//# sourceMappingURL=Tables.f2875d89.js.map
