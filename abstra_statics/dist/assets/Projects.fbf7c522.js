import{d as j,K as P,z as s,b as w,t as _,D as k,J as h,H as C}from"./registerWidgets.5bbfbb1a.js";import{f as I,g as x}from"./icons.96408396.js";import{a as z}from"./asyncComputed.0fa43cb9.js";import{P as d}from"./project.65305d00.js";import"./gateway.8a51e2ca.js";import{O as D}from"./organization.89af5478.js";import{C as N}from"./CrudView.42acda9a.js";import"./activeRecord.0bf8afc8.js";import"./passwordlessManager.d271c8e1.js";import"./DropdownMenu.1816b8ae.js";import"./Modal.34b86d8f.js";import"./LoadingIndicator.2d4920b8.js";import"./lottie.5c7f29e3.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[r]="97d53950-60d0-4edb-9524-65da696afbe3",a._sentryDebugIdIdentifier="sentry-dbid-97d53950-60d0-4edb-9524-65da696afbe3")}catch{}})();const U=j({__name:"Projects",setup(a){const r=[{key:"name",label:"Project Name"}],i=h().params.organizationId,m=C(),{loading:u,result:n,refetch:p}=z(()=>Promise.all([d.list(i),D.get(i)]).then(([e,t])=>({projects:e,organization:t}))),c=({key:e})=>m.push({name:"project",params:{projectId:e}}),f=async e=>{const t=await d.create({organizationId:i,name:e.name});c({key:t.id})},y=async({key:e})=>{var t,o;confirm("Are you sure you want to delete this project?")&&(await((o=(t=n.value)==null?void 0:t.projects.find(g=>g.id===e))==null?void 0:o.delete()),p())},b=P(()=>{var e,t;return{columns:[{name:"Project Name"},{name:"Path"},{name:"Project Actions"}],rows:(t=(e=n.value)==null?void 0:e.projects.map(o=>({key:o.id,cells:[{text:o.name,classes:["title","centered"],link:`/projects/${encodeURIComponent(o.id)}`},{text:o.id},{text:"",classes:["centered"],actions:[{icon:I,label:"Delete",onClick:y,dangerous:!0},{icon:x,label:"Edit Project",onClick:c}]}]})))!=null?t:[]}});return(e,t)=>s(n)?(w(),_(N,{key:0,"entity-name":"project",loading:s(u),title:`${s(n).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:s(b),fields:r,onCreate:f},null,8,["loading","title","table"])):k("",!0)}});export{U as default};
//# sourceMappingURL=Projects.fbf7c522.js.map
