import{d,r as f,o as c,a6 as l,b as u,c as b,O as p,af as y}from"./registerWidgets.2f354556.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="671aef02-385b-4484-aad5-8f95c5cb6588",e._sentryDebugIdIdentifier="sentry-dbid-671aef02-385b-4484-aad5-8f95c5cb6588")}catch{}})();const g=d({__name:"ActionButton",props:{action:{}},emits:["next"],setup(e,{emit:n}){const o=e,s=f(null);c(()=>{s.value&&o.action.setElement(s.value),l.addAction(o.action)});const a=()=>n("next");return(r,t)=>(u(),b("button",{ref_key:"element",ref:s,class:"next-button",onClick:t[0]||(t[0]=i=>a()),onKeydown:t[1]||(t[1]=y(i=>a(),["enter"]))},p(r.action.name),545))}});export{g as _};
//# sourceMappingURL=ActionButton.vue_vue_type_script_setup_true_lang.ab6c6d5f.js.map
