import{d as i,r as d,o as f,a5 as l,b as u,c,N as b,af as y}from"./registerWidgets.358232d6.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="db6e3b86-2a15-4449-887b-8fa0ffa4913e",e._sentryDebugIdIdentifier="sentry-dbid-db6e3b86-2a15-4449-887b-8fa0ffa4913e")}catch{}})();const g=i({__name:"ActionButton",props:{action:null},emits:["next"],setup(e,{emit:n}){const o=e,s=d(null);f(()=>{s.value&&o.action.setElement(s.value),l.addAction(o.action)});const a=()=>n("next");return(m,t)=>(u(),c("button",{ref_key:"element",ref:s,class:"next-button",onClick:t[0]||(t[0]=r=>a()),onKeydown:t[1]||(t[1]=y(r=>a(),["enter"]))},b(e.action.name),545))}});export{g as _};
//# sourceMappingURL=ActionButton.vue_vue_type_script_setup_true_lang.7e7bf4fe.js.map
