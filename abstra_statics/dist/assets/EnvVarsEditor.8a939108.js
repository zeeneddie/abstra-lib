import{d as f,o as y,L as b,H as v,b as _,ev as g,f as l,w as r,u as s,bV as w,ar as m}from"./outputWidgets.d0655b77.js";import{W as x}from"./workspaces.7c08de42.js";import{E as i}from"./envVars.25ee92e5.js";import{i as k}from"./icons.48cd3bcb.js";import{C}from"./CrudView.c731a69e.js";import{A as h}from"./index.66b20ccf.js";import"./runnerData.ce4773e4.js";import"./url.33464e0a.js";import"./record.f8788007.js";import"./pubsub.8725881c.js";import"./asyncComputed.6d9729a3.js";import"./Paragraph.e2948537.js";import"./Base.f7249e73.js";import"./Typography.a3b07fc7.js";import"./Form.7eb0b389.js";import"./hasIn.195539bf.js";import"./Modal.6e2e9de7.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.d8c95f41.js";import"./router.f0341f86.js";import"./index.f6421c28.js";import"./Title.9cf52895.js";import"./Text.9f828711.js";import"./index.0c97541b.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="f52a1f10-4545-4810-a6a7-6e0ec6abcbe8",a._sentryDebugIdIdentifier="sentry-dbid-f52a1f10-4545-4810-a6a7-6e0ec6abcbe8")}catch{}})();const E={style:{display:"flex","flex-direction":"column","justify-content":"center",padding:"40px 120px"}},Q=f({__name:"EnvVarsEditor",setup(a){let o=null;y(()=>{o=setInterval(i.listComputed.refetch,2e3)}),b(()=>{o&&clearInterval(o)});function p(){var e;(e=x.computed.result.value)==null||e.openFile(".env")}const d=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}],c=v(()=>{var e,t;return{columns:[{name:"Key"},{name:"Value"},{name:""}],rows:(t=(e=i.listComputed.result.value)==null?void 0:e.map(n=>({key:n.key,cells:[{type:"text",text:n.key},{text:n.value,type:"secret"},{type:"actions",actions:[{icon:k,label:"Delete",onClick:()=>n.delete(),dangerous:!0}]}]})))!=null?t:[]}});async function u({key:e,value:t}){await i.create(e,t)}return(e,t)=>(_(),g("div",E,[l(C,{"entity-name":"Env var",loading:s(i).listComputed.loading.value,title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:c.value,"create-button-text":"Add Environment Variable",fields:d,live:"",onCreate:u},{secondary:r(()=>[l(s(w),{onClick:t[0]||(t[0]=n=>p())},{default:r(()=>[m("Open .env")]),_:1})]),extra:r(()=>[l(s(h),{"show-icon":"",style:{"margin-top":"20px"}},{message:r(()=>[m(" This is simply a helper to manage your environment variables locally. The variables set here will not be deployed to Cloud with your project. ")]),_:1})]),_:1},8,["loading","table"])]))}});export{Q as default};
//# sourceMappingURL=EnvVarsEditor.8a939108.js.map
