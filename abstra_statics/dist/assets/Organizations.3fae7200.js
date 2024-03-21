import{d as _,eA as I,r as N,H as x,b,ev as h,f as o,w as s,u as l,aD as A,c as D,bz as R,ex as B}from"./outputWidgets.66cb3323.js";import{e as F,H as M,K as $}from"./icons.bf22aa40.js";import{a as V}from"./asyncComputed.e916adae.js";import"./router.0bc1d0d5.js";import"./index.9d397e35.js";import{O as d}from"./organization.13fe0a2b.js";import{_ as j}from"./Navbar.vue_vue_type_script_setup_true_lang.678474c4.js";import{C as E}from"./CrudView.4fbaeb64.js";import{B as H}from"./BaseLayout.ee46c20b.js";import{a as L}from"./ant-design.3885082e.js";import{A as U,F as G}from"./Form.6c3a2d9f.js";import{M as K}from"./Modal.7f50b274.js";import"./popupNotifcation.9d486082.js";import"./index.cf4c23b9.js";import"./record.b20b5768.js";import"./pubsub.19cef690.js";import"./logo.084e5d7c.js";import"./Text.86e9a2de.js";import"./Base.e0db6d09.js";import"./Typography.2ce150f4.js";import"./index.3de0e2a0.js";import"./ArrowRightOutlined.08fa31dd.js";import"./index.67ac4d72.js";import"./Paragraph.de06c047.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.f80c2df7.js";import"./url.50176a21.js";import"./index.c07575ec.js";import"./Title.dfc9c803.js";import"./index.c1ed2dcd.js";import"./index.02c3e4df.js";import"./hasIn.cda4df71.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[m]="556e914a-a897-43d3-b372-c48122740273",i._sentryDebugIdIdentifier="sentry-dbid-556e914a-a897-43d3-b372-c48122740273")}catch{}})();const ke=_({__name:"Organizations",setup(i){const m=[{label:"My organizations",path:"/organizations"}],p=[{key:"name",label:"Organization Name"}],z=I(),{loading:v,result:c,refetch:g}=V(()=>d.list()),f=({key:e})=>{z.push({name:"organization",params:{organizationId:e}})},n=N({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await d.rename(t,a),g()}n.value={state:"idle"}}const k=async e=>{const t=await d.create(e.name);f({key:t.id})},C=async({key:e})=>{var a,r;await L("Are you sure you want to delete this organization?")&&(await((r=(a=c.value)==null?void 0:a.find(u=>u.id===e))==null?void 0:r.delete()),g())},O=x(()=>{var e,t;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(t=(e=c.value)==null?void 0:e.map(a=>{var r,u;return{key:a.id,cells:[{type:"link",text:a.name,to:(r=`/organizations/${encodeURIComponent(a.id)}`)!=null?r:null},{type:"text",text:(u=a.id)!=null?u:null},{type:"actions",actions:[{icon:F,label:"Go to projects",onClick:f},{icon:M,label:"Rename",onClick:()=>w(a)},{icon:$,label:"Delete",onClick:C,dangerous:!0}]}]}}))!=null?t:[]}});return(e,t)=>(b(),h(A,null,[o(H,null,{navbar:s(()=>[o(j,{breadcrumb:m})]),content:s(()=>[o(E,{"entity-name":"organization",loading:l(v),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:O.value,fields:p,onCreate:k},null,8,["loading","table"])]),_:1}),o(l(K),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>y(!1)),onOk:t[2]||(t[2]=a=>y(!0))},{default:s(()=>[n.value.state==="renaming"?(b(),D(l(G),{key:0,layout:"vertical"},{default:s(()=>[o(l(U),{label:"New name"},{default:s(()=>[o(l(R),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):B("",!0)]),_:1},8,["open"])],64))}});export{ke as default};
//# sourceMappingURL=Organizations.3fae7200.js.map
