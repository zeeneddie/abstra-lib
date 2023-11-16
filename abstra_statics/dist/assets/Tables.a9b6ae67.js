import{d as y,eA as g,eB as k,G as C,b as T,c as _,u as I}from"./outputWidgets.427e9347.js";import{e as w,k as h}from"./icons.2a865956.js";import{a as x}from"./asyncComputed.32abd7c2.js";import"./router.1a20c20c.js";import"./columns.eab062cb.js";import{T as s}from"./tables.f152865a.js";import{C as D}from"./CrudView.22a93e62.js";import{n as i}from"./string.6480a4a9.js";import"./Base.dbea8db9.js";import"./FormItem.e1548cef.js";import"./transButton.470f2fe6.js";import"./Text.31458a16.js";import"./Title.213e158e.js";import"./index.e440fe17.js";import"./gateway.5f288bf8.js";import"./activeRecord.91f10272.js";import"./pubsub.9b59356e.js";import"./index.cf4c23b9.js";import"./url.9044ee0d.js";import"./index.8fcd530b.js";import"./index.36e3a141.js";import"./index.3804082b.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="b289684f-c5f5-4749-9c42-56183c7e2a4a",a._sentryDebugIdIdentifier="sentry-dbid-b289684f-c5f5-4749-9c42-56183c7e2a4a")}catch{}})();const Y=y({__name:"Tables",setup(a){const o=g(),t=k().params.projectId,{loading:m,result:c,refetch:d}=x(()=>s.list(t)),p=async e=>{const r=await s.create(t,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},u=C(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"Actions",align:"right"}],rows:(r=(e=c.value)==null?void 0:e.map(n=>({key:n.id,cells:[{text:n.name,link:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{text:"Actions",actions:[{icon:w,label:"Edit Table",onClick({key:f}){o.push({name:"tableEditor",params:{tableId:f,projectId:t}})}},{icon:h,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),d()}}]}]})))!=null?r:[]}}),b=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(T(),_(D,{"entity-name":"table",loading:I(m),title:"Database Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:u.value,fields:b,"create-button-text":"Create Table",onCreate:p},null,8,["loading","table"]))}});export{Y as default};
//# sourceMappingURL=Tables.a9b6ae67.js.map
