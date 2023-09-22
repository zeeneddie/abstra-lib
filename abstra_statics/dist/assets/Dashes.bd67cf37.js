import{d as b,ex as f,H as y,b as D,c as w,u as g}from"./registerWidgets.d6e66474.js";import{a as _,e as k,b as C}from"./icons.4be6cb33.js";import{a as x}from"./asyncComputed.5c362931.js";import{D as l}from"./dashes.811e4dd5.js";import{R as v}from"./RuntimeList.7fcaa85f.js";import"./activeRecord.1009e596.js";import"./pubsub.9e806cff.js";import"./index.977cda87.js";import"./DropdownMenu.687dee5a.js";import"./CircularLoading.2744e4b0.js";import"./lottie.b059da2e.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="b2ab6807-af3b-4b72-b288-56723f3a0dec",o._sentryDebugIdIdentifier="sentry-dbid-b2ab6807-af3b-4b72-b288-56723f3a0dec")}catch{}})();const Q=b({__name:"Dashes",setup(o){const s=f(),{loading:r,result:n,refetch:c}=x(()=>l.list()),d=({key:e})=>s.push({name:"dashEditor",params:{dashPath:e}}),u=async({key:e})=>{var a,t;await((t=(a=n.value)==null?void 0:a.find(i=>i.path===e))==null?void 0:t.duplicate()),c()},p=async()=>{const e=await l.create();d({key:e.path})},h=async({key:e})=>{var a,t;confirm("Are you sure you want to delete this dash?")&&(await((t=(a=n.value)==null?void 0:a.find(i=>i.path===e))==null?void 0:t.delete()),c())},m=y(()=>{var e,a;return{columns:[{name:"Dash Name"},{name:"Path"},{name:"Dash Actions"}],rows:(a=(e=n.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/dash/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",classes:["centered"],actions:[{icon:_,label:"Delete",onClick:h,dangerous:!0},{icon:k,label:"Edit Dash",onClick:d},{icon:C,label:"Duplicate",onClick:u}]}]})))!=null?a:[]}});return(e,a)=>(D(),w(v,{loading:g(r),title:"Python Dashes",description:"Create a dashboard page with charts and inputs interacting with your python code.","create-button-text":"Create Dash","empty-title":"No dashes here yet","video-url":"https://www.youtube.com/embed/oYMptrk7QNE",table:m.value,onCreate:p},null,8,["loading","table"]))}});export{Q as default};
//# sourceMappingURL=Dashes.bd67cf37.js.map
