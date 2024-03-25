import{d as y,o as f,L as b,H as v,b as _,ev as g,f as l,w as a,u as s,bG as w,ar as m}from"./outputWidgets.7e6eb177.js";import{W as x}from"./workspaces.79fe4cd5.js";import{E as i}from"./envVars.1339ad37.js";import{i as k}from"./icons.42e022b7.js";import{C}from"./CrudView.93e6cce5.js";import{A as h}from"./index.01890b09.js";import"./runnerData.f1e4e5ad.js";import"./url.577173aa.js";import"./record.a100d067.js";import"./pubsub.782b9d46.js";import"./asyncComputed.5c83bb8a.js";import"./Paragraph.a13a9f0d.js";import"./Base.fe1b5bdf.js";import"./Typography.9133b65d.js";import"./Form.f6e73dd6.js";import"./hasIn.958b80f9.js";import"./Modal.dcc2c9e3.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.5e43f505.js";import"./router.1fa38c42.js";import"./popupNotifcation.1c8d50aa.js";import"./index.d8062c86.js";import"./Title.f948a676.js";import"./Text.497ac05f.js";import"./index.a964b97b.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="5a20943d-118a-4867-8714-b4995093290f",n._sentryDebugIdIdentifier="sentry-dbid-5a20943d-118a-4867-8714-b4995093290f")}catch{}})();const E={style:{display:"flex","flex-direction":"column","justify-content":"center",padding:"40px 120px"}},R=y({__name:"EnvVarsEditor",setup(n){let o=null;f(()=>{o=setInterval(i.listComputed.refetch,2e3)}),b(()=>{o&&clearInterval(o)});function p(){var e;(e=x.computed.result.value)==null||e.openFile(".env")}const d=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}],u=v(()=>{var e,t;return{columns:[{name:"Key"},{name:"Value"},{name:""}],rows:(t=(e=i.listComputed.result.value)==null?void 0:e.map(r=>({key:r.key,cells:[{type:"text",text:r.key},{text:r.value,type:"secret"},{type:"actions",actions:[{icon:k,label:"Delete",onClick:()=>r.delete(),dangerous:!0}]}]})))!=null?t:[]}});async function c({key:e,value:t}){await i.create(e,t)}return(e,t)=>(_(),g("div",E,[l(C,{"entity-name":"Env var",loading:s(i).listComputed.loading.value,title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:u.value,"create-button-text":"Add Environment Variable",fields:d,live:"",onCreate:c},{secondary:a(()=>[l(s(w),{onClick:t[0]||(t[0]=r=>p())},{default:a(()=>[m("Open .env")]),_:1})]),extra:a(()=>[l(s(h),{"show-icon":"",style:{"margin-top":"20px"}},{message:a(()=>[m(" This is simply a helper to manage your environment variables locally. The variables set here will not be deployed to Cloud with your project. ")]),_:1})]),_:1},8,["loading","table"])]))}});export{R as default};
//# sourceMappingURL=EnvVarsEditor.76efcea3.js.map