import{d as D,eB as R,eA as h,r as x,H as O,a as A,b as u,ev as E,u as s,c as w,ex as b,f as p,w as f,aD as B,bz as F,cy as M}from"./outputWidgets.8c60f264.js";import{a as $}from"./asyncComputed.ec57bff0.js";import{a as L}from"./ant-design.efa26625.js";import"./router.73027db0.js";import"./index.cefba0be.js";import{P as g}from"./project.c192ee80.js";import{O as S}from"./organization.3ef7e8c7.js";import{C as T}from"./CrudView.dddbc266.js";import{e as U,I as V,Q as G,L as H}from"./icons.a1b2387c.js";import{A as J}from"./Form.59d8a79a.js";import{M as Q}from"./Modal.bbbfe3c8.js";import"./index.55688c56.js";import"./popupNotifcation.9fb65665.js";import"./index.cf4c23b9.js";import"./record.12e29287.js";import"./pubsub.e2873ec1.js";import"./Paragraph.6e41b767.js";import"./Base.39a7265d.js";import"./Typography.7f982c9c.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.e0bea090.js";import"./url.446977b6.js";import"./index.251ea9f5.js";import"./Title.49f2815e.js";import"./Text.06b5e1a7.js";import"./index.449fb202.js";import"./hasIn.2571917b.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[c]="c8e6de51-14cc-4d28-8e2b-be4a480f7092",l._sentryDebugIdIdentifier="sentry-dbid-c8e6de51-14cc-4d28-8e2b-be4a480f7092")}catch{}})();const ve=D({__name:"Projects",setup(l){const c=[{key:"name",label:"Project Name"}],m=R().params.organizationId,k=h(),{loading:C,result:r,refetch:y}=$(()=>Promise.all([g.list(m),S.get(m)]).then(([t,e])=>({projects:t,organization:e}))),d=({key:t})=>k.push({name:"project",params:{projectId:t}}),P=async t=>{const e=await g.create({organizationId:m,name:t.name});d({key:e.id})},I=async({key:t})=>{var o,a;if(await L("Are you sure you want to delete this project?"))try{await((a=(o=r.value)==null?void 0:o.projects.find(i=>i.id===t))==null?void 0:a.delete())}catch(i){M.error({message:"Error deleting project",description:String(i)})}finally{await y()}},_=async({key:t})=>{var o;const e=(o=r.value)==null?void 0:o.projects.find(a=>a.id===t);if(e){const a=await e.duplicate();d({key:a.id})}},n=x({state:"idle"});function N(t){n.value={state:"renaming",projectId:t.id,newName:t.name}}async function j(t){if(n.value.state==="renaming"&&t){const{projectId:e,newName:o}=n.value;await g.rename(e,o),y()}n.value={state:"idle"}}const z=O(()=>{var t,e;return{columns:[{name:"Project Name",align:"left"},{name:"",align:"right"}],rows:(e=(t=r.value)==null?void 0:t.projects.map(o=>{var a,i;return{key:o.id,cells:[{type:"link",text:o.name,to:`/projects/${encodeURIComponent(o.id)}`},{type:"actions",actions:[{icon:U,label:"Go to project",onClick:d},{icon:V,label:"Rename project",onClick:()=>N(o)},...(i=(a=r.value)==null?void 0:a.organization)!=null&&i.featureFlags.DUPLICATE_PROJECTS?[{icon:G,label:"Duplicate",onClick:_}]:[],{icon:H,label:"Delete",onClick:I,dangerous:!0}]}]}}))!=null?e:[]}});return(t,e)=>{const o=A("ant-form");return u(),E(B,null,[s(r)?(u(),w(T,{key:0,"entity-name":"project",loading:s(C),title:`${s(r).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:z.value,fields:c,onCreate:P},null,8,["loading","title","table"])):b("",!0),p(s(Q),{open:n.value.state==="renaming",title:"Rename organization",onCancel:e[1]||(e[1]=a=>j(!1)),onOk:e[2]||(e[2]=a=>j(!0))},{default:f(()=>[n.value.state==="renaming"?(u(),w(o,{key:0,layout:"vertical"},{default:f(()=>[p(s(J),{label:"New name"},{default:f(()=>[p(s(F),{value:n.value.newName,"onUpdate:value":e[0]||(e[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):b("",!0)]),_:1},8,["open"])],64)}}});export{ve as default};
//# sourceMappingURL=Projects.394b92e0.js.map
