import{d as _,ez as w,J as h,b as k,c as C,w as m,f as d,u as O}from"./outputWidgets.9b7c29ed.js";import{e as x,b as I}from"./icons.7c250a15.js";import{a as v}from"./asyncComputed.6a414bed.js";import"./router.a8553211.js";import{O as l}from"./organization.925adce8.js";import"./index.3302f04a.js";import{_ as D}from"./Navbar.vue_vue_type_script_setup_true_lang.3d957fb4.js";import{C as A}from"./CrudView.73bf57c7.js";import{B}from"./BaseLayout.0edd5899.js";import{a as N}from"./ant-design.9b0f163e.js";import"./Title.55bc3e25.js";import"./index.31be9da9.js";import"./gateway.3821173b.js";import"./activeRecord.264ba54c.js";import"./pubsub.f1df5000.js";import"./logo.084e5d7c.js";import"./index.ddedd1b8.js";import"./index.316bc1ac.js";import"./index.530f7175.js";import"./Form.77e50956.js";import"./url.c61c9940.js";import"./index.5695780b.js";import"./index.d8ed1958.js";import"./index.817f3ac7.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[n]="2cac4816-ba53-45cf-ad0e-d0ac156c3320",o._sentryDebugIdIdentifier="sentry-dbid-2cac4816-ba53-45cf-ad0e-d0ac156c3320")}catch{}})();const et=_({__name:"Organizations",setup(o){const n=[{label:"My organizations",path:"/organizations"}],i=[{key:"name",label:"Organization Name"}],p=w(),{loading:u,result:r,refetch:g}=v(()=>l.list()),s=({key:t})=>{p.push({name:"organization",params:{organizationId:t}})},f=async t=>{const e=await l.create(t.name);s({key:e.id})},y=async({key:t})=>{var a,c;await N("Are you sure you want to delete this organization?")&&(await((c=(a=r.value)==null?void 0:a.find(z=>z.id===t))==null?void 0:c.delete()),g())},b=h(()=>{var t,e;return{columns:[{name:"Organization Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(e=(t=r.value)==null?void 0:t.map(a=>({key:a.id,cells:[{text:a.name,link:`/organizations/${encodeURIComponent(a.id)}`},{text:a.id},{text:"",actions:[{icon:x,label:"Edit Organization",onClick:s},{icon:I,label:"Delete",onClick:y,dangerous:!0}]}]})))!=null?e:[]}});return(t,e)=>(k(),C(B,null,{navbar:m(()=>[d(D,{breadcrumb:n})]),content:m(()=>[d(A,{"entity-name":"organization",loading:O(u),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:b.value,fields:i,onCreate:f},null,8,["loading","table"])]),_:1}))}});export{et as default};
//# sourceMappingURL=Organizations.18b32555.js.map
