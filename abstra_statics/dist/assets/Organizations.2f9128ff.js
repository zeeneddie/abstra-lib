import{d as _,ey as w,H as h,b as k,c as C,w as m,f as d,u as O}from"./outputWidgets.1cf78234.js";import{e as x,b as I}from"./icons.ba4d43de.js";import{a as v}from"./asyncComputed.513601fc.js";import"./router.4077f51e.js";import{O as l}from"./organization.62f33bc8.js";import"./columns.301c6458.js";import{_ as D}from"./Navbar.vue_vue_type_script_setup_true_lang.8ea9895e.js";import{C as A}from"./CrudView.9f0a1020.js";import{B}from"./BaseLayout.eb5e397f.js";import{a as N}from"./ant-design.b7f18845.js";import"./Title.a8b8fdd6.js";import"./index.748edabf.js";import"./gateway.39b6f9d7.js";import"./activeRecord.1ee4e98a.js";import"./pubsub.a66a61fd.js";import"./index.f4ac7424.js";import"./logo.084e5d7c.js";import"./index.a7df5fa7.js";import"./index.67188546.js";import"./index.c833051c.js";import"./Form.5fb25f40.js";import"./url.18ee0e18.js";import"./index.427c7dc5.js";import"./index.4f30f3fe.js";import"./index.960f4655.js";import"./index.7a53699a.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="086f5fb5-551c-4451-9d2e-cfc54503787c",a._sentryDebugIdIdentifier="sentry-dbid-086f5fb5-551c-4451-9d2e-cfc54503787c")}catch{}})();const nt=_({__name:"Organizations",setup(a){const n=[{label:"My organizations",path:"/organizations"}],i=[{key:"name",label:"Organization Name"}],p=w(),{loading:u,result:r,refetch:f}=v(()=>l.list()),s=({key:t})=>{p.push({name:"organization",params:{organizationId:t}})},g=async t=>{const o=await l.create(t.name);s({key:o.id})},y=async({key:t})=>{var e,c;await N("Are you sure you want to delete this organization?")&&(await((c=(e=r.value)==null?void 0:e.find(z=>z.id===t))==null?void 0:c.delete()),f())},b=h(()=>{var t,o;return{columns:[{name:"Organization Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(o=(t=r.value)==null?void 0:t.map(e=>({key:e.id,cells:[{text:e.name,link:`/organizations/${encodeURIComponent(e.id)}`},{text:e.id},{text:"",actions:[{icon:x,label:"Edit Organization",onClick:s},{icon:I,label:"Delete",onClick:y,dangerous:!0}]}]})))!=null?o:[]}});return(t,o)=>(k(),C(B,null,{navbar:m(()=>[d(D,{breadcrumb:n})]),content:m(()=>[d(A,{"entity-name":"organization",loading:O(u),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:b.value,fields:i,onCreate:g},null,8,["loading","table"])]),_:1}))}});export{nt as default};
//# sourceMappingURL=Organizations.2f9128ff.js.map
