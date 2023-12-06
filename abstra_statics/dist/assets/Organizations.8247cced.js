import{d as _,eA as w,G as h,b as k,c as C,w as c,f as d,u as O}from"./outputWidgets.57f0182b.js";import{e as x,d as I}from"./icons.cd451053.js";import{a as v}from"./asyncComputed.98eb0dfd.js";import"./router.b9fd36e0.js";import"./index.7e8e63af.js";import{O as l}from"./organization.ff380fd9.js";import{_ as A}from"./Navbar.vue_vue_type_script_setup_true_lang.0228f487.js";import{C as D}from"./CrudView.bb23c007.js";import{B}from"./BaseLayout.7bd656ca.js";import{a as N}from"./ant-design.7d714b40.js";import"./Base.6612d7cc.js";import"./transButton.02c749bc.js";import"./Text.2d2c95b1.js";import"./Title.5ea059c1.js";import"./index.55e4bda7.js";import"./record.a83db148.js";import"./pubsub.c5d32d7d.js";import"./gateway.c56e189d.js";import"./logo.084e5d7c.js";import"./index.2cb78a35.js";import"./url.ae3be5f4.js";import"./index.290f3016.js";import"./index.d548e4bd.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[n]="6aea8710-f0a2-43a9-b038-fbfd800d2870",o._sentryDebugIdIdentifier="sentry-dbid-6aea8710-f0a2-43a9-b038-fbfd800d2870")}catch{}})();const at=_({__name:"Organizations",setup(o){const n=[{label:"My organizations",path:"/organizations"}],i=[{key:"name",label:"Organization Name"}],p=w(),{loading:u,result:r,refetch:f}=v(()=>l.list()),s=({key:t})=>{p.push({name:"organization",params:{organizationId:t}})},g=async t=>{const e=await l.create(t.name);s({key:e.id})},y=async({key:t})=>{var a,m;await N("Are you sure you want to delete this organization?")&&(await((m=(a=r.value)==null?void 0:a.find(z=>z.id===t))==null?void 0:m.delete()),f())},b=h(()=>{var t,e;return{columns:[{name:"Organization Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(e=(t=r.value)==null?void 0:t.map(a=>({key:a.id,cells:[{text:a.name,link:`/organizations/${encodeURIComponent(a.id)}`},{text:a.id},{text:"",actions:[{icon:x,label:"Edit Organization",onClick:s},{icon:I,label:"Delete",onClick:y,dangerous:!0}]}]})))!=null?e:[]}});return(t,e)=>(k(),C(B,null,{navbar:c(()=>[d(A,{breadcrumb:n})]),content:c(()=>[d(D,{"entity-name":"organization",loading:O(u),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:b.value,fields:i,onCreate:g},null,8,["loading","table"])]),_:1}))}});export{at as default};
//# sourceMappingURL=Organizations.8247cced.js.map
