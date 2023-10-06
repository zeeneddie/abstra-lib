import{d as _,ez as w,J as h,b as k,c as O,w as d,f as c,u as C}from"./outputWidgets.b43a489b.js";import{e as x,b as I}from"./icons.de9af46a.js";import{a as v}from"./asyncComputed.a42e75bb.js";import"./console.bbd86620.js";import{O as p}from"./organization.9d0e88fc.js";import"./index.d989c562.js";import{_ as D}from"./Navbar.vue_vue_type_script_setup_true_lang.19db828d.js";import{_ as A}from"./CrudView.vue_vue_type_script_setup_true_lang.85d5e2a7.js";import{B}from"./BaseLayout.87d1e05b.js";import{a as N}from"./ant-design.dc7acb1e.js";import"./index.42b92ee8.js";import"./Form.1797df89.js";import"./Title.47040052.js";import"./CollapsePanel.3e5384f9.js";import"./index.523f4a12.js";import"./index.65dea612.js";import"./index.9c88be1a.js";import"./dayjs.caeff4fe.js";import"./index.0279b5ff.js";import"./index.956893d2.js";import"./TabPane.b49c19a0.js";import"./index.0887e3a5.js";import"./index.a775b9cf.js";import"./index.e641ddba.js";import"./index.479accfd.js";import"./index.9367a16c.js";import"./index.8df4e710.js";import"./index.2fc0be8f.js";import"./index.8a60ee51.js";import"./index.85f24c29.js";import"./gateway.38461683.js";import"./activeRecord.2bc5cc59.js";import"./pubsub.6fd47a9d.js";import"./logo.084e5d7c.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[i]="1611d20d-d868-41ae-8623-166ff57de6e3",a._sentryDebugIdIdentifier="sentry-dbid-1611d20d-d868-41ae-8623-166ff57de6e3")}catch{}})();const lt=_({__name:"Organizations",setup(a){const i=[{label:"My organizations",path:"/organizations"}],n=[{key:"name",label:"Organization Name"}],l=w(),{loading:u,result:r,refetch:f}=v(()=>p.list()),s=({key:t})=>{l.push({name:"organization",params:{organizationId:t}})},g=async t=>{const e=await p.create(t.name);s({key:e.id})},y=async({key:t})=>{var o,m;await N("Are you sure you want to delete this organization?")&&(await((m=(o=r.value)==null?void 0:o.find(z=>z.id===t))==null?void 0:m.delete()),f())},b=h(()=>{var t,e;return{columns:[{name:"Organization Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(e=(t=r.value)==null?void 0:t.map(o=>({key:o.id,cells:[{text:o.name,link:`/organizations/${encodeURIComponent(o.id)}`},{text:o.id},{text:"",actions:[{icon:x,label:"Edit Organization",onClick:s},{icon:I,label:"Delete",onClick:y,dangerous:!0}]}]})))!=null?e:[]}});return(t,e)=>(k(),O(B,null,{navbar:d(()=>[c(D,{breadcrumb:i})]),content:d(()=>[c(A,{"entity-name":"organization",loading:C(u),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:b.value,fields:n,onCreate:g},null,8,["loading","table"])]),_:1}))}});export{lt as default};
//# sourceMappingURL=Organizations.c4d07980.js.map
