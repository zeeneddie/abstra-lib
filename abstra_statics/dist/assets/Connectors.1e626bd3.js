import{d as b,eB as y,eA as C,G as _,b as g,c as I,u as w}from"./outputWidgets.6b670cb4.js";import{b as h}from"./index.79b54298.js";import"./authorManager.295db41f.js";import{C as i}from"./connector.065d9f9d.js";import{a as k}from"./asyncComputed.5b907bc6.js";import{u as x,o as E}from"./icons.0f712874.js";import{C as D}from"./CrudView.ecabb483.js";import"./index.cf4c23b9.js";import"./record.666db8de.js";import"./pubsub.0f360c7e.js";import"./gateway.5e982d32.js";import"./Title.4ae41dd8.js";import"./Text.b3304ad8.js";import"./FormItem.fe58ac25.js";import"./hasIn.330cfc6c.js";import"./Form.383469b9.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.bc090807.js";import"./router.06a42fa2.js";import"./index.1de14aca.js";import"./url.891a8a98.js";import"./index.21c58fdb.js";import"./index.c404cc2f.js";import"./index.aad9906f.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="3cd0db37-bfac-4f24-a525-f38d2d2bd1be",o._sentryDebugIdIdentifier="sentry-dbid-3cd0db37-bfac-4f24-a525-f38d2d2bd1be")}catch{}})();const W=b({__name:"Connectors",setup(o){const r=y(),a=C(),c=r.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);a.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(h.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:d,result:m,refetch:l}=k(()=>i.list(c)),u=_(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"actions"}],rows:(t=(e=m.value)==null?void 0:e.map(n=>({key:n.id,cells:[{text:n.name,link:{name:"connectorEditor",params:{connectorId:n.id}}},{text:n.type},{text:"Actions",actions:[{icon:x,label:"Edit",onClick({key:f}){a.push({name:"connectorEditor",params:{connectorId:f}})}},{icon:E,label:"Delete",dangerous:!0,async onClick(){await n.delete(),l()}}]}]})))!=null?t:[]}});return(e,t)=>(g(),I(D,{"entity-name":"connector",loading:w(d),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{W as default};
//# sourceMappingURL=Connectors.1e626bd3.js.map
