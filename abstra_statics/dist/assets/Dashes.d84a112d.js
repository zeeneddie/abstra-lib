import{d as f,ez as b,J as y,b as D,c as w,u as g}from"./outputWidgets.dcbaec6c.js";import{e as _,a as C,b as k}from"./icons.eaf14b7d.js";import{a as v}from"./asyncComputed.05eefdbd.js";import{D as l}from"./dashes.55e540d6.js";import{C as x}from"./CrudView.4ac6b440.js";import{a as I}from"./ant-design.f602ec67.js";import"./activeRecord.d9292c93.js";import"./pubsub.999268d8.js";import"./index.678801af.js";import"./index.9fcba2ca.js";import"./Title.137468a8.js";import"./Form.94b2db91.js";import"./router.fe36cb8d.js";import"./url.5c03711e.js";import"./index.69bd7c01.js";import"./index.12134aed.js";import"./index.87a757a5.js";import"./index.a56c5205.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="cad50ef2-ff83-434e-a1d3-bbac6b2c024e",o._sentryDebugIdIdentifier="sentry-dbid-cad50ef2-ff83-434e-a1d3-bbac6b2c024e")}catch{}})();const q=f({__name:"Dashes",setup(o){const s=b(),{loading:r,result:n,refetch:c}=v(()=>l.list()),d=({key:e})=>s.push({name:"dashEditor",params:{dashPath:e}}),p=async({key:e})=>{var a,t;await((t=(a=n.value)==null?void 0:a.find(i=>i.path===e))==null?void 0:t.duplicate()),c()},u=async()=>{const e=await l.create();d({key:e.path})},m=async({key:e})=>{var a,t;await I("Are you sure you want to delete this dash?")&&(await((t=(a=n.value)==null?void 0:a.find(i=>i.path===e))==null?void 0:t.delete()),c())},h=y(()=>{var e,a;return{columns:[{name:"Dash Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(a=(e=n.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,link:`/_editor/dash/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",actions:[{icon:_,label:"Edit Dash",onClick:d},{icon:C,label:"Duplicate",onClick:p},{icon:k,label:"Delete",onClick:m,dangerous:!0}]}]})))!=null?a:[]}});return(e,a)=>(D(),w(x,{loading:g(r),title:"Python Dashes",description:"Create a dashboard page with charts and inputs interacting with your python code.","create-button-text":"Create Dash","empty-title":"No dashes here yet","video-url":"https://www.youtube.com/embed/oYMptrk7QNE",table:h.value,"entity-name":"Dash",onCreate:u},null,8,["loading","table"]))}});export{q as default};
//# sourceMappingURL=Dashes.d84a112d.js.map
