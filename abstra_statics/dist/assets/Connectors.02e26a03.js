import{d as f,eB as b,eA as C,H as g,b as I,c as _,u as h}from"./outputWidgets.ef7f3407.js";import{b as w}from"./index.e05ba064.js";import"./router.bb5913c7.js";import{C as i}from"./connector.13875cca.js";import{a as k}from"./asyncComputed.352c228a.js";import{I as x,i as E}from"./icons.c4e300ba.js";import{C as D}from"./CrudView.623f4bd3.js";import"./index.cf4c23b9.js";import"./record.2e6ff048.js";import"./pubsub.b4b207c2.js";import"./Form.657b35f5.js";import"./hasIn.2b606bf1.js";import"./Paragraph.7f2d959b.js";import"./Base.00784e3c.js";import"./Typography.56b07efe.js";import"./Modal.bf1b2b77.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.853bcb44.js";import"./url.d258a57b.js";import"./index.030a4369.js";import"./Title.1adff754.js";import"./Text.361a5f7a.js";import"./index.edf02e38.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="f159a88a-3a31-4597-93a8-0ece56513a88",o._sentryDebugIdIdentifier="sentry-dbid-f159a88a-3a31-4597-93a8-0ece56513a88")}catch{}})();const U=f({__name:"Connectors",setup(o){const a=b(),r=C(),c=a.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);r.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(w.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:m,result:l,refetch:d}=k(()=>i.list(c)),u=g(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"",align:"right"}],rows:(t=(e=l.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"connectorEditor",params:{connectorId:n.id}}},{type:"text",text:n.type},{type:"actions",actions:[{icon:x,label:"Edit",onClick({key:y}){r.push({name:"connectorEditor",params:{connectorId:y}})}},{icon:E,label:"Delete",dangerous:!0,async onClick(){await n.delete(),d()}}]}]})))!=null?t:[]}});return(e,t)=>(I(),_(D,{"entity-name":"connector",loading:h(m),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{U as default};
//# sourceMappingURL=Connectors.02e26a03.js.map
