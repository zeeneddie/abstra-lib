import{d as _,ez as w,J as h,b as k,c as C,w as c,f as d,u as O}from"./outputWidgets.50a32881.js";import{e as x,b as I}from"./icons.21c36b2d.js";import{a as v}from"./asyncComputed.b13ea8c8.js";import"./router.05c8f462.js";import{O as l}from"./organization.51ac1db5.js";import"./columns.87749077.js";import{_ as D}from"./Navbar.vue_vue_type_script_setup_true_lang.148a2b72.js";import{C as A}from"./CrudView.2bb96676.js";import{B}from"./BaseLayout.4ea40a14.js";import{a as N}from"./ant-design.c3edd57c.js";import"./Title.6ed5196f.js";import"./index.c6d42cf5.js";import"./gateway.557f1ef0.js";import"./activeRecord.a6d1caaf.js";import"./pubsub.a612a4ec.js";import"./index.f4ac7424.js";import"./logo.084e5d7c.js";import"./index.afd55904.js";import"./index.9b89ff38.js";import"./index.c2109f24.js";import"./Form.eef121ef.js";import"./url.543483ec.js";import"./index.e0c93905.js";import"./index.30f77a12.js";import"./index.0fb677b8.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[n]="9588775b-8b50-43df-bdca-ac98978f6eeb",o._sentryDebugIdIdentifier="sentry-dbid-9588775b-8b50-43df-bdca-ac98978f6eeb")}catch{}})();const ot=_({__name:"Organizations",setup(o){const n=[{label:"My organizations",path:"/organizations"}],i=[{key:"name",label:"Organization Name"}],p=w(),{loading:u,result:r,refetch:f}=v(()=>l.list()),s=({key:t})=>{p.push({name:"organization",params:{organizationId:t}})},g=async t=>{const a=await l.create(t.name);s({key:a.id})},b=async({key:t})=>{var e,m;await N("Are you sure you want to delete this organization?")&&(await((m=(e=r.value)==null?void 0:e.find(z=>z.id===t))==null?void 0:m.delete()),f())},y=h(()=>{var t,a;return{columns:[{name:"Organization Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(a=(t=r.value)==null?void 0:t.map(e=>({key:e.id,cells:[{text:e.name,link:`/organizations/${encodeURIComponent(e.id)}`},{text:e.id},{text:"",actions:[{icon:x,label:"Edit Organization",onClick:s},{icon:I,label:"Delete",onClick:b,dangerous:!0}]}]})))!=null?a:[]}});return(t,a)=>(k(),C(B,null,{navbar:c(()=>[d(D,{breadcrumb:n})]),content:c(()=>[d(A,{"entity-name":"organization",loading:O(u),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:y.value,fields:i,onCreate:g},null,8,["loading","table"])]),_:1}))}});export{ot as default};
//# sourceMappingURL=Organizations.6efaa88d.js.map
