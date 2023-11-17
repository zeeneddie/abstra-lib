import{d as w,r as A,eB as k,G as _,b as h,eu as C,f as i,u as l,w as d,b8 as v,aA as f,eD as x}from"./outputWidgets.562826ac.js";import{a as P}from"./asyncComputed.df2d9552.js";import{P as D}from"./project.e065d842.js";import"./router.e5ce2c0b.js";import{M}from"./member.e57d376b.js";import{A as m}from"./apiKey.1777e030.js";import"./columns.29d297cf.js";import{k as T}from"./icons.63405824.js";import{C as N}from"./CrudView.6f7097f4.js";import{f as j}from"./index.b048d0fb.js";import{a as B,b as K}from"./Text.712cfc26.js";import{M as V}from"./transButton.17480f27.js";import"./gateway.c80b0686.js";import"./activeRecord.6bb1bd7f.js";import"./pubsub.7185b91b.js";import"./Base.bf8dc0b1.js";import"./FormItem.fc4e7da8.js";import"./Title.f7aaa881.js";import"./index.82606edc.js";import"./index.cf4c23b9.js";import"./url.5a1383d2.js";import"./index.01bf1f2c.js";import"./index.583cd440.js";import"./index.9cdd1b35.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="4026922b-2732-4763-a415-e36e9bcccfa7",n._sentryDebugIdIdentifier="sentry-dbid-4026922b-2732-4763-a415-e36e9bcccfa7")}catch{}})();const ie=w({__name:"ApiKeys",setup(n){const a=A(null),p=[{key:"name",label:"API key name"}],s=k().params.projectId,{loading:y,result:g,refetch:c}=P(async()=>Promise.all([m.list(s),D.get(s).then(e=>M.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),b=async e=>{const t=await m.create({projectId:s,name:e.name});c(),a.value=t.value},I=_(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"Actions",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var u;return{key:o.id,cells:[{text:o.name},{text:j(o.createdAt,Date.now(),{addSuffix:!0})},{text:(u=r==null?void 0:r.email)!=null?u:"Unknown"},{text:"actions",actions:[{label:"Delete",icon:T,dangerous:!0,onClick:async()=>{await m.delete(s,o.id),c()}}]}]}}))!=null?t:[]}});return(e,t)=>(h(),C(v,null,[i(N,{"entity-name":"API key","create-button-text":"Create API Key",loading:l(y),title:"API Keys",description:"API Keys are used to deploy your app from the local editor.","empty-title":"No API keys here yet",table:I.value,fields:p,onCreate:b},null,8,["loading","table"]),i(l(V),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[i(l(B),null,{default:d(()=>[f("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),i(l(K),{code:"",copyable:""},{default:d(()=>[f(x(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{ie as default};
//# sourceMappingURL=ApiKeys.f8635f14.js.map
