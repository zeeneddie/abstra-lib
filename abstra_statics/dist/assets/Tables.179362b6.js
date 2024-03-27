import{d as T,eA as _,eB as k,H as w,b as h,c as I,w as i,u as l,eP as x,f as N,aq as S,bF as v}from"./outputWidgets.f017b1ba.js";import{G as D}from"./PhPencil.vue.5c3890c6.js";import{a as E}from"./asyncComputed.9ec0ae7d.js";import"./router.bd5e0bcd.js";import{T as m}from"./tables.8b1e4818.js";import"./index.2d300106.js";import{C as B}from"./CrudView.ab7e0ba9.js";import{n as c}from"./string.cbabd0f6.js";import"./Form.c4ae4d63.js";import"./hasIn.a2b4c2f9.js";import"./popupNotifcation.d47f45e7.js";import"./record.e2bcfa5f.js";import"./pubsub.4d72db7b.js";import"./index.cf4c23b9.js";import"./Paragraph.3ffb559e.js";import"./Base.bb2b5283.js";import"./Typography.5dfc411f.js";import"./Modal.334f8812.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.377064a4.js";import"./url.42b30a4e.js";import"./index.5cbbe314.js";import"./Title.4002b692.js";import"./Text.01ac3fdf.js";import"./index.b5d890a4.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="624100f4-c4a8-4346-bd0b-d42daec51c6a",o._sentryDebugIdIdentifier="sentry-dbid-624100f4-c4a8-4346-bd0b-d42daec51c6a")}catch{}})();const re=T({__name:"Tables",setup(o){const a=_(),t=k().params.projectId,{loading:p,result:u,refetch:b}=E(()=>m.list(t)),f=async e=>{const r=await m.create(t,e.name);a.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},s=()=>{a.push({name:"sql",params:{projectId:t}})},y=w(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:D,label:"Edit Table",onClick({key:C}){a.push({name:"tableEditor",params:{tableId:C,projectId:t}})}},{icon:x,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),b()}}]}]})))!=null?r:[]}}),g=[{key:"name",label:"Table name",type:"text",format:e=>c(e,!0),blur:e=>c(e,!1)}];return(e,r)=>(h(),I(B,{"entity-name":"table",loading:l(p),"docs-path":"tables/overview",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:y.value,fields:g,"create-button-text":"Create Table",onCreate:f,onSecondaryClick:s},{more:i(()=>[N(l(v),{onClick:s},{default:i(()=>[S("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{re as default};
//# sourceMappingURL=Tables.179362b6.js.map