import{d as y,o as f,L as b,H as v,b as _,ev as g,f as l,w as a,u as s,bG as w,ar as d}from"./outputWidgets.8234a0a2.js";import{W as x}from"./workspaces.44462ac0.js";import{E as i}from"./envVars.0a0671d5.js";import{i as k}from"./icons.ce90da9e.js";import{C}from"./CrudView.220a75f9.js";import{A as h}from"./index.96339c48.js";import"./runnerData.603b25ca.js";import"./url.ca929c1f.js";import"./record.03a7c34e.js";import"./pubsub.9d785f5e.js";import"./asyncComputed.b409af1b.js";import"./Paragraph.e2fea462.js";import"./Base.3f643fc8.js";import"./Typography.d90f6795.js";import"./Form.fe503f80.js";import"./hasIn.eb2b58d7.js";import"./Modal.e2b99765.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.ed52fbe0.js";import"./router.3e1b090d.js";import"./popupNotifcation.0cc7a4e0.js";import"./index.75d219a5.js";import"./Title.f4e62791.js";import"./Text.26e815ea.js";import"./index.51ad8f20.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="5c9614ce-ec85-482d-81b0-e2dd01f63446",n._sentryDebugIdIdentifier="sentry-dbid-5c9614ce-ec85-482d-81b0-e2dd01f63446")}catch{}})();const E={style:{display:"flex","flex-direction":"column","justify-content":"center",padding:"40px 120px"}},R=y({__name:"EnvVarsEditor",setup(n){let o=null;f(()=>{o=setInterval(i.listComputed.refetch,2e3)}),b(()=>{o&&clearInterval(o)});function p(){var e;(e=x.computed.result.value)==null||e.openFile(".env")}const m=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}],c=v(()=>{var e,t;return{columns:[{name:"Key"},{name:"Value"},{name:""}],rows:(t=(e=i.listComputed.result.value)==null?void 0:e.map(r=>({key:r.key,cells:[{type:"text",text:r.key},{text:r.value,type:"secret"},{type:"actions",actions:[{icon:k,label:"Delete",onClick:()=>r.delete(),dangerous:!0}]}]})))!=null?t:[]}});async function u({key:e,value:t}){await i.create(e,t)}return(e,t)=>(_(),g("div",E,[l(C,{"entity-name":"Env var",loading:s(i).listComputed.loading.value,title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:c.value,"create-button-text":"Add Environment Variable",fields:m,live:"",onCreate:u},{secondary:a(()=>[l(s(w),{onClick:t[0]||(t[0]=r=>p())},{default:a(()=>[d("Open .env")]),_:1})]),extra:a(()=>[l(s(h),{"show-icon":"",style:{"margin-top":"20px"}},{message:a(()=>[d(" This is simply a helper to manage your environment variables locally. The variables set here will not be deployed to Cloud with your project. ")]),_:1})]),_:1},8,["loading","table"])]))}});export{R as default};
//# sourceMappingURL=EnvVarsEditor.a8cfa2fd.js.map
