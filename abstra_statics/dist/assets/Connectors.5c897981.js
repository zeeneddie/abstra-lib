import{d as y,ey as f,ex as _,H as C,b as g,c as I,u as h}from"./registerWidgets.1e9167ab.js";import{b as k}from"./index.11f5d4e4.js";import"./gateway.6096f5a8.js";import{C as s}from"./connector.7ebaddc9.js";import{a as w}from"./asyncComputed.8a644895.js";import{e as x,o as E}from"./icons.41af03d8.js";import{_ as D}from"./CrudView.vue_vue_type_script_setup_true_lang.e0bf9fc2.js";import"./passwordlessManager.b7f590c1.js";import"./pubsub.09eafe35.js";import"./storage.84fcb572.js";import"./activeRecord.60b6bd01.js";import"./Modal.b646cd22.js";import"./Title.d1f45d59.js";import"./transButton.755e702e.js";import"./index.9165a659.js";import"./Text.c8d7b4c0.js";import"./index.32c7f8ee.js";import"./index.d74062f4.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="c41b55ea-9a86-4b5c-ba58-2cab452d7097",o._sentryDebugIdIdentifier="sentry-dbid-c41b55ea-9a86-4b5c-ba58-2cab452d7097")}catch{}})();const L=y({__name:"Connectors",setup(o){const a=f(),r=_(),c=a.params.projectId;async function i(e){const t=await s.create(c,e.name,e.type);r.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(k.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:m,result:l,refetch:d}=w(()=>s.list(c)),u=C(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"actions"}],rows:(t=(e=l.value)==null?void 0:e.map(n=>({key:n.id,cells:[{text:n.name,link:{name:"connectorEditor",params:{connectorId:n.id}}},{text:n.type},{text:"Actions",actions:[{icon:x,label:"Edit",onClick({key:b}){r.push({name:"connectorEditor",params:{connectorId:b}})}},{icon:E,label:"Delete",dangerous:!0,async onClick(){await n.delete(),d()}}]}]})))!=null?t:[]}});return(e,t)=>(g(),I(D,{"entity-name":"connector",loading:h(m),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:i},null,8,["loading","table"]))}});export{L as default};
//# sourceMappingURL=Connectors.5c897981.js.map
