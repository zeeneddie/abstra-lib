import{d as w,r as A,eB as _,G as k,b as C,eu as h,f as l,u as i,w as d,a_ as v,aq as f,eD as x}from"./outputWidgets.d5e6cc81.js";import{a as P}from"./asyncComputed.bda7377e.js";import"./router.774776a6.js";import"./index.c5114751.js";import{M as D}from"./member.7d763a38.js";import{A as c}from"./apiKey.e111e1b3.js";import{P as M}from"./project.03e95e7d.js";import{g as N}from"./icons.b2a7ac2f.js";import{C as T}from"./CrudView.48d933a8.js";import{f as j}from"./index.b048d0fb.js";import{b as B,c as K}from"./Text.c99d3fc5.js";import{M as V}from"./transButton.47db9cbc.js";import"./Base.94ec4fa5.js";import"./Title.1444b2b8.js";import"./index.4a14e36f.js";import"./record.d9d8ddd5.js";import"./pubsub.6c21d86f.js";import"./gateway.71b9bb90.js";import"./url.20e98aa7.js";import"./index.11ee56ae.js";import"./index.9dbd1b96.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="b7672143-7f8d-4019-8d4f-2aba9dbc3ccf",n._sentryDebugIdIdentifier="sentry-dbid-b7672143-7f8d-4019-8d4f-2aba9dbc3ccf")}catch{}})();const ne=w({__name:"ApiKeys",setup(n){const a=A(null),m=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:y,result:g,refetch:p}=P(async()=>Promise.all([c.list(s),M.get(s).then(e=>D.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),b=async e=>{const t=await c.create({projectId:s,name:e.name});p(),a.value=t.value},I=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"Actions",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var u;return{key:o.id,cells:[{text:o.name},{text:j(o.createdAt,Date.now(),{addSuffix:!0})},{text:(u=r==null?void 0:r.email)!=null?u:"Unknown"},{text:"actions",actions:[{label:"Delete",icon:N,dangerous:!0,onClick:async()=>{await c.delete(s,o.id),p()}}]}]}}))!=null?t:[]}});return(e,t)=>(C(),h(v,null,[l(T,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(y),title:"API Keys",description:"API Keys are used to deploy your app from the local editor.","empty-title":"No API keys here yet",table:I.value,fields:m,onCreate:b},null,8,["loading","table"]),l(i(V),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(B),null,{default:d(()=>[f("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(K),{code:"",copyable:""},{default:d(()=>[f(x(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{ne as default};
//# sourceMappingURL=ApiKeys.c7bf34cd.js.map
