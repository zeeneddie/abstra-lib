import{d as i,r as d,o as c,a5 as l,b as f,c as u,N as b,af as y}from"./registerWidgets.60bba559.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="1ce89004-e0ec-486a-b3b0-91b9a2cb8f7d",e._sentryDebugIdIdentifier="sentry-dbid-1ce89004-e0ec-486a-b3b0-91b9a2cb8f7d")}catch{}})();const g=i({__name:"ActionButton",props:{action:null},emits:["next"],setup(e,{emit:n}){const o=e,s=d(null);c(()=>{s.value&&o.action.setElement(s.value),l.addAction(o.action)});const a=()=>n("next");return(m,t)=>(f(),u("button",{ref_key:"element",ref:s,class:"next-button",onClick:t[0]||(t[0]=r=>a()),onKeydown:t[1]||(t[1]=y(r=>a(),["enter"]))},b(e.action.name),545))}});export{g as _};
//# sourceMappingURL=ActionButton.vue_vue_type_script_setup_true_lang.11413f0b.js.map
