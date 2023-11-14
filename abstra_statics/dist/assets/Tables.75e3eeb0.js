import{d as y,eA as g,eB as k,G as C,b as T,c as _,u as I}from"./outputWidgets.1fa697ec.js";import{e as w,k as h}from"./icons.50cbdedb.js";import{a as x}from"./asyncComputed.75e390ac.js";import"./router.ea9d7256.js";import"./columns.766ac47e.js";import{T as s}from"./tables.a77549f4.js";import{C as D}from"./CrudView.5db3705f.js";import{n as i}from"./string.08e8bc9d.js";import"./Form.4333e43d.js";import"./Title.f5b94017.js";import"./transButton.d868181c.js";import"./Text.75188cac.js";import"./index.b149a301.js";import"./gateway.d5e3123d.js";import"./activeRecord.b14dfa18.js";import"./pubsub.332a43e4.js";import"./index.cf4c23b9.js";import"./url.194890be.js";import"./index.183bb41f.js";import"./index.b7d2a635.js";import"./index.3c19856d.js";import"./index.04a45e82.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="ae4116e2-3592-450a-9e1c-857b4f3dcc63",a._sentryDebugIdIdentifier="sentry-dbid-ae4116e2-3592-450a-9e1c-857b4f3dcc63")}catch{}})();const Y=y({__name:"Tables",setup(a){const o=g(),t=k().params.projectId,{loading:m,result:c,refetch:d}=x(()=>s.list(t)),p=async e=>{const r=await s.create(t,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},u=C(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"Actions",align:"right"}],rows:(r=(e=c.value)==null?void 0:e.map(n=>({key:n.id,cells:[{text:n.name,link:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{text:"Actions",actions:[{icon:w,label:"Edit Table",onClick({key:f}){o.push({name:"tableEditor",params:{tableId:f,projectId:t}})}},{icon:h,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),d()}}]}]})))!=null?r:[]}}),b=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(T(),_(D,{"entity-name":"table",loading:I(m),title:"Database Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:u.value,fields:b,"create-button-text":"Create Table",onCreate:p},null,8,["loading","table"]))}});export{Y as default};
//# sourceMappingURL=Tables.75e3eeb0.js.map
