import{d as _,eA as I,r as N,G as x,b,ev as A,f as o,w as r,u as s,bq as h,c as F,bH as R,ex as B}from"./outputWidgets.1f60b591.js";import{e as D,u as M,F as $}from"./icons.eb253a9e.js";import{a as V}from"./asyncComputed.5c0bcfee.js";import"./authorManager.a59a7ffc.js";import"./index.608a6576.js";import{O as l}from"./organization.0c2cad8a.js";import{_ as j}from"./Navbar.vue_vue_type_script_setup_true_lang.a3142148.js";import{C as E}from"./CrudView.4f1130fa.js";import{B as G}from"./BaseLayout.519facdd.js";import{a as L}from"./ant-design.e3c84990.js";import{A as U}from"./FormItem.1c776ffc.js";import{F as q}from"./Form.f66078b6.js";import{M as H}from"./Modal.c04ab4c2.js";import"./index.cf4c23b9.js";import"./record.e9f6d4ad.js";import"./pubsub.28572c8c.js";import"./logo.084e5d7c.js";import"./Text.c621cf15.js";import"./index.cc64dbfa.js";import"./Title.5776a0ac.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.f6d997e7.js";import"./router.3223349e.js";import"./index.c3d530b3.js";import"./url.dea55086.js";import"./index.b6fb14dc.js";import"./index.68e1bd0e.js";import"./index.34dd3a87.js";import"./index.31f970db.js";import"./hasIn.bc3a1948.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[m]="1b417806-ba09-4600-850a-5e19e88b3117",i._sentryDebugIdIdentifier="sentry-dbid-1b417806-ba09-4600-850a-5e19e88b3117")}catch{}})();const ve=_({__name:"Organizations",setup(i){const m=[{label:"My organizations",path:"/organizations"}],u=[{key:"name",label:"Organization Name"}],y=I(),{loading:z,result:d,refetch:c}=V(()=>l.list()),p=({key:e})=>{y.push({name:"organization",params:{organizationId:e}})},n=N({state:"idle"});function v(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function g(e){if(n.value.state==="renaming"&&e){const{organizationId:a,newName:t}=n.value;await l.rename(a,t),c()}n.value={state:"idle"}}const w=async e=>{const a=await l.create(e.name);p({key:a.id})},k=async({key:e})=>{var t,f;await L("Are you sure you want to delete this organization?")&&(await((f=(t=d.value)==null?void 0:t.find(O=>O.id===e))==null?void 0:f.delete()),c())},C=x(()=>{var e,a;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"Actions",align:"right"}],rows:(a=(e=d.value)==null?void 0:e.map(t=>({key:t.id,cells:[{text:t.name,link:`/organizations/${encodeURIComponent(t.id)}`},{text:t.id},{text:"",actions:[{icon:D,label:"Go to projects",onClick:p},{icon:M,label:"Rename",onClick:()=>v(t)},{icon:$,label:"Delete",onClick:k,dangerous:!0}]}]})))!=null?a:[]}});return(e,a)=>(b(),A(h,null,[o(G,null,{navbar:r(()=>[o(j,{breadcrumb:m})]),content:r(()=>[o(E,{"entity-name":"organization",loading:s(z),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:C.value,fields:u,onCreate:w},null,8,["loading","table"])]),_:1}),o(s(H),{open:n.value.state==="renaming",title:"Rename organization",onCancel:a[1]||(a[1]=t=>g(!1)),onOk:a[2]||(a[2]=t=>g(!0))},{default:r(()=>[n.value.state==="renaming"?(b(),F(s(q),{key:0,layout:"vertical"},{default:r(()=>[o(s(U),{label:"New name"},{default:r(()=>[o(s(R),{value:n.value.newName,"onUpdate:value":a[0]||(a[0]=t=>n.value.newName=t)},null,8,["value"])]),_:1})]),_:1})):B("",!0)]),_:1},8,["open"])],64))}});export{ve as default};
//# sourceMappingURL=Organizations.90d69c5d.js.map
