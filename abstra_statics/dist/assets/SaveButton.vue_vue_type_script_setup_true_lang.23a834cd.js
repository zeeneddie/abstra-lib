import{d as y,r as c,b,c as p,w as v,aq as g,ey as m,u as h,bF as w,cx as C}from"./outputWidgets.eb54c6d5.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[s]="c9c22611-7813-4421-bfd0-6e4bb940c3c1",a._sentryDebugIdIdentifier="sentry-dbid-c9c22611-7813-4421-bfd0-6e4bb940c3c1")}catch{}})();const _=y({__name:"SaveButton",props:{model:{},disabled:{type:Boolean},type:{}},emits:["error"],setup(a,{emit:s}){const n=a,t=c(!1),u=c(null);async function r(){t.value=!0;try{await n.model.save()}catch(e){e instanceof Error&&(s("error",e),C.error({message:"Error",description:e.message}),u.value=e)}finally{t.value=!1}}return addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey)&&e.key==="s"&&(e.preventDefault(),r())}),addEventListener("beforeunload",e=>{n.model.hasChanges()&&(e.preventDefault(),e.returnValue="")}),(e,o)=>{var d,l,i,f;return b(),p(h(w),{class:m(["save-button",{changes:(d=e.model)==null?void 0:d.hasChanges()}]),loading:t.value,disabled:(i=e.disabled)!=null?i:!((l=e.model)!=null&&l.hasChanges()),type:(f=e.type)!=null?f:"default",onClick:o[0]||(o[0]=k=>r())},{default:v(()=>[g(" Save ")]),_:1},8,["class","loading","disabled","type"])}}});export{_};
//# sourceMappingURL=SaveButton.vue_vue_type_script_setup_true_lang.23a834cd.js.map
