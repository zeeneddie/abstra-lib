import{d as p,eA as y,G as b,b as g,c as w,u as _}from"./outputWidgets.65a42716.js";import{F as m}from"./forms.24f618ed.js";import{e as F,d as h}from"./icons.9da44d92.js";import{a as C}from"./asyncComputed.af8cf203.js";import{a as k}from"./ant-design.f7487327.js";import{C as x}from"./CrudView.63edc54a.js";import"./record.b5bd1eee.js";import"./pubsub.8d754297.js";import"./transButton.d2e93887.js";import"./Text.f0cd4e48.js";import"./Base.e53684e8.js";import"./router.1dff6d79.js";import"./Title.dfc698a2.js";import"./index.a55a8b93.js";import"./url.b76a6879.js";import"./index.fdc2480d.js";import"./index.f1371734.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="65083f95-3f8e-4f78-aa96-1af201d4772c",r._sentryDebugIdIdentifier="sentry-dbid-65083f95-3f8e-4f78-aa96-1af201d4772c")}catch{}})();const $=p({__name:"Forms",setup(r){const a=y(),{loading:n,result:i,refetch:d}=C(()=>m.list()),s=({key:e})=>a.push({name:"formEditor",params:{id:e}}),l=async()=>{const e=await m.create();s({key:e.id})},c=async({key:e})=>{var o,t;await k("Are you sure you want to delete this form?")&&(await((t=(o=i.value)==null?void 0:o.find(f=>f.id===e))==null?void 0:t.delete()),d())},u=b(()=>{var e,o;return{columns:[{name:"Form Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(o=(e=i.value)==null?void 0:e.map(t=>({key:t.id,cells:[{text:t.title,link:`/_editor/form/${encodeURIComponent(t.id)}`},{text:t.path},{text:"",actions:[{icon:F,label:"Edit Form",onClick:s},{icon:h,label:"Delete",onClick:c,dangerous:!0}]}]})))!=null?o:[]}});return(e,o)=>(g(),w(x,{loading:_(n),title:"Forms",description:"Create forms with advanced logic, easy integrations and custom branding.","create-button-text":"Create Form","empty-title":"No forms here yet","video-url":"https://www.youtube.com/embed/p6xf8PxL2Yg",table:u.value,"entity-name":"Form",onCreate:l},null,8,["loading","table"]))}});export{$ as default};
//# sourceMappingURL=Forms.2fa3af33.js.map
