import{d as A,r as w,eB as _,H as k,b as v,ev as x,f as i,u as l,w as d,aD as C,eP as P,ar as y,eD as h}from"./outputWidgets.f3a48c39.js";import{i as D}from"./icons.60025b41.js";import{a as M}from"./asyncComputed.afc6ce5c.js";import"./router.99603b4a.js";import"./index.612889df.js";import{M as N}from"./member.b8872e0c.js";import{A as p}from"./apiKey.c954e444.js";import{P as T}from"./project.09c8e15d.js";import{C as j}from"./CrudView.006f1bba.js";import{A as B}from"./Paragraph.2f36ee60.js";import{A as K}from"./Text.27f18dd9.js";import{M as V}from"./Modal.1ae316d9.js";import"./Form.a4cbc637.js";import"./hasIn.a55d3dd8.js";import"./popupNotifcation.2225b4fd.js";import"./index.cf4c23b9.js";import"./record.37674677.js";import"./pubsub.6f73925e.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.9d2ea105.js";import"./url.0033378f.js";import"./index.8f50c357.js";import"./Title.02071298.js";import"./Base.1d91033f.js";import"./Typography.26586a0d.js";import"./index.15738138.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="2c85dc88-10bc-42cf-88f8-e3432ea6e0b2",n._sentryDebugIdIdentifier="sentry-dbid-2c85dc88-10bc-42cf-88f8-e3432ea6e0b2")}catch{}})();const le=A({__name:"ApiKeys",setup(n){const a=w(null),m=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:f,result:g,refetch:c}=M(async()=>Promise.all([p.list(s),T.get(s).then(e=>N.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),I=async e=>{const t=await p.create({projectId:s,name:e.name});c(),a.value=t.value},b=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var u;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:P(o.createdAt)},{type:"text",text:(u=r==null?void 0:r.email)!=null?u:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:D,dangerous:!0,onClick:async()=>{await p.delete(s,o.id),c()}}]}]}}))!=null?t:[]}});return(e,t)=>(v(),x(C,null,[i(j,{"entity-name":"API key","create-button-text":"Create API Key",loading:l(f),title:"API Keys",description:"API Keys are used to deploy your app from the local editor.","empty-title":"No API keys here yet",table:b.value,fields:m,onCreate:I},null,8,["loading","table"]),i(l(V),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[i(l(B),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),i(l(K),{code:"",copyable:""},{default:d(()=>[y(h(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{le as default};
//# sourceMappingURL=ApiKeys.bf7d89de.js.map
