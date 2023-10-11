import{d as y,eA as b,ez as C,J as _,b as g,c as I,u as w}from"./outputWidgets.5f5dca9f.js";import{b as h}from"./index.fcdb7e23.js";import"./router.a7910fab.js";import{C as i}from"./connector.7bb840ae.js";import{a as k}from"./asyncComputed.eae0c0ea.js";import{e as x,q as E}from"./icons.a77543dc.js";import{C as D}from"./CrudView.f3b7e8d3.js";import"./Title.c2ba09dc.js";import"./index.92c8cf6e.js";import"./activeRecord.ad81cab4.js";import"./pubsub.628f19a6.js";import"./gateway.68ea1e37.js";import"./index.d2da0107.js";import"./Form.09052538.js";import"./url.1555ad6e.js";import"./index.f5a72b75.js";import"./index.10f6bb5a.js";import"./index.7ef152c5.js";import"./index.7ab474e7.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="c4d93913-068f-4e36-a10a-563044885cfd",o._sentryDebugIdIdentifier="sentry-dbid-c4d93913-068f-4e36-a10a-563044885cfd")}catch{}})();const P=y({__name:"Connectors",setup(o){const r=b(),a=C(),c=r.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);a.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(h.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:m,result:d,refetch:l}=k(()=>i.list(c)),u=_(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"actions"}],rows:(t=(e=d.value)==null?void 0:e.map(n=>({key:n.id,cells:[{text:n.name,link:{name:"connectorEditor",params:{connectorId:n.id}}},{text:n.type},{text:"Actions",actions:[{icon:x,label:"Edit",onClick({key:f}){a.push({name:"connectorEditor",params:{connectorId:f}})}},{icon:E,label:"Delete",dangerous:!0,async onClick(){await n.delete(),l()}}]}]})))!=null?t:[]}});return(e,t)=>(g(),I(D,{"entity-name":"connector",loading:w(m),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{P as default};
//# sourceMappingURL=Connectors.855f7693.js.map