import{d as f,ez as y,eA as _,J as g,b as I,c as T,u as h}from"./outputWidgets.cdd73ae7.js";import{e as k,q as w}from"./icons.5a4d121b.js";import{a as C}from"./asyncComputed.1e379dfc.js";import"./console.da68e7a5.js";import"./index.3432358a.js";import{T as n}from"./tables.93ab3104.js";import{_ as x}from"./CrudView.vue_vue_type_script_setup_true_lang.d70fb4a4.js";import"./index.bb21662d.js";import"./Form.989d9f34.js";import"./Title.a585f3b7.js";import"./CollapsePanel.b3533acc.js";import"./index.3a1041eb.js";import"./index.23699d9e.js";import"./index.0ff4e9e1.js";import"./dayjs.8c54e3e0.js";import"./index.74f12426.js";import"./index.d0d1a721.js";import"./TabPane.df53a43e.js";import"./index.4b8538be.js";import"./index.08f7b30c.js";import"./index.2eef836d.js";import"./index.2a1509cb.js";import"./index.165bdf52.js";import"./index.1d69d182.js";import"./index.2ae175da.js";import"./index.71dc62b0.js";import"./index.5d73eb3d.js";import"./gateway.701cfd2d.js";import"./activeRecord.7c91f6d1.js";import"./pubsub.f5d6db77.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="10e665f4-edeb-4baa-aa21-3747a5b42c82",t._sentryDebugIdIdentifier="sentry-dbid-10e665f4-edeb-4baa-aa21-3747a5b42c82")}catch{}})();const ae=f({__name:"Tables",setup(t){const a=y(),e=_().params.projectId,{loading:m,result:l,refetch:p}=C(()=>n.list(e)),d=async o=>{const r=await n.create(e,o.name);a.push({name:"tableEditor",params:{tableId:r.id,projectId:e}})},c=g(()=>{var o,r;return{columns:[{name:"Table Name"},{name:"Actions",align:"right"}],rows:(r=(o=l.value)==null?void 0:o.map(i=>({key:i.id,cells:[{text:i.name,link:{name:"tableEditor",params:{tableId:i.id,projectId:e}}},{text:"Actions",actions:[{icon:k,label:"Edit Table",onClick({key:u}){a.push({name:"tableEditor",params:{tableId:u,projectId:e}})}},{icon:w,label:"Delete",dangerous:!0,async onClick(){await i.delete(e,i.id),p()}}]}]})))!=null?r:[]}}),b=[{key:"name",label:"Table name",type:"text"}];return(o,r)=>(I(),T(x,{"entity-name":"table",loading:h(m),title:"Database Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:c.value,fields:b,"create-button-text":"Create Table",onCreate:d},null,8,["loading","table"]))}});export{ae as default};
//# sourceMappingURL=Tables.2040a942.js.map