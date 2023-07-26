import{d as j,K as P,z as s,b as w,t as _,D as k,J as h,H as C}from"./registerWidgets.fce18b61.js";import{f as I,g as x}from"./icons.99afd58c.js";import{a as z}from"./asyncComputed.aceaab2d.js";import{P as d}from"./project.b8efaec9.js";import"./gateway.6f3c5fa6.js";import{O as D}from"./organization.5fd83ecb.js";import{C as N}from"./CrudView.042abd13.js";import"./activeRecord.5ca93a47.js";import"./passwordlessManager.2cd33479.js";import"./DropdownMenu.94fbd8d3.js";import"./Modal.eb38c07a.js";import"./LoadingIndicator.b25e3053.js";import"./lottie.84b3db69.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[r]="210e3a9c-9b44-412e-a643-a402cc6c0ec2",a._sentryDebugIdIdentifier="sentry-dbid-210e3a9c-9b44-412e-a643-a402cc6c0ec2")}catch{}})();const U=j({__name:"Projects",setup(a){const r=[{key:"name",label:"Project Name"}],c=h().params.organizationId,m=C(),{loading:u,result:n,refetch:p}=z(()=>Promise.all([d.list(c),D.get(c)]).then(([e,t])=>({projects:e,organization:t}))),i=({key:e})=>m.push({name:"project",params:{projectId:e}}),f=async e=>{const t=await d.create({organizationId:c,name:e.name});i({key:t.id})},y=async({key:e})=>{var t,o;confirm("Are you sure you want to delete this project?")&&(await((o=(t=n.value)==null?void 0:t.projects.find(g=>g.id===e))==null?void 0:o.delete()),p())},b=P(()=>{var e,t;return{columns:[{name:"Project Name"},{name:"Path"},{name:"Project Actions"}],rows:(t=(e=n.value)==null?void 0:e.projects.map(o=>({key:o.id,cells:[{text:o.name,classes:["title","centered"],link:`/projects/${encodeURIComponent(o.id)}`},{text:o.id},{text:"",classes:["centered"],actions:[{icon:I,label:"Delete",onClick:y,dangerous:!0},{icon:x,label:"Edit Project",onClick:i}]}]})))!=null?t:[]}});return(e,t)=>s(n)?(w(),_(N,{key:0,"entity-name":"project",loading:s(u),title:`${s(n).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:s(b),fields:r,onCreate:f},null,8,["loading","title","table"])):k("",!0)}});export{U as default};
//# sourceMappingURL=Projects.34348917.js.map
