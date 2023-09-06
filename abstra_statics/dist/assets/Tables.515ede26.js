import{d as f,ex as y,ey as _,F as g,b as I,u as T,bu as w}from"./registerWidgets.44fdd4cc.js";import{f as C,q as h}from"./icons.ca2fbfea.js";import{a as k}from"./asyncComputed.dfe10784.js";import{C as x}from"./CrudView.208d9531.js";import"./gateway.72f38183.js";import"./index.f78d82bd.js";import{T as n}from"./tables.d5d5fa9c.js";import"./DropdownMenu.29e39c27.js";import"./Modal.3e7cfd59.js";import"./LoadingIndicator.f9291350.js";import"./lottie.83aa29ec.js";import"./passwordlessManager.399190a2.js";import"./pubsub.29708c09.js";import"./storage.233c2029.js";import"./activeRecord.5fa735e9.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="c3f5d682-921a-4732-8d12-f4c5f74c9c9c",e._sentryDebugIdIdentifier="sentry-dbid-c3f5d682-921a-4732-8d12-f4c5f74c9c9c")}catch{}})();const J=f({__name:"Tables",setup(e){const t=y(),a=_().params.projectId,{loading:c,result:i,refetch:d}=k(()=>n.list(a)),m=async o=>{const s=await n.create(a,o.name);t.push({name:"tableEditor",params:{tableId:s.id,projectId:a}})},p=g(()=>{var o,s;return{columns:[{name:"Table Name"},{name:"Table Actions"}],rows:(s=(o=i.value)==null?void 0:o.map(r=>({key:r.id,cells:[{text:r.name,classes:["title","centered"]},{text:"Actions",classes:["centered"],actions:[{icon:C,label:"Edit Table",onClick({key:b}){t.push({name:"tableEditor",params:{tableId:b,projectId:a}})}},{icon:h,label:"Delete",dangerous:!0,async onClick(){await r.delete(a,r.id),d()}}]}]})))!=null?s:[]}}),u=[{key:"name",label:"Table name",type:"text"}];return(o,s)=>(I(),T(x,{"entity-name":"table",loading:w(c),title:"Database Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:p.value,fields:u,"create-button-text":"Create Table",onCreate:m},null,8,["loading","table"]))}});export{J as default};
//# sourceMappingURL=Tables.515ede26.js.map
