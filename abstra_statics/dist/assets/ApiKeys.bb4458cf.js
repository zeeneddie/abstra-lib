import{d as A,r as w,eB as _,H as h,b as k,ev as v,f as l,u as i,w as d,a$ as x,f7 as C,ar as y,eD as P}from"./outputWidgets.a721265b.js";import{o as D}from"./icons.d79101d7.js";import{a as M}from"./asyncComputed.4b877038.js";import"./router.480ba909.js";import"./index.ba7200ad.js";import{M as T}from"./member.c5275c14.js";import{A as p}from"./apiKey.c751c010.js";import{P as N}from"./project.5189079d.js";import{C as j}from"./CrudView.d1389e77.js";import{A as B}from"./Paragraph.fd8e4b5d.js";import{A as K}from"./Text.42924b87.js";import{M as V}from"./Modal.f58ab193.js";import"./FormItem.a6b24876.js";import"./hasIn.447933db.js";import"./index.cf4c23b9.js";import"./record.5b18e499.js";import"./pubsub.7f76ac52.js";import"./Form.e7ef5aca.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.2dc1df5b.js";import"./url.4270c510.js";import"./index.bfbe8ecf.js";import"./Title.26e17d48.js";import"./Base.66af83ab.js";import"./index.5f2f9116.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="d13d646b-738b-49de-9570-d41c744ebad3",n._sentryDebugIdIdentifier="sentry-dbid-d13d646b-738b-49de-9570-d41c744ebad3")}catch{}})();const le=A({__name:"ApiKeys",setup(n){const a=w(null),m=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:f,result:g,refetch:c}=M(async()=>Promise.all([p.list(s),N.get(s).then(e=>T.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),b=async e=>{const t=await p.create({projectId:s,name:e.name});c(),a.value=t.value},I=h(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var u;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:C(o.createdAt)},{type:"text",text:(u=r==null?void 0:r.email)!=null?u:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:D,dangerous:!0,onClick:async()=>{await p.delete(s,o.id),c()}}]}]}}))!=null?t:[]}});return(e,t)=>(k(),v(x,null,[l(j,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(f),title:"API Keys",description:"API Keys are used to deploy your app from the local editor.","empty-title":"No API keys here yet",table:I.value,fields:m,onCreate:b},null,8,["loading","table"]),l(i(V),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(B),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(K),{code:"",copyable:""},{default:d(()=>[y(P(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{le as default};
//# sourceMappingURL=ApiKeys.bb4458cf.js.map
