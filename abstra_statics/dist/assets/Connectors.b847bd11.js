import{d as f,eB as b,eA as C,H as g,b as _,c as I,u as h}from"./outputWidgets.45c7404b.js";import{b as w}from"./index.bf58e34e.js";import"./router.2f3e9c3c.js";import{C as i}from"./connector.1bb34c2d.js";import{a as k}from"./asyncComputed.b6502bd0.js";import{H as x,i as E}from"./icons.14bde68f.js";import{C as D}from"./CrudView.9657bf22.js";import"./index.cf4c23b9.js";import"./record.7138611e.js";import"./pubsub.fbad3310.js";import"./Form.05416e25.js";import"./hasIn.e0b0d824.js";import"./popupNotifcation.0c3205fd.js";import"./Paragraph.2b21747d.js";import"./Base.7d2c537c.js";import"./Typography.1a23e608.js";import"./Modal.4ec46017.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.73e1ac98.js";import"./url.f504f2ef.js";import"./index.6031f34e.js";import"./Title.a8c9b8de.js";import"./Text.9d46918a.js";import"./index.55b8a0fc.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="76d40cbf-dff9-4ac5-adce-7c75adb345d4",o._sentryDebugIdIdentifier="sentry-dbid-76d40cbf-dff9-4ac5-adce-7c75adb345d4")}catch{}})();const W=f({__name:"Connectors",setup(o){const r=b(),a=C(),c=r.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);a.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(w.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:d,result:m,refetch:l}=k(()=>i.list(c)),u=g(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"",align:"right"}],rows:(t=(e=m.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"connectorEditor",params:{connectorId:n.id}}},{type:"text",text:n.type},{type:"actions",actions:[{icon:x,label:"Edit",onClick({key:y}){a.push({name:"connectorEditor",params:{connectorId:y}})}},{icon:E,label:"Delete",dangerous:!0,async onClick(){await n.delete(),l()}}]}]})))!=null?t:[]}});return(e,t)=>(_(),I(D,{"entity-name":"connector",loading:h(d),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{W as default};
//# sourceMappingURL=Connectors.b847bd11.js.map
