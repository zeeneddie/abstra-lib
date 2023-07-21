import{d as f,J as y,b as D,q as b,y as c,G as w}from"./registerWidgets.4cc86716.js";import{f as C,g as _,h as k}from"./icons.d4e872e2.js";import{a as g}from"./asyncComputed.f9d446a7.js";import{D as r}from"./dashes.c3f95f38.js";import{R as x}from"./RuntimeList.64d30648.js";import"./activeRecord.57c6bf02.js";import"./runnerData.cef787df.js";import"./DropdownMenu.e399150c.js";import"./CircularLoading.249aa989.js";const $=f({__name:"Dashes",setup(R){const l=w(),{loading:p,result:o,refetch:n}=g(()=>r.list()),i=({key:e})=>l.push({path:`/_editor/dash/${encodeURIComponent(e)}`}),d=async({key:e})=>{var a,t;await((t=(a=o.value)==null?void 0:a.find(s=>s.path===e))==null?void 0:t.duplicate()),n()},h=async()=>{const e=await r.create();i({key:e.path})},u=async({key:e})=>{var a,t;confirm("Are you sure you want to delete this dash?")&&(await((t=(a=o.value)==null?void 0:a.find(s=>s.path===e))==null?void 0:t.delete()),n())},m=y(()=>{var e,a;return{columns:[{name:"Dash Name"},{name:"Path"},{name:"Dash Actions"}],rows:(a=(e=o.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/dash/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",classes:["centered"],actions:[{icon:C,label:"Delete",onClick:u,dangerous:!0},{icon:_,label:"Edit Dash",onClick:i},{icon:k,label:"Duplicate",onClick:d}]}]})))!=null?a:[]}});return(e,a)=>(D(),b(x,{loading:c(p),title:"Python Dashes",description:"Create a dashboard page with charts and inputs interacting with your python code.","create-button-text":"Create Dash","empty-title":"No dashes here yet","video-url":"https://www.youtube.com/embed/oYMptrk7QNE",table:c(m),onCreate:h},null,8,["loading","table"]))}});export{$ as default};
//# sourceMappingURL=Dashes.0fd48a68.js.map
