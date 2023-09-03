import{d as g,ey as P,ex as w,F as _,bu as i,b as k,u as C,eu as I}from"./registerWidgets.ff0e603c.js";import{e as h,f as x}from"./icons.e90de051.js";import{a as z}from"./asyncComputed.47db4727.js";import{P as d}from"./project.75df379e.js";import"./gateway.69285524.js";import{O as D}from"./organization.0339d4c7.js";import"./index.3750a98d.js";import{C as v}from"./CrudView.edc9a540.js";import"./activeRecord.193d97cb.js";import"./pubsub.bd8735a3.js";import"./passwordlessManager.c02d6ee2.js";import"./storage.db287aee.js";import"./DropdownMenu.4c2a4e7f.js";import"./Modal.61a541af.js";import"./LoadingIndicator.40ce0e4a.js";import"./lottie.0af290d8.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[r]="823c275e-1090-4e81-a17d-6557ab5776a3",a._sentryDebugIdIdentifier="sentry-dbid-823c275e-1090-4e81-a17d-6557ab5776a3")}catch{}})();const K=g({__name:"Projects",setup(a){const r=[{key:"name",label:"Project Name"}],s=P().params.organizationId,m=w(),{loading:u,result:n,refetch:p}=z(()=>Promise.all([d.list(s),D.get(s)]).then(([e,t])=>({projects:e,organization:t}))),c=({key:e})=>m.push({name:"project",params:{projectId:e}}),f=async e=>{const t=await d.create({organizationId:s,name:e.name});c({key:t.id})},y=async({key:e})=>{var t,o;confirm("Are you sure you want to delete this project?")&&(await((o=(t=n.value)==null?void 0:t.projects.find(j=>j.id===e))==null?void 0:o.delete()),p())},b=_(()=>{var e,t;return{columns:[{name:"Id"},{name:"Project Name"},{name:"Project Actions"}],rows:(t=(e=n.value)==null?void 0:e.projects.map(o=>({key:o.id,cells:[{text:o.id.slice(0,8),classes:["centered"]},{text:o.name,classes:["title"],link:`/projects/${encodeURIComponent(o.id)}`},{text:"",classes:["centered"],actions:[{icon:h,label:"Delete",onClick:y,dangerous:!0},{icon:x,label:"Edit Project",onClick:c}]}]})))!=null?t:[]}});return(e,t)=>i(n)?(k(),C(v,{key:0,"entity-name":"project",loading:i(u),title:`${i(n).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:b.value,fields:r,onCreate:f},null,8,["loading","title","table"])):I("",!0)}});export{K as default};
//# sourceMappingURL=Projects.8b99a19e.js.map
