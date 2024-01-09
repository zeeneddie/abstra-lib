import{d as y,eA as g,eB as C,G as T,b as _,c as k,u as I}from"./outputWidgets.c28a264f.js";import{u as w,o as h}from"./icons.eac64055.js";import{a as x}from"./asyncComputed.5be083d9.js";import"./authorManager.704d9df1.js";import{T as s}from"./tables.cd8c612e.js";import"./index.691857f7.js";import{C as D}from"./CrudView.6d327925.js";import{n as i}from"./string.22ff7497.js";import"./record.00b245b9.js";import"./pubsub.63a9c830.js";import"./gateway.e67107b5.js";import"./index.cf4c23b9.js";import"./Title.d2c22d62.js";import"./Text.b8de0dfe.js";import"./FormItem.e467a7e7.js";import"./hasIn.9ac121b6.js";import"./Form.69dcbbc9.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.24b07baa.js";import"./router.92796efa.js";import"./index.bc0e00c8.js";import"./url.1668deee.js";import"./index.fa8cadd1.js";import"./index.2e041818.js";import"./index.cfb2450e.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="00af1259-658e-4ef1-8477-0191325f78e4",a._sentryDebugIdIdentifier="sentry-dbid-00af1259-658e-4ef1-8477-0191325f78e4")}catch{}})();const $=y({__name:"Tables",setup(a){const o=g(),t=C().params.projectId,{loading:m,result:p,refetch:d}=x(()=>s.list(t)),c=async e=>{const r=await s.create(t,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},u=T(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"Actions",align:"right"}],rows:(r=(e=p.value)==null?void 0:e.map(n=>({key:n.id,cells:[{text:n.name,link:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{text:"Actions",actions:[{icon:w,label:"Edit Table",onClick({key:f}){o.push({name:"tableEditor",params:{tableId:f,projectId:t}})}},{icon:h,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),d()}}]}]})))!=null?r:[]}}),b=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(_(),k(D,{"entity-name":"table",loading:I(m),"docs-path":"tables/overview",title:"Database Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:u.value,fields:b,"create-button-text":"Create Table",onCreate:c},null,8,["loading","table"]))}});export{$ as default};
//# sourceMappingURL=Tables.242f29fb.js.map
