import{d as w,r as b,eB as _,H as k,b as v,ev as x,f as i,u as l,w as d,a$ as C,f5 as h,ar as y,eD as P}from"./outputWidgets.b9fff993.js";import{i as D}from"./icons.bc2aede4.js";import{a as M}from"./asyncComputed.1f5d86b1.js";import"./router.936dc092.js";import"./index.a574459a.js";import{M as N}from"./member.5506f8d3.js";import{A as p}from"./apiKey.f464704c.js";import{P as T}from"./project.5ed21f87.js";import{C as j}from"./CrudView.35f52ffc.js";import{A as B}from"./Paragraph.34590571.js";import{A as K}from"./Text.25b12d34.js";import{M as V}from"./Modal.1e5c3a47.js";import"./Form.43b4f8c5.js";import"./hasIn.460a2d20.js";import"./index.cf4c23b9.js";import"./record.67aa92ec.js";import"./pubsub.a4bfec49.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.fa29572f.js";import"./url.948062f7.js";import"./index.68c30d13.js";import"./Title.07be7847.js";import"./Base.dfcc101c.js";import"./Typography.e547c78f.js";import"./index.73d32778.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="448973a8-d0f5-4042-a71c-748137351e39",n._sentryDebugIdIdentifier="sentry-dbid-448973a8-d0f5-4042-a71c-748137351e39")}catch{}})();const ie=w({__name:"ApiKeys",setup(n){const a=b(null),m=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:f,result:g,refetch:c}=M(async()=>Promise.all([p.list(s),T.get(s).then(e=>N.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),I=async e=>{const t=await p.create({projectId:s,name:e.name});c(),a.value=t.value},A=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var u;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:h(o.createdAt)},{type:"text",text:(u=r==null?void 0:r.email)!=null?u:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:D,dangerous:!0,onClick:async()=>{await p.delete(s,o.id),c()}}]}]}}))!=null?t:[]}});return(e,t)=>(v(),x(C,null,[i(j,{"entity-name":"API key","create-button-text":"Create API Key",loading:l(f),title:"API Keys",description:"API Keys are used to deploy your app from the local editor.","empty-title":"No API keys here yet",table:A.value,fields:m,onCreate:I},null,8,["loading","table"]),i(l(V),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[i(l(B),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),i(l(K),{code:"",copyable:""},{default:d(()=>[y(P(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{ie as default};
//# sourceMappingURL=ApiKeys.48c07e2e.js.map
