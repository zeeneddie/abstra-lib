import{d as y,ey as b,ex as C,F as _,b as g,u as w,bu as I}from"./registerWidgets.eb5d1044.js";import{b as h}from"./index.cbadd24c.js";import"./gateway.f04b471b.js";import{C as s}from"./connector.6a8e8c37.js";import{a as k}from"./asyncComputed.8007047f.js";import{f as x,q as D}from"./icons.f9be01a3.js";import{C as E}from"./CrudView.9068924c.js";import"./passwordlessManager.5b579a25.js";import"./pubsub.8f4c78dc.js";import"./storage.0943951e.js";import"./activeRecord.e38b436c.js";import"./DropdownMenu.cfd0b972.js";import"./Modal.b3432d4d.js";import"./LoadingIndicator.a6ffda8c.js";import"./lottie.083b517e.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[n]="5406a76a-3a21-4e81-a56c-c1f167f083dc",o._sentryDebugIdIdentifier="sentry-dbid-5406a76a-3a21-4e81-a56c-c1f167f083dc")}catch{}})();const H=y({__name:"Connectors",setup(o){const n=b(),r=C(),c=n.params.projectId;async function i(e){const t=await s.create(c,e.name,e.type);r.push({name:"connectorEditor",params:{connectorId:t.id}})}const l=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(h.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:p,result:d,refetch:m}=k(()=>s.list(c)),u=_(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"actions"}],rows:(t=(e=d.value)==null?void 0:e.map(a=>({key:a.id,cells:[{text:a.name,classes:["centered"]},{text:a.type},{text:"Actions",classes:["centered"],actions:[{icon:x,label:"Edit",onClick({key:f}){r.push({name:"connectorEditor",params:{connectorId:f}})}},{icon:D,label:"Delete",dangerous:!0,async onClick(){await a.delete(),m()}}]}]})))!=null?t:[]}});return(e,t)=>(g(),w(E,{"entity-name":"connector",loading:I(p),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:l,"create-button-text":"Create connector",onCreate:i},null,8,["loading","table"]))}});export{H as default};
//# sourceMappingURL=Connectors.5c88ddee.js.map
