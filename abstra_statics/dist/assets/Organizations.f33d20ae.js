import{d as _,eA as I,r as N,G as x,b,ev as A,f as o,w as r,u as s,bq as h,c as F,bH as R,ex as B}from"./outputWidgets.470cd725.js";import{e as D,u as M,F as $}from"./icons.732210f6.js";import{a as V}from"./asyncComputed.72d91ef9.js";import"./authorManager.176ccd94.js";import"./index.d44cde0e.js";import{O as l}from"./organization.76eeda0f.js";import{_ as j}from"./Navbar.vue_vue_type_script_setup_true_lang.e9e0ed0d.js";import{C as E}from"./CrudView.e08250db.js";import{B as G}from"./BaseLayout.2265c0ec.js";import{a as L}from"./ant-design.e0dca437.js";import{A as U}from"./FormItem.bd89e955.js";import{F as q}from"./Form.bf13abb6.js";import{M as H}from"./Title.edbac04b.js";import"./index.cf4c23b9.js";import"./record.19f593f6.js";import"./pubsub.bb7b27fb.js";import"./gateway.6d700df7.js";import"./logo.084e5d7c.js";import"./Text.fbb768c7.js";import"./index.2b09b2c1.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.702cb95e.js";import"./router.bb51d819.js";import"./index.672f7932.js";import"./url.28fafd73.js";import"./index.e48b3db7.js";import"./index.2d4e9800.js";import"./index.52ab7ae6.js";import"./index.ea4d1d9c.js";import"./hasIn.6bd3aa8a.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[m]="5643118c-96b5-4198-bf38-ed89f6ea28c4",i._sentryDebugIdIdentifier="sentry-dbid-5643118c-96b5-4198-bf38-ed89f6ea28c4")}catch{}})();const ve=_({__name:"Organizations",setup(i){const m=[{label:"My organizations",path:"/organizations"}],u=[{key:"name",label:"Organization Name"}],y=I(),{loading:z,result:d,refetch:c}=V(()=>l.list()),p=({key:e})=>{y.push({name:"organization",params:{organizationId:e}})},n=N({state:"idle"});function v(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function f(e){if(n.value.state==="renaming"&&e){const{organizationId:a,newName:t}=n.value;await l.rename(a,t),c()}n.value={state:"idle"}}const w=async e=>{const a=await l.create(e.name);p({key:a.id})},k=async({key:e})=>{var t,g;await L("Are you sure you want to delete this organization?")&&(await((g=(t=d.value)==null?void 0:t.find(O=>O.id===e))==null?void 0:g.delete()),c())},C=x(()=>{var e,a;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"Actions",align:"right"}],rows:(a=(e=d.value)==null?void 0:e.map(t=>({key:t.id,cells:[{text:t.name,link:`/organizations/${encodeURIComponent(t.id)}`},{text:t.id},{text:"",actions:[{icon:D,label:"Go to projects",onClick:p},{icon:M,label:"Rename",onClick:()=>v(t)},{icon:$,label:"Delete",onClick:k,dangerous:!0}]}]})))!=null?a:[]}});return(e,a)=>(b(),A(h,null,[o(G,null,{navbar:r(()=>[o(j,{breadcrumb:m})]),content:r(()=>[o(E,{"entity-name":"organization",loading:s(z),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:C.value,fields:u,onCreate:w},null,8,["loading","table"])]),_:1}),o(s(H),{open:n.value.state==="renaming",title:"Rename organization",onCancel:a[1]||(a[1]=t=>f(!1)),onOk:a[2]||(a[2]=t=>f(!0))},{default:r(()=>[n.value.state==="renaming"?(b(),F(s(q),{key:0,layout:"vertical"},{default:r(()=>[o(s(U),{label:"New name"},{default:r(()=>[o(s(R),{value:n.value.newName,"onUpdate:value":a[0]||(a[0]=t=>n.value.newName=t)},null,8,["value"])]),_:1})]),_:1})):B("",!0)]),_:1},8,["open"])],64))}});export{ve as default};
//# sourceMappingURL=Organizations.f33d20ae.js.map
