import{d as R,eB as h,eA as x,r as D,H as O,a as A,b as d,ev as E,u as s,c as w,ex as b,f as p,w as f,a$ as $,bO as B,cz as F}from"./outputWidgets.5f19dc20.js";import{a as M}from"./asyncComputed.7644a573.js";import{a as S}from"./ant-design.380befc1.js";import"./router.aa0eddb6.js";import"./index.cce09b02.js";import{P as g}from"./project.e189afae.js";import{O as T}from"./organization.1b965ab7.js";import{C as U}from"./CrudView.d436e5aa.js";import{e as V,H,P as L,K as G}from"./icons.74432c33.js";import{A as J}from"./Form.3af0c76b.js";import{M as K}from"./Modal.00d066b5.js";import"./index.8c792cda.js";import"./index.cf4c23b9.js";import"./record.c399a9f5.js";import"./pubsub.cf987a6d.js";import"./Paragraph.9c092968.js";import"./Base.0fabeebf.js";import"./Typography.48eaafd1.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.02c919d7.js";import"./url.67f7d557.js";import"./index.2552162f.js";import"./Title.c51aa78c.js";import"./Text.eb392bbf.js";import"./index.eb482644.js";import"./hasIn.08254cff.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[c]="304bc738-c159-4f41-a410-8e02975f75f1",l._sentryDebugIdIdentifier="sentry-dbid-304bc738-c159-4f41-a410-8e02975f75f1")}catch{}})();const be=R({__name:"Projects",setup(l){const c=[{key:"name",label:"Project Name"}],m=h().params.organizationId,k=x(),{loading:P,result:r,refetch:y}=M(()=>Promise.all([g.list(m),T.get(m)]).then(([t,e])=>({projects:t,organization:e}))),u=({key:t})=>k.push({name:"project",params:{projectId:t}}),C=async t=>{const e=await g.create({organizationId:m,name:t.name});u({key:e.id})},I=async({key:t})=>{var o,a;if(await S("Are you sure you want to delete this project?"))try{await((a=(o=r.value)==null?void 0:o.projects.find(i=>i.id===t))==null?void 0:a.delete())}catch(i){F.error({message:"Error deleting project",description:String(i)})}finally{await y()}},_=async({key:t})=>{var o;const e=(o=r.value)==null?void 0:o.projects.find(a=>a.id===t);if(e){const a=await e.duplicate();u({key:a.id})}},n=D({state:"idle"});function N(t){n.value={state:"renaming",projectId:t.id,newName:t.name}}async function j(t){if(n.value.state==="renaming"&&t){const{projectId:e,newName:o}=n.value;await g.rename(e,o),y()}n.value={state:"idle"}}const z=O(()=>{var t,e;return{columns:[{name:"Project Name",align:"left"},{name:"",align:"right"}],rows:(e=(t=r.value)==null?void 0:t.projects.map(o=>{var a,i;return{key:o.id,cells:[{type:"link",text:o.name,to:`/projects/${encodeURIComponent(o.id)}`},{type:"actions",actions:[{icon:V,label:"Go to project",onClick:u},{icon:H,label:"Rename project",onClick:()=>N(o)},...(i=(a=r.value)==null?void 0:a.organization)!=null&&i.featureFlags.DUPLICATE_PROJECTS?[{icon:L,label:"Duplicate",onClick:_}]:[],{icon:G,label:"Delete",onClick:I,dangerous:!0}]}]}}))!=null?e:[]}});return(t,e)=>{const o=A("ant-form");return d(),E($,null,[s(r)?(d(),w(U,{key:0,"entity-name":"project",loading:s(P),title:`${s(r).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:z.value,fields:c,onCreate:C},null,8,["loading","title","table"])):b("",!0),p(s(K),{open:n.value.state==="renaming",title:"Rename organization",onCancel:e[1]||(e[1]=a=>j(!1)),onOk:e[2]||(e[2]=a=>j(!0))},{default:f(()=>[n.value.state==="renaming"?(d(),w(o,{key:0,layout:"vertical"},{default:f(()=>[p(s(J),{label:"New name"},{default:f(()=>[p(s(B),{value:n.value.newName,"onUpdate:value":e[0]||(e[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):b("",!0)]),_:1},8,["open"])],64)}}});export{be as default};
//# sourceMappingURL=Projects.7dda9d15.js.map
