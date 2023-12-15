import{d as f,eB as b,eA as C,G as g,b as _,c as I,u as w}from"./outputWidgets.90a37dfb.js";import{b as h}from"./index.c6f2c2d2.js";import"./authorManager.f2a35532.js";import{C as i}from"./connector.8ee4000f.js";import{a as k}from"./asyncComputed.04259b99.js";import{v as x,g as E}from"./icons.9cf35040.js";import{C as v}from"./CrudView.19bb4bce.js";import"./index.cf4c23b9.js";import"./record.ebb65067.js";import"./pubsub.4fea4be7.js";import"./gateway.6f30a6bf.js";import"./Text.215ae4f0.js";import"./Title.b52522ff.js";import"./FormItem.4720b0a3.js";import"./hasIn.1e7661e3.js";import"./Form.f5b3db33.js";import"./Modal.265d309e.js";import"./router.e0403360.js";import"./index.9624bf8d.js";import"./url.c4b5264e.js";import"./index.85b56a97.js";import"./index.f4297c2c.js";import"./index.6d664715.js";import"./index.52c09cf5.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="d32af867-c88c-4013-9771-52325c53199e",o._sentryDebugIdIdentifier="sentry-dbid-d32af867-c88c-4013-9771-52325c53199e")}catch{}})();const X=f({__name:"Connectors",setup(o){const r=b(),a=C(),c=r.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);a.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(h.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:m,result:l,refetch:d}=k(()=>i.list(c)),u=g(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"actions"}],rows:(t=(e=l.value)==null?void 0:e.map(n=>({key:n.id,cells:[{text:n.name,link:{name:"connectorEditor",params:{connectorId:n.id}}},{text:n.type},{text:"Actions",actions:[{icon:x,label:"Edit",onClick({key:y}){a.push({name:"connectorEditor",params:{connectorId:y}})}},{icon:E,label:"Delete",dangerous:!0,async onClick(){await n.delete(),d()}}]}]})))!=null?t:[]}});return(e,t)=>(_(),I(v,{"entity-name":"connector",loading:w(m),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{X as default};
//# sourceMappingURL=Connectors.c511c238.js.map
