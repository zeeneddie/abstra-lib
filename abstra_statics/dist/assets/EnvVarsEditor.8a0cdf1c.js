import{d as f,o as y,L as b,H as v,b as _,ev as g,f as l,w as a,u as s,bG as w,ar as p}from"./outputWidgets.f0391a74.js";import{W as x}from"./workspaces.0a261adb.js";import{E as i}from"./envVars.2e25c3f4.js";import{i as k}from"./icons.f7511453.js";import{C}from"./CrudView.9f2d78f4.js";import{A as h}from"./index.03310b61.js";import"./runnerData.e6656cbd.js";import"./url.3db2a8aa.js";import"./record.6f7f627d.js";import"./pubsub.73224ce6.js";import"./asyncComputed.363f961e.js";import"./Paragraph.4c6547df.js";import"./Base.c690457d.js";import"./Typography.2e02df67.js";import"./Form.1aee5650.js";import"./hasIn.23612021.js";import"./Modal.7a75e616.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.6af10b5d.js";import"./router.9521f915.js";import"./popupNotifcation.bb922524.js";import"./index.9869cb58.js";import"./Title.18e0b53f.js";import"./Text.3e9cee86.js";import"./index.0e674df9.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="570f7ab6-fe77-476d-ba6d-e32cc856eedd",n._sentryDebugIdIdentifier="sentry-dbid-570f7ab6-fe77-476d-ba6d-e32cc856eedd")}catch{}})();const E={style:{display:"flex","flex-direction":"column","justify-content":"center",padding:"40px 120px"}},R=f({__name:"EnvVarsEditor",setup(n){let o=null;y(()=>{o=setInterval(i.listComputed.refetch,2e3)}),b(()=>{o&&clearInterval(o)});function d(){var e;(e=x.computed.result.value)==null||e.openFile(".env")}const m=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}],c=v(()=>{var e,t;return{columns:[{name:"Key"},{name:"Value"},{name:""}],rows:(t=(e=i.listComputed.result.value)==null?void 0:e.map(r=>({key:r.key,cells:[{type:"text",text:r.key},{text:r.value,type:"secret"},{type:"actions",actions:[{icon:k,label:"Delete",onClick:()=>r.delete(),dangerous:!0}]}]})))!=null?t:[]}});async function u({key:e,value:t}){await i.create(e,t)}return(e,t)=>(_(),g("div",E,[l(C,{"entity-name":"Env var",loading:s(i).listComputed.loading.value,title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:c.value,"create-button-text":"Add Environment Variable",fields:m,live:"",onCreate:u},{secondary:a(()=>[l(s(w),{onClick:t[0]||(t[0]=r=>d())},{default:a(()=>[p("Open .env")]),_:1})]),extra:a(()=>[l(s(h),{"show-icon":"",style:{"margin-top":"20px"}},{message:a(()=>[p(" This is simply a helper to manage your environment variables locally. The variables set here will not be deployed to Cloud with your project. ")]),_:1})]),_:1},8,["loading","table"])]))}});export{R as default};
//# sourceMappingURL=EnvVarsEditor.8a0cdf1c.js.map
