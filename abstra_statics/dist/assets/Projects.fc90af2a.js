import{d as w,ez as P,ey as k,H as _,u as c,b as h,c as C,ev as I,cA as x}from"./outputWidgets.d6334d0e.js";import{e as z,b as v}from"./icons.09e1f108.js";import{a as D}from"./asyncComputed.95fd0999.js";import{P as l}from"./project.2aec9e3e.js";import"./router.c9839d0e.js";import{O as N}from"./organization.bb04fda1.js";import"./columns.6b92da60.js";import{C as O}from"./CrudView.a040df87.js";import{a as A}from"./ant-design.765336cf.js";import"./gateway.78108c4a.js";import"./activeRecord.aa738a85.js";import"./pubsub.9d7d329e.js";import"./Form.afe8a620.js";import"./Title.132c3f7f.js";import"./transButton.97ae4a5a.js";import"./Text.2f6a30da.js";import"./index.85dd1fea.js";import"./index.f4ac7424.js";import"./url.dce42ecb.js";import"./index.9476b093.js";import"./index.e0fb68fa.js";import"./index.98d66b02.js";import"./index.2221e01c.js";import"./index.6da051f8.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="d1110d89-b481-4c6f-a941-98ea367f479a",r._sentryDebugIdIdentifier="sentry-dbid-d1110d89-b481-4c6f-a941-98ea367f479a")}catch{}})();const re=w({__name:"Projects",setup(r){const a=[{key:"name",label:"Project Name"}],n=P().params.organizationId,u=k(),{loading:f,result:i,refetch:y}=D(()=>Promise.all([l.list(n),N.get(n)]).then(([e,t])=>({projects:e,organization:t}))),m=({key:e})=>u.push({name:"project",params:{projectId:e}}),g=async e=>{const t=await l.create({organizationId:n,name:e.name});m({key:t.id})},b=async({key:e})=>{var o,d;if(await A("Are you sure you want to delete this project?"))try{await((d=(o=i.value)==null?void 0:o.projects.find(s=>s.id===e))==null?void 0:d.delete())}catch(s){x.error({message:"Error deleting project",description:String(s)})}finally{await y()}},j=_(()=>{var e,t;return{columns:[{name:"Id"},{name:"Project Name"},{name:"Actions",align:"right"}],rows:(t=(e=i.value)==null?void 0:e.projects.map(o=>({key:o.id,cells:[{text:o.id.slice(0,8)},{text:o.name,link:`/projects/${encodeURIComponent(o.id)}`},{text:"",actions:[{icon:z,label:"Edit Project",onClick:m},{icon:v,label:"Delete",onClick:b,dangerous:!0}]}]})))!=null?t:[]}});return(e,t)=>c(i)?(h(),C(O,{key:0,"entity-name":"project",loading:c(f),title:`${c(i).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:j.value,fields:a,onCreate:g},null,8,["loading","title","table"])):I("",!0)}});export{re as default};
//# sourceMappingURL=Projects.fc90af2a.js.map
