import{d as _,eA as I,r as N,H as x,b,ev as h,f as o,w as s,u as l,aD as A,c as D,bz as R,ex as B}from"./outputWidgets.d6771bd9.js";import{e as F,I as M,L as $}from"./icons.cbca2df4.js";import{a as L}from"./asyncComputed.80d29ea0.js";import"./router.37b12b93.js";import"./index.9a22ad51.js";import{O as u}from"./organization.765661d0.js";import{_ as V}from"./Navbar.vue_vue_type_script_setup_true_lang.abdb4f4c.js";import{C as j}from"./CrudView.86abcaac.js";import{B as E}from"./BaseLayout.679c1e81.js";import{a as U}from"./ant-design.4eefe98e.js";import{A as G,F as H}from"./Form.9219dd96.js";import{M as P}from"./Modal.c04788fa.js";import"./popupNotifcation.2eab21e1.js";import"./index.cf4c23b9.js";import"./record.d1488526.js";import"./pubsub.5586b81f.js";import"./logo.084e5d7c.js";import"./Text.d26a4614.js";import"./Base.0ee41a7c.js";import"./Typography.0310f653.js";import"./index.d0a38d2e.js";import"./ArrowRightOutlined.08fa31dd.js";import"./Paragraph.43dd6508.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.e9b8a5cf.js";import"./url.476008e4.js";import"./index.3d271e06.js";import"./Title.47214a2f.js";import"./index.d957dad1.js";import"./SyncOutlined.3fd76732.js";import"./index.da9a5f74.js";import"./hasIn.0e8dd531.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[m]="8f46d44c-dce0-46a0-82a4-53c74dd12753",i._sentryDebugIdIdentifier="sentry-dbid-8f46d44c-dce0-46a0-82a4-53c74dd12753")}catch{}})();const ke=_({__name:"Organizations",setup(i){const m=[{label:"My organizations",path:"/organizations"}],c=[{key:"name",label:"Organization Name"}],z=I(),{loading:v,result:p,refetch:f}=L(()=>u.list()),g=({key:e})=>{z.push({name:"organization",params:{organizationId:e}})},n=N({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await u.rename(t,a),f()}n.value={state:"idle"}}const k=async e=>{const t=await u.create(e.name);g({key:t.id})},C=async({key:e})=>{var a,r;await U("Are you sure you want to delete this organization?")&&(await((r=(a=p.value)==null?void 0:a.find(d=>d.id===e))==null?void 0:r.delete()),f())},O=x(()=>{var e,t;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(t=(e=p.value)==null?void 0:e.map(a=>{var r,d;return{key:a.id,cells:[{type:"link",text:a.name,to:(r=`/organizations/${encodeURIComponent(a.id)}`)!=null?r:null},{type:"text",text:(d=a.id)!=null?d:null},{type:"actions",actions:[{icon:F,label:"Go to projects",onClick:g},{icon:M,label:"Rename",onClick:()=>w(a)},{icon:$,label:"Delete",onClick:C,dangerous:!0}]}]}}))!=null?t:[]}});return(e,t)=>(b(),h(A,null,[o(E,null,{navbar:s(()=>[o(V,{breadcrumb:m})]),content:s(()=>[o(j,{"entity-name":"organization",loading:l(v),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:O.value,fields:c,onCreate:k},null,8,["loading","table"])]),_:1}),o(l(P),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>y(!1)),onOk:t[2]||(t[2]=a=>y(!0))},{default:s(()=>[n.value.state==="renaming"?(b(),D(l(H),{key:0,layout:"vertical"},{default:s(()=>[o(l(G),{label:"New name"},{default:s(()=>[o(l(R),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):B("",!0)]),_:1},8,["open"])],64))}});export{ke as default};
//# sourceMappingURL=Organizations.115257c0.js.map
