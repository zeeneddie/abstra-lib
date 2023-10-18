import{d as f,ey as y,H as b,b as D,c as w,u as g}from"./outputWidgets.8be138ba.js";import{e as _,a as C,b as k}from"./icons.35976e57.js";import{a as v}from"./asyncComputed.96c9ad3b.js";import{D as l}from"./dashes.e479dfed.js";import{C as x}from"./CrudView.cfa43f1a.js";import{a as I}from"./ant-design.e9f581dc.js";import"./activeRecord.f6cce158.js";import"./pubsub.e324f67c.js";import"./runnerData.48ddf2c0.js";import"./index.98827a3d.js";import"./Title.12e8916a.js";import"./Form.7b75db7b.js";import"./router.bb47648a.js";import"./index.0df733bd.js";import"./url.ebe1e528.js";import"./index.3ef3e2d2.js";import"./index.bc7e7ec9.js";import"./index.d11a75f6.js";import"./index.568a8efe.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="ae249dee-c681-4c78-97b1-5962808f9159",o._sentryDebugIdIdentifier="sentry-dbid-ae249dee-c681-4c78-97b1-5962808f9159")}catch{}})();const G=f({__name:"Dashes",setup(o){const s=y(),{loading:r,result:n,refetch:c}=v(()=>l.list()),d=({key:e})=>s.push({name:"dashEditor",params:{dashPath:e}}),p=async({key:e})=>{var a,t;await((t=(a=n.value)==null?void 0:a.find(i=>i.path===e))==null?void 0:t.duplicate()),c()},m=async()=>{const e=await l.create();d({key:e.path})},u=async({key:e})=>{var a,t;await I("Are you sure you want to delete this dash?")&&(await((t=(a=n.value)==null?void 0:a.find(i=>i.path===e))==null?void 0:t.delete()),c())},h=b(()=>{var e,a;return{columns:[{name:"Dash Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(a=(e=n.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,link:`/_editor/dash/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",actions:[{icon:_,label:"Edit Dash",onClick:d},{icon:C,label:"Duplicate",onClick:p},{icon:k,label:"Delete",onClick:u,dangerous:!0}]}]})))!=null?a:[]}});return(e,a)=>(D(),w(x,{loading:g(r),title:"Python Dashes",description:"Create a dashboard page with charts and inputs interacting with your python code.","create-button-text":"Create Dash","empty-title":"No dashes here yet","video-url":"https://www.youtube.com/embed/oYMptrk7QNE",table:h.value,"entity-name":"Dash",onCreate:m},null,8,["loading","table"]))}});export{G as default};
//# sourceMappingURL=Dashes.19df8f67.js.map
