import{d as P,J as y,y as r,b as g,q as k,B as C,H as b,G as h}from"./registerWidgets.990552e9.js";import{f as w,g as _}from"./icons.d4e872e2.js";import{a as x}from"./asyncComputed.5a7faf96.js";import{P as i}from"./project.27024010.js";import"./gateway.4e567afc.js";import{O as z}from"./organization.2f48c54d.js";import{C as I}from"./CrudView.33797353.js";import"./activeRecord.57c6bf02.js";import"./passwordlessManager.43e7eeb6.js";import"./DropdownMenu.b023d396.js";import"./CircularLoading.b7a09562.js";import"./Modal.180a3c02.js";const J=P({__name:"Projects",setup(N){const c=[{key:"name",label:"Project Name"}],n=b().params.organizationId,m=h(),{loading:l,result:a,refetch:d}=x(()=>Promise.all([i.list(n),z.get(n)]).then(([e,t])=>({projects:e,organization:t}))),s=({key:e})=>m.push({name:"project",params:{projectId:e}}),p=async e=>{const t=await i.create({organizationId:n,name:e.name});s({key:t.id})},u=async({key:e})=>{var t,o;confirm("Are you sure you want to delete this project?")&&(await((o=(t=a.value)==null?void 0:t.projects.find(j=>j.id===e))==null?void 0:o.delete()),d())},f=y(()=>{var e,t;return{columns:[{name:"Project Name"},{name:"Path"},{name:"Project Actions"}],rows:(t=(e=a.value)==null?void 0:e.projects.map(o=>({key:o.id,cells:[{text:o.name,classes:["title","centered"],link:`/projects/${encodeURIComponent(o.id)}`},{text:o.id},{text:"",classes:["centered"],actions:[{icon:w,label:"Delete",onClick:u,dangerous:!0},{icon:_,label:"Edit Project",onClick:s}]}]})))!=null?t:[]}});return(e,t)=>r(a)?(g(),k(I,{key:0,"entity-name":"project","ask-name-on-create":!0,loading:r(l),title:`${r(a).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:r(f),fields:c,onCreate:p},null,8,["loading","title","table"])):C("",!0)}});export{J as default};
//# sourceMappingURL=Projects.6b3c2d2c.js.map