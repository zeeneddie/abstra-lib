import{d as A,r as w,eB as _,H as k,b as v,ev as x,f as i,u as l,w as d,aD as C,eP as P,ar as y,eD as h}from"./outputWidgets.763535ec.js";import{i as D}from"./icons.39d7577b.js";import{a as M}from"./asyncComputed.c1b5752d.js";import"./router.4c31abb0.js";import"./index.e272e65d.js";import{M as N}from"./member.f99bdfd3.js";import{A as p}from"./apiKey.120a7d49.js";import{P as T}from"./project.e03fe7eb.js";import{C as j}from"./CrudView.0261ff81.js";import{A as B}from"./Paragraph.1d14da40.js";import{A as K}from"./Text.1de1f1d2.js";import{M as V}from"./Modal.33014e22.js";import"./Form.93c1d68a.js";import"./hasIn.c3ad9d17.js";import"./popupNotifcation.59a7179b.js";import"./index.cf4c23b9.js";import"./record.ae98c277.js";import"./pubsub.e128dec2.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.0d674672.js";import"./url.0280fc81.js";import"./index.5c5eefcc.js";import"./Title.b6a28a5f.js";import"./Base.0423a633.js";import"./Typography.3b9809ab.js";import"./index.351b265c.js";import"./SyncOutlined.cf45cade.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="4bd99feb-9790-4de0-8643-02a0de6dd707",r._sentryDebugIdIdentifier="sentry-dbid-4bd99feb-9790-4de0-8643-02a0de6dd707")}catch{}})();const de=A({__name:"ApiKeys",setup(r){const a=w(null),m=[{key:"name",label:"API key name"}],s=_().params.projectId,{loading:f,result:g,refetch:u}=M(async()=>Promise.all([p.list(s),T.get(s).then(e=>N.list(e.organizationId))]).then(([e,t])=>e.map(o=>({apiKey:o,member:t.find(n=>n.authorId===o.ownerId)})))),I=async e=>{const t=await p.create({projectId:s,name:e.name});u(),a.value=t.value},b=k(()=>{var e,t;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"",align:"right"}],rows:(t=(e=g.value)==null?void 0:e.map(({apiKey:o,member:n})=>{var c;return{key:o.id,cells:[{type:"text",text:o.name},{type:"text",text:P(o.createdAt)},{type:"text",text:(c=n==null?void 0:n.email)!=null?c:"Unknown"},{type:"actions",actions:[{label:"Delete",icon:D,dangerous:!0,onClick:async()=>{await p.delete(s,o.id),u()}}]}]}}))!=null?t:[]}});return(e,t)=>(v(),x(C,null,[i(j,{"entity-name":"API key","create-button-text":"Create API Key",loading:l(f),title:"API Keys",description:"API Keys are used to deploy your app from the local editor.","empty-title":"No API keys here yet",table:b.value,fields:m,onCreate:I},null,8,["loading","table"]),i(l(V),{open:!!a.value,title:"Api key generated",onCancel:t[0]||(t[0]=o=>a.value=null)},{footer:d(()=>[]),default:d(()=>[i(l(B),null,{default:d(()=>[y("Your API key was successfully generated. Use this code to login on your local development environment or deploy using CI")]),_:1}),i(l(K),{code:"",copyable:""},{default:d(()=>[y(h(a.value),1)]),_:1})]),_:1},8,["open"])],64))}});export{de as default};
//# sourceMappingURL=ApiKeys.3d900e08.js.map
