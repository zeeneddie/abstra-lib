import{d as I,r as w,eA as C,H as _,b as k,eu as x,f as l,u as i,w as d,aC as P,eS as h,eP as v,aq as y,eD as D}from"./outputWidgets.c199cd65.js";import{a as M}from"./asyncComputed.e8505f10.js";import"./router.304180d2.js";import"./index.b551111a.js";import{M as j}from"./member.a3b4d21b.js";import{A as p}from"./apiKey.08d1473b.js";import{P as N}from"./project.5f8f9f64.js";import{C as T}from"./CrudView.4e62156c.js";import{A as K}from"./Paragraph.72c12540.js";import{A as V}from"./Text.47bac3a4.js";import{M as B}from"./Modal.94298c95.js";import"./Form.2bee2b00.js";import"./hasIn.7b6e24c6.js";import"./popupNotifcation.5704d43a.js";import"./index.cf4c23b9.js";import"./record.e60b008b.js";import"./pubsub.6235e50c.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.3370d835.js";import"./BookOutlined.ed0934b2.js";import"./url.266b7147.js";import"./index.464c5f1b.js";import"./Title.2a2cadae.js";import"./index.0270c373.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="decf1b2d-7b75-47c9-9873-c4bb8fd7ddbd",n._sentryDebugIdIdentifier="sentry-dbid-decf1b2d-7b75-47c9-9873-c4bb8fd7ddbd")}catch{}})();const se=I({__name:"ApiKeys",setup(n){const a=w(null),m=[{key:"name",label:"API key name"}],s=C().params.projectId,{loading:f,result:b,refetch:c}=M(async()=>Promise.all([p.list(s),N.get(s).then(e=>j.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(r=>r.authorId===o.ownerId)})))),g=async e=>{const t=await p.create({projectId:s,name:e.name});c(),a.value=t.value},A=_(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=b.value)==null?void 0:e.map(({apiKey:o,member:r})=>{var u;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:h(o.createdAt)},{type:"text",text:(u=r==null?void 0:r.email)!=null?u:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:v,dangerous:!0,onClick:async()=>{await p.delete(s,o.id),c()}}]}]}}))!=null?t:[]}});return(e,t)=>(k(),x(P,null,[l(T,{"entity-name":"API key","create-button-text":"Create API Key",loading:i(f),title:"API Keys",description:"API Keys are used to deploy your project from the local editor.","empty-title":"No API keys here yet",table:A.value,fields:m,onCreate:g},null,8,["loading","table"]),l(i(B),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[l(i(K),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),l(i(V),{code:"",copyable:""},{default:d(()=>[y(D(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{se as default};
//# sourceMappingURL=ApiKeys.2fd3934a.js.map
