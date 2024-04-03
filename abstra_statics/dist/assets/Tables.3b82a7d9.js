import{d as T,eI as _,eA as k,H as w,b as h,c as I,w as i,u as l,eP as x,f as N,aq as S,bF as v}from"./outputWidgets.b6281ddd.js";import{G as D}from"./PhPencil.vue.91ac19dc.js";import{a as E}from"./asyncComputed.87b89de5.js";import"./router.fb8b2bbf.js";import{T as m}from"./tables.1401ef5c.js";import"./index.3003d4e2.js";import{C as q}from"./CrudView.6fafefb9.js";import{n as d}from"./string.370e2ed1.js";import"./Form.64aa12be.js";import"./hasIn.fa8badbc.js";import"./popupNotifcation.f4ca9331.js";import"./record.5472cc64.js";import"./pubsub.3bfaef01.js";import"./index.cf4c23b9.js";import"./Paragraph.87e5c88f.js";import"./Text.266d831f.js";import"./Modal.f720b408.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.73ce8d01.js";import"./url.c9323ece.js";import"./index.be8ccb5d.js";import"./Title.cf7b0ba4.js";import"./index.3f0e0d0a.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="9e45ba1d-f008-48b2-a8fe-24d9aa1761a6",o._sentryDebugIdIdentifier="sentry-dbid-9e45ba1d-f008-48b2-a8fe-24d9aa1761a6")}catch{}})();const te=T({__name:"Tables",setup(o){const t=_(),a=k().params.projectId,{loading:c,result:u,refetch:b}=E(()=>m.list(a)),f=async e=>{const r=await m.create(a,e.name);t.push({name:"tableEditor",params:{tableId:r.id,projectId:a}})},s=()=>{t.push({name:"sql",params:{projectId:a}})},y=w(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:a}}},{type:"actions",actions:[{icon:D,label:"Edit Table",onClick({key:C}){t.push({name:"tableEditor",params:{tableId:C,projectId:a}})}},{icon:x,label:"Delete",dangerous:!0,async onClick(){await n.delete(a,n.id),b()}}]}]})))!=null?r:[]}}),g=[{key:"name",label:"Table name",type:"text",format:e=>d(e,!0),blur:e=>d(e,!1)}];return(e,r)=>(h(),I(q,{"entity-name":"table",loading:l(c),"docs-path":"tables/overview",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:y.value,fields:g,"create-button-text":"Create Table",onCreate:f,onSecondaryClick:s},{more:i(()=>[N(l(v),{onClick:s},{default:i(()=>[S("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{te as default};
//# sourceMappingURL=Tables.3b82a7d9.js.map
