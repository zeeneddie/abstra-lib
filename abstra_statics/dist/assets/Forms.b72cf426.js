import{d as y,ex as b,H as h,b as _,c as g,u as w}from"./registerWidgets.dc9f1313.js";import{e as F,a as C,b as k}from"./icons.43fab4f0.js";import{a as x}from"./asyncComputed.b23fa538.js";import{F as d}from"./forms.24e01f47.js";import{_ as v}from"./CrudView.vue_vue_type_script_setup_true_lang.c1a9182c.js";import{a as D}from"./ant-design.dd79952f.js";import"./activeRecord.9995b4c7.js";import"./pubsub.358cbe19.js";import"./index.809c009e.js";import"./Title.aac0de3b.js";import"./Form.14d2c95c.js";import"./index.13368493.js";import"./index.a5ea279e.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="49fdbd90-40d5-4722-9756-0ae5267ff6eb",a._sentryDebugIdIdentifier="sentry-dbid-49fdbd90-40d5-4722-9756-0ae5267ff6eb")}catch{}})();const T=y({__name:"Forms",setup(a){const n=b(),{loading:s,result:r,refetch:m}=x(()=>d.list()),c=({key:e})=>n.push({path:`/_editor/form/${encodeURIComponent(e)}`}),l=async({key:e})=>{var o,t;await((t=(o=r.value)==null?void 0:o.find(i=>i.path===e))==null?void 0:t.duplicate()),m()},p=async()=>{const e=await d.create();c({key:e.path})},u=async({key:e})=>{var o,t;await D("Are you sure you want to delete this form?")&&(await((t=(o=r.value)==null?void 0:o.find(i=>i.path===e))==null?void 0:t.delete()),m())},f=h(()=>{var e,o;return{columns:[{name:"Form Name"},{name:"Path"},{name:"Form Actions"}],rows:(o=(e=r.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,link:`/_editor/form/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",actions:[{icon:F,label:"Edit Form",onClick:c},{icon:C,label:"Duplicate",onClick:l},{icon:k,label:"Delete",onClick:u,dangerous:!0}]}]})))!=null?o:[]}});return(e,o)=>(_(),g(v,{loading:w(s),title:"Dynamic Python forms",description:"Create forms with advanced logic, easy integrations and custom branding.","create-button-text":"Create Form","empty-title":"No forms here yet","video-url":"https://www.youtube.com/embed/p6xf8PxL2Yg",table:f.value,"entity-name":"Form",onCreate:p},null,8,["loading","table"]))}});export{T as default};
//# sourceMappingURL=Forms.b72cf426.js.map