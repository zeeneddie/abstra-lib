import{d as _,eA as w,G as C,b as h,c as k,w as c,f as d,u as O}from"./outputWidgets.e04018d6.js";import{v as x,C as I}from"./icons.1319a4cf.js";import{a as v}from"./asyncComputed.23285845.js";import"./authorManager.36b9c592.js";import"./index.6b6d28d1.js";import{O as l}from"./organization.c6194b1b.js";import{_ as A}from"./Navbar.vue_vue_type_script_setup_true_lang.01074c9f.js";import{C as D}from"./CrudView.5dfedc3b.js";import{B}from"./BaseLayout.124c7b4d.js";import{a as N}from"./ant-design.b6e6d5e6.js";import"./index.cf4c23b9.js";import"./record.3dcaee8d.js";import"./pubsub.273e94b2.js";import"./gateway.a8335306.js";import"./logo.084e5d7c.js";import"./Text.cb37dd29.js";import"./Title.873659e3.js";import"./index.281066d5.js";import"./FormItem.e4984bde.js";import"./hasIn.ca61761c.js";import"./Form.ef695b37.js";import"./Modal.0805ccf5.js";import"./router.070ceed0.js";import"./index.1cb9195f.js";import"./url.39460579.js";import"./index.841b47e6.js";import"./index.30fa266a.js";import"./index.30977851.js";import"./index.a993d626.js";import"./index.88b45e8b.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="51b56cdb-42c9-4682-8376-dd450b3c19de",a._sentryDebugIdIdentifier="sentry-dbid-51b56cdb-42c9-4682-8376-dd450b3c19de")}catch{}})();const mt=_({__name:"Organizations",setup(a){const n=[{label:"My organizations",path:"/organizations"}],i=[{key:"name",label:"Organization Name"}],p=w(),{loading:u,result:r,refetch:g}=v(()=>l.list()),s=({key:t})=>{p.push({name:"organization",params:{organizationId:t}})},f=async t=>{const e=await l.create(t.name);s({key:e.id})},b=async({key:t})=>{var o,m;await N("Are you sure you want to delete this organization?")&&(await((m=(o=r.value)==null?void 0:o.find(z=>z.id===t))==null?void 0:m.delete()),g())},y=C(()=>{var t,e;return{columns:[{name:"Organization Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(e=(t=r.value)==null?void 0:t.map(o=>({key:o.id,cells:[{text:o.name,link:`/organizations/${encodeURIComponent(o.id)}`},{text:o.id},{text:"",actions:[{icon:x,label:"Edit Organization",onClick:s},{icon:I,label:"Delete",onClick:b,dangerous:!0}]}]})))!=null?e:[]}});return(t,e)=>(h(),k(B,null,{navbar:c(()=>[d(A,{breadcrumb:n})]),content:c(()=>[d(D,{"entity-name":"organization",loading:O(u),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:y.value,fields:i,onCreate:f},null,8,["loading","table"])]),_:1}))}});export{mt as default};
//# sourceMappingURL=Organizations.e988acab.js.map
