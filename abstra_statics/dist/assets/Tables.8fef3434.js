import{d as g,eA as C,eB as T,H as k,b as _,c as I,u as h}from"./outputWidgets.52d47f16.js";import{q as w,d as x}from"./icons.22b07466.js";import{a as S}from"./asyncComputed.4c8b6226.js";import"./router.ea56abc1.js";import{T as s}from"./tables.bcd51b63.js";import"./index.b0e912f1.js";import{C as v}from"./CrudView.f4ed8d29.js";import{n as i}from"./string.90c9b04a.js";import"./FormItem.f8e049e8.js";import"./hasIn.1b3df496.js";import"./record.c6473ef2.js";import"./pubsub.aae16efd.js";import"./index.cf4c23b9.js";import"./Paragraph.358c5b85.js";import"./Base.73331908.js";import"./Typography.3ab66b91.js";import"./Form.7de0f394.js";import"./Modal.4734ef4e.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.50955cf6.js";import"./url.0e01f007.js";import"./index.e38634fb.js";import"./Title.55fb2f67.js";import"./Text.1eb3c39b.js";import"./index.8bd5fc6f.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="c9208ef4-5a05-41a0-990f-cae47355b51e",o._sentryDebugIdIdentifier="sentry-dbid-c9208ef4-5a05-41a0-990f-cae47355b51e")}catch{}})();const ee=g({__name:"Tables",setup(o){const a=C(),t=T().params.projectId,{loading:m,result:c,refetch:p}=S(()=>s.list(t)),d=async e=>{const r=await s.create(t,e.name);a.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},u=()=>{a.push({name:"sql",params:{projectId:t}})},b=k(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=c.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:w,label:"Edit Table",onClick({key:y}){a.push({name:"tableEditor",params:{tableId:y,projectId:t}})}},{icon:x,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),p()}}]}]})))!=null?r:[]}}),f=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(_(),I(v,{"entity-name":"table",loading:h(m),"docs-path":"tables/overview",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:b.value,fields:f,"create-button-text":"Create Table","secondary-button-text":"Run SQL",onCreate:d,onSecondaryClick:u},null,8,["loading","table"]))}});export{ee as default};
//# sourceMappingURL=Tables.8fef3434.js.map
