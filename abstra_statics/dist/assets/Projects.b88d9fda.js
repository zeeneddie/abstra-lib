import{d as j,K as P,z as s,b as w,t as _,D as k,J as h,H as C}from"./registerWidgets.e8bf9be7.js";import{f as I,g as x}from"./icons.d2d6a2d6.js";import{a as z}from"./asyncComputed.15c1fcc9.js";import{P as d}from"./project.6241f860.js";import"./gateway.52ae1994.js";import{O as D}from"./organization.c81ec540.js";import{C as N}from"./CrudView.d77460fd.js";import"./activeRecord.66fd8f56.js";import"./passwordlessManager.22684bfc.js";import"./DropdownMenu.546dc055.js";import"./Modal.eeedb03e.js";import"./LoadingIndicator.3b84df59.js";import"./lottie.b4c9148a.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[r]="6e5f5174-b935-4a44-9d90-68e1485ba02b",a._sentryDebugIdIdentifier="sentry-dbid-6e5f5174-b935-4a44-9d90-68e1485ba02b")}catch{}})();const U=j({__name:"Projects",setup(a){const r=[{key:"name",label:"Project Name"}],i=h().params.organizationId,m=C(),{loading:u,result:n,refetch:p}=z(()=>Promise.all([d.list(i),D.get(i)]).then(([e,t])=>({projects:e,organization:t}))),c=({key:e})=>m.push({name:"project",params:{projectId:e}}),f=async e=>{const t=await d.create({organizationId:i,name:e.name});c({key:t.id})},b=async({key:e})=>{var t,o;confirm("Are you sure you want to delete this project?")&&(await((o=(t=n.value)==null?void 0:t.projects.find(g=>g.id===e))==null?void 0:o.delete()),p())},y=P(()=>{var e,t;return{columns:[{name:"Project Name"},{name:"Path"},{name:"Project Actions"}],rows:(t=(e=n.value)==null?void 0:e.projects.map(o=>({key:o.id,cells:[{text:o.name,classes:["title","centered"],link:`/projects/${encodeURIComponent(o.id)}`},{text:o.id},{text:"",classes:["centered"],actions:[{icon:I,label:"Delete",onClick:b,dangerous:!0},{icon:x,label:"Edit Project",onClick:c}]}]})))!=null?t:[]}});return(e,t)=>s(n)?(w(),_(N,{key:0,"entity-name":"project",loading:s(u),title:`${s(n).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:s(y),fields:r,onCreate:f},null,8,["loading","title","table"])):k("",!0)}});export{U as default};
//# sourceMappingURL=Projects.b88d9fda.js.map