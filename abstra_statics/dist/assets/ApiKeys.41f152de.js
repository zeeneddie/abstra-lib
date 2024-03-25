import{d as A,r as w,eB as _,H as k,b as v,ev as x,f as i,u as l,w as d,aD as C,eQ as P,ar as y,eD as h}from"./outputWidgets.7e6eb177.js";import{i as D}from"./icons.42e022b7.js";import{a as M}from"./asyncComputed.5c83bb8a.js";import"./router.1fa38c42.js";import"./index.0e1d2395.js";import{M as N}from"./member.b0fca5c5.js";import{A as p}from"./apiKey.9a95091e.js";import{P as j}from"./project.e9ad3d00.js";import{C as B}from"./CrudView.93e6cce5.js";import{A as K}from"./Paragraph.a13a9f0d.js";import{A as T}from"./Text.497ac05f.js";import{M as V}from"./Modal.dcc2c9e3.js";import"./Form.f6e73dd6.js";import"./hasIn.958b80f9.js";import"./popupNotifcation.1c8d50aa.js";import"./index.cf4c23b9.js";import"./record.a100d067.js";import"./pubsub.782b9d46.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.5e43f505.js";import"./url.577173aa.js";import"./index.d8062c86.js";import"./Title.f948a676.js";import"./Base.fe1b5bdf.js";import"./Typography.9133b65d.js";import"./index.a964b97b.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="d69d4506-e1f3-4e09-8be8-7c426b120836",n._sentryDebugIdIdentifier="sentry-dbid-d69d4506-e1f3-4e09-8be8-7c426b120836")}catch{}})();const le=A({__name:"ApiKeys",setup(n){const a=w(null),m=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:f,result:g,refetch:c}=M(async()=>Promise.all([p.list(s),j.get(s).then(e=>N.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),I=async e=>{const t=await p.create({projectId:s,name:e.name});c(),a.value=t.value},b=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var u;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:P(o.createdAt)},{type:"text",text:(u=r==null?void 0:r.email)!=null?u:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:D,dangerous:!0,onClick:async()=>{await p.delete(s,o.id),c()}}]}]}}))!=null?t:[]}});return(e,t)=>(v(),x(C,null,[i(B,{"entity-name":"API key","create-button-text":"Create API Key",loading:l(f),title:"API Keys",description:"API Keys are used to deploy your app from the local editor.","empty-title":"No API keys here yet",table:b.value,fields:m,onCreate:I},null,8,["loading","table"]),i(l(V),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[i(l(K),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),i(l(T),{code:"",copyable:""},{default:d(()=>[y(h(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{le as default};
//# sourceMappingURL=ApiKeys.41f152de.js.map
