import{d as y,ez as g,eA as C,J as T,b as _,c as k,u as I}from"./outputWidgets.51bf7797.js";import{e as w,q as h}from"./icons.3dbf3493.js";import{a as x}from"./asyncComputed.21e91621.js";import"./router.f8e576d0.js";import"./index.5ee53ab8.js";import{T as s}from"./tables.977349d5.js";import{C as D}from"./CrudView.8cfc0fbf.js";import{n as i}from"./string.ab9746be.js";import"./Title.e753a451.js";import"./index.d1ab863b.js";import"./gateway.f1f4252d.js";import"./activeRecord.6b597982.js";import"./pubsub.57f09ced.js";import"./index.56b6966f.js";import"./Form.11a934e4.js";import"./url.6c50ef27.js";import"./index.9850a290.js";import"./index.e767adaa.js";import"./index.e3e7c9ba.js";import"./index.c83d37e6.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="fb847f0f-f2f3-489c-b2c0-6212758b153d",a._sentryDebugIdIdentifier="sentry-dbid-fb847f0f-f2f3-489c-b2c0-6212758b153d")}catch{}})();const W=y({__name:"Tables",setup(a){const o=g(),t=C().params.projectId,{loading:m,result:c,refetch:d}=x(()=>s.list(t)),p=async e=>{const r=await s.create(t,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},b=T(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"Actions",align:"right"}],rows:(r=(e=c.value)==null?void 0:e.map(n=>({key:n.id,cells:[{text:n.name,link:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{text:"Actions",actions:[{icon:w,label:"Edit Table",onClick({key:u}){o.push({name:"tableEditor",params:{tableId:u,projectId:t}})}},{icon:h,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),d()}}]}]})))!=null?r:[]}}),f=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(_(),k(D,{"entity-name":"table",loading:I(m),title:"Database Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:b.value,fields:f,"create-button-text":"Create Table",onCreate:p},null,8,["loading","table"]))}});export{W as default};
//# sourceMappingURL=Tables.02e11ffc.js.map
