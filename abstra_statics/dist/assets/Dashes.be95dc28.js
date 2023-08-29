import{d as f,H as y,K as b,b as D,t as w,z as g}from"./registerWidgets.cecc7add.js";import{e as _,f as k,g as C}from"./icons.a47594f6.js";import{a as v}from"./asyncComputed.08fdcc30.js";import{D as l}from"./dashes.fe46ea3e.js";import{R as x}from"./RuntimeList.27942af1.js";import"./activeRecord.2a9ab687.js";import"./pubsub.a43e35aa.js";import"./runnerData.fab8bd8b.js";import"./DropdownMenu.4df8c96d.js";import"./CircularLoading.45f7b299.js";import"./lottie.79ce2fdf.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="f9c644fb-13be-42c0-8038-0ffd863d7771",o._sentryDebugIdIdentifier="sentry-dbid-f9c644fb-13be-42c0-8038-0ffd863d7771")}catch{}})();const L=f({__name:"Dashes",setup(o){const s=y(),{loading:r,result:n,refetch:c}=v(()=>l.list()),d=({key:e})=>s.push({name:"dashEditor",params:{dashPath:e}}),p=async({key:e})=>{var a,t;await((t=(a=n.value)==null?void 0:a.find(i=>i.path===e))==null?void 0:t.duplicate()),c()},u=async()=>{const e=await l.create();d({key:e.path})},h=async({key:e})=>{var a,t;confirm("Are you sure you want to delete this dash?")&&(await((t=(a=n.value)==null?void 0:a.find(i=>i.path===e))==null?void 0:t.delete()),c())},m=b(()=>{var e,a;return{columns:[{name:"Dash Name"},{name:"Path"},{name:"Dash Actions"}],rows:(a=(e=n.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/dash/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",classes:["centered"],actions:[{icon:_,label:"Delete",onClick:h,dangerous:!0},{icon:k,label:"Edit Dash",onClick:d},{icon:C,label:"Duplicate",onClick:p}]}]})))!=null?a:[]}});return(e,a)=>(D(),w(x,{loading:g(r),title:"Python Dashes",description:"Create a dashboard page with charts and inputs interacting with your python code.","create-button-text":"Create Dash","empty-title":"No dashes here yet","video-url":"https://www.youtube.com/embed/oYMptrk7QNE",table:m.value,onCreate:u},null,8,["loading","table"]))}});export{L as default};
//# sourceMappingURL=Dashes.be95dc28.js.map