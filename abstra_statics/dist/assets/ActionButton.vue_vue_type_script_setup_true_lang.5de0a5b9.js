import{d as r,r as i,o as l,a5 as c,b as f,c as u,N as b,af as y}from"./registerWidgets.08459ba9.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="04dfc51b-16c9-4b09-a7d6-7d323d1547b7",e._sentryDebugIdIdentifier="sentry-dbid-04dfc51b-16c9-4b09-a7d6-7d323d1547b7")}catch{}})();const g=r({__name:"ActionButton",props:{action:null},emits:["next"],setup(e,{emit:n}){const o=e,s=i(null);l(()=>{s.value&&o.action.setElement(s.value),c.addAction(o.action)});const d=()=>n("next");return(m,t)=>(f(),u("button",{ref_key:"element",ref:s,class:"next-button",onClick:t[0]||(t[0]=a=>d()),onKeydown:t[1]||(t[1]=y(a=>d(),["enter"]))},b(e.action.name),545))}});export{g as _};
//# sourceMappingURL=ActionButton.vue_vue_type_script_setup_true_lang.5de0a5b9.js.map
