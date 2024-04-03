import{d as I,eI as O,r as N,H as x,b,eu as F,f as o,w as s,u as m,aC as M,eP as R,c as h,by as B,ew as D}from"./outputWidgets.1c4947c7.js";import{a as $}from"./asyncComputed.ab9c45d0.js";import"./router.f814fb07.js";import"./index.bf745b17.js";import{O as d}from"./organization.01b51d1b.js";import{_ as A}from"./Navbar.vue_vue_type_script_setup_true_lang.55315da5.js";import{C as G}from"./CrudView.54cbe4c4.js";import{B as V}from"./BaseLayout.e580281d.js";import{a as j}from"./ant-design.5014c7e6.js";import{F as E}from"./PhArrowSquareOut.vue.ffd5aa73.js";import{G as P}from"./PhPencil.vue.d41e1ee1.js";import{A as U,F as H}from"./Form.cba5cdce.js";import{M as L}from"./Modal.5c7e6d3c.js";import"./popupNotifcation.bd532d77.js";import"./index.cf4c23b9.js";import"./record.438e3693.js";import"./pubsub.87f1efb9.js";import"./logo.084e5d7c.js";import"./Text.4ed32514.js";import"./index.1f8fecc0.js";import"./index.362301bc.js";import"./Paragraph.110c4a21.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.f7859d2d.js";import"./url.ca3e5e32.js";import"./index.a9af7b0b.js";import"./Title.6f4ab7f6.js";import"./index.83f629a7.js";import"./index.2f87ba27.js";import"./hasIn.58acd238.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[l]="91901e90-44a8-425d-9ca9-1a7eae7472cb",i._sentryDebugIdIdentifier="sentry-dbid-91901e90-44a8-425d-9ca9-1a7eae7472cb")}catch{}})();const ze=I({__name:"Organizations",setup(i){const l=[{label:"My organizations",path:"/organizations"}],p=[{key:"name",label:"Organization Name"}],w=O(),{loading:z,result:c,refetch:f}=$(()=>d.list()),g=({key:e})=>{w.push({name:"organization",params:{organizationId:e}})},n=N({state:"idle"});function v(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:a,newName:t}=n.value;await d.rename(a,t),f()}n.value={state:"idle"}}const C=async e=>{const a=await d.create(e.name);g({key:a.id})},k=async({key:e})=>{var t,r;await j("Are you sure you want to delete this organization?")&&(await((r=(t=c.value)==null?void 0:t.find(u=>u.id===e))==null?void 0:r.delete()),f())},_=x(()=>{var e,a;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(a=(e=c.value)==null?void 0:e.map(t=>{var r,u;return{key:t.id,cells:[{type:"link",text:t.name,to:(r=`/organizations/${encodeURIComponent(t.id)}`)!=null?r:null},{type:"text",text:(u=t.id)!=null?u:null},{type:"actions",actions:[{icon:E,label:"Go to projects",onClick:g},{icon:P,label:"Rename",onClick:()=>v(t)},{icon:R,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?a:[]}});return(e,a)=>(b(),F(M,null,[o(V,null,{navbar:s(()=>[o(A,{breadcrumb:l})]),content:s(()=>[o(G,{"entity-name":"organization",loading:m(z),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:_.value,fields:p,onCreate:C},null,8,["loading","table"])]),_:1}),o(m(L),{open:n.value.state==="renaming",title:"Rename organization",onCancel:a[1]||(a[1]=t=>y(!1)),onOk:a[2]||(a[2]=t=>y(!0))},{default:s(()=>[n.value.state==="renaming"?(b(),h(m(H),{key:0,layout:"vertical"},{default:s(()=>[o(m(U),{label:"New name"},{default:s(()=>[o(m(B),{value:n.value.newName,"onUpdate:value":a[0]||(a[0]=t=>n.value.newName=t)},null,8,["value"])]),_:1})]),_:1})):D("",!0)]),_:1},8,["open"])],64))}});export{ze as default};
//# sourceMappingURL=Organizations.ca825847.js.map
