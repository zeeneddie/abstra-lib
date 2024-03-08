import{d as w,r as b,eB as _,H as k,b as v,ev as x,f as i,u as l,w as d,aD as C,f8 as h,ar as f,eD as P}from"./outputWidgets.dd3997b1.js";import{i as D}from"./icons.9d0ae195.js";import{a as M}from"./asyncComputed.1a148b8f.js";import"./router.23ca8c5c.js";import"./index.c9914850.js";import{M as N}from"./member.f94e2f09.js";import{A as p}from"./apiKey.1f1e58ca.js";import{P as T}from"./project.97099b5a.js";import{C as j}from"./CrudView.63395425.js";import{A as B}from"./Paragraph.142c9e94.js";import{A as K}from"./Text.6383284e.js";import{M as V}from"./Modal.af3bb857.js";import"./Form.366406d1.js";import"./hasIn.fd08179b.js";import"./popupNotifcation.6af08685.js";import"./index.cf4c23b9.js";import"./record.27251633.js";import"./pubsub.7e2ca77e.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.9cb78b19.js";import"./url.71144004.js";import"./index.d42bac9c.js";import"./Title.95ef7227.js";import"./Base.20fd4dfc.js";import"./Typography.c4837fd7.js";import"./index.e703a32a.js";import"./SyncOutlined.092b7f7b.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="36073f09-3828-4d58-857d-f819672326a4",r._sentryDebugIdIdentifier="sentry-dbid-36073f09-3828-4d58-857d-f819672326a4")}catch{}})();const de=w({__name:"ApiKeys",setup(r){const a=b(null),m=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:y,result:g,refetch:u}=M(async()=>Promise.all([p.list(s),T.get(s).then(e=>N.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(n=>n.authorId===o.ownerId)})))),I=async e=>{const t=await p.create({projectId:s,name:e.name});u(),a.value=t.value},A=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:n})=>{var c;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:h(o.createdAt)},{type:"text",text:(c=n==null?void 0:n.email)!=null?c:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:D,dangerous:!0,onClick:async()=>{await p.delete(s,o.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(v(),x(C,null,[i(j,{"entity-name":"API key","create-button-text":"Create API Key",loading:l(y),title:"API Keys",description:"API Keys are used to deploy your app from the local editor.","empty-title":"No API keys here yet",table:A.value,fields:m,onCreate:I},null,8,["loading","table"]),i(l(V),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[i(l(B),null,{default:d(()=>[f("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),i(l(K),{code:"",copyable:""},{default:d(()=>[f(P(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{de as default};
//# sourceMappingURL=ApiKeys.3f539f9c.js.map
