import{d as b,K as y,b as D,t as w,z as l,H as g}from"./registerWidgets.240bf3ff.js";import{f as _,g as k,h as C}from"./icons.8dbdad3c.js";import{a as x}from"./asyncComputed.e710533c.js";import{D as p}from"./dashes.91ab254f.js";import{R as I}from"./RuntimeList.461b180d.js";import"./activeRecord.d21ad35a.js";import"./pubsub.83908d54.js";import"./runnerData.d42efcd0.js";import"./DropdownMenu.2a857e1b.js";import"./CircularLoading.846828c4.js";import"./lottie.b1d7a5e6.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="18f349e7-6b72-4ff5-b90b-875d342868d1",o._sentryDebugIdIdentifier="sentry-dbid-18f349e7-6b72-4ff5-b90b-875d342868d1")}catch{}})();const L=b({__name:"Dashes",setup(o){const s=g(),{loading:r,result:n,refetch:d}=x(()=>p.list()),c=({key:e})=>s.push({name:"dashEditor",params:{dashPath:e}}),u=async({key:e})=>{var a,t;await((t=(a=n.value)==null?void 0:a.find(i=>i.path===e))==null?void 0:t.duplicate()),d()},h=async()=>{const e=await p.create();c({key:e.path})},m=async({key:e})=>{var a,t;confirm("Are you sure you want to delete this dash?")&&(await((t=(a=n.value)==null?void 0:a.find(i=>i.path===e))==null?void 0:t.delete()),d())},f=y(()=>{var e,a;return{columns:[{name:"Dash Name"},{name:"Path"},{name:"Dash Actions"}],rows:(a=(e=n.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/dash/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",classes:["centered"],actions:[{icon:_,label:"Delete",onClick:m,dangerous:!0},{icon:k,label:"Edit Dash",onClick:c},{icon:C,label:"Duplicate",onClick:u}]}]})))!=null?a:[]}});return(e,a)=>(D(),w(I,{loading:l(r),title:"Python Dashes",description:"Create a dashboard page with charts and inputs interacting with your python code.","create-button-text":"Create Dash","empty-title":"No dashes here yet","video-url":"https://www.youtube.com/embed/oYMptrk7QNE",table:l(f),onCreate:h},null,8,["loading","table"]))}});export{L as default};
//# sourceMappingURL=Dashes.1bec3bc9.js.map
