import{d as f,o as y,L as v,H as b,b as _,ev as g,f as l,w as r,u as s,bV as w,ar as d}from"./outputWidgets.f9d55cb0.js";import{W as x}from"./workspaces.0264876b.js";import{E as i}from"./envVars.af11a897.js";import{i as k}from"./icons.26963148.js";import{C}from"./CrudView.76508218.js";import{A as h}from"./index.28511905.js";import"./runnerData.9a65427c.js";import"./url.af4204dd.js";import"./record.ac755122.js";import"./pubsub.eff48f0b.js";import"./asyncComputed.c2e425ff.js";import"./Paragraph.3b137fb5.js";import"./Base.910fdb8b.js";import"./Typography.3699d45d.js";import"./Form.7dd6cf64.js";import"./hasIn.d928989a.js";import"./Modal.2a929d1b.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.4a0431c6.js";import"./router.1ee09928.js";import"./index.922e9b73.js";import"./Title.785efc74.js";import"./Text.8d155850.js";import"./index.e3695a5b.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="93fee29d-90a1-490a-84f8-e7ce27a093d1",a._sentryDebugIdIdentifier="sentry-dbid-93fee29d-90a1-490a-84f8-e7ce27a093d1")}catch{}})();const E={style:{display:"flex","flex-direction":"column","justify-content":"center",padding:"40px 120px"}},Q=f({__name:"EnvVarsEditor",setup(a){let o=null;y(()=>{o=setInterval(i.listComputed.refetch,2e3)}),v(()=>{o&&clearInterval(o)});function p(){var e;(e=x.computed.result.value)==null||e.openFile(".env")}const m=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}],u=b(()=>{var e,t;return{columns:[{name:"Key"},{name:"Value"},{name:""}],rows:(t=(e=i.listComputed.result.value)==null?void 0:e.map(n=>({key:n.key,cells:[{type:"text",text:n.key},{text:n.value,type:"secret"},{type:"actions",actions:[{icon:k,label:"Delete",onClick:()=>n.delete(),dangerous:!0}]}]})))!=null?t:[]}});async function c({key:e,value:t}){await i.create(e,t)}return(e,t)=>(_(),g("div",E,[l(C,{"entity-name":"Env var",loading:s(i).listComputed.loading.value,title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:u.value,"create-button-text":"Add Environment Variable",fields:m,live:"",onCreate:c},{secondary:r(()=>[l(s(w),{onClick:t[0]||(t[0]=n=>p())},{default:r(()=>[d("Open .env")]),_:1})]),extra:r(()=>[l(s(h),{"show-icon":"",style:{"margin-top":"20px"}},{message:r(()=>[d(" This is simply a helper to manage your environment variables locally. The variables set here will not be deployed to Cloud with your project. ")]),_:1})]),_:1},8,["loading","table"])]))}});export{Q as default};
//# sourceMappingURL=EnvVarsEditor.ecc9fb47.js.map
