import{d as f,ey as b,ex as C,F as _,b as g,u as w,bu as I}from"./registerWidgets.35e57f84.js";import{b as h}from"./index.17016b8e.js";import"./gateway.f9f9043e.js";import{C as s}from"./connector.dc3fca4e.js";import{a as k}from"./asyncComputed.c94e9a4f.js";import{f as x,q as D}from"./icons.5c69e04d.js";import{C as E}from"./CrudView.8396494d.js";import"./passwordlessManager.eaa6b5ad.js";import"./pubsub.f7a86775.js";import"./storage.a155fd84.js";import"./activeRecord.8a45db87.js";import"./DropdownMenu.c6e2b5e2.js";import"./Modal.cd6fa11e.js";import"./LoadingIndicator.a0c1bf05.js";import"./lottie.19b05d18.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[n]="5c598db5-8f84-46de-a903-a69cb506932a",o._sentryDebugIdIdentifier="sentry-dbid-5c598db5-8f84-46de-a903-a69cb506932a")}catch{}})();const H=f({__name:"Connectors",setup(o){const n=b(),r=C(),c=n.params.projectId;async function i(e){const t=await s.create(c,e.name,e.type);r.push({name:"connectorEditor",params:{connectorId:t.id}})}const l=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(h.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:d,result:p,refetch:m}=k(()=>s.list(c)),u=_(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"actions"}],rows:(t=(e=p.value)==null?void 0:e.map(a=>({key:a.id,cells:[{text:a.name,classes:["centered"]},{text:a.type},{text:"Actions",classes:["centered"],actions:[{icon:x,label:"Edit",onClick({key:y}){r.push({name:"connectorEditor",params:{connectorId:y}})}},{icon:D,label:"Delete",dangerous:!0,async onClick(){await a.delete(),m()}}]}]})))!=null?t:[]}});return(e,t)=>(g(),w(E,{"entity-name":"connector",loading:I(d),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:l,"create-button-text":"Create connector",onCreate:i},null,8,["loading","table"]))}});export{H as default};
//# sourceMappingURL=Connectors.326b25bd.js.map
