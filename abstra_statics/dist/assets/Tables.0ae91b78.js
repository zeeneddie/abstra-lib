import{d as T,eA as _,eB as k,H as w,b as I,c as h,w as i,u as l,f as x,ar as N,bG as S}from"./outputWidgets.76902441.js";import{I as v,i as D}from"./icons.33aed02e.js";import{a as E}from"./asyncComputed.d847e2fc.js";import"./router.4be0671f.js";import{T as m}from"./tables.51e55981.js";import"./index.4c49ddde.js";import{C as B}from"./CrudView.fcce827d.js";import{n as d}from"./string.b257cc2d.js";import"./Form.03917452.js";import"./hasIn.6e9d6fff.js";import"./popupNotifcation.20547cc9.js";import"./record.743c54d7.js";import"./pubsub.98730cd9.js";import"./index.cf4c23b9.js";import"./Paragraph.790dd5ff.js";import"./Base.5930d3e1.js";import"./Typography.25fe7416.js";import"./Modal.8c54b442.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.a2162042.js";import"./url.1818ad15.js";import"./index.25c8cdcb.js";import"./Title.add74044.js";import"./Text.229395cc.js";import"./index.0d679f5f.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="45b62614-f9e1-456a-856d-edb156a77f19",o._sentryDebugIdIdentifier="sentry-dbid-45b62614-f9e1-456a-856d-edb156a77f19")}catch{}})();const re=T({__name:"Tables",setup(o){const a=_(),t=k().params.projectId,{loading:c,result:u,refetch:b}=E(()=>m.list(t)),f=async e=>{const r=await m.create(t,e.name);a.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},s=()=>{a.push({name:"sql",params:{projectId:t}})},y=w(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:v,label:"Edit Table",onClick({key:C}){a.push({name:"tableEditor",params:{tableId:C,projectId:t}})}},{icon:D,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),b()}}]}]})))!=null?r:[]}}),g=[{key:"name",label:"Table name",type:"text",format:e=>d(e,!0),blur:e=>d(e,!1)}];return(e,r)=>(I(),h(B,{"entity-name":"table",loading:l(c),"docs-path":"tables/overview",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:y.value,fields:g,"create-button-text":"Create Table",onCreate:f,onSecondaryClick:s},{more:i(()=>[x(l(S),{onClick:s},{default:i(()=>[N("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{re as default};
//# sourceMappingURL=Tables.0ae91b78.js.map
