import{d as w,r as b,eB as _,H as k,b as v,ev as x,f as i,u as l,w as d,aD as C,eP as P,ar as y,eD as h}from"./outputWidgets.36443bf1.js";import{i as D}from"./icons.59c83d7d.js";import{a as M}from"./asyncComputed.2d81b4e1.js";import"./router.08221e1b.js";import"./index.84b7502b.js";import{M as N}from"./member.594ce823.js";import{A as p}from"./apiKey.585a796c.js";import{P as T}from"./project.89a3411d.js";import{C as j}from"./CrudView.3cfb2813.js";import{A as B}from"./Paragraph.6af8ad30.js";import{A as K}from"./Text.c592336f.js";import{M as V}from"./Modal.713c753c.js";import"./Form.e555ee28.js";import"./hasIn.40229cf7.js";import"./popupNotifcation.41fa6e6a.js";import"./index.cf4c23b9.js";import"./record.616e21c8.js";import"./pubsub.176e9557.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.dac6543f.js";import"./url.630a3f15.js";import"./index.001f9109.js";import"./Title.d17816bc.js";import"./Base.58cf8910.js";import"./Typography.9957685d.js";import"./index.333b87fd.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="33d81737-cfdd-4b51-96fa-50d804562286",n._sentryDebugIdIdentifier="sentry-dbid-33d81737-cfdd-4b51-96fa-50d804562286")}catch{}})();const le=w({__name:"ApiKeys",setup(n){const a=b(null),m=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:f,result:g,refetch:c}=M(async()=>Promise.all([p.list(s),T.get(s).then(e=>N.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),I=async e=>{const t=await p.create({projectId:s,name:e.name});c(),a.value=t.value},A=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var u;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:P(o.createdAt)},{type:"text",text:(u=r==null?void 0:r.email)!=null?u:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:D,dangerous:!0,onClick:async()=>{await p.delete(s,o.id),c()}}]}]}}))!=null?t:[]}});return(e,t)=>(v(),x(C,null,[i(j,{"entity-name":"API key","create-button-text":"Create API Key",loading:l(f),title:"API Keys",description:"API Keys are used to deploy your app from the local editor.","empty-title":"No API keys here yet",table:A.value,fields:m,onCreate:I},null,8,["loading","table"]),i(l(V),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[i(l(B),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),i(l(K),{code:"",copyable:""},{default:d(()=>[y(h(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{le as default};
//# sourceMappingURL=ApiKeys.d0be580f.js.map
