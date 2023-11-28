import{d as _,eA as w,G as h,b as k,c as C,w as m,f as l,u as O}from"./outputWidgets.e60ab380.js";import{e as x,d as I}from"./icons.6c1915db.js";import{a as v}from"./asyncComputed.7ba647bd.js";import"./router.0cf2e70d.js";import{O as d}from"./organization.eaba6d7b.js";import"./columns.4c9d4799.js";import{_ as A}from"./Navbar.vue_vue_type_script_setup_true_lang.e7b6f8be.js";import{C as D}from"./CrudView.a4f4d47c.js";import{B}from"./BaseLayout.48abb686.js";import{a as N}from"./ant-design.dc5fef0a.js";import"./Base.0638c3f7.js";import"./transButton.1b3f66c8.js";import"./Text.742cb8ec.js";import"./Title.666a14b1.js";import"./index.1462457d.js";import"./gateway.990f0877.js";import"./record.04c6d5a0.js";import"./pubsub.e6733ea4.js";import"./logo.084e5d7c.js";import"./index.6109456b.js";import"./url.7bd60adc.js";import"./index.ed25df4f.js";import"./index.aaa1fe24.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[n]="329cfac7-3ae9-4261-9666-fc102a901f40",o._sentryDebugIdIdentifier="sentry-dbid-329cfac7-3ae9-4261-9666-fc102a901f40")}catch{}})();const et=_({__name:"Organizations",setup(o){const n=[{label:"My organizations",path:"/organizations"}],i=[{key:"name",label:"Organization Name"}],p=w(),{loading:u,result:r,refetch:f}=v(()=>d.list()),s=({key:t})=>{p.push({name:"organization",params:{organizationId:t}})},g=async t=>{const a=await d.create(t.name);s({key:a.id})},y=async({key:t})=>{var e,c;await N("Are you sure you want to delete this organization?")&&(await((c=(e=r.value)==null?void 0:e.find(z=>z.id===t))==null?void 0:c.delete()),f())},b=h(()=>{var t,a;return{columns:[{name:"Organization Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(a=(t=r.value)==null?void 0:t.map(e=>({key:e.id,cells:[{text:e.name,link:`/organizations/${encodeURIComponent(e.id)}`},{text:e.id},{text:"",actions:[{icon:x,label:"Edit Organization",onClick:s},{icon:I,label:"Delete",onClick:y,dangerous:!0}]}]})))!=null?a:[]}});return(t,a)=>(k(),C(B,null,{navbar:m(()=>[l(A,{breadcrumb:n})]),content:m(()=>[l(D,{"entity-name":"organization",loading:O(u),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:b.value,fields:i,onCreate:g},null,8,["loading","table"])]),_:1}))}});export{et as default};
//# sourceMappingURL=Organizations.2d8a53a4.js.map
