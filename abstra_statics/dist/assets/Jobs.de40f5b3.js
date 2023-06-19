import{d as f,G as y,b as J,t as h,y as c,K as _}from"./registerWidgets.fff064a1.js";import{e as k,f as C,g}from"./icons.907f45d7.js";import{a as x}from"./CircularLoading.59d7fd3d.js";import{J as l}from"./jobs.af366134.js";import{R as w}from"./RuntimeList.106b52b7.js";import"./utils.3371dfe5.js";const I=f({__name:"Jobs",setup(R){const r=_(),{loading:d,result:n,refetch:a}=x(()=>l.list()),s=({key:e})=>r.push({path:`/_editor/job/${encodeURIComponent(e)}`}),u=async({key:e})=>{var o,t;await((t=(o=n.value)==null?void 0:o.find(i=>i.identifier===e))==null?void 0:t.duplicate()),a()},m=async()=>{const e=await l.create();s({key:e.identifier})},p=async({key:e})=>{var o,t;confirm("Are you sure you want to delete this job?")&&(await((t=(o=n.value)==null?void 0:o.find(i=>i.identifier===e))==null?void 0:t.delete()),a())},b=y(()=>{var e,o;return{columns:[{name:"Job Name"},{name:"Path"},{name:"Job Actions"}],rows:(o=(e=n.value)==null?void 0:e.map(t=>({key:t.identifier,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/job/${encodeURIComponent(t.identifier)}`},{text:t.identifier},{text:"",classes:["centered"],actions:[{icon:k,label:"Delete",onClick:p,dangerous:!0},{icon:C,label:"Edit Job",onClick:s},{icon:g,label:"Duplicate",onClick:u}]}]})))!=null?o:[]}});return(e,o)=>(J(),h(w,{loading:c(d),title:"Python Jobs",description:"Schedule Python scripts like events on a calendar","create-button-text":"Create Job","empty-title":"No jobs here yet",table:c(b),onCreate:m},null,8,["loading","table"]))}});export{I as default};
//# sourceMappingURL=Jobs.de40f5b3.js.map
