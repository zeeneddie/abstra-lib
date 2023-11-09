import{d as f,ey as b,G as y,b as D,c as w,u as g}from"./outputWidgets.9d44d9f3.js";import{e as _,a as C,b as k}from"./icons.6774e95a.js";import{a as v}from"./asyncComputed.99132b68.js";import{D as c}from"./dashes.d39ec2ad.js";import{C as x}from"./CrudView.533819ab.js";import{a as I}from"./ant-design.c83e5e33.js";import"./activeRecord.cde63aa9.js";import"./pubsub.36fbfdaf.js";import"./runnerData.6febcd00.js";import"./Text.0ad03b29.js";import"./Title.2f009ad9.js";import"./transButton.41dbfda3.js";import"./router.b1f71dc3.js";import"./Form.97529076.js";import"./index.a9ce4fb3.js";import"./url.2bddec37.js";import"./index.ed7c13f2.js";import"./index.6cc0b47a.js";import"./index.eaa93dcb.js";import"./index.0eda3d6a.js";import"./index.a18b3bba.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[i]="8360fd1c-d43d-4076-a76b-60fab88b8feb",o._sentryDebugIdIdentifier="sentry-dbid-8360fd1c-d43d-4076-a76b-60fab88b8feb")}catch{}})();const K=f({__name:"Dashes",setup(o){const i=b(),{loading:r,result:s,refetch:d}=v(()=>c.list()),p=({key:t})=>i.push({name:"dashEditor",params:{dashPath:t}}),l=async({key:t})=>{var a,e;await((e=(a=s.value)==null?void 0:a.find(n=>n.path===t))==null?void 0:e.duplicate()),d()},m=async()=>{const t=await c.create();p({key:t.path})},u=async({key:t})=>{var a,e;await I("Are you sure you want to delete this dash?")&&(await((e=(a=s.value)==null?void 0:a.find(n=>n.path===t))==null?void 0:e.delete()),d())},h=y(()=>{var t,a;return{columns:[{name:"Dash Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(a=(t=s.value)==null?void 0:t.map(e=>({key:e.path,cells:[{text:e.title,link:`/_editor/dash/${encodeURIComponent(e.path)}`},{text:e.path},{text:"",actions:[{icon:_,label:"Edit Dash",onClick:p},{icon:C,label:"Duplicate",onClick:l},{icon:k,label:"Delete",onClick:u,dangerous:!0}]}]})))!=null?a:[]}});return(t,a)=>(D(),w(x,{loading:g(r),title:"Python Dashes",description:"Create a dashboard page with charts and inputs interacting with your python code.","create-button-text":"Create Dash","empty-title":"No dashes here yet","video-url":"https://www.youtube.com/embed/oYMptrk7QNE",table:h.value,"entity-name":"Dash",onCreate:m},null,8,["loading","table"]))}});export{K as default};
//# sourceMappingURL=Dashes.176a9c48.js.map
