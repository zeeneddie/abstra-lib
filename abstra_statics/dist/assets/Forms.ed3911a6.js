import{d as y,eA as b,G as g,b as h,c as w,u as _}from"./outputWidgets.427e9347.js";import{e as C,a as F,b as k}from"./icons.2a865956.js";import{a as x}from"./asyncComputed.32abd7c2.js";import{F as l}from"./forms.9ae53624.js";import{C as v}from"./CrudView.22a93e62.js";import{a as I}from"./ant-design.484e81b9.js";import"./activeRecord.91f10272.js";import"./pubsub.9b59356e.js";import"./Text.31458a16.js";import"./Base.dbea8db9.js";import"./FormItem.e1548cef.js";import"./transButton.470f2fe6.js";import"./router.1a20c20c.js";import"./Title.213e158e.js";import"./index.e440fe17.js";import"./url.9044ee0d.js";import"./index.8fcd530b.js";import"./index.36e3a141.js";import"./index.3804082b.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[r]="2c33797f-a725-4241-a392-274fa29f54cf",a._sentryDebugIdIdentifier="sentry-dbid-2c33797f-a725-4241-a392-274fa29f54cf")}catch{}})();const H=y({__name:"Forms",setup(a){const r=b(),{loading:s,result:n,refetch:m}=x(()=>l.list()),c=({key:e})=>r.push({path:`/_editor/form/${encodeURIComponent(e)}`}),p=async({key:e})=>{var o,t;await((t=(o=n.value)==null?void 0:o.find(i=>i.path===e))==null?void 0:t.duplicate()),m()},d=async()=>{const e=await l.create();c({key:e.path})},u=async({key:e})=>{var o,t;await I("Are you sure you want to delete this form?")&&(await((t=(o=n.value)==null?void 0:o.find(i=>i.path===e))==null?void 0:t.delete()),m())},f=g(()=>{var e,o;return{columns:[{name:"Form Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(o=(e=n.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,link:`/_editor/form/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",actions:[{icon:C,label:"Edit Form",onClick:c},{icon:F,label:"Duplicate",onClick:p},{icon:k,label:"Delete",onClick:u,dangerous:!0}]}]})))!=null?o:[]}});return(e,o)=>(h(),w(v,{loading:_(s),title:"Forms",description:"Create forms with advanced logic, easy integrations and custom branding.","create-button-text":"Create Form","empty-title":"No forms here yet","video-url":"https://www.youtube.com/embed/p6xf8PxL2Yg",table:f.value,"entity-name":"Form",onCreate:d},null,8,["loading","table"]))}});export{H as default};
//# sourceMappingURL=Forms.ed3911a6.js.map
