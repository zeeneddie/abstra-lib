import{d as y,eA as b,ez as _,J as C,b as g,c as I,u as h}from"./outputWidgets.b13a87c2.js";import{b as k}from"./index.b8915c7f.js";import"./console.d76c010c.js";import{C as c}from"./connector.8e79d1a4.js";import{a as w}from"./asyncComputed.02afd50e.js";import{e as x,p as E}from"./icons.76c1fe8b.js";import{_ as D}from"./CrudView.vue_vue_type_script_setup_true_lang.cf244ae9.js";import"./index.98e61e8e.js";import"./Form.e21e0d73.js";import"./Title.6f86755a.js";import"./index.3d7f8177.js";import"./index.55a2786b.js";import"./index.c4d59e95.js";import"./dayjs.2e90d17d.js";import"./index.fbf04eaa.js";import"./index.7011a200.js";import"./TabPane.3cb0210e.js";import"./index.0345671f.js";import"./index.24360d49.js";import"./index.c32ce6af.js";import"./index.73746068.js";import"./index.7dcc157a.js";import"./index.0b99f8ef.js";import"./index.1b5bc05c.js";import"./index.957937c4.js";import"./activeRecord.f5a2d19d.js";import"./pubsub.dab46576.js";import"./gateway.f581ef9f.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="650a8341-e713-4f4d-9229-2d97009f1f19",o._sentryDebugIdIdentifier="sentry-dbid-650a8341-e713-4f4d-9229-2d97009f1f19")}catch{}})();const te=y({__name:"Connectors",setup(o){const r=b(),a=_(),i=r.params.projectId;async function s(e){const t=await c.create(i,e.name,e.type);a.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(k.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:m,result:l,refetch:d}=w(()=>c.list(i)),u=C(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"actions"}],rows:(t=(e=l.value)==null?void 0:e.map(n=>({key:n.id,cells:[{text:n.name,link:{name:"connectorEditor",params:{connectorId:n.id}}},{text:n.type},{text:"Actions",actions:[{icon:x,label:"Edit",onClick({key:f}){a.push({name:"connectorEditor",params:{connectorId:f}})}},{icon:E,label:"Delete",dangerous:!0,async onClick(){await n.delete(),d()}}]}]})))!=null?t:[]}});return(e,t)=>(g(),I(D,{"entity-name":"connector",loading:h(m),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{te as default};
//# sourceMappingURL=Connectors.14afc0aa.js.map
