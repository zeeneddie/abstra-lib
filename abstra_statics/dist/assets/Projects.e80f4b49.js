import{d as R,eB as h,eA as z,r as D,G as A,a as O,b as u,ev as E,u as s,c as j,ex as w,f as p,w as f,bq as F,bH as B,cw as M}from"./outputWidgets.4ee23211.js";import{e as $,u as S,K as T,F as U}from"./icons.118273d5.js";import{a as V}from"./asyncComputed.6aa53888.js";import"./authorManager.f7011066.js";import"./index.2515b741.js";import{P as g}from"./project.b68eb342.js";import{O as G}from"./organization.d9089ea0.js";import{C as L}from"./CrudView.e4ffc63a.js";import{a as q}from"./ant-design.0e7f3c60.js";import{A as H}from"./FormItem.4eda4fd4.js";import{M as J}from"./Modal.de1e192a.js";import"./index.cf4c23b9.js";import"./record.dfbd8ce8.js";import"./pubsub.2e625fee.js";import"./Title.875de539.js";import"./Text.4ac8e7c3.js";import"./Form.9bd044f0.js";import"./hasIn.ab5a960d.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.d2246fe1.js";import"./router.b1324b17.js";import"./index.1d39343b.js";import"./url.732e007c.js";import"./index.57f11a54.js";import"./index.1f97134e.js";import"./index.ade977cc.js";import"./index.01fe2471.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[c]="7b1143ba-8794-4867-bf14-f33ce8dde812",l._sentryDebugIdIdentifier="sentry-dbid-7b1143ba-8794-4867-bf14-f33ce8dde812")}catch{}})();const ve=R({__name:"Projects",setup(l){const c=[{key:"name",label:"Project Name"}],m=h().params.organizationId,k=z(),{loading:C,result:r,refetch:y}=V(()=>Promise.all([g.list(m),G.get(m)]).then(([t,e])=>({projects:t,organization:e}))),d=({key:t})=>k.push({name:"project",params:{projectId:t}}),P=async t=>{const e=await g.create({organizationId:m,name:t.name});d({key:e.id})},I=async({key:t})=>{var o,a;if(await q("Are you sure you want to delete this project?"))try{await((a=(o=r.value)==null?void 0:o.projects.find(i=>i.id===t))==null?void 0:a.delete())}catch(i){M.error({message:"Error deleting project",description:String(i)})}finally{await y()}},_=async({key:t})=>{var o;const e=(o=r.value)==null?void 0:o.projects.find(a=>a.id===t);if(e){const a=await e.duplicate();d({key:a.id})}},n=D({state:"idle"});function N(t){n.value={state:"renaming",projectId:t.id,newName:t.name}}async function b(t){if(n.value.state==="renaming"&&t){const{projectId:e,newName:o}=n.value;await g.rename(e,o),y()}n.value={state:"idle"}}const x=A(()=>{var t,e;return{columns:[{name:"Project Name",align:"left"},{name:"Actions",align:"right"}],rows:(e=(t=r.value)==null?void 0:t.projects.map(o=>{var a,i;return{key:o.id,cells:[{text:o.name,link:`/projects/${encodeURIComponent(o.id)}`},{text:"",actions:[{icon:$,label:"Go to project",onClick:d},{icon:S,label:"Rename project",onClick:()=>N(o)},...(i=(a=r.value)==null?void 0:a.organization)!=null&&i.featureFlags.DUPLICATE_PROJECTS?[{icon:T,label:"Duplicate",onClick:_}]:[],{icon:U,label:"Delete",onClick:I,dangerous:!0}]}]}}))!=null?e:[]}});return(t,e)=>{const o=O("ant-form");return u(),E(F,null,[s(r)?(u(),j(L,{key:0,"entity-name":"project",loading:s(C),title:`${s(r).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:x.value,fields:c,onCreate:P},null,8,["loading","title","table"])):w("",!0),p(s(J),{open:n.value.state==="renaming",title:"Rename organization",onCancel:e[1]||(e[1]=a=>b(!1)),onOk:e[2]||(e[2]=a=>b(!0))},{default:f(()=>[n.value.state==="renaming"?(u(),j(o,{key:0,layout:"vertical"},{default:f(()=>[p(s(H),{label:"New name"},{default:f(()=>[p(s(B),{value:n.value.newName,"onUpdate:value":e[0]||(e[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):w("",!0)]),_:1},8,["open"])],64)}}});export{ve as default};
//# sourceMappingURL=Projects.e80f4b49.js.map
