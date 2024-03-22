import{d as T,eA as _,eB as k,H as w,b as h,c as I,w as i,u as l,f as x,ar as N,bG as S}from"./outputWidgets.2c5e6309.js";import{H as v,i as D}from"./icons.85722c07.js";import{a as E}from"./asyncComputed.929ca3c2.js";import"./router.57bac28e.js";import{T as m}from"./tables.e39e5681.js";import"./index.8f141039.js";import{C as B}from"./CrudView.c2ba6e55.js";import{n as c}from"./string.823db0c2.js";import"./Form.1133885f.js";import"./hasIn.86e53fee.js";import"./popupNotifcation.df8325b2.js";import"./record.0135330d.js";import"./pubsub.d999543c.js";import"./index.cf4c23b9.js";import"./Paragraph.2c479822.js";import"./Base.51646eea.js";import"./Typography.87909cc3.js";import"./Modal.875953eb.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.583c7aa0.js";import"./url.fe0cc0c5.js";import"./index.702a74de.js";import"./Title.a5524a3f.js";import"./Text.86501620.js";import"./index.3cb2b4b7.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="1405cc5b-9896-4898-b73a-50b6ce4bd07c",o._sentryDebugIdIdentifier="sentry-dbid-1405cc5b-9896-4898-b73a-50b6ce4bd07c")}catch{}})();const re=T({__name:"Tables",setup(o){const a=_(),t=k().params.projectId,{loading:p,result:b,refetch:u}=E(()=>m.list(t)),f=async e=>{const r=await m.create(t,e.name);a.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},s=()=>{a.push({name:"sql",params:{projectId:t}})},y=w(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=b.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:v,label:"Edit Table",onClick({key:C}){a.push({name:"tableEditor",params:{tableId:C,projectId:t}})}},{icon:D,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),u()}}]}]})))!=null?r:[]}}),g=[{key:"name",label:"Table name",type:"text",format:e=>c(e,!0),blur:e=>c(e,!1)}];return(e,r)=>(h(),I(B,{"entity-name":"table",loading:l(p),"docs-path":"tables/overview",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:y.value,fields:g,"create-button-text":"Create Table",onCreate:f,onSecondaryClick:s},{more:i(()=>[x(l(S),{onClick:s},{default:i(()=>[N("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{re as default};
//# sourceMappingURL=Tables.6a7413d7.js.map
