import{d as _,ey as w,G as h,b as k,c as C,w as c,f as d,u as O}from"./outputWidgets.9d44d9f3.js";import{e as x,b as I}from"./icons.6774e95a.js";import{a as v}from"./asyncComputed.99132b68.js";import"./router.b1f71dc3.js";import{O as l}from"./organization.330782d9.js";import"./columns.9f935597.js";import{_ as D}from"./Navbar.vue_vue_type_script_setup_true_lang.29e5f138.js";import{C as A}from"./CrudView.533819ab.js";import{B}from"./BaseLayout.d36a8dac.js";import{a as N}from"./ant-design.c83e5e33.js";import"./Form.97529076.js";import"./Title.2f009ad9.js";import"./transButton.41dbfda3.js";import"./Text.0ad03b29.js";import"./index.a9ce4fb3.js";import"./gateway.aff02c91.js";import"./activeRecord.cde63aa9.js";import"./pubsub.36fbfdaf.js";import"./index.cf4c23b9.js";import"./logo.084e5d7c.js";import"./index.a18b3bba.js";import"./index.6923ee77.js";import"./url.2bddec37.js";import"./index.ed7c13f2.js";import"./index.6cc0b47a.js";import"./index.eaa93dcb.js";import"./index.0eda3d6a.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="1ff30a48-0e1b-44d1-b066-e628cb5527f1",a._sentryDebugIdIdentifier="sentry-dbid-1ff30a48-0e1b-44d1-b066-e628cb5527f1")}catch{}})();const it=_({__name:"Organizations",setup(a){const n=[{label:"My organizations",path:"/organizations"}],i=[{key:"name",label:"Organization Name"}],p=w(),{loading:u,result:r,refetch:f}=v(()=>l.list()),s=({key:t})=>{p.push({name:"organization",params:{organizationId:t}})},g=async t=>{const o=await l.create(t.name);s({key:o.id})},b=async({key:t})=>{var e,m;await N("Are you sure you want to delete this organization?")&&(await((m=(e=r.value)==null?void 0:e.find(z=>z.id===t))==null?void 0:m.delete()),f())},y=h(()=>{var t,o;return{columns:[{name:"Organization Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(o=(t=r.value)==null?void 0:t.map(e=>({key:e.id,cells:[{text:e.name,link:`/organizations/${encodeURIComponent(e.id)}`},{text:e.id},{text:"",actions:[{icon:x,label:"Edit Organization",onClick:s},{icon:I,label:"Delete",onClick:b,dangerous:!0}]}]})))!=null?o:[]}});return(t,o)=>(k(),C(B,null,{navbar:c(()=>[d(D,{breadcrumb:n})]),content:c(()=>[d(A,{"entity-name":"organization",loading:O(u),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:y.value,fields:i,onCreate:g},null,8,["loading","table"])]),_:1}))}});export{it as default};
//# sourceMappingURL=Organizations.81ae4452.js.map
