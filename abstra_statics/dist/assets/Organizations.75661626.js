import{d as _,eA as I,r as N,H as x,b,ev as h,f as o,w as s,u as l,aD as A,c as D,bz as R,ex as B}from"./outputWidgets.6f145ce0.js";import{e as F,I as M,L as $}from"./icons.fe7720e9.js";import{a as L}from"./asyncComputed.dd872c81.js";import"./router.10134285.js";import"./index.54c0ce9d.js";import{O as d}from"./organization.5d90539b.js";import{_ as V}from"./Navbar.vue_vue_type_script_setup_true_lang.ad5d151b.js";import{C as j}from"./CrudView.494bfc82.js";import{B as E}from"./BaseLayout.0a9ddaf2.js";import{a as U}from"./ant-design.2455b310.js";import{A as G,F as H}from"./Form.0febb5d8.js";import{M as P}from"./Modal.07a2474e.js";import"./popupNotifcation.c99b8976.js";import"./index.cf4c23b9.js";import"./record.40124f45.js";import"./pubsub.ec1cca0d.js";import"./logo.084e5d7c.js";import"./Text.a320eb97.js";import"./Base.4c459403.js";import"./Typography.37467e29.js";import"./index.1f930589.js";import"./ArrowRightOutlined.08fa31dd.js";import"./Paragraph.c2438e5f.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.0c489ca9.js";import"./url.361bdab7.js";import"./index.54cc85eb.js";import"./Title.bdc50f8a.js";import"./index.63ac5bd0.js";import"./index.c1935091.js";import"./hasIn.d2967fc5.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[m]="7d1e5b80-633a-4060-8454-225633086784",i._sentryDebugIdIdentifier="sentry-dbid-7d1e5b80-633a-4060-8454-225633086784")}catch{}})();const we=_({__name:"Organizations",setup(i){const m=[{label:"My organizations",path:"/organizations"}],p=[{key:"name",label:"Organization Name"}],z=I(),{loading:v,result:c,refetch:g}=L(()=>d.list()),f=({key:e})=>{z.push({name:"organization",params:{organizationId:e}})},n=N({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await d.rename(t,a),g()}n.value={state:"idle"}}const k=async e=>{const t=await d.create(e.name);f({key:t.id})},C=async({key:e})=>{var a,r;await U("Are you sure you want to delete this organization?")&&(await((r=(a=c.value)==null?void 0:a.find(u=>u.id===e))==null?void 0:r.delete()),g())},O=x(()=>{var e,t;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(t=(e=c.value)==null?void 0:e.map(a=>{var r,u;return{key:a.id,cells:[{type:"link",text:a.name,to:(r=`/organizations/${encodeURIComponent(a.id)}`)!=null?r:null},{type:"text",text:(u=a.id)!=null?u:null},{type:"actions",actions:[{icon:F,label:"Go to projects",onClick:f},{icon:M,label:"Rename",onClick:()=>w(a)},{icon:$,label:"Delete",onClick:C,dangerous:!0}]}]}}))!=null?t:[]}});return(e,t)=>(b(),h(A,null,[o(E,null,{navbar:s(()=>[o(V,{breadcrumb:m})]),content:s(()=>[o(j,{"entity-name":"organization",loading:l(v),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:O.value,fields:p,onCreate:k},null,8,["loading","table"])]),_:1}),o(l(P),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>y(!1)),onOk:t[2]||(t[2]=a=>y(!0))},{default:s(()=>[n.value.state==="renaming"?(b(),D(l(H),{key:0,layout:"vertical"},{default:s(()=>[o(l(G),{label:"New name"},{default:s(()=>[o(l(R),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):B("",!0)]),_:1},8,["open"])],64))}});export{we as default};
//# sourceMappingURL=Organizations.75661626.js.map
