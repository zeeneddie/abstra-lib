import{d,r,o as i,a5 as l,b as u,c,N as y,af as b}from"./registerWidgets.d08da683.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d5798774-903d-4ff9-8b4d-a1aff1ffa6fd",e._sentryDebugIdIdentifier="sentry-dbid-d5798774-903d-4ff9-8b4d-a1aff1ffa6fd")}catch{}})();const g=d({__name:"ActionButton",props:{action:null},emits:["next"],setup(e,{emit:n}){const o=e,s=r(null);i(()=>{s.value&&o.action.setElement(s.value),l.addAction(o.action)});const a=()=>n("next");return(m,t)=>(u(),c("button",{ref_key:"element",ref:s,class:"next-button",onClick:t[0]||(t[0]=f=>a()),onKeydown:t[1]||(t[1]=b(f=>a(),["enter"]))},y(e.action.name),545))}});export{g as _};
//# sourceMappingURL=ActionButton.vue_vue_type_script_setup_true_lang.b1d2dc3c.js.map
