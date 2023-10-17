import{d as y,eA as b,ez as C,J as _,b as g,c as I,u as w}from"./outputWidgets.50a32881.js";import{b as h}from"./columns.87749077.js";import"./router.05c8f462.js";import{C as i}from"./connector.756a5413.js";import{a as k}from"./asyncComputed.b13ea8c8.js";import{e as x,q as E}from"./icons.21c36b2d.js";import{C as D}from"./CrudView.2bb96676.js";import"./gateway.557f1ef0.js";import"./activeRecord.a6d1caaf.js";import"./pubsub.a612a4ec.js";import"./index.f4ac7424.js";import"./Title.6ed5196f.js";import"./index.c6d42cf5.js";import"./index.afd55904.js";import"./Form.eef121ef.js";import"./url.543483ec.js";import"./index.e0c93905.js";import"./index.30f77a12.js";import"./index.0fb677b8.js";import"./index.9b89ff38.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="4e19dd76-cff4-45fe-907d-a57f1d82570f",o._sentryDebugIdIdentifier="sentry-dbid-4e19dd76-cff4-45fe-907d-a57f1d82570f")}catch{}})();const Q=y({__name:"Connectors",setup(o){const r=b(),a=C(),c=r.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);a.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(h.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:d,result:m,refetch:l}=k(()=>i.list(c)),u=_(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"actions"}],rows:(t=(e=m.value)==null?void 0:e.map(n=>({key:n.id,cells:[{text:n.name,link:{name:"connectorEditor",params:{connectorId:n.id}}},{text:n.type},{text:"Actions",actions:[{icon:x,label:"Edit",onClick({key:f}){a.push({name:"connectorEditor",params:{connectorId:f}})}},{icon:E,label:"Delete",dangerous:!0,async onClick(){await n.delete(),l()}}]}]})))!=null?t:[]}});return(e,t)=>(g(),I(D,{"entity-name":"connector",loading:w(d),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{Q as default};
//# sourceMappingURL=Connectors.d04428a0.js.map
