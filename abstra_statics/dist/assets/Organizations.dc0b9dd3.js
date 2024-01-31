import{d as _,eA as I,r as N,H as x,b,ev as h,f as o,w as s,u as l,a$ as A,c as F,bO as R,ex as B}from"./outputWidgets.1f5e37db.js";import{e as D,t as M,F as $}from"./icons.3ee16103.js";import{a as V}from"./asyncComputed.b6d33567.js";import"./router.0f91c45d.js";import"./index.2108931e.js";import{O as u}from"./organization.af2f77db.js";import{_ as j}from"./Navbar.vue_vue_type_script_setup_true_lang.0282f6f4.js";import{C as E}from"./CrudView.aa0a8cc6.js";import{B as L}from"./BaseLayout.7864d5b1.js";import{a as U}from"./ant-design.31348f71.js";import{A as G}from"./FormItem.35b801a2.js";import{F as H}from"./Form.8b1f9044.js";import{M as P}from"./Modal.55149f37.js";import"./index.cf4c23b9.js";import"./record.a20dd19d.js";import"./pubsub.82b0dd97.js";import"./logo.084e5d7c.js";import"./Text.7209cdf6.js";import"./Base.8111e6c8.js";import"./index.0e9b9c18.js";import"./Paragraph.da768ab2.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.c72340a5.js";import"./url.81ebd9eb.js";import"./Title.02f3792e.js";import"./index.2c308e51.js";import"./index.4322242d.js";import"./hasIn.8ed1a5a4.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[m]="226ae888-1adc-41e3-ad15-2bcb84d47940",i._sentryDebugIdIdentifier="sentry-dbid-226ae888-1adc-41e3-ad15-2bcb84d47940")}catch{}})();const be=_({__name:"Organizations",setup(i){const m=[{label:"My organizations",path:"/organizations"}],c=[{key:"name",label:"Organization Name"}],z=I(),{loading:v,result:p,refetch:g}=V(()=>u.list()),f=({key:e})=>{z.push({name:"organization",params:{organizationId:e}})},n=N({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:a,newName:t}=n.value;await u.rename(a,t),g()}n.value={state:"idle"}}const k=async e=>{const a=await u.create(e.name);f({key:a.id})},C=async({key:e})=>{var t,r;await U("Are you sure you want to delete this organization?")&&(await((r=(t=p.value)==null?void 0:t.find(d=>d.id===e))==null?void 0:r.delete()),g())},O=x(()=>{var e,a;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(a=(e=p.value)==null?void 0:e.map(t=>{var r,d;return{key:t.id,cells:[{type:"link",text:t.name,to:(r=`/organizations/${encodeURIComponent(t.id)}`)!=null?r:null},{type:"text",text:(d=t.id)!=null?d:null},{type:"actions",actions:[{icon:D,label:"Go to projects",onClick:f},{icon:M,label:"Rename",onClick:()=>w(t)},{icon:$,label:"Delete",onClick:C,dangerous:!0}]}]}}))!=null?a:[]}});return(e,a)=>(b(),h(A,null,[o(L,null,{navbar:s(()=>[o(j,{breadcrumb:m})]),content:s(()=>[o(E,{"entity-name":"organization",loading:l(v),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:O.value,fields:c,onCreate:k},null,8,["loading","table"])]),_:1}),o(l(P),{open:n.value.state==="renaming",title:"Rename organization",onCancel:a[1]||(a[1]=t=>y(!1)),onOk:a[2]||(a[2]=t=>y(!0))},{default:s(()=>[n.value.state==="renaming"?(b(),F(l(H),{key:0,layout:"vertical"},{default:s(()=>[o(l(G),{label:"New name"},{default:s(()=>[o(l(R),{value:n.value.newName,"onUpdate:value":a[0]||(a[0]=t=>n.value.newName=t)},null,8,["value"])]),_:1})]),_:1})):B("",!0)]),_:1},8,["open"])],64))}});export{be as default};
//# sourceMappingURL=Organizations.dc0b9dd3.js.map
