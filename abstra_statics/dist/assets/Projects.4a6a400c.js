import{d as w,eA as _,ez as P,J as k,u as c,b as h,c as I,ew as C,cN as x}from"./outputWidgets.541a6a3f.js";import{e as z,b as D}from"./icons.fbbc5318.js";import{a as N}from"./asyncComputed.6496ca6b.js";import{P as d}from"./project.99ccb1d4.js";import"./console.7080c244.js";import{O as v}from"./organization.8c5c9dd0.js";import"./index.56c0102f.js";import{_ as O}from"./CrudView.vue_vue_type_script_setup_true_lang.af69973c.js";import{a as A}from"./ant-design.e75c36c7.js";import"./gateway.647cec74.js";import"./activeRecord.867c40fa.js";import"./pubsub.8482a29f.js";import"./index.1b1480b6.js";import"./Form.2a9acb85.js";import"./Title.3011141f.js";import"./index.7fb7f882.js";import"./index.33fb7a48.js";import"./index.5d5870f2.js";import"./dayjs.03d6e1d3.js";import"./index.f20ad580.js";import"./index.d89692b2.js";import"./TabPane.40396dd5.js";import"./index.ef35da09.js";import"./index.c3edc651.js";import"./index.dda022dd.js";import"./index.1797b918.js";import"./index.7f86f9a3.js";import"./index.68ffc7e6.js";import"./index.3cff0676.js";import"./index.07910c0e.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="3601489e-fe47-481a-b429-6ceb7c6300a2",r._sentryDebugIdIdentifier="sentry-dbid-3601489e-fe47-481a-b429-6ceb7c6300a2")}catch{}})();const me=w({__name:"Projects",setup(r){const a=[{key:"name",label:"Project Name"}],n=_().params.organizationId,u=P(),{loading:f,result:i,refetch:y}=N(()=>Promise.all([d.list(n),v.get(n)]).then(([e,t])=>({projects:e,organization:t}))),m=({key:e})=>u.push({name:"project",params:{projectId:e}}),g=async e=>{const t=await d.create({organizationId:n,name:e.name});m({key:t.id})},b=async({key:e})=>{var o,p;if(await A("Are you sure you want to delete this project?"))try{await((p=(o=i.value)==null?void 0:o.projects.find(s=>s.id===e))==null?void 0:p.delete())}catch(s){x.error({message:"Error deleting project",description:String(s)})}finally{await y()}},j=k(()=>{var e,t;return{columns:[{name:"Id"},{name:"Project Name"},{name:"Actions",align:"right"}],rows:(t=(e=i.value)==null?void 0:e.projects.map(o=>({key:o.id,cells:[{text:o.id.slice(0,8)},{text:o.name,link:`/projects/${encodeURIComponent(o.id)}`},{text:"",actions:[{icon:z,label:"Edit Project",onClick:m},{icon:D,label:"Delete",onClick:b,dangerous:!0}]}]})))!=null?t:[]}});return(e,t)=>c(i)?(h(),I(O,{key:0,"entity-name":"project",loading:c(f),title:`${c(i).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:j.value,fields:a,onCreate:g},null,8,["loading","title","table"])):C("",!0)}});export{me as default};
//# sourceMappingURL=Projects.4a6a400c.js.map
