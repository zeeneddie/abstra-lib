import{d as w,eB as P,eA as k,G as _,u as c,b as h,c as C,ew as I,cz as x}from"./outputWidgets.8ed5c9f3.js";import{e as z,a as D}from"./icons.fb67404e.js";import{a as v}from"./asyncComputed.8a952af2.js";import{P as l}from"./project.d18529d4.js";import"./router.afff361c.js";import{O as N}from"./organization.fe5fa605.js";import"./columns.3f63be75.js";import{C as O}from"./CrudView.4b2131eb.js";import{a as A}from"./ant-design.104e9a39.js";import"./gateway.82499ebb.js";import"./activeRecord.065f5706.js";import"./pubsub.d7e8bfae.js";import"./Base.7a191de8.js";import"./transButton.67499561.js";import"./Text.e6e81a88.js";import"./Title.c0f8cffb.js";import"./index.a6f782d1.js";import"./url.cb72f6fb.js";import"./index.a4211c54.js";import"./index.45a9faae.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="9854776c-2a2f-4599-b35e-53b6cd2b66dc",r._sentryDebugIdIdentifier="sentry-dbid-9854776c-2a2f-4599-b35e-53b6cd2b66dc")}catch{}})();const Z=w({__name:"Projects",setup(r){const a=[{key:"name",label:"Project Name"}],i=P().params.organizationId,u=k(),{loading:f,result:n,refetch:y}=v(()=>Promise.all([l.list(i),N.get(i)]).then(([e,t])=>({projects:e,organization:t}))),m=({key:e})=>u.push({name:"project",params:{projectId:e}}),b=async e=>{const t=await l.create({organizationId:i,name:e.name});m({key:t.id})},g=async({key:e})=>{var o,d;if(await A("Are you sure you want to delete this project?"))try{await((d=(o=n.value)==null?void 0:o.projects.find(s=>s.id===e))==null?void 0:d.delete())}catch(s){x.error({message:"Error deleting project",description:String(s)})}finally{await y()}},j=_(()=>{var e,t;return{columns:[{name:"Id"},{name:"Project Name"},{name:"Actions",align:"right"}],rows:(t=(e=n.value)==null?void 0:e.projects.map(o=>({key:o.id,cells:[{text:o.id.slice(0,8)},{text:o.name,link:`/projects/${encodeURIComponent(o.id)}`},{text:"",actions:[{icon:z,label:"Edit Project",onClick:m},{icon:D,label:"Delete",onClick:g,dangerous:!0}]}]})))!=null?t:[]}});return(e,t)=>c(n)?(h(),C(O,{key:0,"entity-name":"project",loading:c(f),title:`${c(n).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:j.value,fields:a,onCreate:b},null,8,["loading","title","table"])):I("",!0)}});export{Z as default};
//# sourceMappingURL=Projects.78b962d0.js.map
