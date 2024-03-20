import{d as _,eA as I,r as N,H as x,b,ev as h,f as o,w as s,u as l,aD as A,c as D,bz as R,ex as B}from"./outputWidgets.cb403911.js";import{e as F,H as M,K as $}from"./icons.aae3c493.js";import{a as V}from"./asyncComputed.e79d98d0.js";import"./router.41eccbd6.js";import"./index.d47d8dcd.js";import{O as d}from"./organization.38ac2eb4.js";import{_ as j}from"./Navbar.vue_vue_type_script_setup_true_lang.0a282b87.js";import{C as E}from"./CrudView.93290ea8.js";import{B as H}from"./BaseLayout.de97a8da.js";import{a as L}from"./ant-design.cd0744b8.js";import{A as U,F as G}from"./Form.c4e43409.js";import{M as K}from"./Modal.8e17ec62.js";import"./popupNotifcation.25cc8775.js";import"./index.cf4c23b9.js";import"./record.1cf44d32.js";import"./pubsub.b68b1f2c.js";import"./logo.084e5d7c.js";import"./Text.685c8d87.js";import"./Base.e3f83538.js";import"./Typography.1be659fb.js";import"./index.14a7b0ad.js";import"./ArrowRightOutlined.08fa31dd.js";import"./index.593c023f.js";import"./Paragraph.42173e08.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.2e7aedec.js";import"./url.947a208d.js";import"./index.ee47e378.js";import"./Title.c41b8760.js";import"./index.2cd71938.js";import"./index.3f3dd84a.js";import"./hasIn.fda5345a.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[m]="8fe9f175-5b61-4b7e-9549-734d3e508302",i._sentryDebugIdIdentifier="sentry-dbid-8fe9f175-5b61-4b7e-9549-734d3e508302")}catch{}})();const ke=_({__name:"Organizations",setup(i){const m=[{label:"My organizations",path:"/organizations"}],p=[{key:"name",label:"Organization Name"}],z=I(),{loading:v,result:c,refetch:f}=V(()=>d.list()),g=({key:e})=>{z.push({name:"organization",params:{organizationId:e}})},n=N({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await d.rename(t,a),f()}n.value={state:"idle"}}const k=async e=>{const t=await d.create(e.name);g({key:t.id})},C=async({key:e})=>{var a,r;await L("Are you sure you want to delete this organization?")&&(await((r=(a=c.value)==null?void 0:a.find(u=>u.id===e))==null?void 0:r.delete()),f())},O=x(()=>{var e,t;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(t=(e=c.value)==null?void 0:e.map(a=>{var r,u;return{key:a.id,cells:[{type:"link",text:a.name,to:(r=`/organizations/${encodeURIComponent(a.id)}`)!=null?r:null},{type:"text",text:(u=a.id)!=null?u:null},{type:"actions",actions:[{icon:F,label:"Go to projects",onClick:g},{icon:M,label:"Rename",onClick:()=>w(a)},{icon:$,label:"Delete",onClick:C,dangerous:!0}]}]}}))!=null?t:[]}});return(e,t)=>(b(),h(A,null,[o(H,null,{navbar:s(()=>[o(j,{breadcrumb:m})]),content:s(()=>[o(E,{"entity-name":"organization",loading:l(v),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:O.value,fields:p,onCreate:k},null,8,["loading","table"])]),_:1}),o(l(K),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>y(!1)),onOk:t[2]||(t[2]=a=>y(!0))},{default:s(()=>[n.value.state==="renaming"?(b(),D(l(G),{key:0,layout:"vertical"},{default:s(()=>[o(l(U),{label:"New name"},{default:s(()=>[o(l(R),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):B("",!0)]),_:1},8,["open"])],64))}});export{ke as default};
//# sourceMappingURL=Organizations.aa04e840.js.map
