import{d as j,K as P,z as s,b as w,t as _,D as k,J as h,H as C}from"./registerWidgets.dfdff788.js";import{f as I,g as x}from"./icons.c54b54c1.js";import{a as z}from"./asyncComputed.b3051259.js";import{P as d}from"./project.ef032470.js";import"./gateway.c57a498b.js";import{O as D}from"./organization.fc41f89f.js";import"./index.73e2e42d.js";import{C as N}from"./CrudView.06b340cc.js";import"./activeRecord.91994ff2.js";import"./pubsub.01b5bd69.js";import"./passwordlessManager.f4b631cc.js";import"./DropdownMenu.dd2df44b.js";import"./Modal.481ae592.js";import"./LoadingIndicator.07769849.js";import"./lottie.c1686162.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="98605fed-8c10-4244-b5b8-567dd5ac951c",r._sentryDebugIdIdentifier="sentry-dbid-98605fed-8c10-4244-b5b8-567dd5ac951c")}catch{}})();const F=j({__name:"Projects",setup(r){const a=[{key:"name",label:"Project Name"}],i=h().params.organizationId,m=C(),{loading:p,result:n,refetch:u}=z(()=>Promise.all([d.list(i),D.get(i)]).then(([e,t])=>({projects:e,organization:t}))),c=({key:e})=>m.push({name:"project",params:{projectId:e}}),f=async e=>{const t=await d.create({organizationId:i,name:e.name});c({key:t.id})},y=async({key:e})=>{var t,o;confirm("Are you sure you want to delete this project?")&&(await((o=(t=n.value)==null?void 0:t.projects.find(g=>g.id===e))==null?void 0:o.delete()),u())},b=P(()=>{var e,t;return{columns:[{name:"Project Name"},{name:"Path"},{name:"Project Actions"}],rows:(t=(e=n.value)==null?void 0:e.projects.map(o=>({key:o.id,cells:[{text:o.name,classes:["title","centered"],link:`/projects/${encodeURIComponent(o.id)}`},{text:o.id},{text:"",classes:["centered"],actions:[{icon:I,label:"Delete",onClick:y,dangerous:!0},{icon:x,label:"Edit Project",onClick:c}]}]})))!=null?t:[]}});return(e,t)=>s(n)?(w(),_(N,{key:0,"entity-name":"project",loading:s(p),title:`${s(n).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:s(b),fields:a,onCreate:f},null,8,["loading","title","table"])):k("",!0)}});export{F as default};
//# sourceMappingURL=Projects.3d94717b.js.map
