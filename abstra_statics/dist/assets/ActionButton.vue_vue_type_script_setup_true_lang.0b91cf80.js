import{d as i,r as d,o as c,eM as l,b as u,c as b,eA as p,eR as y}from"./registerWidgets.92d2f644.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5af4c74c-862b-4b48-a7e8-bafa52f5fdb8",e._sentryDebugIdIdentifier="sentry-dbid-5af4c74c-862b-4b48-a7e8-bafa52f5fdb8")}catch{}})();const g=i({__name:"ActionButton",props:{action:{}},emits:["next"],setup(e,{emit:n}){const o=e,s=d(null);c(()=>{s.value&&o.action.setElement(s.value),l.addAction(o.action)});const a=()=>n("next");return(r,t)=>(u(),b("button",{ref_key:"element",ref:s,class:"next-button",onClick:t[0]||(t[0]=f=>a()),onKeydown:t[1]||(t[1]=y(f=>a(),["enter"]))},p(r.action.name),545))}});export{g as _};
//# sourceMappingURL=ActionButton.vue_vue_type_script_setup_true_lang.0b91cf80.js.map
