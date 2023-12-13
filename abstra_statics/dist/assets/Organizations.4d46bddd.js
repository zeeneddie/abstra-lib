import{d as _,ez as w,G as h,b as k,c as C,w as d,f as m,u as O}from"./outputWidgets.6d6b4a37.js";import{e as x,d as I}from"./icons.28d0d847.js";import{a as v}from"./asyncComputed.17a6198d.js";import"./router.4e9df257.js";import"./index.2cafcd9c.js";import{O as l}from"./organization.f89e67cc.js";import{_ as D}from"./Navbar.vue_vue_type_script_setup_true_lang.ec54cfd7.js";import{C as A}from"./CrudView.230a173f.js";import{B}from"./BaseLayout.5a0efef2.js";import{a as N}from"./ant-design.c99b7781.js";import"./Form.1ff54ed5.js";import"./index.72c317ca.js";import"./record.7835c07e.js";import"./pubsub.7d377b25.js";import"./gateway.7a58b0c8.js";import"./logo.084e5d7c.js";import"./index.838a4574.js";import"./Title.b41b4f96.js";import"./index.0e216cc8.js";import"./url.b5fbb423.js";import"./index.9eddb8ae.js";import"./index.6f6e8ffd.js";import"./index.f2a53bdb.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[n]="d9893920-d4f6-421b-9d38-7aaac3cd84f3",o._sentryDebugIdIdentifier="sentry-dbid-d9893920-d4f6-421b-9d38-7aaac3cd84f3")}catch{}})();const at=_({__name:"Organizations",setup(o){const n=[{label:"My organizations",path:"/organizations"}],i=[{key:"name",label:"Organization Name"}],p=w(),{loading:u,result:r,refetch:f}=v(()=>l.list()),s=({key:t})=>{p.push({name:"organization",params:{organizationId:t}})},g=async t=>{const e=await l.create(t.name);s({key:e.id})},y=async({key:t})=>{var a,c;await N("Are you sure you want to delete this organization?")&&(await((c=(a=r.value)==null?void 0:a.find(z=>z.id===t))==null?void 0:c.delete()),f())},b=h(()=>{var t,e;return{columns:[{name:"Organization Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(e=(t=r.value)==null?void 0:t.map(a=>({key:a.id,cells:[{text:a.name,link:`/organizations/${encodeURIComponent(a.id)}`},{text:a.id},{text:"",actions:[{icon:x,label:"Edit Organization",onClick:s},{icon:I,label:"Delete",onClick:y,dangerous:!0}]}]})))!=null?e:[]}});return(t,e)=>(k(),C(B,null,{navbar:d(()=>[m(D,{breadcrumb:n})]),content:d(()=>[m(A,{"entity-name":"organization",loading:O(u),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:b.value,fields:i,onCreate:g},null,8,["loading","table"])]),_:1}))}});export{at as default};
//# sourceMappingURL=Organizations.4d46bddd.js.map