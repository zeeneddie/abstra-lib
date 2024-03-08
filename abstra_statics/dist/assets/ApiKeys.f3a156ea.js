import{d as A,r as w,eB as _,H as k,b as v,ev as x,f as i,u as l,w as p,aD as C,eP as P,ar as y,eD as h}from"./outputWidgets.120abcec.js";import{i as D}from"./icons.81fa3ed8.js";import{a as M}from"./asyncComputed.e26882e4.js";import"./router.7fe7e9c6.js";import"./index.bbf0dbf0.js";import{M as N}from"./member.d33d3312.js";import{A as d}from"./apiKey.4877ac29.js";import{P as T}from"./project.dea31dec.js";import{C as j}from"./CrudView.2865f483.js";import{A as B}from"./Paragraph.200bbb6d.js";import{A as K}from"./Text.04b2aa2d.js";import{M as V}from"./Modal.c436e1a8.js";import"./Form.65d5185b.js";import"./hasIn.07231e5c.js";import"./popupNotifcation.89e33f50.js";import"./index.cf4c23b9.js";import"./record.bba37786.js";import"./pubsub.a3533115.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.a83146c1.js";import"./url.a71238d7.js";import"./index.983b1ccc.js";import"./Title.2384966a.js";import"./Base.0deedccd.js";import"./Typography.e89833d8.js";import"./index.a72a8d18.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="ab36b2ae-9b8c-4459-93fa-155cb1787c82",n._sentryDebugIdIdentifier="sentry-dbid-ab36b2ae-9b8c-4459-93fa-155cb1787c82")}catch{}})();const le=A({__name:"ApiKeys",setup(n){const a=w(null),m=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:f,result:g,refetch:c}=M(async()=>Promise.all([d.list(s),T.get(s).then(e=>N.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),b=async e=>{const t=await d.create({projectId:s,name:e.name});c(),a.value=t.value},I=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var u;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:P(o.createdAt)},{type:"text",text:(u=r==null?void 0:r.email)!=null?u:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:D,dangerous:!0,onClick:async()=>{await d.delete(s,o.id),c()}}]}]}}))!=null?t:[]}});return(e,t)=>(v(),x(C,null,[i(j,{"entity-name":"API key","create-button-text":"Create API Key",loading:l(f),title:"API Keys",description:"API Keys are used to deploy your app from the local editor.","empty-title":"No API keys here yet",table:I.value,fields:m,onCreate:b},null,8,["loading","table"]),i(l(V),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:p(()=>[]),default:p(()=>[i(l(B),null,{default:p(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),i(l(K),{code:"",copyable:""},{default:p(()=>[y(h(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{le as default};
//# sourceMappingURL=ApiKeys.f3a156ea.js.map
