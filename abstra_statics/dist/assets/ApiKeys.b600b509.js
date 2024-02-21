import{d as w,r as b,eB as _,H as k,b as v,ev as x,f as i,u as l,w as p,a$ as C,f7 as h,ar as f,eD as P}from"./outputWidgets.564eeccc.js";import{d as D}from"./icons.726cd60c.js";import{a as M}from"./asyncComputed.2d3ad713.js";import"./router.6a9e45a8.js";import"./index.a23812d1.js";import{M as N}from"./member.a5aa6eaa.js";import{A as d}from"./apiKey.37254a98.js";import{P as T}from"./project.96de2cf7.js";import{C as j}from"./CrudView.c08a9a6b.js";import{A as B}from"./Paragraph.4b9ba85b.js";import{A as K}from"./Text.deac93d2.js";import{M as V}from"./Modal.dbb1fef6.js";import"./FormItem.a84fee82.js";import"./hasIn.cc075526.js";import"./index.cf4c23b9.js";import"./record.22afd401.js";import"./pubsub.626e6bcd.js";import"./Form.b0ce7d11.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.c24dd7de.js";import"./url.4dc2caea.js";import"./index.15b24fb8.js";import"./Title.51ffb5ac.js";import"./Base.dde33a93.js";import"./Typography.4f26b9e4.js";import"./index.24b80b4d.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="33a7a883-84fa-4317-83f2-fec490b1c366",n._sentryDebugIdIdentifier="sentry-dbid-33a7a883-84fa-4317-83f2-fec490b1c366")}catch{}})();const le=w({__name:"ApiKeys",setup(n){const a=b(null),m=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:y,result:g,refetch:c}=M(async()=>Promise.all([d.list(s),T.get(s).then(e=>N.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),I=async e=>{const t=await d.create({projectId:s,name:e.name});c(),a.value=t.value},A=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var u;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:h(o.createdAt)},{type:"text",text:(u=r==null?void 0:r.email)!=null?u:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:D,dangerous:!0,onClick:async()=>{await d.delete(s,o.id),c()}}]}]}}))!=null?t:[]}});return(e,t)=>(v(),x(C,null,[i(j,{"entity-name":"API key","create-button-text":"Create API Key",loading:l(y),title:"API Keys",description:"API Keys are used to deploy your app from the local editor.","empty-title":"No API keys here yet",table:A.value,fields:m,onCreate:I},null,8,["loading","table"]),i(l(V),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:p(()=>[]),default:p(()=>[i(l(B),null,{default:p(()=>[f("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),i(l(K),{code:"",copyable:""},{default:p(()=>[f(P(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{le as default};
//# sourceMappingURL=ApiKeys.b600b509.js.map
