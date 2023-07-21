import{d as f,J as y,b as J,q as h,y as r,G as _}from"./registerWidgets.4cc86716.js";import{f as k,g as C,h as g}from"./icons.d4e872e2.js";import{a as x}from"./asyncComputed.f9d446a7.js";import{J as c}from"./jobs.098bcb10.js";import{R as w}from"./RuntimeList.64d30648.js";import"./activeRecord.57c6bf02.js";import"./DropdownMenu.e399150c.js";import"./CircularLoading.249aa989.js";const U=f({__name:"Jobs",setup(R){const l=_(),{loading:d,result:i,refetch:a}=x(()=>c.list()),s=({key:e})=>l.push({path:`/_editor/job/${encodeURIComponent(e)}`}),u=async({key:e})=>{var o,t;await((t=(o=i.value)==null?void 0:o.find(n=>n.identifier===e))==null?void 0:t.duplicate()),a()},m=async()=>{const e=await c.create();s({key:e.identifier})},p=async({key:e})=>{var o,t;confirm("Are you sure you want to delete this job?")&&(await((t=(o=i.value)==null?void 0:o.find(n=>n.identifier===e))==null?void 0:t.delete()),a())},b=y(()=>{var e,o;return{columns:[{name:"Job Name"},{name:"Path"},{name:"Job Actions"}],rows:(o=(e=i.value)==null?void 0:e.map(t=>({key:t.identifier,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/job/${encodeURIComponent(t.identifier)}`},{text:t.identifier},{text:"",classes:["centered"],actions:[{icon:k,label:"Delete",onClick:p,dangerous:!0},{icon:C,label:"Edit Job",onClick:s},{icon:g,label:"Duplicate",onClick:u}]}]})))!=null?o:[]}});return(e,o)=>(J(),h(w,{loading:r(d),title:"Python Jobs",description:"Schedule Python scripts like events on a calendar","create-button-text":"Create Job","empty-title":"No jobs here yet",table:r(b),onCreate:m},null,8,["loading","table"]))}});export{U as default};
//# sourceMappingURL=Jobs.9894cce6.js.map
