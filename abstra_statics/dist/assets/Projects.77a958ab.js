import{d as y,K as k,b as h,t as C,z as i,J as b,H as g}from"./registerWidgets.802bba2f.js";import{f as _,g as w,h as x}from"./icons.03f7ad73.js";import{a as v}from"./asyncComputed.1364aaa9.js";import{P as l}from"./project.7c905308.js";import"./utils.acbba3b4.js";import{C as I}from"./CrudView.9eafd43a.js";import"./passwordlessManager.d5134797.js";import"./pubsub.a0411919.js";import"./DropdownMenu.32db0ef2.js";import"./CircularLoading.5c7f2ad7.js";import"./Modal.e13f7972.js";const T=y({__name:"Projects",setup(z){const m=[{key:"name",label:"Project Name"}],r=b().params.organizationId,d=g(),{loading:p,result:a,refetch:c}=v(()=>l.list(r)),s=({key:e})=>d.push({name:"project",params:{projectId:e}}),u=async({key:e})=>{var t,o;await((o=(t=a.value)==null?void 0:t.find(n=>n.id===e))==null?void 0:o.duplicate()),c()},j=async e=>{const t=await l.create({organizationId:r,name:e.name});s({key:t.id})},f=async({key:e})=>{var t,o;confirm("Are you sure you want to delete this project?")&&(await((o=(t=a.value)==null?void 0:t.find(n=>n.id===e))==null?void 0:o.delete()),c())},P=k(()=>{var e,t;return{columns:[{name:"Project Name"},{name:"Path"},{name:"Project Actions"}],rows:(t=(e=a.value)==null?void 0:e.map(o=>({key:o.id,cells:[{text:o.name,classes:["title","centered"],link:`/projects/${encodeURIComponent(o.id)}`},{text:o.id},{text:"",classes:["centered"],actions:[{icon:_,label:"Delete",onClick:f,dangerous:!0},{icon:w,label:"Edit Project",onClick:s},{icon:x,label:"Duplicate",onClick:u}]}]})))!=null?t:[]}});return(e,t)=>(h(),C(I,{"entity-name":"project","ask-name-on-create":!0,loading:i(p),title:"Python Projects",description:"Schedule Python scripts like events on a calendar","create-button-text":"Create Project","empty-title":"No projects here yet",table:i(P),fields:m,onCreate:j},null,8,["loading","table"]))}});export{T as default};
//# sourceMappingURL=Projects.77a958ab.js.map
