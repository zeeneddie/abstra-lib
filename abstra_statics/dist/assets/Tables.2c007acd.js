import{d as y,eA as g,eB as C,G as T,b as _,c as k,u as I}from"./outputWidgets.168e93b2.js";import{u as w,o as h}from"./icons.7783c546.js";import{a as x}from"./asyncComputed.1f9522ee.js";import"./router.f7d10fa9.js";import{T as s}from"./tables.19268bd4.js";import"./index.283a714a.js";import{C as D}from"./CrudView.64a0fc11.js";import{n as i}from"./string.9960df98.js";import"./FormItem.73f788be.js";import"./hasIn.74617443.js";import"./index.ace10ca1.js";import"./record.99c1aeea.js";import"./pubsub.0180ce6e.js";import"./index.cf4c23b9.js";import"./Title.1c84fa94.js";import"./Text.e3f93d0f.js";import"./Form.ca673dbb.js";import"./Modal.99a9cf5f.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.7b91f5ec.js";import"./url.35a55c25.js";import"./index.efc4984c.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="6b8a15c6-c991-441e-8aa1-bb63f8b2945e",a._sentryDebugIdIdentifier="sentry-dbid-6b8a15c6-c991-441e-8aa1-bb63f8b2945e")}catch{}})();const X=y({__name:"Tables",setup(a){const o=g(),t=C().params.projectId,{loading:m,result:c,refetch:d}=x(()=>s.list(t)),p=async e=>{const r=await s.create(t,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},b=T(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=c.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:w,label:"Edit Table",onClick({key:f}){o.push({name:"tableEditor",params:{tableId:f,projectId:t}})}},{icon:h,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),d()}}]}]})))!=null?r:[]}}),u=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(_(),k(D,{"entity-name":"table",loading:I(m),"docs-path":"tables/overview",title:"Database Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:b.value,fields:u,"create-button-text":"Create Table",onCreate:p},null,8,["loading","table"]))}});export{X as default};
//# sourceMappingURL=Tables.2c007acd.js.map
