import{d as f,eB as b,eA as C,H as g,b as _,c as I,u as h}from"./outputWidgets.2fcaf689.js";import{b as w}from"./index.b2368bb5.js";import"./router.da701220.js";import{C as i}from"./connector.3788fc8e.js";import{a as k}from"./asyncComputed.b73eb7cb.js";import{t as x,o as E}from"./icons.fd33af0d.js";import{C as D}from"./CrudView.6348bbd0.js";import"./index.cf4c23b9.js";import"./record.7fe13089.js";import"./pubsub.e327ee60.js";import"./FormItem.2ef9e7a3.js";import"./hasIn.b29d001b.js";import"./Paragraph.a74d588a.js";import"./Base.1f95b724.js";import"./Form.555e4960.js";import"./Modal.8ac48137.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.a288d7af.js";import"./url.50b7cb74.js";import"./index.5f4d8662.js";import"./Title.f73b3bb2.js";import"./Text.c01c7947.js";import"./index.b675c870.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="1c3c0ba7-2289-46ef-8a1d-971fb1d1e698",o._sentryDebugIdIdentifier="sentry-dbid-1c3c0ba7-2289-46ef-8a1d-971fb1d1e698")}catch{}})();const U=f({__name:"Connectors",setup(o){const r=b(),a=C(),c=r.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);a.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(w.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:m,result:l,refetch:d}=k(()=>i.list(c)),u=g(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"",align:"right"}],rows:(t=(e=l.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"connectorEditor",params:{connectorId:n.id}}},{type:"text",text:n.type},{type:"actions",actions:[{icon:x,label:"Edit",onClick({key:y}){a.push({name:"connectorEditor",params:{connectorId:y}})}},{icon:E,label:"Delete",dangerous:!0,async onClick(){await n.delete(),d()}}]}]})))!=null?t:[]}});return(e,t)=>(_(),I(D,{"entity-name":"connector",loading:h(m),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{U as default};
//# sourceMappingURL=Connectors.6f5ee917.js.map
