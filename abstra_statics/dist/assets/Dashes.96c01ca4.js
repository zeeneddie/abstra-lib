import{d as f,ey as y,H as b,b as D,c as w,u as g}from"./outputWidgets.a4629ff8.js";import{e as _,a as C,b as k}from"./icons.73bff2ab.js";import{a as v}from"./asyncComputed.fb8b9ba6.js";import{D as p}from"./dashes.cd571f84.js";import{C as x}from"./CrudView.a5b1a4eb.js";import{a as I}from"./ant-design.523e8417.js";import"./activeRecord.a2b7d343.js";import"./pubsub.25dc8c41.js";import"./runnerData.83399038.js";import"./Text.eb216708.js";import"./Title.cf2a531e.js";import"./Form.ab59726f.js";import"./router.ab2ac3ba.js";import"./index.339c7421.js";import"./url.d6a620b9.js";import"./index.874565bb.js";import"./index.48817ebe.js";import"./index.0f6dde5f.js";import"./index.46db6cb2.js";import"./index.56cfba6d.js";import"./index.fda4c602.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[i]="05523424-1d31-45d0-b7e2-8f9c28492c24",o._sentryDebugIdIdentifier="sentry-dbid-05523424-1d31-45d0-b7e2-8f9c28492c24")}catch{}})();const K=f({__name:"Dashes",setup(o){const i=y(),{loading:r,result:s,refetch:d}=v(()=>p.list()),c=({key:t})=>i.push({name:"dashEditor",params:{dashPath:t}}),l=async({key:t})=>{var a,e;await((e=(a=s.value)==null?void 0:a.find(n=>n.path===t))==null?void 0:e.duplicate()),d()},m=async()=>{const t=await p.create();c({key:t.path})},u=async({key:t})=>{var a,e;await I("Are you sure you want to delete this dash?")&&(await((e=(a=s.value)==null?void 0:a.find(n=>n.path===t))==null?void 0:e.delete()),d())},h=b(()=>{var t,a;return{columns:[{name:"Dash Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(a=(t=s.value)==null?void 0:t.map(e=>({key:e.path,cells:[{text:e.title,link:`/_editor/dash/${encodeURIComponent(e.path)}`},{text:e.path},{text:"",actions:[{icon:_,label:"Edit Dash",onClick:c},{icon:C,label:"Duplicate",onClick:l},{icon:k,label:"Delete",onClick:u,dangerous:!0}]}]})))!=null?a:[]}});return(t,a)=>(D(),w(x,{loading:g(r),title:"Python Dashes",description:"Create a dashboard page with charts and inputs interacting with your python code.","create-button-text":"Create Dash","empty-title":"No dashes here yet","video-url":"https://www.youtube.com/embed/oYMptrk7QNE",table:h.value,"entity-name":"Dash",onCreate:m},null,8,["loading","table"]))}});export{K as default};
//# sourceMappingURL=Dashes.96c01ca4.js.map
