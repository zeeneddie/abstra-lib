import{d as R,eB as h,eA as x,r as D,H as O,a as A,b as d,ev as E,u as s,c as w,ex as b,f as p,w as f,a$ as F,bO as $,cz as B}from"./outputWidgets.f2dbcdfc.js";import{e as M,t as S,K as T,F as U}from"./icons.ac84ddf6.js";import{a as V}from"./asyncComputed.37132230.js";import"./router.11cb60a2.js";import"./index.89d31b1f.js";import{P as g}from"./project.f82b1ae3.js";import{O as L}from"./organization.5d2e51ee.js";import{C as G}from"./CrudView.2fadcd7e.js";import{a as H}from"./ant-design.7bf5dcea.js";import{A as J}from"./FormItem.cd189ec8.js";import{M as K}from"./Modal.cc063c68.js";import"./index.cf4c23b9.js";import"./record.50d91012.js";import"./pubsub.d8506141.js";import"./Paragraph.a4acc8de.js";import"./Base.e7a1d92f.js";import"./Form.45d9e489.js";import"./hasIn.84ebe126.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.07f8bbed.js";import"./url.978d277d.js";import"./index.1b352efb.js";import"./Title.5cdc55b4.js";import"./Text.e98aa09c.js";import"./index.c073fe31.js";import"./index.ab2d11b8.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[c]="b0fc3a8c-26e0-4ebe-8555-6462090fe153",l._sentryDebugIdIdentifier="sentry-dbid-b0fc3a8c-26e0-4ebe-8555-6462090fe153")}catch{}})();const be=R({__name:"Projects",setup(l){const c=[{key:"name",label:"Project Name"}],m=h().params.organizationId,k=x(),{loading:C,result:r,refetch:y}=V(()=>Promise.all([g.list(m),L.get(m)]).then(([t,e])=>({projects:t,organization:e}))),u=({key:t})=>k.push({name:"project",params:{projectId:t}}),P=async t=>{const e=await g.create({organizationId:m,name:t.name});u({key:e.id})},I=async({key:t})=>{var o,a;if(await H("Are you sure you want to delete this project?"))try{await((a=(o=r.value)==null?void 0:o.projects.find(i=>i.id===t))==null?void 0:a.delete())}catch(i){B.error({message:"Error deleting project",description:String(i)})}finally{await y()}},_=async({key:t})=>{var o;const e=(o=r.value)==null?void 0:o.projects.find(a=>a.id===t);if(e){const a=await e.duplicate();u({key:a.id})}},n=D({state:"idle"});function N(t){n.value={state:"renaming",projectId:t.id,newName:t.name}}async function j(t){if(n.value.state==="renaming"&&t){const{projectId:e,newName:o}=n.value;await g.rename(e,o),y()}n.value={state:"idle"}}const z=O(()=>{var t,e;return{columns:[{name:"Project Name",align:"left"},{name:"",align:"right"}],rows:(e=(t=r.value)==null?void 0:t.projects.map(o=>{var a,i;return{key:o.id,cells:[{type:"link",text:o.name,to:`/projects/${encodeURIComponent(o.id)}`},{type:"actions",actions:[{icon:M,label:"Go to project",onClick:u},{icon:S,label:"Rename project",onClick:()=>N(o)},...(i=(a=r.value)==null?void 0:a.organization)!=null&&i.featureFlags.DUPLICATE_PROJECTS?[{icon:T,label:"Duplicate",onClick:_}]:[],{icon:U,label:"Delete",onClick:I,dangerous:!0}]}]}}))!=null?e:[]}});return(t,e)=>{const o=A("ant-form");return d(),E(F,null,[s(r)?(d(),w(G,{key:0,"entity-name":"project",loading:s(C),title:`${s(r).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:z.value,fields:c,onCreate:P},null,8,["loading","title","table"])):b("",!0),p(s(K),{open:n.value.state==="renaming",title:"Rename organization",onCancel:e[1]||(e[1]=a=>j(!1)),onOk:e[2]||(e[2]=a=>j(!0))},{default:f(()=>[n.value.state==="renaming"?(d(),w(o,{key:0,layout:"vertical"},{default:f(()=>[p(s(J),{label:"New name"},{default:f(()=>[p(s($),{value:n.value.newName,"onUpdate:value":e[0]||(e[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):b("",!0)]),_:1},8,["open"])],64)}}});export{be as default};
//# sourceMappingURL=Projects.f63f2a7d.js.map