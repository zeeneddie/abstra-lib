import{d as w,eB as P,eA as k,G as _,u as c,b as h,c as C,ew as I,cF as x}from"./outputWidgets.89c081d6.js";import{e as z,b as D}from"./icons.dfde2472.js";import{a as v}from"./asyncComputed.c992043d.js";import{P as l}from"./project.0f77581c.js";import"./router.9a6a132d.js";import{O as N}from"./organization.b5488bce.js";import"./columns.676b0ac2.js";import{C as O}from"./CrudView.d55623d8.js";import{a as A}from"./ant-design.0e417dea.js";import"./gateway.8f35528b.js";import"./activeRecord.43132be4.js";import"./pubsub.fe0d8321.js";import"./Form.094bba7e.js";import"./Title.61dedb2a.js";import"./transButton.24d66b27.js";import"./Text.474082f1.js";import"./index.235ab678.js";import"./index.cf4c23b9.js";import"./url.d5ac8fae.js";import"./index.97b6a429.js";import"./index.fa36e8c7.js";import"./index.a03a0ef2.js";import"./index.cef045c6.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="74bbb81d-52e1-419a-982b-b33934a6dbf1",r._sentryDebugIdIdentifier="sentry-dbid-74bbb81d-52e1-419a-982b-b33934a6dbf1")}catch{}})();const oe=w({__name:"Projects",setup(r){const a=[{key:"name",label:"Project Name"}],i=P().params.organizationId,u=k(),{loading:f,result:n,refetch:b}=v(()=>Promise.all([l.list(i),N.get(i)]).then(([e,t])=>({projects:e,organization:t}))),m=({key:e})=>u.push({name:"project",params:{projectId:e}}),y=async e=>{const t=await l.create({organizationId:i,name:e.name});m({key:t.id})},g=async({key:e})=>{var o,d;if(await A("Are you sure you want to delete this project?"))try{await((d=(o=n.value)==null?void 0:o.projects.find(s=>s.id===e))==null?void 0:d.delete())}catch(s){x.error({message:"Error deleting project",description:String(s)})}finally{await b()}},j=_(()=>{var e,t;return{columns:[{name:"Id"},{name:"Project Name"},{name:"Actions",align:"right"}],rows:(t=(e=n.value)==null?void 0:e.projects.map(o=>({key:o.id,cells:[{text:o.id.slice(0,8)},{text:o.name,link:`/projects/${encodeURIComponent(o.id)}`},{text:"",actions:[{icon:z,label:"Edit Project",onClick:m},{icon:D,label:"Delete",onClick:g,dangerous:!0}]}]})))!=null?t:[]}});return(e,t)=>c(n)?(h(),C(O,{key:0,"entity-name":"project",loading:c(f),title:`${c(n).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:j.value,fields:a,onCreate:y},null,8,["loading","title","table"])):I("",!0)}});export{oe as default};
//# sourceMappingURL=Projects.20c253ce.js.map
