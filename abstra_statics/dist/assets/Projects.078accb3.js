import{d as D,eB as R,eA as h,r as x,H as O,a as A,b as u,ev as E,u as s,c as j,ex as w,f as p,w as f,aD as B,bz as F,cy as M}from"./outputWidgets.7dcb9763.js";import{a as $}from"./asyncComputed.1391bc4e.js";import{a as L}from"./ant-design.5f27df94.js";import"./router.c239924b.js";import"./index.8803a7ce.js";import{P as g}from"./project.cb69380f.js";import{O as S}from"./organization.8af3635a.js";import{C as T}from"./CrudView.498f2862.js";import{e as U,I as V,Q as G,L as H}from"./icons.28fdd925.js";import{A as J}from"./Form.d1397da7.js";import{M as Q}from"./Modal.6b55c8db.js";import"./index.ad1dd235.js";import"./popupNotifcation.2e66fb53.js";import"./index.cf4c23b9.js";import"./record.c580fef2.js";import"./pubsub.a9318333.js";import"./Paragraph.546e285b.js";import"./Base.959092ed.js";import"./Typography.890fd94a.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.7b65ae43.js";import"./url.1d026e93.js";import"./index.5807d2be.js";import"./Title.a796f87f.js";import"./Text.c3748e80.js";import"./index.ee476d81.js";import"./hasIn.a0faa635.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[c]="3cbf1780-1e27-4334-9419-de1bbe3899f5",l._sentryDebugIdIdentifier="sentry-dbid-3cbf1780-1e27-4334-9419-de1bbe3899f5")}catch{}})();const ve=D({__name:"Projects",setup(l){const c=[{key:"name",label:"Project Name"}],m=R().params.organizationId,k=h(),{loading:C,result:r,refetch:y}=$(()=>Promise.all([g.list(m),S.get(m)]).then(([t,e])=>({projects:t,organization:e}))),d=({key:t})=>k.push({name:"project",params:{projectId:t}}),P=async t=>{const e=await g.create({organizationId:m,name:t.name});d({key:e.id})},I=async({key:t})=>{var o,a;if(await L("Are you sure you want to delete this project?"))try{await((a=(o=r.value)==null?void 0:o.projects.find(i=>i.id===t))==null?void 0:a.delete())}catch(i){M.error({message:"Error deleting project",description:String(i)})}finally{await y()}},_=async({key:t})=>{var o;const e=(o=r.value)==null?void 0:o.projects.find(a=>a.id===t);if(e){const a=await e.duplicate();d({key:a.id})}},n=x({state:"idle"});function N(t){n.value={state:"renaming",projectId:t.id,newName:t.name}}async function b(t){if(n.value.state==="renaming"&&t){const{projectId:e,newName:o}=n.value;await g.rename(e,o),y()}n.value={state:"idle"}}const z=O(()=>{var t,e;return{columns:[{name:"Project Name",align:"left"},{name:"",align:"right"}],rows:(e=(t=r.value)==null?void 0:t.projects.map(o=>{var a,i;return{key:o.id,cells:[{type:"link",text:o.name,to:`/projects/${encodeURIComponent(o.id)}`},{type:"actions",actions:[{icon:U,label:"Go to project",onClick:d},{icon:V,label:"Rename project",onClick:()=>N(o)},...(i=(a=r.value)==null?void 0:a.organization)!=null&&i.featureFlags.DUPLICATE_PROJECTS?[{icon:G,label:"Duplicate",onClick:_}]:[],{icon:H,label:"Delete",onClick:I,dangerous:!0}]}]}}))!=null?e:[]}});return(t,e)=>{const o=A("ant-form");return u(),E(B,null,[s(r)?(u(),j(T,{key:0,"entity-name":"project",loading:s(C),title:`${s(r).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:z.value,fields:c,onCreate:P},null,8,["loading","title","table"])):w("",!0),p(s(Q),{open:n.value.state==="renaming",title:"Rename organization",onCancel:e[1]||(e[1]=a=>b(!1)),onOk:e[2]||(e[2]=a=>b(!0))},{default:f(()=>[n.value.state==="renaming"?(u(),j(o,{key:0,layout:"vertical"},{default:f(()=>[p(s(J),{label:"New name"},{default:f(()=>[p(s(F),{value:n.value.newName,"onUpdate:value":e[0]||(e[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):w("",!0)]),_:1},8,["open"])],64)}}});export{ve as default};
//# sourceMappingURL=Projects.078accb3.js.map
