import{d as _,eA as I,r as N,H as x,b,ev as h,f as o,w as s,u as l,a$ as A,c as D,bO as R,ex as B}from"./outputWidgets.af28e799.js";import{e as F,q as M,D as $}from"./icons.f637ef04.js";import{a as V}from"./asyncComputed.b5c1c387.js";import"./router.1c71e909.js";import"./index.da0ed47e.js";import{O as d}from"./organization.6a3ecef1.js";import{_ as j}from"./Navbar.vue_vue_type_script_setup_true_lang.33e66e71.js";import{C as E}from"./CrudView.73997f30.js";import{B as L}from"./BaseLayout.ad2fe04a.js";import{a as U}from"./ant-design.d5765e08.js";import{A as q}from"./FormItem.3cdd6f35.js";import{F as G}from"./Form.a90bb6e2.js";import{M as H}from"./Modal.1a697377.js";import"./index.cf4c23b9.js";import"./record.e8631664.js";import"./pubsub.77765f07.js";import"./logo.084e5d7c.js";import"./Text.abf96dfc.js";import"./Base.9fc088e8.js";import"./Typography.9914ebec.js";import"./index.f6d36405.js";import"./Paragraph.3b796a14.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.7282d72e.js";import"./url.5810758c.js";import"./index.4fe7f349.js";import"./Title.f1c7fcfe.js";import"./index.7dc34d3f.js";import"./index.d378dbbb.js";import"./hasIn.b3665b9b.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[m]="ea61421b-863f-493f-af51-e41944fa2e18",i._sentryDebugIdIdentifier="sentry-dbid-ea61421b-863f-493f-af51-e41944fa2e18")}catch{}})();const ve=_({__name:"Organizations",setup(i){const m=[{label:"My organizations",path:"/organizations"}],p=[{key:"name",label:"Organization Name"}],z=I(),{loading:v,result:c,refetch:f}=V(()=>d.list()),g=({key:e})=>{z.push({name:"organization",params:{organizationId:e}})},n=N({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:a,newName:t}=n.value;await d.rename(a,t),f()}n.value={state:"idle"}}const k=async e=>{const a=await d.create(e.name);g({key:a.id})},C=async({key:e})=>{var t,r;await U("Are you sure you want to delete this organization?")&&(await((r=(t=c.value)==null?void 0:t.find(u=>u.id===e))==null?void 0:r.delete()),f())},O=x(()=>{var e,a;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(a=(e=c.value)==null?void 0:e.map(t=>{var r,u;return{key:t.id,cells:[{type:"link",text:t.name,to:(r=`/organizations/${encodeURIComponent(t.id)}`)!=null?r:null},{type:"text",text:(u=t.id)!=null?u:null},{type:"actions",actions:[{icon:F,label:"Go to projects",onClick:g},{icon:M,label:"Rename",onClick:()=>w(t)},{icon:$,label:"Delete",onClick:C,dangerous:!0}]}]}}))!=null?a:[]}});return(e,a)=>(b(),h(A,null,[o(L,null,{navbar:s(()=>[o(j,{breadcrumb:m})]),content:s(()=>[o(E,{"entity-name":"organization",loading:l(v),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:O.value,fields:p,onCreate:k},null,8,["loading","table"])]),_:1}),o(l(H),{open:n.value.state==="renaming",title:"Rename organization",onCancel:a[1]||(a[1]=t=>y(!1)),onOk:a[2]||(a[2]=t=>y(!0))},{default:s(()=>[n.value.state==="renaming"?(b(),D(l(G),{key:0,layout:"vertical"},{default:s(()=>[o(l(q),{label:"New name"},{default:s(()=>[o(l(R),{value:n.value.newName,"onUpdate:value":a[0]||(a[0]=t=>n.value.newName=t)},null,8,["value"])]),_:1})]),_:1})):B("",!0)]),_:1},8,["open"])],64))}});export{ve as default};
//# sourceMappingURL=Organizations.89a79419.js.map
