import{d as f,ez as b,J as y,b as D,c as w,u as _}from"./outputWidgets.b56466d5.js";import{e as g,a as k,b as C}from"./icons.471883fc.js";import{a as v}from"./asyncComputed.57054d06.js";import{D as l}from"./dashes.363075e8.js";import{_ as x}from"./CrudView.vue_vue_type_script_setup_true_lang.fd6822f0.js";import{a as I}from"./ant-design.a6ec74a8.js";import"./activeRecord.32bffbb4.js";import"./pubsub.14ec67af.js";import"./index.a3b69644.js";import"./index.fca2d835.js";import"./Title.f0be6d00.js";import"./Form.7eedc44a.js";import"./index.77e8fbfa.js";import"./index.dcb1daae.js";import"./index.7680ed50.js";import"./index.7dcd1562.js";import"./index.2288da9e.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="88ee098c-93b0-4761-9db5-acaf9ba430cf",o._sentryDebugIdIdentifier="sentry-dbid-88ee098c-93b0-4761-9db5-acaf9ba430cf")}catch{}})();const q=f({__name:"Dashes",setup(o){const s=b(),{loading:r,result:n,refetch:c}=v(()=>l.list()),d=({key:e})=>s.push({name:"dashEditor",params:{dashPath:e}}),p=async({key:e})=>{var a,t;await((t=(a=n.value)==null?void 0:a.find(i=>i.path===e))==null?void 0:t.duplicate()),c()},m=async()=>{const e=await l.create();d({key:e.path})},u=async({key:e})=>{var a,t;await I("Are you sure you want to delete this dash?")&&(await((t=(a=n.value)==null?void 0:a.find(i=>i.path===e))==null?void 0:t.delete()),c())},h=y(()=>{var e,a;return{columns:[{name:"Dash Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(a=(e=n.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,link:`/_editor/dash/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",actions:[{icon:g,label:"Edit Dash",onClick:d},{icon:k,label:"Duplicate",onClick:p},{icon:C,label:"Delete",onClick:u,dangerous:!0}]}]})))!=null?a:[]}});return(e,a)=>(D(),w(x,{loading:_(r),title:"Python Dashes",description:"Create a dashboard page with charts and inputs interacting with your python code.","create-button-text":"Create Dash","empty-title":"No dashes here yet","video-url":"https://www.youtube.com/embed/oYMptrk7QNE",table:h.value,"entity-name":"Dash",onCreate:m},null,8,["loading","table"]))}});export{q as default};
//# sourceMappingURL=Dashes.ce1cbff2.js.map
