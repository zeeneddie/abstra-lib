import{d as f,K as y,b as J,t as h,z as r,H as _}from"./registerWidgets.69eb7b40.js";import{f as k,g as C,h as g}from"./icons.ea1ef9e9.js";import{a as x}from"./asyncComputed.5c8fd07f.js";import{J as c}from"./jobs.9a947645.js";import{R as w}from"./RuntimeList.497b6f4b.js";import"./utils.f91c500c.js";import"./pubsub.a0411919.js";import"./DropdownMenu.1fde8cc7.js";import"./CircularLoading.3c5929bd.js";const $=f({__name:"Jobs",setup(R){const l=_(),{loading:d,result:i,refetch:a}=x(()=>c.list()),s=({key:e})=>l.push({path:`/_editor/job/${encodeURIComponent(e)}`}),m=async({key:e})=>{var o,t;await((t=(o=i.value)==null?void 0:o.find(n=>n.identifier===e))==null?void 0:t.duplicate()),a()},u=async()=>{const e=await c.create();s({key:e.identifier})},p=async({key:e})=>{var o,t;confirm("Are you sure you want to delete this job?")&&(await((t=(o=i.value)==null?void 0:o.find(n=>n.identifier===e))==null?void 0:t.delete()),a())},b=y(()=>{var e,o;return{columns:[{name:"Job Name"},{name:"Path"},{name:"Job Actions"}],rows:(o=(e=i.value)==null?void 0:e.map(t=>({key:t.identifier,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/job/${encodeURIComponent(t.identifier)}`},{text:t.identifier},{text:"",classes:["centered"],actions:[{icon:k,label:"Delete",onClick:p,dangerous:!0},{icon:C,label:"Edit Job",onClick:s},{icon:g,label:"Duplicate",onClick:m}]}]})))!=null?o:[]}});return(e,o)=>(J(),h(w,{loading:r(d),title:"Python Jobs",description:"Schedule Python scripts like events on a calendar","create-button-text":"Create Job","empty-title":"No jobs here yet",table:r(b),onCreate:u},null,8,["loading","table"]))}});export{$ as default};
//# sourceMappingURL=Jobs.092fd69a.js.map
