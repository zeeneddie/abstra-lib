import{d as b,ey as f,H as y,b as D,c as w,u as g}from"./outputWidgets.d6334d0e.js";import{e as _,a as C,b as k}from"./icons.09e1f108.js";import{a as v}from"./asyncComputed.95fd0999.js";import{D as p}from"./dashes.0b98440a.js";import{C as x}from"./CrudView.a040df87.js";import{a as I}from"./ant-design.765336cf.js";import"./activeRecord.aa738a85.js";import"./pubsub.9d7d329e.js";import"./runnerData.f9a0f655.js";import"./Text.2f6a30da.js";import"./Title.132c3f7f.js";import"./transButton.97ae4a5a.js";import"./router.c9839d0e.js";import"./Form.afe8a620.js";import"./index.85dd1fea.js";import"./url.dce42ecb.js";import"./index.9476b093.js";import"./index.e0fb68fa.js";import"./index.98d66b02.js";import"./index.2221e01c.js";import"./index.6da051f8.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[i]="c895e6cd-c031-4278-b418-27ba3ab5f1b4",o._sentryDebugIdIdentifier="sentry-dbid-c895e6cd-c031-4278-b418-27ba3ab5f1b4")}catch{}})();const K=b({__name:"Dashes",setup(o){const i=f(),{loading:r,result:s,refetch:c}=v(()=>p.list()),d=({key:t})=>i.push({name:"dashEditor",params:{dashPath:t}}),l=async({key:t})=>{var a,e;await((e=(a=s.value)==null?void 0:a.find(n=>n.path===t))==null?void 0:e.duplicate()),c()},m=async()=>{const t=await p.create();d({key:t.path})},u=async({key:t})=>{var a,e;await I("Are you sure you want to delete this dash?")&&(await((e=(a=s.value)==null?void 0:a.find(n=>n.path===t))==null?void 0:e.delete()),c())},h=y(()=>{var t,a;return{columns:[{name:"Dash Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(a=(t=s.value)==null?void 0:t.map(e=>({key:e.path,cells:[{text:e.title,link:`/_editor/dash/${encodeURIComponent(e.path)}`},{text:e.path},{text:"",actions:[{icon:_,label:"Edit Dash",onClick:d},{icon:C,label:"Duplicate",onClick:l},{icon:k,label:"Delete",onClick:u,dangerous:!0}]}]})))!=null?a:[]}});return(t,a)=>(D(),w(x,{loading:g(r),title:"Python Dashes",description:"Create a dashboard page with charts and inputs interacting with your python code.","create-button-text":"Create Dash","empty-title":"No dashes here yet","video-url":"https://www.youtube.com/embed/oYMptrk7QNE",table:h.value,"entity-name":"Dash",onCreate:m},null,8,["loading","table"]))}});export{K as default};
//# sourceMappingURL=Dashes.a2f476ab.js.map
