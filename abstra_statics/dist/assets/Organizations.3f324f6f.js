import{d as _,eA as I,r as N,H as x,b,ev as h,f as o,w as s,u as l,aD as A,c as D,bz as R,ex as B}from"./outputWidgets.36443bf1.js";import{e as F,I as M,L as $}from"./icons.59c83d7d.js";import{a as L}from"./asyncComputed.2d81b4e1.js";import"./router.08221e1b.js";import"./index.84b7502b.js";import{O as d}from"./organization.74eb379c.js";import{_ as V}from"./Navbar.vue_vue_type_script_setup_true_lang.8a591cf8.js";import{C as j}from"./CrudView.3cfb2813.js";import{B as E}from"./BaseLayout.0496e487.js";import{a as U}from"./ant-design.eb412f5d.js";import{A as G,F as H}from"./Form.e555ee28.js";import{M as P}from"./Modal.713c753c.js";import"./popupNotifcation.41fa6e6a.js";import"./index.cf4c23b9.js";import"./record.616e21c8.js";import"./pubsub.176e9557.js";import"./logo.084e5d7c.js";import"./Text.c592336f.js";import"./Base.58cf8910.js";import"./Typography.9957685d.js";import"./index.baf49692.js";import"./ArrowRightOutlined.08fa31dd.js";import"./Paragraph.6af8ad30.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.dac6543f.js";import"./url.630a3f15.js";import"./index.001f9109.js";import"./Title.d17816bc.js";import"./index.333b87fd.js";import"./index.38a97ec4.js";import"./hasIn.40229cf7.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[m]="98948d91-54d7-4c5b-95e8-66267e572f74",i._sentryDebugIdIdentifier="sentry-dbid-98948d91-54d7-4c5b-95e8-66267e572f74")}catch{}})();const we=_({__name:"Organizations",setup(i){const m=[{label:"My organizations",path:"/organizations"}],p=[{key:"name",label:"Organization Name"}],z=I(),{loading:v,result:c,refetch:f}=L(()=>d.list()),g=({key:e})=>{z.push({name:"organization",params:{organizationId:e}})},n=N({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await d.rename(t,a),f()}n.value={state:"idle"}}const k=async e=>{const t=await d.create(e.name);g({key:t.id})},C=async({key:e})=>{var a,r;await U("Are you sure you want to delete this organization?")&&(await((r=(a=c.value)==null?void 0:a.find(u=>u.id===e))==null?void 0:r.delete()),f())},O=x(()=>{var e,t;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(t=(e=c.value)==null?void 0:e.map(a=>{var r,u;return{key:a.id,cells:[{type:"link",text:a.name,to:(r=`/organizations/${encodeURIComponent(a.id)}`)!=null?r:null},{type:"text",text:(u=a.id)!=null?u:null},{type:"actions",actions:[{icon:F,label:"Go to projects",onClick:g},{icon:M,label:"Rename",onClick:()=>w(a)},{icon:$,label:"Delete",onClick:C,dangerous:!0}]}]}}))!=null?t:[]}});return(e,t)=>(b(),h(A,null,[o(E,null,{navbar:s(()=>[o(V,{breadcrumb:m})]),content:s(()=>[o(j,{"entity-name":"organization",loading:l(v),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:O.value,fields:p,onCreate:k},null,8,["loading","table"])]),_:1}),o(l(P),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>y(!1)),onOk:t[2]||(t[2]=a=>y(!0))},{default:s(()=>[n.value.state==="renaming"?(b(),D(l(H),{key:0,layout:"vertical"},{default:s(()=>[o(l(G),{label:"New name"},{default:s(()=>[o(l(R),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):B("",!0)]),_:1},8,["open"])],64))}});export{we as default};
//# sourceMappingURL=Organizations.3f324f6f.js.map
