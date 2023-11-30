import{d as w,r as A,eB as _,G as h,b as k,eu as C,f as l,u as i,w as d,a_ as v,aq as f,eD as x}from"./outputWidgets.ce4e406d.js";import{a as P}from"./asyncComputed.498fb70f.js";import{P as D}from"./project.d17adb07.js";import"./router.89024617.js";import{M}from"./member.f98ad0c6.js";import{A as m}from"./apiKey.b1167140.js";import"./columns.21954170.js";import{g as T}from"./icons.f7eed083.js";import{C as N}from"./CrudView.b979cbcb.js";import{f as j}from"./index.b048d0fb.js";import{b as B,c as K}from"./Text.7e77f280.js";import{M as V}from"./transButton.4202b5bc.js";import"./gateway.fc7b6e78.js";import"./record.27b1c0da.js";import"./pubsub.72a67499.js";import"./Base.1ede535c.js";import"./Title.573ab17b.js";import"./index.dfb92c42.js";import"./url.4cf8dc66.js";import"./index.996600df.js";import"./index.6b98dd47.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="73baf3b7-0366-4d60-b08a-e0f26339f4f6",n._sentryDebugIdIdentifier="sentry-dbid-73baf3b7-0366-4d60-b08a-e0f26339f4f6")}catch{}})();const ne=w({__name:"ApiKeys",setup(n){const a=A(null),p=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:y,result:g,refetch:u}=P(async()=>Promise.all([m.list(s),D.get(s).then(e=>M.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),b=async e=>{const t=await m.create({projectId:s,name:e.name});u(),a.value=t.value},I=h(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"Actions",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var c;return{key:o.id,cells:[{text:o.name},{text:j(o.createdAt,Date.now(),{addSuffix:!0})},{text:(c=r==null?void 0:r.email)!=null?c:"Unknown"},{text:"actions",actions:[{label:"Delete",icon:T,dangerous:!0,onClick:async()=>{await m.delete(s,o.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(k(),C(v,null,[l(N,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(y),title:"API Keys",description:"API Keys are used to deploy your app from the local editor.","empty-title":"No API keys here yet",table:I.value,fields:p,onCreate:b},null,8,["loading","table"]),l(i(V),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(B),null,{default:d(()=>[f("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(K),{code:"",copyable:""},{default:d(()=>[f(x(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{ne as default};
//# sourceMappingURL=ApiKeys.b9392474.js.map
