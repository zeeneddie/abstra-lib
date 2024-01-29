import{d as R,ez as h,ey as D,r as F,F as x,a as O,b as d,et as E,u as s,c as b,ev as w,f as p,w as f,bo as A,bF as M,cu as $}from"./outputWidgets.c5bb0ffd.js";import{e as B,u as S,K as T,F as U}from"./icons.069bc807.js";import{a as V}from"./asyncComputed.01a998b0.js";import"./router.349f1a13.js";import"./jwt-decode.esm.74bd4619.js";import"./index.8e24d5f4.js";import{P as g}from"./project.fd9b26da.js";import{O as L}from"./organization.7e8dad2b.js";import{C as G}from"./CrudView.56ccfa2e.js";import{a as J}from"./ant-design.72a12637.js";import{A as K}from"./FormItem.bf725b43.js";import{M as q}from"./Modal.c5afd51d.js";import"./storage.29370dcf.js";import"./index.09d2601c.js";import"./index.cf4c23b9.js";import"./record.0052787e.js";import"./pubsub.4dcc4eda.js";import"./Title.e8aca433.js";import"./Text.fa2a0c37.js";import"./Form.7efe9a60.js";import"./hasIn.8dd71763.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.149fc352.js";import"./url.537a5ab7.js";import"./index.66cc3f55.js";import"./index.21590a9d.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[c]="47404976-e285-4a91-ab66-d8795231feb4",l._sentryDebugIdIdentifier="sentry-dbid-47404976-e285-4a91-ab66-d8795231feb4")}catch{}})();const we=R({__name:"Projects",setup(l){const c=[{key:"name",label:"Project Name"}],m=h().params.organizationId,k=D(),{loading:C,result:r,refetch:y}=V(()=>Promise.all([g.list(m),L.get(m)]).then(([t,e])=>({projects:t,organization:e}))),u=({key:t})=>k.push({name:"project",params:{projectId:t}}),P=async t=>{const e=await g.create({organizationId:m,name:t.name});u({key:e.id})},I=async({key:t})=>{var o,a;if(await J("Are you sure you want to delete this project?"))try{await((a=(o=r.value)==null?void 0:o.projects.find(i=>i.id===t))==null?void 0:a.delete())}catch(i){$.error({message:"Error deleting project",description:String(i)})}finally{await y()}},_=async({key:t})=>{var o;const e=(o=r.value)==null?void 0:o.projects.find(a=>a.id===t);if(e){const a=await e.duplicate();u({key:a.id})}},n=F({state:"idle"});function N(t){n.value={state:"renaming",projectId:t.id,newName:t.name}}async function j(t){if(n.value.state==="renaming"&&t){const{projectId:e,newName:o}=n.value;await g.rename(e,o),y()}n.value={state:"idle"}}const z=x(()=>{var t,e;return{columns:[{name:"Project Name",align:"left"},{name:"",align:"right"}],rows:(e=(t=r.value)==null?void 0:t.projects.map(o=>{var a,i;return{key:o.id,cells:[{type:"link",text:o.name,to:`/projects/${encodeURIComponent(o.id)}`},{type:"actions",actions:[{icon:B,label:"Go to project",onClick:u},{icon:S,label:"Rename project",onClick:()=>N(o)},...(i=(a=r.value)==null?void 0:a.organization)!=null&&i.featureFlags.DUPLICATE_PROJECTS?[{icon:T,label:"Duplicate",onClick:_}]:[],{icon:U,label:"Delete",onClick:I,dangerous:!0}]}]}}))!=null?e:[]}});return(t,e)=>{const o=O("ant-form");return d(),E(A,null,[s(r)?(d(),b(G,{key:0,"entity-name":"project",loading:s(C),title:`${s(r).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:z.value,fields:c,onCreate:P},null,8,["loading","title","table"])):w("",!0),p(s(q),{open:n.value.state==="renaming",title:"Rename organization",onCancel:e[1]||(e[1]=a=>j(!1)),onOk:e[2]||(e[2]=a=>j(!0))},{default:f(()=>[n.value.state==="renaming"?(d(),b(o,{key:0,layout:"vertical"},{default:f(()=>[p(s(K),{label:"New name"},{default:f(()=>[p(s(M),{value:n.value.newName,"onUpdate:value":e[0]||(e[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):w("",!0)]),_:1},8,["open"])],64)}}});export{we as default};
//# sourceMappingURL=Projects.179015a7.js.map
