import{d as b,ey as y,G as h,b as g,c as w,u as _}from"./outputWidgets.9d44d9f3.js";import{e as C,a as F,b as k}from"./icons.6774e95a.js";import{a as x}from"./asyncComputed.99132b68.js";import{F as l}from"./forms.7a720e82.js";import{C as v}from"./CrudView.533819ab.js";import{a as D}from"./ant-design.c83e5e33.js";import"./activeRecord.cde63aa9.js";import"./pubsub.36fbfdaf.js";import"./Text.0ad03b29.js";import"./Title.2f009ad9.js";import"./transButton.41dbfda3.js";import"./router.b1f71dc3.js";import"./Form.97529076.js";import"./index.a9ce4fb3.js";import"./url.2bddec37.js";import"./index.ed7c13f2.js";import"./index.6cc0b47a.js";import"./index.eaa93dcb.js";import"./index.0eda3d6a.js";import"./index.a18b3bba.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[r]="4bf4abc0-21ed-46a9-943e-d428c1bac5f9",a._sentryDebugIdIdentifier="sentry-dbid-4bf4abc0-21ed-46a9-943e-d428c1bac5f9")}catch{}})();const J=b({__name:"Forms",setup(a){const r=y(),{loading:s,result:n,refetch:m}=x(()=>l.list()),c=({key:e})=>r.push({path:`/_editor/form/${encodeURIComponent(e)}`}),d=async({key:e})=>{var o,t;await((t=(o=n.value)==null?void 0:o.find(i=>i.path===e))==null?void 0:t.duplicate()),m()},p=async()=>{const e=await l.create();c({key:e.path})},u=async({key:e})=>{var o,t;await D("Are you sure you want to delete this form?")&&(await((t=(o=n.value)==null?void 0:o.find(i=>i.path===e))==null?void 0:t.delete()),m())},f=h(()=>{var e,o;return{columns:[{name:"Form Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(o=(e=n.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,link:`/_editor/form/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",actions:[{icon:C,label:"Edit Form",onClick:c},{icon:F,label:"Duplicate",onClick:d},{icon:k,label:"Delete",onClick:u,dangerous:!0}]}]})))!=null?o:[]}});return(e,o)=>(g(),w(v,{loading:_(s),title:"Dynamic Python forms",description:"Create forms with advanced logic, easy integrations and custom branding.","create-button-text":"Create Form","empty-title":"No forms here yet","video-url":"https://www.youtube.com/embed/p6xf8PxL2Yg",table:f.value,"entity-name":"Form",onCreate:p},null,8,["loading","table"]))}});export{J as default};
//# sourceMappingURL=Forms.beb3e8e1.js.map