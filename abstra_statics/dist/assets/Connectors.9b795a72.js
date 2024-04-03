import{d as f,eA as b,eI as C,H as g,b as _,c as I,u as h,eP as w}from"./outputWidgets.1c4947c7.js";import{b as k}from"./index.bf745b17.js";import"./router.f814fb07.js";import{C as i}from"./connector.00c5d663.js";import{a as x}from"./asyncComputed.ab9c45d0.js";import{G as E}from"./PhPencil.vue.d41e1ee1.js";import{C as D}from"./CrudView.54cbe4c4.js";import"./index.cf4c23b9.js";import"./record.438e3693.js";import"./pubsub.87f1efb9.js";import"./Form.cba5cdce.js";import"./hasIn.58acd238.js";import"./popupNotifcation.bd532d77.js";import"./Paragraph.110c4a21.js";import"./Text.4ed32514.js";import"./Modal.5c7e6d3c.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.f7859d2d.js";import"./url.ca3e5e32.js";import"./index.a9af7b0b.js";import"./Title.6f4ab7f6.js";import"./index.83f629a7.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="0facaecd-c261-457a-a358-d01f6a85ce3c",o._sentryDebugIdIdentifier="sentry-dbid-0facaecd-c261-457a-a358-d01f6a85ce3c")}catch{}})();const Q=f({__name:"Connectors",setup(o){const a=b(),r=C(),c=a.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);r.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(k.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:m,result:l,refetch:d}=x(()=>i.list(c)),u=g(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"",align:"right"}],rows:(t=(e=l.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"connectorEditor",params:{connectorId:n.id}}},{type:"text",text:n.type},{type:"actions",actions:[{icon:E,label:"Edit",onClick({key:y}){r.push({name:"connectorEditor",params:{connectorId:y}})}},{icon:w,label:"Delete",dangerous:!0,async onClick(){await n.delete(),d()}}]}]})))!=null?t:[]}});return(e,t)=>(_(),I(D,{"entity-name":"connector",loading:h(m),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{Q as default};
//# sourceMappingURL=Connectors.9b795a72.js.map
