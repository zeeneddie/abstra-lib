import{d as l,r as i,b as u,c as f,w as c,b0 as y,ew as v,u as b,cb as p}from"./registerWidgets.5ceb46ef.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="50032953-830a-419c-9ec8-aa0ea230460c",a._sentryDebugIdIdentifier="sentry-dbid-50032953-830a-419c-9ec8-aa0ea230460c")}catch{}})();const w=l({__name:"SaveButton",props:{model:{}},setup(a){const n=a,s=i(!1);async function t(){s.value=!0;try{await n.model.save()}finally{s.value=!1}}return addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey)&&e.key==="s"&&(e.preventDefault(),t())}),addEventListener("beforeunload",e=>{n.model.hasChanges()&&(e.preventDefault(),e.returnValue="")}),(e,o)=>{var d,r;return u(),f(b(p),{class:v(["save-button",{changes:(d=e.model)==null?void 0:d.hasChanges()}]),loading:s.value,disabled:!((r=e.model)!=null&&r.hasChanges()),onClick:o[0]||(o[0]=g=>t())},{default:c(()=>[y(" Save ")]),_:1},8,["class","loading","disabled"])}}});export{w as _};
//# sourceMappingURL=SaveButton.vue_vue_type_script_setup_true_lang.939451c7.js.map
