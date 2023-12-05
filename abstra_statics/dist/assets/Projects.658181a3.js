import{d as w,eB as P,eA as k,G as _,u as c,b as h,c as C,ew as I,cz as x}from"./outputWidgets.4eff76e6.js";import{e as z,d as D}from"./icons.82d13829.js";import{a as v}from"./asyncComputed.4874377b.js";import"./router.366434a1.js";import"./index.a10d1ce3.js";import{P as l}from"./project.8e177475.js";import{O as N}from"./organization.8512833f.js";import{C as O}from"./CrudView.7f331e25.js";import{a as A}from"./ant-design.77b028eb.js";import"./Base.34de9a78.js";import"./transButton.b80e5b6e.js";import"./Text.e43234cf.js";import"./Title.e93cc21e.js";import"./index.c1d31c15.js";import"./record.9c05c036.js";import"./pubsub.2c4444ee.js";import"./gateway.6b44b190.js";import"./url.33e1e1fe.js";import"./index.2510a9c2.js";import"./index.f28fa2c5.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="3148ea16-c1da-4138-aec4-238f8692db67",r._sentryDebugIdIdentifier="sentry-dbid-3148ea16-c1da-4138-aec4-238f8692db67")}catch{}})();const Z=w({__name:"Projects",setup(r){const a=[{key:"name",label:"Project Name"}],i=P().params.organizationId,u=k(),{loading:f,result:n,refetch:y}=v(()=>Promise.all([l.list(i),N.get(i)]).then(([e,t])=>({projects:e,organization:t}))),d=({key:e})=>u.push({name:"project",params:{projectId:e}}),g=async e=>{const t=await l.create({organizationId:i,name:e.name});d({key:t.id})},b=async({key:e})=>{var o,m;if(await A("Are you sure you want to delete this project?"))try{await((m=(o=n.value)==null?void 0:o.projects.find(s=>s.id===e))==null?void 0:m.delete())}catch(s){x.error({message:"Error deleting project",description:String(s)})}finally{await y()}},j=_(()=>{var e,t;return{columns:[{name:"Id"},{name:"Project Name"},{name:"Actions",align:"right"}],rows:(t=(e=n.value)==null?void 0:e.projects.map(o=>({key:o.id,cells:[{text:o.id.slice(0,8)},{text:o.name,link:`/projects/${encodeURIComponent(o.id)}`},{text:"",actions:[{icon:z,label:"Edit Project",onClick:d},{icon:D,label:"Delete",onClick:b,dangerous:!0}]}]})))!=null?t:[]}});return(e,t)=>c(n)?(h(),C(O,{key:0,"entity-name":"project",loading:c(f),title:`${c(n).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:j.value,fields:a,onCreate:g},null,8,["loading","title","table"])):I("",!0)}});export{Z as default};
//# sourceMappingURL=Projects.658181a3.js.map
