import{d as f,ex as y,ey as _,F as g,b as I,u as T,bu as w}from"./registerWidgets.6127b663.js";import{f as C,q as h}from"./icons.7cb6c64d.js";import{a as k}from"./asyncComputed.2995f2f9.js";import{C as x}from"./CrudView.6e865d3e.js";import"./gateway.7ff02be3.js";import"./index.ec83aae1.js";import{T as r}from"./tables.0bd9eef2.js";import"./DropdownMenu.e913b693.js";import"./Modal.1f8cc487.js";import"./LoadingIndicator.184f0e0e.js";import"./lottie.f0755646.js";import"./passwordlessManager.a985b1af.js";import"./pubsub.4b36be83.js";import"./activeRecord.f3099912.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="318182e5-a1d0-458e-9df3-b453ab70f741",e._sentryDebugIdIdentifier="sentry-dbid-318182e5-a1d0-458e-9df3-b453ab70f741")}catch{}})();const H=f({__name:"Tables",setup(e){const t=y(),a=_().params.projectId,{loading:i,result:d,refetch:c}=k(()=>r.list(a)),m=async o=>{const s=await r.create(a,o.name);t.push({name:"tableEditor",params:{tableId:s.id,projectId:a}})},b=g(()=>{var o,s;return{columns:[{name:"Table Name"},{name:"Table Actions"}],rows:(s=(o=d.value)==null?void 0:o.map(n=>({key:n.id,cells:[{text:n.name,classes:["title","centered"]},{text:"Actions",classes:["centered"],actions:[{icon:C,label:"Edit Table",onClick({key:u}){t.push({name:"tableEditor",params:{tableId:u,projectId:a}})}},{icon:h,label:"Delete",dangerous:!0,async onClick(){await n.delete(a,n.id),c()}}]}]})))!=null?s:[]}}),p=[{key:"name",label:"Table name",type:"text"}];return(o,s)=>(I(),T(x,{"entity-name":"table",loading:w(i),title:"Database Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:b.value,fields:p,"create-button-text":"Create Table",onCreate:m},null,8,["loading","table"]))}});export{H as default};
//# sourceMappingURL=Tables.cd144f04.js.map
