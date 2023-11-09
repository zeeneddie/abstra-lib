import{d as y,ez as b,ey as C,H as _,b as g,c as I,u as k}from"./outputWidgets.46ba2efb.js";import{b as w}from"./columns.8cdd098e.js";import"./router.76b0f711.js";import{C as i}from"./connector.0a5a05ce.js";import{a as h}from"./asyncComputed.57c65b67.js";import{e as x,k as E}from"./icons.2b0d9965.js";import{C as D}from"./CrudView.c45e22e3.js";import"./gateway.c36bd3f7.js";import"./activeRecord.e90d1fd3.js";import"./pubsub.c955c307.js";import"./index.cf4c23b9.js";import"./Form.6a909b48.js";import"./Title.bdba5bb9.js";import"./transButton.2cce5150.js";import"./Text.1ef25f97.js";import"./index.564994de.js";import"./url.bfb405d5.js";import"./index.e4218be1.js";import"./index.c47cf724.js";import"./index.c5a21398.js";import"./index.84469a00.js";import"./index.f740f6cd.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="ea3fc543-4d46-4cef-9db9-e8cff9ab07ef",o._sentryDebugIdIdentifier="sentry-dbid-ea3fc543-4d46-4cef-9db9-e8cff9ab07ef")}catch{}})();const U=y({__name:"Connectors",setup(o){const r=b(),a=C(),c=r.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);a.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(w.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:m,result:d,refetch:l}=h(()=>i.list(c)),u=_(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"actions"}],rows:(t=(e=d.value)==null?void 0:e.map(n=>({key:n.id,cells:[{text:n.name,link:{name:"connectorEditor",params:{connectorId:n.id}}},{text:n.type},{text:"Actions",actions:[{icon:x,label:"Edit",onClick({key:f}){a.push({name:"connectorEditor",params:{connectorId:f}})}},{icon:E,label:"Delete",dangerous:!0,async onClick(){await n.delete(),l()}}]}]})))!=null?t:[]}});return(e,t)=>(g(),I(D,{"entity-name":"connector",loading:k(m),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{U as default};
//# sourceMappingURL=Connectors.5b90b660.js.map
