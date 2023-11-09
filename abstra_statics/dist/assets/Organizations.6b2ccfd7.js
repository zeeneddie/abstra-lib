import{d as _,ey as w,H as h,b as k,c as C,w as c,f as d,u as O}from"./outputWidgets.46ba2efb.js";import{e as x,b as I}from"./icons.2b0d9965.js";import{a as v}from"./asyncComputed.57c65b67.js";import"./router.76b0f711.js";import{O as l}from"./organization.951f781a.js";import"./columns.8cdd098e.js";import{_ as D}from"./Navbar.vue_vue_type_script_setup_true_lang.3d71e682.js";import{C as A}from"./CrudView.c45e22e3.js";import{B}from"./BaseLayout.13af3b63.js";import{a as N}from"./ant-design.44571376.js";import"./Form.6a909b48.js";import"./Title.bdba5bb9.js";import"./transButton.2cce5150.js";import"./Text.1ef25f97.js";import"./index.564994de.js";import"./gateway.c36bd3f7.js";import"./activeRecord.e90d1fd3.js";import"./pubsub.c955c307.js";import"./index.cf4c23b9.js";import"./logo.084e5d7c.js";import"./index.f740f6cd.js";import"./index.455e587b.js";import"./url.bfb405d5.js";import"./index.e4218be1.js";import"./index.c47cf724.js";import"./index.c5a21398.js";import"./index.84469a00.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="c8e22e06-1e94-4cc1-9b69-943d000d3327",a._sentryDebugIdIdentifier="sentry-dbid-c8e22e06-1e94-4cc1-9b69-943d000d3327")}catch{}})();const it=_({__name:"Organizations",setup(a){const n=[{label:"My organizations",path:"/organizations"}],i=[{key:"name",label:"Organization Name"}],p=w(),{loading:u,result:r,refetch:g}=v(()=>l.list()),s=({key:t})=>{p.push({name:"organization",params:{organizationId:t}})},f=async t=>{const o=await l.create(t.name);s({key:o.id})},y=async({key:t})=>{var e,m;await N("Are you sure you want to delete this organization?")&&(await((m=(e=r.value)==null?void 0:e.find(z=>z.id===t))==null?void 0:m.delete()),g())},b=h(()=>{var t,o;return{columns:[{name:"Organization Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(o=(t=r.value)==null?void 0:t.map(e=>({key:e.id,cells:[{text:e.name,link:`/organizations/${encodeURIComponent(e.id)}`},{text:e.id},{text:"",actions:[{icon:x,label:"Edit Organization",onClick:s},{icon:I,label:"Delete",onClick:y,dangerous:!0}]}]})))!=null?o:[]}});return(t,o)=>(k(),C(B,null,{navbar:c(()=>[d(D,{breadcrumb:n})]),content:c(()=>[d(A,{"entity-name":"organization",loading:O(u),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:b.value,fields:i,onCreate:f},null,8,["loading","table"])]),_:1}))}});export{it as default};
//# sourceMappingURL=Organizations.6b2ccfd7.js.map
