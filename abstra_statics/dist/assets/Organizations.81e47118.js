import{d as _,eA as I,r as N,H as x,b as y,ev as h,f as o,w as s,u as l,aD as A,c as D,bz as R,ex as B}from"./outputWidgets.f0391a74.js";import{e as F,H as M,K as $}from"./icons.f7511453.js";import{a as V}from"./asyncComputed.363f961e.js";import"./router.9521f915.js";import"./index.13fb7824.js";import{O as d}from"./organization.472ebbc1.js";import{_ as j}from"./Navbar.vue_vue_type_script_setup_true_lang.23562268.js";import{C as E}from"./CrudView.9f2d78f4.js";import{B as H}from"./BaseLayout.d6b28c70.js";import{a as L}from"./ant-design.3b7d3c1c.js";import{A as U,F as G}from"./Form.1aee5650.js";import{M as K}from"./Modal.7a75e616.js";import"./popupNotifcation.bb922524.js";import"./index.cf4c23b9.js";import"./record.6f7f627d.js";import"./pubsub.73224ce6.js";import"./logo.084e5d7c.js";import"./Text.3e9cee86.js";import"./Base.c690457d.js";import"./Typography.2e02df67.js";import"./index.58e79df5.js";import"./ArrowRightOutlined.08fa31dd.js";import"./index.03310b61.js";import"./Paragraph.4c6547df.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.6af10b5d.js";import"./url.3db2a8aa.js";import"./index.9869cb58.js";import"./Title.18e0b53f.js";import"./index.0e674df9.js";import"./index.8b4d6f50.js";import"./hasIn.23612021.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[m]="2bfc9bc6-21dc-4fcd-a54b-9b40c805076d",i._sentryDebugIdIdentifier="sentry-dbid-2bfc9bc6-21dc-4fcd-a54b-9b40c805076d")}catch{}})();const ke=_({__name:"Organizations",setup(i){const m=[{label:"My organizations",path:"/organizations"}],u=[{key:"name",label:"Organization Name"}],z=I(),{loading:v,result:p,refetch:f}=V(()=>d.list()),g=({key:e})=>{z.push({name:"organization",params:{organizationId:e}})},n=N({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function b(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await d.rename(t,a),f()}n.value={state:"idle"}}const k=async e=>{const t=await d.create(e.name);g({key:t.id})},C=async({key:e})=>{var a,r;await L("Are you sure you want to delete this organization?")&&(await((r=(a=p.value)==null?void 0:a.find(c=>c.id===e))==null?void 0:r.delete()),f())},O=x(()=>{var e,t;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(t=(e=p.value)==null?void 0:e.map(a=>{var r,c;return{key:a.id,cells:[{type:"link",text:a.name,to:(r=`/organizations/${encodeURIComponent(a.id)}`)!=null?r:null},{type:"text",text:(c=a.id)!=null?c:null},{type:"actions",actions:[{icon:F,label:"Go to projects",onClick:g},{icon:M,label:"Rename",onClick:()=>w(a)},{icon:$,label:"Delete",onClick:C,dangerous:!0}]}]}}))!=null?t:[]}});return(e,t)=>(y(),h(A,null,[o(H,null,{navbar:s(()=>[o(j,{breadcrumb:m})]),content:s(()=>[o(E,{"entity-name":"organization",loading:l(v),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:O.value,fields:u,onCreate:k},null,8,["loading","table"])]),_:1}),o(l(K),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>b(!1)),onOk:t[2]||(t[2]=a=>b(!0))},{default:s(()=>[n.value.state==="renaming"?(y(),D(l(G),{key:0,layout:"vertical"},{default:s(()=>[o(l(U),{label:"New name"},{default:s(()=>[o(l(R),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):B("",!0)]),_:1},8,["open"])],64))}});export{ke as default};
//# sourceMappingURL=Organizations.81e47118.js.map
