import{d as w,eB as P,eA as k,G as C,u as c,b as _,c as h,ex as I,cw as x}from"./outputWidgets.4dca5506.js";import{v,C as z}from"./icons.bd47d131.js";import{a as D}from"./asyncComputed.c4b429e1.js";import"./authorManager.a800075c.js";import"./index.78568e24.js";import{P as p}from"./project.32313fd1.js";import{O as N}from"./organization.c084dc7e.js";import{C as O}from"./CrudView.1fde2773.js";import{a as A}from"./ant-design.5b99d5ae.js";import"./index.cf4c23b9.js";import"./record.7d38c825.js";import"./pubsub.8d119a65.js";import"./gateway.c9180c86.js";import"./Text.207bda18.js";import"./Title.c9e508fd.js";import"./FormItem.64e623f3.js";import"./hasIn.190f5047.js";import"./Form.81f19b00.js";import"./Modal.a47ec0ab.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.4e54e9d0.js";import"./router.bcc3ba4b.js";import"./index.342688b0.js";import"./url.2dba12d6.js";import"./index.7d0729b5.js";import"./index.f5322801.js";import"./index.d018329d.js";import"./index.8d495a1c.js";import"./index.154b4e51.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[i]="81239909-9b4d-4755-be81-7cedadcf8ffc",r._sentryDebugIdIdentifier="sentry-dbid-81239909-9b4d-4755-be81-7cedadcf8ffc")}catch{}})();const se=w({__name:"Projects",setup(r){const i=[{key:"name",label:"Project Name"}],n=P().params.organizationId,u=k(),{loading:f,result:a,refetch:y}=D(()=>Promise.all([p.list(n),N.get(n)]).then(([e,t])=>({projects:e,organization:t}))),m=({key:e})=>u.push({name:"project",params:{projectId:e}}),g=async e=>{const t=await p.create({organizationId:n,name:e.name});m({key:t.id})},b=async({key:e})=>{var o,d;if(await A("Are you sure you want to delete this project?"))try{await((d=(o=a.value)==null?void 0:o.projects.find(s=>s.id===e))==null?void 0:d.delete())}catch(s){x.error({message:"Error deleting project",description:String(s)})}finally{await y()}},j=C(()=>{var e,t;return{columns:[{name:"Id"},{name:"Project Name"},{name:"Actions",align:"right"}],rows:(t=(e=a.value)==null?void 0:e.projects.map(o=>({key:o.id,cells:[{text:o.id.slice(0,8)},{text:o.name,link:`/projects/${encodeURIComponent(o.id)}`},{text:"",actions:[{icon:v,label:"Edit Project",onClick:m},{icon:z,label:"Delete",onClick:b,dangerous:!0}]}]})))!=null?t:[]}});return(e,t)=>c(a)?(_(),h(O,{key:0,"entity-name":"project",loading:c(f),title:`${c(a).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:j.value,fields:i,onCreate:g},null,8,["loading","title","table"])):I("",!0)}});export{se as default};
//# sourceMappingURL=Projects.49353255.js.map