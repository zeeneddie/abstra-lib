import{d as y,eA as g,eB as C,G as T,b as _,c as k,u as I}from"./outputWidgets.9097dbc0.js";import{u as w,o as h}from"./icons.6ae66d8b.js";import{a as x}from"./asyncComputed.9b00006c.js";import"./router.355a7061.js";import{T as s}from"./tables.ef84d6b0.js";import"./index.89dd89cc.js";import{C as D}from"./CrudView.8be23ce7.js";import{n as i}from"./string.c35d9440.js";import"./FormItem.ec363eec.js";import"./hasIn.3897ef44.js";import"./index.4edc6d72.js";import"./record.b3a4016b.js";import"./pubsub.f022dfa4.js";import"./index.cf4c23b9.js";import"./Title.8e2a69bb.js";import"./Text.cd835636.js";import"./Form.0c48d571.js";import"./Modal.4fcd461f.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.52dcbc45.js";import"./url.6706b22a.js";import"./index.2631ac7d.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="f816912a-5998-4dbb-b229-2c831fec57aa",a._sentryDebugIdIdentifier="sentry-dbid-f816912a-5998-4dbb-b229-2c831fec57aa")}catch{}})();const X=y({__name:"Tables",setup(a){const o=g(),t=C().params.projectId,{loading:m,result:d,refetch:c}=x(()=>s.list(t)),p=async e=>{const r=await s.create(t,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},b=T(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=d.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:w,label:"Edit Table",onClick({key:f}){o.push({name:"tableEditor",params:{tableId:f,projectId:t}})}},{icon:h,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),c()}}]}]})))!=null?r:[]}}),u=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(_(),k(D,{"entity-name":"table",loading:I(m),"docs-path":"tables/overview",title:"Database Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:b.value,fields:u,"create-button-text":"Create Table",onCreate:p},null,8,["loading","table"]))}});export{X as default};
//# sourceMappingURL=Tables.fe3d2b01.js.map
