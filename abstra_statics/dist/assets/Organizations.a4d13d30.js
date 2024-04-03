import{d as N,eI as O,r as _,H as x,b,eu as F,f as o,w as s,u as m,aC as M,eP as R,c as h,bx as B,ew as D}from"./outputWidgets.5cb6b216.js";import{a as A}from"./asyncComputed.422207e4.js";import"./router.3aca6a3e.js";import"./index.6b54af25.js";import{O as d}from"./organization.4ef0394f.js";import{N as $}from"./Navbar.1314c0e8.js";import{C as G}from"./CrudView.3940ce9e.js";import{B as V}from"./BaseLayout.aa297b14.js";import{a as j}from"./ant-design.1d19c841.js";import{F as E}from"./PhArrowSquareOut.vue.94246759.js";import{G as P}from"./PhPencil.vue.c2484dd7.js";import{A as U,F as H}from"./Form.d3a832dd.js";import{M as L}from"./Modal.d3744136.js";import"./popupNotifcation.f2c3d4bb.js";import"./index.cf4c23b9.js";import"./record.13b786ed.js";import"./pubsub.90b2bde9.js";import"./logo.084e5d7c.js";import"./PhSignOut.vue.3b63466b.js";import"./index.969a3786.js";import"./index.e2e08235.js";import"./Text.96d8bc72.js";import"./BookOutlined.694a5006.js";import"./Paragraph.9bde9d4e.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.74b75f0f.js";import"./url.e52c7235.js";import"./index.bd13b177.js";import"./Title.f8fa874e.js";import"./index.15208e63.js";import"./index.0bf09368.js";import"./hasIn.65bf4776.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[l]="0ca8f528-971c-4b07-86e1-7d7266c7fbde",i._sentryDebugIdIdentifier="sentry-dbid-0ca8f528-971c-4b07-86e1-7d7266c7fbde")}catch{}})();const Ce=N({__name:"Organizations",setup(i){const l=[{label:"My organizations",path:"/organizations"}],p=[{key:"name",label:"Organization Name"}],v=O(),{loading:w,result:c,refetch:f}=A(()=>d.list()),g=({key:e})=>{v.push({name:"organization",params:{organizationId:e}})},n=_({state:"idle"});function z(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await d.rename(t,a),f()}n.value={state:"idle"}}const C=async e=>{const t=await d.create(e.name);g({key:t.id})},k=async({key:e})=>{var a,r;await j("Are you sure you want to delete this organization?")&&(await((r=(a=c.value)==null?void 0:a.find(u=>u.id===e))==null?void 0:r.delete()),f())},I=x(()=>{var e,t;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(t=(e=c.value)==null?void 0:e.map(a=>{var r,u;return{key:a.id,cells:[{type:"link",text:a.name,to:(r=`/organizations/${encodeURIComponent(a.id)}`)!=null?r:null},{type:"text",text:(u=a.id)!=null?u:null},{type:"actions",actions:[{icon:E,label:"Go to projects",onClick:g},{icon:P,label:"Rename",onClick:()=>z(a)},{icon:R,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?t:[]}});return(e,t)=>(b(),F(M,null,[o(V,null,{navbar:s(()=>[o($,{breadcrumb:l})]),content:s(()=>[o(G,{"entity-name":"organization",loading:m(w),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:I.value,fields:p,onCreate:C},null,8,["loading","table"])]),_:1}),o(m(L),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>y(!1)),onOk:t[2]||(t[2]=a=>y(!0))},{default:s(()=>[n.value.state==="renaming"?(b(),h(m(H),{key:0,layout:"vertical"},{default:s(()=>[o(m(U),{label:"New name"},{default:s(()=>[o(m(B),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):D("",!0)]),_:1},8,["open"])],64))}});export{Ce as default};
//# sourceMappingURL=Organizations.a4d13d30.js.map