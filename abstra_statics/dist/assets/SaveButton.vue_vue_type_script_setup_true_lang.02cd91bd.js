import{d as f,r as c,b,c as y,w as p,ao as v,ex as g,u as m,bM as h,cu as w}from"./outputWidgets.e7339b4c.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[s]="daedeeca-2b0b-4e8c-be27-c5122ab22e7c",a._sentryDebugIdIdentifier="sentry-dbid-daedeeca-2b0b-4e8c-be27-c5122ab22e7c")}catch{}})();const k=f({__name:"SaveButton",props:{model:{},disabled:{type:Boolean}},emits:["error"],setup(a,{emit:s}){const n=a,t=c(!1),u=c(null);async function r(){t.value=!0;try{await n.model.save()}catch(e){e instanceof Error&&(s("error",e),w.error({message:"Error",description:e.message}),u.value=e)}finally{t.value=!1}}return addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey)&&e.key==="s"&&(e.preventDefault(),r())}),addEventListener("beforeunload",e=>{n.model.hasChanges()&&(e.preventDefault(),e.returnValue="")}),(e,o)=>{var d,l,i;return b(),y(m(h),{class:g(["save-button",{changes:(d=e.model)==null?void 0:d.hasChanges()}]),loading:t.value,disabled:(i=e.disabled)!=null?i:!((l=e.model)!=null&&l.hasChanges()),onClick:o[0]||(o[0]=C=>r())},{default:p(()=>[v(" Save ")]),_:1},8,["class","loading","disabled"])}}});export{k as _};
//# sourceMappingURL=SaveButton.vue_vue_type_script_setup_true_lang.02cd91bd.js.map
