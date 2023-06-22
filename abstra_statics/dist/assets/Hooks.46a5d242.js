import{d as h,G as f,b as y,t as H,y as c,K as _}from"./registerWidgets.fff064a1.js";import{e as C,f as b,g}from"./icons.5214a3f5.js";import{a as w}from"./CircularLoading.59d7fd3d.js";import{H as l}from"./hooks.944007d1.js";import{R as x}from"./RuntimeList.106b52b7.js";import"./utils.3371dfe5.js";const N=h({__name:"Hooks",setup(R){const r=_(),{loading:p,result:a,refetch:s}=w(()=>l.list()),i=({key:e})=>r.push({path:`/_editor/hook/${encodeURIComponent(e)}`}),u=async({key:e})=>{var o,t;await((t=(o=a.value)==null?void 0:o.find(n=>n.path===e))==null?void 0:t.duplicate()),s()},d=async()=>{const e=await l.create();i({key:e.path})},m=async({key:e})=>{var o,t;confirm("Are you sure you want to delete this hook?")&&(await((t=(o=a.value)==null?void 0:o.find(n=>n.path===e))==null?void 0:t.delete()),s())},k=f(()=>{var e,o;return{columns:[{name:"Hook Name"},{name:"Path"},{name:"Hook Actions"}],rows:(o=(e=a.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/hook/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",classes:["centered"],actions:[{icon:C,label:"Delete",onClick:m,dangerous:!0},{icon:b,label:"Edit Hook",onClick:i},{icon:g,label:"Duplicate",onClick:u}]}]})))!=null?o:[]}});return(e,o)=>(y(),H(x,{loading:c(p),title:"Python Hooks",description:"Trigger your Python scripts with a request.","create-button-text":"Create Hook","empty-title":"No hooks here yet",table:c(k),onCreate:d},null,8,["loading","table"]))}});export{N as default};
//# sourceMappingURL=Hooks.46a5d242.js.map
