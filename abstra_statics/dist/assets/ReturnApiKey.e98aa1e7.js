import{d as U,H as v,r as O,u as a,b as l,c as u,w as n,bf as S,f as s,aq as p,eD as _,e$ as i,ad as C,cy as z,cz as j,eu as x,eB as R,aC as D,ew as w,bx as T,eJ as Z,bE as $,eA as H,cA as Q,v as X}from"./outputWidgets.c199cd65.js";import"./router.304180d2.js";import"./index.b551111a.js";import{A as ee}from"./apiKey.08d1473b.js";import{P as B}from"./project.5f8f9f64.js";import{O as F}from"./organization.c20b6d1d.js";import{a as M}from"./asyncComputed.e8505f10.js";import{A as ae}from"./Title.2a2cadae.js";import{A as k,F as te}from"./Form.2bee2b00.js";import{m as ne}from"./url.266b7147.js";import{A as oe}from"./Paragraph.72c12540.js";import{A as re}from"./Text.47bac3a4.js";import{A as ie}from"./index.b7b9a7a6.js";import{M as le}from"./Modal.94298c95.js";import"./popupNotifcation.5704d43a.js";import"./index.cf4c23b9.js";import"./record.e60b008b.js";import"./pubsub.6235e50c.js";import"./hasIn.7b6e24c6.js";(function(){try{var f=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(f._sentryDebugIds=f._sentryDebugIds||{},f._sentryDebugIds[c]="7d5c02fd-7e8e-4b82-8ee0-07805f5df13f",f._sentryDebugIdIdentifier="sentry-dbid-7d5c02fd-7e8e-4b82-8ee0-07805f5df13f")}catch{}})();const A="NEW_ORGANIZATION_KEY",N="NEW_PROJECT_KEY",se=U({__name:"GetApiKey",emits:["done"],setup(f,{emit:c}){const{result:d,loading:b}=M(()=>F.list()),{result:g,loading:y,refetch:h}=M(async()=>{const t=e.value;return t.type!=="selected-organization"?[]:B.list(t.organizationId)}),E=v(()=>{var t,r;return(r=(t=d.value)==null?void 0:t.map(o=>({key:o.id,label:o.name})))!=null?r:[]}),K=v(()=>{var t,r;return(r=(t=g.value)==null?void 0:t.map(o=>({key:o.id,label:o.name})))!=null?r:[]}),V=v(()=>e.value.type==="initial"?!0:e.value.type==="new-organization"?!e.value.organizationName||!e.value.project.projectName:e.value.type==="selected-organization"&&e.value.project.type==="new"?!e.value.project.projectName:e.value.type==="selected-organization"&&e.value.project.type==="initial"),Y=async t=>await F.create(t.name),P=async(t,r)=>await B.create({organizationId:r,name:t.name}),I=async t=>await ee.create({projectId:t,name:"default"}),e=O({type:"initial"}),G=v(()=>{if(e.value.type!=="initial")return e.value.type==="new-organization"?A:e.value.organizationId}),W=v(()=>e.value.type==="selected-organization"&&e.value.project.type==="new"?N:e.value.type==="selected-organization"&&e.value.project.type==="selected"?e.value.project.projectId:void 0);function q(t){t||(e.value={type:"initial"}),t===A?e.value={type:"new-organization",organizationName:"",project:{type:"new",projectName:""}}:(e.value={type:"selected-organization",organizationId:String(t),project:{type:"initial"}},h())}function J(t){e.value.type==="selected-organization"&&(t||(e.value={type:"selected-organization",organizationId:e.value.organizationId,project:{type:"initial"}}),t===N?e.value={type:"selected-organization",organizationId:e.value.organizationId,project:{type:"new",projectName:""}}:e.value={type:"selected-organization",organizationId:e.value.organizationId,project:{type:"selected",projectId:String(t)}})}const m=O(!1);async function L(){if(!m.value){m.value=!0;try{if(e.value.type==="initial")return;if(e.value.type==="new-organization"){const t=await Y({name:e.value.organizationName}),r=await P({name:e.value.project.projectName},t.id),o=await I(r.id);o.value&&c("done",o.value)}if(e.value.type==="selected-organization"&&e.value.project.type==="new"){const t=await P({name:e.value.project.projectName},e.value.organizationId),r=await I(t.id);r.value&&c("done",r.value)}if(e.value.type==="selected-organization"&&e.value.project.type==="selected"){const t=await I(e.value.project.projectId);t.value&&c("done",t.value)}}finally{m.value=!1}}}return(t,r)=>a(b)||!a(d)?(l(),u(a(S),{key:0})):(l(),u(a(te),{key:1,layout:"vertical"},{default:n(()=>[s(a(ae),{level:3},{default:n(()=>[p(_(a(i).translate("i18n_get_api_key_choose_organization_and_project")),1)]),_:1}),s(a(k),{label:a(i).translate("i18n_get_api_key_organization")},{default:n(()=>[s(a(C),{style:{width:"100%"},placeholder:a(i).translate("i18n_get_api_key_choose_organization"),size:"large",value:G.value,"onUpdate:value":q},{default:n(()=>[s(a(z),{label:a(i).translate("i18n_get_api_key_new_organization")},{default:n(()=>[(l(),u(a(j),{key:A},{default:n(()=>[p(_(a(i).translate("i18n_get_api_key_create_new_organization")),1)]),_:1}))]),_:1},8,["label"]),E.value.length>0?(l(),u(a(z),{key:0,label:a(i).translate("i18n_get_api_key_existing_organizations")},{default:n(()=>[(l(!0),x(D,null,R(E.value,o=>(l(),u(a(j),{key:o.key},{default:n(()=>[p(_(o.label),1)]),_:2},1024))),128))]),_:1},8,["label"])):w("",!0)]),_:1},8,["placeholder","value"])]),_:1},8,["label"]),e.value.type=="new-organization"?(l(),u(a(k),{key:0,label:a(i).translate("i18n_get_api_key_organization_name")},{default:n(()=>[s(a(T),{value:e.value.organizationName,"onUpdate:value":r[0]||(r[0]=o=>e.value.organizationName=o),placeholder:a(i).translate("i18n_get_api_key_choose_organization_name"),size:"large"},null,8,["value","placeholder"])]),_:1},8,["label"])):(l(),u(a(k),{key:1,label:a(i).translate("i18n_get_api_key_project")},{default:n(()=>[s(a(C),{style:{width:"100%"},disabled:e.value.type!="selected-organization",placeholder:a(i).translate("i18n_get_api_key_choose_project"),size:"large",value:W.value,"onUpdate:value":J},Z({default:n(()=>[a(y)?w("",!0):(l(),u(a(z),{key:0,label:a(i).translate("i18n_get_api_key_new_project")},{default:n(()=>[(l(),u(a(j),{key:N},{default:n(()=>[p(_(a(i).translate("i18n_get_api_key_create_new_project")),1)]),_:1}))]),_:1},8,["label"])),K.value.length>0&&!a(y)?(l(),u(a(z),{key:1,label:a(i).translate("i18n_get_api_key_existing_projects")},{default:n(()=>[(l(!0),x(D,null,R(K.value,o=>(l(),u(a(j),{key:o.key},{default:n(()=>[p(_(o.label),1)]),_:2},1024))),128))]),_:1},8,["label"])):w("",!0)]),_:2},[a(y)?{name:"notFoundContent",fn:n(()=>[s(a(S),{size:"small"})]),key:"0"}:void 0]),1032,["disabled","placeholder","value"])]),_:1},8,["label"])),(e.value.type=="new-organization"||e.value.type=="selected-organization")&&e.value.project.type=="new"?(l(),u(a(k),{key:2,label:"Project name"},{default:n(()=>[s(a(T),{value:e.value.project.projectName,"onUpdate:value":r[1]||(r[1]=o=>e.value.project.projectName=o),placeholder:a(i).translate("i18n_get_api_key_choose_project_name"),size:"large"},null,8,["value","placeholder"])]),_:1})):w("",!0),s(a($),{type:"primary",disabled:V.value,loading:m.value,onClick:L},{default:n(()=>[p(_(a(i).translate("i18n_get_api_key_generate_key_button")),1)]),_:1},8,["disabled","loading"])]),_:1}))}}),ue={class:"container"},ce=U({__name:"ReturnApiKey",setup(f){const c=H(),d=O(null);async function b(g){if(c.query.redirect){const y=c.query.redirect;if(!y.match(/http:\/\/localhost:\d+/))throw new Error("Invalid redirect");const h=decodeURIComponent(y);location.href=ne(h,{"api-key":g})}else d.value=g}return(g,y)=>(l(),x("div",ue,[s(se,{class:"passwordless",onDone:b}),s(a(le),{open:!!d.value,title:"Your generated API Key"},{footer:n(()=>[]),default:n(()=>[s(a(Q),{direction:"vertical"},{default:n(()=>[s(a(oe),null,{default:n(()=>[p(_(a(i).translate("i18n_get_api_key_api_key_info")),1)]),_:1}),s(a(re),{copyable:"",code:"",style:{"font-size":"20px"}},{default:n(()=>[p(_(d.value),1)]),_:1}),s(a(ie),{type:"warning","show-icon":""},{message:n(()=>[p(_(a(i).translate("i18n_get_api_key_api_key_warning")),1)]),_:1})]),_:1})]),_:1},8,["open"])]))}});const Ee=X(ce,[["__scopeId","data-v-1f3cfe57"]]);export{Ee as default};
//# sourceMappingURL=ReturnApiKey.e98aa1e7.js.map