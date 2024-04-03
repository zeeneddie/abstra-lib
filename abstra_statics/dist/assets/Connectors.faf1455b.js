import{d as f,eA as b,eI as C,H as g,b as _,c as I,u as h,eP as w}from"./outputWidgets.c199cd65.js";import{b as k}from"./index.b551111a.js";import"./router.304180d2.js";import{C as i}from"./connector.fa96f77f.js";import{a as x}from"./asyncComputed.e8505f10.js";import{G as E}from"./PhPencil.vue.efa46330.js";import{C as D}from"./CrudView.4e62156c.js";import"./index.cf4c23b9.js";import"./record.e60b008b.js";import"./pubsub.6235e50c.js";import"./Form.2bee2b00.js";import"./hasIn.7b6e24c6.js";import"./popupNotifcation.5704d43a.js";import"./Paragraph.72c12540.js";import"./Text.47bac3a4.js";import"./Modal.94298c95.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.3370d835.js";import"./BookOutlined.ed0934b2.js";import"./url.266b7147.js";import"./index.464c5f1b.js";import"./Title.2a2cadae.js";import"./index.0270c373.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="07299ccc-e9b0-42f5-9622-e39c8cd88232",o._sentryDebugIdIdentifier="sentry-dbid-07299ccc-e9b0-42f5-9622-e39c8cd88232")}catch{}})();const S=f({__name:"Connectors",setup(o){const r=b(),a=C(),c=r.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);a.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(k.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:m,result:l,refetch:d}=x(()=>i.list(c)),u=g(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"",align:"right"}],rows:(t=(e=l.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"connectorEditor",params:{connectorId:n.id}}},{type:"text",text:n.type},{type:"actions",actions:[{icon:E,label:"Edit",onClick({key:y}){a.push({name:"connectorEditor",params:{connectorId:y}})}},{icon:w,label:"Delete",dangerous:!0,async onClick(){await n.delete(),d()}}]}]})))!=null?t:[]}});return(e,t)=>(_(),I(D,{"entity-name":"connector",loading:h(m),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{S as default};
//# sourceMappingURL=Connectors.faf1455b.js.map