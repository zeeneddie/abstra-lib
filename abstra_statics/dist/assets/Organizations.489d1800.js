import{d as _,eA as I,r as N,H as x,b,ev as h,f as o,w as s,u as l,aD as A,c as D,bz as R,ex as B}from"./outputWidgets.7e6eb177.js";import{e as F,H as M,K as $}from"./icons.42e022b7.js";import{a as V}from"./asyncComputed.5c83bb8a.js";import"./router.1fa38c42.js";import"./index.0e1d2395.js";import{O as d}from"./organization.f1f61faa.js";import{_ as j}from"./Navbar.vue_vue_type_script_setup_true_lang.9adc17d8.js";import{C as E}from"./CrudView.93e6cce5.js";import{B as H}from"./BaseLayout.9f997157.js";import{a as L}from"./ant-design.3e571b9a.js";import{A as U,F as G}from"./Form.f6e73dd6.js";import{M as K}from"./Modal.dcc2c9e3.js";import"./popupNotifcation.1c8d50aa.js";import"./index.cf4c23b9.js";import"./record.a100d067.js";import"./pubsub.782b9d46.js";import"./logo.084e5d7c.js";import"./Text.497ac05f.js";import"./Base.fe1b5bdf.js";import"./Typography.9133b65d.js";import"./index.1ba22966.js";import"./ArrowRightOutlined.08fa31dd.js";import"./Paragraph.a13a9f0d.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.5e43f505.js";import"./url.577173aa.js";import"./index.d8062c86.js";import"./Title.f948a676.js";import"./index.a964b97b.js";import"./index.22b3b986.js";import"./hasIn.958b80f9.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[m]="09c5dda8-e538-438e-a517-f274019a8834",i._sentryDebugIdIdentifier="sentry-dbid-09c5dda8-e538-438e-a517-f274019a8834")}catch{}})();const we=_({__name:"Organizations",setup(i){const m=[{label:"My organizations",path:"/organizations"}],p=[{key:"name",label:"Organization Name"}],z=I(),{loading:v,result:c,refetch:f}=V(()=>d.list()),g=({key:e})=>{z.push({name:"organization",params:{organizationId:e}})},n=N({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:a,newName:t}=n.value;await d.rename(a,t),f()}n.value={state:"idle"}}const k=async e=>{const a=await d.create(e.name);g({key:a.id})},C=async({key:e})=>{var t,r;await L("Are you sure you want to delete this organization?")&&(await((r=(t=c.value)==null?void 0:t.find(u=>u.id===e))==null?void 0:r.delete()),f())},O=x(()=>{var e,a;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(a=(e=c.value)==null?void 0:e.map(t=>{var r,u;return{key:t.id,cells:[{type:"link",text:t.name,to:(r=`/organizations/${encodeURIComponent(t.id)}`)!=null?r:null},{type:"text",text:(u=t.id)!=null?u:null},{type:"actions",actions:[{icon:F,label:"Go to projects",onClick:g},{icon:M,label:"Rename",onClick:()=>w(t)},{icon:$,label:"Delete",onClick:C,dangerous:!0}]}]}}))!=null?a:[]}});return(e,a)=>(b(),h(A,null,[o(H,null,{navbar:s(()=>[o(j,{breadcrumb:m})]),content:s(()=>[o(E,{"entity-name":"organization",loading:l(v),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:O.value,fields:p,onCreate:k},null,8,["loading","table"])]),_:1}),o(l(K),{open:n.value.state==="renaming",title:"Rename organization",onCancel:a[1]||(a[1]=t=>y(!1)),onOk:a[2]||(a[2]=t=>y(!0))},{default:s(()=>[n.value.state==="renaming"?(b(),D(l(G),{key:0,layout:"vertical"},{default:s(()=>[o(l(U),{label:"New name"},{default:s(()=>[o(l(R),{value:n.value.newName,"onUpdate:value":a[0]||(a[0]=t=>n.value.newName=t)},null,8,["value"])]),_:1})]),_:1})):B("",!0)]),_:1},8,["open"])],64))}});export{we as default};
//# sourceMappingURL=Organizations.489d1800.js.map
