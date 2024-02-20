import{d as D,eB as R,eA as h,r as x,H as O,a as A,b as p,ev as E,u as s,c as j,ex as w,f as d,w as f,a$ as $,bO as B,cz as F}from"./outputWidgets.f04a7247.js";import{a as M}from"./asyncComputed.626bf869.js";import{a as S}from"./ant-design.e8d42d5d.js";import"./router.36dc6d26.js";import"./index.1786638b.js";import{P as g}from"./project.2d5639cf.js";import{O as T}from"./organization.33f04e08.js";import{C as U}from"./CrudView.10c6f122.js";import{e as V,q as L,I as q,D as G}from"./icons.03d75fc8.js";import{A as H}from"./FormItem.cd67f0ff.js";import{M as J}from"./Modal.2040e85f.js";import"./index.f8478a08.js";import"./index.cf4c23b9.js";import"./record.9511849b.js";import"./pubsub.067f6366.js";import"./Paragraph.abb55c14.js";import"./Base.3edf0277.js";import"./Typography.d96689a8.js";import"./Form.9846df60.js";import"./hasIn.8e271825.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.7785f0ca.js";import"./url.0ab4de93.js";import"./index.9fb01524.js";import"./Title.6d8cba05.js";import"./Text.f4f2e607.js";import"./index.d1e63779.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[c]="1ec8874c-babf-4b7e-be33-0860813468f3",l._sentryDebugIdIdentifier="sentry-dbid-1ec8874c-babf-4b7e-be33-0860813468f3")}catch{}})();const ve=D({__name:"Projects",setup(l){const c=[{key:"name",label:"Project Name"}],m=R().params.organizationId,k=h(),{loading:C,result:r,refetch:y}=M(()=>Promise.all([g.list(m),T.get(m)]).then(([t,e])=>({projects:t,organization:e}))),u=({key:t})=>k.push({name:"project",params:{projectId:t}}),P=async t=>{const e=await g.create({organizationId:m,name:t.name});u({key:e.id})},I=async({key:t})=>{var o,a;if(await S("Are you sure you want to delete this project?"))try{await((a=(o=r.value)==null?void 0:o.projects.find(i=>i.id===t))==null?void 0:a.delete())}catch(i){F.error({message:"Error deleting project",description:String(i)})}finally{await y()}},_=async({key:t})=>{var o;const e=(o=r.value)==null?void 0:o.projects.find(a=>a.id===t);if(e){const a=await e.duplicate();u({key:a.id})}},n=x({state:"idle"});function N(t){n.value={state:"renaming",projectId:t.id,newName:t.name}}async function b(t){if(n.value.state==="renaming"&&t){const{projectId:e,newName:o}=n.value;await g.rename(e,o),y()}n.value={state:"idle"}}const z=O(()=>{var t,e;return{columns:[{name:"Project Name",align:"left"},{name:"",align:"right"}],rows:(e=(t=r.value)==null?void 0:t.projects.map(o=>{var a,i;return{key:o.id,cells:[{type:"link",text:o.name,to:`/projects/${encodeURIComponent(o.id)}`},{type:"actions",actions:[{icon:V,label:"Go to project",onClick:u},{icon:L,label:"Rename project",onClick:()=>N(o)},...(i=(a=r.value)==null?void 0:a.organization)!=null&&i.featureFlags.DUPLICATE_PROJECTS?[{icon:q,label:"Duplicate",onClick:_}]:[],{icon:G,label:"Delete",onClick:I,dangerous:!0}]}]}}))!=null?e:[]}});return(t,e)=>{const o=A("ant-form");return p(),E($,null,[s(r)?(p(),j(U,{key:0,"entity-name":"project",loading:s(C),title:`${s(r).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:z.value,fields:c,onCreate:P},null,8,["loading","title","table"])):w("",!0),d(s(J),{open:n.value.state==="renaming",title:"Rename organization",onCancel:e[1]||(e[1]=a=>b(!1)),onOk:e[2]||(e[2]=a=>b(!0))},{default:f(()=>[n.value.state==="renaming"?(p(),j(o,{key:0,layout:"vertical"},{default:f(()=>[d(s(H),{label:"New name"},{default:f(()=>[d(s(B),{value:n.value.newName,"onUpdate:value":e[0]||(e[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):w("",!0)]),_:1},8,["open"])],64)}}});export{ve as default};
//# sourceMappingURL=Projects.a8cfb9bb.js.map
