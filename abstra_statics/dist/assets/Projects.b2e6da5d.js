import{d as D,eB as R,eA as h,r as x,H as O,a as A,b as u,ev as E,u as s,c as w,ex as b,f as p,w as f,aD as B,bz as F,cy as M}from"./outputWidgets.a9a26b52.js";import{a as $}from"./asyncComputed.4aade27b.js";import{a as L}from"./ant-design.bf1e3268.js";import"./router.866ec0f5.js";import"./index.2aa54a5b.js";import{P as g}from"./project.5e38f53a.js";import{O as S}from"./organization.3f06bab6.js";import{C as T}from"./CrudView.495c6c60.js";import{e as U,I as V,Q as G,L as H}from"./icons.497d8b8f.js";import{A as J}from"./Form.e65a4592.js";import{M as Q}from"./Modal.fb8044f0.js";import"./index.f7cf9cfc.js";import"./popupNotifcation.2efa6a99.js";import"./index.cf4c23b9.js";import"./record.2c7d7c18.js";import"./pubsub.c4f2ad57.js";import"./Paragraph.27241047.js";import"./Base.11fb06ce.js";import"./Typography.5a96ab9c.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.84aed692.js";import"./url.374c8097.js";import"./index.96c0cc4c.js";import"./Title.acffad00.js";import"./Text.1b3ab2c1.js";import"./index.aae273f0.js";import"./hasIn.f6010454.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[c]="2efde79a-69a3-440f-a7da-bfc893b29678",l._sentryDebugIdIdentifier="sentry-dbid-2efde79a-69a3-440f-a7da-bfc893b29678")}catch{}})();const ve=D({__name:"Projects",setup(l){const c=[{key:"name",label:"Project Name"}],m=R().params.organizationId,k=h(),{loading:C,result:r,refetch:y}=$(()=>Promise.all([g.list(m),S.get(m)]).then(([t,e])=>({projects:t,organization:e}))),d=({key:t})=>k.push({name:"project",params:{projectId:t}}),P=async t=>{const e=await g.create({organizationId:m,name:t.name});d({key:e.id})},I=async({key:t})=>{var a,o;if(await L("Are you sure you want to delete this project?"))try{await((o=(a=r.value)==null?void 0:a.projects.find(i=>i.id===t))==null?void 0:o.delete())}catch(i){M.error({message:"Error deleting project",description:String(i)})}finally{await y()}},_=async({key:t})=>{var a;const e=(a=r.value)==null?void 0:a.projects.find(o=>o.id===t);if(e){const o=await e.duplicate();d({key:o.id})}},n=x({state:"idle"});function N(t){n.value={state:"renaming",projectId:t.id,newName:t.name}}async function j(t){if(n.value.state==="renaming"&&t){const{projectId:e,newName:a}=n.value;await g.rename(e,a),y()}n.value={state:"idle"}}const z=O(()=>{var t,e;return{columns:[{name:"Project Name",align:"left"},{name:"",align:"right"}],rows:(e=(t=r.value)==null?void 0:t.projects.map(a=>{var o,i;return{key:a.id,cells:[{type:"link",text:a.name,to:`/projects/${encodeURIComponent(a.id)}`},{type:"actions",actions:[{icon:U,label:"Go to project",onClick:d},{icon:V,label:"Rename project",onClick:()=>N(a)},...(i=(o=r.value)==null?void 0:o.organization)!=null&&i.featureFlags.DUPLICATE_PROJECTS?[{icon:G,label:"Duplicate",onClick:_}]:[],{icon:H,label:"Delete",onClick:I,dangerous:!0}]}]}}))!=null?e:[]}});return(t,e)=>{const a=A("ant-form");return u(),E(B,null,[s(r)?(u(),w(T,{key:0,"entity-name":"project",loading:s(C),title:`${s(r).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:z.value,fields:c,onCreate:P},null,8,["loading","title","table"])):b("",!0),p(s(Q),{open:n.value.state==="renaming",title:"Rename organization",onCancel:e[1]||(e[1]=o=>j(!1)),onOk:e[2]||(e[2]=o=>j(!0))},{default:f(()=>[n.value.state==="renaming"?(u(),w(a,{key:0,layout:"vertical"},{default:f(()=>[p(s(J),{label:"New name"},{default:f(()=>[p(s(F),{value:n.value.newName,"onUpdate:value":e[0]||(e[0]=o=>n.value.newName=o)},null,8,["value"])]),_:1})]),_:1})):b("",!0)]),_:1},8,["open"])],64)}}});export{ve as default};
//# sourceMappingURL=Projects.b2e6da5d.js.map
