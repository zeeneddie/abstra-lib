import{d as R,eB as h,eA as x,r as D,H as O,a as A,b as u,ev as E,u as s,c as w,ex as b,f as p,w as f,a$ as $,bO as B,cz as F}from"./outputWidgets.6bfc0239.js";import{a as M}from"./asyncComputed.21831dee.js";import{a as L}from"./ant-design.bf757549.js";import"./router.979769f7.js";import"./index.76d87691.js";import{P as g}from"./project.3b3557c3.js";import{O as S}from"./organization.721b781f.js";import{C as T}from"./CrudView.26794284.js";import{e as U,I as V,Q as G,L as H}from"./icons.5f4f8713.js";import{A as J}from"./Form.7d1a8597.js";import{M as Q}from"./Modal.9595e4e0.js";import"./index.71301f31.js";import"./index.cf4c23b9.js";import"./record.dbb754fe.js";import"./pubsub.56f48661.js";import"./Paragraph.100fbd75.js";import"./Base.3f4f4c87.js";import"./Typography.7fe49268.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.77240f7b.js";import"./url.c2408bab.js";import"./index.60dad040.js";import"./Title.84d6428e.js";import"./Text.3be64ce1.js";import"./index.ecc37a00.js";import"./hasIn.42df2c7d.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[c]="d88a0f24-58ce-43ab-a681-1046e803b6a9",l._sentryDebugIdIdentifier="sentry-dbid-d88a0f24-58ce-43ab-a681-1046e803b6a9")}catch{}})();const be=R({__name:"Projects",setup(l){const c=[{key:"name",label:"Project Name"}],m=h().params.organizationId,k=x(),{loading:C,result:r,refetch:y}=M(()=>Promise.all([g.list(m),S.get(m)]).then(([t,e])=>({projects:t,organization:e}))),d=({key:t})=>k.push({name:"project",params:{projectId:t}}),P=async t=>{const e=await g.create({organizationId:m,name:t.name});d({key:e.id})},I=async({key:t})=>{var a,o;if(await L("Are you sure you want to delete this project?"))try{await((o=(a=r.value)==null?void 0:a.projects.find(i=>i.id===t))==null?void 0:o.delete())}catch(i){F.error({message:"Error deleting project",description:String(i)})}finally{await y()}},_=async({key:t})=>{var a;const e=(a=r.value)==null?void 0:a.projects.find(o=>o.id===t);if(e){const o=await e.duplicate();d({key:o.id})}},n=D({state:"idle"});function N(t){n.value={state:"renaming",projectId:t.id,newName:t.name}}async function j(t){if(n.value.state==="renaming"&&t){const{projectId:e,newName:a}=n.value;await g.rename(e,a),y()}n.value={state:"idle"}}const z=O(()=>{var t,e;return{columns:[{name:"Project Name",align:"left"},{name:"",align:"right"}],rows:(e=(t=r.value)==null?void 0:t.projects.map(a=>{var o,i;return{key:a.id,cells:[{type:"link",text:a.name,to:`/projects/${encodeURIComponent(a.id)}`},{type:"actions",actions:[{icon:U,label:"Go to project",onClick:d},{icon:V,label:"Rename project",onClick:()=>N(a)},...(i=(o=r.value)==null?void 0:o.organization)!=null&&i.featureFlags.DUPLICATE_PROJECTS?[{icon:G,label:"Duplicate",onClick:_}]:[],{icon:H,label:"Delete",onClick:I,dangerous:!0}]}]}}))!=null?e:[]}});return(t,e)=>{const a=A("ant-form");return u(),E($,null,[s(r)?(u(),w(T,{key:0,"entity-name":"project",loading:s(C),title:`${s(r).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:z.value,fields:c,onCreate:P},null,8,["loading","title","table"])):b("",!0),p(s(Q),{open:n.value.state==="renaming",title:"Rename organization",onCancel:e[1]||(e[1]=o=>j(!1)),onOk:e[2]||(e[2]=o=>j(!0))},{default:f(()=>[n.value.state==="renaming"?(u(),w(a,{key:0,layout:"vertical"},{default:f(()=>[p(s(J),{label:"New name"},{default:f(()=>[p(s(B),{value:n.value.newName,"onUpdate:value":e[0]||(e[0]=o=>n.value.newName=o)},null,8,["value"])]),_:1})]),_:1})):b("",!0)]),_:1},8,["open"])],64)}}});export{be as default};
//# sourceMappingURL=Projects.0262dca0.js.map