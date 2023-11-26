import{d as B,G as f,r as O,u as a,b as l,c as u,w as n,bu as x,f as s,aq as p,eD as _,eR as i,ad as R,cD as m,cE as z,eu as P,eC as T,a_ as C,ew as j,bN as D,eY as Z,bU as $,eB as H,cF as Q,t as X}from"./outputWidgets.8ed5c9f3.js";import{P as F}from"./project.d18529d4.js";import"./router.afff361c.js";import{O as U}from"./organization.fe5fa605.js";import{A as ee}from"./apiKey.eeae7f9d.js";import"./columns.3f63be75.js";import{a as Y}from"./asyncComputed.8a952af2.js";import{A as ae}from"./Title.c0f8cffb.js";import{A as w,F as te}from"./Base.7a191de8.js";import{b as ne,c as oe}from"./Text.e6e81a88.js";import{A as re}from"./index.45a9faae.js";import{M as ie}from"./transButton.67499561.js";import"./gateway.82499ebb.js";import"./activeRecord.065f5706.js";import"./pubsub.d7e8bfae.js";import"./index.a6f782d1.js";(function(){try{var g=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(g._sentryDebugIds=g._sentryDebugIds||{},g._sentryDebugIds[c]="63c7569a-7675-4a29-ac1a-b7005cabf902",g._sentryDebugIdIdentifier="sentry-dbid-63c7569a-7675-4a29-ac1a-b7005cabf902")}catch{}})();const N="NEW_ORGANIZATION_KEY",A="NEW_PROJECT_KEY",le=B({__name:"GetApiKey",emits:["done"],setup(g,{emit:c}){const{result:d,loading:k}=Y(()=>U.list()),{result:v,loading:y,refetch:b}=Y(async()=>{const t=e.value;return t.type!=="selected-organization"?[]:F.list(t.organizationId)}),S=f(()=>{var t,r;return(r=(t=d.value)==null?void 0:t.map(o=>({key:o.id,label:o.name})))!=null?r:[]}),E=f(()=>{var t,r;return(r=(t=v.value)==null?void 0:t.map(o=>({key:o.id,label:o.name})))!=null?r:[]}),G=f(()=>e.value.type==="initial"?!0:e.value.type==="new-organization"?!e.value.organizationName||!e.value.project.projectName:e.value.type==="selected-organization"&&e.value.project.type==="new"?!e.value.project.projectName:e.value.type==="selected-organization"&&e.value.project.type==="initial"),M=async t=>await U.create(t.name),K=async(t,r)=>await F.create({organizationId:r,name:t.name}),h=async t=>await ee.create({projectId:t,name:"default"}),e=O({type:"initial"}),V=f(()=>{if(e.value.type!=="initial")return e.value.type==="new-organization"?N:e.value.organizationId}),q=f(()=>e.value.type==="selected-organization"&&e.value.project.type==="new"?A:e.value.type==="selected-organization"&&e.value.project.type==="selected"?e.value.project.projectId:void 0);function W(t){t||(e.value={type:"initial"}),t===N?e.value={type:"new-organization",organizationName:"",project:{type:"new",projectName:""}}:(e.value={type:"selected-organization",organizationId:String(t),project:{type:"initial"}},b())}function L(t){e.value.type==="selected-organization"&&(t||(e.value={type:"selected-organization",organizationId:e.value.organizationId,project:{type:"initial"}}),t===A?e.value={type:"selected-organization",organizationId:e.value.organizationId,project:{type:"new",projectName:""}}:e.value={type:"selected-organization",organizationId:e.value.organizationId,project:{type:"selected",projectId:String(t)}})}const I=O(!1);async function J(){I.value=!0;try{if(e.value.type==="initial")return;if(e.value.type==="new-organization"){const t=await M({name:e.value.organizationName}),r=await K({name:e.value.project.projectName},t.id),o=await h(r.id);o.value&&c("done",o.value)}if(e.value.type==="selected-organization"&&e.value.project.type==="new"){const t=await K({name:e.value.project.projectName},e.value.organizationId),r=await h(t.id);r.value&&c("done",r.value)}if(e.value.type==="selected-organization"&&e.value.project.type==="selected"){const t=await h(e.value.project.projectId);t.value&&c("done",t.value)}}finally{I.value=!1}}return(t,r)=>a(k)||!a(d)?(l(),u(a(x),{key:0})):(l(),u(a(te),{key:1,layout:"vertical"},{default:n(()=>[s(a(ae),{level:3},{default:n(()=>[p(_(a(i).translate("i18n_get_api_key_choose_organization_and_project")),1)]),_:1}),s(a(w),{label:a(i).translate("i18n_get_api_key_organization")},{default:n(()=>[s(a(R),{style:{width:"100%"},placeholder:a(i).translate("i18n_get_api_key_choose_organization"),size:"large",value:V.value,"onUpdate:value":W},{default:n(()=>[s(a(m),{label:a(i).translate("i18n_get_api_key_new_organization")},{default:n(()=>[(l(),u(a(z),{key:N},{default:n(()=>[p(_(a(i).translate("i18n_get_api_key_create_new_organization")),1)]),_:1}))]),_:1},8,["label"]),S.value.length>0?(l(),u(a(m),{key:0,label:a(i).translate("i18n_get_api_key_existing_organizations")},{default:n(()=>[(l(!0),P(C,null,T(S.value,o=>(l(),u(a(z),{key:o.key},{default:n(()=>[p(_(o.label),1)]),_:2},1024))),128))]),_:1},8,["label"])):j("",!0)]),_:1},8,["placeholder","value"])]),_:1},8,["label"]),e.value.type=="new-organization"?(l(),u(a(w),{key:0,label:a(i).translate("i18n_get_api_key_organization_name")},{default:n(()=>[s(a(D),{value:e.value.organizationName,"onUpdate:value":r[0]||(r[0]=o=>e.value.organizationName=o),placeholder:a(i).translate("i18n_get_api_key_choose_organization_name"),size:"large"},null,8,["value","placeholder"])]),_:1},8,["label"])):(l(),u(a(w),{key:1,label:a(i).translate("i18n_get_api_key_project")},{default:n(()=>[s(a(R),{style:{width:"100%"},disabled:e.value.type!="selected-organization",placeholder:a(i).translate("i18n_get_api_key_choose_project"),size:"large",value:q.value,"onUpdate:value":L},Z({default:n(()=>[a(y)?j("",!0):(l(),u(a(m),{key:0,label:a(i).translate("i18n_get_api_key_new_project")},{default:n(()=>[(l(),u(a(z),{key:A},{default:n(()=>[p(_(a(i).translate("i18n_get_api_key_create_new_project")),1)]),_:1}))]),_:1},8,["label"])),E.value.length>0&&!a(y)?(l(),u(a(m),{key:1,label:a(i).translate("i18n_get_api_key_existing_projects")},{default:n(()=>[(l(!0),P(C,null,T(E.value,o=>(l(),u(a(z),{key:o.key},{default:n(()=>[p(_(o.label),1)]),_:2},1024))),128))]),_:1},8,["label"])):j("",!0)]),_:2},[a(y)?{name:"notFoundContent",fn:n(()=>[s(a(x),{size:"small"})]),key:"0"}:void 0]),1032,["disabled","placeholder","value"])]),_:1},8,["label"])),(e.value.type=="new-organization"||e.value.type=="selected-organization")&&e.value.project.type=="new"?(l(),u(a(w),{key:2,label:"Project name"},{default:n(()=>[s(a(D),{value:e.value.project.projectName,"onUpdate:value":r[1]||(r[1]=o=>e.value.project.projectName=o),placeholder:a(i).translate("i18n_get_api_key_choose_project_name"),size:"large"},null,8,["value","placeholder"])]),_:1})):j("",!0),s(a($),{type:"primary",disabled:G.value,loading:I.value,onClick:J},{default:n(()=>[p(_(a(i).translate("i18n_get_api_key_generate_key_button")),1)]),_:1},8,["disabled","loading"])]),_:1}))}}),se={class:"container"},ue=B({__name:"ReturnApiKey",setup(g){const c=H(),d=O(null);async function k(v){if(c.query.redirect){const y=c.query.redirect;if(!y.match(/http:\/\/localhost:\d+/))throw new Error("Invalid redirect");const b=new URLSearchParams({"api-key":v});location.href=y+"?"+b.toString()}else d.value=v}return(v,y)=>(l(),P("div",se,[s(le,{class:"passwordless",onDone:k}),s(a(ie),{open:!!d.value,title:"Your generated API Key"},{footer:n(()=>[]),default:n(()=>[s(a(Q),{direction:"vertical"},{default:n(()=>[s(a(ne),null,{default:n(()=>[p(_(a(i).translate("i18n_get_api_key_api_key_info")),1)]),_:1}),s(a(oe),{copyable:"",code:"",style:{"font-size":"20px"}},{default:n(()=>[p(_(d.value),1)]),_:1}),s(a(re),{type:"warning","show-icon":""},{message:n(()=>[p(_(a(i).translate("i18n_get_api_key_api_key_warning")),1)]),_:1})]),_:1})]),_:1},8,["open"])]))}});const Ne=X(ue,[["__scopeId","data-v-3208fa60"]]);export{Ne as default};
//# sourceMappingURL=ReturnApiKey.60d6bbb5.js.map
