import{d as f,K as C,b as g,t as _,z as s,J as w,H as I}from"./registerWidgets.60bba559.js";import{b as h}from"./index.320037c9.js";import"./gateway.aefff1da.js";import{C as i}from"./connector.a6d69625.js";import{a as k}from"./asyncComputed.d00a688c.js";import{g as x,r as D}from"./icons.86798a2e.js";import{C as E}from"./CrudView.a60cfd24.js";import"./passwordlessManager.e1b568b1.js";import"./pubsub.6df2423b.js";import"./activeRecord.5794d4d2.js";import"./DropdownMenu.5abb73fd.js";import"./Modal.8fbea10f.js";import"./LoadingIndicator.0b01cf4c.js";import"./lottie.fd5d7b21.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[n]="cfe563d4-1dab-4ee5-bcec-37b33898eb59",o._sentryDebugIdIdentifier="sentry-dbid-cfe563d4-1dab-4ee5-bcec-37b33898eb59")}catch{}})();const Y=f({__name:"Connectors",setup(o){const n=w(),a=I(),c=n.params.projectId;async function l(e){const t=await i.create(c,e.name,e.type);a.push({name:"connectorEditor",params:{connectorId:t.id}})}const d=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(h.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:p,result:m,refetch:u}=k(()=>i.list(c)),b=C(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"actions"}],rows:(t=(e=m.value)==null?void 0:e.map(r=>({key:r.id,cells:[{text:r.name,classes:["centered"]},{text:r.type},{text:"Actions",classes:["centered"],actions:[{icon:x,label:"Edit",onClick({key:y}){a.push({name:"connectorEditor",params:{connectorId:y}})}},{icon:D,label:"Delete",dangerous:!0,async onClick(){await r.delete(),u()}}]}]})))!=null?t:[]}});return(e,t)=>(g(),_(E,{"entity-name":"connector",loading:s(p),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:s(b),fields:d,"create-button-text":"Create connector",onCreate:l},null,8,["loading","table"]))}});export{Y as default};
//# sourceMappingURL=Connectors.e3b2920d.js.map
