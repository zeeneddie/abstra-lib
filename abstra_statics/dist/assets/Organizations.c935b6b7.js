import{d as _,eA as w,G as C,b as h,c as k,w as c,f as l,u as O}from"./outputWidgets.90a37dfb.js";import{v as x,C as I}from"./icons.9cf35040.js";import{a as v}from"./asyncComputed.04259b99.js";import"./authorManager.f2a35532.js";import"./index.c6f2c2d2.js";import{O as p}from"./organization.304abf42.js";import{_ as A}from"./Navbar.vue_vue_type_script_setup_true_lang.c94b5b5c.js";import{C as D}from"./CrudView.19bb4bce.js";import{B}from"./BaseLayout.f1b2811a.js";import{a as N}from"./ant-design.bbce3e22.js";import"./index.cf4c23b9.js";import"./record.ebb65067.js";import"./pubsub.4fea4be7.js";import"./gateway.6f30a6bf.js";import"./logo.084e5d7c.js";import"./Text.215ae4f0.js";import"./Title.b52522ff.js";import"./index.3afa8a3e.js";import"./FormItem.4720b0a3.js";import"./hasIn.1e7661e3.js";import"./Form.f5b3db33.js";import"./Modal.265d309e.js";import"./router.e0403360.js";import"./index.9624bf8d.js";import"./url.c4b5264e.js";import"./index.85b56a97.js";import"./index.f4297c2c.js";import"./index.6d664715.js";import"./index.52c09cf5.js";import"./index.74cde091.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="891687ea-99a8-4ca1-afff-e90be99b8676",a._sentryDebugIdIdentifier="sentry-dbid-891687ea-99a8-4ca1-afff-e90be99b8676")}catch{}})();const mt=_({__name:"Organizations",setup(a){const n=[{label:"My organizations",path:"/organizations"}],i=[{key:"name",label:"Organization Name"}],d=w(),{loading:u,result:r,refetch:f}=v(()=>p.list()),s=({key:t})=>{d.push({name:"organization",params:{organizationId:t}})},g=async t=>{const o=await p.create(t.name);s({key:o.id})},y=async({key:t})=>{var e,m;await N("Are you sure you want to delete this organization?")&&(await((m=(e=r.value)==null?void 0:e.find(z=>z.id===t))==null?void 0:m.delete()),f())},b=C(()=>{var t,o;return{columns:[{name:"Organization Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(o=(t=r.value)==null?void 0:t.map(e=>({key:e.id,cells:[{text:e.name,link:`/organizations/${encodeURIComponent(e.id)}`},{text:e.id},{text:"",actions:[{icon:x,label:"Edit Organization",onClick:s},{icon:I,label:"Delete",onClick:y,dangerous:!0}]}]})))!=null?o:[]}});return(t,o)=>(h(),k(B,null,{navbar:c(()=>[l(A,{breadcrumb:n})]),content:c(()=>[l(D,{"entity-name":"organization",loading:O(u),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:b.value,fields:i,onCreate:g},null,8,["loading","table"])]),_:1}))}});export{mt as default};
//# sourceMappingURL=Organizations.c935b6b7.js.map