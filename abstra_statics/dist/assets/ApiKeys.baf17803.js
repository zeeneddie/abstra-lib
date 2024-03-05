import{d as w,r as b,eB as _,H as k,b as v,ev as x,f as i,u as l,w as d,aD as C,f8 as h,ar as y,eD as P}from"./outputWidgets.599b9112.js";import{i as D}from"./icons.7563f867.js";import{a as M}from"./asyncComputed.78829a67.js";import"./router.e48bf21f.js";import"./index.4fac7200.js";import{M as N}from"./member.008e30a5.js";import{A as p}from"./apiKey.ca3dac93.js";import{P as T}from"./project.78bf0194.js";import{C as j}from"./CrudView.84fc16ea.js";import{A as B}from"./Paragraph.03bfa3d0.js";import{A as K}from"./Text.86ba57b0.js";import{M as V}from"./Modal.7a3cd749.js";import"./Form.9462e96b.js";import"./hasIn.5af3d6c5.js";import"./index.cf4c23b9.js";import"./record.46c91ced.js";import"./pubsub.08234d46.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.0b843e56.js";import"./url.07299da5.js";import"./index.da8527b2.js";import"./Title.6a66852e.js";import"./Base.7b28ff94.js";import"./Typography.b444065a.js";import"./index.7564999a.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="7a5a7165-1658-4db6-914a-49d6a9d1c310",n._sentryDebugIdIdentifier="sentry-dbid-7a5a7165-1658-4db6-914a-49d6a9d1c310")}catch{}})();const ie=w({__name:"ApiKeys",setup(n){const a=b(null),m=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:f,result:g,refetch:c}=M(async()=>Promise.all([p.list(s),T.get(s).then(e=>N.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),I=async e=>{const t=await p.create({projectId:s,name:e.name});c(),a.value=t.value},A=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var u;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:h(o.createdAt)},{type:"text",text:(u=r==null?void 0:r.email)!=null?u:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:D,dangerous:!0,onClick:async()=>{await p.delete(s,o.id),c()}}]}]}}))!=null?t:[]}});return(e,t)=>(v(),x(C,null,[i(j,{"entity-name":"API key","create-button-text":"Create API Key",loading:l(f),title:"API Keys",description:"API Keys are used to deploy your app from the local editor.","empty-title":"No API keys here yet",table:A.value,fields:m,onCreate:I},null,8,["loading","table"]),i(l(V),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[i(l(B),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),i(l(K),{code:"",copyable:""},{default:d(()=>[y(P(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{ie as default};
//# sourceMappingURL=ApiKeys.baf17803.js.map
