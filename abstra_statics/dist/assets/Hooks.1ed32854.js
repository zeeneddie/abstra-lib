import{d as f,eA as k,G as y,b,c as g,u as h}from"./outputWidgets.4eff76e6.js";import{e as _,d as w}from"./icons.82d13829.js";import{a as H}from"./asyncComputed.4874377b.js";import{H as d}from"./hooks.bbbf74d9.js";import{C}from"./CrudView.7f331e25.js";import{a as x}from"./ant-design.77b028eb.js";import"./record.9c05c036.js";import"./pubsub.2c4444ee.js";import"./Text.e43234cf.js";import"./Base.34de9a78.js";import"./transButton.b80e5b6e.js";import"./router.366434a1.js";import"./Title.e93cc21e.js";import"./index.c1d31c15.js";import"./url.33e1e1fe.js";import"./index.2510a9c2.js";import"./index.f28fa2c5.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[r]="e2a3ee47-5348-4a9e-b128-a9d9d0ca847c",a._sentryDebugIdIdentifier="sentry-dbid-e2a3ee47-5348-4a9e-b128-a9d9d0ca847c")}catch{}})();const $=f({__name:"Hooks",setup(a){const r=k(),{loading:i,result:n,refetch:c}=H(()=>d.list()),s=({key:e})=>r.push({name:"hookEditor",params:{id:e}}),l=async()=>{const e=await d.create();s({key:e.id})},m=async({key:e})=>{var o,t;await x("Are you sure you want to delete this hook?")&&(await((t=(o=n.value)==null?void 0:o.find(u=>u.id===e))==null?void 0:t.delete()),c())},p=y(()=>{var e,o;return{columns:[{name:"Hook Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(o=(e=n.value)==null?void 0:e.map(t=>({key:t.id,cells:[{text:t.title,link:`/_editor/hook/${encodeURIComponent(t.id)}`},{text:t.path},{text:"",actions:[{icon:_,label:"Edit Hook",onClick:s},{icon:w,label:"Delete",onClick:m,dangerous:!0}]}]})))!=null?o:[]}});return(e,o)=>(b(),g(C,{loading:h(i),title:"Hooks",description:"Trigger your Python scripts with a request.","create-button-text":"Create Hook","empty-title":"No hooks here yet",table:p.value,"entity-name":"Hook",onCreate:l},null,8,["loading","table"]))}});export{$ as default};
//# sourceMappingURL=Hooks.1ed32854.js.map
