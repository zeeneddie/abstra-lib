import{d as x,eB as h,eA as R,r as z,G as A,a as D,b as d,ev as O,u as r,c as j,ex as b,f as u,w as p,bq as B,bH as E,cw as M}from"./outputWidgets.0773446f.js";import{e as $,u as F,E as V}from"./icons.80671226.js";import{a as G}from"./asyncComputed.7d0aec41.js";import"./authorManager.bfe3b491.js";import"./index.87588504.js";import{P as f}from"./project.7b0be702.js";import{O as S}from"./organization.d01d3751.js";import{C as U}from"./CrudView.55f74c23.js";import{a as q}from"./ant-design.ea0343b3.js";import{A as H}from"./FormItem.16a0a9f2.js";import{M as L}from"./Title.a6272fd4.js";import"./index.cf4c23b9.js";import"./record.638bd142.js";import"./pubsub.10f8f72b.js";import"./gateway.ea2afc60.js";import"./Form.e1a139f2.js";import"./hasIn.4ef4f4b6.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.0836dd76.js";import"./router.bbaa5a50.js";import"./index.45a49011.js";import"./url.c5032ef8.js";import"./index.00b0463c.js";import"./index.9847bbd9.js";import"./Text.194142a2.js";import"./index.d1cce7fa.js";import"./index.8a062a4b.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[s]="fccda710-caee-4c26-944f-35dd46902f3c",i._sentryDebugIdIdentifier="sentry-dbid-fccda710-caee-4c26-944f-35dd46902f3c")}catch{}})();const je=x({__name:"Projects",setup(i){const s=[{key:"name",label:"Project Name"}],l=h().params.organizationId,k=R(),{loading:C,result:m,refetch:g}=G(()=>Promise.all([f.list(l),S.get(l)]).then(([e,t])=>({projects:e,organization:t}))),y=({key:e})=>k.push({name:"project",params:{projectId:e}}),P=async e=>{const t=await f.create({organizationId:l,name:e.name});y({key:t.id})},I=async({key:e})=>{var o,n;if(await q("Are you sure you want to delete this project?"))try{await((n=(o=m.value)==null?void 0:o.projects.find(c=>c.id===e))==null?void 0:n.delete())}catch(c){M.error({message:"Error deleting project",description:String(c)})}finally{await g()}},a=z({state:"idle"});function _(e){a.value={state:"renaming",projectId:e.id,newName:e.name}}async function w(e){if(a.value.state==="renaming"&&e){const{projectId:t,newName:o}=a.value;await f.rename(t,o),g()}a.value={state:"idle"}}const N=A(()=>{var e,t;return{columns:[{name:"Project Name",align:"left"},{name:"Actions",align:"right"}],rows:(t=(e=m.value)==null?void 0:e.projects.map(o=>({key:o.id,cells:[{text:o.name,link:`/projects/${encodeURIComponent(o.id)}`},{text:"",actions:[{icon:$,label:"Go to project",onClick:y},{icon:F,label:"Rename project",onClick:()=>_(o)},{icon:V,label:"Delete",onClick:I,dangerous:!0}]}]})))!=null?t:[]}});return(e,t)=>{const o=D("ant-form");return d(),O(B,null,[r(m)?(d(),j(U,{key:0,"entity-name":"project",loading:r(C),title:`${r(m).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:N.value,fields:s,onCreate:P},null,8,["loading","title","table"])):b("",!0),u(r(L),{open:a.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=n=>w(!1)),onOk:t[2]||(t[2]=n=>w(!0))},{default:p(()=>[a.value.state==="renaming"?(d(),j(o,{key:0,layout:"vertical"},{default:p(()=>[u(r(H),{label:"New name"},{default:p(()=>[u(r(E),{value:a.value.newName,"onUpdate:value":t[0]||(t[0]=n=>a.value.newName=n)},null,8,["value"])]),_:1})]),_:1})):b("",!0)]),_:1},8,["open"])],64)}}});export{je as default};
//# sourceMappingURL=Projects.c6d39bd3.js.map
