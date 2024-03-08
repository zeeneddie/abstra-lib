import{d as f,o as y,L as b,H as v,b as _,ev as g,f as l,w as n,u as s,bG as w,ar as m}from"./outputWidgets.d6771bd9.js";import{W as x}from"./workspaces.01b810f0.js";import{E as i}from"./envVars.3be1c1f6.js";import{i as k}from"./icons.cbca2df4.js";import{C}from"./CrudView.86abcaac.js";import{A as h}from"./index.876b4bcd.js";import"./runnerData.3ab9535d.js";import"./url.476008e4.js";import"./record.d1488526.js";import"./pubsub.5586b81f.js";import"./asyncComputed.80d29ea0.js";import"./Paragraph.43dd6508.js";import"./Base.0ee41a7c.js";import"./Typography.0310f653.js";import"./Form.9219dd96.js";import"./hasIn.0e8dd531.js";import"./Modal.c04788fa.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.e9b8a5cf.js";import"./router.37b12b93.js";import"./popupNotifcation.2eab21e1.js";import"./index.3d271e06.js";import"./Title.47214a2f.js";import"./Text.d26a4614.js";import"./index.d957dad1.js";import"./SyncOutlined.3fd76732.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="c47c1ffb-7ec0-4752-a6e5-a904ab63f48a",a._sentryDebugIdIdentifier="sentry-dbid-c47c1ffb-7ec0-4752-a6e5-a904ab63f48a")}catch{}})();const E={style:{display:"flex","flex-direction":"column","justify-content":"center",padding:"40px 120px"}},X=f({__name:"EnvVarsEditor",setup(a){let o=null;y(()=>{o=setInterval(i.listComputed.refetch,2e3)}),b(()=>{o&&clearInterval(o)});function p(){var e;(e=x.computed.result.value)==null||e.openFile(".env")}const d=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}],c=v(()=>{var e,t;return{columns:[{name:"Key"},{name:"Value"},{name:""}],rows:(t=(e=i.listComputed.result.value)==null?void 0:e.map(r=>({key:r.key,cells:[{type:"text",text:r.key},{text:r.value,type:"secret"},{type:"actions",actions:[{icon:k,label:"Delete",onClick:()=>r.delete(),dangerous:!0}]}]})))!=null?t:[]}});async function u({key:e,value:t}){await i.create(e,t)}return(e,t)=>(_(),g("div",E,[l(C,{"entity-name":"Env var",loading:s(i).listComputed.loading.value,title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:c.value,"create-button-text":"Add Environment Variable",fields:d,live:"",onCreate:u},{secondary:n(()=>[l(s(w),{onClick:t[0]||(t[0]=r=>p())},{default:n(()=>[m("Open .env")]),_:1})]),extra:n(()=>[l(s(h),{"show-icon":"",style:{"margin-top":"20px"}},{message:n(()=>[m(" This is simply a helper to manage your environment variables locally. The variables set here will not be deployed to Cloud with your project. ")]),_:1})]),_:1},8,["loading","table"])]))}});export{X as default};
//# sourceMappingURL=EnvVarsEditor.7725c449.js.map
