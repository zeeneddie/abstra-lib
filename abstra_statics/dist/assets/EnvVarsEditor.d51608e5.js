import{d as f,o as y,K as b,H as v,b as _,eu as g,f as l,w as r,u as s,eP as w,bF as x,aq as d}from"./outputWidgets.2f54a46f.js";import{W as k}from"./workspaces.315fc6b4.js";import{E as i}from"./envVars.cdd38b6d.js";import{C}from"./CrudView.b1924cfa.js";import{A as h}from"./index.b9cedb30.js";import"./runnerData.11088c32.js";import"./url.3c35ecc3.js";import"./record.f8174d1b.js";import"./pubsub.28305d1c.js";import"./asyncComputed.2e5475ea.js";import"./Paragraph.b5c2bff3.js";import"./Text.4c3787cc.js";import"./Form.519ea702.js";import"./hasIn.86cc139a.js";import"./Modal.be0f5629.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.13ddffc1.js";import"./router.64955329.js";import"./popupNotifcation.994caea3.js";import"./index.00ed081b.js";import"./Title.91cb4483.js";import"./index.e20064d2.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="9fa3b709-9e1a-45ab-afcd-f27873f7f48d",a._sentryDebugIdIdentifier="sentry-dbid-9fa3b709-9e1a-45ab-afcd-f27873f7f48d")}catch{}})();const E={style:{display:"flex","flex-direction":"column","justify-content":"center",padding:"40px 120px"}},J=f({__name:"EnvVarsEditor",setup(a){let o=null;y(()=>{o=setInterval(i.listComputed.refetch,2e3)}),b(()=>{o&&clearInterval(o)});function p(){var e;(e=k.computed.result.value)==null||e.openFile(".env")}const m=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}],u=v(()=>{var e,t;return{columns:[{name:"Key"},{name:"Value"},{name:""}],rows:(t=(e=i.listComputed.result.value)==null?void 0:e.map(n=>({key:n.key,cells:[{type:"text",text:n.key},{text:n.value,type:"secret"},{type:"actions",actions:[{icon:w,label:"Delete",onClick:()=>n.delete(),dangerous:!0}]}]})))!=null?t:[]}});async function c({key:e,value:t}){await i.create(e,t)}return(e,t)=>(_(),g("div",E,[l(C,{"entity-name":"Env var",loading:s(i).listComputed.loading.value,title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:u.value,"create-button-text":"Add Environment Variable",fields:m,live:"",onCreate:c},{secondary:r(()=>[l(s(x),{onClick:t[0]||(t[0]=n=>p())},{default:r(()=>[d("Open .env")]),_:1})]),extra:r(()=>[l(s(h),{"show-icon":"",style:{"margin-top":"20px"}},{message:r(()=>[d(" This is simply a helper to manage your environment variables locally. The variables set here will not be deployed to Cloud with your project. ")]),_:1})]),_:1},8,["loading","table"])]))}});export{J as default};
//# sourceMappingURL=EnvVarsEditor.d51608e5.js.map