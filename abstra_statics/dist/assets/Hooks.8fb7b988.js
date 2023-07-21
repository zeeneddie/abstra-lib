import{d as h,J as f,b as y,q as H,y as c,G as _}from"./registerWidgets.4cc86716.js";import{f as C,g as b,h as g}from"./icons.d4e872e2.js";import{a as w}from"./asyncComputed.f9d446a7.js";import{H as r}from"./hooks.d59fb935.js";import{R as x}from"./RuntimeList.64d30648.js";import"./activeRecord.57c6bf02.js";import"./DropdownMenu.e399150c.js";import"./CircularLoading.249aa989.js";const T=h({__name:"Hooks",setup(R){const l=_(),{loading:p,result:a,refetch:s}=w(()=>r.list()),i=({key:e})=>l.push({path:`/_editor/hook/${encodeURIComponent(e)}`}),u=async({key:e})=>{var o,t;await((t=(o=a.value)==null?void 0:o.find(n=>n.path===e))==null?void 0:t.duplicate()),s()},m=async()=>{const e=await r.create();i({key:e.path})},d=async({key:e})=>{var o,t;confirm("Are you sure you want to delete this hook?")&&(await((t=(o=a.value)==null?void 0:o.find(n=>n.path===e))==null?void 0:t.delete()),s())},k=f(()=>{var e,o;return{columns:[{name:"Hook Name"},{name:"Path"},{name:"Hook Actions"}],rows:(o=(e=a.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/hook/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",classes:["centered"],actions:[{icon:C,label:"Delete",onClick:d,dangerous:!0},{icon:b,label:"Edit Hook",onClick:i},{icon:g,label:"Duplicate",onClick:u}]}]})))!=null?o:[]}});return(e,o)=>(y(),H(x,{loading:c(p),title:"Python Hooks",description:"Trigger your Python scripts with a request.","create-button-text":"Create Hook","empty-title":"No hooks here yet",table:c(k),onCreate:m},null,8,["loading","table"]))}});export{T as default};
//# sourceMappingURL=Hooks.8fb7b988.js.map
