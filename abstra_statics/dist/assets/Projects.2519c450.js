import{d as D,eB as R,eA as h,r as x,H as O,a as A,b as u,ev as E,u as s,c as w,ex as b,f as p,w as f,aD as B,bz as F,cy as M}from"./outputWidgets.c8053a9d.js";import{a as $}from"./asyncComputed.f7e207a4.js";import{a as L}from"./ant-design.73b939ff.js";import"./router.c5eb5658.js";import"./index.7b750cfc.js";import{P as g}from"./project.9955b3f2.js";import{O as S}from"./organization.79057245.js";import{C as T}from"./CrudView.81651cd0.js";import{e as U,I as V,Q as G,L as H}from"./icons.9e4059c8.js";import{A as J}from"./Form.034d9295.js";import{M as Q}from"./Modal.63744d77.js";import"./index.f61692c3.js";import"./popupNotifcation.b87aeac6.js";import"./index.cf4c23b9.js";import"./record.c60a7475.js";import"./pubsub.231a79a7.js";import"./Paragraph.68b1de18.js";import"./Base.d9fc6eef.js";import"./Typography.e5f51e32.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.f912e8a7.js";import"./url.d8c088a2.js";import"./index.5905e3dd.js";import"./Title.ed86be86.js";import"./Text.d464b589.js";import"./index.b514db2b.js";import"./hasIn.7ae70fa0.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[m]="695ad15a-2817-46d2-a072-1a881db2a3ab",l._sentryDebugIdIdentifier="sentry-dbid-695ad15a-2817-46d2-a072-1a881db2a3ab")}catch{}})();const ve=D({__name:"Projects",setup(l){const m=[{key:"name",label:"Project Name"}],c=R().params.organizationId,k=h(),{loading:C,result:r,refetch:y}=$(()=>Promise.all([g.list(c),S.get(c)]).then(([t,e])=>({projects:t,organization:e}))),d=({key:t})=>k.push({name:"project",params:{projectId:t}}),P=async t=>{const e=await g.create({organizationId:c,name:t.name});d({key:e.id})},I=async({key:t})=>{var a,o;if(await L("Are you sure you want to delete this project?"))try{await((o=(a=r.value)==null?void 0:a.projects.find(i=>i.id===t))==null?void 0:o.delete())}catch(i){M.error({message:"Error deleting project",description:String(i)})}finally{await y()}},_=async({key:t})=>{var a;const e=(a=r.value)==null?void 0:a.projects.find(o=>o.id===t);if(e){const o=await e.duplicate();d({key:o.id})}},n=x({state:"idle"});function N(t){n.value={state:"renaming",projectId:t.id,newName:t.name}}async function j(t){if(n.value.state==="renaming"&&t){const{projectId:e,newName:a}=n.value;await g.rename(e,a),y()}n.value={state:"idle"}}const z=O(()=>{var t,e;return{columns:[{name:"Project Name",align:"left"},{name:"",align:"right"}],rows:(e=(t=r.value)==null?void 0:t.projects.map(a=>{var o,i;return{key:a.id,cells:[{type:"link",text:a.name,to:`/projects/${encodeURIComponent(a.id)}`},{type:"actions",actions:[{icon:U,label:"Go to project",onClick:d},{icon:V,label:"Rename project",onClick:()=>N(a)},...(i=(o=r.value)==null?void 0:o.organization)!=null&&i.featureFlags.DUPLICATE_PROJECTS?[{icon:G,label:"Duplicate",onClick:_}]:[],{icon:H,label:"Delete",onClick:I,dangerous:!0}]}]}}))!=null?e:[]}});return(t,e)=>{const a=A("ant-form");return u(),E(B,null,[s(r)?(u(),w(T,{key:0,"entity-name":"project",loading:s(C),title:`${s(r).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:z.value,fields:m,onCreate:P},null,8,["loading","title","table"])):b("",!0),p(s(Q),{open:n.value.state==="renaming",title:"Rename organization",onCancel:e[1]||(e[1]=o=>j(!1)),onOk:e[2]||(e[2]=o=>j(!0))},{default:f(()=>[n.value.state==="renaming"?(u(),w(a,{key:0,layout:"vertical"},{default:f(()=>[p(s(J),{label:"New name"},{default:f(()=>[p(s(F),{value:n.value.newName,"onUpdate:value":e[0]||(e[0]=o=>n.value.newName=o)},null,8,["value"])]),_:1})]),_:1})):b("",!0)]),_:1},8,["open"])],64)}}});export{ve as default};
//# sourceMappingURL=Projects.2519c450.js.map
