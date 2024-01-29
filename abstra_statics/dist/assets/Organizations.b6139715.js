import{d as _,ey as I,r as N,F as x,b,et as F,f as o,w as s,u as l,bo as h,c as R,bF as A,ev as B}from"./outputWidgets.4d9ba3ef.js";import{e as D,u as M,F as $}from"./icons.a69fa9c8.js";import{a as V}from"./asyncComputed.f4677978.js";import"./router.679077c0.js";import"./jwt-decode.esm.74bd4619.js";import"./index.3025c580.js";import{O as d}from"./organization.0c45e039.js";import{_ as j}from"./Navbar.vue_vue_type_script_setup_true_lang.f70b3ed6.js";import{C as E}from"./CrudView.38618fc3.js";import{B as L}from"./BaseLayout.bcc711ed.js";import{a as U}from"./ant-design.1a6731f3.js";import{A as G}from"./FormItem.24b19ea4.js";import{F as P}from"./Form.d59f41b5.js";import{M as S}from"./Modal.889e82ae.js";import"./storage.39df5cbf.js";import"./index.cb2c6e5c.js";import"./index.cf4c23b9.js";import"./record.4e413006.js";import"./pubsub.3bfcfc7f.js";import"./logo.084e5d7c.js";import"./Text.cb3c74fa.js";import"./index.b40ff927.js";import"./Title.60378b9e.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.2c380584.js";import"./url.cd5d7e23.js";import"./index.c7c4284d.js";import"./index.7bba44d5.js";import"./hasIn.1cdec4af.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[m]="3d28d693-008c-4373-8486-5a1bef89e454",i._sentryDebugIdIdentifier="sentry-dbid-3d28d693-008c-4373-8486-5a1bef89e454")}catch{}})();const ze=_({__name:"Organizations",setup(i){const m=[{label:"My organizations",path:"/organizations"}],c=[{key:"name",label:"Organization Name"}],z=I(),{loading:v,result:p,refetch:f}=V(()=>d.list()),g=({key:e})=>{z.push({name:"organization",params:{organizationId:e}})},n=N({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await d.rename(t,a),f()}n.value={state:"idle"}}const k=async e=>{const t=await d.create(e.name);g({key:t.id})},C=async({key:e})=>{var a,r;await U("Are you sure you want to delete this organization?")&&(await((r=(a=p.value)==null?void 0:a.find(u=>u.id===e))==null?void 0:r.delete()),f())},O=x(()=>{var e,t;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(t=(e=p.value)==null?void 0:e.map(a=>{var r,u;return{key:a.id,cells:[{type:"link",text:a.name,to:(r=`/organizations/${encodeURIComponent(a.id)}`)!=null?r:null},{type:"text",text:(u=a.id)!=null?u:null},{type:"actions",actions:[{icon:D,label:"Go to projects",onClick:g},{icon:M,label:"Rename",onClick:()=>w(a)},{icon:$,label:"Delete",onClick:C,dangerous:!0}]}]}}))!=null?t:[]}});return(e,t)=>(b(),F(h,null,[o(L,null,{navbar:s(()=>[o(j,{breadcrumb:m})]),content:s(()=>[o(E,{"entity-name":"organization",loading:l(v),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:O.value,fields:c,onCreate:k},null,8,["loading","table"])]),_:1}),o(l(S),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>y(!1)),onOk:t[2]||(t[2]=a=>y(!0))},{default:s(()=>[n.value.state==="renaming"?(b(),R(l(P),{key:0,layout:"vertical"},{default:s(()=>[o(l(G),{label:"New name"},{default:s(()=>[o(l(A),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):B("",!0)]),_:1},8,["open"])],64))}});export{ze as default};
//# sourceMappingURL=Organizations.b6139715.js.map