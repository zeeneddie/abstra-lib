import{d as P,K as y,b as h,t as k,z as i,J as C,H as b}from"./registerWidgets.ba12cd54.js";import{f as g,g as _,h as w}from"./icons.ea1ef9e9.js";import{a as x}from"./asyncComputed.3e2c3bcb.js";import{P as l}from"./project.7afa7e16.js";import"./utils.a13b462f.js";import{C as v}from"./CrudView.705290c0.js";import"./passwordlessManager.a5941d42.js";import"./pubsub.a0411919.js";import"./DropdownMenu.7287e391.js";import"./CircularLoading.79e96d11.js";import"./Modal.9cffe8c6.js";const S=P({__name:"Projects",setup(I){const n=C().params.organizationId,d=b(),{loading:m,result:a,refetch:c}=x(()=>l.list(n)),s=({key:e})=>d.push({name:"project",params:{projectId:e}}),p=async({key:e})=>{var t,o;await((o=(t=a.value)==null?void 0:t.find(r=>r.id===e))==null?void 0:o.duplicate()),c()},u=async e=>{const t=await l.create({organizationId:n,name:e});s({key:t.id})},j=async({key:e})=>{var t,o;confirm("Are you sure you want to delete this project?")&&(await((o=(t=a.value)==null?void 0:t.find(r=>r.id===e))==null?void 0:o.delete()),c())},f=y(()=>{var e,t;return{columns:[{name:"Project Name"},{name:"Path"},{name:"Project Actions"}],rows:(t=(e=a.value)==null?void 0:e.map(o=>({key:o.id,cells:[{text:o.name,classes:["title","centered"],link:`/projects/${encodeURIComponent(o.id)}`},{text:o.id},{text:"",classes:["centered"],actions:[{icon:g,label:"Delete",onClick:j,dangerous:!0},{icon:_,label:"Edit Project",onClick:s},{icon:w,label:"Duplicate",onClick:p}]}]})))!=null?t:[]}});return(e,t)=>(h(),k(v,{"entity-name":"project","ask-name-on-create":!0,loading:i(m),title:"Python Projects",description:"Schedule Python scripts like events on a calendar","create-button-text":"Create Project","empty-title":"No projects here yet",table:i(f),onCreate:u},null,8,["loading","table"]))}});export{S as default};
//# sourceMappingURL=Projects.af8f2bb4.js.map
