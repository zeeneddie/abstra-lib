import{d as y,K as h,b,t as g,z as d,H as _}from"./registerWidgets.1fe34791.js";import{f as H,g as w,h as C}from"./icons.6936d0f0.js";import{a as I}from"./asyncComputed.92243be5.js";import{H as p}from"./hooks.da86a1b0.js";import{R as x}from"./RuntimeList.8849f7ff.js";import"./activeRecord.74b17129.js";import"./pubsub.b559dee6.js";import"./DropdownMenu.00adbbe9.js";import"./CircularLoading.d753f33f.js";import"./lottie.e5b4ac5e.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="716ec04f-069f-43f5-9238-ca445fce4dab",a._sentryDebugIdIdentifier="sentry-dbid-716ec04f-069f-43f5-9238-ca445fce4dab")}catch{}})();const $=y({__name:"Hooks",setup(a){const n=_(),{loading:r,result:s,refetch:c}=I(()=>p.list()),l=({key:e})=>n.push({path:`/_editor/hook/${encodeURIComponent(e)}`}),u=async({key:e})=>{var o,t;await((t=(o=s.value)==null?void 0:o.find(i=>i.path===e))==null?void 0:t.duplicate()),c()},f=async()=>{const e=await p.create();l({key:e.path})},m=async({key:e})=>{var o,t;confirm("Are you sure you want to delete this hook?")&&(await((t=(o=s.value)==null?void 0:o.find(i=>i.path===e))==null?void 0:t.delete()),c())},k=h(()=>{var e,o;return{columns:[{name:"Hook Name"},{name:"Path"},{name:"Hook Actions"}],rows:(o=(e=s.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/hook/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",classes:["centered"],actions:[{icon:H,label:"Delete",onClick:m,dangerous:!0},{icon:w,label:"Edit Hook",onClick:l},{icon:C,label:"Duplicate",onClick:u}]}]})))!=null?o:[]}});return(e,o)=>(b(),g(x,{loading:d(r),title:"Python Hooks",description:"Trigger your Python scripts with a request.","create-button-text":"Create Hook","empty-title":"No hooks here yet",table:d(k),onCreate:f},null,8,["loading","table"]))}});export{$ as default};
//# sourceMappingURL=Hooks.cda3d1b9.js.map
