import{d as f,ez as b,J as y,b as D,c as w,u as _}from"./outputWidgets.476f2a51.js";import{e as g,a as k,b as C}from"./icons.87949ead.js";import{a as v}from"./asyncComputed.c543915e.js";import{D as c}from"./dashes.90550fd8.js";import{_ as x}from"./CrudView.vue_vue_type_script_setup_true_lang.813ffb9b.js";import{a as I}from"./ant-design.1c01fbf6.js";import"./activeRecord.3174fc13.js";import"./pubsub.fbceb8b1.js";import"./index.ce9d146b.js";import"./index.eaf18bc2.js";import"./Title.571c869b.js";import"./Form.620554b6.js";import"./index.14be91c7.js";import"./index.141071b2.js";import"./index.8c48751f.js";import"./index.a7520a28.js";import"./index.3889d6fe.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="97f21569-4de9-4b90-bd56-f2945115d29b",o._sentryDebugIdIdentifier="sentry-dbid-97f21569-4de9-4b90-bd56-f2945115d29b")}catch{}})();const q=f({__name:"Dashes",setup(o){const s=b(),{loading:r,result:n,refetch:d}=v(()=>c.list()),l=({key:e})=>s.push({name:"dashEditor",params:{dashPath:e}}),p=async({key:e})=>{var a,t;await((t=(a=n.value)==null?void 0:a.find(i=>i.path===e))==null?void 0:t.duplicate()),d()},m=async()=>{const e=await c.create();l({key:e.path})},u=async({key:e})=>{var a,t;await I("Are you sure you want to delete this dash?")&&(await((t=(a=n.value)==null?void 0:a.find(i=>i.path===e))==null?void 0:t.delete()),d())},h=y(()=>{var e,a;return{columns:[{name:"Dash Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(a=(e=n.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,link:`/_editor/dash/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",actions:[{icon:g,label:"Edit Dash",onClick:l},{icon:k,label:"Duplicate",onClick:p},{icon:C,label:"Delete",onClick:u,dangerous:!0}]}]})))!=null?a:[]}});return(e,a)=>(D(),w(x,{loading:_(r),title:"Python Dashes",description:"Create a dashboard page with charts and inputs interacting with your python code.","create-button-text":"Create Dash","empty-title":"No dashes here yet","video-url":"https://www.youtube.com/embed/oYMptrk7QNE",table:h.value,"entity-name":"Dash",onCreate:m},null,8,["loading","table"]))}});export{q as default};
//# sourceMappingURL=Dashes.cef899f6.js.map
