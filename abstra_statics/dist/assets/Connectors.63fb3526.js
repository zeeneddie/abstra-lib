import{d as f,eB as b,eA as C,G as _,b as g,c as I,u as k}from"./outputWidgets.562826ac.js";import{b as w}from"./columns.29d297cf.js";import"./router.e5ce2c0b.js";import{C as i}from"./connector.889dec17.js";import{a as h}from"./asyncComputed.df2d9552.js";import{e as x,k as E}from"./icons.63405824.js";import{C as D}from"./CrudView.6f7097f4.js";import"./gateway.c80b0686.js";import"./activeRecord.6bb1bd7f.js";import"./pubsub.7185b91b.js";import"./index.cf4c23b9.js";import"./Base.bf8dc0b1.js";import"./FormItem.fc4e7da8.js";import"./transButton.17480f27.js";import"./Text.712cfc26.js";import"./Title.f7aaa881.js";import"./index.82606edc.js";import"./url.5a1383d2.js";import"./index.01bf1f2c.js";import"./index.583cd440.js";import"./index.9cdd1b35.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="1e70a52a-e22c-4251-b3e6-0dfc7cc8ac1b",o._sentryDebugIdIdentifier="sentry-dbid-1e70a52a-e22c-4251-b3e6-0dfc7cc8ac1b")}catch{}})();const S=f({__name:"Connectors",setup(o){const r=b(),a=C(),c=r.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);a.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(w.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:m,result:l,refetch:d}=h(()=>i.list(c)),u=_(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"actions"}],rows:(t=(e=l.value)==null?void 0:e.map(n=>({key:n.id,cells:[{text:n.name,link:{name:"connectorEditor",params:{connectorId:n.id}}},{text:n.type},{text:"Actions",actions:[{icon:x,label:"Edit",onClick({key:y}){a.push({name:"connectorEditor",params:{connectorId:y}})}},{icon:E,label:"Delete",dangerous:!0,async onClick(){await n.delete(),d()}}]}]})))!=null?t:[]}});return(e,t)=>(g(),I(D,{"entity-name":"connector",loading:k(m),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{S as default};
//# sourceMappingURL=Connectors.63fb3526.js.map
