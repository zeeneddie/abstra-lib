import{d as _,eA as w,G as h,b as k,c as C,w as c,f as d,u as O}from"./outputWidgets.7cbc6f77.js";import{e as x,d as I}from"./icons.b2f60bf4.js";import{a as v}from"./asyncComputed.39c1f5df.js";import"./router.f8ad7078.js";import"./index.8db6553b.js";import{O as l}from"./organization.33172c0f.js";import{_ as A}from"./Navbar.vue_vue_type_script_setup_true_lang.be1aa390.js";import{C as D}from"./CrudView.6a305419.js";import{B}from"./BaseLayout.ae1422c7.js";import{a as N}from"./ant-design.674d3504.js";import"./Base.d6cb1d5c.js";import"./transButton.f72eee0f.js";import"./Text.11171602.js";import"./Title.7e604992.js";import"./index.ace558e0.js";import"./record.c15c1b24.js";import"./pubsub.df72d2b0.js";import"./gateway.1ce3e4cc.js";import"./logo.084e5d7c.js";import"./index.efb97e85.js";import"./url.f68de98e.js";import"./index.2ab496bb.js";import"./index.54806f37.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="8908577d-f74e-4534-9481-f77bf05c3915",a._sentryDebugIdIdentifier="sentry-dbid-8908577d-f74e-4534-9481-f77bf05c3915")}catch{}})();const et=_({__name:"Organizations",setup(a){const n=[{label:"My organizations",path:"/organizations"}],i=[{key:"name",label:"Organization Name"}],p=w(),{loading:u,result:r,refetch:f}=v(()=>l.list()),s=({key:t})=>{p.push({name:"organization",params:{organizationId:t}})},g=async t=>{const o=await l.create(t.name);s({key:o.id})},y=async({key:t})=>{var e,m;await N("Are you sure you want to delete this organization?")&&(await((m=(e=r.value)==null?void 0:e.find(z=>z.id===t))==null?void 0:m.delete()),f())},b=h(()=>{var t,o;return{columns:[{name:"Organization Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(o=(t=r.value)==null?void 0:t.map(e=>({key:e.id,cells:[{text:e.name,link:`/organizations/${encodeURIComponent(e.id)}`},{text:e.id},{text:"",actions:[{icon:x,label:"Edit Organization",onClick:s},{icon:I,label:"Delete",onClick:y,dangerous:!0}]}]})))!=null?o:[]}});return(t,o)=>(k(),C(B,null,{navbar:c(()=>[d(A,{breadcrumb:n})]),content:c(()=>[d(D,{"entity-name":"organization",loading:O(u),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:b.value,fields:i,onCreate:g},null,8,["loading","table"])]),_:1}))}});export{et as default};
//# sourceMappingURL=Organizations.062b637a.js.map
