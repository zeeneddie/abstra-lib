import{d as y,K as b,b as D,t as w,z as l,H as g}from"./registerWidgets.ad696c68.js";import{f as _,g as k,h as C}from"./icons.1c1f9d53.js";import{a as I}from"./asyncComputed.40a67fe8.js";import{D as p}from"./dashes.55442710.js";import{R as x}from"./RuntimeList.668ecbe0.js";import"./activeRecord.da3a3625.js";import"./runnerData.50606928.js";import"./DropdownMenu.0fa3a500.js";import"./CircularLoading.1b0ceab6.js";import"./lottie.d1a83079.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="f2a77e9f-c539-448d-8d65-e442fc29c502",o._sentryDebugIdIdentifier="sentry-dbid-f2a77e9f-c539-448d-8d65-e442fc29c502")}catch{}})();const z=y({__name:"Dashes",setup(o){const s=g(),{loading:r,result:n,refetch:c}=I(()=>p.list()),d=({key:e})=>s.push({path:`/_editor/dash/${encodeURIComponent(e)}`}),u=async({key:e})=>{var a,t;await((t=(a=n.value)==null?void 0:a.find(i=>i.path===e))==null?void 0:t.duplicate()),c()},h=async()=>{const e=await p.create();d({key:e.path})},m=async({key:e})=>{var a,t;confirm("Are you sure you want to delete this dash?")&&(await((t=(a=n.value)==null?void 0:a.find(i=>i.path===e))==null?void 0:t.delete()),c())},f=b(()=>{var e,a;return{columns:[{name:"Dash Name"},{name:"Path"},{name:"Dash Actions"}],rows:(a=(e=n.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/dash/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",classes:["centered"],actions:[{icon:_,label:"Delete",onClick:m,dangerous:!0},{icon:k,label:"Edit Dash",onClick:d},{icon:C,label:"Duplicate",onClick:u}]}]})))!=null?a:[]}});return(e,a)=>(D(),w(x,{loading:l(r),title:"Python Dashes",description:"Create a dashboard page with charts and inputs interacting with your python code.","create-button-text":"Create Dash","empty-title":"No dashes here yet","video-url":"https://www.youtube.com/embed/oYMptrk7QNE",table:l(f),onCreate:h},null,8,["loading","table"]))}});export{z as default};
//# sourceMappingURL=Dashes.7cb49bbd.js.map