import{d as _,eA as I,r as N,H as x,b,ev as h,f as o,w as s,u as l,aD as A,c as D,bz as R,ex as B}from"./outputWidgets.143b89ad.js";import{e as F,H as M,K as $}from"./icons.1edc4453.js";import{a as V}from"./asyncComputed.fefd676a.js";import"./router.21bbc665.js";import"./index.91c8451e.js";import{O as d}from"./organization.c1cb99ff.js";import{_ as j}from"./Navbar.vue_vue_type_script_setup_true_lang.4d27b866.js";import{C as E}from"./CrudView.8ae33a85.js";import{B as H}from"./BaseLayout.1f3fee38.js";import{a as L}from"./ant-design.10a6d501.js";import{A as U,F as G}from"./Form.db0ef3c4.js";import{M as K}from"./Modal.b23c0247.js";import"./popupNotifcation.fb7df8d7.js";import"./index.cf4c23b9.js";import"./record.557e07c4.js";import"./pubsub.b0541584.js";import"./logo.084e5d7c.js";import"./Text.b74e36c5.js";import"./Base.cfb1ba48.js";import"./Typography.cddcecb6.js";import"./index.735680eb.js";import"./ArrowRightOutlined.08fa31dd.js";import"./Paragraph.71d9c62e.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.ac65b288.js";import"./url.9f8760c3.js";import"./index.54bce458.js";import"./Title.d82cdea3.js";import"./index.dbc476d2.js";import"./index.9d12c88e.js";import"./hasIn.b5021533.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[m]="6b4b5cf1-4dd8-4c2d-afc8-af456c28bc1c",i._sentryDebugIdIdentifier="sentry-dbid-6b4b5cf1-4dd8-4c2d-afc8-af456c28bc1c")}catch{}})();const we=_({__name:"Organizations",setup(i){const m=[{label:"My organizations",path:"/organizations"}],u=[{key:"name",label:"Organization Name"}],z=I(),{loading:v,result:p,refetch:f}=V(()=>d.list()),g=({key:e})=>{z.push({name:"organization",params:{organizationId:e}})},n=N({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await d.rename(t,a),f()}n.value={state:"idle"}}const k=async e=>{const t=await d.create(e.name);g({key:t.id})},C=async({key:e})=>{var a,r;await L("Are you sure you want to delete this organization?")&&(await((r=(a=p.value)==null?void 0:a.find(c=>c.id===e))==null?void 0:r.delete()),f())},O=x(()=>{var e,t;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(t=(e=p.value)==null?void 0:e.map(a=>{var r,c;return{key:a.id,cells:[{type:"link",text:a.name,to:(r=`/organizations/${encodeURIComponent(a.id)}`)!=null?r:null},{type:"text",text:(c=a.id)!=null?c:null},{type:"actions",actions:[{icon:F,label:"Go to projects",onClick:g},{icon:M,label:"Rename",onClick:()=>w(a)},{icon:$,label:"Delete",onClick:C,dangerous:!0}]}]}}))!=null?t:[]}});return(e,t)=>(b(),h(A,null,[o(H,null,{navbar:s(()=>[o(j,{breadcrumb:m})]),content:s(()=>[o(E,{"entity-name":"organization",loading:l(v),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:O.value,fields:u,onCreate:k},null,8,["loading","table"])]),_:1}),o(l(K),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>y(!1)),onOk:t[2]||(t[2]=a=>y(!0))},{default:s(()=>[n.value.state==="renaming"?(b(),D(l(G),{key:0,layout:"vertical"},{default:s(()=>[o(l(U),{label:"New name"},{default:s(()=>[o(l(R),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):B("",!0)]),_:1},8,["open"])],64))}});export{we as default};
//# sourceMappingURL=Organizations.dcadb851.js.map
