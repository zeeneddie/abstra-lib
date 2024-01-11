import{d as _,eA as I,r as N,G as x,b as y,ev as A,f as o,w as r,u as s,bq as h,c as F,bH as R,ex as B}from"./outputWidgets.653c8a73.js";import{e as D,u as M,F as $}from"./icons.a6b15bf7.js";import{a as V}from"./asyncComputed.9f9227e3.js";import"./authorManager.3dac85e8.js";import"./index.8017d516.js";import{O as l}from"./organization.2715d63a.js";import{_ as j}from"./Navbar.vue_vue_type_script_setup_true_lang.9143ae6b.js";import{C as E}from"./CrudView.b695e3cf.js";import{B as G}from"./BaseLayout.097279b1.js";import{a as L}from"./ant-design.98cd6ab7.js";import{A as U}from"./FormItem.ca4bccbe.js";import{F as q}from"./Form.7d91bbcb.js";import{M as H}from"./Title.3966c502.js";import"./index.cf4c23b9.js";import"./record.74db4e46.js";import"./pubsub.96e918cc.js";import"./gateway.cfb6397f.js";import"./logo.084e5d7c.js";import"./Text.af56d73a.js";import"./index.5adc073d.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.c884d674.js";import"./router.1f815475.js";import"./index.69010622.js";import"./url.18cf237b.js";import"./index.b175ab76.js";import"./index.72b4bfd9.js";import"./index.d6fe0b96.js";import"./index.ffa5d9d6.js";import"./hasIn.574593fa.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[m]="2a6a6240-190b-43a8-8689-4d5915951421",i._sentryDebugIdIdentifier="sentry-dbid-2a6a6240-190b-43a8-8689-4d5915951421")}catch{}})();const ve=_({__name:"Organizations",setup(i){const m=[{label:"My organizations",path:"/organizations"}],u=[{key:"name",label:"Organization Name"}],b=I(),{loading:z,result:d,refetch:c}=V(()=>l.list()),p=({key:e})=>{b.push({name:"organization",params:{organizationId:e}})},n=N({state:"idle"});function v(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function g(e){if(n.value.state==="renaming"&&e){const{organizationId:a,newName:t}=n.value;await l.rename(a,t),c()}n.value={state:"idle"}}const w=async e=>{const a=await l.create(e.name);p({key:a.id})},k=async({key:e})=>{var t,f;await L("Are you sure you want to delete this organization?")&&(await((f=(t=d.value)==null?void 0:t.find(O=>O.id===e))==null?void 0:f.delete()),c())},C=x(()=>{var e,a;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"Actions",align:"right"}],rows:(a=(e=d.value)==null?void 0:e.map(t=>({key:t.id,cells:[{text:t.name,link:`/organizations/${encodeURIComponent(t.id)}`},{text:t.id},{text:"",actions:[{icon:D,label:"Go to projects",onClick:p},{icon:M,label:"Rename",onClick:()=>v(t)},{icon:$,label:"Delete",onClick:k,dangerous:!0}]}]})))!=null?a:[]}});return(e,a)=>(y(),A(h,null,[o(G,null,{navbar:r(()=>[o(j,{breadcrumb:m})]),content:r(()=>[o(E,{"entity-name":"organization",loading:s(z),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:C.value,fields:u,onCreate:w},null,8,["loading","table"])]),_:1}),o(s(H),{open:n.value.state==="renaming",title:"Rename organization",onCancel:a[1]||(a[1]=t=>g(!1)),onOk:a[2]||(a[2]=t=>g(!0))},{default:r(()=>[n.value.state==="renaming"?(y(),F(s(q),{key:0,layout:"vertical"},{default:r(()=>[o(s(U),{label:"New name"},{default:r(()=>[o(s(R),{value:n.value.newName,"onUpdate:value":a[0]||(a[0]=t=>n.value.newName=t)},null,8,["value"])]),_:1})]),_:1})):B("",!0)]),_:1},8,["open"])],64))}});export{ve as default};
//# sourceMappingURL=Organizations.1371d178.js.map
