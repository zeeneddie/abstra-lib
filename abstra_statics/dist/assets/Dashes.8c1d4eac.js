import{d as f,G as y,b as D,t as b,y as r,K as _}from"./registerWidgets.fff064a1.js";import{e as w,f as g,g as k}from"./icons.907f45d7.js";import{a as C}from"./CircularLoading.59d7fd3d.js";import{D as c}from"./dashes.f5f65b41.js";import{R as x}from"./RuntimeList.106b52b7.js";import"./utils.3371dfe5.js";import"./runnerData.81f4c073.js";const P=f({__name:"Dashes",setup(v){const n=_(),{loading:l,result:s,refetch:i}=C(()=>c.list()),d=({key:e})=>n.push({path:`/_editor/dash/${e}`}),h=async({key:e})=>{var a,t;await((t=(a=s.value)==null?void 0:a.find(o=>o.path===e))==null?void 0:t.duplicate()),i()},p=async()=>{const e=await c.create();n.push({path:`/_editor/dash/${e.path}`})},u=async({key:e})=>{var a,t;confirm("Are you sure you want to delete this dash?")&&(await((t=(a=s.value)==null?void 0:a.find(o=>o.path===e))==null?void 0:t.delete()),i())},m=y(()=>{var e,a;return{columns:[{name:"Dash Name"},{name:"Path"},{name:"Dash Actions"}],rows:(a=(e=s.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/dash/${t.path}`},{text:t.path},{text:"",classes:["centered"],actions:[{icon:w,label:"Delete",onClick:u,dangerous:!0},{icon:g,label:"Edit Dash",onClick:d},{icon:k,label:"Duplicate",onClick:h}]}]})))!=null?a:[]}});return(e,a)=>(D(),b(x,{loading:r(l),title:"Python Dashes",description:"Create a dashboard page with charts and inputs interacting with your python code.","create-button-text":"Create Dash","empty-title":"No dashes here yet","video-url":"https://www.youtube.com/embed/oYMptrk7QNE",table:r(m),onCreate:p},null,8,["loading","table"]))}});export{P as default};
//# sourceMappingURL=Dashes.8c1d4eac.js.map
