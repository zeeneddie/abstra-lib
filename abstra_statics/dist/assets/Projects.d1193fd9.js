import{d as D,eB as R,eA as h,r as x,H as O,a as A,b as u,ev as E,u as s,c as j,ex as w,f as p,w as f,aD as B,bz as F,cy as M}from"./outputWidgets.33535317.js";import{a as $}from"./asyncComputed.eceaf3f4.js";import{a as S}from"./ant-design.c6c2096e.js";import"./router.477783f4.js";import"./index.a405b124.js";import{P as g}from"./project.26ea1217.js";import{O as T}from"./organization.22b7c47d.js";import{C as U}from"./CrudView.418c1719.js";import{e as V,H,P as L,K as G}from"./icons.3c082a53.js";import{A as J}from"./Form.bb02d3a3.js";import{M as K}from"./Modal.40f2d981.js";import"./index.2a50b107.js";import"./popupNotifcation.ce5e5591.js";import"./index.cf4c23b9.js";import"./record.49cb918d.js";import"./pubsub.fa124b5f.js";import"./Paragraph.e5c0c444.js";import"./Base.abc79167.js";import"./Typography.6c9836cc.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.b0a6885c.js";import"./url.807a6d7f.js";import"./index.aaedd1ff.js";import"./Title.55e2ce15.js";import"./Text.0d020666.js";import"./index.dd98bcf9.js";import"./hasIn.0dff4f2d.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[c]="aff0c0d3-f944-409e-abb8-0c1b8826b08f",l._sentryDebugIdIdentifier="sentry-dbid-aff0c0d3-f944-409e-abb8-0c1b8826b08f")}catch{}})();const ve=D({__name:"Projects",setup(l){const c=[{key:"name",label:"Project Name"}],m=R().params.organizationId,k=h(),{loading:P,result:r,refetch:y}=$(()=>Promise.all([g.list(m),T.get(m)]).then(([t,e])=>({projects:t,organization:e}))),d=({key:t})=>k.push({name:"project",params:{projectId:t}}),C=async t=>{const e=await g.create({organizationId:m,name:t.name});d({key:e.id})},I=async({key:t})=>{var a,o;if(await S("Are you sure you want to delete this project?"))try{await((o=(a=r.value)==null?void 0:a.projects.find(i=>i.id===t))==null?void 0:o.delete())}catch(i){M.error({message:"Error deleting project",description:String(i)})}finally{await y()}},_=async({key:t})=>{var a;const e=(a=r.value)==null?void 0:a.projects.find(o=>o.id===t);if(e){const o=await e.duplicate();d({key:o.id})}},n=x({state:"idle"});function N(t){n.value={state:"renaming",projectId:t.id,newName:t.name}}async function b(t){if(n.value.state==="renaming"&&t){const{projectId:e,newName:a}=n.value;await g.rename(e,a),y()}n.value={state:"idle"}}const z=O(()=>{var t,e;return{columns:[{name:"Project Name",align:"left"},{name:"",align:"right"}],rows:(e=(t=r.value)==null?void 0:t.projects.map(a=>{var o,i;return{key:a.id,cells:[{type:"link",text:a.name,to:`/projects/${encodeURIComponent(a.id)}`},{type:"actions",actions:[{icon:V,label:"Go to project",onClick:d},{icon:H,label:"Rename project",onClick:()=>N(a)},...(i=(o=r.value)==null?void 0:o.organization)!=null&&i.featureFlags.DUPLICATE_PROJECTS?[{icon:L,label:"Duplicate",onClick:_}]:[],{icon:G,label:"Delete",onClick:I,dangerous:!0}]}]}}))!=null?e:[]}});return(t,e)=>{const a=A("ant-form");return u(),E(B,null,[s(r)?(u(),j(U,{key:0,"entity-name":"project",loading:s(P),title:`${s(r).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:z.value,fields:c,onCreate:C},null,8,["loading","title","table"])):w("",!0),p(s(K),{open:n.value.state==="renaming",title:"Rename organization",onCancel:e[1]||(e[1]=o=>b(!1)),onOk:e[2]||(e[2]=o=>b(!0))},{default:f(()=>[n.value.state==="renaming"?(u(),j(a,{key:0,layout:"vertical"},{default:f(()=>[p(s(J),{label:"New name"},{default:f(()=>[p(s(F),{value:n.value.newName,"onUpdate:value":e[0]||(e[0]=o=>n.value.newName=o)},null,8,["value"])]),_:1})]),_:1})):w("",!0)]),_:1},8,["open"])],64)}}});export{ve as default};
//# sourceMappingURL=Projects.d1193fd9.js.map