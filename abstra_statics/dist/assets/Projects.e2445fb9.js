import{d as _,ey as w,ex as P,H as k,u as c,b as h,c as I,eu as C,cL as x}from"./registerWidgets.4340e287.js";import{e as z,b as D}from"./icons.da02f7f7.js";import{a as v}from"./asyncComputed.a4cc4ebe.js";import{P as l}from"./project.9f1727ca.js";import"./gateway.1f2ccdb0.js";import{O as N}from"./organization.9c2e4599.js";import"./index.dbce76fa.js";import{_ as O}from"./CrudView.vue_vue_type_script_setup_true_lang.e9f57b5e.js";import{a as E}from"./ant-design.56df7a71.js";import"./activeRecord.c40ac301.js";import"./pubsub.3290d859.js";import"./passwordlessManager.8c70219b.js";import"./storage.dfe55847.js";import"./index.f58e2ef8.js";import"./Title.4165770a.js";import"./Form.7b78c348.js";import"./index.17a2edf7.js";import"./index.7bc7e814.js";import"./index.d24f6130.js";import"./index.9aade351.js";import"./index.c13b703c.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="34d8db96-a713-485b-9e73-cb6e809964da",r._sentryDebugIdIdentifier="sentry-dbid-34d8db96-a713-485b-9e73-cb6e809964da")}catch{}})();const ee=_({__name:"Projects",setup(r){const a=[{key:"name",label:"Project Name"}],i=w().params.organizationId,u=P(),{loading:f,result:n,refetch:y}=v(()=>Promise.all([l.list(i),N.get(i)]).then(([e,t])=>({projects:e,organization:t}))),m=({key:e})=>u.push({name:"project",params:{projectId:e}}),b=async e=>{const t=await l.create({organizationId:i,name:e.name});m({key:t.id})},g=async({key:e})=>{var o,d;if(await E("Are you sure you want to delete this project?"))try{await((d=(o=n.value)==null?void 0:o.projects.find(s=>s.id===e))==null?void 0:d.delete())}catch(s){x.error({message:"Error deleting project",description:String(s)})}finally{await y()}},j=k(()=>{var e,t;return{columns:[{name:"Id"},{name:"Project Name"},{name:"Actions",align:"right"}],rows:(t=(e=n.value)==null?void 0:e.projects.map(o=>({key:o.id,cells:[{text:o.id.slice(0,8)},{text:o.name,link:`/projects/${encodeURIComponent(o.id)}`},{text:"",actions:[{icon:z,label:"Edit Project",onClick:m},{icon:D,label:"Delete",onClick:g,dangerous:!0}]}]})))!=null?t:[]}});return(e,t)=>c(n)?(h(),I(O,{key:0,"entity-name":"project",loading:c(f),title:`${c(n).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:j.value,fields:a,onCreate:b},null,8,["loading","title","table"])):C("",!0)}});export{ee as default};
//# sourceMappingURL=Projects.e2445fb9.js.map
