import{d as y,o as b,L as f,H as v,b as _,ev as g,f as l,w as r,u as s,bG as w,ar as m}from"./outputWidgets.cd9a7023.js";import{W as x}from"./workspaces.7a569a92.js";import{E as i}from"./envVars.b5cd4e38.js";import{i as k}from"./icons.0bc7085f.js";import{C}from"./CrudView.ac7cecc9.js";import{A as h}from"./index.95c89dbd.js";import"./runnerData.db571b78.js";import"./url.60859896.js";import"./record.4940789d.js";import"./pubsub.56df9c23.js";import"./asyncComputed.d485b66f.js";import"./Paragraph.7a1e228a.js";import"./Base.db9f67df.js";import"./Typography.686aa668.js";import"./Form.6eabd32b.js";import"./hasIn.5fdc0bbb.js";import"./Modal.45b0cd08.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.83861dc8.js";import"./router.3892c6ef.js";import"./popupNotifcation.d4f20194.js";import"./index.ad4a79ec.js";import"./Title.05e583cd.js";import"./Text.8af9010b.js";import"./index.d8200973.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="b30bc66a-e1c1-471a-9513-3bd09a1841e8",a._sentryDebugIdIdentifier="sentry-dbid-b30bc66a-e1c1-471a-9513-3bd09a1841e8")}catch{}})();const E={style:{display:"flex","flex-direction":"column","justify-content":"center",padding:"40px 120px"}},R=y({__name:"EnvVarsEditor",setup(a){let o=null;b(()=>{o=setInterval(i.listComputed.refetch,2e3)}),f(()=>{o&&clearInterval(o)});function p(){var e;(e=x.computed.result.value)==null||e.openFile(".env")}const d=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}],c=v(()=>{var e,t;return{columns:[{name:"Key"},{name:"Value"},{name:""}],rows:(t=(e=i.listComputed.result.value)==null?void 0:e.map(n=>({key:n.key,cells:[{type:"text",text:n.key},{text:n.value,type:"secret"},{type:"actions",actions:[{icon:k,label:"Delete",onClick:()=>n.delete(),dangerous:!0}]}]})))!=null?t:[]}});async function u({key:e,value:t}){await i.create(e,t)}return(e,t)=>(_(),g("div",E,[l(C,{"entity-name":"Env var",loading:s(i).listComputed.loading.value,title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:c.value,"create-button-text":"Add Environment Variable",fields:d,live:"",onCreate:u},{secondary:r(()=>[l(s(w),{onClick:t[0]||(t[0]=n=>p())},{default:r(()=>[m("Open .env")]),_:1})]),extra:r(()=>[l(s(h),{"show-icon":"",style:{"margin-top":"20px"}},{message:r(()=>[m(" This is simply a helper to manage your environment variables locally. The variables set here will not be deployed to Cloud with your project. ")]),_:1})]),_:1},8,["loading","table"])]))}});export{R as default};
//# sourceMappingURL=EnvVarsEditor.11a59c7e.js.map
