import{d as f,K as b,J as C,L as _,b as g,u as w,A as I}from"./registerWidgets.163fba07.js";import{b as h}from"./index.168a0b2d.js";import"./gateway.30d62fc0.js";import{C as s}from"./connector.3fee50af.js";import{a as k}from"./asyncComputed.5f7867b2.js";import{f as x,q as D}from"./icons.89f10f59.js";import{C as E}from"./CrudView.ab6b4d67.js";import"./passwordlessManager.055571e3.js";import"./pubsub.2d612358.js";import"./activeRecord.b56127d8.js";import"./DropdownMenu.8ad1467e.js";import"./Modal.ea6a3e3a.js";import"./LoadingIndicator.787893fe.js";import"./lottie.981a9cff.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[n]="56b1022e-4858-4e5c-a3f8-9b051d596d69",o._sentryDebugIdIdentifier="sentry-dbid-56b1022e-4858-4e5c-a3f8-9b051d596d69")}catch{}})();const Y=f({__name:"Connectors",setup(o){const n=b(),r=C(),c=n.params.projectId;async function i(e){const t=await s.create(c,e.name,e.type);r.push({name:"connectorEditor",params:{connectorId:t.id}})}const l=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(h.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:d,result:p,refetch:m}=k(()=>s.list(c)),u=_(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"actions"}],rows:(t=(e=p.value)==null?void 0:e.map(a=>({key:a.id,cells:[{text:a.name,classes:["centered"]},{text:a.type},{text:"Actions",classes:["centered"],actions:[{icon:x,label:"Edit",onClick({key:y}){r.push({name:"connectorEditor",params:{connectorId:y}})}},{icon:D,label:"Delete",dangerous:!0,async onClick(){await a.delete(),m()}}]}]})))!=null?t:[]}});return(e,t)=>(g(),w(E,{"entity-name":"connector",loading:I(d),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:l,"create-button-text":"Create connector",onCreate:i},null,8,["loading","table"]))}});export{Y as default};
//# sourceMappingURL=Connectors.c2869cbf.js.map
