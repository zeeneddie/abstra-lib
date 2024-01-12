import{d as y,eA as g,eB as C,G as T,b as _,c as k,u as I}from"./outputWidgets.e7d0c9fc.js";import{u as w,o as h}from"./icons.09e87b78.js";import{a as x}from"./asyncComputed.2b21e722.js";import"./authorManager.fb627396.js";import{T as s}from"./tables.ecfb9666.js";import"./index.b5f9d7bb.js";import{C as D}from"./CrudView.73999920.js";import{n as i}from"./string.eba97b83.js";import"./record.03d12a23.js";import"./pubsub.65f162dc.js";import"./index.cf4c23b9.js";import"./Title.eb1e1d19.js";import"./Text.cd368d8b.js";import"./FormItem.ab51226d.js";import"./hasIn.80660c60.js";import"./Form.32215fe1.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.03f5f6e4.js";import"./router.840a7645.js";import"./index.409468f7.js";import"./url.41e5b0dd.js";import"./index.676ce249.js";import"./index.45630773.js";import"./index.b5ea01a7.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="dc8b06ef-2b5c-421f-90e6-dc80b510f244",a._sentryDebugIdIdentifier="sentry-dbid-dc8b06ef-2b5c-421f-90e6-dc80b510f244")}catch{}})();const Z=y({__name:"Tables",setup(a){const o=g(),t=C().params.projectId,{loading:m,result:c,refetch:d}=x(()=>s.list(t)),p=async e=>{const r=await s.create(t,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},b=T(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"Actions",align:"right"}],rows:(r=(e=c.value)==null?void 0:e.map(n=>({key:n.id,cells:[{text:n.name,link:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{text:"Actions",actions:[{icon:w,label:"Edit Table",onClick({key:f}){o.push({name:"tableEditor",params:{tableId:f,projectId:t}})}},{icon:h,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),d()}}]}]})))!=null?r:[]}}),u=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(_(),k(D,{"entity-name":"table",loading:I(m),"docs-path":"tables/overview",title:"Database Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:b.value,fields:u,"create-button-text":"Create Table",onCreate:p},null,8,["loading","table"]))}});export{Z as default};
//# sourceMappingURL=Tables.99763207.js.map
