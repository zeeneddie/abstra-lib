import{d as l,r as f,b as i,c as u,w as c,b0 as y,ew as v,u as b,cb as p}from"./registerWidgets.6188faf0.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="d4ee0007-32f6-44d7-a326-95c1980f78ac",a._sentryDebugIdIdentifier="sentry-dbid-d4ee0007-32f6-44d7-a326-95c1980f78ac")}catch{}})();const w=l({__name:"SaveButton",props:{model:{}},setup(a){const n=a,s=f(!1);async function t(){s.value=!0;try{await n.model.save()}finally{s.value=!1}}return addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey)&&e.key==="s"&&(e.preventDefault(),t())}),addEventListener("beforeunload",e=>{n.model.hasChanges()&&(e.preventDefault(),e.returnValue="")}),(e,d)=>{var o,r;return i(),u(b(p),{class:v(["save-button",{changes:(o=e.model)==null?void 0:o.hasChanges()}]),loading:s.value,disabled:!((r=e.model)!=null&&r.hasChanges()),onClick:d[0]||(d[0]=g=>t())},{default:c(()=>[y(" Save ")]),_:1},8,["class","loading","disabled"])}}});export{w as _};
//# sourceMappingURL=SaveButton.vue_vue_type_script_setup_true_lang.f3b42cfb.js.map
