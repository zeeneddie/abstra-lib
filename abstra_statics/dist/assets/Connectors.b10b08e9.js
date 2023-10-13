import{d as f,eA as b,ez as C,J as _,b as g,c as I,u as w}from"./outputWidgets.65926c1d.js";import{b as h}from"./index.8b621348.js";import"./router.52af5430.js";import{C as i}from"./connector.527ade7a.js";import{a as k}from"./asyncComputed.4723d9b8.js";import{e as x,q as E}from"./icons.da7d27cd.js";import{C as D}from"./CrudView.bb677fb8.js";import"./Title.2cced18a.js";import"./index.553ada1f.js";import"./activeRecord.994400e6.js";import"./pubsub.dc5bec39.js";import"./gateway.0e243f04.js";import"./index.2740d90e.js";import"./Form.47548ee6.js";import"./url.bc2b44ba.js";import"./index.0312767e.js";import"./index.006c6212.js";import"./index.73801d39.js";import"./index.1bb9605d.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="bbd83c47-a589-480f-95d6-a6d5c2d8a5a4",o._sentryDebugIdIdentifier="sentry-dbid-bbd83c47-a589-480f-95d6-a6d5c2d8a5a4")}catch{}})();const P=f({__name:"Connectors",setup(o){const a=b(),r=C(),c=a.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);r.push({name:"connectorEditor",params:{connectorId:t.id}})}const d=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(h.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:p,result:m,refetch:l}=k(()=>i.list(c)),u=_(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"actions"}],rows:(t=(e=m.value)==null?void 0:e.map(n=>({key:n.id,cells:[{text:n.name,link:{name:"connectorEditor",params:{connectorId:n.id}}},{text:n.type},{text:"Actions",actions:[{icon:x,label:"Edit",onClick({key:y}){r.push({name:"connectorEditor",params:{connectorId:y}})}},{icon:E,label:"Delete",dangerous:!0,async onClick(){await n.delete(),l()}}]}]})))!=null?t:[]}});return(e,t)=>(g(),I(D,{"entity-name":"connector",loading:w(p),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:d,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{P as default};
//# sourceMappingURL=Connectors.b10b08e9.js.map
